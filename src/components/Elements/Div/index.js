import style, { css } from 'styled-components';

const StyledDiv = style.div`
  margin: 0.25rem 0 0;
  width: 80%;
  color: #4e4e4e;
  font-size: 12px;
  letter-spacing: 0.24px;

  @media screen and (max-width: 768px) {
      width: 100%;
      margin: 0;
      padding: 0;
  }
  ${(props) =>
    props.walletBalancePadding &&
    css`
      @media screen and (max-width: 480px) {
        padding: 5px;
      }
    `};
    
  ${(props) =>
    props.withPadding &&
    css`
      @media screen and (max-width: 768px) {
        padding: 1rem;
      }
    `};
    
  ${(props) =>
    props.smallPadding &&
    css`
      padding: 1rem;
    `};

  ${(props) =>
    props.paddingX &&
    css`
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    `};
    
  ${(props) =>
    props.paddingLeft &&
    css`
      padding-left: 1.5rem;
    `};

  ${(props) =>
    props.paddingYLg &&
    css`
      padding-top: 2rem;
      padding-bottom: 2rem;
    `};

  ${(props) =>
    props.paddingTop &&
    css`
      padding-top: 1.5rem;
    `};

  ${(props) =>
    props.paddingSmall &&
    css`
      padding: 1rem;
    `};

  ${(props) =>
    props.paddingBottom &&
    css`
      padding-bottom: 1rem;
    `};

  ${(props) =>
    props.paddingBottomXL &&
    css`
      padding-bottom: 2rem;
    `};

  ${(props) =>
    props.paddingCard &&
    css`
      padding: 20px;
    `};

  ${(props) =>
    props.paddingCard2 &&
    css`
      padding: 14px 20px 0;
    `};

  ${(props) =>
    props.noMargin &&
    css`
      margin: 0;
    `};

  ${(props) =>
    props.marginTop &&
    css`
      margin-top: 1rem;
    `};

  ${(props) =>
    props.marginTopLarge &&
    css`
      margin-top: 2rem;
    `};

  ${(props) =>
    props.marginTopXLarge &&
    css`
      margin-top: 3rem;
    `};

  ${(props) =>
    props.cardInfo &&
    css`
      margin-top: 1.5rem;
    `};

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 1rem;
    `};

  ${(props) =>
    props.marginLeft &&
    css`
      margin-left: 1rem;
    `};

  ${(props) =>
    props.marginRight &&
    css`
      margin-left: 1rem;
    `};

  ${(props) =>
    props.marginBottomLarge &&
    css`
      margin-bottom: 2rem;
    `};

  ${(props) =>
    props.marginY &&
    css`
      margin-top: 1rem;
      margin-bottom: 1rem;

      @media screen and (max-width: 480px) {
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
    `};

  ${(props) =>
    props.marginYLarge &&
    css`
      margin-top: 2rem;
      margin-bottom: 2rem;
    `};

  ${(props) =>
    props.widthLong &&
    css`
      width: 85%;
    `};

  ${(props) =>
    props.widthXLong &&
    css`
      width: 97.666667%;
    `};

  ${(props) =>
    props.widthFull &&
    css`
      width: 100%;
    `};

  ${(props) =>
    props.heightFull &&
    css`
      height: 100%;
    `};

  ${(props) =>
    props.heightScreen &&
    css`
      height: 100vh;
    `};

  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `};

  ${(props) =>
    props.right &&
    css`
      text-align: right;
    `};

  ${(props) =>
    props.betweenCenter &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `};

  ${(props) =>
    props.betweenBottom &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    `};

  ${(props) =>
    props.flexColCenter &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `};

  ${(props) =>
    props.flexCenter &&
    css`
      display: flex;
      align-items: center;
    `};

  ${(props) =>
    props.flexCenterEnd &&
    css`
      display: flex;
      align-items: center;
      justify-content: flex-end;
    `};

  ${(props) =>
    props.flexTop &&
    css`
      display: flex;
      align-items: flex-start;
    `};

  ${(props) =>
    props.flexHeight &&
    css`
      flex: 1 1 auto;
    `};

  ${(props) =>
    props.flexSpaceBetween &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `};


  ${(props) =>
    props.bottomRight &&
    css`
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    `};

  ${(props) =>
    props.contentTOS &&
    css`
      width: 960px;
      height: 675px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 42.16px;
      backgroun-color: #ffffff;
      padding: 10px;
    `};

  ${(props) =>
    props.modal &&
    css`
      height: 178px;
      width: 100%;
      background-color: #abc9ee;
    `};

  ${(props) =>
    props.lightText &&
    css`
      color: #b0b0b0;
    `};

  ${(props) =>
    props.black &&
    css`
      color: #111827;
    `};

  ${(props) =>
    props.yellowBg &&
    css`
      background-color: #fffc1c;
    `};

  ${(props) =>
    props.withShadow &&
    css`
      box-shadow: 0px 2px 4px #00000029;
    `};

  ${(props) =>
    props.borderBreak &&
    css`
      border-bottom: 2px solid rgba(176, 176, 176, 0.1);
    `};

  ${(props) =>
    props.doubleDividerBlue &&
    css`
      border-top-width: 0px;
      border-right-width: 0px;
      border-bottom-width: calc(6px * calc(1 - 0));
      border-left-width: 0px;
      border-color: rgba(14, 113, 235, 0.1);
      border-style: double;
    `};

  ${(props) =>
    props.imageContainer &&
    css`
      background-color: #e6e6e6;
      width: 100%;
      height: 20rem;
      border: 2px dashed #b0b0b0;
      border-radius: 8px;
    `};

  ${(props) =>
    props.privacyPolicyContent &&
    css`
      width: 879px;
      height: 640px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 42.16px;
      backgroun-color: #ffffff;
      font: normal normal normal 12px/18px Poppins;
      letter-spacing: 0.48px;
      color: #000000;
      opacity: 1;
    `};

  ${(props) =>
    props.BrakeLine &&
    css`
      width: 65rem;
      margin-top: 30px;
      margin-bottom: 30px;
      border-bottom: 1px solid #dae9fb;
    `};

  ${(props) =>
    props.Triangle &&
    css`
      border: 1px solid #0e71eb;
      width: 879px;
      height: 5px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 26.16px;
      border-left: none;
      border-right: none;
      opacity: 0.5;
    `};

  ${(props) =>
    props.registerComplete &&
    css`
      background: #abc9ee 0% 0% no-repeat padding-box;
      width: 400px;
      height: 178px;
      text-align: center;
    `};

  ${(props) =>
    props.verificationMessage &&
    css`
      margin-left: 32px;
      margin-right: 29px;
      margin-top: 45px;
      text-align: center;
      width: 341px;
      height: 70px;
    `};

  ${(props) =>
    props.registerSuccesfull &&
    css`
      text-align: center;
      width: 100%;
      margin-top: 20px;
    `}

  ${(props) =>
    props.successLogo &&
    css`
      text-align: center;
      width: 100%;
    `}

  ${(props) =>
    props.LoginSuccesButton &&
    css`
      margin: 0 auto;
      margin-top: 100px;
      width: 100%;
    `}

  ${(props) =>
    props.successMessage &&
    css`
      text-align: center;
      width: 100%;
      margin-top: 33px;
    `}

  ${(props) =>
    props.ThankYouMessage &&
    css`
      text-align: center;
      width: 100%;
      margin-top: -80px;
      font: normal normal bold 30px/46px Poppins;
    `}

  ${(props) =>
    props.paymentOption &&
    css`
      border-radius: 10px;
      padding: 10px;
      background: #f3f3f3;
      text-align: center;
      &:hover {
        border: 1px solid #0e71eb;
      }
    `}

  ${(props) =>
    props.errorMessage &&
    css`
      color: red;
      margin: 0 auto;
    `}

  ${(props) =>
    props.walletBalance &&
    css`
      width: 100%;
      box-shadow: 0 1px 2px 0 #0e71eb;
      border-radius: 5px;
      padding: 20px;
      margintop: 20px;
      display: flex;
      justify-content: space-evenly;
    `}
  ${(props) =>
    props.bankList &&
    css`
      width: 100%;
      box-shadow: 0 1px 2px 1px #0e71eb;
      border-radius: 5px;
      padding: 15px;

      @media screen and (max-width: 480px) {
        padding: 10px;
      }
    `}

  ${(props) =>
    props.addBankList &&
    css`
      border-radius: 5px;
      width: 91%;
      margin: 15px;
      text-align: center;
    `}

  ${(props) =>
    props.standardLayout &&
    css`
      height: 300px;
      width: 170px;
      background-color: #ffffff;
      border: 1px solid #0e71eb;
      border-radius: 10px;
      margin-top: 30px;
      padding: 0;
    `}


  ${(props) =>
    props.professionalLayout &&
    css`
      height: 350px;
      width: 170px;
      background-color: #ffffff;
      border: 1px solid #0e71eb;
      border-radius: 10px;
    `}

  ${(props) =>
    props.banner &&
    css`
      background-color: #abc9ee;
      height: 50px;
      width: 100%;
      margin-top: 0;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      padding: 10px;
    `}

  ${(props) =>
    props.bannerPlain &&
    css`
      height: 50px;
      width: 100%;
      margin-top: 0;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      padding: 10px;
    `}

  ${(props) =>
    props.bannerBottom &&
    css`
      background-color: #abc9ee;
      height: 59.5%;
      width: 100%;
      margin-top: 20px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      padding: 5px;
      text-align: left;
    `}


  ${(props) =>
    props.bannerCenter &&
    css`
      height: 50px;
      width: 100%;
      padding: 10px;
      background-color: #abc9ee;
    `}

  ${(props) =>
    props.bannerCenterPlain &&
    css`
      height: 50px;
      width: 100%;
      padding: 10px;
      margin-top: 20px;
    `}
`;
export default StyledDiv;
