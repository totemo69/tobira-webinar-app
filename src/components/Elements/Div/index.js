import style, {css} from 'styled-components';

const StyledDiv = style.div`
    margin: 0.25rem 0 0;
    width: 80%;
    color: #4e4e4e;
    font-size: 12px;
    letter-spacing: 0.24px;

    ${props => 
    props.withPadding && 
        css`
            padding: 1.5rem;
        `
};

    ${props => 
    props.noMargin && 
        css`
            margin: 0;
        `
};

    ${props => 
    props.marginTop && 
        css`
            margin-top: 1rem;
        `
};

    ${props => 
    props.marginBottom && 
        css`
            margin-bottom: 1rem;
        `
};

    ${props => 
    props.marginY && 
        css`
            margin-top: 1rem;
            margin-bottom: 1rem;
        `
};

    ${props => 
    props.marginY2x && 
        css`
            margin-top: 2rem;
            margin-bottom: 2rem;
        `
};

    ${props => 
    props.widthLong && 
        css`
            width: 85%;
        `
};

    ${props => 
    props.widthFull && 
        css`
            width: 100%;
        `
};

    ${props => 
    props.heightFull && 
        css`
            height: 100%;
        `
};

    ${props => 
    props.center && 
        css`
            text-align: center;
        `
};

    ${props => 
    props.betweenCenter && 
        css`
            display: flex;
            justify-content: space-between;
            align-items: center;
        `
};

    ${props => 
    props.flexColCenter && 
        css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `
};

    ${props => 
    props.TermsOfService && 
            css`
                background: #FFFFFF 0% 0% no-repeat padding-box;
                opacity: 1;
                width: 879px;
                height: 377px;
                margin-left: auto;
                margin-right: auto;
                margin-top: 50px;
                margin-bottom: 84.96px;
                font: normal normal normal 12px/18px Poppins;
                letter-spacing: 0.48px;
                color: #000000;
                opacity: 1;
            `
};

    ${props => 
        props.contentTOS &&
        css`
            width: 960px;
            height: 675px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 42.16px;
            backgroun-color: #FFFFFF;
            padding: 10px;
        `
    };

    ${props => 
        props.modal &&
        css`
            height: 178px;
            width: 100%;
            background-color: #ABC9EE;
        `
    };

    ${props => 
        props.lightText && 
        css`
            color: #b0b0b0;
            `
    };

    ${props => 
        props.privacyPolicyContent && 
        css`
            width: 879px;
            height: 640px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 42.16px;
            backgroun-color: #FFFFFF;
            font: normal normal normal 12px/18px Poppins;
            letter-spacing: 0.48px;
            color: #000000;
            opacity: 1;
        `
    };

    ${props => 
        props.Triangle && 
        css`
            border: 1px solid #0E71EB;
            width: 879px;
            height: 5px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 26.16px;
            border-left: none;
            border-right: none;
            opacity: .5;

            
        `
    };

    ${props => 
        props.registerComplete &&
        css`
            background: #ABC9EE 0% 0% no-repeat padding-box;
            width: 400px;
            height: 178px;
            text-align: center;
            
        `
    };

    ${props => 
        props.verificationMessage && 
        css`
            margin-left: 32px;
            margin-right: 29px;
            margin-top: 45px;
            text-align: center;
            width: 341px;
            height: 70px;
        `
    };

    ${props => 
        props.registerSuccesfull &&
        css`
           
            text-align: center;
            width: 100%;
            margin-top: 20px;
        `
    }

    ${props => 
        props.successLogo &&
        css`
            text-align: center;
            width: 100%;
        `
    }

    ${props => 
        props.LoginSuccesButton &&
        css`
            margin: 0 auto;
            margin-top: 100px;
            width: 100%;
        `
    }

    ${props => 
        props.successMessage &&
        css`
        text-align: center;
        width: 100%;
        margin-top: 33px;
        `
    }

    ${props => 
        props.ThankYouMessage && 
        css`
        text-align: center;
        width: 100%; margin-top: -80px; 
        font: normal normal bold 30px/46px Poppins;
        `
    }
`;
export default StyledDiv;