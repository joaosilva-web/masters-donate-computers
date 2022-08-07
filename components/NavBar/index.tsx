import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState } from "react";
import { render } from "react-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { navData } from "../../utils/mocks/navData";
import {
  ListItemActived,
  Logo,
  Menu,
  MenuBars,
  MenuMobile,
  NavBarContainer,
} from "./styles";

export const NavBar = () => {
  const router = useRouter();
  const [screenSize, setScreenSize] = useState<number>();
  const [isMobile, setIsmobile] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // GET THE SCREEN SIZE
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.screen.width);
    });

    window.screen.width <= 1024? setIsmobile(true) : setIsmobile(false)
    
    console.log(screenSize);
  }, [screenSize]);

  // FUNCTION THAT RETURNS THE NAVIGATION DATA WITHIN A LIST
  function returnNavData() {
    return (
      <ul>
        {navData.map((item, index) =>
          router.pathname === item.path ? (
            <li className="active" key={index}>
              <Link href={item.path}>{item.label}</Link>
            </li>
          ) : (
            <li key={index}>
              <Link href={item.path}>{item.label}</Link>
            </li>
          )
        )}
      </ul>
    );
  }

  useEffect(()=> {
    setIsMobileMenuOpen(false)
  },[router.pathname])

  return (
    <NavBarContainer isMobileMenuOpen={isMobileMenuOpen}>
      <Logo onClick={() => router.push("/")}>
        <svg
          width={isMobile? "250" : "400"}
          viewBox="0 0 665 111"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="4"
            y="36"
            width="71"
            height="71"
            rx="4"
            stroke="#3F92CF"
            strokeWidth="8"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M62 71.5C62 83.9264 51.9264 94 39.5 94C27.0736 94 17 83.9264 17 71.5C17 59.0736 27.0736 49 39.5 49C51.9264 49 62 59.0736 62 71.5ZM28.9209 61.1729L34.732 59.9658L39.25 72.2676L43.768 59.9658L49.5791 61.1729C49.458 63.2713 49.5779 66.8663 50.3583 70.5685C51.15 74.324 52.54 77.7985 54.6741 80.043C55.8158 81.2437 55.7679 83.1426 54.5672 84.2843C53.3665 85.4259 51.4676 85.3781 50.3259 84.1774C47.6285 81.3405 45.9966 77.5881 45.012 73.9825L42.4308 81.0109C41.9408 82.3452 40.6025 83.1219 39.25 82.9551C37.8976 83.1219 36.5592 82.3452 36.0692 81.0109L33.488 73.9825C32.5034 77.5881 30.8715 81.3405 28.1741 84.1774C27.0324 85.3781 25.1335 85.4259 23.9328 84.2843C22.7321 83.1426 22.6842 81.2437 23.8259 80.043C25.96 77.7985 27.35 74.324 28.1417 70.5685C28.9221 66.8663 29.042 63.2713 28.9209 61.1729Z"
            fill={isMobileMenuOpen ? "black" : "white"}
          />
          <path
            d="M36.3821 34.0507C38.0856 34.8685 39.8685 33.0856 39.0507 31.3821L29.244 10.9551C28.9571 10.3576 28.3929 9.94099 27.7374 9.84274L14.2671 7.82361C12.8806 7.61578 11.7161 8.86204 12.0174 10.2313L14.7905 22.8338C14.9226 23.4344 15.3237 23.9409 15.8781 24.207L36.3821 34.0507Z"
            fill={isMobileMenuOpen ? "black" : "white"}
          />
          <path
            d="M42.0255 34.0507C40.3219 34.8685 38.5391 33.0856 39.3569 31.3821L49.1636 10.9551C49.4505 10.3576 50.0147 9.94099 50.6701 9.84274L64.1405 7.82361C65.527 7.61578 66.6915 8.86204 66.3902 10.2313L63.6171 22.8338C63.485 23.4344 63.0838 23.9409 62.5294 24.207L42.0255 34.0507Z"
            fill={isMobileMenuOpen ? "black" : "white"}
          />
          <path
            d="M83.98 88V46H92.02L109.9 75.64H105.64L123.22 46H131.2L131.32 88H122.2L122.14 59.98H123.82L109.78 83.56H105.4L91.06 59.98H93.1V88H83.98ZM135.765 88L154.485 46H164.085L182.865 88H172.665L157.305 50.92H161.145L145.725 88H135.765ZM145.125 79L147.705 71.62H169.305L171.945 79H145.125ZM201.022 88.72C197.662 88.72 194.442 88.28 191.362 87.4C188.282 86.48 185.802 85.3 183.922 83.86L187.222 76.54C189.022 77.82 191.142 78.88 193.582 79.72C196.062 80.52 198.562 80.92 201.082 80.92C203.002 80.92 204.542 80.74 205.702 80.38C206.902 79.98 207.782 79.44 208.342 78.76C208.902 78.08 209.182 77.3 209.182 76.42C209.182 75.3 208.742 74.42 207.862 73.78C206.982 73.1 205.822 72.56 204.382 72.16C202.942 71.72 201.342 71.32 199.582 70.96C197.862 70.56 196.122 70.08 194.362 69.52C192.642 68.96 191.062 68.24 189.622 67.36C188.182 66.48 187.002 65.32 186.082 63.88C185.202 62.44 184.762 60.6 184.762 58.36C184.762 55.96 185.402 53.78 186.682 51.82C188.002 49.82 189.962 48.24 192.562 47.08C195.202 45.88 198.502 45.28 202.462 45.28C205.102 45.28 207.702 45.6 210.262 46.24C212.822 46.84 215.082 47.76 217.042 49L214.042 56.38C212.082 55.26 210.122 54.44 208.162 53.92C206.202 53.36 204.282 53.08 202.402 53.08C200.522 53.08 198.982 53.3 197.782 53.74C196.582 54.18 195.722 54.76 195.202 55.48C194.682 56.16 194.422 56.96 194.422 57.88C194.422 58.96 194.862 59.84 195.742 60.52C196.622 61.16 197.782 61.68 199.222 62.08C200.662 62.48 202.242 62.88 203.962 63.28C205.722 63.68 207.462 64.14 209.182 64.66C210.942 65.18 212.542 65.88 213.982 66.76C215.422 67.64 216.582 68.8 217.462 70.24C218.382 71.68 218.842 73.5 218.842 75.7C218.842 78.06 218.182 80.22 216.862 82.18C215.542 84.14 213.562 85.72 210.922 86.92C208.322 88.12 205.022 88.72 201.022 88.72ZM233.598 88V53.92H220.158V46H256.758V53.92H243.318V88H233.598ZM270.928 62.92H291.148V70.48H270.928V62.92ZM271.648 80.2H294.508V88H261.988V46H293.728V53.8H271.648V80.2ZM302.242 88V46H320.422C324.182 46 327.422 46.62 330.142 47.86C332.862 49.06 334.962 50.8 336.442 53.08C337.922 55.36 338.662 58.08 338.662 61.24C338.662 64.36 337.922 67.06 336.442 69.34C334.962 71.58 332.862 73.3 330.142 74.5C327.422 75.7 324.182 76.3 320.422 76.3H307.642L311.962 72.04V88H302.242ZM328.942 88L318.442 72.76H328.822L339.442 88H328.942ZM311.962 73.12L307.642 68.56H319.882C322.882 68.56 325.122 67.92 326.602 66.64C328.082 65.32 328.822 63.52 328.822 61.24C328.822 58.92 328.082 57.12 326.602 55.84C325.122 54.56 322.882 53.92 319.882 53.92H307.642L311.962 49.3V73.12ZM360.163 88.72C356.803 88.72 353.583 88.28 350.503 87.4C347.423 86.48 344.943 85.3 343.063 83.86L346.363 76.54C348.163 77.82 350.283 78.88 352.723 79.72C355.203 80.52 357.703 80.92 360.223 80.92C362.143 80.92 363.683 80.74 364.843 80.38C366.043 79.98 366.923 79.44 367.483 78.76C368.043 78.08 368.323 77.3 368.323 76.42C368.323 75.3 367.883 74.42 367.003 73.78C366.123 73.1 364.963 72.56 363.523 72.16C362.083 71.72 360.483 71.32 358.723 70.96C357.003 70.56 355.263 70.08 353.503 69.52C351.783 68.96 350.203 68.24 348.763 67.36C347.323 66.48 346.143 65.32 345.223 63.88C344.343 62.44 343.903 60.6 343.903 58.36C343.903 55.96 344.543 53.78 345.823 51.82C347.143 49.82 349.103 48.24 351.703 47.08C354.343 45.88 357.643 45.28 361.603 45.28C364.243 45.28 366.843 45.6 369.403 46.24C371.963 46.84 374.223 47.76 376.183 49L373.183 56.38C371.223 55.26 369.263 54.44 367.303 53.92C365.343 53.36 363.423 53.08 361.543 53.08C359.663 53.08 358.123 53.3 356.923 53.74C355.723 54.18 354.863 54.76 354.343 55.48C353.823 56.16 353.563 56.96 353.563 57.88C353.563 58.96 354.003 59.84 354.883 60.52C355.763 61.16 356.923 61.68 358.363 62.08C359.803 62.48 361.383 62.88 363.103 63.28C364.863 63.68 366.603 64.14 368.323 64.66C370.083 65.18 371.683 65.88 373.123 66.76C374.563 67.64 375.723 68.8 376.603 70.24C377.523 71.68 377.983 73.5 377.983 75.7C377.983 78.06 377.323 80.22 376.003 82.18C374.683 84.14 372.703 85.72 370.063 86.92C367.463 88.12 364.163 88.72 360.163 88.72ZM407.422 88V46H424.522C429.002 46 432.922 46.9 436.282 48.7C439.682 50.46 442.322 52.92 444.202 56.08C446.082 59.24 447.022 62.88 447.022 67C447.022 71.12 446.082 74.76 444.202 77.92C442.322 81.08 439.682 83.56 436.282 85.36C432.922 87.12 429.002 88 424.522 88H407.422ZM411.862 84.16H424.282C428.002 84.16 431.222 83.44 433.942 82C436.702 80.52 438.842 78.5 440.362 75.94C441.882 73.34 442.642 70.36 442.642 67C442.642 63.6 441.882 60.62 440.362 58.06C438.842 55.5 436.702 53.5 433.942 52.06C431.222 50.58 428.002 49.84 424.282 49.84H411.862V84.16ZM475.352 88.36C472.192 88.36 469.252 87.84 466.532 86.8C463.852 85.72 461.512 84.22 459.512 82.3C457.552 80.34 456.012 78.08 454.892 75.52C453.812 72.92 453.272 70.08 453.272 67C453.272 63.92 453.812 61.1 454.892 58.54C456.012 55.94 457.552 53.68 459.512 51.76C461.512 49.8 463.852 48.3 466.532 47.26C469.212 46.18 472.152 45.64 475.352 45.64C478.512 45.64 481.432 46.18 484.112 47.26C486.792 48.3 489.112 49.78 491.072 51.7C493.072 53.62 494.612 55.88 495.692 58.48C496.812 61.08 497.372 63.92 497.372 67C497.372 70.08 496.812 72.92 495.692 75.52C494.612 78.12 493.072 80.38 491.072 82.3C489.112 84.22 486.792 85.72 484.112 86.8C481.432 87.84 478.512 88.36 475.352 88.36ZM475.352 84.4C477.872 84.4 480.192 83.98 482.312 83.14C484.472 82.26 486.332 81.04 487.892 79.48C489.492 77.88 490.732 76.04 491.612 73.96C492.492 71.84 492.932 69.52 492.932 67C492.932 64.48 492.492 62.18 491.612 60.1C490.732 57.98 489.492 56.14 487.892 54.58C486.332 52.98 484.472 51.76 482.312 50.92C480.192 50.04 477.872 49.6 475.352 49.6C472.832 49.6 470.492 50.04 468.332 50.92C466.172 51.76 464.292 52.98 462.692 54.58C461.132 56.14 459.892 57.98 458.972 60.1C458.092 62.18 457.652 64.48 457.652 67C457.652 69.48 458.092 71.78 458.972 73.9C459.892 76.02 461.132 77.88 462.692 79.48C464.292 81.04 466.172 82.26 468.332 83.14C470.492 83.98 472.832 84.4 475.352 84.4ZM507.324 88V46H510.984L539.964 82.48H538.044V46H542.424V88H538.764L509.844 51.52H511.764V88H507.324ZM549.413 88L568.613 46H572.993L592.193 88H587.513L569.873 48.58H571.673L554.033 88H549.413ZM556.973 76.78L558.293 73.18H582.713L584.033 76.78H556.973ZM605.191 88V49.84H590.431V46H624.391V49.84H609.631V88H605.191ZM635.445 64.78H657.645V68.56H635.445V64.78ZM635.925 84.16H661.185V88H631.485V46H660.285V49.84H635.925V84.16Z"
            fill={isMobileMenuOpen ? "black" : "white"}
          />
        </svg>
      </Logo>
      {isMobile && (
        <>
          <MenuBars
            isMobileMenuOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <IoMdClose size={"2rem"} />
            ) : (
              <FaBars size={"2rem"} />
            )}
          </MenuBars>

          <MenuMobile isMobileMenuOpen={isMobileMenuOpen}>
            {returnNavData()}
          </MenuMobile>
        </>
      )}

      {!isMobile && (
        <Menu>{returnNavData()}</Menu>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
