import { forwardRef } from 'react'

type SVGProps = React.SVGProps<SVGSVGElement>

export const Communities = forwardRef<SVGSVGElement, SVGProps>((props, ref) => (
    <svg
        ref={ref}
        {...props}
        viewBox="0 0 24 24"
        height="24"
        width="24"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.37092 18.6728C6.22765 18.5403 6.10431 18.3762 6.00888 18.1973C5.88011 17.9559 5.80217 17.6876 5.79472 17.4335C5.77992 16.9291 5.75694 15.9341 5.81691 15.4918C5.84367 15.2944 5.89021 15.111 5.95079 14.9421C6.02312 14.7405 6.11792 14.5597 6.22835 14.3977C6.44698 14.077 6.72688 13.8296 7.01486 13.6386C7.04895 13.616 7.08314 13.5941 7.11736 13.5731C7.57933 13.2888 8.09602 13.1117 8.52831 12.9865C8.90306 12.878 9.34961 12.7693 9.85702 12.6823C10.485 12.5746 11.2062 12.5001 12 12.5001C12.7937 12.5001 13.5149 12.5746 14.1429 12.6823C14.6503 12.7693 15.0969 12.878 15.4716 12.9865C15.9039 13.1117 16.4206 13.2888 16.8826 13.5731C16.9168 13.5941 16.951 13.616 16.9851 13.6386C17.2731 13.8296 17.553 14.077 17.7716 14.3977C17.882 14.5597 17.9768 14.7405 18.0492 14.9421C18.1097 15.111 18.1563 15.2944 18.183 15.4918C18.243 15.9341 18.22 16.9291 18.2052 17.4335C18.1978 17.6876 18.1198 17.9559 17.9911 18.1973C17.8956 18.3762 17.7723 18.5403 17.629 18.6729C17.4138 18.872 17.1536 19 16.8756 19H7.12434C6.84632 19 6.58614 18.872 6.37092 18.6728ZM19.9606 15.4041C20.0099 15.9938 20.0031 16.2628 19.992 17C19.9887 17.22 19.985 17.3926 19.9822 17.4856C19.9692 17.9298 19.8643 18.6252 19.6869 19H22.6608C23.3769 19 23.9744 17.1535 23.9908 16.4244C24 16.0153 24.0117 16.2932 23.9736 15.9559C23.8921 15.2339 23.4788 14.7098 23.0245 14.3596C22.5875 14.0227 22.0691 13.8088 21.6087 13.6766C21.6029 13.675 21.5972 13.6733 21.5915 13.6717C21.5881 13.6707 21.5847 13.6698 21.5813 13.6688C21.5228 13.6524 21.4627 13.6362 21.401 13.6205C20.8883 13.49 20.2632 13.389 19.5555 13.389C19.5378 13.389 19.52 13.3891 19.5023 13.3892C19.4137 13.3898 19.3264 13.392 19.2405 13.3957C19.355 13.5637 19.4612 13.7454 19.5555 13.942C19.5647 13.9611 19.5738 13.9805 19.5828 13.9999C19.6332 14.1094 19.68 14.2234 19.7226 14.342C19.8237 14.6239 19.9007 14.9282 19.9447 15.253C19.9506 15.2963 19.9559 15.347 19.9606 15.4041ZM17.9339 11.4492C18.2894 11.7225 18.7156 11.9081 19.1802 11.9737C19.3028 11.991 19.4281 12 19.5555 12C20.1263 12 20.6553 11.8201 21.089 11.5141C21.7744 11.0305 22.2222 10.2319 22.2222 9.33C22.2222 7.85724 21.0283 6.67 19.5555 6.67C18.7591 6.67 18.0441 7.01722 17.5555 7.56905C17.1406 8.03762 16.8889 8.65371 16.8889 9.33C16.8889 9.57007 16.9206 9.80282 16.9801 10.0243C17.1343 10.5986 17.4753 11.0968 17.9339 11.4492ZM14.8977 9.61901C14.9641 9.52593 15.0262 9.42949 15.0835 9.33C15.3838 8.80927 15.5555 8.20499 15.5555 7.56C15.5555 7.36964 15.5406 7.18272 15.5117 7.00038C15.2434 5.30182 13.7733 4 12 4C10.2267 4 8.75657 5.30182 8.4882 7.00038C8.45939 7.18272 8.44443 7.36964 8.44443 7.56C8.44443 8.20499 8.61617 8.80927 8.91642 9.33C8.97378 9.42949 9.03584 9.52593 9.10229 9.61901C9.38894 10.0206 9.75728 10.3599 10.1831 10.6129C10.7148 10.9287 11.3362 11.11 12 11.11C12.6638 11.11 13.2851 10.9287 13.8168 10.6129C14.2427 10.3599 14.611 10.0206 14.8977 9.61901ZM7.01988 10.0243C7.07937 9.80282 7.1111 9.57007 7.1111 9.33C7.1111 8.65371 6.85934 8.03762 6.44443 7.56905C5.95581 7.01722 5.2409 6.67 4.44444 6.67C2.97168 6.67 1.77777 7.85724 1.77777 9.33C1.77777 10.2319 2.22555 11.0305 2.91093 11.5141C3.34469 11.8201 3.87362 12 4.44444 12C4.5718 12 4.6971 11.991 4.8197 11.9737C5.28435 11.9081 5.71054 11.7225 6.06606 11.4492C6.52463 11.0967 6.86561 10.5985 7.01988 10.0243ZM2.599 13.6205C2.53726 13.6362 2.47715 13.6524 2.41872 13.6688C2.41531 13.6698 2.41189 13.6707 2.40848 13.6717C2.40276 13.6733 2.39702 13.675 2.39128 13.6766C1.9309 13.8088 1.41245 14.0227 0.975466 14.3596C0.521192 14.7098 0.107939 15.2339 0.0263682 15.9559C-0.0117388 16.2932 2.95136e-05 17.0153 0.00922726 17.4244C0.0256195 18.1535 0.623061 19 1.33916 19H4.31303C4.13562 18.6252 4.03074 17.9298 4.01771 17.4856C4.01498 17.3926 4.01127 17.22 4.00795 17C3.99682 16.2628 3.99008 15.9938 4.03932 15.4041C4.04409 15.347 4.04938 15.2963 4.05525 15.253C4.09928 14.9282 4.17628 14.6239 4.27738 14.342C4.31992 14.2234 4.36671 14.1094 4.41718 13.9999C4.42615 13.9805 4.43524 13.9612 4.44444 13.942C4.53872 13.7454 4.64492 13.5636 4.7595 13.3957C4.67357 13.392 4.58626 13.3898 4.49762 13.3892C4.47995 13.3891 4.46224 13.389 4.44446 13.389C3.73676 13.389 3.11171 13.49 2.599 13.6205ZM12 14.5001C10.7893 14.5001 9.78078 14.706 9.08457 14.9076C8.70827 15.0166 8.39668 15.1342 8.16548 15.2764C7.94245 15.4137 7.86482 15.5296 7.83338 15.6173C7.81839 15.6591 7.80612 15.7064 7.79878 15.7605C7.79943 15.7557 7.7992 15.7596 7.7984 15.7735C7.79628 15.8102 7.79017 15.9159 7.78551 16.1142C7.77998 16.3491 7.77773 16.6382 7.77778 16.9391C7.77784 17.3256 7.78168 16.7121 7.78618 17H16.2138C16.2183 16.7121 16.2221 17.3256 16.2222 16.9391C16.2222 16.6383 16.22 16.3491 16.2144 16.1142C16.2098 15.9159 16.2037 15.8101 16.2016 15.7735C16.2007 15.7596 16.2005 15.7557 16.2012 15.7605C16.1938 15.7064 16.1816 15.6591 16.1666 15.6173C16.1351 15.5296 16.0575 15.4137 15.8345 15.2764C15.6033 15.1342 15.2917 15.0166 14.9154 14.9076C14.2192 14.706 13.2107 14.5001 12 14.5001ZM12 6C11.1441 6 10.4444 6.69763 10.4444 7.56C10.4444 8.41504 11.1368 9.11 12 9.11C12.8632 9.11 13.5555 8.41504 13.5555 7.56C13.5555 6.69763 12.8558 6 12 6Z"
            fill="currentColor"
        ></path>
    </svg>
))
Communities.displayName = 'Communities'

