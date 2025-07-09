import EducationSection from "@/components/EducationSection";
import ProfileSection from "@/components/ProfileSection";
import SocialSection from "@/components/SocialSection";

const AboutPage = () => {
    return (
        <div className="w-full">
            <ProfileSection/>
            <EducationSection/>
            <SocialSection/>
        </div>
    )
}

export default AboutPage;