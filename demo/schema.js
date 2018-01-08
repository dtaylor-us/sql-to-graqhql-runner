'use strict';
var getEntityResolver = require('./util/entity-resolver');
var GraphQL = require('graphql');
var AcctbalapType = require('./types/AcctbalapType');
var AcctbalType = require('./types/AcctbalType');
var AcctbalarType = require('./types/AcctbalarType');
var AcctbalarhxType = require('./types/AcctbalarhxType');
var AcctbalauditdetailType = require('./types/AcctbalauditdetailType');
var AcctbalfamacsclaimhxType = require('./types/AcctbalfamacsclaimhxType');
var AcctbalmemacsclaimhxType = require('./types/AcctbalmemacsclaimhxType');
var AcctbalauditdetailhxType = require('./types/AcctbalauditdetailhxType');
var AcctbalmemacsclaimType = require('./types/AcctbalmemacsclaimType');
var AcctbalhxType = require('./types/AcctbalhxType');
var AcctbalfamacspthxType = require('./types/AcctbalfamacspthxType');
var AcctbalindcarryoverhxType = require('./types/AcctbalindcarryoverhxType');
var AcctbalfamacsclaimType = require('./types/AcctbalfamacsclaimType');
var AcctbalmemacsptType = require('./types/AcctbalmemacsptType');
var AcctbalaphxType = require('./types/AcctbalaphxType');
var AcctbalfamacsptType = require('./types/AcctbalfamacsptType');
var AcctbalindcarryoverType = require('./types/AcctbalindcarryoverType');
var AcctbalnotedetailType = require('./types/AcctbalnotedetailType');
var AcctbalnotedetailhxType = require('./types/AcctbalnotedetailhxType');
var AcctbalnoteType = require('./types/AcctbalnoteType');
var AcctbalmemacspthxType = require('./types/AcctbalmemacspthxType');
var AcctbalnotehxType = require('./types/AcctbalnotehxType');
var AcctbalprefundaphxType = require('./types/AcctbalprefundaphxType');
var AcctbalprefundapType = require('./types/AcctbalprefundapType');
var AcctbaltimelineType = require('./types/AcctbaltimelineType');
var AcctbalprefundarhxType = require('./types/AcctbalprefundarhxType');
var AcctbaltimelinehxType = require('./types/AcctbaltimelinehxType');
var AcctbalpurseType = require('./types/AcctbalpurseType');
var AcctbalpursehxType = require('./types/AcctbalpursehxType');
var AccumbypassType = require('./types/AccumbypassType');
var AcctbalprefundarType = require('./types/AcctbalprefundarType');
var AccumbypassauditType = require('./types/AccumbypassauditType');
var AccumbypassplanType = require('./types/AccumbypassplanType');
var AccumbypasstxType = require('./types/AccumbypasstxType');
var AccumcobreserveType = require('./types/AccumcobreserveType');
var AccumcobreservetxType = require('./types/AccumcobreservetxType');
var AccumbypasstxsuppressType = require('./types/AccumbypasstxsuppressType');
var AccumdeductfamtxsuppressType = require('./types/AccumdeductfamtxsuppressType');
var AccumdeductfamauditType = require('./types/AccumdeductfamauditType');
var AccumdeductfamtxType = require('./types/AccumdeductfamtxType');
var AccumdeductindivType = require('./types/AccumdeductindivType');
var AccumdeductfamType = require('./types/AccumdeductfamType');
var AccumdeductindivauditType = require('./types/AccumdeductindivauditType');
var AccumdeductindivtxType = require('./types/AccumdeductindivtxType');
var AccumdeductindivtxsuppressType = require('./types/AccumdeductindivtxsuppressType');
var AccumerrorType = require('./types/AccumerrorType');
var AccumdeductindivplanType = require('./types/AccumdeductindivplanType');
var AccummaxfamauditType = require('./types/AccummaxfamauditType');
var AccumerrornoteType = require('./types/AccumerrornoteType');
var AccumlockauditdetailType = require('./types/AccumlockauditdetailType');
var AccumdeductfamplanType = require('./types/AccumdeductfamplanType');
var AccumerrorconfigType = require('./types/AccumerrorconfigType');
var AccummaxfamType = require('./types/AccummaxfamType');
var AccummaxfamplanType = require('./types/AccummaxfamplanType');
var AccummaxindivType = require('./types/AccummaxindivType');
var AccummaxfamtxType = require('./types/AccummaxfamtxType');
var AccumoopfamtxType = require('./types/AccumoopfamtxType');
var AccummaxindivplanType = require('./types/AccummaxindivplanType');
var AccummaxindivauditType = require('./types/AccummaxindivauditType');
var AccummaxindivtxType = require('./types/AccummaxindivtxType');
var AccummaxfamtxsuppressType = require('./types/AccummaxfamtxsuppressType');
var AccumoopfamtxsuppressType = require('./types/AccumoopfamtxsuppressType');
var AccumoopfamType = require('./types/AccumoopfamType');
var AccumoopindivType = require('./types/AccumoopindivType');
var AccumoopfamauditType = require('./types/AccumoopfamauditType');
var AccummaxindivtxsuppressType = require('./types/AccummaxindivtxsuppressType');
var AccumoopindivtxType = require('./types/AccumoopindivtxType');
var AccumoopindivplanType = require('./types/AccumoopindivplanType');
var AccumoopfamplanType = require('./types/AccumoopfamplanType');
var AccumoopindivauditType = require('./types/AccumoopindivauditType');
var AccumoopindivtxsuppressType = require('./types/AccumoopindivtxsuppressType');
var AccumumauthbeddayType = require('./types/AccumumauthbeddayType');
var AccumumauthbeddayrangeType = require('./types/AccumumauthbeddayrangeType');
var AccumumauthbeddaytxType = require('./types/AccumumauthbeddaytxType');
var AccumulatorlockType = require('./types/AccumulatorlockType');
var AccumumauthoutpatientType = require('./types/AccumumauthoutpatientType');
var AccumumauthservicenonfacilType = require('./types/AccumumauthservicenonfacilType');
var AccumumauthoutpatienttxType = require('./types/AccumumauthoutpatienttxType');
var AccumumreferraltxType = require('./types/AccumumreferraltxType');
var AccumumreferralType = require('./types/AccumumreferralType');
var AdjudschedauditdetailType = require('./types/AdjudschedauditdetailType');
var AdaclaimsettingType = require('./types/AdaclaimsettingType');
var AdjudschedlettercodeType = require('./types/AdjudschedlettercodeType');
var AdjudscheddupclaimType = require('./types/AdjudscheddupclaimType');
var AdjudschedmodifierType = require('./types/AdjudschedmodifierType');
var AdjudschedgencodeType = require('./types/AdjudschedgencodeType');
var AdjudschedpendtemplateType = require('./types/AdjudschedpendtemplateType');
var AdjudschedpendtemplatevcType = require('./types/AdjudschedpendtemplatevcType');
var AdjudschedoverridecodeType = require('./types/AdjudschedoverridecodeType');
var AdjudscheddenycodeType = require('./types/AdjudscheddenycodeType');
var AdjudschedmemberdiffType = require('./types/AdjudschedmemberdiffType');
var AdjudschedheaderType = require('./types/AdjudschedheaderType');
var AdjudschedproviderdiffType = require('./types/AdjudschedproviderdiffType');
var AdjudschedsettingsaccountType = require('./types/AdjudschedsettingsaccountType');
var AdjudschedroutecodeType = require('./types/AdjudschedroutecodeType');
var AdjudschedrelcoderestrictionType = require('./types/AdjudschedrelcoderestrictionType');
var AdjudschedtpldiagcategoryType = require('./types/AdjudschedtpldiagcategoryType');
var AdjudschedrxType = require('./types/AdjudschedrxType');
var AdjudschedsettingssystemType = require('./types/AdjudschedsettingssystemType');
var AgegenderschednoteType = require('./types/AgegenderschednoteType');
var AdjudschedsettingsmemgroupType = require('./types/AdjudschedsettingsmemgroupType');
var AltartransactiondescType = require('./types/AltartransactiondescType');
var AdjudschednoteType = require('./types/AdjudschednoteType');
var AdjudschedrevenuecategoryType = require('./types/AdjudschedrevenuecategoryType');
var AgegenderschedType = require('./types/AgegenderschedType');
var AmbulancecompdetailregionType = require('./types/AmbulancecompdetailregionType');
var AgegenderschedauditdetailType = require('./types/AgegenderschedauditdetailType');
var AdjudschedulecobType = require('./types/AdjudschedulecobType');
var AdjudscheduleType = require('./types/AdjudscheduleType');
var AmbulancecompdetailmodType = require('./types/AmbulancecompdetailmodType');
var AdjudschedsettingsbenefitType = require('./types/AdjudschedsettingsbenefitType');
var AmbulancecompauditdetailType = require('./types/AmbulancecompauditdetailType');
var AmbulancecompType = require('./types/AmbulancecompType');
var AmbulancecompnoteType = require('./types/AmbulancecompnoteType');
var AmbulancecompdetailType = require('./types/AmbulancecompdetailType');
var AmbulancecompholdType = require('./types/AmbulancecompholdType');
var AnesthesiacompauditdetailType = require('./types/AnesthesiacompauditdetailType');
var AnesthesiacompType = require('./types/AnesthesiacompType');
var AmbulancemodifierType = require('./types/AmbulancemodifierType');
var AnesthesiacompdetailmodType = require('./types/AnesthesiacompdetailmodType');
var AnesthesiacompnoteType = require('./types/AnesthesiacompnoteType');
var AnesthesiaphysicalstatusmodType = require('./types/AnesthesiaphysicalstatusmodType');
var AnesthesiacompholdType = require('./types/AnesthesiacompholdType');
var AnesthesiacompdetailType = require('./types/AnesthesiacompdetailType');
var ApccodedetailType = require('./types/ApccodedetailType');
var AnesthmodifiercompassignType = require('./types/AnesthmodifiercompassignType');
var ApcbasefileuploaddetailType = require('./types/ApcbasefileuploaddetailType');
var ApccodeheaderType = require('./types/ApccodeheaderType');
var ApcprocgrouperType = require('./types/ApcprocgrouperType');
var AnesthesiamodifierType = require('./types/AnesthesiamodifierType');
var ApcbasefileuploadheaderType = require('./types/ApcbasefileuploadheaderType');
var ApidefaultpricingcomporderType = require('./types/ApidefaultpricingcomporderType');
var AptransactionType = require('./types/AptransactionType');
var ApproveddestinationType = require('./types/ApproveddestinationType');
var ApgenerationresponseType = require('./types/ApgenerationresponseType');
var AptransactionattribType = require('./types/AptransactionattribType');
var AptransactionattribsetglstringType = require('./types/AptransactionattribsetglstringType');
var AptransactionattribtagType = require('./types/AptransactionattribtagType');
var AptransactionaccumsnapshotType = require('./types/AptransactionaccumsnapshotType');
var AptransactionauditdetailType = require('./types/AptransactionauditdetailType');
var AptransactioninterestType = require('./types/AptransactioninterestType');
var AptransactiondetailType = require('./types/AptransactiondetailType');
var AptransactionattribsetType = require('./types/AptransactionattribsetType');
var AptransactionoprecoverType = require('./types/AptransactionoprecoverType');
var AptransactionrecipientType = require('./types/AptransactionrecipientType');
var AptransactionreductionType = require('./types/AptransactionreductionType');
var ArmaxType = require('./types/ArmaxType');
var AptransactionopType = require('./types/AptransactionopType');
var AptransactionnoteType = require('./types/AptransactionnoteType');
var AptransactionsurchargeType = require('./types/AptransactionsurchargeType');
var AptransactiontagType = require('./types/AptransactiontagType');
var ArcreditreceiptType = require('./types/ArcreditreceiptType');
var ArtransactionauditdetailType = require('./types/ArtransactionauditdetailType');
var ArtransactionheaderType = require('./types/ArtransactionheaderType');
var AsacptType = require('./types/AsacptType');
var AptransactionremarkType = require('./types/AptransactionremarkType');
var AptransactiontypeType = require('./types/AptransactiontypeType');
var ArtransactionnotedetailType = require('./types/ArtransactionnotedetailType');
var ArtransactiondetailType = require('./types/ArtransactiondetailType');
var ArtransactionnoteType = require('./types/ArtransactionnoteType');
var ArtransactiontypeType = require('./types/ArtransactiontypeType');
var AssignoutliercompType = require('./types/AssignoutliercompType');
var AssignpassthrucompType = require('./types/AssignpassthrucompType');
var AssignfallthrucompType = require('./types/AssignfallthrucompType');
var AuditerrorvrcodeType = require('./types/AuditerrorvrcodeType');
var AuditsampletypeType = require('./types/AuditsampletypeType');
var AuditerrorcodeType = require('./types/AuditerrorcodeType');
var AuditerrorsourceType = require('./types/AuditerrorsourceType');
var AuthmatchingschedType = require('./types/AuthmatchingschedType');
var AuthdecisionactiontriggerType = require('./types/AuthdecisionactiontriggerType');
var AuthmatchingschednoteType = require('./types/AuthmatchingschednoteType');
var AuthdecisioncodeType = require('./types/AuthdecisioncodeType');
var AuthprogramauthcharorderType = require('./types/AuthprogramauthcharorderType');
var AuthmatchingschedauditdetailType = require('./types/AuthmatchingschedauditdetailType');
var AuthdecactionschedauditdetailType = require('./types/AuthdecactionschedauditdetailType');
var AuthdecisionactionscheduleType = require('./types/AuthdecisionactionscheduleType');
var AuthdecactionschednoteType = require('./types/AuthdecactionschednoteType');
var AuthprogramauthservicetypeType = require('./types/AuthprogramauthservicetypeType');
var AuthprogramauthproccodematchType = require('./types/AuthprogramauthproccodematchType');
var AuthdecisionactionType = require('./types/AuthdecisionactionType');
var AuthprogramprocedureType = require('./types/AuthprogramprocedureType');
var AuthprogramdiagnosisType = require('./types/AuthprogramdiagnosisType');
var BankType = require('./types/BankType');
var AuthprogramprocdiagnosisType = require('./types/AuthprogramprocdiagnosisType');
var BankaccounttypeType = require('./types/BankaccounttypeType');
var BankaccountType = require('./types/BankaccountType');
var BankacctbalanceType = require('./types/BankacctbalanceType');
var BankacctcreditlineType = require('./types/BankacctcreditlineType');
var AutocontribqueueType = require('./types/AutocontribqueueType');
var BankacctcreditType = require('./types/BankacctcreditType');
var AuthprogramtypeType = require('./types/AuthprogramtypeType');
var BankauditdetailType = require('./types/BankauditdetailType');
var BankbranchType = require('./types/BankbranchType');
var BankacctdebitType = require('./types/BankacctdebitType');
var BankcontactnameType = require('./types/BankcontactnameType');
var BankcontactaddressType = require('./types/BankcontactaddressType');
var BankdepartmenthourType = require('./types/BankdepartmenthourType');
var BankcontactdepartmentType = require('./types/BankcontactdepartmentType');
var BanknoteType = require('./types/BanknoteType');
var BankdepartmentphoneType = require('./types/BankdepartmentphoneType');
var BanknotedetailType = require('./types/BanknotedetailType');
var BankroutingType = require('./types/BankroutingType');
var BankcontactphoneType = require('./types/BankcontactphoneType');
var BankdepartmentaddressType = require('./types/BankdepartmentaddressType');
var BatchentrylogType = require('./types/BatchentrylogType');
var BankworkhourType = require('./types/BankworkhourType');
var BbTableFieldType = require('./types/BbTableFieldType');
var BbTableType = require('./types/BbTableType');
var BeddayscheduleauditdetailType = require('./types/BeddayscheduleauditdetailType');
var BbMessageType = require('./types/BbMessageType');
var BbFieldType = require('./types/BbFieldType');
var BeddayschedulenoteType = require('./types/BeddayschedulenoteType');
var BeddayscheduledetailType = require('./types/BeddayscheduledetailType');
var BeddayscheduleType = require('./types/BeddayscheduleType');
var BeneaccumbypassperiodType = require('./types/BeneaccumbypassperiodType');
var BeneaccumbypassrefType = require('./types/BeneaccumbypassrefType');
var BeddayscheduledetailrevType = require('./types/BeddayscheduledetailrevType');
var BeneaccumbypassType = require('./types/BeneaccumbypassType');
var BeneauditdetailType = require('./types/BeneauditdetailType');
var BenecobemploystatusType = require('./types/BenecobemploystatusType');
var BenebaserateType = require('./types/BenebaserateType');
var BeneaccumbypasstierType = require('./types/BeneaccumbypasstierType');
var BenecodeadjType = require('./types/BenecodeadjType');
var BenecoderelationshipType = require('./types/BenecoderelationshipType');
var BenecodeservicetypecodeType = require('./types/BenecodeservicetypecodeType');
var BenecompositelimitType = require('./types/BenecompositelimitType');
var BenecodestateType = require('./types/BenecodestateType');
var BenecodesupplType = require('./types/BenecodesupplType');
var BenedeductibleType = require('./types/BenedeductibleType');
var BenedeductibleperiodType = require('./types/BenedeductibleperiodType');
var BenedeductiblefamilyType = require('./types/BenedeductiblefamilyType');
var BenedeductiblerefType = require('./types/BenedeductiblerefType');
var BenecoverageconditionType = require('./types/BenecoverageconditionType');
var BenedeductibletierType = require('./types/BenedeductibletierType');
var BeneexternalidType = require('./types/BeneexternalidType');
var BenefitbundleauditdetailType = require('./types/BenefitbundleauditdetailType');
var BenefitbundleType = require('./types/BenefitbundleType');
var BenefitbundleactuarialvalueType = require('./types/BenefitbundleactuarialvalueType');
var BenefitbundleccbypassgroupType = require('./types/BenefitbundleccbypassgroupType');
var BenefitbundleccbypassplanType = require('./types/BenefitbundleccbypassplanType');
var BenefitbundlebaserateType = require('./types/BenefitbundlebaserateType');
var BenefitbundlebillingsetType = require('./types/BenefitbundlebillingsetType');
var BenefitbundleccmaxgroupType = require('./types/BenefitbundleccmaxgroupType');
var BenefitbundleccdedplanType = require('./types/BenefitbundleccdedplanType');
var BenefitbundleextidType = require('./types/BenefitbundleextidType');
var BenefitbundlecontrolplanbypassType = require('./types/BenefitbundlecontrolplanbypassType');
var BenefitbundleccoopgroupType = require('./types/BenefitbundleccoopgroupType');
var BenefitbundlecontrolplandedType = require('./types/BenefitbundlecontrolplandedType');
var BenefitbundlenoteType = require('./types/BenefitbundlenoteType');
var BenefitbundlecrosscontrolaccumType = require('./types/BenefitbundlecrosscontrolaccumType');
var BenefitbundlemsaplanType = require('./types/BenefitbundlemsaplanType');
var BenefitbundleccoopplanType = require('./types/BenefitbundleccoopplanType');
var BenefitbundlecontrolplanoopType = require('./types/BenefitbundlecontrolplanoopType');
var BenefitbundleccmaxplanType = require('./types/BenefitbundleccmaxplanType');
var BenefitbundlemsaoptionType = require('./types/BenefitbundlemsaoptionType');
var BenefitbundleoonpricingadjustType = require('./types/BenefitbundleoonpricingadjustType');
var BenefitbundleplanType = require('./types/BenefitbundleplanType');
var BenefitbundlecontrolplanmaxType = require('./types/BenefitbundlecontrolplanmaxType');
var BenefitbundleccdedgroupType = require('./types/BenefitbundleccdedgroupType');
var BenefitbundleoptionType = require('./types/BenefitbundleoptionType');
var BenefitbundleoptionextidType = require('./types/BenefitbundleoptionextidType');
var BenefitbundlerideroptionType = require('./types/BenefitbundlerideroptionType');
var BenefitbundleriderplanType = require('./types/BenefitbundleriderplanType');
var BenefitbundleplanaccumType = require('./types/BenefitbundleplanaccumType');
var BenefitbundlestandardcompidType = require('./types/BenefitbundlestandardcompidType');
var BenefitbundleserviceplanType = require('./types/BenefitbundleserviceplanType');
var BenefitbundleutilizationoptType = require('./types/BenefitbundleutilizationoptType');
var BenefitbundleutilizationplanType = require('./types/BenefitbundleutilizationplanType');
var BenefitbundleserviceoptionType = require('./types/BenefitbundleserviceoptionType');
var BenefitcodeType = require('./types/BenefitcodeType');
var BenefitfulfillmenttextnoteType = require('./types/BenefitfulfillmenttextnoteType');
var BenefitcodemerchantcatcodeType = require('./types/BenefitcodemerchantcatcodeType');
var BenefitfulfillmenttextType = require('./types/BenefitfulfillmenttextType');
var BenefitfulfillmenttextperiodType = require('./types/BenefitfulfillmenttextperiodType');
var BenefitfulfillmenttexttypeType = require('./types/BenefitfulfillmenttexttypeType');
var BenefitplancodeType = require('./types/BenefitplancodeType');
var BenefitplanType = require('./types/BenefitplanType');
var BenefitplantradingoopType = require('./types/BenefitplantradingoopType');
var BenefitssettingType = require('./types/BenefitssettingType');
var BenefulfillmenttextauditdetailType = require('./types/BenefulfillmenttextauditdetailType');
var BenefitplantradingpartnerType = require('./types/BenefitplantradingpartnerType');
var BenelanguageschedauditdetailType = require('./types/BenelanguageschedauditdetailType');
var BenefitplantradingdedType = require('./types/BenefitplantradingdedType');
var BenelanguageschednoteType = require('./types/BenelanguageschednoteType');
var BenelangschedtextauditdetailType = require('./types/BenelangschedtextauditdetailType');
var BenelanguageschedtextrelcodeType = require('./types/BenelanguageschedtextrelcodeType');
var BenefittypestackType = require('./types/BenefittypestackType');
var BenelanguageschedType = require('./types/BenelanguageschedType');
var BenefitbundlevalidationType = require('./types/BenefitbundlevalidationType');
var BenelanguageschedtexttypeType = require('./types/BenelanguageschedtexttypeType');
var BenelanguageschedtextType = require('./types/BenelanguageschedtextType');
var BenelanguageschedassignType = require('./types/BenelanguageschedassignType');
var BenelanguagevariablecodeType = require('./types/BenelanguagevariablecodeType');
var BenelangschedtextsvctypecodeType = require('./types/BenelangschedtextsvctypecodeType');
var BenelanguagevariablefulfillappType = require('./types/BenelanguagevariablefulfillappType');
var BenemaxperiodType = require('./types/BenemaxperiodType');
var BenemaxType = require('./types/BenemaxType');
var BenemaxperiodprocedureType = require('./types/BenemaxperiodprocedureType');
var BenenoteType = require('./types/BenenoteType');
var BeneoverrideType = require('./types/BeneoverrideType');
var BenemaxrefType = require('./types/BenemaxrefType');
var BenemaxtierType = require('./types/BenemaxtierType');
var BenenetworkschedType = require('./types/BenenetworkschedType');
var BenenetworkbaserateType = require('./types/BenenetworkbaserateType');
var BeneplanactuarialvalueType = require('./types/BeneplanactuarialvalueType');
var BeneplanaddressType = require('./types/BeneplanaddressType');
var BeneplanrelationshipType = require('./types/BeneplanrelationshipType');
var BeneplansettingType = require('./types/BeneplansettingType');
var BeneplanphonenumberType = require('./types/BeneplanphonenumberType');
var BeneporcelainlimitType = require('./types/BeneporcelainlimitType');
var BenestoplossoopperiodType = require('./types/BenestoplossoopperiodType');
var BenestoplossoopType = require('./types/BenestoplossoopType');
var BenestandardcompidType = require('./types/BenestandardcompidType');
var BenestoplossfamilyType = require('./types/BenestoplossfamilyType');
var BenestoplosstierType = require('./types/BenestoplosstierType');
var BenetierType = require('./types/BenetierType');
var BenestoplossrefType = require('./types/BenestoplossrefType');
var BenetierprovType = require('./types/BenetierprovType');
var BenetiernetworkType = require('./types/BenetiernetworkType');
var BenevalidationType = require('./types/BenevalidationType');
var BenewaiverefType = require('./types/BenewaiverefType');
var BillingschedagegenderType = require('./types/BillingschedagegenderType');
var BillingschedType = require('./types/BillingschedType');
var BillingschedentityType = require('./types/BillingschedentityType');
var BillingschedfudslevelType = require('./types/BillingschedfudslevelType');
var BillingschedmodifierType = require('./types/BillingschedmodifierType');
var BillingschedauditdetailType = require('./types/BillingschedauditdetailType');
var BillingsetType = require('./types/BillingsetType');
var BillingsetnoteType = require('./types/BillingsetnoteType');
var BillingsetauditdetailType = require('./types/BillingsetauditdetailType');
var BillingschednoteType = require('./types/BillingschednoteType');
var BillitemtypeType = require('./types/BillitemtypeType');
var BilltypecategorydefinitionType = require('./types/BilltypecategorydefinitionType');
var BilltypesetType = require('./types/BilltypesetType');
var BilltypeType = require('./types/BilltypeType');
var BilltypecategoryType = require('./types/BilltypecategoryType');
var BillingsetschedassignType = require('./types/BillingsetschedassignType');
var BilltypesetcatType = require('./types/BilltypesetcatType');
var BilltypesetcatdetailType = require('./types/BilltypesetcatdetailType');
var BrandingentityType = require('./types/BrandingentityType');
var CapschednoteType = require('./types/CapschednoteType');
var BilltypesetauditdetailType = require('./types/BilltypesetauditdetailType');
var CapscheduleType = require('./types/CapscheduleType');
var CapsetassignmentType = require('./types/CapsetassignmentType');
var CarrierType = require('./types/CarrierType');
var CapmodifierType = require('./types/CapmodifierType');
var CarrierauditdetailType = require('./types/CarrierauditdetailType');
var CapschedauditdetailType = require('./types/CapschedauditdetailType');
var CarriercontactdepartmentType = require('./types/CarriercontactdepartmentType');
var CarrierdepartmenthourType = require('./types/CarrierdepartmenthourType');
var CapsetType = require('./types/CapsetType');
var BilltypesetcatdetaildefType = require('./types/BilltypesetcatdetaildefType');
var CapagegenderType = require('./types/CapagegenderType');
var CarriercontactaddressType = require('./types/CarriercontactaddressType');
var CarrierdepartmentaddressType = require('./types/CarrierdepartmentaddressType');
var CarrierdepartmentphoneType = require('./types/CarrierdepartmentphoneType');
var CarrierlobauditdetailType = require('./types/CarrierlobauditdetailType');
var CarrierextidType = require('./types/CarrierextidType');
var CarriercontactnameType = require('./types/CarriercontactnameType');
var CarrierfeinType = require('./types/CarrierfeinType');
var CapschednotedetailType = require('./types/CapschednotedetailType');
var CarrierlobplanType = require('./types/CarrierlobplanType');
var CarrierhiosissueridType = require('./types/CarrierhiosissueridType');
var CarrierlineofbusinessType = require('./types/CarrierlineofbusinessType');
var CarrierlobproductType = require('./types/CarrierlobproductType');
var CarrierserviceType = require('./types/CarrierserviceType');
var CarriernoteType = require('./types/CarriernoteType');
var CarriercontactphoneType = require('./types/CarriercontactphoneType');
var CarrierstateType = require('./types/CarrierstateType');
var CarriernotedetailType = require('./types/CarriernotedetailType');
var CarryovererrorqueueType = require('./types/CarryovererrorqueueType');
var CarrierurlType = require('./types/CarrierurlType');
var CislBatchprocesstypeType = require('./types/CislBatchprocesstypeType');
var CislBatchprocessType = require('./types/CislBatchprocessType');
var CarrierlobpermitType = require('./types/CarrierlobpermitType');
var CarrierworkhourType = require('./types/CarrierworkhourType');
var ClaaccountexpenseType = require('./types/ClaaccountexpenseType');
var ClaaccountType = require('./types/ClaaccountType');
var ClaaccounthealthType = require('./types/ClaaccounthealthType');
var ClabenefitType = require('./types/ClabenefitType');
var ClaacctbaltimelineType = require('./types/ClaacctbaltimelineType');
var ClaacctbaltimelinehxType = require('./types/ClaacctbaltimelinehxType');
var ClabenefitallowedType = require('./types/ClabenefitallowedType');
var ClabenefitauthreferralType = require('./types/ClabenefitauthreferralType');
var ClabenefitauthreferralmatchType = require('./types/ClabenefitauthreferralmatchType');
var ClabenefitcobType = require('./types/ClabenefitcobType');
var ClabenefitcodeType = require('./types/ClabenefitcodeType');
var ClabenefitcoinsuranceType = require('./types/ClabenefitcoinsuranceType');
var ClabenefitdeductibleType = require('./types/ClabenefitdeductibleType');
var ClabenefitcopaymentType = require('./types/ClabenefitcopaymentType');
var ClabenefitproviderType = require('./types/ClabenefitproviderType');
var ClabenefitproviderflagType = require('./types/ClabenefitproviderflagType');
var ClabenefituseroverridewaivemaxType = require('./types/ClabenefituseroverridewaivemaxType');
var ClabenefitwithholdType = require('./types/ClabenefitwithholdType');
var ClabenefitfilingType = require('./types/ClabenefitfilingType');
var CladofrType = require('./types/CladofrType');
var ClabenefiteocactionType = require('./types/ClabenefiteocactionType');
var ClabenefituseroverrideType = require('./types/ClabenefituseroverrideType');
var ClaimaccidentType = require('./types/ClaimaccidentType');
var ClabenefituseroverridebcrrType = require('./types/ClabenefituseroverridebcrrType');
var ClaeocrelatedlogType = require('./types/ClaeocrelatedlogType');
var CladenyType = require('./types/CladenyType');
var ClaeocrelatedlogoverrideType = require('./types/ClaeocrelatedlogoverrideType');
var ClaimauditbenefitType = require('./types/ClaimauditbenefitType');
var ClaimattachmentType = require('./types/ClaimattachmentType');
var ClaeoctriggerlogType = require('./types/ClaeoctriggerlogType');
var ClaimauditcovsequenceType = require('./types/ClaimauditcovsequenceType');
var ClaimauditbilltypeType = require('./types/ClaimauditbilltypeType');
var ClaimauditdiagnosisType = require('./types/ClaimauditdiagnosisType');
var ClabenefitoverpayType = require('./types/ClabenefitoverpayType');
var ClaimauditexternalrequestType = require('./types/ClaimauditexternalrequestType');
var ClaimauditmodifierType = require('./types/ClaimauditmodifierType');
var ClabenefitdelegationType = require('./types/ClabenefitdelegationType');
var ClabenefitmaximumType = require('./types/ClabenefitmaximumType');
var ClaimambulanceType = require('./types/ClaimambulanceType');
var ClaimauditpoType = require('./types/ClaimauditpoType');
var ClaimauditnetworkType = require('./types/ClaimauditnetworkType');
var ClaimauditpricingmethodType = require('./types/ClaimauditpricingmethodType');
var ClaimauditprocedureType = require('./types/ClaimauditprocedureType');
var ClaimauditdelegType = require('./types/ClaimauditdelegType');
var ClaimauditproviderType = require('./types/ClaimauditproviderType');
var ClaimauditschedauditdetailType = require('./types/ClaimauditschedauditdetailType');
var ClaimauditschedType = require('./types/ClaimauditschedType');
var ClaimauditproviderspecialtyType = require('./types/ClaimauditproviderspecialtyType');
var ClaimauditrevenueType = require('./types/ClaimauditrevenueType');
var ClaimauditdispositionType = require('./types/ClaimauditdispositionType');
var ClaimauditschedsettingType = require('./types/ClaimauditschedsettingType');
var ClaimaudittypeType = require('./types/ClaimaudittypeType');
var ClaimaudituserType = require('./types/ClaimaudituserType');
var ClaimauditstateType = require('./types/ClaimauditstateType');
var ClaimauditschedruleType = require('./types/ClaimauditschedruleType');
var ClaimcliniceditType = require('./types/ClaimcliniceditType');
var ClaimcarrierType = require('./types/ClaimcarrierType');
var ClaimclinicType = require('./types/ClaimclinicType');
var ClaimcliniceditflagType = require('./types/ClaimcliniceditflagType');
var ClaimcobadjudicationType = require('./types/ClaimcobadjudicationType');
var ClaimcliniceditdiagnosisType = require('./types/ClaimcliniceditdiagnosisType');
var ClaimcobadjustmentType = require('./types/ClaimcobadjustmentType');
var ClaimcobcontractType = require('./types/ClaimcobcontractType');
var ClaimcobmedicareType = require('./types/ClaimcobmedicareType');
var ClaimcobprovsecondaryidType = require('./types/ClaimcobprovsecondaryidType');
var ClaimcontactType = require('./types/ClaimcontactType');
var ClaimcobothersubscriberType = require('./types/ClaimcobothersubscriberType');
var ClaimcobheaderType = require('./types/ClaimcobheaderType');
var ClaimcobinfoType = require('./types/ClaimcobinfoType');
var ClaimcompositeblobType = require('./types/ClaimcompositeblobType');
var ClaimconditionType = require('./types/ClaimconditionType');
var ClaimcobpayerType = require('./types/ClaimcobpayerType');
var ClaimcoblineType = require('./types/ClaimcoblineType');
var ClaimdentalorthoType = require('./types/ClaimdentalorthoType');
var ClaimeventType = require('./types/ClaimeventType');
var ClaimdentalprosthType = require('./types/ClaimdentalprosthType');
var ClaimeditType = require('./types/ClaimeditType');
var ClaimdiagnosisType = require('./types/ClaimdiagnosisType');
var ClaimedithxType = require('./types/ClaimedithxType');
var ClaimeditintermediateType = require('./types/ClaimeditintermediateType');
var ClaimfileinfoType = require('./types/ClaimfileinfoType');
var ClaimenvmatchedclaimType = require('./types/ClaimenvmatchedclaimType');
var ClaimeditsummaryType = require('./types/ClaimeditsummaryType');
var ClaimheaderType = require('./types/ClaimheaderType');
var ClaimheadercobType = require('./types/ClaimheadercobType');
var ClaimenvelopeType = require('./types/ClaimenvelopeType');
var ClaimheaderdentalType = require('./types/ClaimheaderdentalType');
var ClaimefstxType = require('./types/ClaimefstxType');
var ClaimheadericpdenyType = require('./types/ClaimheadericpdenyType');
var ClaimeventpromptpayType = require('./types/ClaimeventpromptpayType');
var ClaimheadericpType = require('./types/ClaimheadericpType');
var ClaimeventuncleantimeType = require('./types/ClaimeventuncleantimeType');
var ClaimheaderauditdetailType = require('./types/ClaimheaderauditdetailType');
var ClaimheadernoteType = require('./types/ClaimheadernoteType');
var ClaimheaderinstType = require('./types/ClaimheaderinstType');
var ClaimheaderrxType = require('./types/ClaimheaderrxType');
var ClaiminstpayerType = require('./types/ClaiminstpayerType');
var Claiminst81CcType = require('./types/Claiminst81CcType');
var ClaimheaderprofType = require('./types/ClaimheaderprofType');
var ClaiminstprocType = require('./types/ClaiminstprocType');
var ClaimheadersuperbillType = require('./types/ClaimheadersuperbillType');
var ClaimlinedentalType = require('./types/ClaimlinedentalType');
var ClaiminstcondType = require('./types/ClaiminstcondType');
var ClaimlineadjudicationType = require('./types/ClaimlineadjudicationType');
var ClaiminstoccurType = require('./types/ClaiminstoccurType');
var ClaimhealthinformationType = require('./types/ClaimhealthinformationType');
var ClaimlineicpType = require('./types/ClaimlineicpType');
var ClaimlinecobType = require('./types/ClaimlinecobType');
var ClaiminstvalueType = require('./types/ClaiminstvalueType');
var ClaimlineexpenseType = require('./types/ClaimlineexpenseType');
var ClaiminstoccurspanType = require('./types/ClaiminstoccurspanType');
var ClaimlineicpdenyType = require('./types/ClaimlineicpdenyType');
var ClaimlineinstType = require('./types/ClaimlineinstType');
var ClaimlinepriorauthType = require('./types/ClaimlinepriorauthType');
var ClaimlineprofanesthesiaType = require('./types/ClaimlineprofanesthesiaType');
var ClaimlineprofType = require('./types/ClaimlineprofType');
var ClaimlineprofmeasureType = require('./types/ClaimlineprofmeasureType');
var ClaimlinemapType = require('./types/ClaimlinemapType');
var ClaimlinepredeterminationType = require('./types/ClaimlinepredeterminationType');
var ClaimlinesupportingdocType = require('./types/ClaimlinesupportingdocType');
var ClaimlinesuperbillType = require('./types/ClaimlinesuperbillType');
var ClaimlineeventType = require('./types/ClaimlineeventType');
var ClaimlineprofdmeType = require('./types/ClaimlineprofdmeType');
var ClaimmedpolicyengineinputlineType = require('./types/ClaimmedpolicyengineinputlineType');
var ClaimlinerxcompoundType = require('./types/ClaimlinerxcompoundType');
var ClaimmemberType = require('./types/ClaimmemberType');
var ClaimlineprofrxType = require('./types/ClaimlineprofrxType');
var ClaimpricingdetailmodifierType = require('./types/ClaimpricingdetailmodifierType');
var ClaimnoteType = require('./types/ClaimnoteType');
var ClaimpayerType = require('./types/ClaimpayerType');
var ClaimmembergroupinfoType = require('./types/ClaimmembergroupinfoType');
var ClaimpricingdetailreapportionType = require('./types/ClaimpricingdetailreapportionType');
var ClaimmedpolengineinputheaderType = require('./types/ClaimmedpolengineinputheaderType');
var ClaimlinerxType = require('./types/ClaimlinerxType');
var ClaimpricingexternalrequestType = require('./types/ClaimpricingexternalrequestType');
var ClaimpayersecondaryidType = require('./types/ClaimpayersecondaryidType');
var ClaimpricingdetailtierType = require('./types/ClaimpricingdetailtierType');
var ClaimpayeeType = require('./types/ClaimpayeeType');
var ClaimpricinginputdetailType = require('./types/ClaimpricinginputdetailType');
var ClaimnotificationType = require('./types/ClaimnotificationType');
var ClaimpricingoutputdetailType = require('./types/ClaimpricingoutputdetailType');
var ClaimpricinginputheaderType = require('./types/ClaimpricinginputheaderType');
var ClaimpricingexternalresphdrType = require('./types/ClaimpricingexternalresphdrType');
var ClaimpricingexternalrespdtledtType = require('./types/ClaimpricingexternalrespdtledtType');
var ClaimpricingexternalresphdredtType = require('./types/ClaimpricingexternalresphdredtType');
var ClaimpricingdetailspiType = require('./types/ClaimpricingdetailspiType');
var ClaimpricingediType = require('./types/ClaimpricingediType');
var ClaimpricingexternalrespdtlType = require('./types/ClaimpricingexternalrespdtlType');
var ClaimpricinguseroverridedetailType = require('./types/ClaimpricinguseroverridedetailType');
var ClaimpricinguseroverrideheaderType = require('./types/ClaimpricinguseroverrideheaderType');
var ClaimpricingoutputheaderType = require('./types/ClaimpricingoutputheaderType');
var ClaimproviderType = require('./types/ClaimproviderType');
var ClaimpropertycasualtyType = require('./types/ClaimpropertycasualtyType');
var ClaimprocedurexrefType = require('./types/ClaimprocedurexrefType');
var ClaimprovidersecondaryidType = require('./types/ClaimprovidersecondaryidType');
var ClaimprovtinType = require('./types/ClaimprovtinType');
var ClaimprovideraddressType = require('./types/ClaimprovideraddressType');
var ClaimqualityauditauditdetailType = require('./types/ClaimqualityauditauditdetailType');
var ClaimreferralType = require('./types/ClaimreferralType');
var ClaimtoothchartType = require('./types/ClaimtoothchartType');
var ClaimsubsgroupinfoType = require('./types/ClaimsubsgroupinfoType');
var ClaimqualityauditType = require('./types/ClaimqualityauditType');
var ClaimresppartyType = require('./types/ClaimresppartyType');
var ClausecoderefType = require('./types/ClausecoderefType');
var ClceffratgbasefileupldheaderType = require('./types/ClceffratgbasefileupldheaderType');
var ClinicaleditresponsecodeType = require('./types/ClinicaleditresponsecodeType');
var ClausecodesetType = require('./types/ClausecodesetType');
var ClinicaleditresponsecodeauditType = require('./types/ClinicaleditresponsecodeauditType');
var ClinicaleditscheddetailType = require('./types/ClinicaleditscheddetailType');
var ClineditscheddetailclmtypexclType = require('./types/ClineditscheddetailclmtypexclType');
var ClaimsubscriberType = require('./types/ClaimsubscriberType');
var ClaimtatType = require('./types/ClaimtatType');
var ClausecodesetauditdetailType = require('./types/ClausecodesetauditdetailType');
var ClinicaleditassignmentType = require('./types/ClinicaleditassignmentType');
var ClaimtransmitterType = require('./types/ClaimtransmitterType');
var ClinicaleditschedType = require('./types/ClinicaleditschedType');
var ClinicaleditschedauditdetailType = require('./types/ClinicaleditschedauditdetailType');
var CobraschedType = require('./types/CobraschedType');
var ClinicaleffratgbaseuploadstageType = require('./types/ClinicaleffratgbaseuploadstageType');
var ClinicaleditschednoteType = require('./types/ClinicaleditschednoteType');
var CobrascheddetailbenefitType = require('./types/CobrascheddetailbenefitType');
var CobrascheddetailconversionType = require('./types/CobrascheddetailconversionType');
var CobrascheddetailqualeventpremType = require('./types/CobrascheddetailqualeventpremType');
var CobrascheddetailqualbeneficiarType = require('./types/CobrascheddetailqualbeneficiarType');
var CobrascheddetailexclusionType = require('./types/CobrascheddetailexclusionType');
var CobrascheddetailnotificationType = require('./types/CobrascheddetailnotificationType');
var CobrascheddetailType = require('./types/CobrascheddetailType');
var CobraschedauditdetailType = require('./types/CobraschedauditdetailType');
var ClinicaleffratgfileuploaderrorType = require('./types/ClinicaleffratgfileuploaderrorType');
var CobraschednoteType = require('./types/CobraschednoteType');
var CobruleType = require('./types/CobruleType');
var CobrascheddetailsubsidyType = require('./types/CobrascheddetailsubsidyType');
var CobrascheddetailgracetimeType = require('./types/CobrascheddetailgracetimeType');
var ContinuationeventmemberType = require('./types/ContinuationeventmemberType');
var CobrascheddetailpartialmonthType = require('./types/CobrascheddetailpartialmonthType');
var CobrulestextType = require('./types/CobrulestextType');
var CobrascheddetailsubsidytierType = require('./types/CobrascheddetailsubsidytierType');
var CobrascheddetailqualeventType = require('./types/CobrascheddetailqualeventType');
var CodexrefType = require('./types/CodexrefType');
var ContinuationeventType = require('./types/ContinuationeventType');
var ContractclaimtypeType = require('./types/ContractclaimtypeType');
var ContinuationsecondaryeventType = require('./types/ContinuationsecondaryeventType');
var CorrespondenceType = require('./types/CorrespondenceType');
var CorrespondenceauditdetailType = require('./types/CorrespondenceauditdetailType');
var CorrespondencereasonType = require('./types/CorrespondencereasonType');
var CorrespondencenoteType = require('./types/CorrespondencenoteType');
var Cpt4ProcedureauditdetailType = require('./types/Cpt4ProcedureauditdetailType');
var CountycodeType = require('./types/CountycodeType');
var CorrespondenceentitydetailType = require('./types/CorrespondenceentitydetailType');
var Cpt4ProcasafileuploaddetailType = require('./types/Cpt4ProcasafileuploaddetailType');
var CorrespondencetransdetailType = require('./types/CorrespondencetransdetailType');
var Cpt4ProcedureType = require('./types/Cpt4ProcedureType');
var Cpt4ProcedurefileuploadheaderType = require('./types/Cpt4ProcedurefileuploadheaderType');
var CustomprocedureType = require('./types/CustomprocedureType');
var DatasecuritygroupType = require('./types/DatasecuritygroupType');
var DatasecuritymembergroupType = require('./types/DatasecuritymembergroupType');
var DatasecuritydatasetauditdetailType = require('./types/DatasecuritydatasetauditdetailType');
var DatasecurityownergroupType = require('./types/DatasecurityownergroupType');
var DefaultmodifierauditdetailType = require('./types/DefaultmodifierauditdetailType');
var Cpt4ProcedurefileuploaddetailType = require('./types/Cpt4ProcedurefileuploaddetailType');
var DefaultmodifiercompnoteType = require('./types/DefaultmodifiercompnoteType');
var DelegschedauditdetailType = require('./types/DelegschedauditdetailType');
var DefaultmodifiercompType = require('./types/DefaultmodifiercompType');
var CredstatuscodeType = require('./types/CredstatuscodeType');
var Cpt4ProcmedfileuploaddetailType = require('./types/Cpt4ProcmedfileuploaddetailType');
var DatasecurityproductType = require('./types/DatasecurityproductType');
var DelegfunctionType = require('./types/DelegfunctionType');
var DelegschedfunctionassignType = require('./types/DelegschedfunctionassignType');
var DatasecuritydatasetType = require('./types/DatasecuritydatasetType');
var DelegschedType = require('./types/DelegschedType');
var DelegschedfunctionType = require('./types/DelegschedfunctionType');
var DelegsetType = require('./types/DelegsetType');
var DelegsetnoteType = require('./types/DelegsetnoteType');
var DelegschedscenariofunctionType = require('./types/DelegschedscenariofunctionType');
var DelegschedscenarioType = require('./types/DelegschedscenarioType');
var DelegschedscenariofunctionservType = require('./types/DelegschedscenariofunctionservType');
var DenyreasoncodeType = require('./types/DenyreasoncodeType');
var DiagcoderangecatType = require('./types/DiagcoderangecatType');
var DelegschedentityType = require('./types/DelegschedentityType');
var DelegsettimelineType = require('./types/DelegsettimelineType');
var DelegsetschedassignType = require('./types/DelegsetschedassignType');
var DenyreasoncodeauditdetailType = require('./types/DenyreasoncodeauditdetailType');
var DelegsetauditdetailType = require('./types/DelegsetauditdetailType');
var DirectoryusersuppressrsncodeType = require('./types/DirectoryusersuppressrsncodeType');
var DiagnosissetcatdetailType = require('./types/DiagnosissetcatdetailType');
var DelegschednoteType = require('./types/DelegschednoteType');
var DistributionchannelType = require('./types/DistributionchannelType');
var DeleteutilityerrorqueueType = require('./types/DeleteutilityerrorqueueType');
var DiagcategoryType = require('./types/DiagcategoryType');
var DiagnosissetType = require('./types/DiagnosissetType');
var DiagnosissetcatdetaildefType = require('./types/DiagnosissetcatdetaildefType');
var DiagnosissetcatType = require('./types/DiagnosissetcatType');
var DofrschedscenarioservType = require('./types/DofrschedscenarioservType');
var DofrsetauditdetailType = require('./types/DofrsetauditdetailType');
var DistributionchannelnoteType = require('./types/DistributionchannelnoteType');
var DistchannelauditdetailType = require('./types/DistchannelauditdetailType');
var DofrschedauditdetailType = require('./types/DofrschedauditdetailType');
var DiagnosissetauditdetailType = require('./types/DiagnosissetauditdetailType');
var DofrschedType = require('./types/DofrschedType');
var DofrsettimelineType = require('./types/DofrsettimelineType');
var DofrsetschedassignType = require('./types/DofrsetschedassignType');
var DrcrestrictType = require('./types/DrcrestrictType');
var DrcmapperType = require('./types/DrcmapperType');
var DrgbasefileuploaddetailType = require('./types/DrgbasefileuploaddetailType');
var DrgversionType = require('./types/DrgversionType');
var DrgbasefileuploadheaderType = require('./types/DrgbasefileuploadheaderType');
var EocactioncodeType = require('./types/EocactioncodeType');
var EditcodeType = require('./types/EditcodeType');
var EocschedType = require('./types/EocschedType');
var EocschedholdType = require('./types/EocschedholdType');
var EocschedauditdetailType = require('./types/EocschedauditdetailType');
var DrgType = require('./types/DrgType');
var DofrschedscenarioType = require('./types/DofrschedscenarioType');
var DofrschednoteType = require('./types/DofrschednoteType');
var EocschednoteType = require('./types/EocschednoteType');
var DofrsetType = require('./types/DofrsetType');
var EocschedtriggereventType = require('./types/EocschedtriggereventType');
var EocschedtriggereventactionType = require('./types/EocschedtriggereventactionType');
var DofrschedentityType = require('./types/DofrschedentityType');
var DofrsetnoteType = require('./types/DofrsetnoteType');
var EocschedrelatedeventservType = require('./types/EocschedrelatedeventservType');
var EocschedrelatedeventactionType = require('./types/EocschedrelatedeventactionType');
var EocschedstateType = require('./types/EocschedstateType');
var EocschedtriggereventservType = require('./types/EocschedtriggereventservType');
var EventlogType = require('./types/EventlogType');
var EocsetschedassignType = require('./types/EocsetschedassignType');
var EocsetType = require('./types/EocsetType');
var EocsetnoteType = require('./types/EocsetnoteType');
var EocschedrelatedeventType = require('./types/EocschedrelatedeventType');
var EocsetholdType = require('./types/EocsetholdType');
var EocsetauditdetailType = require('./types/EocsetauditdetailType');
var DupclaimeditType = require('./types/DupclaimeditType');
var ExtractftpsettingsauditdetailType = require('./types/ExtractftpsettingsauditdetailType');
var FallthrucompType = require('./types/FallthrucompType');
var ExtractftpsettingType = require('./types/ExtractftpsettingType');
var ExtractftpsettingsnoteType = require('./types/ExtractftpsettingsnoteType');
var FallthrucompauditdetailType = require('./types/FallthrucompauditdetailType');
var ExtractftpsettingsnotedetailType = require('./types/ExtractftpsettingsnotedetailType');
var EocschedtriggerrelatedassignType = require('./types/EocschedtriggerrelatedassignType');
var FacilitypapertypeType = require('./types/FacilitypapertypeType');
var ExpensecodeType = require('./types/ExpensecodeType');
var ExpensecodeemplstatusType = require('./types/ExpensecodeemplstatusType');
var FallthrucompnoteType = require('./types/FallthrucompnoteType');
var FamilyacctmaxhxType = require('./types/FamilyacctmaxhxType');
var FallthrucompclaimclassType = require('./types/FallthrucompclaimclassType');
var FamilyunitlevelcovlevType = require('./types/FamilyunitlevelcovlevType');
var FamilyunitnoteType = require('./types/FamilyunitnoteType');
var FamilyunitschedleveldetailrelType = require('./types/FamilyunitschedleveldetailrelType');
var FamilyunitscheduleType = require('./types/FamilyunitscheduleType');
var FamilyunitschedulelevelType = require('./types/FamilyunitschedulelevelType');
var FamilyunitscheduleleveldetailType = require('./types/FamilyunitscheduleleveldetailType');
var FinactivitycodeType = require('./types/FinactivitycodeType');
var FinanceactivitylogType = require('./types/FinanceactivitylogType');
var FallthrumodifiercompassignType = require('./types/FallthrumodifiercompassignType');
var FallthrucompdetailType = require('./types/FallthrucompdetailType');
var FinanceactivitylogattribtagType = require('./types/FinanceactivitylogattribtagType');
var FinanceactivitylogattribType = require('./types/FinanceactivitylogattribType');
var FinanceactivitylogattribsetType = require('./types/FinanceactivitylogattribsetType');
var FinancialpenaltyType = require('./types/FinancialpenaltyType');
var FinanceerrorType = require('./types/FinanceerrorType');
var FinattribschedauditdetailType = require('./types/FinattribschedauditdetailType');
var FinattribschedType = require('./types/FinattribschedType');
var FallthrucompholdType = require('./types/FallthrucompholdType');
var FamilyacctmaxType = require('./types/FamilyacctmaxType');
var FinancialpenaltyauditdetailType = require('./types/FinancialpenaltyauditdetailType');
var FamilyunitauditdetailType = require('./types/FamilyunitauditdetailType');
var FinattribcodeType = require('./types/FinattribcodeType');
var FinattribschedsegmentType = require('./types/FinattribschedsegmentType');
var FinattribschedcodeassignType = require('./types/FinattribschedcodeassignType');
var FinattribschednoteType = require('./types/FinattribschednoteType');
var FinancialpenaltydetailType = require('./types/FinancialpenaltydetailType');
var FinattribschedvariableType = require('./types/FinattribschedvariableType');
var FinerrorapremarkType = require('./types/FinerrorapremarkType');
var FinerrorapinterestType = require('./types/FinerrorapinterestType');
var FinattribschedvariabledefType = require('./types/FinattribschedvariabledefType');
var FinerroraptransactionType = require('./types/FinerroraptransactionType');
var FinattribschedsegmentdefType = require('./types/FinattribschedsegmentdefType');
var FinerrorpaymentrequesterrorType = require('./types/FinerrorpaymentrequesterrorType');
var FinerrorstatcorrectionType = require('./types/FinerrorstatcorrectionType');
var FinanceerrorqueueType = require('./types/FinanceerrorqueueType');
var FinerrorqueueType = require('./types/FinerrorqueueType');
var FinerrorsystemType = require('./types/FinerrorsystemType');
var FinerrorpaymentresponseType = require('./types/FinerrorpaymentresponseType');
var FinerrortranstaggingType = require('./types/FinerrortranstaggingType');
var FulfillcontentType = require('./types/FulfillcontentType');
var FulfilleventType = require('./types/FulfilleventType');
var FulfilleventidentifierType = require('./types/FulfilleventidentifierType');
var FulfilleventtemplateType = require('./types/FulfilleventtemplateType');
var FulfilleventtemplateoverrideType = require('./types/FulfilleventtemplateoverrideType');
var FulfilleventtrackingType = require('./types/FulfilleventtrackingType');
var FulfillmassrequestType = require('./types/FulfillmassrequestType');
var FulfillmassrequestmailinglocType = require('./types/FulfillmassrequestmailinglocType');
var FulfillmassvariablecontentType = require('./types/FulfillmassvariablecontentType');
var FinerrorvoidpaymentType = require('./types/FinerrorvoidpaymentType');
var FulfillmentclientType = require('./types/FulfillmentclientType');
var FulfillrecipientidentifierType = require('./types/FulfillrecipientidentifierType');
var FulfilltemplatedetailType = require('./types/FulfilltemplatedetailType');
var FulfillrequestType = require('./types/FulfillrequestType');
var FulfillrequesttrackingType = require('./types/FulfillrequesttrackingType');
var FulfilltemplateType = require('./types/FulfilltemplateType');
var FinerrorpaymentrequestType = require('./types/FinerrorpaymentrequestType');
var FinerrorcontracttaggingType = require('./types/FinerrorcontracttaggingType');
var FinerrorattribType = require('./types/FinerrorattribType');
var FinerrorapsurchargeType = require('./types/FinerrorapsurchargeType');
var FulfilltemplaterecipientType = require('./types/FulfilltemplaterecipientType');
var FulfillrequestidentifierType = require('./types/FulfillrequestidentifierType');
var FulfillvariablecontentType = require('./types/FulfillvariablecontentType');
var FundpoolauditdetailType = require('./types/FundpoolauditdetailType');
var FundpoolnoteType = require('./types/FundpoolnoteType');
var GeneralclaimsettingType = require('./types/GeneralclaimsettingType');
var GuardrailinsrulemaximumageType = require('./types/GuardrailinsrulemaximumageType');
var GuardrailinsruleretroType = require('./types/GuardrailinsruleretroType');
var FundpoolType = require('./types/FundpoolType');
var GuardrailauditdetailType = require('./types/GuardrailauditdetailType');
var GuardrailscheduleType = require('./types/GuardrailscheduleType');
var FundtransferType = require('./types/FundtransferType');
var FundpoolnotedetailType = require('./types/FundpoolnotedetailType');
var GuardrailschedulenoteType = require('./types/GuardrailschedulenoteType');
var GuardrailinsuringruleType = require('./types/GuardrailinsuringruleType');
var GuardrailinsrulenewbornType = require('./types/GuardrailinsrulenewbornType');
var GuardrailinsruleterminationType = require('./types/GuardrailinsruleterminationType');
var GuardrailinsrulewaitperiodType = require('./types/GuardrailinsrulewaitperiodType');
var HcpcsprocdentfileuploaddetailType = require('./types/HcpcsprocdentfileuploaddetailType');
var HcpcsprocedureauditdetailType = require('./types/HcpcsprocedureauditdetailType');
var HealthcodeemplstatusType = require('./types/HealthcodeemplstatusType');
var GuardrailschedulevalidationType = require('./types/GuardrailschedulevalidationType');
var HealthcoderuleType = require('./types/HealthcoderuleType');
var HcpcsprocedureType = require('./types/HcpcsprocedureType');
var Icd10DiagnosisfileuploaddetailType = require('./types/Icd10DiagnosisfileuploaddetailType');
var HcpcsprocedurefileuploaddetailType = require('./types/HcpcsprocedurefileuploaddetailType');
var HoldcodeType = require('./types/HoldcodeType');
var Icd10DiagnosisType = require('./types/Icd10DiagnosisType');
var Icd10FileuploadheaderType = require('./types/Icd10FileuploadheaderType');
var HcpcsprocedurefileuploadheaderType = require('./types/HcpcsprocedurefileuploadheaderType');
var IncentType = require('./types/IncentType');
var Icd10DiagnosisauditdetailType = require('./types/Icd10DiagnosisauditdetailType');
var Icd10ProcedureType = require('./types/Icd10ProcedureType');
var HomepageType = require('./types/HomepageType');
var Icd9Type = require('./types/Icd9Type');
var HoldclaimapType = require('./types/HoldclaimapType');
var IndustryclassmodcodeType = require('./types/IndustryclassmodcodeType');
var IntegrationtransactionType = require('./types/IntegrationtransactionType');
var InterestaccountapplType = require('./types/InterestaccountapplType');
var IndustryclassmodschedType = require('./types/IndustryclassmodschedType');
var InterestscheddetailType = require('./types/InterestscheddetailType');
var IndustryclassauditdetailType = require('./types/IndustryclassauditdetailType');
var InterestpenaltysettingType = require('./types/InterestpenaltysettingType');
var Icd10ProcedurefileuploaddetailType = require('./types/Icd10ProcedurefileuploaddetailType');
var Icd10ProcedureauditdetailType = require('./types/Icd10ProcedureauditdetailType');
var InstallationinsuringruleType = require('./types/InstallationinsuringruleType');
var InstclaimsettingType = require('./types/InstclaimsettingType');
var InterestscheduleType = require('./types/InterestscheduleType');
var IndustryclassnoteType = require('./types/IndustryclassnoteType');
var InterestschednoteType = require('./types/InterestschednoteType');
var InvoiceamtvaluecodeType = require('./types/InvoiceamtvaluecodeType');
var IpservicecompType = require('./types/IpservicecompType');
var InternaladjustreasoncodeType = require('./types/InternaladjustreasoncodeType');
var InterestschedauditdetailType = require('./types/InterestschedauditdetailType');
var IpservicecompauditdetailType = require('./types/IpservicecompauditdetailType');
var IpservicecompdrgType = require('./types/IpservicecompdrgType');
var InterestscheddetaildayType = require('./types/InterestscheddetaildayType');
var InvalidclaimediType = require('./types/InvalidclaimediType');
var InternaladjustrsncdauditdetailType = require('./types/InternaladjustrsncdauditdetailType');
var IndustryclassmoddetailType = require('./types/IndustryclassmoddetailType');
var IptransactionauditdetailType = require('./types/IptransactionauditdetailType');
var InvestigationdeviceexemptType = require('./types/InvestigationdeviceexemptType');
var IptransactiondetailType = require('./types/IptransactiondetailType');
var IpservicecompdrgcustomType = require('./types/IpservicecompdrgcustomType');
var IpservicecompdetailpricingType = require('./types/IpservicecompdetailpricingType');
var IpservicecompnoteType = require('./types/IpservicecompnoteType');
var IpservicecompdetailType = require('./types/IpservicecompdetailType');
var IpservicecompholdType = require('./types/IpservicecompholdType');
var LiabilitycarrierType = require('./types/LiabilitycarrierType');
var IptransactionnotedetailType = require('./types/IptransactionnotedetailType');
var IptransactionnoteType = require('./types/IptransactionnoteType');
var LicensingentitypermitType = require('./types/LicensingentitypermitType');
var LobmodifiercompassignType = require('./types/LobmodifiercompassignType');
var IrmEvntType = require('./types/IrmEvntType');
var LicensingentityType = require('./types/LicensingentityType');
var LobmodassignauditdetailType = require('./types/LobmodassignauditdetailType');
var JoblastrundateType = require('./types/JoblastrundateType');
var LobmodifiercompassignhxType = require('./types/LobmodifiercompassignhxType');
var LocalityType = require('./types/LocalityType');
var LineofbusinessauditdetailType = require('./types/LineofbusinessauditdetailType');
var IptransactionheaderType = require('./types/IptransactionheaderType');
var MedpolicyengineresponseType = require('./types/MedpolicyengineresponseType');
var MedpolicyenginetierresponseType = require('./types/MedpolicyenginetierresponseType');
var LineofbusinessType = require('./types/LineofbusinessType');
var MedpolicyruleappliedhistoryType = require('./types/MedpolicyruleappliedhistoryType');
var LicensingentityauditdetailType = require('./types/LicensingentityauditdetailType');
var MedpolicyruleType = require('./types/MedpolicyruleType');
var MedpolicyrulebenefitType = require('./types/MedpolicyrulebenefitType');
var MedpolicyrulerseType = require('./types/MedpolicyrulerseType');
var MedpolicyrulemodifierType = require('./types/MedpolicyrulemodifierType');
var MedpolicyruleauditdetailType = require('./types/MedpolicyruleauditdetailType');
var MedpolicyrulerevType = require('./types/MedpolicyrulerevType');
var MedpolicyrulediagType = require('./types/MedpolicyrulediagType');
var MedpolicyrulenoteType = require('./types/MedpolicyrulenoteType');
var MedpolicyschedType = require('./types/MedpolicyschedType');
var LogoType = require('./types/LogoType');
var MedpolicyruleancillaryType = require('./types/MedpolicyruleancillaryType');
var MedpolicyschedtimelineType = require('./types/MedpolicyschedtimelineType');
var MedpolicyrulevalidationType = require('./types/MedpolicyrulevalidationType');
var MedpolicysetauditdetailType = require('./types/MedpolicysetauditdetailType');
var MedpolicysetType = require('./types/MedpolicysetType');
var MedpolicyschedauditdetailType = require('./types/MedpolicyschedauditdetailType');
var MedpolicyruleprocType = require('./types/MedpolicyruleprocType');
var MedpolicyruletaxonomyType = require('./types/MedpolicyruletaxonomyType');
var MedpolicysettimelineType = require('./types/MedpolicysettimelineType');
var MedpolicysetnoteType = require('./types/MedpolicysetnoteType');
var MedpolicyschedtimelineruleType = require('./types/MedpolicyschedtimelineruleType');
var MedpolicysettimelineschedType = require('./types/MedpolicysettimelineschedType');
var MedpolicyschednotifdefType = require('./types/MedpolicyschednotifdefType');
var MemacctacctbalhxxrefType = require('./types/MemacctacctbalhxxrefType');
var MedpolicyschednoteType = require('./types/MedpolicyschednoteType');
var MedpolicyruletierType = require('./types/MedpolicyruletierType');
var MemacctmembershipType = require('./types/MemacctmembershipType');
var MemberType = require('./types/MemberType');
var MemacctcustomerpurchasedetailType = require('./types/MemacctcustomerpurchasedetailType');
var MemacctcustomerpurchaseitemType = require('./types/MemacctcustomerpurchaseitemType');
var MemberaccountorderType = require('./types/MemberaccountorderType');
var MemberaccountholdType = require('./types/MemberaccountholdType');
var MemberaccountType = require('./types/MemberaccountType');
var MemberaccountsettingType = require('./types/MemberaccountsettingType');
var MemacctrunType = require('./types/MemacctrunType');
var MemberaccounthxType = require('./types/MemberaccounthxType');
var MemberacctmaxhxType = require('./types/MemberacctmaxhxType');
var MemberaddressdiagType = require('./types/MemberaddressdiagType');
var MemberacctmaxType = require('./types/MemberacctmaxType');
var MemberaddressType = require('./types/MemberaddressType');
var MemberattributeType = require('./types/MemberattributeType');
var MemberaddressattnType = require('./types/MemberaddressattnType');
var MemberacctpayrollType = require('./types/MemberacctpayrollType');
var MemberaddressprovType = require('./types/MemberaddressprovType');
var MemberbenefitType = require('./types/MemberbenefitType');
var MemberbankingType = require('./types/MemberbankingType');
var MemberbenefitcovlevelcodeType = require('./types/MemberbenefitcovlevelcodeType');
var MemberbenefitpremiumType = require('./types/MemberbenefitpremiumType');
var MemberbenefitriderType = require('./types/MemberbenefitriderType');
var Memberbenefit834HistType = require('./types/Memberbenefit834HistType');
var MembercobType = require('./types/MembercobType');
var MembercobexcldiagType = require('./types/MembercobexcldiagType');
var MemberauditdetailType = require('./types/MemberauditdetailType');
var MembercaserateType = require('./types/MembercaserateType');
var MembercobexclprocType = require('./types/MembercobexclprocType');
var MembercobrelentityphoneType = require('./types/MembercobrelentityphoneType');
var MembercobrelentityelectcomType = require('./types/MembercobrelentityelectcomType');
var MembercontactaddressType = require('./types/MembercontactaddressType');
var MembercontactelectcommType = require('./types/MembercontactelectcommType');
var MembercontactlanguageType = require('./types/MembercontactlanguageType');
var MembercustodialType = require('./types/MembercustodialType');
var MemberdepcertType = require('./types/MemberdepcertType');
var MemberdepcertarType = require('./types/MemberdepcertarType');
var MemberdisabilityType = require('./types/MemberdisabilityType');
var MemberdisclosureType = require('./types/MemberdisclosureType');
var MemberelectroniccommType = require('./types/MemberelectroniccommType');
var MemberexternalidType = require('./types/MemberexternalidType');
var MembergovernmentbenefitType = require('./types/MembergovernmentbenefitType');
var MembercontactphoneType = require('./types/MembercontactphoneType');
var MembercobrelentityaddressType = require('./types/MembercobrelentityaddressType');
var MembercobverificationType = require('./types/MembercobverificationType');
var MemberholdType = require('./types/MemberholdType');
var MemberdeleteType = require('./types/MemberdeleteType');
var MemberindicatorType = require('./types/MemberindicatorType');
var MembercontactType = require('./types/MembercontactType');
var MemberincentarType = require('./types/MemberincentarType');
var MemberincentType = require('./types/MemberincentType');
var MemberimageType = require('./types/MemberimageType');
var MemberinvaccidentType = require('./types/MemberinvaccidentType');
var MemberidcardType = require('./types/MemberidcardType');
var MemberinvdateType = require('./types/MemberinvdateType');
var MemberinternaloobtimelineType = require('./types/MemberinternaloobtimelineType');
var MemberidcardrequestType = require('./types/MemberidcardrequestType');
var MemberinvdiagnosisType = require('./types/MemberinvdiagnosisType');
var MemberinstitutionType = require('./types/MemberinstitutionType');
var MemberinvestigationType = require('./types/MemberinvestigationType');
var MemberinvnoteType = require('./types/MemberinvnoteType');
var MemberindivmaxhxType = require('./types/MemberindivmaxhxType');
var MemberinvproviderType = require('./types/MemberinvproviderType');
var MemberinternaloobplanType = require('./types/MemberinternaloobplanType');
var MemberindivmaxType = require('./types/MemberindivmaxType');
var MemberlanguageType = require('./types/MemberlanguageType');
var MemberoocplanType = require('./types/MemberoocplanType');
var MemberperiochartType = require('./types/MemberperiochartType');
var MemberperiopocketType = require('./types/MemberperiopocketType');
var MemberotherincomeType = require('./types/MemberotherincomeType');
var MemberphoneType = require('./types/MemberphoneType');
var MemberserviceplanType = require('./types/MemberserviceplanType');
var MemberooctimelineType = require('./types/MemberooctimelineType');
var MemberqueueType = require('./types/MemberqueueType');
var MembernoteType = require('./types/MembernoteType');
var MemberproviderType = require('./types/MemberproviderType');
var MemberrecoupType = require('./types/MemberrecoupType');
var MemberperiomeasureType = require('./types/MemberperiomeasureType');
var MemberstudentType = require('./types/MemberstudentType');
var MemberrecoupclaimType = require('./types/MemberrecoupclaimType');
var MembernetworkType = require('./types/MembernetworkType');
var MembersupertoothidType = require('./types/MembersupertoothidType');
var MembersupertoothType = require('./types/MembersupertoothType');
var MemberutilizationoptinType = require('./types/MemberutilizationoptinType');
var MemgroupType = require('./types/MemgroupType');
var Memgroup834ExtractType = require('./types/Memgroup834ExtractType');
var MemexpensecodemaxhxType = require('./types/MemexpensecodemaxhxType');
var MembertransferType = require('./types/MembertransferType');
var MemexpensecodemaxType = require('./types/MemexpensecodemaxType');
var MemgroupaddresshourType = require('./types/MemgroupaddresshourType');
var MembervitalType = require('./types/MembervitalType');
var MembertoothchartType = require('./types/MembertoothchartType');
var MemberutilizationplanType = require('./types/MemberutilizationplanType');
var MemgroupaddressType = require('./types/MemgroupaddressType');
var MemgroupaliasType = require('./types/MemgroupaliasType');
var MemgroupaddressphoneType = require('./types/MemgroupaddressphoneType');
var MemgroupbankingType = require('./types/MemgroupbankingType');
var MemgroupbusinessdefType = require('./types/MemgroupbusinessdefType');
var MemgroupauditdetailType = require('./types/MemgroupauditdetailType');
var MemgroupcontactelectroniccomType = require('./types/MemgroupcontactelectroniccomType');
var MemgroupcontactaddressType = require('./types/MemgroupcontactaddressType');
var MemgroupcontactType = require('./types/MemgroupcontactType');
var MemgroupcontactassignmentType = require('./types/MemgroupcontactassignmentType');
var MemgroupcontactphoneType = require('./types/MemgroupcontactphoneType');
var MemgroupcontactauditdetailType = require('./types/MemgroupcontactauditdetailType');
var MemgroupcontactaddressphoneType = require('./types/MemgroupcontactaddressphoneType');
var MemgroupcontractbillingprefType = require('./types/MemgroupcontractbillingprefType');
var MemgroupcontractgovtreportType = require('./types/MemgroupcontractgovtreportType');
var MemgroupcontractType = require('./types/MemgroupcontractType');
var MemgroupcontractauditdetailType = require('./types/MemgroupcontractauditdetailType');
var MemgroupcontracteventType = require('./types/MemgroupcontracteventType');
var MemgroupcontactroleType = require('./types/MemgroupcontactroleType');
var MemgroupcontactphoneassignType = require('./types/MemgroupcontactphoneassignType');
var MemgroupcontractdistchannelType = require('./types/MemgroupcontractdistchannelType');
var MemgroupcontractextidType = require('./types/MemgroupcontractextidType');
var MemgroupcontacteleccomassignType = require('./types/MemgroupcontacteleccomassignType');
var MemgroupcontractoptType = require('./types/MemgroupcontractoptType');
var MemgroupcontractoptcontributType = require('./types/MemgroupcontractoptcontributType');
var MemgroupcontractopenenrollType = require('./types/MemgroupcontractopenenrollType');
var MemgroupcontractoptpopType = require('./types/MemgroupcontractoptpopType');
var MemgroupcontractplanattribType = require('./types/MemgroupcontractplanattribType');
var MemgroupcontractoptinsruleType = require('./types/MemgroupcontractoptinsruleType');
var MemgroupcontractplanoptaddrType = require('./types/MemgroupcontractplanoptaddrType');
var MemgroupcontractplanattribsetType = require('./types/MemgroupcontractplanattribsetType');
var MemgroupcontractoptpopinsruleType = require('./types/MemgroupcontractoptpopinsruleType');
var MemgroupcontractplanoptholdType = require('./types/MemgroupcontractplanoptholdType');
var MemgroupcontractplanoptmsaType = require('./types/MemgroupcontractplanoptmsaType');
var MemgroupcontractplanopttagType = require('./types/MemgroupcontractplanopttagType');
var MemgroupcontractplanyearType = require('./types/MemgroupcontractplanyearType');
var MemgroupcontractplanyrbillrtType = require('./types/MemgroupcontractplanyrbillrtType');
var MemgroupcontractplanoptplanType = require('./types/MemgroupcontractplanoptplanType');
var MemgroupcontractlockType = require('./types/MemgroupcontractlockType');
var MemgroupcontractplanyrbillovdType = require('./types/MemgroupcontractplanyrbillovdType');
var MemgroupcontractrenewalType = require('./types/MemgroupcontractrenewalType');
var MemgroupcontractvalidationType = require('./types/MemgroupcontractvalidationType');
var MemgroupdepcertType = require('./types/MemgroupdepcertType');
var MemgroupcontractplanoptnetwkType = require('./types/MemgroupcontractplanoptnetwkType');
var MemgroupcontractproducerType = require('./types/MemgroupcontractproducerType');
var MemgroupcontractplanoptphoneType = require('./types/MemgroupcontractplanoptphoneType');
var MemgroupexternalidType = require('./types/MemgroupexternalidType');
var MemgroupcontractrenewaltriggerType = require('./types/MemgroupcontractrenewaltriggerType');
var MemgroupimageType = require('./types/MemgroupimageType');
var MemgroupinsuringruleType = require('./types/MemgroupinsuringruleType');
var MemgrouppayrollType = require('./types/MemgrouppayrollType');
var MemgrouppayrolldateType = require('./types/MemgrouppayrolldateType');
var MemgroupjobstatusType = require('./types/MemgroupjobstatusType');
var MemgroupcontractplanoptionType = require('./types/MemgroupcontractplanoptionType');
var MemgroupcontractplanoptextidType = require('./types/MemgroupcontractplanoptextidType');
var MemgroupholdType = require('./types/MemgroupholdType');
var MemgroupemployeecountType = require('./types/MemgroupemployeecountType');
var MemgroupcontractsalesofficeType = require('./types/MemgroupcontractsalesofficeType');
var MemgrouppopidentifiervalueType = require('./types/MemgrouppopidentifiervalueType');
var MemgroupnoteType = require('./types/MemgroupnoteType');
var MemgrouppopulationorderType = require('./types/MemgrouppopulationorderType');
var MemgrouppopidentifierType = require('./types/MemgrouppopidentifierType');
var MemgrouppopulationType = require('./types/MemgrouppopulationType');
var MemgroupreportingcodeType = require('./types/MemgroupreportingcodeType');
var MemgrouppriorcarrierType = require('./types/MemgrouppriorcarrierType');
var MemgroupstmtType = require('./types/MemgroupstmtType');
var MemgroupsupportteamType = require('./types/MemgroupsupportteamType');
var MemgroupsettingType = require('./types/MemgroupsettingType');
var MemgroupsurchargeType = require('./types/MemgroupsurchargeType');
var MemgrouppopulationconfigType = require('./types/MemgrouppopulationconfigType');
var MemgrouppopinsuringruleType = require('./types/MemgrouppopinsuringruleType');
var MemgroupstmtempstatType = require('./types/MemgroupstmtempstatType');
var MemhealthcodemaxType = require('./types/MemhealthcodemaxType');
var MemgrouptinType = require('./types/MemgrouptinType');
var MnrpcompType = require('./types/MnrpcompType');
var MnrpcompauditdetailType = require('./types/MnrpcompauditdetailType');
var MemhealthcodemaxhxType = require('./types/MemhealthcodemaxhxType');
var MnrpcompdetailprocType = require('./types/MnrpcompdetailprocType');
var MnrpcompholdType = require('./types/MnrpcompholdType');
var MnrpcompdetailType = require('./types/MnrpcompdetailType');
var MnrpcompnoteType = require('./types/MnrpcompnoteType');
var ModifiercodebasefileuploaddetaType = require('./types/ModifiercodebasefileuploaddetaType');
var ModifiercodeType = require('./types/ModifiercodeType');
var ModifiercompType = require('./types/ModifiercompType');
var ModifiercompauditdetailType = require('./types/ModifiercompauditdetailType');
var ModifiercompclaimclassType = require('./types/ModifiercompclaimclassType');
var ModifiercodebasefileuploadheadType = require('./types/ModifiercodebasefileuploadheadType');
var ModifiercompnoteType = require('./types/ModifiercompnoteType');
var MprcompdetailmodassignType = require('./types/MprcompdetailmodassignType');
var MprcompdetailType = require('./types/MprcompdetailType');
var MprcompdetailmodType = require('./types/MprcompdetailmodType');
var MprcompnoteType = require('./types/MprcompnoteType');
var MprcompholdType = require('./types/MprcompholdType');
var ModifiercompdetailType = require('./types/ModifiercompdetailType');
var MprcompType = require('./types/MprcompType');
var MprcompdetailcoeffType = require('./types/MprcompdetailcoeffType');
var MprcompauditdetailType = require('./types/MprcompauditdetailType');
var MsaType = require('./types/MsaType');
var MsaaccesspointType = require('./types/MsaaccesspointType');
var MsaaccesspointfusType = require('./types/MsaaccesspointfusType');
var MsaaccesspointfuslevelType = require('./types/MsaaccesspointfuslevelType');
var MsaaccesspointflatType = require('./types/MsaaccesspointflatType');
var MsacapcarryoverfuslevelType = require('./types/MsacapcarryoverfuslevelType');
var MsacarryoverType = require('./types/MsacarryoverType');
var MsaauditdetailType = require('./types/MsaauditdetailType');
var MsacontribdefType = require('./types/MsacontribdefType');
var MsaaccesspointrctierType = require('./types/MsaaccesspointrctierType');
var MsacapcarryoverfusType = require('./types/MsacapcarryoverfusType');
var MsacontribmaxfusType = require('./types/MsacontribmaxfusType');
var MsaaccesspointrcType = require('./types/MsaaccesspointrcType');
var MsaaptranstypedefType = require('./types/MsaaptranstypedefType');
var MsacapcarryoverType = require('./types/MsacapcarryoverType');
var MsacontribmaxfuslevelType = require('./types/MsacontribmaxfuslevelType');
var MsacontribmaxType = require('./types/MsacontribmaxType');
var MsaexpensecodemaxType = require('./types/MsaexpensecodemaxType');
var MsabalexchangeType = require('./types/MsabalexchangeType');
var MsacontribtypedefType = require('./types/MsacontribtypedefType');
var MsacoveredmrType = require('./types/MsacoveredmrType');
var MsacovrelationshipType = require('./types/MsacovrelationshipType');
var MsacontribtypeprorateType = require('./types/MsacontribtypeprorateType');
var MsaexpenseType = require('./types/MsaexpenseType');
var MsaexternalidType = require('./types/MsaexternalidType');
var MsadepcertType = require('./types/MsadepcertType');
var MsaexpensecodeType = require('./types/MsaexpensecodeType');
var MsaflatcontribType = require('./types/MsaflatcontribType');
var MsaflatapType = require('./types/MsaflatapType');
var MsafusaplevelType = require('./types/MsafusaplevelType');
var MsafusmaxbalanceType = require('./types/MsafusmaxbalanceType');
var MsafusapType = require('./types/MsafusapType');
var MsafuscontribType = require('./types/MsafuscontribType');
var MsahealthcareType = require('./types/MsahealthcareType');
var MsafuscontriblevelType = require('./types/MsafuscontriblevelType');
var MsagraceperiodType = require('./types/MsagraceperiodType');
var MsafusmaxballevelType = require('./types/MsafusmaxballevelType');
var MsaindivmaxType = require('./types/MsaindivmaxType');
var MsahealthcodemaxType = require('./types/MsahealthcodemaxType');
var MsalevelstatusType = require('./types/MsalevelstatusType');
var MsaincentcreditType = require('./types/MsaincentcreditType');
var MsaincdecruleType = require('./types/MsaincdecruleType');
var MsalevelplanType = require('./types/MsalevelplanType');
var MsalevelType = require('./types/MsalevelType');
var MsamaxbalanceType = require('./types/MsamaxbalanceType');
var MsanetworktierType = require('./types/MsanetworktierType');
var MsamaximumType = require('./types/MsamaximumType');
var MsanoteType = require('./types/MsanoteType');
var MsapaidincurredType = require('./types/MsapaidincurredType');
var MsanoncovrxthercodeType = require('./types/MsanoncovrxthercodeType');
var MsaprorationType = require('./types/MsaprorationType');
var MsamaxfamilylvlType = require('./types/MsamaxfamilylvlType');
var MsaholdType = require('./types/MsaholdType');
var MsapurseType = require('./types/MsapurseType');
var MsarelationshipType = require('./types/MsarelationshipType');
var MsastackingType = require('./types/MsastackingType');
var MsatermenrollstatusType = require('./types/MsatermenrollstatusType');
var MsastudentageType = require('./types/MsastudentageType');
var MsatypeType = require('./types/MsatypeType');
var MsavalidationType = require('./types/MsavalidationType');
var MsasettingType = require('./types/MsasettingType');
var NdcawpfileuploadstagingType = require('./types/NdcawpfileuploadstagingType');
var NdcawprefType = require('./types/NdcawprefType');
var NdcType = require('./types/NdcType');
var MsapayandchaseType = require('./types/MsapayandchaseType');
var NdccompholdType = require('./types/NdccompholdType');
var MsaplanyearType = require('./types/MsaplanyearType');
var MsaindivcapcarryoverType = require('./types/MsaindivcapcarryoverType');
var NdccompType = require('./types/NdccompType');
var NdccompnoteType = require('./types/NdccompnoteType');
var NdccompauditdetailType = require('./types/NdccompauditdetailType');
var NdccompdetailType = require('./types/NdccompdetailType');
var NdcawpfileuploadheaderType = require('./types/NdcawpfileuploadheaderType');
var NdcmacfileuploadheaderType = require('./types/NdcmacfileuploadheaderType');
var NdcprdpckbasefileuploadheaderType = require('./types/NdcprdpckbasefileuploadheaderType');
var NdcmodifiercompassignType = require('./types/NdcmodifiercompassignType');
var NdcpackagefileuploadstagingType = require('./types/NdcpackagefileuploadstagingType');
var NetcontractType = require('./types/NetcontractType');
var NdcproductfileuploadstagingType = require('./types/NdcproductfileuploadstagingType');
var NetcontractcarriersupportteamType = require('./types/NetcontractcarriersupportteamType');
var NetcontractfilinglimitType = require('./types/NetcontractfilinglimitType');
var NdcmacrefType = require('./types/NdcmacrefType');
var NetcontractcarrierType = require('./types/NetcontractcarrierType');
var NdcmacfileuploadstagingType = require('./types/NdcmacfileuploadstagingType');
var NetcontractheaderauditdetailType = require('./types/NetcontractheaderauditdetailType');
var NetcontractcarrierfilinglimitType = require('./types/NetcontractcarrierfilinglimitType');
var NetcontractheaderType = require('./types/NetcontractheaderType');
var NetcontractfinancialpenType = require('./types/NetcontractfinancialpenType');
var NetcontractauditdetailType = require('./types/NetcontractauditdetailType');
var NetcontractnoteType = require('./types/NetcontractnoteType');
var NetcontractlobType = require('./types/NetcontractlobType');
var NetcontractownerType = require('./types/NetcontractownerType');
var NetcontractlobfilinglimitType = require('./types/NetcontractlobfilinglimitType');
var NetcontractmembergroupType = require('./types/NetcontractmembergroupType');
var NetcontractprovaffiliationType = require('./types/NetcontractprovaffiliationType');
var NetcontractplanType = require('./types/NetcontractplanType');
var NetcontractidType = require('./types/NetcontractidType');
var NetcontractnetworkType = require('./types/NetcontractnetworkType');
var NetcontractheadernoteType = require('./types/NetcontractheadernoteType');
var NetcontractholdType = require('./types/NetcontractholdType');
var NetcontractserviceareaType = require('./types/NetcontractserviceareaType');
var NetcontractprovlocationType = require('./types/NetcontractprovlocationType');
var NetcontractprovnetworkpanelType = require('./types/NetcontractprovnetworkpanelType');
var NetcontractlobclausecodeType = require('./types/NetcontractlobclausecodeType');
var NetcontractprovtinType = require('./types/NetcontractprovtinType');
var NetcontractproductType = require('./types/NetcontractproductType');
var NetdirsuppressType = require('./types/NetdirsuppressType');
var NetcontractsupportteamType = require('./types/NetcontractsupportteamType');
var NetdirsuppressregionType = require('./types/NetdirsuppressregionType');
var NetcontracttermeventlogType = require('./types/NetcontracttermeventlogType');
var NetdirsuppressauditdetailType = require('./types/NetdirsuppressauditdetailType');
var NetcontracttaxonomyType = require('./types/NetcontracttaxonomyType');
var NetschedulelogoType = require('./types/NetschedulelogoType');
var NetscheduleextidType = require('./types/NetscheduleextidType');
var NetcontractproviderfinpenType = require('./types/NetcontractproviderfinpenType');
var NetworkauditdetailType = require('./types/NetworkauditdetailType');
var NetworkcontactType = require('./types/NetworkcontactType');
var NetscheduletierType = require('./types/NetscheduletierType');
var NetworkType = require('./types/NetworkType');
var NetworkcontactaddressphoneType = require('./types/NetworkcontactaddressphoneType');
var NetworkcontactassignmentType = require('./types/NetworkcontactassignmentType');
var NetscheduledetailType = require('./types/NetscheduledetailType');
var NetscheduleheaderType = require('./types/NetscheduleheaderType');
var NetworkcontactaddressType = require('./types/NetworkcontactaddressType');
var NetworkcontactauditdetailType = require('./types/NetworkcontactauditdetailType');
var NetworkcontactphoneType = require('./types/NetworkcontactphoneType');
var NetworkcontactelectroniccomType = require('./types/NetworkcontactelectroniccomType');
var NetworkmedpolicyType = require('./types/NetworkmedpolicyType');
var NetworkidType = require('./types/NetworkidType');
var NetworkserviceareaType = require('./types/NetworkserviceareaType');
var OonpricingptmcompType = require('./types/OonpricingptmcompType');
var OonpricingptmcompnoteType = require('./types/OonpricingptmcompnoteType');
var NetworknoteType = require('./types/NetworknoteType');
var NetworktypecodeType = require('./types/NetworktypecodeType');
var NetworksupportteamType = require('./types/NetworksupportteamType');
var OonpricinglogoType = require('./types/OonpricinglogoType');
var OonpricingptmdetailType = require('./types/OonpricingptmdetailType');
var OonpricingptmcompholdType = require('./types/OonpricingptmcompholdType');
var OonpricingptmprovType = require('./types/OonpricingptmprovType');
var OonpricingschedType = require('./types/OonpricingschedType');
var OonpricingschedholdType = require('./types/OonpricingschedholdType');
var OonpricingschednoteType = require('./types/OonpricingschednoteType');
var OonpricingschedtimelineType = require('./types/OonpricingschedtimelineType');
var OonpricingservicetypeType = require('./types/OonpricingservicetypeType');
var OonpricingschedorderType = require('./types/OonpricingschedorderType');
var OonpricingschedorderdetailType = require('./types/OonpricingschedorderdetailType');
var OonptmcomponentauditdetailType = require('./types/OonptmcomponentauditdetailType');
var OppservicecompType = require('./types/OppservicecompType');
var OppservicecompauditdetailType = require('./types/OppservicecompauditdetailType');
var OppservicecompdetailType = require('./types/OppservicecompdetailType');
var NetworksettingType = require('./types/NetworksettingType');
var OppservicecompnoteType = require('./types/OppservicecompnoteType');
var OonpricingptmregionType = require('./types/OonpricingptmregionType');
var OonpricingschedauditdetailType = require('./types/OonpricingschedauditdetailType');
var OutliercompType = require('./types/OutliercompType');
var OutliercompauditdetailType = require('./types/OutliercompauditdetailType');
var OppservicemodifiercompassignhxType = require('./types/OppservicemodifiercompassignhxType');
var OutliercompclaimclassType = require('./types/OutliercompclaimclassType');
var OutliercompdetailType = require('./types/OutliercompdetailType');
var OutliercompholdType = require('./types/OutliercompholdType');
var NetworktypeType = require('./types/NetworktypeType');
var OverridereasoncodeauditdetailType = require('./types/OverridereasoncodeauditdetailType');
var OverridereasoncodeType = require('./types/OverridereasoncodeType');
var OwnergroupType = require('./types/OwnergroupType');
var OppservicecompdetailpricingType = require('./types/OppservicecompdetailpricingType');
var PassthrucompType = require('./types/PassthrucompType');
var PassthrucompauditdetailType = require('./types/PassthrucompauditdetailType');
var PassthrucompclaimclassType = require('./types/PassthrucompclaimclassType');
var PassthrucompdetailsamedayrevType = require('./types/PassthrucompdetailsamedayrevType');
var OutliercompnoteType = require('./types/OutliercompnoteType');
var PassthrucompholdType = require('./types/PassthrucompholdType');
var OppservicecompholdType = require('./types/OppservicecompholdType');
var PermissionType = require('./types/PermissionType');
var PassthrucompnoteType = require('./types/PassthrucompnoteType');
var PermissiongroupType = require('./types/PermissiongroupType');
var PassthrucompdetailType = require('./types/PassthrucompdetailType');
var PermissiongrouppermissionType = require('./types/PermissiongrouppermissionType');
var PfscompType = require('./types/PfscompType');
var PfscompauditdetailType = require('./types/PfscompauditdetailType');
var PermissiongroupauditdetailType = require('./types/PermissiongroupauditdetailType');
var PfscompdefaultmodcompassignType = require('./types/PfscompdefaultmodcompassignType');
var PfscomppossetType = require('./types/PfscomppossetType');
var PfscompholdType = require('./types/PfscompholdType');
var PfscompnoteType = require('./types/PfscompnoteType');
var PfscompprocedureType = require('./types/PfscompprocedureType');
var OppservicecompmultprocreductType = require('./types/OppservicecompmultprocreductType');
var OppservicemodassignauditdetailType = require('./types/OppservicemodassignauditdetailType');
var PfscompprocmodifierType = require('./types/PfscompprocmodifierType');
var PfscompprotechcompassignType = require('./types/PfscompprotechcompassignType');
var PfsfileuploadheaderType = require('./types/PfsfileuploadheaderType');
var PfsmodifiercompassignType = require('./types/PfsmodifiercompassignType');
var PlaceofservicesetType = require('./types/PlaceofservicesetType');
var OppservicemodifiercompassignType = require('./types/OppservicemodifiercompassignType');
var PlaceofservicesetcatType = require('./types/PlaceofservicesetcatType');
var PlaceofservicesetauditdetailType = require('./types/PlaceofservicesetauditdetailType');
var PricingmethodtypeexclusionType = require('./types/PricingmethodtypeexclusionType');
var PlaceofservicecategoryType = require('./types/PlaceofservicecategoryType');
var PlaceofservicesetcatdetailType = require('./types/PlaceofservicesetcatdetailType');
var PricingschedType = require('./types/PricingschedType');
var PoscategorycodeType = require('./types/PoscategorycodeType');
var PricingschednoteType = require('./types/PricingschednoteType');
var PaytoaddressqueueType = require('./types/PaytoaddressqueueType');
var PricingschedauditdetailType = require('./types/PricingschedauditdetailType');
var PlaceofservicesetcatdetaildefType = require('./types/PlaceofservicesetcatdetaildefType');
var PricingschedorderType = require('./types/PricingschedorderType');
var PricingsetType = require('./types/PricingsetType');
var PricingschedorderclaimclassType = require('./types/PricingschedorderclaimclassType');
var PricingschedorderdetailType = require('./types/PricingschedorderdetailType');
var PricingsetauditdetailType = require('./types/PricingsetauditdetailType');
var PricingsetnoteType = require('./types/PricingsetnoteType');
var PricingschedholdType = require('./types/PricingschedholdType');
var PricingservicecategoryType = require('./types/PricingservicecategoryType');
var PoscategoryType = require('./types/PoscategoryType');
var PricingsetsourceType = require('./types/PricingsetsourceType');
var PricingsetschedType = require('./types/PricingsetschedType');
var PricingsettingnoteType = require('./types/PricingsettingnoteType');
var PricingsettingmprType = require('./types/PricingsettingmprType');
var PricingspirefType = require('./types/PricingspirefType');
var PricingsettingdmemodifierType = require('./types/PricingsettingdmemodifierType');
var ProceduresetcatdetaildefType = require('./types/ProceduresetcatdetaildefType');
var ProdbenefittypeType = require('./types/ProdbenefittypeType');
var ProdbengroupType = require('./types/ProdbengroupType');
var PricingsettingauditdetailType = require('./types/PricingsettingauditdetailType');
var ProccategoryType = require('./types/ProccategoryType');
var ProccoderangecatType = require('./types/ProccoderangecatType');
var ProceduresetcatType = require('./types/ProceduresetcatType');
var ProdgovbentypeType = require('./types/ProdgovbentypeType');
var ProceduresetType = require('./types/ProceduresetType');
var ProceduresetauditdetailType = require('./types/ProceduresetauditdetailType');
var ProducerauditdetailType = require('./types/ProducerauditdetailType');
var PricingsettingType = require('./types/PricingsettingType');
var ProceduresetcatdetailType = require('./types/ProceduresetcatdetailType');
var ProducerType = require('./types/ProducerType');
var ProduceraddressType = require('./types/ProduceraddressType');
var ProductType = require('./types/ProductType');
var ProducerphoneType = require('./types/ProducerphoneType');
var ProdbennetworkschedType = require('./types/ProdbennetworkschedType');
var ProfclaimsettingType = require('./types/ProfclaimsettingType');
var ProducerexternalidType = require('./types/ProducerexternalidType');
var ProductbenefitType = require('./types/ProductbenefitType');
var ProducernoteType = require('./types/ProducernoteType');
var ProductnoteType = require('./types/ProductnoteType');
var ProductgensettingType = require('./types/ProductgensettingType');
var PromptpayschedType = require('./types/PromptpayschedType');
var ProductvalidationType = require('./types/ProductvalidationType');
var ProductauditdetailType = require('./types/ProductauditdetailType');
var PromptpayschedauditdetailType = require('./types/PromptpayschedauditdetailType');
var PromptpayschednoteType = require('./types/PromptpayschednoteType');
var PromptpayscheddetailType = require('./types/PromptpayscheddetailType');
var ProtechsplitcompauditdetailType = require('./types/ProtechsplitcompauditdetailType');
var ProvcertschedaccreditationType = require('./types/ProvcertschedaccreditationType');
var ProtechsplitcompType = require('./types/ProtechsplitcompType');
var ProvcategoryType = require('./types/ProvcategoryType');
var ProtechsplitcompdetailType = require('./types/ProtechsplitcompdetailType');
var ProvcertschedType = require('./types/ProvcertschedType');
var ProvcertschedboardcertType = require('./types/ProvcertschedboardcertType');
var ProvcertschedholdType = require('./types/ProvcertschedholdType');
var ProvcertschedcliaType = require('./types/ProvcertschedcliaType');
var ProvcertschedlicenseType = require('./types/ProvcertschedlicenseType');
var ProtechsplitcompnoteType = require('./types/ProtechsplitcompnoteType');
var ProvcertschedauditdetailType = require('./types/ProvcertschedauditdetailType');
var ProvcertschedservType = require('./types/ProvcertschedservType');
var ProvcertschedstateType = require('./types/ProvcertschedstateType');
var ProvcertscheddegreeType = require('./types/ProvcertscheddegreeType');
var ProvcertsetholdType = require('./types/ProvcertsetholdType');
var ProvcertschedexcludeproviderType = require('./types/ProvcertschedexcludeproviderType');
var ProvcertschednoteType = require('./types/ProvcertschednoteType');
var ProvcontractaffilnetpanelType = require('./types/ProvcontractaffilnetpanelType');
var ProvcontractType = require('./types/ProvcontractType');
var ProvcontractcarrierType = require('./types/ProvcontractcarrierType');
var ProvcertsetnoteType = require('./types/ProvcertsetnoteType');
var ProvcertschedtaxonomyType = require('./types/ProvcertschedtaxonomyType');
var ProvcontractauditdetailType = require('./types/ProvcontractauditdetailType');
var ProvcertsetauditdetailType = require('./types/ProvcertsetauditdetailType');
var ProvcertsetschedassignType = require('./types/ProvcertsetschedassignType');
var ProvcertsetType = require('./types/ProvcertsetType');
var ProvcontractaffiliationType = require('./types/ProvcontractaffiliationType');
var ProvcontractcarrierfilinglimitType = require('./types/ProvcontractcarrierfilinglimitType');
var ProvcontractaddressType = require('./types/ProvcontractaddressType');
var ProvcontractfilinglimitType = require('./types/ProvcontractfilinglimitType');
var ProvcontractfinancialpenType = require('./types/ProvcontractfinancialpenType');
var ProvcontractheaderType = require('./types/ProvcontractheaderType');
var ProvcontractcarriersupportteamType = require('./types/ProvcontractcarriersupportteamType');
var ProvcontractfinpenaffiliationType = require('./types/ProvcontractfinpenaffiliationType');
var ProvcontractheaderauditdetailType = require('./types/ProvcontractheaderauditdetailType');
var ProvcontractheadernoteType = require('./types/ProvcontractheadernoteType');
var ProvcontractlobfilinglimitType = require('./types/ProvcontractlobfilinglimitType');
var ProvcontractmedpolicyType = require('./types/ProvcontractmedpolicyType');
var ProvcontractownerType = require('./types/ProvcontractownerType');
var ProvcontractmembergroupType = require('./types/ProvcontractmembergroupType');
var ProvcontractlobType = require('./types/ProvcontractlobType');
var ProvcontractholdType = require('./types/ProvcontractholdType');
var ProvcontractplanType = require('./types/ProvcontractplanType');
var ProvcontractidType = require('./types/ProvcontractidType');
var ProvcontractnetworkType = require('./types/ProvcontractnetworkType');
var ProvcontractnoteType = require('./types/ProvcontractnoteType');
var ProvcontracttaxonomyType = require('./types/ProvcontracttaxonomyType');
var ProvcontracttermeventlogType = require('./types/ProvcontracttermeventlogType');
var ProvcontracttinType = require('./types/ProvcontracttinType');
var ProvcontractsupportteamType = require('./types/ProvcontractsupportteamType');
var ProvcontractlobclausecodeType = require('./types/ProvcontractlobclausecodeType');
var ProvcontractproductType = require('./types/ProvcontractproductType');
var ProvdirsuppressregionType = require('./types/ProvdirsuppressregionType');
var ProvexceptiondiagcodeType = require('./types/ProvexceptiondiagcodeType');
var ProvdirsuppressauditdetailType = require('./types/ProvdirsuppressauditdetailType');
var ProvexceptionflagType = require('./types/ProvexceptionflagType');
var ProvdirsuppressType = require('./types/ProvdirsuppressType');
var ProvexceptionfundingsourceType = require('./types/ProvexceptionfundingsourceType');
var ProvexceptionproccodeType = require('./types/ProvexceptionproccodeType');
var ProvexceptionrevcodeType = require('./types/ProvexceptionrevcodeType');
var ProviderType = require('./types/ProviderType');
var ProvideraliasType = require('./types/ProvideraliasType');
var ProvexceptionstateType = require('./types/ProvexceptionstateType');
var ProvideraccreditationType = require('./types/ProvideraccreditationType');
var ProvexceptionlobType = require('./types/ProvexceptionlobType');
var ProvideradverseactionType = require('./types/ProvideradverseactionType');
var ProvideradversebasisType = require('./types/ProvideradversebasisType');
var ProvidercertificationType = require('./types/ProvidercertificationType');
var ProvideradverseactioncodeType = require('./types/ProvideradverseactioncodeType');
var ProviderapplicationType = require('./types/ProviderapplicationType');
var ProvidercontactType = require('./types/ProvidercontactType');
var ProvexceptionplaceofserviceType = require('./types/ProvexceptionplaceofserviceType');
var ProvidercontactaddressphoneType = require('./types/ProvidercontactaddressphoneType');
var ProviderassignmenttypeType = require('./types/ProviderassignmenttypeType');
var ProvidercontactauditdetailType = require('./types/ProvidercontactauditdetailType');
var ProvidercoverType = require('./types/ProvidercoverType');
var ProviderassigntypetaxonomycodeType = require('./types/ProviderassigntypetaxonomycodeType');
var ProvidercontactelectroniccomType = require('./types/ProvidercontactelectroniccomType');
var ProviderauditdetailType = require('./types/ProviderauditdetailType');
var ProvidercontactphoneType = require('./types/ProvidercontactphoneType');
var ProvexceptionmodcodeType = require('./types/ProvexceptionmodcodeType');
var ProviderencumbranceType = require('./types/ProviderencumbranceType');
var ProviderelectroniccommType = require('./types/ProviderelectroniccommType');
var ProviderhospitalaffilType = require('./types/ProviderhospitalaffilType');
var ProviderholdType = require('./types/ProviderholdType');
var ProvidercredentialType = require('./types/ProvidercredentialType');
var ProvidercontactaddressType = require('./types/ProvidercontactaddressType');
var ProvideridType = require('./types/ProvideridType');
var ProviderliabilityinType = require('./types/ProviderliabilityinType');
var ProviderlanguageType = require('./types/ProviderlanguageType');
var ProvideridlocationType = require('./types/ProvideridlocationType');
var ProviderfedexclType = require('./types/ProviderfedexclType');
var ProviderhourType = require('./types/ProviderhourType');
var ProvidereducationType = require('./types/ProvidereducationType');
var ProviderencumbrancepaymentType = require('./types/ProviderencumbrancepaymentType');
var ProviderjudgementType = require('./types/ProviderjudgementType');
var ProviderlicenseType = require('./types/ProviderlicenseType');
var ProviderlocationaccredType = require('./types/ProviderlocationaccredType');
var ProviderlocationaffiliationType = require('./types/ProviderlocationaffiliationType');
var ProviderlocationcontactType = require('./types/ProviderlocationcontactType');
var ProviderlocaffilclinicaleffType = require('./types/ProviderlocaffilclinicaleffType');
var ProviderlocationlanguageType = require('./types/ProviderlocationlanguageType');
var ProviderlocationphoneType = require('./types/ProviderlocationphoneType');
var ProviderlocationhospaffilType = require('./types/ProviderlocationhospaffilType');
var ProviderlocationtaxonomyType = require('./types/ProviderlocationtaxonomyType');
var ProvidermalpracticeType = require('./types/ProvidermalpracticeType');
var ProviderorgaffiliationType = require('./types/ProviderorgaffiliationType');
var ProviderorgauditdetailType = require('./types/ProviderorgauditdetailType');
var ProviderorgaliasType = require('./types/ProviderorgaliasType');
var ProviderorgType = require('./types/ProviderorgType');
var ProvidernoteType = require('./types/ProvidernoteType');
var ProviderorgelectroniccommType = require('./types/ProviderorgelectroniccommType');
var ProviderorgidlocationType = require('./types/ProviderorgidlocationType');
var ProviderorglocationcliaType = require('./types/ProviderorglocationcliaType');
var ProviderorgholdType = require('./types/ProviderorgholdType');
var ProviderorgidType = require('./types/ProviderorgidType');
var ProviderorgfacilityType = require('./types/ProviderorgfacilityType');
var ProviderorglocationType = require('./types/ProviderorglocationType');
var ProviderorglocationclaimaliasType = require('./types/ProviderorglocationclaimaliasType');
var ProviderorgqueueType = require('./types/ProviderorgqueueType');
var ProviderorglocationphoneType = require('./types/ProviderorglocationphoneType');
var ProviderorgtinType = require('./types/ProviderorgtinType');
var ProviderpeerreviewType = require('./types/ProviderpeerreviewType');
var ProviderorgnoteType = require('./types/ProviderorgnoteType');
var ProviderprocessexceptionType = require('./types/ProviderprocessexceptionType');
var ProviderqueueattachmentType = require('./types/ProviderqueueattachmentType');
var ProviderpremiumdesignationType = require('./types/ProviderpremiumdesignationType');
var ProviderqueueType = require('./types/ProviderqueueType');
var ProviderrefaddressType = require('./types/ProviderrefaddressType');
var ProviderreferenceType = require('./types/ProviderreferenceType');
var ProvidertaxonomyType = require('./types/ProvidertaxonomyType');
var ProvidersanctionlicenseType = require('./types/ProvidersanctionlicenseType');
var ProvidersettingType = require('./types/ProvidersettingType');
var ProviderqueueheaderType = require('./types/ProviderqueueheaderType');
var ProvidertaxonomygroupType = require('./types/ProvidertaxonomygroupType');
var ProvidersanctionType = require('./types/ProvidersanctionType');
var ProvjudgeoffenseType = require('./types/ProvjudgeoffenseType');
var ProvidertinaddreleccommType = require('./types/ProvidertinaddreleccommType');
var ProviderworkhistoryType = require('./types/ProviderworkhistoryType');
var ProvjudgeinvestigationType = require('./types/ProvjudgeinvestigationType');
var ProvidertinaddrphoneType = require('./types/ProvidertinaddrphoneType');
var ProvspecialtycatType = require('./types/ProvspecialtycatType');
var ProvspecialtysetauditdetailType = require('./types/ProvspecialtysetauditdetailType');
var ProvspecialtysetType = require('./types/ProvspecialtysetType');
var ProvspecialtysetcatdetailType = require('./types/ProvspecialtysetcatdetailType');
var ProvspecialtysetcatdetaildefType = require('./types/ProvspecialtysetcatdetaildefType');
var ProvspecialtysetcatType = require('./types/ProvspecialtysetcatType');
var ProvtaxonomycodeassignType = require('./types/ProvtaxonomycodeassignType');
var ProvtinaddressesclaimaliasType = require('./types/ProvtinaddressesclaimaliasType');
var ProvtinstateType = require('./types/ProvtinstateType');
var ProvtaxonomyassignType = require('./types/ProvtaxonomyassignType');
var QualityandefficiencycodetypeType = require('./types/QualityandefficiencycodetypeType');
var QueueattachmentType = require('./types/QueueattachmentType');
var ProvtinType = require('./types/ProvtinType');
var ProvtinauditdetailType = require('./types/ProvtinauditdetailType');
var QueueclaimtypeType = require('./types/QueueclaimtypeType');
var ProvtinnoteType = require('./types/ProvtinnoteType');
var ProvtinqueueType = require('./types/ProvtinqueueType');
var QueuegrouproleType = require('./types/QueuegrouproleType');
var QueuegroupType = require('./types/QueuegroupType');
var QueuegroupuserType = require('./types/QueuegroupuserType');
var ProvtinaddressType = require('./types/ProvtinaddressType');
var ReferenceType = require('./types/ReferenceType');
var QueueroleType = require('./types/QueueroleType');
var QueuememgroupType = require('./types/QueuememgroupType');
var QueuenameType = require('./types/QueuenameType');
var QueueeditcodeType = require('./types/QueueeditcodeType');
var QueueprovtinidType = require('./types/QueueprovtinidType');
var QueueheaderType = require('./types/QueueheaderType');
var QueuesourcetypeType = require('./types/QueuesourcetypeType');
var QueueroutingcodeType = require('./types/QueueroutingcodeType');
var RegentitycontacteleccomType = require('./types/RegentitycontacteleccomType');
var ReferenceheaderType = require('./types/ReferenceheaderType');
var RegentityType = require('./types/RegentityType');
var RegentitycontactType = require('./types/RegentitycontactType');
var ReferencefilterchildType = require('./types/ReferencefilterchildType');
var ReferencefiltercustomType = require('./types/ReferencefiltercustomType');
var RegentitydeptType = require('./types/RegentitydeptType');
var RegentitycontactaddressType = require('./types/RegentitycontactaddressType');
var RegentitydepthourType = require('./types/RegentitydepthourType');
var RegentityauditdetailType = require('./types/RegentityauditdetailType');
var RegentitydeptcontactType = require('./types/RegentitydeptcontactType');
var RegentitydepteleccomType = require('./types/RegentitydepteleccomType');
var RegentitycontacthourType = require('./types/RegentitycontacthourType');
var RegentitycontactphoneType = require('./types/RegentitycontactphoneType');
var RegentityguardrailType = require('./types/RegentityguardrailType');
var RegentityguardrailbenefitType = require('./types/RegentityguardrailbenefitType');
var RegentitydeptphoneType = require('./types/RegentitydeptphoneType');
var RegentitydeptaddressType = require('./types/RegentitydeptaddressType');
var RegentityguardrailerisaType = require('./types/RegentityguardrailerisaType');
var RegionType = require('./types/RegionType');
var RegentityguardrailplanType = require('./types/RegentityguardrailplanType');
var RegentitynoteType = require('./types/RegentitynoteType');
var RemarkcodeType = require('./types/RemarkcodeType');
var RelationshipauditdetailType = require('./types/RelationshipauditdetailType');
var RegentityguardrailmetallicType = require('./types/RegentityguardrailmetallicType');
var RelationshiplevelcodeType = require('./types/RelationshiplevelcodeType');
var RelationshipnoteType = require('./types/RelationshipnoteType');
var RegentityguardrailgovtType = require('./types/RegentityguardrailgovtType');
var RemarkcodeaccounttypeType = require('./types/RemarkcodeaccounttypeType');
var RelationshipscheduleType = require('./types/RelationshipscheduleType');
var RemarkcodeauditdetailType = require('./types/RemarkcodeauditdetailType');
var RemarkcodebilltypeType = require('./types/RemarkcodebilltypeType');
var RemarkcodedelegType = require('./types/RemarkcodedelegType');
var RemarkcodediagType = require('./types/RemarkcodediagType');
var RemarkcodeclinicaleditresponseType = require('./types/RemarkcodeclinicaleditresponseType');
var RelationshipschedulelevelType = require('./types/RelationshipschedulelevelType');
var RemarkcodedrcType = require('./types/RemarkcodedrcType');
var RemarkcodeexpenseType = require('./types/RemarkcodeexpenseType');
var RemarkcodeclaimeditcodeType = require('./types/RemarkcodeclaimeditcodeType');
var RemarkcodeinternaladjustrsncdType = require('./types/RemarkcodeinternaladjustrsncdType');
var RemarkcodebenefitType = require('./types/RemarkcodebenefitType');
var RemarkcodepricingcompType = require('./types/RemarkcodepricingcompType');
var RemarkcodepricingmethodtypeType = require('./types/RemarkcodepricingmethodtypeType');
var RemarkcodemedpolicyruleType = require('./types/RemarkcodemedpolicyruleType');
var RemarkcodeorcType = require('./types/RemarkcodeorcType');
var RemarkcodeprocType = require('./types/RemarkcodeprocType');
var RemarkcodeprovdesignationType = require('./types/RemarkcodeprovdesignationType');
var RemarkcoderevenueType = require('./types/RemarkcoderevenueType');
var RemarkcodemodifiercodeType = require('./types/RemarkcodemodifiercodeType');
var RemarkcodescheduleauditdetailType = require('./types/RemarkcodescheduleauditdetailType');
var RemarkcodesurchargeType = require('./types/RemarkcodesurchargeType');
var RemarkcodepoType = require('./types/RemarkcodepoType');
var RemarkcodesitusstateType = require('./types/RemarkcodesitusstateType');
var RemarkcodescheduleType = require('./types/RemarkcodescheduleType');
var RemarkcodeschedbrandType = require('./types/RemarkcodeschedbrandType');
var RevenuecatrangeType = require('./types/RevenuecatrangeType');
var RevenuecategoryType = require('./types/RevenuecategoryType');
var RevenuebasefileuploaddetailType = require('./types/RevenuebasefileuploaddetailType');
var RemarkcodeschedulenoteType = require('./types/RemarkcodeschedulenoteType');
var RemarkcodescheduleprovType = require('./types/RemarkcodescheduleprovType');
var RemarkcodetriggerType = require('./types/RemarkcodetriggerType');
var RevenuesetauditdetailType = require('./types/RevenuesetauditdetailType');
var RemarkcodevendorremarkcodeType = require('./types/RemarkcodevendorremarkcodeType');
var RhceditcodeassignType = require('./types/RhceditcodeassignType');
var ReportexecutionType = require('./types/ReportexecutionType');
var RevenuesetcatdetailType = require('./types/RevenuesetcatdetailType');
var RevenuesetcatType = require('./types/RevenuesetcatType');
var RevenuecodeType = require('./types/RevenuecodeType');
var RevenuesetcatdetaildefType = require('./types/RevenuesetcatdetaildefType');
var RevenuebasefileuploadheaderType = require('./types/RevenuebasefileuploadheaderType');
var RevenuesetType = require('./types/RevenuesetType');
var RiskarrangecontractdetailType = require('./types/RiskarrangecontractdetailType');
var RiskarrangecontractcarrierType = require('./types/RiskarrangecontractcarrierType');
var RiskarrangecontractdelegType = require('./types/RiskarrangecontractdelegType');
var RiskarrangecontractaffilprovType = require('./types/RiskarrangecontractaffilprovType');
var RiskarrangecontractType = require('./types/RiskarrangecontractType');
var RiskarrangecontractdofrType = require('./types/RiskarrangecontractdofrType');
var RiskarrangecontractholdType = require('./types/RiskarrangecontractholdType');
var RiskarrangecontractlobType = require('./types/RiskarrangecontractlobType');
var RiskarrangecontractnoteType = require('./types/RiskarrangecontractnoteType');
var RiskarrangecontractproductType = require('./types/RiskarrangecontractproductType');
var RiderbenefittypestackType = require('./types/RiderbenefittypestackType');
var RiskarrangecontrdelegfctType = require('./types/RiskarrangecontrdelegfctType');
var RiskarrangecontractentityType = require('./types/RiskarrangecontractentityType');
var RuleType = require('./types/RuleType');
var RoomandboardrevType = require('./types/RoomandboardrevType');
var RiskarrangecontractplanType = require('./types/RiskarrangecontractplanType');
var RulecriterionType = require('./types/RulecriterionType');
var RiskarrangecontrauditdetailType = require('./types/RiskarrangecontrauditdetailType');
var RuleassignType = require('./types/RuleassignType');
var RulelogheaderType = require('./types/RulelogheaderType');
var RulelogType = require('./types/RulelogType');
var RoutingcodeType = require('./types/RoutingcodeType');
var RvuType = require('./types/RvuType');
var RuleservicepropertyType = require('./types/RuleservicepropertyType');
var RuleserviceType = require('./types/RuleserviceType');
var RulesetType = require('./types/RulesetType');
var RvufileuploadheaderType = require('./types/RvufileuploadheaderType');
var SalesofficeType = require('./types/SalesofficeType');
var RvufileuploadstagingType = require('./types/RvufileuploadstagingType');
var ScheduledjobType = require('./types/ScheduledjobType');
var RxclaimsettingType = require('./types/RxclaimsettingType');
var ScheduledjoblockauditdetailType = require('./types/ScheduledjoblockauditdetailType');
var ScheduledjobauditdetailType = require('./types/ScheduledjobauditdetailType');
var SalesofficeauditdetailType = require('./types/SalesofficeauditdetailType');
var SalesofficenoteType = require('./types/SalesofficenoteType');
var SalesofficeexternalidType = require('./types/SalesofficeexternalidType');
var ScheduledjoblockType = require('./types/ScheduledjoblockType');
var ScmbenecodebilltypecategoryType = require('./types/ScmbenecodebilltypecategoryType');
var ScmbenecodeType = require('./types/ScmbenecodeType');
var ScmType = require('./types/ScmType');
var SchemaVersionType = require('./types/SchemaVersionType');
var ScmbenecodemodifierType = require('./types/ScmbenecodemodifierType');
var ScmbenecodeposcategoryType = require('./types/ScmbenecodeposcategoryType');
var ScmbenecodediagcategoryType = require('./types/ScmbenecodediagcategoryType');
var ScmbenecodeprovcategoryType = require('./types/ScmbenecodeprovcategoryType');
var ScmbenecoderevenuecategoryType = require('./types/ScmbenecoderevenuecategoryType');
var ScmbenecodeproccategoryType = require('./types/ScmbenecodeproccategoryType');
var ScmtoservcompvalidationType = require('./types/ScmtoservcompvalidationType');
var ScmvalidationType = require('./types/ScmvalidationType');
var ServcompauditdetailType = require('./types/ServcompauditdetailType');
var ServcompnoteType = require('./types/ServcompnoteType');
var ServcompservdetailbilltypeType = require('./types/ServcompservdetailbilltypeType');
var ServcompType = require('./types/ServcompType');
var ServcompservdetailType = require('./types/ServcompservdetailType');
var ServcompservType = require('./types/ServcompservType');
var ServcompservdetaildiagcodeType = require('./types/ServcompservdetaildiagcodeType');
var ServcompservdetaildiagType = require('./types/ServcompservdetaildiagType');
var ServcompservdetailbilltypecodeType = require('./types/ServcompservdetailbilltypecodeType');
var ServcompservdetailposcodeType = require('./types/ServcompservdetailposcodeType');
var ScmnoteType = require('./types/ScmnoteType');
var ServcompservdetailpoType = require('./types/ServcompservdetailpoType');
var ServcompservdetailrevenueType = require('./types/ServcompservdetailrevenueType');
var ServcompservdetailprovcodeType = require('./types/ServcompservdetailprovcodeType');
var ServcompservdetailprocType = require('./types/ServcompservdetailprocType');
var ServcompservdetailprovspltyType = require('./types/ServcompservdetailprovspltyType');
var ServcompservdetailrevcodeType = require('./types/ServcompservdetailrevcodeType');
var ServcompvalidationType = require('./types/ServcompvalidationType');
var ServiceareaType = require('./types/ServiceareaType');
var ServiceareanoteType = require('./types/ServiceareanoteType');
var ServcompservdetailproccodeType = require('./types/ServcompservdetailproccodeType');
var ServicearearegionType = require('./types/ServicearearegionType');
var ServiceareapostalType = require('./types/ServiceareapostalType');
var ServiceplanType = require('./types/ServiceplanType');
var ServicecatauditdetailType = require('./types/ServicecatauditdetailType');
var ServiceplanauditdetailType = require('./types/ServiceplanauditdetailType');
var ServiceplanexternalidType = require('./types/ServiceplanexternalidType');
var ServiceplanfunctionType = require('./types/ServiceplanfunctionType');
var ServiceplanfunctioncodeType = require('./types/ServiceplanfunctioncodeType');
var ServicetypecodeType = require('./types/ServicetypecodeType');
var SettingsnoteType = require('./types/SettingsnoteType');
var SettingsnotedetailType = require('./types/SettingsnotedetailType');
var StatmodifiercompType = require('./types/StatmodifiercompType');
var SettingsauditdetailType = require('./types/SettingsauditdetailType');
var StatmodifiercompcodeType = require('./types/StatmodifiercompcodeType');
var StatmodifiercompnoteType = require('./types/StatmodifiercompnoteType');
var StatmodifiercompauditdetailType = require('./types/StatmodifiercompauditdetailType');
var SubpayrollfrequencyType = require('./types/SubpayrollfrequencyType');
var SubsacctsettingType = require('./types/SubsacctsettingType');
var SubsaffiliationType = require('./types/SubsaffiliationType');
var Subsaffiliation834HistType = require('./types/Subsaffiliation834HistType');
var SubsaffiliationexternalidType = require('./types/SubsaffiliationexternalidType');
var SubsaffiliationpopbillingprefType = require('./types/SubsaffiliationpopbillingprefType');
var SubsaffiliationattributeType = require('./types/SubsaffiliationattributeType');
var SubsbeneficiarymemType = require('./types/SubsbeneficiarymemType');
var SubsbeneficiarypartyType = require('./types/SubsbeneficiarypartyType');
var SubsbeneficiaryType = require('./types/SubsbeneficiaryType');
var ServcompservdetailmodifierType = require('./types/ServcompservdetailmodifierType');
var ServcomptempadjudType = require('./types/ServcomptempadjudType');
var SubsjobType = require('./types/SubsjobType');
var ServiceareaauditdetailType = require('./types/ServiceareaauditdetailType');
var SubstscheduleType = require('./types/SubstscheduleType');
var SubsmginfoType = require('./types/SubsmginfoType');
var SuperbillclaimsettingType = require('./types/SuperbillclaimsettingType');
var SubstscheduleletterType = require('./types/SubstscheduleletterType');
var SupportteamaddressType = require('./types/SupportteamaddressType');
var SupportteamphoneType = require('./types/SupportteamphoneType');
var SurchargeschedexcludebilltypeType = require('./types/SurchargeschedexcludebilltypeType');
var SupportteameleccommType = require('./types/SupportteameleccommType');
var SupportteamType = require('./types/SupportteamType');
var SurchargeschednoteType = require('./types/SurchargeschednoteType');
var SurchargeschedauditdetailType = require('./types/SurchargeschedauditdetailType');
var SupportteamauditdetailType = require('./types/SupportteamauditdetailType');
var SurchargeschedexcludeclaimtypeType = require('./types/SurchargeschedexcludeclaimtypeType');
var SupportteamaddressphoneType = require('./types/SupportteamaddressphoneType');
var SurchargeschedrateplanType = require('./types/SurchargeschedrateplanType');
var SurchargeschedexcludepoType = require('./types/SurchargeschedexcludepoType');
var SurchargeschedprovtinType = require('./types/SurchargeschedprovtinType');
var SysSetEmailGrpType = require('./types/SysSetEmailGrpType');
var SurchargeschedrateexcludegovtType = require('./types/SurchargeschedrateexcludegovtType');
var SurchargeschedType = require('./types/SurchargeschedType');
var SurchargeschedrateType = require('./types/SurchargeschedrateType');
var SysKeyType = require('./types/SysKeyType');
var SurchargeschedratebenefitType = require('./types/SurchargeschedratebenefitType');
var SysSetFlSyType = require('./types/SysSetFlSyType');
var SysErrLogType = require('./types/SysErrLogType');
var SysSetRptType = require('./types/SysSetRptType');
var SysSetSqlType = require('./types/SysSetSqlType');
var SysSetPrgTblType = require('./types/SysSetPrgTblType');
var SysaddressType = require('./types/SysaddressType');
var SysSqlLogType = require('./types/SysSqlLogType');
var SysaddressauditdetailType = require('./types/SysaddressauditdetailType');
var SysSetFramwrkType = require('./types/SysSetFramwrkType');
var SysfinsettingauditdetailType = require('./types/SysfinsettingauditdetailType');
var SysaddressnoteType = require('./types/SysaddressnoteType');
var SysfinsettingType = require('./types/SysfinsettingType');
var SysfinsettingfinattribschedarType = require('./types/SysfinsettingfinattribschedarType');
var SysaddresstypeassignType = require('./types/SysaddresstypeassignType');
var SysfinsettingreportutilType = require('./types/SysfinsettingreportutilType');
var SysfinsettingnoteType = require('./types/SysfinsettingnoteType');
var SysfinsettingservplanType = require('./types/SysfinsettingservplanType');
var SysfinsettingruleservType = require('./types/SysfinsettingruleservType');
var SysfinsettingfinattribschedapType = require('./types/SysfinsettingfinattribschedapType');
var SysbillingdefaultvalueType = require('./types/SysbillingdefaultvalueType');
var SysfinsettingbenefittypeType = require('./types/SysfinsettingbenefittypeType');
var SysfinsettingfinattribschedType = require('./types/SysfinsettingfinattribschedType');
var SysmemgroupsettingType = require('./types/SysmemgroupsettingType');
var SysfinsettingsurchargeType = require('./types/SysfinsettingsurchargeType');
var SysfinsettingutilplanType = require('./types/SysfinsettingutilplanType');
var SysphonenumberType = require('./types/SysphonenumberType');
var SysphonenumberlanguageType = require('./types/SysphonenumberlanguageType');
var SysphonenumbernoteType = require('./types/SysphonenumbernoteType');
var SysphonenumberauditdetailType = require('./types/SysphonenumberauditdetailType');
var SysfinsettinginterestType = require('./types/SysfinsettinginterestType');
var SystemTblType = require('./types/SystemTblType');
var SystemactuarialvalueType = require('./types/SystemactuarialvalueType');
var SystemcontactaddressType = require('./types/SystemcontactaddressType');
var SystemcontactnameType = require('./types/SystemcontactnameType');
var SystemcontactphoneType = require('./types/SystemcontactphoneType');
var SystemactivitylogType = require('./types/SystemactivitylogType');
var SystemcontactdepartmentType = require('./types/SystemcontactdepartmentType');
var SystemcorpholidayType = require('./types/SystemcorpholidayType');
var SystemdepartmenthourType = require('./types/SystemdepartmenthourType');
var SystemdepartmentphoneType = require('./types/SystemdepartmentphoneType');
var SystemdepartmentaddressType = require('./types/SystemdepartmentaddressType');
var SystemediresponseType = require('./types/SystemediresponseType');
var SystemediresponsestatusType = require('./types/SystemediresponsestatusType');
var SystemedisettingType = require('./types/SystemedisettingType');
var SystemsettingsrestclientType = require('./types/SystemsettingsrestclientType');
var SystemediresponseloopType = require('./types/SystemediresponseloopType');
var SystempermitType = require('./types/SystempermitType');
var SystemsettingstemporaryType = require('./types/SystemsettingstemporaryType');
var SystemfederalType = require('./types/SystemfederalType');
var SystemmsaorderofacctType = require('./types/SystemmsaorderofacctType');
var SystemgeneralsettingType = require('./types/SystemgeneralsettingType');
var SystemmsasettingType = require('./types/SystemmsasettingType');
var SystemstateType = require('./types/SystemstateType');
var SystemworkhourType = require('./types/SystemworkhourType');
var TaxonomybasefileuploaddetailType = require('./types/TaxonomybasefileuploaddetailType');
var TaxonomyaccreditationType = require('./types/TaxonomyaccreditationType');
var TaxonomycodeType = require('./types/TaxonomycodeType');
var ThresholdparameterdetailType = require('./types/ThresholdparameterdetailType');
var TaxonomybasefileuploadheaderType = require('./types/TaxonomybasefileuploadheaderType');
var TimelyfilingschedType = require('./types/TimelyfilingschedType');
var TimelyfilingscheddetailType = require('./types/TimelyfilingscheddetailType');
var TradingpartnerconfigType = require('./types/TradingpartnerconfigType');
var TaxtypecodeType = require('./types/TaxtypecodeType');
var SystemsettingsauditdetailType = require('./types/SystemsettingsauditdetailType');
var TransferpricingpatientstatusType = require('./types/TransferpricingpatientstatusType');
var ThresholdparameterType = require('./types/ThresholdparameterType');
var TimelyfilingschednoteType = require('./types/TimelyfilingschednoteType');
var ToothType = require('./types/ToothType');
var UcrbasefileuploadheaderType = require('./types/UcrbasefileuploadheaderType');
var UcrcompauditdetailType = require('./types/UcrcompauditdetailType');
var TimelyfilingschedauditdetailType = require('./types/TimelyfilingschedauditdetailType');
var UcrcompholdType = require('./types/UcrcompholdType');
var UcrcompdetailprofType = require('./types/UcrcompdetailprofType');
var UcrcompType = require('./types/UcrcompType');
var UmauthproviderType = require('./types/UmauthproviderType');
var UcrcompdetailType = require('./types/UcrcompdetailType');
var UcrcompnoteType = require('./types/UcrcompnoteType');
var UcrbasefileuploadstagingType = require('./types/UcrbasefileuploadstagingType');
var UmauthType = require('./types/UmauthType');
var UmauthfacilitytypeType = require('./types/UmauthfacilitytypeType');
var UmauthfacilitydecisionType = require('./types/UmauthfacilitydecisionType');
var UmauthdiagnosisType = require('./types/UmauthdiagnosisType');
var UmauthbeddayrangeType = require('./types/UmauthbeddayrangeType');
var UmauthproviderroletypeType = require('./types/UmauthproviderroletypeType');
var UmauthserviceType = require('./types/UmauthserviceType');
var UmauthservicefacilityType = require('./types/UmauthservicefacilityType');
var UmreferralauditdetailType = require('./types/UmreferralauditdetailType');
var UmreferralproviderType = require('./types/UmreferralproviderType');
var UmreferraldiagnosisType = require('./types/UmreferraldiagnosisType');
var UmreferralprovideraltidType = require('./types/UmreferralprovideraltidType');
var UmauthservicedecisionType = require('./types/UmauthservicedecisionType');
var UmauthauditdetailType = require('./types/UmauthauditdetailType');
var UmauthservicenonfacilType = require('./types/UmauthservicenonfacilType');
var UseractivityType = require('./types/UseractivityType');
var UmauthprovideraltidType = require('./types/UmauthprovideraltidType');
var UmreferralserviceType = require('./types/UmreferralserviceType');
var UseractivitylogType = require('./types/UseractivitylogType');
var UseraddressType = require('./types/UseraddressType');
var UserauditdetailType = require('./types/UserauditdetailType');
var UmreferralproviderroletypeType = require('./types/UmreferralproviderroletypeType');
var UmreferralType = require('./types/UmreferralType');
var UserclaimcancelcodeType = require('./types/UserclaimcancelcodeType');
var UserclaimcancelcodeauditdetailType = require('./types/UserclaimcancelcodeauditdetailType');
var UsergroupType = require('./types/UsergroupType');
var UsertableType = require('./types/UsertableType');
var UsergroupauditdetailType = require('./types/UsergroupauditdetailType');
var UsergroupuserType = require('./types/UsergroupuserType');
var UsersplitclaimcodeType = require('./types/UsersplitclaimcodeType');
var UsersplitclaimcodeauditdetailType = require('./types/UsersplitclaimcodeauditdetailType');
var UtilizationplanType = require('./types/UtilizationplanType');
var UsergrouppermissiongroupType = require('./types/UsergrouppermissiongroupType');
var UsertelephoneType = require('./types/UsertelephoneType');
var UtilizationplansettingType = require('./types/UtilizationplansettingType');
var UserdatasecuritygroupType = require('./types/UserdatasecuritygroupType');
var UtilizationplanauditdetailType = require('./types/UtilizationplanauditdetailType');
var UsersettingType = require('./types/UsersettingType');
var UserqualitysettingType = require('./types/UserqualitysettingType');
var UtilizationplanexternalidType = require('./types/UtilizationplanexternalidType');
var VendorType = require('./types/VendorType');
var VariablecontentType = require('./types/VariablecontentType');
var VendorauditdetailType = require('./types/VendorauditdetailType');
var VendoraccountType = require('./types/VendoraccountType');
var VendorcontactdepartmentType = require('./types/VendorcontactdepartmentType');
var VendorcontactnameType = require('./types/VendorcontactnameType');
var VendordepartmentaddressType = require('./types/VendordepartmentaddressType');
var VendorcontactaddressType = require('./types/VendorcontactaddressType');
var VendordepartmenthourType = require('./types/VendordepartmenthourType');
var VendorpackageucrType = require('./types/VendorpackageucrType');
var VendorcontactphoneType = require('./types/VendorcontactphoneType');
var VendordepartmentphoneType = require('./types/VendordepartmentphoneType');
var VendorpermitType = require('./types/VendorpermitType');
var VendornoteType = require('./types/VendornoteType');
var VendorworkhourType = require('./types/VendorworkhourType');
var VendorremarkcodeType = require('./types/VendorremarkcodeType');
var ZipcodeType = require('./types/ZipcodeType');
var ZipcodefileuploadheaderType = require('./types/ZipcodefileuploadheaderType');
var Zipplus4Type = require('./types/Zipplus4Type');
var ZipcodefileuploaddetailType = require('./types/ZipcodefileuploaddetailType');
var resolveMap = require('./resolve-map');
var types = require('./types');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLSchema = GraphQL.GraphQLSchema;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLInt = GraphQL.GraphQLInt;
var registerType = resolveMap.registerType;

