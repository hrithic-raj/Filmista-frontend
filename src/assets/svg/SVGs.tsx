import { useLocation } from "react-router-dom";

export const LogoSVG = () => {
  return (
      <svg
        className="w-10 h-auto transition-transform transform hover:scale-110"
        width="216"
        height="239"
        viewBox="0 0 216 239"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M62 95.5L1 60V179L64 142.5C84.8 121.3 71.3333 102.333 62 95.5Z"
          fill="#80CFC4"
        />
        <path
          d="M1 22.612V45.612L85 93.1121C111 111.912 97.8333 134.945 88 144.112L1 194.112V212.612C4.6 236.612 26.8333 239.612 37.5 238.112L204.5 142.112C223.7 122.912 212.5 103.445 204.5 96.1121L43 3.11206C37.8 0.71206 31.8333 0.112044 29.5 0.112036C13.1 -1.48796 3.66667 14.4454 1 22.612Z"
          fill="#7CDACD"
        />
        <path
          d="M88 144L0 194.5V212.5C4 232.5 19.3333 238.167 26.5 238.5L88 144Z"
          fill="#417D75"
        />
      </svg>
  );
};

export const HeartSVG = () => {
  const location = useLocation();
  return (
      <svg
        className={`w-12 h-12 lg:w-6 lg:h-6 hover:text-[#5cfef0] transition-colors duration-300 ${location.pathname === '/watchlist'? 'text-[#5cfef0]': 'text-[#E9E9E9]'}`}
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.0005 8.25C21.0005 5.76472 18.9018 3.75 16.313 3.75C14.3774 3.75 12.7158 4.87628 12.0005 6.48342C11.2852 4.87628 9.62361 3.75 7.68799 3.75C5.09915 3.75 3.00049 5.76472 3.00049 8.25C3.00049 15.4706 12.0005 20.25 12.0005 20.25C12.0005 20.25 21.0005 15.4706 21.0005 8.25Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
  );
};
export const HeartSVGNav = () => {
  return (
      <svg
        className="sm:min-w-8 sm:min-h-8 text-white hover:text-[#5cfef0] transition-colors duration-300"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.0005 8.25C21.0005 5.76472 18.9018 3.75 16.313 3.75C14.3774 3.75 12.7158 4.87628 12.0005 6.48342C11.2852 4.87628 9.62361 3.75 7.68799 3.75C5.09915 3.75 3.00049 5.76472 3.00049 8.25C3.00049 15.4706 12.0005 20.25 12.0005 20.25C12.0005 20.25 21.0005 15.4706 21.0005 8.25Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
  );
};

export const UserSVG = () => {
  const location = useLocation();
  return (
      <svg
        className={`w-12 h-12 lg:w-6 lg:h-6 hover:text-[#5cfef0] transition-colors duration-300 ${location.pathname === '/profile'? 'text-[#5cfef0]': 'text-[#E9E9E9]'}`}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.7503 6C15.7503 8.07107 14.0714 9.75 12.0003 9.75C9.92926 9.75 8.25033 8.07107 8.25033 6C8.25033 3.92893 9.92926 2.25 12.0003 2.25C14.0714 2.25 15.7503 3.92893 15.7503 6Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.50146 20.1182C4.57177 16.0369 7.9022 12.75 12.0003 12.75C16.0986 12.75 19.429 16.0371 19.4992 20.1185C17.2164 21.166 14.6767 21.75 12.0006 21.75C9.32433 21.75 6.78442 21.1659 4.50146 20.1182Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
  );
};
export const StoreSVG = () => {
  const location = useLocation();
  return (
    <svg
    className={`w-12 h-12 lg:w-6 lg:h-6 hover:stroke-[#5cfef0] transition-colors duration-300 ${location.pathname === '/store' ? 'stroke-[#5cfef0]' : 'stroke-[#E9E9E9]'}`}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M2.25 3H3.63568C4.14537 3 4.59138 3.34265 4.7227 3.83513L5.1059 5.27209M7.5 14.25C5.84315 14.25 4.5 15.5931 4.5 17.25H20.25M7.5 14.25H18.7183C19.8394 11.9494 20.8177 9.56635 21.6417 7.1125C16.88 5.89646 11.8905 5.25 6.75 5.25C6.20021 5.25 5.65214 5.2574 5.1059 5.27209M7.5 14.25L5.1059 5.27209M6 20.25C6 20.6642 5.66421 21 5.25 21C4.83579 21 4.5 20.6642 4.5 20.25C4.5 19.8358 4.83579 19.5 5.25 19.5C5.66421 19.5 6 19.8358 6 20.25ZM18.75 20.25C18.75 20.6642 18.4142 21 18 21C17.5858 21 17.25 20.6642 17.25 20.25C17.25 19.8358 17.5858 19.5 18 19.5C18.4142 19.5 18.75 19.8358 18.75 20.25Z" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>  
  );
};


