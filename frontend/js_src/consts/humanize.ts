var sectionType = {
    "LEC" : "Lecture",
    "SEM" : "Seminar",
    "CLN" : "Clinic",
    "LAB" : "Labs",
    "RSC" : "Research",
    "DIS" : "Discussion"
}

var buildingNamesShort = {
    'ACH': 'Alice Cook House',
    'ADW': 'A.D. White House',
    'AFC': 'Africana Center',
    'APP': 'Appel Commons',
    'APT': 'Appel Tennis Courts',
    'ASA': 'Academic Surge A',
    'ASB': 'Academic Surge B',
    'ATH': 'Anabel Taylor Hall',
    'BAL': 'Balch Hall',
    'BBH': 'Beebe Hall',
    'BDF': 'Bradfield Hall',
    'BET': 'Hans Bethe House',
    'BKL': 'Baker Lab',
    'BKR': 'Carl Becker House',
    'BLY': 'Bailey Hall',
    'BRD': 'Bard Hall',
    'BRN': 'Barnes Hall',
    'BSC': 'Basic Science Bldg',
    'BTB': 'Biotechnology',
    'BTL': 'Bartels Hall',
    'BTN': 'Barton Hall',
    'CCC': 'CCC',
    'CGC': 'Golf Center',
    'CLD': 'Caldwell Hall',
    'CLK': 'Clark Hall',
    'CMH': 'Mudd Hall',
    'CMS': 'Comstock Hall',
    'CRP': 'Carpenter Hall',
    'EMR': 'Emerson Hall',
    'ESN': 'Eisner Pavillion',
    'FND': 'Foundry',
    'FRN': 'Fernow Hall',
    'GSH': 'Goldwin Smith Hall',
    'GTS': 'Gates Hall',
    'HEB': 'Human Ecology',
    'HLS': 'Hollister Hall',
    'HNH': 'Helen Newman Hall',
    'ICC': 'ILR Conference Ctr',
    'IVS': 'Ives Hall',
    'JLO': 'Johnson Center',
    'JMA': 'Johnson Museum',
    'KMB': 'Kimball Hall',
    'KND': 'Kennedy Hall',
    'KRC': 'Kroch Library',
    'KTN': 'Keeton House',
    'LNC': 'Lincoln Hall',
    'LNH': 'Lynah Rink',
    'MCG': 'McGraw Hall',
    'MEW': 'Mews Hall',
    'MLS': 'Milstein Hall',
    'MLT': 'Malott Hall',
    'MNL': 'Mann Library',
    'MRL': 'Morrill Hall',
    'MRS': 'Morrison Hall',
    'MTH': 'Myron Taylor Hall',
    'MVR': 'MVR Hall',
    'NLB': 'Noyes Lodge',
    'NRC': 'Noyes Center',
    'OLH': 'Olin Hall',
    'OLL': 'Olin Library',
    'PHL': 'Phillips Hall',
    'PHS': 'Physical Sciences',
    'PLS': 'Plant Science',
    'RCE': 'Rice Hall',
    'RCK': 'Rockefeller Hall',
    'RHD': 'Rhodes Hall',
    'RND': 'Rand Hall',
    'RPC': 'RPCC',
    'RRB': 'Riley-Robb Hall',
    'RST': 'Risley Tennis Court',
    'RTC': 'Reis Tennis Ctr',
    'SBL': 'Sibley Hall',
    'SGC': 'Sage Chapel',
    'SGH': 'Sage Hall',
    'SNE': 'Snee Hall',
    'SRM': 'Schurman Hall',
    'SSB': 'Space Sciences',
    'STK': 'Stocking Hall',
    'STL': 'Statler Hall',
    'STM': 'Stimson Hall',
    'SVG': 'Savage Hall',
    'SWZ': 'Schwartz Center',
    'TGL': 'Teagle Hall',
    'THR': 'Thurston Hall',
    'TJN': 'Tjaden Hall',
    'UPS': 'Upson Hall',
    'URH': 'Uris Hall',
    'URL': 'Uris Library',
    'VEC': 'Vet Edu Center',
    'VMC': 'Vet Med Ctr',
    'VRT': 'Vet Tower',
    'WHT': 'White Hall',
    'WLL': 'Weill Hall',
    'WNG': 'Wing Hall',
    'WRN': 'Warren Hall'
};

