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
  atelierPill: {
    en: 'ORGANIC MODERN FIBER ATELIER',
    ar: 'مركز ألياف الكتان الطبيعي الفاخر',
    fr: 'ATELIER DES FIBRES NATURELLES',
    zh: '现代天然植物纤维工坊',
  },
  isoCompliance: {
    en: 'ISO 9001 Compliance',
    ar: 'مطابق لمواصفات ISO 9001',
    fr: 'Conformité ISO 9001',
    zh: '符合 ISO 9001 质量认证',
  },
  categoryFlaxAndLinen: {
    en: 'NATURAL FLAX & LINEN',
    ar: 'كتان ولينين طبيعي',
    fr: 'LIN & FIBRES NATURELLES',
    zh: '纯天然高品级亚麻',
  },
  stepPrefix: {
    en: 'STEP',
    ar: 'المرحلة',
    fr: 'ÉTAPE',
    zh: '工序',
  },
  stagePrefix: {
    en: 'Stage',
    ar: 'المرحلة',
    fr: 'Étape',
    zh: '阶段',
  },
  requestSuccess: {
    en: 'Your shipping request has been prepared and sent!',
    ar: 'تم تجهيز وإرسال طلب الشحن بنجاح!',
    fr: 'Votre demande d\'expédition a été préparée et envoyée avec succès !',
    zh: '您的货运申请已成功生成并发送！',
  },
  topBtn: {
    en: 'Top',
    ar: 'للأعلى',
    fr: 'Haut',
    zh: '返回顶部',
  },
  rightsReserved: {
    en: 'All rights reserved.',
    ar: 'جميع الحقوق محفوظة.',
    fr: 'Tous droits réservés.',
    zh: '版权所有，保留一切权利。',
  },
  subFooterText: {
    en: 'International Logistics & Natural Commodity Sourcing',
    ar: 'الخدمات اللوجستية الدولية وتوريد السلع الطبيعية الفاخرة',
    fr: 'Logistique internationale et approvisionnement en matières premières naturelles',
    zh: '国际大宗商品物流与天然原料供应链',
  },
  viewInCatalog: {
    en: 'View in Catalog',
    ar: 'عرض بالكتالوج',
    fr: 'Voir dans le catalogue',
    zh: '在画册中查看',
  },
}

export const FLAX_ABOUT = {
  badge: {
    en: 'NATURAL FIBER HERITAGE',
    ar: 'عراقة الألياف الطبيعية',
    fr: 'PATRIMOINE DES FIBRES NATURELLES',
    zh: '天然植物纤维产业典范',
  },
  heading: {
    en: 'About Our Flax Heritage',
    ar: 'عن ريادتنا في صناعة وتجارة الكتان',
    fr: 'Notre Excellence dans le Lin',
    zh: '专注天然高品级亚麻全产业链',
  },
  description: {
    en: 'SARHAN stands as a trusted strategic supplier of premium natural flax fibers and commodities. Combining sustainable harvesting, precision mechanical processing, and rigorous quality grading, we deliver high-tensile, uniform fibers tailored to the exacting demands of global textile mills and high-performance industrial applications.',
    ar: 'تُعد شركة سرحان شريكاً استراتيجياً موثوقاً في توريد وتجهيز أجود ألياف وخامات الكتان الطبيعي. نجمع بين أساليب التعتين الطبيعي والمعالجة الميكانيكية الحديثة لنوفّر للمصانع والأسواق العالمية أليافاً عالية الشد ونقية تلبي متطلبات النسيج الفاخر والتطبيقات الصناعية الدقيقة.',
    fr: 'SARHAN est un partenaire stratégique de référence pour l\'approvisionnement en fibres de lin et matières premières naturelles. Alliant récolte durable, transformation mécanique de pointe et contrôle qualité rigoureux, nous répondons aux normes textiles et industrielles les plus strictes.',
    zh: 'SARHAN 进出口贸易公司专注为全球客户提供顶尖天然亚麻原料及精深加工纤维。依托天然优选原麻、高精密机械打成与精梳工艺，产出条干均匀、强力出众的高支纤维，满足全球高端纺织面料与工业技术复合材料需求。',
  },
  stats: [
    {
      value: '100%',
      label: {
        en: 'Pure Natural Purity',
        ar: 'نقاء طبيعي 100%',
        fr: 'Pureté 100% Naturelle',
        zh: '100% 纯天然纤维',
      },
    },
    {
      value: '200–250 kg',
      label: {
        en: 'Export-Grade Bales',
        ar: 'بالات مخصصة للتصدير',
        fr: 'Balles d\'Exportation',
        zh: '高密标准外贸包',
      },
    },
    {
      value: 'FOB / CIF',
      label: {
        en: 'End-to-End Logistics',
        ar: 'تغطية لوجستية عالمية',
        fr: 'Logistique Complète',
        zh: '全球港口直达交付',
      },
    },
  ],
}

