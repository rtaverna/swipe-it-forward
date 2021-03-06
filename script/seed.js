'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const {Station} = require('../server/db/models')
const stationData = [
  {
    coordinates: 'POINT (-73.99106999861966 40.73005400028978)',
    id: 1,
    updatedAt: null,
    line: '4-6-6 Express',
    createdAt: null,
    name: 'Astor Pl',
    schedule:
      '4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-74.00019299927328 40.71880300107709)',
    id: 2,
    updatedAt: null,
    line: '4-6-6 Express',
    createdAt: null,
    name: 'Canal St',
    schedule:
      '4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.98384899986625 40.76172799961419)',
    id: 3,
    updatedAt: null,
    line: '1-2',
    createdAt: null,
    name: '50th St',
    schedule: '1-all times, 2-nights'
  },
  {
    coordinates: 'POINT (-73.97499915116808 40.68086213682956)',
    id: 4,
    updatedAt: null,
    line: '2-3-4',
    createdAt: null,
    name: 'Bergen St',
    schedule: '4-nights, 3-all other times, 2-all times'
  },
  {
    coordinates: 'POINT (-73.89488591154061 40.66471445143568)',
    id: 5,
    updatedAt: null,
    line: '3-4',
    createdAt: null,
    name: 'Pennsylvania Ave',
    schedule: '4-nights, 3-all other times'
  },
  {
    coordinates: 'POINT (-73.90087000018522 40.88466700064975)',
    id: 6,
    updatedAt: null,
    line: '1',
    createdAt: null,
    name: '238th St',
    schedule: '1-all times, exit only northbound'
  },
  {
    coordinates: 'POINT (-73.95806670661364 40.800581558114956)',
    id: 7,
    updatedAt: null,
    line: 'A-B-C',
    createdAt: null,
    name: 'Cathedral Pkwy (110th St)',
    schedule: 'A-nights, B-weekdays and evenings, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.94085899871263 40.67991899941601)',
    id: 8,
    updatedAt: null,
    line: 'A-C',
    createdAt: null,
    name: 'Kingston - Throop Aves',
    schedule: 'A-nights, C-all other times'
  },
  {
    coordinates: 'POINT (-73.8987883783301 40.74971952935675)',
    id: 9,
    updatedAt: null,
    line: 'E-M-R',
    createdAt: null,
    name: '65th St',
    schedule: 'E-nights, R-all other times, M-weekdays and evenings'
  },
  {
    coordinates: 'POINT (-73.92901818461539 40.75196004401078)',
    id: 10,
    updatedAt: null,
    line: 'E-M-R',
    createdAt: null,
    name: '36th St',
    schedule: 'E-nights, R-all other times, M-weekdays and evenings'
  },
  {
    coordinates: 'POINT (-73.98740940202974 40.71830605618619)',
    id: 11,
    updatedAt: null,
    line: 'J-M-Z',
    createdAt: null,
    name: 'Delancey St - Essex St',
    schedule:
      'J-all times, M-all times exc nights, Z-rush hours AM westbound, PM eastbound'
  },
  {
    coordinates: 'POINT (-73.89165772702445 40.67802821447783)',
    id: 12,
    updatedAt: null,
    line: 'J-Z',
    createdAt: null,
    name: 'Van Siclen Ave',
    schedule: 'Z-rush hours AM westbound, PM eastbound, J-all other times'
  },
  {
    coordinates: 'POINT (-73.87962599910783 40.68152000045683)',
    id: 13,
    updatedAt: null,
    line: 'J-Z',
    createdAt: null,
    name: 'Norwood Ave',
    schedule: 'Z-rush hours AM westbound, PM eastbound, J-all other times'
  },
  {
    coordinates: 'POINT (-73.84443500029684 40.69516599823373)',
    id: 14,
    updatedAt: null,
    line: 'J-Z',
    createdAt: null,
    name: '104th-102nd Sts',
    schedule: 'Z-rush hours AM westbound, PM eastbound, J-all other times'
  },
  {
    coordinates: 'POINT (-73.98177094440949 40.690648119969794)',
    id: 15,
    updatedAt: null,
    line: 'B-D-N-Q-R',
    createdAt: null,
    name: 'DeKalb Ave',
    schedule:
      'B-weekdays and evenings, D-all other times, N-nights, R-all other times, Q-all times'
  },
  {
    coordinates: 'POINT (-73.82758075034528 40.58326843810286)',
    id: 16,
    updatedAt: null,
    line: 'A-S',
    createdAt: null,
    name: 'Beach 105th St',
    schedule:
      'A-rush hours AM northbound, PM southbound, S Broad Channel to Rockaway Park-all times'
  },
  {
    coordinates: 'POINT (-73.81365140419632 40.58809156457325)',
    id: 17,
    updatedAt: null,
    line: 'A-S',
    createdAt: null,
    name: 'Beach 90th St',
    schedule:
      'A-rush hours AM northbound, PM southbound, S Broad Channel to Rockaway Park-all times'
  },
  {
    coordinates: 'POINT (-73.89175225349464 40.829987446384116)',
    id: 18,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: 'Freeman St',
    schedule:
      '2-all times, 5-all times exc nights, skips rush hours AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.89661738461646 40.822142131170786)',
    id: 19,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: 'Intervale Ave',
    schedule:
      '2-all times, 5-all times exc nights, skips rush hours AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.90074099998965 40.85609299881864)',
    id: 20,
    updatedAt: null,
    line: 'B-D',
    createdAt: null,
    name: '182nd-183rd Sts',
    schedule:
      'B-rush hours, D-all times, skips rush hours AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.91013600050078 40.84589999983414)',
    id: 21,
    updatedAt: null,
    line: 'B-D',
    createdAt: null,
    name: '174th-175th Sts',
    schedule:
      'B-rush hours, D-all times, skips rush hours AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.91843200082253 40.83376899862797)',
    id: 22,
    updatedAt: null,
    line: 'B-D',
    createdAt: null,
    name: '167th St',
    schedule:
      'B-rush hours, D-all times, skips rush hours AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.8456249984179 40.75462199881262)',
    id: 23,
    updatedAt: null,
    line: '7-7 Express',
    createdAt: null,
    name: 'Mets - Willets Point',
    schedule: '7-all times, 7 Express-rush hours AM westbound, PM eastbound'
  },
  {
    coordinates: 'POINT (-73.86952700103515 40.74914499948836)',
    id: 24,
    updatedAt: null,
    line: '7-7 Express',
    createdAt: null,
    name: 'Junction Blvd',
    schedule: '7-all times, 7 Express-rush hours AM westbound, PM eastbound'
  },
  {
    coordinates: 'POINT (-73.83003000262508 40.75959999915012)',
    id: 25,
    updatedAt: null,
    line: '7-7 Express',
    createdAt: null,
    name: 'Flushing - Main St',
    schedule: '7-all times, 7 Express-rush hours AM westbound, PM eastbound'
  },
  {
    coordinates: 'POINT (-73.83256900003744 40.846809998885504)',
    id: 26,
    updatedAt: null,
    line: '6-6 Express',
    createdAt: null,
    name: 'Buhre Ave',
    schedule:
      '6 Express-weekdays AM southbound, PM northbound, 6-all other times'
  },
  {
    coordinates: 'POINT (-73.92613800014134 40.81047600117261)',
    id: 27,
    updatedAt: null,
    line: '6-6 Express',
    createdAt: null,
    name: '3rd Ave - 138th St',
    schedule: '6-all times, 6 Express-weekdays AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.85122199961472 40.83425499825462)',
    id: 28,
    updatedAt: null,
    line: '6-6 Express',
    createdAt: null,
    name: 'Castle Hill Ave',
    schedule:
      '6 Express-weekdays AM southbound, PM northbound, 6-all other times'
  },
  {
    coordinates: 'POINT (-74.0041310005885 40.713064999433136)',
    id: 29,
    updatedAt: null,
    line: '4-5-6-6 Express',
    createdAt: null,
    name: 'Brooklyn Bridge - City Hall',
    schedule:
      '4,6-all times, 5-all times exc nights, 6 Express-weekdays AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.8470359987544 40.836488000608156)',
    id: 30,
    updatedAt: null,
    line: '6-6 Express',
    createdAt: null,
    name: 'Zerega Ave',
    schedule:
      '6 Express-weekdays AM southbound, PM northbound, 6-all other times'
  },
  {
    coordinates: 'POINT (-73.9767132992584 40.75180742981634)',
    id: 31,
    updatedAt: null,
    line: '4-5-6-6 Express',
    createdAt: null,
    name: 'Grand Central - 42nd St',
    schedule:
      '4,6-all times, 5-all times exc nights, 6 Express-weekdays AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.98207600148947 40.74608099909145)',
    id: 32,
    updatedAt: null,
    line: '4-6-6 Express',
    createdAt: null,
    name: '33rd St',
    schedule:
      '4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.9510700015425 40.78567199998607)',
    id: 33,
    updatedAt: null,
    line: '4-6-6 Express',
    createdAt: null,
    name: '96th St',
    schedule:
      '4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.95987399886047 40.77362000074615)',
    id: 34,
    updatedAt: null,
    line: '4-6-6 Express',
    createdAt: null,
    name: '77th St',
    schedule:
      '4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.91038357033376 40.68285130087804)',
    id: 35,
    updatedAt: null,
    line: 'J-Z',
    createdAt: null,
    name: 'Chauncey St',
    schedule: 'Z-rush hours AM westbound, PM eastbound, J-all other times'
  },
  {
    coordinates: 'POINT (-73.98310999909673 40.67731566735096)',
    id: 36,
    updatedAt: null,
    line: 'D-N-R',
    createdAt: null,
    name: 'Union St',
    schedule: 'D,N-nights, R-all other times'
  },
  {
    coordinates: 'POINT (-73.8820347465864 40.74237007972169)',
    id: 37,
    updatedAt: null,
    line: 'E-M-R',
    createdAt: null,
    name: 'Elmhurst Ave',
    schedule: 'E-nights, R-all other times, M-weekdays and evenings'
  },
  {
    coordinates: 'POINT (-73.92078599933306 40.678822000873375)',
    id: 38,
    updatedAt: null,
    line: 'A-C',
    createdAt: null,
    name: 'Ralph Ave',
    schedule: 'A-nights, C-all other times'
  },
  {
    coordinates: 'POINT (-73.86748067850041 40.8571924091606)',
    id: 39,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: 'Pelham Pkwy',
    schedule: '2-all times, 5-rush hours AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.86613410538703 40.877839385172024)',
    id: 40,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: 'Gun Hill Rd',
    schedule: '2-all times, 5-rush hours AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.8543153107622 40.898286515575286)',
    id: 41,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: 'Nereid Ave (238 St)',
    schedule: '2-all times, 5-rush hours AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.9580997367769 40.67076515344894)',
    id: 42,
    updatedAt: null,
    line: '2-3-4-5',
    createdAt: null,
    name: 'Franklin Ave',
    schedule: '2,4-all times, 3-all times exc nights, 5-weekdays'
  },
  {
    coordinates: 'POINT (-73.89306639507903 40.823976841237396)',
    id: 43,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: 'Simpson St',
    schedule:
      '2-all times, 5-all times exc nights, skips rush hours AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.86835609178098 40.848768666338934)',
    id: 44,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: 'Bronx Park East',
    schedule: '2-all times, 5-rush hours AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.95007934590994 40.65665931376077)',
    id: 45,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: 'Winthrop St',
    schedule: '2-all times, 5-weekdays'
  },
  {
    coordinates: 'POINT (-73.88940491730106 40.665517963059635)',
    id: 46,
    updatedAt: null,
    line: '3-4',
    createdAt: null,
    name: 'Van Siclen Ave',
    schedule: '4-nights, 3-all other times'
  },
  {
    coordinates: 'POINT (-73.9273847542618 40.81830344372315)',
    id: 47,
    updatedAt: null,
    line: '4',
    createdAt: null,
    name: '149th St - Grand Concourse',
    schedule: '4-all times'
  },
  {
    coordinates: 'POINT (-73.92569199505733 40.82823032742169)',
    id: 48,
    updatedAt: null,
    line: '4',
    createdAt: null,
    name: '161st St - Yankee Stadium',
    schedule: '4-all times'
  },
  {
    coordinates: 'POINT (-73.9679670004732 40.762526000304575)',
    id: 49,
    updatedAt: null,
    line: '4-5-6-6 Express',
    createdAt: null,
    name: 'Lexington Ave - 59th St',
    schedule:
      '4,6-all times, 5-all times exc nights, 6 Express-weekdays AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.90409799875945 40.81211799827203)',
    id: 50,
    updatedAt: null,
    line: '6',
    createdAt: null,
    name: 'E 149th St',
    schedule: '6-all times'
  },
  {
    coordinates: 'POINT (-73.87451599929486 40.82952100156747)',
    id: 51,
    updatedAt: null,
    line: '6',
    createdAt: null,
    name: 'Morrison Av - Soundview',
    schedule: '6-all times'
  },
  {
    coordinates: 'POINT (-73.8862829985325 40.82652500055904)',
    id: 52,
    updatedAt: null,
    line: '6',
    createdAt: null,
    name: 'Whitlock Ave',
    schedule: '6-all times'
  },
  {
    coordinates: 'POINT (-73.86761799923673 40.8315090005233)',
    id: 53,
    updatedAt: null,
    line: '6',
    createdAt: null,
    name: 'St Lawrence Ave',
    schedule: '6-all times'
  },
  {
    coordinates: 'POINT (-73.90298400173006 40.745630001138395)',
    id: 54,
    updatedAt: null,
    line: '7-7 Express',
    createdAt: null,
    name: 'Woodside - 61st St',
    schedule: '7-all times, 7 Express-rush hours AM westbound, PM eastbound'
  },
  {
    coordinates: 'POINT (-73.75540499924732 40.603995001687544)',
    id: 55,
    updatedAt: null,
    line: 'A',
    createdAt: null,
    name: 'Far Rockaway - Mott Ave',
    schedule: 'A-all times'
  },
  {
    coordinates: 'POINT (-73.976336575218 40.77551939729258)',
    id: 56,
    updatedAt: null,
    line: 'A-B-C',
    createdAt: null,
    name: '72nd St',
    schedule: 'A-nights, B-weekdays and evenings, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.96460245687166 40.79161879767014)',
    id: 57,
    updatedAt: null,
    line: 'A-B-C',
    createdAt: null,
    name: '96th St',
    schedule: 'A-nights, B-weekdays and evenings, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.93956099985425 40.84071899990795)',
    id: 58,
    updatedAt: null,
    line: 'A-C',
    createdAt: null,
    name: '168th St',
    schedule: 'A-all times, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.8935090000331 40.86697799999945)',
    id: 59,
    updatedAt: null,
    line: 'B-D',
    createdAt: null,
    name: 'Kingsbridge Rd',
    schedule: 'B-rush hours, D-all times'
  },
  {
    coordinates: 'POINT (-73.98459099904711 40.754184001312545)',
    id: 60,
    updatedAt: null,
    line: 'B-D-F-M',
    createdAt: null,
    name: '42nd St - Bryant Pk',
    schedule: 'B,M-weekdays and evenings, D,F-all times'
  },
  {
    coordinates: 'POINT (-73.96203130426609 40.6616334551018)',
    id: 61,
    updatedAt: null,
    line: 'B-Q-S',
    createdAt: null,
    name: 'Prospect Park',
    schedule: 'B-weekdays and evenings, Q,S to Franklin Av-Fulton St-all times'
  },
  {
    coordinates: 'POINT (-73.99534882595742 40.63147876093745)',
    id: 62,
    updatedAt: null,
    line: 'D',
    createdAt: null,
    name: '55th St',
    schedule: 'D-all times'
  },
  {
    coordinates: 'POINT (-73.81701287135405 40.70289855287313)',
    id: 63,
    updatedAt: null,
    line: 'E',
    createdAt: null,
    name: 'Jamaica - Van Wyck',
    schedule: 'E-all times'
  },
  {
    coordinates: 'POINT (-73.8303702709878 40.714034819571026)',
    id: 64,
    updatedAt: null,
    line: 'E-F',
    createdAt: null,
    name: 'Kew Gardens - Union Tpke',
    schedule: 'E,F-all times'
  },
  {
    coordinates: 'POINT (-73.80800471963833 40.700382424235)',
    id: 65,
    updatedAt: null,
    line: 'E-J-Z',
    createdAt: null,
    name: 'Sutphin Blvd - Archer Av',
    schedule: 'E,J-all times, Z-rush hours AM westbound, PM eastbound'
  },
  {
    coordinates: 'POINT (-73.94605470266329 40.747768121414325)',
    id: 66,
    updatedAt: null,
    line: 'E-M',
    createdAt: null,
    name: 'Court Sq - 23rd St',
    schedule: 'E-all times, M-weekdays and evenings'
  },
  {
    coordinates: 'POINT (-73.85286048434907 40.726505475813006)',
    id: 67,
    updatedAt: null,
    line: 'E-M-R',
    createdAt: null,
    name: '67th Ave',
    schedule: 'E-nights, R-all other times, M-weekdays and evenings'
  },
  {
    coordinates: 'POINT (-73.87722085669182 40.736813418197144)',
    id: 68,
    updatedAt: null,
    line: 'E-M-R',
    createdAt: null,
    name: 'Grand Ave - Newtown',
    schedule: 'E-nights, R-all other times, M-weekdays and evenings'
  },
  {
    coordinates: 'POINT (-73.97817199965161 40.63611866666291)',
    id: 69,
    updatedAt: null,
    line: 'F',
    createdAt: null,
    name: 'Ditmas Ave',
    schedule: 'F-all times'
  },
  {
    coordinates: 'POINT (-73.95999000137212 40.68888900026455)',
    id: 70,
    updatedAt: null,
    line: 'G',
    createdAt: null,
    name: 'Classon Ave',
    schedule: 'G-all times'
  },
  {
    coordinates: 'POINT (-73.95031225606621 40.706126576274166)',
    id: 71,
    updatedAt: null,
    line: 'G',
    createdAt: null,
    name: 'Broadway',
    schedule: 'G-all times'
  },
  {
    coordinates: 'POINT (-73.95024799996972 40.71407200064717)',
    id: 72,
    updatedAt: null,
    line: 'L',
    createdAt: null,
    name: 'Lorimer St',
    schedule: 'L-all times'
  },
  {
    coordinates: 'POINT (-73.9019160004208 40.66914500061398)',
    id: 73,
    updatedAt: null,
    line: 'L',
    createdAt: null,
    name: 'Sutter Ave',
    schedule: 'L-all times'
  },
  {
    coordinates: 'POINT (-73.90395860491864 40.68886654246024)',
    id: 74,
    updatedAt: null,
    line: 'L',
    createdAt: null,
    name: 'Wilson Ave',
    schedule: 'L-all times'
  },
  {
    coordinates: 'POINT (-73.9166388842194 40.686415270704344)',
    id: 75,
    updatedAt: null,
    line: 'J',
    createdAt: null,
    name: 'Halsey St',
    schedule: 'J-all times'
  },
  {
    coordinates: 'POINT (-73.94735499884204 40.703844000042096)',
    id: 76,
    updatedAt: null,
    line: 'J-M',
    createdAt: null,
    name: 'Lorimer St',
    schedule:
      'J-all times, skips weekdays AM westbound, PM eastbound, M-all times exc nights'
  },
  {
    coordinates: 'POINT (-74.01151599772157 40.634970999647166)',
    id: 77,
    updatedAt: null,
    line: 'N',
    createdAt: null,
    name: '8th Ave',
    schedule: 'N-all times'
  },
  {
    coordinates: 'POINT (-73.929861999118 40.7564420005104)',
    id: 78,
    updatedAt: null,
    line: 'N-W',
    createdAt: null,
    name: '36th Ave',
    schedule: 'N-all times, W part time'
  },
  {
    coordinates: 'POINT (-73.92582299919906 40.761431998800546)',
    id: 79,
    updatedAt: null,
    line: 'N-W',
    createdAt: null,
    name: 'Broadway',
    schedule: 'N-all times, W part time'
  },
  {
    coordinates: 'POINT (-73.98676800153976 40.75461199851542)',
    id: 80,
    updatedAt: null,
    line: 'N-Q-R-W',
    createdAt: null,
    name: 'Times Sq - 42nd St',
    schedule: 'N,Q-all times, R-all times exc nights, W part time'
  },
  {
    coordinates: 'POINT (-73.97918899989101 40.75276866674217)',
    id: 81,
    updatedAt: null,
    line: 'S',
    createdAt: null,
    name: 'Grand Central - 42nd St',
    schedule: 'S to Times Sq-all times exc nights, closed nights-use 7'
  },
  {
    coordinates: 'POINT (-73.95762400074634 40.67477166685263)',
    id: 82,
    updatedAt: null,
    line: 'S',
    createdAt: null,
    name: 'Park Pl',
    schedule: 'S Franklin Av-Fulton St to Prospect Park-all times'
  },
  {
    coordinates: 'POINT (-73.83216299845388 40.68433100001238)',
    id: 83,
    updatedAt: null,
    line: 'A-S',
    createdAt: null,
    name: '111th St',
    schedule:
      'S Euclid Av to Ozone Park-Lefferts Blvd-nights, A-all other times'
  },
  {
    coordinates: 'POINT (-74.00030814755975 40.732254493367876)',
    id: 84,
    updatedAt: null,
    line: 'B-D-F-M',
    createdAt: null,
    name: 'W 4th St - Washington Sq (Lower)',
    schedule: 'B,M-weekdays and evenings, D,F-all times'
  },
  {
    coordinates: 'POINT (-73.97192000069982 40.75710699989316)',
    id: 85,
    updatedAt: null,
    line: '4-6-6 Express',
    createdAt: null,
    name: '51st St',
    schedule:
      '4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.97621799859327 40.78864400073892)',
    id: 86,
    updatedAt: null,
    line: '1-2',
    createdAt: null,
    name: '86th St',
    schedule: '1-all times, 2-nights'
  },
  {
    coordinates: 'POINT (-73.85736239521543 40.89314324138378)',
    id: 87,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: '233rd St',
    schedule: '2-all times, 5-rush hours AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.98220899995783 40.77344000052039)',
    id: 88,
    updatedAt: null,
    line: '1-2',
    createdAt: null,
    name: '66th St - Lincoln Ctr',
    schedule: '1-all times, 2-nights'
  },
  {
    coordinates: 'POINT (-73.89054900017344 40.82094799852307)',
    id: 89,
    updatedAt: null,
    line: '6-6 Express',
    createdAt: null,
    name: 'Hunts Point Ave',
    schedule: '6-all times, 6 Express-weekdays AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-74.0062770001748 40.72285399778783)',
    id: 90,
    updatedAt: null,
    line: '1-2',
    createdAt: null,
    name: 'Canal St',
    schedule: '1-all times, 2-nights'
  },
  {
    coordinates: 'POINT (-73.83632199755944 40.84386300128381)',
    id: 91,
    updatedAt: null,
    line: '6-6 Express',
    createdAt: null,
    name: 'Middletown Rd',
    schedule:
      '6 Express-weekdays AM southbound, PM northbound, 6-all other times'
  },
  {
    coordinates: 'POINT (-73.98659900207888 40.739864000474604)',
    id: 92,
    updatedAt: null,
    line: '4-6-6 Express',
    createdAt: null,
    name: '23rd St',
    schedule:
      '4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.94526400039679 40.74702299889643)',
    id: 93,
    updatedAt: null,
    line: '7-7 Express',
    createdAt: null,
    name: 'Court Sq',
    schedule: '7-all times, 7 Express-rush hours AM westbound, PM eastbound'
  },
  {
    coordinates: 'POINT (-73.98192900232715 40.76824700063689)',
    id: 94,
    updatedAt: null,
    line: '1-2',
    createdAt: null,
    name: '59th St - Columbus Circle',
    schedule: '1-all times, 2-nights'
  },
  {
    coordinates: 'POINT (-73.9489160009391 40.74221599986316)',
    id: 95,
    updatedAt: null,
    line: '7-7 Express',
    createdAt: null,
    name: 'Hunters Point Ave',
    schedule: '7-all times, 7 Express-rush hours AM westbound, PM eastbound'
  },
  {
    coordinates: 'POINT (-73.9956570016487 40.74408099989751)',
    id: 96,
    updatedAt: null,
    line: '1-2',
    createdAt: null,
    name: '23rd St',
    schedule: '1-all times, 2-nights'
  },
  {
    coordinates: 'POINT (-74.00536700180581 40.728251000730204)',
    id: 97,
    updatedAt: null,
    line: '1-2',
    createdAt: null,
    name: 'Houston St',
    schedule: '1-all times, 2-nights'
  },
  {
    coordinates: 'POINT (-73.83768300060997 40.681711001091195)',
    id: 98,
    updatedAt: null,
    line: 'A-S',
    createdAt: null,
    name: '104th St',
    schedule:
      'S Euclid Av to Ozone Park-Lefferts Blvd-nights, A-all other times'
  },
  {
    coordinates: 'POINT (-73.81583268782963 40.60840218069683)',
    id: 99,
    updatedAt: null,
    line: 'A-S',
    createdAt: null,
    name: 'Broad Channel',
    schedule: 'A,S to Rockaway Park-all times'
  },
  {
    coordinates: 'POINT (-73.96850099975177 40.57631166708091)',
    id: 100,
    updatedAt: null,
    line: 'Q',
    createdAt: null,
    name: 'Ocean Pkwy',
    schedule: 'Q-all times'
  },
  {
    coordinates: 'POINT (-73.95358099875249 40.74262599969749)',
    id: 101,
    updatedAt: null,
    line: '7-7 Express',
    createdAt: null,
    name: 'Vernon Blvd - Jackson Ave',
    schedule: '7-all times, 7 Express-rush hours AM westbound, PM eastbound'
  },
  {
    coordinates: 'POINT (-73.96387000158042 40.76814100049679)',
    id: 102,
    updatedAt: null,
    line: '4-6-6 Express',
    createdAt: null,
    name: '68th St - Hunter College',
    schedule:
      '4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.9401635351909 40.750635651014804)',
    id: 103,
    updatedAt: null,
    line: '7-7 Express-N-W',
    createdAt: null,
    name: 'Queensboro Plz',
    schedule:
      '7,N-all times, 7 Express-rush hours AM westbound, PM eastbound, W part time'
  },
  {
    coordinates: 'POINT (-73.8438529979573 40.680428999588415)',
    id: 104,
    updatedAt: null,
    line: 'A-S',
    createdAt: null,
    name: 'Rockaway Blvd',
    schedule: 'A-all times, S Euclid Av to Ozone Park-Lefferts Blvd-nights'
  },
  {
    coordinates: 'POINT (-73.98995099881881 40.734673000996125)',
    id: 105,
    updatedAt: null,
    line: '4-5-6-6 Express',
    createdAt: null,
    name: 'Union Sq - 14th St',
    schedule:
      '4,6-all times, 5-all times exc nights, 6 Express-weekdays AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.95352200064022 40.68962700158444)',
    id: 106,
    updatedAt: null,
    line: 'G',
    createdAt: null,
    name: 'Bedford - Nostrand Aves',
    schedule: 'G-all times'
  },
  {
    coordinates: 'POINT (-73.97973580592873 40.66003568810021)',
    id: 107,
    updatedAt: null,
    line: 'F-G',
    createdAt: null,
    name: '15th St - Prospect Park',
    schedule: 'F,G-all times'
  },
  {
    coordinates: 'POINT (-73.98025117900944 40.66624469001985)',
    id: 108,
    updatedAt: null,
    line: 'F-G',
    createdAt: null,
    name: '7th Ave',
    schedule: 'F,G-all times'
  },
  {
    coordinates: 'POINT (-73.97577599917474 40.65078166803418)',
    id: 109,
    updatedAt: null,
    line: 'F-G',
    createdAt: null,
    name: 'Ft Hamilton Pkwy',
    schedule: 'F,G-all times'
  },
  {
    coordinates: 'POINT (-73.97972116229084 40.64427200012998)',
    id: 110,
    updatedAt: null,
    line: 'F-G',
    createdAt: null,
    name: 'Church Ave',
    schedule: 'F,G-all times'
  },
  {
    coordinates: 'POINT (-73.96435779623125 40.64390459860419)',
    id: 111,
    updatedAt: null,
    line: 'Q',
    createdAt: null,
    name: 'Beverly Rd',
    schedule: 'Q-all times'
  },
  {
    coordinates: 'POINT (-73.96288246192114 40.65049324646484)',
    id: 112,
    updatedAt: null,
    line: 'B-Q',
    createdAt: null,
    name: 'Church Ave',
    schedule: 'B-weekdays and evenings, Q-all times'
  },
  {
    coordinates: 'POINT (-73.96269486837261 40.63514193733789)',
    id: 113,
    updatedAt: null,
    line: 'B-Q',
    createdAt: null,
    name: 'Newkirk Ave',
    schedule: 'B-weekdays and evenings, Q-all times'
  },
  {
    coordinates: 'POINT (-73.96145343987648 40.65507304163716)',
    id: 114,
    updatedAt: null,
    line: 'Q',
    createdAt: null,
    name: 'Parkside Ave',
    schedule: 'Q-all times'
  },
  {
    coordinates: 'POINT (-73.9709563319228 40.6752946951032)',
    id: 115,
    updatedAt: null,
    line: '2-3-4',
    createdAt: null,
    name: 'Grand Army Plaza',
    schedule: '4-nights, 3-all other times, 2-all times'
  },
  {
    coordinates: 'POINT (-73.97754993539385 40.68442016526762)',
    id: 116,
    updatedAt: null,
    line: '2-3-4-5',
    createdAt: null,
    name: "Atlantic Av - Barclay's Center",
    schedule: '2,4-all times, 3-all times exc nights, 5-weekdays'
  },
  {
    coordinates: 'POINT (-73.91194599726617 40.678339999883505)',
    id: 117,
    updatedAt: null,
    line: 'A-C',
    createdAt: null,
    name: 'Rockaway Ave',
    schedule: 'A-nights, C-all other times'
  },
  {
    coordinates: 'POINT (-73.97537499833149 40.68711899950771)',
    id: 118,
    updatedAt: null,
    line: 'G',
    createdAt: null,
    name: 'Fulton St',
    schedule: 'G-all times'
  },
  {
    coordinates: 'POINT (-73.9667959986695 40.68809400106055)',
    id: 119,
    updatedAt: null,
    line: 'G',
    createdAt: null,
    name: 'Clinton - Washington Aves',
    schedule: 'G-all times'
  },
  {
    coordinates: 'POINT (-73.97285279191024 40.67710217983294)',
    id: 120,
    updatedAt: null,
    line: 'B-Q',
    createdAt: null,
    name: '7th Ave',
    schedule: 'B-weekdays and evenings, Q-all times'
  },
  {
    coordinates: 'POINT (-73.97678343963167 40.684488323453685)',
    id: 121,
    updatedAt: null,
    line: 'B-Q',
    createdAt: null,
    name: "Atlantic Av - Barclay's Center",
    schedule: 'B-weekdays and evenings, Q-all times'
  },
  {
    coordinates: 'POINT (-73.97880999956767 40.683665667279435)',
    id: 122,
    updatedAt: null,
    line: 'D-N-Q-R',
    createdAt: null,
    name: "Atlantic Av - Barclay's Center",
    schedule: 'D,N-all times, R-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.99015100090539 40.692403999991036)',
    id: 123,
    updatedAt: null,
    line: '4-5',
    createdAt: null,
    name: 'Borough Hall',
    schedule: '4-all times, 5-weekdays'
  },
  {
    coordinates: 'POINT (-73.83591899965162 40.672096999172844)',
    id: 124,
    updatedAt: null,
    line: 'A',
    createdAt: null,
    name: 'Aqueduct Racetrack',
    schedule: 'A-to Manhattan only, racing days only'
  },
  {
    coordinates: 'POINT (-73.86049500117254 40.85436399966426)',
    id: 125,
    updatedAt: null,
    line: '5',
    createdAt: null,
    name: 'Morris Park',
    schedule: '5-all times'
  },
  {
    coordinates: 'POINT (-73.85535900043564 40.858984999820116)',
    id: 126,
    updatedAt: null,
    line: '5',
    createdAt: null,
    name: 'Pelham Pkwy',
    schedule: '5-all times'
  },
  {
    coordinates: 'POINT (-73.95042600099683 40.68043800006226)',
    id: 127,
    updatedAt: null,
    line: 'A-C',
    createdAt: null,
    name: 'Nostrand Ave',
    schedule: 'A-all times, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.98040679874578 40.68831058019022)',
    id: 128,
    updatedAt: null,
    line: '2-3-4-5',
    createdAt: null,
    name: 'Nevins St',
    schedule: '2,4-all times, 3-all times exc nights, 5-weekdays'
  },
  {
    coordinates: 'POINT (-73.96422203748425 40.67203223545925)',
    id: 129,
    updatedAt: null,
    line: '2-3-4',
    createdAt: null,
    name: 'Eastern Pkwy - Bklyn Museum',
    schedule: '4-nights, 3-all other times, 2-all times'
  },
  {
    coordinates: 'POINT (-73.94884798381702 40.64512351894373)',
    id: 130,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: 'Beverly Rd',
    schedule: '2-all times, 5-weekdays'
  },
  {
    coordinates: 'POINT (-73.94945514035334 40.6508606878022)',
    id: 131,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: 'Church Ave',
    schedule: '2-all times, 5-weekdays'
  },
  {
    coordinates: 'POINT (-73.94829990822407 40.63999124275311)',
    id: 132,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: 'Newkirk Ave',
    schedule: '2-all times, 5-weekdays'
  },
  {
    coordinates: 'POINT (-73.94754120734406 40.63284240700742)',
    id: 133,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: 'Brooklyn College - Flatbush Ave',
    schedule: '2-all times, 5-weekdays'
  },
  {
    coordinates: 'POINT (-73.95072891124937 40.6627729934283)',
    id: 134,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: 'Sterling St',
    schedule: '2-all times, 5-weekdays'
  },
  {
    coordinates: 'POINT (-73.93293256081851 40.66897831107809)',
    id: 135,
    updatedAt: null,
    line: '3-4',
    createdAt: null,
    name: 'Crown Hts - Utica Ave',
    schedule: '3-all times exc nights, 4-all times'
  },
  {
    coordinates: 'POINT (-73.94215978392963 40.66948144864978)',
    id: 136,
    updatedAt: null,
    line: '3-4',
    createdAt: null,
    name: 'Kingston Ave',
    schedule: '4-nights, 3-all other times'
  },
  {
    coordinates: 'POINT (-73.95118300016523 40.724479997808274)',
    id: 137,
    updatedAt: null,
    line: 'G',
    createdAt: null,
    name: 'Nassau Ave',
    schedule: 'G-all times'
  },
  {
    coordinates: 'POINT (-73.95442500146235 40.73126699971465)',
    id: 138,
    updatedAt: null,
    line: 'G',
    createdAt: null,
    name: 'Greenpoint Ave',
    schedule: 'G-all times'
  },
  {
    coordinates: 'POINT (-73.95783200075729 40.708383000017925)',
    id: 139,
    updatedAt: null,
    line: 'J-M-Z',
    createdAt: null,
    name: 'Marcy Ave',
    schedule:
      'J-all times, M-all times exc nights, Z-rush hours AM westbound, PM eastbound'
  },
  {
    coordinates: 'POINT (-73.95348800038457 40.706889998054)',
    id: 140,
    updatedAt: null,
    line: 'J-M',
    createdAt: null,
    name: 'Hewes St',
    schedule:
      'J-all times, skips weekdays AM westbound, PM eastbound, M-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.92984899935611 40.81322399958908)',
    id: 141,
    updatedAt: null,
    line: '4-5',
    createdAt: null,
    name: '138th St - Grand Concourse',
    schedule:
      '4-all times, skips rush hours AM southbound, PM northbound, 5-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.9752485052734 40.76008683231326)',
    id: 142,
    updatedAt: null,
    line: 'E-M',
    createdAt: null,
    name: '5th Ave - 53rd St',
    schedule: 'E-all times, M-weekdays and evenings'
  },
  {
    coordinates: 'POINT (-73.96907237490204 40.75746830782865)',
    id: 143,
    updatedAt: null,
    line: 'E-M',
    createdAt: null,
    name: 'Lexington Ave - 53rd St',
    schedule: 'E-all times, M-weekdays and evenings'
  },
  {
    coordinates: 'POINT (-73.98869800128737 40.74545399979951)',
    id: 144,
    updatedAt: null,
    line: 'N-Q-R-W',
    createdAt: null,
    name: '28th St',
    schedule: 'N-all times, R-all times exc nights, part time'
  },
  {
    coordinates: 'POINT (-73.9879368338264 40.74964456009442)',
    id: 145,
    updatedAt: null,
    line: 'N-Q-R-W',
    createdAt: null,
    name: 'Herald Sq - 34th St',
    schedule: 'N,Q-all times, R-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.98168087489128 40.73097497580066)',
    id: 146,
    updatedAt: null,
    line: 'L',
    createdAt: null,
    name: '1st Ave',
    schedule: 'L-all times'
  },
  {
    coordinates: 'POINT (-73.98622899953202 40.755983000570076)',
    id: 147,
    updatedAt: null,
    line: 'S',
    createdAt: null,
    name: 'Times Sq - 42nd St',
    schedule: 'S to Grand Central-all times exc nights, closed nights-use 7'
  },
  {
    coordinates: 'POINT (-73.9514239994525 40.71277400073426)',
    id: 148,
    updatedAt: null,
    line: 'G',
    createdAt: null,
    name: 'Metropolitan Ave',
    schedule: 'G-all times'
  },
  {
    coordinates: 'POINT (-73.94049699874644 40.71157600064823)',
    id: 149,
    updatedAt: null,
    line: 'L',
    createdAt: null,
    name: 'Grand St',
    schedule: 'L-all times'
  },
  {
    coordinates: 'POINT (-73.94394399869037 40.714575998363635)',
    id: 150,
    updatedAt: null,
    line: 'L',
    createdAt: null,
    name: 'Graham Ave',
    schedule: 'L-all times'
  },
  {
    coordinates: 'POINT (-73.95666499806525 40.71717399858899)',
    id: 151,
    updatedAt: null,
    line: 'L',
    createdAt: null,
    name: 'Bedford Ave',
    schedule: 'L-all times'
  },
  {
    coordinates: 'POINT (-73.93979284713505 40.70739106438455)',
    id: 152,
    updatedAt: null,
    line: 'L',
    createdAt: null,
    name: 'Montrose Ave',
    schedule: 'L-all times'
  },
  {
    coordinates: 'POINT (-73.94381559597835 40.74630503357145)',
    id: 153,
    updatedAt: null,
    line: 'G',
    createdAt: null,
    name: 'Long Island City - Court Sq',
    schedule: 'G-all times'
  },
  {
    coordinates: 'POINT (-73.9495999997552 40.7441286664954)',
    id: 154,
    updatedAt: null,
    line: 'G',
    createdAt: null,
    name: '21st St',
    schedule: 'G-all times'
  },
  {
    coordinates: 'POINT (-73.93285137679598 40.75276306140845)',
    id: 155,
    updatedAt: null,
    line: 'N-W',
    createdAt: null,
    name: '39th Ave',
    schedule: 'N-all times, W part time'
  },
  {
    coordinates: 'POINT (-73.95035999879713 40.82655099962194)',
    id: 156,
    updatedAt: null,
    line: '1',
    createdAt: null,
    name: '145th St',
    schedule: '1-all times'
  },
  {
    coordinates: 'POINT (-73.94488999901047 40.8340410001399)',
    id: 157,
    updatedAt: null,
    line: '1',
    createdAt: null,
    name: '157th St',
    schedule: '1-all times'
  },
  {
    coordinates: 'POINT (-73.97232299915696 40.79391900121471)',
    id: 158,
    updatedAt: null,
    line: '1-2-3',
    createdAt: null,
    name: '96th St',
    schedule: '1,2,3-all times'
  },
  {
    coordinates: 'POINT (-73.96837899960818 40.799446000334825)',
    id: 159,
    updatedAt: null,
    line: '1',
    createdAt: null,
    name: '103rd St',
    schedule: '1-all times'
  },
  {
    coordinates: 'POINT (-73.95182200176913 40.79907499977324)',
    id: 160,
    updatedAt: null,
    line: '2-3',
    createdAt: null,
    name: 'Central Park North (110th St)',
    schedule: '2,3-all times'
  },
  {
    coordinates: 'POINT (-73.96137008267617 40.796060739904526)',
    id: 161,
    updatedAt: null,
    line: 'A-B-C',
    createdAt: null,
    name: '103rd St',
    schedule: 'A-nights, B-weekdays and evenings, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.98197000159583 40.77845300068614)',
    id: 162,
    updatedAt: null,
    line: '1-2-3',
    createdAt: null,
    name: '72nd St',
    schedule: '1,2,3-all times'
  },
  {
    coordinates: 'POINT (-73.97209794937208 40.78134608418206)',
    id: 163,
    updatedAt: null,
    line: 'A-B-C',
    createdAt: null,
    name: '81st St',
    schedule: 'A-nights, B-weekdays and evenings, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.83692369387158 40.71804465348743)',
    id: 164,
    updatedAt: null,
    line: 'E-F',
    createdAt: null,
    name: '75th Ave',
    schedule: 'E-evenings, weekends, nights, F-all times'
  },
  {
    coordinates: 'POINT (-73.96882849429672 40.78582304678557)',
    id: 165,
    updatedAt: null,
    line: 'A-B-C',
    createdAt: null,
    name: '86th St',
    schedule: 'A-nights, B-weekdays and evenings, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.9668470005456 40.80396699961484)',
    id: 166,
    updatedAt: null,
    line: '1',
    createdAt: null,
    name: 'Cathedral Pkwy (110th St)',
    schedule: '1-all times'
  },
  {
    coordinates: 'POINT (-73.96410999757751 40.807722001230864)',
    id: 167,
    updatedAt: null,
    line: '1',
    createdAt: null,
    name: '116th St - Columbia University',
    schedule: '1-all times'
  },
  {
    coordinates: 'POINT (-73.94549500011411 40.807753999182815)',
    id: 168,
    updatedAt: null,
    line: '2-3',
    createdAt: null,
    name: '125th St',
    schedule: '2,3-all times'
  },
  {
    coordinates: 'POINT (-73.94077000106708 40.8142290003391)',
    id: 169,
    updatedAt: null,
    line: '2-3',
    createdAt: null,
    name: '135th St',
    schedule: '2,3-all times'
  },
  {
    coordinates: 'POINT (-73.94962500096905 40.802097999133004)',
    id: 170,
    updatedAt: null,
    line: '2-3',
    createdAt: null,
    name: '116th St',
    schedule: '2,3-all times'
  },
  {
    coordinates: 'POINT (-73.90522700122354 40.850409999510234)',
    id: 171,
    updatedAt: null,
    line: 'B-D',
    createdAt: null,
    name: 'Tremont Ave',
    schedule: 'B-rush hours, D-all times'
  },
  {
    coordinates: 'POINT (-73.95367600087873 40.82200799968475)',
    id: 172,
    updatedAt: null,
    line: '1',
    createdAt: null,
    name: '137th St - City College',
    schedule: '1-all times'
  },
  {
    coordinates: 'POINT (-73.93624499873299 40.82042099969279)',
    id: 173,
    updatedAt: null,
    line: '3',
    createdAt: null,
    name: '145th St',
    schedule: '3-all times, exit only northbound'
  },
  {
    coordinates: 'POINT (-73.91179399884471 40.8484800012369)',
    id: 174,
    updatedAt: null,
    line: '4',
    createdAt: null,
    name: '176th St',
    schedule: '4-all times'
  },
  {
    coordinates: 'POINT (-73.9076840015997 40.85345300155693)',
    id: 175,
    updatedAt: null,
    line: '4',
    createdAt: null,
    name: 'Burnside Ave',
    schedule: '4-all times'
  },
  {
    coordinates: 'POINT (-73.91339999846983 40.83930599964156)',
    id: 176,
    updatedAt: null,
    line: 'B-D',
    createdAt: null,
    name: '170th St',
    schedule:
      'B-rush hours, D-all times, skips rush hours AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.94013299907257 40.840555999148535)',
    id: 177,
    updatedAt: null,
    line: '1',
    createdAt: null,
    name: '168th St',
    schedule: '1-all times'
  },
  {
    coordinates: 'POINT (-73.9335959996056 40.84950499974065)',
    id: 178,
    updatedAt: null,
    line: '1',
    createdAt: null,
    name: '181st St',
    schedule: '1-all times'
  },
  {
    coordinates: 'POINT (-73.92941199742039 40.85522500175836)',
    id: 179,
    updatedAt: null,
    line: '1',
    createdAt: null,
    name: '191st St',
    schedule: '1-all times'
  },
  {
    coordinates: 'POINT (-73.93970399761596 40.84739100072403)',
    id: 180,
    updatedAt: null,
    line: 'A',
    createdAt: null,
    name: '175th St',
    schedule: 'A-all times'
  },
  {
    coordinates: 'POINT (-73.77601299999507 40.59294299908617)',
    id: 181,
    updatedAt: null,
    line: 'A',
    createdAt: null,
    name: 'Beach 44th St',
    schedule: 'A-all times'
  },
  {
    coordinates: 'POINT (-73.7885219980118 40.59237400121235)',
    id: 182,
    updatedAt: null,
    line: 'A',
    createdAt: null,
    name: 'Beach 60th St',
    schedule: 'A-all times'
  },
  {
    coordinates: 'POINT (-73.82052058959523 40.58538569133279)',
    id: 183,
    updatedAt: null,
    line: 'A-S',
    createdAt: null,
    name: 'Beach 98th St',
    schedule:
      'A-rush hours AM northbound, PM southbound, S Broad Channel to Rockaway Park-all times'
  },
  {
    coordinates: 'POINT (-73.83559008701239 40.580955865573515)',
    id: 184,
    updatedAt: null,
    line: 'A-S',
    createdAt: null,
    name: 'Rockaway Park - Beach 116 St',
    schedule:
      'A-rush hours AM northbound, PM southbound, S to Broad Channel-all times'
  },
  {
    coordinates: 'POINT (-73.76817499939688 40.59539800166876)',
    id: 185,
    updatedAt: null,
    line: 'A',
    createdAt: null,
    name: 'Beach 36th St',
    schedule: 'A-all times'
  },
  {
    coordinates: 'POINT (-73.76135299762073 40.60006600105881)',
    id: 186,
    updatedAt: null,
    line: 'A',
    createdAt: null,
    name: 'Beach 25th St',
    schedule: 'A-all times'
  },
  {
    coordinates: 'POINT (-73.80328900021885 40.707571999615695)',
    id: 187,
    updatedAt: null,
    line: 'F',
    createdAt: null,
    name: 'Parsons Blvd',
    schedule: 'F-all times'
  },
  {
    coordinates: 'POINT (-73.79347419927721 40.710517502784)',
    id: 188,
    updatedAt: null,
    line: 'F',
    createdAt: null,
    name: '169th St',
    schedule: 'F-all times'
  },
  {
    coordinates: 'POINT (-73.86269999830412 40.749865000555545)',
    id: 189,
    updatedAt: null,
    line: '7',
    createdAt: null,
    name: '103rd St - Corona Plaza',
    schedule: '7-all times'
  },
  {
    coordinates: 'POINT (-73.85533399834884 40.75172999941711)',
    id: 190,
    updatedAt: null,
    line: '7',
    createdAt: null,
    name: '111th St',
    schedule: '7-all times'
  },
  {
    coordinates: 'POINT (-73.86161820097203 40.729763972422425)',
    id: 191,
    updatedAt: null,
    line: 'E-M-R',
    createdAt: null,
    name: '63rd Dr - Rego Park',
    schedule: 'E-nights, R-all other times, M-weekdays and evenings'
  },
  {
    coordinates: 'POINT (-73.86504999877702 40.67704400054478)',
    id: 192,
    updatedAt: null,
    line: 'A-S',
    createdAt: null,
    name: 'Grant Ave',
    schedule: 'A-all times, S Euclid Av to Ozone Park-Lefferts Blvd-nights'
  },
  {
    coordinates: 'POINT (-73.97991700056134 40.78393399959032)',
    id: 193,
    updatedAt: null,
    line: '1-2',
    createdAt: null,
    name: '79th St',
    schedule: '1-all times, 2-nights'
  },
  {
    coordinates: 'POINT (-73.9030969995401 40.67534466640805)',
    id: 194,
    updatedAt: null,
    line: 'L',
    createdAt: null,
    name: 'Atlantic Ave',
    schedule: 'L-all times'
  },
  {
    coordinates: 'POINT (-74.00290599855235 40.73342200104225)',
    id: 195,
    updatedAt: null,
    line: '1-2',
    createdAt: null,
    name: 'Christopher St - Sheridan Sq',
    schedule: '1-all times, 2-nights'
  },
  {
    coordinates: 'POINT (-73.82579799906613 40.68595099878361)',
    id: 196,
    updatedAt: null,
    line: 'A-S',
    createdAt: null,
    name: 'Ozone Park - Lefferts Blvd',
    schedule: 'S to Euclid Av-nights, A-all other times'
  },
  {
    coordinates: 'POINT (-73.98769099825152 40.755477001982506)',
    id: 197,
    updatedAt: null,
    line: '7-7 Express',
    createdAt: null,
    name: 'Times Sq - 42nd St',
    schedule: '7-all times, 7 Express-rush hours AM westbound, PM eastbound'
  },
  {
    coordinates: 'POINT (-73.97595787413822 40.576033818103646)',
    id: 198,
    updatedAt: null,
    line: 'F-Q',
    createdAt: null,
    name: 'W 8th St - NY Aquarium',
    schedule: 'F,Q-all times'
  },
  {
    coordinates: 'POINT (-73.99336500134324 40.74721499918219)',
    id: 199,
    updatedAt: null,
    line: '1-2',
    createdAt: null,
    name: '28th St',
    schedule: '1-all times, 2-nights'
  },
  {
    coordinates: 'POINT (-73.98426400110407 40.743069999259035)',
    id: 200,
    updatedAt: null,
    line: '4-6-6 Express',
    createdAt: null,
    name: '28th St',
    schedule:
      '4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.82812100059289 40.85246199951662)',
    id: 201,
    updatedAt: null,
    line: '6-6 Express',
    createdAt: null,
    name: 'Pelham Bay Park',
    schedule:
      '6 Express-weekdays AM southbound, PM northbound, 6-all other times'
  },
  {
    coordinates: 'POINT (-73.84295199925012 40.839892001013915)',
    id: 202,
    updatedAt: null,
    line: '6-6 Express',
    createdAt: null,
    name: 'Westchester Sq - E Tremont Ave',
    schedule:
      '6 Express-weekdays AM southbound, PM northbound, 6-all other times'
  },
  {
    coordinates: 'POINT (-73.99787100060406 40.741039999802105)',
    id: 203,
    updatedAt: null,
    line: '1-2',
    createdAt: null,
    name: '18th St',
    schedule: '1-all times, 2-nights'
  },
  {
    coordinates: 'POINT (-73.97604100111508 40.751431000286864)',
    id: 204,
    updatedAt: null,
    line: '7-7 Express',
    createdAt: null,
    name: 'Grand Central - 42nd St',
    schedule: '7-all times, 7 Express-rush hours AM westbound, PM eastbound'
  },
  {
    coordinates: 'POINT (-73.7969239998421 40.59092700078133)',
    id: 205,
    updatedAt: null,
    line: 'A',
    createdAt: null,
    name: 'Beach 67th St',
    schedule: 'A-all times'
  },
  {
    coordinates: 'POINT (-74.00049500225435 40.73233799774325)',
    id: 206,
    updatedAt: null,
    line: 'A-C-E',
    createdAt: null,
    name: 'W 4th St - Washington Sq (Upper)',
    schedule: 'A,E-all times, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.86008700006875 40.69242699966103)',
    id: 207,
    updatedAt: null,
    line: 'J',
    createdAt: null,
    name: '85th St - Forest Pky',
    schedule: 'J-all times'
  },
  {
    coordinates: 'POINT (-73.85205199740794 40.69370399880105)',
    id: 208,
    updatedAt: null,
    line: 'J-Z',
    createdAt: null,
    name: 'Woodhaven Blvd',
    schedule: 'J-all times, Z-rush hours AM westbound, PM eastbound'
  },
  {
    coordinates: 'POINT (-73.83679338454697 40.697114810696476)',
    id: 209,
    updatedAt: null,
    line: 'J',
    createdAt: null,
    name: '111th St',
    schedule: 'J-all times'
  },
  {
    coordinates: 'POINT (-73.82834900017954 40.700481998515315)',
    id: 210,
    updatedAt: null,
    line: 'J-Z',
    createdAt: null,
    name: '121st St',
    schedule: 'Z-rush hours AM westbound, PM eastbound, J-all other times'
  },
  {
    coordinates: 'POINT (-73.90393400118631 40.69551800114878)',
    id: 211,
    updatedAt: null,
    line: 'L',
    createdAt: null,
    name: 'Halsey St',
    schedule: 'L-all times'
  },
  {
    coordinates: 'POINT (-73.9109757182647 40.699471062427136)',
    id: 212,
    updatedAt: null,
    line: 'L',
    createdAt: null,
    name: 'Myrtle - Wyckoff Aves',
    schedule: 'L-all times'
  },
  {
    coordinates: 'POINT (-73.88411070800329 40.6663149325969)',
    id: 213,
    updatedAt: null,
    line: '3-4',
    createdAt: null,
    name: 'New Lots Ave',
    schedule: '4-nights, 3-all other times'
  },
  {
    coordinates: 'POINT (-73.8903580002471 40.67270999906104)',
    id: 214,
    updatedAt: null,
    line: 'A-C',
    createdAt: null,
    name: 'Van Siclen Ave',
    schedule: 'A-nights, C-all other times'
  },
  {
    coordinates: 'POINT (-73.8851940021643 40.679777998961164)',
    id: 215,
    updatedAt: null,
    line: 'J',
    createdAt: null,
    name: 'Cleveland St',
    schedule: 'J-all times'
  },
  {
    coordinates: 'POINT (-73.90056237226057 40.66405727094644)',
    id: 216,
    updatedAt: null,
    line: 'L',
    createdAt: null,
    name: 'Livonia Ave',
    schedule: 'L-all times'
  },
  {
    coordinates: 'POINT (-73.90244864183562 40.66358900181724)',
    id: 217,
    updatedAt: null,
    line: '3-4',
    createdAt: null,
    name: 'Junius St',
    schedule: '4-nights, 3-all other times'
  },
  {
    coordinates: 'POINT (-73.90895833584449 40.66261748815223)',
    id: 218,
    updatedAt: null,
    line: '3-4',
    createdAt: null,
    name: 'Rockaway Ave',
    schedule: '4-nights, 3-all other times'
  },
  {
    coordinates: 'POINT (-73.90185000017287 40.64665366739528)',
    id: 219,
    updatedAt: null,
    line: 'L',
    createdAt: null,
    name: 'Canarsie - Rockaway Pkwy',
    schedule: 'L-all times'
  },
  {
    coordinates: 'POINT (-73.89954769388724 40.65046878544699)',
    id: 220,
    updatedAt: null,
    line: 'L',
    createdAt: null,
    name: 'E 105th St',
    schedule: 'L-all times'
  },
  {
    coordinates: 'POINT (-73.91633025007947 40.6615297898075)',
    id: 221,
    updatedAt: null,
    line: '3-4',
    createdAt: null,
    name: 'Saratoga Ave',
    schedule: '4-nights, 3-all other times'
  },
  {
    coordinates: 'POINT (-73.92252118536001 40.66476678877493)',
    id: 222,
    updatedAt: null,
    line: '3-4',
    createdAt: null,
    name: 'Sutter Ave - Rutland Road',
    schedule: '4-nights, 3-all other times'
  },
  {
    coordinates: 'POINT (-73.89927796057142 40.65891477368527)',
    id: 223,
    updatedAt: null,
    line: 'L',
    createdAt: null,
    name: 'New Lots Ave',
    schedule: 'L-all times'
  },
  {
    coordinates: 'POINT (-73.90428999746412 40.67936600147369)',
    id: 224,
    updatedAt: null,
    line: 'J-Z',
    createdAt: null,
    name: 'Broadway Junction',
    schedule: 'J-all times, Z-rush hours AM westbound, PM eastbound'
  },
  {
    coordinates: 'POINT (-73.89852600159652 40.676998000003756)',
    id: 225,
    updatedAt: null,
    line: 'J',
    createdAt: null,
    name: 'Alabama Ave',
    schedule: 'J-all times'
  },
  {
    coordinates: 'POINT (-73.88074999747269 40.6741300014559)',
    id: 226,
    updatedAt: null,
    line: 'A-C',
    createdAt: null,
    name: 'Shepherd Ave',
    schedule: 'A-nights, C-all other times'
  },
  {
    coordinates: 'POINT (-73.87392925215778 40.68315265707736)',
    id: 227,
    updatedAt: null,
    line: 'J-Z',
    createdAt: null,
    name: 'Crescent St',
    schedule: 'J-all times, Z-rush hours AM westbound, PM eastbound'
  },
  {
    coordinates: 'POINT (-73.87332199882995 40.689616000838754)',
    id: 228,
    updatedAt: null,
    line: 'J',
    createdAt: null,
    name: 'Cypress Hills',
    schedule: 'J-all times'
  },
  {
    coordinates: 'POINT (-73.86728799944963 40.691290001246735)',
    id: 229,
    updatedAt: null,
    line: 'J-Z',
    createdAt: null,
    name: '75th St - Eldert Ln',
    schedule: 'Z-rush hours AM westbound, PM eastbound, J-all other times'
  },
  {
    coordinates: 'POINT (-73.8964029993185 40.746324999410284)',
    id: 230,
    updatedAt: null,
    line: '7',
    createdAt: null,
    name: '69th St',
    schedule: '7-all times'
  },
  {
    coordinates: 'POINT (-73.8912051289911 40.746867573829114)',
    id: 231,
    updatedAt: null,
    line: '7',
    createdAt: null,
    name: '74th St - Broadway',
    schedule: '7-all times'
  },
  {
    coordinates: 'POINT (-73.86943208612348 40.73309737380972)',
    id: 232,
    updatedAt: null,
    line: 'E-M-R',
    createdAt: null,
    name: 'Woodhaven Blvd - Queens Mall',
    schedule: 'E-nights, R-all other times, M-weekdays and evenings'
  },
  {
    coordinates: 'POINT (-73.91217899939602 40.69945400090837)',
    id: 233,
    updatedAt: null,
    line: 'M',
    createdAt: null,
    name: 'Myrtle - Wyckoff Aves',
    schedule: 'M-all times'
  },
  {
    coordinates: 'POINT (-73.90758199885423 40.70291899894902)',
    id: 234,
    updatedAt: null,
    line: 'M',
    createdAt: null,
    name: 'Seneca Ave',
    schedule: 'M-all times'
  },
  {
    coordinates: 'POINT (-73.91823200219723 40.70369299961644)',
    id: 235,
    updatedAt: null,
    line: 'L',
    createdAt: null,
    name: 'DeKalb Ave',
    schedule: 'L-all times'
  },
  {
    coordinates: 'POINT (-73.91254899891254 40.744149001021576)',
    id: 236,
    updatedAt: null,
    line: '7',
    createdAt: null,
    name: '52nd St',
    schedule: '7-all times'
  },
  {
    coordinates: 'POINT (-73.91352174995538 40.756316952608096)',
    id: 237,
    updatedAt: null,
    line: 'E-M-R',
    createdAt: null,
    name: '46th St',
    schedule: 'E-nights, R-all other times, M-weekdays and evenings'
  },
  {
    coordinates: 'POINT (-73.90606508052358 40.752824829236076)',
    id: 238,
    updatedAt: null,
    line: 'E-M-R',
    createdAt: null,
    name: 'Northern Blvd',
    schedule: 'E-nights, R-all other times, M-weekdays and evenings'
  },
  {
    coordinates: 'POINT (-73.91843500103973 40.74313200060382)',
    id: 239,
    updatedAt: null,
    line: '7',
    createdAt: null,
    name: '46th St',
    schedule: '7-all times'
  },
  {
    coordinates: 'POINT (-73.88369700071884 40.747658999559135)',
    id: 240,
    updatedAt: null,
    line: '7',
    createdAt: null,
    name: '82nd St - Jackson Hts',
    schedule: '7-all times'
  },
  {
    coordinates: 'POINT (-73.87661299986985 40.74840800060913)',
    id: 241,
    updatedAt: null,
    line: '7',
    createdAt: null,
    name: '90th St - Elmhurst Av',
    schedule: '7-all times'
  },
  {
    coordinates: 'POINT (-73.83030100071032 40.66047600004959)',
    id: 242,
    updatedAt: null,
    line: 'A',
    createdAt: null,
    name: 'Howard Beach - JFK Airport',
    schedule: 'A-all times'
  },
  {
    coordinates: 'POINT (-73.83405799948723 40.668234001699815)',
    id: 243,
    updatedAt: null,
    line: 'A',
    createdAt: null,
    name: 'Aqueduct - North Conduit Av',
    schedule: 'A-all times'
  },
  {
    coordinates: 'POINT (-73.82069263637443 40.70916181536946)',
    id: 244,
    updatedAt: null,
    line: 'E-F',
    createdAt: null,
    name: 'Briarwood - Van Wyck Blvd',
    schedule: 'E-evenings, weekends, nights, F-all times'
  },
  {
    coordinates: 'POINT (-73.84451672012669 40.72159430953587)',
    id: 245,
    updatedAt: null,
    line: 'E-F-M-R',
    createdAt: null,
    name: 'Forest Hills - 71st Av',
    schedule: 'E,F-all times, M-weekdays and evenings, R-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.81083299897232 40.70541799906764)',
    id: 246,
    updatedAt: null,
    line: 'F',
    createdAt: null,
    name: 'Sutphin Blvd',
    schedule: 'F-all times'
  },
  {
    coordinates: 'POINT (-73.80109632298924 40.70206737621188)',
    id: 247,
    updatedAt: null,
    line: 'E-J-Z',
    createdAt: null,
    name: 'Jamaica Ctr - Parsons / Archer',
    schedule: 'E,J-all times, Z-rush hours AM westbound, PM eastbound'
  },
  {
    coordinates: 'POINT (-73.86021461772737 40.88802825863786)',
    id: 248,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: '225th St',
    schedule: '2-all times, 5-rush hours AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.87915899874777 40.82858400108929)',
    id: 249,
    updatedAt: null,
    line: '6',
    createdAt: null,
    name: 'Elder Ave',
    schedule: '6-all times'
  },
  {
    coordinates: 'POINT (-73.89643499897414 40.816103999972405)',
    id: 250,
    updatedAt: null,
    line: '6',
    createdAt: null,
    name: 'Longwood Ave',
    schedule: '6-all times'
  },
  {
    coordinates: 'POINT (-73.91809500109238 40.77003699949086)',
    id: 251,
    updatedAt: null,
    line: 'N-W',
    createdAt: null,
    name: 'Astoria Blvd',
    schedule: 'N-all times, W part time'
  },
  {
    coordinates: 'POINT (-73.9120340001031 40.775035666523664)',
    id: 252,
    updatedAt: null,
    line: 'N-W',
    createdAt: null,
    name: 'Astoria - Ditmars Blvd',
    schedule: 'N-all times, W part time'
  },
  {
    coordinates: 'POINT (-73.9077019387083 40.81643746686396)',
    id: 253,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: 'Jackson Ave',
    schedule:
      '2-all times, 5-all times exc nights, skips rush hours AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.90177778730917 40.81948726483844)',
    id: 254,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: 'Prospect Ave',
    schedule:
      '2-all times, 5-all times exc nights, skips rush hours AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.91404199994753 40.8053680007636)',
    id: 255,
    updatedAt: null,
    line: '6',
    createdAt: null,
    name: 'Cypress Ave',
    schedule: '6-all times'
  },
  {
    coordinates: 'POINT (-73.88769359812888 40.837195550170605)',
    id: 256,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: '174th St',
    schedule:
      '2-all times, 5-all times exc nights, skips rush hours AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.86723422851625 40.86548337793927)',
    id: 257,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: 'Allerton Ave',
    schedule: '2-all times, 5-rush hours AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.90765699936489 40.80871900090143)',
    id: 258,
    updatedAt: null,
    line: '6',
    createdAt: null,
    name: "E 143rd St - St Mary's St",
    schedule: '6-all times'
  },
  {
    coordinates: 'POINT (-73.89717400101743 40.867760000885795)',
    id: 259,
    updatedAt: null,
    line: '4',
    createdAt: null,
    name: 'Kingsbridge Rd',
    schedule: '4-all times'
  },
  {
    coordinates: 'POINT (-73.89006400069478 40.87341199980121)',
    id: 260,
    updatedAt: null,
    line: '4',
    createdAt: null,
    name: 'Bedford Park Blvd - Lehman College',
    schedule: '4-all times'
  },
  {
    coordinates: 'POINT (-73.93647000005559 40.82388000080457)',
    id: 261,
    updatedAt: null,
    line: '3',
    createdAt: null,
    name: 'Harlem - 148 St',
    schedule: '3-all times'
  },
  {
    coordinates: 'POINT (-73.9146849986034 40.84443400092679)',
    id: 262,
    updatedAt: null,
    line: '4',
    createdAt: null,
    name: 'Mt Eden Ave',
    schedule: '4-all times'
  },
  {
    coordinates: 'POINT (-73.89774900102401 40.861295998683495)',
    id: 263,
    updatedAt: null,
    line: 'B-D',
    createdAt: null,
    name: 'Fordham Rd',
    schedule: 'B-rush hours, D-all times'
  },
  {
    coordinates: 'POINT (-73.91779099745928 40.84007499993004)',
    id: 264,
    updatedAt: null,
    line: '4',
    createdAt: null,
    name: '170th St',
    schedule: '4-all times'
  },
  {
    coordinates: 'POINT (-73.88713799889574 40.87324399861646)',
    id: 265,
    updatedAt: null,
    line: 'B-D',
    createdAt: null,
    name: 'Bedford Park Blvd',
    schedule: 'B-rush hours, D-all times'
  },
  {
    coordinates: 'POINT (-73.90983099923551 40.87456099941789)',
    id: 266,
    updatedAt: null,
    line: '1',
    createdAt: null,
    name: 'Marble Hill - 225th St',
    schedule: '1-all times'
  },
  {
    coordinates: 'POINT (-73.90483400107873 40.87885599817935)',
    id: 267,
    updatedAt: null,
    line: '1',
    createdAt: null,
    name: '231st St',
    schedule: '1-all times'
  },
  {
    coordinates: 'POINT (-73.91527899954356 40.86944399946045)',
    id: 268,
    updatedAt: null,
    line: '1',
    createdAt: null,
    name: '215th St',
    schedule: '1-all times'
  },
  {
    coordinates: 'POINT (-73.91881900132312 40.864614000525854)',
    id: 269,
    updatedAt: null,
    line: '1',
    createdAt: null,
    name: '207th St',
    schedule: '1-all times'
  },
  {
    coordinates: 'POINT (-73.91989900100465 40.86807199999737)',
    id: 270,
    updatedAt: null,
    line: 'A',
    createdAt: null,
    name: 'Inwood - 207th St',
    schedule: 'A-all times'
  },
  {
    coordinates: 'POINT (-73.89858300049647 40.88924800011476)',
    id: 271,
    updatedAt: null,
    line: '1',
    createdAt: null,
    name: 'Van Cortlandt Park - 242nd St',
    schedule: '1-all times'
  },
  {
    coordinates: 'POINT (-73.87996127877184 40.84020763241799)',
    id: 272,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: 'West Farms Sq - E Tremont Av',
    schedule:
      '2-all times, 5-all times exc nights, skips rush hours AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.8625097078866 40.883887974625274)',
    id: 273,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: '219th St',
    schedule: '2-all times, 5-rush hours AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.88465499988732 40.87974999947229)',
    id: 274,
    updatedAt: null,
    line: '4',
    createdAt: null,
    name: 'Mosholu Pkwy',
    schedule: '4-all times'
  },
  {
    coordinates: 'POINT (-73.87885499918691 40.87481100011182)',
    id: 275,
    updatedAt: null,
    line: 'D',
    createdAt: null,
    name: 'Norwood - 205th St',
    schedule: 'D-all times'
  },
  {
    coordinates: 'POINT (-73.86705361747603 40.87125880254771)',
    id: 276,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: 'Burke Ave',
    schedule: '2-all times, 5-rush hours AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.83859099802153 40.87866300037311)',
    id: 277,
    updatedAt: null,
    line: '5',
    createdAt: null,
    name: 'Baychester Ave',
    schedule: '5-all times'
  },
  {
    coordinates: 'POINT (-73.8308340021742 40.88829999901007)',
    id: 278,
    updatedAt: null,
    line: '5',
    createdAt: null,
    name: 'Eastchester - Dyre Ave',
    schedule: '5-all times'
  },
  {
    coordinates: 'POINT (-73.78381700176453 40.712645666744045)',
    id: 279,
    updatedAt: null,
    line: 'F',
    createdAt: null,
    name: 'Jamaica - 179th St',
    schedule: 'F-all times'
  },
  {
    coordinates: 'POINT (-73.8506199987954 40.903125000541245)',
    id: 280,
    updatedAt: null,
    line: '2',
    createdAt: null,
    name: 'Wakefield - 241st St',
    schedule: '2-all times'
  },
  {
    coordinates: 'POINT (-73.95924499945693 40.670342666584396)',
    id: 281,
    updatedAt: null,
    line: 'S',
    createdAt: null,
    name: 'Botanic Garden',
    schedule: 'S Franklin Av-Fulton St to Prospect Park-all times'
  },
  {
    coordinates: 'POINT (-73.90526176305106 40.68286062551184)',
    id: 282,
    updatedAt: null,
    line: 'L',
    createdAt: null,
    name: 'Bushwick - Aberdeen',
    schedule: 'L-all times'
  },
  {
    coordinates: 'POINT (-73.90311757920684 40.67845624842869)',
    id: 283,
    updatedAt: null,
    line: 'L',
    createdAt: null,
    name: 'Broadway Junction',
    schedule: 'L-all times'
  },
  {
    coordinates: 'POINT (-73.84638400151765 40.86952599962676)',
    id: 284,
    updatedAt: null,
    line: '5',
    createdAt: null,
    name: 'Gun Hill Rd',
    schedule: '5-all times'
  },
  {
    coordinates: 'POINT (-73.87334609510884 40.8418630412186)',
    id: 285,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: 'E 180th St',
    schedule: '2,5-all times'
  },
  {
    coordinates: 'POINT (-73.92553600006474 40.86053100138796)',
    id: 286,
    updatedAt: null,
    line: '1',
    createdAt: null,
    name: 'Dyckman St',
    schedule: '1-all times'
  },
  {
    coordinates: 'POINT (-73.95837200097044 40.815580999978934)',
    id: 287,
    updatedAt: null,
    line: '1',
    createdAt: null,
    name: '125th St',
    schedule: '1-all times'
  },
  {
    coordinates: 'POINT (-73.95582700110425 40.68059566598263)',
    id: 288,
    updatedAt: null,
    line: 'S',
    createdAt: null,
    name: 'Franklin Ave - Fulton St',
    schedule: 'S to Prospect Park-all times'
  },
  {
    coordinates: 'POINT (-73.92672247438611 40.81833014409742)',
    id: 289,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: '149th St - Grand Concourse',
    schedule: '2-all times, 5-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.91779152760981 40.816029252510006)',
    id: 290,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: '3rd Ave - 149th St',
    schedule: '2-all times, 5-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.92139999784426 40.83553699933672)',
    id: 291,
    updatedAt: null,
    line: '4',
    createdAt: null,
    name: '167th St',
    schedule: '4-all times'
  },
  {
    coordinates: 'POINT (-73.91923999909432 40.80756599987699)',
    id: 292,
    updatedAt: null,
    line: '6',
    createdAt: null,
    name: 'Brook Ave',
    schedule: '6-all times'
  },
  {
    coordinates: 'POINT (-73.93099699953838 40.74458699983993)',
    id: 293,
    updatedAt: null,
    line: '7',
    createdAt: null,
    name: '33rd St',
    schedule: '7-all times'
  },
  {
    coordinates: 'POINT (-73.9240159984882 40.74378100149132)',
    id: 294,
    updatedAt: null,
    line: '7',
    createdAt: null,
    name: '40th St',
    schedule: '7-all times'
  },
  {
    coordinates: 'POINT (-73.94408792823116 40.824766360871905)',
    id: 295,
    updatedAt: null,
    line: 'A-B-C-D',
    createdAt: null,
    name: '145th St',
    schedule: 'A,D-all times, B-weekdays and evenings, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.93820899811622 40.8301349999812)',
    id: 296,
    updatedAt: null,
    line: 'B-D',
    createdAt: null,
    name: '155th St',
    schedule:
      'B-rush hours, D-all times, skips rush hours AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.92565099775477 40.827904998845845)',
    id: 297,
    updatedAt: null,
    line: 'B-D',
    createdAt: null,
    name: '161st St - Yankee Stadium',
    schedule:
      'B-rush hours, D-all times, skips rush hours AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.93072899914027 40.67936399950546)',
    id: 298,
    updatedAt: null,
    line: 'A-C',
    createdAt: null,
    name: 'Utica Ave',
    schedule: 'A-all times, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.9205264716827 40.75698735912575)',
    id: 299,
    updatedAt: null,
    line: 'E-M-R',
    createdAt: null,
    name: 'Steinway St',
    schedule: 'E-nights, R-all other times, M-weekdays and evenings'
  },
  {
    coordinates: 'POINT (-73.92850899927413 40.69317200129202)',
    id: 300,
    updatedAt: null,
    line: 'J',
    createdAt: null,
    name: 'Kosciuszko St',
    schedule: 'J-all times'
  },
  {
    coordinates: 'POINT (-73.92215600150752 40.689583999013905)',
    id: 301,
    updatedAt: null,
    line: 'J-Z',
    createdAt: null,
    name: 'Gates Ave',
    schedule: 'Z-rush hours AM westbound, PM eastbound, J-all other times'
  },
  {
    coordinates: 'POINT (-73.92724299902838 40.69787300011831)',
    id: 302,
    updatedAt: null,
    line: 'M',
    createdAt: null,
    name: 'Central Ave',
    schedule: 'M-all times'
  },
  {
    coordinates: 'POINT (-73.91972000188625 40.69866000123805)',
    id: 303,
    updatedAt: null,
    line: 'M',
    createdAt: null,
    name: 'Knickerbocker Ave',
    schedule: 'M-all times'
  },
  {
    coordinates: 'POINT (-73.9214790001739 40.76677866673298)',
    id: 304,
    updatedAt: null,
    line: 'N-W',
    createdAt: null,
    name: '30th Ave',
    schedule: 'N-all times, W part time'
  },
  {
    coordinates: 'POINT (-73.9229130000312 40.706606665988716)',
    id: 305,
    updatedAt: null,
    line: 'L',
    createdAt: null,
    name: 'Jefferson St',
    schedule: 'L-all times'
  },
  {
    coordinates: 'POINT (-73.93314700024209 40.70615166680729)',
    id: 306,
    updatedAt: null,
    line: 'L',
    createdAt: null,
    name: 'Morgan Ave',
    schedule: 'L-all times'
  },
  {
    coordinates: 'POINT (-73.93713823965695 40.74891771986323)',
    id: 307,
    updatedAt: null,
    line: 'E-M-R',
    createdAt: null,
    name: 'Queens Plz',
    schedule: 'E-all times, M-weekdays and evenings, R-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.97697099965796 40.62975466638584)',
    id: 308,
    updatedAt: null,
    line: 'F',
    createdAt: null,
    name: '18th Ave',
    schedule: 'F-all times'
  },
  {
    coordinates: 'POINT (-74.0255099996266 40.629741666886915)',
    id: 309,
    updatedAt: null,
    line: 'R',
    createdAt: null,
    name: '77th St',
    schedule: 'R-all times'
  },
  {
    coordinates: 'POINT (-74.02337699950728 40.63496666682377)',
    id: 310,
    updatedAt: null,
    line: 'R',
    createdAt: null,
    name: 'Bay Ridge Ave',
    schedule: 'R-all times'
  },
  {
    coordinates: 'POINT (-73.9946587805514 40.636260890961395)',
    id: 311,
    updatedAt: null,
    line: 'D',
    createdAt: null,
    name: '50th St',
    schedule: 'D-all times'
  },
  {
    coordinates: 'POINT (-74.00535100046275 40.63138566722445)',
    id: 312,
    updatedAt: null,
    line: 'N',
    createdAt: null,
    name: 'Ft Hamilton Pkwy',
    schedule: 'N-all times'
  },
  {
    coordinates: 'POINT (-73.98682900011477 40.59770366695856)',
    id: 313,
    updatedAt: null,
    line: 'D',
    createdAt: null,
    name: '25th Ave',
    schedule: 'D-all times'
  },
  {
    coordinates: 'POINT (-73.9936762000529 40.601950461572315)',
    id: 314,
    updatedAt: null,
    line: 'D',
    createdAt: null,
    name: 'Bay Pky',
    schedule: 'D-all times'
  },
  {
    coordinates: 'POINT (-73.98452199846113 40.617108999866005)',
    id: 315,
    updatedAt: null,
    line: 'N',
    createdAt: null,
    name: '20th Ave',
    schedule: 'N-all times'
  },
  {
    coordinates: 'POINT (-73.99045399865993 40.620686997680025)',
    id: 316,
    updatedAt: null,
    line: 'N',
    createdAt: null,
    name: '18th Ave',
    schedule: 'N-all times'
  },
  {
    coordinates: 'POINT (-74.03087600085765 40.61662166725951)',
    id: 317,
    updatedAt: null,
    line: 'R',
    createdAt: null,
    name: 'Bay Ridge - 95th St',
    schedule: 'R-all times'
  },
  {
    coordinates: 'POINT (-74.0283979999864 40.62268666715025)',
    id: 318,
    updatedAt: null,
    line: 'R',
    createdAt: null,
    name: '86th St',
    schedule: 'R-all times'
  },
  {
    coordinates: 'POINT (-74.00058287431507 40.61315892569516)',
    id: 319,
    updatedAt: null,
    line: 'D',
    createdAt: null,
    name: '79th St',
    schedule: 'D-all times'
  },
  {
    coordinates: 'POINT (-73.99884094850685 40.61925870977273)',
    id: 320,
    updatedAt: null,
    line: 'D',
    createdAt: null,
    name: '71st St',
    schedule: 'D-all times'
  },
  {
    coordinates: 'POINT (-73.99817432157568 40.60467699816932)',
    id: 321,
    updatedAt: null,
    line: 'D',
    createdAt: null,
    name: '20th Ave',
    schedule: 'D-all times'
  },
  {
    coordinates: 'POINT (-74.00159259239406 40.60773573171741)',
    id: 322,
    updatedAt: null,
    line: 'D',
    createdAt: null,
    name: '18th Ave',
    schedule: 'D-all times'
  },
  {
    coordinates: 'POINT (-73.99685724994863 40.626224462922195)',
    id: 323,
    updatedAt: null,
    line: 'D',
    createdAt: null,
    name: '62nd St',
    schedule: 'D-all times'
  },
  {
    coordinates: 'POINT (-73.99635300025969 40.62484166725887)',
    id: 324,
    updatedAt: null,
    line: 'N',
    createdAt: null,
    name: 'New Utrecht Ave',
    schedule: 'N-all times'
  },
  {
    coordinates: 'POINT (-73.97337641974885 40.59592482551748)',
    id: 325,
    updatedAt: null,
    line: 'F',
    createdAt: null,
    name: 'Ave U',
    schedule: 'F-all times'
  },
  {
    coordinates: 'POINT (-73.9723553085244 40.603258405128265)',
    id: 326,
    updatedAt: null,
    line: 'F',
    createdAt: null,
    name: 'Kings Hwy',
    schedule: 'F-all times'
  },
  {
    coordinates: 'POINT (-73.96135378598797 40.577710196642435)',
    id: 327,
    updatedAt: null,
    line: 'B-Q',
    createdAt: null,
    name: 'Brighton Beach',
    schedule: 'B-weekdays and evenings, Q-all times'
  },
  {
    coordinates: 'POINT (-73.95405791257907 40.58654754707536)',
    id: 328,
    updatedAt: null,
    line: 'B-Q',
    createdAt: null,
    name: 'Sheepshead Bay',
    schedule: 'B-weekdays and evenings, Q-all times'
  },
  {
    coordinates: 'POINT (-73.95581122316301 40.59930895095475)',
    id: 329,
    updatedAt: null,
    line: 'Q',
    createdAt: null,
    name: 'Ave U',
    schedule: 'Q-all times'
  },
  {
    coordinates: 'POINT (-73.95760873538083 40.608638645396006)',
    id: 330,
    updatedAt: null,
    line: 'B-Q',
    createdAt: null,
    name: 'Kings Hwy',
    schedule: 'B-weekdays and evenings, Q-all times'
  },
  {
    coordinates: 'POINT (-73.97908400099428 40.597235999920436)',
    id: 331,
    updatedAt: null,
    line: 'N',
    createdAt: null,
    name: 'Ave U',
    schedule: 'N-all times'
  },
  {
    coordinates: 'POINT (-73.98037300229343 40.60405899980493)',
    id: 332,
    updatedAt: null,
    line: 'N',
    createdAt: null,
    name: 'Kings Hwy',
    schedule: 'N-all times'
  },
  {
    coordinates: 'POINT (-73.97459272818807 40.580738758491464)',
    id: 333,
    updatedAt: null,
    line: 'F',
    createdAt: null,
    name: 'Neptune Ave',
    schedule: 'F-all times'
  },
  {
    coordinates: 'POINT (-73.97426599968905 40.589449666625285)',
    id: 334,
    updatedAt: null,
    line: 'F',
    createdAt: null,
    name: 'Ave X',
    schedule: 'F-all times'
  },
  {
    coordinates: 'POINT (-73.98376500045946 40.58884066651933)',
    id: 335,
    updatedAt: null,
    line: 'D',
    createdAt: null,
    name: 'Bay 50th St',
    schedule: 'D-all times'
  },
  {
    coordinates: 'POINT (-73.97818899936274 40.59246500088859)',
    id: 336,
    updatedAt: null,
    line: 'N',
    createdAt: null,
    name: 'Gravesend - 86th St',
    schedule: 'N-all times'
  },
  {
    coordinates: 'POINT (-73.97300281528751 40.608842808949916)',
    id: 337,
    updatedAt: null,
    line: 'F',
    createdAt: null,
    name: 'Ave P',
    schedule: 'F-all times'
  },
  {
    coordinates: 'POINT (-73.97404850873143 40.61435671190883)',
    id: 338,
    updatedAt: null,
    line: 'F',
    createdAt: null,
    name: 'Ave N',
    schedule: 'F-all times'
  },
  {
    coordinates: 'POINT (-73.9752569782215 40.62073162316788)',
    id: 339,
    updatedAt: null,
    line: 'F',
    createdAt: null,
    name: 'Bay Pky',
    schedule: 'F-all times'
  },
  {
    coordinates: 'POINT (-73.9592431052215 40.617397744443736)',
    id: 340,
    updatedAt: null,
    line: 'Q',
    createdAt: null,
    name: 'Ave M',
    schedule: 'Q-all times'
  },
  {
    coordinates: 'POINT (-73.98178001069293 40.61145578989005)',
    id: 341,
    updatedAt: null,
    line: 'N',
    createdAt: null,
    name: 'Bay Pky',
    schedule: 'N-all times'
  },
  {
    coordinates: 'POINT (-73.97606933170925 40.62501744019143)',
    id: 342,
    updatedAt: null,
    line: 'F',
    createdAt: null,
    name: 'Ave I',
    schedule: 'F-all times'
  },
  {
    coordinates: 'POINT (-73.96069316246925 40.625022819915166)',
    id: 343,
    updatedAt: null,
    line: 'Q',
    createdAt: null,
    name: 'Ave J',
    schedule: 'Q-all times'
  },
  {
    coordinates: 'POINT (-73.96151793942495 40.62920837758969)',
    id: 344,
    updatedAt: null,
    line: 'Q',
    createdAt: null,
    name: 'Ave H',
    schedule: 'Q-all times'
  },
  {
    coordinates: 'POINT (-73.95507827493762 40.59532169111695)',
    id: 345,
    updatedAt: null,
    line: 'Q',
    createdAt: null,
    name: 'Neck Rd',
    schedule: 'Q-all times'
  },
  {
    coordinates: 'POINT (-73.94193761457447 40.75373927087553)',
    id: 346,
    updatedAt: null,
    line: 'F',
    createdAt: null,
    name: '21st St - Queensbridge',
    schedule: 'F-all times'
  },
  {
    coordinates: 'POINT (-73.98598400026407 40.76245599925997)',
    id: 347,
    updatedAt: null,
    line: 'A-C-E',
    createdAt: null,
    name: '50th St',
    schedule: 'A-nights, C-all other times, E-all times'
  },
  {
    coordinates: 'POINT (-73.98169782344476 40.76297015245628)',
    id: 348,
    updatedAt: null,
    line: 'B-D-E',
    createdAt: null,
    name: '7th Ave',
    schedule: 'D,E-all times, B-weekdays and evenings'
  },
  {
    coordinates: 'POINT (-73.98133100227702 40.75864100159815)',
    id: 349,
    updatedAt: null,
    line: 'B-D-F-M',
    createdAt: null,
    name: '47th-50th Sts - Rockefeller Ctr',
    schedule: 'B,M-weekdays and evenings, D,F-all times'
  },
  {
    coordinates: 'POINT (-73.97736800085171 40.76408500081713)',
    id: 350,
    updatedAt: null,
    line: 'F',
    createdAt: null,
    name: '57th St',
    schedule: 'F-all times'
  },
  {
    coordinates: 'POINT (-73.96608964413245 40.76461809442373)',
    id: 351,
    updatedAt: null,
    line: 'F-Q',
    createdAt: null,
    name: 'Lexington Ave - 63rd St',
    schedule: 'F-all times, Q all times'
  },
  {
    coordinates: 'POINT (-73.95323499978866 40.75917199967108)',
    id: 352,
    updatedAt: null,
    line: 'F',
    createdAt: null,
    name: 'Roosevelt Island - Main St',
    schedule: 'F-all times'
  },
  {
    coordinates: 'POINT (-73.98164872301398 40.768249531776064)',
    id: 353,
    updatedAt: null,
    line: 'A-B-C-D',
    createdAt: null,
    name: '59th St - Columbus Circle',
    schedule: 'A,D-all times, B-weekdays and evenings, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.98420956591096 40.759801973870694)',
    id: 354,
    updatedAt: null,
    line: 'N-Q-R-W',
    createdAt: null,
    name: '49th St',
    schedule:
      'N-all times, Q-all times exc weekends, R-all times exc nights, W part time'
  },
  {
    coordinates: 'POINT (-73.98072973372128 40.76456552501829)',
    id: 355,
    updatedAt: null,
    line: 'N-Q-R-W',
    createdAt: null,
    name: '57th St',
    schedule: 'N,Q-all times, R-all times exc nights, W part time'
  },
  {
    coordinates: 'POINT (-73.97334700047045 40.764810999755284)',
    id: 356,
    updatedAt: null,
    line: 'N-R-W',
    createdAt: null,
    name: '5th Ave - 59th St',
    schedule: 'N-all times, R-all times exc nights, W part time'
  },
  {
    coordinates: 'POINT (-73.96737501711436 40.762708855394564)',
    id: 357,
    updatedAt: null,
    line: 'N-R-W',
    createdAt: null,
    name: 'Lexington Ave - 59th St',
    schedule: 'N-all times, R-all times exc nights, W part time'
  },
  {
    coordinates: 'POINT (-73.99105699913983 40.75037300003949)',
    id: 358,
    updatedAt: null,
    line: '1-2-3',
    createdAt: null,
    name: '34th St - Penn Station',
    schedule: '1,2,3-all times'
  },
  {
    coordinates: 'POINT (-73.98749500051885 40.75528999995681)',
    id: 359,
    updatedAt: null,
    line: '1-2-3',
    createdAt: null,
    name: 'Times Sq - 42nd St',
    schedule: '1,2,3-all times'
  },
  {
    coordinates: 'POINT (-74.00762309323994 40.71016216530185)',
    id: 360,
    updatedAt: null,
    line: 'A-C',
    createdAt: null,
    name: 'Fulton St',
    schedule: 'A-all times, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-74.00858473570133 40.714111000774025)',
    id: 361,
    updatedAt: null,
    line: 'A-C',
    createdAt: null,
    name: 'Chambers St',
    schedule: 'A-all times, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.98973500085859 40.757307998551504)',
    id: 362,
    updatedAt: null,
    line: 'A-C-E',
    createdAt: null,
    name: '42nd St - Port Authority Bus Term',
    schedule: 'A,E-all times, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.94906699890156 40.69461899903765)',
    id: 363,
    updatedAt: null,
    line: 'G',
    createdAt: null,
    name: 'Myrtle-Willoughby Aves',
    schedule: 'G-all times'
  },
  {
    coordinates: 'POINT (-73.9502340010257 40.70037666622154)',
    id: 364,
    updatedAt: null,
    line: 'G',
    createdAt: null,
    name: 'Flushing Ave',
    schedule: 'G-all times'
  },
  {
    coordinates: 'POINT (-73.99276500471389 40.742954317826005)',
    id: 365,
    updatedAt: null,
    line: 'F-M',
    createdAt: null,
    name: '23rd St',
    schedule: 'F-all times, M-weekdays and evenings'
  },
  {
    coordinates: 'POINT (-73.98777189072918 40.74978939990011)',
    id: 366,
    updatedAt: null,
    line: 'B-D-F-M',
    createdAt: null,
    name: 'Herald Sq - 34th St',
    schedule: 'B,M-weekdays and evenings, D,F-all times'
  },
  {
    coordinates: 'POINT (-73.98503624034139 40.68840847580642)',
    id: 367,
    updatedAt: null,
    line: 'A-C-G',
    createdAt: null,
    name: 'Hoyt - Schermerhorn Sts',
    schedule: 'A,G-all times, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.98721815267317 40.692470636847084)',
    id: 368,
    updatedAt: null,
    line: 'A-C-F',
    createdAt: null,
    name: 'Jay St - MetroTech',
    schedule: 'A,F-all times, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.99017700122197 40.713855001020406)',
    id: 369,
    updatedAt: null,
    line: 'F',
    createdAt: null,
    name: 'East Broadway',
    schedule: 'F-all times'
  },
  {
    coordinates: 'POINT (-73.98807806807719 40.71868074219453)',
    id: 370,
    updatedAt: null,
    line: 'F',
    createdAt: null,
    name: 'Delancey St - Essex St',
    schedule: 'F-all times'
  },
  {
    coordinates: 'POINT (-73.98993800003434 40.72340166574911)',
    id: 371,
    updatedAt: null,
    line: 'F',
    createdAt: null,
    name: 'Lower East Side - 2nd Ave',
    schedule: 'F-all times'
  },
  {
    coordinates: 'POINT (-73.94137734838365 40.70040440298112)',
    id: 372,
    updatedAt: null,
    line: 'J-M',
    createdAt: null,
    name: 'Flushing Ave',
    schedule:
      'J-all times, skips weekdays AM westbound, PM eastbound, M-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.9356230012996 40.6971950005145)',
    id: 373,
    updatedAt: null,
    line: 'J-M-Z',
    createdAt: null,
    name: 'Myrtle Ave',
    schedule: 'J,M-all times, Z-rush hours AM westbound, PM eastbound'
  },
  {
    coordinates: 'POINT (-73.98977899938897 40.67027166728493)',
    id: 374,
    updatedAt: null,
    line: 'F-G',
    createdAt: null,
    name: '4th Av - 9th St',
    schedule: 'F,G-all times'
  },
  {
    coordinates: 'POINT (-73.99589172790934 40.67364106090412)',
    id: 375,
    updatedAt: null,
    line: 'F-G',
    createdAt: null,
    name: 'Smith - 9th Sts',
    schedule: 'F,G-all times'
  },
  {
    coordinates: 'POINT (-73.99075649573565 40.68611054725977)',
    id: 376,
    updatedAt: null,
    line: 'F-G',
    createdAt: null,
    name: 'Bergen St',
    schedule: 'F,G-all times'
  },
  {
    coordinates: 'POINT (-73.98605667854612 40.69225539645323)',
    id: 377,
    updatedAt: null,
    line: 'N-R',
    createdAt: null,
    name: 'Jay St - MetroTech',
    schedule: 'N-nights, R-all other times'
  },
  {
    coordinates: 'POINT (-73.99181830901125 40.694196480776995)',
    id: 378,
    updatedAt: null,
    line: 'N-R',
    createdAt: null,
    name: 'Court St',
    schedule: 'N-nights, R-all other times'
  },
  {
    coordinates: 'POINT (-73.99053886181645 40.73587226699812)',
    id: 379,
    updatedAt: null,
    line: 'N-Q-R-W',
    createdAt: null,
    name: 'Union Sq - 14th St',
    schedule: 'N,Q-all times, R-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.98934400102907 40.74130266729)',
    id: 380,
    updatedAt: null,
    line: 'N-Q-R-W',
    createdAt: null,
    name: '23rd St',
    schedule: 'N-all times, Q-nights, R-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.99287200067424 40.66541366712979)',
    id: 381,
    updatedAt: null,
    line: 'D-N-R',
    createdAt: null,
    name: 'Prospect Ave',
    schedule: 'D,N-nights, R-all other times'
  },
  {
    coordinates: 'POINT (-73.98830199974512 40.670846666842756)',
    id: 382,
    updatedAt: null,
    line: 'D-N-R',
    createdAt: null,
    name: '4th Av - 9th St',
    schedule: 'D,N-nights, R-all other times'
  },
  {
    coordinates: 'POINT (-73.98575000112093 40.73269099971662)',
    id: 383,
    updatedAt: null,
    line: 'L',
    createdAt: null,
    name: '3rd Ave',
    schedule: 'L-all times'
  },
  {
    coordinates: 'POINT (-73.99066976901818 40.73476331217923)',
    id: 384,
    updatedAt: null,
    line: 'L',
    createdAt: null,
    name: 'Union Sq - 14th St',
    schedule: 'L-all times'
  },
  {
    coordinates: 'POINT (-73.89654800103929 40.67454199987086)',
    id: 385,
    updatedAt: null,
    line: 'A-C',
    createdAt: null,
    name: 'Liberty Ave',
    schedule: 'A-nights, C-all other times'
  },
  {
    coordinates: 'POINT (-73.90531600055341 40.67833366608023)',
    id: 386,
    updatedAt: null,
    line: 'A-C',
    createdAt: null,
    name: 'Broadway Junction',
    schedule: 'A-all times, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-74.01788099953987 40.6413616662838)',
    id: 387,
    updatedAt: null,
    line: 'N-R',
    createdAt: null,
    name: '59th St',
    schedule: 'N,R-all times'
  },
  {
    coordinates: 'POINT (-74.01000600074939 40.648938666612814)',
    id: 388,
    updatedAt: null,
    line: 'N-R',
    createdAt: null,
    name: '45th St',
    schedule: 'N-nights, R-all times, skips nights northbound'
  },
  {
    coordinates: 'POINT (-74.00354899951809 40.65514366633887)',
    id: 389,
    updatedAt: null,
    line: 'D-N-R',
    createdAt: null,
    name: '36th St',
    schedule: 'D,N,R-all times'
  },
  {
    coordinates: 'POINT (-73.99444874451204 40.64648407726636)',
    id: 390,
    updatedAt: null,
    line: 'D',
    createdAt: null,
    name: '9th Ave',
    schedule: 'D-all times'
  },
  {
    coordinates: 'POINT (-74.01403399986317 40.64506866735981)',
    id: 391,
    updatedAt: null,
    line: 'N-R',
    createdAt: null,
    name: '53rd St',
    schedule: 'N-nights, R-all times, skips nights northbound'
  },
  {
    coordinates: 'POINT (-73.9942022375285 40.640912711444656)',
    id: 392,
    updatedAt: null,
    line: 'D',
    createdAt: null,
    name: 'Ft Hamilton Pkwy',
    schedule: 'D-all times'
  },
  {
    coordinates: 'POINT (-73.99809099974297 40.66039666692321)',
    id: 393,
    updatedAt: null,
    line: 'D-N-R',
    createdAt: null,
    name: '25th St',
    schedule: 'D,N-nights, R-all other times'
  },
  {
    coordinates: 'POINT (-73.99494697998841 40.68027335170176)',
    id: 394,
    updatedAt: null,
    line: 'F-G',
    createdAt: null,
    name: 'Carroll St',
    schedule: 'F,G-all times'
  },
  {
    coordinates: 'POINT (-74.00373899843763 40.72622700129312)',
    id: 395,
    updatedAt: null,
    line: 'A-C-E',
    createdAt: null,
    name: 'Spring St',
    schedule: 'A-nights, C-all other times, E-all times'
  },
  {
    coordinates: 'POINT (-73.93796900205011 40.851694999744616)',
    id: 396,
    updatedAt: null,
    line: 'A',
    createdAt: null,
    name: '181st St',
    schedule: 'A-all times'
  },
  {
    coordinates: 'POINT (-73.93417999964333 40.85902199892482)',
    id: 397,
    updatedAt: null,
    line: 'A',
    createdAt: null,
    name: '190th St',
    schedule: 'A-all times'
  },
  {
    coordinates: 'POINT (-73.95479778057312 40.80505813344211)',
    id: 398,
    updatedAt: null,
    line: 'A-B-C',
    createdAt: null,
    name: '116th St',
    schedule: 'A-nights, B-weekdays and evenings, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.95224799734774 40.811071672994565)',
    id: 399,
    updatedAt: null,
    line: 'A-B-C-D',
    createdAt: null,
    name: '125th St',
    schedule: 'A,D-all times, B-weekdays and evenings, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.99770200045987 40.72432866597571)',
    id: 400,
    updatedAt: null,
    line: 'N-Q-R-W',
    createdAt: null,
    name: 'Prince St',
    schedule: 'N-all times, Q-nights, R-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.99250799849149 40.73046499853991)',
    id: 401,
    updatedAt: null,
    line: 'N-Q-R-W',
    createdAt: null,
    name: '8th St - NYU',
    schedule: 'N-all times, Q-nights, R-all times exc nights'
  },
  {
    coordinates: 'POINT (-74.00657099970202 40.70941599925865)',
    id: 402,
    updatedAt: null,
    line: '2-3',
    createdAt: null,
    name: 'Fulton St',
    schedule: '2-all times, 3-all times exc nights'
  },
  {
    coordinates: 'POINT (-74.00881099997359 40.713050999077694)',
    id: 403,
    updatedAt: null,
    line: '2-3',
    createdAt: null,
    name: 'Park Pl',
    schedule: '2-all times, 3-all times exc nights'
  },
  {
    coordinates: 'POINT (-74.00926600170112 40.71547800011327)',
    id: 404,
    updatedAt: null,
    line: '1-2-3',
    createdAt: null,
    name: 'Chambers St',
    schedule: '1,2-all times, 3-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.98506379575646 40.69054418535472)',
    id: 405,
    updatedAt: null,
    line: '2-3',
    createdAt: null,
    name: 'Hoyt St',
    schedule: '2-all times, 3-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.98999799960687 40.693218999611084)',
    id: 406,
    updatedAt: null,
    line: '2-3',
    createdAt: null,
    name: 'Borough Hall',
    schedule: '2-all times, 3-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.90387900151532 40.85840700040842)',
    id: 407,
    updatedAt: null,
    line: '4',
    createdAt: null,
    name: '183rd St',
    schedule: '4-all times'
  },
  {
    coordinates: 'POINT (-73.90103399921699 40.86280299988937)',
    id: 408,
    updatedAt: null,
    line: '4',
    createdAt: null,
    name: 'Fordham Rd',
    schedule: '4-all times'
  },
  {
    coordinates: 'POINT (-74.00974461517701 40.71256392680817)',
    id: 409,
    updatedAt: null,
    line: 'E',
    createdAt: null,
    name: 'World Trade Center',
    schedule: 'E-all times'
  },
  {
    coordinates: 'POINT (-74.0052290023424 40.72082400007119)',
    id: 410,
    updatedAt: null,
    line: 'A-C-E',
    createdAt: null,
    name: 'Canal St - Holland Tunnel',
    schedule: 'A,E-all times, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.94151400082208 40.83051799929251)',
    id: 411,
    updatedAt: null,
    line: 'A-C',
    createdAt: null,
    name: '155th St',
    schedule: 'A-nights, C-all other times'
  },
  {
    coordinates: 'POINT (-73.93989200188344 40.83601299923096)',
    id: 412,
    updatedAt: null,
    line: 'A-C',
    createdAt: null,
    name: '163rd St - Amsterdam Av',
    schedule: 'A-nights, C-all other times'
  },
  {
    coordinates: 'POINT (-74.00793800110387 40.71002266658424)',
    id: 413,
    updatedAt: null,
    line: 'J-Z',
    createdAt: null,
    name: 'Fulton St',
    schedule: 'J-all times, Z-rush hours AM westbound, PM eastbound'
  },
  {
    coordinates: 'POINT (-74.00340673031336 40.71323378962671)',
    id: 414,
    updatedAt: null,
    line: 'J-Z',
    createdAt: null,
    name: 'Chambers St',
    schedule: 'J-all times, Z-rush hours AM westbound, PM eastbound'
  },
  {
    coordinates: 'POINT (-73.99982638545937 40.71817387697391)',
    id: 415,
    updatedAt: null,
    line: 'J-Z',
    createdAt: null,
    name: 'Canal St',
    schedule: 'J-all times, Z-rush hours AM westbound, PM eastbound'
  },
  {
    coordinates: 'POINT (-74.00698581780337 40.71327233111697)',
    id: 416,
    updatedAt: null,
    line: 'R-W',
    createdAt: null,
    name: 'City Hall',
    schedule: 'N-nights, R-all other times'
  },
  {
    coordinates: 'POINT (-74.0018260000577 40.71946500105898)',
    id: 417,
    updatedAt: null,
    line: 'R-W',
    createdAt: null,
    name: 'Canal St',
    schedule: 'N-nights, R-all other times'
  },
  {
    coordinates: 'POINT (-74.01316895919258 40.701730507574474)',
    id: 418,
    updatedAt: null,
    line: '1',
    createdAt: null,
    name: 'South Ferry',
    schedule: '1-all times'
  },
  {
    coordinates: 'POINT (-74.01400799803432 40.70491399928076)',
    id: 419,
    updatedAt: null,
    line: '4-5',
    createdAt: null,
    name: 'Bowling Green',
    schedule: '4-all times, 5-all times exc nights'
  },
  {
    coordinates: 'POINT (-74.01186199860112 40.70755700086603)',
    id: 420,
    updatedAt: null,
    line: '4-5',
    createdAt: null,
    name: 'Wall St',
    schedule: '4-all times, 5-weekdays'
  },
  {
    coordinates: 'POINT (-74.0130072374272 40.703142373599135)',
    id: 421,
    updatedAt: null,
    line: 'R-W',
    createdAt: null,
    name: 'Whitehall St',
    schedule: 'N-nights, R-all other times'
  },
  {
    coordinates: 'POINT (-74.01297456253795 40.707744756294474)',
    id: 422,
    updatedAt: null,
    line: 'R-W',
    createdAt: null,
    name: 'Rector St',
    schedule: 'N-nights, R-all other times'
  },
  {
    coordinates: 'POINT (-73.8958980017196 40.70622599823048)',
    id: 423,
    updatedAt: null,
    line: 'M',
    createdAt: null,
    name: 'Fresh Pond Rd',
    schedule: 'M-all times'
  },
  {
    coordinates: 'POINT (-73.88957722978091 40.711431305058255)',
    id: 424,
    updatedAt: null,
    line: 'M',
    createdAt: null,
    name: 'Middle Village - Metropolitan Ave',
    schedule: 'M-all times'
  },
  {
    coordinates: 'POINT (-74.01378300119742 40.707512999521775)',
    id: 425,
    updatedAt: null,
    line: '1',
    createdAt: null,
    name: 'Rector St',
    schedule: '1-all times'
  },
  {
    coordinates: 'POINT (-74.01218800112292 40.7118350008202)',
    id: 426,
    updatedAt: null,
    line: '1',
    createdAt: null,
    name: 'Cortlandt St',
    schedule: 'Temporarily closed'
  },
  {
    coordinates: 'POINT (-74.00950899856461 40.710367998822136)',
    id: 427,
    updatedAt: null,
    line: '4-5',
    createdAt: null,
    name: 'Fulton St',
    schedule: '4-all times, 5-weekdays'
  },
  {
    coordinates: 'POINT (-74.01105599991755 40.706476001106005)',
    id: 428,
    updatedAt: null,
    line: 'J-Z',
    createdAt: null,
    name: 'Broad St',
    schedule: 'J-all times, Z-rush hours AM westbound, PM eastbound'
  },
  {
    coordinates: 'POINT (-74.01113196473266 40.7105129841524)',
    id: 429,
    updatedAt: null,
    line: 'R-W',
    createdAt: null,
    name: 'Cortlandt St',
    schedule: 'N-nights, R-all other times'
  },
  {
    coordinates: 'POINT (-74.00909999844257 40.706820999753376)',
    id: 430,
    updatedAt: null,
    line: '2-3',
    createdAt: null,
    name: 'Wall St',
    schedule: '2-all times, 3-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.92727099960726 40.865490998968916)',
    id: 431,
    updatedAt: null,
    line: 'A',
    createdAt: null,
    name: 'Dyckman St',
    schedule: 'A-all times'
  },
  {
    coordinates: 'POINT (-73.99375299913589 40.71826699954992)',
    id: 432,
    updatedAt: null,
    line: 'B-D',
    createdAt: null,
    name: 'Grand St',
    schedule: 'B-weekdays and evenings, D-all times'
  },
  {
    coordinates: 'POINT (-73.99620399876055 40.725296998738045)',
    id: 433,
    updatedAt: null,
    line: 'B-D-F-M',
    createdAt: null,
    name: 'Broadway - Lafayette St',
    schedule: 'B,M-weekdays and evenings, D,F-all times'
  },
  {
    coordinates: 'POINT (-73.99380690654237 40.720246883147254)',
    id: 434,
    updatedAt: null,
    line: 'J-Z',
    createdAt: null,
    name: 'Bowery',
    schedule: 'J-all times, Z-rush hours AM westbound, PM eastbound'
  },
  {
    coordinates: 'POINT (-74.00105471306033 40.718814263587134)',
    id: 435,
    updatedAt: null,
    line: 'N-Q',
    createdAt: null,
    name: 'Canal St',
    schedule: 'N-all times, Q-weekdays and evenings'
  },
  {
    coordinates: 'POINT (-73.99804100117201 40.74590599939995)',
    id: 436,
    updatedAt: null,
    line: 'A-C-E',
    createdAt: null,
    name: '23rd St',
    schedule: 'A-nights, C-all other times, E-all times'
  },
  {
    coordinates: 'POINT (-73.99339099970578 40.752287000775894)',
    id: 437,
    updatedAt: null,
    line: 'A-C-E',
    createdAt: null,
    name: '34th St - Penn Station',
    schedule: 'A,E-all times, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.89129866519697 40.74653969115889)',
    id: 438,
    updatedAt: null,
    line: 'E-F-M-R',
    createdAt: null,
    name: 'Jackson Hts - Roosevelt Av',
    schedule: 'E,F-all times, M-weekdays and evenings, R-all times exc nights'
  },
  {
    coordinates: 'POINT (-74.00020100063497 40.737825999728116)',
    id: 439,
    updatedAt: null,
    line: '1-2-3',
    createdAt: null,
    name: '14th St',
    schedule: '1,2-all times, 3-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.94753480879213 40.817905559212676)',
    id: 440,
    updatedAt: null,
    line: 'A-B-C',
    createdAt: null,
    name: '135th St',
    schedule: 'A-nights, B-weekdays and evenings, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.99620899921355 40.73822799969515)',
    id: 441,
    updatedAt: null,
    line: 'F-M',
    createdAt: null,
    name: '14th St',
    schedule: 'F-all times, M-weekdays and evenings'
  },
  {
    coordinates: 'POINT (-73.99775078874781 40.73774146981052)',
    id: 442,
    updatedAt: null,
    line: 'L',
    createdAt: null,
    name: '6th Ave',
    schedule: 'L-all times'
  },
  {
    coordinates: 'POINT (-74.00257800104762 40.73977666638199)',
    id: 443,
    updatedAt: null,
    line: 'L',
    createdAt: null,
    name: '8th Ave',
    schedule: 'L-all times'
  },
  {
    coordinates: 'POINT (-74.00168999937027 40.740893000193296)',
    id: 444,
    updatedAt: null,
    line: 'A-C-E',
    createdAt: null,
    name: '14th St',
    schedule: 'A,E-all times, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.9504262489579 40.66993815093054)',
    id: 445,
    updatedAt: null,
    line: '3-4',
    createdAt: null,
    name: 'Nostrand Ave',
    schedule: '4-nights, 3-all other times'
  },
  {
    coordinates: 'POINT (-73.99308599821961 40.69746599996469)',
    id: 446,
    updatedAt: null,
    line: '2-3',
    createdAt: null,
    name: 'Clark St',
    schedule: '2-all times, 3-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.95684800014614 40.68137966658742)',
    id: 447,
    updatedAt: null,
    line: 'A-C',
    createdAt: null,
    name: 'Franklin Ave',
    schedule: 'A-nights, C-all other times'
  },
  {
    coordinates: 'POINT (-73.96583799857275 40.68326299912644)',
    id: 448,
    updatedAt: null,
    line: 'A-C',
    createdAt: null,
    name: 'Clinton - Washington Aves',
    schedule: 'A-nights, C-all other times'
  },
  {
    coordinates: 'POINT (-73.90307500005954 40.70441200087814)',
    id: 449,
    updatedAt: null,
    line: 'M',
    createdAt: null,
    name: 'Forest Ave',
    schedule: 'M-all times'
  },
  {
    coordinates: 'POINT (-73.94424999687163 40.795020000113105)',
    id: 450,
    updatedAt: null,
    line: '4-6-6 Express',
    createdAt: null,
    name: '110th St',
    schedule:
      '4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.95558899985132 40.77949199820952)',
    id: 451,
    updatedAt: null,
    line: '4-5-6-6 Express',
    createdAt: null,
    name: '86th St',
    schedule:
      '4,6-all times, 5-all times exc nights, 6 Express-weekdays AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.98688499993673 40.699742667691574)',
    id: 452,
    updatedAt: null,
    line: 'F',
    createdAt: null,
    name: 'York St',
    schedule: 'F-all times'
  },
  {
    coordinates: 'POINT (-73.99053100065458 40.69933699977884)',
    id: 453,
    updatedAt: null,
    line: 'A-C',
    createdAt: null,
    name: 'High St',
    schedule: 'A-all times, C-all times exc nights'
  },
  {
    coordinates: 'POINT (-73.97394599849406 40.68611300020567)',
    id: 454,
    updatedAt: null,
    line: 'A-C',
    createdAt: null,
    name: 'Lafayette Ave',
    schedule: 'A-nights, C-all other times'
  },
  {
    coordinates: 'POINT (-73.95058920022207 40.667883603536815)',
    id: 455,
    updatedAt: null,
    line: '2-5',
    createdAt: null,
    name: 'President St',
    schedule: '2-all times, 5 weekdays'
  },
  {
    coordinates: 'POINT (-73.87875099990931 40.886037000253324)',
    id: 456,
    updatedAt: null,
    line: '4',
    createdAt: null,
    name: 'Woodlawn',
    schedule: '4-all times'
  },
  {
    coordinates: 'POINT (-73.99465900006331 40.72591466682659)',
    id: 457,
    updatedAt: null,
    line: '4-6-6 Express',
    createdAt: null,
    name: 'Bleecker St',
    schedule: '4 nights, 6-all times, 6 Express-weekdays PM'
  },
  {
    coordinates: 'POINT (-73.94747800152219 40.79060000008452)',
    id: 458,
    updatedAt: null,
    line: '4-6-6 Express',
    createdAt: null,
    name: '103rd St',
    schedule:
      '4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.87210600099675 40.675376998239365)',
    id: 459,
    updatedAt: null,
    line: 'A-C-S',
    createdAt: null,
    name: 'Euclid Ave',
    schedule:
      'S to Ozone Park-Lefferts Blvd-nights, C-all other times, A-all times'
  },
  {
    coordinates: 'POINT (-73.85147000026086 40.67984300135503)',
    id: 460,
    updatedAt: null,
    line: 'A-S',
    createdAt: null,
    name: '88th St',
    schedule: 'A-all times, S Euclid Av to Ozone Park-Lefferts Blvd-nights'
  },
  {
    coordinates: 'POINT (-73.96379005505493 40.6409401651401)',
    id: 461,
    updatedAt: null,
    line: 'Q',
    createdAt: null,
    name: 'Cortelyou Rd',
    schedule: 'Q-all times'
  },
  {
    coordinates: 'POINT (-73.9416169983714 40.7986290002001)',
    id: 462,
    updatedAt: null,
    line: '4-6-6 Express',
    createdAt: null,
    name: '116th St',
    schedule:
      '4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.86081600108396 40.83322599927859)',
    id: 463,
    updatedAt: null,
    line: '6-6 Express',
    createdAt: null,
    name: 'Parkchester',
    schedule: '6-all times, 6 Express-weekdays AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-74.00688600277107 40.719318001302135)',
    id: 464,
    updatedAt: null,
    line: '1-2',
    createdAt: null,
    name: 'Franklin St',
    schedule: '1-all times, 2-nights'
  },
  {
    coordinates: 'POINT (-73.85899200206335 40.67937100115432)',
    id: 465,
    updatedAt: null,
    line: 'A-S',
    createdAt: null,
    name: '80th St',
    schedule: 'A-all times, S Euclid Av to Ozone Park-Lefferts Blvd-nights'
  },
  {
    coordinates: 'POINT (-73.98196299856706 40.75382100064824)',
    id: 466,
    updatedAt: null,
    line: '7-7 Express',
    createdAt: null,
    name: '5th Ave - Bryant Pk',
    schedule: '7-all times, 7 Express-rush hours AM westbound, PM eastbound'
  },
  {
    coordinates: 'POINT (-73.99714100006673 40.72230099999366)',
    id: 467,
    updatedAt: null,
    line: '4-6-6 Express',
    createdAt: null,
    name: 'Spring St',
    schedule:
      '4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.93759400055725 40.804138000587244)',
    id: 468,
    updatedAt: null,
    line: '4-5-6-6 Express',
    createdAt: null,
    name: '125th St',
    schedule:
      '4,6-all times, 5-all times exc nights, 6 Express-weekdays AM southbound, PM northbound'
  },
  {
    coordinates: 'POINT (-73.9812359981396 40.57728100006751)',
    id: 469,
    updatedAt: null,
    line: 'D-F-N-Q',
    createdAt: null,
    name: 'Coney Island - Stillwell Av',
    schedule: 'D,F,N,Q-all times'
  },
  {
    coordinates: 'POINT (-74.00219709442206 40.75544635961596)',
    id: 470,
    updatedAt: null,
    line: '7-7 Express',
    createdAt: null,
    name: '34th St - Hudson Yards',
    schedule: '7-all times, 7 Express-rush hours AM westbound, PM eastbound'
  },
  {
    coordinates: 'POINT (-73.95836178682246 40.76880251014895)',
    id: 641,
    updatedAt: null,
    line: 'Q',
    createdAt: null,
    name: '72nd St',
    schedule: 'Q-all times'
  },
  {
    coordinates: 'POINT (-73.95177090964917 40.77786104333163)',
    id: 642,
    updatedAt: null,
    line: 'Q',
    createdAt: null,
    name: '86th St',
    schedule: 'Q-all times'
  },
  {
    coordinates: 'POINT (-73.9470660219183 40.784236650177654)',
    id: 643,
    updatedAt: null,
    line: 'Q',
    createdAt: null,
    name: '96th St',
    schedule: 'Q-all times'
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  const stations = await Promise.all(
    stationData.map(station => Station.create(station))
  )
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