export const Status = forwardRef<SVGSVGElement, SVGProps>((props, ref) => (
    <svg
        ref={ref}
        viewBox="0 0 24 24"
        height="24"
        width="24"
        preserveAspectRatio="xMidYMid meet"
        {...props}
        fill="none"
    >
        <path
            d="M13.5627 3.13663C13.6586 2.59273 14.1793 2.22466 14.7109 2.37438C15.7904 2.67842 16.8134 3.16256 17.7359 3.80858C18.9322 4.64624 19.9304 5.73574 20.6605 7.0005C21.3906 8.26526 21.8348 9.67457 21.9619 11.1294C22.06 12.2513 21.9676 13.3794 21.691 14.4662C21.5548 15.0014 20.9756 15.2682 20.4567 15.0793C19.9377 14.8903 19.6769 14.317 19.7996 13.7785C19.9842 12.9693 20.0421 12.1343 19.9695 11.3035C19.8678 10.1396 19.5124 9.01218 18.9284 8.00038C18.3443 6.98857 17.5457 6.11697 16.5887 5.44684C15.9055 4.96844 15.1535 4.601 14.3605 4.3561C13.8328 4.19314 13.4668 3.68052 13.5627 3.13663Z"
            fill="currentColor"
        ></path>
        <path
            d="M18.8943 17.785C19.3174 18.14 19.3758 18.7749 18.9803 19.1604C18.1773 19.9433 17.2465 20.5872 16.2257 21.0631C14.9022 21.6802 13.4595 22 11.9992 21.9999C10.5388 21.9998 9.09621 21.6798 7.77275 21.0625C6.75208 20.5865 5.82137 19.9424 5.01843 19.1595C4.62302 18.7739 4.68155 18.139 5.10467 17.784C5.52779 17.4291 6.15471 17.4898 6.55964 17.8654C7.16816 18.4298 7.86233 18.8974 8.61817 19.25C9.67695 19.7438 10.831 19.9998 11.9993 19.9999C13.1676 20 14.3217 19.7442 15.3806 19.2505C16.1365 18.898 16.8307 18.4304 17.4393 17.8661C17.8443 17.4906 18.4712 17.43 18.8943 17.785Z"
            fill="currentColor"
        ></path>
        <path
            d="M3.54265 15.0781C3.02367 15.267 2.44458 15.0001 2.30844 14.4649C2.03202 13.3781 1.93978 12.2502 2.03794 11.1283C2.16521 9.67361 2.60953 8.26444 3.33966 6.99984C4.06979 5.73523 5.06802 4.64587 6.2642 3.80832C7.18668 3.1624 8.20962 2.67833 9.28902 2.37434C9.82063 2.22462 10.3413 2.59271 10.4372 3.1366C10.5331 3.6805 10.1671 4.19311 9.63938 4.35607C8.84645 4.60094 8.09446 4.96831 7.41133 5.44663C6.45439 6.11667 5.65581 6.98816 5.0717 7.99985C4.4876 9.01153 4.13214 10.1389 4.03032 11.3026C3.95764 12.1334 4.01547 12.9683 4.19986 13.7775C4.32257 14.3159 4.06162 14.8892 3.54265 15.0781Z"
            fill="currentColor"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9999 16C14.2091 16 15.9999 14.2092 15.9999 12C15.9999 9.79088 14.2091 8.00002 11.9999 8.00002C9.7908 8.00002 7.99994 9.79088 7.99994 12C7.99994 14.2092 9.7908 16 11.9999 16ZM11.9999 18C15.3136 18 17.9999 15.3137 17.9999 12C17.9999 8.68631 15.3136 6.00002 11.9999 6.00002C8.68623 6.00002 5.99994 8.68631 5.99994 12C5.99994 15.3137 8.68623 18 11.9999 18Z"
            fill="currentColor"
        ></path>
    </svg>
))
Status.displayName = 'Status'