export const FLAX_PROCESS = {
  badge: {
    en: 'INTEGRATED VALUE CHAIN',
    ar: 'سلسلة الإنتاج والتصدير المتكاملة',
    fr: 'CHAÎNE DE VALEUR INTÉGRÉE',
    zh: '全链条生产与出口交付',
  },
  title: {
    en: 'From straw to shipment',
    ar: 'من القش حتى الشحن النهائي',
    fr: 'De la paille à l\'expédition',
    zh: '从原料原茎到全球装运',
  },
  subtitle: {
    en: 'Five steps. One roof.',
    ar: 'خمس مراحل متكاملة. تحت سقف واحد.',
    fr: 'Cinq étapes. Un seul toit.',
    zh: '五大严谨工序 · 全程一体把控',
  },
  steps: [
    {
      number: '01',
      title: {
        en: 'Field',
        ar: 'الحقل',
        fr: 'Le Champ',
        zh: '天然产区',
      },
      desc: {
        en: 'Nile Delta flax straw, retted under the same sun it grew in.',
        ar: 'قش كتان من دلتا النيل، معتّن ومجفف تحت نفس الشمس التي نما تحتها.',
        fr: 'Paille de lin du delta du Nil, rouie sous le même soleil où elle a grandi.',
        zh: '精选尼罗河三角洲天然亚麻原茎，在孕育生长的同一艳阳下完成自然温润沤麻。',
      },
    },
    {
      number: '02',
      title: {
        en: 'Scutch',
        ar: 'التسليط (فصل الألياف)',
        fr: 'Le Teillage',
        zh: '机械打成',
      },
      desc: {
        en: 'Turbines free the long line fiber and knock out the shives.',
        ar: 'توربينات وماكينات حديثة تفصل ألياف الخطوط الطويلة وتتخلص من القشور والشوائب.',
        fr: 'Les turbines libèrent la fibre longue et éliminent complètement les anas.',
        zh: '高效涡轮打麻机精准剥离韧性长纤维，高效剔除木质麻屑与天然碎渣。',
      },
    },
    {
      number: '03',
      title: {
        en: 'Hackle',
        ar: 'التمشيط',
        fr: 'Le Peignage',
        zh: '精梳整理',
      },
      desc: {
        en: 'Steel pins comb the fiber parallel, uniform, spinning-ready.',
        ar: 'أمشاط فولاذية دقيقة تجعل الألياف متوازية وموحدة وجاهزة للغزل الفوري.',
        fr: 'Des pointes d\'acier peignent les fibres en parallèle, uniformes et prêtes pour la filature.',
        zh: '高密特种钢针纵向多道梳整，使纤维顺直平行、条干均匀，直接适配精密纺纱。',
      },
    },
    {
      number: '04',
      title: {
        en: 'Bale',
        ar: 'الكبس في بالات',
        fr: 'Le Pressage en Balles',
        zh: '高密打包',
      },
      desc: {
        en: 'Pressed at 200–250 kg, graded, marked, container-planned.',
        ar: 'مكبوس في بالات زنة 200–250 كجم، مصنفة بالرتب ومخططة للشحن بالحاويات.',
        fr: 'Pressé en balles de 200 à 250 kg, classifié, étiqueté et préparé pour les conteneurs.',
        zh: '高压液压打包成 200–250 公斤标准包，等级严格印标识，科学规划集装箱配载。',
      },
    },
    {
      number: '05',
      title: {
        en: 'Ship',
        ar: 'الشحن والتصدير',
        fr: 'L\'Expédition',
        zh: '全球海运',
      },
      desc: {
        en: 'FOB, CFR, or CIF — to your port, with full export documents.',
        ar: 'تسليم FOB أو CFR أو CIF — مباشرة إلى مينائك مع كامل وثائق التصدير والشهادات الرسمية.',
        fr: 'FOB, CFR ou CIF — directement à votre port, avec tous les documents officiels d\'exportation.',
        zh: '支持 FOB、CFR 或 CIF 条款 — 点对点直达目的地港口，随附完备出口通关质检证书。',
      },
    },
  ],
}

