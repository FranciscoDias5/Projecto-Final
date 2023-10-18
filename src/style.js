const styles = {
	/* GENERAL STYLES */
	boxWidth: 'xl:max-w-[1280px] w-full',
	heading2: 'font-poppins font-semibold xs:text-[48px] text-[40px] text-Black xs:leading-[76.8px] leading-[66.8px] w-full',
	paragraph: 'font-poppins font-normal text-black text-[18px] leading-[30.8px]',
	flexCenter: 'flex justify-center items-center',
	flexStart: 'flex justify-center items-start',
	paddingX: 'sm:px-16 px-6',
	paddingY: 'sm:py-16 py-6',
	padding: 'sm:px-16 px-6 sm:py-12 py-4',
	marginX: 'sm:mx-16 mx-6',
	marginY: 'sm:my-16 my-6',
	line: 'w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] mt-5',

	/* COMPONENTS STYLES */

	/* Component Navbar Styles */
	navbarNav: 'w-full flex py-6 justify-between items-center navbar bg-my-background-class',
	navbarLogo: 'w-[124px] h-[32px]',
	navbarUl: 'list-none sm:flex hidden justify-end items-center flex-1',
	navbarLi: 'font-poppins font-normal cursor-pointer text-[16px] text-black',
	navbarHamburger: 'sm:hidden flex flex-1 justify-end items-center',
	navbarHamburgerImg: 'w-[28px] h-[28px] object-contain',
	navbarDiv: 'p-6 bg-red-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar',
	navbarDivUl: 'list-none flex flex-col justify-end items-center flex-1',
	navbarDivLi: 'font-poppins font-normal cursor-pointer text-[16px] text-white',

	/* Component Hero Styles */
	heroSection: 'flex md:flex-row flex-col sm:py-16 py-6',
	heroDiv: 'flex-1 flex flex-col justify-center items-start xl:px-0 sm:px-16 px-6',
	heroDivH1: 'flex flex-row justify-between items-center w-full',
	heroH1: 'font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100px] leading-[75px]',
	heroBr: 'sm:block hidden',
	heroSpan: 'text-gradient',
	heroP: 'font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-5',
	heroDivImg: 'flex-1 flex justify-center items-center md:my-0 my-10 relative',
	heroImg: 'w-[100%] h-[100%] relative z-[5]',
	heroGradient1: 'absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient',
	heroGradient2: 'absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 orange__gradient',
	heroGradient3: 'absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 red__gradient',

	/* Component Stats Styles */
	statSection: 'flex flex-row flex-wrap justify-center items-center sm:mb-20 mb-6',
	statKey: 'flex-1 flex justify-center items-center flex-row m-3 ml-12',
	statH4: 'font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-black',
	statP: 'font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[24px] text-gradient uppercase ml-3',

	/* Component Business Styles */
	featureContainer: 'flex flex-row  p-6 rounded-[20px] feature-card',
	featureDivImg: 'flex justify-center items-center w-[64px] h-[64px] rounded-full bg-dimWhite',
	featureImg: 'w-[50%] h-[50%] object-contain',
	featureDivText: 'flex-1 flex flex-col ml-3',
	featureH4: 'font-poppins font-semibold text-black text-[18px] leading-[23px] mb-1',
	featureP: 'font-poppins font-normal text-dimBlack text-[16px] leading-[24px]',
	businessH2: 'font-poppins font-semibold xs:text-[47px] text-[40px] text-Black xs:leading-[76.8px] leading-[66.8px] w-full',
	businessBr: 'sm:block hidden',
	businessP: 'font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-5',
	businessButton: 'mt-10 pt-10',
	businessDivMap: 'flex-col',

	/* Component Billing Styles */
	billingImg: 'w-[90%] h-[90%] relative z-[5]',
	billingGradient1: 'absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full orange__gradient',
	billingGradient2: 'absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient',
	billingGradient3: 'absolute z-[0] w-[50%] h-[50%] left-20 bottom-20 red__gradient',
	billingH2: 'font-poppins font-semibold xs:text-[48px] text-[40px] text-Black xs:leading-[76.8px] leading-[66.8px] w-full',
	billingBr: 'sm:block hidden',
	billingP: 'font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-5',
	billingDiv: 'flex flex-row flex-wrap sm:mt-10 mt-6',
	billingApple: 'w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer',
	billingGoogle: 'w-[128.86px] h-[42.05px] object-contain cursor-pointer',

	/* Component CardDeal Styles */
	cardH2: 'font-poppins font-semibold xs:text-[48px] text-[40px] text-Black xs:leading-[76.8px] leading-[66.8px] w-full',
	cardBr: 'sm:block hidden',
	cardP: 'font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-5',
	cardImg: 'w-[100%] h-[100%]',
	cardGradient1: 'absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full orange__gradient',
	cardGradient2: 'absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient',
	cardGradient3: 'absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 rounded-full red__gradient',

	/* Component Feedback Styles */
	feedbackDiv: 'flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card',
	feedbackImg1: 'w-[42px] h-[27px] object-contain',
	feedbackP: 'font-poppins font-normal text-[18px] leading-[32px] text-black my-10',
	feedbackDiv2: 'flex flex-row',
	feedbackImg2: 'w-[48px] h-[48px] rounded-full',
	feedbackDivText: 'flex flex-col ml-4',
	feedbackH4: 'font-poppins font-semibold text-[20px] leading-[32px] text-black',
	feedbackP2: 'font-poppins font-normal text-[16px] leading-[24px] text-dimBlack',

	/* Component Testimonials Styles */
	testimonialSection: 'flex flex-col justify-center items-center sm:py-16 py-6 relative',
	testimonialDiv1: 'absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full red__gradient',
	testimonialDiv2: 'flex justify-center items-center',
	testimonialDiv3: 'w-full flex items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]',
	testimonialH1: 'font-poppins font-semibold xs:text-[48px] text-[40px] text-Black xs:leading-[76.8px] leading-[66.8px] w-full',
	testimonialBr: 'sm:block hidden',
	testimonialDiv4: 'w-full md:mt-0 mt-6',
	testimonialP: 'font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[450px]',
	testimonialDiv5: 'flex justify-center items-center',
	testimonialDiv6: 'flex flex-wrap sm:justify-start w-full feedback-container relative z-[1]',

	/* Component Footer Styles */
	footerSection: 'flex justify-center items-center flex-col sm:px-16 px-6 sm:py-16 py-6',
	footerDiv1: 'flex justify-center items-start md:flex-row flex-col w-full',
	footerDiv2: 'flex-[1] flex flex-col justify-start mr-10',
	footerLogo: 'w-[266px] h-[72px] object-contain',
	footerP: 'font-poppins font-normal text-black text-[18px] leading-[30.8px] mt-4 max-w-[310px]',
	footerDivMap: 'flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10',
	footerKey: 'flex flex-col ss:my-0 my-4 min-w-[150px]',
	footerH4: 'font-poppins font-medium text-[18px] leading-[27px] text-black',
	footerUl: 'list-none mt-4',
	footerLi: 'font-poppins font-normal text-[16px] leading-[24px] text-black hover:text-secondary cursor-pointer',
	footerP2: 'font-poppins font-normal text-center text-[18px] leading-[27px] text-black',
	footerDivSM: 'flex flex-row md:mt-0 mt-6',
	footerKeySM: 'w-[21px] h-[21px] object-contain cursor-pointer',

	/* Component PostNews Styles */
	postNews: 'bg-white text-dark min-h-screen',
	postContainer: 'flex flex-wrap justify-center items-center py-40',
	postForm: 'min-w-[575px] flex justify-center items-center flex-col',
	postTitle: 'font-poppins font-semibold xs:text-[70px] text-[30px] xs:leading-[53px] leading-[43px] text-red-500 pb-20',
	postDiv: 'w-full',
	postDivCenter: 'w-full text-center',
	postLabel: 'w-full font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-black',
	postInput: 'w-full block my-1 mb-6 pb-2 bg-transparent border-[0.2rem] border-red-500 focus:outline-none',
	postTextArea: ' font-poppins text-black w-full my-1 pb-20 resize-none bg-transparent border-[0.2rem] border-red-500 focus:outline-none',
	postBtns: 'inline-block w-2/5 m-4 p-4 text-white bg-red-500 cursor-pointer',

	/* Component Button Styles */
	button: 'py-4 px-6 bg-red-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] mt-10',
	button2: 'flex justify-center items-center py-4 px-6 bg-red-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] sm:ml-10 ml-0 sm:mt-0',

	/* PAGES STYLES */

	/* Page History Styles */
	historyImg: 'w-[90%] h-[90%] relative z-[5]',
	historyDivText: 'flex justify-center items-center',
	historyH2: 'font-poppins font-semibold xs:text-[48px] text-[40px] text-Black xs:leading-[76.8px] leading-[66.8px] w-full',
	historyBr: 'sm:block hidden',
	historyP: 'font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-5',
	historyImg2: 'w-[100%] h-[100%]',
	historyImgEusebio: ' w-[75%] h-[100%] pl-20',

	/* Page Squad Styles*/
	squadContainer: 'min-w-[500px] p-6 text-black font-poppins flex flex-col',
	squadImgZoom: 'w-full h-full',
	squadTitle: 'flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px] text-red-500 mb-6 mt-6',
	squadPlayerName: 'font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-black mb-6',
	squadImgOriginal: 'w-256 h-256 object-cover mb-2',
	squadRenderContainer: 'flex flex-wrap justify-center',
	squadKey: 'w-1/4 p-4',
	squadGradient: 'text-gradient',

	/* Page Partners Styles */
	partnerCenter: 'flex flex-col items-center mt-4',
	partnerTitle: 'font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-red-500',
	partnerSection: 'flex justify-center items-center my-4',
	partnerDiv1: 'w-full flex flex-wrap',
	partnerDiv2: 'flex flex-wrap justify-center items-center w-full',
	partnerKey1: 'w-1/4 flex justify-center items-center sm:min-w-[150px] min-w-[60px]',
	partnerKeyImg1: 'sm:w-[150px] w-[60px] object-contain p-4',
	partnerKey2: 'flex-1 flex justify-center items-center sm:min-w-[120px] min-w-[50px]',
	partnerKeyImg2: 'sm:w-[120px] w-[50px] object-contain p-4',
	partnerDivText: 'flex justify-center items-center',
	partnerH2: 'font-poppins font-semibold xs:text-[48px] text-[40px] text-Black xs:leading-[76.8px] leading-[66.8px] w-full',
	partnerBr: 'sm:block hidden',
	partnerP: 'font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-5',
	partnerImg: 'w-[90%] h-[90%] relative z-[5]',
	partnerImg2: 'w-[100%] h-[100%]',

	/* Page News Styles */
	news: 'bg-white text-dark min-h-screen',
	newsContainer: 'max-w-screen-xl mx-auto p-8 h-full',
	newsWrapper: 'flex flex-wrap',
	newsHeader: 'w-full pt-40',
	newsTitle: 'font-poppins font-semibold xs:text-[80px] text-[30px] xs:leading-[53px] leading-[43px] text-black pb-20',
	newsPostings: 'text-red-500',
	newsPosts: 'flex flex-wrap',
	newsPost: 'w-1/2 flex-shrink-0 p-8 border border-cream',
	newsH3: 'font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-red-500 pb-4 overflow-hidden',
	newsP: 'pb-4',
	newsBlackText: 'font-poppins text-black',
	newsBtn: 'inline-block bg-red-500 text-white py-4 px-8 m-4 transition-all cursor-pointer',

	/* Page Contact Styles */
	formContainer: 'min-w-[500px] p-6 text-black font-poppins flex flex-col',
	formCenter: 'flex flex-col items-center mt-4',
	formErrorText: 'text-red-500 h-8 pt-2 m-0',
	formTitle: 'font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-red-500',
	formInput: 'w-3/5 rounded-md border border-red-500 py-2 px-2 mt-2',
	formSubmitButton: 'w-3/5 py-2 rounded-md text-black bg-red-500 cursor-pointer mt-4',
	formSubmittedData: 'bg-black text-black p-6 text-center font-poppins font-semibold',
	formBlackText: 'font-poppins text-black',

	/* Page Weather Styles */
	weather: 'w-full h-screen relative',
	weatherContainer: 'max-w-[700px] h-[700px] mx-auto px-4 relative top-10 flex flex-col justify-between',
	weatherP: 'font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-5 text-base',
	weatherH1: 'font-poppins font-semibold xs:text-[48px] text-[40px] text-Black xs:leading-[76.8px] leading-[66.8px] w-full text-4xl',
	weatherImg: 'sm:w-[150px] w-[60px] object-contain p-4',
};

export const layout = {
	section: `flex md:flex-row flex-col ${styles.paddingY}`,
	sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

	sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
	sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

	sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
