import { useState, useCallback } from "react";
import { Button, Label, TextInput, Card } from "flowbite-react";
import { HiBookOpen, HiHashtag, HiArchive, HiUpload, HiX } from "react-icons/hi";

export function DonateForm() {
    const [formData, setFormData] = useState({
        ISBN: "",
        qty: "",
        age: "",
        book_name: "",
        img_link: null
    });
    const [dragActive, setDragActive] = useState(false);
    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleDrag = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    }, []);

    const createPreview = (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            setFormData(prevState => ({
                ...prevState,
                img_link: file
            }));
            createPreview(file);
        }
    }, []);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFormData(prevState => ({
                ...prevState,
                img_link: file
            }));
            createPreview(file);
        }
    };

    const removeFile = () => {
        setFormData(prevState => ({
            ...prevState,
            img_link: null
        }));
        setPreview(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Donation Submitted:", formData);
        alert("Donation Submitted Successfully!");
    };

    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-[#fffaf2e7] p-4 sm:p-6">
            <Card className="w-full max-w-2xl p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border-0">
                <div className="text-center mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#302a24] mb-2">Donate a Book</h2>
                    <p className="text-sm sm:text-base text-[#8f9a92]">Help spread knowledge by donating your pre-loved books</p>
                </div>
                
                <form className="flex flex-col gap-4 sm:gap-6" onSubmit={handleSubmit}>
                    <div className="space-y-1 sm:space-y-2">
                        <Label htmlFor="book_name" className="text-[#302a24] font-medium text-sm sm:text-base">Book Name</Label>
                        <TextInput 
                            id="book_name" 
                            type="text" 
                            rightIcon={HiBookOpen} 
                            placeholder="Enter book name" 
                            value={formData.book_name} 
                            onChange={handleChange} 
                            required 
                            className="bg-white border-[#8f9a92] text-[#302a24] focus:ring-2 focus:ring-[#a96c4e] focus:border-[#a96c4e] placeholder-[#8f9a92] text-sm sm:text-base"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-1 sm:space-y-2">
                            <Label htmlFor="ISBN" className="text-[#302a24] font-medium text-sm sm:text-base">ISBN</Label>
                            <TextInput 
                                id="ISBN" 
                                type="text" 
                                rightIcon={HiHashtag} 
                                placeholder="Enter ISBN" 
                                value={formData.ISBN} 
                                onChange={handleChange} 
                                className="bg-white border-[#8f9a92] text-[#302a24] focus:ring-2 focus:ring-[#a96c4e] focus:border-[#a96c4e] placeholder-[#8f9a92] text-sm sm:text-base"
                            />
                        </div>

                        <div className="space-y-1 sm:space-y-2">
                            <Label htmlFor="qty" className="text-[#302a24] font-medium text-sm sm:text-base">Quantity</Label>
                            <TextInput 
                                id="qty" 
                                type="number" 
                                rightIcon={HiArchive} 
                                placeholder="Enter quantity" 
                                value={formData.qty} 
                                onChange={handleChange} 
                                required 
                                className="bg-white border-[#8f9a92] text-[#302a24] focus:ring-2 focus:ring-[#a96c4e] focus:border-[#a96c4e] placeholder-[#8f9a92] text-sm sm:text-base"
                                min="1"
                            />
                        </div>
                    </div>

                    <div className="space-y-1 sm:space-y-2">
                        <Label htmlFor="age" className="text-[#302a24] font-medium text-sm sm:text-base">Age of the Book</Label>
                        <TextInput 
                            id="age" 
                            type="text" 
                            placeholder="e.g. 2 years, Like New, etc." 
                            value={formData.age} 
                            onChange={handleChange} 
                            required 
                            className="bg-white border-[#8f9a92] text-[#302a24] focus:ring-2 focus:ring-[#a96c4e] focus:border-[#a96c4e] placeholder-[#8f9a92] text-sm sm:text-base"
                        />
                    </div>

                    <div className="space-y-1 sm:space-y-2">
                        <Label className="text-[#302a24] font-medium text-sm sm:text-base">Book Image</Label>
                        <div 
                            className={`relative border-2 border-dashed rounded-lg p-4 sm:p-6 text-center transition-colors ${dragActive ? 'border-[#a96c4e] bg-[#fff6ebe7]' : 'border-[#8f9a92] bg-white'}`}
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                        >
                            {preview ? (
                                <div className="flex flex-col items-center">
                                    <div className="relative mb-2">
                                        <img 
                                            src={preview} 
                                            alt="Preview" 
                                            className="max-h-40 max-w-full rounded-md object-contain border border-[#8f9a92]"
                                        />
                                        <button
                                            type="button"
                                            onClick={removeFile}
                                            className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-sm hover:bg-gray-100"
                                        >
                                            <HiX className="h-4 w-4 text-[#8f9a92] hover:text-[#a96c4e]" />
                                        </button>
                                    </div>
                                    <p className="text-xs text-[#8f9a92] truncate max-w-full">
                                        {formData.img_link.name}
                                    </p>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
                                    <HiUpload className="h-6 w-6 sm:h-8 sm:w-8 text-[#8f9a92]" />
                                    <p className="text-xs sm:text-sm text-[#8f9a92]">
                                        <span className="text-[#302a24] font-medium">Drag & drop your file here or</span>
                                        <label htmlFor="img_link" className="cursor-pointer text-[#a96c4e] hover:text-[#8f5a3c] font-medium ml-1">
                                            browse files
                                        </label>
                                    </p>
                                    <p className="text-xs text-[#8f9a92]">PNG, JPG, JPEG up to 5MB</p>
                                </div>
                            )}
                            <input 
                                id="img_link" 
                                type="file" 
                                className="hidden" 
                                onChange={handleFileChange} 
                                accept="image/png, image/jpeg, image/jpg"
                                required={!formData.img_link}
                            />
                        </div>
                    </div>

                    <Button 
                        type="submit" 
                        className="mt-2 sm:mt-4 bg-[#a96c4e] hover:bg-[#8f5a3c] text-[#fdfaf6] font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-md transition-all duration-300 text-sm sm:text-base"
                    >
                        Confirm Donation
                    </Button>
                </form>
            </Card>
        </div>
    );
}

export default DonateForm;