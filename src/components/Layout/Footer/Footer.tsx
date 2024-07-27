import SecondaryLogo from "@/components/SecondaryLogo";

export default function Footer() {
  return (
    <footer className="flex h-fit w-full flex-col justify-center gap-6 py-8 text-xs xl:mb-8 xl:h-fit sm:px-4">
      <div className="flex w-full flex-col text-sm">
        <h3 className="font-medium">Our cooks are from</h3>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-start text-sm font-light">
            <p>Ha Noi</p>
            <p>Ho Chi Minh</p>
            <p>Da Nang</p>
            <p>Can Tho</p>
            <p>Quang Ninh</p>
          </div>
          <div className="flex flex-col items-start text-sm font-light">
            <p>Ha Noi</p>
            <p>Ho Chi Minh</p>
            <p>Da Nang</p>
            <p>Can Tho</p>
            <p>Quang Ninh</p>
          </div>
          <div className="flex flex-col items-start text-sm font-light">
            <p>Ha Noi</p>
            <p>Ho Chi Minh</p>
            <p>Da Nang</p>
            <p>Can Tho</p>
            <p>Quang Ninh</p>
          </div>
          <div className="flex flex-col items-start text-sm font-light">
            <p>Ha Noi</p>
            <p>Ho Chi Minh</p>
            <p>Da Nang</p>
            <p>Can Tho</p>
            <p>Quang Ninh</p>
          </div>
          <div className="flex flex-col items-start text-sm font-light">
            <p>Ha Noi</p>
            <p>Ho Chi Minh</p>
            <p>Da Nang</p>
            <p>Can Tho</p>
            <p>Quang Ninh</p>
          </div>
        </div>
      </div>
      <hr className="my-2 h-0.5 w-full bg-[#424242]"></hr>
      <div>
        <div className="flex w-1/2 flex-row justify-between">
          <div className="text-sm">
            <h3 className="font-medium">Company</h3>
            <div className="flex flex-col items-start text-sm font-light">
              <p>About us</p>
              <p>Team</p>
              <p>Careers</p>
              <p>Blog</p>
            </div>
          </div>
          <div className="text-sm">
            <h3 className="font-medium">Contact</h3>
            <div className="flex flex-col items-start text-sm font-light">
              <p>Help & Support</p>
              <p>Partner with us</p>
              <p>Ride with us</p>
            </div>
          </div>
          <div className="text-sm">
            <h3 className="font-medium">Legal</h3>
            <div className="flex flex-col items-start text-sm font-light">
              <p>Terms & Conditions</p>
              <p>Refund & Cancellation</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </div>
          </div>
        </div>
        <div className="">
          <p>FOLLOW US</p>
        </div>
      </div>
      <hr className="my-2 h-0.5 w-full bg-[#424242]"></hr>
      <div className="flex flex-row justify-between">
        <p>All rights Reserved</p>
        <p>Made by HOMECUISINE</p>
      </div>
    </footer>
  );
}
