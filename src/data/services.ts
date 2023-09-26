import service_massage_image from '../assets/images/service_massage_image.png';
import service_deco_object from '../assets/logo/deco_object.svg';
import { pathname } from './pathname';
const ENGLISH = [
    {
        image: service_massage_image,
        service_deco_object: service_deco_object,
        service: 'Novatas Crystal Spa',
        description: 'The exciting cosmopolitan city life meets a relaxing retreat at the Novatas Crystal Spa, stationed at the heart of Istanbul...',
        description_parapgrath1: 'Novatas Crystal Spa has been designed to offer the perfect setting for you to escape from the stress of everyday life and to help you relax, rejuvenate and enjoy moments of your own personal well-being.',
        description_parapgrath2: "With a total area of 102 m2, Novatas Crystal Spa incorporates 5 massage rooms, with one reserved for couples, an indoor swimming pool with a jacuzzi, a Turkish bath, a steam bath, a sauna, a fitness centre and specially designed relaxation rooms, where you can enjoy complete peace, harmony and relaxation. Our hammam rituals, spa massages, therapies and beauty treatments are all conducted by professional massage therapists, who have years of experience in holistic healing practices ensuring you feel relaxed, balanced, refreshed and invigorated after your session.",
        description_parapgrath3: " We invite you to treat yourself to a customized wellness journey; An unforgettable Novatas Crystal Spa experience that will revitalize your body, mind and soul through special therapies featuring the most exclusive examples of the Far East's traditional and modern therapeutic as well as wellness philosophies."
    },
    {
        image: service_massage_image,
        service_deco_object: service_deco_object,
        service: 'Catma Mescit Hammam',
        description: 'After a comprehensive renovation period that lasted for 5 years, Çatma Mescit Hammam has been stylishly restored back to its former glory, opening its doors to its guests in 2019 and still reflecting the magnificence of its era. Receiving spa consultancy from Çırağan Sanitas Spa during the initial stage of its establishment, Çatma Mescit Hammam offers its guests a unique experience that will stop time in a magical atmosphere, one that bears the traces of history!',
        description_parapgrath1: 'After a comprehensive renovation period that lasted for 5 years, Çatma Mescit Hammam has been stylishly restored back to its former glory, opening its doors to its guests in 2019 and still reflecting the magnificence of its era. ',
        description_parapgrath2: 'Receiving spa consultancy from Çırağan Sanitas Spa during the initial stage of its establishment, Çatma Mescit Hammam offers its guests a unique experience that will stop time in a magical atmosphere, one that bears the traces of history!',
        description_parapgrath3: ''
    },
    {
        image: service_massage_image,
        service_deco_object: service_deco_object,
        service: 'Catma Mescit Hammam',
        description: 'After a comprehensive renovation period that lasted for 5 years, Çatma Mescit Hammam has been stylishly restored back to its former glory, opening its doors to its guests in 2019 and still reflecting the magnificence of its era. Receiving spa consultancy from Çırağan Sanitas Spa during the initial stage of its establishment, Çatma Mescit Hammam offers its guests a unique experience that will stop time in a magical atmosphere, one that bears the traces of history!',
        description_parapgrath1: 'After a comprehensive renovation period that lasted for 5 years, Çatma Mescit Hammam has been stylishly restored back to its former glory, opening its doors to its guests in 2019 and still reflecting the magnificence of its era. ',
        description_parapgrath2: 'Receiving spa consultancy from Çırağan Sanitas Spa during the initial stage of its establishment, Çatma Mescit Hammam offers its guests a unique experience that will stop time in a magical atmosphere, one that bears the traces of history!'
        , description_parapgrath3: ''
    },
    {
        image: service_massage_image,
        service_deco_object: service_deco_object,
        service: 'Catma Mescit Hammam',
        description: 'After a comprehensive renovation period that lasted for 5 years, Çatma Mescit Hammam has been stylishly restored back to its former glory, opening its doors to its guests in 2019 and still reflecting the magnificence of its era. Receiving spa consultancy from Çırağan Sanitas Spa during the initial stage of its establishment, Çatma Mescit Hammam offers its guests a unique experience that will stop time in a magical atmosphere, one that bears the traces of history!',
        description_parapgrath1: 'After a comprehensive renovation period that lasted for 5 years, Çatma Mescit Hammam has been stylishly restored back to its former glory, opening its doors to its guests in 2019 and still reflecting the magnificence of its era. ',
        description_parapgrath2: 'Receiving spa consultancy from Çırağan Sanitas Spa during the initial stage of its establishment, Çatma Mescit Hammam offers its guests a unique experience that will stop time in a magical atmosphere, one that bears the traces of history!',
        description_parapgrath3: ''
    }
];