var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',

        fields: function getRootQueryFields() {
            return {
                acctbalap: {
                    type: AcctbalapType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Acctbalap')
                },

                acctbal: {
                    type: AcctbalType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Acctbal')
                },

                acctbalar: {
                    type: AcctbalarType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Acctbalar')
                },

                acctbalarhx: {
                    type: AcctbalarhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Acctbalarhx')
                },

                acctbalauditdetail: {
                    type: AcctbalauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Acctbalauditdetail')
                },

                acctbalfamacsclaimhx: {
                    type: AcctbalfamacsclaimhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Acctbalfamacsclaimhx')
                },

                acctbalmemacsclaimhx: {
                    type: AcctbalmemacsclaimhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Acctbalmemacsclaimhx')
                },

                acctbalauditdetailhx: {
                    type: AcctbalauditdetailhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Acctbalauditdetailhx')
                },

                acctbalmemacsclaim: {
                    type: AcctbalmemacsclaimType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Acctbalmemacsclaim')
                },

                acctbalhx: {
                    type: AcctbalhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Acctbalhx')
                },

                acctbalfamacspthx: {
                    type: AcctbalfamacspthxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Acctbalfamacspthx')
                },

                acctbalindcarryoverhx: {
                    type: AcctbalindcarryoverhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Acctbalindcarryoverhx')
                },

                acctbalfamacsclaim: {
                    type: AcctbalfamacsclaimType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Acctbalfamacsclaim')
                },

                acctbalmemacspt: {
                    type: AcctbalmemacsptType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Acctbalmemacspt')
                },

                acctbalaphx: {
                    type: AcctbalaphxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Acctbalaphx')
                },

                acctbalfamacspt: {
                    type: AcctbalfamacsptType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Acctbalfamacspt')
                },

                acctbalindcarryover: {
                    type: AcctbalindcarryoverType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Acctbalindcarryover')
                },

                acctbalnotedetail: {
                    type: AcctbalnotedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Acctbalnotedetail')
                },

                acctbalnotedetailhx: {
                    type: AcctbalnotedetailhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Acctbalnotedetailhx')
                },

                acctbalnote: {
                    type: AcctbalnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Acctbalnote')
                },

                acctbalmemacspthx: {
                    type: AcctbalmemacspthxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Acctbalmemacspthx')
                },

                acctbalnotehx: {
                    type: AcctbalnotehxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Acctbalnotehx')
                },

                acctbalprefundaphx: {
                    type: AcctbalprefundaphxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Acctbalprefundaphx')
                },

                acctbalprefundap: {
                    type: AcctbalprefundapType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Acctbalprefundap')
                },

                acctbaltimeline: {
                    type: AcctbaltimelineType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Acctbaltimeline')
                },

                acctbalprefundarhx: {
                    type: AcctbalprefundarhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Acctbalprefundarhx')
                },

                acctbaltimelinehx: {
                    type: AcctbaltimelinehxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Acctbaltimelinehx')
                },

                acctbalpurse: {
                    type: AcctbalpurseType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Acctbalpurse')
                },

                acctbalpursehx: {
                    type: AcctbalpursehxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Acctbalpursehx')
                },

                accumbypass: {
                    type: AccumbypassType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumbypass')
                },

                acctbalprefundar: {
                    type: AcctbalprefundarType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Acctbalprefundar')
                },

                accumbypassaudit: {
                    type: AccumbypassauditType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumbypassaudit')
                },

                accumbypassplan: {
                    type: AccumbypassplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumbypassplan')
                },

                accumbypasstx: {
                    type: AccumbypasstxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumbypasstx')
                },

                accumcobreserve: {
                    type: AccumcobreserveType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumcobreserve')
                },

                accumcobreservetx: {
                    type: AccumcobreservetxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumcobreservetx')
                },

                accumbypasstxsuppress: {
                    type: AccumbypasstxsuppressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumbypasstxsuppress')
                },

                accumdeductfamtxsuppress: {
                    type: AccumdeductfamtxsuppressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumdeductfamtxsuppress')
                },

                accumdeductfamaudit: {
                    type: AccumdeductfamauditType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumdeductfamaudit')
                },

                accumdeductfamtx: {
                    type: AccumdeductfamtxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumdeductfamtx')
                },

                accumdeductindiv: {
                    type: AccumdeductindivType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumdeductindiv')
                },

                accumdeductfam: {
                    type: AccumdeductfamType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumdeductfam')
                },

                accumdeductindivaudit: {
                    type: AccumdeductindivauditType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumdeductindivaudit')
                },

                accumdeductindivtx: {
                    type: AccumdeductindivtxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumdeductindivtx')
                },

                accumdeductindivtxsuppress: {
                    type: AccumdeductindivtxsuppressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumdeductindivtxsuppress')
                },

                accumerror: {
                    type: AccumerrorType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumerror')
                },

                accumdeductindivplan: {
                    type: AccumdeductindivplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumdeductindivplan')
                },

                accummaxfamaudit: {
                    type: AccummaxfamauditType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accummaxfamaudit')
                },

                accumerrornote: {
                    type: AccumerrornoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumerrornote')
                },

                accumlockauditdetail: {
                    type: AccumlockauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumlockauditdetail')
                },

                accumdeductfamplan: {
                    type: AccumdeductfamplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumdeductfamplan')
                },

                accumerrorconfig: {
                    type: AccumerrorconfigType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumerrorconfig')
                },

                accummaxfam: {
                    type: AccummaxfamType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accummaxfam')
                },

                accummaxfamplan: {
                    type: AccummaxfamplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accummaxfamplan')
                },

                accummaxindiv: {
                    type: AccummaxindivType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accummaxindiv')
                },

                accummaxfamtx: {
                    type: AccummaxfamtxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accummaxfamtx')
                },

                accumoopfamtx: {
                    type: AccumoopfamtxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumoopfamtx')
                },

                accummaxindivplan: {
                    type: AccummaxindivplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accummaxindivplan')
                },

                accummaxindivaudit: {
                    type: AccummaxindivauditType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accummaxindivaudit')
                },

                accummaxindivtx: {
                    type: AccummaxindivtxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accummaxindivtx')
                },

                accummaxfamtxsuppress: {
                    type: AccummaxfamtxsuppressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accummaxfamtxsuppress')
                },

                accumoopfamtxsuppress: {
                    type: AccumoopfamtxsuppressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumoopfamtxsuppress')
                },

                accumoopfam: {
                    type: AccumoopfamType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumoopfam')
                },

                accumoopindiv: {
                    type: AccumoopindivType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumoopindiv')
                },

                accumoopfamaudit: {
                    type: AccumoopfamauditType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumoopfamaudit')
                },

                accummaxindivtxsuppress: {
                    type: AccummaxindivtxsuppressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accummaxindivtxsuppress')
                },

                accumoopindivtx: {
                    type: AccumoopindivtxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumoopindivtx')
                },

                accumoopindivplan: {
                    type: AccumoopindivplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumoopindivplan')
                },

                accumoopfamplan: {
                    type: AccumoopfamplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumoopfamplan')
                },

                accumoopindivaudit: {
                    type: AccumoopindivauditType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumoopindivaudit')
                },

                accumoopindivtxsuppress: {
                    type: AccumoopindivtxsuppressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumoopindivtxsuppress')
                },

                accumumauthbedday: {
                    type: AccumumauthbeddayType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumumauthbedday')
                },

                accumumauthbeddayrange: {
                    type: AccumumauthbeddayrangeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumumauthbeddayrange')
                },

                accumumauthbeddaytx: {
                    type: AccumumauthbeddaytxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumumauthbeddaytx')
                },

                accumulatorlock: {
                    type: AccumulatorlockType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumulatorlock')
                },

                accumumauthoutpatient: {
                    type: AccumumauthoutpatientType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumumauthoutpatient')
                },

                accumumauthservicenonfacil: {
                    type: AccumumauthservicenonfacilType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumumauthservicenonfacil')
                },

                accumumauthoutpatienttx: {
                    type: AccumumauthoutpatienttxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumumauthoutpatienttx')
                },

                accumumreferraltx: {
                    type: AccumumreferraltxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumumreferraltx')
                },

                accumumreferral: {
                    type: AccumumreferralType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Accumumreferral')
                },

                adjudschedauditdetail: {
                    type: AdjudschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Adjudschedauditdetail')
                },

                adaclaimsetting: {
                    type: AdaclaimsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Adaclaimsetting')
                },

                adjudschedlettercode: {
                    type: AdjudschedlettercodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Adjudschedlettercode')
                },

                adjudscheddupclaim: {
                    type: AdjudscheddupclaimType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Adjudscheddupclaim')
                },

                adjudschedmodifier: {
                    type: AdjudschedmodifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Adjudschedmodifier')
                },

                adjudschedgencode: {
                    type: AdjudschedgencodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Adjudschedgencode')
                },

                adjudschedpendtemplate: {
                    type: AdjudschedpendtemplateType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Adjudschedpendtemplate')
                },

                adjudschedpendtemplatevc: {
                    type: AdjudschedpendtemplatevcType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Adjudschedpendtemplatevc')
                },

                adjudschedoverridecode: {
                    type: AdjudschedoverridecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Adjudschedoverridecode')
                },

                adjudscheddenycode: {
                    type: AdjudscheddenycodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Adjudscheddenycode')
                },

                adjudschedmemberdiff: {
                    type: AdjudschedmemberdiffType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Adjudschedmemberdiff')
                },

                adjudschedheader: {
                    type: AdjudschedheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Adjudschedheader')
                },

                adjudschedproviderdiff: {
                    type: AdjudschedproviderdiffType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Adjudschedproviderdiff')
                },

                adjudschedsettingsaccount: {
                    type: AdjudschedsettingsaccountType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Adjudschedsettingsaccount')
                },

                adjudschedroutecode: {
                    type: AdjudschedroutecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Adjudschedroutecode')
                },

                adjudschedrelcoderestriction: {
                    type: AdjudschedrelcoderestrictionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Adjudschedrelcoderestriction')
                },

                adjudschedtpldiagcategory: {
                    type: AdjudschedtpldiagcategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Adjudschedtpldiagcategory')
                },

                adjudschedrx: {
                    type: AdjudschedrxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Adjudschedrx')
                },

                adjudschedsettingssystem: {
                    type: AdjudschedsettingssystemType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Adjudschedsettingssystem')
                },

                agegenderschednote: {
                    type: AgegenderschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Agegenderschednote')
                },

                adjudschedsettingsmemgroup: {
                    type: AdjudschedsettingsmemgroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Adjudschedsettingsmemgroup')
                },

                altartransactiondesc: {
                    type: AltartransactiondescType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Altartransactiondesc')
                },

                adjudschednote: {
                    type: AdjudschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Adjudschednote')
                },

                adjudschedrevenuecategory: {
                    type: AdjudschedrevenuecategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Adjudschedrevenuecategory')
                },

                agegendersched: {
                    type: AgegenderschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Agegendersched')
                },

                ambulancecompdetailregion: {
                    type: AmbulancecompdetailregionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ambulancecompdetailregion')
                },

                agegenderschedauditdetail: {
                    type: AgegenderschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Agegenderschedauditdetail')
                },

                adjudschedulecob: {
                    type: AdjudschedulecobType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Adjudschedulecob')
                },

                adjudschedule: {
                    type: AdjudscheduleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Adjudschedule')
                },

                ambulancecompdetailmod: {
                    type: AmbulancecompdetailmodType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ambulancecompdetailmod')
                },

                adjudschedsettingsbenefit: {
                    type: AdjudschedsettingsbenefitType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Adjudschedsettingsbenefit')
                },

                ambulancecompauditdetail: {
                    type: AmbulancecompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ambulancecompauditdetail')
                },

                ambulancecomp: {
                    type: AmbulancecompType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ambulancecomp')
                },

                ambulancecompnote: {
                    type: AmbulancecompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ambulancecompnote')
                },

                ambulancecompdetail: {
                    type: AmbulancecompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ambulancecompdetail')
                },

                ambulancecomphold: {
                    type: AmbulancecompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ambulancecomphold')
                },

                anesthesiacompauditdetail: {
                    type: AnesthesiacompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Anesthesiacompauditdetail')
                },

                anesthesiacomp: {
                    type: AnesthesiacompType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Anesthesiacomp')
                },

                ambulancemodifier: {
                    type: AmbulancemodifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ambulancemodifier')
                },

                anesthesiacompdetailmod: {
                    type: AnesthesiacompdetailmodType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Anesthesiacompdetailmod')
                },

                anesthesiacompnote: {
                    type: AnesthesiacompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Anesthesiacompnote')
                },

                anesthesiaphysicalstatusmod: {
                    type: AnesthesiaphysicalstatusmodType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Anesthesiaphysicalstatusmod')
                },

                anesthesiacomphold: {
                    type: AnesthesiacompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Anesthesiacomphold')
                },

                anesthesiacompdetail: {
                    type: AnesthesiacompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Anesthesiacompdetail')
                },

                apccodedetail: {
                    type: ApccodedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Apccodedetail')
                },

                anesthmodifiercompassign: {
                    type: AnesthmodifiercompassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Anesthmodifiercompassign')
                },

                apcbasefileuploaddetail: {
                    type: ApcbasefileuploaddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Apcbasefileuploaddetail')
                },

                apccodeheader: {
                    type: ApccodeheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Apccodeheader')
                },

                apcprocgrouper: {
                    type: ApcprocgrouperType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Apcprocgrouper')
                },

                anesthesiamodifier: {
                    type: AnesthesiamodifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Anesthesiamodifier')
                },

                apcbasefileuploadheader: {
                    type: ApcbasefileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Apcbasefileuploadheader')
                },

                apidefaultpricingcomporder: {
                    type: ApidefaultpricingcomporderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Apidefaultpricingcomporder')
                },

                aptransaction: {
                    type: AptransactionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Aptransaction')
                },

                approveddestination: {
                    type: ApproveddestinationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Approveddestination')
                },

                apgenerationresponse: {
                    type: ApgenerationresponseType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Apgenerationresponse')
                },

                aptransactionattrib: {
                    type: AptransactionattribType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Aptransactionattrib')
                },

                aptransactionattribsetglstring: {
                    type: AptransactionattribsetglstringType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Aptransactionattribsetglstring')
                },

                aptransactionattribtag: {
                    type: AptransactionattribtagType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Aptransactionattribtag')
                },

                aptransactionaccumsnapshot: {
                    type: AptransactionaccumsnapshotType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Aptransactionaccumsnapshot')
                },

                aptransactionauditdetail: {
                    type: AptransactionauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Aptransactionauditdetail')
                },

                aptransactioninterest: {
                    type: AptransactioninterestType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Aptransactioninterest')
                },

                aptransactiondetail: {
                    type: AptransactiondetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Aptransactiondetail')
                },

                aptransactionattribset: {
                    type: AptransactionattribsetType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Aptransactionattribset')
                },

                aptransactionoprecover: {
                    type: AptransactionoprecoverType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Aptransactionoprecover')
                },

                aptransactionrecipient: {
                    type: AptransactionrecipientType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Aptransactionrecipient')
                },

                aptransactionreduction: {
                    type: AptransactionreductionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Aptransactionreduction')
                },

                armax: {
                    type: ArmaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Armax')
                },

                aptransactionop: {
                    type: AptransactionopType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Aptransactionop')
                },

                aptransactionnote: {
                    type: AptransactionnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Aptransactionnote')
                },

                aptransactionsurcharge: {
                    type: AptransactionsurchargeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Aptransactionsurcharge')
                },

                aptransactiontag: {
                    type: AptransactiontagType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Aptransactiontag')
                },

                arcreditreceipt: {
                    type: ArcreditreceiptType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Arcreditreceipt')
                },

                artransactionauditdetail: {
                    type: ArtransactionauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Artransactionauditdetail')
                },

                artransactionheader: {
                    type: ArtransactionheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Artransactionheader')
                },

                asacpt: {
                    type: AsacptType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Asacpt')
                },

                aptransactionremark: {
                    type: AptransactionremarkType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Aptransactionremark')
                },

                aptransactiontype: {
                    type: AptransactiontypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Aptransactiontype')
                },

                artransactionnotedetail: {
                    type: ArtransactionnotedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Artransactionnotedetail')
                },

                artransactiondetail: {
                    type: ArtransactiondetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Artransactiondetail')
                },

                artransactionnote: {
                    type: ArtransactionnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Artransactionnote')
                },

                artransactiontype: {
                    type: ArtransactiontypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Artransactiontype')
                },

                assignoutliercomp: {
                    type: AssignoutliercompType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Assignoutliercomp')
                },

                assignpassthrucomp: {
                    type: AssignpassthrucompType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Assignpassthrucomp')
                },

                assignfallthrucomp: {
                    type: AssignfallthrucompType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Assignfallthrucomp')
                },

                auditerrorvrcode: {
                    type: AuditerrorvrcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Auditerrorvrcode')
                },

                auditsampletype: {
                    type: AuditsampletypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Auditsampletype')
                },

                auditerrorcode: {
                    type: AuditerrorcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Auditerrorcode')
                },

                auditerrorsource: {
                    type: AuditerrorsourceType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Auditerrorsource')
                },

                authmatchingsched: {
                    type: AuthmatchingschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Authmatchingsched')
                },

                authdecisionactiontrigger: {
                    type: AuthdecisionactiontriggerType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Authdecisionactiontrigger')
                },

                authmatchingschednote: {
                    type: AuthmatchingschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Authmatchingschednote')
                },

                authdecisioncode: {
                    type: AuthdecisioncodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Authdecisioncode')
                },

                authprogramauthcharorder: {
                    type: AuthprogramauthcharorderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Authprogramauthcharorder')
                },

                authmatchingschedauditdetail: {
                    type: AuthmatchingschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Authmatchingschedauditdetail')
                },

                authdecactionschedauditdetail: {
                    type: AuthdecactionschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Authdecactionschedauditdetail')
                },

                authdecisionactionschedule: {
                    type: AuthdecisionactionscheduleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Authdecisionactionschedule')
                },

                authdecactionschednote: {
                    type: AuthdecactionschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Authdecactionschednote')
                },

                authprogramauthservicetype: {
                    type: AuthprogramauthservicetypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Authprogramauthservicetype')
                },

                authprogramauthproccodematch: {
                    type: AuthprogramauthproccodematchType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Authprogramauthproccodematch')
                },

                authdecisionaction: {
                    type: AuthdecisionactionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Authdecisionaction')
                },

                authprogramprocedure: {
                    type: AuthprogramprocedureType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Authprogramprocedure')
                },

                authprogramdiagnosis: {
                    type: AuthprogramdiagnosisType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Authprogramdiagnosis')
                },

                bank: {
                    type: BankType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Bank')
                },

                authprogramprocdiagnosis: {
                    type: AuthprogramprocdiagnosisType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Authprogramprocdiagnosis')
                },

                bankaccounttype: {
                    type: BankaccounttypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Bankaccounttype')
                },

                bankaccount: {
                    type: BankaccountType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Bankaccount')
                },

                bankacctbalance: {
                    type: BankacctbalanceType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Bankacctbalance')
                },

                bankacctcreditline: {
                    type: BankacctcreditlineType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Bankacctcreditline')
                },

                autocontribqueue: {
                    type: AutocontribqueueType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Autocontribqueue')
                },

                bankacctcredit: {
                    type: BankacctcreditType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Bankacctcredit')
                },

                authprogramtype: {
                    type: AuthprogramtypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Authprogramtype')
                },

                bankauditdetail: {
                    type: BankauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Bankauditdetail')
                },

                bankbranch: {
                    type: BankbranchType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Bankbranch')
                },

                bankacctdebit: {
                    type: BankacctdebitType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Bankacctdebit')
                },

                bankcontactname: {
                    type: BankcontactnameType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Bankcontactname')
                },

                bankcontactaddress: {
                    type: BankcontactaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Bankcontactaddress')
                },

                bankdepartmenthour: {
                    type: BankdepartmenthourType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Bankdepartmenthour')
                },

                bankcontactdepartment: {
                    type: BankcontactdepartmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Bankcontactdepartment')
                },

                banknote: {
                    type: BanknoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Banknote')
                },

                bankdepartmentphone: {
                    type: BankdepartmentphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Bankdepartmentphone')
                },

                banknotedetail: {
                    type: BanknotedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Banknotedetail')
                },

                bankrouting: {
                    type: BankroutingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Bankrouting')
                },

                bankcontactphone: {
                    type: BankcontactphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Bankcontactphone')
                },

                bankdepartmentaddress: {
                    type: BankdepartmentaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Bankdepartmentaddress')
                },

                batchentrylog: {
                    type: BatchentrylogType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Batchentrylog')
                },

                bankworkhour: {
                    type: BankworkhourType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Bankworkhour')
                },

                bbTableField: {
                    type: BbTableFieldType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('BbTableField')
                },

                bbTable: {
                    type: BbTableType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('BbTable')
                },

                beddayscheduleauditdetail: {
                    type: BeddayscheduleauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Beddayscheduleauditdetail')
                },

                bbMessage: {
                    type: BbMessageType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('BbMessage')
                },

                bbField: {
                    type: BbFieldType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('BbField')
                },

                beddayschedulenote: {
                    type: BeddayschedulenoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Beddayschedulenote')
                },

                beddayscheduledetail: {
                    type: BeddayscheduledetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Beddayscheduledetail')
                },

                beddayschedule: {
                    type: BeddayscheduleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Beddayschedule')
                },

                beneaccumbypassperiod: {
                    type: BeneaccumbypassperiodType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Beneaccumbypassperiod')
                },

                beneaccumbypassref: {
                    type: BeneaccumbypassrefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Beneaccumbypassref')
                },

                beddayscheduledetailrev: {
                    type: BeddayscheduledetailrevType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Beddayscheduledetailrev')
                },

                beneaccumbypass: {
                    type: BeneaccumbypassType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Beneaccumbypass')
                },

                beneauditdetail: {
                    type: BeneauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Beneauditdetail')
                },

                benecobemploystatus: {
                    type: BenecobemploystatusType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benecobemploystatus')
                },

                benebaserate: {
                    type: BenebaserateType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benebaserate')
                },

                beneaccumbypasstier: {
                    type: BeneaccumbypasstierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Beneaccumbypasstier')
                },

                benecodeadj: {
                    type: BenecodeadjType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Benecodeadj')
                },

                benecoderelationship: {
                    type: BenecoderelationshipType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benecoderelationship')
                },

                benecodeservicetypecode: {
                    type: BenecodeservicetypecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benecodeservicetypecode')
                },

                benecompositelimit: {
                    type: BenecompositelimitType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benecompositelimit')
                },

                benecodestate: {
                    type: BenecodestateType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benecodestate')
                },

                benecodesuppl: {
                    type: BenecodesupplType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Benecodesuppl')
                },

                benedeductible: {
                    type: BenedeductibleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benedeductible')
                },

                benedeductibleperiod: {
                    type: BenedeductibleperiodType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benedeductibleperiod')
                },

                benedeductiblefamily: {
                    type: BenedeductiblefamilyType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benedeductiblefamily')
                },

                benedeductibleref: {
                    type: BenedeductiblerefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benedeductibleref')
                },

                benecoveragecondition: {
                    type: BenecoverageconditionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Benecoveragecondition')
                },

                benedeductibletier: {
                    type: BenedeductibletierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benedeductibletier')
                },

                beneexternalid: {
                    type: BeneexternalidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Beneexternalid')
                },

                benefitbundleauditdetail: {
                    type: BenefitbundleauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleauditdetail')
                },

                benefitbundle: {
                    type: BenefitbundleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundle')
                },

                benefitbundleactuarialvalue: {
                    type: BenefitbundleactuarialvalueType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleactuarialvalue')
                },

                benefitbundleccbypassgroup: {
                    type: BenefitbundleccbypassgroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleccbypassgroup')
                },

                benefitbundleccbypassplan: {
                    type: BenefitbundleccbypassplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleccbypassplan')
                },

                benefitbundlebaserate: {
                    type: BenefitbundlebaserateType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlebaserate')
                },

                benefitbundlebillingset: {
                    type: BenefitbundlebillingsetType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlebillingset')
                },

                benefitbundleccmaxgroup: {
                    type: BenefitbundleccmaxgroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleccmaxgroup')
                },

                benefitbundleccdedplan: {
                    type: BenefitbundleccdedplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleccdedplan')
                },

                benefitbundleextid: {
                    type: BenefitbundleextidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleextid')
                },

                benefitbundlecontrolplanbypass: {
                    type: BenefitbundlecontrolplanbypassType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlecontrolplanbypass')
                },

                benefitbundleccoopgroup: {
                    type: BenefitbundleccoopgroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleccoopgroup')
                },

                benefitbundlecontrolplanded: {
                    type: BenefitbundlecontrolplandedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlecontrolplanded')
                },

                benefitbundlenote: {
                    type: BenefitbundlenoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlenote')
                },

                benefitbundlecrosscontrolaccum: {
                    type: BenefitbundlecrosscontrolaccumType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlecrosscontrolaccum')
                },

                benefitbundlemsaplan: {
                    type: BenefitbundlemsaplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlemsaplan')
                },

                benefitbundleccoopplan: {
                    type: BenefitbundleccoopplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleccoopplan')
                },

                benefitbundlecontrolplanoop: {
                    type: BenefitbundlecontrolplanoopType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlecontrolplanoop')
                },

                benefitbundleccmaxplan: {
                    type: BenefitbundleccmaxplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleccmaxplan')
                },

                benefitbundlemsaoption: {
                    type: BenefitbundlemsaoptionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlemsaoption')
                },

                benefitbundleoonpricingadjust: {
                    type: BenefitbundleoonpricingadjustType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleoonpricingadjust')
                },

                benefitbundleplan: {
                    type: BenefitbundleplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleplan')
                },

                benefitbundlecontrolplanmax: {
                    type: BenefitbundlecontrolplanmaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlecontrolplanmax')
                },

                benefitbundleccdedgroup: {
                    type: BenefitbundleccdedgroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleccdedgroup')
                },

                benefitbundleoption: {
                    type: BenefitbundleoptionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleoption')
                },

                benefitbundleoptionextid: {
                    type: BenefitbundleoptionextidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleoptionextid')
                },

                benefitbundlerideroption: {
                    type: BenefitbundlerideroptionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlerideroption')
                },

                benefitbundleriderplan: {
                    type: BenefitbundleriderplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleriderplan')
                },

                benefitbundleplanaccum: {
                    type: BenefitbundleplanaccumType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleplanaccum')
                },

                benefitbundlestandardcompid: {
                    type: BenefitbundlestandardcompidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlestandardcompid')
                },

                benefitbundleserviceplan: {
                    type: BenefitbundleserviceplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleserviceplan')
                },

                benefitbundleutilizationopt: {
                    type: BenefitbundleutilizationoptType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleutilizationopt')
                },

                benefitbundleutilizationplan: {
                    type: BenefitbundleutilizationplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleutilizationplan')
                },

                benefitbundleserviceoption: {
                    type: BenefitbundleserviceoptionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleserviceoption')
                },

                benefitcode: {
                    type: BenefitcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitcode')
                },

                benefitfulfillmenttextnote: {
                    type: BenefitfulfillmenttextnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitfulfillmenttextnote')
                },

                benefitcodemerchantcatcode: {
                    type: BenefitcodemerchantcatcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitcodemerchantcatcode')
                },

                benefitfulfillmenttext: {
                    type: BenefitfulfillmenttextType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitfulfillmenttext')
                },

                benefitfulfillmenttextperiod: {
                    type: BenefitfulfillmenttextperiodType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitfulfillmenttextperiod')
                },

                benefitfulfillmenttexttype: {
                    type: BenefitfulfillmenttexttypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitfulfillmenttexttype')
                },

                benefitplancode: {
                    type: BenefitplancodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Benefitplancode')
                },

                benefitplan: {
                    type: BenefitplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitplan')
                },

                benefitplantradingoop: {
                    type: BenefitplantradingoopType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitplantradingoop')
                },

                benefitssetting: {
                    type: BenefitssettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Benefitssetting')
                },

                benefulfillmenttextauditdetail: {
                    type: BenefulfillmenttextauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefulfillmenttextauditdetail')
                },

                benefitplantradingpartner: {
                    type: BenefitplantradingpartnerType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitplantradingpartner')
                },

                benelanguageschedauditdetail: {
                    type: BenelanguageschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benelanguageschedauditdetail')
                },

                benefitplantradingded: {
                    type: BenefitplantradingdedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitplantradingded')
                },

                benelanguageschednote: {
                    type: BenelanguageschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benelanguageschednote')
                },

                benelangschedtextauditdetail: {
                    type: BenelangschedtextauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benelangschedtextauditdetail')
                },

                benelanguageschedtextrelcode: {
                    type: BenelanguageschedtextrelcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benelanguageschedtextrelcode')
                },

                benefittypestack: {
                    type: BenefittypestackType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefittypestack')
                },

                benelanguagesched: {
                    type: BenelanguageschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benelanguagesched')
                },

                benefitbundlevalidation: {
                    type: BenefitbundlevalidationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlevalidation')
                },

                benelanguageschedtexttype: {
                    type: BenelanguageschedtexttypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benelanguageschedtexttype')
                },

                benelanguageschedtext: {
                    type: BenelanguageschedtextType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benelanguageschedtext')
                },

                benelanguageschedassign: {
                    type: BenelanguageschedassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benelanguageschedassign')
                },

                benelanguagevariablecode: {
                    type: BenelanguagevariablecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benelanguagevariablecode')
                },

                benelangschedtextsvctypecode: {
                    type: BenelangschedtextsvctypecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benelangschedtextsvctypecode')
                },

                benelanguagevariablefulfillapp: {
                    type: BenelanguagevariablefulfillappType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benelanguagevariablefulfillapp')
                },

                benemaxperiod: {
                    type: BenemaxperiodType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benemaxperiod')
                },

                benemax: {
                    type: BenemaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benemax')
                },

                benemaxperiodprocedure: {
                    type: BenemaxperiodprocedureType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benemaxperiodprocedure')
                },

                benenote: {
                    type: BenenoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benenote')
                },

                beneoverride: {
                    type: BeneoverrideType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Beneoverride')
                },

                benemaxref: {
                    type: BenemaxrefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benemaxref')
                },

                benemaxtier: {
                    type: BenemaxtierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benemaxtier')
                },

                benenetworksched: {
                    type: BenenetworkschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benenetworksched')
                },

                benenetworkbaserate: {
                    type: BenenetworkbaserateType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benenetworkbaserate')
                },

                beneplanactuarialvalue: {
                    type: BeneplanactuarialvalueType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Beneplanactuarialvalue')
                },

                beneplanaddress: {
                    type: BeneplanaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Beneplanaddress')
                },

                beneplanrelationship: {
                    type: BeneplanrelationshipType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Beneplanrelationship')
                },

                beneplansetting: {
                    type: BeneplansettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Beneplansetting')
                },

                beneplanphonenumber: {
                    type: BeneplanphonenumberType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Beneplanphonenumber')
                },

                beneporcelainlimit: {
                    type: BeneporcelainlimitType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Beneporcelainlimit')
                },

                benestoplossoopperiod: {
                    type: BenestoplossoopperiodType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benestoplossoopperiod')
                },

                benestoplossoop: {
                    type: BenestoplossoopType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benestoplossoop')
                },

                benestandardcompid: {
                    type: BenestandardcompidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benestandardcompid')
                },

                benestoplossfamily: {
                    type: BenestoplossfamilyType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benestoplossfamily')
                },

                benestoplosstier: {
                    type: BenestoplosstierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benestoplosstier')
                },

                benetier: {
                    type: BenetierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benetier')
                },

                benestoplossref: {
                    type: BenestoplossrefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benestoplossref')
                },

                benetierprov: {
                    type: BenetierprovType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benetierprov')
                },

                benetiernetwork: {
                    type: BenetiernetworkType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benetiernetwork')
                },

                benevalidation: {
                    type: BenevalidationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benevalidation')
                },

                benewaiveref: {
                    type: BenewaiverefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Benewaiveref')
                },

                billingschedagegender: {
                    type: BillingschedagegenderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Billingschedagegender')
                },

                billingsched: {
                    type: BillingschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Billingsched')
                },

                billingschedentity: {
                    type: BillingschedentityType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Billingschedentity')
                },

                billingschedfudslevel: {
                    type: BillingschedfudslevelType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Billingschedfudslevel')
                },

                billingschedmodifier: {
                    type: BillingschedmodifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Billingschedmodifier')
                },

                billingschedauditdetail: {
                    type: BillingschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Billingschedauditdetail')
                },

                billingset: {
                    type: BillingsetType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Billingset')
                },

                billingsetnote: {
                    type: BillingsetnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Billingsetnote')
                },

                billingsetauditdetail: {
                    type: BillingsetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Billingsetauditdetail')
                },

                billingschednote: {
                    type: BillingschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Billingschednote')
                },

                billitemtype: {
                    type: BillitemtypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Billitemtype')
                },

                billtypecategorydefinition: {
                    type: BilltypecategorydefinitionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Billtypecategorydefinition')
                },

                billtypeset: {
                    type: BilltypesetType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Billtypeset')
                },

                billtype: {
                    type: BilltypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Billtype')
                },

                billtypecategory: {
                    type: BilltypecategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Billtypecategory')
                },

                billingsetschedassign: {
                    type: BillingsetschedassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Billingsetschedassign')
                },

                billtypesetcat: {
                    type: BilltypesetcatType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Billtypesetcat')
                },

                billtypesetcatdetail: {
                    type: BilltypesetcatdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Billtypesetcatdetail')
                },

                brandingentity: {
                    type: BrandingentityType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Brandingentity')
                },

                capschednote: {
                    type: CapschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Capschednote')
                },

                billtypesetauditdetail: {
                    type: BilltypesetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Billtypesetauditdetail')
                },

                capschedule: {
                    type: CapscheduleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Capschedule')
                },

                capsetassignment: {
                    type: CapsetassignmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Capsetassignment')
                },

                carrier: {
                    type: CarrierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Carrier')
                },

                capmodifier: {
                    type: CapmodifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Capmodifier')
                },

                carrierauditdetail: {
                    type: CarrierauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Carrierauditdetail')
                },

                capschedauditdetail: {
                    type: CapschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Capschedauditdetail')
                },

                carriercontactdepartment: {
                    type: CarriercontactdepartmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Carriercontactdepartment')
                },

                carrierdepartmenthour: {
                    type: CarrierdepartmenthourType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Carrierdepartmenthour')
                },

                capset: {
                    type: CapsetType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Capset')
                },

                billtypesetcatdetaildef: {
                    type: BilltypesetcatdetaildefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Billtypesetcatdetaildef')
                },

                capagegender: {
                    type: CapagegenderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Capagegender')
                },

                carriercontactaddress: {
                    type: CarriercontactaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Carriercontactaddress')
                },

                carrierdepartmentaddress: {
                    type: CarrierdepartmentaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Carrierdepartmentaddress')
                },

                carrierdepartmentphone: {
                    type: CarrierdepartmentphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Carrierdepartmentphone')
                },

                carrierlobauditdetail: {
                    type: CarrierlobauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Carrierlobauditdetail')
                },

                carrierextid: {
                    type: CarrierextidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Carrierextid')
                },

                carriercontactname: {
                    type: CarriercontactnameType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Carriercontactname')
                },

                carrierfein: {
                    type: CarrierfeinType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Carrierfein')
                },

                capschednotedetail: {
                    type: CapschednotedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Capschednotedetail')
                },

                carrierlobplan: {
                    type: CarrierlobplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Carrierlobplan')
                },

                carrierhiosissuerid: {
                    type: CarrierhiosissueridType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Carrierhiosissuerid')
                },

                carrierlineofbusiness: {
                    type: CarrierlineofbusinessType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Carrierlineofbusiness')
                },

                carrierlobproduct: {
                    type: CarrierlobproductType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Carrierlobproduct')
                },

                carrierservice: {
                    type: CarrierserviceType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Carrierservice')
                },

                carriernote: {
                    type: CarriernoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Carriernote')
                },

                carriercontactphone: {
                    type: CarriercontactphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Carriercontactphone')
                },

                carrierstate: {
                    type: CarrierstateType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Carrierstate')
                },

                carriernotedetail: {
                    type: CarriernotedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Carriernotedetail')
                },

                carryovererrorqueue: {
                    type: CarryovererrorqueueType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Carryovererrorqueue')
                },

                carrierurl: {
                    type: CarrierurlType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Carrierurl')
                },

                cislBatchprocesstype: {
                    type: CislBatchprocesstypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('CislBatchprocesstype')
                },

                cislBatchprocess: {
                    type: CislBatchprocessType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('CislBatchprocess')
                },

                carrierlobpermit: {
                    type: CarrierlobpermitType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Carrierlobpermit')
                },

                carrierworkhour: {
                    type: CarrierworkhourType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Carrierworkhour')
                },

                claaccountexpense: {
                    type: ClaaccountexpenseType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claaccountexpense')
                },

                claaccount: {
                    type: ClaaccountType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claaccount')
                },

                claaccounthealth: {
                    type: ClaaccounthealthType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claaccounthealth')
                },

                clabenefit: {
                    type: ClabenefitType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clabenefit')
                },

                claacctbaltimeline: {
                    type: ClaacctbaltimelineType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Claacctbaltimeline')
                },

                claacctbaltimelinehx: {
                    type: ClaacctbaltimelinehxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Claacctbaltimelinehx')
                },

                clabenefitallowed: {
                    type: ClabenefitallowedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clabenefitallowed')
                },

                clabenefitauthreferral: {
                    type: ClabenefitauthreferralType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clabenefitauthreferral')
                },

                clabenefitauthreferralmatch: {
                    type: ClabenefitauthreferralmatchType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clabenefitauthreferralmatch')
                },

                clabenefitcob: {
                    type: ClabenefitcobType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clabenefitcob')
                },

                clabenefitcode: {
                    type: ClabenefitcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clabenefitcode')
                },

                clabenefitcoinsurance: {
                    type: ClabenefitcoinsuranceType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clabenefitcoinsurance')
                },

                clabenefitdeductible: {
                    type: ClabenefitdeductibleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clabenefitdeductible')
                },

                clabenefitcopayment: {
                    type: ClabenefitcopaymentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clabenefitcopayment')
                },

                clabenefitprovider: {
                    type: ClabenefitproviderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clabenefitprovider')
                },

                clabenefitproviderflag: {
                    type: ClabenefitproviderflagType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clabenefitproviderflag')
                },

                clabenefituseroverridewaivemax: {
                    type: ClabenefituseroverridewaivemaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clabenefituseroverridewaivemax')
                },

                clabenefitwithhold: {
                    type: ClabenefitwithholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clabenefitwithhold')
                },

                clabenefitfiling: {
                    type: ClabenefitfilingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clabenefitfiling')
                },

                cladofr: {
                    type: CladofrType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cladofr')
                },

                clabenefiteocaction: {
                    type: ClabenefiteocactionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clabenefiteocaction')
                },

                clabenefituseroverride: {
                    type: ClabenefituseroverrideType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clabenefituseroverride')
                },

                claimaccident: {
                    type: ClaimaccidentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimaccident')
                },

                clabenefituseroverridebcrr: {
                    type: ClabenefituseroverridebcrrType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clabenefituseroverridebcrr')
                },

                claeocrelatedlog: {
                    type: ClaeocrelatedlogType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claeocrelatedlog')
                },

                cladeny: {
                    type: CladenyType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cladeny')
                },

                claeocrelatedlogoverride: {
                    type: ClaeocrelatedlogoverrideType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claeocrelatedlogoverride')
                },

                claimauditbenefit: {
                    type: ClaimauditbenefitType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimauditbenefit')
                },

                claimattachment: {
                    type: ClaimattachmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimattachment')
                },

                claeoctriggerlog: {
                    type: ClaeoctriggerlogType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claeoctriggerlog')
                },

                claimauditcovsequence: {
                    type: ClaimauditcovsequenceType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimauditcovsequence')
                },

                claimauditbilltype: {
                    type: ClaimauditbilltypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimauditbilltype')
                },

                claimauditdiagnosis: {
                    type: ClaimauditdiagnosisType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimauditdiagnosis')
                },

                clabenefitoverpay: {
                    type: ClabenefitoverpayType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clabenefitoverpay')
                },

                claimauditexternalrequest: {
                    type: ClaimauditexternalrequestType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimauditexternalrequest')
                },

                claimauditmodifier: {
                    type: ClaimauditmodifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimauditmodifier')
                },

                clabenefitdelegation: {
                    type: ClabenefitdelegationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clabenefitdelegation')
                },

                clabenefitmaximum: {
                    type: ClabenefitmaximumType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clabenefitmaximum')
                },

                claimambulance: {
                    type: ClaimambulanceType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimambulance')
                },

                claimauditpo: {
                    type: ClaimauditpoType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimauditpo')
                },

                claimauditnetwork: {
                    type: ClaimauditnetworkType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimauditnetwork')
                },

                claimauditpricingmethod: {
                    type: ClaimauditpricingmethodType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimauditpricingmethod')
                },

                claimauditprocedure: {
                    type: ClaimauditprocedureType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimauditprocedure')
                },

                claimauditdeleg: {
                    type: ClaimauditdelegType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimauditdeleg')
                },

                claimauditprovider: {
                    type: ClaimauditproviderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimauditprovider')
                },

                claimauditschedauditdetail: {
                    type: ClaimauditschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimauditschedauditdetail')
                },

                claimauditsched: {
                    type: ClaimauditschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimauditsched')
                },

                claimauditproviderspecialty: {
                    type: ClaimauditproviderspecialtyType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimauditproviderspecialty')
                },

                claimauditrevenue: {
                    type: ClaimauditrevenueType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimauditrevenue')
                },

                claimauditdisposition: {
                    type: ClaimauditdispositionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimauditdisposition')
                },

                claimauditschedsetting: {
                    type: ClaimauditschedsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimauditschedsetting')
                },

                claimaudittype: {
                    type: ClaimaudittypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimaudittype')
                },

                claimaudituser: {
                    type: ClaimaudituserType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimaudituser')
                },

                claimauditstate: {
                    type: ClaimauditstateType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimauditstate')
                },

                claimauditschedrule: {
                    type: ClaimauditschedruleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimauditschedrule')
                },

                claimclinicedit: {
                    type: ClaimcliniceditType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimclinicedit')
                },

                claimcarrier: {
                    type: ClaimcarrierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Claimcarrier')
                },

                claimclinic: {
                    type: ClaimclinicType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimclinic')
                },

                claimcliniceditflag: {
                    type: ClaimcliniceditflagType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimcliniceditflag')
                },

                claimcobadjudication: {
                    type: ClaimcobadjudicationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimcobadjudication')
                },

                claimcliniceditdiagnosis: {
                    type: ClaimcliniceditdiagnosisType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimcliniceditdiagnosis')
                },

                claimcobadjustment: {
                    type: ClaimcobadjustmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimcobadjustment')
                },

                claimcobcontract: {
                    type: ClaimcobcontractType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimcobcontract')
                },

                claimcobmedicare: {
                    type: ClaimcobmedicareType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimcobmedicare')
                },

                claimcobprovsecondaryid: {
                    type: ClaimcobprovsecondaryidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimcobprovsecondaryid')
                },

                claimcontact: {
                    type: ClaimcontactType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimcontact')
                },

                claimcobothersubscriber: {
                    type: ClaimcobothersubscriberType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimcobothersubscriber')
                },

                claimcobheader: {
                    type: ClaimcobheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimcobheader')
                },

                claimcobinfo: {
                    type: ClaimcobinfoType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimcobinfo')
                },

                claimcompositeblob: {
                    type: ClaimcompositeblobType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimcompositeblob')
                },

                claimcondition: {
                    type: ClaimconditionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimcondition')
                },

                claimcobpayer: {
                    type: ClaimcobpayerType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimcobpayer')
                },

                claimcobline: {
                    type: ClaimcoblineType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimcobline')
                },

                claimdentalortho: {
                    type: ClaimdentalorthoType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimdentalortho')
                },

                claimevent: {
                    type: ClaimeventType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimevent')
                },

                claimdentalprosth: {
                    type: ClaimdentalprosthType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimdentalprosth')
                },

                claimedit: {
                    type: ClaimeditType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimedit')
                },

                claimdiagnosis: {
                    type: ClaimdiagnosisType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Claimdiagnosis')
                },

                claimedithx: {
                    type: ClaimedithxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimedithx')
                },

                claimeditintermediate: {
                    type: ClaimeditintermediateType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimeditintermediate')
                },

                claimfileinfo: {
                    type: ClaimfileinfoType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimfileinfo')
                },

                claimenvmatchedclaim: {
                    type: ClaimenvmatchedclaimType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimenvmatchedclaim')
                },

                claimeditsummary: {
                    type: ClaimeditsummaryType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimeditsummary')
                },

                claimheader: {
                    type: ClaimheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimheader')
                },

                claimheadercob: {
                    type: ClaimheadercobType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimheadercob')
                },

                claimenvelope: {
                    type: ClaimenvelopeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimenvelope')
                },

                claimheaderdental: {
                    type: ClaimheaderdentalType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimheaderdental')
                },

                claimefstx: {
                    type: ClaimefstxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimefstx')
                },

                claimheadericpdeny: {
                    type: ClaimheadericpdenyType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimheadericpdeny')
                },

                claimeventpromptpay: {
                    type: ClaimeventpromptpayType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimeventpromptpay')
                },

                claimheadericp: {
                    type: ClaimheadericpType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimheadericp')
                },

                claimeventuncleantime: {
                    type: ClaimeventuncleantimeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimeventuncleantime')
                },

                claimheaderauditdetail: {
                    type: ClaimheaderauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimheaderauditdetail')
                },

                claimheadernote: {
                    type: ClaimheadernoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimheadernote')
                },

                claimheaderinst: {
                    type: ClaimheaderinstType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimheaderinst')
                },

                claimheaderrx: {
                    type: ClaimheaderrxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimheaderrx')
                },

                claiminstpayer: {
                    type: ClaiminstpayerType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claiminstpayer')
                },

                claiminst81Cc: {
                    type: Claiminst81CcType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claiminst81Cc')
                },

                claimheaderprof: {
                    type: ClaimheaderprofType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimheaderprof')
                },

                claiminstproc: {
                    type: ClaiminstprocType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Claiminstproc')
                },

                claimheadersuperbill: {
                    type: ClaimheadersuperbillType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimheadersuperbill')
                },

                claimlinedental: {
                    type: ClaimlinedentalType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Claimlinedental')
                },

                claiminstcond: {
                    type: ClaiminstcondType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Claiminstcond')
                },

                claimlineadjudication: {
                    type: ClaimlineadjudicationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimlineadjudication')
                },

                claiminstoccur: {
                    type: ClaiminstoccurType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Claiminstoccur')
                },

                claimhealthinformation: {
                    type: ClaimhealthinformationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimhealthinformation')
                },

                claimlineicp: {
                    type: ClaimlineicpType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Claimlineicp')
                },

                claimlinecob: {
                    type: ClaimlinecobType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Claimlinecob')
                },

                claiminstvalue: {
                    type: ClaiminstvalueType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Claiminstvalue')
                },

                claimlineexpense: {
                    type: ClaimlineexpenseType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Claimlineexpense')
                },

                claiminstoccurspan: {
                    type: ClaiminstoccurspanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Claiminstoccurspan')
                },

                claimlineicpdeny: {
                    type: ClaimlineicpdenyType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimlineicpdeny')
                },

                claimlineinst: {
                    type: ClaimlineinstType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Claimlineinst')
                },

                claimlinepriorauth: {
                    type: ClaimlinepriorauthType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimlinepriorauth')
                },

                claimlineprofanesthesia: {
                    type: ClaimlineprofanesthesiaType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Claimlineprofanesthesia')
                },

                claimlineprof: {
                    type: ClaimlineprofType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Claimlineprof')
                },

                claimlineprofmeasure: {
                    type: ClaimlineprofmeasureType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimlineprofmeasure')
                },

                claimlinemap: {
                    type: ClaimlinemapType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimlinemap')
                },

                claimlinepredetermination: {
                    type: ClaimlinepredeterminationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimlinepredetermination')
                },

                claimlinesupportingdoc: {
                    type: ClaimlinesupportingdocType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimlinesupportingdoc')
                },

                claimlinesuperbill: {
                    type: ClaimlinesuperbillType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Claimlinesuperbill')
                },

                claimlineevent: {
                    type: ClaimlineeventType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimlineevent')
                },

                claimlineprofdme: {
                    type: ClaimlineprofdmeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Claimlineprofdme')
                },

                claimmedpolicyengineinputline: {
                    type: ClaimmedpolicyengineinputlineType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimmedpolicyengineinputline')
                },

                claimlinerxcompound: {
                    type: ClaimlinerxcompoundType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimlinerxcompound')
                },

                claimmember: {
                    type: ClaimmemberType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimmember')
                },

                claimlineprofrx: {
                    type: ClaimlineprofrxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Claimlineprofrx')
                },

                claimpricingdetailmodifier: {
                    type: ClaimpricingdetailmodifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimpricingdetailmodifier')
                },

                claimnote: {
                    type: ClaimnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimnote')
                },

                claimpayer: {
                    type: ClaimpayerType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimpayer')
                },

                claimmembergroupinfo: {
                    type: ClaimmembergroupinfoType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimmembergroupinfo')
                },

                claimpricingdetailreapportion: {
                    type: ClaimpricingdetailreapportionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimpricingdetailreapportion')
                },

                claimmedpolengineinputheader: {
                    type: ClaimmedpolengineinputheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimmedpolengineinputheader')
                },

                claimlinerx: {
                    type: ClaimlinerxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Claimlinerx')
                },

                claimpricingexternalrequest: {
                    type: ClaimpricingexternalrequestType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimpricingexternalrequest')
                },

                claimpayersecondaryid: {
                    type: ClaimpayersecondaryidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimpayersecondaryid')
                },

                claimpricingdetailtier: {
                    type: ClaimpricingdetailtierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimpricingdetailtier')
                },

                claimpayee: {
                    type: ClaimpayeeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimpayee')
                },

                claimpricinginputdetail: {
                    type: ClaimpricinginputdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimpricinginputdetail')
                },

                claimnotification: {
                    type: ClaimnotificationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimnotification')
                },

                claimpricingoutputdetail: {
                    type: ClaimpricingoutputdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimpricingoutputdetail')
                },

                claimpricinginputheader: {
                    type: ClaimpricinginputheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimpricinginputheader')
                },

                claimpricingexternalresphdr: {
                    type: ClaimpricingexternalresphdrType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimpricingexternalresphdr')
                },

                claimpricingexternalrespdtledt: {
                    type: ClaimpricingexternalrespdtledtType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimpricingexternalrespdtledt')
                },

                claimpricingexternalresphdredt: {
                    type: ClaimpricingexternalresphdredtType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimpricingexternalresphdredt')
                },

                claimpricingdetailspi: {
                    type: ClaimpricingdetailspiType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimpricingdetailspi')
                },

                claimpricingedi: {
                    type: ClaimpricingediType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimpricingedi')
                },

                claimpricingexternalrespdtl: {
                    type: ClaimpricingexternalrespdtlType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimpricingexternalrespdtl')
                },

                claimpricinguseroverridedetail: {
                    type: ClaimpricinguseroverridedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimpricinguseroverridedetail')
                },

                claimpricinguseroverrideheader: {
                    type: ClaimpricinguseroverrideheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimpricinguseroverrideheader')
                },

                claimpricingoutputheader: {
                    type: ClaimpricingoutputheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimpricingoutputheader')
                },

                claimprovider: {
                    type: ClaimproviderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimprovider')
                },

                claimpropertycasualty: {
                    type: ClaimpropertycasualtyType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimpropertycasualty')
                },

                claimprocedurexref: {
                    type: ClaimprocedurexrefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimprocedurexref')
                },

                claimprovidersecondaryid: {
                    type: ClaimprovidersecondaryidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimprovidersecondaryid')
                },

                claimprovtin: {
                    type: ClaimprovtinType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimprovtin')
                },

                claimprovideraddress: {
                    type: ClaimprovideraddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimprovideraddress')
                },

                claimqualityauditauditdetail: {
                    type: ClaimqualityauditauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimqualityauditauditdetail')
                },

                claimreferral: {
                    type: ClaimreferralType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimreferral')
                },

                claimtoothchart: {
                    type: ClaimtoothchartType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimtoothchart')
                },

                claimsubsgroupinfo: {
                    type: ClaimsubsgroupinfoType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimsubsgroupinfo')
                },

                claimqualityaudit: {
                    type: ClaimqualityauditType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimqualityaudit')
                },

                claimrespparty: {
                    type: ClaimresppartyType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimrespparty')
                },

                clausecoderef: {
                    type: ClausecoderefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clausecoderef')
                },

                clceffratgbasefileupldheader: {
                    type: ClceffratgbasefileupldheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clceffratgbasefileupldheader')
                },

                clinicaleditresponsecode: {
                    type: ClinicaleditresponsecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clinicaleditresponsecode')
                },

                clausecodeset: {
                    type: ClausecodesetType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clausecodeset')
                },

                clinicaleditresponsecodeaudit: {
                    type: ClinicaleditresponsecodeauditType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clinicaleditresponsecodeaudit')
                },

                clinicaleditscheddetail: {
                    type: ClinicaleditscheddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clinicaleditscheddetail')
                },

                clineditscheddetailclmtypexcl: {
                    type: ClineditscheddetailclmtypexclType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clineditscheddetailclmtypexcl')
                },

                claimsubscriber: {
                    type: ClaimsubscriberType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimsubscriber')
                },

                claimtat: {
                    type: ClaimtatType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimtat')
                },

                clausecodesetauditdetail: {
                    type: ClausecodesetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clausecodesetauditdetail')
                },

                clinicaleditassignment: {
                    type: ClinicaleditassignmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clinicaleditassignment')
                },

                claimtransmitter: {
                    type: ClaimtransmitterType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Claimtransmitter')
                },

                clinicaleditsched: {
                    type: ClinicaleditschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clinicaleditsched')
                },

                clinicaleditschedauditdetail: {
                    type: ClinicaleditschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clinicaleditschedauditdetail')
                },

                cobrasched: {
                    type: CobraschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cobrasched')
                },

                clinicaleffratgbaseuploadstage: {
                    type: ClinicaleffratgbaseuploadstageType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clinicaleffratgbaseuploadstage')
                },

                clinicaleditschednote: {
                    type: ClinicaleditschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clinicaleditschednote')
                },

                cobrascheddetailbenefit: {
                    type: CobrascheddetailbenefitType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cobrascheddetailbenefit')
                },

                cobrascheddetailconversion: {
                    type: CobrascheddetailconversionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cobrascheddetailconversion')
                },

                cobrascheddetailqualeventprem: {
                    type: CobrascheddetailqualeventpremType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cobrascheddetailqualeventprem')
                },

                cobrascheddetailqualbeneficiar: {
                    type: CobrascheddetailqualbeneficiarType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cobrascheddetailqualbeneficiar')
                },

                cobrascheddetailexclusion: {
                    type: CobrascheddetailexclusionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cobrascheddetailexclusion')
                },

                cobrascheddetailnotification: {
                    type: CobrascheddetailnotificationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cobrascheddetailnotification')
                },

                cobrascheddetail: {
                    type: CobrascheddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cobrascheddetail')
                },

                cobraschedauditdetail: {
                    type: CobraschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cobraschedauditdetail')
                },

                clinicaleffratgfileuploaderror: {
                    type: ClinicaleffratgfileuploaderrorType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Clinicaleffratgfileuploaderror')
                },

                cobraschednote: {
                    type: CobraschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cobraschednote')
                },

                cobrule: {
                    type: CobruleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cobrule')
                },

                cobrascheddetailsubsidy: {
                    type: CobrascheddetailsubsidyType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cobrascheddetailsubsidy')
                },

                cobrascheddetailgracetime: {
                    type: CobrascheddetailgracetimeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cobrascheddetailgracetime')
                },

                continuationeventmember: {
                    type: ContinuationeventmemberType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Continuationeventmember')
                },

                cobrascheddetailpartialmonth: {
                    type: CobrascheddetailpartialmonthType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cobrascheddetailpartialmonth')
                },

                cobrulestext: {
                    type: CobrulestextType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cobrulestext')
                },

                cobrascheddetailsubsidytier: {
                    type: CobrascheddetailsubsidytierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cobrascheddetailsubsidytier')
                },

                cobrascheddetailqualevent: {
                    type: CobrascheddetailqualeventType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cobrascheddetailqualevent')
                },

                codexref: {
                    type: CodexrefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Codexref')
                },

                continuationevent: {
                    type: ContinuationeventType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Continuationevent')
                },

                contractclaimtype: {
                    type: ContractclaimtypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Contractclaimtype')
                },

                continuationsecondaryevent: {
                    type: ContinuationsecondaryeventType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Continuationsecondaryevent')
                },

                correspondence: {
                    type: CorrespondenceType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Correspondence')
                },

                correspondenceauditdetail: {
                    type: CorrespondenceauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Correspondenceauditdetail')
                },

                correspondencereason: {
                    type: CorrespondencereasonType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Correspondencereason')
                },

                correspondencenote: {
                    type: CorrespondencenoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Correspondencenote')
                },

                cpt4Procedureauditdetail: {
                    type: Cpt4ProcedureauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cpt4Procedureauditdetail')
                },

                countycode: {
                    type: CountycodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Countycode')
                },

                correspondenceentitydetail: {
                    type: CorrespondenceentitydetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Correspondenceentitydetail')
                },

                cpt4Procasafileuploaddetail: {
                    type: Cpt4ProcasafileuploaddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cpt4Procasafileuploaddetail')
                },

                correspondencetransdetail: {
                    type: CorrespondencetransdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Correspondencetransdetail')
                },

                cpt4Procedure: {
                    type: Cpt4ProcedureType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cpt4Procedure')
                },

                cpt4Procedurefileuploadheader: {
                    type: Cpt4ProcedurefileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cpt4Procedurefileuploadheader')
                },

                customprocedure: {
                    type: CustomprocedureType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Customprocedure')
                },

                datasecuritygroup: {
                    type: DatasecuritygroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Datasecuritygroup')
                },

                datasecuritymembergroup: {
                    type: DatasecuritymembergroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Datasecuritymembergroup')
                },

                datasecuritydatasetauditdetail: {
                    type: DatasecuritydatasetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Datasecuritydatasetauditdetail')
                },

                datasecurityownergroup: {
                    type: DatasecurityownergroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Datasecurityownergroup')
                },

                defaultmodifierauditdetail: {
                    type: DefaultmodifierauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Defaultmodifierauditdetail')
                },

                cpt4Procedurefileuploaddetail: {
                    type: Cpt4ProcedurefileuploaddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cpt4Procedurefileuploaddetail')
                },

                defaultmodifiercompnote: {
                    type: DefaultmodifiercompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Defaultmodifiercompnote')
                },

                delegschedauditdetail: {
                    type: DelegschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Delegschedauditdetail')
                },

                defaultmodifiercomp: {
                    type: DefaultmodifiercompType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Defaultmodifiercomp')
                },

                credstatuscode: {
                    type: CredstatuscodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Credstatuscode')
                },

                cpt4Procmedfileuploaddetail: {
                    type: Cpt4ProcmedfileuploaddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Cpt4Procmedfileuploaddetail')
                },

                datasecurityproduct: {
                    type: DatasecurityproductType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Datasecurityproduct')
                },

                delegfunction: {
                    type: DelegfunctionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Delegfunction')
                },

                delegschedfunctionassign: {
                    type: DelegschedfunctionassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Delegschedfunctionassign')
                },

                datasecuritydataset: {
                    type: DatasecuritydatasetType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Datasecuritydataset')
                },

                delegsched: {
                    type: DelegschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Delegsched')
                },

                delegschedfunction: {
                    type: DelegschedfunctionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Delegschedfunction')
                },

                delegset: {
                    type: DelegsetType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Delegset')
                },

                delegsetnote: {
                    type: DelegsetnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Delegsetnote')
                },

                delegschedscenariofunction: {
                    type: DelegschedscenariofunctionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Delegschedscenariofunction')
                },

                delegschedscenario: {
                    type: DelegschedscenarioType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Delegschedscenario')
                },

                delegschedscenariofunctionserv: {
                    type: DelegschedscenariofunctionservType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Delegschedscenariofunctionserv')
                },

                denyreasoncode: {
                    type: DenyreasoncodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Denyreasoncode')
                },

                diagcoderangecat: {
                    type: DiagcoderangecatType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Diagcoderangecat')
                },

                delegschedentity: {
                    type: DelegschedentityType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Delegschedentity')
                },

                delegsettimeline: {
                    type: DelegsettimelineType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Delegsettimeline')
                },

                delegsetschedassign: {
                    type: DelegsetschedassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Delegsetschedassign')
                },

                denyreasoncodeauditdetail: {
                    type: DenyreasoncodeauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Denyreasoncodeauditdetail')
                },

                delegsetauditdetail: {
                    type: DelegsetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Delegsetauditdetail')
                },

                directoryusersuppressrsncode: {
                    type: DirectoryusersuppressrsncodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Directoryusersuppressrsncode')
                },

                diagnosissetcatdetail: {
                    type: DiagnosissetcatdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Diagnosissetcatdetail')
                },

                delegschednote: {
                    type: DelegschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Delegschednote')
                },

                distributionchannel: {
                    type: DistributionchannelType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Distributionchannel')
                },

                deleteutilityerrorqueue: {
                    type: DeleteutilityerrorqueueType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Deleteutilityerrorqueue')
                },

                diagcategory: {
                    type: DiagcategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Diagcategory')
                },

                diagnosisset: {
                    type: DiagnosissetType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Diagnosisset')
                },

                diagnosissetcatdetaildef: {
                    type: DiagnosissetcatdetaildefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Diagnosissetcatdetaildef')
                },

                diagnosissetcat: {
                    type: DiagnosissetcatType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Diagnosissetcat')
                },

                dofrschedscenarioserv: {
                    type: DofrschedscenarioservType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Dofrschedscenarioserv')
                },

                dofrsetauditdetail: {
                    type: DofrsetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Dofrsetauditdetail')
                },

                distributionchannelnote: {
                    type: DistributionchannelnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Distributionchannelnote')
                },

                distchannelauditdetail: {
                    type: DistchannelauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Distchannelauditdetail')
                },

                dofrschedauditdetail: {
                    type: DofrschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Dofrschedauditdetail')
                },

                diagnosissetauditdetail: {
                    type: DiagnosissetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Diagnosissetauditdetail')
                },

                dofrsched: {
                    type: DofrschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Dofrsched')
                },

                dofrsettimeline: {
                    type: DofrsettimelineType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Dofrsettimeline')
                },

                dofrsetschedassign: {
                    type: DofrsetschedassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Dofrsetschedassign')
                },

                drcrestrict: {
                    type: DrcrestrictType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Drcrestrict')
                },

                drcmapper: {
                    type: DrcmapperType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Drcmapper')
                },

                drgbasefileuploaddetail: {
                    type: DrgbasefileuploaddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Drgbasefileuploaddetail')
                },

                drgversion: {
                    type: DrgversionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Drgversion')
                },

                drgbasefileuploadheader: {
                    type: DrgbasefileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Drgbasefileuploadheader')
                },

                eocactioncode: {
                    type: EocactioncodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Eocactioncode')
                },

                editcode: {
                    type: EditcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Editcode')
                },

                eocsched: {
                    type: EocschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Eocsched')
                },

                eocschedhold: {
                    type: EocschedholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Eocschedhold')
                },

                eocschedauditdetail: {
                    type: EocschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Eocschedauditdetail')
                },

                drg: {
                    type: DrgType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Drg')
                },

                dofrschedscenario: {
                    type: DofrschedscenarioType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Dofrschedscenario')
                },

                dofrschednote: {
                    type: DofrschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Dofrschednote')
                },

                eocschednote: {
                    type: EocschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Eocschednote')
                },

                dofrset: {
                    type: DofrsetType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Dofrset')
                },

                eocschedtriggerevent: {
                    type: EocschedtriggereventType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Eocschedtriggerevent')
                },

                eocschedtriggereventaction: {
                    type: EocschedtriggereventactionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Eocschedtriggereventaction')
                },

                dofrschedentity: {
                    type: DofrschedentityType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Dofrschedentity')
                },

                dofrsetnote: {
                    type: DofrsetnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Dofrsetnote')
                },

                eocschedrelatedeventserv: {
                    type: EocschedrelatedeventservType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Eocschedrelatedeventserv')
                },

                eocschedrelatedeventaction: {
                    type: EocschedrelatedeventactionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Eocschedrelatedeventaction')
                },

                eocschedstate: {
                    type: EocschedstateType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Eocschedstate')
                },

                eocschedtriggereventserv: {
                    type: EocschedtriggereventservType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Eocschedtriggereventserv')
                },

                eventlog: {
                    type: EventlogType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Eventlog')
                },

                eocsetschedassign: {
                    type: EocsetschedassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Eocsetschedassign')
                },

                eocset: {
                    type: EocsetType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Eocset')
                },

                eocsetnote: {
                    type: EocsetnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Eocsetnote')
                },

                eocschedrelatedevent: {
                    type: EocschedrelatedeventType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Eocschedrelatedevent')
                },

                eocsethold: {
                    type: EocsetholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Eocsethold')
                },

                eocsetauditdetail: {
                    type: EocsetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Eocsetauditdetail')
                },

                dupclaimedit: {
                    type: DupclaimeditType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Dupclaimedit')
                },

                extractftpsettingsauditdetail: {
                    type: ExtractftpsettingsauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Extractftpsettingsauditdetail')
                },

                fallthrucomp: {
                    type: FallthrucompType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fallthrucomp')
                },

                extractftpsetting: {
                    type: ExtractftpsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Extractftpsetting')
                },

                extractftpsettingsnote: {
                    type: ExtractftpsettingsnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Extractftpsettingsnote')
                },

                fallthrucompauditdetail: {
                    type: FallthrucompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fallthrucompauditdetail')
                },

                extractftpsettingsnotedetail: {
                    type: ExtractftpsettingsnotedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Extractftpsettingsnotedetail')
                },

                eocschedtriggerrelatedassign: {
                    type: EocschedtriggerrelatedassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Eocschedtriggerrelatedassign')
                },

                facilitypapertype: {
                    type: FacilitypapertypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Facilitypapertype')
                },

                expensecode: {
                    type: ExpensecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Expensecode')
                },

                expensecodeemplstatus: {
                    type: ExpensecodeemplstatusType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Expensecodeemplstatus')
                },

                fallthrucompnote: {
                    type: FallthrucompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fallthrucompnote')
                },

                familyacctmaxhx: {
                    type: FamilyacctmaxhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Familyacctmaxhx')
                },

                fallthrucompclaimclass: {
                    type: FallthrucompclaimclassType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fallthrucompclaimclass')
                },

                familyunitlevelcovlev: {
                    type: FamilyunitlevelcovlevType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Familyunitlevelcovlev')
                },

                familyunitnote: {
                    type: FamilyunitnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Familyunitnote')
                },

                familyunitschedleveldetailrel: {
                    type: FamilyunitschedleveldetailrelType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Familyunitschedleveldetailrel')
                },

                familyunitschedule: {
                    type: FamilyunitscheduleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Familyunitschedule')
                },

                familyunitschedulelevel: {
                    type: FamilyunitschedulelevelType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Familyunitschedulelevel')
                },

                familyunitscheduleleveldetail: {
                    type: FamilyunitscheduleleveldetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Familyunitscheduleleveldetail')
                },

                finactivitycode: {
                    type: FinactivitycodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Finactivitycode')
                },

                financeactivitylog: {
                    type: FinanceactivitylogType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Financeactivitylog')
                },

                fallthrumodifiercompassign: {
                    type: FallthrumodifiercompassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fallthrumodifiercompassign')
                },

                fallthrucompdetail: {
                    type: FallthrucompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fallthrucompdetail')
                },

                financeactivitylogattribtag: {
                    type: FinanceactivitylogattribtagType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Financeactivitylogattribtag')
                },

                financeactivitylogattrib: {
                    type: FinanceactivitylogattribType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Financeactivitylogattrib')
                },

                financeactivitylogattribset: {
                    type: FinanceactivitylogattribsetType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Financeactivitylogattribset')
                },

                financialpenalty: {
                    type: FinancialpenaltyType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Financialpenalty')
                },

                financeerror: {
                    type: FinanceerrorType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Financeerror')
                },

                finattribschedauditdetail: {
                    type: FinattribschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Finattribschedauditdetail')
                },

                finattribsched: {
                    type: FinattribschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Finattribsched')
                },

                fallthrucomphold: {
                    type: FallthrucompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fallthrucomphold')
                },

                familyacctmax: {
                    type: FamilyacctmaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Familyacctmax')
                },

                financialpenaltyauditdetail: {
                    type: FinancialpenaltyauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Financialpenaltyauditdetail')
                },

                familyunitauditdetail: {
                    type: FamilyunitauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Familyunitauditdetail')
                },

                finattribcode: {
                    type: FinattribcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Finattribcode')
                },

                finattribschedsegment: {
                    type: FinattribschedsegmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Finattribschedsegment')
                },

                finattribschedcodeassign: {
                    type: FinattribschedcodeassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Finattribschedcodeassign')
                },

                finattribschednote: {
                    type: FinattribschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Finattribschednote')
                },

                financialpenaltydetail: {
                    type: FinancialpenaltydetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Financialpenaltydetail')
                },

                finattribschedvariable: {
                    type: FinattribschedvariableType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Finattribschedvariable')
                },

                finerrorapremark: {
                    type: FinerrorapremarkType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Finerrorapremark')
                },

                finerrorapinterest: {
                    type: FinerrorapinterestType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Finerrorapinterest')
                },

                finattribschedvariabledef: {
                    type: FinattribschedvariabledefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Finattribschedvariabledef')
                },

                finerroraptransaction: {
                    type: FinerroraptransactionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Finerroraptransaction')
                },

                finattribschedsegmentdef: {
                    type: FinattribschedsegmentdefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Finattribschedsegmentdef')
                },

                finerrorpaymentrequesterror: {
                    type: FinerrorpaymentrequesterrorType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Finerrorpaymentrequesterror')
                },

                finerrorstatcorrection: {
                    type: FinerrorstatcorrectionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Finerrorstatcorrection')
                },

                financeerrorqueue: {
                    type: FinanceerrorqueueType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Financeerrorqueue')
                },

                finerrorqueue: {
                    type: FinerrorqueueType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Finerrorqueue')
                },

                finerrorsystem: {
                    type: FinerrorsystemType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Finerrorsystem')
                },

                finerrorpaymentresponse: {
                    type: FinerrorpaymentresponseType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Finerrorpaymentresponse')
                },

                finerrortranstagging: {
                    type: FinerrortranstaggingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Finerrortranstagging')
                },

                fulfillcontent: {
                    type: FulfillcontentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fulfillcontent')
                },

                fulfillevent: {
                    type: FulfilleventType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fulfillevent')
                },

                fulfilleventidentifier: {
                    type: FulfilleventidentifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fulfilleventidentifier')
                },

                fulfilleventtemplate: {
                    type: FulfilleventtemplateType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fulfilleventtemplate')
                },

                fulfilleventtemplateoverride: {
                    type: FulfilleventtemplateoverrideType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fulfilleventtemplateoverride')
                },

                fulfilleventtracking: {
                    type: FulfilleventtrackingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fulfilleventtracking')
                },

                fulfillmassrequest: {
                    type: FulfillmassrequestType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fulfillmassrequest')
                },

                fulfillmassrequestmailingloc: {
                    type: FulfillmassrequestmailinglocType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fulfillmassrequestmailingloc')
                },

                fulfillmassvariablecontent: {
                    type: FulfillmassvariablecontentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fulfillmassvariablecontent')
                },

                finerrorvoidpayment: {
                    type: FinerrorvoidpaymentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Finerrorvoidpayment')
                },

                fulfillmentclient: {
                    type: FulfillmentclientType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fulfillmentclient')
                },

                fulfillrecipientidentifier: {
                    type: FulfillrecipientidentifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fulfillrecipientidentifier')
                },

                fulfilltemplatedetail: {
                    type: FulfilltemplatedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fulfilltemplatedetail')
                },

                fulfillrequest: {
                    type: FulfillrequestType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fulfillrequest')
                },

                fulfillrequesttracking: {
                    type: FulfillrequesttrackingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fulfillrequesttracking')
                },

                fulfilltemplate: {
                    type: FulfilltemplateType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fulfilltemplate')
                },

                finerrorpaymentrequest: {
                    type: FinerrorpaymentrequestType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Finerrorpaymentrequest')
                },

                finerrorcontracttagging: {
                    type: FinerrorcontracttaggingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Finerrorcontracttagging')
                },

                finerrorattrib: {
                    type: FinerrorattribType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Finerrorattrib')
                },

                finerrorapsurcharge: {
                    type: FinerrorapsurchargeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Finerrorapsurcharge')
                },

                fulfilltemplaterecipient: {
                    type: FulfilltemplaterecipientType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fulfilltemplaterecipient')
                },

                fulfillrequestidentifier: {
                    type: FulfillrequestidentifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fulfillrequestidentifier')
                },

                fulfillvariablecontent: {
                    type: FulfillvariablecontentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fulfillvariablecontent')
                },

                fundpoolauditdetail: {
                    type: FundpoolauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fundpoolauditdetail')
                },

                fundpoolnote: {
                    type: FundpoolnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fundpoolnote')
                },

                generalclaimsetting: {
                    type: GeneralclaimsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Generalclaimsetting')
                },

                guardrailinsrulemaximumage: {
                    type: GuardrailinsrulemaximumageType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Guardrailinsrulemaximumage')
                },

                guardrailinsruleretro: {
                    type: GuardrailinsruleretroType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Guardrailinsruleretro')
                },

                fundpool: {
                    type: FundpoolType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fundpool')
                },

                guardrailauditdetail: {
                    type: GuardrailauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Guardrailauditdetail')
                },

                guardrailschedule: {
                    type: GuardrailscheduleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Guardrailschedule')
                },

                fundtransfer: {
                    type: FundtransferType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fundtransfer')
                },

                fundpoolnotedetail: {
                    type: FundpoolnotedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Fundpoolnotedetail')
                },

                guardrailschedulenote: {
                    type: GuardrailschedulenoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Guardrailschedulenote')
                },

                guardrailinsuringrule: {
                    type: GuardrailinsuringruleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Guardrailinsuringrule')
                },

                guardrailinsrulenewborn: {
                    type: GuardrailinsrulenewbornType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Guardrailinsrulenewborn')
                },

                guardrailinsruletermination: {
                    type: GuardrailinsruleterminationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Guardrailinsruletermination')
                },

                guardrailinsrulewaitperiod: {
                    type: GuardrailinsrulewaitperiodType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Guardrailinsrulewaitperiod')
                },

                hcpcsprocdentfileuploaddetail: {
                    type: HcpcsprocdentfileuploaddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Hcpcsprocdentfileuploaddetail')
                },

                hcpcsprocedureauditdetail: {
                    type: HcpcsprocedureauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Hcpcsprocedureauditdetail')
                },

                healthcodeemplstatus: {
                    type: HealthcodeemplstatusType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Healthcodeemplstatus')
                },

                guardrailschedulevalidation: {
                    type: GuardrailschedulevalidationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Guardrailschedulevalidation')
                },

                healthcoderule: {
                    type: HealthcoderuleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Healthcoderule')
                },

                hcpcsprocedure: {
                    type: HcpcsprocedureType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Hcpcsprocedure')
                },

                icd10Diagnosisfileuploaddetail: {
                    type: Icd10DiagnosisfileuploaddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Icd10Diagnosisfileuploaddetail')
                },

                hcpcsprocedurefileuploaddetail: {
                    type: HcpcsprocedurefileuploaddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Hcpcsprocedurefileuploaddetail')
                },

                holdcode: {
                    type: HoldcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Holdcode')
                },

                icd10Diagnosis: {
                    type: Icd10DiagnosisType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Icd10Diagnosis')
                },

                icd10Fileuploadheader: {
                    type: Icd10FileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Icd10Fileuploadheader')
                },

                hcpcsprocedurefileuploadheader: {
                    type: HcpcsprocedurefileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Hcpcsprocedurefileuploadheader')
                },

                incent: {
                    type: IncentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Incent')
                },

                icd10Diagnosisauditdetail: {
                    type: Icd10DiagnosisauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Icd10Diagnosisauditdetail')
                },

                icd10Procedure: {
                    type: Icd10ProcedureType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Icd10Procedure')
                },

                homepage: {
                    type: HomepageType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Homepage')
                },

                icd9: {
                    type: Icd9Type,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Icd9')
                },

                holdclaimap: {
                    type: HoldclaimapType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Holdclaimap')
                },

                industryclassmodcode: {
                    type: IndustryclassmodcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Industryclassmodcode')
                },

                integrationtransaction: {
                    type: IntegrationtransactionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Integrationtransaction')
                },

                interestaccountappl: {
                    type: InterestaccountapplType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Interestaccountappl')
                },

                industryclassmodsched: {
                    type: IndustryclassmodschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Industryclassmodsched')
                },

                interestscheddetail: {
                    type: InterestscheddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Interestscheddetail')
                },

                industryclassauditdetail: {
                    type: IndustryclassauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Industryclassauditdetail')
                },

                interestpenaltysetting: {
                    type: InterestpenaltysettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Interestpenaltysetting')
                },

                icd10Procedurefileuploaddetail: {
                    type: Icd10ProcedurefileuploaddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Icd10Procedurefileuploaddetail')
                },

                icd10Procedureauditdetail: {
                    type: Icd10ProcedureauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Icd10Procedureauditdetail')
                },

                installationinsuringrule: {
                    type: InstallationinsuringruleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Installationinsuringrule')
                },

                instclaimsetting: {
                    type: InstclaimsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Instclaimsetting')
                },

                interestschedule: {
                    type: InterestscheduleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Interestschedule')
                },

                industryclassnote: {
                    type: IndustryclassnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Industryclassnote')
                },

                interestschednote: {
                    type: InterestschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Interestschednote')
                },

                invoiceamtvaluecode: {
                    type: InvoiceamtvaluecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Invoiceamtvaluecode')
                },

                ipservicecomp: {
                    type: IpservicecompType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ipservicecomp')
                },

                internaladjustreasoncode: {
                    type: InternaladjustreasoncodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Internaladjustreasoncode')
                },

                interestschedauditdetail: {
                    type: InterestschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Interestschedauditdetail')
                },

                ipservicecompauditdetail: {
                    type: IpservicecompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ipservicecompauditdetail')
                },

                ipservicecompdrg: {
                    type: IpservicecompdrgType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ipservicecompdrg')
                },

                interestscheddetailday: {
                    type: InterestscheddetaildayType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Interestscheddetailday')
                },

                invalidclaimedi: {
                    type: InvalidclaimediType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Invalidclaimedi')
                },

                internaladjustrsncdauditdetail: {
                    type: InternaladjustrsncdauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Internaladjustrsncdauditdetail')
                },

                industryclassmoddetail: {
                    type: IndustryclassmoddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Industryclassmoddetail')
                },

                iptransactionauditdetail: {
                    type: IptransactionauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Iptransactionauditdetail')
                },

                investigationdeviceexempt: {
                    type: InvestigationdeviceexemptType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Investigationdeviceexempt')
                },

                iptransactiondetail: {
                    type: IptransactiondetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Iptransactiondetail')
                },

                ipservicecompdrgcustom: {
                    type: IpservicecompdrgcustomType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ipservicecompdrgcustom')
                },

                ipservicecompdetailpricing: {
                    type: IpservicecompdetailpricingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ipservicecompdetailpricing')
                },

                ipservicecompnote: {
                    type: IpservicecompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ipservicecompnote')
                },

                ipservicecompdetail: {
                    type: IpservicecompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ipservicecompdetail')
                },

                ipservicecomphold: {
                    type: IpservicecompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ipservicecomphold')
                },

                liabilitycarrier: {
                    type: LiabilitycarrierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Liabilitycarrier')
                },

                iptransactionnotedetail: {
                    type: IptransactionnotedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Iptransactionnotedetail')
                },

                iptransactionnote: {
                    type: IptransactionnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Iptransactionnote')
                },

                licensingentitypermit: {
                    type: LicensingentitypermitType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Licensingentitypermit')
                },

                lobmodifiercompassign: {
                    type: LobmodifiercompassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Lobmodifiercompassign')
                },

                irmEvnt: {
                    type: IrmEvntType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('IrmEvnt')
                },

                licensingentity: {
                    type: LicensingentityType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Licensingentity')
                },

                lobmodassignauditdetail: {
                    type: LobmodassignauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Lobmodassignauditdetail')
                },

                joblastrundate: {
                    type: JoblastrundateType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Joblastrundate')
                },

                lobmodifiercompassignhx: {
                    type: LobmodifiercompassignhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Lobmodifiercompassignhx')
                },

                locality: {
                    type: LocalityType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Locality')
                },

                lineofbusinessauditdetail: {
                    type: LineofbusinessauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Lineofbusinessauditdetail')
                },

                iptransactionheader: {
                    type: IptransactionheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Iptransactionheader')
                },

                medpolicyengineresponse: {
                    type: MedpolicyengineresponseType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicyengineresponse')
                },

                medpolicyenginetierresponse: {
                    type: MedpolicyenginetierresponseType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicyenginetierresponse')
                },

                lineofbusiness: {
                    type: LineofbusinessType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Lineofbusiness')
                },

                medpolicyruleappliedhistory: {
                    type: MedpolicyruleappliedhistoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicyruleappliedhistory')
                },

                licensingentityauditdetail: {
                    type: LicensingentityauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Licensingentityauditdetail')
                },

                medpolicyrule: {
                    type: MedpolicyruleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicyrule')
                },

                medpolicyrulebenefit: {
                    type: MedpolicyrulebenefitType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicyrulebenefit')
                },

                medpolicyrulerse: {
                    type: MedpolicyrulerseType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicyrulerse')
                },

                medpolicyrulemodifier: {
                    type: MedpolicyrulemodifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicyrulemodifier')
                },

                medpolicyruleauditdetail: {
                    type: MedpolicyruleauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicyruleauditdetail')
                },

                medpolicyrulerev: {
                    type: MedpolicyrulerevType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicyrulerev')
                },

                medpolicyrulediag: {
                    type: MedpolicyrulediagType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicyrulediag')
                },

                medpolicyrulenote: {
                    type: MedpolicyrulenoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicyrulenote')
                },

                medpolicysched: {
                    type: MedpolicyschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicysched')
                },

                logo: {
                    type: LogoType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Logo')
                },

                medpolicyruleancillary: {
                    type: MedpolicyruleancillaryType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicyruleancillary')
                },

                medpolicyschedtimeline: {
                    type: MedpolicyschedtimelineType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicyschedtimeline')
                },

                medpolicyrulevalidation: {
                    type: MedpolicyrulevalidationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicyrulevalidation')
                },

                medpolicysetauditdetail: {
                    type: MedpolicysetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicysetauditdetail')
                },

                medpolicyset: {
                    type: MedpolicysetType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicyset')
                },

                medpolicyschedauditdetail: {
                    type: MedpolicyschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicyschedauditdetail')
                },

                medpolicyruleproc: {
                    type: MedpolicyruleprocType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicyruleproc')
                },

                medpolicyruletaxonomy: {
                    type: MedpolicyruletaxonomyType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicyruletaxonomy')
                },

                medpolicysettimeline: {
                    type: MedpolicysettimelineType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicysettimeline')
                },

                medpolicysetnote: {
                    type: MedpolicysetnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicysetnote')
                },

                medpolicyschedtimelinerule: {
                    type: MedpolicyschedtimelineruleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicyschedtimelinerule')
                },

                medpolicysettimelinesched: {
                    type: MedpolicysettimelineschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicysettimelinesched')
                },

                medpolicyschednotifdef: {
                    type: MedpolicyschednotifdefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicyschednotifdef')
                },

                memacctacctbalhxxref: {
                    type: MemacctacctbalhxxrefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Memacctacctbalhxxref')
                },

                medpolicyschednote: {
                    type: MedpolicyschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicyschednote')
                },

                medpolicyruletier: {
                    type: MedpolicyruletierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Medpolicyruletier')
                },

                memacctmembership: {
                    type: MemacctmembershipType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memacctmembership')
                },

                member: {
                    type: MemberType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Member')
                },

                memacctcustomerpurchasedetail: {
                    type: MemacctcustomerpurchasedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memacctcustomerpurchasedetail')
                },

                memacctcustomerpurchaseitem: {
                    type: MemacctcustomerpurchaseitemType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memacctcustomerpurchaseitem')
                },

                memberaccountorder: {
                    type: MemberaccountorderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberaccountorder')
                },

                memberaccounthold: {
                    type: MemberaccountholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberaccounthold')
                },

                memberaccount: {
                    type: MemberaccountType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberaccount')
                },

                memberaccountsetting: {
                    type: MemberaccountsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberaccountsetting')
                },

                memacctrun: {
                    type: MemacctrunType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memacctrun')
                },

                memberaccounthx: {
                    type: MemberaccounthxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberaccounthx')
                },

                memberacctmaxhx: {
                    type: MemberacctmaxhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberacctmaxhx')
                },

                memberaddressdiag: {
                    type: MemberaddressdiagType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberaddressdiag')
                },

                memberacctmax: {
                    type: MemberacctmaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberacctmax')
                },

                memberaddress: {
                    type: MemberaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberaddress')
                },

                memberattribute: {
                    type: MemberattributeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberattribute')
                },

                memberaddressattn: {
                    type: MemberaddressattnType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberaddressattn')
                },

                memberacctpayroll: {
                    type: MemberacctpayrollType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberacctpayroll')
                },

                memberaddressprov: {
                    type: MemberaddressprovType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberaddressprov')
                },

                memberbenefit: {
                    type: MemberbenefitType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberbenefit')
                },

                memberbanking: {
                    type: MemberbankingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberbanking')
                },

                memberbenefitcovlevelcode: {
                    type: MemberbenefitcovlevelcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberbenefitcovlevelcode')
                },

                memberbenefitpremium: {
                    type: MemberbenefitpremiumType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberbenefitpremium')
                },

                memberbenefitrider: {
                    type: MemberbenefitriderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberbenefitrider')
                },

                memberbenefit834Hist: {
                    type: Memberbenefit834HistType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberbenefit834Hist')
                },

                membercob: {
                    type: MembercobType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Membercob')
                },

                membercobexcldiag: {
                    type: MembercobexcldiagType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Membercobexcldiag')
                },

                memberauditdetail: {
                    type: MemberauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberauditdetail')
                },

                membercaserate: {
                    type: MembercaserateType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Membercaserate')
                },

                membercobexclproc: {
                    type: MembercobexclprocType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Membercobexclproc')
                },

                membercobrelentityphone: {
                    type: MembercobrelentityphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Membercobrelentityphone')
                },

                membercobrelentityelectcom: {
                    type: MembercobrelentityelectcomType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Membercobrelentityelectcom')
                },

                membercontactaddress: {
                    type: MembercontactaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Membercontactaddress')
                },

                membercontactelectcomm: {
                    type: MembercontactelectcommType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Membercontactelectcomm')
                },

                membercontactlanguage: {
                    type: MembercontactlanguageType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Membercontactlanguage')
                },

                membercustodial: {
                    type: MembercustodialType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Membercustodial')
                },

                memberdepcert: {
                    type: MemberdepcertType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberdepcert')
                },

                memberdepcertar: {
                    type: MemberdepcertarType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberdepcertar')
                },

                memberdisability: {
                    type: MemberdisabilityType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberdisability')
                },

                memberdisclosure: {
                    type: MemberdisclosureType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberdisclosure')
                },

                memberelectroniccomm: {
                    type: MemberelectroniccommType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberelectroniccomm')
                },

                memberexternalid: {
                    type: MemberexternalidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberexternalid')
                },

                membergovernmentbenefit: {
                    type: MembergovernmentbenefitType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Membergovernmentbenefit')
                },

                membercontactphone: {
                    type: MembercontactphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Membercontactphone')
                },

                membercobrelentityaddress: {
                    type: MembercobrelentityaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Membercobrelentityaddress')
                },

                membercobverification: {
                    type: MembercobverificationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Membercobverification')
                },

                memberhold: {
                    type: MemberholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberhold')
                },

                memberdelete: {
                    type: MemberdeleteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberdelete')
                },

                memberindicator: {
                    type: MemberindicatorType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberindicator')
                },

                membercontact: {
                    type: MembercontactType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Membercontact')
                },

                memberincentar: {
                    type: MemberincentarType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberincentar')
                },

                memberincent: {
                    type: MemberincentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberincent')
                },

                memberimage: {
                    type: MemberimageType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberimage')
                },

                memberinvaccident: {
                    type: MemberinvaccidentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberinvaccident')
                },

                memberidcard: {
                    type: MemberidcardType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberidcard')
                },

                memberinvdate: {
                    type: MemberinvdateType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberinvdate')
                },

                memberinternaloobtimeline: {
                    type: MemberinternaloobtimelineType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberinternaloobtimeline')
                },

                memberidcardrequest: {
                    type: MemberidcardrequestType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberidcardrequest')
                },

                memberinvdiagnosis: {
                    type: MemberinvdiagnosisType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberinvdiagnosis')
                },

                memberinstitution: {
                    type: MemberinstitutionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberinstitution')
                },

                memberinvestigation: {
                    type: MemberinvestigationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberinvestigation')
                },

                memberinvnote: {
                    type: MemberinvnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberinvnote')
                },

                memberindivmaxhx: {
                    type: MemberindivmaxhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberindivmaxhx')
                },

                memberinvprovider: {
                    type: MemberinvproviderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberinvprovider')
                },

                memberinternaloobplan: {
                    type: MemberinternaloobplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberinternaloobplan')
                },

                memberindivmax: {
                    type: MemberindivmaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberindivmax')
                },

                memberlanguage: {
                    type: MemberlanguageType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberlanguage')
                },

                memberoocplan: {
                    type: MemberoocplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberoocplan')
                },

                memberperiochart: {
                    type: MemberperiochartType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberperiochart')
                },

                memberperiopocket: {
                    type: MemberperiopocketType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberperiopocket')
                },

                memberotherincome: {
                    type: MemberotherincomeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberotherincome')
                },

                memberphone: {
                    type: MemberphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberphone')
                },

                memberserviceplan: {
                    type: MemberserviceplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberserviceplan')
                },

                memberooctimeline: {
                    type: MemberooctimelineType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberooctimeline')
                },

                memberqueue: {
                    type: MemberqueueType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberqueue')
                },

                membernote: {
                    type: MembernoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Membernote')
                },

                memberprovider: {
                    type: MemberproviderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberprovider')
                },

                memberrecoup: {
                    type: MemberrecoupType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberrecoup')
                },

                memberperiomeasure: {
                    type: MemberperiomeasureType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberperiomeasure')
                },

                memberstudent: {
                    type: MemberstudentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberstudent')
                },

                memberrecoupclaim: {
                    type: MemberrecoupclaimType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberrecoupclaim')
                },

                membernetwork: {
                    type: MembernetworkType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Membernetwork')
                },

                membersupertoothid: {
                    type: MembersupertoothidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Membersupertoothid')
                },

                membersupertooth: {
                    type: MembersupertoothType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Membersupertooth')
                },

                memberutilizationoptin: {
                    type: MemberutilizationoptinType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberutilizationoptin')
                },

                memgroup: {
                    type: MemgroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroup')
                },

                memgroup834Extract: {
                    type: Memgroup834ExtractType,
                    args: {},
                    resolve: getEntityResolver('Memgroup834Extract')
                },

                memexpensecodemaxhx: {
                    type: MemexpensecodemaxhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memexpensecodemaxhx')
                },

                membertransfer: {
                    type: MembertransferType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Membertransfer')
                },

                memexpensecodemax: {
                    type: MemexpensecodemaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memexpensecodemax')
                },

                memgroupaddresshour: {
                    type: MemgroupaddresshourType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupaddresshour')
                },

                membervital: {
                    type: MembervitalType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Membervital')
                },

                membertoothchart: {
                    type: MembertoothchartType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Membertoothchart')
                },

                memberutilizationplan: {
                    type: MemberutilizationplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memberutilizationplan')
                },

                memgroupaddress: {
                    type: MemgroupaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupaddress')
                },

                memgroupalias: {
                    type: MemgroupaliasType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupalias')
                },

                memgroupaddressphone: {
                    type: MemgroupaddressphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupaddressphone')
                },

                memgroupbanking: {
                    type: MemgroupbankingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupbanking')
                },

                memgroupbusinessdef: {
                    type: MemgroupbusinessdefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupbusinessdef')
                },

                memgroupauditdetail: {
                    type: MemgroupauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupauditdetail')
                },

                memgroupcontactelectroniccom: {
                    type: MemgroupcontactelectroniccomType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontactelectroniccom')
                },

                memgroupcontactaddress: {
                    type: MemgroupcontactaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontactaddress')
                },

                memgroupcontact: {
                    type: MemgroupcontactType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontact')
                },

                memgroupcontactassignment: {
                    type: MemgroupcontactassignmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontactassignment')
                },

                memgroupcontactphone: {
                    type: MemgroupcontactphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontactphone')
                },

                memgroupcontactauditdetail: {
                    type: MemgroupcontactauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontactauditdetail')
                },

                memgroupcontactaddressphone: {
                    type: MemgroupcontactaddressphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontactaddressphone')
                },

                memgroupcontractbillingpref: {
                    type: MemgroupcontractbillingprefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractbillingpref')
                },

                memgroupcontractgovtreport: {
                    type: MemgroupcontractgovtreportType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractgovtreport')
                },

                memgroupcontract: {
                    type: MemgroupcontractType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontract')
                },

                memgroupcontractauditdetail: {
                    type: MemgroupcontractauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractauditdetail')
                },

                memgroupcontractevent: {
                    type: MemgroupcontracteventType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractevent')
                },

                memgroupcontactrole: {
                    type: MemgroupcontactroleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontactrole')
                },

                memgroupcontactphoneassign: {
                    type: MemgroupcontactphoneassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontactphoneassign')
                },

                memgroupcontractdistchannel: {
                    type: MemgroupcontractdistchannelType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractdistchannel')
                },

                memgroupcontractextid: {
                    type: MemgroupcontractextidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractextid')
                },

                memgroupcontacteleccomassign: {
                    type: MemgroupcontacteleccomassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontacteleccomassign')
                },

                memgroupcontractopt: {
                    type: MemgroupcontractoptType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractopt')
                },

                memgroupcontractoptcontribut: {
                    type: MemgroupcontractoptcontributType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractoptcontribut')
                },

                memgroupcontractopenenroll: {
                    type: MemgroupcontractopenenrollType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractopenenroll')
                },

                memgroupcontractoptpop: {
                    type: MemgroupcontractoptpopType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractoptpop')
                },

                memgroupcontractplanattrib: {
                    type: MemgroupcontractplanattribType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanattrib')
                },

                memgroupcontractoptinsrule: {
                    type: MemgroupcontractoptinsruleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractoptinsrule')
                },

                memgroupcontractplanoptaddr: {
                    type: MemgroupcontractplanoptaddrType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanoptaddr')
                },

                memgroupcontractplanattribset: {
                    type: MemgroupcontractplanattribsetType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanattribset')
                },

                memgroupcontractoptpopinsrule: {
                    type: MemgroupcontractoptpopinsruleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractoptpopinsrule')
                },

                memgroupcontractplanopthold: {
                    type: MemgroupcontractplanoptholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanopthold')
                },

                memgroupcontractplanoptmsa: {
                    type: MemgroupcontractplanoptmsaType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanoptmsa')
                },

                memgroupcontractplanopttag: {
                    type: MemgroupcontractplanopttagType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanopttag')
                },

                memgroupcontractplanyear: {
                    type: MemgroupcontractplanyearType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanyear')
                },

                memgroupcontractplanyrbillrt: {
                    type: MemgroupcontractplanyrbillrtType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanyrbillrt')
                },

                memgroupcontractplanoptplan: {
                    type: MemgroupcontractplanoptplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanoptplan')
                },

                memgroupcontractlock: {
                    type: MemgroupcontractlockType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractlock')
                },

                memgroupcontractplanyrbillovd: {
                    type: MemgroupcontractplanyrbillovdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanyrbillovd')
                },

                memgroupcontractrenewal: {
                    type: MemgroupcontractrenewalType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractrenewal')
                },

                memgroupcontractvalidation: {
                    type: MemgroupcontractvalidationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractvalidation')
                },

                memgroupdepcert: {
                    type: MemgroupdepcertType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupdepcert')
                },

                memgroupcontractplanoptnetwk: {
                    type: MemgroupcontractplanoptnetwkType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanoptnetwk')
                },

                memgroupcontractproducer: {
                    type: MemgroupcontractproducerType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractproducer')
                },

                memgroupcontractplanoptphone: {
                    type: MemgroupcontractplanoptphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanoptphone')
                },

                memgroupexternalid: {
                    type: MemgroupexternalidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupexternalid')
                },

                memgroupcontractrenewaltrigger: {
                    type: MemgroupcontractrenewaltriggerType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractrenewaltrigger')
                },

                memgroupimage: {
                    type: MemgroupimageType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupimage')
                },

                memgroupinsuringrule: {
                    type: MemgroupinsuringruleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupinsuringrule')
                },

                memgrouppayroll: {
                    type: MemgrouppayrollType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgrouppayroll')
                },

                memgrouppayrolldate: {
                    type: MemgrouppayrolldateType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgrouppayrolldate')
                },

                memgroupjobstatus: {
                    type: MemgroupjobstatusType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupjobstatus')
                },

                memgroupcontractplanoption: {
                    type: MemgroupcontractplanoptionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanoption')
                },

                memgroupcontractplanoptextid: {
                    type: MemgroupcontractplanoptextidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanoptextid')
                },

                memgrouphold: {
                    type: MemgroupholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgrouphold')
                },

                memgroupemployeecount: {
                    type: MemgroupemployeecountType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupemployeecount')
                },

                memgroupcontractsalesoffice: {
                    type: MemgroupcontractsalesofficeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractsalesoffice')
                },

                memgrouppopidentifiervalue: {
                    type: MemgrouppopidentifiervalueType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgrouppopidentifiervalue')
                },

                memgroupnote: {
                    type: MemgroupnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupnote')
                },

                memgrouppopulationorder: {
                    type: MemgrouppopulationorderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgrouppopulationorder')
                },

                memgrouppopidentifier: {
                    type: MemgrouppopidentifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgrouppopidentifier')
                },

                memgrouppopulation: {
                    type: MemgrouppopulationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgrouppopulation')
                },

                memgroupreportingcode: {
                    type: MemgroupreportingcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupreportingcode')
                },

                memgrouppriorcarrier: {
                    type: MemgrouppriorcarrierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgrouppriorcarrier')
                },

                memgroupstmt: {
                    type: MemgroupstmtType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupstmt')
                },

                memgroupsupportteam: {
                    type: MemgroupsupportteamType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupsupportteam')
                },

                memgroupsetting: {
                    type: MemgroupsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupsetting')
                },

                memgroupsurcharge: {
                    type: MemgroupsurchargeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupsurcharge')
                },

                memgrouppopulationconfig: {
                    type: MemgrouppopulationconfigType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgrouppopulationconfig')
                },

                memgrouppopinsuringrule: {
                    type: MemgrouppopinsuringruleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgrouppopinsuringrule')
                },

                memgroupstmtempstat: {
                    type: MemgroupstmtempstatType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgroupstmtempstat')
                },

                memhealthcodemax: {
                    type: MemhealthcodemaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memhealthcodemax')
                },

                memgrouptin: {
                    type: MemgrouptinType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memgrouptin')
                },

                mnrpcomp: {
                    type: MnrpcompType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Mnrpcomp')
                },

                mnrpcompauditdetail: {
                    type: MnrpcompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Mnrpcompauditdetail')
                },

                memhealthcodemaxhx: {
                    type: MemhealthcodemaxhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Memhealthcodemaxhx')
                },

                mnrpcompdetailproc: {
                    type: MnrpcompdetailprocType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Mnrpcompdetailproc')
                },

                mnrpcomphold: {
                    type: MnrpcompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Mnrpcomphold')
                },

                mnrpcompdetail: {
                    type: MnrpcompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Mnrpcompdetail')
                },

                mnrpcompnote: {
                    type: MnrpcompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Mnrpcompnote')
                },

                modifiercodebasefileuploaddeta: {
                    type: ModifiercodebasefileuploaddetaType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Modifiercodebasefileuploaddeta')
                },

                modifiercode: {
                    type: ModifiercodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Modifiercode')
                },

                modifiercomp: {
                    type: ModifiercompType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Modifiercomp')
                },

                modifiercompauditdetail: {
                    type: ModifiercompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Modifiercompauditdetail')
                },

                modifiercompclaimclass: {
                    type: ModifiercompclaimclassType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Modifiercompclaimclass')
                },

                modifiercodebasefileuploadhead: {
                    type: ModifiercodebasefileuploadheadType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Modifiercodebasefileuploadhead')
                },

                modifiercompnote: {
                    type: ModifiercompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Modifiercompnote')
                },

                mprcompdetailmodassign: {
                    type: MprcompdetailmodassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Mprcompdetailmodassign')
                },

                mprcompdetail: {
                    type: MprcompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Mprcompdetail')
                },

                mprcompdetailmod: {
                    type: MprcompdetailmodType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Mprcompdetailmod')
                },

                mprcompnote: {
                    type: MprcompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Mprcompnote')
                },

                mprcomphold: {
                    type: MprcompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Mprcomphold')
                },

                modifiercompdetail: {
                    type: ModifiercompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Modifiercompdetail')
                },

                mprcomp: {
                    type: MprcompType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Mprcomp')
                },

                mprcompdetailcoeff: {
                    type: MprcompdetailcoeffType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Mprcompdetailcoeff')
                },

                mprcompauditdetail: {
                    type: MprcompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Mprcompauditdetail')
                },

                msa: {
                    type: MsaType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msa')
                },

                msaaccesspoint: {
                    type: MsaaccesspointType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msaaccesspoint')
                },

                msaaccesspointfus: {
                    type: MsaaccesspointfusType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msaaccesspointfus')
                },

                msaaccesspointfuslevel: {
                    type: MsaaccesspointfuslevelType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msaaccesspointfuslevel')
                },

                msaaccesspointflat: {
                    type: MsaaccesspointflatType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msaaccesspointflat')
                },

                msacapcarryoverfuslevel: {
                    type: MsacapcarryoverfuslevelType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msacapcarryoverfuslevel')
                },

                msacarryover: {
                    type: MsacarryoverType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msacarryover')
                },

                msaauditdetail: {
                    type: MsaauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msaauditdetail')
                },

                msacontribdef: {
                    type: MsacontribdefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msacontribdef')
                },

                msaaccesspointrctier: {
                    type: MsaaccesspointrctierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Msaaccesspointrctier')
                },

                msacapcarryoverfus: {
                    type: MsacapcarryoverfusType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msacapcarryoverfus')
                },

                msacontribmaxfus: {
                    type: MsacontribmaxfusType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msacontribmaxfus')
                },

                msaaccesspointrc: {
                    type: MsaaccesspointrcType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Msaaccesspointrc')
                },

                msaaptranstypedef: {
                    type: MsaaptranstypedefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msaaptranstypedef')
                },

                msacapcarryover: {
                    type: MsacapcarryoverType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msacapcarryover')
                },

                msacontribmaxfuslevel: {
                    type: MsacontribmaxfuslevelType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msacontribmaxfuslevel')
                },

                msacontribmax: {
                    type: MsacontribmaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msacontribmax')
                },

                msaexpensecodemax: {
                    type: MsaexpensecodemaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msaexpensecodemax')
                },

                msabalexchange: {
                    type: MsabalexchangeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msabalexchange')
                },

                msacontribtypedef: {
                    type: MsacontribtypedefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msacontribtypedef')
                },

                msacoveredmr: {
                    type: MsacoveredmrType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msacoveredmr')
                },

                msacovrelationship: {
                    type: MsacovrelationshipType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Msacovrelationship')
                },

                msacontribtypeprorate: {
                    type: MsacontribtypeprorateType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msacontribtypeprorate')
                },

                msaexpense: {
                    type: MsaexpenseType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msaexpense')
                },

                msaexternalid: {
                    type: MsaexternalidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msaexternalid')
                },

                msadepcert: {
                    type: MsadepcertType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Msadepcert')
                },

                msaexpensecode: {
                    type: MsaexpensecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msaexpensecode')
                },

                msaflatcontrib: {
                    type: MsaflatcontribType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msaflatcontrib')
                },

                msaflatap: {
                    type: MsaflatapType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Msaflatap')
                },

                msafusaplevel: {
                    type: MsafusaplevelType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Msafusaplevel')
                },

                msafusmaxbalance: {
                    type: MsafusmaxbalanceType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msafusmaxbalance')
                },

                msafusap: {
                    type: MsafusapType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Msafusap')
                },

                msafuscontrib: {
                    type: MsafuscontribType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msafuscontrib')
                },

                msahealthcare: {
                    type: MsahealthcareType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msahealthcare')
                },

                msafuscontriblevel: {
                    type: MsafuscontriblevelType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msafuscontriblevel')
                },

                msagraceperiod: {
                    type: MsagraceperiodType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Msagraceperiod')
                },

                msafusmaxballevel: {
                    type: MsafusmaxballevelType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msafusmaxballevel')
                },

                msaindivmax: {
                    type: MsaindivmaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msaindivmax')
                },

                msahealthcodemax: {
                    type: MsahealthcodemaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msahealthcodemax')
                },

                msalevelstatus: {
                    type: MsalevelstatusType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msalevelstatus')
                },

                msaincentcredit: {
                    type: MsaincentcreditType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msaincentcredit')
                },

                msaincdecrule: {
                    type: MsaincdecruleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msaincdecrule')
                },

                msalevelplan: {
                    type: MsalevelplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msalevelplan')
                },

                msalevel: {
                    type: MsalevelType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msalevel')
                },

                msamaxbalance: {
                    type: MsamaxbalanceType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msamaxbalance')
                },

                msanetworktier: {
                    type: MsanetworktierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msanetworktier')
                },

                msamaximum: {
                    type: MsamaximumType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msamaximum')
                },

                msanote: {
                    type: MsanoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msanote')
                },

                msapaidincurred: {
                    type: MsapaidincurredType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Msapaidincurred')
                },

                msanoncovrxthercode: {
                    type: MsanoncovrxthercodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msanoncovrxthercode')
                },

                msaproration: {
                    type: MsaprorationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msaproration')
                },

                msamaxfamilylvl: {
                    type: MsamaxfamilylvlType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Msamaxfamilylvl')
                },

                msahold: {
                    type: MsaholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msahold')
                },

                msapurse: {
                    type: MsapurseType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Msapurse')
                },

                msarelationship: {
                    type: MsarelationshipType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msarelationship')
                },

                msastacking: {
                    type: MsastackingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msastacking')
                },

                msatermenrollstatus: {
                    type: MsatermenrollstatusType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msatermenrollstatus')
                },

                msastudentage: {
                    type: MsastudentageType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Msastudentage')
                },

                msatype: {
                    type: MsatypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msatype')
                },

                msavalidation: {
                    type: MsavalidationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msavalidation')
                },

                msasetting: {
                    type: MsasettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msasetting')
                },

                ndcawpfileuploadstaging: {
                    type: NdcawpfileuploadstagingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ndcawpfileuploadstaging')
                },

                ndcawpref: {
                    type: NdcawprefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ndcawpref')
                },

                ndc: {
                    type: NdcType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Ndc')
                },

                msapayandchase: {
                    type: MsapayandchaseType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Msapayandchase')
                },

                ndccomphold: {
                    type: NdccompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ndccomphold')
                },

                msaplanyear: {
                    type: MsaplanyearType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msaplanyear')
                },

                msaindivcapcarryover: {
                    type: MsaindivcapcarryoverType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Msaindivcapcarryover')
                },

                ndccomp: {
                    type: NdccompType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ndccomp')
                },

                ndccompnote: {
                    type: NdccompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ndccompnote')
                },

                ndccompauditdetail: {
                    type: NdccompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ndccompauditdetail')
                },

                ndccompdetail: {
                    type: NdccompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ndccompdetail')
                },

                ndcawpfileuploadheader: {
                    type: NdcawpfileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ndcawpfileuploadheader')
                },

                ndcmacfileuploadheader: {
                    type: NdcmacfileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ndcmacfileuploadheader')
                },

                ndcprdpckbasefileuploadheader: {
                    type: NdcprdpckbasefileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ndcprdpckbasefileuploadheader')
                },

                ndcmodifiercompassign: {
                    type: NdcmodifiercompassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ndcmodifiercompassign')
                },

                ndcpackagefileuploadstaging: {
                    type: NdcpackagefileuploadstagingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ndcpackagefileuploadstaging')
                },

                netcontract: {
                    type: NetcontractType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontract')
                },

                ndcproductfileuploadstaging: {
                    type: NdcproductfileuploadstagingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ndcproductfileuploadstaging')
                },

                netcontractcarriersupportteam: {
                    type: NetcontractcarriersupportteamType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractcarriersupportteam')
                },

                netcontractfilinglimit: {
                    type: NetcontractfilinglimitType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractfilinglimit')
                },

                ndcmacref: {
                    type: NdcmacrefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ndcmacref')
                },

                netcontractcarrier: {
                    type: NetcontractcarrierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractcarrier')
                },

                ndcmacfileuploadstaging: {
                    type: NdcmacfileuploadstagingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ndcmacfileuploadstaging')
                },

                netcontractheaderauditdetail: {
                    type: NetcontractheaderauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractheaderauditdetail')
                },

                netcontractcarrierfilinglimit: {
                    type: NetcontractcarrierfilinglimitType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractcarrierfilinglimit')
                },

                netcontractheader: {
                    type: NetcontractheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractheader')
                },

                netcontractfinancialpen: {
                    type: NetcontractfinancialpenType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractfinancialpen')
                },

                netcontractauditdetail: {
                    type: NetcontractauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractauditdetail')
                },

                netcontractnote: {
                    type: NetcontractnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractnote')
                },

                netcontractlob: {
                    type: NetcontractlobType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractlob')
                },

                netcontractowner: {
                    type: NetcontractownerType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractowner')
                },

                netcontractlobfilinglimit: {
                    type: NetcontractlobfilinglimitType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractlobfilinglimit')
                },

                netcontractmembergroup: {
                    type: NetcontractmembergroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractmembergroup')
                },

                netcontractprovaffiliation: {
                    type: NetcontractprovaffiliationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractprovaffiliation')
                },

                netcontractplan: {
                    type: NetcontractplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractplan')
                },

                netcontractid: {
                    type: NetcontractidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractid')
                },

                netcontractnetwork: {
                    type: NetcontractnetworkType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractnetwork')
                },

                netcontractheadernote: {
                    type: NetcontractheadernoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractheadernote')
                },

                netcontracthold: {
                    type: NetcontractholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontracthold')
                },

                netcontractservicearea: {
                    type: NetcontractserviceareaType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractservicearea')
                },

                netcontractprovlocation: {
                    type: NetcontractprovlocationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractprovlocation')
                },

                netcontractprovnetworkpanel: {
                    type: NetcontractprovnetworkpanelType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractprovnetworkpanel')
                },

                netcontractlobclausecode: {
                    type: NetcontractlobclausecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractlobclausecode')
                },

                netcontractprovtin: {
                    type: NetcontractprovtinType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractprovtin')
                },

                netcontractproduct: {
                    type: NetcontractproductType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractproduct')
                },

                netdirsuppress: {
                    type: NetdirsuppressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netdirsuppress')
                },

                netcontractsupportteam: {
                    type: NetcontractsupportteamType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractsupportteam')
                },

                netdirsuppressregion: {
                    type: NetdirsuppressregionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netdirsuppressregion')
                },

                netcontracttermeventlog: {
                    type: NetcontracttermeventlogType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontracttermeventlog')
                },

                netdirsuppressauditdetail: {
                    type: NetdirsuppressauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netdirsuppressauditdetail')
                },

                netcontracttaxonomy: {
                    type: NetcontracttaxonomyType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontracttaxonomy')
                },

                netschedulelogo: {
                    type: NetschedulelogoType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netschedulelogo')
                },

                netscheduleextid: {
                    type: NetscheduleextidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netscheduleextid')
                },

                netcontractproviderfinpen: {
                    type: NetcontractproviderfinpenType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netcontractproviderfinpen')
                },

                networkauditdetail: {
                    type: NetworkauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Networkauditdetail')
                },

                networkcontact: {
                    type: NetworkcontactType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Networkcontact')
                },

                netscheduletier: {
                    type: NetscheduletierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Netscheduletier')
                },

                network: {
                    type: NetworkType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Network')
                },

                networkcontactaddressphone: {
                    type: NetworkcontactaddressphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Networkcontactaddressphone')
                },

                networkcontactassignment: {
                    type: NetworkcontactassignmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Networkcontactassignment')
                },

                netscheduledetail: {
                    type: NetscheduledetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netscheduledetail')
                },

                netscheduleheader: {
                    type: NetscheduleheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Netscheduleheader')
                },

                networkcontactaddress: {
                    type: NetworkcontactaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Networkcontactaddress')
                },

                networkcontactauditdetail: {
                    type: NetworkcontactauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Networkcontactauditdetail')
                },

                networkcontactphone: {
                    type: NetworkcontactphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Networkcontactphone')
                },

                networkcontactelectroniccom: {
                    type: NetworkcontactelectroniccomType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Networkcontactelectroniccom')
                },

                networkmedpolicy: {
                    type: NetworkmedpolicyType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Networkmedpolicy')
                },

                networkid: {
                    type: NetworkidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Networkid')
                },

                networkservicearea: {
                    type: NetworkserviceareaType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Networkservicearea')
                },

                oonpricingptmcomp: {
                    type: OonpricingptmcompType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oonpricingptmcomp')
                },

                oonpricingptmcompnote: {
                    type: OonpricingptmcompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oonpricingptmcompnote')
                },

                networknote: {
                    type: NetworknoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Networknote')
                },

                networktypecode: {
                    type: NetworktypecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Networktypecode')
                },

                networksupportteam: {
                    type: NetworksupportteamType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Networksupportteam')
                },

                oonpricinglogo: {
                    type: OonpricinglogoType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oonpricinglogo')
                },

                oonpricingptmdetail: {
                    type: OonpricingptmdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oonpricingptmdetail')
                },

                oonpricingptmcomphold: {
                    type: OonpricingptmcompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oonpricingptmcomphold')
                },

                oonpricingptmprov: {
                    type: OonpricingptmprovType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oonpricingptmprov')
                },

                oonpricingsched: {
                    type: OonpricingschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oonpricingsched')
                },

                oonpricingschedhold: {
                    type: OonpricingschedholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oonpricingschedhold')
                },

                oonpricingschednote: {
                    type: OonpricingschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oonpricingschednote')
                },

                oonpricingschedtimeline: {
                    type: OonpricingschedtimelineType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oonpricingschedtimeline')
                },

                oonpricingservicetype: {
                    type: OonpricingservicetypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oonpricingservicetype')
                },

                oonpricingschedorder: {
                    type: OonpricingschedorderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oonpricingschedorder')
                },

                oonpricingschedorderdetail: {
                    type: OonpricingschedorderdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oonpricingschedorderdetail')
                },

                oonptmcomponentauditdetail: {
                    type: OonptmcomponentauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oonptmcomponentauditdetail')
                },

                oppservicecomp: {
                    type: OppservicecompType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oppservicecomp')
                },

                oppservicecompauditdetail: {
                    type: OppservicecompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oppservicecompauditdetail')
                },

                oppservicecompdetail: {
                    type: OppservicecompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oppservicecompdetail')
                },

                networksetting: {
                    type: NetworksettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Networksetting')
                },

                oppservicecompnote: {
                    type: OppservicecompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oppservicecompnote')
                },

                oonpricingptmregion: {
                    type: OonpricingptmregionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oonpricingptmregion')
                },

                oonpricingschedauditdetail: {
                    type: OonpricingschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oonpricingschedauditdetail')
                },

                outliercomp: {
                    type: OutliercompType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Outliercomp')
                },

                outliercompauditdetail: {
                    type: OutliercompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Outliercompauditdetail')
                },

                oppservicemodifiercompassignhx: {
                    type: OppservicemodifiercompassignhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oppservicemodifiercompassignhx')
                },

                outliercompclaimclass: {
                    type: OutliercompclaimclassType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Outliercompclaimclass')
                },

                outliercompdetail: {
                    type: OutliercompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Outliercompdetail')
                },

                outliercomphold: {
                    type: OutliercompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Outliercomphold')
                },

                networktype: {
                    type: NetworktypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Networktype')
                },

                overridereasoncodeauditdetail: {
                    type: OverridereasoncodeauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Overridereasoncodeauditdetail')
                },

                overridereasoncode: {
                    type: OverridereasoncodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Overridereasoncode')
                },

                ownergroup: {
                    type: OwnergroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ownergroup')
                },

                oppservicecompdetailpricing: {
                    type: OppservicecompdetailpricingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oppservicecompdetailpricing')
                },

                passthrucomp: {
                    type: PassthrucompType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Passthrucomp')
                },

                passthrucompauditdetail: {
                    type: PassthrucompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Passthrucompauditdetail')
                },

                passthrucompclaimclass: {
                    type: PassthrucompclaimclassType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Passthrucompclaimclass')
                },

                passthrucompdetailsamedayrev: {
                    type: PassthrucompdetailsamedayrevType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Passthrucompdetailsamedayrev')
                },

                outliercompnote: {
                    type: OutliercompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Outliercompnote')
                },

                passthrucomphold: {
                    type: PassthrucompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Passthrucomphold')
                },

                oppservicecomphold: {
                    type: OppservicecompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oppservicecomphold')
                },

                permission: {
                    type: PermissionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Permission')
                },

                passthrucompnote: {
                    type: PassthrucompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Passthrucompnote')
                },

                permissiongroup: {
                    type: PermissiongroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Permissiongroup')
                },

                passthrucompdetail: {
                    type: PassthrucompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Passthrucompdetail')
                },

                permissiongrouppermission: {
                    type: PermissiongrouppermissionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Permissiongrouppermission')
                },

                pfscomp: {
                    type: PfscompType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pfscomp')
                },

                pfscompauditdetail: {
                    type: PfscompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pfscompauditdetail')
                },

                permissiongroupauditdetail: {
                    type: PermissiongroupauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Permissiongroupauditdetail')
                },

                pfscompdefaultmodcompassign: {
                    type: PfscompdefaultmodcompassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pfscompdefaultmodcompassign')
                },

                pfscompposset: {
                    type: PfscomppossetType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pfscompposset')
                },

                pfscomphold: {
                    type: PfscompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pfscomphold')
                },

                pfscompnote: {
                    type: PfscompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pfscompnote')
                },

                pfscompprocedure: {
                    type: PfscompprocedureType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pfscompprocedure')
                },

                oppservicecompmultprocreduct: {
                    type: OppservicecompmultprocreductType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oppservicecompmultprocreduct')
                },

                oppservicemodassignauditdetail: {
                    type: OppservicemodassignauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oppservicemodassignauditdetail')
                },

                pfscompprocmodifier: {
                    type: PfscompprocmodifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pfscompprocmodifier')
                },

                pfscompprotechcompassign: {
                    type: PfscompprotechcompassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pfscompprotechcompassign')
                },

                pfsfileuploadheader: {
                    type: PfsfileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pfsfileuploadheader')
                },

                pfsmodifiercompassign: {
                    type: PfsmodifiercompassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pfsmodifiercompassign')
                },

                placeofserviceset: {
                    type: PlaceofservicesetType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Placeofserviceset')
                },

                oppservicemodifiercompassign: {
                    type: OppservicemodifiercompassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Oppservicemodifiercompassign')
                },

                placeofservicesetcat: {
                    type: PlaceofservicesetcatType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Placeofservicesetcat')
                },

                placeofservicesetauditdetail: {
                    type: PlaceofservicesetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Placeofservicesetauditdetail')
                },

                pricingmethodtypeexclusion: {
                    type: PricingmethodtypeexclusionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pricingmethodtypeexclusion')
                },

                placeofservicecategory: {
                    type: PlaceofservicecategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Placeofservicecategory')
                },

                placeofservicesetcatdetail: {
                    type: PlaceofservicesetcatdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Placeofservicesetcatdetail')
                },

                pricingsched: {
                    type: PricingschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pricingsched')
                },

                poscategorycode: {
                    type: PoscategorycodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Poscategorycode')
                },

                pricingschednote: {
                    type: PricingschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pricingschednote')
                },

                paytoaddressqueue: {
                    type: PaytoaddressqueueType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Paytoaddressqueue')
                },

                pricingschedauditdetail: {
                    type: PricingschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pricingschedauditdetail')
                },

                placeofservicesetcatdetaildef: {
                    type: PlaceofservicesetcatdetaildefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Placeofservicesetcatdetaildef')
                },

                pricingschedorder: {
                    type: PricingschedorderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pricingschedorder')
                },

                pricingset: {
                    type: PricingsetType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pricingset')
                },

                pricingschedorderclaimclass: {
                    type: PricingschedorderclaimclassType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pricingschedorderclaimclass')
                },

                pricingschedorderdetail: {
                    type: PricingschedorderdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pricingschedorderdetail')
                },

                pricingsetauditdetail: {
                    type: PricingsetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pricingsetauditdetail')
                },

                pricingsetnote: {
                    type: PricingsetnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pricingsetnote')
                },

                pricingschedhold: {
                    type: PricingschedholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pricingschedhold')
                },

                pricingservicecategory: {
                    type: PricingservicecategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pricingservicecategory')
                },

                poscategory: {
                    type: PoscategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Poscategory')
                },

                pricingsetsource: {
                    type: PricingsetsourceType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pricingsetsource')
                },

                pricingsetsched: {
                    type: PricingsetschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pricingsetsched')
                },

                pricingsettingnote: {
                    type: PricingsettingnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pricingsettingnote')
                },

                pricingsettingmpr: {
                    type: PricingsettingmprType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pricingsettingmpr')
                },

                pricingspiref: {
                    type: PricingspirefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pricingspiref')
                },

                pricingsettingdmemodifier: {
                    type: PricingsettingdmemodifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pricingsettingdmemodifier')
                },

                proceduresetcatdetaildef: {
                    type: ProceduresetcatdetaildefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Proceduresetcatdetaildef')
                },

                prodbenefittype: {
                    type: ProdbenefittypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Prodbenefittype')
                },

                prodbengroup: {
                    type: ProdbengroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Prodbengroup')
                },

                pricingsettingauditdetail: {
                    type: PricingsettingauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pricingsettingauditdetail')
                },

                proccategory: {
                    type: ProccategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Proccategory')
                },

                proccoderangecat: {
                    type: ProccoderangecatType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Proccoderangecat')
                },

                proceduresetcat: {
                    type: ProceduresetcatType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Proceduresetcat')
                },

                prodgovbentype: {
                    type: ProdgovbentypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Prodgovbentype')
                },

                procedureset: {
                    type: ProceduresetType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Procedureset')
                },

                proceduresetauditdetail: {
                    type: ProceduresetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Proceduresetauditdetail')
                },

                producerauditdetail: {
                    type: ProducerauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Producerauditdetail')
                },

                pricingsetting: {
                    type: PricingsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Pricingsetting')
                },

                proceduresetcatdetail: {
                    type: ProceduresetcatdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Proceduresetcatdetail')
                },

                producer: {
                    type: ProducerType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Producer')
                },

                produceraddress: {
                    type: ProduceraddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Produceraddress')
                },

                product: {
                    type: ProductType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Product')
                },

                producerphone: {
                    type: ProducerphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Producerphone')
                },

                prodbennetworksched: {
                    type: ProdbennetworkschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Prodbennetworksched')
                },

                profclaimsetting: {
                    type: ProfclaimsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Profclaimsetting')
                },

                producerexternalid: {
                    type: ProducerexternalidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Producerexternalid')
                },

                productbenefit: {
                    type: ProductbenefitType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Productbenefit')
                },

                producernote: {
                    type: ProducernoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Producernote')
                },

                productnote: {
                    type: ProductnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Productnote')
                },

                productgensetting: {
                    type: ProductgensettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Productgensetting')
                },

                promptpaysched: {
                    type: PromptpayschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Promptpaysched')
                },

                productvalidation: {
                    type: ProductvalidationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Productvalidation')
                },

                productauditdetail: {
                    type: ProductauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Productauditdetail')
                },

                promptpayschedauditdetail: {
                    type: PromptpayschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Promptpayschedauditdetail')
                },

                promptpayschednote: {
                    type: PromptpayschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Promptpayschednote')
                },

                promptpayscheddetail: {
                    type: PromptpayscheddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Promptpayscheddetail')
                },

                protechsplitcompauditdetail: {
                    type: ProtechsplitcompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Protechsplitcompauditdetail')
                },

                provcertschedaccreditation: {
                    type: ProvcertschedaccreditationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcertschedaccreditation')
                },

                protechsplitcomp: {
                    type: ProtechsplitcompType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Protechsplitcomp')
                },

                provcategory: {
                    type: ProvcategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcategory')
                },

                protechsplitcompdetail: {
                    type: ProtechsplitcompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Protechsplitcompdetail')
                },

                provcertsched: {
                    type: ProvcertschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcertsched')
                },

                provcertschedboardcert: {
                    type: ProvcertschedboardcertType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcertschedboardcert')
                },

                provcertschedhold: {
                    type: ProvcertschedholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcertschedhold')
                },

                provcertschedclia: {
                    type: ProvcertschedcliaType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcertschedclia')
                },

                provcertschedlicense: {
                    type: ProvcertschedlicenseType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcertschedlicense')
                },

                protechsplitcompnote: {
                    type: ProtechsplitcompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Protechsplitcompnote')
                },

                provcertschedauditdetail: {
                    type: ProvcertschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcertschedauditdetail')
                },

                provcertschedserv: {
                    type: ProvcertschedservType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcertschedserv')
                },

                provcertschedstate: {
                    type: ProvcertschedstateType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcertschedstate')
                },

                provcertscheddegree: {
                    type: ProvcertscheddegreeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcertscheddegree')
                },

                provcertsethold: {
                    type: ProvcertsetholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcertsethold')
                },

                provcertschedexcludeprovider: {
                    type: ProvcertschedexcludeproviderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcertschedexcludeprovider')
                },

                provcertschednote: {
                    type: ProvcertschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcertschednote')
                },

                provcontractaffilnetpanel: {
                    type: ProvcontractaffilnetpanelType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractaffilnetpanel')
                },

                provcontract: {
                    type: ProvcontractType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontract')
                },

                provcontractcarrier: {
                    type: ProvcontractcarrierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractcarrier')
                },

                provcertsetnote: {
                    type: ProvcertsetnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcertsetnote')
                },

                provcertschedtaxonomy: {
                    type: ProvcertschedtaxonomyType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcertschedtaxonomy')
                },

                provcontractauditdetail: {
                    type: ProvcontractauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractauditdetail')
                },

                provcertsetauditdetail: {
                    type: ProvcertsetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcertsetauditdetail')
                },

                provcertsetschedassign: {
                    type: ProvcertsetschedassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcertsetschedassign')
                },

                provcertset: {
                    type: ProvcertsetType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcertset')
                },

                provcontractaffiliation: {
                    type: ProvcontractaffiliationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractaffiliation')
                },

                provcontractcarrierfilinglimit: {
                    type: ProvcontractcarrierfilinglimitType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractcarrierfilinglimit')
                },

                provcontractaddress: {
                    type: ProvcontractaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractaddress')
                },

                provcontractfilinglimit: {
                    type: ProvcontractfilinglimitType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractfilinglimit')
                },

                provcontractfinancialpen: {
                    type: ProvcontractfinancialpenType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractfinancialpen')
                },

                provcontractheader: {
                    type: ProvcontractheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractheader')
                },

                provcontractcarriersupportteam: {
                    type: ProvcontractcarriersupportteamType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractcarriersupportteam')
                },

                provcontractfinpenaffiliation: {
                    type: ProvcontractfinpenaffiliationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractfinpenaffiliation')
                },

                provcontractheaderauditdetail: {
                    type: ProvcontractheaderauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractheaderauditdetail')
                },

                provcontractheadernote: {
                    type: ProvcontractheadernoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractheadernote')
                },

                provcontractlobfilinglimit: {
                    type: ProvcontractlobfilinglimitType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractlobfilinglimit')
                },

                provcontractmedpolicy: {
                    type: ProvcontractmedpolicyType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractmedpolicy')
                },

                provcontractowner: {
                    type: ProvcontractownerType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractowner')
                },

                provcontractmembergroup: {
                    type: ProvcontractmembergroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractmembergroup')
                },

                provcontractlob: {
                    type: ProvcontractlobType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractlob')
                },

                provcontracthold: {
                    type: ProvcontractholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontracthold')
                },

                provcontractplan: {
                    type: ProvcontractplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractplan')
                },

                provcontractid: {
                    type: ProvcontractidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractid')
                },

                provcontractnetwork: {
                    type: ProvcontractnetworkType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractnetwork')
                },

                provcontractnote: {
                    type: ProvcontractnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractnote')
                },

                provcontracttaxonomy: {
                    type: ProvcontracttaxonomyType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontracttaxonomy')
                },

                provcontracttermeventlog: {
                    type: ProvcontracttermeventlogType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontracttermeventlog')
                },

                provcontracttin: {
                    type: ProvcontracttinType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontracttin')
                },

                provcontractsupportteam: {
                    type: ProvcontractsupportteamType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractsupportteam')
                },

                provcontractlobclausecode: {
                    type: ProvcontractlobclausecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractlobclausecode')
                },

                provcontractproduct: {
                    type: ProvcontractproductType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provcontractproduct')
                },

                provdirsuppressregion: {
                    type: ProvdirsuppressregionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provdirsuppressregion')
                },

                provexceptiondiagcode: {
                    type: ProvexceptiondiagcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provexceptiondiagcode')
                },

                provdirsuppressauditdetail: {
                    type: ProvdirsuppressauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provdirsuppressauditdetail')
                },

                provexceptionflag: {
                    type: ProvexceptionflagType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provexceptionflag')
                },

                provdirsuppress: {
                    type: ProvdirsuppressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provdirsuppress')
                },

                provexceptionfundingsource: {
                    type: ProvexceptionfundingsourceType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provexceptionfundingsource')
                },

                provexceptionproccode: {
                    type: ProvexceptionproccodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provexceptionproccode')
                },

                provexceptionrevcode: {
                    type: ProvexceptionrevcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provexceptionrevcode')
                },

                provider: {
                    type: ProviderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provider')
                },

                provideralias: {
                    type: ProvideraliasType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provideralias')
                },

                provexceptionstate: {
                    type: ProvexceptionstateType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provexceptionstate')
                },

                provideraccreditation: {
                    type: ProvideraccreditationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provideraccreditation')
                },

                provexceptionlob: {
                    type: ProvexceptionlobType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provexceptionlob')
                },

                provideradverseaction: {
                    type: ProvideradverseactionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provideradverseaction')
                },

                provideradversebasis: {
                    type: ProvideradversebasisType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provideradversebasis')
                },

                providercertification: {
                    type: ProvidercertificationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providercertification')
                },

                provideradverseactioncode: {
                    type: ProvideradverseactioncodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provideradverseactioncode')
                },

                providerapplication: {
                    type: ProviderapplicationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerapplication')
                },

                providercontact: {
                    type: ProvidercontactType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providercontact')
                },

                provexceptionplaceofservice: {
                    type: ProvexceptionplaceofserviceType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provexceptionplaceofservice')
                },

                providercontactaddressphone: {
                    type: ProvidercontactaddressphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providercontactaddressphone')
                },

                providerassignmenttype: {
                    type: ProviderassignmenttypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerassignmenttype')
                },

                providercontactauditdetail: {
                    type: ProvidercontactauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providercontactauditdetail')
                },

                providercover: {
                    type: ProvidercoverType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providercover')
                },

                providerassigntypetaxonomycode: {
                    type: ProviderassigntypetaxonomycodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerassigntypetaxonomycode')
                },

                providercontactelectroniccom: {
                    type: ProvidercontactelectroniccomType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providercontactelectroniccom')
                },

                providerauditdetail: {
                    type: ProviderauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerauditdetail')
                },

                providercontactphone: {
                    type: ProvidercontactphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providercontactphone')
                },

                provexceptionmodcode: {
                    type: ProvexceptionmodcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provexceptionmodcode')
                },

                providerencumbrance: {
                    type: ProviderencumbranceType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerencumbrance')
                },

                providerelectroniccomm: {
                    type: ProviderelectroniccommType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerelectroniccomm')
                },

                providerhospitalaffil: {
                    type: ProviderhospitalaffilType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerhospitalaffil')
                },

                providerhold: {
                    type: ProviderholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerhold')
                },

                providercredential: {
                    type: ProvidercredentialType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providercredential')
                },

                providercontactaddress: {
                    type: ProvidercontactaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providercontactaddress')
                },

                providerid: {
                    type: ProvideridType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerid')
                },

                providerliabilityin: {
                    type: ProviderliabilityinType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Providerliabilityin')
                },

                providerlanguage: {
                    type: ProviderlanguageType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerlanguage')
                },

                provideridlocation: {
                    type: ProvideridlocationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provideridlocation')
                },

                providerfedexcl: {
                    type: ProviderfedexclType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerfedexcl')
                },

                providerhour: {
                    type: ProviderhourType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerhour')
                },

                providereducation: {
                    type: ProvidereducationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providereducation')
                },

                providerencumbrancepayment: {
                    type: ProviderencumbrancepaymentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerencumbrancepayment')
                },

                providerjudgement: {
                    type: ProviderjudgementType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerjudgement')
                },

                providerlicense: {
                    type: ProviderlicenseType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerlicense')
                },

                providerlocationaccred: {
                    type: ProviderlocationaccredType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerlocationaccred')
                },

                providerlocationaffiliation: {
                    type: ProviderlocationaffiliationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerlocationaffiliation')
                },

                providerlocationcontact: {
                    type: ProviderlocationcontactType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerlocationcontact')
                },

                providerlocaffilclinicaleff: {
                    type: ProviderlocaffilclinicaleffType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerlocaffilclinicaleff')
                },

                providerlocationlanguage: {
                    type: ProviderlocationlanguageType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerlocationlanguage')
                },

                providerlocationphone: {
                    type: ProviderlocationphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerlocationphone')
                },

                providerlocationhospaffil: {
                    type: ProviderlocationhospaffilType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerlocationhospaffil')
                },

                providerlocationtaxonomy: {
                    type: ProviderlocationtaxonomyType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerlocationtaxonomy')
                },

                providermalpractice: {
                    type: ProvidermalpracticeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providermalpractice')
                },

                providerorgaffiliation: {
                    type: ProviderorgaffiliationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerorgaffiliation')
                },

                providerorgauditdetail: {
                    type: ProviderorgauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerorgauditdetail')
                },

                providerorgalias: {
                    type: ProviderorgaliasType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerorgalias')
                },

                providerorg: {
                    type: ProviderorgType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerorg')
                },

                providernote: {
                    type: ProvidernoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providernote')
                },

                providerorgelectroniccomm: {
                    type: ProviderorgelectroniccommType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerorgelectroniccomm')
                },

                providerorgidlocation: {
                    type: ProviderorgidlocationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerorgidlocation')
                },

                providerorglocationclia: {
                    type: ProviderorglocationcliaType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerorglocationclia')
                },

                providerorghold: {
                    type: ProviderorgholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerorghold')
                },

                providerorgid: {
                    type: ProviderorgidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerorgid')
                },

                providerorgfacility: {
                    type: ProviderorgfacilityType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerorgfacility')
                },

                providerorglocation: {
                    type: ProviderorglocationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerorglocation')
                },

                providerorglocationclaimalias: {
                    type: ProviderorglocationclaimaliasType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerorglocationclaimalias')
                },

                providerorgqueue: {
                    type: ProviderorgqueueType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerorgqueue')
                },

                providerorglocationphone: {
                    type: ProviderorglocationphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerorglocationphone')
                },

                providerorgtin: {
                    type: ProviderorgtinType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerorgtin')
                },

                providerpeerreview: {
                    type: ProviderpeerreviewType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerpeerreview')
                },

                providerorgnote: {
                    type: ProviderorgnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerorgnote')
                },

                providerprocessexception: {
                    type: ProviderprocessexceptionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerprocessexception')
                },

                providerqueueattachment: {
                    type: ProviderqueueattachmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerqueueattachment')
                },

                providerpremiumdesignation: {
                    type: ProviderpremiumdesignationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerpremiumdesignation')
                },

                providerqueue: {
                    type: ProviderqueueType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerqueue')
                },

                providerrefaddress: {
                    type: ProviderrefaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerrefaddress')
                },

                providerreference: {
                    type: ProviderreferenceType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerreference')
                },

                providertaxonomy: {
                    type: ProvidertaxonomyType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providertaxonomy')
                },

                providersanctionlicense: {
                    type: ProvidersanctionlicenseType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providersanctionlicense')
                },

                providersetting: {
                    type: ProvidersettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Providersetting')
                },

                providerqueueheader: {
                    type: ProviderqueueheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerqueueheader')
                },

                providertaxonomygroup: {
                    type: ProvidertaxonomygroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providertaxonomygroup')
                },

                providersanction: {
                    type: ProvidersanctionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providersanction')
                },

                provjudgeoffense: {
                    type: ProvjudgeoffenseType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provjudgeoffense')
                },

                providertinaddreleccomm: {
                    type: ProvidertinaddreleccommType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providertinaddreleccomm')
                },

                providerworkhistory: {
                    type: ProviderworkhistoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providerworkhistory')
                },

                provjudgeinvestigation: {
                    type: ProvjudgeinvestigationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provjudgeinvestigation')
                },

                providertinaddrphone: {
                    type: ProvidertinaddrphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Providertinaddrphone')
                },

                provspecialtycat: {
                    type: ProvspecialtycatType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provspecialtycat')
                },

                provspecialtysetauditdetail: {
                    type: ProvspecialtysetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provspecialtysetauditdetail')
                },

                provspecialtyset: {
                    type: ProvspecialtysetType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provspecialtyset')
                },

                provspecialtysetcatdetail: {
                    type: ProvspecialtysetcatdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provspecialtysetcatdetail')
                },

                provspecialtysetcatdetaildef: {
                    type: ProvspecialtysetcatdetaildefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provspecialtysetcatdetaildef')
                },

                provspecialtysetcat: {
                    type: ProvspecialtysetcatType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provspecialtysetcat')
                },

                provtaxonomycodeassign: {
                    type: ProvtaxonomycodeassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provtaxonomycodeassign')
                },

                provtinaddressesclaimalias: {
                    type: ProvtinaddressesclaimaliasType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provtinaddressesclaimalias')
                },

                provtinstate: {
                    type: ProvtinstateType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provtinstate')
                },

                provtaxonomyassign: {
                    type: ProvtaxonomyassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provtaxonomyassign')
                },

                qualityandefficiencycodetype: {
                    type: QualityandefficiencycodetypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Qualityandefficiencycodetype')
                },

                queueattachment: {
                    type: QueueattachmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Queueattachment')
                },

                provtin: {
                    type: ProvtinType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provtin')
                },

                provtinauditdetail: {
                    type: ProvtinauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provtinauditdetail')
                },

                queueclaimtype: {
                    type: QueueclaimtypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Queueclaimtype')
                },

                provtinnote: {
                    type: ProvtinnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provtinnote')
                },

                provtinqueue: {
                    type: ProvtinqueueType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provtinqueue')
                },

                queuegrouprole: {
                    type: QueuegrouproleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Queuegrouprole')
                },

                queuegroup: {
                    type: QueuegroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Queuegroup')
                },

                queuegroupuser: {
                    type: QueuegroupuserType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Queuegroupuser')
                },

                provtinaddress: {
                    type: ProvtinaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Provtinaddress')
                },

                reference: {
                    type: ReferenceType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Reference')
                },

                queuerole: {
                    type: QueueroleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Queuerole')
                },

                queuememgroup: {
                    type: QueuememgroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Queuememgroup')
                },

                queuename: {
                    type: QueuenameType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Queuename')
                },

                queueeditcode: {
                    type: QueueeditcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Queueeditcode')
                },

                queueprovtinid: {
                    type: QueueprovtinidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Queueprovtinid')
                },

                queueheader: {
                    type: QueueheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Queueheader')
                },

                queuesourcetype: {
                    type: QueuesourcetypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Queuesourcetype')
                },

                queueroutingcode: {
                    type: QueueroutingcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Queueroutingcode')
                },

                regentitycontacteleccom: {
                    type: RegentitycontacteleccomType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Regentitycontacteleccom')
                },

                referenceheader: {
                    type: ReferenceheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Referenceheader')
                },

                regentity: {
                    type: RegentityType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Regentity')
                },

                regentitycontact: {
                    type: RegentitycontactType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Regentitycontact')
                },

                referencefilterchild: {
                    type: ReferencefilterchildType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Referencefilterchild')
                },

                referencefiltercustom: {
                    type: ReferencefiltercustomType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Referencefiltercustom')
                },

                regentitydept: {
                    type: RegentitydeptType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Regentitydept')
                },

                regentitycontactaddress: {
                    type: RegentitycontactaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Regentitycontactaddress')
                },

                regentitydepthour: {
                    type: RegentitydepthourType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Regentitydepthour')
                },

                regentityauditdetail: {
                    type: RegentityauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Regentityauditdetail')
                },

                regentitydeptcontact: {
                    type: RegentitydeptcontactType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Regentitydeptcontact')
                },

                regentitydepteleccom: {
                    type: RegentitydepteleccomType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Regentitydepteleccom')
                },

                regentitycontacthour: {
                    type: RegentitycontacthourType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Regentitycontacthour')
                },

                regentitycontactphone: {
                    type: RegentitycontactphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Regentitycontactphone')
                },

                regentityguardrail: {
                    type: RegentityguardrailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Regentityguardrail')
                },

                regentityguardrailbenefit: {
                    type: RegentityguardrailbenefitType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Regentityguardrailbenefit')
                },

                regentitydeptphone: {
                    type: RegentitydeptphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Regentitydeptphone')
                },

                regentitydeptaddress: {
                    type: RegentitydeptaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Regentitydeptaddress')
                },

                regentityguardrailerisa: {
                    type: RegentityguardrailerisaType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Regentityguardrailerisa')
                },

                region: {
                    type: RegionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Region')
                },

                regentityguardrailplan: {
                    type: RegentityguardrailplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Regentityguardrailplan')
                },

                regentitynote: {
                    type: RegentitynoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Regentitynote')
                },

                remarkcode: {
                    type: RemarkcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcode')
                },

                relationshipauditdetail: {
                    type: RelationshipauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Relationshipauditdetail')
                },

                regentityguardrailmetallic: {
                    type: RegentityguardrailmetallicType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Regentityguardrailmetallic')
                },

                relationshiplevelcode: {
                    type: RelationshiplevelcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Relationshiplevelcode')
                },

                relationshipnote: {
                    type: RelationshipnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Relationshipnote')
                },

                regentityguardrailgovt: {
                    type: RegentityguardrailgovtType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Regentityguardrailgovt')
                },

                remarkcodeaccounttype: {
                    type: RemarkcodeaccounttypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodeaccounttype')
                },

                relationshipschedule: {
                    type: RelationshipscheduleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Relationshipschedule')
                },

                remarkcodeauditdetail: {
                    type: RemarkcodeauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodeauditdetail')
                },

                remarkcodebilltype: {
                    type: RemarkcodebilltypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodebilltype')
                },

                remarkcodedeleg: {
                    type: RemarkcodedelegType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodedeleg')
                },

                remarkcodediag: {
                    type: RemarkcodediagType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodediag')
                },

                remarkcodeclinicaleditresponse: {
                    type: RemarkcodeclinicaleditresponseType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodeclinicaleditresponse')
                },

                relationshipschedulelevel: {
                    type: RelationshipschedulelevelType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Relationshipschedulelevel')
                },

                remarkcodedrc: {
                    type: RemarkcodedrcType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodedrc')
                },

                remarkcodeexpense: {
                    type: RemarkcodeexpenseType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodeexpense')
                },

                remarkcodeclaimeditcode: {
                    type: RemarkcodeclaimeditcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodeclaimeditcode')
                },

                remarkcodeinternaladjustrsncd: {
                    type: RemarkcodeinternaladjustrsncdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodeinternaladjustrsncd')
                },

                remarkcodebenefit: {
                    type: RemarkcodebenefitType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodebenefit')
                },

                remarkcodepricingcomp: {
                    type: RemarkcodepricingcompType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodepricingcomp')
                },

                remarkcodepricingmethodtype: {
                    type: RemarkcodepricingmethodtypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodepricingmethodtype')
                },

                remarkcodemedpolicyrule: {
                    type: RemarkcodemedpolicyruleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodemedpolicyrule')
                },

                remarkcodeorc: {
                    type: RemarkcodeorcType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodeorc')
                },

                remarkcodeproc: {
                    type: RemarkcodeprocType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodeproc')
                },

                remarkcodeprovdesignation: {
                    type: RemarkcodeprovdesignationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodeprovdesignation')
                },

                remarkcoderevenue: {
                    type: RemarkcoderevenueType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcoderevenue')
                },

                remarkcodemodifiercode: {
                    type: RemarkcodemodifiercodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodemodifiercode')
                },

                remarkcodescheduleauditdetail: {
                    type: RemarkcodescheduleauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodescheduleauditdetail')
                },

                remarkcodesurcharge: {
                    type: RemarkcodesurchargeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodesurcharge')
                },

                remarkcodepo: {
                    type: RemarkcodepoType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodepo')
                },

                remarkcodesitusstate: {
                    type: RemarkcodesitusstateType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodesitusstate')
                },

                remarkcodeschedule: {
                    type: RemarkcodescheduleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodeschedule')
                },

                remarkcodeschedbrand: {
                    type: RemarkcodeschedbrandType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodeschedbrand')
                },

                revenuecatrange: {
                    type: RevenuecatrangeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Revenuecatrange')
                },

                revenuecategory: {
                    type: RevenuecategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Revenuecategory')
                },

                revenuebasefileuploaddetail: {
                    type: RevenuebasefileuploaddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Revenuebasefileuploaddetail')
                },

                remarkcodeschedulenote: {
                    type: RemarkcodeschedulenoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodeschedulenote')
                },

                remarkcodescheduleprov: {
                    type: RemarkcodescheduleprovType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodescheduleprov')
                },

                remarkcodetrigger: {
                    type: RemarkcodetriggerType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodetrigger')
                },

                revenuesetauditdetail: {
                    type: RevenuesetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Revenuesetauditdetail')
                },

                remarkcodevendorremarkcode: {
                    type: RemarkcodevendorremarkcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Remarkcodevendorremarkcode')
                },

                rhceditcodeassign: {
                    type: RhceditcodeassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Rhceditcodeassign')
                },

                reportexecution: {
                    type: ReportexecutionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Reportexecution')
                },

                revenuesetcatdetail: {
                    type: RevenuesetcatdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Revenuesetcatdetail')
                },

                revenuesetcat: {
                    type: RevenuesetcatType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Revenuesetcat')
                },

                revenuecode: {
                    type: RevenuecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Revenuecode')
                },

                revenuesetcatdetaildef: {
                    type: RevenuesetcatdetaildefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Revenuesetcatdetaildef')
                },

                revenuebasefileuploadheader: {
                    type: RevenuebasefileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Revenuebasefileuploadheader')
                },

                revenueset: {
                    type: RevenuesetType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Revenueset')
                },

                riskarrangecontractdetail: {
                    type: RiskarrangecontractdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontractdetail')
                },

                riskarrangecontractcarrier: {
                    type: RiskarrangecontractcarrierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontractcarrier')
                },

                riskarrangecontractdeleg: {
                    type: RiskarrangecontractdelegType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontractdeleg')
                },

                riskarrangecontractaffilprov: {
                    type: RiskarrangecontractaffilprovType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontractaffilprov')
                },

                riskarrangecontract: {
                    type: RiskarrangecontractType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontract')
                },

                riskarrangecontractdofr: {
                    type: RiskarrangecontractdofrType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontractdofr')
                },

                riskarrangecontracthold: {
                    type: RiskarrangecontractholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontracthold')
                },

                riskarrangecontractlob: {
                    type: RiskarrangecontractlobType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontractlob')
                },

                riskarrangecontractnote: {
                    type: RiskarrangecontractnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontractnote')
                },

                riskarrangecontractproduct: {
                    type: RiskarrangecontractproductType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontractproduct')
                },

                riderbenefittypestack: {
                    type: RiderbenefittypestackType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Riderbenefittypestack')
                },

                riskarrangecontrdelegfct: {
                    type: RiskarrangecontrdelegfctType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontrdelegfct')
                },

                riskarrangecontractentity: {
                    type: RiskarrangecontractentityType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontractentity')
                },

                rule: {
                    type: RuleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Rule')
                },

                roomandboardrev: {
                    type: RoomandboardrevType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Roomandboardrev')
                },

                riskarrangecontractplan: {
                    type: RiskarrangecontractplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontractplan')
                },

                rulecriterion: {
                    type: RulecriterionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Rulecriterion')
                },

                riskarrangecontrauditdetail: {
                    type: RiskarrangecontrauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontrauditdetail')
                },

                ruleassign: {
                    type: RuleassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ruleassign')
                },

                rulelogheader: {
                    type: RulelogheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Rulelogheader')
                },

                rulelog: {
                    type: RulelogType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Rulelog')
                },

                routingcode: {
                    type: RoutingcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Routingcode')
                },

                rvu: {
                    type: RvuType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Rvu')
                },

                ruleserviceproperty: {
                    type: RuleservicepropertyType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ruleserviceproperty')
                },

                ruleservice: {
                    type: RuleserviceType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ruleservice')
                },

                ruleset: {
                    type: RulesetType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ruleset')
                },

                rvufileuploadheader: {
                    type: RvufileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Rvufileuploadheader')
                },

                salesoffice: {
                    type: SalesofficeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Salesoffice')
                },

                rvufileuploadstaging: {
                    type: RvufileuploadstagingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Rvufileuploadstaging')
                },

                scheduledjob: {
                    type: ScheduledjobType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Scheduledjob')
                },

                rxclaimsetting: {
                    type: RxclaimsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Rxclaimsetting')
                },

                scheduledjoblockauditdetail: {
                    type: ScheduledjoblockauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Scheduledjoblockauditdetail')
                },

                scheduledjobauditdetail: {
                    type: ScheduledjobauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Scheduledjobauditdetail')
                },

                salesofficeauditdetail: {
                    type: SalesofficeauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Salesofficeauditdetail')
                },

                salesofficenote: {
                    type: SalesofficenoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Salesofficenote')
                },

                salesofficeexternalid: {
                    type: SalesofficeexternalidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Salesofficeexternalid')
                },

                scheduledjoblock: {
                    type: ScheduledjoblockType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Scheduledjoblock')
                },

                scmbenecodebilltypecategory: {
                    type: ScmbenecodebilltypecategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Scmbenecodebilltypecategory')
                },

                scmbenecode: {
                    type: ScmbenecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Scmbenecode')
                },

                scm: {
                    type: ScmType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Scm')
                },

                schemaVersion: {
                    type: SchemaVersionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('SchemaVersion')
                },

                scmbenecodemodifier: {
                    type: ScmbenecodemodifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Scmbenecodemodifier')
                },

                scmbenecodeposcategory: {
                    type: ScmbenecodeposcategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Scmbenecodeposcategory')
                },

                scmbenecodediagcategory: {
                    type: ScmbenecodediagcategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Scmbenecodediagcategory')
                },

                scmbenecodeprovcategory: {
                    type: ScmbenecodeprovcategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Scmbenecodeprovcategory')
                },

                scmbenecoderevenuecategory: {
                    type: ScmbenecoderevenuecategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Scmbenecoderevenuecategory')
                },

                scmbenecodeproccategory: {
                    type: ScmbenecodeproccategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Scmbenecodeproccategory')
                },

                scmtoservcompvalidation: {
                    type: ScmtoservcompvalidationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Scmtoservcompvalidation')
                },

                scmvalidation: {
                    type: ScmvalidationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Scmvalidation')
                },

                servcompauditdetail: {
                    type: ServcompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Servcompauditdetail')
                },

                servcompnote: {
                    type: ServcompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Servcompnote')
                },

                servcompservdetailbilltype: {
                    type: ServcompservdetailbilltypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetailbilltype')
                },

                servcomp: {
                    type: ServcompType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Servcomp')
                },

                servcompservdetail: {
                    type: ServcompservdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetail')
                },

                servcompserv: {
                    type: ServcompservType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Servcompserv')
                },

                servcompservdetaildiagcode: {
                    type: ServcompservdetaildiagcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetaildiagcode')
                },

                servcompservdetaildiag: {
                    type: ServcompservdetaildiagType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetaildiag')
                },

                servcompservdetailbilltypecode: {
                    type: ServcompservdetailbilltypecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetailbilltypecode')
                },

                servcompservdetailposcode: {
                    type: ServcompservdetailposcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetailposcode')
                },

                scmnote: {
                    type: ScmnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Scmnote')
                },

                servcompservdetailpo: {
                    type: ServcompservdetailpoType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetailpo')
                },

                servcompservdetailrevenue: {
                    type: ServcompservdetailrevenueType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetailrevenue')
                },

                servcompservdetailprovcode: {
                    type: ServcompservdetailprovcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetailprovcode')
                },

                servcompservdetailproc: {
                    type: ServcompservdetailprocType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetailproc')
                },

                servcompservdetailprovsplty: {
                    type: ServcompservdetailprovspltyType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetailprovsplty')
                },

                servcompservdetailrevcode: {
                    type: ServcompservdetailrevcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetailrevcode')
                },

                servcompvalidation: {
                    type: ServcompvalidationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Servcompvalidation')
                },

                servicearea: {
                    type: ServiceareaType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Servicearea')
                },

                serviceareanote: {
                    type: ServiceareanoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Serviceareanote')
                },

                servcompservdetailproccode: {
                    type: ServcompservdetailproccodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetailproccode')
                },

                servicearearegion: {
                    type: ServicearearegionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Servicearearegion')
                },

                serviceareapostal: {
                    type: ServiceareapostalType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Serviceareapostal')
                },

                serviceplan: {
                    type: ServiceplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Serviceplan')
                },

                servicecatauditdetail: {
                    type: ServicecatauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Servicecatauditdetail')
                },

                serviceplanauditdetail: {
                    type: ServiceplanauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Serviceplanauditdetail')
                },

                serviceplanexternalid: {
                    type: ServiceplanexternalidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Serviceplanexternalid')
                },

                serviceplanfunction: {
                    type: ServiceplanfunctionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Serviceplanfunction')
                },

                serviceplanfunctioncode: {
                    type: ServiceplanfunctioncodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Serviceplanfunctioncode')
                },

                servicetypecode: {
                    type: ServicetypecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Servicetypecode')
                },

                settingsnote: {
                    type: SettingsnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Settingsnote')
                },

                settingsnotedetail: {
                    type: SettingsnotedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Settingsnotedetail')
                },

                statmodifiercomp: {
                    type: StatmodifiercompType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Statmodifiercomp')
                },

                settingsauditdetail: {
                    type: SettingsauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Settingsauditdetail')
                },

                statmodifiercompcode: {
                    type: StatmodifiercompcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Statmodifiercompcode')
                },

                statmodifiercompnote: {
                    type: StatmodifiercompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Statmodifiercompnote')
                },

                statmodifiercompauditdetail: {
                    type: StatmodifiercompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Statmodifiercompauditdetail')
                },

                subpayrollfrequency: {
                    type: SubpayrollfrequencyType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Subpayrollfrequency')
                },

                subsacctsetting: {
                    type: SubsacctsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Subsacctsetting')
                },

                subsaffiliation: {
                    type: SubsaffiliationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Subsaffiliation')
                },

                subsaffiliation834Hist: {
                    type: Subsaffiliation834HistType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Subsaffiliation834Hist')
                },

                subsaffiliationexternalid: {
                    type: SubsaffiliationexternalidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Subsaffiliationexternalid')
                },

                subsaffiliationpopbillingpref: {
                    type: SubsaffiliationpopbillingprefType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Subsaffiliationpopbillingpref')
                },

                subsaffiliationattribute: {
                    type: SubsaffiliationattributeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Subsaffiliationattribute')
                },

                subsbeneficiarymem: {
                    type: SubsbeneficiarymemType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Subsbeneficiarymem')
                },

                subsbeneficiaryparty: {
                    type: SubsbeneficiarypartyType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Subsbeneficiaryparty')
                },

                subsbeneficiary: {
                    type: SubsbeneficiaryType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Subsbeneficiary')
                },

                servcompservdetailmodifier: {
                    type: ServcompservdetailmodifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetailmodifier')
                },

                servcomptempadjud: {
                    type: ServcomptempadjudType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Servcomptempadjud')
                },

                subsjob: {
                    type: SubsjobType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Subsjob')
                },

                serviceareaauditdetail: {
                    type: ServiceareaauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Serviceareaauditdetail')
                },

                substschedule: {
                    type: SubstscheduleType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Substschedule')
                },

                subsmginfo: {
                    type: SubsmginfoType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Subsmginfo')
                },

                superbillclaimsetting: {
                    type: SuperbillclaimsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Superbillclaimsetting')
                },

                substscheduleletter: {
                    type: SubstscheduleletterType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Substscheduleletter')
                },

                supportteamaddress: {
                    type: SupportteamaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Supportteamaddress')
                },

                supportteamphone: {
                    type: SupportteamphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Supportteamphone')
                },

                surchargeschedexcludebilltype: {
                    type: SurchargeschedexcludebilltypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Surchargeschedexcludebilltype')
                },

                supportteameleccomm: {
                    type: SupportteameleccommType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Supportteameleccomm')
                },

                supportteam: {
                    type: SupportteamType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Supportteam')
                },

                surchargeschednote: {
                    type: SurchargeschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Surchargeschednote')
                },

                surchargeschedauditdetail: {
                    type: SurchargeschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Surchargeschedauditdetail')
                },

                supportteamauditdetail: {
                    type: SupportteamauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Supportteamauditdetail')
                },

                surchargeschedexcludeclaimtype: {
                    type: SurchargeschedexcludeclaimtypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Surchargeschedexcludeclaimtype')
                },

                supportteamaddressphone: {
                    type: SupportteamaddressphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Supportteamaddressphone')
                },

                surchargeschedrateplan: {
                    type: SurchargeschedrateplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Surchargeschedrateplan')
                },

                surchargeschedexcludepo: {
                    type: SurchargeschedexcludepoType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Surchargeschedexcludepo')
                },

                surchargeschedprovtin: {
                    type: SurchargeschedprovtinType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Surchargeschedprovtin')
                },

                sysSetEmailGrp: {
                    type: SysSetEmailGrpType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('SysSetEmailGrp')
                },

                surchargeschedrateexcludegovt: {
                    type: SurchargeschedrateexcludegovtType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Surchargeschedrateexcludegovt')
                },

                surchargesched: {
                    type: SurchargeschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Surchargesched')
                },

                surchargeschedrate: {
                    type: SurchargeschedrateType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Surchargeschedrate')
                },

                sysKey: {
                    type: SysKeyType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('SysKey')
                },

                surchargeschedratebenefit: {
                    type: SurchargeschedratebenefitType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Surchargeschedratebenefit')
                },

                sysSetFlSy: {
                    type: SysSetFlSyType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('SysSetFlSy')
                },

                sysErrLog: {
                    type: SysErrLogType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('SysErrLog')
                },

                sysSetRpt: {
                    type: SysSetRptType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('SysSetRpt')
                },

                sysSetSql: {
                    type: SysSetSqlType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('SysSetSql')
                },

                sysSetPrgTbl: {
                    type: SysSetPrgTblType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('SysSetPrgTbl')
                },

                sysaddress: {
                    type: SysaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Sysaddress')
                },

                sysSqlLog: {
                    type: SysSqlLogType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('SysSqlLog')
                },

                sysaddressauditdetail: {
                    type: SysaddressauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Sysaddressauditdetail')
                },

                sysSetFramwrk: {
                    type: SysSetFramwrkType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('SysSetFramwrk')
                },

                sysfinsettingauditdetail: {
                    type: SysfinsettingauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Sysfinsettingauditdetail')
                },

                sysaddressnote: {
                    type: SysaddressnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Sysaddressnote')
                },

                sysfinsetting: {
                    type: SysfinsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Sysfinsetting')
                },

                sysfinsettingfinattribschedar: {
                    type: SysfinsettingfinattribschedarType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Sysfinsettingfinattribschedar')
                },

                sysaddresstypeassign: {
                    type: SysaddresstypeassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Sysaddresstypeassign')
                },

                sysfinsettingreportutil: {
                    type: SysfinsettingreportutilType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Sysfinsettingreportutil')
                },

                sysfinsettingnote: {
                    type: SysfinsettingnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Sysfinsettingnote')
                },

                sysfinsettingservplan: {
                    type: SysfinsettingservplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Sysfinsettingservplan')
                },

                sysfinsettingruleserv: {
                    type: SysfinsettingruleservType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Sysfinsettingruleserv')
                },

                sysfinsettingfinattribschedap: {
                    type: SysfinsettingfinattribschedapType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Sysfinsettingfinattribschedap')
                },

                sysbillingdefaultvalue: {
                    type: SysbillingdefaultvalueType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Sysbillingdefaultvalue')
                },

                sysfinsettingbenefittype: {
                    type: SysfinsettingbenefittypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Sysfinsettingbenefittype')
                },

                sysfinsettingfinattribsched: {
                    type: SysfinsettingfinattribschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Sysfinsettingfinattribsched')
                },

                sysmemgroupsetting: {
                    type: SysmemgroupsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Sysmemgroupsetting')
                },

                sysfinsettingsurcharge: {
                    type: SysfinsettingsurchargeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Sysfinsettingsurcharge')
                },

                sysfinsettingutilplan: {
                    type: SysfinsettingutilplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Sysfinsettingutilplan')
                },

                sysphonenumber: {
                    type: SysphonenumberType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Sysphonenumber')
                },

                sysphonenumberlanguage: {
                    type: SysphonenumberlanguageType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Sysphonenumberlanguage')
                },

                sysphonenumbernote: {
                    type: SysphonenumbernoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Sysphonenumbernote')
                },

                sysphonenumberauditdetail: {
                    type: SysphonenumberauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Sysphonenumberauditdetail')
                },

                sysfinsettinginterest: {
                    type: SysfinsettinginterestType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Sysfinsettinginterest')
                },

                systemTbl: {
                    type: SystemTblType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('SystemTbl')
                },

                systemactuarialvalue: {
                    type: SystemactuarialvalueType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Systemactuarialvalue')
                },

                systemcontactaddress: {
                    type: SystemcontactaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Systemcontactaddress')
                },

                systemcontactname: {
                    type: SystemcontactnameType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Systemcontactname')
                },

                systemcontactphone: {
                    type: SystemcontactphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Systemcontactphone')
                },

                systemactivitylog: {
                    type: SystemactivitylogType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Systemactivitylog')
                },

                systemcontactdepartment: {
                    type: SystemcontactdepartmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Systemcontactdepartment')
                },

                systemcorpholiday: {
                    type: SystemcorpholidayType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Systemcorpholiday')
                },

                systemdepartmenthour: {
                    type: SystemdepartmenthourType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Systemdepartmenthour')
                },

                systemdepartmentphone: {
                    type: SystemdepartmentphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Systemdepartmentphone')
                },

                systemdepartmentaddress: {
                    type: SystemdepartmentaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Systemdepartmentaddress')
                },

                systemediresponse: {
                    type: SystemediresponseType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Systemediresponse')
                },

                systemediresponsestatus: {
                    type: SystemediresponsestatusType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Systemediresponsestatus')
                },

                systemedisetting: {
                    type: SystemedisettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Systemedisetting')
                },

                systemsettingsrestclient: {
                    type: SystemsettingsrestclientType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Systemsettingsrestclient')
                },

                systemediresponseloop: {
                    type: SystemediresponseloopType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Systemediresponseloop')
                },

                systempermit: {
                    type: SystempermitType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Systempermit')
                },

                systemsettingstemporary: {
                    type: SystemsettingstemporaryType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Systemsettingstemporary')
                },

                systemfederal: {
                    type: SystemfederalType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Systemfederal')
                },

                systemmsaorderofacct: {
                    type: SystemmsaorderofacctType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Systemmsaorderofacct')
                },

                systemgeneralsetting: {
                    type: SystemgeneralsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Systemgeneralsetting')
                },

                systemmsasetting: {
                    type: SystemmsasettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Systemmsasetting')
                },

                systemstate: {
                    type: SystemstateType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Systemstate')
                },

                systemworkhour: {
                    type: SystemworkhourType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Systemworkhour')
                },

                taxonomybasefileuploaddetail: {
                    type: TaxonomybasefileuploaddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Taxonomybasefileuploaddetail')
                },

                taxonomyaccreditation: {
                    type: TaxonomyaccreditationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Taxonomyaccreditation')
                },

                taxonomycode: {
                    type: TaxonomycodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Taxonomycode')
                },

                thresholdparameterdetail: {
                    type: ThresholdparameterdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Thresholdparameterdetail')
                },

                taxonomybasefileuploadheader: {
                    type: TaxonomybasefileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Taxonomybasefileuploadheader')
                },

                timelyfilingsched: {
                    type: TimelyfilingschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Timelyfilingsched')
                },

                timelyfilingscheddetail: {
                    type: TimelyfilingscheddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Timelyfilingscheddetail')
                },

                tradingpartnerconfig: {
                    type: TradingpartnerconfigType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Tradingpartnerconfig')
                },

                taxtypecode: {
                    type: TaxtypecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Taxtypecode')
                },

                systemsettingsauditdetail: {
                    type: SystemsettingsauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Systemsettingsauditdetail')
                },

                transferpricingpatientstatus: {
                    type: TransferpricingpatientstatusType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Transferpricingpatientstatus')
                },

                thresholdparameter: {
                    type: ThresholdparameterType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Thresholdparameter')
                },

                timelyfilingschednote: {
                    type: TimelyfilingschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Timelyfilingschednote')
                },

                tooth: {
                    type: ToothType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Tooth')
                },

                ucrbasefileuploadheader: {
                    type: UcrbasefileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ucrbasefileuploadheader')
                },

                ucrcompauditdetail: {
                    type: UcrcompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ucrcompauditdetail')
                },

                timelyfilingschedauditdetail: {
                    type: TimelyfilingschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Timelyfilingschedauditdetail')
                },

                ucrcomphold: {
                    type: UcrcompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ucrcomphold')
                },

                ucrcompdetailprof: {
                    type: UcrcompdetailprofType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ucrcompdetailprof')
                },

                ucrcomp: {
                    type: UcrcompType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ucrcomp')
                },

                umauthprovider: {
                    type: UmauthproviderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Umauthprovider')
                },

                ucrcompdetail: {
                    type: UcrcompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ucrcompdetail')
                },

                ucrcompnote: {
                    type: UcrcompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ucrcompnote')
                },

                ucrbasefileuploadstaging: {
                    type: UcrbasefileuploadstagingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Ucrbasefileuploadstaging')
                },

                umauth: {
                    type: UmauthType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Umauth')
                },

                umauthfacilitytype: {
                    type: UmauthfacilitytypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Umauthfacilitytype')
                },

                umauthfacilitydecision: {
                    type: UmauthfacilitydecisionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Umauthfacilitydecision')
                },

                umauthdiagnosis: {
                    type: UmauthdiagnosisType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Umauthdiagnosis')
                },

                umauthbeddayrange: {
                    type: UmauthbeddayrangeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Umauthbeddayrange')
                },

                umauthproviderroletype: {
                    type: UmauthproviderroletypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Umauthproviderroletype')
                },

                umauthservice: {
                    type: UmauthserviceType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Umauthservice')
                },

                umauthservicefacility: {
                    type: UmauthservicefacilityType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Umauthservicefacility')
                },

                umreferralauditdetail: {
                    type: UmreferralauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Umreferralauditdetail')
                },

                umreferralprovider: {
                    type: UmreferralproviderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Umreferralprovider')
                },

                umreferraldiagnosis: {
                    type: UmreferraldiagnosisType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Umreferraldiagnosis')
                },

                umreferralprovideraltid: {
                    type: UmreferralprovideraltidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Umreferralprovideraltid')
                },

                umauthservicedecision: {
                    type: UmauthservicedecisionType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Umauthservicedecision')
                },

                umauthauditdetail: {
                    type: UmauthauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Umauthauditdetail')
                },

                umauthservicenonfacil: {
                    type: UmauthservicenonfacilType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Umauthservicenonfacil')
                },

                useractivity: {
                    type: UseractivityType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Useractivity')
                },

                umauthprovideraltid: {
                    type: UmauthprovideraltidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Umauthprovideraltid')
                },

                umreferralservice: {
                    type: UmreferralserviceType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Umreferralservice')
                },

                useractivitylog: {
                    type: UseractivitylogType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Useractivitylog')
                },

                useraddress: {
                    type: UseraddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Useraddress')
                },

                userauditdetail: {
                    type: UserauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Userauditdetail')
                },

                umreferralproviderroletype: {
                    type: UmreferralproviderroletypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Umreferralproviderroletype')
                },

                umreferral: {
                    type: UmreferralType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Umreferral')
                },

                userclaimcancelcode: {
                    type: UserclaimcancelcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Userclaimcancelcode')
                },

                userclaimcancelcodeauditdetail: {
                    type: UserclaimcancelcodeauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Userclaimcancelcodeauditdetail')
                },

                usergroup: {
                    type: UsergroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Usergroup')
                },

                usertable: {
                    type: UsertableType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Usertable')
                },

                usergroupauditdetail: {
                    type: UsergroupauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Usergroupauditdetail')
                },

                usergroupuser: {
                    type: UsergroupuserType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Usergroupuser')
                },

                usersplitclaimcode: {
                    type: UsersplitclaimcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Usersplitclaimcode')
                },

                usersplitclaimcodeauditdetail: {
                    type: UsersplitclaimcodeauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Usersplitclaimcodeauditdetail')
                },

                utilizationplan: {
                    type: UtilizationplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Utilizationplan')
                },

                usergrouppermissiongroup: {
                    type: UsergrouppermissiongroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Usergrouppermissiongroup')
                },

                usertelephone: {
                    type: UsertelephoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Usertelephone')
                },

                utilizationplansetting: {
                    type: UtilizationplansettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Utilizationplansetting')
                },

                userdatasecuritygroup: {
                    type: UserdatasecuritygroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Userdatasecuritygroup')
                },

                utilizationplanauditdetail: {
                    type: UtilizationplanauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Utilizationplanauditdetail')
                },

                usersetting: {
                    type: UsersettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Usersetting')
                },

                userqualitysetting: {
                    type: UserqualitysettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Userqualitysetting')
                },

                utilizationplanexternalid: {
                    type: UtilizationplanexternalidType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Utilizationplanexternalid')
                },

                vendor: {
                    type: VendorType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Vendor')
                },

                variablecontent: {
                    type: VariablecontentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Variablecontent')
                },

                vendorauditdetail: {
                    type: VendorauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Vendorauditdetail')
                },

                vendoraccount: {
                    type: VendoraccountType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Vendoraccount')
                },

                vendorcontactdepartment: {
                    type: VendorcontactdepartmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Vendorcontactdepartment')
                },

                vendorcontactname: {
                    type: VendorcontactnameType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Vendorcontactname')
                },

                vendordepartmentaddress: {
                    type: VendordepartmentaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Vendordepartmentaddress')
                },

                vendorcontactaddress: {
                    type: VendorcontactaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Vendorcontactaddress')
                },

                vendordepartmenthour: {
                    type: VendordepartmenthourType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Vendordepartmenthour')
                },

                vendorpackageucr: {
                    type: VendorpackageucrType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Vendorpackageucr')
                },

                vendorcontactphone: {
                    type: VendorcontactphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Vendorcontactphone')
                },

                vendordepartmentphone: {
                    type: VendordepartmentphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Vendordepartmentphone')
                },

                vendorpermit: {
                    type: VendorpermitType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Vendorpermit')
                },

                vendornote: {
                    type: VendornoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Vendornote')
                },

                vendorworkhour: {
                    type: VendorworkhourType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Vendorworkhour')
                },

                vendorremarkcode: {
                    type: VendorremarkcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Vendorremarkcode')
                },

                zipcode: {
                    type: ZipcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Zipcode')
                },

                zipcodefileuploadheader: {
                    type: ZipcodefileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Zipcodefileuploadheader')
                },

                zipplus4: {
                    type: Zipplus4Type,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Zipplus4')
                },

                zipcodefileuploaddetail: {
                    type: ZipcodefileuploaddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },

                    resolve: getEntityResolver('Zipcodefileuploaddetail')
                }
            };
        }
    })
});

module.exports = schema;