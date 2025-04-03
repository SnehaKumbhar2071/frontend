import { Card, Button, Badge } from "flowbite-react";
import { HiDownload, HiBookOpen, HiAcademicCap, HiUsers, HiCalendar } from "react-icons/hi";
import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ImpactPage() {
    const [isGenerating, setIsGenerating] = useState(false);
    const [donorData, setDonorData] = useState({
        name: "",
        booksDonated: 0,
        schoolsHelped: 0,
        childrenImpacted: 0
    });

    // Fetch donor data from your database/API
    useEffect(() => {
        // Replace this with your actual data fetching logic
        const fetchDonorData = async () => {
            // Example API call (replace with your actual endpoint)
            // const response = await fetch('/api/donor-data');
            // const data = await response.json();

            // Mock data - replace with your actual data fetching
            const mockData = {
                name: "Sarah Johnson", // This would come from your db
                booksDonated: 1243,    // This would come from your db
                schoolsHelped: 28,     // This would come from your db
                // childrenImpacted: 5600 // This would come from your db
            };

            setDonorData(mockData);
        };

        fetchDonorData();
    }, []);

    const generateCertificate = () => {
        setIsGenerating(true);
        const input = document.getElementById("certificate-template");

        html2canvas(input, {
            scale: 2,
            logging: false,
            useCORS: true,
            allowTaint: true
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('landscape');
            const imgWidth = 280;
            const imgHeight = canvas.height * imgWidth / canvas.width;

            pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
            pdf.save('book-donation-certificate.pdf');
            setIsGenerating(false);
        });
    };

    return (
        <div className="h-full bg-[#fffaf2] py-8 px-4 sm:px-6 w-full">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    {/* <Badge color="success" className="mb-4 mx-auto w-max">
            Making an Impact
          </Badge> */}
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Impact</h1>
                    <p className="text-gray-600">See how your donations are making a difference</p>
                </div>

                {/* Donation Stats */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-8">
                    <StatCard
                        icon={<HiBookOpen className="h-6 w-6" />}
                        value={donorData.booksDonated}
                        label="Books Donated"
                        color="bg-[#f0e6d2]"
                        accent="text-[#a96c4e]"
                        className="m"
                    />
                    <StatCard
                        icon={<HiAcademicCap className="h-6 w-6" />}
                        value={donorData.schoolsHelped}
                        label="Schools Helped"
                        color="bg-[#e6f0d2]"
                        accent="text-[#5a8f3c]"
                    />
                    {/* <StatCard 
            icon={<HiUsers className="h-6 w-6" />}
            value={donorData.childrenImpacted}
            label="Children Impacted"
            color="bg-[#d2e6f0]"
            accent="text-[#3c7a8f]"
          />
          <StatCard 
            icon={<HiCalendar className="h-6 w-6" />}
            value="5"
            label="Month Streak"
            color="bg-[#f0d2e6]"
            accent="text-[#8f3c7a]"
          /> */}
                </div>

                {/* Certificate Download */}
                <Card className="bg-white">
                    <div className="p-6">
                        <div className="text-center mb-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">Your Donation Certificate</h2>
                            <p className="text-gray-600">
                                Download a certificate to recognize your contribution
                            </p>
                        </div>

                        {/* Certificate Template */}
                        <div id="certificate-template" className="bg-[#fffaf2] border-2 border-[#a96c4e] p-8 rounded-lg mb-6 relative overflow-hidden">
                            {/* Decorative elements */}
                            <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-[#a96c4e] rounded-tl-lg"></div>
                            <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-[#a96c4e] rounded-tr-lg"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-[#a96c4e] rounded-bl-lg"></div>
                            <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-[#a96c4e] rounded-br-lg"></div>

                            {/* Certificate content */}
                            <div className="text-center relative z-10">
                                {/* Header with decorative elements */}
                                <div className="mb-6">
                                    <div className="text-xs text-[#a96c4e] font-medium tracking-widest mb-2">
                                        CERTIFICATE OF APPRECIATION
                                    </div>
                                    <h3 className="text-3xl font-bold text-[#a96c4e] mb-4 relative inline-block">
                                        Book Donation Honor
                                    </h3>
                                    {/* <div className="w-32 h-1 bg-[#a96c4e] mx-auto mb-6"></div> */}
                                </div>

                                {/* Main content */}
                                <p className="text-gray-600 italic mb-8">
                                    This certificate is proudly presented to
                                </p>

                                <h4 className="text-2xl font-bold text-gray-800 mb-8 pb-4 border-b-2 border-[#a96c4e] inline-block px-12 relative">
                                    {donorData.name}
                                </h4>

                                <p className="text-gray-600 mb-4">
                                    For your generous contribution of
                                </p>
                                <p className="text-2xl font-bold text-[#a96c4e] mb-4">
                                    {donorData.booksDonated} Books
                                </p>


                                {/* Organization footer */}
                                <div className=" pt-4 border-t border-gray-200 inline-block">
                                    <div className="text-xs text-gray-500">Presented by</div>
                                    <div className="font-bold text-gray-700">Your Organization Name</div>
                                </div>
                            </div>
                        </div>

                        <Button
                            onClick={generateCertificate}
                            disabled={isGenerating}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            <HiDownload className="mr-2 h-5 w-5" />
                            {isGenerating ? 'Generating...' : 'Download Certificate as PDF'}
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}

// Stat Card Component
function StatCard({ icon, value, label, color, accent }) {
    return (
        <Card className={`${color} border-0 shadow-none`}>
            <div className="flex items-center p-4">
                <div className={`p-2 rounded-full ${accent} bg-white mr-3`}>
                    {icon}
                </div>
                <div>
                    <p className="text-xl font-bold text-gray-800">{value}</p>
                    <p className="text-sm text-gray-600">{label}</p>
                </div>
            </div>
        </Card>
    );
}