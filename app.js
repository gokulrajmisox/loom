/*
 * Artisan Loom Marketplace - Application Core Logic
 * SPA Routing, State Management, Bilingual Dictionary & Data Store
 */

// Application State
const state = {
  currentView: 'home',
  currentTheme: 'neydhal',
  currentLanguage: 'en',
  cart: [],
  navigationStack: ['home'],
  searchQuery: '',
  selectedCategory: 'all',
  orders: []
};

// Database Store
const database = {
  weavers: [
    {
      id: 'arulmozhi',
      name: 'Arulmozhi',
      nameTa: 'அருள்மொழி',
      legacy: '4th Generation Craftsmanship',
      legacyTa: '4-வது தலைமுறை கைவினைத்திறன்',
      location: 'Sirumugai',
      locationTa: 'சிறுமுகை',
      specialty: 'Contrast Borders',
      specialtyTa: 'முரண்பட்ட பார்டர்கள்',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBetasupE3cMfgklv7bx9LHOqa5-NY3ZzPPtTAcBpVzKZSuve3yPzRneUkRmoRXanrxTJS9u9uAkpwveJ7975pUUFVFrdx2N7vaTKJOG8KQTl1mGtujkh9XdNkVLqWpwqwMBevq5IQrWBv6EgkVrmRery4s8YMmhXkJx2zTO1V14k6B9uMCylETSncXeNX_g_i218rakEj76k2Kd6_W8T6zjtQfAM5B85hkFOAZgFk176hL2ka6vy-Wbe1dCoIkpzTRi5241TJy10w',
      banner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiOJzj42D9hpaNFmNjtQHpBTVCd7oFg5PYeRKVPZul_zrOJ987DB1xxPTuSdISwoJpL0mX6qzNEU4WDZAwxFO9vNkdf666UTVBX4-w9oAgyUK-5kWuvEmfgBRpD6Zj6yWpULU7N4GEZVKslgZ6sfs4RDNeG2d18afYGwYcPvXseZfH-YU0o_hyXBY1icWmoCV2R8usW4rZJ8kUPCc_YFqThEBqeGJOI7hOM0vubF9BTnYVPzYAa4t6zWvRT9MVlz_D-AlEei93Lpg',
      description: 'Arulmozhi represents the Sirumugai weaving circle, carrying forward a family tradition of four generations. Known for precision korvai borders and lightweight silk sarees, her craft bridges heritage motifs with modern draping aesthetics.',
      descriptionTa: 'அருள்மொழி சிறுமுகை நெசவு வட்டத்தைப் பிரதிநிதித்துவப்படுத்துகிறார், நான்கு தலைமுறைகளாக ஒரு குடும்பப் பாரம்பரியத்தை முன்னோக்கி எடுத்துச் செல்கிறார். துல்லியமான கோர்வை பார்டர்கள் மற்றும் இலகுரக பட்டு சேலைகளுக்கு பெயர் பெற்ற இவரது கைவினை, பாரம்பரிய உருவங்களை நவீன உடுத்தும் அழகியலுடன் இணைக்கிறது.'
    },
    {
      id: 'murugan',
      name: 'Thiru. Murugan',
      nameTa: 'திரு. முருகன்',
      legacy: 'Master Weaver',
      legacyTa: 'மாஸ்டர் நெசவாளர்',
      location: 'Kancheepuram',
      locationTa: 'காஞ்சிபுரம்',
      specialty: 'Pure Zari Silk',
      specialtyTa: 'சுத்தமான ஜரிகை பட்டு',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjokekMWoHbxPMjUjkDcsIDfnJ7gOmq2OFlzijN8Kr9m_SSgRz-yOCMRrbas71rJTCcYuYfvefY1j6Tm3qA9tt9wxaXmOyBPyzKy4R32xTfIV5F7AaglNx-i8wfUpB3jaoE7V7OEqza3zx14QfDAuF_0BRD3tVm0-KhFlVZo1HyQV06CLVGB1D9-prqBOWhDuXjXVyDshnM5_MRSyUSPCfzjWSRlET2GAdAIBm9-mYNxoIyu_Ki_d-LR5YMwa3q87eMc9Cdf4OFwk',
      banner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjokekMWoHbxPMjUjkDcsIDfnJ7gOmq2OFlzijN8Kr9m_SSgRz-yOCMRrbas71rJTCcYuYfvefY1j6Tm3qA9tt9wxaXmOyBPyzKy4R32xTfIV5F7AaglNx-i8wfUpB3jaoE7V7OEqza3zx14QfDAuF_0BRD3tVm0-KhFlVZo1HyQV06CLVGB1D9-prqBOWhDuXjXVyDshnM5_MRSyUSPCfzjWSRlET2GAdAIBm9-mYNxoIyu_Ki_d-LR5YMwa3q87eMc9Cdf4OFwk',
      description: 'Murugan is a designated Master Weaver in Kancheepuram with over 35 years of handloom experience. He specialises in pure gold and silver Zari work, creating heavy bridal silk sarees that are heirlooms.',
      descriptionTa: 'முருகன் காஞ்சிபுரத்தில் 35 ஆண்டுகளுக்கும் மேலான கைத்தறி அனுபவம் கொண்ட ஒரு மாஸ்டர் நெசவாளர் ஆவார். அவர் சுத்தமான தங்கம் மற்றும் வெள்ளி ஜரிகை வேலைகளில் நிபுணத்துவம் பெற்றவர், பாரம்பரியமிக்க கனமான திருமண பட்டு சேலைகளை உருவாக்குகிறார்.'
    },
    {
      id: 'lakshmi',
      name: 'Tmt. Lakshmi',
      nameTa: 'திருமதி. லட்சுமி',
      legacy: 'Skilled Weaver',
      legacyTa: 'நெசவு கலைஞர்',
      location: 'Arni',
      locationTa: 'ஆரணி',
      specialty: 'Contrast Borders',
      specialtyTa: 'முரண்பட்ட பார்டர்கள்',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvez6AzVF_ha9lxNfpAHsvj5Fq5PnJ6RnEbFmNBu3_O1ORXsFMflQJ9bi9jYMeaiwNr6TUJ489Cc5STqWPyYs_EMHG2lINynPPYp_BGBlh6xwUxiLAwcRmmYa1a_X0-LfQYS03W2ivnj6pE80pC_MykZfe_-TinbFBogpKeZKmDRRBWK7uEbS66DdHN8mHCTVAuz6zm6b2wWnxWQkru6mMlpuRCOw8UGwZYUAurUXULk_IBd5u-9sR9V9LPL2IGWGT1MxSl7mYZZE',
      banner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvez6AzVF_ha9lxNfpAHsvj5Fq5PnJ6RnEbFmNBu3_O1ORXsFMflQJ9bi9jYMeaiwNr6TUJ489Cc5STqWPyYs_EMHG2lINynPPYp_BGBlh6xwUxiLAwcRmmYa1a_X0-LfQYS03W2ivnj6pE80pC_MykZfe_-TinbFBogpKeZKmDRRBWK7uEbS66DdHN8mHCTVAuz6zm6b2wWnxWQkru6mMlpuRCOw8UGwZYUAurUXULk_IBd5u-9sR9V9LPL2IGWGT1MxSl7mYZZE',
      description: 'Lakshmi is an expert weaver based in Arni, renowned for her intricate border patterns and dual-tone weaving techniques. She operates a micro-workshop that supports local women weavers.',
      descriptionTa: 'லட்சுமி ஆரணியைச் சேர்ந்த ஒரு நிபுணத்துவம் வாய்ந்த நெசவாளர் ஆவார், இவரது சிக்கலான பார்டர் வடிவமைப்புகள் மற்றும் இரட்டை நிற நெசவு நுட்பங்களுக்கு பெயர் பெற்றவர். அவர் உள்ளூர் பெண் நெசவாளர்களை ஆதரிக்கும் ஒரு சிறு பட்டறையை நடத்துகிறார்.'
    },
    {
      id: 'karthik',
      name: 'Karthik',
      nameTa: 'கார்த்திக்',
      legacy: 'Heritage Craft',
      legacyTa: 'பாரம்பரிய கைவினை',
      location: 'Salem',
      locationTa: 'சேலம்',
      specialty: 'Fine Cotton',
      specialtyTa: 'மெல்லிய பருத்தி',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxBB2-gUMbIvMdFLljOpubXzbWXR1eSMsp0Eoau-A_wX0jZgUxZ2UZAMgCte-w93nZDOfEwKee67AXsXOI7TguOcpIAYiLZAFIfNt2RnZxrj7_rabVof2JYe7nG3HNTpIUqHjwl3fH1DwM_xcBPCAOAQLv_E0DjxC1ULiY0uN5ADj4p6gD5oKSln-ylrnRc6XZYx_b-hfpRDWqm6ta7Ayza70-0xxfkaT5zHPPr3uMDAA6RRN3nsOx3fAa5In4MlhIOptV4jQljlw',
      banner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxBB2-gUMbIvMdFLljOpubXzbWXR1eSMsp0Eoau-A_wX0jZgUxZ2UZAMgCte-w93nZDOfEwKee67AXsXOI7TguOcpIAYiLZAFIfNt2RnZxrj7_rabVof2JYe7nG3HNTpIUqHjwl3fH1DwM_xcBPCAOAQLv_E0DjxC1ULiY0uN5ADj4p6gD5oKSln-ylrnRc6XZYx_b-hfpRDWqm6ta7Ayza70-0xxfkaT5zHPPr3uMDAA6RRN3nsOx3fAa5In4MlhIOptV4jQljlw',
      description: 'Karthik is a young weaver from Salem, continuing his family\'s handloom cotton legacy. He focuses on organic cotton weaves, blending traditional techniques with modern minimalist designs.',
      descriptionTa: 'கார்த்திக் சேலத்தைச் சேர்ந்த ஒரு இளவயது நெசவாளர், தனது குடும்பத்தின் கைத்தறி பருத்தி பாரம்பரியத்தை தொடர்கிறார். அவர் இயற்கை பருத்தி நெசவுகளில் கவனம் செலுத்துகிறார், பாரம்பரிய நுட்பங்களை நவீன எளிமையான வடிவமைப்புகளுடன் இணைக்கிறார்.'
    }
  ],
  products: [
    {
      id: 'maroon-pattu',
      name: 'Royal Maroon Pattu Saree',
      nameTa: 'ராஜ கம்பீர மெரூன் பட்டு சேலை',
      price: 34500,
      weaverId: 'arulmozhi',
      category: 'kanchipuram',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUMHLkffCfG8BNd2mck7_ZTgEVyN90LZckMDetDgF9yKyw4yK2A0peXStPb6pdzJx6SuZZquymCnTzVZAZ44kZKI-lllrIRcD7GkIeUVTdgjQnjZP17xAVr5Bg9PJEw7O8fABlNvCB7Yh12sMZosJQwWr90t64zLhnS07pqRq7JpW3dhg26IOvZ-H8_VaPKdCziRBjwRmgz1KZ0ZK2IXZKz5cnoLB2Mg9NsvAGKrGpUpD95XO_8pss9qiXqRthDta2qAH5J3F_D5Y',
      gallery: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCUMHLkffCfG8BNd2mck7_ZTgEVyN90LZckMDetDgF9yKyw4yK2A0peXStPb6pdzJx6SuZZquymCnTzVZAZ44kZKI-lllrIRcD7GkIeUVTdgjQnjZP17xAVr5Bg9PJEw7O8fABlNvCB7Yh12sMZosJQwWr90t64zLhnS07pqRq7JpW3dhg26IOvZ-H8_VaPKdCziRBjwRmgz1KZ0ZK2IXZKz5cnoLB2Mg9NsvAGKrGpUpD95XO_8pss9qiXqRthDta2qAH5J3F_D5Y',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBgMhnx9CwduOzso2GfBZg2kFoHyD6CuZNwo85oqvDfkYn9knZbAXGbPUAOvvdDhrsK1iDtNOHuZwqRVAffd1tlOW1RYxVKPWT2WAuwbDMd_ec3_6CmYs9vNwqLEuuYlNNz3Zwz5tLILc3XlSHzvw5NjMCL1Z557aISm3IJTDmpmnJaNDLWcDf5uzrfwESrnoj8T2y6FgS_0Lo85tlp2Aompu6cYNRLl4KSMpVLUKoxaSEy5mMftxxaKDCUfIKIWpvfBwFUXAz6eYE',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDqh1DD-FUcssS7Nv3rTpGFgyvuiIowkRsv_nCt1UhU45hnqg4nr_bQDUP_F2xSnxkWs4yHXobZZWhB-DPcdnLDNOBbP0kNRR3nHVeIA9A4VK9Qn4pvrxkrteex2ZZdXymTWdxJ7ybcaq5V3p3LyyIvI0JTWF4J47ioqo_OPaBYDr41BRtnx-iAkr_u4jx9YjV_KuwoCYCj4MUTcpblQX53lh1pgVjRL2Wxw8Tf2FaYHBCUochmT1TFBF3CcjvC_5KykxXyUCzBc1A'
      ],
      specs: {
        fabric: 'Pure Mulberry Silk',
        fabricTa: 'சுத்தமான மல்பெரி பட்டு',
        zari: 'Half Fine Gold Zari',
        zariTa: 'அரை நுண் தங்க ஜரிகை',
        care: 'Dry Clean Only',
        careTa: 'டிரை கிளீன் மட்டும்',
        origin: 'Sirumugai / Kanchipuram',
        originTa: 'சிறுமுகை / காஞ்சிபுரம்'
      },
      description: 'A masterpiece of heritage craftsmanship, this pure Kanchipuram silk saree embodies centuries of weaving tradition. The deep maroon body is contrasted by a magnificent zari border, handwoven with authentic metallic threads detailing timeless temple motifs. Designed for momentous occasions, it offers an impeccable drape and a dignified luster.',
      descriptionTa: 'பாரம்பரிய கைவினைத்திறனின் ஒரு தலைசிறந்த படைப்பான இந்த தூய காஞ்சிபுரம் பட்டு சேலை, பல நூற்றாண்டுகளின் நெசவு பாரம்பரியத்தை உள்ளடக்கியது. ஆழமான மெரூன் உடற்பகுதி ஒரு அழகான ஜரிகை பார்டரால் வேறுபடுகிறது, இது காலமற்ற கோயில் உருவங்களை விவரிக்கும் உண்மையான உலோக நூல்களால் கையால் நெய்யப்பட்டுள்ளது. முக்கியமான தருணங்களுக்காக வடிவமைக்கப்பட்ட இது, ஒரு குறைபாடற்ற உடுத்தலையும் கண்ணியமான பொலிவையும் வழங்குகிறது.'
    },
    {
      id: 'mustard-korvai',
      name: 'Mustard Contrast Korvai Saree',
      nameTa: 'கடுகு நிற கான்ட்ராஸ்ட் கோர்வை சேலை',
      price: 28900,
      weaverId: 'lakshmi',
      category: 'arni',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe7Byn6fnoCRke7BmYifHibKfRfqYS9myv-wH2tgzqeFctVias9J04D9p84Bnyk0vamxl_69sGnEwpDspLg8eTJP5mhYZfeDZQddXDtnWAvvi2ACSC2G_TiLde7gsZMvyi7tQlea3fwmXTLN2YyGA-PaBHjrdSLoN-IVeDyYMaeE82XXJxJPfAc6Z2sRxxKE1hAXk9BTTH8fIW_aXgtG2_79Sj3sug2wLa1FD0x6EKrTmbPDv-sr-Df5yoAxrDp3GCphba_C0ygOk',
      gallery: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDe7Byn6fnoCRke7BmYifHibKfRfqYS9myv-wH2tgzqeFctVias9J04D9p84Bnyk0vamxl_69sGnEwpDspLg8eTJP5mhYZfeDZQddXDtnWAvvi2ACSC2G_TiLde7gsZMvyi7tQlea3fwmXTLN2YyGA-PaBHjrdSLoN-IVeDyYMaeE82XXJxJPfAc6Z2sRxxKE1hAXk9BTTH8fIW_aXgtG2_79Sj3sug2wLa1FD0x6EKrTmbPDv-sr-Df5yoAxrDp3GCphba_C0ygOk'
      ],
      specs: {
        fabric: 'Pure Mulberry Silk',
        fabricTa: 'சுத்தமான மல்பெரி பட்டு',
        zari: 'Tested Gold Zari',
        zariTa: 'சோதிக்கப்பட்ட தங்க ஜரிகை',
        care: 'Dry Clean Only',
        careTa: 'டிரை கிளீன் மட்டும்',
        origin: 'Arni',
        originTa: 'ஆரணி'
      },
      description: 'An elegant Arni Korvai silk saree showcasing a vibrant mustard yellow base and an interlocking deep red border. Handcrafted in Arni workshops, it represents light, modern design combined with traditional border techniques.',
      descriptionTa: 'ஒரு நேர்த்தியான ஆரணி கோர்வை பட்டு சேலை, துடிப்பான கடுகு மஞ்சள் நிற உடற்பகுதியையும், அதனுடன் பிணைக்கப்பட்ட அடர் சிவப்பு பார்டரையும் காட்டுகிறது. ஆரணி பட்டறைகளில் கையால் தயாரிக்கப்பட்ட இது, பாரம்பரிய பார்டர் நுட்பங்களுடன் இணைந்த இலகுவான, நவீன வடிவமைப்பைப் பிரதிபலிக்கிறது.'
    },
    {
      id: 'indigo-tissue',
      name: 'Indigo Temple Tissue Saree',
      nameTa: 'இண்டிகோ கோயில் டிஷ்யூ சேலை',
      price: 31200,
      weaverId: 'arulmozhi',
      category: 'sungudi',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCILrC0mqjsRys1mB_dq-HvFH0lcuW2KHWGa1JlHmjstyhF3PktGyz0jG4lGXjLp7Kr9raf6IfJYIlrWLTFAHA2znriWV3poP4uuf0ioAJMnfvhTIER0zMW_o8JXLGPyVQW_paglaNQKWX4MkN-oTMtGA77viBARxKvhlMCSVc_dJ5frXeE15JnlcTlf9o9B2wZU5fhdxYXTpe14Pv-MAY3Ve7CILDk87JekOvouUFJLSU-oX4UXfxj-2Bo3_ScmTl55xx3FNWOt1g',
      gallery: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCILrC0mqjsRys1mB_dq-HvFH0lcuW2KHWGa1JlHmjstyhF3PktGyz0jG4lGXjLp7Kr9raf6IfJYIlrWLTFAHA2znriWV3poP4uuf0ioAJMnfvhTIER0zMW_o8JXLGPyVQW_paglaNQKWX4MkN-oTMtGA77viBARxKvhlMCSVc_dJ5frXeE15JnlcTlf9o9B2wZU5fhdxYXTpe14Pv-MAY3Ve7CILDk87JekOvouUFJLSU-oX4UXfxj-2Bo3_ScmTl55xx3FNWOt1g'
      ],
      specs: {
        fabric: 'Silk Tissue',
        fabricTa: 'பட்டு டிஷ்யூ',
        zari: 'Real Silver & Gold Zari',
        zariTa: 'உண்மையான வெள்ளி மற்றும் தங்க ஜரிகை',
        care: 'Dry Clean Only',
        careTa: 'டிரை கிளீன் மட்டும்',
        origin: 'Sirumugai',
        originTa: 'சிறுமுகை'
      },
      description: 'This tissue silk saree glows with an ethereal indigo metallic sheen. Handwoven in Sirumugai, it features delicate geometric borders inspired by the traditional vanki temple patterns. Light, semi-sheer, and utterly premium.',
      descriptionTa: 'இந்த டிஷ்யூ பட்டுச் சேலை ஒரு அமானுஷ்ய இண்டிகோ உலோகப் பொலிவுடன் ஒளிர்கிறது. சிறுமுகையில் கையால் நெய்யப்பட்ட இது, பாரம்பரிய வங்கி கோயில் வடிவமைப்புகளால் ஈர்க்கப்பட்ட நுட்பமான வடிவியல் பார்டர்களைக் கொண்டுள்ளது. இலகுவானது, மெல்லியது மற்றும் முற்றிலும் பிரீமியம் தரமானது.'
    }
  ]
};