export const Channels = forwardRef<SVGSVGElement, SVGProps>((props, ref) => (
    <svg
        {...props}
        ref={ref}
        viewBox="0 0 24 24"
        height="24"
        width="24"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.8301 8.63404C16.3081 8.35745 16.9198 8.52076 17.1964 8.9988C17.7077 9.88244 18 10.9086 18 12C18 13.0914 17.7077 14.1176 17.1964 15.0012C16.9198 15.4792 16.3081 15.6425 15.8301 15.366C15.352 15.0894 15.1887 14.4776 15.4653 13.9996C15.8052 13.4122 16 12.7304 16 12C16 11.2696 15.8052 10.5878 15.4653 10.0004C15.1887 9.52237 15.352 8.91063 15.8301 8.63404ZM8.16995 8.63404C8.64798 8.91063 8.81129 9.52237 8.5347 10.0004C8.19484 10.5878 8 11.2696 8 12C8 12.7304 8.19484 13.4122 8.5347 13.9996C8.81129 14.4776 8.64798 15.0894 8.16995 15.366C7.69191 15.6425 7.08017 15.4792 6.80358 15.0012C6.29231 14.1176 6 13.0914 6 12C6 10.9086 6.29231 9.88244 6.80358 8.9988C7.08017 8.52076 7.69191 8.35745 8.16995 8.63404Z"
            fill="currentColor"
        ></path>
        <path
            d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z"
            fill="currentColor"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.33243 16.4826L5.09622 17.2728C4.86428 18.0487 4.62086 18.8707 4.41748 19.5825C5.12931 19.3791 5.95126 19.1357 6.72722 18.9038L7.51743 18.6676L8.24444 19.057C9.36447 19.6571 10.6412 20 12 20C16.4154 20 20 16.4154 20 12C20 7.58457 16.4154 4 12 4C7.58457 4 4 7.58457 4 12C4 13.3588 4.34295 14.6355 4.94296 15.7556L5.33243 16.4826ZM3.18 16.7C2.63 18.54 2 20.69 2 21C2 21.55 2.45 22 3 22C3.31 22 5.46 21.37 7.3 20.82C8.7 21.57 10.3 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 13.7 2.43 15.3 3.18 16.7Z"
            fill="currentColor"
        ></path>
    </svg>
))
Channels.displayName = 'Channels'

