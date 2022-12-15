import * as React from 'react';
import styled from 'styled-components';
import { ArrowOutwardLight, ArrowOutwardBlack } from '../components/ArrowOutward';
import MeshGradient from '../components/MeshGradient';

const HomeWrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0;
  z-index: 1;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mesh-gradient-back {
    height: 100vh;
    width: 100%;
    z-index: -2;
    background-color: #83d4ce;
    position: absolute;
    margin: 0;
  }

  .home {
    height: 100vh;
    width: 100%;
    flex-direction: column;
    :before {
      content: '';
      height: var(--navbar-height);
      width: 100%;
    }

    .home-main {
      font-family: transducer, sans-serif;
      width: 100%;
      flex: 1;

      > div {
        color: white;
        font-size: 48px;
        font-weight: 600;

        > strong {
          padding-left: 1rem;
          color: #1f1f1f;
          font-size: 60px;
          font-weight: 600;
        }
      }
      .home-main-title-m {
        display: none;
        flex-direction: column;
        white-space: nowrap;
        div {
          color: white;
          font-size: 32px;
          font-weight: 600;
        }
        strong {
          color: #1f1f1f;
          font-size: 40px;
          font-weight: 600;
        }
      }
    }

    .home-bottom {
      height: 132px;
      width: 100%;
      font-family: 'Montserrat', serif;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 150%;
      border-top: solid #ffffff 1px;
      border-bottom: solid #ffffff 1px;

      > div {
        height: 54px;
        width: 25%;
        color: white;
        font-size: 18px;
        font-weight: 700;
      }

      > div:nth-child(2) {
        border-right: solid #ffffff 1px;
      }
    }

    .home-scroll {
      height: 56px;
      width: 100%;
      font-family: 'Montserrat', serif;
      color: white;
      font-size: 13px;
      font-weight: 400;
      line-height: 150%;
    }
  }

  .home-link {
    border-bottom-style: solid;
    border-bottom-width: 2px;
    padding-bottom: 1px;
    > div {
      white-space: nowrap;
      transition: 0.6s;
    }
    > div:last-child {
      margin-left: 10px;
    }
    .light {
      display: block;
    }
    .dark {
      display: none;
    }
    :hover {
      color: #000000;
      //padding-bottom: 0;
      .light {
        display: none;
      }
      .dark {
        display: block;
      }
      > div:first-child {
        //transform: translate(0, 4px);
        letter-spacing: 0.2em;
      }
      > div:last-child {
        transform: translate(4px, -2px);
      }
    }
  }