// Translation Dictionary
const dictionary = {
  en: {
    brand_neydhal: 'Neydhal',
    brand_noolava: 'Noolava',
    brand_artisanal: 'Artisanal Heritage',
    home: 'Home',
    orders: 'Orders',
    weavers: 'Weavers',
    cart: 'Cart',
    lang_label: 'English',
    lang_toggle: 'English | தமிழ்',
    welcome_title: 'Welcome to Neydhal',
    welcome_title_noolava: 'Welcome to Noolava',
    welcome_title_artisanal: 'Welcome to Artisan Loom',
    explore_heritage: 'Explore Heritage',
    explore_sub: 'Discover ancient weaves and textile art',
    weavers_near_you: 'Weavers Near You',
    weavers_sub: 'Connect with local artisans directly',
    search_placeholder: 'Search sarees, weavers, regions...',
    voice_search_btn: 'Voice Search',
    connect_btn: 'Connect',
    specialty_label: 'Specialty',
    view_profile_btn: 'View Profile',
    add_to_cart_btn: 'Add to Cart',
    buy_now_btn: 'Buy Now',
    checkout_btn: 'Checkout',
    specs_title: 'Specifications',
    gi_tag_badge: 'GI Tag',
    handloom_mark_badge: 'Handloom Mark',
    pure_handloom_badge: 'Pure Handloom',
    fabric: 'Fabric',
    zari: 'Zari',
    wash_care: 'Wash Care',
    origin: 'Origin',
    delivery_details: 'Delivery Details',
    payment_method: 'Payment Method',
    order_summary: 'Order Summary',
    confirm_order_btn: 'Confirm Order',
    confirm_btn: 'Confirm',
    order_success: 'Order Confirmed!',
    order_success_sub: 'Thank you for supporting handloom weavers. Your order is being hand-packaged.',
    back_home: 'Back to Home',
    empty_cart: 'Your shopping cart is empty.',
    view_details: 'View Details',
    voice_modal_listening: 'Listening to your voice...',
    voice_modal_hint: 'Say "Kanchipuram Saree" or "Arulmozhi Weaver"',
    connection_success: 'Connection request sent to Weaver successfully!',
    cart_added_toast: 'Added to cart successfully!',
    checkout_title: 'Checkout',
    payment_cod: 'Cash on Delivery',
    payment_upi: 'UPI / NetBanking',
    payment_card: 'Credit / Debit Card',
    fullname: 'Full Name',
    address: 'Delivery Address',
    phone: 'Phone Number',
    pincode: 'Pincode',
    change_btn: 'Change',
    total_label: 'Total',
    subtotal_label: 'Subtotal',
    delivery_label: 'Delivery',
    free_delivery: 'FREE',
    items_count: 'Item',
    items_count_plural: 'Items',
    search_empty: 'No products or weavers found matching your search.'
  },
  ta: {
    brand_neydhal: 'நெய்தல்',
    brand_noolava: 'நூலவா',
    brand_artisanal: 'நெசவு பாரம்பரியம்',
    home: 'முகப்பு',
    orders: 'ஆர்டர்கள்',
    weavers: 'நெசவாளர்கள்',
    cart: 'கூடை',
    lang_label: 'தமிழ்',
    lang_toggle: 'EN | TA',
    welcome_title: 'நெய்தலுக்கு உங்களை வரவேற்கிறோம்',
    welcome_title_noolava: 'நூலவாவுக்கு உங்களை வரவேற்கிறோம்',
    welcome_title_artisanal: 'நெசவுப் பகுதிக்கு உங்களை வரவேற்கிறோம்',
    explore_heritage: 'பாரம்பரியத்தை ஆராயுங்கள்',
    explore_sub: 'பண்டைய நெசவு முறைகள் மற்றும் துணி கலைகளை கண்டறியுங்கள்',
    weavers_near_you: 'உங்களுக்கு அருகிலுள்ள நெசவாளர்கள்',
    weavers_sub: 'உள்ளூர் கலைஞர்களுடன் நேரடியாக தொடர்பு கொள்ளுங்கள்',
    search_placeholder: 'சேலைகள், நெசவாளர்கள், பகுதிகளைத் தேடுங்கள்...',
    voice_search_btn: 'குரல் தேடல்',
    connect_btn: 'தொடர்பு கொள்ள',
    specialty_label: 'சிறப்பு',
    view_profile_btn: 'நெசவாளர் பக்கம்',
    add_to_cart_btn: 'கூடையில் சேர்க்க',
    buy_now_btn: 'வாங்கு',
    checkout_btn: 'வாங்கு',
    specs_title: 'விவரக்குறிப்புகள்',
    gi_tag_badge: 'புவிசார் குறியீடு',
    handloom_mark_badge: 'கைத்தறி முத்திரை',
    pure_handloom_badge: 'சுத்தமான கைத்தறி',
    fabric: 'துணி வகை',
    zari: 'ஜரிகை',
    wash_care: 'பராமரிப்பு',
    origin: 'ஊர்',
    delivery_details: 'விநியோக விவரங்கள்',
    payment_method: 'பணம் செலுத்தும் முறை',
    order_summary: 'ஆர்டர் சுருக்கம்',
    confirm_order_btn: 'ஆர்டரை உறுதிசெய்',
    confirm_btn: 'உறுதிசெய்',
    order_success: 'ஆர்டர் உறுதிசெய்யப்பட்டது!',
    order_success_sub: 'கைத்தறி நெசவாளர்களை ஆதரித்தமைக்கு நன்றி. உங்கள் ஆர்டர் கையால் பேக் செய்யப்படுகிறது.',
    back_home: 'முகப்பு பக்கத்திற்கு திரும்புக',
    empty_cart: 'உங்கள் கூடை காலியாக உள்ளது.',
    view_details: 'விவரங்கள் பார்க்க',
    voice_modal_listening: 'உங்கள் குரலைக் கேட்கிறது...',
    voice_modal_hint: '"காஞ்சிபுரம் சேலை" அல்லது "அருள்மொழி நெசவாளர்" என்று கூறுங்கள்',
    connection_success: 'நெசவாளருக்கு இணைப்பு கோரிக்கை வெற்றிகரமாக அனுப்பப்பட்டது!',
    cart_added_toast: 'கூடையில் வெற்றிகரமாக சேர்க்கப்பட்டது!',
    checkout_title: 'செக்அவுட்',
    payment_cod: 'டெலிவரியின் போது பணம் செலுத்துதல்',
    payment_upi: 'UPI / நெட்பேங்கிங்',
    payment_card: 'கிரெடிட் / டெபிட் கார்டு',
    fullname: 'முழு பெயர்',
    address: 'முகவரி',
    phone: 'தொலைபேசி எண்',
    pincode: 'பின்கோடு',
    change_btn: 'மாற்று',
    total_label: 'மொத்தம்',
    subtotal_label: 'துணை மொத்தம்',
    delivery_label: 'விநியோகம்',
    free_delivery: 'இலவசம்',
    items_count: 'பொருள்',
    items_count_plural: 'பொருட்கள்',
    search_empty: 'தேடலுக்கு பொருந்தும் தயாரிப்புகள் அல்லது நெசவாளர்கள் எதுவும் இல்லை.'
  }
};