export const NewChat = forwardRef<SVGSVGElement, SVGProps>((props, ref) => (
    <svg
        ref={ref}
        {...props}
        viewBox="0 0 24 24"
        height="24"
        width="24"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
    >
        <path
            d="M9.53277 12.9911H11.5086V14.9671C11.5086 15.3999 11.7634 15.8175 12.1762 15.9488C12.8608 16.1661 13.4909 15.6613 13.4909 15.009V12.9911H15.4672C15.9005 12.9911 16.3181 12.7358 16.449 12.3226C16.6659 11.6381 16.1606 11.0089 15.5086 11.0089H13.4909V9.03332C13.4909 8.60007 13.2361 8.18252 12.8233 8.05119C12.1391 7.83391 11.5086 8.33872 11.5086 8.991V11.0089H9.49088C8.83941 11.0089 8.33411 11.6381 8.55097 12.3226C8.68144 12.7358 9.09947 12.9911 9.53277 12.9911Z"
            fill="currentColor"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.944298 5.52617L2.99998 8.84848V17.3333C2.99998 18.8061 4.19389 20 5.66665 20H19.3333C20.8061 20 22 18.8061 22 17.3333V6.66667C22 5.19391 20.8061 4 19.3333 4H1.79468C1.01126 4 0.532088 4.85997 0.944298 5.52617ZM4.99998 8.27977V17.3333C4.99998 17.7015 5.29845 18 5.66665 18H19.3333C19.7015 18 20 17.7015 20 17.3333V6.66667C20 6.29848 19.7015 6 19.3333 6H3.58937L4.99998 8.27977Z"
            fill="currentColor"
        ></path>
    </svg>
))
NewChat.displayName = 'NewChat'

export const Search = (props: SVGProps) => (
    <svg
        {...props}
        viewBox="0 0 24 24"
        height="24"
        width="24"
        preserveAspectRatio="xMidYMid meet"
        version="1.1"
        x="0px"
        y="0px"
        enableBackground="new 0 0 24 24"
    >
        <path
            fill="currentColor"
            d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"
        ></path>
    </svg>
)