export const SettingsSVG = () => {
  const location = useLocation();
  return (
      <svg
        className={`w-12 h-12 lg:w-6 lg:h-6 hover:text-[#5cfef0] transition-colors duration-300 ${location.pathname === '/settings' ? 'text-[#5cfef0]' : 'text-[#E9E9E9]'}`}
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.59426 3.94017C9.68467 3.39771 10.154 3.00012 10.704 3.00012H13.2979C13.8479 3.00012 14.3172 3.39771 14.4076 3.94017L14.6211 5.22122C14.6835 5.59527 14.9334 5.90683 15.2652 6.09048C15.3394 6.13154 15.4127 6.17396 15.4851 6.21769C15.8102 6.41396 16.2055 6.47499 16.5611 6.34178L17.7779 5.8859C18.2929 5.69297 18.8719 5.90063 19.1469 6.3769L20.4439 8.62333C20.7188 9.0996 20.6092 9.70485 20.1846 10.0544L19.1802 10.8812C18.8877 11.122 18.7427 11.4938 18.7498 11.8727C18.7505 11.915 18.7509 11.9575 18.7509 12.0001C18.7509 12.0427 18.7505 12.0852 18.7498 12.1276C18.7427 12.5064 18.8877 12.8782 19.1802 13.119L20.1846 13.9458C20.6092 14.2954 20.7188 14.9006 20.4439 15.3769L19.1469 17.6233C18.8719 18.0996 18.2929 18.3073 17.7779 18.1143L16.5611 17.6585C16.2055 17.5252 15.8102 17.5863 15.4851 17.7825C15.4127 17.8263 15.3394 17.8687 15.2652 17.9098C14.9334 18.0934 14.6835 18.405 14.6211 18.779L14.4076 20.0601C14.3172 20.6025 13.8479 21.0001 13.2979 21.0001H10.704C10.154 21.0001 9.68467 20.6025 9.59426 20.0601L9.38075 18.779C9.31841 18.405 9.06844 18.0934 8.73667 17.9098C8.6625 17.8687 8.58918 17.8263 8.51674 17.7826C8.19171 17.5863 7.79638 17.5253 7.44082 17.6585L6.22395 18.1143C5.70896 18.3073 5.12996 18.0996 4.85499 17.6233L3.55801 15.3769C3.28304 14.9006 3.39269 14.2954 3.81727 13.9459L4.82162 13.119C5.11413 12.8782 5.25913 12.5064 5.25211 12.1276C5.25133 12.0852 5.25094 12.0427 5.25094 12.0001C5.25094 11.9575 5.25133 11.9151 5.25211 11.8727C5.25913 11.4939 5.11413 11.122 4.82162 10.8812L3.81727 10.0544C3.39269 9.70487 3.28304 9.09961 3.55801 8.62335L4.85499 6.37691C5.12996 5.90065 5.70896 5.69298 6.22395 5.88591L7.4408 6.34179C7.79636 6.475 8.1917 6.41397 8.51673 6.2177C8.58917 6.17396 8.66249 6.13154 8.73667 6.09048C9.06844 5.90683 9.31841 5.59527 9.38075 5.22122L9.59426 3.94017Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3438 15 9.0007 13.6569 9.0007 12C9.0007 10.3432 10.3438 9.00004 12.0007 9.00004C13.6576 9.00004 15.0007 10.3432 15.0007 12Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
  );
};