export const CATALOG_PRODUCTS: CatalogProduct[] = [
  {
    id: 'scutched-flax',
    pageNumber: '01',
    name: 'Scutched Flax',
    translatedName: {
      en: 'Scutched Flax',
      ar: 'الكتان المشوط',
      fr: 'Lin Teillé',
      zh: '机械打成长亚麻',
    },
    photo: '/products/scutched_flax_new.jpg',
    description: {
      en: 'Long flax fibers mechanically cleaned using special machines to remove impurities and woody parts.',
      ar: 'الكتان المشوط: ألياف كتان طويلة منظفة ميكانيكياً باستخدام ماكينات خاصة لإزالة الشوائب والأجزاء الخشبية.',
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
    pageNumber: '02',
    name: 'Hackled Flax',
    translatedName: {
      en: 'Hackled Flax',
      ar: 'كتان ممشط',
      fr: 'Lin Peigné',
      zh: '精梳优质长亚麻',
    },
    photo: '/products/hackled_flax_new.jpg',
    description: {
      en: 'Long flax fibers combed after scutching, featuring higher fineness and uniformity.',
      ar: 'كتان ممشط: ألياف كتان طويلة ممشطة بعد التسليط، تتميز بنعومة فائقة وتجانس عالٍ في الخيوط.',
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
    pageNumber: '03',
    name: 'Hackled Flax in Sliver',
    translatedName: {
      en: 'Hackled Flax in Sliver',
      ar: 'كتان ممشط على شكل أشرطة',
      fr: 'Ruban de Lin Peigné',
      zh: '精梳亚麻条',
    },
    photo: '/products/hackled_flax_sliver_new.jpg',
    description: {
      en: 'Combed flax fibers processed into sliver form for easier feeding into spinning machines.',
      ar: 'كتان ممشط باللون الفضي: ألياف كتان ممشطة مجهزة على شكل أشرطة مستمرة لسهولة التغذية المباشرة في ماكينات الغزل.',
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
    pageNumber: '04',
    name: 'Hackled Flax Tow',
    translatedName: {
      en: 'Hackled Flax Tow',
      ar: 'عوادم تمشيط الكتان',
      fr: 'Étoupes de Lin Peigné',
      zh: '精梳亚麻短麻',
    },
    photo: '/products/hackled_flax_tow_new.jpg',
    description: {
      en: 'Short flax fibers derived from hacking waste, naturally colored, with adjustable shives percentage upon request.',
      ar: 'شعر الكتان الناتج عن التسريح: ألياف كتان قصيرة مشتقة من عوادم التمشيط، بلون طبيعي، مع إمكانية ضبط نسبة القشور الخشبية حسب الطلب.',
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
    pageNumber: '05',
    name: 'Rescutched Flax Tow',
    translatedName: {
      en: 'Rescutched Flax Tow',
      ar: 'شعر كتان معاد تشويطه',
      fr: 'Étoupes de Lin Reteillé',
      zh: '重打亚麻短麻',
    },
    photo: '/products/rescutched_flax_tow_new.jpg',
    description: {
      en: 'Very short flax fibers (under 8 cm), suitable for industrial uses or paper manufacturing.',
      ar: 'شعر كتان معاد تشويطه: ألياف كتان قصيرة جداً (أقل من 8 سم)، مخصصة للاستخدامات الصناعية وتصنيع الورق الممتاز.',
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
    pageNumber: '06',
    name: 'Rescutched Tow Sliver',
    translatedName: {
      en: 'Rescutched Tow Sliver',
      ar: 'شريط تو كتان معاد تقشيره',
      fr: 'Ruban d\'Étoupes Reteillées',
      zh: '重打短麻条',
    },
    photo: '/products/rescutched_tow_sliver_new.jpg',
    description: {
      en: 'European flax fibers reprocessed to resemble cotton in softness and length, ideal for cotton system spinning.',
      ar: 'شريط تو كتان معاد تقشيره: ألياف كتان أوروبية معاد معالجتها لتشبه القطن في النعومة والطول، مثالية لمنظومات غزل القطن.',
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
    pageNumber: '07',
    name: 'Cottonised Flax',
    translatedName: {
      en: 'Cottonised Flax',
      ar: 'الكتان المعالج بالقطن',
      fr: 'Lin Cotonisé',
      zh: '棉化软亚麻',
    },
    photo: '/products/cottonised_flax_new.jpg',
    description: {
      en: 'Egyptian flax treated to mimic cotton properties, short and soft, perfect for modern spinning processes.',
      ar: 'الكتان المعالج بالقطن: كتان معالج ليحاكي خصائص القطن، ألياف قصيرة وفائقة النعومة، مثالي لخطوط الغزل الحديثة.',
      fr: 'Lin traité pour reproduire les caractéristiques du coton, doux et court, parfait pour les métiers modernes.',
      zh: '天然亚麻经脱胶变性处理，兼具纯麻凉感与棉质柔软蓬松，专为现代高速纺纱打造。',
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
    pageNumber: '08',
    name: 'Hackled Flax Dolls',
    translatedName: {
      en: 'Hackled Flax Dolls',
      ar: 'حزم الكتان المسرّح',
      fr: 'Poupées de Lin Peigné',
      zh: '精梳亚麻发束',
    },
    photo: '/products/hackled_flax_dolls_new.jpg',
    description: {
      en: 'Flax fibers bundled into hand-usable \'dolls\' (Uokia, 2-head, or 4-head) for convenient manual applications.',
      ar: 'حزم الكتان المسرّح: ألياف كتان مجمعة ومجدولة يدوياً في هيئة ضفائر (أوقية، رأسين، أو 4 رؤوس) للاستخدامات اليدوية السريعة.',
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
  {
    id: 'flax-seeds',
    pageNumber: '09',
    name: 'Flax Seeds',
    translatedName: {
      en: 'Flax Seeds',
      ar: 'بذور كتان',
      fr: 'Graines de Lin',
      zh: '优选高纯度亚麻籽',
    },
    photo: '/products/flax_seeds.jpg',
    description: {
      en: 'High-quality flax seeds selected for planting, supporting healthy growth and reliable cultivation.',
      ar: 'بذور كتان: بذور كتان عالية الجودة منتقاة للزراعة، تدعم النمو الصحي والإنتاج الزراعي الموثوق.',
      fr: 'Graines de lin de haute qualité sélectionnées pour les semis, favorisant une croissance saine et une culture fiable.',
      zh: '严选优质天然亚麻良种，发芽率高且适种性强，助力作物健康生长与稳产稳收。',
    },
    specifications: {
      en: ['High germination rate', 'Carefully cleaned & sorted'],
      ar: ['نسبة إنبات عالية ونقاء ممتاز', 'منقّاة ومفروزة بعناية فائقة'],
      fr: ['Haute pureté & excellent taux de germination', 'Soigneusement nettoyées et triées'],
      zh: ['高纯度与优异出苗发芽率', '严选精细除杂与颗粒饱满筛选'],
    },
    applications: {
      en: ['Agricultural planting', 'Cold-press oil extraction', 'Healthy cultivation'],
      ar: ['الزراعة والإنتاج الزراعي', 'عصر الزيوت الطبيعية', 'الزراعة الإنتاجية الموثوقة'],
      fr: ['Semis agricole', 'Extraction d\'huile par pression à froid', 'Culture durable'],
      zh: ['规模化农业优种种植', '纯天然冷榨亚麻籽油提取', '生态绿色农业生产'],
    },
  },
]
