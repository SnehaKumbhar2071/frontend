import { useState } from "react";
import { Button, Checkbox, Label, TextInput, Card } from "flowbite-react";
import { HiMail, HiEye, HiEyeOff } from "react-icons/hi";

export function LoginComponent() {
    const [showPassword, setShowPassword] = useState(false);
    
    return (
        <div className="flex items-center justify-center bg-beige w-full h-full p-5 bg-[#fffaf2e7]">
            <Card className="w-full max-w-lg bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
                <h2 className="text-3xl font-bold text-center text-dark mb-6">Login</h2>
                <form className="flex flex-col gap-5">
                    <Label className="text-gray-600 text-lg">Email</Label>
                    <TextInput id="email" type="email" rightIcon={HiMail} placeholder="Enter your email" required />

                    <Label className="text-gray-600 text-lg">Password</Label>
                    <div className="relative">
                        <TextInput 
                            id="password" 
                            type={showPassword ? "text" : "password"} 
                            required 
                        />
                        <button 
                            type="button" 
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <HiEyeOff /> : <HiEye />}
                        </button>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember" className="text-gray-600">Remember me</Label>
                        </div>
                        <a href="#" className="text-red-600 hover:underline">Forgot password?</a>
                    </div>

                    <Button type="submit" className="bg-[#a96c4e] hover:bg-[#d57f54] text-white text-lg py-3 rounded-lg">
                        Login
                    </Button>
                </form>
            </Card>
        </div>
    );
}

export default LoginComponent;