export const HomeSVG = () => {
  const location = useLocation();
  return (
      <svg
        className={`w-12 h-12 lg:w-6 lg:h-6 fill-current hover:text-[#5cfef0] transition-colors duration-300 ${location.pathname === '/' ? 'text-[#5cfef0]' : 'text-[#E9E9E9]'}`}
        width="24"
        height="24"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.49332 21.7247H10.8195V16.144C10.8195 15.8277 10.9259 15.5628 11.1388 15.3492C11.3517 15.1357 11.6148 15.0285 11.9282 15.0278H16.3631C16.6772 15.0278 16.9407 15.1349 17.1536 15.3492C17.3665 15.5636 17.4726 15.8285 17.4718 16.144V21.7247H20.798V11.6793L14.1457 6.65663L7.49332 11.6793V21.7247ZM5.27588 21.7247V11.6793C5.27588 11.3259 5.3546 10.991 5.51204 10.6748C5.66948 10.3585 5.88642 10.0981 6.16286 9.89348L12.8152 4.87078C13.2032 4.57314 13.6467 4.42432 14.1457 4.42432C14.6446 4.42432 15.0881 4.57314 15.4761 4.87078L22.1285 9.89348C22.4056 10.0981 22.623 10.3585 22.7804 10.6748C22.9378 10.991 23.0162 11.3259 23.0154 11.6793V21.7247C23.0154 22.3386 22.7981 22.8643 22.3635 23.3019C21.9289 23.7394 21.4071 23.9578 20.798 23.957H16.3631C16.049 23.957 15.7858 23.8499 15.5737 23.6356C15.3616 23.4213 15.2551 23.1564 15.2544 22.8409V17.2601H13.0369V22.8409C13.0369 23.1571 12.9305 23.4224 12.7176 23.6367C12.5047 23.851 12.2416 23.9578 11.9282 23.957H7.49332C6.88353 23.957 6.36169 23.7386 5.92781 23.3019C5.49393 22.8651 5.27662 22.3394 5.27588 21.7247Z"
        />
      </svg>
  );
};
export const starOutline  = () => {
  return (
    <svg
      width="20" 
      height="19" 
      viewBox="0 0 20 19" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
    <path d="M11.3882 1.41339L11.3882 1.41341L13.1422 5.58243L13.2602 5.86298L13.5637 5.88697L18.1156 6.24696C19.4557 6.35342 19.9789 7.9929 18.974 8.84402L18.974 8.84405L15.5059 11.7821L15.2707 11.9813L15.3431 12.2809L16.4031 16.6707C16.7084 17.9379 15.3088 18.972 14.1556 18.2756C14.1556 18.2756 14.1556 18.2756 14.1556 18.2756L10.2585 15.9216L10.0001 15.7655L9.74156 15.9216L5.84447 18.2746L5.84443 18.2746C4.69097 18.9712 3.29172 17.9367 3.59692 16.6708L4.65691 12.2789L4.72924 11.9792L4.494 11.78L1.02595 8.84302C1.02594 8.84301 1.02593 8.843 1.02593 8.84299C0.0207614 7.99159 0.544711 6.35163 1.88413 6.24599L1.88435 6.24597L6.43645 5.88497L6.73973 5.86091L6.85776 5.58051L8.6118 1.41349L8.61184 1.41339C9.12415 0.195538 10.8758 0.195538 11.3882 1.41339Z" stroke="#46CEC2"/>
    </svg>
  );
};
export const starFilled = () => {
  return (
    <svg 
      width="20" 
      height="19" 
      viewBox="0 0 20 19" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.3882 1.41339L11.3882 1.41341L13.1422 5.58243L13.2602 5.86298L13.5637 5.88697L18.1156 6.24696C19.4557 6.35342 19.9789 7.9929 18.974 8.84402L18.974 8.84405L15.5059 11.7821L15.2707 11.9813L15.3431 12.2809L16.4031 16.6707C16.7084 17.9379 15.3088 18.972 14.1556 18.2756C14.1556 18.2756 14.1556 18.2756 14.1556 18.2756L10.2585 15.9216L10.0001 15.7655L9.74156 15.9216L5.84447 18.2746L5.84443 18.2746C4.69097 18.9712 3.29172 17.9367 3.59692 16.6708L4.65691 12.2789L4.72924 11.9792L4.494 11.78L1.02595 8.84302C1.02594 8.84301 1.02593 8.843 1.02593 8.84299C0.0207614 7.99159 0.544711 6.35163 1.88413 6.24599L1.88435 6.24597L6.43645 5.88497L6.73973 5.86091L6.85776 5.58051L8.6118 1.41349L8.61184 1.41339C9.12415 0.195538 10.8758 0.195538 11.3882 1.41339Z" fill="#46CEC2" stroke="#46CEC2"/>
    </svg>

  );
};
export const TickSVG = () => {
  return (
      <svg 
      className="absolute transition-colors duration-300"
        width="69" 
        height="68" 
        viewBox="0 0 69 68" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
      <path 
        d="M18.75 34L32.25 45.0714L50.25 22.9286M34.5 65C30.3634 65 26.2672 64.1982 22.4455 62.6403C18.6237 61.0824 15.1512 58.7989 12.2261 55.9203C9.30109 53.0417 6.98082 49.6243 5.3978 45.8632C3.81477 42.1021 3 38.071 3 34C3 29.929 3.81477 25.8979 5.3978 22.1368C6.98082 18.3757 9.30109 14.9583 12.2261 12.0797C15.1512 9.20107 18.6237 6.91763 22.4455 5.35973C26.2672 3.80184 30.3634 3 34.5 3C42.8543 3 50.8665 6.26606 56.7739 12.0797C62.6813 17.8933 66 25.7783 66 34C66 42.2217 62.6813 50.1067 56.7739 55.9203C50.8665 61.7339 42.8543 65 34.5 65Z" 
        stroke="#46CEC2" 
        strokeWidth="5"
      />
      </svg>
  );
};
export const SignoutSVG = () => {
  return (
    <svg 
      className="w-12 h-12 lg:w-6 lg:h-6 fill-current text-[#E9E9E9] hover:text-[#5cfef0] transition-colors duration-300" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
    <path d="M5 21C4.45 21 3.97933 20.8043 3.588 20.413C3.19667 20.0217 3.00067 19.5507 3 19V5C3 4.45 3.196 3.97933 3.588 3.588C3.98 3.19667 4.45067 3.00067 5 3H12V5H5V19H12V21H5ZM16 17L14.625 15.55L17.175 13H9V11H17.175L14.625 8.45L16 7L21 12L16 17Z" fill="#E9E9E9"/>
    </svg>    
  );
};
export const LeftArrow = () => {
  return (
    <svg 
      className="fill-current text-[#E9E9E9] hover:text-[#5cfef0] transition-colors duration-300" 
      width="14" 
      height="28" 
      viewBox="0 0 16 28" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      >
      <path d="M15.325 0.68953C15.1129 0.471041 14.8605 0.297623 14.5824 0.179277C14.3043 0.0609309 14.0061 0 13.7048 0C13.4036 0 13.1053 0.0609309 12.8273 0.179277C12.5492 0.297623 12.2968 0.471041 12.0847 0.68953L0.674992 12.3449C0.46111 12.5616 0.291347 12.8195 0.175497 13.1035C0.0596457 13.3876 0 13.6923 0 14C0 14.3077 0.0596457 14.6124 0.175497 14.8965C0.291347 15.1805 0.46111 15.4384 0.674992 15.6551L12.0847 27.3105C12.2968 27.529 12.5492 27.7024 12.8273 27.8207C13.1053 27.9391 13.4036 28 13.7048 28C14.0061 28 14.3043 27.9391 14.5824 27.8207C14.8605 27.7024 15.1129 27.529 15.325 27.3105C15.5389 27.0938 15.7087 26.8359 15.8245 26.5519C15.9404 26.2678 16 25.9631 16 25.6554C16 25.3477 15.9404 25.043 15.8245 24.7589C15.7087 24.4749 15.5389 24.217 15.325 24.0003L5.51269 14L15.325 3.99966C15.5389 3.78296 15.7087 3.52514 15.8245 3.24108C15.9404 2.95701 16 2.65233 16 2.3446C16 2.03687 15.9404 1.73218 15.8245 1.44812C15.7087 1.16405 15.5389 0.906234 15.325 0.68953Z"/>
  </svg>
  );
};
export const RightArrow = () => {
  return (
    <svg 
      className="fill-current text-[#E9E9E9] hover:text-[#5cfef0] transition-colors duration-300" 
      width="14" 
      height="28" 
      viewBox="0 0 16 28" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.674991 0.68953C0.887126 0.471041 1.13951 0.297623 1.41759 0.179277C1.69566 0.0609309 1.99392 0 2.29516 0C2.59641 0 2.89467 0.0609309 3.17274 0.179277C3.45082 0.297623 3.7032 0.471041 3.91534 0.68953L15.325 12.3449C15.5389 12.5616 15.7087 12.8195 15.8245 13.1035C15.9404 13.3876 16 13.6923 16 14C16 14.3077 15.9404 14.6124 15.8245 14.8965C15.7087 15.1805 15.5389 15.4384 15.325 15.6551L3.91534 27.3105C3.7032 27.529 3.45082 27.7024 3.17274 27.8207C2.89467 27.9391 2.59641 28 2.29516 28C1.99392 28 1.69566 27.9391 1.41759 27.8207C1.13951 27.7024 0.887126 27.529 0.674991 27.3105C0.461109 27.0938 0.291347 26.8359 0.175496 26.5519C0.0596453 26.2678 -9.53674e-07 25.9631 -9.53674e-07 25.6554C-9.53674e-07 25.3477 0.0596453 25.043 0.175496 24.7589C0.291347 24.4749 0.461109 24.217 0.674991 24.0003L10.4873 14L0.674991 3.99966C0.461109 3.78296 0.291347 3.52514 0.175496 3.24108C0.0596453 2.95701 -9.53674e-07 2.65233 -9.53674e-07 2.3446C-9.53674e-07 2.03687 0.0596453 1.73218 0.175496 1.44812C0.291347 1.16405 0.461109 0.906234 0.674991 0.68953Z"/>
    </svg>
    
  );
};

