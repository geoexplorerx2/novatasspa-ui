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
        break;
    case 'tr':
        SELECT = TURKISH;
        CONTACT = 'Hemen İletişime Geç';
        HEADER = 'Beden ve Ruh Uyumunu Yakalayın'
        HEADER__DESCRIPTION = `Yoğun programınız arasında dinlenmek veya kendinizi şımartmak için bir yere ihtiyacınız olduğunda Novatas Spa'da yerinizi ayırtmayı unutmayın!`
        BOOK__NOW = 'Şimdi Yer Ayırtın';
        OURREFE = 'Referanslarımız';
        HEADER_NOVATASSPA = `Kendinizi Yeniden Bulma Zamanı`
        BODY_NOVATASSPA = `Yoğun yaşam temposuna ara verin ve Novatas Crystal Spa'da kendinize özel bir rahatlama anı yaşayın! Şimdi seansınızı ayırtın ve stresi geride bırakın!`;
        TREAT_YOUR_SELF = 'Kendinizi Keyifli Bir Mola İle Şımartın';
        REVITALIZE = 'Geleneksel ve modern terapötik teknikleri uygulayan profesyonel masaj terapistlerimizle bedeninizi ve zihninizi canlandırın.'
        LEARN_MORE = 'Daha Fazla Bilgi';
        YEARS = 'Yıl';
        EXPERIENCE = 'Deneyim'
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