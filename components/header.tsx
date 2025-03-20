import { siteConfig } from "@/config/site";
import { User } from "@heroui/user";

export default function Header() {
    return (
        <header className="mb-8">
            <User
                avatarProps={{ src: siteConfig.data.user.avatar, size: "lg" }}
                name={siteConfig.data.user.name}
                description={siteConfig.data.user.description}
            />
        </header>
    )
  }