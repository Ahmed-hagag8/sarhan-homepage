import { Locale } from '@/lib/i18n-context'

export interface CatalogProduct {
  id: string
  pageNumber: string
  name: string
  translatedName: Record<Locale, string>
  photo: string
  description: Record<Locale, string>
  specifications: Record<Locale, string[]>
  applications: Record<Locale, string[]>
}

export const CATALOG_UI = {
  sectionTag: {
    en: '04 PRODUCTS',
    ar: '٠٤ المنتجات',
    fr: '04 PRODUITS',
    zh: '04 系列产品',
  },
  collectionTitle: {
    en: 'FLAX & LINEN COLLECTION',
    ar: 'مجموعة ألياف ومنتجات الكتان الفاخرة',
    fr: 'COLLECTION LIN & FIBRES NATURELLES',
    zh: '天然亚麻与高等级亚麻纤维系列',
  },
  collectionSubtitle: {
    en: 'Sustainably cultivated and processed to high international standards for global industrial and luxury textile export.',
    ar: 'ألياف كتان طبيعية عالية النقاء ومُجهزة بأعلى معايير الجودة العالمية لتلبية متطلبات كبرى مصانع النسيج والعزل الدولية.',
    fr: 'Cultivé de façon durable et transformé selon les normes internationales les plus strictes pour l\'industrie et le textile de luxe.',
    zh: '精选优质纯天然亚麻，遵循全球严苛出口品质标准深加工，满足高端纺织与工业应用所需。',
  },
  backToHome: {
    en: 'Back to Main Website',
    ar: 'العودة للموقع الرئيسي',
    fr: 'Retour au site principal',
    zh: '返回主站',
  },
  allProducts: {
    en: 'Full Catalog (8)',
    ar: 'الكتالوج الكامل (٨)',
    fr: 'Catalogue complet (8)',
    zh: '完整目录 (8)',
  },
  descriptionLabel: {
    en: 'DESCRIPTION',
    ar: 'الوصف',
    fr: 'DESCRIPTION',
    zh: '产品简述',
  },
  specificationsLabel: {
    en: 'SPECIFICATIONS',
    ar: 'المواصفات',
    fr: 'SPÉCIFICATIONS',
    zh: '规格参数',
  },
  applicationsLabel: {
    en: 'APPLICATIONS',
    ar: 'الاستخدامات',
    fr: 'APPLICATIONS',
    zh: '主要用途',
  },
  inquireProduct: {
    en: 'Inquire on WhatsApp',
    ar: 'استفسار عبر واتساب',
    fr: 'Demander via WhatsApp',
    zh: 'WhatsApp 快速询价',
  },
  inquireEmail: {
    en: 'Request Official Quote',
    ar: 'طلب عرض سعر رسمي',
    fr: 'Demander un devis officiel',
    zh: '发送邮件获取报价单',
  },
  companyName: {
    en: 'SARHAN FOR IMPORT & EXPORT',
    ar: 'سرحان للاستيراد والتصدير',
    fr: 'SARHAN POUR L\'IMPORT & L\'EXPORT',
    zh: 'SARHAN 进出口贸易公司',
  },
  companyTagline: {
    en: 'Global Trade Logistics & Premium Natural Commodity Sourcing',
    ar: 'الريادة في التجارة الدولية وتصدير أجود ألياف وخامات الكتان المصري',
    fr: 'Logistique du commerce mondial et approvisionnement en matières premières naturelles de qualité supérieure',
    zh: '全球商品进出口贸易与优质埃及天然亚麻原料供应链',
  },
  viewPdfCatalog: {
    en: 'Official PDF Catalog',
    ar: 'الكتالوج الرسمي المعتمد PDF',
    fr: 'Catalogue PDF officiel',
    zh: '官方原版画册 (PDF)',
  },
  filterByProduct: {
    en: 'Quick Product Jump',
    ar: 'الانتقال السريع للمنتجات',
    fr: 'Navigation rapide',
    zh: '快速定位产品',
  },
  packagingBales: {
    en: 'Export-grade secure bale packaging',
    ar: 'تغليف وتعبئة بالات مخصصة للتصدير البحري',
    fr: 'Conditionnement sécurisé en balles d\'exportation',
    zh: '高标准外贸压缩包包装',
  },
  egyptOrigin: {
    en: '100% Pure Natural Flax & Linen',
    ar: 'كتان طبيعي 100% عالي النقاء',
    fr: '100% Lin & Fibres Naturelles Pures',
    zh: '100% 纯天然优质高品级亚麻',
  },
  shipProduct: {
    en: 'Ship This Product',
    ar: 'شحن هذا المنتج',
    fr: 'Expédier ce produit',
    zh: '申请承运此产品',
  },
  shipNow: {
    en: 'Ship',
    ar: 'شحن',
    fr: 'Expédier',
    zh: '承运',
  },
  shipModalTitle: {
    en: 'Commodity Shipping Quote',
    ar: 'طلب تسعير شحن المنتج',
    fr: 'Devis d\'expédition de marchandise',
    zh: '大宗商品货运询价',
  },
  shipModalDesc: {
    en: 'Submit your shipping parameters to receive an official freight quotation and product documentation from our logistics department.',
    ar: 'املأ بيانات الشحنة والكمية المطلوبة لتزويدك بتسعير رسمي وشهادات الفحص من فريقنا اللوجستي.',
    fr: 'Renseignez les paramètres d\'expédition pour recevoir un devis officiel de notre département logistique.',
    zh: '请填写您的货运参数，我们将由专属国际物流团队为您出具正式海运/空运报价与品质证书。',
  },
  productLabel: {
    en: 'Selected Product',
    ar: 'المنتج المختار',
    fr: 'Produit sélectionné',
    zh: '已选产品',
  },
  buyerNameLabel: {
    en: 'Your Name / Company Name',
    ar: 'اسمك / اسم الشركة',
    fr: 'Votre Nom / Entreprise',
    zh: '您的姓名 / 公司名称',
  },
  buyerNamePlaceholder: {
    en: 'e.g. John Doe / Global Textiles Ltd.',
    ar: 'مثال: أحمد محمد / شركة النسيج العالمية',
    fr: 'ex. Jean Dupont / Global Textiles Ltd.',
    zh: '例如：李明 / 国际纺织进出口有限公司',
  },
  buyerEmailLabel: {
    en: 'Business Email Address',
    ar: 'البريد الإلكتروني للعمل',
    fr: 'Email Professionnel',
    zh: '企业电子邮箱',
  },
  buyerEmailPlaceholder: {
    en: 'e.g. procurement@company.com',
    ar: 'procurement@company.com',
    fr: 'procurement@company.com',
    zh: 'procurement@company.com',
  },
  buyerPhoneLabel: {
    en: 'Phone / Mobile / WeChat',
    ar: 'رقم الهاتف / الجوال',
    fr: 'Téléphone / Mobile',
    zh: '联系电话 / 手机 / 微信',
  },
  buyerPhonePlaceholder: {
    en: '+1 234 567 8900',
    ar: '+20 100 000 0000',
    fr: '+33 6 12 34 56 78',
    zh: '+86 138 0000 0000',
  },
  quantityLabel: {
    en: 'Required Quantity (Bales / MT)',
    ar: 'الكمية المطلوبة (بالات / أطنان مترية)',
    fr: 'Quantité souhaitée (Balles / Tonnes)',
    zh: '需求订货量（包数 / 公吨）',
  },
  quantityPlaceholder: {
    en: 'e.g. 50 Bales (approx 10,000 kg) or 1x40ft FCL container',
    ar: 'مثال: 50 بالة (حوالي 10,000 كجم) أو حاوية 40 قدم',
    fr: 'ex. 50 balles (env. 10 000 kg) ou 1 conteneur 40ft',
    zh: '例如：50 包（约 10,000 公斤）或 1x40 尺整箱 (FCL)',
  },
  destinationLabel: {
    en: 'Destination Port & Country',
    ar: 'ميناء وبلد الوصول',
    fr: 'Port & Pays de Destination',
    zh: '目的港口与国家',
  },
  destinationPlaceholder: {
    en: 'e.g. Port of Qingdao, China / Rotterdam / Genoa',
    ar: 'مثال: ميناء الإسكندرية / تشينغداو / جنوة',
    fr: 'ex. Port de Rotterdam / Qingdao / Marseille',
    zh: '例如：中国青岛港 / 荷兰鹿特丹港 / 意大利热那亚港',
  },
  notesLabel: {
    en: 'Specifications & Shipping Notes',
    ar: 'المواصفات والشروط الخاصة بالشحنة',
    fr: 'Spécifications & Remarques d\'expédition',
    zh: '特殊技术指标与货运要求',
  },
  notesPlaceholder: {
    en: 'Grade preference (A/B), acceptable moisture/shives, CIF/FOB preference...',
    ar: 'الرتبة المطلوبة (أ أو ب)، شروط التسليم CIF/FOB، أو أي متطلبات خاصة...',
    fr: 'Grade souhaité (A/B), tolérance d\'humidité, terme CIF/FOB...',
    zh: '期望等级（A/B级）、含杂率要求、贸易术语 CIF/FOB 等...',
  },
  submitBtn: {
    en: 'SUBMIT SHIPPING REQUEST',
    ar: 'إرسال طلب الشحن',
    fr: 'ENVOYER LA DEMANDE D\'EXPÉDITION',
    zh: '提交货运询价',
  },
  validationError: {
    en: 'Please provide your name, business email, and cargo specifications.',
    ar: 'يرجى كتابة الاسم والبريد الإلكتروني ومواصفات الشحنة.',
    fr: 'Veuillez renseigner votre nom, email et les spécifications.',
    zh: '请至少填写您的姓名、企业邮箱以及货运需求。',
  },
}