// UI Translation Helper
function getTranslation(key) {
  const lang = state.currentLanguage;
  return dictionary[lang][key] || dictionary['en'][key] || key;
}

// Router Navigation Stack
function navigateTo(view, data = null) {
  state.currentView = view;
  if (data) {
    if (view === 'product') state.activeProductId = data;
    if (view === 'weaver') state.activeWeaverId = data;
  }
  
  // Push to navigation stack if it is a new view
  if (state.navigationStack[state.navigationStack.length - 1] !== view) {
    state.navigationStack.push(view);
  }
  
  renderView();
  window.scrollTo(0, 0);
}

function navigateBack() {
  if (state.navigationStack.length > 1) {
    state.navigationStack.pop(); // remove current
    const prevView = state.navigationStack[state.navigationStack.length - 1];
    state.currentView = prevView;
    renderView();
  }
}

// View Renderer Engine
function renderView() {
  // Hide all views first
  document.querySelectorAll('.view-section').forEach(section => {
    section.classList.remove('active');
  });

  // Activate current view section
  const currentSection = document.getElementById(`view-${state.currentView}`);
  if (currentSection) {
    currentSection.classList.add('active');
  }

  // Set Nav Items state
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-view') === state.currentView) {
      item.classList.add('active');
    }
  });

  document.querySelectorAll('.bottom-nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-view') === state.currentView) {
      item.classList.add('active');
    }
  });

  // Call page-specific render updates
  translatePageElements();
  
  if (state.currentView === 'home') renderHomePage();
  if (state.currentView === 'product') renderProductPage();
  if (state.currentView === 'weaver') renderWeaverPage();
  if (state.currentView === 'checkout') renderCheckoutPage();
  
  renderCartDrawer();
}

