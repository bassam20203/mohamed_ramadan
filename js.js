   // بيانات الأماكن والكورسات
   const data = {
      
    القاهرة: {
        places: ["مركز تدريب القاهرة", "جامعة القاهرة", "معهد القاهرة", "مركز القاهرة للتدريب التقني"],
        courses: [
            {
                title: "HTML للمبتدئين",
                price: "150$",
                duration: "20 ساعة",
                rating: "4.8",
                image: "1.jpeg",
                type: "برمجة",
                phone: "01012345678"
            },
            {
                title: "تصميم الجرافيك",
                price: "200$",
                duration: "25 ساعة",
                rating: "4.5",
                image: "55.png",
                type: "تصميم",
                phone: "01012345678"
            },
            {
                title: "التسويق الرقمي",
                price: "180$",
                duration: "15 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تسويق",
                phone: "01012345678"
            },
            {
                title: "إدارة المشاريع",
                price: "220$",
                duration: "18 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "إدارة",
                phone: "01012345678"
            },
            {
                title: "تعلم JavaScript",
                price: "250$",
                duration: "30 ساعة",
                rating: "4.9",
                image: "https://via.placeholder.com/300",
                type: "برمجة",
                phone: "01012345678"
            },
            {
                title: "تصميم UI/UX",
                price: "210$",
                duration: "22 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "تصميم",
                phone: "01012345678"
            },
            {
                title: "التسويق عبر وسائل التواصل الاجتماعي",
                price: "190$",
                duration: "16 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة الموارد البشرية",
                price: "230$",
                duration: "20 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Python",
                price: "240$",
                duration: "28 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الشعارات",
                price: "170$",
                duration: "14 ساعة",
                rating: "4.4",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق بالمحتوى",
                price: "160$",
                duration: "15 ساعة",
                rating: "4.3",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة العمليات",
                price: "200$",
                duration: "18 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم React",
                price: "260$",
                duration: "32 ساعة",
                rating: "4.9",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الويب",
                price: "220$",
                duration: "24 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر البريد الإلكتروني",
                price: "150$",
                duration: "12 ساعة",
                rating: "4.2",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة الجودة",
                price: "210$",
                duration: "20 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Node.js",
                price: "270$",
                duration: "35 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم التطبيقات",
                price: "230$",
                duration: "26 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر محركات البحث",
                price: "180$",
                duration: "16 ساعة",
                rating: "4.4",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة المخاطر",
                price: "220$",
                duration: "18 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Angular",
                price: "280$",
                duration: "36 ساعة",
                rating: "4.9",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الرسوم المتحركة",
                price: "240$",
                duration: "28 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر المؤثرين",
                price: "190$",
                duration: "17 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة سلسلة التوريد",
                price: "230$",
                duration: "20 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Vue.js",
                price: "250$",
                duration: "30 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الهوية البصرية",
                price: "210$",
                duration: "22 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر الفيديو",
                price: "160$",
                duration: "14 ساعة",
                rating: "4.3",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة التغيير",
                price: "220$",
                duration: "18 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Laravel",
                price: "260$",
                duration: "32 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الواجهات التفاعلية",
                price: "230$",
                duration: "24 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر الواقع الافتراضي",
                price: "200$",
                duration: "20 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة الابتكار",
                price: "240$",
                duration: "22 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Django",
                price: "270$",
                duration: "34 ساعة",
                rating: "4.9",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الرسوم البيانية",
                price: "220$",
                duration: "26 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر البيانات الضخمة",
                price: "210$",
                duration: "24 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة المعرفة",
                price: "230$",
                duration: "20 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Flask",
                price: "250$",
                duration: "30 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الشعارات الاحترافية",
                price: "240$",
                duration: "28 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر الألعاب",
                price: "190$",
                duration: "16 ساعة",
                rating: "4.4",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة المشتريات",
                price: "220$",
                duration: "18 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Spring Boot",
                price: "260$",
                duration: "32 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الواجهات الرقمية",
                price: "230$",
                duration: "24 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر الذكاء الاصطناعي",
                price: "210$",
                duration: "22 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة العلاقات العامة",
                price: "240$",
                duration: "20 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Ruby on Rails",
                price: "270$",
                duration: "34 ساعة",
                rating: "4.9",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الرسوم التوضيحية",
                price: "220$",
                duration: "26 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر الواقع المعزز",
                price: "200$",
                duration: "18 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة الأزمات",
                price: "230$",
                duration: "20 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم ASP.NET",
                price: "250$",
                duration: "30 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الشعارات الإبداعية",
                price: "240$",
                duration: "28 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر الفيديو التفاعلي",
                price: "190$",
                duration: "16 ساعة",
                rating: "4.4",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة المشاريع الاحترافية",
                price: "220$",
                duration: "18 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Express.js",
                price: "260$",
                duration: "32 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الواجهات التفاعلية المتقدمة",
                price: "230$",
                duration: "24 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر البيانات الضخمة",
                price: "210$",
                duration: "22 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة المعرفة المتقدمة",
                price: "240$",
                duration: "20 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم NestJS",
                price: "270$",
                duration: "34 ساعة",
                rating: "4.9",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الرسوم المتحركة المتقدمة",
                price: "220$",
                duration: "26 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر الواقع الافتراضي",
                price: "200$",
                duration: "18 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة التغيير الاستراتيجي",
                price: "230$",
                duration: "20 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم GraphQL",
                price: "250$",
                duration: "30 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الشعارات الاحترافية المتقدمة",
                price: "240$",
                duration: "28 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر الفيديو التفاعلي المتقدم",
                price: "190$",
                duration: "16 ساعة",
                rating: "4.4",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة المشاريع الاحترافية المتقدمة",
                price: "220$",
                duration: "18 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            }
        ]
    }
,
    الغربية: {
        places: ["مركز تدريب طنطا", "جامعة طنطا", "معهد الغربية للتدريب"],
        courses: [
            {
                title: "تعلم JavaScript",
                price: "250$",
                duration: "30 ساعة",
                rating: "4.9",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "التسويق عبر الفيديو",
                price: "150$",
                duration: "15 ساعة",
                rating: "4.4",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "تعلم HTML وCSS",
                price: "180$",
                duration: "20 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم UI/UX",
                price: "200$",
                duration: "25 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر وسائل التواصل الاجتماعي",
                price: "170$",
                duration: "18 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة المشاريع",
                price: "220$",
                duration: "22 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Python",
                price: "240$",
                duration: "28 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الشعارات",
                price: "160$",
                duration: "14 ساعة",
                rating: "4.3",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق بالمحتوى",
                price: "190$",
                duration: "16 ساعة",
                rating: "4.4",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة الموارد البشرية",
                price: "210$",
                duration: "20 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم React",
                price: "260$",
                duration: "32 ساعة",
                rating: "4.9",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الويب",
                price: "230$",
                duration: "24 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر البريد الإلكتروني",
                price: "150$",
                duration: "12 ساعة",
                rating: "4.2",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة الجودة",
                price: "220$",
                duration: "20 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Node.js",
                price: "270$",
                duration: "35 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم التطبيقات",
                price: "240$",
                duration: "26 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر محركات البحث",
                price: "180$",
                duration: "16 ساعة",
                rating: "4.4",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة المخاطر",
                price: "230$",
                duration: "18 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Angular",
                price: "280$",
                duration: "36 ساعة",
                rating: "4.9",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الرسوم المتحركة",
                price: "250$",
                duration: "28 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر المؤثرين",
                price: "190$",
                duration: "17 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة سلسلة التوريد",
                price: "240$",
                duration: "22 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Vue.js",
                price: "260$",
                duration: "30 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الهوية البصرية",
                price: "220$",
                duration: "24 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر الفيديو",
                price: "170$",
                duration: "14 ساعة",
                rating: "4.3",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة التغيير",
                price: "230$",
                duration: "18 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Laravel",
                price: "270$",
                duration: "34 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الواجهات التفاعلية",
                price: "240$",
                duration: "26 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر الواقع الافتراضي",
                price: "200$",
                duration: "20 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة الابتكار",
                price: "250$",
                duration: "22 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Django",
                price: "280$",
                duration: "36 ساعة",
                rating: "4.9",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الرسوم البيانية",
                price: "230$",
                duration: "24 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر البيانات الضخمة",
                price: "210$",
                duration: "22 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة المعرفة",
                price: "240$",
                duration: "20 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Flask",
                price: "260$",
                duration: "30 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الشعارات الاحترافية",
                price: "250$",
                duration: "28 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر الألعاب",
                price: "190$",
                duration: "16 ساعة",
                rating: "4.4",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة المشتريات",
                price: "230$",
                duration: "18 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Spring Boot",
                price: "270$",
                duration: "32 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الواجهات الرقمية",
                price: "240$",
                duration: "26 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر الذكاء الاصطناعي",
                price: "220$",
                duration: "24 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة العلاقات العامة",
                price: "250$",
                duration: "20 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            }
        ]
    }
,
    المنوفية: {
        places: ["مركز تدريب شبين الكوم", "جامعة المنوفية", "معهد المنوفية للتدريب"],
        courses: [
            {
                title: "تعلم Python",
                price: "200$",
                duration: "25 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "إدارة الجودة",
                price: "180$",
                duration: "20 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم HTML وCSS",
                price: "150$",
                duration: "18 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم UI/UX",
                price: "190$",
                duration: "22 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر وسائل التواصل الاجتماعي",
                price: "170$",
                duration: "16 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة المشاريع",
                price: "210$",
                duration: "20 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم JavaScript",
                price: "230$",
                duration: "28 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الشعارات",
                price: "160$",
                duration: "14 ساعة",
                rating: "4.3",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق بالمحتوى",
                price: "180$",
                duration: "15 ساعة",
                rating: "4.4",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة الموارد البشرية",
                price: "200$",
                duration: "18 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم React",
                price: "240$",
                duration: "30 ساعة",
                rating: "4.9",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الويب",
                price: "220$",
                duration: "24 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر البريد الإلكتروني",
                price: "150$",
                duration: "12 ساعة",
                rating: "4.2",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة الجودة",
                price: "210$",
                duration: "20 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Node.js",
                price: "250$",
                duration: "32 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم التطبيقات",
                price: "230$",
                duration: "26 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر محركات البحث",
                price: "180$",
                duration: "16 ساعة",
                rating: "4.4",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة المخاطر",
                price: "220$",
                duration: "18 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Angular",
                price: "260$",
                duration: "34 ساعة",
                rating: "4.9",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الرسوم المتحركة",
                price: "240$",
                duration: "28 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر المؤثرين",
                price: "190$",
                duration: "17 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة سلسلة التوريد",
                price: "230$",
                duration: "22 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Vue.js",
                price: "250$",
                duration: "30 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الهوية البصرية",
                price: "220$",
                duration: "24 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر الفيديو",
                price: "170$",
                duration: "14 ساعة",
                rating: "4.3",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة التغيير",
                price: "230$",
                duration: "18 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Laravel",
                price: "260$",
                duration: "32 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الواجهات التفاعلية",
                price: "240$",
                duration: "26 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر الواقع الافتراضي",
                price: "200$",
                duration: "20 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة الابتكار",
                price: "250$",
                duration: "22 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Django",
                price: "270$",
                duration: "34 ساعة",
                rating: "4.9",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الرسوم البيانية",
                price: "230$",
                duration: "24 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر البيانات الضخمة",
                price: "210$",
                duration: "22 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة المعرفة",
                price: "240$",
                duration: "20 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Flask",
                price: "250$",
                duration: "30 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الشعارات الاحترافية",
                price: "240$",
                duration: "28 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر الألعاب",
                price: "190$",
                duration: "16 ساعة",
                rating: "4.4",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة المشتريات",
                price: "230$",
                duration: "18 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Spring Boot",
                price: "260$",
                duration: "32 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الواجهات الرقمية",
                price: "240$",
                duration: "26 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر الذكاء الاصطناعي",
                price: "220$",
                duration: "24 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة العلاقات العامة",
                price: "250$",
                duration: "20 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            }
        ]
    }

,
    الفيوم: {
        places: ["مركز تدريب الفيوم", "جامعة الفيوم", "معهد الفيوم للتدريب"],
        courses: [
            {
                title: "تعلم React",
                price: "220$",
                duration: "24 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "التسويق عبر محركات البحث",
                price: "160$",
                duration: "16 ساعة",
                rating: "4.4",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "تعلم HTML وCSS",
                price: "150$",
                duration: "18 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم UI/UX",
                price: "190$",
                duration: "22 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر وسائل التواصل الاجتماعي",
                price: "170$",
                duration: "16 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة المشاريع",
                price: "210$",
                duration: "20 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم JavaScript",
                price: "230$",
                duration: "28 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الشعارات",
                price: "160$",
                duration: "14 ساعة",
                rating: "4.3",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق بالمحتوى",
                price: "180$",
                duration: "15 ساعة",
                rating: "4.4",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة الموارد البشرية",
                price: "200$",
                duration: "18 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم React",
                price: "240$",
                duration: "30 ساعة",
                rating: "4.9",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الويب",
                price: "220$",
                duration: "24 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر البريد الإلكتروني",
                price: "150$",
                duration: "12 ساعة",
                rating: "4.2",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة الجودة",
                price: "210$",
                duration: "20 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Node.js",
                price: "250$",
                duration: "32 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم التطبيقات",
                price: "230$",
                duration: "26 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر محركات البحث",
                price: "180$",
                duration: "16 ساعة",
                rating: "4.4",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة المخاطر",
                price: "220$",
                duration: "18 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Angular",
                price: "260$",
                duration: "34 ساعة",
                rating: "4.9",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الرسوم المتحركة",
                price: "240$",
                duration: "28 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر المؤثرين",
                price: "190$",
                duration: "17 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة سلسلة التوريد",
                price: "230$",
                duration: "22 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Vue.js",
                price: "250$",
                duration: "30 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الهوية البصرية",
                price: "220$",
                duration: "24 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر الفيديو",
                price: "170$",
                duration: "14 ساعة",
                rating: "4.3",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة التغيير",
                price: "230$",
                duration: "18 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Laravel",
                price: "260$",
                duration: "32 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الواجهات التفاعلية",
                price: "240$",
                duration: "26 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر الواقع الافتراضي",
                price: "200$",
                duration: "20 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة الابتكار",
                price: "250$",
                duration: "22 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Django",
                price: "270$",
                duration: "34 ساعة",
                rating: "4.9",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الرسوم البيانية",
                price: "230$",
                duration: "24 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر البيانات الضخمة",
                price: "210$",
                duration: "22 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة المعرفة",
                price: "240$",
                duration: "20 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Flask",
                price: "250$",
                duration: "30 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الشعارات الاحترافية",
                price: "240$",
                duration: "28 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر الألعاب",
                price: "190$",
                duration: "16 ساعة",
                rating: "4.4",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة المشتريات",
                price: "230$",
                duration: "18 ساعة",
                rating: "4.5",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            },
            {
                title: "تعلم Spring Boot",
                price: "260$",
                duration: "32 ساعة",
                rating: "4.8",
                image: "https://via.placeholder.com/300",
                type: "برمجة"
            },
            {
                title: "تصميم الواجهات الرقمية",
                price: "240$",
                duration: "26 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "تصميم"
            },
            {
                title: "التسويق عبر الذكاء الاصطناعي",
                price: "220$",
                duration: "24 ساعة",
                rating: "4.6",
                image: "https://via.placeholder.com/300",
                type: "تسويق"
            },
            {
                title: "إدارة العلاقات العامة",
                price: "250$",
                duration: "20 ساعة",
                rating: "4.7",
                image: "https://via.placeholder.com/300",
                type: "إدارة"
            }
        ]
    }
,
الجيزة: {
    places: ["مركز تدريب الجيزة", "جامعة الجيزة", "معهد الجيزة للتدريب"],
    courses: [
        {
            title: "JavaScript الاحترافي",
            price: "250$",
            duration: "30 ساعة",
            rating: "4.9",
            image: "1.jpeg",
            type: "برمجة"
        },
        {
            title: "التسويق الرقمي",
            price: "180$",
            duration: "15 ساعة",
            rating: "4.7",
            image: "1.jpeg",
            type: "تسويق"
        }
    ]
},
الإسكندرية: {
    places: ["مركز تدريب الإسكندرية", "جامعة الإسكندرية", "معهد الإسكندرية للتدريب"],
    courses: [
        {
            title: "تحليل البيانات",
            price: "300$",
            duration: "35 ساعة",
            rating: "4.8",
            image: "1.jpeg",
            type: "تحليل البيانات"
        },
        {
            title: "ريادة الأعمال",
            price: "220$",
            duration: "18 ساعة",
            rating: "4.6",
            image: "1.jpeg",
            type: "ريادة الأعمال"
        }
    ]
},
الدقهلية: {
    places: ["مركز تدريب المنصورة", "جامعة المنصورة", "معهد المنصورة للتدريب"],
    courses: [
        {
            title: "برمجة Python",
            price: "200$",
            duration: "25 ساعة",
            rating: "4.7",
            image: "1.jpeg",
            type: "برمجة"
        },
        {
            title: "إدارة المشاريع",
            price: "180$",
            duration: "20 ساعة",
            rating: "4.5",
            image: "1.jpeg",
            type: "إدارة"
        }
    ]
},
البحيرة: {
    places: ["مركز تدريب دمنهور", "جامعة دمنهور", "معهد البحيرة للتدريب"],
    courses: [
        {
            title: "تطوير تطبيقات الهاتف",
            price: "250$",
            duration: "30 ساعة",
            rating: "4.8",
            image: "1.jpeg",
            type: "برمجة"
        },
        {
            title: "التسويق عبر وسائل التواصل الاجتماعي",
            price: "150$",
            duration: "15 ساعة",
            rating: "4.6",
            image: "1.jpeg",
            type: "تسويق"
        }
    ]
},
المنيا: {
    places: ["مركز تدريب المنيا", "جامعة المنيا", "معهد المنيا للتدريب"],
    courses: [
        {
            title: "تعلم SQL",
            price: "170$",
            duration: "18 ساعة",
            rating: "4.6",
            image: "1.jpeg",
            type: "قواعد بيانات"
        },
        {
            title: "التصوير الفوتوغرافي",
            price: "120$",
            duration: "12 ساعة",
            rating: "4.4",
            image: "1.jpeg",
            type: "تصميم"
        }
    ]
},
أسيوط: {
    places: ["مركز تدريب أسيوط", "جامعة أسيوط", "معهد أسيوط للتدريب"],
    courses: [
        {
            title: "تعلم React",
            price: "220$",
            duration: "25 ساعة",
            rating: "4.7",
            image: "11.jpeg",
            type: "برمجة"
        },
        {
            title: "إدارة الموارد البشرية",
            price: "160$",
            duration: "16 ساعة",
            rating: "4.5",
            image: "11.jpeg",
            type: "إدارة"
        }
    ]
},
سوهاج: {
    places: ["مركز تدريب سوهاج", "جامعة سوهاج", "معهد سوهاج للتدريب"],
    courses: [
        {
            title: "تعلم Node.js",
            price: "240$",
            duration: "28 ساعة",
            rating: "4.8",
            image: "15.jpeg",
            type: "برمجة"
        },
        {
            title: "التسويق بالمحتوى",
            price: "140$",
            duration: "14 ساعة",
            rating: "4.4",
            image: "16.jpeg",
            type: "تسويق"
        }
    ]
},
قنا: {
    places: ["مركز تدريب قنا", "جامعة قنا", "معهد قنا للتدريب"],
    courses: [
        {
            title: "تعلم Angular",
            price: "230$",
            duration: "26 ساعة",
            rating: "4.7",
            image: "17.jpeg",
            type: "برمجة"
        },
        {
            title: "إدارة الجودة",
            price: "190$",
            duration: "19 ساعة",
            rating: "4.6",
            image: "18.jpeg",
            type: "إدارة"
        }
    ]
},
الأقصر: {
    places: ["مركز تدريب الأقصر", "جامعة الأقصر", "معهد الأقصر للتدريب"],
    courses: [
        {
            title: "تعلم Vue.js",
            price: "210$",
            duration: "22 ساعة",
            rating: "4.6",
            image: "19.jpeg",
            type: "برمجة"
        },
        {
            title: "التسويق عبر البريد الإلكتروني",
            price: "130$",
            duration: "13 ساعة",
            rating: "4.3",
            image: "20.jpeg",
            type: "تسويق"
        }
    ]
},
أسوان: {
    places: ["مركز تدريب أسوان", "جامعة أسوان", "معهد أسوان للتدريب"],
    courses: [
        {
            title: "تعلم Laravel",
            price: "250$",
            duration: "30 ساعة",
            rating: "4.8",
            image: "21.jpeg",
            type: "برمجة"
        },
        {
            title: "إدارة العمليات",
            price: "170$",
            duration: "17 ساعة",
            rating: "4.5",
            image: "22.jpeg",
            type: "إدارة"
        }
    ]
},

 بني_سويف: {
    places: ["مركز تدريب بني سويف", "جامعة بني سويف", "معهد بني سويف للتدريب"],
    courses: [
        {
            title: "تعلم Flask",
            price: "200$",
            duration: "20 ساعة",
            rating: "4.6",
            image: "25.jpeg",
            type: "برمجة"
        },
        {
            title: "إدارة المخاطر",
            price: "150$",
            duration: "15 ساعة",
            rating: "4.3",
            image: "26.jpeg",
            type: "إدارة"
        }
    ]
},

الشرقية: {
    places: ["مركز تدريب الزقازيق", "جامعة الزقازيق", "معهد الشرقية للتدريب"],
    courses: [
        {
            title: "تعلم Ruby on Rails",
            price: "230$",
            duration: "26 ساعة",
            rating: "4.7",
            image: "29.jpeg",
            type: "برمجة"
        },
        {
            title: "إدارة سلسلة التوريد",
            price: "180$",
            duration: "18 ساعة",
            rating: "4.5",
            image: "30.jpeg",
            type: "إدارة"
        }
    ]
},

كفرالشيخ : {
    places: ["مركز تدريب كفر الشيخ", "جامعة كفر الشيخ", "معهد كفر الشيخ للتدريب"],
    courses: [
        {
            title: "تعلم Express.js",
            price: "210$",
            duration: "22 ساعة",
            rating: "4.6",
            image: "33.jpeg",
            type: "برمجة"
        },
        {
            title: "إدارة المشتريات",
            price: "160$",
            duration: "16 ساعة",
            rating: "4.4",
            image: "34.jpeg",
            type: "إدارة"
        }
    ]
},
دمياط: {
    places: ["مركز تدريب دمياط", "جامعة دمياط", "معهد دمياط للتدريب"],
    courses: [
        {
            title: "تعلم NestJS",
            price: "230$",
            duration: "26 ساعة",
            rating: "4.7",
            image: "35.jpeg",
            type: "برمجة"
        },
        {
            title: "التسويق عبر الواقع الافتراضي",
            price: "170$",
            duration: "17 ساعة",
            rating: "4.5",
            image: "36.jpeg",
            type: "تسويق"
        }
    ]
},
بورسعيد: {
    places: ["مركز تدريب بورسعيد", "جامعة بورسعيد", "معهد بورسعيد للتدريب"],
    courses: [
        {
            title: "تعلم GraphQL",
            price: "240$",
            duration: "28 ساعة",
            rating: "4.8",
            image: "37.jpeg",
            type: "برمجة"
        },
        {
            title: "إدارة العلاقات العامة",
            price: "150$",
            duration: "15 ساعة",
            rating: "4.3",
            image: "38.jpeg",
            type: "إدارة"
        }
    ]
},
الإسماعيلية: {
    places: ["مركز تدريب الإسماعيلية", "جامعة قناة السويس", "معهد الإسماعيلية للتدريب"],
    courses: [
        {
            title: "تعلم TypeScript",
            price: "220$",
            duration: "24 ساعة",
            rating: "4.7",
            image: "39.jpeg",
            type: "برمجة"
        },
        {
            title: "التسويق عبر الواقع المعزز",
            price: "160$",
            duration: "16 ساعة",
            rating: "4.4",
            image: "40.jpeg",
            type: "تسويق"
        }
    ]
},
السويس: {
    places: ["مركز تدريب السويس", "جامعة السويس", "معهد السويس للتدريب"],
    courses: [
        {
            title: "تعلم Docker",
            price: "250$",
            duration: "30 ساعة",
            rating: "4.9",
            image: "41.jpeg",
            type: "برمجة"
        },
        {
            title: "إدارة الأزمات",
            price: "180$",
            duration: "18 ساعة",
            rating: "4.5",
            image: "42.jpeg",
            type: "إدارة"
        }
    ]
},
شمال_سيناء: {
    places: ["مركز تدريب العريش", "جامعة العريش", "معهد شمال سيناء للتدريب"],
    courses: [
        {
            title: "تعلم Kubernetes",
            price: "260$",
            duration: "32 ساعة",
            rating: "4.8",
            image: "43.jpeg",
            type: "برمجة"
        },
        {
            title: "التسويق عبر الذكاء الاصطناعي",
            price: "190$",
            duration: "19 ساعة",
            rating: "4.6",
            image: "44.jpeg",
            type: "تسويق"
        }
    ]
},
 جنوب_سيناء: {
    places: ["مركز تدريب شرم الشيخ", "جامعة جنوب سيناء", "معهد جنوب سيناء للتدريب"],
    courses: [
        {
            title: "تعلم Serverless",
            price: "240$",
            duration: "28 ساعة",
            rating: "4.7",
            image: "45.jpeg",
            type: "برمجة"
        },
        {
            title: "إدارة الابتكار",
            price: "170$",
            duration: "17 ساعة",
            rating: "4.4",
            image: "46.jpeg",
            type: "إدارة"
        }
    ]
},
 البحر_الاحمر: {
    places: ["مركز تدريب الغردقة", "جامعة البحر الأحمر", "معهد البحر الأحمر للتدريب"],
    courses: [
        {
            title: "تعلم Microservices",
            price: "270$",
            duration: "34 ساعة",
            rating: "4.9",
            image: "47.jpeg",
            type: "برمجة"
        },
        {
            title: "التسويق عبر البيانات الضخمة",
            price: "200$",
            duration: "20 ساعة",
            rating: "4.7",
            image: "48.jpeg",
            type: "تسويق"
        }
    ]
},
 الوادي_الجديد: {
    places: ["مركز تدريب الخارجة", "جامعة الوادي الجديد", "معهد الوادي الجديد للتدريب"],
    courses: [
        {
            title: "تعلم Blockchain",
            price: "280$",
            duration: "36 ساعة",
            rating: "4.8",
            image: "49.jpeg",
            type: "برمجة"
        },
        {
            title: "إدارة المعرفة",
            price: "180$",
            duration: "18 ساعة",
            rating: "4.5",
            image: "50.jpeg",
            type: "إدارة"
        }
    ]
},
مطروح: {
    places: ["مركز تدريب مرسى مطروح", "جامعة مطروح", "معهد مطروح للتدريب"],
    courses: [
        {
            title: "تعلم IoT",
            price: "260$",
            duration: "32 ساعة",
            rating: "4.7",
            image: "51.jpeg",
            type: "برمجة"
        },
        {
            title: "التسويق عبر الألعاب",
            price: "190$",
            duration: "19 ساعة",
            rating: "4.6",
            image: "52.jpeg",
            type: "تسويق"
        }
    ]
},
القليوبية: {
    places: ["مركز تدريب بنها", "جامعة بنها", "معهد القليوبية للتدريب"],
    courses: [
        {
            title: "تعلم Machine Learning",
            price: "300$",
            duration: "40 ساعة",
            rating: "4.9",
            image: "53.jpeg",
            type: "برمجة"
        },
        {
            title: "إدارة التغيير",
            price: "200$",
            duration: "20 ساعة",
            rating: "4.7",
            image: "54.jpeg",
            type: "إدارة"
        }
    ]
}
};


// عناصر DOM
const citySelect = document.getElementById("city");
const locationSection = document.getElementById("locationSection");
const locationSelect = document.getElementById("location");
const filterSection = document.getElementById("filterSection");
const courseTypeSelect = document.getElementById("courseType");
const coursesSection = document.getElementById("coursesSection");
const coursesContainer = document.getElementById("coursesContainer");

// تحديث الأماكن عند اختيار المدينة
citySelect.addEventListener("change", function () {
    const selectedCity = citySelect.value;

    if (selectedCity) {
        // إظهار قسم الأماكن
        locationSection.classList.remove("hidden");

        // ملء الأماكن المتاحة
        locationSelect.innerHTML = '<option value="">-- اختر المكان --</option>';
        if (data[selectedCity]) {
            data[selectedCity].places.forEach(place => {
                locationSelect.innerHTML += `<option value="${place}">${place}</option>`;
            });
        }

        // إخفاء قسم الفلتر والكورسات حتى يتم اختيار المكان
        filterSection.classList.add("hidden");
        coursesSection.classList.add("hidden");
    } else {
        // إخفاء الأقسام إذا لم يتم اختيار مدينة
        locationSection.classList.add("hidden");
        filterSection.classList.add("hidden");
        coursesSection.classList.add("hidden");
    }
});

// تحديث الفلتر عند اختيار المكان
locationSelect.addEventListener("change", function () {
    const selectedCity = citySelect.value;
    const selectedPlace = locationSelect.value;

    if (selectedPlace && data[selectedCity]) {
        // إظهار قسم الفلتر
        filterSection.classList.remove("hidden");

        // إخفاء قسم الكورسات حتى يتم اختيار النوع
        coursesSection.classList.add("hidden");
    } else {
        // إخفاء الأقسام إذا لم يتم اختيار مكان
        filterSection.classList.add("hidden");
        coursesSection.classList.add("hidden");
    }
});

// تحديث الكورسات عند اختيار النوع
courseTypeSelect.addEventListener("change", function () {
    const selectedCity = citySelect.value;
    const selectedPlace = locationSelect.value;
    const selectedType = courseTypeSelect.value;

    if (selectedType && data[selectedCity]) {
        // إظهار قسم الكورسات
        coursesSection.classList.remove("hidden");

        // عرض الكورسات المتاحة بناءً على النوع
        coursesContainer.innerHTML = "";
        data[selectedCity].courses.forEach(course => {
            if (selectedType === "" || course.type === selectedType) {
                coursesContainer.innerHTML += `
                    <div class="course-card">
                        <img src="${course.image}" alt="${course.title}">
                        <div class="course-title">${course.title}</div>
                        <div class="course-info">💰 السعر: ${course.price}</div>
                        <div class="course-info">⏳ المدة: ${course.duration}</div>
                        <div class="course-info">⭐ التقييم: <span class="stars">${"★".repeat(Math.floor(course.rating))}${"☆".repeat(5 - Math.floor(course.rating))}</span> (${course.rating})</div>
                        <button class="details-button" onclick="showCourseDetails('${course.title}', '${course.image}', '${course.price}', '${course.duration}', '${course.rating}', '${course.phone}')">تفاصيل</button>
                    </div>
                `;
            }
        });
    } else {
        // إخفاء قسم الكورسات إذا لم يتم اختيار نوع
        coursesSection.classList.add("hidden");
    }
});

// عرض تفاصيل الكورس
function showCourseDetails(title, image, price, duration, rating, phone) {
    localStorage.setItem("courseTitle", title);
    localStorage.setItem("courseImage", image);
    localStorage.setItem("coursePrice", price);
    localStorage.setItem("courseDuration", duration);
    localStorage.setItem("courseRating", rating);
    localStorage.setItem("coursePhone", phone);
    window.location.href = "course-details.html";
}

























        // بيانات الأماكن والكورسات
  

// // عناصر DOM
// const citySelect = document.getElementById("city");
// const locationSection = document.getElementById("locationSection");
// const locationSelect = document.getElementById("location");
// const filterSection = document.getElementById("filterSection");
// const courseTypeSelect = document.getElementById("courseType");
// const coursesSection = document.getElementById("coursesSection");
// const coursesContainer = document.getElementById("coursesContainer");

// // تحديث الأماكن عند اختيار المدينة
// citySelect.addEventListener("change", function () {
//     const selectedCity = citySelect.value;

//     if (selectedCity) {
//         // إظهار قسم الأماكن
//         locationSection.classList.remove("hidden");

//         // ملء الأماكن المتاحة
//         locationSelect.innerHTML = '<option value="">-- اختر المكان --</option>';
//         if (data[selectedCity]) {
//             data[selectedCity].places.forEach(place => {
//                 locationSelect.innerHTML += `<option value="${place}">${place}</option>`;
//             });
//         }

//         // إخفاء قسم الفلتر والكورسات حتى يتم اختيار المكان
//         filterSection.classList.add("hidden");
//         coursesSection.classList.add("hidden");
//     } else {
//         // إخفاء الأقسام إذا لم يتم اختيار مدينة
//         locationSection.classList.add("hidden");
//         filterSection.classList.add("hidden");
//         coursesSection.classList.add("hidden");
//     }
// });

// // تحديث الفلتر عند اختيار المكان
// locationSelect.addEventListener("change", function () {
//     const selectedCity = citySelect.value;
//     const selectedPlace = locationSelect.value;

//     if (selectedPlace && data[selectedCity]) {
//         // إظهار قسم الفلتر
//         filterSection.classList.remove("hidden");

//         // إخفاء قسم الكورسات حتى يتم اختيار النوع
//         coursesSection.classList.add("hidden");
//     } else {
//         // إخفاء الأقسام إذا لم يتم اختيار مكان
//         filterSection.classList.add("hidden");
//         coursesSection.classList.add("hidden");
//     }
// });

// // تحديث الكورسات عند اختيار النوع
// courseTypeSelect.addEventListener("change", function () {
//     const selectedCity = citySelect.value;
//     const selectedPlace = locationSelect.value;
//     const selectedType = courseTypeSelect.value;

//     if (selectedType && data[selectedCity]) {
//         // إظهار قسم الكورسات
//         coursesSection.classList.remove("hidden");

//         // عرض الكورسات المتاحة بناءً على النوع
//         coursesContainer.innerHTML = "";
//         data[selectedCity].courses.forEach(course => {
//             if (selectedType === "" || course.type === selectedType) {
//                 coursesContainer.innerHTML += `
//                     <div class="course-card">
//                         <img src="${course.image}" alt="${course.title}">
//                         <div class="course-title">${course.title}</div>
//                         <div class="course-info">💰 السعر: ${course.price}</div>
//                         <div class="course-info">⏳ المدة: ${course.duration}</div>
//                         <div class="course-info">⭐ التقييم: <span class="stars">${"★".repeat(Math.floor(course.rating))}${"☆".repeat(5 - Math.floor(course.rating))}</span> (${course.rating})</div>
//                     </div>
//                 `;
//             }
//         });
//     } else {
//         // إخفاء قسم الكورسات إذا لم يتم اختيار نوع
//         coursesSection.classList.add("hidden");
//     }
// });
































