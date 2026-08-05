import { MapPin, Phone, Truck } from "lucide-react";
import Container from "@/components/ui/container/Container";

export default function TopBar() {
  return (
    <div className="hidden border-b border-gray-200 bg-[#234D20] py-2 text-white lg:block">
      <Container>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Store Location</span>
            </div>

            <div className="flex items-center gap-2">
              <Truck size={16} />
              <span>Free Delivery on Orders Over $50</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+1 (800) 123-4567</span>
          </div>
        </div>
      </Container>
    </div>
  );
}