// Translate all text elements with data-translate attribute
function translatePageElements() {
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    el.textContent = getTranslation(key);
  });
  
  // Translate placeholders
  document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
    const key = el.getAttribute('data-translate-placeholder');
    el.placeholder = getTranslation(key);
  });

  // Dynamic branding text update
  const brandName = getTranslation(`brand_${state.currentTheme}`);
  const logoElements = document.querySelectorAll('.logo, .mobile-logo');
  logoElements.forEach(logo => {
    logo.textContent = brandName;
  });

  // Welcome title dynamically matching theme
  const welcomeEl = document.getElementById('welcome-text');
  if (welcomeEl) {
    welcomeEl.textContent = getTranslation(`welcome_title_${state.currentTheme}`);
  }
}

// Render Home View
function renderHomePage() {
  const container = document.getElementById('home-weavers-list');
  const productsContainer = document.getElementById('home-products-list');
  if (!container || !productsContainer) return;

  // Filter weavers and products
  let filteredWeavers = database.weavers;
  let filteredProducts = database.products;

  if (state.searchQuery) {
    const query = state.searchQuery.toLowerCase();
    filteredWeavers = database.weavers.filter(w => 
      w.name.toLowerCase().includes(query) || 
      w.location.toLowerCase().includes(query) ||
      w.specialty.toLowerCase().includes(query)
    );
    filteredProducts = database.products.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.specs.origin.toLowerCase().includes(query) ||
      p.specs.fabric.toLowerCase().includes(query)
    );
  } else if (state.selectedCategory !== 'all') {
    filteredProducts = database.products.filter(p => p.category === state.selectedCategory);
    // Find weavers in those locations
    const locations = filteredProducts.map(p => p.specs.origin.toLowerCase());
    filteredWeavers = database.weavers.filter(w => locations.some(loc => loc.includes(w.location.toLowerCase())));
  }

  // Render Category Chips Active State
  document.querySelectorAll('.category-chip').forEach(chip => {
    chip.classList.remove('active', 'btn-primary');
    chip.classList.add('btn-secondary');
    if (chip.getAttribute('data-category') === state.selectedCategory) {
      chip.classList.add('active', 'btn-primary');
      chip.classList.remove('btn-secondary');
    }
  });

  // Show Empty State if no items
  const emptyState = document.getElementById('home-empty-state');
  if (filteredWeavers.length === 0 && filteredProducts.length === 0) {
    emptyState.style.display = 'block';
  } else {
    emptyState.style.display = 'none';
  }

  // Render Weavers
  container.innerHTML = filteredWeavers.map(w => {
    const name = state.currentLanguage === 'ta' ? w.nameTa : w.name;
    const legacy = state.currentLanguage === 'ta' ? w.legacyTa : w.legacy;
    const location = state.currentLanguage === 'ta' ? w.locationTa : w.location;
    const specialty = state.currentLanguage === 'ta' ? w.specialtyTa : w.specialty;
    const isMaster = w.legacy.toLowerCase().includes('master');
    const masterBadgeHtml = isMaster ? `
      <span class="card-badge">
        <span class="material-symbols-outlined text-[16px]">verified</span> 
        ${state.currentLanguage === 'ta' ? 'மாஸ்டர்' : 'Master'}
      </span>` : '';

    return `
      <div class="weaver-card" onclick="navigateTo('weaver', '${w.id}')" style="cursor: pointer;">
        <div class="card-img-wrapper">
          <img class="card-img" src="${w.avatar}" alt="${name}">
          ${masterBadgeHtml}
        </div>
        <div class="card-info">
          <h4 class="card-title">${name}</h4>
          <p class="card-location"><span class="material-symbols-outlined text-sm">location_on</span> ${location}</p>
          <div class="card-footer">
            <span class="card-specialty">${getTranslation('specialty_label')}: ${specialty}</span>
            <button class="btn btn-secondary" onclick="event.stopPropagation(); triggerConnectionRequest('${w.id}')">
              ${getTranslation('connect_btn')}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Render Products
  productsContainer.innerHTML = filteredProducts.map(p => {
    const name = state.currentLanguage === 'ta' ? p.nameTa : p.name;
    const priceText = p.price.toLocaleString('en-IN');
    const weaver = database.weavers.find(w => w.id === p.weaverId);
    const weaverName = weaver ? (state.currentLanguage === 'ta' ? weaver.nameTa : weaver.name) : '';
    
    return `
      <div class="product-card" onclick="navigateTo('product', '${p.id}')" style="cursor: pointer;">
        <div class="card-img-wrapper">
          <img class="card-img" src="${p.image}" alt="${name}">
          <span class="card-badge">
            <span class="material-symbols-outlined text-[16px]">verified_user</span> 
            ${getTranslation('pure_handloom_badge')}
          </span>
        </div>
        <div class="card-info">
          <h4 class="card-title">${name}</h4>
          <p class="product-price">₹${priceText}</p>
          <p class="card-location" style="margin-bottom:8px;">
            <span class="material-symbols-outlined text-sm">person</span> ${weaverName}
          </p>
          <div class="card-footer">
            <span class="card-specialty">${p.specs.fabric}</span>
            <button class="btn btn-primary" onclick="event.stopPropagation(); addToCart('${p.id}')">
              ${getTranslation('add_to_cart_btn')}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Render Product Details View
function renderProductPage() {
  const p = database.products.find(prod => prod.id === state.activeProductId);
  if (!p) return;

  const name = state.currentLanguage === 'ta' ? p.nameTa : p.name;
  const description = state.currentLanguage === 'ta' ? p.descriptionTa : p.description;
  const priceText = p.price.toLocaleString('en-IN');
  const weaver = database.weavers.find(w => w.id === p.weaverId);
  const weaverName = weaver ? (state.currentLanguage === 'ta' ? weaver.nameTa : weaver.name) : '';
  const weaverLegacy = weaver ? (state.currentLanguage === 'ta' ? weaver.legacyTa : weaver.legacy) : '';
  const weaverLocation = weaver ? (state.currentLanguage === 'ta' ? weaver.locationTa : weaver.location) : '';

  // Render product detail content
  const detailsWrapper = document.getElementById('product-details-content');
  if (!detailsWrapper) return;

  // Render images gallery thumbnails
  const thumbnailsHtml = p.gallery.map((imgUrl, idx) => `
    <div class="gallery-thumb ${idx === 0 ? 'active' : ''}" onclick="setMainProductImage(this, '${imgUrl}')">
      <img src="${imgUrl}" alt="${name} thumbnail" style="width:100%; height:100%; object-fit:cover;">
    </div>
  `).join('');

  detailsWrapper.innerHTML = `
    <div class="product-details-grid">
      <!-- Image Gallery -->
      <div class="product-gallery">
        <div class="gallery-main">
          <img id="main-product-image" src="${p.image}" alt="${name}" style="width:100%; height:100%; object-fit:cover;">
          <span class="card-badge" style="top:16px; left:16px; right:auto;">
            <span class="material-symbols-outlined text-[16px]">verified</span> 
            ${getTranslation('pure_handloom_badge')}
          </span>
        </div>
        <div class="gallery-thumbs">
          ${thumbnailsHtml}
        </div>
      </div>
      
      <!-- Info Panel -->
      <div class="product-info-panel">
        <div>
          <h1 class="product-title">${name}</h1>
          <p class="product-price">₹${priceText}</p>
        </div>
        
        <div class="heritage-divider" style="margin: 8px 0;"></div>
        
        <p class="product-desc">${description}</p>
        
        <!-- Badges Gi Tag Handloom -->
        <div style="display:flex; gap:12px; margin-top:4px;">
          <span class="card-badge" style="position:static;">
            <span class="material-symbols-outlined text-[16px]">verified_user</span>
            ${getTranslation('gi_tag_badge')}
          </span>
          <span class="card-badge" style="position:static;">
            <span class="material-symbols-outlined text-[16px]">local_florist</span>
            ${getTranslation('handloom_mark_badge')}
          </span>
        </div>

        <!-- Master Weaver Profile Badge -->
        <div class="weaver-profile-badge">
          <div class="weaver-badge-avatar">
            <img src="${weaver ? weaver.avatar : ''}" alt="${weaverName}" style="width:100%; height:100%; object-fit:cover;">
          </div>
          <div style="flex-grow:1;">
            <p style="font-size:0.75rem; text-transform:uppercase; font-weight:700; color:var(--primary-color);">${weaverLegacy}</p>
            <h4 style="font-size:1.1rem; margin-top:2px;">${weaverName}</h4>
            <p style="font-size:0.8rem; color:var(--on-surface-variant); display:flex; align-items:center; gap:2px;">
              <span class="material-symbols-outlined text-sm">location_on</span> ${weaverLocation}
            </p>
          </div>
          <button class="btn btn-secondary" onclick="navigateTo('weaver', '${p.weaverId}')">
            ${getTranslation('view_profile_btn')}
          </button>
        </div>

        <!-- Specifications list -->
        <div class="specs-box" style="margin-top:8px;">
          <h3 style="font-size:1.1rem; margin-bottom:12px;" data-translate="specs_title">${getTranslation('specs_title')}</h3>
          <div class="specs-table">
            <div class="specs-row">
              <span class="specs-label">${getTranslation('fabric')}</span>
              <span class="specs-val">${state.currentLanguage === 'ta' ? p.specs.fabricTa : p.specs.fabric}</span>
            </div>
            <div class="specs-row">
              <span class="specs-label">${getTranslation('zari')}</span>
              <span class="specs-val">${state.currentLanguage === 'ta' ? p.specs.zariTa : p.specs.zari}</span>
            </div>
            <div class="specs-row">
              <span class="specs-label">${getTranslation('wash_care')}</span>
              <span class="specs-val">${state.currentLanguage === 'ta' ? p.specs.careTa : p.specs.care}</span>
            </div>
            <div class="specs-row">
              <span class="specs-label">${getTranslation('origin')}</span>
              <span class="specs-val">${state.currentLanguage === 'ta' ? p.specs.originTa : p.specs.origin}</span>
            </div>
          </div>
        </div>

        <!-- Actions on Desktop -->
        <div class="desktop-actions">
          <button class="btn btn-secondary btn-large" style="flex:1;" onclick="addToCart('${p.id}')">
            <span class="material-symbols-outlined">shopping_cart</span> ${getTranslation('add_to_cart_btn')}
          </button>
          <button class="btn btn-primary btn-large" style="flex:1;" onclick="buyNow('${p.id}')">
            ${getTranslation('buy_now_btn')}
          </button>
        </div>
      </div>
    </div>
  `;

  // Update sticky actions footer for mobile
  const stickyFooter = document.getElementById('product-sticky-footer');
  if (stickyFooter) {
    stickyFooter.innerHTML = `
      <button class="btn btn-secondary" style="flex:1;" onclick="addToCart('${p.id}')">
        <span class="material-symbols-outlined">shopping_cart</span> ${getTranslation('add_to_cart_btn')}
      </button>
      <button class="btn btn-primary" style="flex:1.5;" onclick="buyNow('${p.id}')">
        ${getTranslation('buy_now_btn')}
      </button>
    `;
  }
}

function setMainProductImage(thumbElement, imgUrl) {
  // Update main image source
  const mainImage = document.getElementById('main-product-image');
  if (mainImage) mainImage.src = imgUrl;

  // Manage active class in thumbnails
  document.querySelectorAll('.gallery-thumb').forEach(thumb => {
    thumb.classList.remove('active');
  });
  thumbElement.classList.add('active');
}

// Render Weaver Profile View
function renderWeaverPage() {
  const w = database.weavers.find(weaver => weaver.id === state.activeWeaverId);
  if (!w) return;

  const name = state.currentLanguage === 'ta' ? w.nameTa : w.name;
  const legacy = state.currentLanguage === 'ta' ? w.legacyTa : w.legacy;
  const location = state.currentLanguage === 'ta' ? w.locationTa : w.location;
  const specialty = state.currentLanguage === 'ta' ? w.specialtyTa : w.specialty;
  const description = state.currentLanguage === 'ta' ? w.descriptionTa : w.description;

  const container = document.getElementById('weaver-profile-content');
  if (!container) return;

  // Filter weaver products
  const weaverProducts = database.products.filter(p => p.weaverId === w.id);
  const productsHtml = weaverProducts.map(p => {
    const pName = state.currentLanguage === 'ta' ? p.nameTa : p.name;
    const priceText = p.price.toLocaleString('en-IN');
    return `
      <div class="product-card" onclick="navigateTo('product', '${p.id}')" style="cursor: pointer;">
        <div class="card-img-wrapper" style="height: 160px;">
          <img class="card-img" src="${p.image}" alt="${pName}">
        </div>
        <div class="card-info" style="padding: 12px;">
          <h4 class="card-title" style="font-size:1.1rem;">${pName}</h4>
          <p class="product-price" style="font-size:1.1rem; margin-top:2px;">₹${priceText}</p>
          <div class="card-footer" style="padding-top:8px; margin-top:8px;">
            <span class="card-specialty" style="font-size:0.75rem;">${p.specs.fabric}</span>
            <button class="btn btn-primary" style="padding:4px 10px; font-size:0.75rem;" onclick="event.stopPropagation(); addToCart('${p.id}')">
              ${getTranslation('add_to_cart_btn')}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <!-- Header banner details -->
    <div class="weaver-profile-header">
      <div class="weaver-profile-avatar">
        <img src="${w.avatar}" alt="${name}" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <div class="weaver-profile-meta">
        <span class="weaver-profile-tagline">${legacy}</span>
        <h1 class="weaver-profile-name">${name}</h1>
        <p class="card-location"><span class="material-symbols-outlined text-sm">location_on</span> ${location}</p>
        <p class="card-specialty" style="margin-top:4px;">${getTranslation('specialty_label')}: <strong>${specialty}</strong></p>
      </div>
      <button class="btn btn-primary" onclick="triggerConnectionRequest('${w.id}')" style="align-self:center;">
        <span class="material-symbols-outlined text-sm">chat</span> ${getTranslation('connect_btn')}
      </button>
    </div>

    <!-- Legacy / Process Story -->
    <div class="weaver-story-grid">
      <div class="weaver-bio">
        <h3 style="font-size:1.3rem; border-bottom:1px solid var(--border-color); padding-bottom:8px;">
          ${state.currentLanguage === 'ta' ? 'நெசவாளர் வரலாறு' : 'The Legacy & Tradition'}
        </h3>
        <p style="color:var(--on-surface-variant); font-size:0.98rem; line-height:1.7;">${description}</p>
        
        <h3 style="font-size:1.3rem; border-bottom:1px solid var(--border-color); padding-bottom:8px; margin-top:16px;">
          ${state.currentLanguage === 'ta' ? 'நெசவு முறை' : 'The Handloom Process'}
        </h3>
        <p style="color:var(--on-surface-variant); font-size:0.98rem; line-height:1.7;">
          ${state.currentLanguage === 'ta' ? 
            'கைத்தறி நெசவு என்பது வெறும் உடல் உழைப்பு அல்ல, அது கணிதம் மற்றும் கலை நயத்தின் கலவையாகும். ஒவ்வொரு பட்டு நூலையும் கவனமாக இணைத்து, ஜரிகை பார்டர்களை கோர்வை முறையில் இணைக்க பல நாட்கள் ஆகிறது. மரத்தால் ஆன பாரம்பரிய தறியில் நெசவாளர் அமர்ந்து கால்களாலும் கைகளாலும் தாள லயத்துடன் இயக்கி இச்சேலைகளை உருவாக்குகிறார்.' : 
            'Handloom weaving is a meticulously calculated craft. The weaver operates the wooden loom structure using a rhythmic dance of foot pedals and hand shuttles. Crafting a single Kanchipuram Korvai border requires connecting warp threads individually at the border joints—a process that takes hours of focus, patience, and absolute technical precision.'
          }
        </p>
      </div>
      
      <!-- Video Preview Card -->
      <div class="video-card">
        <div class="video-placeholder" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3xBOhhnYO3xYJw6GXlpmF7Yby1Pc3XGVzNSM5KRQQkA9lXLmqu23iu0DpluZl2Jfrn2pct6y4xDB2sX-Gufv_AEeusejeTwD_prhoguGWiYbChESqrtN3cLBtX9yf73OR-gHtpLFjSPIQ3RJ4k8yGV3Y6iFMQ8qJLT0wsA69Iae8Qs3JfJjyg72OFmUTQ2uCgV4oT_my0sFRoAI3wZZyUczbNnSzgKb9g2A-7ZhGXRzsn5SHDn3_l_Ojh8JNLi8b_xXbDxgSjzpc');">
          <div class="video-overlay" style="background:rgba(0,0,0,0.3); inset:0; position:absolute; z-index:1;"></div>
          <button class="video-play-btn" style="z-index:2;" onclick="showToast('Video playback simulation started')">
            <span class="material-symbols-outlined" style="font-size:36px; padding-left:4px;">play_arrow</span>
          </button>
        </div>
        <div style="padding:12px 16px; text-align:center;">
          <h4 style="font-size:0.9rem;">${state.currentLanguage === 'ta' ? 'நெசவு முறையை காணுங்கள்' : 'Watch Arulmozhi Weave'}</h4>
        </div>
      </div>
    </div>

    <!-- Weaver Current works -->
    <div style="margin-top:40px;">
      <h3 style="font-size:1.3rem; margin-bottom:20px;">
        ${state.currentLanguage === 'ta' ? 'அருள்மொழியின் தற்போதைய படைப்புகள்' : 'Current Works & Collection'}
      </h3>
      <div class="card-container" style="grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));">
        ${productsHtml}
      </div>
    </div>
  `;
}

// Render Checkout View
function renderCheckoutPage() {
  const container = document.getElementById('checkout-items-list');
  const summaryWrapper = document.getElementById('checkout-summary-prices');
  if (!container || !summaryWrapper) return;

  if (state.cart.length === 0) {
    navigateTo('home');
    return;
  }

  // Render items in order summary
  container.innerHTML = state.cart.map(item => {
    const p = database.products.find(prod => prod.id === item.productId);
    const pName = state.currentLanguage === 'ta' ? p.nameTa : p.name;
    const priceText = p.price.toLocaleString('en-IN');
    return `
      <div class="order-summary-item">
        <img class="order-summary-img" src="${p.image}" alt="${pName}">
        <div class="order-summary-info">
          <h4 style="font-size:0.95rem; font-weight:600;">${pName}</h4>
          <p style="font-size:0.8rem; color:var(--on-surface-variant); margin-top:2px;">Qty: ${item.quantity}</p>
        </div>
        <p style="font-weight:600; font-size:0.95rem;">₹${priceText}</p>
      </div>
    `;
  }).join('');

  // Calculate prices
  const subtotal = state.cart.reduce((sum, item) => {
    const p = database.products.find(prod => prod.id === item.productId);
    return sum + (p.price * item.quantity);
  }, 0);

  const deliveryPrice = 0; // free delivery
  const total = subtotal + deliveryPrice;

  summaryWrapper.innerHTML = `
    <div class="summary-price-row">
      <span class="specs-label">${getTranslation('subtotal_label')}</span>
      <span style="font-weight:600;">₹${subtotal.toLocaleString('en-IN')}</span>
    </div>
    <div class="summary-price-row">
      <span class="specs-label">${getTranslation('delivery_label')}</span>
      <span style="font-weight:600; color: #4caf50;">${getTranslation('free_delivery')}</span>
    </div>
    <div class="summary-price-row total">
      <span>${getTranslation('total_label')}</span>
      <span>₹${total.toLocaleString('en-IN')}</span>
    </div>
  `;
}

// Stateful Cart Logic
function addToCart(productId) {
  const existing = state.cart.find(item => item.productId === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ productId, quantity: 1 });
  }

  showToast(getTranslation('cart_added_toast'));
  renderCartDrawer();
  updateCartBadge();
}

function updateCartQty(productId, increment) {
  const item = state.cart.find(item => item.productId === productId);
  if (!item) return;

  item.quantity += increment;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(item => item.productId !== productId);
  }

  renderCartDrawer();
  updateCartBadge();
  
  // Update checkout order summary if currently on checkout page
  if (state.currentView === 'checkout') {
    renderCheckoutPage();
  }
}

function updateCartBadge() {
  const totalQty = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  
  // Desktop Header Cart Item Count
  const cartNavEl = document.querySelector('.nav-item[data-view="cart"]');
  if (cartNavEl) {
    cartNavEl.innerHTML = `${getTranslation('cart')} ${totalQty > 0 ? `(${totalQty})` : ''}`;
  }

  // Mobile Bottom Nav Cart Item Count
  const cartMobileNavEl = document.querySelector('.bottom-nav-item[data-view="cart"]');
  if (cartMobileNavEl) {
    cartMobileNavEl.querySelector('span:not(.material-symbols-outlined)').textContent = 
      `${getTranslation('cart')} ${totalQty > 0 ? `(${totalQty})` : ''}`;
  }
}

function renderCartDrawer() {
  const container = document.getElementById('cart-items-container');
  const footerWrapper = document.getElementById('cart-footer-wrapper');
  if (!container || !footerWrapper) return;

  if (state.cart.length === 0) {
    container.innerHTML = `<p class="cart-empty-message">${getTranslation('empty_cart')}</p>`;
    footerWrapper.style.display = 'none';
    return;
  }

  container.innerHTML = state.cart.map(item => {
    const p = database.products.find(prod => prod.id === item.productId);
    const pName = state.currentLanguage === 'ta' ? p.nameTa : p.name;
    const priceText = p.price.toLocaleString('en-IN');
    return `
      <div class="cart-item">
        <img class="cart-item-img" src="${p.image}" alt="${pName}">
        <div class="cart-item-info">
          <div>
            <h4 class="cart-item-title">${pName}</h4>
            <p class="cart-item-price">₹${priceText}</p>
          </div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateCartQty('${p.id}', -1)">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQty('${p.id}', 1)">+</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Calculate subtotal
  const subtotal = state.cart.reduce((sum, item) => {
    const p = database.products.find(prod => prod.id === item.productId);
    return sum + (p.price * item.quantity);
  }, 0);

  footerWrapper.style.display = 'block';
  footerWrapper.innerHTML = `
    <div class="summary-price-row" style="margin-bottom:12px; font-weight:600;">
      <span>${getTranslation('subtotal_label')}</span>
      <span>₹${subtotal.toLocaleString('en-IN')}</span>
    </div>
    <button class="btn btn-primary btn-large" style="width:100%; border-radius: var(--border-radius-sm);" onclick="toggleCartDrawer(false); navigateTo('checkout');">
      ${getTranslation('checkout_btn')}
    </button>
  `;
}

function buyNow(productId) {
  // Clear cart first, then add item and redirect
  state.cart = [{ productId, quantity: 1 }];
  updateCartBadge();
  navigateTo('checkout');
}

function toggleCartDrawer(isOpen) {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-drawer-overlay');
  if (drawer && overlay) {
    if (isOpen) {
      drawer.classList.add('open');
      overlay.classList.add('open');
    } else {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
    }
  }
}

// Toast System
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);

  // Trigger reflow to apply transition
  toast.offsetHeight;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      container.removeChild(toast);
    }, 300);
  }, 3000);
}

// Connections Request Action
function triggerConnectionRequest(weaverId) {
  const w = database.weavers.find(weaver => weaver.id === weaverId);
  const name = w ? (state.currentLanguage === 'ta' ? w.nameTa : w.name) : 'Weaver';
  
  // Show connection confirmation alert
  showToast(`${getTranslation('connection_success')} (${name})`);
}

// Search and Voice Search Simulation
function handleSearch(query) {
  state.searchQuery = query;
  if (state.currentView !== 'home') {
    navigateTo('home');
  } else {
    renderHomePage();
  }
}

function selectCategory(category) {
  state.selectedCategory = category;
  state.searchQuery = ''; // clear search when category chip clicked
  const searchInput = document.querySelector('.search-input');
  if (searchInput) searchInput.value = '';
  
  if (state.currentView !== 'home') {
    navigateTo('home');
  } else {
    renderHomePage();
  }
}

function triggerVoiceSearch() {
  const modal = document.getElementById('voice-search-modal');
  const statusText = document.getElementById('voice-status-text');
  if (!modal || !statusText) return;

  modal.classList.add('open');
  statusText.textContent = getTranslation('voice_modal_listening');

  // Simulate hearing words
  setTimeout(() => {
    statusText.textContent = state.currentLanguage === 'ta' ? 'காஞ்சிபுரம் பட்டு...' : 'Hearing "Kanchipuram Silk"...';
    setTimeout(() => {
      modal.classList.remove('open');
      const searchInput = document.querySelector('.search-input');
      if (searchInput) searchInput.value = state.currentLanguage === 'ta' ? 'காஞ்சிபுரம்' : 'Kanchipuram';
      handleSearch(state.currentLanguage === 'ta' ? 'காஞ்சிபுரம்' : 'Kanchipuram');
    }, 1500);
  }, 2000);
}

// Checkout and Order Placement
function handleOrderSubmit(event) {
  event.preventDefault();
  
  // Validate forms
  const name = document.getElementById('checkout-fullname').value;
  const address = document.getElementById('checkout-address').value;
  const phone = document.getElementById('checkout-phone').value;
  const pin = document.getElementById('checkout-pincode').value;

  if (!name || !address || !phone || !pin) {
    showToast(state.currentLanguage === 'ta' ? 'தயவுசெய்து அனைத்து விவரங்களையும் நிரப்பவும்.' : 'Please fill out all delivery details.');
    return;
  }

  // Place order (simulated)
  state.orders.push({
    id: 'ORD-' + Math.floor(Math.random() * 900000 + 100000),
    items: [...state.cart],
    customer: { name, address, phone, pin },
    date: new Date().toLocaleDateString()
  });

  // Clear cart
  state.cart = [];
  updateCartBadge();

  // Navigate to Success screen
  navigateTo('success');
}

// Global Setup Controls Panel
function selectTheme(themeName) {
  state.currentTheme = themeName;
  document.documentElement.setAttribute('data-theme', themeName);
  renderView();
}

function selectLanguage(langCode) {
  state.currentLanguage = langCode;
  renderView();
}

function toggleControlPanel() {
  const panel = document.getElementById('control-panel');
  if (panel) {
    panel.classList.toggle('open');
  }
}

// Initialize Application
window.addEventListener('DOMContentLoaded', () => {
  // Bind Header Logo click to return home
  document.querySelectorAll('.logo, .mobile-logo').forEach(logo => {
    logo.addEventListener('click', () => navigateTo('home'));
  });

  // Bind navigation links
  document.querySelectorAll('.nav-item, .bottom-nav-item').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = el.getAttribute('data-view');
      if (targetView === 'cart') {
        toggleCartDrawer(true);
      } else {
        navigateTo(targetView);
      }
    });
  });

  // Bind Search events
  const searchInput = document.querySelector('.search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
  }

  // Bind form submit
  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', handleOrderSubmit);
  }

  // Initialize view and design system
  selectTheme(state.currentTheme);
  selectLanguage(state.currentLanguage);
  renderView();
});