export const ExploreSVG = () => {
  const location = useLocation();
  return (
      <svg
        className={`w-12 h-12 lg:w-6 lg:h-6 fill-current hover:text-[#5cfef0] transition-colors duration-300 ${location.pathname === '/explore' ? 'text-[#5cfef0]' : 'text-[#E9E9E9]'}`}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0005 3.71429C10.9124 3.71429 9.83495 3.9286 8.82968 4.345C7.82441 4.76139 6.911 5.37172 6.1416 6.14112C5.3722 6.91052 4.76188 7.82393 4.34549 8.82919C3.92909 9.83446 3.71477 10.9119 3.71477 12C3.71477 13.0881 3.92909 14.1655 4.34549 15.1708C4.76188 16.1761 5.3722 17.0895 6.1416 17.8589C6.911 18.6283 7.82441 19.2386 8.82968 19.655C9.83495 20.0714 10.9124 20.2857 12.0005 20.2857C14.198 20.2857 16.3055 19.4128 17.8594 17.8589C19.4132 16.305 20.2862 14.1975 20.2862 12C20.2862 9.80249 19.4132 7.69499 17.8594 6.14112C16.3055 4.58724 14.198 3.71429 12.0005 3.71429ZM2.00049 12C2.00049 9.34784 3.05406 6.8043 4.92942 4.92893C6.80478 3.05357 9.34832 2 12.0005 2C14.6527 2 17.1962 3.05357 19.0716 4.92893C20.9469 6.8043 22.0005 9.34784 22.0005 12C22.0005 14.6522 20.9469 17.1957 19.0716 19.0711C17.1962 20.9464 14.6527 22 12.0005 22C9.34832 22 6.80478 20.9464 4.92942 19.0711C3.05406 17.1957 2.00049 14.6522 2.00049 12Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.6867 8.92454C9.61983 9.80199 8.90689 11.0362 8.67987 12.3988L8.1793 15.408C7.91987 16.9714 9.73701 18.0194 10.9599 17.0137L13.3153 15.0754C14.3822 14.1979 15.0951 12.9637 15.3222 11.6011L15.8227 8.59196C16.0822 7.02853 14.265 5.98054 13.0422 6.98625L10.6867 8.92454ZM12.001 10.2857C11.5464 10.2857 11.1103 10.4663 10.7888 10.7878C10.4673 11.1093 10.2867 11.5453 10.2867 12C10.2867 12.4546 10.4673 12.8907 10.7888 13.2121C11.1103 13.5336 11.5464 13.7142 12.001 13.7142C12.4557 13.7142 12.8917 13.5336 13.2132 13.2121C13.5347 12.8907 13.7153 12.4546 13.7153 12C13.7153 11.5453 13.5347 11.1093 13.2132 10.7878C12.8917 10.4663 12.4557 10.2857 12.001 10.2857Z"
        />
      </svg>
  );
};

