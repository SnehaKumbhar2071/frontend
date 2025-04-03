import { useState } from "react";
import { Button, Label, TextInput, Card, Select } from "flowbite-react";
import { HiMail, HiUser, HiPhone, HiLocationMarker, HiHome } from "react-icons/hi";

export function SignupComponent() {
    const [location, setLocation] = useState({ latitude: "", longitude: "" });
    const [userType, setUserType] = useState("DONOR");

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            });
        }
    };

    const handleTypeChange = (e) => {
        setUserType(e.target.value);
    };

    
    const getNameLabel = () => {
        switch(userType) {
            case "Donor": return "Donor Name";
            case "School": return "School Name";
            case "NGO": return "NGO Name";
            default: return "Name";
        }
    };

    const getAddressLabel = () => {
        switch(userType) {
            case "Donor": return "Donor Address ";
            case "School": return "School Address";
            case "NGO": return "NGO Address";
            default: return "Address";
        }
    };


    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 bg-[#fffaf2e7]">
            <div className="flex items-center justify-center w-full">
                <Card className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-gray-200">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-dark mb-4 sm:mb-6">Sign Up</h2>
                    <form className="flex flex-col gap-4 sm:gap-5">
                        <div>
                            <Label htmlFor="type" className="text-gray-600 text-base sm:text-lg">Type</Label>
                            <Select 
                                id="type" 
                                required
                                value={userType}
                                onChange={handleTypeChange}
                            >
                                <option value="Donor">Donor</option>
                                <option value="School">School</option>
                                <option value="NGO">NGO</option>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="name" className="text-gray-600 text-base sm:text-lg">{getNameLabel()}</Label>
                            <TextInput 
                                id="name" 
                                type="text" 
                                rightIcon={HiUser} 
                                placeholder={`Enter name`} 
                                required 
                            />
                        </div>
                        
                        <div>
                            <Label htmlFor="address" className="text-gray-600 text-base sm:text-lg">{getAddressLabel()}</Label>
                            <TextInput 
                                id="address" 
                                type="text" 
                                rightIcon={HiHome} 
                                placeholder={`Enter address`} 
                                required 
                            />
                        </div>
                        
                        <div>
                            <Label htmlFor="email" className="text-gray-600 text-base sm:text-lg">
                                {userType === "NGO" ? "NGO Email" : "Email"}
                            </Label>
                            <TextInput 
                                id="email" 
                                type="email" 
                                rightIcon={HiMail} 
                                placeholder={`Enter email`} 
                                required 
                            />
                        </div>
                        
                        <div>
                            <Label htmlFor="phone" className="text-gray-600 text-base sm:text-lg">
                                {userType === "NGO" ? "NGO Phone" : "Phone"}
                            </Label>
                            <TextInput 
                                id="phone" 
                                type="tel" 
                                rightIcon={HiPhone} 
                                placeholder={`Enter phone number`} 
                                required 
                            />
                        </div>
                        
                        {/* <div>
                            <Label className="text-gray-600 text-base sm:text-lg">Location Coordinates</Label>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="flex-1">
                                    <TextInput id="latitude" type="text" value={location.latitude} placeholder="Latitude" readOnly />
                                </div>
                                <div className="flex-1">
                                    <TextInput id="longitude" type="text" value={location.longitude} placeholder="Longitude" readOnly />
                                </div>
                                <Button 
                                    type="button" 
                                    onClick={getLocation} 
                                    className="bg-[#a96c4e] hover:bg-[#8f5a3c] text-white w-full sm:w-auto"
                                >
                                    Get Location
                                </Button>
                            </div>
                        </div> */}
                        
                        <Button 
                            type="submit" 
                            className="bg-[#a96c4e] hover:bg-[#8f5a3c] text-white text-base sm:text-lg py-2 sm:py-3 rounded-lg"
                        >
                            Sign Up
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
}

export default SignupComponent;