export const ArrowLeft = (props: SVGProps) => (
    <svg
        {...props}
        viewBox="0 0 24 24"
        height="24"
        width="24"
        preserveAspectRatio="xMidYMid meet"
        version="1.1"
        x="0px"
        y="0px"
        enable-background="new 0 0 24 24"
    >
        <title>search</title>
        <path
            fill="currentColor"
            d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"
        ></path>
    </svg>
)

export const Filter = (props: SVGProps) => (
    <svg
        {...props}
        viewBox="0 0 24 24"
        height="20"
        width="20"
        preserveAspectRatio="xMidYMid meet"
        version="1.1"
        x="0px"
        y="0px"
        enableBackground="new 0 0 24 24"
    >
        <path
            fill="currentColor"
            d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"
        ></path>
    </svg>
)

export const Close = (props: SVGProps) => (
    <svg
        viewBox="0 0 24 24"
        height="24"
        width="24"
        preserveAspectRatio="xMidYMid meet"
        {...props}
        version="1.1"
        x="0px"
        y="0px"
        enableBackground="new 0 0 24 24"
    >
        <title>x-alt</title>
        <path
            fill="currentColor"
            d="M17.25,7.8L16.2,6.75l-4.2,4.2l-4.2-4.2L6.75,7.8l4.2,4.2l-4.2,4.2l1.05,1.05l4.2-4.2l4.2,4.2l1.05-1.05 l-4.2-4.2L17.25,7.8z"
        ></path>
    </svg>
)

export const Whatsapp = (props: SVGProps) => (
    <svg viewBox="0 0 49 50" height="42" preserveAspectRatio="xMidYMid meet" fill="none" {...props}>
        <rect x="9" y="9" width="32" height="32" rx="2" fill="#25D366"></rect>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.7311 24.9094C14.7333 19.2501 19.3588 14.6471 25.0421 14.6471C27.7989 14.6482 30.3887 15.7169 32.3353 17.6564C34.2818 19.5958 35.354 22.1756 35.3529 24.9176C35.3506 30.5769 30.7248 35.1804 25.0421 35.1804C23.3587 35.1799 21.7061 34.7717 20.2282 33.9941L15.0657 35.3418C14.817 35.4067 14.5912 35.178 14.6594 34.9301L16.038 29.9185C15.18 28.3906 14.7303 26.6695 14.7311 24.9094ZM25.037 33.3487H25.0336C23.5289 33.3481 22.053 32.9458 20.7655 32.1854L20.4593 32.0045L17.2855 32.8331L18.1326 29.7534L17.9333 29.4376C17.0939 28.1088 16.6505 26.5731 16.6512 24.9961C16.653 20.3946 20.4149 16.6509 25.0404 16.6509C27.2802 16.6516 29.3856 17.5209 30.9689 19.0985C32.5521 20.6759 33.4235 22.7728 33.4227 25.0028C33.4208 29.6047 29.659 33.3487 25.037 33.3487ZM27.8645 26.198C28.0943 26.2823 29.3267 26.8933 29.5774 27.0198C29.6263 27.0445 29.672 27.0667 29.7144 27.0874C29.8893 27.1725 30.0074 27.23 30.0578 27.3148C30.1205 27.4202 30.1205 27.9259 29.9116 28.5161C29.7027 29.1061 28.7012 29.6446 28.2196 29.7171C27.7876 29.7822 27.2412 29.8093 26.6407 29.617C26.2766 29.5006 25.8097 29.3452 25.2116 29.0849C22.8618 28.0625 21.2738 25.7677 20.9733 25.3336C20.9523 25.3031 20.9375 25.2818 20.9293 25.2707L20.9273 25.268C20.7946 25.0897 19.9057 23.8946 19.9057 22.6577C19.9057 21.4941 20.4729 20.8842 20.734 20.6035C20.7519 20.5843 20.7683 20.5666 20.783 20.5504C21.0128 20.2975 21.2844 20.2343 21.4516 20.2343C21.6186 20.2343 21.7859 20.2359 21.932 20.2432C21.95 20.2441 21.9688 20.244 21.9881 20.2439C22.1342 20.243 22.3164 20.242 22.496 20.6768C22.565 20.8438 22.6658 21.0912 22.7722 21.3522C22.9881 21.8819 23.2269 22.4677 23.2689 22.5524C23.3316 22.6788 23.3733 22.8263 23.2898 22.9949C23.2773 23.0202 23.2657 23.0441 23.2546 23.0669C23.1918 23.196 23.1457 23.291 23.0391 23.4163C22.9974 23.4654 22.9543 23.5183 22.9112 23.5713C22.8248 23.6773 22.7383 23.7834 22.6631 23.8589C22.5376 23.9848 22.407 24.1215 22.5532 24.3744C22.6994 24.6273 23.2025 25.4545 23.9477 26.1243C24.7488 26.8443 25.445 27.1486 25.7979 27.3029C25.8668 27.333 25.9226 27.3574 25.9636 27.378C26.2143 27.5046 26.3605 27.4834 26.5067 27.3148C26.6529 27.1462 27.1334 26.5772 27.3005 26.3244C27.4676 26.0716 27.6347 26.1136 27.8645 26.198Z"
            fill="white"
        ></path>
    </svg>
)

