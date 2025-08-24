import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, Plus, Minus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  handler: (response: { razorpay_payment_id: string }) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes: {
    address: string;
  };
  theme: {
    color: string;
  };
}

interface RazorpayInstance {
  open: () => void;
}

declare global {
  interface Window {
    Razorpay: {
      new (options: RazorpayOptions): RazorpayInstance;
    };
  }
}

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, toggleCourseSelection } = useCart();
  const [deliveryMethod, setDeliveryMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  const [discountAmount, setDiscountAmount] = useState(0); // State for discount amount

  const selectedCourses = cart.filter((course) => course.selected);
  const totalPrice = selectedCourses.reduce((total, course) => total + (course.price * (course.quantity || 1)), 0);

  const handleApplyDiscount = () => {
    // Placeholder for discount logic
    if (discountCode.trim() !== "" && discountCode === "SAVE10") { // Example discount code
      setDiscountApplied(true);
      setDiscountAmount(totalPrice * 0.1); // 10% discount
      alert("Discount code 'SAVE10' applied!");
    } else {
      setDiscountApplied(false);
      setDiscountAmount(0);
      alert("Invalid discount code.");
    }
  };

  const finalPrice = totalPrice - discountAmount;

  const handlePayment = async () => {
    console.log("Final Price:", finalPrice);

    const options = {
      key: "YOUR_KEY_ID", // Replace with your Razorpay Key ID
      amount: finalPrice * 100, // Amount in the smallest currency unit (e.g., paise)
      currency: "INR",
      name: "DSITTC",
      description: "Course Purchase",
      handler: function (response: { razorpay_payment_id: string }) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Customer Address",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center text-muted-foreground">Your cart is empty.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="space-y-4">
                {cart.map((course) => (
                  <Card key={course.id} className="flex items-center p-4">
                    <Checkbox
                      checked={course.selected}
                      onCheckedChange={() => toggleCourseSelection(course.id)}
                      className="mr-4"
                    />
                    <img src={course.image} alt={course.name} className="w-24 h-24 object-cover rounded-md mr-4" />
                    <div className="flex-grow">
                      <h2 className="font-semibold">{course.name}</h2>
                      <p className="text-primary font-bold">₹{(course.price * (course.quantity || 1)).toLocaleString()}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="icon" onClick={() => updateQuantity(course.id, (course.quantity || 1) - 1)}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="font-medium">{course.quantity}</span>
                      <Button variant="outline" size="icon" onClick={() => updateQuantity(course.id, (course.quantity || 1) + 1)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => removeFromCart(course.id)}>
                      <Trash2 className="h-5 w-5 text-destructive" />
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{totalPrice.toLocaleString()}</span>
                  </div>
                  {/* Delivery Method */}
                  <div className="space-y-2">
                    <Label className="text-lg font-semibold">Delivery Method</Label>
                    <RadioGroup defaultValue={deliveryMethod} onValueChange={setDeliveryMethod}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard">Standard Delivery</Label>
                      </div>
                      {/* Add more delivery options if needed */}
                    </RadioGroup>
                  </div>

                  {/* Payment Method */}
                  <div className="space-y-2">
                    <Label className="text-lg font-semibold">Payment Method</Label>
                    <RadioGroup defaultValue={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="credit-card" id="credit-card" />
                        <Label htmlFor="credit-card">Credit Card</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="upi" id="upi" />
                        <Label htmlFor="upi">UPI / QR Code</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="debit-card" id="debit-card" />
                        <Label htmlFor="debit-card">Debit Card</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Discount Code */}
                  <div className="space-y-2">
                    <Label className="text-lg font-semibold">Discount Code</Label>
                    <div className="flex space-x-2">
                      <Input
                        type="text"
                        placeholder="Enter discount code"
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                      />
                      <Button variant="outline" onClick={handleApplyDiscount}>Apply</Button>
                    </div>
                    {discountApplied && (
                      <p className="text-sm text-green-500">Discount applied successfully!</p>
                    )}
                  </div>

                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹{finalPrice.toLocaleString()}</span>
                  </div>
                  <Button className="w-full" onClick={handlePayment}>
                    Proceed to Checkout
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