`;

export default function Home() {
  return (
    <HomeWrapper>
      <div className="mesh-gradient-back"></div>
      <MeshGradient />
      <div className="home">
        <div className="home-main">
          <div className="home-main-title">
            Start Your Web3 Future in <strong>10 Minutes</strong>
            {/*<svg width="1051" height="47" viewBox="0 0 1051 47" fill="none">*/}
            {/*  <path*/}
            {/*    d="M16.384 46.672C28.576 46.672 31.408 43.696 31.408 36.256C31.408 29.728 28.912 26.896 17.248 25.504C8.704 24.496 7.696 23.68 7.696 20.992C7.696 18.448 8.944 17.344 15.04 17.344C21.52 17.344 23.104 18.304 23.104 21.136V22.192L30.256 22.048V21.424C30.256 14.224 27.856 11.248 14.992 11.248C3.52 11.248 0.304 14.464 0.304 21.424C0.304 28.192 2.704 30.4 14.08 31.792C22.96 32.848 24.16 34 24.16 36.688C24.16 39.568 23.008 40.528 16.288 40.528C8.704 40.528 7.264 39.808 7.264 36.304V35.2L0.0160002 35.392V36.016C0.0160002 44.608 3.136 46.672 16.384 46.672ZM38.0478 26.704C38.0478 31.024 37.9998 35.248 37.9998 38.08C37.9998 44.272 40.1598 46.192 47.7918 46.192C49.5198 46.192 50.8638 46.144 52.6878 46L52.6398 40C51.2958 40.048 50.5758 40.096 49.5678 40.096C45.6318 40.096 45.1038 39.424 45.1038 36.112V23.968H52.6398V17.968H45.1038C45.1038 15.664 45.1038 14.08 45.1518 12.448L37.9998 12.64C38.0478 14.128 38.0478 16 38.0478 17.968H33.7758V23.968H38.0478V26.704ZM66.778 46.576C71.866 46.576 74.698 45.04 76.234 42.304L76.282 46H82.81C82.762 42.208 82.762 39.76 82.762 36.88C82.762 32.08 82.81 30.64 82.81 26.848C82.81 20.368 80.026 17.392 70.042 17.392C60.778 17.392 57.754 20.08 57.85 26.608L64.426 26.752C64.426 24.112 65.146 23.2 69.802 23.2C74.506 23.2 75.706 24.496 75.706 28.48V31.504C74.122 29.584 71.386 28.72 66.874 28.72C59.242 28.72 56.554 31.36 56.554 37.744C56.554 44.08 59.05 46.576 66.778 46.576ZM69.802 41.296C65.242 41.296 63.802 40.384 63.802 37.456C63.802 34.48 64.81 33.376 70.042 33.376C74.602 33.376 75.898 34.432 75.898 36.592V37.504C75.898 40.192 74.602 41.296 69.802 41.296ZM89.6759 39.52C89.6759 42.256 89.6759 43.744 89.6279 46H96.8279C96.7799 43.792 96.7799 42.448 96.7799 39.76V31.984C96.7799 25.072 98.3639 23.872 101.676 23.872C104.94 23.872 105.708 24.784 105.708 28V30.64L112.524 30.544C112.572 28.96 112.572 27.184 112.572 25.792C112.572 19.456 110.652 17.392 104.94 17.392C100.668 17.392 97.9799 19.12 96.4439 22.768L96.3959 17.968H89.6279C89.6759 20.032 89.6759 21.568 89.6759 23.92V39.52ZM118.767 26.704C118.767 31.024 118.719 35.248 118.719 38.08C118.719 44.272 120.879 46.192 128.511 46.192C130.239 46.192 131.583 46.144 133.407 46L133.359 40C132.015 40.048 131.295 40.096 130.287 40.096C126.351 40.096 125.823 39.424 125.823 36.112V23.968H133.359V17.968H125.823C125.823 15.664 125.823 14.08 125.871 12.448L118.719 12.64C118.767 14.128 118.767 16 118.767 17.968H114.495V23.968H118.767V26.704ZM163.057 39.088C163.057 41.824 163.057 44.032 163.009 46H170.353C170.305 43.984 170.305 41.824 170.305 39.088V34.96C174.673 27.712 180.481 18.208 184.465 11.92H176.401L170.737 21.808C169.441 24.064 168.145 26.368 166.897 28.672C165.553 26.272 164.257 23.92 162.865 21.616L157.201 11.92H148.801C152.785 18.208 158.641 27.664 163.057 35.056V39.088ZM195.852 46.576C205.884 46.576 209.532 43.408 209.532 32.704V31.264C209.532 20.56 205.884 17.392 195.852 17.392C185.772 17.392 182.124 20.56 182.124 31.264V32.704C182.124 43.408 185.772 46.576 195.852 46.576ZM195.852 40.288C190.86 40.288 189.324 38.752 189.324 32.128V31.84C189.324 25.168 190.86 23.68 195.852 23.68C200.844 23.68 202.38 25.168 202.38 31.84V32.128C202.38 38.752 200.844 40.288 195.852 40.288ZM214.875 28.816C214.875 31.936 214.827 35.728 214.827 37.216C214.827 43.888 217.371 46.576 223.947 46.576C228.795 46.576 231.867 45.088 233.595 41.152L233.643 46H240.411C240.363 43.936 240.363 42.4 240.363 40V24.4C240.363 21.712 240.363 20.176 240.411 17.968H233.211C233.259 20.128 233.259 21.52 233.259 24.16V32.176C233.259 38.8 231.723 40.048 227.451 40.048C223.131 40.048 221.931 38.8 221.931 33.424V23.632C221.931 21.232 221.979 19.936 221.979 17.968H214.827C214.875 20.176 214.875 21.664 214.875 23.728V28.816ZM247.363 39.52C247.363 42.256 247.363 43.744 247.315 46H254.515C254.467 43.792 254.467 42.448 254.467 39.76V31.984C254.467 25.072 256.051 23.872 259.363 23.872C262.627 23.872 263.395 24.784 263.395 28V30.64L270.211 30.544C270.259 28.96 270.259 27.184 270.259 25.792C270.259 19.456 268.339 17.392 262.627 17.392C258.355 17.392 255.667 19.12 254.131 22.768L254.083 17.968H247.315C247.363 20.032 247.363 21.568 247.363 23.92V39.52ZM310.159 30.16C311.215 25.984 312.319 21.376 313.231 17.488C314.047 21.376 315.055 26.032 316.015 30.208L319.615 46H329.983C332.047 38.752 338.287 18.448 340.399 11.92H332.671L328.303 28.672C327.295 32.56 326.335 36.352 325.519 39.472H324.511C323.743 36.112 322.831 31.936 321.871 27.76L318.127 11.92H308.431L304.495 28.384C303.583 32.32 302.719 36.256 301.999 39.472H300.751C300.031 36.352 299.119 32.56 298.111 28.672L293.839 11.92H285.775C287.887 18.448 293.935 38.752 295.951 46H306.271L310.159 30.16ZM354.618 46.576C364.698 46.576 367.722 43.792 367.722 36.4L360.714 36.208C360.714 39.28 359.562 40.576 354.666 40.576C350.058 40.576 348.378 39.232 348.09 33.712H367.722V31.264C367.722 20.56 364.074 17.392 354.426 17.392C344.73 17.392 340.89 20.56 340.89 31.264V32.704C340.89 43.408 344.73 46.576 354.618 46.576ZM354.426 22.72C358.842 22.72 360.186 23.872 360.378 29.008H348.138C348.474 23.872 350.154 22.72 354.426 22.72ZM373.223 39.328C373.223 42.064 373.223 44.08 373.175 46H379.943L379.991 41.152C381.623 44.656 384.551 46.576 389.255 46.576C397.175 46.576 400.535 43.6 400.535 32.704V31.264C400.535 20.368 397.271 17.392 389.495 17.392C384.983 17.392 382.055 19.072 380.375 22.192C380.375 17.44 380.375 12.064 380.423 10.096H373.175C373.223 12.16 373.223 14.032 373.223 16.864V39.328ZM380.327 32.272V31.696C380.327 25.36 381.959 23.872 386.807 23.872C391.799 23.872 393.383 25.36 393.383 31.84V32.128C393.383 38.56 391.799 40.048 386.567 40.048C381.959 40.048 380.327 38.656 380.327 32.272ZM433.587 36.976V36.784C433.587 32.368 432.003 29.824 427.443 28.576C431.571 27.232 433.011 24.688 433.011 20.608V20.416C433.011 14.08 430.323 11.248 418.995 11.248C407.187 11.248 404.547 14.272 404.643 22.528L411.795 22.72V21.712C411.795 18.544 413.043 17.2 418.995 17.2C424.611 17.2 425.811 18.544 425.811 21.424V21.616C425.811 24.448 424.323 25.792 418.467 25.792H414.963V31.648H418.611C424.755 31.648 426.387 32.8 426.387 36.112V36.208C426.387 39.376 425.235 40.624 419.043 40.624C412.755 40.624 411.603 39.376 411.603 35.872V34.96L404.451 35.152C404.403 44.32 406.563 46.624 419.043 46.624C430.755 46.624 433.587 44.032 433.587 36.976ZM453.247 39.376C453.247 42.112 453.247 44.08 453.199 46H460.543C460.495 44.032 460.495 42.112 460.495 39.376V32.848H463.087C466.399 32.848 473.887 32.848 476.815 32.896V26.752H460.495V18.16H466.015C471.055 18.16 475.567 18.16 478.927 18.208V11.92H453.199C453.247 13.696 453.247 15.616 453.247 18.112V39.376ZM482.812 28.816C482.812 31.936 482.764 35.728 482.764 37.216C482.764 43.888 485.308 46.576 491.884 46.576C496.732 46.576 499.804 45.088 501.532 41.152L501.58 46H508.348C508.3 43.936 508.3 42.4 508.3 40V24.4C508.3 21.712 508.3 20.176 508.348 17.968H501.148C501.196 20.128 501.196 21.52 501.196 24.16V32.176C501.196 38.8 499.66 40.048 495.388 40.048C491.068 40.048 489.868 38.8 489.868 33.424V23.632C489.868 21.232 489.916 19.936 489.916 17.968H482.764C482.812 20.176 482.812 21.664 482.812 23.728V28.816ZM516.501 26.704C516.501 31.024 516.453 35.248 516.453 38.08C516.453 44.272 518.613 46.192 526.245 46.192C527.973 46.192 529.317 46.144 531.141 46L531.093 40C529.749 40.048 529.029 40.096 528.021 40.096C524.085 40.096 523.557 39.424 523.557 36.112V23.968H531.093V17.968H523.557C523.557 15.664 523.557 14.08 523.605 12.448L516.453 12.64C516.501 14.128 516.501 16 516.501 17.968H512.229V23.968H516.501V26.704ZM536.015 28.816C536.015 31.936 535.967 35.728 535.967 37.216C535.967 43.888 538.511 46.576 545.087 46.576C549.935 46.576 553.007 45.088 554.735 41.152L554.783 46H561.551C561.503 43.936 561.503 42.4 561.503 40V24.4C561.503 21.712 561.503 20.176 561.551 17.968H554.351C554.399 20.128 554.399 21.52 554.399 24.16V32.176C554.399 38.8 552.863 40.048 548.591 40.048C544.271 40.048 543.071 38.8 543.071 33.424V23.632C543.071 21.232 543.119 19.936 543.119 17.968H535.967C536.015 20.176 536.015 21.664 536.015 23.728V28.816ZM568.504 39.52C568.504 42.256 568.504 43.744 568.456 46H575.656C575.608 43.792 575.608 42.448 575.608 39.76V31.984C575.608 25.072 577.192 23.872 580.504 23.872C583.768 23.872 584.536 24.784 584.536 28V30.64L591.352 30.544C591.4 28.96 591.4 27.184 591.4 25.792C591.4 19.456 589.48 17.392 583.768 17.392C579.496 17.392 576.808 19.12 575.272 22.768L575.224 17.968H568.456C568.504 20.032 568.504 21.568 568.504 23.92V39.52ZM608.587 46.576C618.667 46.576 621.691 43.792 621.691 36.4L614.683 36.208C614.683 39.28 613.531 40.576 608.635 40.576C604.027 40.576 602.347 39.232 602.059 33.712H621.691V31.264C621.691 20.56 618.043 17.392 608.395 17.392C598.699 17.392 594.859 20.56 594.859 31.264V32.704C594.859 43.408 598.699 46.576 608.587 46.576ZM608.395 22.72C612.811 22.72 614.155 23.872 614.347 29.008H602.107C602.443 23.872 604.123 22.72 608.395 22.72ZM640.88 9.952V15.04H648.08V9.952H640.88ZM640.928 39.328C640.928 42.064 640.928 44.032 640.88 46H648.08C648.032 44.032 648.032 42.064 648.032 39.28V24.784C648.032 21.952 648.032 19.744 648.08 17.968H640.88C640.928 19.744 640.928 21.952 640.928 24.736V39.328ZM655.129 39.52C655.129 42.256 655.129 43.744 655.081 46H662.281C662.233 43.792 662.233 42.448 662.233 39.76V31.504C662.233 25.168 663.769 23.872 668.137 23.872C672.457 23.872 673.801 25.168 673.801 30.544V39.76C673.801 42.544 673.801 43.792 673.753 46H680.905C680.857 43.552 680.857 41.92 680.857 39.712V33.856C680.857 30.112 680.905 28.192 680.905 26.752C680.905 20.08 678.265 17.392 671.641 17.392C666.697 17.392 663.625 18.88 661.897 22.72L661.849 17.968H655.081C655.129 20.032 655.129 21.568 655.129 23.92V39.52Z"*/}
            {/*    fill="white"*/}
            {/*  />*/}
            {/*  <path*/}
            {/*    d="M716.551 37.78C716.551 41.14 716.551 43.24 716.491 46H725.551C725.491 43.54 725.491 41.08 725.491 37.6V10.96C725.491 7.9 725.491 5.62 725.551 3.4H712.531C708.631 7 702.931 12.46 699.211 15.7V26.14L699.271 26.2L710.371 15.88C712.051 14.38 713.671 12.88 715.171 11.56H716.551V37.78ZM753.333 46.84C768.513 46.84 773.493 41.8 773.493 25.66V23.74C773.493 7.54 768.513 2.56 753.333 2.56C738.093 2.56 733.113 7.54 733.113 23.74V25.66C733.113 41.8 738.093 46.84 753.333 46.84ZM753.333 38.86C744.753 38.86 742.233 36.16 742.233 24.94V24.46C742.233 13.42 744.753 10.6 753.333 10.6C761.913 10.6 764.313 13.42 764.313 24.46V24.94C764.313 36.16 761.913 38.86 753.333 38.86ZM798.198 46H807.078C807.018 41.2 807.018 35.5 807.018 31.3C807.018 25.36 806.958 17.02 806.898 11.32H807.618C809.178 16.12 811.098 22.18 813.018 28L819.198 46H828.018L833.958 28C835.818 22.24 837.678 16.18 839.178 11.32H839.898C839.838 17.74 839.778 27.16 839.778 30.94C839.778 35.74 839.778 41.26 839.718 46H848.898C848.838 43.54 848.838 41.02 848.838 37.66V10.84C848.838 7.9 848.838 5.62 848.898 3.4H834.138L828.498 21.16C826.878 26.5 825.318 32.08 823.998 36.64C822.738 32.08 821.178 26.56 819.558 21.22L813.858 3.4H798.198C798.258 5.68 798.258 7.96 798.258 11.14V37.66C798.258 41.08 798.258 43.24 798.198 46ZM858.073 0.939997V7.3H867.073V0.939997H858.073ZM858.133 37.66C858.133 41.08 858.133 43.54 858.073 46H867.073C867.013 43.54 867.013 41.08 867.013 37.6V19.48C867.013 15.94 867.013 13.18 867.073 10.96H858.073C858.133 13.18 858.133 15.94 858.133 19.42V37.66ZM875.884 37.9C875.884 41.32 875.884 43.18 875.824 46H884.824C884.764 43.24 884.764 41.56 884.764 38.2V27.88C884.764 19.96 886.684 18.34 892.144 18.34C897.544 18.34 899.224 19.96 899.224 26.68V38.2C899.224 41.68 899.224 43.24 899.164 46H908.104C908.044 42.94 908.044 40.9 908.044 38.14V30.82C908.044 26.14 908.104 23.74 908.104 21.94C908.104 13.6 904.804 10.24 896.524 10.24C890.344 10.24 886.504 12.1 884.344 16.9L884.284 10.96H875.824C875.884 13.54 875.884 15.46 875.884 18.4V37.9ZM916.425 24.52C916.425 28.42 916.365 33.16 916.365 35.02C916.365 43.36 919.545 46.72 927.765 46.72C933.825 46.72 937.665 44.86 939.825 39.94L939.885 46H948.345C948.285 43.42 948.285 41.5 948.285 38.5V19C948.285 15.64 948.285 13.72 948.345 10.96H939.345C939.405 13.66 939.405 15.4 939.405 18.7V28.72C939.405 37 937.485 38.56 932.145 38.56C926.745 38.56 925.245 37 925.245 30.28V18.04C925.245 15.04 925.305 13.42 925.305 10.96H916.365C916.425 13.72 916.425 15.58 916.425 18.16V24.52ZM958.536 21.88C958.536 27.28 958.476 32.56 958.476 36.1C958.476 43.84 961.176 46.24 970.716 46.24C972.876 46.24 974.556 46.18 976.836 46L976.776 38.5C975.096 38.56 974.196 38.62 972.936 38.62C968.016 38.62 967.356 37.78 967.356 33.64V18.46H976.776V10.96H967.356C967.356 8.08 967.356 6.1 967.416 4.06L958.476 4.3C958.536 6.16 958.536 8.5 958.536 10.96H953.196V18.46H958.536V21.88ZM998.409 46.72C1011.01 46.72 1014.79 43.24 1014.79 34L1006.03 33.76C1006.03 37.6 1004.59 39.22 998.469 39.22C992.709 39.22 990.609 37.54 990.249 30.64H1014.79V27.58C1014.79 14.2 1010.23 10.24 998.169 10.24C986.049 10.24 981.249 14.2 981.249 27.58V29.38C981.249 42.76 986.049 46.72 998.409 46.72ZM998.169 16.9C1003.69 16.9 1005.37 18.34 1005.61 24.76H990.309C990.729 18.34 992.829 16.9 998.169 16.9ZM1035.47 46.72C1047.65 46.72 1050.89 43.78 1050.89 35.56C1050.89 29.32 1048.79 26.5 1036.61 24.82C1029.47 23.8 1028.39 22.9 1028.39 20.5C1028.39 17.8 1029.89 16.84 1034.27 16.84C1039.79 16.84 1041.11 17.92 1041.11 20.86V21.7L1049.63 21.52C1049.63 13.36 1047.17 10.24 1034.45 10.24C1023.41 10.24 1019.81 13.3 1019.81 20.92C1019.81 27.82 1022.09 29.98 1032.77 31.66C1041.05 32.92 1041.95 34.12 1041.95 36.28C1041.95 38.92 1040.63 40.06 1035.59 40.06C1029.05 40.06 1027.61 38.98 1027.61 35.26V34.48L1019.21 34.66C1019.21 44.32 1022.45 46.72 1035.47 46.72Z"*/}
            {/*    fill="#1F1F1F"*/}
            {/*  />*/}
            {/*</svg>*/}
          </div>
          <div className="home-main-title-m">
            <div>Start Your Web3</div>
            <div>Future</div>
            <div>in</div>
            <div>
              <strong>10 Minutes</strong>
            </div>
            {/*<svg width="290" height="181" viewBox="0 0 290 181" fill="none">*/}
            {/*  <path*/}
            {/*    d="M11.3029 24.448C19.4309 24.448 21.3189 22.464 21.3189 17.504C21.3189 13.152 19.6549 11.264 11.8789 10.336C6.18288 9.664 5.51088 9.12 5.51088 7.328C5.51088 5.632 6.34288 4.896 10.4069 4.896C14.7269 4.896 15.7829 5.536 15.7829 7.424V8.128L20.5509 8.032V7.616C20.5509 2.816 18.9509 0.831999 10.3749 0.831999C2.72688 0.831999 0.582875 2.976 0.582875 7.616C0.582875 12.128 2.18288 13.6 9.76688 14.528C15.6869 15.232 16.4869 16 16.4869 17.792C16.4869 19.712 15.7189 20.352 11.2389 20.352C6.18288 20.352 5.22288 19.872 5.22288 17.536V16.8L0.390875 16.928V17.344C0.390875 23.072 2.47088 24.448 11.3029 24.448ZM25.7454 11.136C25.7454 14.016 25.7134 16.832 25.7134 18.72C25.7134 22.848 27.1534 24.128 32.2414 24.128C33.3934 24.128 34.2894 24.096 35.5054 24L35.4734 20C34.5774 20.032 34.0974 20.064 33.4254 20.064C30.8014 20.064 30.4494 19.616 30.4494 17.408V9.312H35.4734V5.312H30.4494C30.4494 3.776 30.4494 2.72 30.4814 1.632L25.7134 1.76C25.7454 2.752 25.7454 4 25.7454 5.312H22.8974V9.312H25.7454V11.136ZM44.8989 24.384C48.2909 24.384 50.1789 23.36 51.2029 21.536L51.2349 24H55.5869C55.5549 21.472 55.5549 19.84 55.5549 17.92C55.5549 14.72 55.5869 13.76 55.5869 11.232C55.5869 6.912 53.7309 4.928 47.0749 4.928C40.8989 4.928 38.8829 6.72 38.9469 11.072L43.3309 11.168C43.3309 9.408 43.8109 8.8 46.9149 8.8C50.0509 8.8 50.8509 9.664 50.8509 12.32V14.336C49.7949 13.056 47.9709 12.48 44.9629 12.48C39.8749 12.48 38.0829 14.24 38.0829 18.496C38.0829 22.72 39.7469 24.384 44.8989 24.384ZM46.9149 20.864C43.8749 20.864 42.9149 20.256 42.9149 18.304C42.9149 16.32 43.5869 15.584 47.0749 15.584C50.1149 15.584 50.9789 16.288 50.9789 17.728V18.336C50.9789 20.128 50.1149 20.864 46.9149 20.864ZM60.1641 19.68C60.1641 21.504 60.1641 22.496 60.1321 24H64.9321C64.9001 22.528 64.9001 21.632 64.9001 19.84V14.656C64.9001 10.048 65.9561 9.248 68.1641 9.248C70.3401 9.248 70.8521 9.856 70.8521 12V13.76L75.3961 13.696C75.4281 12.64 75.4281 11.456 75.4281 10.528C75.4281 6.304 74.1481 4.928 70.3401 4.928C67.4921 4.928 65.7001 6.08 64.6761 8.512L64.6441 5.312H60.1321C60.1641 6.688 60.1641 7.712 60.1641 9.28V19.68ZM79.5579 11.136C79.5579 14.016 79.5259 16.832 79.5259 18.72C79.5259 22.848 80.9659 24.128 86.0539 24.128C87.2059 24.128 88.1019 24.096 89.3179 24L89.2859 20C88.3899 20.032 87.9099 20.064 87.2379 20.064C84.6139 20.064 84.2619 19.616 84.2619 17.408V9.312H89.2859V5.312H84.2619C84.2619 3.776 84.2619 2.72 84.2939 1.632L79.5259 1.76C79.5579 2.752 79.5579 4 79.5579 5.312H76.7099V9.312H79.5579V11.136ZM109.085 19.392C109.085 21.216 109.085 22.688 109.053 24H113.949C113.917 22.656 113.917 21.216 113.917 19.392V16.64C116.829 11.808 120.701 5.472 123.357 1.28H117.981L114.205 7.872C113.341 9.376 112.477 10.912 111.645 12.448C110.749 10.848 109.885 9.28 108.957 7.744L105.181 1.28H99.5811C102.237 5.472 106.141 11.776 109.085 16.704V19.392ZM130.948 24.384C137.636 24.384 140.068 22.272 140.068 15.136V14.176C140.068 7.04 137.636 4.928 130.948 4.928C124.228 4.928 121.796 7.04 121.796 14.176V15.136C121.796 22.272 124.228 24.384 130.948 24.384ZM130.948 20.192C127.62 20.192 126.596 19.168 126.596 14.752V14.56C126.596 10.112 127.62 9.12 130.948 9.12C134.276 9.12 135.3 10.112 135.3 14.56V14.752C135.3 19.168 134.276 20.192 130.948 20.192ZM143.63 12.544C143.63 14.624 143.598 17.152 143.598 18.144C143.598 22.592 145.294 24.384 149.678 24.384C152.91 24.384 154.958 23.392 156.11 20.768L156.142 24H160.654C160.622 22.624 160.622 21.6 160.622 20V9.6C160.622 7.808 160.622 6.784 160.654 5.312H155.854C155.886 6.752 155.886 7.68 155.886 9.44V14.784C155.886 19.2 154.862 20.032 152.014 20.032C149.134 20.032 148.334 19.2 148.334 15.616V9.088C148.334 7.488 148.366 6.624 148.366 5.312H143.598C143.63 6.784 143.63 7.776 143.63 9.152V12.544ZM165.289 19.68C165.289 21.504 165.289 22.496 165.257 24H170.057C170.025 22.528 170.025 21.632 170.025 19.84V14.656C170.025 10.048 171.081 9.248 173.289 9.248C175.465 9.248 175.977 9.856 175.977 12V13.76L180.521 13.696C180.553 12.64 180.553 11.456 180.553 10.528C180.553 6.304 179.273 4.928 175.465 4.928C172.617 4.928 170.825 6.08 169.801 8.512L169.769 5.312H165.257C165.289 6.688 165.289 7.712 165.289 9.28V19.68ZM207.153 13.44C207.857 10.656 208.593 7.584 209.201 4.992C209.745 7.584 210.417 10.688 211.057 13.472L213.457 24H220.369C221.745 19.168 225.905 5.632 227.313 1.28H222.161L219.249 12.448C218.577 15.04 217.937 17.568 217.393 19.648H216.721C216.209 17.408 215.601 14.624 214.961 11.84L212.465 1.28H206.001L203.377 12.256C202.769 14.88 202.193 17.504 201.713 19.648H200.881C200.401 17.568 199.793 15.04 199.121 12.448L196.273 1.28H190.897C192.305 5.632 196.337 19.168 197.681 24H204.561L207.153 13.44ZM236.792 24.384C243.512 24.384 245.528 22.528 245.528 17.6L240.856 17.472C240.856 19.52 240.088 20.384 236.824 20.384C233.752 20.384 232.632 19.488 232.44 15.808H245.528V14.176C245.528 7.04 243.096 4.928 236.664 4.928C230.2 4.928 227.64 7.04 227.64 14.176V15.136C227.64 22.272 230.2 24.384 236.792 24.384ZM236.664 8.48C239.608 8.48 240.504 9.248 240.632 12.672H232.472C232.696 9.248 233.816 8.48 236.664 8.48ZM249.195 19.552C249.195 21.376 249.195 22.72 249.163 24H253.675L253.707 20.768C254.795 23.104 256.747 24.384 259.883 24.384C265.163 24.384 267.403 22.4 267.403 15.136V14.176C267.403 6.912 265.227 4.928 260.043 4.928C257.035 4.928 255.083 6.048 253.963 8.128C253.963 4.96 253.963 1.376 253.995 0.0639992H249.163C249.195 1.44 249.195 2.688 249.195 4.576V19.552ZM253.931 14.848V14.464C253.931 10.24 255.019 9.248 258.251 9.248C261.579 9.248 262.635 10.24 262.635 14.56V14.752C262.635 19.04 261.579 20.032 258.091 20.032C255.019 20.032 253.931 19.104 253.931 14.848ZM289.438 17.984V17.856C289.438 14.912 288.382 13.216 285.342 12.384C288.094 11.488 289.054 9.792 289.054 7.072V6.944C289.054 2.72 287.262 0.831999 279.71 0.831999C271.838 0.831999 270.078 2.848 270.142 8.352L274.91 8.48V7.808C274.91 5.696 275.742 4.8 279.71 4.8C283.454 4.8 284.254 5.696 284.254 7.616V7.744C284.254 9.632 283.262 10.528 279.358 10.528H277.022V14.432H279.454C283.55 14.432 284.638 15.2 284.638 17.408V17.472C284.638 19.584 283.87 20.416 279.742 20.416C275.55 20.416 274.782 19.584 274.782 17.248V16.64L270.014 16.768C269.982 22.88 271.422 24.416 279.742 24.416C287.55 24.416 289.438 22.688 289.438 17.984ZM89.4358 67.584C89.4358 69.408 89.4358 70.72 89.4038 72H94.2998C94.2678 70.688 94.2678 69.408 94.2678 67.584V63.232H95.9958C98.2038 63.232 103.196 63.232 105.148 63.264V59.168H94.2678V53.44H97.9478C101.308 53.44 104.316 53.44 106.556 53.472V49.28H89.4038C89.4358 50.464 89.4358 51.744 89.4358 53.408V67.584ZM109.146 60.544C109.146 62.624 109.114 65.152 109.114 66.144C109.114 70.592 110.81 72.384 115.194 72.384C118.426 72.384 120.474 71.392 121.626 68.768L121.658 72H126.17C126.138 70.624 126.138 69.6 126.138 68V57.6C126.138 55.808 126.138 54.784 126.17 53.312H121.37C121.402 54.752 121.402 55.68 121.402 57.44V62.784C121.402 67.2 120.378 68.032 117.53 68.032C114.65 68.032 113.85 67.2 113.85 63.616V57.088C113.85 55.488 113.882 54.624 113.882 53.312H109.114C109.146 54.784 109.146 55.776 109.146 57.152V60.544ZM131.605 59.136C131.605 62.016 131.573 64.832 131.573 66.72C131.573 70.848 133.013 72.128 138.101 72.128C139.253 72.128 140.149 72.096 141.365 72L141.333 68C140.437 68.032 139.957 68.064 139.285 68.064C136.661 68.064 136.309 67.616 136.309 65.408V57.312H141.333V53.312H136.309C136.309 51.776 136.309 50.72 136.341 49.632L131.573 49.76C131.605 50.752 131.605 52 131.605 53.312H128.757V57.312H131.605V59.136ZM144.614 60.544C144.614 62.624 144.582 65.152 144.582 66.144C144.582 70.592 146.278 72.384 150.662 72.384C153.894 72.384 155.942 71.392 157.094 68.768L157.126 72H161.638C161.606 70.624 161.606 69.6 161.606 68V57.6C161.606 55.808 161.606 54.784 161.638 53.312H156.838C156.87 54.752 156.87 55.68 156.87 57.44V62.784C156.87 67.2 155.846 68.032 152.998 68.032C150.118 68.032 149.318 67.2 149.318 63.616V57.088C149.318 55.488 149.35 54.624 149.35 53.312H144.582C144.614 54.784 144.614 55.776 144.614 57.152V60.544ZM166.274 67.68C166.274 69.504 166.274 70.496 166.242 72H171.042C171.01 70.528 171.01 69.632 171.01 67.84V62.656C171.01 58.048 172.066 57.248 174.274 57.248C176.45 57.248 176.962 57.856 176.962 60V61.76L181.506 61.696C181.538 60.64 181.538 59.456 181.538 58.528C181.538 54.304 180.258 52.928 176.45 52.928C173.602 52.928 171.81 54.08 170.786 56.512L170.754 53.312H166.242C166.274 54.688 166.274 55.712 166.274 57.28V67.68ZM192.995 72.384C199.715 72.384 201.731 70.528 201.731 65.6L197.059 65.472C197.059 67.52 196.291 68.384 193.027 68.384C189.955 68.384 188.835 67.488 188.643 63.808H201.731V62.176C201.731 55.04 199.299 52.928 192.867 52.928C186.403 52.928 183.843 55.04 183.843 62.176V63.136C183.843 70.272 186.403 72.384 192.995 72.384ZM192.867 56.48C195.811 56.48 196.707 57.248 196.835 60.672H188.675C188.899 57.248 190.019 56.48 192.867 56.48ZM131.681 95.968V99.36H136.481V95.968H131.681ZM131.713 115.552C131.713 117.376 131.713 118.688 131.681 120H136.481C136.449 118.688 136.449 117.376 136.449 115.52V105.856C136.449 103.968 136.449 102.496 136.481 101.312H131.681C131.713 102.496 131.713 103.968 131.713 105.824V115.552ZM141.18 115.68C141.18 117.504 141.18 118.496 141.148 120H145.948C145.916 118.528 145.916 117.632 145.916 115.84V110.336C145.916 106.112 146.94 105.248 149.852 105.248C152.732 105.248 153.628 106.112 153.628 109.696V115.84C153.628 117.696 153.628 118.528 153.596 120H158.364C158.332 118.368 158.332 117.28 158.332 115.808V111.904C158.332 109.408 158.364 108.128 158.364 107.168C158.364 102.72 156.604 100.928 152.188 100.928C148.892 100.928 146.844 101.92 145.692 104.48L145.66 101.312H141.148C141.18 102.688 141.18 103.712 141.18 105.28V115.68Z"*/}
            {/*    fill="white"*/}
            {/*  />*/}
            {/*  <path*/}
            {/*    d="M43.6002 174.52C43.6002 176.76 43.6002 178.16 43.5602 180H49.6002C49.5602 178.36 49.5602 176.72 49.5602 174.4V156.64C49.5602 154.6 49.5602 153.08 49.6002 151.6H40.9202C38.3202 154 34.5202 157.64 32.0402 159.8V166.76L32.0802 166.8L39.4802 159.92C40.6002 158.92 41.6802 157.92 42.6802 157.04H43.6002V174.52ZM68.1217 180.56C78.2417 180.56 81.5617 177.2 81.5617 166.44V165.16C81.5617 154.36 78.2417 151.04 68.1217 151.04C57.9617 151.04 54.6417 154.36 54.6417 165.16V166.44C54.6417 177.2 57.9617 180.56 68.1217 180.56ZM68.1217 175.24C62.4017 175.24 60.7217 173.44 60.7217 165.96V165.64C60.7217 158.28 62.4017 156.4 68.1217 156.4C73.8417 156.4 75.4417 158.28 75.4417 165.64V165.96C75.4417 173.44 73.8417 175.24 68.1217 175.24ZM98.032 180H103.952C103.912 176.8 103.912 173 103.912 170.2C103.912 166.24 103.872 160.68 103.832 156.88H104.312C105.352 160.08 106.632 164.12 107.912 168L112.032 180H117.912L121.872 168C123.112 164.16 124.352 160.12 125.352 156.88H125.832C125.792 161.16 125.752 167.44 125.752 169.96C125.752 173.16 125.752 176.84 125.712 180H131.832C131.792 178.36 131.792 176.68 131.792 174.44V156.56C131.792 154.6 131.792 153.08 131.832 151.6H121.992L118.232 163.44C117.152 167 116.112 170.72 115.232 173.76C114.392 170.72 113.352 167.04 112.272 163.48L108.472 151.6H98.032C98.072 153.12 98.072 154.64 98.072 156.76V174.44C98.072 176.72 98.072 178.16 98.032 180ZM137.948 149.96V154.2H143.948V149.96H137.948ZM137.988 174.44C137.988 176.72 137.988 178.36 137.948 180H143.948C143.908 178.36 143.908 176.72 143.908 174.4V162.32C143.908 159.96 143.908 158.12 143.948 156.64H137.948C137.988 158.12 137.988 159.96 137.988 162.28V174.44ZM149.822 174.6C149.822 176.88 149.822 178.12 149.782 180H155.782C155.742 178.16 155.742 177.04 155.742 174.8V167.92C155.742 162.64 157.022 161.56 160.662 161.56C164.262 161.56 165.382 162.64 165.382 167.12V174.8C165.382 177.12 165.382 178.16 165.342 180H171.302C171.262 177.96 171.262 176.6 171.262 174.76V169.88C171.262 166.76 171.302 165.16 171.302 163.96C171.302 158.4 169.102 156.16 163.582 156.16C159.462 156.16 156.902 157.4 155.462 160.6L155.422 156.64H149.782C149.822 158.36 149.822 159.64 149.822 161.6V174.6ZM176.85 165.68C176.85 168.28 176.81 171.44 176.81 172.68C176.81 178.24 178.93 180.48 184.41 180.48C188.45 180.48 191.01 179.24 192.45 175.96L192.49 180H198.13C198.09 178.28 198.09 177 198.09 175V162C198.09 159.76 198.09 158.48 198.13 156.64H192.13C192.17 158.44 192.17 159.6 192.17 161.8V168.48C192.17 174 190.89 175.04 187.33 175.04C183.73 175.04 182.73 174 182.73 169.52V161.36C182.73 159.36 182.77 158.28 182.77 156.64H176.81C176.85 158.48 176.85 159.72 176.85 161.44V165.68ZM204.924 163.92C204.924 167.52 204.884 171.04 204.884 173.4C204.884 178.56 206.684 180.16 213.044 180.16C214.484 180.16 215.604 180.12 217.124 180L217.084 175C215.964 175.04 215.364 175.08 214.524 175.08C211.244 175.08 210.804 174.52 210.804 171.76V161.64H217.084V156.64H210.804C210.804 154.72 210.804 153.4 210.844 152.04L204.884 152.2C204.924 153.44 204.924 155 204.924 156.64H201.364V161.64H204.924V163.92ZM231.506 180.48C239.906 180.48 242.426 178.16 242.426 172L236.586 171.84C236.586 174.4 235.626 175.48 231.546 175.48C227.706 175.48 226.306 174.36 226.066 169.76H242.426V167.72C242.426 158.8 239.386 156.16 231.346 156.16C223.266 156.16 220.066 158.8 220.066 167.72V168.92C220.066 177.84 223.266 180.48 231.506 180.48ZM231.346 160.6C235.026 160.6 236.146 161.56 236.306 165.84H226.106C226.386 161.56 227.786 160.6 231.346 160.6ZM256.21 180.48C264.33 180.48 266.49 178.52 266.49 173.04C266.49 168.88 265.09 167 256.97 165.88C252.21 165.2 251.49 164.6 251.49 163C251.49 161.2 252.49 160.56 255.41 160.56C259.09 160.56 259.97 161.28 259.97 163.24V163.8L265.65 163.68C265.65 158.24 264.01 156.16 255.53 156.16C248.17 156.16 245.77 158.2 245.77 163.28C245.77 167.88 247.29 169.32 254.41 170.44C259.93 171.28 260.53 172.08 260.53 173.52C260.53 175.28 259.65 176.04 256.29 176.04C251.93 176.04 250.97 175.32 250.97 172.84V172.32L245.37 172.44C245.37 178.88 247.53 180.48 256.21 180.48Z"*/}
            {/*    fill="#1F1F1F"*/}
            {/*  />*/}
            {/*</svg>*/}
          </div>
        </div>
        <div className="home-bottom">
          <div />
          <div>
            <div className="home-link">
              <div>Open Docsite</div>
              <div>
                <div className="light">
                  <ArrowOutwardLight />
                </div>
                <div className="dark">
                  <ArrowOutwardBlack />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="home-link">
              <div>Open in Github</div>
              <div>
                <div className="light">
                  <ArrowOutwardLight />
                </div>
                <div className="dark">
                  <ArrowOutwardBlack />
                </div>
              </div>
            </div>
          </div>
          <div />
        </div>
        <div className="home-scroll">SCROLL FOR MORE</div>
      </div>
    </HomeWrapper>
  );
}