export const CATALOG_PRODUCTS: CatalogProduct[] = [
  {
    id: 'scutched-flax',
    pageNumber: '10',
    name: 'SCUTCHED FLAX',
    translatedName: {
      en: 'Scutched Flax',
      ar: 'كتان مسلّط (سكوتشد)',
      fr: 'Lin Teillé (Scutched Flax)',
      zh: '打成亚麻 (Scutched Flax)',
    },
    photo: '/products/scutched_flax_photo.jpg',
    description: {
      en: 'Long flax fibers mechanically cleaned using special machines to remove impurities and woody parts.',
      ar: 'ألياف كتان طويلة منظفة ميكانيكياً باستخدام ماكينات خاصة لإزالة الشوائب والأجزاء الخشبية.',
      fr: 'Fibres de lin longues nettoyées mécaniquement à l\'aide de machines spéciales pour éliminer les impuretés et les parties ligneuses.',
      zh: '经专业设备机械加工提纯的长亚麻纤维，彻底剔除木质颗粒与杂质。',
    },
    specifications: {
      en: ['Two grades: A (High Purity), B', 'Packed in 200–250 kg bales'],
      ar: ['رتبتان: رتبة أ (عالية النقاء)، رتبة ب', 'مكبوس في بالات زنة 200–250 كجم'],
      fr: ['Deux grades : A (Haute Pureté), B', 'Emballé en balles de 200 à 250 kg'],
      zh: ['提供两种等级：A 级（高纯度）、B 级', '标准打包重量：200–250 公斤/包'],
    },
    applications: {
      en: ['Spinning', 'Plumbing', 'Decorative purposes'],
      ar: ['الغزل والنسيج', 'أعمال السباكة والعزل', 'أغراض الديكور والتزيين'],
      fr: ['Filature', 'Plomberie', 'Applications décoratives'],
      zh: ['纺纱织造', '管道密封', '装饰工艺'],
    },
  },
  {
    id: 'hackled-flax',
    pageNumber: '11',
    name: 'HACKLED FLAX',
    translatedName: {
      en: 'Hackled Flax',
      ar: 'كتان ممشط (هاكلد)',
      fr: 'Lin Peigné (Hackled Flax)',
      zh: '精梳亚麻 (Hackled Flax)',
    },
    photo: '/products/hackled_flax_photo.jpg',
    description: {
      en: 'Long flax fibers combed after scutching, featuring higher fineness and uniformity.',
      ar: 'ألياف كتان طويلة ممشطة بعد التسليط، تتميز بنعومة فائقة وتجانس عالٍ في الخيوط.',
      fr: 'Fibres de lin longues peignées après teillage, offrant une finesse et une uniformité supérieures.',
      zh: '经打成后再经梳理的长纤维，兼具极高的细度与纤维均匀度。',
    },
    specifications: {
      en: ['Fully hackled', 'Packed in 200 kg bales'],
      ar: ['تمشيط كامل عالي النقاء', 'مكبوس في بالات زنة 200 كجم'],
      fr: ['Entièrement peigné', 'Emballé en balles de 200 kg'],
      zh: ['全精梳工艺加工', '标准打包重量：200 公斤/包'],
    },
    applications: {
      en: ['Fine spinning', 'Preparation for sliver or derived forms'],
      ar: ['الغزل الفاخر الدقيق', 'تجهيز أشرطة الشلة والمنتجات المشتقة'],
      fr: ['Filature fine de luxe', 'Préparation pour rubans de filature et formes dérivées'],
      zh: ['高支精细纺纱', '制条与衍生纤维加工前序准备'],
    },
  },
  {
    id: 'hackled-flax-sliver',
    pageNumber: '12',
    name: 'HACKLED FLAX IN SLIVER',
    translatedName: {
      en: 'Hackled Flax in Sliver',
      ar: 'شريط كتان ممشط (سليفر)',
      fr: 'Ruban de Lin Peigné (Sliver)',
      zh: '精梳亚麻条 (Flax Sliver)',
    },
    photo: '/products/hackled_flax_sliver_photo.jpg',
    description: {
      en: 'Combed flax fibers processed into sliver form for easier feeding into spinning machines.',
      ar: 'ألياف كتان ممشطة مجهزة على شكل أشرطة مستمرة لسهولة التغذية المباشرة في ماكينات الغزل.',
      fr: 'Fibres de lin peignées transformées en ruban pour une alimentation fluide des métiers à filer.',
      zh: '经精梳加工并集束成连续条状，便于直接喂入精密纺纱设备。',
    },
    specifications: {
      en: ['Ready for blending or direct spinning', 'Clean and uniform'],
      ar: ['جاهز للخلط أو الغزل المباشر', 'نظيف وموحد تماماً'],
      fr: ['Prêt pour le mélange ou la filature directe', 'Propre, pur et uniforme'],
      zh: ['适合直接纺纱或与混纺纤维配伍', '洁净度高且条干均匀'],
    },
    applications: {
      en: ['Spinning', 'Fiber blending'],
      ar: ['الغزل والنسيج', 'خلط ومزج الألياف'],
      fr: ['Filature industrielle', 'Mélange de fibres'],
      zh: ['纯麻纺纱', '多组分纤维混纺'],
    },
  },
  {
    id: 'hackled-flax-tow',
    pageNumber: '13',
    name: 'HACKLED FLAX TOW',
    translatedName: {
      en: 'Hackled Flax Tow',
      ar: 'عوادم تمشيط الكتان (تو)',
      fr: 'Étoupes de Lin Peigné (Tow)',
      zh: '精梳亚麻短麻 (Flax Tow)',
    },
    photo: '/products/hackled_flax_tow_photo.jpg',
    description: {
      en: 'Short flax fibers derived from hackling waste, naturally colored, with adjustable shives percentage upon request.',
      ar: 'ألياف كتان قصيرة مشتقة من عوادم التمشيط، بلون طبيعي، مع إمكانية ضبط نسبة القشور الخشبية حسب الطلب.',
      fr: 'Fibres courtes de lin issues du peignage, couleur naturelle, teneur en anas ajustable sur demande.',
      zh: '精梳副产短纤维，保持纯天然色泽，可根据客制要求调节麻屑含量。',
    },
    specifications: {
      en: ['Medium to short length', 'Customizable shives content'],
      ar: ['طول متوسط إلى قصير', 'نسبة قشور وشوائب قابلة للتخصيص'],
      fr: ['Longueur moyenne à courte', 'Teneur en anas personnalisable'],
      zh: ['中短纤维长度', '麻屑杂质含量可定制调整'],
    },
    applications: {
      en: ['Spinning up to Nm.5', 'Insulation', 'Technical material'],
      ar: ['الغزل حتى نمرة Nm.5', 'العزل الصوتي والحراري', 'المواد والتطبيقات التقنية'],
      fr: ['Filature jusqu\'à Nm.5', 'Isolation thermique/phonique', 'Matériaux techniques'],
      zh: ['低支纱纺造（至 Nm.5）', '环保保温隔热材料', '工业技术复合材料'],
    },
  },
  {
    id: 'rescutched-flax-tow',
    pageNumber: '14',
    name: 'RESCUTCHED FLAX TOW',
    translatedName: {
      en: 'Rescutched Flax Tow',
      ar: 'كتان ريسكوتشد تو (قصير)',
      fr: 'Étoupes de Lin Reteillé',
      zh: '重打亚麻短麻 (Rescutched Tow)',
    },
    photo: '/products/rescutched_flax_tow_photo.jpg',
    description: {
      en: 'Very short flax fibers (under 8 cm), suitable for industrial uses or paper manufacturing.',
      ar: 'ألياف كتان قصيرة جداً (أقل من 8 سم)، مخصصة للاستخدامات الصناعية وتصنيع الورق الممتاز.',
      fr: 'Fibres de lin très courtes (moins de 8 cm), adaptées aux usages industriels et à la fabrication de papier.',
      zh: '超短亚麻纤维（小于 8 厘米），专用于特种工业制造及高档纸浆造纸。',
    },
    specifications: {
      en: ['Further cleaned and refined', 'Packed in 200–250 kg bales'],
      ar: ['منظفة ومكررة بعناية فائقة', 'مكبوس في بالات زنة 200–250 كجم'],
      fr: ['Purifié et raffiné', 'Emballé en balles de 200 à 250 kg'],
      zh: ['经过深度除杂提纯', '标准打包重量：200–250 公斤/包'],
    },
    applications: {
      en: ['Paper pulp', 'Non-woven products'],
      ar: ['لب الورق الفاخر', 'الأقمشة والمنتجات غير المنسوجة'],
      fr: ['Pâte à papier de haute qualité', 'Produits non tissés'],
      zh: ['特种高韧性纸浆', '非织造布与无纺材料'],
    },
  },
  {
    id: 'rescutched-tow-sliver',
    pageNumber: '15',
    name: 'RESCUTCHED TOW SLIVER',
    translatedName: {
      en: 'Rescutched Tow Sliver',
      ar: 'شريط ريسكوتشد تو (سليفر)',
      fr: 'Ruban d\'Étoupes Reteillées',
      zh: '重打短麻条 (Tow Sliver)',
    },
    photo: '/products/rescutched_tow_sliver_photo.jpg',
    description: {
      en: 'European flax fibers reprocessed to resemble cotton in softness and length, ideal for cotton system spinning.',
      ar: 'ألياف كتان أوروبية معاد معالجتها لتشبه القطن في النعومة والطول، مثالية لمنظومات غزل القطن.',
      fr: 'Fibres de lin européennes retraitées pour égaler le coton en douceur et longueur, idéales pour la filature cotonnière.',
      zh: '进口优质亚麻纤维经特种柔化重构，在触感与长度上趋近棉纤维，完美适配棉纺体系。',
    },
    specifications: {
      en: ['High softness', 'Suitable for 20%–75% blending with cotton'],
      ar: ['نعومة ولمس فائق', 'مناسب للخلط مع القطن بنسبة 20%–75%'],
      fr: ['Grande douceur au toucher', 'Idéal pour mélange 20% à 75% avec le coton'],
      zh: ['高柔韧性与极佳亲肤感', '适配 20%–75% 棉麻混纺配比'],
    },
    applications: {
      en: ['Cotton-blend spinning', 'Technical textiles', 'Eco-friendly textiles'],
      ar: ['غزل خلطات القطن والكتان', 'المنسوجات التقنية', 'المنسوجات الصديقة للبيئة'],
      fr: ['Filature en mélange coton', 'Textiles techniques', 'Textiles éco-responsables'],
      zh: ['棉麻高支混纺', '高性能产业用纺织品', '高端环保面料开发'],
    },
  },
  {
    id: 'cottonised-flax',
    pageNumber: '16',
    name: 'COTTONISED FLAX',
    translatedName: {
      en: 'Cottonised Flax',
      ar: 'كتان قطني الطابع (معالج)',
      fr: 'Lin Cotonisé (Cottonised Flax)',
      zh: '棉化亚麻 (Cottonised Flax)',
    },
    photo: '/products/cottonised_flax_photo.jpg',
    description: {
      en: 'Natural flax treated to mimic cotton properties, short and soft, perfect for modern spinning processes.',
      ar: 'كتان طبيعي معالج ليحاكي خصائص القطن، ألياف قصيرة وفائقة النعومة، مثالي لخطوط الغزل الحديثة.',
      fr: 'Lin naturel traité pour reproduire les caractéristiques du coton, doux et court, parfait pour les métiers modernes.',
      zh: '优质天然亚麻经脱胶变性处理，兼具纯麻凉感与棉质柔软蓬松，专为现代高速纺纱打造。',
    },
    specifications: {
      en: ['Soft and blendable', 'Free from impurities'],
      ar: ['ناعم وقابل للخلط الفوري', 'خالٍ من الشوائب والعقد'],
      fr: ['Doux et facilement mélangeable', 'Exempt de toute impureté'],
      zh: ['纤维柔软极易混纺开松', '超高净度无杂质'],
    },
    applications: {
      en: ['Spinning up to Nm.15', 'Eco-textiles', 'Clothing; Insulation'],
      ar: ['الغزل حتى نمرة Nm.15', 'المنسوجات البيئية الخضراء', 'صناعة الملابس والعزل الطبيعي'],
      fr: ['Filature jusqu\'à Nm.15', 'Éco-textiles', 'Habillement et isolation naturelle'],
      zh: ['纺造可达 Nm.15 高支纱', '绿色环保生态纺织品', '高档服饰面料及生态保温层'],
    },
  },
  {
    id: 'hackled-flax-dolls',
    pageNumber: '17',
    name: 'HACKLED FLAX DOLLS',
    translatedName: {
      en: 'Hackled Flax Dolls',
      ar: 'عرائس / ضفائر كتان ممشط (أوقية)',
      fr: 'Poupées de Lin Peigné (Dolls)',
      zh: '精梳亚麻发束 (Flax Dolls)',
    },
    photo: '/products/hackled_flax_dolls_photo.jpg',
    description: {
      en: 'Flax fibers bundled into hand-usable "dolls" (Uokia, 2-head, or 4-head) for convenient manual applications.',
      ar: 'ألياف كتان مجمعة ومجدولة يدوياً في هيئة ضفائر (أوقية، رأسين، أو 4 رؤوس) للاستخدامات اليدوية السريعة.',
      fr: 'Fibres de lin nouées en poupées maniables (Uokia, 2 têtes ou 4 têtes) pour une utilisation manuelle aisée.',
      zh: '亚麻纤维整理捆扎为便携手工束发造型（Uokia、2头或4头规格），适用于便捷手工操作。',
    },
    specifications: {
      en: ['Easy to handle', 'Customizable in shape and size'],
      ar: ['سهل الاستخدام والتحكم', 'قابلة للتخصيص في الشكل والوزن'],
      fr: ['Prise en main facile et pratique', 'Forme et taille personnalisables'],
      zh: ['取用方便不缠结', '捆装规格与重量支持客制'],
    },
    applications: {
      en: ['Plumbing', 'Decoration', 'Handcrafts', 'Spinning'],
      ar: ['عزل السباكة وتوصيلات الأنابيب', 'أعمال الديكور', 'الحرف والأشغال اليدوية', 'الغزل'],
      fr: ['Plomberie et étanchéité', 'Décoration', 'Artisanat d\'art', 'Filature traditionnelle'],
      zh: ['管道螺纹密封（水暖工专用）', '艺术装饰陈列', '传统手工编织', '手工业纺织'],
    },
  },
]