const TURKISH = [
    {
        image: service_massage_image,
        service_deco_object: service_deco_object,
        service: 'Novatas Crystal Spa',
        description: 'The exciting cosmopolitan city life meets a relaxing retreat at the Novatas Crystal Spa, stationed at the heart of Istanbul...',
        description_parapgrath1: 'Novatas Crystal Spa, günlük hayatın yoğunluğundan kaçmanız için tasarlanmış özel bir rahatlama mekanıdır. Burası, stresten uzaklaşmanıza, gençleşmenize ve kendi kişisel esenlik anlarınızın tadını çıkarmanıza yardımcı olmak amacıyla özenle düzenlenmiştir.',
        description_parapgrath2: "102 metrekarelik geniş alanda, çiftler için ayrılan biri dahil olmak üzere toplam 5 masaj odası, jakuzili kapalı yüzme havuzu, Türk hamamı, buhar banyosu, sauna, fitness merkezi ve tamamen rahatlık ve huzur için tasarlanmış özel dinlenme odaları bulunmaktadır. Spa ritüelleri, masajlar, terapiler ve güzellik bakımları, yılların deneyimine sahip profesyonel masaj terapistleri tarafından gerçekleştirilir ve seansınız sonrasında kendinizi rahatlamış, dengelemiş, tazelemiş ve canlanmış hissetmenizi sağlar.",
        description_parapgrath3: "Uzak Doğu'nun geleneksel ve modern terapilerinin yanı sıra sağlıklı yaşam felsefesinin en özenli uygulamalarını içeren özel terapilerle bedeninizi, zihninizi ve ruhunuzu canlandırmaya davet ediyoruz. Novatas Crystal Spa'da unutulmaz bir deneyim yaşamak için sizi bekliyoruz."
    },
    {
        image: service_massage_image,
        service_deco_object: service_deco_object,
        service: 'Catma Mescit Hammam',
        description: 'After a comprehensive renovation period that lasted for 5 years, Çatma Mescit Hammam has been stylishly restored back to its former glory, opening its doors to its guests in 2019 and still reflecting the magnificence of its era. Receiving spa consultancy from Çırağan Sanitas Spa during the initial stage of its establishment, Çatma Mescit Hammam offers its guests a unique experience that will stop time in a magical atmosphere, one that bears the traces of history!',
        description_parapgrath1: 'After a comprehensive renovation period that lasted for 5 years, Çatma Mescit Hammam has been stylishly restored back to its former glory, opening its doors to its guests in 2019 and still reflecting the magnificence of its era. ',
        description_parapgrath2: 'Receiving spa consultancy from Çırağan Sanitas Spa during the initial stage of its establishment, Çatma Mescit Hammam offers its guests a unique experience that will stop time in a magical atmosphere, one that bears the traces of history!',
        description_parapgrath3: ''
    },
    {
        image: service_massage_image,
        service_deco_object: service_deco_object,
        service: 'Catma Mescit Hammam',
        description: 'After a comprehensive renovation period that lasted for 5 years, Çatma Mescit Hammam has been stylishly restored back to its former glory, opening its doors to its guests in 2019 and still reflecting the magnificence of its era. Receiving spa consultancy from Çırağan Sanitas Spa during the initial stage of its establishment, Çatma Mescit Hammam offers its guests a unique experience that will stop time in a magical atmosphere, one that bears the traces of history!',
        description_parapgrath1: 'After a comprehensive renovation period that lasted for 5 years, Çatma Mescit Hammam has been stylishly restored back to its former glory, opening its doors to its guests in 2019 and still reflecting the magnificence of its era. ',
        description_parapgrath2: 'Receiving spa consultancy from Çırağan Sanitas Spa during the initial stage of its establishment, Çatma Mescit Hammam offers its guests a unique experience that will stop time in a magical atmosphere, one that bears the traces of history!'
        , description_parapgrath3: ''
    },
    {
        image: service_massage_image,
        service_deco_object: service_deco_object,
        service: 'Catma Mescit Hammam',
        description: 'After a comprehensive renovation period that lasted for 5 years, Çatma Mescit Hammam has been stylishly restored back to its former glory, opening its doors to its guests in 2019 and still reflecting the magnificence of its era. Receiving spa consultancy from Çırağan Sanitas Spa during the initial stage of its establishment, Çatma Mescit Hammam offers its guests a unique experience that will stop time in a magical atmosphere, one that bears the traces of history!',
        description_parapgrath1: 'After a comprehensive renovation period that lasted for 5 years, Çatma Mescit Hammam has been stylishly restored back to its former glory, opening its doors to its guests in 2019 and still reflecting the magnificence of its era. ',
        description_parapgrath2: 'Receiving spa consultancy from Çırağan Sanitas Spa during the initial stage of its establishment, Çatma Mescit Hammam offers its guests a unique experience that will stop time in a magical atmosphere, one that bears the traces of history!',
        description_parapgrath3: ''
    }
];