export const BellSVG = () => {
  return (
    <svg
    className="w-12 h-12 lg:w-6 lg:h-6 stroke-white hover:stroke-[#5CFEF0] transition-all duration-300"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.9619 17.986H18.7719C19.0371 18.0008 19.3017 17.9475 19.5404 17.8311C19.7791 17.7147 19.9841 17.5391 20.1357 17.321C20.2873 17.1029 20.3805 16.8496 20.4065 16.5853C20.4324 16.321 20.3902 16.0544 20.2839 15.811C19.9239 14.723 18.4889 13.418 18.4889 12.134C18.4889 9.28397 18.4889 8.53397 17.0849 6.85797C16.6305 6.31851 16.0672 5.88127 15.4319 5.57497L14.6489 5.19497C14.5175 5.11567 14.4042 5.00976 14.3162 4.88403C14.2282 4.75831 14.1674 4.61557 14.1379 4.46497C14.0596 3.95738 13.7912 3.49856 13.3871 3.18156C12.983 2.86457 12.4735 2.71313 11.9619 2.75797C11.4595 2.72781 10.9639 2.88599 10.5719 3.20163C10.1799 3.51728 9.9196 3.96772 9.84189 4.46497C9.80664 4.62076 9.73758 4.7669 9.6396 4.89305C9.54162 5.0192 9.41711 5.12227 9.27489 5.19497L8.49189 5.57497C7.85692 5.88139 7.29394 6.31862 6.83989 6.85797C5.43689 8.53397 5.43689 9.28397 5.43689 12.134C5.43689 13.418 4.06689 14.592 3.70689 15.745C3.48989 16.442 3.36989 17.986 5.18689 17.986H11.9619Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.225 17.986C15.2335 18.4168 15.155 18.845 14.994 19.2447C14.8331 19.6445 14.5931 20.0076 14.2883 20.3123C13.9836 20.6171 13.6205 20.8571 13.2207 21.018C12.821 21.179 12.3928 21.2575 11.962 21.249C11.531 21.2581 11.1026 21.1799 10.7027 21.0192C10.3027 20.8584 9.93942 20.6184 9.63467 20.3135C9.32991 20.0087 9.08999 19.6453 8.92935 19.2453C8.76872 18.8453 8.69069 18.4169 8.69996 17.986"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  );
};

export const BellSVGNav = () => {
  return (
    <svg
    className="sm:min-w-8 sm:min-h-8 stroke-white hover:stroke-[#5CFEF0] transition-all duration-300"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.9619 17.986H18.7719C19.0371 18.0008 19.3017 17.9475 19.5404 17.8311C19.7791 17.7147 19.9841 17.5391 20.1357 17.321C20.2873 17.1029 20.3805 16.8496 20.4065 16.5853C20.4324 16.321 20.3902 16.0544 20.2839 15.811C19.9239 14.723 18.4889 13.418 18.4889 12.134C18.4889 9.28397 18.4889 8.53397 17.0849 6.85797C16.6305 6.31851 16.0672 5.88127 15.4319 5.57497L14.6489 5.19497C14.5175 5.11567 14.4042 5.00976 14.3162 4.88403C14.2282 4.75831 14.1674 4.61557 14.1379 4.46497C14.0596 3.95738 13.7912 3.49856 13.3871 3.18156C12.983 2.86457 12.4735 2.71313 11.9619 2.75797C11.4595 2.72781 10.9639 2.88599 10.5719 3.20163C10.1799 3.51728 9.9196 3.96772 9.84189 4.46497C9.80664 4.62076 9.73758 4.7669 9.6396 4.89305C9.54162 5.0192 9.41711 5.12227 9.27489 5.19497L8.49189 5.57497C7.85692 5.88139 7.29394 6.31862 6.83989 6.85797C5.43689 8.53397 5.43689 9.28397 5.43689 12.134C5.43689 13.418 4.06689 14.592 3.70689 15.745C3.48989 16.442 3.36989 17.986 5.18689 17.986H11.9619Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.225 17.986C15.2335 18.4168 15.155 18.845 14.994 19.2447C14.8331 19.6445 14.5931 20.0076 14.2883 20.3123C13.9836 20.6171 13.6205 20.8571 13.2207 21.018C12.821 21.179 12.3928 21.2575 11.962 21.249C11.531 21.2581 11.1026 21.1799 10.7027 21.0192C10.3027 20.8584 9.93942 20.6184 9.63467 20.3135C9.32991 20.0087 9.08999 19.6453 8.92935 19.2453C8.76872 18.8453 8.69069 18.4169 8.69996 17.986"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  );
};


export const SearchSVG = () => {
  return (
      <svg
        className="sm:w-6 sm:h-6 stroke-white hover:stroke-[#5CFEF0] transition-transform transform hover:scale-110 sm:hover:stroke-gray-700"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.4444 22L14.4444 15.35C13.8889 15.7722 13.25 16.1065 12.5278 16.3528C11.8056 16.5991 11.037 16.7222 10.2222 16.7222C8.2037 16.7222 6.49556 16.0579 5.09778 14.7293C3.7 13.4007 3.00074 11.778 3 9.86111C2.99926 7.94422 3.69852 6.32148 5.09778 4.99289C6.49704 3.6643 8.20519 3 10.2222 3C12.2393 3 13.9478 3.6643 15.3478 4.99289C16.7478 6.32148 17.4467 7.94422 17.4444 9.86111C17.4444 10.6352 17.3148 11.3653 17.0556 12.0514C16.7963 12.7375 16.4444 13.3444 16 13.8722L23 20.5222L21.4444 22ZM10.2222 14.6111C11.6111 14.6111 12.7919 14.1495 13.7644 13.2262C14.737 12.303 15.223 11.1813 15.2222 9.86111C15.2215 8.54096 14.7356 7.41961 13.7644 6.49706C12.7933 5.5745 11.6126 5.11252 10.2222 5.11111C8.83185 5.1097 7.65148 5.57169 6.68111 6.49706C5.71074 7.42243 5.22445 8.54378 5.22222 9.86111C5.22 11.1784 5.7063 12.3001 6.68111 13.2262C7.65593 14.1523 8.8363 14.6139 10.2222 14.6111Z"
          fill="#7A7A7A"
        />
      </svg>
  );
};