var buildingNamesLong = {
    'ACH': 'Alice H. Cook House',
    'ADW': 'A D White House',
    'AFC': 'Africana Center',
    'AKW': 'Akwe:Kon',
    'APP': 'Robert J & Helen Appel Commons',
    'APT': 'Appel Tennis Courts',
    'ASA': 'Academic Surge A',
    'ASB': 'Academic Surge B',
    'ATH': 'Anabel Taylor Hall',
    'BAL': 'Balch Hall',
    'BAN': 'Baker North',
    'BAS': 'Baker South',
    'BAT': 'Baker Tower',
    'BBH': 'Beebe Hall',
    'BDF': 'Bradfield Hall',
    'BET': 'Hans Bethe',
    'BKL': 'Baker Laboratory',
    'BKR': 'Carl Becker House',
    'BLY': 'Bailey Hall',
    'BOL': 'Boldt Hall',
    'BRD': 'Bard Hall',
    'BRN': 'Barnes Hall',
    'BSC': 'Basic Science Building',
    'BTB': 'Biotechnology',
    'BTI': 'Boyce Thompson Institute',
    'BTL': 'Bartels Hall',
    'BTN': 'Barton Hall',
    'CAS': 'Cascadilla Hall',
    'CAV': '301 College Ave',
    'CCC': 'Computing & Communications Center',
    'CGC': 'Cornell Golf Center',
    'CLA': 'Clinical Programs - Ambulatory',
    'CLD': 'Caldwell Hall',
    'CLK': 'Clark Hall',
    'CLM': 'Clinical Programs - "M" Barn',
    'CLS': 'Clinical Programs - Surgery',
    'CLU': 'Clinical Progs - Multipurpose',
    // 'CMH': 'Biological Science Atrium',
    // 'CMH': 'Dale R Corson Bio Science',
    // 'CMH': 'Seeley G Mudd Bio Science',
    'CMH' : 'Seeley G Mudd Hall / Dale R Corson Hall',
    'CMS': 'Comstock Hall',
    'COM': 'Anna Comstock House',
    'CRP': 'Carpenter Hall',
    'CRT': 'Court Residence Hall',
    'DAY': 'Day Hall',
    'DCK': 'Clara Dickson Hall',
    'DON': 'Mary Donlon Hall',
    'DUF': 'Duffield Hall',
    'ECO': 'Hurlburt House',
    'EMR': 'Emerson Hall',
    'ESN': 'Judith Eisner Pavillion',
    'FND': 'Foundry',
    'FNL': 'Newman, Floyd D. Laboratory',
    'FRH': 'Flora Rose House',
    'FRN': 'Fernow Hall',
    'FWC': 'Friedman Wrestling Center',
    'GGG': 'Green Greenhouse Bldg G',
    'GRS': 'Grumman Squash Courts',
    'GSH': 'Goldwin Smith Hall',
    'GTR': 'Guterman Bioclimatic Lab',
    'GTS': 'Bill and Melinda Gates Hall',
    'HEB': 'Human Ecology Building',
    'HLS': 'Hollister Hall',
    'HNH': 'Helen Newman Hall',
    'HOP': 'Ho Plaza',
    'HR1': 'High Rise #1',
    'HR5': 'High Rise #5',
    'HVL': 'High Voltage Laboratory',
    'ICC': 'ILR Conference Center',
    'IRB': 'ILR Research Building',
    'IVS': 'Ives Hall',
    // 'IVS': 'Ives Hall East',
    // 'IVS': 'Ives Hall West',
    'JLA': 'James Law Auditorium',
    'JLO': 'Johnson Center - Lab of Ornithology',
    'JMA': 'Johnson Museum Of Art',
    'KHN': 'Stewart Ave 640,Kahin Center',
    'KMB': 'Kimball Hall',
    'KND': 'Kennedy Hall',
    'KRC': 'Kroch,Carl A Library',
    'KTN': 'William T. Keeton House',
    'LNC': 'Lincoln Hall',
    'LNH': 'Lynah Rink',
    'LR6': 'Low Rise #6',
    'LR7': 'Low Rise #7',
    'LR8': 'Low Rise #8',
    'LR9': 'Low Rise #9',
    'LYO': 'Lyon Hall',
    'MCF': 'Mcfaddin Hall',
    'MCG': 'Mcgraw Hall',
    'MEW': 'Mews Residence Hall',
    'MKL': 'Moakley House - Golf Course',
    'MLS': 'Milstein Hall',
    'MLT': 'Malott Hall',
    'MNL': 'Mann Library',
    'MNS': 'Muenscher Laboratory',
    'MRB': 'Moore Laboratory',
    'MRL': 'Morrill Hall',
    'MRS': 'Morrison Hall',
    'MSC': 'Merrill Family Sailing Center',
    // 'MTH': 'Hughes Hall',
    // 'MTH': 'Myron Taylor Hall',
    // 'MTH': 'Myron Taylor Jane Foster Add',
    'MTH': 'Myron Taylor Hall / Hughes Hall',
    // 'MVR': 'M Van Rensselaer East Wing',
    'MVR': 'M Van Rensselaer Hall',
    // 'MVR': 'M Van Rensselaer West Wing',
    'NLB': 'Noyes Lodge - Beebe Lake',
    'NRC': 'Noyes Community And Rec Center',
    'NVN': 'Nevin Welcome Center',
    'OLC': 'Olin Chemistry Research Wing',
    'OLH': 'Olin Hall',
    'OLL': 'Olin Library',
    'OXL': 'John T. Oxley Equestrian Center',
    'PCS': 'Pomology Cold Storage Sales',
    'PHL': 'Phillips Hall',
    'PHS': 'Physical Sciences Building',
    'PLS': 'Plant Science Building',
    'RBT': 'Roberts Hall',
    'RCE': 'Rice Hall',
    'RCK': 'Rockefeller Hall',
    'RHD': 'Frank H T Rhodes Hall',
    'RND': 'Rand Hall',
    'RPC': 'Robert Purcell Community Center',
    'RRB': 'Riley-Robb Hall',
    'RSL': 'Risley, Prudence Resd. College',
    'RST': 'Risley Tennis Court',
    'RTC': 'Reis Tennis Center',
    'RWL': 'Rawlings Green',
    'SBL': 'Sibley Hall',
    'SGC': 'Sage Chapel',
    'SGH': 'Sage Hall',
    'SHK': 'Schoellkopf Memorial',
    'SKF': 'Schoellkopf Field',
    'SKT': 'Schoellkopf Track',
    'SNB': 'Snyd Hill Baker Inst Thaw Lec',
    'SNE': 'Snee Hall Geological Science',
    'SRM': 'Schurman Hall',
    'SSB': 'Space Sciences Building - CRSR',
    'STK': 'Stocking Hall',
    'STL': 'Statler Hall & Auditorium',
    'STM': 'Stimson Hall',
    'SVG': 'Savage Hall',
    'SWZ': 'Schwartz Center for the Performing Arts',
    'TBA': 'To Be Announced',
    'TCC': 'Townhouse Community Center',
    'TGL': 'Teagle Hall',
    'THA': 'Thurston Avenue 626',
    'THR': 'Thurston Hall',
    'TJN': 'Olive Tjaden Hall',
    'UJM': 'Ujamaa',
    'UNI': 'University Ave 726 A&S',
    'UPS': 'Upson Hall',
    'URH': 'Uris Hall',
    'URL': 'Uris Library',
    'VCM': 'Vet Center For Mobility',
    'VEC': 'Vet Education Center',
    'VMC': 'Vet Medical Center',
    'VRT': 'Vet Research Tower',
    'WHT': 'White Hall',
    'WLL': 'Weill Hall',
    'WNG': 'Wing Hall',
    'WRN': 'Warren Hall',
    'WSH': 'Willard Straight Hall',
};