export const Lock = (props: SVGProps) => (
    <svg
        {...props}
        viewBox="0 0 10 12"
        height="12"
        width="10"
        preserveAspectRatio="xMidYMid meet"
        version="1.1"
    >
        <path
            d="M5.00847986,1.6 C6.38255462,1.6 7.50937014,2.67435859 7.5940156,4.02703389 L7.59911976,4.1906399 L7.599,5.462 L7.75719976,5.46214385 C8.34167974,5.46214385 8.81591972,5.94158383 8.81591972,6.53126381 L8.81591972,9.8834238 C8.81591972,10.4731038 8.34167974,10.9525438 7.75719976,10.9525438 L2.25767996,10.9525438 C1.67527998,10.9525438 1.2,10.4731038 1.2,9.8834238 L1.2,6.53126381 C1.2,5.94158383 1.67423998,5.46214385 2.25767996,5.46214385 L2.416,5.462 L2.41679995,4.1906399 C2.41679995,2.81636129 3.49135449,1.68973395 4.84478101,1.60510326 L5.00847986,1.6 Z M5.00847986,2.84799995 C4.31163824,2.84799995 3.73624912,3.38200845 3.6709675,4.06160439 L3.6647999,4.1906399 L3.663,5.462 L6.35,5.462 L6.35111981,4.1906399 C6.35111981,3.53817142 5.88169076,2.99180999 5.26310845,2.87228506 L5.13749818,2.85416626 L5.00847986,2.84799995 Z"
            fill="currentColor"
        ></path>
    </svg>
)

export const Plus = (props: SVGProps) => (
    <svg
        viewBox="0 0 24 24"
        height="24"
        width="24"
        preserveAspectRatio="xMidYMid meet"
        {...props}
        fill="none"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.5 13.2501L20.5 10.7501L13.25 10.7501L13.25 3.5L10.75 3.5L10.75 10.7501L3.5 10.7501L3.5 13.2501L10.75 13.2501L10.75 20.5L13.25 20.5L13.25 13.2501L20.5 13.2501Z"
            fill="currentColor"
        ></path>
    </svg>
)

export const Micro = (props: SVGProps) => (
    <svg
        viewBox="0 0 24 24"
        height="24"
        width="24"
        preserveAspectRatio="xMidYMid meet"
        {...props}
        version="1.1"
        x="0px"
        y="0px"
        enable-background="new 0 0 24 24"
    >
        <path
            fill="currentColor"
            d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"
        ></path>
    </svg>
)

export const Emotion = (props: SVGProps) => (
    <svg
        viewBox="0 0 24 24"
        height="24"
        width="24"
        preserveAspectRatio="xMidYMid meet"
        {...props}
        version="1.1"
        x="0px"
        y="0px"
        enable-background="new 0 0 24 24"
    >
        <path
            fill="currentColor"
            d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"
        ></path>
    </svg>
)