let SELECT = ENGLISH
let CONTACT = 'Contact Now'
let HEADER = 'Harmonize Your Body and Soul'
let HEADER__DESCRIPTION = `Whenever you need a place to relax between your hectic schedule or to indulge in some real pampering, don't forget to reserve your spot at the Novatas Spa!`
let BOOK__NOW = 'Book Now';
let OURREFE = 'Our References';
let HEADER_NOVATASSPA = `It’s Time to Find Yourself Again`;
let BODY_NOVATASSPA = 'Take a break from your busy life & come relax at Novatas Crystal Spa! Book your session & relieve your stress today!';
let TREAT_YOUR_SELF = 'Treat Yourself to a Blissful Escape';
let REVITALIZE = 'Revitalize your body and mind with our professional massage therapists practicing traditional as well as modern therapeutic techniques.';
let LEARN_MORE = 'Learn More';
let YEARS = 'Years';
let EXPERIENCE = 'Experience';
let POPULAR_PACKAGE = ' Popular Packages';
let OUR = 'OUR';
let MIN_PER_PERSON = 'minutes per person';
let LUXURY_NOVATASSPA_PACKAGE = 'Luxury Novatas Package';
let TULIP_PACKAGE = 'Tulip Package';
let LUXURY_NOVATASSPA_PACKAGE_DESCRIPTION = `After a 10-min rest in the steam room, which will help to loosen up tense muscles, soften the skin and open the pores, the session continues with an exfoliating body scrub, a full body foam, where you will be covered in a cloud of silky foam bubbles and a relaxing head-shoulders-back foam massage. This will be followed by a honey and milk body care treatment which will leave your body smooth and refreshed. After the honey and milk body care treatment a rejuvenating facial clay mask will be applied. The session will continue with a relaxing Foot & Hand Massage and end with our Novatas Signature Massage, which is an individualistic muscle-relaxing and stress-relieving massage that is designed specifically for you and is carried out with your choice of %100 natural aromatic oils. Our massage therapists will analyze what your body needs, and apply a combination of techniques among hot stone, reflexology, anti-stress or Thai massages, to meet those needs accordingly.`;
let LUXURY_NOVATASSPA_PACKAGE_DESCRIPTION_2 = `After a 10-min rest in the steam room, which will help to loosen up tense muscles, soften the skin and open the pores, the session continues with an exfoliating body scrub, a full body foam, where you will be covered in a cloud of silky foam bubbles and a relaxing head-shoulders-back foam massage. This will be followed by a Peeling Treatment, which you can choose among grape seed extract, olive oil, coconut or rose peeling. After the peeling treatment, an Aromatherapy Massage, which is a delicate massage technique that uses 100% organic and natural essential oils prepared from aromatic Mediterranean herbs will be carried out by our professional massage therapists.`
let CRYSTAL_PACKAGE = `Crystal Package`
let CRYSTAL_PACKAGE_DESCRIPTION = `After a 10-min rest in the steam room, which will help to loosen up tense muscles, soften the skin and open the pores, the session continues with an exfoliating body scrub, a full body foam, where you will be covered in a cloud of silky foam bubbles and a relaxing head-shoulders-back foam massage. This will be followed by an Anti-Stress Massage which is an effective massage therapy that focuses on releasing tension from the connective muscle tissues; relaxing the muscles and especially the nervous system, by applying slow, rhythmic and light strokes as well as moderate finger pressure.`
let LILIUM_PACKAGE = 'Lilium Package'
let LILIUM_PACKAGE_DESCRIPTION = `After a 10-min rest in the steam room, which will help to loosen up tense muscles, soften the skin and open the pores, the session continues with an exfoliating body scrub, a full body foam, where you will be covered in a cloud of silky foam bubbles. This will be followed by a Reflexology session which is a traditional Chinese massage therapy that focuses on relieving stress in the body by working specifically on the feet. It aims to bring about a state of relaxation and to keep qi-vital energy flowing through the body, for maintaining balance and perfect health.`
let OUR_PRICE_LIST = `Our Price List`;
let TURKISH_HAMMAM = `Turkish Hammam`;
let JASMINE_HAMMAM = `Jasmine Hammam`;
let MINUTE = 'min';
let TULIP_HAMMAM = 'Tulip Hammam';
let SPA_CLASSICS = 'Spa Classics';
let REFLEXOLOGY = 'Reflexology';
let HEAD_AND_SHOLDERS_MESSAGE = 'Head & shoulders Massage';
let BACK_MESSAGE = 'Back Massage';
let CLASSICS_MASSAGE = 'Classic Massage';
let ANTI_STRESS_MASSAGE = 'Anti-Stress Massage';
let AROM = 'Aromatherapy Massage';
let FAR_EAST_MASSAGE = `Far East Massage`;
let HOS_STONE_MASSAGE = `Hot Stone Massage`;
let LOTUS_HAMMAM = 'Lotus Hammam';
let HAMMAM_AND_MASSAGE_PACKEGE = 'Hammam & Massage Packages';
let TRADITIONAL_BALI_MASSAGE = 'Traditional Bali Massage';
let BLEND_THAI_MASSAGE = 'Blend Thai Massage';
let THERAPEUTIC_MESSAGE = 'Therapeutic Massage';
let MEDICAL_MASSAGE = 'Medical Massage';
let DEEP_TISSUE_MASSAGE = 'Deep Tissue Massage';
let REGIONAL_TRILOGY_MASSAGE = 'Regional Trilogy Massage';
let NOVATAS_SIGNATURE_MASSAGE = 'Novatas Signature Massage';
let PEELING_TREATMENT = 'Peeling Treatment';
let COCONUT_PEELING = 'Coconut Peeling';
let GRAPE_SEEDS_PEELING = 'Grape Seeds Peeling';
let OLIVE_OIL_PEELING = 'Olive Oil Peeling';
let ROSE_PEELING = 'Rose Peeling';
let ONLINE_RESERVATION_FORM='Online Reservation Form';
let NAME_SURNAME='Name, Surname';
let PHONE_NUMBER='Phone Number';
let EMAIL = 'E-Mail Address';
let MAKE_RESERVATION ='Make Reservation';
let MAKE_A_QUICK ='Make a Quick ';
let RESERVATION='Reservation';
switch (pathname) {
    case 'en':
        SELECT = ENGLISH;
        CONTACT = 'Contact Now';
        HEADER = 'Harmonize Your Body and Soul';
        HEADER__DESCRIPTION = `Whenever you need a place to relax between your hectic schedule or to indulge in some real pampering, don't forget to reserve your spot at the Novatas Spa!`
        BOOK__NOW = 'Book Now';
        OURREFE = 'Our References';
        HEADER_NOVATASSPA = `It’s Time to Find Yourself Again`
        BODY_NOVATASSPA = 'Take a break from your busy life & come relax at Novatas Crystal Spa! Book your session & relieve your stress today!';
        TREAT_YOUR_SELF = 'Treat Yourself to a Blissful Escape';
        REVITALIZE = 'Revitalize your body and mind with our professional massage therapists practicing traditional as well as modern therapeutic techniques.'
        LEARN_MORE = 'Learn More'
        YEARS = 'Years'
        EXPERIENCE = 'Experience'
        POPULAR_PACKAGE = ' Popular Packages';
        OUR = 'OUR';
        MIN_PER_PERSON = 'minutes per person';
        LUXURY_NOVATASSPA_PACKAGE = 'Luxury Novatas Package';
        LUXURY_NOVATASSPA_PACKAGE_DESCRIPTION = `After a 10-min rest in the steam room, which will help to loosen up tense muscles, soften the skin and open the pores, the session continues with an exfoliating body scrub, a full body foam, where you will be covered in a cloud of silky foam bubbles and a relaxing head-shoulders-back foam massage. This will be followed by a honey and milk body care treatment which will leave your body smooth and refreshed. After the honey and milk body care treatment a rejuvenating facial clay mask will be applied. The session will continue with a relaxing Foot & Hand Massage and end with our Novatas Signature Massage, which is an individualistic muscle-relaxing and stress-relieving massage that is designed specifically for you and is carried out with your choice of %100 natural aromatic oils. Our massage therapists will analyze what your body needs, and apply a combination of techniques among hot stone, reflexology, anti-stress or Thai massages, to meet those needs accordingly.`
        TULIP_PACKAGE = 'Tulip Package'
        LUXURY_NOVATASSPA_PACKAGE_DESCRIPTION_2 = `After a 10-min rest in the steam room, which will help to loosen up tense muscles, soften the skin and open the pores, the session continues with an exfoliating body scrub, a full body foam, where you will be covered in a cloud of silky foam bubbles and a relaxing head-shoulders-back foam massage. This will be followed by a Peeling Treatment, which you can choose among grape seed extract, olive oil, coconut or rose peeling. After the peeling treatment, an Aromatherapy Massage, which is a delicate massage technique that uses 100% organic and natural essential oils prepared from aromatic Mediterranean herbs will be carried out by our professional massage therapists.`
        CRYSTAL_PACKAGE = `Crystal Package`
        CRYSTAL_PACKAGE_DESCRIPTION = `After a 10-min rest in the steam room, which will help to loosen up tense muscles, soften the skin and open the pores, the session continues with an exfoliating body scrub, a full body foam, where you will be covered in a cloud of silky foam bubbles and a relaxing head-shoulders-back foam massage. This will be followed by an Anti-Stress Massage which is an effective massage therapy that focuses on releasing tension from the connective muscle tissues; relaxing the muscles and especially the nervous system, by applying slow, rhythmic and light strokes as well as moderate finger pressure.`
        LILIUM_PACKAGE = 'Lilium Package'
        LILIUM_PACKAGE_DESCRIPTION = `After a 10-min rest in the steam room, which will help to loosen up tense muscles, soften the skin and open the pores, the session continues with an exfoliating body scrub, a full body foam, where you will be covered in a cloud of silky foam bubbles. This will be followed by a Reflexology session which is a traditional Chinese massage therapy that focuses on relieving stress in the body by working specifically on the feet. It aims to bring about a state of relaxation and to keep qi-vital energy flowing through the body, for maintaining balance and perfect health.`
        OUR_PRICE_LIST = `Our Price List`;
        TURKISH_HAMMAM = `Turkish Hammam`;
        JASMINE_HAMMAM = `Jasmine Hammam`;
        MINUTE = 'min';
        TULIP_HAMMAM = 'Tulip Hammam';
        SPA_CLASSICS = 'Spa Classics';
        REFLEXOLOGY = 'Reflexology';
        HEAD_AND_SHOLDERS_MESSAGE = 'Head & shoulders Massage';
        BACK_MESSAGE = 'Back Massage';
        CLASSICS_MASSAGE = 'Classic Massage';
        ANTI_STRESS_MASSAGE = 'Anti-Stress Massage';
        AROM = 'Aromatherapy Massage';
        FAR_EAST_MASSAGE = `Far East Massage`;
        HOS_STONE_MASSAGE = `Hot Stone Massage`;
        LOTUS_HAMMAM = 'Lotus Hammam';
        HAMMAM_AND_MASSAGE_PACKEGE = 'Hammam & Massage Packages';
        TRADITIONAL_BALI_MASSAGE = 'Traditional Bali Massage';
        BLEND_THAI_MASSAGE = 'Blend Thai Massage';
        THERAPEUTIC_MESSAGE = 'Therapeutic Massage';
        MEDICAL_MASSAGE = 'Medical Massage';
        DEEP_TISSUE_MASSAGE = 'Deep Tissue Massage';
        REGIONAL_TRILOGY_MASSAGE = 'Regional Trilogy Massage';
        NOVATAS_SIGNATURE_MASSAGE = 'Novatas Signature Massage';
        PEELING_TREATMENT = 'Peeling Treatment';
        COCONUT_PEELING = 'Coconut Peeling';
        GRAPE_SEEDS_PEELING = 'Grape Seeds Peeling';
        OLIVE_OIL_PEELING = 'Olive Oil Peeling';
        ROSE_PEELING = 'Rose Peeling';
        ONLINE_RESERVATION_FORM='Online Reservation Form';
        NAME_SURNAME='Name, Surname';
        PHONE_NUMBER='Phone Number';
        EMAIL = 'E-Mail Address';
        MAKE_RESERVATION ='Make Reservation';
        MAKE_A_QUICK ='Make a Quick ';
        RESERVATION='Reservation';
        break;
    case 'tr':
        SELECT = TURKISH;
        CONTACT = 'Hemen İletişime Geç';
        HEADER = 'Beden ve Ruh Uyumunu Yakalayın'
        HEADER__DESCRIPTION = `Yoğun programınız arasında dinlenmek veya kendinizi şımartmak için bir yere ihtiyacınız olduğunda Novatas Spa'da yerinizi ayırtmayı unutmayın!`
        BOOK__NOW = 'Şimdi Rezervasyon Yapın';
        OURREFE = 'Referanslarımız';
        HEADER_NOVATASSPA = `Kendinizi Yeniden Bulma Zamanı`
        BODY_NOVATASSPA = `Yoğun yaşam temposuna ara verin ve Novatas Crystal Spa'da kendinize özel bir rahatlama anı yaşayın! Şimdi seansınızı ayırtın ve stresi geride bırakın!`;
        TREAT_YOUR_SELF = 'Kendinizi Keyifli Bir Mola İle Şımartın';
        REVITALIZE = 'Geleneksel ve modern terapötik teknikleri uygulayan profesyonel masaj terapistlerimizle bedeninizi ve zihninizi canlandırın.'
        LEARN_MORE = 'Daha Fazla Bilgi';
        YEARS = 'Yıl';
        EXPERIENCE = 'Deneyim';
        POPULAR_PACKAGE = ' Popüler Paketlerimiz';
        OUR = 'Bizim';
        MIN_PER_PERSON = 'Kişi başı dakika';
        LUXURY_NOVATASSPA_PACKAGE = 'Lüks Novatas Paketi'
        LUXURY_NOVATASSPA_PACKAGE_DESCRIPTION = `Gergin kasları rahatlatmak, cildi tazelenmek ve kendinizi şımartmak için ideal bir seans sizi bekliyor! Seansımız, buhar odasındaki 10 dakikalık bir dinlenmeyle başlıyor. Ardından, peeling vücut ovma, tüm vücudu saran ipeksi köpük bulutu ve rahatlatıcı baş-omuz-sırt köpük masajı ile devam ediyor. Ardından, pürüzsüz ve taze bir cilt bırakacak ballı ve sütlü vücut bakımı uygulanıyor. Bu işlemi takiben, gençleştirici bir yüz kil maskesi sizi bekliyor. Seans, rahatlatıcı Ayak ve El Masajı ile devam ediyor ve son olarak kişisel tercihlerinize göre seçeceğiniz %100 doğal aromatik yağlarla yapılan kişiye özel bir kas gevşetici ve stres giderici Novatas İmza Masajı ile son buluyor. Masaj terapistlerimiz, vücudunuzun ihtiyaçlarını analiz ederek sıcak taş, refleksoloji, anti-stres veya Thai masajları gibi farklı teknikleri birleştirerek size özel bir deneyim sunacaklar. Şimdi bu eşsiz deneyimin tadını çıkarın!`
        TULIP_PACKAGE = 'Lale Paketi'
        LUXURY_NOVATASSPA_PACKAGE_DESCRIPTION_2 = `Stresten arınmak, cildi yenilemek ve rahatlamak için muhteşem bir fırsat sizi bekliyor! Deneyim, buhar odasındaki 10 dakikalık huzurlu mola ile başlıyor. Sonrasında, tüm vücudu saran ipeksi köpük bulutu ve rahatlatıcı baş-omuz-sırt köpük masajı ile devam ediyor. Ardından, üzüm çekirdeği özü, zeytinyağı, hindistancevizi veya gül peelingi gibi tercih edebileceğiniz özel bir Peeling Bakımı ile kendinizi şımartacaksınız.Peeling uygulamasının ardından, profesyonel masaj terapistlerimiz tarafından gerçekleştirilen hassas Aromaterapi Masajı sizi bekliyor. Bu masajda, Akdeniz bitkilerinden elde edilen %100 organik ve doğal esansiyel yağlar kullanılıyor. Şimdi bu eşsiz deneyimin tadını çıkarın ve kendinizi şımartın!`
        CRYSTAL_PACKAGE = `Kristal Paket`
        CRYSTAL_PACKAGE_DESCRIPTION = `Gergin kasların gevşemesine, cildin yumuşamasına ve gözeneklerin açılmasına yardımcı olacak buhar odasında 10 dakikalık bir dinlenmenin ardından, seans peeling, ipeksi köpük kabarcıkları bulutuyla kaplanacağınız tüm vücut köpüğü ve rahatlatıcı bir baş-omuz-sırt köpük masajı ile devam eder. Bunu, bağlayıcı kas dokularındaki gerilimi serbest bırakmaya odaklanan etkili bir masaj terapisi olan Anti-Stres Masajı izleyecek; yavaş, ritmik ve hafif vuruşların yanı sıra orta derecede parmak basıncı uygulayarak kasları ve özellikle sinir sistemini rahatlatacaktır.`
        LILIUM_PACKAGE = 'Lilyum Paketi'
        LILIUM_PACKAGE_DESCRIPTION = `Gergin kasları gevşetmeye, cildi yumuşatmaya ve gözenekleri açmaya yardımcı olacak buhar odasında 10 dakikalık bir dinlenmenin ardından seans, ipeksi köpük kabarcıkları bulutuyla kaplanacağınız tüm vücudu kaplayan bir köpük olan peeling ile devam eder. Bunu, özellikle ayaklar üzerinde çalışarak vücuttaki stresi azaltmaya odaklanan geleneksel bir Çin masaj terapisi olan Refleksoloji seansı izleyecektir. Bir rahatlama hali yaratmayı ve dengeyi ve mükemmel sağlığı korumak için qi-vital enerjinin vücutta akmasını sağlamayı amaçlar.`
        OUR_PRICE_LIST = `Fiyat Listemiz`
        TURKISH_HAMMAM = `Türk Hamamı`;
        JASMINE_HAMMAM = `Yasemin Hamamı`;
        MINUTE = 'dk';
        TULIP_HAMMAM = 'Lale Hamamı';
        SPA_CLASSICS = 'Spa Klasikleri';
        REFLEXOLOGY = 'Refleksoloji';
        HEAD_AND_SHOLDERS_MESSAGE = 'Baş & Omuz Masajı';
        BACK_MESSAGE = 'Sırt Masajı';
        CLASSICS_MASSAGE = 'Klasik Masaj';
        ANTI_STRESS_MASSAGE = 'Anti-Stres Masajı';
        AROM = 'Aromaterapi Masajı';
        FAR_EAST_MASSAGE = `Uzak Doğu Masajı`;
        HOS_STONE_MASSAGE = `Sıcak Taş Masajı`;
        LOTUS_HAMMAM = 'Lotus Hamam';
        HAMMAM_AND_MASSAGE_PACKEGE = 'Hamam & Masaj Paketleri';
        TRADITIONAL_BALI_MASSAGE = 'Geleneksel Bali Masajı';
        BLEND_THAI_MASSAGE = 'Karışık Thai Masajı';
        THERAPEUTIC_MESSAGE = 'Terapötik Masaj';
        MEDICAL_MASSAGE = 'Tıbbi Masaj';
        DEEP_TISSUE_MASSAGE = 'Derin Doku Masajı';
        REGIONAL_TRILOGY_MASSAGE = 'Bölgesel Trilogy Masajı';
        NOVATAS_SIGNATURE_MASSAGE = 'Novatas İmza Masajı';
        PEELING_TREATMENT = 'Peeling Tedavisi';
        COCONUT_PEELING = 'Hindistan Cevizi Peelingi';
        GRAPE_SEEDS_PEELING = 'Üzüm Çekirdeği Pleelingi';
        OLIVE_OIL_PEELING = 'Zeytinyağlı Peeling';
        ROSE_PEELING = 'Gül Peelingi';
        ONLINE_RESERVATION_FORM='Online Rezervasyon Formu';
        NAME_SURNAME='İsim, Soyisim';
        PHONE_NUMBER='Telefon Numarası';
        EMAIL = 'E-Posta Adresi';
        MAKE_RESERVATION ='Rezervasyon Yapın';
        MAKE_A_QUICK ='Hızlıca Yapın';
        RESERVATION='Rezervasyon';
        break;
    default:
        SELECT = ENGLISH;
        CONTACT = 'Contact Now';
        HEADER = 'Harmonize Your Body and Soul';
        HEADER__DESCRIPTION = `Whenever you need a place to relax between your hectic schedule or to indulge in some real pampering, don't forget to reserve your spot at the Novatas Spa!`;
        BOOK__NOW = 'Book Now';
        OURREFE = 'Our References';
        HEADER_NOVATASSPA = `It’s Time to Find Yourself Again`;
        BODY_NOVATASSPA = 'Take a break from your busy life & come relax at Novatas Crystal Spa! Book your session & relieve your stress today!';
        TREAT_YOUR_SELF = 'Treat Yourself to a Blissful Escape';
        REVITALIZE = 'Revitalize your body and mind with our professional massage therapists practicing traditional as well as modern therapeutic techniques.'
        LEARN_MORE = 'Learn More'
        YEARS = 'Years'
        EXPERIENCE = 'Experience'
        POPULAR_PACKAGE = ' Popular Packages';
        OUR = 'OUR';
        MIN_PER_PERSON = 'minutes per person';
        LUXURY_NOVATASSPA_PACKAGE = 'Luxury Novatas Package'
        LUXURY_NOVATASSPA_PACKAGE_DESCRIPTION = `After a 10-min rest in the steam room, which will help to loosen up tense muscles, soften the skin and open the pores, the session continues with an exfoliating body scrub, a full body foam, where you will be covered in a cloud of silky foam bubbles and a relaxing head-shoulders-back foam massage. This will be followed by a honey and milk body care treatment which will leave your body smooth and refreshed. After the honey and milk body care treatment a rejuvenating facial clay mask will be applied. The session will continue with a relaxing Foot & Hand Massage and end with our Novatas Signature Massage, which is an individualistic muscle-relaxing and stress-relieving massage that is designed specifically for you and is carried out with your choice of %100 natural aromatic oils. Our massage therapists will analyze what your body needs, and apply a combination of techniques among hot stone, reflexology, anti-stress or Thai massages, to meet those needs accordingly.`
        TULIP_PACKAGE = 'Tulip Package'
        LUXURY_NOVATASSPA_PACKAGE_DESCRIPTION_2 = `After a 10-min rest in the steam room, which will help to loosen up tense muscles, soften the skin and open the pores, the session continues with an exfoliating body scrub, a full body foam, where you will be covered in a cloud of silky foam bubbles and a relaxing head-shoulders-back foam massage. This will be followed by a Peeling Treatment, which you can choose among grape seed extract, olive oil, coconut or rose peeling. After the peeling treatment, an Aromatherapy Massage, which is a delicate massage technique that uses 100% organic and natural essential oils prepared from aromatic Mediterranean herbs will be carried out by our professional massage therapists.`
        CRYSTAL_PACKAGE = `Crystal Package`
        CRYSTAL_PACKAGE_DESCRIPTION = `After a 10-min rest in the steam room, which will help to loosen up tense muscles, soften the skin and open the pores, the session continues with an exfoliating body scrub, a full body foam, where you will be covered in a cloud of silky foam bubbles and a relaxing head-shoulders-back foam massage. This will be followed by an Anti-Stress Massage which is an effective massage therapy that focuses on releasing tension from the connective muscle tissues; relaxing the muscles and especially the nervous system, by applying slow, rhythmic and light strokes as well as moderate finger pressure.`
        LILIUM_PACKAGE = 'Lilium Package'
        LILIUM_PACKAGE_DESCRIPTION = `After a 10-min rest in the steam room, which will help to loosen up tense muscles, soften the skin and open the pores, the session continues with an exfoliating body scrub, a full body foam, where you will be covered in a cloud of silky foam bubbles. This will be followed by a Reflexology session which is a traditional Chinese massage therapy that focuses on relieving stress in the body by working specifically on the feet. It aims to bring about a state of relaxation and to keep qi-vital energy flowing through the body, for maintaining balance and perfect health.`
        OUR_PRICE_LIST = `Our Price List`
        TURKISH_HAMMAM = `Turkish Hammam`;
        JASMINE_HAMMAM = `Jasmine Hammam`;
        MINUTE = 'min';
        TULIP_HAMMAM = 'Tulip Hammam';
        SPA_CLASSICS = 'Spa Classics';
        REFLEXOLOGY = 'Reflexology';
        HEAD_AND_SHOLDERS_MESSAGE = 'Head & shoulders Massage';
        BACK_MESSAGE = 'Back Massage';
        CLASSICS_MASSAGE = 'Classic Massage';
        ANTI_STRESS_MASSAGE = 'Anti-Stress Massage';
        AROM = 'Aromatherapy Massage';
        FAR_EAST_MASSAGE = `Far East Massage`;
        HOS_STONE_MASSAGE = `Hot Stone Massage`;
        LOTUS_HAMMAM = 'Lotus Hammam';
        HAMMAM_AND_MASSAGE_PACKEGE = 'Hammam & Massage Packages';
        TRADITIONAL_BALI_MASSAGE = 'Traditional Bali Massage';
        BLEND_THAI_MASSAGE = 'Blend Thai Massage';
        THERAPEUTIC_MESSAGE = 'Therapeutic Massage';
        MEDICAL_MASSAGE = 'Medical Massage';
        DEEP_TISSUE_MASSAGE = 'Deep Tissue Massage';
        REGIONAL_TRILOGY_MASSAGE = 'Regional Trilogy Massage';
        NOVATAS_SIGNATURE_MASSAGE = 'Novatas Signature Massage';
        PEELING_TREATMENT = 'Peeling Treatment';
        COCONUT_PEELING = 'Coconut Peeling';
        GRAPE_SEEDS_PEELING = 'Grape Seeds Peeling';
        OLIVE_OIL_PEELING = 'Olive Oil Peeling';
        ROSE_PEELING = 'Rose Peeling';
        ONLINE_RESERVATION_FORM='Online Reservation Form';
        NAME_SURNAME='Name, Surname';
        PHONE_NUMBER='Phone Number';
        EMAIL = 'E-Mail Address';
        MAKE_RESERVATION ='Make Reservation';
        MAKE_A_QUICK ='Make a Quick ';
        RESERVATION='Reservation';
        break;
}
export const TRANSLATING__CONTACT = CONTACT;
export const SERVICES_DATA = SELECT;
export const TRANSLATING__HEADER = HEADER;
export const TRANSLATING__HEADER__DESCRIPTION = HEADER__DESCRIPTION;
export const TRANSLATING__BOOK__NOW = BOOK__NOW;
export const TRANSLATIN__OUR__REF = OURREFE;
export const TRANSLATEING__HEADER_NOVATASSPA = HEADER_NOVATASSPA;
export const TRANSLATING__BODY__NOVATASSPA = BODY_NOVATASSPA;
export const TRANSLATING_TREAT_YOUR_SELF = TREAT_YOUR_SELF;
export const TRANSLATING_REVITALIZE = REVITALIZE;
export const TRANSLATIN_LEARN_MORE = LEARN_MORE;
export const TRANSLATIN_YEARS = YEARS;
export const TRANSLATING_EXPERIENCE = EXPERIENCE;
export const TRANSLATIN_POPULAR_PACKAGE = POPULAR_PACKAGE;
export const TRANSLATEING_OUR = OUR;
export const TRANSLATING_MIN_PER_PERSON = MIN_PER_PERSON;
export const TRANSLATIN_LUXURY_NOVATASSPA_PACKAGE = LUXURY_NOVATASSPA_PACKAGE;
export const TRANSLATING_LUXURY_NOVATASSPA_PACKAGE_DESCRIPTION = LUXURY_NOVATASSPA_PACKAGE_DESCRIPTION;
export const TRANSLATING_TULIP_PACKAGE = TULIP_PACKAGE;
export const TRANSLATING_LUXURY_NOVATASSPA_PACKAGE_DESCRIPTION_2 = LUXURY_NOVATASSPA_PACKAGE_DESCRIPTION_2;
export const TRANSLATIN_CRYSTAL_PACKAGE = CRYSTAL_PACKAGE;
export const TRANSLATING_CRYSTAL_PACKAGE_DESCRIPTION = CRYSTAL_PACKAGE_DESCRIPTION;
export const TRANSLATING_LILIUM_PACKAGE = LILIUM_PACKAGE;
export const TRANSLATING_LILIUM_PACKAGE_DESCRIPTION = LILIUM_PACKAGE_DESCRIPTION;
export const TRANSLATING_OUR_PRICE_LIST = OUR_PRICE_LIST;
export const TRANSLATING_TURKISH_HAMMAM = TURKISH_HAMMAM;
export const TRANSLATING_JASMINE_HAMMAM = JASMINE_HAMMAM;
export const TRANSLATING_MINUTE = MINUTE;
export const TRANSLATING_TULIP_HAMMAM = TULIP_HAMMAM;
export const TRANSLATION_SPA_CLASSICS = SPA_CLASSICS;
export const TRANSLATING_REFLEXOLOGY = REFLEXOLOGY;
export const TRANSLATING_HEAD_AND_SHOLDERS_MESSAGE = HEAD_AND_SHOLDERS_MESSAGE;
export const TRANSLATING_BACK_MESSAGE = BACK_MESSAGE;
export const TRANSLATING_CLASSICS_MASSAGE = CLASSICS_MASSAGE;
export const TRANSLATING_ANTI_STRESS_MASSAGE = ANTI_STRESS_MASSAGE;
export const TRANSLATING_AROM = AROM;
export const TRANSLATING_FAR_EAST_MASSAGE = FAR_EAST_MASSAGE;
export const TRANSLATING_HOS_STONE_MASSAGE = HOS_STONE_MASSAGE;
export const TRANSLATING_LOTUS_HAMMAM = LOTUS_HAMMAM;
export const TRANSLATING_HAMMAM_AND_MASSAGE_PACKEGE = HAMMAM_AND_MASSAGE_PACKEGE;
export const TRANSLATING_TRADITIONAL_BALI_MASSAGE = TRADITIONAL_BALI_MASSAGE;
export const TRANSLATEING_BLEND_THAI_MASSAGE = BLEND_THAI_MASSAGE;
export const TRANSLATING_THERAPEUTIC_MESSAGE = THERAPEUTIC_MESSAGE;
export const TRANSLATING_MEDICAL_MASSAGE = MEDICAL_MASSAGE;
export const TRANSLATING_DEEP_TISSUE_MASSAGE = DEEP_TISSUE_MASSAGE;
export const TRANSLATING_REGIONAL_TRILOGY_MASSAGE = REGIONAL_TRILOGY_MASSAGE;
export const TRANSLATEING_NOVATAS_SIGNATURE_MASSAGE = NOVATAS_SIGNATURE_MASSAGE;
export const TRANSLATING_PEELING_TREATMENT = PEELING_TREATMENT;
export const TRANSLATING_COCONUT_PEELING = COCONUT_PEELING;
export const TRANSLATING_GRAPE_SEEDS_PEELING = GRAPE_SEEDS_PEELING;
export const TRANSLATING_OLIVE_OIL_PEELING = OLIVE_OIL_PEELING;
export const TRANSLATIONG_ROSE_PEELING = ROSE_PEELING;
export const TRANSLATING_ONLINE_RESERVATION_FORM=ONLINE_RESERVATION_FORM;
export const TRANSLATING_NAME_SURNAME=NAME_SURNAME;
export const TRANSLATING_PHONE_NUMBER=PHONE_NUMBER;
export const TRANSLATING_EMAIL = EMAIL;
export const TRANLATIONG_MAKE_RESERVATION=MAKE_RESERVATION;
export const TRANSLATING_MAKE_A_QUICK=MAKE_A_QUICK;
export const TRANSLATING_RESERVATION=RESERVATION;