export const SECTION_TYPE_PRIORITIES = ['LEC', 'SEM', 'IND', 'DIS', 'LAB', 'RSC', 'CLN'];

export function getSectionType() {

};

export function sortTerms(terms, desc) {
    var termOrder = {
        'wi': 1,
        'sp': 2,
        'su': 3,
        'fa': 4,
    };
    return terms.sort(function(a, b) {
        return (desc ? -1 : 1) * ((+a.slice(2) - b.slice(2)) || (termOrder[a.slice(0, 2)] - termOrder[b.slice(0, 2)]));
    });
};

export function getTermName(term) {
    let termName = {
        'fa': 'Fall',
        'sp': 'Spring',
        'wi': 'Winter',
        'su': 'Summer',
    };

    function year(digit) {
        if (digit < 50) {
            return 2000 + digit;
        } else {
            return 1900 + digit;
        }
    }

    return termName[term.slice(0, 2)] + ' ' + year(+term.slice(2));
};

export function getLongBuildingName(code) {
    return buildingNamesLong[code];
};

export function getShortBuildingName(code) {
    return buildingNamesShort[code];
};

export function getShortLocation(building, number) {
    if (!building || !number || building === 'TBA' || number === 'TBA') {
        return 'TBA';
    }
    let location;
    let shortBuilding = getShortBuildingName(building);
    if (shortBuilding) {
        location = shortBuilding;
    } else {
        location = building;
    }
    if (number) {
        location += (' ' + number);
    }
    return location;
};