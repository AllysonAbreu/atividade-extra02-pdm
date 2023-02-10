import React from "react";
import Svg, { Path } from "react-native-svg";

type Pros = {
    width: string;
    height: string;
    color: string;
};


export const ListagemIcon = ({color,height,width}:Pros) => {
    return (
        <>
            <Svg
                width={width}
                height={height}
                viewBox="0 0 101 24"
                fill="none"
            >
                <Path
                    d="M38.646 15.712H41.936V17H37.05V7.27H38.646V15.712ZM44.0827 8.264C43.7934 8.264 43.5507 8.166 43.3547 7.97C43.1587 7.774 43.0607 7.53133 43.0607 7.242C43.0607 6.95267 43.1587 6.71 43.3547 6.514C43.5507 6.318 43.7934 6.22 44.0827 6.22C44.3627 6.22 44.6007 6.318 44.7967 6.514C44.9927 6.71 45.0907 6.95267 45.0907 7.242C45.0907 7.53133 44.9927 7.774 44.7967 7.97C44.6007 8.166 44.3627 8.264 44.0827 8.264ZM44.8667 9.286V17H43.2707V9.286H44.8667ZM49.7621 17.126C49.1554 17.126 48.6094 17.0187 48.1241 16.804C47.6481 16.58 47.2701 16.2813 46.9901 15.908C46.7101 15.5253 46.5608 15.1007 46.5421 14.634H48.1941C48.2221 14.9607 48.3761 15.236 48.6561 15.46C48.9454 15.6747 49.3048 15.782 49.7341 15.782C50.1821 15.782 50.5274 15.698 50.7701 15.53C51.0221 15.3527 51.1481 15.1287 51.1481 14.858C51.1481 14.5687 51.0081 14.354 50.7281 14.214C50.4574 14.074 50.0234 13.92 49.4261 13.752C48.8474 13.5933 48.3761 13.4393 48.0121 13.29C47.6481 13.1407 47.3308 12.912 47.0601 12.604C46.7988 12.296 46.6681 11.89 46.6681 11.386C46.6681 10.9753 46.7894 10.602 47.0321 10.266C47.2748 9.92067 47.6201 9.65 48.0681 9.454C48.5254 9.258 49.0481 9.16 49.6361 9.16C50.5134 9.16 51.2181 9.384 51.7501 9.832C52.2914 10.2707 52.5808 10.8727 52.6181 11.638H51.0221C50.9941 11.2927 50.8541 11.0173 50.6021 10.812C50.3501 10.6067 50.0094 10.504 49.5801 10.504C49.1601 10.504 48.8381 10.5833 48.6141 10.742C48.3901 10.9007 48.2781 11.1107 48.2781 11.372C48.2781 11.5773 48.3528 11.75 48.5021 11.89C48.6514 12.03 48.8334 12.142 49.0481 12.226C49.2628 12.3007 49.5801 12.3987 50.0001 12.52C50.5601 12.6693 51.0174 12.8233 51.3721 12.982C51.7361 13.1313 52.0488 13.3553 52.3101 13.654C52.5714 13.9527 52.7068 14.3493 52.7161 14.844C52.7161 15.2827 52.5948 15.6747 52.3521 16.02C52.1094 16.3653 51.7641 16.636 51.3161 16.832C50.8774 17.028 50.3594 17.126 49.7621 17.126ZM56.3026 10.588V14.858C56.3026 15.1473 56.368 15.3573 56.4986 15.488C56.6386 15.6093 56.872 15.67 57.1986 15.67H58.1786V17H56.9186C56.2 17 55.6493 16.832 55.2666 16.496C54.884 16.16 54.6926 15.614 54.6926 14.858V10.588H53.7826V9.286H54.6926V7.368H56.3026V9.286H58.1786V10.588H56.3026ZM59.1176 13.108C59.1176 12.3333 59.2763 11.6473 59.5936 11.05C59.9203 10.4527 60.3589 9.99067 60.9096 9.664C61.4696 9.328 62.0856 9.16 62.7576 9.16C63.3643 9.16 63.8916 9.28133 64.3396 9.524C64.7969 9.75733 65.1609 10.0513 65.4316 10.406V9.286H67.0416V17H65.4316V15.852C65.1609 16.216 64.7923 16.5193 64.3256 16.762C63.8589 17.0047 63.3269 17.126 62.7296 17.126C62.0669 17.126 61.4603 16.958 60.9096 16.622C60.3589 16.2767 59.9203 15.8007 59.5936 15.194C59.2763 14.578 59.1176 13.8827 59.1176 13.108ZM65.4316 13.136C65.4316 12.604 65.3196 12.142 65.0956 11.75C64.8809 11.358 64.5963 11.0593 64.2416 10.854C63.8869 10.6487 63.5043 10.546 63.0936 10.546C62.6829 10.546 62.3003 10.6487 61.9456 10.854C61.5909 11.05 61.3016 11.344 61.0776 11.736C60.8629 12.1187 60.7556 12.576 60.7556 13.108C60.7556 13.64 60.8629 14.1067 61.0776 14.508C61.3016 14.9093 61.5909 15.2173 61.9456 15.432C62.3096 15.6373 62.6923 15.74 63.0936 15.74C63.5043 15.74 63.8869 15.6373 64.2416 15.432C64.5963 15.2267 64.8809 14.928 65.0956 14.536C65.3196 14.1347 65.4316 13.668 65.4316 13.136ZM72.2459 9.16C72.8432 9.16 73.3706 9.28133 73.8279 9.524C74.2946 9.75733 74.6586 10.0513 74.9199 10.406V9.286H76.5299V17.126C76.5299 17.8353 76.3806 18.4653 76.0819 19.016C75.7832 19.576 75.3492 20.0147 74.7799 20.332C74.2199 20.6493 73.5479 20.808 72.7639 20.808C71.7186 20.808 70.8506 20.5607 70.1599 20.066C69.4692 19.5807 69.0772 18.918 68.9839 18.078H70.5659C70.6872 18.4793 70.9439 18.8013 71.3359 19.044C71.7372 19.296 72.2132 19.422 72.7639 19.422C73.4079 19.422 73.9259 19.226 74.3179 18.834C74.7192 18.442 74.9199 17.8727 74.9199 17.126V15.838C74.6492 16.202 74.2806 16.51 73.8139 16.762C73.3566 17.0047 72.8339 17.126 72.2459 17.126C71.5739 17.126 70.9579 16.958 70.3979 16.622C69.8472 16.2767 69.4086 15.8007 69.0819 15.194C68.7646 14.578 68.6059 13.8827 68.6059 13.108C68.6059 12.3333 68.7646 11.6473 69.0819 11.05C69.4086 10.4527 69.8472 9.99067 70.3979 9.664C70.9579 9.328 71.5739 9.16 72.2459 9.16ZM74.9199 13.136C74.9199 12.604 74.8079 12.142 74.5839 11.75C74.3692 11.358 74.0846 11.0593 73.7299 10.854C73.3752 10.6487 72.9926 10.546 72.5819 10.546C72.1712 10.546 71.7886 10.6487 71.4339 10.854C71.0792 11.05 70.7899 11.344 70.5659 11.736C70.3512 12.1187 70.2439 12.576 70.2439 13.108C70.2439 13.64 70.3512 14.1067 70.5659 14.508C70.7899 14.9093 71.0792 15.2173 71.4339 15.432C71.7979 15.6373 72.1806 15.74 72.5819 15.74C72.9926 15.74 73.3752 15.6373 73.7299 15.432C74.0846 15.2267 74.3692 14.928 74.5839 14.536C74.8079 14.1347 74.9199 13.668 74.9199 13.136ZM85.6962 12.954C85.6962 13.2433 85.6775 13.5047 85.6402 13.738H79.7462C79.7928 14.354 80.0215 14.8487 80.4322 15.222C80.8428 15.5953 81.3468 15.782 81.9442 15.782C82.8028 15.782 83.4095 15.4227 83.7642 14.704H85.4862C85.2528 15.4133 84.8282 15.9967 84.2122 16.454C83.6055 16.902 82.8495 17.126 81.9442 17.126C81.2068 17.126 80.5442 16.9627 79.9562 16.636C79.3775 16.3 78.9202 15.8333 78.5842 15.236C78.2575 14.6293 78.0942 13.9293 78.0942 13.136C78.0942 12.3427 78.2528 11.6473 78.5702 11.05C78.8968 10.4433 79.3495 9.97667 79.9282 9.65C80.5162 9.32333 81.1882 9.16 81.9442 9.16C82.6722 9.16 83.3208 9.31867 83.8902 9.636C84.4595 9.95333 84.9028 10.4013 85.2202 10.98C85.5375 11.5493 85.6962 12.2073 85.6962 12.954ZM84.0302 12.45C84.0208 11.862 83.8108 11.3907 83.4002 11.036C82.9895 10.6813 82.4808 10.504 81.8742 10.504C81.3235 10.504 80.8522 10.6813 80.4602 11.036C80.0682 11.3813 79.8348 11.8527 79.7602 12.45H84.0302ZM96.6048 9.16C97.2115 9.16 97.7528 9.286 98.2288 9.538C98.7141 9.79 99.0921 10.1633 99.3628 10.658C99.6428 11.1527 99.7828 11.75 99.7828 12.45V17H98.2008V12.688C98.2008 11.9973 98.0281 11.47 97.6828 11.106C97.3375 10.7327 96.8661 10.546 96.2688 10.546C95.6715 10.546 95.1955 10.7327 94.8408 11.106C94.4955 11.47 94.3228 11.9973 94.3228 12.688V17H92.7408V12.688C92.7408 11.9973 92.5681 11.47 92.2228 11.106C91.8775 10.7327 91.4061 10.546 90.8088 10.546C90.2115 10.546 89.7355 10.7327 89.3808 11.106C89.0355 11.47 88.8628 11.9973 88.8628 12.688V17H87.2668V9.286H88.8628V10.168C89.1241 9.85067 89.4555 9.60333 89.8568 9.426C90.2581 9.24867 90.6875 9.16 91.1448 9.16C91.7608 9.16 92.3115 9.29067 92.7968 9.552C93.2821 9.81333 93.6555 10.1913 93.9168 10.686C94.1501 10.2193 94.5141 9.85067 95.0088 9.58C95.5035 9.3 96.0355 9.16 96.6048 9.16Z"
                    fill={color}
                />
                <Path
                    d="M8 6H21"
                    stroke={color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M8 12H21"
                    stroke={color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M8 18H21"
                    stroke={color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M3 6H3.01"
                    stroke={color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M3 12H3.01"
                    stroke={color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M3 18H3.01"
                    stroke={color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </Svg>
        </>
    );
};
