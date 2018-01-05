'use strict';
var getEntityResolver = require('./util/entity-resolver');
var GraphQL = require('graphql');
var AcctbalapType = require('./types/AcctbalapType');
var AcctbalType = require('./types/AcctbalType');
var AcctbalaphxType = require('./types/AcctbalaphxType');
var AcctbalarType = require('./types/AcctbalarType');
var AcctbalauditdetailType = require('./types/AcctbalauditdetailType');
var AcctbalarhxType = require('./types/AcctbalarhxType');
var AcctbalfamacsclaimType = require('./types/AcctbalfamacsclaimType');
var AcctbalauditdetailhxType = require('./types/AcctbalauditdetailhxType');
var AcctbalfamacsclaimhxType = require('./types/AcctbalfamacsclaimhxType');
var AcctbalfamacspthxType = require('./types/AcctbalfamacspthxType');
var AcctbalindcarryoverhxType = require('./types/AcctbalindcarryoverhxType');
var AcctbalhxType = require('./types/AcctbalhxType');
var AcctbalindcarryoverType = require('./types/AcctbalindcarryoverType');
var AcctbalmemacsclaimType = require('./types/AcctbalmemacsclaimType');
var AcctbalfamacsptType = require('./types/AcctbalfamacsptType');
var AcctbalmemacsptType = require('./types/AcctbalmemacsptType');
var AcctbalnoteType = require('./types/AcctbalnoteType');
var AcctbalmemacspthxType = require('./types/AcctbalmemacspthxType');
var AcctbalmemacsclaimhxType = require('./types/AcctbalmemacsclaimhxType');
var AcctbalnotehxType = require('./types/AcctbalnotehxType');
var AcctbalnotedetailhxType = require('./types/AcctbalnotedetailhxType');
var AcctbalprefundapType = require('./types/AcctbalprefundapType');
var AcctbalnotedetailType = require('./types/AcctbalnotedetailType');
var AcctbalprefundarhxType = require('./types/AcctbalprefundarhxType');
var AcctbalprefundarType = require('./types/AcctbalprefundarType');
var AcctbalpurseType = require('./types/AcctbalpurseType');
var AcctbalprefundaphxType = require('./types/AcctbalprefundaphxType');
var AcctbalpursehxType = require('./types/AcctbalpursehxType');
var AcctbaltimelineType = require('./types/AcctbaltimelineType');
var AccumbypassType = require('./types/AccumbypassType');
var AccumbypassplanType = require('./types/AccumbypassplanType');
var AcctbaltimelinehxType = require('./types/AcctbaltimelinehxType');
var AccumbypassauditType = require('./types/AccumbypassauditType');
var AccumbypasstxsuppressType = require('./types/AccumbypasstxsuppressType');
var AccumcobreserveType = require('./types/AccumcobreserveType');
var AccumdeductfamType = require('./types/AccumdeductfamType');
var AccumdeductfamauditType = require('./types/AccumdeductfamauditType');
var AccumbypasstxType = require('./types/AccumbypasstxType');
var AccumcobreservetxType = require('./types/AccumcobreservetxType');
var AccumdeductfamtxType = require('./types/AccumdeductfamtxType');
var AccumdeductfamtxsuppressType = require('./types/AccumdeductfamtxsuppressType');
var AccumdeductfamplanType = require('./types/AccumdeductfamplanType');
var AccumdeductindivauditType = require('./types/AccumdeductindivauditType');
var AccumdeductindivplanType = require('./types/AccumdeductindivplanType');
var AccumdeductindivType = require('./types/AccumdeductindivType');
var AccumdeductindivtxsuppressType = require('./types/AccumdeductindivtxsuppressType');
var AccumerrorType = require('./types/AccumerrorType');
var AccumdeductindivtxType = require('./types/AccumdeductindivtxType');
var AccumlockauditdetailType = require('./types/AccumlockauditdetailType');
var AccumerrornoteType = require('./types/AccumerrornoteType');
var AccummaxfamType = require('./types/AccummaxfamType');
var AccumerrorconfigType = require('./types/AccumerrorconfigType');
var AccummaxfamplanType = require('./types/AccummaxfamplanType');
var AccummaxfamtxType = require('./types/AccummaxfamtxType');
var AccummaxindivauditType = require('./types/AccummaxindivauditType');
var AccummaxfamtxsuppressType = require('./types/AccummaxfamtxsuppressType');
var AccummaxfamauditType = require('./types/AccummaxfamauditType');
var AccummaxindivType = require('./types/AccummaxindivType');
var AccumoopfamType = require('./types/AccumoopfamType');
var AccummaxindivplanType = require('./types/AccummaxindivplanType');
var AccummaxindivtxsuppressType = require('./types/AccummaxindivtxsuppressType');
var AccummaxindivtxType = require('./types/AccummaxindivtxType');
var AccumoopfamplanType = require('./types/AccumoopfamplanType');
var AccumoopfamauditType = require('./types/AccumoopfamauditType');
var AccumoopfamtxsuppressType = require('./types/AccumoopfamtxsuppressType');
var AccumoopindivType = require('./types/AccumoopindivType');
var AccumoopfamtxType = require('./types/AccumoopfamtxType');
var AccumoopindivauditType = require('./types/AccumoopindivauditType');
var AccumoopindivtxType = require('./types/AccumoopindivtxType');
var AccumoopindivplanType = require('./types/AccumoopindivplanType');
var AccumulatorlockType = require('./types/AccumulatorlockType');
var AccumumauthbeddayrangeType = require('./types/AccumumauthbeddayrangeType');
var AccumumauthbeddayType = require('./types/AccumumauthbeddayType');
var AccumoopindivtxsuppressType = require('./types/AccumoopindivtxsuppressType');
var AccumumauthoutpatientType = require('./types/AccumumauthoutpatientType');
var AccumumauthoutpatienttxType = require('./types/AccumumauthoutpatienttxType');
var AccumumreferralType = require('./types/AccumumreferralType');
var AccumumauthservicenonfacilType = require('./types/AccumumauthservicenonfacilType');
var AccumumauthbeddaytxType = require('./types/AccumumauthbeddaytxType');
var AccumumreferraltxType = require('./types/AccumumreferraltxType');
var AdjudscheddenycodeType = require('./types/AdjudscheddenycodeType');
var AdjudschedauditdetailType = require('./types/AdjudschedauditdetailType');
var AdjudscheddupclaimType = require('./types/AdjudscheddupclaimType');
var AdaclaimsettingType = require('./types/AdaclaimsettingType');
var AdjudschedheaderType = require('./types/AdjudschedheaderType');
var AdjudschedlettercodeType = require('./types/AdjudschedlettercodeType');
var AdjudschedmodifierType = require('./types/AdjudschedmodifierType');
var AdjudschednoteType = require('./types/AdjudschednoteType');
var AdjudschedmemberdiffType = require('./types/AdjudschedmemberdiffType');
var AdjudschedgencodeType = require('./types/AdjudschedgencodeType');
var AdjudschedpendtemplateType = require('./types/AdjudschedpendtemplateType');
var AdjudschedpendtemplatevcType = require('./types/AdjudschedpendtemplatevcType');
var AdjudschedoverridecodeType = require('./types/AdjudschedoverridecodeType');
var AdjudschedproviderdiffType = require('./types/AdjudschedproviderdiffType');
var AdjudschedrevenuecategoryType = require('./types/AdjudschedrevenuecategoryType');
var AdjudschedroutecodeType = require('./types/AdjudschedroutecodeType');
var AdjudschedsettingsaccountType = require('./types/AdjudschedsettingsaccountType');
var AdjudschedsettingsbenefitType = require('./types/AdjudschedsettingsbenefitType');
var AdjudschedrelcoderestrictionType = require('./types/AdjudschedrelcoderestrictionType');
var AdjudschedsettingsmemgroupType = require('./types/AdjudschedsettingsmemgroupType');
var AdjudschedulecobType = require('./types/AdjudschedulecobType');
var AdjudschedtpldiagcategoryType = require('./types/AdjudschedtpldiagcategoryType');
var AgegenderschedType = require('./types/AgegenderschedType');
var AdjudscheduleType = require('./types/AdjudscheduleType');
var AdjudschedrxType = require('./types/AdjudschedrxType');
var AdjudschedsettingssystemType = require('./types/AdjudschedsettingssystemType');
var AgegenderschednoteType = require('./types/AgegenderschednoteType');
var AgegenderschedauditdetailType = require('./types/AgegenderschedauditdetailType');
var AmbulancecompType = require('./types/AmbulancecompType');
var AmbulancecompauditdetailType = require('./types/AmbulancecompauditdetailType');
var AltartransactiondescType = require('./types/AltartransactiondescType');
var AmbulancecompdetailmodType = require('./types/AmbulancecompdetailmodType');
var AmbulancecompdetailType = require('./types/AmbulancecompdetailType');
var AmbulancecompnoteType = require('./types/AmbulancecompnoteType');
var AmbulancecompdetailregionType = require('./types/AmbulancecompdetailregionType');
var AmbulancecompholdType = require('./types/AmbulancecompholdType');
var AnesthesiacompType = require('./types/AnesthesiacompType');
var AmbulancemodifierType = require('./types/AmbulancemodifierType');
var AnesthesiacompdetailType = require('./types/AnesthesiacompdetailType');
var AnesthesiacompauditdetailType = require('./types/AnesthesiacompauditdetailType');
var AnesthesiacompholdType = require('./types/AnesthesiacompholdType');
var AnesthesiacompnoteType = require('./types/AnesthesiacompnoteType');
var AnesthesiacompdetailmodType = require('./types/AnesthesiacompdetailmodType');
var AnesthesiaphysicalstatusmodType = require('./types/AnesthesiaphysicalstatusmodType');
var AnesthesiamodifierType = require('./types/AnesthesiamodifierType');
var ApcbasefileuploaddetailType = require('./types/ApcbasefileuploaddetailType');
var ApcbasefileuploadheaderType = require('./types/ApcbasefileuploadheaderType');
var AnesthmodifiercompassignType = require('./types/AnesthmodifiercompassignType');
var ApccodeheaderType = require('./types/ApccodeheaderType');
var ApccodedetailType = require('./types/ApccodedetailType');
var ApgenerationresponseType = require('./types/ApgenerationresponseType');
var ApidefaultpricingcomporderType = require('./types/ApidefaultpricingcomporderType');
var ApproveddestinationType = require('./types/ApproveddestinationType');
var AptransactionType = require('./types/AptransactionType');
var ApcprocgrouperType = require('./types/ApcprocgrouperType');
var AptransactionattribsetType = require('./types/AptransactionattribsetType');
var AptransactionattribType = require('./types/AptransactionattribType');
var AptransactionaccumsnapshotType = require('./types/AptransactionaccumsnapshotType');
var AptransactionattribtagType = require('./types/AptransactionattribtagType');
var AptransactiondetailType = require('./types/AptransactiondetailType');
var AptransactionauditdetailType = require('./types/AptransactionauditdetailType');
var AptransactionattribsetglstringType = require('./types/AptransactionattribsetglstringType');
var AptransactionopType = require('./types/AptransactionopType');
var AptransactiontypeType = require('./types/AptransactiontypeType');
var AptransactioninterestType = require('./types/AptransactioninterestType');
var ArcreditreceiptType = require('./types/ArcreditreceiptType');
var AptransactionrecipientType = require('./types/AptransactionrecipientType');
var AptransactionsurchargeType = require('./types/AptransactionsurchargeType');
var AptransactionremarkType = require('./types/AptransactionremarkType');
var AptransactionnoteType = require('./types/AptransactionnoteType');
var AptransactionreductionType = require('./types/AptransactionreductionType');
var ArtransactionauditdetailType = require('./types/ArtransactionauditdetailType');
var ArtransactiondetailType = require('./types/ArtransactiondetailType');
var ArtransactionnoteType = require('./types/ArtransactionnoteType');
var ArmaxType = require('./types/ArmaxType');
var AptransactiontagType = require('./types/AptransactiontagType');
var AptransactionoprecoverType = require('./types/AptransactionoprecoverType');
var ArtransactionheaderType = require('./types/ArtransactionheaderType');
var ArtransactiontypeType = require('./types/ArtransactiontypeType');
var AsacptType = require('./types/AsacptType');
var ArtransactionnotedetailType = require('./types/ArtransactionnotedetailType');
var AssignpassthrucompType = require('./types/AssignpassthrucompType');
var AuditerrorsourceType = require('./types/AuditerrorsourceType');
var AssignoutliercompType = require('./types/AssignoutliercompType');
var AuditerrorcodeType = require('./types/AuditerrorcodeType');
var AssignfallthrucompType = require('./types/AssignfallthrucompType');
var AuditerrorvrcodeType = require('./types/AuditerrorvrcodeType');
var AuthdecactionschedauditdetailType = require('./types/AuthdecactionschedauditdetailType');
var AuditsampletypeType = require('./types/AuditsampletypeType');
var AuthdecactionschednoteType = require('./types/AuthdecactionschednoteType');
var AuthdecisionactionType = require('./types/AuthdecisionactionType');
var AuthdecisionactiontriggerType = require('./types/AuthdecisionactiontriggerType');
var AuthdecisioncodeType = require('./types/AuthdecisioncodeType');
var AuthmatchingschedType = require('./types/AuthmatchingschedType');
var AuthprogramauthcharorderType = require('./types/AuthprogramauthcharorderType');
var AuthdecisionactionscheduleType = require('./types/AuthdecisionactionscheduleType');
var AuthmatchingschedauditdetailType = require('./types/AuthmatchingschedauditdetailType');
var AuthmatchingschednoteType = require('./types/AuthmatchingschednoteType');
var AuthprogramprocdiagnosisType = require('./types/AuthprogramprocdiagnosisType');
var AuthprogramprocedureType = require('./types/AuthprogramprocedureType');
var AuthprogramauthservicetypeType = require('./types/AuthprogramauthservicetypeType');
var AuthprogramtypeType = require('./types/AuthprogramtypeType');
var AuthprogramdiagnosisType = require('./types/AuthprogramdiagnosisType');
var AuthprogramauthproccodematchType = require('./types/AuthprogramauthproccodematchType');
var AutocontribqueueType = require('./types/AutocontribqueueType');
var BankaccountType = require('./types/BankaccountType');
var BankaccounttypeType = require('./types/BankaccounttypeType');
var BankacctbalanceType = require('./types/BankacctbalanceType');
var BankType = require('./types/BankType');
var BankacctcreditType = require('./types/BankacctcreditType');
var BankacctdebitType = require('./types/BankacctdebitType');
var BankauditdetailType = require('./types/BankauditdetailType');
var BankbranchType = require('./types/BankbranchType');
var BankacctcreditlineType = require('./types/BankacctcreditlineType');
var BankcontactaddressType = require('./types/BankcontactaddressType');
var BankcontactnameType = require('./types/BankcontactnameType');
var BankcontactphoneType = require('./types/BankcontactphoneType');
var BankdepartmenthourType = require('./types/BankdepartmenthourType');
var BankdepartmentaddressType = require('./types/BankdepartmentaddressType');
var BankcontactdepartmentType = require('./types/BankcontactdepartmentType');
var BanknoteType = require('./types/BanknoteType');
var BanknotedetailType = require('./types/BanknotedetailType');
var BankworkhourType = require('./types/BankworkhourType');
var BankroutingType = require('./types/BankroutingType');
var BankdepartmentphoneType = require('./types/BankdepartmentphoneType');
var BbFieldType = require('./types/BbFieldType');
var BbTableType = require('./types/BbTableType');
var BbMessageType = require('./types/BbMessageType');
var BbTableFieldType = require('./types/BbTableFieldType');
var BatchentrylogType = require('./types/BatchentrylogType');
var BeddayscheduleType = require('./types/BeddayscheduleType');
var BeddayscheduledetailType = require('./types/BeddayscheduledetailType');
var BeddayscheduledetailrevType = require('./types/BeddayscheduledetailrevType');
var BeddayscheduleauditdetailType = require('./types/BeddayscheduleauditdetailType');
var BeddayschedulenoteType = require('./types/BeddayschedulenoteType');
var BeneaccumbypassType = require('./types/BeneaccumbypassType');
var BeneaccumbypassrefType = require('./types/BeneaccumbypassrefType');
var BenebaserateType = require('./types/BenebaserateType');
var BeneaccumbypassperiodType = require('./types/BeneaccumbypassperiodType');
var BeneaccumbypasstierType = require('./types/BeneaccumbypasstierType');
var BenecobemploystatusType = require('./types/BenecobemploystatusType');
var BeneauditdetailType = require('./types/BeneauditdetailType');
var BenecoderelationshipType = require('./types/BenecoderelationshipType');
var BenecodeservicetypecodeType = require('./types/BenecodeservicetypecodeType');
var BenecodestateType = require('./types/BenecodestateType');
var BenecodeadjType = require('./types/BenecodeadjType');
var BenecompositelimitType = require('./types/BenecompositelimitType');
var BenecoverageconditionType = require('./types/BenecoverageconditionType');
var BenedeductibleType = require('./types/BenedeductibleType');
var BenecodesupplType = require('./types/BenecodesupplType');
var BenedeductibleperiodType = require('./types/BenedeductibleperiodType');
var BenedeductiblerefType = require('./types/BenedeductiblerefType');
var BeneexternalidType = require('./types/BeneexternalidType');
var BenefitbundleccbypassgroupType = require('./types/BenefitbundleccbypassgroupType');
var BenedeductiblefamilyType = require('./types/BenedeductiblefamilyType');
var BenedeductibletierType = require('./types/BenedeductibletierType');
var BenefitbundleactuarialvalueType = require('./types/BenefitbundleactuarialvalueType');
var BenefitbundlebaserateType = require('./types/BenefitbundlebaserateType');
var BenefitbundlebillingsetType = require('./types/BenefitbundlebillingsetType');
var BenefitbundleType = require('./types/BenefitbundleType');
var BenefitbundleauditdetailType = require('./types/BenefitbundleauditdetailType');
var BenefitbundleccdedgroupType = require('./types/BenefitbundleccdedgroupType');
var BenefitbundleccbypassplanType = require('./types/BenefitbundleccbypassplanType');
var BenefitbundleccmaxgroupType = require('./types/BenefitbundleccmaxgroupType');
var BenefitbundleccdedplanType = require('./types/BenefitbundleccdedplanType');
var BenefitbundleccoopgroupType = require('./types/BenefitbundleccoopgroupType');
var BenefitbundleccmaxplanType = require('./types/BenefitbundleccmaxplanType');
var BenefitbundlecontrolplandedType = require('./types/BenefitbundlecontrolplandedType');
var BenefitbundlecontrolplanbypassType = require('./types/BenefitbundlecontrolplanbypassType');
var BenefitbundlecontrolplanoopType = require('./types/BenefitbundlecontrolplanoopType');
var BenefitbundleccoopplanType = require('./types/BenefitbundleccoopplanType');
var BenefitbundlecontrolplanmaxType = require('./types/BenefitbundlecontrolplanmaxType');
var BenefitbundlemsaoptionType = require('./types/BenefitbundlemsaoptionType');
var BenefitbundleextidType = require('./types/BenefitbundleextidType');
var BenefitbundlecrosscontrolaccumType = require('./types/BenefitbundlecrosscontrolaccumType');
var BenefitbundlenoteType = require('./types/BenefitbundlenoteType');
var BenefitbundlemsaplanType = require('./types/BenefitbundlemsaplanType');
var BenefitbundleoptionType = require('./types/BenefitbundleoptionType');
var BenefitbundleoptionextidType = require('./types/BenefitbundleoptionextidType');
var BenefitbundleoonpricingadjustType = require('./types/BenefitbundleoonpricingadjustType');
var BenefitbundleplanType = require('./types/BenefitbundleplanType');
var BenefitbundlerideroptionType = require('./types/BenefitbundlerideroptionType');
var BenefitbundleriderplanType = require('./types/BenefitbundleriderplanType');
var BenefitbundleplanaccumType = require('./types/BenefitbundleplanaccumType');
var BenefitbundleserviceplanType = require('./types/BenefitbundleserviceplanType');
var BenefitbundlestandardcompidType = require('./types/BenefitbundlestandardcompidType');
var BenefitbundleserviceoptionType = require('./types/BenefitbundleserviceoptionType');
var BenefitbundleutilizationplanType = require('./types/BenefitbundleutilizationplanType');
var BenefitbundlevalidationType = require('./types/BenefitbundlevalidationType');
var BenefitbundleutilizationoptType = require('./types/BenefitbundleutilizationoptType');
var BenefitcodeType = require('./types/BenefitcodeType');
var BenefitfulfillmenttextType = require('./types/BenefitfulfillmenttextType');
var BenefitfulfillmenttextperiodType = require('./types/BenefitfulfillmenttextperiodType');
var BenefitfulfillmenttextnoteType = require('./types/BenefitfulfillmenttextnoteType');
var BenefitplanType = require('./types/BenefitplanType');
var BenefitcodemerchantcatcodeType = require('./types/BenefitcodemerchantcatcodeType');
var BenefitfulfillmenttexttypeType = require('./types/BenefitfulfillmenttexttypeType');
var BenefitplantradingdedType = require('./types/BenefitplantradingdedType');
var BenefitplantradingpartnerType = require('./types/BenefitplantradingpartnerType');
var BenefitplantradingoopType = require('./types/BenefitplantradingoopType');
var BenefitplancodeType = require('./types/BenefitplancodeType');
var BenefittypestackType = require('./types/BenefittypestackType');
var BenefulfillmenttextauditdetailType = require('./types/BenefulfillmenttextauditdetailType');
var BenelangschedtextauditdetailType = require('./types/BenelangschedtextauditdetailType');
var BenelanguageschedType = require('./types/BenelanguageschedType');
var BenelangschedtextsvctypecodeType = require('./types/BenelangschedtextsvctypecodeType');
var BenefitssettingType = require('./types/BenefitssettingType');
var BenelanguageschedauditdetailType = require('./types/BenelanguageschedauditdetailType');
var BenelanguageschedassignType = require('./types/BenelanguageschedassignType');
var BenelanguageschedtextType = require('./types/BenelanguageschedtextType');
var BenelanguageschednoteType = require('./types/BenelanguageschednoteType');
var BenelanguageschedtexttypeType = require('./types/BenelanguageschedtexttypeType');
var BenelanguagevariablecodeType = require('./types/BenelanguagevariablecodeType');
var BenemaxType = require('./types/BenemaxType');
var BenelanguagevariablefulfillappType = require('./types/BenelanguagevariablefulfillappType');
var BenelanguageschedtextrelcodeType = require('./types/BenelanguageschedtextrelcodeType');
var BenemaxperiodType = require('./types/BenemaxperiodType');
var BenemaxrefType = require('./types/BenemaxrefType');
var BenemaxtierType = require('./types/BenemaxtierType');
var BenenetworkbaserateType = require('./types/BenenetworkbaserateType');
var BenemaxperiodprocedureType = require('./types/BenemaxperiodprocedureType');
var BenenoteType = require('./types/BenenoteType');
var BeneoverrideType = require('./types/BeneoverrideType');
var BeneplanactuarialvalueType = require('./types/BeneplanactuarialvalueType');
var BenenetworkschedType = require('./types/BenenetworkschedType');
var BeneplanphonenumberType = require('./types/BeneplanphonenumberType');
var BeneplanaddressType = require('./types/BeneplanaddressType');
var BeneplansettingType = require('./types/BeneplansettingType');
var BeneporcelainlimitType = require('./types/BeneporcelainlimitType');
var BenestoplossoopType = require('./types/BenestoplossoopType');
var BenestoplossoopperiodType = require('./types/BenestoplossoopperiodType');
var BenestoplossfamilyType = require('./types/BenestoplossfamilyType');
var BeneplanrelationshipType = require('./types/BeneplanrelationshipType');
var BenestandardcompidType = require('./types/BenestandardcompidType');
var BenetierType = require('./types/BenetierType');
var BenestoplossrefType = require('./types/BenestoplossrefType');
var BenestoplosstierType = require('./types/BenestoplosstierType');
var BenetierprovType = require('./types/BenetierprovType');
var BenetiernetworkType = require('./types/BenetiernetworkType');
var BenewaiverefType = require('./types/BenewaiverefType');
var BillingschedType = require('./types/BillingschedType');
var BillingschedauditdetailType = require('./types/BillingschedauditdetailType');
var BillingschedagegenderType = require('./types/BillingschedagegenderType');
var BenevalidationType = require('./types/BenevalidationType');
var BillingschedfudslevelType = require('./types/BillingschedfudslevelType');
var BillingschednoteType = require('./types/BillingschednoteType');
var BillingsetType = require('./types/BillingsetType');
var BillingschedentityType = require('./types/BillingschedentityType');
var BillingschedmodifierType = require('./types/BillingschedmodifierType');
var BillingsetnoteType = require('./types/BillingsetnoteType');
var BilltypecategoryType = require('./types/BilltypecategoryType');
var BilltypesetcatdetailType = require('./types/BilltypesetcatdetailType');
var BillingsetauditdetailType = require('./types/BillingsetauditdetailType');
var BillitemtypeType = require('./types/BillitemtypeType');
var BillingsetschedassignType = require('./types/BillingsetschedassignType');
var BilltypeType = require('./types/BilltypeType');
var BilltypesetType = require('./types/BilltypesetType');
var BilltypesetauditdetailType = require('./types/BilltypesetauditdetailType');
var BilltypesetcatType = require('./types/BilltypesetcatType');
var BilltypecategorydefinitionType = require('./types/BilltypecategorydefinitionType');
var BrandingentityType = require('./types/BrandingentityType');
var BilltypesetcatdetaildefType = require('./types/BilltypesetcatdetaildefType');
var CapmodifierType = require('./types/CapmodifierType');
var CapschedauditdetailType = require('./types/CapschedauditdetailType');
var CapagegenderType = require('./types/CapagegenderType');
var CapschednotedetailType = require('./types/CapschednotedetailType');
var CapscheduleType = require('./types/CapscheduleType');
var CapsetassignmentType = require('./types/CapsetassignmentType');
var CapschednoteType = require('./types/CapschednoteType');
var CarrierType = require('./types/CarrierType');
var CarrierauditdetailType = require('./types/CarrierauditdetailType');
var CapsetType = require('./types/CapsetType');
var CarriercontactdepartmentType = require('./types/CarriercontactdepartmentType');
var CarriercontactaddressType = require('./types/CarriercontactaddressType');
var CarriercontactnameType = require('./types/CarriercontactnameType');
var CarriercontactphoneType = require('./types/CarriercontactphoneType');
var CarrierdepartmentaddressType = require('./types/CarrierdepartmentaddressType');
var CarrierdepartmentphoneType = require('./types/CarrierdepartmentphoneType');
var CarrierextidType = require('./types/CarrierextidType');
var CarrierdepartmenthourType = require('./types/CarrierdepartmenthourType');
var CarrierlobplanType = require('./types/CarrierlobplanType');
var CarrierhiosissueridType = require('./types/CarrierhiosissueridType');
var CarrierlobauditdetailType = require('./types/CarrierlobauditdetailType');
var CarrierlobproductType = require('./types/CarrierlobproductType');
var CarrierfeinType = require('./types/CarrierfeinType');
var CarrierlineofbusinessType = require('./types/CarrierlineofbusinessType');
var CarriernoteType = require('./types/CarriernoteType');
var CarrierlobpermitType = require('./types/CarrierlobpermitType');
var CarrierworkhourType = require('./types/CarrierworkhourType');
var CarryovererrorqueueType = require('./types/CarryovererrorqueueType');
var ClaaccountType = require('./types/ClaaccountType');
var CarrierstateType = require('./types/CarrierstateType');
var CislBatchprocessType = require('./types/CislBatchprocessType');
var ClaaccountexpenseType = require('./types/ClaaccountexpenseType');
var CarrierserviceType = require('./types/CarrierserviceType');
var CarriernotedetailType = require('./types/CarriernotedetailType');
var CislBatchprocesstypeType = require('./types/CislBatchprocesstypeType');
var ClaacctbaltimelineType = require('./types/ClaacctbaltimelineType');
var ClabenefitType = require('./types/ClabenefitType');
var ClabenefitallowedType = require('./types/ClabenefitallowedType');
var CarrierurlType = require('./types/CarrierurlType');
var ClabenefitauthreferralType = require('./types/ClabenefitauthreferralType');
var ClabenefitauthreferralmatchType = require('./types/ClabenefitauthreferralmatchType');
var ClaacctbaltimelinehxType = require('./types/ClaacctbaltimelinehxType');
var ClaaccounthealthType = require('./types/ClaaccounthealthType');
var ClabenefitcodeType = require('./types/ClabenefitcodeType');
var ClabenefitcobType = require('./types/ClabenefitcobType');
var ClabenefitcopaymentType = require('./types/ClabenefitcopaymentType');
var ClabenefitdeductibleType = require('./types/ClabenefitdeductibleType');
var ClabenefitdelegationType = require('./types/ClabenefitdelegationType');
var ClabenefitcoinsuranceType = require('./types/ClabenefitcoinsuranceType');
var ClabenefiteocactionType = require('./types/ClabenefiteocactionType');
var ClabenefitproviderflagType = require('./types/ClabenefitproviderflagType');
var ClabenefituseroverridebcrrType = require('./types/ClabenefituseroverridebcrrType');
var CladofrType = require('./types/CladofrType');
var ClabenefitwithholdType = require('./types/ClabenefitwithholdType');
var ClabenefitfilingType = require('./types/ClabenefitfilingType');
var ClabenefitmaximumType = require('./types/ClabenefitmaximumType');
var ClabenefitoverpayType = require('./types/ClabenefitoverpayType');
var ClabenefituseroverrideType = require('./types/ClabenefituseroverrideType');
var CladenyType = require('./types/CladenyType');
var ClaeocrelatedlogType = require('./types/ClaeocrelatedlogType');
var ClaimambulanceType = require('./types/ClaimambulanceType');
var ClabenefitproviderType = require('./types/ClabenefitproviderType');
var ClaeocrelatedlogoverrideType = require('./types/ClaeocrelatedlogoverrideType');
var ClaimauditbilltypeType = require('./types/ClaimauditbilltypeType');
var ClaimauditbenefitType = require('./types/ClaimauditbenefitType');
var ClaeoctriggerlogType = require('./types/ClaeoctriggerlogType');
var ClabenefituseroverridewaivemaxType = require('./types/ClabenefituseroverridewaivemaxType');
var ClaimauditdispositionType = require('./types/ClaimauditdispositionType');
var ClaimaccidentType = require('./types/ClaimaccidentType');
var ClaimattachmentType = require('./types/ClaimattachmentType');
var ClaimauditexternalrequestType = require('./types/ClaimauditexternalrequestType');
var ClaimauditdelegType = require('./types/ClaimauditdelegType');
var ClaimauditcovsequenceType = require('./types/ClaimauditcovsequenceType');
var ClaimauditdiagnosisType = require('./types/ClaimauditdiagnosisType');
var ClaimauditmodifierType = require('./types/ClaimauditmodifierType');
var ClaimauditnetworkType = require('./types/ClaimauditnetworkType');
var ClaimauditpricingmethodType = require('./types/ClaimauditpricingmethodType');
var ClaimauditprocedureType = require('./types/ClaimauditprocedureType');
var ClaimauditpoType = require('./types/ClaimauditpoType');
var ClaimauditproviderspecialtyType = require('./types/ClaimauditproviderspecialtyType');
var ClaimauditproviderType = require('./types/ClaimauditproviderType');
var ClaimauditschedType = require('./types/ClaimauditschedType');
var ClaimauditschedsettingType = require('./types/ClaimauditschedsettingType');
var ClaimaudittypeType = require('./types/ClaimaudittypeType');
var ClaimauditstateType = require('./types/ClaimauditstateType');
var ClaimaudituserType = require('./types/ClaimaudituserType');
var ClaimauditschedauditdetailType = require('./types/ClaimauditschedauditdetailType');
var ClaimauditschedruleType = require('./types/ClaimauditschedruleType');
var ClaimclinicType = require('./types/ClaimclinicType');
var ClaimcarrierType = require('./types/ClaimcarrierType');
var ClaimauditrevenueType = require('./types/ClaimauditrevenueType');
var ClaimcliniceditdiagnosisType = require('./types/ClaimcliniceditdiagnosisType');
var ClaimcliniceditType = require('./types/ClaimcliniceditType');
var ClaimcobadjudicationType = require('./types/ClaimcobadjudicationType');
var ClaimcobadjustmentType = require('./types/ClaimcobadjustmentType');
var ClaimcliniceditflagType = require('./types/ClaimcliniceditflagType');
var ClaimcobheaderType = require('./types/ClaimcobheaderType');
var ClaimcobinfoType = require('./types/ClaimcobinfoType');
var ClaimcobcontractType = require('./types/ClaimcobcontractType');
var ClaimcobmedicareType = require('./types/ClaimcobmedicareType');
var ClaimcobothersubscriberType = require('./types/ClaimcobothersubscriberType');
var ClaimcompositeblobType = require('./types/ClaimcompositeblobType');
var ClaimcobprovsecondaryidType = require('./types/ClaimcobprovsecondaryidType');
var ClaimcoblineType = require('./types/ClaimcoblineType');
var ClaimcobpayerType = require('./types/ClaimcobpayerType');
var ClaimcontactType = require('./types/ClaimcontactType');
var ClaimdentalorthoType = require('./types/ClaimdentalorthoType');
var ClaimconditionType = require('./types/ClaimconditionType');
var ClaimdentalprosthType = require('./types/ClaimdentalprosthType');
var ClaimeditType = require('./types/ClaimeditType');
var ClaimedithxType = require('./types/ClaimedithxType');
var ClaimeditintermediateType = require('./types/ClaimeditintermediateType');
var ClaimdiagnosisType = require('./types/ClaimdiagnosisType');
var ClaimefstxType = require('./types/ClaimefstxType');
var ClaimenvelopeType = require('./types/ClaimenvelopeType');
var ClaimeditsummaryType = require('./types/ClaimeditsummaryType');
var ClaimenvmatchedclaimType = require('./types/ClaimenvmatchedclaimType');
var ClaimeventpromptpayType = require('./types/ClaimeventpromptpayType');
var ClaimeventType = require('./types/ClaimeventType');
var ClaimfileinfoType = require('./types/ClaimfileinfoType');
var ClaimheaderType = require('./types/ClaimheaderType');
var ClaimeventuncleantimeType = require('./types/ClaimeventuncleantimeType');
var ClaimheaderauditdetailType = require('./types/ClaimheaderauditdetailType');
var ClaimheadericpType = require('./types/ClaimheadericpType');
var ClaimheaderdentalType = require('./types/ClaimheaderdentalType');
var ClaimheadernoteType = require('./types/ClaimheadernoteType');
var ClaimheadericpdenyType = require('./types/ClaimheadericpdenyType');
var ClaimheadercobType = require('./types/ClaimheadercobType');
var ClaimheaderinstType = require('./types/ClaimheaderinstType');
var ClaimheaderrxType = require('./types/ClaimheaderrxType');
var ClaimheadersuperbillType = require('./types/ClaimheadersuperbillType');
var ClaiminstpayerType = require('./types/ClaiminstpayerType');
var ClaiminstoccurType = require('./types/ClaiminstoccurType');
var ClaiminstprocType = require('./types/ClaiminstprocType');
var ClaiminstvalueType = require('./types/ClaiminstvalueType');
var ClaimheaderprofType = require('./types/ClaimheaderprofType');
var ClaimlineadjudicationType = require('./types/ClaimlineadjudicationType');
var ClaiminstcondType = require('./types/ClaiminstcondType');
var ClaimlineeventType = require('./types/ClaimlineeventType');
var Claiminst81CcType = require('./types/Claiminst81CcType');
var ClaiminstoccurspanType = require('./types/ClaiminstoccurspanType');
var ClaimhealthinformationType = require('./types/ClaimhealthinformationType');
var ClaimlinecobType = require('./types/ClaimlinecobType');
var ClaimlinedentalType = require('./types/ClaimlinedentalType');
var ClaimlineicpType = require('./types/ClaimlineicpType');
var ClaimlineexpenseType = require('./types/ClaimlineexpenseType');
var ClaimlineinstType = require('./types/ClaimlineinstType');
var ClaimlineicpdenyType = require('./types/ClaimlineicpdenyType');
var ClaimlinepredeterminationType = require('./types/ClaimlinepredeterminationType');
var ClaimlineprofType = require('./types/ClaimlineprofType');
var ClaimlinepriorauthType = require('./types/ClaimlinepriorauthType');
var ClaimlineprofanesthesiaType = require('./types/ClaimlineprofanesthesiaType');
var ClaimlinemapType = require('./types/ClaimlinemapType');
var ClaimlineprofdmeType = require('./types/ClaimlineprofdmeType');
var ClaimlineprofmeasureType = require('./types/ClaimlineprofmeasureType');
var ClaimlineprofrxType = require('./types/ClaimlineprofrxType');
var ClaimlinerxcompoundType = require('./types/ClaimlinerxcompoundType');
var ClaimlinesuperbillType = require('./types/ClaimlinesuperbillType');
var ClaimlinerxType = require('./types/ClaimlinerxType');
var ClaimnoteType = require('./types/ClaimnoteType');
var ClaimlinesupportingdocType = require('./types/ClaimlinesupportingdocType');
var ClaimpayeeType = require('./types/ClaimpayeeType');
var ClaimnotificationType = require('./types/ClaimnotificationType');
var ClaimpricingdetailreapportionType = require('./types/ClaimpricingdetailreapportionType');
var ClaimmedpolicyengineinputlineType = require('./types/ClaimmedpolicyengineinputlineType');
var ClaimmedpolengineinputheaderType = require('./types/ClaimmedpolengineinputheaderType');
var ClaimpricingdetailmodifierType = require('./types/ClaimpricingdetailmodifierType');
var ClaimmembergroupinfoType = require('./types/ClaimmembergroupinfoType');
var ClaimmemberType = require('./types/ClaimmemberType');
var ClaimpayerType = require('./types/ClaimpayerType');
var ClaimpayersecondaryidType = require('./types/ClaimpayersecondaryidType');
var ClaimpricingexternalrequestType = require('./types/ClaimpricingexternalrequestType');
var ClaimpricingexternalrespdtlType = require('./types/ClaimpricingexternalrespdtlType');
var ClaimpricingdetailtierType = require('./types/ClaimpricingdetailtierType');
var ClaimpricingdetailspiType = require('./types/ClaimpricingdetailspiType');
var ClaimpricingexternalresphdrType = require('./types/ClaimpricingexternalresphdrType');
var ClaimpricingediType = require('./types/ClaimpricingediType');
var ClaimpricinginputdetailType = require('./types/ClaimpricinginputdetailType');
var ClaimpricingexternalrespdtledtType = require('./types/ClaimpricingexternalrespdtledtType');
var ClaimpricingexternalresphdredtType = require('./types/ClaimpricingexternalresphdredtType');
var ClaimpricingoutputdetailType = require('./types/ClaimpricingoutputdetailType');
var ClaimpricinginputheaderType = require('./types/ClaimpricinginputheaderType');
var ClaimpricinguseroverrideheaderType = require('./types/ClaimpricinguseroverrideheaderType');
var ClaimpropertycasualtyType = require('./types/ClaimpropertycasualtyType');
var ClaimproviderType = require('./types/ClaimproviderType');
var ClaimprovidersecondaryidType = require('./types/ClaimprovidersecondaryidType');
var ClaimprocedurexrefType = require('./types/ClaimprocedurexrefType');
var ClaimprovtinType = require('./types/ClaimprovtinType');
var ClaimpricingoutputheaderType = require('./types/ClaimpricingoutputheaderType');
var ClaimpricinguseroverridedetailType = require('./types/ClaimpricinguseroverridedetailType');
var ClaimqualityauditType = require('./types/ClaimqualityauditType');
var ClaimreferralType = require('./types/ClaimreferralType');
var ClaimqualityauditauditdetailType = require('./types/ClaimqualityauditauditdetailType');
var ClaimprovideraddressType = require('./types/ClaimprovideraddressType');
var ClaimresppartyType = require('./types/ClaimresppartyType');
var ClaimsubsgroupinfoType = require('./types/ClaimsubsgroupinfoType');
var ClaimtatType = require('./types/ClaimtatType');
var ClaimtransmitterType = require('./types/ClaimtransmitterType');
var ClaimtoothchartType = require('./types/ClaimtoothchartType');
var ClaimsubscriberType = require('./types/ClaimsubscriberType');
var ClausecodesetType = require('./types/ClausecodesetType');
var ClineditscheddetailclmtypexclType = require('./types/ClineditscheddetailclmtypexclType');
var ClausecoderefType = require('./types/ClausecoderefType');
var ClceffratgbasefileupldheaderType = require('./types/ClceffratgbasefileupldheaderType');
var ClausecodesetauditdetailType = require('./types/ClausecodesetauditdetailType');
var ClinicaleditresponsecodeType = require('./types/ClinicaleditresponsecodeType');
var ClinicaleditresponsecodeauditType = require('./types/ClinicaleditresponsecodeauditType');
var ClinicaleditassignmentType = require('./types/ClinicaleditassignmentType');
var ClinicaleditschedauditdetailType = require('./types/ClinicaleditschedauditdetailType');
var ClinicaleditscheddetailType = require('./types/ClinicaleditscheddetailType');
var ClinicaleditschedType = require('./types/ClinicaleditschedType');
var ClinicaleffratgbaseuploadstageType = require('./types/ClinicaleffratgbaseuploadstageType');
var ClinicaleffratgfileuploaderrorType = require('./types/ClinicaleffratgfileuploaderrorType');
var CobrascheddetailbenefitType = require('./types/CobrascheddetailbenefitType');
var CobraschedauditdetailType = require('./types/CobraschedauditdetailType');
var CobraschedType = require('./types/CobraschedType');
var ClinicaleditschednoteType = require('./types/ClinicaleditschednoteType');
var CobrascheddetailnotificationType = require('./types/CobrascheddetailnotificationType');
var CobrascheddetailexclusionType = require('./types/CobrascheddetailexclusionType');
var CobrascheddetailType = require('./types/CobrascheddetailType');
var CobrascheddetailconversionType = require('./types/CobrascheddetailconversionType');
var CobrascheddetailgracetimeType = require('./types/CobrascheddetailgracetimeType');
var CobrascheddetailqualbeneficiarType = require('./types/CobrascheddetailqualbeneficiarType');
var CobrascheddetailqualeventType = require('./types/CobrascheddetailqualeventType');
var CobrascheddetailqualeventpremType = require('./types/CobrascheddetailqualeventpremType');
var CobrascheddetailpartialmonthType = require('./types/CobrascheddetailpartialmonthType');
var CobraschednoteType = require('./types/CobraschednoteType');
var CobrascheddetailsubsidytierType = require('./types/CobrascheddetailsubsidytierType');
var CobrascheddetailsubsidyType = require('./types/CobrascheddetailsubsidyType');
var CodexrefType = require('./types/CodexrefType');
var CobrulestextType = require('./types/CobrulestextType');
var CobruleType = require('./types/CobruleType');
var ContinuationeventmemberType = require('./types/ContinuationeventmemberType');
var ContinuationsecondaryeventType = require('./types/ContinuationsecondaryeventType');
var ContinuationeventType = require('./types/ContinuationeventType');
var CorrespondenceType = require('./types/CorrespondenceType');
var CorrespondenceauditdetailType = require('./types/CorrespondenceauditdetailType');
var CorrespondenceentitydetailType = require('./types/CorrespondenceentitydetailType');
var ContractclaimtypeType = require('./types/ContractclaimtypeType');
var CorrespondencenoteType = require('./types/CorrespondencenoteType');
var CorrespondencetransdetailType = require('./types/CorrespondencetransdetailType');
var CountycodeType = require('./types/CountycodeType');
var Cpt4ProcedureType = require('./types/Cpt4ProcedureType');
var Cpt4ProcmedfileuploaddetailType = require('./types/Cpt4ProcmedfileuploaddetailType');
var DatasecuritydatasetType = require('./types/DatasecuritydatasetType');
var Cpt4ProcedurefileuploadheaderType = require('./types/Cpt4ProcedurefileuploadheaderType');
var DatasecuritydatasetauditdetailType = require('./types/DatasecuritydatasetauditdetailType');
var Cpt4ProcedurefileuploaddetailType = require('./types/Cpt4ProcedurefileuploaddetailType');
var CorrespondencereasonType = require('./types/CorrespondencereasonType');
var CredstatuscodeType = require('./types/CredstatuscodeType');
var CustomprocedureType = require('./types/CustomprocedureType');
var DatasecuritygroupType = require('./types/DatasecuritygroupType');
var DatasecuritymembergroupType = require('./types/DatasecuritymembergroupType');
var DefaultmodifiercompnoteType = require('./types/DefaultmodifiercompnoteType');
var Cpt4ProcedureauditdetailType = require('./types/Cpt4ProcedureauditdetailType');
var Cpt4ProcasafileuploaddetailType = require('./types/Cpt4ProcasafileuploaddetailType');
var DefaultmodifierauditdetailType = require('./types/DefaultmodifierauditdetailType');
var DatasecurityownergroupType = require('./types/DatasecurityownergroupType');
var DatasecurityproductType = require('./types/DatasecurityproductType');
var DefaultmodifiercompType = require('./types/DefaultmodifiercompType');
var DelegschedType = require('./types/DelegschedType');
var DelegfunctionType = require('./types/DelegfunctionType');
var DelegschedentityType = require('./types/DelegschedentityType');
var DelegschedfunctionType = require('./types/DelegschedfunctionType');
var DelegschednoteType = require('./types/DelegschednoteType');
var DelegschedfunctionassignType = require('./types/DelegschedfunctionassignType');
var DelegschedauditdetailType = require('./types/DelegschedauditdetailType');
var DelegschedscenariofunctionType = require('./types/DelegschedscenariofunctionType');
var DelegsetType = require('./types/DelegsetType');
var DelegschedscenariofunctionservType = require('./types/DelegschedscenariofunctionservType');
var DelegschedscenarioType = require('./types/DelegschedscenarioType');
var DelegsetnoteType = require('./types/DelegsetnoteType');
var DelegsetschedassignType = require('./types/DelegsetschedassignType');
var DelegsettimelineType = require('./types/DelegsettimelineType');
var DenyreasoncodeType = require('./types/DenyreasoncodeType');
var DelegsetauditdetailType = require('./types/DelegsetauditdetailType');
var DeleteutilityerrorqueueType = require('./types/DeleteutilityerrorqueueType');
var DiagcoderangecatType = require('./types/DiagcoderangecatType');
var DiagnosissetType = require('./types/DiagnosissetType');
var DiagcategoryType = require('./types/DiagcategoryType');
var DenyreasoncodeauditdetailType = require('./types/DenyreasoncodeauditdetailType');
var DiagnosissetcatType = require('./types/DiagnosissetcatType');
var DiagnosissetcatdetaildefType = require('./types/DiagnosissetcatdetaildefType');
var DiagnosissetcatdetailType = require('./types/DiagnosissetcatdetailType');
var DiagnosissetauditdetailType = require('./types/DiagnosissetauditdetailType');
var DistchannelauditdetailType = require('./types/DistchannelauditdetailType');
var DistributionchannelType = require('./types/DistributionchannelType');
var DistributionchannelnoteType = require('./types/DistributionchannelnoteType');
var DirectoryusersuppressrsncodeType = require('./types/DirectoryusersuppressrsncodeType');
var DofrschedauditdetailType = require('./types/DofrschedauditdetailType');
var DofrschedType = require('./types/DofrschedType');
var DofrschedentityType = require('./types/DofrschedentityType');
var DofrschednoteType = require('./types/DofrschednoteType');
var DofrschedscenarioType = require('./types/DofrschedscenarioType');
var DofrschedscenarioservType = require('./types/DofrschedscenarioservType');
var DofrsetauditdetailType = require('./types/DofrsetauditdetailType');
var DofrsettimelineType = require('./types/DofrsettimelineType');
var DofrsetType = require('./types/DofrsetType');
var DofrsetschedassignType = require('./types/DofrsetschedassignType');
var DrcrestrictType = require('./types/DrcrestrictType');
var EditcodeType = require('./types/EditcodeType');
var DofrsetnoteType = require('./types/DofrsetnoteType');
var DrgversionType = require('./types/DrgversionType');
var DrgbasefileuploaddetailType = require('./types/DrgbasefileuploaddetailType');
var DrgType = require('./types/DrgType');
var DrgbasefileuploadheaderType = require('./types/DrgbasefileuploadheaderType');
var DupclaimeditType = require('./types/DupclaimeditType');
var DrcmapperType = require('./types/DrcmapperType');
var EocschedrelatedeventType = require('./types/EocschedrelatedeventType');
var EocschedType = require('./types/EocschedType');
var EocschedrelatedeventactionType = require('./types/EocschedrelatedeventactionType');
var EocschedtriggereventType = require('./types/EocschedtriggereventType');
var EocschednoteType = require('./types/EocschednoteType');
var EocschedtriggereventservType = require('./types/EocschedtriggereventservType');
var EocschedholdType = require('./types/EocschedholdType');
var EocschedauditdetailType = require('./types/EocschedauditdetailType');
var EocactioncodeType = require('./types/EocactioncodeType');
var EocschedtriggereventactionType = require('./types/EocschedtriggereventactionType');
var EocschedstateType = require('./types/EocschedstateType');
var EocsetnoteType = require('./types/EocsetnoteType');
var EocschedrelatedeventservType = require('./types/EocschedrelatedeventservType');
var EocsetType = require('./types/EocsetType');
var EocsetschedassignType = require('./types/EocsetschedassignType');
var EventlogType = require('./types/EventlogType');
var EocsetauditdetailType = require('./types/EocsetauditdetailType');
var EocsetholdType = require('./types/EocsetholdType');
var ExtractftpsettingsnoteType = require('./types/ExtractftpsettingsnoteType');
var ExpensecodeType = require('./types/ExpensecodeType');
var ExtractftpsettingsauditdetailType = require('./types/ExtractftpsettingsauditdetailType');
var ExtractftpsettingType = require('./types/ExtractftpsettingType');
var EocschedtriggerrelatedassignType = require('./types/EocschedtriggerrelatedassignType');
var ExpensecodeemplstatusType = require('./types/ExpensecodeemplstatusType');
var FacilitypapertypeType = require('./types/FacilitypapertypeType');
var FallthrucompType = require('./types/FallthrucompType');
var FallthrucompclaimclassType = require('./types/FallthrucompclaimclassType');
var FallthrucompauditdetailType = require('./types/FallthrucompauditdetailType');
var FallthrucompdetailType = require('./types/FallthrucompdetailType');
var ExtractftpsettingsnotedetailType = require('./types/ExtractftpsettingsnotedetailType');
var FallthrucompnoteType = require('./types/FallthrucompnoteType');
var FamilyunitauditdetailType = require('./types/FamilyunitauditdetailType');
var FallthrumodifiercompassignType = require('./types/FallthrumodifiercompassignType');
var FamilyunitnoteType = require('./types/FamilyunitnoteType');
var FallthrucompholdType = require('./types/FallthrucompholdType');
var FamilyacctmaxhxType = require('./types/FamilyacctmaxhxType');
var FamilyacctmaxType = require('./types/FamilyacctmaxType');
var FamilyunitschedleveldetailrelType = require('./types/FamilyunitschedleveldetailrelType');
var FamilyunitscheduleType = require('./types/FamilyunitscheduleType');
var FamilyunitlevelcovlevType = require('./types/FamilyunitlevelcovlevType');
var FamilyunitscheduleleveldetailType = require('./types/FamilyunitscheduleleveldetailType');
var FinactivitycodeType = require('./types/FinactivitycodeType');
var FinanceactivitylogType = require('./types/FinanceactivitylogType');
var FamilyunitschedulelevelType = require('./types/FamilyunitschedulelevelType');
var FinanceactivitylogattribsetType = require('./types/FinanceactivitylogattribsetType');
var FinanceerrorType = require('./types/FinanceerrorType');
var FinanceactivitylogattribType = require('./types/FinanceactivitylogattribType');
var FinanceerrorqueueType = require('./types/FinanceerrorqueueType');
var FinanceactivitylogattribtagType = require('./types/FinanceactivitylogattribtagType');
var FinattribcodeType = require('./types/FinattribcodeType');
var FinancialpenaltydetailType = require('./types/FinancialpenaltydetailType');
var FinattribschedType = require('./types/FinattribschedType');
var FinattribschedcodeassignType = require('./types/FinattribschedcodeassignType');
var FinancialpenaltyauditdetailType = require('./types/FinancialpenaltyauditdetailType');
var FinerrorapinterestType = require('./types/FinerrorapinterestType');
var FinattribschedauditdetailType = require('./types/FinattribschedauditdetailType');
var FinancialpenaltyType = require('./types/FinancialpenaltyType');
var FinattribschednoteType = require('./types/FinattribschednoteType');
var FinattribschedsegmentType = require('./types/FinattribschedsegmentType');
var FinattribschedvariabledefType = require('./types/FinattribschedvariabledefType');
var FinattribschedvariableType = require('./types/FinattribschedvariableType');
var FinattribschedsegmentdefType = require('./types/FinattribschedsegmentdefType');
var FinerrorattribType = require('./types/FinerrorattribType');
var FinerrorapsurchargeType = require('./types/FinerrorapsurchargeType');
var FinerrorcontracttaggingType = require('./types/FinerrorcontracttaggingType');
var FinerroraptransactionType = require('./types/FinerroraptransactionType');
var FinerrorpaymentrequestType = require('./types/FinerrorpaymentrequestType');
var FinerrorpaymentrequesterrorType = require('./types/FinerrorpaymentrequesterrorType');
var FinerrorapremarkType = require('./types/FinerrorapremarkType');
var FinerrorstatcorrectionType = require('./types/FinerrorstatcorrectionType');
var FinerrorqueueType = require('./types/FinerrorqueueType');
var FinerrortranstaggingType = require('./types/FinerrortranstaggingType');
var FinerrorvoidpaymentType = require('./types/FinerrorvoidpaymentType');
var FinerrorpaymentresponseType = require('./types/FinerrorpaymentresponseType');
var FulfilleventtemplateoverrideType = require('./types/FulfilleventtemplateoverrideType');
var FulfillmentclientType = require('./types/FulfillmentclientType');
var FulfilleventidentifierType = require('./types/FulfilleventidentifierType');
var FulfilleventtemplateType = require('./types/FulfilleventtemplateType');
var FulfillcontentType = require('./types/FulfillcontentType');
var FinerrorsystemType = require('./types/FinerrorsystemType');
var FulfilleventtrackingType = require('./types/FulfilleventtrackingType');
var FulfillmassvariablecontentType = require('./types/FulfillmassvariablecontentType');
var FulfillmassrequestType = require('./types/FulfillmassrequestType');
var FulfillrequestidentifierType = require('./types/FulfillrequestidentifierType');
var FulfillmassrequestmailinglocType = require('./types/FulfillmassrequestmailinglocType');
var FulfilleventType = require('./types/FulfilleventType');
var FulfillrequestType = require('./types/FulfillrequestType');
var FulfillrequesttrackingType = require('./types/FulfillrequesttrackingType');
var FulfilltemplateType = require('./types/FulfilltemplateType');
var FulfilltemplatedetailType = require('./types/FulfilltemplatedetailType');
var FulfillrecipientidentifierType = require('./types/FulfillrecipientidentifierType');
var FundpoolType = require('./types/FundpoolType');
var FulfilltemplaterecipientType = require('./types/FulfilltemplaterecipientType');
var FundpoolauditdetailType = require('./types/FundpoolauditdetailType');
var FundpoolnoteType = require('./types/FundpoolnoteType');
var FundtransferType = require('./types/FundtransferType');
var FundpoolnotedetailType = require('./types/FundpoolnotedetailType');
var GeneralclaimsettingType = require('./types/GeneralclaimsettingType');
var GuardrailauditdetailType = require('./types/GuardrailauditdetailType');
var GuardrailinsrulemaximumageType = require('./types/GuardrailinsrulemaximumageType');
var FulfillvariablecontentType = require('./types/FulfillvariablecontentType');
var GuardrailinsruleretroType = require('./types/GuardrailinsruleretroType');
var GuardrailinsrulewaitperiodType = require('./types/GuardrailinsrulewaitperiodType');
var GuardrailinsruleterminationType = require('./types/GuardrailinsruleterminationType');
var GuardrailinsrulenewbornType = require('./types/GuardrailinsrulenewbornType');
var GuardrailscheduleType = require('./types/GuardrailscheduleType');
var GuardrailschedulenoteType = require('./types/GuardrailschedulenoteType');
var GuardrailschedulevalidationType = require('./types/GuardrailschedulevalidationType');
var HcpcsprocdentfileuploaddetailType = require('./types/HcpcsprocdentfileuploaddetailType');
var GuardrailinsuringruleType = require('./types/GuardrailinsuringruleType');
var HcpcsprocedureauditdetailType = require('./types/HcpcsprocedureauditdetailType');
var HcpcsprocedurefileuploaddetailType = require('./types/HcpcsprocedurefileuploaddetailType');
var HealthcoderuleType = require('./types/HealthcoderuleType');
var HoldclaimapType = require('./types/HoldclaimapType');
var Icd10DiagnosisType = require('./types/Icd10DiagnosisType');
var Icd10DiagnosisfileuploaddetailType = require('./types/Icd10DiagnosisfileuploaddetailType');
var HoldcodeType = require('./types/HoldcodeType');
var HealthcodeemplstatusType = require('./types/HealthcodeemplstatusType');
var Icd10DiagnosisauditdetailType = require('./types/Icd10DiagnosisauditdetailType');
var HcpcsprocedureType = require('./types/HcpcsprocedureType');
var HcpcsprocedurefileuploadheaderType = require('./types/HcpcsprocedurefileuploadheaderType');
var Icd10FileuploadheaderType = require('./types/Icd10FileuploadheaderType');
var Icd10ProcedureType = require('./types/Icd10ProcedureType');
var Icd10ProcedureauditdetailType = require('./types/Icd10ProcedureauditdetailType');
var Icd9Type = require('./types/Icd9Type');
var IncentType = require('./types/IncentType');
var Icd10ProcedurefileuploaddetailType = require('./types/Icd10ProcedurefileuploaddetailType');
var IndustryclassmodcodeType = require('./types/IndustryclassmodcodeType');
var IndustryclassmoddetailType = require('./types/IndustryclassmoddetailType');
var IndustryclassauditdetailType = require('./types/IndustryclassauditdetailType');
var IndustryclassnoteType = require('./types/IndustryclassnoteType');
var InterestschedauditdetailType = require('./types/InterestschedauditdetailType');
var InterestpenaltysettingType = require('./types/InterestpenaltysettingType');
var InstclaimsettingType = require('./types/InstclaimsettingType');
var IntegrationtransactionType = require('./types/IntegrationtransactionType');
var InterestaccountapplType = require('./types/InterestaccountapplType');
var InstallationinsuringruleType = require('./types/InstallationinsuringruleType');
var IndustryclassmodschedType = require('./types/IndustryclassmodschedType');
var InterestscheddetaildayType = require('./types/InterestscheddetaildayType');
var InterestscheddetailType = require('./types/InterestscheddetailType');
var InterestscheduleType = require('./types/InterestscheduleType');
var InternaladjustreasoncodeType = require('./types/InternaladjustreasoncodeType');
var InterestschednoteType = require('./types/InterestschednoteType');
var InvalidclaimediType = require('./types/InvalidclaimediType');
var InvoiceamtvaluecodeType = require('./types/InvoiceamtvaluecodeType');
var InternaladjustrsncdauditdetailType = require('./types/InternaladjustrsncdauditdetailType');
var InvestigationdeviceexemptType = require('./types/InvestigationdeviceexemptType');
var IpservicecompauditdetailType = require('./types/IpservicecompauditdetailType');
var IpservicecompdetailpricingType = require('./types/IpservicecompdetailpricingType');
var IpservicecompType = require('./types/IpservicecompType');
var IpservicecompdrgcustomType = require('./types/IpservicecompdrgcustomType');
var IpservicecompdetailType = require('./types/IpservicecompdetailType');
var IpservicecompdrgType = require('./types/IpservicecompdrgType');
var IpservicecompholdType = require('./types/IpservicecompholdType');
var IptransactionauditdetailType = require('./types/IptransactionauditdetailType');
var IpservicecompnoteType = require('./types/IpservicecompnoteType');
var IptransactionheaderType = require('./types/IptransactionheaderType');
var IptransactionnoteType = require('./types/IptransactionnoteType');
var IptransactionnotedetailType = require('./types/IptransactionnotedetailType');
var IptransactiondetailType = require('./types/IptransactiondetailType');
var IrmEvntType = require('./types/IrmEvntType');
var LiabilitycarrierType = require('./types/LiabilitycarrierType');
var LicensingentityType = require('./types/LicensingentityType');
var LicensingentitypermitType = require('./types/LicensingentitypermitType');
var LicensingentityauditdetailType = require('./types/LicensingentityauditdetailType');
var JoblastrundateType = require('./types/JoblastrundateType');
var LineofbusinessauditdetailType = require('./types/LineofbusinessauditdetailType');
var LobmodifiercompassignhxType = require('./types/LobmodifiercompassignhxType');
var MedpolicyenginetierresponseType = require('./types/MedpolicyenginetierresponseType');
var LineofbusinessType = require('./types/LineofbusinessType');
var LocalityType = require('./types/LocalityType');
var LobmodifiercompassignType = require('./types/LobmodifiercompassignType');
var LobmodassignauditdetailType = require('./types/LobmodassignauditdetailType');
var MedpolicyrulediagType = require('./types/MedpolicyrulediagType');
var MedpolicyruleancillaryType = require('./types/MedpolicyruleancillaryType');
var MedpolicyruleappliedhistoryType = require('./types/MedpolicyruleappliedhistoryType');
var LogoType = require('./types/LogoType');
var MedpolicyruleauditdetailType = require('./types/MedpolicyruleauditdetailType');
var MedpolicyruleType = require('./types/MedpolicyruleType');
var MedpolicyrulebenefitType = require('./types/MedpolicyrulebenefitType');
var MedpolicyengineresponseType = require('./types/MedpolicyengineresponseType');
var MedpolicyruleprocType = require('./types/MedpolicyruleprocType');
var MedpolicyruletaxonomyType = require('./types/MedpolicyruletaxonomyType');
var MedpolicyrulenoteType = require('./types/MedpolicyrulenoteType');
var MedpolicyruletierType = require('./types/MedpolicyruletierType');
var MedpolicyrulemodifierType = require('./types/MedpolicyrulemodifierType');
var MedpolicyschedauditdetailType = require('./types/MedpolicyschedauditdetailType');
var MedpolicyrulerevType = require('./types/MedpolicyrulerevType');
var MedpolicyrulevalidationType = require('./types/MedpolicyrulevalidationType');
var MedpolicyrulerseType = require('./types/MedpolicyrulerseType');
var MedpolicyschedtimelineType = require('./types/MedpolicyschedtimelineType');
var MedpolicyschedType = require('./types/MedpolicyschedType');
var MedpolicyschednotifdefType = require('./types/MedpolicyschednotifdefType');
var MedpolicyschednoteType = require('./types/MedpolicyschednoteType');
var MedpolicyschedtimelineruleType = require('./types/MedpolicyschedtimelineruleType');
var MedpolicysetauditdetailType = require('./types/MedpolicysetauditdetailType');
var MedpolicysetnoteType = require('./types/MedpolicysetnoteType');
var MedpolicysettimelineschedType = require('./types/MedpolicysettimelineschedType');
var MemberaccountholdType = require('./types/MemberaccountholdType');
var MemacctmembershipType = require('./types/MemacctmembershipType');
var MemacctacctbalhxxrefType = require('./types/MemacctacctbalhxxrefType');
var MedpolicysetType = require('./types/MedpolicysetType');
var MemacctrunType = require('./types/MemacctrunType');
var MemberType = require('./types/MemberType');
var MemacctcustomerpurchaseitemType = require('./types/MemacctcustomerpurchaseitemType');
var MemberaccountType = require('./types/MemberaccountType');
var MemberacctpayrollType = require('./types/MemberacctpayrollType');
var MemacctcustomerpurchasedetailType = require('./types/MemacctcustomerpurchasedetailType');
var MedpolicysettimelineType = require('./types/MedpolicysettimelineType');
var MemberaddressattnType = require('./types/MemberaddressattnType');
var MemberaccounthxType = require('./types/MemberaccounthxType');
var MemberaddressType = require('./types/MemberaddressType');
var MemberaccountorderType = require('./types/MemberaccountorderType');
var MemberbenefitType = require('./types/MemberbenefitType');
var MemberauditdetailType = require('./types/MemberauditdetailType');
var MemberbankingType = require('./types/MemberbankingType');
var MemberattributeType = require('./types/MemberattributeType');
var MemberaddressprovType = require('./types/MemberaddressprovType');
var MemberacctmaxhxType = require('./types/MemberacctmaxhxType');
var MemberaccountsettingType = require('./types/MemberaccountsettingType');
var MemberaddressdiagType = require('./types/MemberaddressdiagType');
var Memberbenefit834HistType = require('./types/Memberbenefit834HistType');
var MembercobexcldiagType = require('./types/MembercobexcldiagType');
var MemberbenefitcovlevelcodeType = require('./types/MemberbenefitcovlevelcodeType');
var MembercobexclprocType = require('./types/MembercobexclprocType');
var MembercobType = require('./types/MembercobType');
var MembercaserateType = require('./types/MembercaserateType');
var MembercobrelentityaddressType = require('./types/MembercobrelentityaddressType');
var MemberacctmaxType = require('./types/MemberacctmaxType');
var MemberbenefitpremiumType = require('./types/MemberbenefitpremiumType');
var MemberbenefitriderType = require('./types/MemberbenefitriderType');
var MembercobrelentityphoneType = require('./types/MembercobrelentityphoneType');
var MembercontactaddressType = require('./types/MembercontactaddressType');
var MembercobrelentityelectcomType = require('./types/MembercobrelentityelectcomType');
var MembercobverificationType = require('./types/MembercobverificationType');
var MembercontactType = require('./types/MembercontactType');
var MembercontactphoneType = require('./types/MembercontactphoneType');
var MemberdepcertarType = require('./types/MemberdepcertarType');
var MemberdisclosureType = require('./types/MemberdisclosureType');
var MemberelectroniccommType = require('./types/MemberelectroniccommType');
var MembercontactlanguageType = require('./types/MembercontactlanguageType');
var MemberdepcertType = require('./types/MemberdepcertType');
var MemberexternalidType = require('./types/MemberexternalidType');
var MembercustodialType = require('./types/MembercustodialType');
var MembergovernmentbenefitType = require('./types/MembergovernmentbenefitType');
var MemberdeleteType = require('./types/MemberdeleteType');
var MembercontactelectcommType = require('./types/MembercontactelectcommType');
var MemberdisabilityType = require('./types/MemberdisabilityType');
var MemberidcardType = require('./types/MemberidcardType');
var MemberholdType = require('./types/MemberholdType');
var MemberimageType = require('./types/MemberimageType');
var MemberincentarType = require('./types/MemberincentarType');
var MemberinstitutionType = require('./types/MemberinstitutionType');
var MemberincentType = require('./types/MemberincentType');
var MemberindivmaxType = require('./types/MemberindivmaxType');
var MemberidcardrequestType = require('./types/MemberidcardrequestType');
var MemberindicatorType = require('./types/MemberindicatorType');
var MemberinternaloobtimelineType = require('./types/MemberinternaloobtimelineType');
var MemberinvdateType = require('./types/MemberinvdateType');
var MemberinvaccidentType = require('./types/MemberinvaccidentType');
var MemberindivmaxhxType = require('./types/MemberindivmaxhxType');
var MemberinvproviderType = require('./types/MemberinvproviderType');
var MemberinvestigationType = require('./types/MemberinvestigationType');
var MemberinvnoteType = require('./types/MemberinvnoteType');
var MemberinternaloobplanType = require('./types/MemberinternaloobplanType');
var MemberinvdiagnosisType = require('./types/MemberinvdiagnosisType');
var MembernetworkType = require('./types/MembernetworkType');
var MembernoteType = require('./types/MembernoteType');
var MemberlanguageType = require('./types/MemberlanguageType');
var MemberooctimelineType = require('./types/MemberooctimelineType');
var MemberotherincomeType = require('./types/MemberotherincomeType');
var MemberoocplanType = require('./types/MemberoocplanType');
var MemberphoneType = require('./types/MemberphoneType');
var MemberproviderType = require('./types/MemberproviderType');
var MemberperiochartType = require('./types/MemberperiochartType');
var MemberperiomeasureType = require('./types/MemberperiomeasureType');
var MemberperiopocketType = require('./types/MemberperiopocketType');
var MemberrecoupType = require('./types/MemberrecoupType');
var MemberqueueType = require('./types/MemberqueueType');
var MemberrecoupclaimType = require('./types/MemberrecoupclaimType');
var MemberstudentType = require('./types/MemberstudentType');
var MembersupertoothType = require('./types/MembersupertoothType');
var MembertoothchartType = require('./types/MembertoothchartType');
var MemberutilizationoptinType = require('./types/MemberutilizationoptinType');
var MemberserviceplanType = require('./types/MemberserviceplanType');
var MembertransferType = require('./types/MembertransferType');
var MembersupertoothidType = require('./types/MembersupertoothidType');
var MembervitalType = require('./types/MembervitalType');
var MemexpensecodemaxType = require('./types/MemexpensecodemaxType');
var MemberutilizationplanType = require('./types/MemberutilizationplanType');
var MemgroupType = require('./types/MemgroupType');
var MemgroupaddressType = require('./types/MemgroupaddressType');
var MemgroupaddressphoneType = require('./types/MemgroupaddressphoneType');
var MemgroupcontactaddressType = require('./types/MemgroupcontactaddressType');
var MemgroupaliasType = require('./types/MemgroupaliasType');
var MemgroupauditdetailType = require('./types/MemgroupauditdetailType');
var MemgroupaddresshourType = require('./types/MemgroupaddresshourType');
var MemgroupcontactType = require('./types/MemgroupcontactType');
var MemgroupbankingType = require('./types/MemgroupbankingType');
var MemgroupbusinessdefType = require('./types/MemgroupbusinessdefType');
var MemgroupcontactaddressphoneType = require('./types/MemgroupcontactaddressphoneType');
var MemgroupcontactauditdetailType = require('./types/MemgroupcontactauditdetailType');
var MemgroupcontacteleccomassignType = require('./types/MemgroupcontacteleccomassignType');
var Memgroup834ExtractType = require('./types/Memgroup834ExtractType');
var MemgroupcontactassignmentType = require('./types/MemgroupcontactassignmentType');
var MemexpensecodemaxhxType = require('./types/MemexpensecodemaxhxType');
var MemgroupcontactelectroniccomType = require('./types/MemgroupcontactelectroniccomType');
var MemgroupcontactphoneassignType = require('./types/MemgroupcontactphoneassignType');
var MemgroupcontactroleType = require('./types/MemgroupcontactroleType');
var MemgroupcontractauditdetailType = require('./types/MemgroupcontractauditdetailType');
var MemgroupcontactphoneType = require('./types/MemgroupcontactphoneType');
var MemgroupcontractType = require('./types/MemgroupcontractType');
var MemgroupcontracteventType = require('./types/MemgroupcontracteventType');
var MemgroupcontractdistchannelType = require('./types/MemgroupcontractdistchannelType');
var MemgroupcontractoptcontributType = require('./types/MemgroupcontractoptcontributType');
var MemgroupcontractbillingprefType = require('./types/MemgroupcontractbillingprefType');
var MemgroupcontractextidType = require('./types/MemgroupcontractextidType');
var MemgroupcontractoptpopType = require('./types/MemgroupcontractoptpopType');
var MemgroupcontractoptinsruleType = require('./types/MemgroupcontractoptinsruleType');
var MemgroupcontractlockType = require('./types/MemgroupcontractlockType');
var MemgroupcontractoptpopinsruleType = require('./types/MemgroupcontractoptpopinsruleType');
var MemgroupcontractoptType = require('./types/MemgroupcontractoptType');
var MemgroupcontractgovtreportType = require('./types/MemgroupcontractgovtreportType');
var MemgroupcontractopenenrollType = require('./types/MemgroupcontractopenenrollType');
var MemgroupcontractplanattribsetType = require('./types/MemgroupcontractplanattribsetType');
var MemgroupcontractplanattribType = require('./types/MemgroupcontractplanattribType');
var MemgroupcontractplanoptextidType = require('./types/MemgroupcontractplanoptextidType');
var MemgroupcontractplanoptionType = require('./types/MemgroupcontractplanoptionType');
var MemgroupcontractplanoptaddrType = require('./types/MemgroupcontractplanoptaddrType');
var MemgroupcontractplanoptholdType = require('./types/MemgroupcontractplanoptholdType');
var MemgroupcontractplanoptmsaType = require('./types/MemgroupcontractplanoptmsaType');
var MemgroupcontractplanyrbillovdType = require('./types/MemgroupcontractplanyrbillovdType');
var MemgroupcontractplanoptphoneType = require('./types/MemgroupcontractplanoptphoneType');
var MemgroupcontractplanyrbillrtType = require('./types/MemgroupcontractplanyrbillrtType');
var MemgroupcontractplanoptnetwkType = require('./types/MemgroupcontractplanoptnetwkType');
var MemgroupcontractplanyearType = require('./types/MemgroupcontractplanyearType');
var MemgroupcontractplanopttagType = require('./types/MemgroupcontractplanopttagType');
var MemgroupcontractplanoptplanType = require('./types/MemgroupcontractplanoptplanType');
var MemgroupcontractrenewalType = require('./types/MemgroupcontractrenewalType');
var MemgroupcontractproducerType = require('./types/MemgroupcontractproducerType');
var MemgroupcontractsalesofficeType = require('./types/MemgroupcontractsalesofficeType');
var MemgroupcontractvalidationType = require('./types/MemgroupcontractvalidationType');
var MemgroupjobstatusType = require('./types/MemgroupjobstatusType');
var MemgroupcontractrenewaltriggerType = require('./types/MemgroupcontractrenewaltriggerType');
var MemgroupdepcertType = require('./types/MemgroupdepcertType');
var MemgroupemployeecountType = require('./types/MemgroupemployeecountType');
var MemgroupexternalidType = require('./types/MemgroupexternalidType');
var MemgrouppayrollType = require('./types/MemgrouppayrollType');
var MemgroupnoteType = require('./types/MemgroupnoteType');
var MemgrouppayrolldateType = require('./types/MemgrouppayrolldateType');
var MemgroupholdType = require('./types/MemgroupholdType');
var MemgrouppopidentifiervalueType = require('./types/MemgrouppopidentifiervalueType');
var MemgroupimageType = require('./types/MemgroupimageType');
var MemgrouppopinsuringruleType = require('./types/MemgrouppopinsuringruleType');
var MemgrouppopidentifierType = require('./types/MemgrouppopidentifierType');
var MemgroupinsuringruleType = require('./types/MemgroupinsuringruleType');
var MemgrouppopulationType = require('./types/MemgrouppopulationType');
var MemgrouppopulationconfigType = require('./types/MemgrouppopulationconfigType');
var MemgrouppopulationorderType = require('./types/MemgrouppopulationorderType');
var MemgrouppriorcarrierType = require('./types/MemgrouppriorcarrierType');
var MemgroupsettingType = require('./types/MemgroupsettingType');
var MemgroupsupportteamType = require('./types/MemgroupsupportteamType');
var MemhealthcodemaxType = require('./types/MemhealthcodemaxType');
var MemgroupsurchargeType = require('./types/MemgroupsurchargeType');
var MemgrouptinType = require('./types/MemgrouptinType');
var MemgroupstmtempstatType = require('./types/MemgroupstmtempstatType');
var MemgroupstmtType = require('./types/MemgroupstmtType');
var MnrpcompauditdetailType = require('./types/MnrpcompauditdetailType');
var MemgroupreportingcodeType = require('./types/MemgroupreportingcodeType');
var MemhealthcodemaxhxType = require('./types/MemhealthcodemaxhxType');
var MnrpcompType = require('./types/MnrpcompType');
var MnrpcompnoteType = require('./types/MnrpcompnoteType');
var MnrpcompdetailType = require('./types/MnrpcompdetailType');
var MnrpcompholdType = require('./types/MnrpcompholdType');
var ModifiercodebasefileuploaddetaType = require('./types/ModifiercodebasefileuploaddetaType');
var ModifiercompdetailType = require('./types/ModifiercompdetailType');
var MnrpcompdetailprocType = require('./types/MnrpcompdetailprocType');
var ModifiercodeType = require('./types/ModifiercodeType');
var ModifiercompType = require('./types/ModifiercompType');
var ModifiercodebasefileuploadheadType = require('./types/ModifiercodebasefileuploadheadType');
var ModifiercompclaimclassType = require('./types/ModifiercompclaimclassType');
var MprcompauditdetailType = require('./types/MprcompauditdetailType');
var ModifiercompauditdetailType = require('./types/ModifiercompauditdetailType');
var ModifiercompnoteType = require('./types/ModifiercompnoteType');
var MprcompType = require('./types/MprcompType');
var MprcompdetailmodType = require('./types/MprcompdetailmodType');
var MprcompdetailcoeffType = require('./types/MprcompdetailcoeffType');
var MprcompdetailType = require('./types/MprcompdetailType');
var MprcompholdType = require('./types/MprcompholdType');
var MprcompdetailmodassignType = require('./types/MprcompdetailmodassignType');
var MsaType = require('./types/MsaType');
var MsaaccesspointType = require('./types/MsaaccesspointType');
var MprcompnoteType = require('./types/MprcompnoteType');
var MsaaccesspointflatType = require('./types/MsaaccesspointflatType');
var MsaaccesspointfusType = require('./types/MsaaccesspointfusType');
var MsaaccesspointrctierType = require('./types/MsaaccesspointrctierType');
var MsaaccesspointfuslevelType = require('./types/MsaaccesspointfuslevelType');
var MsaaccesspointrcType = require('./types/MsaaccesspointrcType');
var MsaaptranstypedefType = require('./types/MsaaptranstypedefType');
var MsaauditdetailType = require('./types/MsaauditdetailType');
var MsabalexchangeType = require('./types/MsabalexchangeType');
var MsacontribmaxType = require('./types/MsacontribmaxType');
var MsacontribmaxfusType = require('./types/MsacontribmaxfusType');
var MsacontribmaxfuslevelType = require('./types/MsacontribmaxfuslevelType');
var MsacarryoverType = require('./types/MsacarryoverType');
var MsacapcarryoverfusType = require('./types/MsacapcarryoverfusType');
var MsacontribdefType = require('./types/MsacontribdefType');
var MsacontribtypedefType = require('./types/MsacontribtypedefType');
var MsacontribtypeprorateType = require('./types/MsacontribtypeprorateType');
var MsacapcarryoverfuslevelType = require('./types/MsacapcarryoverfuslevelType');
var MsacapcarryoverType = require('./types/MsacapcarryoverType');
var MsacoveredmrType = require('./types/MsacoveredmrType');
var MsadepcertType = require('./types/MsadepcertType');
var MsacovrelationshipType = require('./types/MsacovrelationshipType');
var MsaexpensecodemaxType = require('./types/MsaexpensecodemaxType');
var MsaexpensecodeType = require('./types/MsaexpensecodeType');
var MsaexpenseType = require('./types/MsaexpenseType');
var MsaflatapType = require('./types/MsaflatapType');
var MsaflatcontribType = require('./types/MsaflatcontribType');
var MsafusaplevelType = require('./types/MsafusaplevelType');
var MsafusmaxballevelType = require('./types/MsafusmaxballevelType');
var MsagraceperiodType = require('./types/MsagraceperiodType');
var MsafusapType = require('./types/MsafusapType');
var MsahealthcodemaxType = require('./types/MsahealthcodemaxType');
var MsafusmaxbalanceType = require('./types/MsafusmaxbalanceType');
var MsahealthcareType = require('./types/MsahealthcareType');
var MsafuscontribType = require('./types/MsafuscontribType');
var MsafuscontriblevelType = require('./types/MsafuscontriblevelType');
var MsaincdecruleType = require('./types/MsaincdecruleType');
var MsaholdType = require('./types/MsaholdType');
var MsaexternalidType = require('./types/MsaexternalidType');
var MsaindivmaxType = require('./types/MsaindivmaxType');
var MsalevelType = require('./types/MsalevelType');
var MsaincentcreditType = require('./types/MsaincentcreditType');
var MsamaximumType = require('./types/MsamaximumType');
var MsamaxbalanceType = require('./types/MsamaxbalanceType');
var MsalevelplanType = require('./types/MsalevelplanType');
var MsamaxfamilylvlType = require('./types/MsamaxfamilylvlType');
var MsanetworktierType = require('./types/MsanetworktierType');
var MsanoteType = require('./types/MsanoteType');
var MsanoncovrxthercodeType = require('./types/MsanoncovrxthercodeType');
var MsalevelstatusType = require('./types/MsalevelstatusType');
var MsapaidincurredType = require('./types/MsapaidincurredType');
var MsapayandchaseType = require('./types/MsapayandchaseType');
var MsaplanyearType = require('./types/MsaplanyearType');
var MsaindivcapcarryoverType = require('./types/MsaindivcapcarryoverType');
var MsapurseType = require('./types/MsapurseType');
var MsarelationshipType = require('./types/MsarelationshipType');
var MsaprorationType = require('./types/MsaprorationType');
var MsasettingType = require('./types/MsasettingType');
var MsastudentageType = require('./types/MsastudentageType');
var MsatermenrollstatusType = require('./types/MsatermenrollstatusType');
var MsastackingType = require('./types/MsastackingType');
var MsavalidationType = require('./types/MsavalidationType');
var MsatypeType = require('./types/MsatypeType');
var NdcawpfileuploadheaderType = require('./types/NdcawpfileuploadheaderType');
var NdcawpfileuploadstagingType = require('./types/NdcawpfileuploadstagingType');
var NdcType = require('./types/NdcType');
var NdccompType = require('./types/NdccompType');
var NdccompholdType = require('./types/NdccompholdType');
var NdcmacrefType = require('./types/NdcmacrefType');
var NdcmacfileuploadheaderType = require('./types/NdcmacfileuploadheaderType');
var NdcmacfileuploadstagingType = require('./types/NdcmacfileuploadstagingType');
var NdcpackagefileuploadstagingType = require('./types/NdcpackagefileuploadstagingType');
var NdcmodifiercompassignType = require('./types/NdcmodifiercompassignType');
var NdccompnoteType = require('./types/NdccompnoteType');
var NdcawprefType = require('./types/NdcawprefType');
var NdccompdetailType = require('./types/NdccompdetailType');
var NdccompauditdetailType = require('./types/NdccompauditdetailType');
var NdcproductfileuploadstagingType = require('./types/NdcproductfileuploadstagingType');
var NetcontractType = require('./types/NetcontractType');
var NdcprdpckbasefileuploadheaderType = require('./types/NdcprdpckbasefileuploadheaderType');
var NetcontractcarrierType = require('./types/NetcontractcarrierType');
var NetcontractcarrierfilinglimitType = require('./types/NetcontractcarrierfilinglimitType');
var NetcontractheaderType = require('./types/NetcontractheaderType');
var NetcontractauditdetailType = require('./types/NetcontractauditdetailType');
var NetcontractfinancialpenType = require('./types/NetcontractfinancialpenType');
var NetcontractfilinglimitType = require('./types/NetcontractfilinglimitType');
var NetcontractheadernoteType = require('./types/NetcontractheadernoteType');
var NetcontractheaderauditdetailType = require('./types/NetcontractheaderauditdetailType');
var NetcontractnetworkType = require('./types/NetcontractnetworkType');
var NetcontractcarriersupportteamType = require('./types/NetcontractcarriersupportteamType');
var NetcontractlobType = require('./types/NetcontractlobType');
var NetcontractlobfilinglimitType = require('./types/NetcontractlobfilinglimitType');
var NetcontractholdType = require('./types/NetcontractholdType');
var NetcontractplanType = require('./types/NetcontractplanType');
var NetcontractnoteType = require('./types/NetcontractnoteType');
var NetcontractownerType = require('./types/NetcontractownerType');
var NetcontractmembergroupType = require('./types/NetcontractmembergroupType');
var NetcontractidType = require('./types/NetcontractidType');
var NetcontractproductType = require('./types/NetcontractproductType');
var NetcontractlobclausecodeType = require('./types/NetcontractlobclausecodeType');
var NetcontractproviderfinpenType = require('./types/NetcontractproviderfinpenType');
var NetcontractprovaffiliationType = require('./types/NetcontractprovaffiliationType');
var NetcontractprovlocationType = require('./types/NetcontractprovlocationType');
var NetcontractprovtinType = require('./types/NetcontractprovtinType');
var NetcontractserviceareaType = require('./types/NetcontractserviceareaType');
var NetcontractsupportteamType = require('./types/NetcontractsupportteamType');
var NetcontractprovnetworkpanelType = require('./types/NetcontractprovnetworkpanelType');
var NetcontracttermeventlogType = require('./types/NetcontracttermeventlogType');
var NetcontracttaxonomyType = require('./types/NetcontracttaxonomyType');
var NetdirsuppressType = require('./types/NetdirsuppressType');
var NetscheduleheaderType = require('./types/NetscheduleheaderType');
var NetdirsuppressregionType = require('./types/NetdirsuppressregionType');
var NetscheduleextidType = require('./types/NetscheduleextidType');
var NetdirsuppressauditdetailType = require('./types/NetdirsuppressauditdetailType');
var NetschedulelogoType = require('./types/NetschedulelogoType');
var NetscheduledetailType = require('./types/NetscheduledetailType');
var NetworkType = require('./types/NetworkType');
var NetscheduletierType = require('./types/NetscheduletierType');
var NetworkcontactType = require('./types/NetworkcontactType');
var NetworkcontactaddressphoneType = require('./types/NetworkcontactaddressphoneType');
var NetworkcontactassignmentType = require('./types/NetworkcontactassignmentType');
var NetworkauditdetailType = require('./types/NetworkauditdetailType');
var NetworkcontactaddressType = require('./types/NetworkcontactaddressType');
var NetworkcontactelectroniccomType = require('./types/NetworkcontactelectroniccomType');
var NetworkidType = require('./types/NetworkidType');
var NetworkcontactphoneType = require('./types/NetworkcontactphoneType');
var NetworkcontactauditdetailType = require('./types/NetworkcontactauditdetailType');
var NetworknoteType = require('./types/NetworknoteType');
var NetworkserviceareaType = require('./types/NetworkserviceareaType');
var NetworksupportteamType = require('./types/NetworksupportteamType');
var NetworktypeType = require('./types/NetworktypeType');
var OonpricingptmdetailType = require('./types/OonpricingptmdetailType');
var OonpricinglogoType = require('./types/OonpricinglogoType');
var OonpricingptmcompholdType = require('./types/OonpricingptmcompholdType');
var NetworksettingType = require('./types/NetworksettingType');
var OonpricingptmprovType = require('./types/OonpricingptmprovType');
var OonpricingptmcompType = require('./types/OonpricingptmcompType');
var OonpricingptmcompnoteType = require('./types/OonpricingptmcompnoteType');
var NetworkmedpolicyType = require('./types/NetworkmedpolicyType');
var OonpricingptmregionType = require('./types/OonpricingptmregionType');
var NetworktypecodeType = require('./types/NetworktypecodeType');
var OonpricingschedauditdetailType = require('./types/OonpricingschedauditdetailType');
var OonpricingschedType = require('./types/OonpricingschedType');
var OonpricingschedorderdetailType = require('./types/OonpricingschedorderdetailType');
var OonpricingschedholdType = require('./types/OonpricingschedholdType');
var OonpricingservicetypeType = require('./types/OonpricingservicetypeType');
var OonptmcomponentauditdetailType = require('./types/OonptmcomponentauditdetailType');
var OppservicecompdetailType = require('./types/OppservicecompdetailType');
var OppservicecompType = require('./types/OppservicecompType');
var OonpricingschedtimelineType = require('./types/OonpricingschedtimelineType');
var OppservicecompauditdetailType = require('./types/OppservicecompauditdetailType');
var OonpricingschedorderType = require('./types/OonpricingschedorderType');
var OppservicecompnoteType = require('./types/OppservicecompnoteType');
var OppservicecompholdType = require('./types/OppservicecompholdType');
var OppservicecompmultprocreductType = require('./types/OppservicecompmultprocreductType');
var OppservicecompdetailpricingType = require('./types/OppservicecompdetailpricingType');
var OppservicemodifiercompassignType = require('./types/OppservicemodifiercompassignType');
var OutliercompType = require('./types/OutliercompType');
var OutliercompauditdetailType = require('./types/OutliercompauditdetailType');
var OutliercompdetailType = require('./types/OutliercompdetailType');
var OppservicemodifiercompassignhxType = require('./types/OppservicemodifiercompassignhxType');
var OutliercompclaimclassType = require('./types/OutliercompclaimclassType');
var OutliercompholdType = require('./types/OutliercompholdType');
var OutliercompnoteType = require('./types/OutliercompnoteType');
var OverridereasoncodeType = require('./types/OverridereasoncodeType');
var OverridereasoncodeauditdetailType = require('./types/OverridereasoncodeauditdetailType');
var OonpricingschednoteType = require('./types/OonpricingschednoteType');
var PassthrucompType = require('./types/PassthrucompType');
var OppservicemodassignauditdetailType = require('./types/OppservicemodassignauditdetailType');
var PassthrucompauditdetailType = require('./types/PassthrucompauditdetailType');
var PaytoaddressqueueType = require('./types/PaytoaddressqueueType');
var OwnergroupType = require('./types/OwnergroupType');
var PassthrucompdetailsamedayrevType = require('./types/PassthrucompdetailsamedayrevType');
var PassthrucompclaimclassType = require('./types/PassthrucompclaimclassType');
var PassthrucompholdType = require('./types/PassthrucompholdType');
var PassthrucompdetailType = require('./types/PassthrucompdetailType');
var PassthrucompnoteType = require('./types/PassthrucompnoteType');
var PermissionType = require('./types/PermissionType');
var PermissiongroupauditdetailType = require('./types/PermissiongroupauditdetailType');
var PermissiongroupType = require('./types/PermissiongroupType');
var PfscompType = require('./types/PfscompType');
var PermissiongrouppermissionType = require('./types/PermissiongrouppermissionType');
var PfscompdefaultmodcompassignType = require('./types/PfscompdefaultmodcompassignType');
var PfscompnoteType = require('./types/PfscompnoteType');
var PfsmodifiercompassignType = require('./types/PfsmodifiercompassignType');
var PfscompholdType = require('./types/PfscompholdType');
var PfscomppossetType = require('./types/PfscomppossetType');
var PfscompauditdetailType = require('./types/PfscompauditdetailType');
var PlaceofservicecategoryType = require('./types/PlaceofservicecategoryType');
var PlaceofservicesetcatdetailType = require('./types/PlaceofservicesetcatdetailType');
var PfscompprocedureType = require('./types/PfscompprocedureType');
var PfsfileuploadheaderType = require('./types/PfsfileuploadheaderType');
var PlaceofservicesetType = require('./types/PlaceofservicesetType');
var PfscompprocmodifierType = require('./types/PfscompprocmodifierType');
var PfscompprotechcompassignType = require('./types/PfscompprotechcompassignType');
var PlaceofservicesetauditdetailType = require('./types/PlaceofservicesetauditdetailType');
var PricingschedType = require('./types/PricingschedType');
var PlaceofservicesetcatdetaildefType = require('./types/PlaceofservicesetcatdetaildefType');
var PricingschedorderType = require('./types/PricingschedorderType');
var PricingschednoteType = require('./types/PricingschednoteType');
var PoscategoryType = require('./types/PoscategoryType');
var PlaceofservicesetcatType = require('./types/PlaceofservicesetcatType');
var PricingschedauditdetailType = require('./types/PricingschedauditdetailType');
var PricingschedholdType = require('./types/PricingschedholdType');
var PoscategorycodeType = require('./types/PoscategorycodeType');
var PricingmethodtypeexclusionType = require('./types/PricingmethodtypeexclusionType');
var PricingschedorderclaimclassType = require('./types/PricingschedorderclaimclassType');
var PricingservicecategoryType = require('./types/PricingservicecategoryType');
var PricingsetType = require('./types/PricingsetType');
var PricingsetauditdetailType = require('./types/PricingsetauditdetailType');
var PricingschedorderdetailType = require('./types/PricingschedorderdetailType');
var PricingsetschedType = require('./types/PricingsetschedType');
var PricingsetsourceType = require('./types/PricingsetsourceType');
var PricingsettingauditdetailType = require('./types/PricingsettingauditdetailType');
var PricingsetnoteType = require('./types/PricingsetnoteType');
var ProccategoryType = require('./types/ProccategoryType');
var PricingsettingmprType = require('./types/PricingsettingmprType');
var PricingsettingType = require('./types/PricingsettingType');
var ProceduresetType = require('./types/ProceduresetType');
var PricingsettingnoteType = require('./types/PricingsettingnoteType');
var PricingsettingdmemodifierType = require('./types/PricingsettingdmemodifierType');
var ProceduresetauditdetailType = require('./types/ProceduresetauditdetailType');
var PricingspirefType = require('./types/PricingspirefType');
var ProccoderangecatType = require('./types/ProccoderangecatType');
var ProceduresetcatType = require('./types/ProceduresetcatType');
var ProceduresetcatdetaildefType = require('./types/ProceduresetcatdetaildefType');
var ProceduresetcatdetailType = require('./types/ProceduresetcatdetailType');
var ProdbennetworkschedType = require('./types/ProdbennetworkschedType');
var ProducerType = require('./types/ProducerType');
var ProdbenefittypeType = require('./types/ProdbenefittypeType');
var ProdbengroupType = require('./types/ProdbengroupType');
var ProdgovbentypeType = require('./types/ProdgovbentypeType');
var ProducerphoneType = require('./types/ProducerphoneType');
var ProducernoteType = require('./types/ProducernoteType');
var ProducerexternalidType = require('./types/ProducerexternalidType');
var ProduceraddressType = require('./types/ProduceraddressType');
var ProductType = require('./types/ProductType');
var ProductnoteType = require('./types/ProductnoteType');
var ProductauditdetailType = require('./types/ProductauditdetailType');
var ProductvalidationType = require('./types/ProductvalidationType');
var ProducerauditdetailType = require('./types/ProducerauditdetailType');
var ProductgensettingType = require('./types/ProductgensettingType');
var PromptpayschedType = require('./types/PromptpayschedType');
var ProfclaimsettingType = require('./types/ProfclaimsettingType');
var PromptpayscheddetailType = require('./types/PromptpayscheddetailType');
var PromptpayschedauditdetailType = require('./types/PromptpayschedauditdetailType');
var PromptpayschednoteType = require('./types/PromptpayschednoteType');
var ProtechsplitcompdetailType = require('./types/ProtechsplitcompdetailType');
var ProductbenefitType = require('./types/ProductbenefitType');
var ProtechsplitcompauditdetailType = require('./types/ProtechsplitcompauditdetailType');
var ProtechsplitcompType = require('./types/ProtechsplitcompType');
var ProvcategoryType = require('./types/ProvcategoryType');
var ProvcertschedType = require('./types/ProvcertschedType');
var ProvcertschedauditdetailType = require('./types/ProvcertschedauditdetailType');
var ProvcertschedaccreditationType = require('./types/ProvcertschedaccreditationType');
var ProtechsplitcompnoteType = require('./types/ProtechsplitcompnoteType');
var ProvcertschedcliaType = require('./types/ProvcertschedcliaType');
var ProvcertschedboardcertType = require('./types/ProvcertschedboardcertType');
var ProvcertschedexcludeproviderType = require('./types/ProvcertschedexcludeproviderType');
var ProvcertschedlicenseType = require('./types/ProvcertschedlicenseType');
var ProvcertschedholdType = require('./types/ProvcertschedholdType');
var ProvcertsetauditdetailType = require('./types/ProvcertsetauditdetailType');
var ProvcertsetholdType = require('./types/ProvcertsetholdType');
var ProvcertschedtaxonomyType = require('./types/ProvcertschedtaxonomyType');
var ProvcertschednoteType = require('./types/ProvcertschednoteType');
var ProvcertsetnoteType = require('./types/ProvcertsetnoteType');
var ProvcertsetschedassignType = require('./types/ProvcertsetschedassignType');
var ProvcertschedservType = require('./types/ProvcertschedservType');
var ProvcontractType = require('./types/ProvcontractType');
var ProvcertscheddegreeType = require('./types/ProvcertscheddegreeType');
var ProvcontractaffilnetpanelType = require('./types/ProvcontractaffilnetpanelType');
var ProvcertsetType = require('./types/ProvcertsetType');
var ProvcertschedstateType = require('./types/ProvcertschedstateType');
var ProvcontractaffiliationType = require('./types/ProvcontractaffiliationType');
var ProvcontractaddressType = require('./types/ProvcontractaddressType');
var ProvcontractauditdetailType = require('./types/ProvcontractauditdetailType');
var ProvcontractcarrierfilinglimitType = require('./types/ProvcontractcarrierfilinglimitType');
var ProvcontractfilinglimitType = require('./types/ProvcontractfilinglimitType');
var ProvcontractcarrierType = require('./types/ProvcontractcarrierType');
var ProvcontractfinpenaffiliationType = require('./types/ProvcontractfinpenaffiliationType');
var ProvcontractheaderType = require('./types/ProvcontractheaderType');
var ProvcontractheadernoteType = require('./types/ProvcontractheadernoteType');
var ProvcontractheaderauditdetailType = require('./types/ProvcontractheaderauditdetailType');
var ProvcontractfinancialpenType = require('./types/ProvcontractfinancialpenType');
var ProvcontractidType = require('./types/ProvcontractidType');
var ProvcontractholdType = require('./types/ProvcontractholdType');
var ProvcontractlobclausecodeType = require('./types/ProvcontractlobclausecodeType');
var ProvcontractlobType = require('./types/ProvcontractlobType');
var ProvcontractmedpolicyType = require('./types/ProvcontractmedpolicyType');
var ProvcontractmembergroupType = require('./types/ProvcontractmembergroupType');
var ProvcontractnetworkType = require('./types/ProvcontractnetworkType');
var ProvcontractlobfilinglimitType = require('./types/ProvcontractlobfilinglimitType');
var ProvcontractownerType = require('./types/ProvcontractownerType');
var ProvcontractnoteType = require('./types/ProvcontractnoteType');
var ProvcontractproductType = require('./types/ProvcontractproductType');
var ProvcontractplanType = require('./types/ProvcontractplanType');
var ProvcontracttaxonomyType = require('./types/ProvcontracttaxonomyType');
var ProvcontractsupportteamType = require('./types/ProvcontractsupportteamType');
var ProvcontracttinType = require('./types/ProvcontracttinType');
var ProvdirsuppressType = require('./types/ProvdirsuppressType');
var ProvcontracttermeventlogType = require('./types/ProvcontracttermeventlogType');
var ProvdirsuppressauditdetailType = require('./types/ProvdirsuppressauditdetailType');
var ProvexceptiondiagcodeType = require('./types/ProvexceptiondiagcodeType');
var ProvexceptionflagType = require('./types/ProvexceptionflagType');
var ProvdirsuppressregionType = require('./types/ProvdirsuppressregionType');
var ProvexceptionlobType = require('./types/ProvexceptionlobType');
var ProvexceptionplaceofserviceType = require('./types/ProvexceptionplaceofserviceType');
var ProvexceptionmodcodeType = require('./types/ProvexceptionmodcodeType');
var ProvexceptionfundingsourceType = require('./types/ProvexceptionfundingsourceType');
var ProvcontractcarriersupportteamType = require('./types/ProvcontractcarriersupportteamType');
var ProvexceptionproccodeType = require('./types/ProvexceptionproccodeType');
var ProviderType = require('./types/ProviderType');
var ProvideraliasType = require('./types/ProvideraliasType');
var ProvideraccreditationType = require('./types/ProvideraccreditationType');
var ProvideradverseactionType = require('./types/ProvideradverseactionType');
var ProvideradverseactioncodeType = require('./types/ProvideradverseactioncodeType');
var ProviderassignmenttypeType = require('./types/ProviderassignmenttypeType');
var ProvexceptionstateType = require('./types/ProvexceptionstateType');
var ProviderapplicationType = require('./types/ProviderapplicationType');
var ProviderassigntypetaxonomycodeType = require('./types/ProviderassigntypetaxonomycodeType');
var ProvexceptionrevcodeType = require('./types/ProvexceptionrevcodeType');
var ProvideradversebasisType = require('./types/ProvideradversebasisType');
var ProviderauditdetailType = require('./types/ProviderauditdetailType');
var ProvidercontactaddressphoneType = require('./types/ProvidercontactaddressphoneType');
var ProvidercontactaddressType = require('./types/ProvidercontactaddressType');
var ProvidercontactelectroniccomType = require('./types/ProvidercontactelectroniccomType');
var ProvidercontactphoneType = require('./types/ProvidercontactphoneType');
var ProvidereducationType = require('./types/ProvidereducationType');
var ProvidercontactauditdetailType = require('./types/ProvidercontactauditdetailType');
var ProviderelectroniccommType = require('./types/ProviderelectroniccommType');
var ProviderfedexclType = require('./types/ProviderfedexclType');
var ProviderholdType = require('./types/ProviderholdType');
var ProviderhospitalaffilType = require('./types/ProviderhospitalaffilType');
var ProviderencumbranceType = require('./types/ProviderencumbranceType');
var ProviderhourType = require('./types/ProviderhourType');
var ProvideridType = require('./types/ProvideridType');
var ProvidercertificationType = require('./types/ProvidercertificationType');
var ProviderencumbrancepaymentType = require('./types/ProviderencumbrancepaymentType');
var ProviderlicenseType = require('./types/ProviderlicenseType');
var ProvidercoverType = require('./types/ProvidercoverType');
var ProvidercontactType = require('./types/ProvidercontactType');
var ProvideridlocationType = require('./types/ProvideridlocationType');
var ProvidercredentialType = require('./types/ProvidercredentialType');
var ProviderlanguageType = require('./types/ProviderlanguageType');
var ProviderjudgementType = require('./types/ProviderjudgementType');
var ProviderliabilityinType = require('./types/ProviderliabilityinType');
var ProviderlocaffilclinicaleffType = require('./types/ProviderlocaffilclinicaleffType');
var ProviderlocationaffiliationType = require('./types/ProviderlocationaffiliationType');
var ProviderlocationcontactType = require('./types/ProviderlocationcontactType');
var ProviderlocationlanguageType = require('./types/ProviderlocationlanguageType');
var ProviderlocationhospaffilType = require('./types/ProviderlocationhospaffilType');
var ProviderlocationaccredType = require('./types/ProviderlocationaccredType');
var ProviderlocationtaxonomyType = require('./types/ProviderlocationtaxonomyType');
var ProvidermalpracticeType = require('./types/ProvidermalpracticeType');
var ProviderlocationphoneType = require('./types/ProviderlocationphoneType');
var ProvidernoteType = require('./types/ProvidernoteType');
var ProviderorgaffiliationType = require('./types/ProviderorgaffiliationType');
var ProviderorgfacilityType = require('./types/ProviderorgfacilityType');
var ProviderorgelectroniccommType = require('./types/ProviderorgelectroniccommType');
var ProviderorgauditdetailType = require('./types/ProviderorgauditdetailType');
var ProviderorgaliasType = require('./types/ProviderorgaliasType');
var ProviderorglocationType = require('./types/ProviderorglocationType');
var ProviderorgType = require('./types/ProviderorgType');
var ProviderorgholdType = require('./types/ProviderorgholdType');
var ProviderorgidlocationType = require('./types/ProviderorgidlocationType');
var ProviderorgidType = require('./types/ProviderorgidType');
var ProviderorglocationphoneType = require('./types/ProviderorglocationphoneType');
var ProviderorgtinType = require('./types/ProviderorgtinType');
var ProviderorglocationcliaType = require('./types/ProviderorglocationcliaType');
var ProviderorgqueueType = require('./types/ProviderorgqueueType');
var ProviderpremiumdesignationType = require('./types/ProviderpremiumdesignationType');
var ProviderorgnoteType = require('./types/ProviderorgnoteType');
var ProviderorglocationclaimaliasType = require('./types/ProviderorglocationclaimaliasType');
var ProviderpeerreviewType = require('./types/ProviderpeerreviewType');
var ProviderqueueType = require('./types/ProviderqueueType');
var ProviderprocessexceptionType = require('./types/ProviderprocessexceptionType');
var ProviderqueueheaderType = require('./types/ProviderqueueheaderType');
var ProviderqueueattachmentType = require('./types/ProviderqueueattachmentType');
var ProviderreferenceType = require('./types/ProviderreferenceType');
var ProvidersanctionType = require('./types/ProvidersanctionType');
var ProvidertaxonomygroupType = require('./types/ProvidertaxonomygroupType');
var ProvidersanctionlicenseType = require('./types/ProvidersanctionlicenseType');
var ProviderrefaddressType = require('./types/ProviderrefaddressType');
var ProvidertinaddreleccommType = require('./types/ProvidertinaddreleccommType');
var ProvidersettingType = require('./types/ProvidersettingType');
var ProvidertaxonomyType = require('./types/ProvidertaxonomyType');
var ProvidertinaddrphoneType = require('./types/ProvidertinaddrphoneType');
var ProvjudgeinvestigationType = require('./types/ProvjudgeinvestigationType');
var ProviderworkhistoryType = require('./types/ProviderworkhistoryType');
var ProvspecialtycatType = require('./types/ProvspecialtycatType');
var ProvspecialtysetType = require('./types/ProvspecialtysetType');
var ProvjudgeoffenseType = require('./types/ProvjudgeoffenseType');
var ProvspecialtysetauditdetailType = require('./types/ProvspecialtysetauditdetailType');
var ProvspecialtysetcatType = require('./types/ProvspecialtysetcatType');
var ProvspecialtysetcatdetaildefType = require('./types/ProvspecialtysetcatdetaildefType');
var ProvtaxonomyassignType = require('./types/ProvtaxonomyassignType');
var ProvspecialtysetcatdetailType = require('./types/ProvspecialtysetcatdetailType');
var ProvtinType = require('./types/ProvtinType');
var ProvtinaddressType = require('./types/ProvtinaddressType');
var ProvtinauditdetailType = require('./types/ProvtinauditdetailType');
var ProvtinaddressesclaimaliasType = require('./types/ProvtinaddressesclaimaliasType');
var QueueclaimtypeType = require('./types/QueueclaimtypeType');
var QueueeditcodeType = require('./types/QueueeditcodeType');
var QualityandefficiencycodetypeType = require('./types/QualityandefficiencycodetypeType');
var ProvtinstateType = require('./types/ProvtinstateType');
var ProvtaxonomycodeassignType = require('./types/ProvtaxonomycodeassignType');
var ProvtinnoteType = require('./types/ProvtinnoteType');
var QueuememgroupType = require('./types/QueuememgroupType');
var QueueheaderType = require('./types/QueueheaderType');
var QueueprovtinidType = require('./types/QueueprovtinidType');
var QueuenameType = require('./types/QueuenameType');
var QueueroleType = require('./types/QueueroleType');
var ReferenceType = require('./types/ReferenceType');
var ReferencefilterchildType = require('./types/ReferencefilterchildType');
var QueueroutingcodeType = require('./types/QueueroutingcodeType');
var ReferencefiltercustomType = require('./types/ReferencefiltercustomType');
var ReferenceheaderType = require('./types/ReferenceheaderType');
var RegentityType = require('./types/RegentityType');
var RegentityauditdetailType = require('./types/RegentityauditdetailType');
var RegentitycontactType = require('./types/RegentitycontactType');
var RegentitycontactaddressType = require('./types/RegentitycontactaddressType');
var RegentitycontacthourType = require('./types/RegentitycontacthourType');
var RegentitycontactphoneType = require('./types/RegentitycontactphoneType');
var RegentitycontacteleccomType = require('./types/RegentitycontacteleccomType');
var QueuegroupType = require('./types/QueuegroupType');
var ProvtinqueueType = require('./types/ProvtinqueueType');
var QueuegrouproleType = require('./types/QueuegrouproleType');
var QueueattachmentType = require('./types/QueueattachmentType');
var RegentitydeptType = require('./types/RegentitydeptType');
var RegentitydeptaddressType = require('./types/RegentitydeptaddressType');
var RegentitydeptcontactType = require('./types/RegentitydeptcontactType');
var QueuegroupuserType = require('./types/QueuegroupuserType');
var RegentitydepthourType = require('./types/RegentitydepthourType');
var RegentitydepteleccomType = require('./types/RegentitydepteleccomType');
var RegentityguardrailType = require('./types/RegentityguardrailType');
var RegentityguardrailerisaType = require('./types/RegentityguardrailerisaType');
var RegentityguardrailbenefitType = require('./types/RegentityguardrailbenefitType');
var RegentityguardrailmetallicType = require('./types/RegentityguardrailmetallicType');
var RegentitydeptphoneType = require('./types/RegentitydeptphoneType');
var RegentityguardrailgovtType = require('./types/RegentityguardrailgovtType');
var RegentityguardrailplanType = require('./types/RegentityguardrailplanType');
var RegionType = require('./types/RegionType');
var RelationshipauditdetailType = require('./types/RelationshipauditdetailType');
var RegentitynoteType = require('./types/RegentitynoteType');
var RelationshipnoteType = require('./types/RelationshipnoteType');
var RelationshipscheduleType = require('./types/RelationshipscheduleType');
var RelationshiplevelcodeType = require('./types/RelationshiplevelcodeType');
var RelationshipschedulelevelType = require('./types/RelationshipschedulelevelType');
var RemarkcodeType = require('./types/RemarkcodeType');
var RemarkcodeauditdetailType = require('./types/RemarkcodeauditdetailType');
var RemarkcodebenefitType = require('./types/RemarkcodebenefitType');
var RemarkcodeclaimeditcodeType = require('./types/RemarkcodeclaimeditcodeType');
var RemarkcodeaccounttypeType = require('./types/RemarkcodeaccounttypeType');
var RemarkcodedelegType = require('./types/RemarkcodedelegType');
var RemarkcodeorcType = require('./types/RemarkcodeorcType');
var RemarkcodediagType = require('./types/RemarkcodediagType');
var RemarkcodepoType = require('./types/RemarkcodepoType');
var RemarkcodeexpenseType = require('./types/RemarkcodeexpenseType');
var RemarkcodebilltypeType = require('./types/RemarkcodebilltypeType');
var RemarkcodedrcType = require('./types/RemarkcodedrcType');
var RemarkcodeclinicaleditresponseType = require('./types/RemarkcodeclinicaleditresponseType');
var RemarkcodemedpolicyruleType = require('./types/RemarkcodemedpolicyruleType');
var RemarkcodemodifiercodeType = require('./types/RemarkcodemodifiercodeType');
var RemarkcodeinternaladjustrsncdType = require('./types/RemarkcodeinternaladjustrsncdType');
var RemarkcodeprovdesignationType = require('./types/RemarkcodeprovdesignationType');
var RemarkcodepricingmethodtypeType = require('./types/RemarkcodepricingmethodtypeType');
var RemarkcodeprocType = require('./types/RemarkcodeprocType');
var RemarkcodescheduleauditdetailType = require('./types/RemarkcodescheduleauditdetailType');
var RemarkcodeschedbrandType = require('./types/RemarkcodeschedbrandType');
var RemarkcodesitusstateType = require('./types/RemarkcodesitusstateType');
var RemarkcodescheduleType = require('./types/RemarkcodescheduleType');
var RemarkcodesurchargeType = require('./types/RemarkcodesurchargeType');
var RemarkcoderevenueType = require('./types/RemarkcoderevenueType');
var RemarkcodepricingcompType = require('./types/RemarkcodepricingcompType');
var RemarkcodescheduleprovType = require('./types/RemarkcodescheduleprovType');
var RemarkcodevendorremarkcodeType = require('./types/RemarkcodevendorremarkcodeType');
var RemarkcodetriggerType = require('./types/RemarkcodetriggerType');
var RevenuebasefileuploaddetailType = require('./types/RevenuebasefileuploaddetailType');
var RevenuebasefileuploadheaderType = require('./types/RevenuebasefileuploadheaderType');
var ReportexecutionType = require('./types/ReportexecutionType');
var RevenuecatrangeType = require('./types/RevenuecatrangeType');
var RevenuecodeType = require('./types/RevenuecodeType');
var RevenuesetauditdetailType = require('./types/RevenuesetauditdetailType');
var RevenuesetType = require('./types/RevenuesetType');
var RevenuecategoryType = require('./types/RevenuecategoryType');
var RevenuesetcatdetailType = require('./types/RevenuesetcatdetailType');
var RevenuesetcatdetaildefType = require('./types/RevenuesetcatdetaildefType');
var RemarkcodeschedulenoteType = require('./types/RemarkcodeschedulenoteType');
var RevenuesetcatType = require('./types/RevenuesetcatType');
var RiskarrangecontractaffilprovType = require('./types/RiskarrangecontractaffilprovType');
var RiskarrangecontractdetailType = require('./types/RiskarrangecontractdetailType');
var RiskarrangecontractdofrType = require('./types/RiskarrangecontractdofrType');
var RiderbenefittypestackType = require('./types/RiderbenefittypestackType');
var RhceditcodeassignType = require('./types/RhceditcodeassignType');
var RiskarrangecontractType = require('./types/RiskarrangecontractType');
var RiskarrangecontractentityType = require('./types/RiskarrangecontractentityType');
var RiskarrangecontractcarrierType = require('./types/RiskarrangecontractcarrierType');
var RiskarrangecontractdelegType = require('./types/RiskarrangecontractdelegType');
var RiskarrangecontractlobType = require('./types/RiskarrangecontractlobType');
var RiskarrangecontractnoteType = require('./types/RiskarrangecontractnoteType');
var RiskarrangecontrauditdetailType = require('./types/RiskarrangecontrauditdetailType');
var RiskarrangecontractplanType = require('./types/RiskarrangecontractplanType');
var RiskarrangecontractholdType = require('./types/RiskarrangecontractholdType');
var RiskarrangecontractproductType = require('./types/RiskarrangecontractproductType');
var RulecriterionType = require('./types/RulecriterionType');
var RuleType = require('./types/RuleType');
var RiskarrangecontrdelegfctType = require('./types/RiskarrangecontrdelegfctType');
var RuleserviceType = require('./types/RuleserviceType');
var RulelogType = require('./types/RulelogType');
var RoutingcodeType = require('./types/RoutingcodeType');
var RulelogheaderType = require('./types/RulelogheaderType');
var RvuType = require('./types/RvuType');
var RuleassignType = require('./types/RuleassignType');
var RoomandboardrevType = require('./types/RoomandboardrevType');
var RulesetType = require('./types/RulesetType');
var RvufileuploadheaderType = require('./types/RvufileuploadheaderType');
var RxclaimsettingType = require('./types/RxclaimsettingType');
var SalesofficeType = require('./types/SalesofficeType');
var SalesofficenoteType = require('./types/SalesofficenoteType');
var SalesofficeauditdetailType = require('./types/SalesofficeauditdetailType');
var SalesofficeexternalidType = require('./types/SalesofficeexternalidType');
var ScmType = require('./types/ScmType');
var ScheduledjoblockType = require('./types/ScheduledjoblockType');
var ScheduledjobauditdetailType = require('./types/ScheduledjobauditdetailType');
var ScheduledjobType = require('./types/ScheduledjobType');
var ScmbenecodemodifierType = require('./types/ScmbenecodemodifierType');
var ScmbenecodeposcategoryType = require('./types/ScmbenecodeposcategoryType');
var ScmbenecodeproccategoryType = require('./types/ScmbenecodeproccategoryType');
var ScmbenecodeprovcategoryType = require('./types/ScmbenecodeprovcategoryType');
var ScmbenecoderevenuecategoryType = require('./types/ScmbenecoderevenuecategoryType');
var ScmnoteType = require('./types/ScmnoteType');
var ScmtoservcompvalidationType = require('./types/ScmtoservcompvalidationType');
var ScmvalidationType = require('./types/ScmvalidationType');
var ServcompType = require('./types/ServcompType');
var ServcompauditdetailType = require('./types/ServcompauditdetailType');
var ServcompnoteType = require('./types/ServcompnoteType');
var RvufileuploadstagingType = require('./types/RvufileuploadstagingType');
var ScmbenecodeType = require('./types/ScmbenecodeType');
var RuleservicepropertyType = require('./types/RuleservicepropertyType');
var ServcompservdetailbilltypecodeType = require('./types/ServcompservdetailbilltypecodeType');
var ScmbenecodebilltypecategoryType = require('./types/ScmbenecodebilltypecategoryType');
var ScheduledjoblockauditdetailType = require('./types/ScheduledjoblockauditdetailType');
var SchemaVersionType = require('./types/SchemaVersionType');
var ServcompservType = require('./types/ServcompservType');
var ServcompservdetaildiagType = require('./types/ServcompservdetaildiagType');
var ScmbenecodediagcategoryType = require('./types/ScmbenecodediagcategoryType');
var ServcompservdetailbilltypeType = require('./types/ServcompservdetailbilltypeType');
var ServcompservdetailprocType = require('./types/ServcompservdetailprocType');
var ServcompservdetailprovcodeType = require('./types/ServcompservdetailprovcodeType');
var ServcompservdetailprovspltyType = require('./types/ServcompservdetailprovspltyType');
var ServcompservdetailpoType = require('./types/ServcompservdetailpoType');
var ServcompservdetaildiagcodeType = require('./types/ServcompservdetaildiagcodeType');
var ServcompservdetailmodifierType = require('./types/ServcompservdetailmodifierType');
var ServcompservdetailType = require('./types/ServcompservdetailType');
var ServcompservdetailposcodeType = require('./types/ServcompservdetailposcodeType');
var ServcomptempadjudType = require('./types/ServcomptempadjudType');
var ServcompservdetailrevcodeType = require('./types/ServcompservdetailrevcodeType');
var ServcompvalidationType = require('./types/ServcompvalidationType');
var ServiceplanType = require('./types/ServiceplanType');
var ServcompservdetailrevenueType = require('./types/ServcompservdetailrevenueType');
var ServiceareaauditdetailType = require('./types/ServiceareaauditdetailType');
var ServiceareaType = require('./types/ServiceareaType');
var ServcompservdetailproccodeType = require('./types/ServcompservdetailproccodeType');
var ServiceareapostalType = require('./types/ServiceareapostalType');
var ServiceareanoteType = require('./types/ServiceareanoteType');
var ServiceplanexternalidType = require('./types/ServiceplanexternalidType');
var ServicearearegionType = require('./types/ServicearearegionType');
var ServicecatauditdetailType = require('./types/ServicecatauditdetailType');
var SettingsnoteType = require('./types/SettingsnoteType');
var ServiceplanauditdetailType = require('./types/ServiceplanauditdetailType');
var StatmodifiercompType = require('./types/StatmodifiercompType');
var StatmodifiercompauditdetailType = require('./types/StatmodifiercompauditdetailType');
var SettingsnotedetailType = require('./types/SettingsnotedetailType');
var StatmodifiercompcodeType = require('./types/StatmodifiercompcodeType');
var StatmodifiercompnoteType = require('./types/StatmodifiercompnoteType');
var SubpayrollfrequencyType = require('./types/SubpayrollfrequencyType');
var SubsacctsettingType = require('./types/SubsacctsettingType');
var Subsaffiliation834HistType = require('./types/Subsaffiliation834HistType');
var SubsaffiliationattributeType = require('./types/SubsaffiliationattributeType');
var SubsaffiliationType = require('./types/SubsaffiliationType');
var SubsaffiliationpopbillingprefType = require('./types/SubsaffiliationpopbillingprefType');
var SubsbeneficiaryType = require('./types/SubsbeneficiaryType');
var SubsaffiliationexternalidType = require('./types/SubsaffiliationexternalidType');
var SubsbeneficiarypartyType = require('./types/SubsbeneficiarypartyType');
var SubsbeneficiarymemType = require('./types/SubsbeneficiarymemType');
var SubsmginfoType = require('./types/SubsmginfoType');
var SubsjobType = require('./types/SubsjobType');
var SubstscheduleletterType = require('./types/SubstscheduleletterType');
var SuperbillclaimsettingType = require('./types/SuperbillclaimsettingType');
var SubstscheduleType = require('./types/SubstscheduleType');
var SupportteamaddressType = require('./types/SupportteamaddressType');
var SupportteamType = require('./types/SupportteamType');
var ServiceplanfunctioncodeType = require('./types/ServiceplanfunctioncodeType');
var SettingsauditdetailType = require('./types/SettingsauditdetailType');
var ServiceplanfunctionType = require('./types/ServiceplanfunctionType');
var ServicetypecodeType = require('./types/ServicetypecodeType');
var SupportteamauditdetailType = require('./types/SupportteamauditdetailType');
var SupportteameleccommType = require('./types/SupportteameleccommType');
var SupportteamaddressphoneType = require('./types/SupportteamaddressphoneType');
var SurchargeschedType = require('./types/SurchargeschedType');
var SupportteamphoneType = require('./types/SupportteamphoneType');
var SurchargeschedexcludeclaimtypeType = require('./types/SurchargeschedexcludeclaimtypeType');
var SurchargeschedexcludepoType = require('./types/SurchargeschedexcludepoType');
var SurchargeschedauditdetailType = require('./types/SurchargeschedauditdetailType');
var SurchargeschedprovtinType = require('./types/SurchargeschedprovtinType');
var SurchargeschedrateType = require('./types/SurchargeschedrateType');
var SurchargeschedexcludebilltypeType = require('./types/SurchargeschedexcludebilltypeType');
var SurchargeschednoteType = require('./types/SurchargeschednoteType');
var SurchargeschedrateexcludegovtType = require('./types/SurchargeschedrateexcludegovtType');
var SurchargeschedrateplanType = require('./types/SurchargeschedrateplanType');
var SurchargeschedratebenefitType = require('./types/SurchargeschedratebenefitType');
var SysKeyType = require('./types/SysKeyType');
var SysSetFramwrkType = require('./types/SysSetFramwrkType');
var SysErrLogType = require('./types/SysErrLogType');
var SysSetFlSyType = require('./types/SysSetFlSyType');
var SysSetEmailGrpType = require('./types/SysSetEmailGrpType');
var SysSetSqlType = require('./types/SysSetSqlType');
var SysSqlLogType = require('./types/SysSqlLogType');
var SysSetPrgTblType = require('./types/SysSetPrgTblType');
var SysSetRptType = require('./types/SysSetRptType');
var SysaddressauditdetailType = require('./types/SysaddressauditdetailType');
var SysaddressnoteType = require('./types/SysaddressnoteType');
var SysaddressType = require('./types/SysaddressType');
var SysbillingdefaultvalueType = require('./types/SysbillingdefaultvalueType');
var SysfinsettingbenefittypeType = require('./types/SysfinsettingbenefittypeType');
var SysfinsettingType = require('./types/SysfinsettingType');
var SysaddresstypeassignType = require('./types/SysaddresstypeassignType');
var SysfinsettingauditdetailType = require('./types/SysfinsettingauditdetailType');
var SysfinsettingfinattribschedapType = require('./types/SysfinsettingfinattribschedapType');
var SysfinsettinginterestType = require('./types/SysfinsettinginterestType');
var SysfinsettingfinattribschedarType = require('./types/SysfinsettingfinattribschedarType');
var SysfinsettingfinattribschedType = require('./types/SysfinsettingfinattribschedType');
var SysfinsettingreportutilType = require('./types/SysfinsettingreportutilType');
var SysfinsettingsurchargeType = require('./types/SysfinsettingsurchargeType');
var SysfinsettingruleservType = require('./types/SysfinsettingruleservType');
var SysfinsettingnoteType = require('./types/SysfinsettingnoteType');
var SysfinsettingservplanType = require('./types/SysfinsettingservplanType');
var SysfinsettingutilplanType = require('./types/SysfinsettingutilplanType');
var SysmemgroupsettingType = require('./types/SysmemgroupsettingType');
var SysphonenumberauditdetailType = require('./types/SysphonenumberauditdetailType');
var SysphonenumberlanguageType = require('./types/SysphonenumberlanguageType');
var SysphonenumberType = require('./types/SysphonenumberType');
var SystemTblType = require('./types/SystemTblType');
var SystemactuarialvalueType = require('./types/SystemactuarialvalueType');
var SystemactivitylogType = require('./types/SystemactivitylogType');
var SysphonenumbernoteType = require('./types/SysphonenumbernoteType');
var SystemcontactdepartmentType = require('./types/SystemcontactdepartmentType');
var SystemcontactnameType = require('./types/SystemcontactnameType');
var SystemcorpholidayType = require('./types/SystemcorpholidayType');
var SystemcontactphoneType = require('./types/SystemcontactphoneType');
var SystemcontactaddressType = require('./types/SystemcontactaddressType');
var SystemdepartmenthourType = require('./types/SystemdepartmenthourType');
var SystemdepartmentphoneType = require('./types/SystemdepartmentphoneType');
var SystemdepartmentaddressType = require('./types/SystemdepartmentaddressType');
var SystemediresponseType = require('./types/SystemediresponseType');
var SystemediresponsestatusType = require('./types/SystemediresponsestatusType');
var SystemediresponseloopType = require('./types/SystemediresponseloopType');
var SystemedisettingType = require('./types/SystemedisettingType');
var SystemmsasettingType = require('./types/SystemmsasettingType');
var SystempermitType = require('./types/SystempermitType');
var SystemgeneralsettingType = require('./types/SystemgeneralsettingType');
var SystemmsaorderofacctType = require('./types/SystemmsaorderofacctType');
var SystemfederalType = require('./types/SystemfederalType');
var SystemsettingsrestclientType = require('./types/SystemsettingsrestclientType');
var SystemsettingstemporaryType = require('./types/SystemsettingstemporaryType');
var SystemsettingsauditdetailType = require('./types/SystemsettingsauditdetailType');
var TaxonomyaccreditationType = require('./types/TaxonomyaccreditationType');
var TaxonomybasefileuploadheaderType = require('./types/TaxonomybasefileuploadheaderType');
var TaxonomycodeType = require('./types/TaxonomycodeType');
var TaxonomybasefileuploaddetailType = require('./types/TaxonomybasefileuploaddetailType');
var ThresholdparameterType = require('./types/ThresholdparameterType');
var TimelyfilingschedauditdetailType = require('./types/TimelyfilingschedauditdetailType');
var TaxtypecodeType = require('./types/TaxtypecodeType');
var TimelyfilingschedType = require('./types/TimelyfilingschedType');
var TimelyfilingscheddetailType = require('./types/TimelyfilingscheddetailType');
var ThresholdparameterdetailType = require('./types/ThresholdparameterdetailType');
var TimelyfilingschednoteType = require('./types/TimelyfilingschednoteType');
var TradingpartnerconfigType = require('./types/TradingpartnerconfigType');
var ToothType = require('./types/ToothType');
var TransferpricingpatientstatusType = require('./types/TransferpricingpatientstatusType');
var UcrbasefileuploadstagingType = require('./types/UcrbasefileuploadstagingType');
var UcrbasefileuploadheaderType = require('./types/UcrbasefileuploadheaderType');
var UcrcompauditdetailType = require('./types/UcrcompauditdetailType');
var UcrcompType = require('./types/UcrcompType');
var UcrcompdetailType = require('./types/UcrcompdetailType');
var UcrcompholdType = require('./types/UcrcompholdType');
var SystemstateType = require('./types/SystemstateType');
var UcrcompdetailprofType = require('./types/UcrcompdetailprofType');
var UcrcompnoteType = require('./types/UcrcompnoteType');
var UmauthauditdetailType = require('./types/UmauthauditdetailType');
var SystemworkhourType = require('./types/SystemworkhourType');
var UmauthdiagnosisType = require('./types/UmauthdiagnosisType');
var UmauthbeddayrangeType = require('./types/UmauthbeddayrangeType');
var UmauthfacilitydecisionType = require('./types/UmauthfacilitydecisionType');
var UmauthType = require('./types/UmauthType');
var UmauthproviderType = require('./types/UmauthproviderType');
var UmauthprovideraltidType = require('./types/UmauthprovideraltidType');
var UmauthfacilitytypeType = require('./types/UmauthfacilitytypeType');
var UmauthproviderroletypeType = require('./types/UmauthproviderroletypeType');
var UmauthserviceType = require('./types/UmauthserviceType');
var UmauthservicefacilityType = require('./types/UmauthservicefacilityType');
var UmreferralType = require('./types/UmreferralType');
var UmauthservicenonfacilType = require('./types/UmauthservicenonfacilType');
var UmauthservicedecisionType = require('./types/UmauthservicedecisionType');
var UmreferraldiagnosisType = require('./types/UmreferraldiagnosisType');
var UmreferralauditdetailType = require('./types/UmreferralauditdetailType');
var UseractivitylogType = require('./types/UseractivitylogType');
var UseractivityType = require('./types/UseractivityType');
var UseraddressType = require('./types/UseraddressType');
var UserauditdetailType = require('./types/UserauditdetailType');
var UmreferralserviceType = require('./types/UmreferralserviceType');
var UmreferralprovideraltidType = require('./types/UmreferralprovideraltidType');
var UmreferralproviderType = require('./types/UmreferralproviderType');
var UsergroupuserType = require('./types/UsergroupuserType');
var UserdatasecuritygroupType = require('./types/UserdatasecuritygroupType');
var UserclaimcancelcodeType = require('./types/UserclaimcancelcodeType');
var UsergrouppermissiongroupType = require('./types/UsergrouppermissiongroupType');
var UserclaimcancelcodeauditdetailType = require('./types/UserclaimcancelcodeauditdetailType');
var UsersplitclaimcodeauditdetailType = require('./types/UsersplitclaimcodeauditdetailType');
var UmreferralproviderroletypeType = require('./types/UmreferralproviderroletypeType');
var UsergroupauditdetailType = require('./types/UsergroupauditdetailType');
var UsersplitclaimcodeType = require('./types/UsersplitclaimcodeType');
var UsertelephoneType = require('./types/UsertelephoneType');
var UsergroupType = require('./types/UsergroupType');
var UtilizationplanType = require('./types/UtilizationplanType');
var UsertableType = require('./types/UsertableType');
var UtilizationplanauditdetailType = require('./types/UtilizationplanauditdetailType');
var UtilizationplansettingType = require('./types/UtilizationplansettingType');
var VariablecontentType = require('./types/VariablecontentType');
var UtilizationplanexternalidType = require('./types/UtilizationplanexternalidType');
var VendoraccountType = require('./types/VendoraccountType');
var VendorauditdetailType = require('./types/VendorauditdetailType');
var VendorType = require('./types/VendorType');
var VendorcontactdepartmentType = require('./types/VendorcontactdepartmentType');
var VendorcontactnameType = require('./types/VendorcontactnameType');
var VendorcontactphoneType = require('./types/VendorcontactphoneType');
var VendorcontactaddressType = require('./types/VendorcontactaddressType');
var VendordepartmenthourType = require('./types/VendordepartmenthourType');
var VendordepartmentphoneType = require('./types/VendordepartmentphoneType');
var VendorpackageucrType = require('./types/VendorpackageucrType');
var VendornoteType = require('./types/VendornoteType');
var VendordepartmentaddressType = require('./types/VendordepartmentaddressType');
var VendorremarkcodeType = require('./types/VendorremarkcodeType');
var VendorworkhourType = require('./types/VendorworkhourType');
var VendorpermitType = require('./types/VendorpermitType');
var ZipcodefileuploaddetailType = require('./types/ZipcodefileuploaddetailType');
var Zipplus4Type = require('./types/Zipplus4Type');
var ZipcodeType = require('./types/ZipcodeType');
var ZipcodefileuploadheaderType = require('./types/ZipcodefileuploadheaderType');
var UserqualitysettingType = require('./types/UserqualitysettingType');
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
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Acctbalap')
                },

                acctbal: {
                    type: AcctbalType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Acctbal')
                },

                acctbalaphx: {
                    type: AcctbalaphxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Acctbalaphx')
                },

                acctbalar: {
                    type: AcctbalarType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Acctbalar')
                },

                acctbalauditdetail: {
                    type: AcctbalauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Acctbalauditdetail')
                },

                acctbalarhx: {
                    type: AcctbalarhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Acctbalarhx')
                },

                acctbalfamacsclaim: {
                    type: AcctbalfamacsclaimType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Acctbalfamacsclaim')
                },

                acctbalauditdetailhx: {
                    type: AcctbalauditdetailhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Acctbalauditdetailhx')
                },

                acctbalfamacsclaimhx: {
                    type: AcctbalfamacsclaimhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Acctbalfamacsclaimhx')
                },

                acctbalfamacspthx: {
                    type: AcctbalfamacspthxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Acctbalfamacspthx')
                },

                acctbalindcarryoverhx: {
                    type: AcctbalindcarryoverhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Acctbalindcarryoverhx')
                },

                acctbalhx: {
                    type: AcctbalhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Acctbalhx')
                },

                acctbalindcarryover: {
                    type: AcctbalindcarryoverType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Acctbalindcarryover')
                },

                acctbalmemacsclaim: {
                    type: AcctbalmemacsclaimType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Acctbalmemacsclaim')
                },

                acctbalfamacspt: {
                    type: AcctbalfamacsptType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Acctbalfamacspt')
                },

                acctbalmemacspt: {
                    type: AcctbalmemacsptType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Acctbalmemacspt')
                },

                acctbalnote: {
                    type: AcctbalnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Acctbalnote')
                },

                acctbalmemacspthx: {
                    type: AcctbalmemacspthxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Acctbalmemacspthx')
                },

                acctbalmemacsclaimhx: {
                    type: AcctbalmemacsclaimhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Acctbalmemacsclaimhx')
                },

                acctbalnotehx: {
                    type: AcctbalnotehxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Acctbalnotehx')
                },

                acctbalnotedetailhx: {
                    type: AcctbalnotedetailhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Acctbalnotedetailhx')
                },

                acctbalprefundap: {
                    type: AcctbalprefundapType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Acctbalprefundap')
                },

                acctbalnotedetail: {
                    type: AcctbalnotedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Acctbalnotedetail')
                },

                acctbalprefundarhx: {
                    type: AcctbalprefundarhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Acctbalprefundarhx')
                },

                acctbalprefundar: {
                    type: AcctbalprefundarType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Acctbalprefundar')
                },

                acctbalpurse: {
                    type: AcctbalpurseType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Acctbalpurse')
                },

                acctbalprefundaphx: {
                    type: AcctbalprefundaphxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Acctbalprefundaphx')
                },

                acctbalpursehx: {
                    type: AcctbalpursehxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Acctbalpursehx')
                },

                acctbaltimeline: {
                    type: AcctbaltimelineType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Acctbaltimeline')
                },

                accumbypass: {
                    type: AccumbypassType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumbypass')
                },

                accumbypassplan: {
                    type: AccumbypassplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumbypassplan')
                },

                acctbaltimelinehx: {
                    type: AcctbaltimelinehxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Acctbaltimelinehx')
                },

                accumbypassaudit: {
                    type: AccumbypassauditType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumbypassaudit')
                },

                accumbypasstxsuppress: {
                    type: AccumbypasstxsuppressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumbypasstxsuppress')
                },

                accumcobreserve: {
                    type: AccumcobreserveType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumcobreserve')
                },

                accumdeductfam: {
                    type: AccumdeductfamType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumdeductfam')
                },

                accumdeductfamaudit: {
                    type: AccumdeductfamauditType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumdeductfamaudit')
                },

                accumbypasstx: {
                    type: AccumbypasstxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumbypasstx')
                },

                accumcobreservetx: {
                    type: AccumcobreservetxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumcobreservetx')
                },

                accumdeductfamtx: {
                    type: AccumdeductfamtxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumdeductfamtx')
                },

                accumdeductfamtxsuppress: {
                    type: AccumdeductfamtxsuppressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumdeductfamtxsuppress')
                },

                accumdeductfamplan: {
                    type: AccumdeductfamplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumdeductfamplan')
                },

                accumdeductindivaudit: {
                    type: AccumdeductindivauditType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumdeductindivaudit')
                },

                accumdeductindivplan: {
                    type: AccumdeductindivplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumdeductindivplan')
                },

                accumdeductindiv: {
                    type: AccumdeductindivType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumdeductindiv')
                },

                accumdeductindivtxsuppress: {
                    type: AccumdeductindivtxsuppressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumdeductindivtxsuppress')
                },

                accumerror: {
                    type: AccumerrorType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumerror')
                },

                accumdeductindivtx: {
                    type: AccumdeductindivtxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumdeductindivtx')
                },

                accumlockauditdetail: {
                    type: AccumlockauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumlockauditdetail')
                },

                accumerrornote: {
                    type: AccumerrornoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumerrornote')
                },

                accummaxfam: {
                    type: AccummaxfamType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accummaxfam')
                },

                accumerrorconfig: {
                    type: AccumerrorconfigType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumerrorconfig')
                },

                accummaxfamplan: {
                    type: AccummaxfamplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accummaxfamplan')
                },

                accummaxfamtx: {
                    type: AccummaxfamtxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accummaxfamtx')
                },

                accummaxindivaudit: {
                    type: AccummaxindivauditType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accummaxindivaudit')
                },

                accummaxfamtxsuppress: {
                    type: AccummaxfamtxsuppressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accummaxfamtxsuppress')
                },

                accummaxfamaudit: {
                    type: AccummaxfamauditType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accummaxfamaudit')
                },

                accummaxindiv: {
                    type: AccummaxindivType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accummaxindiv')
                },

                accumoopfam: {
                    type: AccumoopfamType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumoopfam')
                },

                accummaxindivplan: {
                    type: AccummaxindivplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accummaxindivplan')
                },

                accummaxindivtxsuppress: {
                    type: AccummaxindivtxsuppressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accummaxindivtxsuppress')
                },

                accummaxindivtx: {
                    type: AccummaxindivtxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accummaxindivtx')
                },

                accumoopfamplan: {
                    type: AccumoopfamplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumoopfamplan')
                },

                accumoopfamaudit: {
                    type: AccumoopfamauditType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumoopfamaudit')
                },

                accumoopfamtxsuppress: {
                    type: AccumoopfamtxsuppressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumoopfamtxsuppress')
                },

                accumoopindiv: {
                    type: AccumoopindivType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumoopindiv')
                },

                accumoopfamtx: {
                    type: AccumoopfamtxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumoopfamtx')
                },

                accumoopindivaudit: {
                    type: AccumoopindivauditType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumoopindivaudit')
                },

                accumoopindivtx: {
                    type: AccumoopindivtxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumoopindivtx')
                },

                accumoopindivplan: {
                    type: AccumoopindivplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumoopindivplan')
                },

                accumulatorlock: {
                    type: AccumulatorlockType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumulatorlock')
                },

                accumumauthbeddayrange: {
                    type: AccumumauthbeddayrangeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumumauthbeddayrange')
                },

                accumumauthbedday: {
                    type: AccumumauthbeddayType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumumauthbedday')
                },

                accumoopindivtxsuppress: {
                    type: AccumoopindivtxsuppressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumoopindivtxsuppress')
                },

                accumumauthoutpatient: {
                    type: AccumumauthoutpatientType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumumauthoutpatient')
                },

                accumumauthoutpatienttx: {
                    type: AccumumauthoutpatienttxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumumauthoutpatienttx')
                },

                accumumreferral: {
                    type: AccumumreferralType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumumreferral')
                },

                accumumauthservicenonfacil: {
                    type: AccumumauthservicenonfacilType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumumauthservicenonfacil')
                },

                accumumauthbeddaytx: {
                    type: AccumumauthbeddaytxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumumauthbeddaytx')
                },

                accumumreferraltx: {
                    type: AccumumreferraltxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Accumumreferraltx')
                },

                adjudscheddenycode: {
                    type: AdjudscheddenycodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Adjudscheddenycode')
                },

                adjudschedauditdetail: {
                    type: AdjudschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Adjudschedauditdetail')
                },

                adjudscheddupclaim: {
                    type: AdjudscheddupclaimType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Adjudscheddupclaim')
                },

                adaclaimsetting: {
                    type: AdaclaimsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Adaclaimsetting')
                },

                adjudschedheader: {
                    type: AdjudschedheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Adjudschedheader')
                },

                adjudschedlettercode: {
                    type: AdjudschedlettercodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Adjudschedlettercode')
                },

                adjudschedmodifier: {
                    type: AdjudschedmodifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Adjudschedmodifier')
                },

                adjudschednote: {
                    type: AdjudschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Adjudschednote')
                },

                adjudschedmemberdiff: {
                    type: AdjudschedmemberdiffType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Adjudschedmemberdiff')
                },

                adjudschedgencode: {
                    type: AdjudschedgencodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Adjudschedgencode')
                },

                adjudschedpendtemplate: {
                    type: AdjudschedpendtemplateType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Adjudschedpendtemplate')
                },

                adjudschedpendtemplatevc: {
                    type: AdjudschedpendtemplatevcType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Adjudschedpendtemplatevc')
                },

                adjudschedoverridecode: {
                    type: AdjudschedoverridecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Adjudschedoverridecode')
                },

                adjudschedproviderdiff: {
                    type: AdjudschedproviderdiffType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Adjudschedproviderdiff')
                },

                adjudschedrevenuecategory: {
                    type: AdjudschedrevenuecategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Adjudschedrevenuecategory')
                },

                adjudschedroutecode: {
                    type: AdjudschedroutecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Adjudschedroutecode')
                },

                adjudschedsettingsaccount: {
                    type: AdjudschedsettingsaccountType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Adjudschedsettingsaccount')
                },

                adjudschedsettingsbenefit: {
                    type: AdjudschedsettingsbenefitType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Adjudschedsettingsbenefit')
                },

                adjudschedrelcoderestriction: {
                    type: AdjudschedrelcoderestrictionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Adjudschedrelcoderestriction')
                },

                adjudschedsettingsmemgroup: {
                    type: AdjudschedsettingsmemgroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Adjudschedsettingsmemgroup')
                },

                adjudschedulecob: {
                    type: AdjudschedulecobType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Adjudschedulecob')
                },

                adjudschedtpldiagcategory: {
                    type: AdjudschedtpldiagcategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Adjudschedtpldiagcategory')
                },

                agegendersched: {
                    type: AgegenderschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Agegendersched')
                },

                adjudschedule: {
                    type: AdjudscheduleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Adjudschedule')
                },

                adjudschedrx: {
                    type: AdjudschedrxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Adjudschedrx')
                },

                adjudschedsettingssystem: {
                    type: AdjudschedsettingssystemType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Adjudschedsettingssystem')
                },

                agegenderschednote: {
                    type: AgegenderschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Agegenderschednote')
                },

                agegenderschedauditdetail: {
                    type: AgegenderschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Agegenderschedauditdetail')
                },

                ambulancecomp: {
                    type: AmbulancecompType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ambulancecomp')
                },

                ambulancecompauditdetail: {
                    type: AmbulancecompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ambulancecompauditdetail')
                },

                altartransactiondesc: {
                    type: AltartransactiondescType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Altartransactiondesc')
                },

                ambulancecompdetailmod: {
                    type: AmbulancecompdetailmodType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ambulancecompdetailmod')
                },

                ambulancecompdetail: {
                    type: AmbulancecompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ambulancecompdetail')
                },

                ambulancecompnote: {
                    type: AmbulancecompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ambulancecompnote')
                },

                ambulancecompdetailregion: {
                    type: AmbulancecompdetailregionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ambulancecompdetailregion')
                },

                ambulancecomphold: {
                    type: AmbulancecompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ambulancecomphold')
                },

                anesthesiacomp: {
                    type: AnesthesiacompType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Anesthesiacomp')
                },

                ambulancemodifier: {
                    type: AmbulancemodifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ambulancemodifier')
                },

                anesthesiacompdetail: {
                    type: AnesthesiacompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Anesthesiacompdetail')
                },

                anesthesiacompauditdetail: {
                    type: AnesthesiacompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Anesthesiacompauditdetail')
                },

                anesthesiacomphold: {
                    type: AnesthesiacompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Anesthesiacomphold')
                },

                anesthesiacompnote: {
                    type: AnesthesiacompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Anesthesiacompnote')
                },

                anesthesiacompdetailmod: {
                    type: AnesthesiacompdetailmodType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Anesthesiacompdetailmod')
                },

                anesthesiaphysicalstatusmod: {
                    type: AnesthesiaphysicalstatusmodType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Anesthesiaphysicalstatusmod')
                },

                anesthesiamodifier: {
                    type: AnesthesiamodifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Anesthesiamodifier')
                },

                apcbasefileuploaddetail: {
                    type: ApcbasefileuploaddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Apcbasefileuploaddetail')
                },

                apcbasefileuploadheader: {
                    type: ApcbasefileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Apcbasefileuploadheader')
                },

                anesthmodifiercompassign: {
                    type: AnesthmodifiercompassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Anesthmodifiercompassign')
                },

                apccodeheader: {
                    type: ApccodeheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Apccodeheader')
                },

                apccodedetail: {
                    type: ApccodedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Apccodedetail')
                },

                apgenerationresponse: {
                    type: ApgenerationresponseType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Apgenerationresponse')
                },

                apidefaultpricingcomporder: {
                    type: ApidefaultpricingcomporderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Apidefaultpricingcomporder')
                },

                approveddestination: {
                    type: ApproveddestinationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Approveddestination')
                },

                aptransaction: {
                    type: AptransactionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Aptransaction')
                },

                apcprocgrouper: {
                    type: ApcprocgrouperType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Apcprocgrouper')
                },

                aptransactionattribset: {
                    type: AptransactionattribsetType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Aptransactionattribset')
                },

                aptransactionattrib: {
                    type: AptransactionattribType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Aptransactionattrib')
                },

                aptransactionaccumsnapshot: {
                    type: AptransactionaccumsnapshotType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Aptransactionaccumsnapshot')
                },

                aptransactionattribtag: {
                    type: AptransactionattribtagType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Aptransactionattribtag')
                },

                aptransactiondetail: {
                    type: AptransactiondetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Aptransactiondetail')
                },

                aptransactionauditdetail: {
                    type: AptransactionauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Aptransactionauditdetail')
                },

                aptransactionattribsetglstring: {
                    type: AptransactionattribsetglstringType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Aptransactionattribsetglstring')
                },

                aptransactionop: {
                    type: AptransactionopType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Aptransactionop')
                },

                aptransactiontype: {
                    type: AptransactiontypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Aptransactiontype')
                },

                aptransactioninterest: {
                    type: AptransactioninterestType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Aptransactioninterest')
                },

                arcreditreceipt: {
                    type: ArcreditreceiptType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Arcreditreceipt')
                },

                aptransactionrecipient: {
                    type: AptransactionrecipientType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Aptransactionrecipient')
                },

                aptransactionsurcharge: {
                    type: AptransactionsurchargeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Aptransactionsurcharge')
                },

                aptransactionremark: {
                    type: AptransactionremarkType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Aptransactionremark')
                },

                aptransactionnote: {
                    type: AptransactionnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Aptransactionnote')
                },

                aptransactionreduction: {
                    type: AptransactionreductionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Aptransactionreduction')
                },

                artransactionauditdetail: {
                    type: ArtransactionauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Artransactionauditdetail')
                },

                artransactiondetail: {
                    type: ArtransactiondetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Artransactiondetail')
                },

                artransactionnote: {
                    type: ArtransactionnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Artransactionnote')
                },

                armax: {
                    type: ArmaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Armax')
                },

                aptransactiontag: {
                    type: AptransactiontagType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Aptransactiontag')
                },

                aptransactionoprecover: {
                    type: AptransactionoprecoverType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Aptransactionoprecover')
                },

                artransactionheader: {
                    type: ArtransactionheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Artransactionheader')
                },

                artransactiontype: {
                    type: ArtransactiontypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Artransactiontype')
                },

                asacpt: {
                    type: AsacptType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Asacpt')
                },

                artransactionnotedetail: {
                    type: ArtransactionnotedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Artransactionnotedetail')
                },

                assignpassthrucomp: {
                    type: AssignpassthrucompType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Assignpassthrucomp')
                },

                auditerrorsource: {
                    type: AuditerrorsourceType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Auditerrorsource')
                },

                assignoutliercomp: {
                    type: AssignoutliercompType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Assignoutliercomp')
                },

                auditerrorcode: {
                    type: AuditerrorcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Auditerrorcode')
                },

                assignfallthrucomp: {
                    type: AssignfallthrucompType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Assignfallthrucomp')
                },

                auditerrorvrcode: {
                    type: AuditerrorvrcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Auditerrorvrcode')
                },

                authdecactionschedauditdetail: {
                    type: AuthdecactionschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Authdecactionschedauditdetail')
                },

                auditsampletype: {
                    type: AuditsampletypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Auditsampletype')
                },

                authdecactionschednote: {
                    type: AuthdecactionschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Authdecactionschednote')
                },

                authdecisionaction: {
                    type: AuthdecisionactionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Authdecisionaction')
                },

                authdecisionactiontrigger: {
                    type: AuthdecisionactiontriggerType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Authdecisionactiontrigger')
                },

                authdecisioncode: {
                    type: AuthdecisioncodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Authdecisioncode')
                },

                authmatchingsched: {
                    type: AuthmatchingschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Authmatchingsched')
                },

                authprogramauthcharorder: {
                    type: AuthprogramauthcharorderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Authprogramauthcharorder')
                },

                authdecisionactionschedule: {
                    type: AuthdecisionactionscheduleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Authdecisionactionschedule')
                },

                authmatchingschedauditdetail: {
                    type: AuthmatchingschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Authmatchingschedauditdetail')
                },

                authmatchingschednote: {
                    type: AuthmatchingschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Authmatchingschednote')
                },

                authprogramprocdiagnosis: {
                    type: AuthprogramprocdiagnosisType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Authprogramprocdiagnosis')
                },

                authprogramprocedure: {
                    type: AuthprogramprocedureType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Authprogramprocedure')
                },

                authprogramauthservicetype: {
                    type: AuthprogramauthservicetypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Authprogramauthservicetype')
                },

                authprogramtype: {
                    type: AuthprogramtypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Authprogramtype')
                },

                authprogramdiagnosis: {
                    type: AuthprogramdiagnosisType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Authprogramdiagnosis')
                },

                authprogramauthproccodematch: {
                    type: AuthprogramauthproccodematchType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Authprogramauthproccodematch')
                },

                autocontribqueue: {
                    type: AutocontribqueueType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Autocontribqueue')
                },

                bankaccount: {
                    type: BankaccountType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Bankaccount')
                },

                bankaccounttype: {
                    type: BankaccounttypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Bankaccounttype')
                },

                bankacctbalance: {
                    type: BankacctbalanceType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Bankacctbalance')
                },

                bank: {
                    type: BankType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Bank')
                },

                bankacctcredit: {
                    type: BankacctcreditType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Bankacctcredit')
                },

                bankacctdebit: {
                    type: BankacctdebitType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Bankacctdebit')
                },

                bankauditdetail: {
                    type: BankauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Bankauditdetail')
                },

                bankbranch: {
                    type: BankbranchType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Bankbranch')
                },

                bankacctcreditline: {
                    type: BankacctcreditlineType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Bankacctcreditline')
                },

                bankcontactaddress: {
                    type: BankcontactaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Bankcontactaddress')
                },

                bankcontactname: {
                    type: BankcontactnameType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Bankcontactname')
                },

                bankcontactphone: {
                    type: BankcontactphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Bankcontactphone')
                },

                bankdepartmenthour: {
                    type: BankdepartmenthourType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Bankdepartmenthour')
                },

                bankdepartmentaddress: {
                    type: BankdepartmentaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Bankdepartmentaddress')
                },

                bankcontactdepartment: {
                    type: BankcontactdepartmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Bankcontactdepartment')
                },

                banknote: {
                    type: BanknoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Banknote')
                },

                banknotedetail: {
                    type: BanknotedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Banknotedetail')
                },

                bankworkhour: {
                    type: BankworkhourType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Bankworkhour')
                },

                bankrouting: {
                    type: BankroutingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Bankrouting')
                },

                bankdepartmentphone: {
                    type: BankdepartmentphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Bankdepartmentphone')
                },

                bbField: {
                    type: BbFieldType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('BbField')
                },

                bbTable: {
                    type: BbTableType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('BbTable')
                },

                bbMessage: {
                    type: BbMessageType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('BbMessage')
                },

                bbTableField: {
                    type: BbTableFieldType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('BbTableField')
                },

                batchentrylog: {
                    type: BatchentrylogType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Batchentrylog')
                },

                beddayschedule: {
                    type: BeddayscheduleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Beddayschedule')
                },

                beddayscheduledetail: {
                    type: BeddayscheduledetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Beddayscheduledetail')
                },

                beddayscheduledetailrev: {
                    type: BeddayscheduledetailrevType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Beddayscheduledetailrev')
                },

                beddayscheduleauditdetail: {
                    type: BeddayscheduleauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Beddayscheduleauditdetail')
                },

                beddayschedulenote: {
                    type: BeddayschedulenoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Beddayschedulenote')
                },

                beneaccumbypass: {
                    type: BeneaccumbypassType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Beneaccumbypass')
                },

                beneaccumbypassref: {
                    type: BeneaccumbypassrefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Beneaccumbypassref')
                },

                benebaserate: {
                    type: BenebaserateType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benebaserate')
                },

                beneaccumbypassperiod: {
                    type: BeneaccumbypassperiodType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Beneaccumbypassperiod')
                },

                beneaccumbypasstier: {
                    type: BeneaccumbypasstierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Beneaccumbypasstier')
                },

                benecobemploystatus: {
                    type: BenecobemploystatusType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benecobemploystatus')
                },

                beneauditdetail: {
                    type: BeneauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Beneauditdetail')
                },

                benecoderelationship: {
                    type: BenecoderelationshipType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benecoderelationship')
                },

                benecodeservicetypecode: {
                    type: BenecodeservicetypecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benecodeservicetypecode')
                },

                benecodestate: {
                    type: BenecodestateType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benecodestate')
                },

                benecodeadj: {
                    type: BenecodeadjType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Benecodeadj')
                },

                benecompositelimit: {
                    type: BenecompositelimitType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benecompositelimit')
                },

                benecoveragecondition: {
                    type: BenecoverageconditionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Benecoveragecondition')
                },

                benedeductible: {
                    type: BenedeductibleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benedeductible')
                },

                benecodesuppl: {
                    type: BenecodesupplType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Benecodesuppl')
                },

                benedeductibleperiod: {
                    type: BenedeductibleperiodType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benedeductibleperiod')
                },

                benedeductibleref: {
                    type: BenedeductiblerefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benedeductibleref')
                },

                beneexternalid: {
                    type: BeneexternalidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Beneexternalid')
                },

                benefitbundleccbypassgroup: {
                    type: BenefitbundleccbypassgroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleccbypassgroup')
                },

                benedeductiblefamily: {
                    type: BenedeductiblefamilyType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benedeductiblefamily')
                },

                benedeductibletier: {
                    type: BenedeductibletierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benedeductibletier')
                },

                benefitbundleactuarialvalue: {
                    type: BenefitbundleactuarialvalueType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleactuarialvalue')
                },

                benefitbundlebaserate: {
                    type: BenefitbundlebaserateType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlebaserate')
                },

                benefitbundlebillingset: {
                    type: BenefitbundlebillingsetType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlebillingset')
                },

                benefitbundle: {
                    type: BenefitbundleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundle')
                },

                benefitbundleauditdetail: {
                    type: BenefitbundleauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleauditdetail')
                },

                benefitbundleccdedgroup: {
                    type: BenefitbundleccdedgroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleccdedgroup')
                },

                benefitbundleccbypassplan: {
                    type: BenefitbundleccbypassplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleccbypassplan')
                },

                benefitbundleccmaxgroup: {
                    type: BenefitbundleccmaxgroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleccmaxgroup')
                },

                benefitbundleccdedplan: {
                    type: BenefitbundleccdedplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleccdedplan')
                },

                benefitbundleccoopgroup: {
                    type: BenefitbundleccoopgroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleccoopgroup')
                },

                benefitbundleccmaxplan: {
                    type: BenefitbundleccmaxplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleccmaxplan')
                },

                benefitbundlecontrolplanded: {
                    type: BenefitbundlecontrolplandedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlecontrolplanded')
                },

                benefitbundlecontrolplanbypass: {
                    type: BenefitbundlecontrolplanbypassType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlecontrolplanbypass')
                },

                benefitbundlecontrolplanoop: {
                    type: BenefitbundlecontrolplanoopType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlecontrolplanoop')
                },

                benefitbundleccoopplan: {
                    type: BenefitbundleccoopplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleccoopplan')
                },

                benefitbundlecontrolplanmax: {
                    type: BenefitbundlecontrolplanmaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlecontrolplanmax')
                },

                benefitbundlemsaoption: {
                    type: BenefitbundlemsaoptionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlemsaoption')
                },

                benefitbundleextid: {
                    type: BenefitbundleextidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleextid')
                },

                benefitbundlecrosscontrolaccum: {
                    type: BenefitbundlecrosscontrolaccumType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlecrosscontrolaccum')
                },

                benefitbundlenote: {
                    type: BenefitbundlenoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlenote')
                },

                benefitbundlemsaplan: {
                    type: BenefitbundlemsaplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlemsaplan')
                },

                benefitbundleoption: {
                    type: BenefitbundleoptionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleoption')
                },

                benefitbundleoptionextid: {
                    type: BenefitbundleoptionextidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleoptionextid')
                },

                benefitbundleoonpricingadjust: {
                    type: BenefitbundleoonpricingadjustType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleoonpricingadjust')
                },

                benefitbundleplan: {
                    type: BenefitbundleplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleplan')
                },

                benefitbundlerideroption: {
                    type: BenefitbundlerideroptionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlerideroption')
                },

                benefitbundleriderplan: {
                    type: BenefitbundleriderplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleriderplan')
                },

                benefitbundleplanaccum: {
                    type: BenefitbundleplanaccumType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleplanaccum')
                },

                benefitbundleserviceplan: {
                    type: BenefitbundleserviceplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleserviceplan')
                },

                benefitbundlestandardcompid: {
                    type: BenefitbundlestandardcompidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlestandardcompid')
                },

                benefitbundleserviceoption: {
                    type: BenefitbundleserviceoptionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleserviceoption')
                },

                benefitbundleutilizationplan: {
                    type: BenefitbundleutilizationplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleutilizationplan')
                },

                benefitbundlevalidation: {
                    type: BenefitbundlevalidationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundlevalidation')
                },

                benefitbundleutilizationopt: {
                    type: BenefitbundleutilizationoptType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitbundleutilizationopt')
                },

                benefitcode: {
                    type: BenefitcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitcode')
                },

                benefitfulfillmenttext: {
                    type: BenefitfulfillmenttextType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitfulfillmenttext')
                },

                benefitfulfillmenttextperiod: {
                    type: BenefitfulfillmenttextperiodType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitfulfillmenttextperiod')
                },

                benefitfulfillmenttextnote: {
                    type: BenefitfulfillmenttextnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitfulfillmenttextnote')
                },

                benefitplan: {
                    type: BenefitplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitplan')
                },

                benefitcodemerchantcatcode: {
                    type: BenefitcodemerchantcatcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitcodemerchantcatcode')
                },

                benefitfulfillmenttexttype: {
                    type: BenefitfulfillmenttexttypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitfulfillmenttexttype')
                },

                benefitplantradingded: {
                    type: BenefitplantradingdedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitplantradingded')
                },

                benefitplantradingpartner: {
                    type: BenefitplantradingpartnerType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitplantradingpartner')
                },

                benefitplantradingoop: {
                    type: BenefitplantradingoopType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefitplantradingoop')
                },

                benefitplancode: {
                    type: BenefitplancodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Benefitplancode')
                },

                benefittypestack: {
                    type: BenefittypestackType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefittypestack')
                },

                benefulfillmenttextauditdetail: {
                    type: BenefulfillmenttextauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benefulfillmenttextauditdetail')
                },

                benelangschedtextauditdetail: {
                    type: BenelangschedtextauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benelangschedtextauditdetail')
                },

                benelanguagesched: {
                    type: BenelanguageschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benelanguagesched')
                },

                benelangschedtextsvctypecode: {
                    type: BenelangschedtextsvctypecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benelangschedtextsvctypecode')
                },

                benefitssetting: {
                    type: BenefitssettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Benefitssetting')
                },

                benelanguageschedauditdetail: {
                    type: BenelanguageschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benelanguageschedauditdetail')
                },

                benelanguageschedassign: {
                    type: BenelanguageschedassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benelanguageschedassign')
                },

                benelanguageschedtext: {
                    type: BenelanguageschedtextType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benelanguageschedtext')
                },

                benelanguageschednote: {
                    type: BenelanguageschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benelanguageschednote')
                },

                benelanguageschedtexttype: {
                    type: BenelanguageschedtexttypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benelanguageschedtexttype')
                },

                benelanguagevariablecode: {
                    type: BenelanguagevariablecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benelanguagevariablecode')
                },

                benemax: {
                    type: BenemaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benemax')
                },

                benelanguagevariablefulfillapp: {
                    type: BenelanguagevariablefulfillappType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benelanguagevariablefulfillapp')
                },

                benelanguageschedtextrelcode: {
                    type: BenelanguageschedtextrelcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benelanguageschedtextrelcode')
                },

                benemaxperiod: {
                    type: BenemaxperiodType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benemaxperiod')
                },

                benemaxref: {
                    type: BenemaxrefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benemaxref')
                },

                benemaxtier: {
                    type: BenemaxtierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benemaxtier')
                },

                benenetworkbaserate: {
                    type: BenenetworkbaserateType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benenetworkbaserate')
                },

                benemaxperiodprocedure: {
                    type: BenemaxperiodprocedureType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benemaxperiodprocedure')
                },

                benenote: {
                    type: BenenoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benenote')
                },

                beneoverride: {
                    type: BeneoverrideType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Beneoverride')
                },

                beneplanactuarialvalue: {
                    type: BeneplanactuarialvalueType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Beneplanactuarialvalue')
                },

                benenetworksched: {
                    type: BenenetworkschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benenetworksched')
                },

                beneplanphonenumber: {
                    type: BeneplanphonenumberType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Beneplanphonenumber')
                },

                beneplanaddress: {
                    type: BeneplanaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Beneplanaddress')
                },

                beneplansetting: {
                    type: BeneplansettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Beneplansetting')
                },

                beneporcelainlimit: {
                    type: BeneporcelainlimitType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Beneporcelainlimit')
                },

                benestoplossoop: {
                    type: BenestoplossoopType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benestoplossoop')
                },

                benestoplossoopperiod: {
                    type: BenestoplossoopperiodType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benestoplossoopperiod')
                },

                benestoplossfamily: {
                    type: BenestoplossfamilyType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benestoplossfamily')
                },

                beneplanrelationship: {
                    type: BeneplanrelationshipType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Beneplanrelationship')
                },

                benestandardcompid: {
                    type: BenestandardcompidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benestandardcompid')
                },

                benetier: {
                    type: BenetierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benetier')
                },

                benestoplossref: {
                    type: BenestoplossrefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benestoplossref')
                },

                benestoplosstier: {
                    type: BenestoplosstierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benestoplosstier')
                },

                benetierprov: {
                    type: BenetierprovType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benetierprov')
                },

                benetiernetwork: {
                    type: BenetiernetworkType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benetiernetwork')
                },

                benewaiveref: {
                    type: BenewaiverefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benewaiveref')
                },

                billingsched: {
                    type: BillingschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Billingsched')
                },

                billingschedauditdetail: {
                    type: BillingschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Billingschedauditdetail')
                },

                billingschedagegender: {
                    type: BillingschedagegenderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Billingschedagegender')
                },

                benevalidation: {
                    type: BenevalidationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Benevalidation')
                },

                billingschedfudslevel: {
                    type: BillingschedfudslevelType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Billingschedfudslevel')
                },

                billingschednote: {
                    type: BillingschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Billingschednote')
                },

                billingset: {
                    type: BillingsetType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Billingset')
                },

                billingschedentity: {
                    type: BillingschedentityType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Billingschedentity')
                },

                billingschedmodifier: {
                    type: BillingschedmodifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Billingschedmodifier')
                },

                billingsetnote: {
                    type: BillingsetnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Billingsetnote')
                },

                billtypecategory: {
                    type: BilltypecategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Billtypecategory')
                },

                billtypesetcatdetail: {
                    type: BilltypesetcatdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Billtypesetcatdetail')
                },

                billingsetauditdetail: {
                    type: BillingsetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Billingsetauditdetail')
                },

                billitemtype: {
                    type: BillitemtypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Billitemtype')
                },

                billingsetschedassign: {
                    type: BillingsetschedassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Billingsetschedassign')
                },

                billtype: {
                    type: BilltypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Billtype')
                },

                billtypeset: {
                    type: BilltypesetType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Billtypeset')
                },

                billtypesetauditdetail: {
                    type: BilltypesetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Billtypesetauditdetail')
                },

                billtypesetcat: {
                    type: BilltypesetcatType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Billtypesetcat')
                },

                billtypecategorydefinition: {
                    type: BilltypecategorydefinitionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Billtypecategorydefinition')
                },

                brandingentity: {
                    type: BrandingentityType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Brandingentity')
                },

                billtypesetcatdetaildef: {
                    type: BilltypesetcatdetaildefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Billtypesetcatdetaildef')
                },

                capmodifier: {
                    type: CapmodifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Capmodifier')
                },

                capschedauditdetail: {
                    type: CapschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Capschedauditdetail')
                },

                capagegender: {
                    type: CapagegenderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Capagegender')
                },

                capschednotedetail: {
                    type: CapschednotedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Capschednotedetail')
                },

                capschedule: {
                    type: CapscheduleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Capschedule')
                },

                capsetassignment: {
                    type: CapsetassignmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Capsetassignment')
                },

                capschednote: {
                    type: CapschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Capschednote')
                },

                carrier: {
                    type: CarrierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Carrier')
                },

                carrierauditdetail: {
                    type: CarrierauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Carrierauditdetail')
                },

                capset: {
                    type: CapsetType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Capset')
                },

                carriercontactdepartment: {
                    type: CarriercontactdepartmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Carriercontactdepartment')
                },

                carriercontactaddress: {
                    type: CarriercontactaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Carriercontactaddress')
                },

                carriercontactname: {
                    type: CarriercontactnameType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Carriercontactname')
                },

                carriercontactphone: {
                    type: CarriercontactphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Carriercontactphone')
                },

                carrierdepartmentaddress: {
                    type: CarrierdepartmentaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Carrierdepartmentaddress')
                },

                carrierdepartmentphone: {
                    type: CarrierdepartmentphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Carrierdepartmentphone')
                },

                carrierextid: {
                    type: CarrierextidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Carrierextid')
                },

                carrierdepartmenthour: {
                    type: CarrierdepartmenthourType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Carrierdepartmenthour')
                },

                carrierlobplan: {
                    type: CarrierlobplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Carrierlobplan')
                },

                carrierhiosissuerid: {
                    type: CarrierhiosissueridType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Carrierhiosissuerid')
                },

                carrierlobauditdetail: {
                    type: CarrierlobauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Carrierlobauditdetail')
                },

                carrierlobproduct: {
                    type: CarrierlobproductType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Carrierlobproduct')
                },

                carrierfein: {
                    type: CarrierfeinType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Carrierfein')
                },

                carrierlineofbusiness: {
                    type: CarrierlineofbusinessType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Carrierlineofbusiness')
                },

                carriernote: {
                    type: CarriernoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Carriernote')
                },

                carrierlobpermit: {
                    type: CarrierlobpermitType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Carrierlobpermit')
                },

                carrierworkhour: {
                    type: CarrierworkhourType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Carrierworkhour')
                },

                carryovererrorqueue: {
                    type: CarryovererrorqueueType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Carryovererrorqueue')
                },

                claaccount: {
                    type: ClaaccountType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claaccount')
                },

                carrierstate: {
                    type: CarrierstateType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Carrierstate')
                },

                cislBatchprocess: {
                    type: CislBatchprocessType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('CislBatchprocess')
                },

                claaccountexpense: {
                    type: ClaaccountexpenseType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claaccountexpense')
                },

                carrierservice: {
                    type: CarrierserviceType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Carrierservice')
                },

                carriernotedetail: {
                    type: CarriernotedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Carriernotedetail')
                },

                cislBatchprocesstype: {
                    type: CislBatchprocesstypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('CislBatchprocesstype')
                },

                claacctbaltimeline: {
                    type: ClaacctbaltimelineType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Claacctbaltimeline')
                },

                clabenefit: {
                    type: ClabenefitType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clabenefit')
                },

                clabenefitallowed: {
                    type: ClabenefitallowedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clabenefitallowed')
                },

                carrierurl: {
                    type: CarrierurlType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Carrierurl')
                },

                clabenefitauthreferral: {
                    type: ClabenefitauthreferralType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clabenefitauthreferral')
                },

                clabenefitauthreferralmatch: {
                    type: ClabenefitauthreferralmatchType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clabenefitauthreferralmatch')
                },

                claacctbaltimelinehx: {
                    type: ClaacctbaltimelinehxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Claacctbaltimelinehx')
                },

                claaccounthealth: {
                    type: ClaaccounthealthType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claaccounthealth')
                },

                clabenefitcode: {
                    type: ClabenefitcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clabenefitcode')
                },

                clabenefitcob: {
                    type: ClabenefitcobType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clabenefitcob')
                },

                clabenefitcopayment: {
                    type: ClabenefitcopaymentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clabenefitcopayment')
                },

                clabenefitdeductible: {
                    type: ClabenefitdeductibleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clabenefitdeductible')
                },

                clabenefitdelegation: {
                    type: ClabenefitdelegationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clabenefitdelegation')
                },

                clabenefitcoinsurance: {
                    type: ClabenefitcoinsuranceType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clabenefitcoinsurance')
                },

                clabenefiteocaction: {
                    type: ClabenefiteocactionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clabenefiteocaction')
                },

                clabenefitproviderflag: {
                    type: ClabenefitproviderflagType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clabenefitproviderflag')
                },

                clabenefituseroverridebcrr: {
                    type: ClabenefituseroverridebcrrType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clabenefituseroverridebcrr')
                },

                cladofr: {
                    type: CladofrType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cladofr')
                },

                clabenefitwithhold: {
                    type: ClabenefitwithholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clabenefitwithhold')
                },

                clabenefitfiling: {
                    type: ClabenefitfilingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clabenefitfiling')
                },

                clabenefitmaximum: {
                    type: ClabenefitmaximumType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clabenefitmaximum')
                },

                clabenefitoverpay: {
                    type: ClabenefitoverpayType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clabenefitoverpay')
                },

                clabenefituseroverride: {
                    type: ClabenefituseroverrideType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clabenefituseroverride')
                },

                cladeny: {
                    type: CladenyType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cladeny')
                },

                claeocrelatedlog: {
                    type: ClaeocrelatedlogType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claeocrelatedlog')
                },

                claimambulance: {
                    type: ClaimambulanceType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimambulance')
                },

                clabenefitprovider: {
                    type: ClabenefitproviderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clabenefitprovider')
                },

                claeocrelatedlogoverride: {
                    type: ClaeocrelatedlogoverrideType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claeocrelatedlogoverride')
                },

                claimauditbilltype: {
                    type: ClaimauditbilltypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimauditbilltype')
                },

                claimauditbenefit: {
                    type: ClaimauditbenefitType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimauditbenefit')
                },

                claeoctriggerlog: {
                    type: ClaeoctriggerlogType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claeoctriggerlog')
                },

                clabenefituseroverridewaivemax: {
                    type: ClabenefituseroverridewaivemaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clabenefituseroverridewaivemax')
                },

                claimauditdisposition: {
                    type: ClaimauditdispositionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimauditdisposition')
                },

                claimaccident: {
                    type: ClaimaccidentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimaccident')
                },

                claimattachment: {
                    type: ClaimattachmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimattachment')
                },

                claimauditexternalrequest: {
                    type: ClaimauditexternalrequestType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimauditexternalrequest')
                },

                claimauditdeleg: {
                    type: ClaimauditdelegType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimauditdeleg')
                },

                claimauditcovsequence: {
                    type: ClaimauditcovsequenceType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimauditcovsequence')
                },

                claimauditdiagnosis: {
                    type: ClaimauditdiagnosisType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimauditdiagnosis')
                },

                claimauditmodifier: {
                    type: ClaimauditmodifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimauditmodifier')
                },

                claimauditnetwork: {
                    type: ClaimauditnetworkType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimauditnetwork')
                },

                claimauditpricingmethod: {
                    type: ClaimauditpricingmethodType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimauditpricingmethod')
                },

                claimauditprocedure: {
                    type: ClaimauditprocedureType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimauditprocedure')
                },

                claimauditpo: {
                    type: ClaimauditpoType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimauditpo')
                },

                claimauditproviderspecialty: {
                    type: ClaimauditproviderspecialtyType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimauditproviderspecialty')
                },

                claimauditprovider: {
                    type: ClaimauditproviderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimauditprovider')
                },

                claimauditsched: {
                    type: ClaimauditschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimauditsched')
                },

                claimauditschedsetting: {
                    type: ClaimauditschedsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimauditschedsetting')
                },

                claimaudittype: {
                    type: ClaimaudittypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimaudittype')
                },

                claimauditstate: {
                    type: ClaimauditstateType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimauditstate')
                },

                claimaudituser: {
                    type: ClaimaudituserType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimaudituser')
                },

                claimauditschedauditdetail: {
                    type: ClaimauditschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimauditschedauditdetail')
                },

                claimauditschedrule: {
                    type: ClaimauditschedruleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimauditschedrule')
                },

                claimclinic: {
                    type: ClaimclinicType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimclinic')
                },

                claimcarrier: {
                    type: ClaimcarrierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Claimcarrier')
                },

                claimauditrevenue: {
                    type: ClaimauditrevenueType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimauditrevenue')
                },

                claimcliniceditdiagnosis: {
                    type: ClaimcliniceditdiagnosisType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimcliniceditdiagnosis')
                },

                claimclinicedit: {
                    type: ClaimcliniceditType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimclinicedit')
                },

                claimcobadjudication: {
                    type: ClaimcobadjudicationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimcobadjudication')
                },

                claimcobadjustment: {
                    type: ClaimcobadjustmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimcobadjustment')
                },

                claimcliniceditflag: {
                    type: ClaimcliniceditflagType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimcliniceditflag')
                },

                claimcobheader: {
                    type: ClaimcobheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimcobheader')
                },

                claimcobinfo: {
                    type: ClaimcobinfoType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimcobinfo')
                },

                claimcobcontract: {
                    type: ClaimcobcontractType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimcobcontract')
                },

                claimcobmedicare: {
                    type: ClaimcobmedicareType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimcobmedicare')
                },

                claimcobothersubscriber: {
                    type: ClaimcobothersubscriberType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimcobothersubscriber')
                },

                claimcompositeblob: {
                    type: ClaimcompositeblobType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimcompositeblob')
                },

                claimcobprovsecondaryid: {
                    type: ClaimcobprovsecondaryidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimcobprovsecondaryid')
                },

                claimcobline: {
                    type: ClaimcoblineType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimcobline')
                },

                claimcobpayer: {
                    type: ClaimcobpayerType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimcobpayer')
                },

                claimcontact: {
                    type: ClaimcontactType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimcontact')
                },

                claimdentalortho: {
                    type: ClaimdentalorthoType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimdentalortho')
                },

                claimcondition: {
                    type: ClaimconditionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimcondition')
                },

                claimdentalprosth: {
                    type: ClaimdentalprosthType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimdentalprosth')
                },

                claimedit: {
                    type: ClaimeditType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimedit')
                },

                claimedithx: {
                    type: ClaimedithxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimedithx')
                },

                claimeditintermediate: {
                    type: ClaimeditintermediateType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimeditintermediate')
                },

                claimdiagnosis: {
                    type: ClaimdiagnosisType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Claimdiagnosis')
                },

                claimefstx: {
                    type: ClaimefstxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimefstx')
                },

                claimenvelope: {
                    type: ClaimenvelopeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimenvelope')
                },

                claimeditsummary: {
                    type: ClaimeditsummaryType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimeditsummary')
                },

                claimenvmatchedclaim: {
                    type: ClaimenvmatchedclaimType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimenvmatchedclaim')
                },

                claimeventpromptpay: {
                    type: ClaimeventpromptpayType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimeventpromptpay')
                },

                claimevent: {
                    type: ClaimeventType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimevent')
                },

                claimfileinfo: {
                    type: ClaimfileinfoType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimfileinfo')
                },

                claimheader: {
                    type: ClaimheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimheader')
                },

                claimeventuncleantime: {
                    type: ClaimeventuncleantimeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimeventuncleantime')
                },

                claimheaderauditdetail: {
                    type: ClaimheaderauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimheaderauditdetail')
                },

                claimheadericp: {
                    type: ClaimheadericpType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimheadericp')
                },

                claimheaderdental: {
                    type: ClaimheaderdentalType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimheaderdental')
                },

                claimheadernote: {
                    type: ClaimheadernoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimheadernote')
                },

                claimheadericpdeny: {
                    type: ClaimheadericpdenyType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimheadericpdeny')
                },

                claimheadercob: {
                    type: ClaimheadercobType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimheadercob')
                },

                claimheaderinst: {
                    type: ClaimheaderinstType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimheaderinst')
                },

                claimheaderrx: {
                    type: ClaimheaderrxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimheaderrx')
                },

                claimheadersuperbill: {
                    type: ClaimheadersuperbillType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimheadersuperbill')
                },

                claiminstpayer: {
                    type: ClaiminstpayerType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claiminstpayer')
                },

                claiminstoccur: {
                    type: ClaiminstoccurType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Claiminstoccur')
                },

                claiminstproc: {
                    type: ClaiminstprocType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Claiminstproc')
                },

                claiminstvalue: {
                    type: ClaiminstvalueType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Claiminstvalue')
                },

                claimheaderprof: {
                    type: ClaimheaderprofType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimheaderprof')
                },

                claimlineadjudication: {
                    type: ClaimlineadjudicationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimlineadjudication')
                },

                claiminstcond: {
                    type: ClaiminstcondType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Claiminstcond')
                },

                claimlineevent: {
                    type: ClaimlineeventType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimlineevent')
                },

                claiminst81Cc: {
                    type: Claiminst81CcType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claiminst81Cc')
                },

                claiminstoccurspan: {
                    type: ClaiminstoccurspanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Claiminstoccurspan')
                },

                claimhealthinformation: {
                    type: ClaimhealthinformationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimhealthinformation')
                },

                claimlinecob: {
                    type: ClaimlinecobType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Claimlinecob')
                },

                claimlinedental: {
                    type: ClaimlinedentalType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Claimlinedental')
                },

                claimlineicp: {
                    type: ClaimlineicpType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Claimlineicp')
                },

                claimlineexpense: {
                    type: ClaimlineexpenseType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Claimlineexpense')
                },

                claimlineinst: {
                    type: ClaimlineinstType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Claimlineinst')
                },

                claimlineicpdeny: {
                    type: ClaimlineicpdenyType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimlineicpdeny')
                },

                claimlinepredetermination: {
                    type: ClaimlinepredeterminationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimlinepredetermination')
                },

                claimlineprof: {
                    type: ClaimlineprofType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Claimlineprof')
                },

                claimlinepriorauth: {
                    type: ClaimlinepriorauthType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimlinepriorauth')
                },

                claimlineprofanesthesia: {
                    type: ClaimlineprofanesthesiaType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Claimlineprofanesthesia')
                },

                claimlinemap: {
                    type: ClaimlinemapType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimlinemap')
                },

                claimlineprofdme: {
                    type: ClaimlineprofdmeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Claimlineprofdme')
                },

                claimlineprofmeasure: {
                    type: ClaimlineprofmeasureType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimlineprofmeasure')
                },

                claimlineprofrx: {
                    type: ClaimlineprofrxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Claimlineprofrx')
                },

                claimlinerxcompound: {
                    type: ClaimlinerxcompoundType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimlinerxcompound')
                },

                claimlinesuperbill: {
                    type: ClaimlinesuperbillType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Claimlinesuperbill')
                },

                claimlinerx: {
                    type: ClaimlinerxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Claimlinerx')
                },

                claimnote: {
                    type: ClaimnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimnote')
                },

                claimlinesupportingdoc: {
                    type: ClaimlinesupportingdocType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimlinesupportingdoc')
                },

                claimpayee: {
                    type: ClaimpayeeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimpayee')
                },

                claimnotification: {
                    type: ClaimnotificationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimnotification')
                },

                claimpricingdetailreapportion: {
                    type: ClaimpricingdetailreapportionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimpricingdetailreapportion')
                },

                claimmedpolicyengineinputline: {
                    type: ClaimmedpolicyengineinputlineType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimmedpolicyengineinputline')
                },

                claimmedpolengineinputheader: {
                    type: ClaimmedpolengineinputheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimmedpolengineinputheader')
                },

                claimpricingdetailmodifier: {
                    type: ClaimpricingdetailmodifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimpricingdetailmodifier')
                },

                claimmembergroupinfo: {
                    type: ClaimmembergroupinfoType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimmembergroupinfo')
                },

                claimmember: {
                    type: ClaimmemberType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimmember')
                },

                claimpayer: {
                    type: ClaimpayerType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimpayer')
                },

                claimpayersecondaryid: {
                    type: ClaimpayersecondaryidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimpayersecondaryid')
                },

                claimpricingexternalrequest: {
                    type: ClaimpricingexternalrequestType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimpricingexternalrequest')
                },

                claimpricingexternalrespdtl: {
                    type: ClaimpricingexternalrespdtlType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimpricingexternalrespdtl')
                },

                claimpricingdetailtier: {
                    type: ClaimpricingdetailtierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimpricingdetailtier')
                },

                claimpricingdetailspi: {
                    type: ClaimpricingdetailspiType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimpricingdetailspi')
                },

                claimpricingexternalresphdr: {
                    type: ClaimpricingexternalresphdrType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimpricingexternalresphdr')
                },

                claimpricingedi: {
                    type: ClaimpricingediType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimpricingedi')
                },

                claimpricinginputdetail: {
                    type: ClaimpricinginputdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimpricinginputdetail')
                },

                claimpricingexternalrespdtledt: {
                    type: ClaimpricingexternalrespdtledtType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimpricingexternalrespdtledt')
                },

                claimpricingexternalresphdredt: {
                    type: ClaimpricingexternalresphdredtType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimpricingexternalresphdredt')
                },

                claimpricingoutputdetail: {
                    type: ClaimpricingoutputdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimpricingoutputdetail')
                },

                claimpricinginputheader: {
                    type: ClaimpricinginputheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimpricinginputheader')
                },

                claimpricinguseroverrideheader: {
                    type: ClaimpricinguseroverrideheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimpricinguseroverrideheader')
                },

                claimpropertycasualty: {
                    type: ClaimpropertycasualtyType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimpropertycasualty')
                },

                claimprovider: {
                    type: ClaimproviderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimprovider')
                },

                claimprovidersecondaryid: {
                    type: ClaimprovidersecondaryidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimprovidersecondaryid')
                },

                claimprocedurexref: {
                    type: ClaimprocedurexrefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimprocedurexref')
                },

                claimprovtin: {
                    type: ClaimprovtinType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimprovtin')
                },

                claimpricingoutputheader: {
                    type: ClaimpricingoutputheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimpricingoutputheader')
                },

                claimpricinguseroverridedetail: {
                    type: ClaimpricinguseroverridedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimpricinguseroverridedetail')
                },

                claimqualityaudit: {
                    type: ClaimqualityauditType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimqualityaudit')
                },

                claimreferral: {
                    type: ClaimreferralType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimreferral')
                },

                claimqualityauditauditdetail: {
                    type: ClaimqualityauditauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimqualityauditauditdetail')
                },

                claimprovideraddress: {
                    type: ClaimprovideraddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimprovideraddress')
                },

                claimrespparty: {
                    type: ClaimresppartyType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimrespparty')
                },

                claimsubsgroupinfo: {
                    type: ClaimsubsgroupinfoType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimsubsgroupinfo')
                },

                claimtat: {
                    type: ClaimtatType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimtat')
                },

                claimtransmitter: {
                    type: ClaimtransmitterType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimtransmitter')
                },

                claimtoothchart: {
                    type: ClaimtoothchartType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimtoothchart')
                },

                claimsubscriber: {
                    type: ClaimsubscriberType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Claimsubscriber')
                },

                clausecodeset: {
                    type: ClausecodesetType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clausecodeset')
                },

                clineditscheddetailclmtypexcl: {
                    type: ClineditscheddetailclmtypexclType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clineditscheddetailclmtypexcl')
                },

                clausecoderef: {
                    type: ClausecoderefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clausecoderef')
                },

                clceffratgbasefileupldheader: {
                    type: ClceffratgbasefileupldheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clceffratgbasefileupldheader')
                },

                clausecodesetauditdetail: {
                    type: ClausecodesetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clausecodesetauditdetail')
                },

                clinicaleditresponsecode: {
                    type: ClinicaleditresponsecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clinicaleditresponsecode')
                },

                clinicaleditresponsecodeaudit: {
                    type: ClinicaleditresponsecodeauditType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clinicaleditresponsecodeaudit')
                },

                clinicaleditassignment: {
                    type: ClinicaleditassignmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clinicaleditassignment')
                },

                clinicaleditschedauditdetail: {
                    type: ClinicaleditschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clinicaleditschedauditdetail')
                },

                clinicaleditscheddetail: {
                    type: ClinicaleditscheddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clinicaleditscheddetail')
                },

                clinicaleditsched: {
                    type: ClinicaleditschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clinicaleditsched')
                },

                clinicaleffratgbaseuploadstage: {
                    type: ClinicaleffratgbaseuploadstageType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clinicaleffratgbaseuploadstage')
                },

                clinicaleffratgfileuploaderror: {
                    type: ClinicaleffratgfileuploaderrorType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clinicaleffratgfileuploaderror')
                },

                cobrascheddetailbenefit: {
                    type: CobrascheddetailbenefitType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cobrascheddetailbenefit')
                },

                cobraschedauditdetail: {
                    type: CobraschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cobraschedauditdetail')
                },

                cobrasched: {
                    type: CobraschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cobrasched')
                },

                clinicaleditschednote: {
                    type: ClinicaleditschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Clinicaleditschednote')
                },

                cobrascheddetailnotification: {
                    type: CobrascheddetailnotificationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cobrascheddetailnotification')
                },

                cobrascheddetailexclusion: {
                    type: CobrascheddetailexclusionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cobrascheddetailexclusion')
                },

                cobrascheddetail: {
                    type: CobrascheddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cobrascheddetail')
                },

                cobrascheddetailconversion: {
                    type: CobrascheddetailconversionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cobrascheddetailconversion')
                },

                cobrascheddetailgracetime: {
                    type: CobrascheddetailgracetimeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cobrascheddetailgracetime')
                },

                cobrascheddetailqualbeneficiar: {
                    type: CobrascheddetailqualbeneficiarType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cobrascheddetailqualbeneficiar')
                },

                cobrascheddetailqualevent: {
                    type: CobrascheddetailqualeventType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cobrascheddetailqualevent')
                },

                cobrascheddetailqualeventprem: {
                    type: CobrascheddetailqualeventpremType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cobrascheddetailqualeventprem')
                },

                cobrascheddetailpartialmonth: {
                    type: CobrascheddetailpartialmonthType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cobrascheddetailpartialmonth')
                },

                cobraschednote: {
                    type: CobraschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cobraschednote')
                },

                cobrascheddetailsubsidytier: {
                    type: CobrascheddetailsubsidytierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cobrascheddetailsubsidytier')
                },

                cobrascheddetailsubsidy: {
                    type: CobrascheddetailsubsidyType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cobrascheddetailsubsidy')
                },

                codexref: {
                    type: CodexrefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Codexref')
                },

                cobrulestext: {
                    type: CobrulestextType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cobrulestext')
                },

                cobrule: {
                    type: CobruleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cobrule')
                },

                continuationeventmember: {
                    type: ContinuationeventmemberType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Continuationeventmember')
                },

                continuationsecondaryevent: {
                    type: ContinuationsecondaryeventType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Continuationsecondaryevent')
                },

                continuationevent: {
                    type: ContinuationeventType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Continuationevent')
                },

                correspondence: {
                    type: CorrespondenceType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Correspondence')
                },

                correspondenceauditdetail: {
                    type: CorrespondenceauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Correspondenceauditdetail')
                },

                correspondenceentitydetail: {
                    type: CorrespondenceentitydetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Correspondenceentitydetail')
                },

                contractclaimtype: {
                    type: ContractclaimtypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Contractclaimtype')
                },

                correspondencenote: {
                    type: CorrespondencenoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Correspondencenote')
                },

                correspondencetransdetail: {
                    type: CorrespondencetransdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Correspondencetransdetail')
                },

                countycode: {
                    type: CountycodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Countycode')
                },

                cpt4Procedure: {
                    type: Cpt4ProcedureType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cpt4Procedure')
                },

                cpt4Procmedfileuploaddetail: {
                    type: Cpt4ProcmedfileuploaddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cpt4Procmedfileuploaddetail')
                },

                datasecuritydataset: {
                    type: DatasecuritydatasetType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Datasecuritydataset')
                },

                cpt4Procedurefileuploadheader: {
                    type: Cpt4ProcedurefileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cpt4Procedurefileuploadheader')
                },

                datasecuritydatasetauditdetail: {
                    type: DatasecuritydatasetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Datasecuritydatasetauditdetail')
                },

                cpt4Procedurefileuploaddetail: {
                    type: Cpt4ProcedurefileuploaddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cpt4Procedurefileuploaddetail')
                },

                correspondencereason: {
                    type: CorrespondencereasonType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Correspondencereason')
                },

                credstatuscode: {
                    type: CredstatuscodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Credstatuscode')
                },

                customprocedure: {
                    type: CustomprocedureType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Customprocedure')
                },

                datasecuritygroup: {
                    type: DatasecuritygroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Datasecuritygroup')
                },

                datasecuritymembergroup: {
                    type: DatasecuritymembergroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Datasecuritymembergroup')
                },

                defaultmodifiercompnote: {
                    type: DefaultmodifiercompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Defaultmodifiercompnote')
                },

                cpt4Procedureauditdetail: {
                    type: Cpt4ProcedureauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cpt4Procedureauditdetail')
                },

                cpt4Procasafileuploaddetail: {
                    type: Cpt4ProcasafileuploaddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Cpt4Procasafileuploaddetail')
                },

                defaultmodifierauditdetail: {
                    type: DefaultmodifierauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Defaultmodifierauditdetail')
                },

                datasecurityownergroup: {
                    type: DatasecurityownergroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Datasecurityownergroup')
                },

                datasecurityproduct: {
                    type: DatasecurityproductType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Datasecurityproduct')
                },

                defaultmodifiercomp: {
                    type: DefaultmodifiercompType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Defaultmodifiercomp')
                },

                delegsched: {
                    type: DelegschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Delegsched')
                },

                delegfunction: {
                    type: DelegfunctionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Delegfunction')
                },

                delegschedentity: {
                    type: DelegschedentityType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Delegschedentity')
                },

                delegschedfunction: {
                    type: DelegschedfunctionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Delegschedfunction')
                },

                delegschednote: {
                    type: DelegschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Delegschednote')
                },

                delegschedfunctionassign: {
                    type: DelegschedfunctionassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Delegschedfunctionassign')
                },

                delegschedauditdetail: {
                    type: DelegschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Delegschedauditdetail')
                },

                delegschedscenariofunction: {
                    type: DelegschedscenariofunctionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Delegschedscenariofunction')
                },

                delegset: {
                    type: DelegsetType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Delegset')
                },

                delegschedscenariofunctionserv: {
                    type: DelegschedscenariofunctionservType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Delegschedscenariofunctionserv')
                },

                delegschedscenario: {
                    type: DelegschedscenarioType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Delegschedscenario')
                },

                delegsetnote: {
                    type: DelegsetnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Delegsetnote')
                },

                delegsetschedassign: {
                    type: DelegsetschedassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Delegsetschedassign')
                },

                delegsettimeline: {
                    type: DelegsettimelineType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Delegsettimeline')
                },

                denyreasoncode: {
                    type: DenyreasoncodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Denyreasoncode')
                },

                delegsetauditdetail: {
                    type: DelegsetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Delegsetauditdetail')
                },

                deleteutilityerrorqueue: {
                    type: DeleteutilityerrorqueueType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Deleteutilityerrorqueue')
                },

                diagcoderangecat: {
                    type: DiagcoderangecatType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Diagcoderangecat')
                },

                diagnosisset: {
                    type: DiagnosissetType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Diagnosisset')
                },

                diagcategory: {
                    type: DiagcategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Diagcategory')
                },

                denyreasoncodeauditdetail: {
                    type: DenyreasoncodeauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Denyreasoncodeauditdetail')
                },

                diagnosissetcat: {
                    type: DiagnosissetcatType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Diagnosissetcat')
                },

                diagnosissetcatdetaildef: {
                    type: DiagnosissetcatdetaildefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Diagnosissetcatdetaildef')
                },

                diagnosissetcatdetail: {
                    type: DiagnosissetcatdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Diagnosissetcatdetail')
                },

                diagnosissetauditdetail: {
                    type: DiagnosissetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Diagnosissetauditdetail')
                },

                distchannelauditdetail: {
                    type: DistchannelauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Distchannelauditdetail')
                },

                distributionchannel: {
                    type: DistributionchannelType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Distributionchannel')
                },

                distributionchannelnote: {
                    type: DistributionchannelnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Distributionchannelnote')
                },

                directoryusersuppressrsncode: {
                    type: DirectoryusersuppressrsncodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Directoryusersuppressrsncode')
                },

                dofrschedauditdetail: {
                    type: DofrschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Dofrschedauditdetail')
                },

                dofrsched: {
                    type: DofrschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Dofrsched')
                },

                dofrschedentity: {
                    type: DofrschedentityType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Dofrschedentity')
                },

                dofrschednote: {
                    type: DofrschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Dofrschednote')
                },

                dofrschedscenario: {
                    type: DofrschedscenarioType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Dofrschedscenario')
                },

                dofrschedscenarioserv: {
                    type: DofrschedscenarioservType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Dofrschedscenarioserv')
                },

                dofrsetauditdetail: {
                    type: DofrsetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Dofrsetauditdetail')
                },

                dofrsettimeline: {
                    type: DofrsettimelineType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Dofrsettimeline')
                },

                dofrset: {
                    type: DofrsetType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Dofrset')
                },

                dofrsetschedassign: {
                    type: DofrsetschedassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Dofrsetschedassign')
                },

                drcrestrict: {
                    type: DrcrestrictType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Drcrestrict')
                },

                editcode: {
                    type: EditcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Editcode')
                },

                dofrsetnote: {
                    type: DofrsetnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Dofrsetnote')
                },

                drgversion: {
                    type: DrgversionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Drgversion')
                },

                drgbasefileuploaddetail: {
                    type: DrgbasefileuploaddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Drgbasefileuploaddetail')
                },

                drg: {
                    type: DrgType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Drg')
                },

                drgbasefileuploadheader: {
                    type: DrgbasefileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Drgbasefileuploadheader')
                },

                dupclaimedit: {
                    type: DupclaimeditType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Dupclaimedit')
                },

                drcmapper: {
                    type: DrcmapperType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Drcmapper')
                },

                eocschedrelatedevent: {
                    type: EocschedrelatedeventType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Eocschedrelatedevent')
                },

                eocsched: {
                    type: EocschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Eocsched')
                },

                eocschedrelatedeventaction: {
                    type: EocschedrelatedeventactionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Eocschedrelatedeventaction')
                },

                eocschedtriggerevent: {
                    type: EocschedtriggereventType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Eocschedtriggerevent')
                },

                eocschednote: {
                    type: EocschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Eocschednote')
                },

                eocschedtriggereventserv: {
                    type: EocschedtriggereventservType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Eocschedtriggereventserv')
                },

                eocschedhold: {
                    type: EocschedholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Eocschedhold')
                },

                eocschedauditdetail: {
                    type: EocschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Eocschedauditdetail')
                },

                eocactioncode: {
                    type: EocactioncodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Eocactioncode')
                },

                eocschedtriggereventaction: {
                    type: EocschedtriggereventactionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Eocschedtriggereventaction')
                },

                eocschedstate: {
                    type: EocschedstateType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Eocschedstate')
                },

                eocsetnote: {
                    type: EocsetnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Eocsetnote')
                },

                eocschedrelatedeventserv: {
                    type: EocschedrelatedeventservType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Eocschedrelatedeventserv')
                },

                eocset: {
                    type: EocsetType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Eocset')
                },

                eocsetschedassign: {
                    type: EocsetschedassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Eocsetschedassign')
                },

                eventlog: {
                    type: EventlogType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Eventlog')
                },

                eocsetauditdetail: {
                    type: EocsetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Eocsetauditdetail')
                },

                eocsethold: {
                    type: EocsetholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Eocsethold')
                },

                extractftpsettingsnote: {
                    type: ExtractftpsettingsnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Extractftpsettingsnote')
                },

                expensecode: {
                    type: ExpensecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Expensecode')
                },

                extractftpsettingsauditdetail: {
                    type: ExtractftpsettingsauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Extractftpsettingsauditdetail')
                },

                extractftpsetting: {
                    type: ExtractftpsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Extractftpsetting')
                },

                eocschedtriggerrelatedassign: {
                    type: EocschedtriggerrelatedassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Eocschedtriggerrelatedassign')
                },

                expensecodeemplstatus: {
                    type: ExpensecodeemplstatusType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Expensecodeemplstatus')
                },

                facilitypapertype: {
                    type: FacilitypapertypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Facilitypapertype')
                },

                fallthrucomp: {
                    type: FallthrucompType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fallthrucomp')
                },

                fallthrucompclaimclass: {
                    type: FallthrucompclaimclassType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fallthrucompclaimclass')
                },

                fallthrucompauditdetail: {
                    type: FallthrucompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fallthrucompauditdetail')
                },

                fallthrucompdetail: {
                    type: FallthrucompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fallthrucompdetail')
                },

                extractftpsettingsnotedetail: {
                    type: ExtractftpsettingsnotedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Extractftpsettingsnotedetail')
                },

                fallthrucompnote: {
                    type: FallthrucompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fallthrucompnote')
                },

                familyunitauditdetail: {
                    type: FamilyunitauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Familyunitauditdetail')
                },

                fallthrumodifiercompassign: {
                    type: FallthrumodifiercompassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fallthrumodifiercompassign')
                },

                familyunitnote: {
                    type: FamilyunitnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Familyunitnote')
                },

                fallthrucomphold: {
                    type: FallthrucompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fallthrucomphold')
                },

                familyacctmaxhx: {
                    type: FamilyacctmaxhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Familyacctmaxhx')
                },

                familyacctmax: {
                    type: FamilyacctmaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Familyacctmax')
                },

                familyunitschedleveldetailrel: {
                    type: FamilyunitschedleveldetailrelType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Familyunitschedleveldetailrel')
                },

                familyunitschedule: {
                    type: FamilyunitscheduleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Familyunitschedule')
                },

                familyunitlevelcovlev: {
                    type: FamilyunitlevelcovlevType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Familyunitlevelcovlev')
                },

                familyunitscheduleleveldetail: {
                    type: FamilyunitscheduleleveldetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Familyunitscheduleleveldetail')
                },

                finactivitycode: {
                    type: FinactivitycodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Finactivitycode')
                },

                financeactivitylog: {
                    type: FinanceactivitylogType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Financeactivitylog')
                },

                familyunitschedulelevel: {
                    type: FamilyunitschedulelevelType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Familyunitschedulelevel')
                },

                financeactivitylogattribset: {
                    type: FinanceactivitylogattribsetType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Financeactivitylogattribset')
                },

                financeerror: {
                    type: FinanceerrorType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Financeerror')
                },

                financeactivitylogattrib: {
                    type: FinanceactivitylogattribType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Financeactivitylogattrib')
                },

                financeerrorqueue: {
                    type: FinanceerrorqueueType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Financeerrorqueue')
                },

                financeactivitylogattribtag: {
                    type: FinanceactivitylogattribtagType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Financeactivitylogattribtag')
                },

                finattribcode: {
                    type: FinattribcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Finattribcode')
                },

                financialpenaltydetail: {
                    type: FinancialpenaltydetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Financialpenaltydetail')
                },

                finattribsched: {
                    type: FinattribschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Finattribsched')
                },

                finattribschedcodeassign: {
                    type: FinattribschedcodeassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Finattribschedcodeassign')
                },

                financialpenaltyauditdetail: {
                    type: FinancialpenaltyauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Financialpenaltyauditdetail')
                },

                finerrorapinterest: {
                    type: FinerrorapinterestType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Finerrorapinterest')
                },

                finattribschedauditdetail: {
                    type: FinattribschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Finattribschedauditdetail')
                },

                financialpenalty: {
                    type: FinancialpenaltyType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Financialpenalty')
                },

                finattribschednote: {
                    type: FinattribschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Finattribschednote')
                },

                finattribschedsegment: {
                    type: FinattribschedsegmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Finattribschedsegment')
                },

                finattribschedvariabledef: {
                    type: FinattribschedvariabledefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Finattribschedvariabledef')
                },

                finattribschedvariable: {
                    type: FinattribschedvariableType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Finattribschedvariable')
                },

                finattribschedsegmentdef: {
                    type: FinattribschedsegmentdefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Finattribschedsegmentdef')
                },

                finerrorattrib: {
                    type: FinerrorattribType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Finerrorattrib')
                },

                finerrorapsurcharge: {
                    type: FinerrorapsurchargeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Finerrorapsurcharge')
                },

                finerrorcontracttagging: {
                    type: FinerrorcontracttaggingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Finerrorcontracttagging')
                },

                finerroraptransaction: {
                    type: FinerroraptransactionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Finerroraptransaction')
                },

                finerrorpaymentrequest: {
                    type: FinerrorpaymentrequestType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Finerrorpaymentrequest')
                },

                finerrorpaymentrequesterror: {
                    type: FinerrorpaymentrequesterrorType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Finerrorpaymentrequesterror')
                },

                finerrorapremark: {
                    type: FinerrorapremarkType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Finerrorapremark')
                },

                finerrorstatcorrection: {
                    type: FinerrorstatcorrectionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Finerrorstatcorrection')
                },

                finerrorqueue: {
                    type: FinerrorqueueType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Finerrorqueue')
                },

                finerrortranstagging: {
                    type: FinerrortranstaggingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Finerrortranstagging')
                },

                finerrorvoidpayment: {
                    type: FinerrorvoidpaymentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Finerrorvoidpayment')
                },

                finerrorpaymentresponse: {
                    type: FinerrorpaymentresponseType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Finerrorpaymentresponse')
                },

                fulfilleventtemplateoverride: {
                    type: FulfilleventtemplateoverrideType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fulfilleventtemplateoverride')
                },

                fulfillmentclient: {
                    type: FulfillmentclientType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fulfillmentclient')
                },

                fulfilleventidentifier: {
                    type: FulfilleventidentifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fulfilleventidentifier')
                },

                fulfilleventtemplate: {
                    type: FulfilleventtemplateType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fulfilleventtemplate')
                },

                fulfillcontent: {
                    type: FulfillcontentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fulfillcontent')
                },

                finerrorsystem: {
                    type: FinerrorsystemType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Finerrorsystem')
                },

                fulfilleventtracking: {
                    type: FulfilleventtrackingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fulfilleventtracking')
                },

                fulfillmassvariablecontent: {
                    type: FulfillmassvariablecontentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fulfillmassvariablecontent')
                },

                fulfillmassrequest: {
                    type: FulfillmassrequestType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fulfillmassrequest')
                },

                fulfillrequestidentifier: {
                    type: FulfillrequestidentifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fulfillrequestidentifier')
                },

                fulfillmassrequestmailingloc: {
                    type: FulfillmassrequestmailinglocType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fulfillmassrequestmailingloc')
                },

                fulfillevent: {
                    type: FulfilleventType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fulfillevent')
                },

                fulfillrequest: {
                    type: FulfillrequestType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fulfillrequest')
                },

                fulfillrequesttracking: {
                    type: FulfillrequesttrackingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fulfillrequesttracking')
                },

                fulfilltemplate: {
                    type: FulfilltemplateType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fulfilltemplate')
                },

                fulfilltemplatedetail: {
                    type: FulfilltemplatedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fulfilltemplatedetail')
                },

                fulfillrecipientidentifier: {
                    type: FulfillrecipientidentifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fulfillrecipientidentifier')
                },

                fundpool: {
                    type: FundpoolType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fundpool')
                },

                fulfilltemplaterecipient: {
                    type: FulfilltemplaterecipientType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fulfilltemplaterecipient')
                },

                fundpoolauditdetail: {
                    type: FundpoolauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fundpoolauditdetail')
                },

                fundpoolnote: {
                    type: FundpoolnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fundpoolnote')
                },

                fundtransfer: {
                    type: FundtransferType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fundtransfer')
                },

                fundpoolnotedetail: {
                    type: FundpoolnotedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fundpoolnotedetail')
                },

                generalclaimsetting: {
                    type: GeneralclaimsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Generalclaimsetting')
                },

                guardrailauditdetail: {
                    type: GuardrailauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Guardrailauditdetail')
                },

                guardrailinsrulemaximumage: {
                    type: GuardrailinsrulemaximumageType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Guardrailinsrulemaximumage')
                },

                fulfillvariablecontent: {
                    type: FulfillvariablecontentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Fulfillvariablecontent')
                },

                guardrailinsruleretro: {
                    type: GuardrailinsruleretroType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Guardrailinsruleretro')
                },

                guardrailinsrulewaitperiod: {
                    type: GuardrailinsrulewaitperiodType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Guardrailinsrulewaitperiod')
                },

                guardrailinsruletermination: {
                    type: GuardrailinsruleterminationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Guardrailinsruletermination')
                },

                guardrailinsrulenewborn: {
                    type: GuardrailinsrulenewbornType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Guardrailinsrulenewborn')
                },

                guardrailschedule: {
                    type: GuardrailscheduleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Guardrailschedule')
                },

                guardrailschedulenote: {
                    type: GuardrailschedulenoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Guardrailschedulenote')
                },

                guardrailschedulevalidation: {
                    type: GuardrailschedulevalidationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Guardrailschedulevalidation')
                },

                hcpcsprocdentfileuploaddetail: {
                    type: HcpcsprocdentfileuploaddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Hcpcsprocdentfileuploaddetail')
                },

                guardrailinsuringrule: {
                    type: GuardrailinsuringruleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Guardrailinsuringrule')
                },

                hcpcsprocedureauditdetail: {
                    type: HcpcsprocedureauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Hcpcsprocedureauditdetail')
                },

                hcpcsprocedurefileuploaddetail: {
                    type: HcpcsprocedurefileuploaddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Hcpcsprocedurefileuploaddetail')
                },

                healthcoderule: {
                    type: HealthcoderuleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Healthcoderule')
                },

                holdclaimap: {
                    type: HoldclaimapType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Holdclaimap')
                },

                icd10Diagnosis: {
                    type: Icd10DiagnosisType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Icd10Diagnosis')
                },

                icd10Diagnosisfileuploaddetail: {
                    type: Icd10DiagnosisfileuploaddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Icd10Diagnosisfileuploaddetail')
                },

                holdcode: {
                    type: HoldcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Holdcode')
                },

                healthcodeemplstatus: {
                    type: HealthcodeemplstatusType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Healthcodeemplstatus')
                },

                icd10Diagnosisauditdetail: {
                    type: Icd10DiagnosisauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Icd10Diagnosisauditdetail')
                },

                hcpcsprocedure: {
                    type: HcpcsprocedureType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Hcpcsprocedure')
                },

                hcpcsprocedurefileuploadheader: {
                    type: HcpcsprocedurefileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Hcpcsprocedurefileuploadheader')
                },

                icd10Fileuploadheader: {
                    type: Icd10FileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Icd10Fileuploadheader')
                },

                icd10Procedure: {
                    type: Icd10ProcedureType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Icd10Procedure')
                },

                icd10Procedureauditdetail: {
                    type: Icd10ProcedureauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Icd10Procedureauditdetail')
                },

                icd9: {
                    type: Icd9Type,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Icd9')
                },

                incent: {
                    type: IncentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Incent')
                },

                icd10Procedurefileuploaddetail: {
                    type: Icd10ProcedurefileuploaddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Icd10Procedurefileuploaddetail')
                },

                industryclassmodcode: {
                    type: IndustryclassmodcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Industryclassmodcode')
                },

                industryclassmoddetail: {
                    type: IndustryclassmoddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Industryclassmoddetail')
                },

                industryclassauditdetail: {
                    type: IndustryclassauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Industryclassauditdetail')
                },

                industryclassnote: {
                    type: IndustryclassnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Industryclassnote')
                },

                interestschedauditdetail: {
                    type: InterestschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Interestschedauditdetail')
                },

                interestpenaltysetting: {
                    type: InterestpenaltysettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Interestpenaltysetting')
                },

                instclaimsetting: {
                    type: InstclaimsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Instclaimsetting')
                },

                integrationtransaction: {
                    type: IntegrationtransactionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Integrationtransaction')
                },

                interestaccountappl: {
                    type: InterestaccountapplType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Interestaccountappl')
                },

                installationinsuringrule: {
                    type: InstallationinsuringruleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Installationinsuringrule')
                },

                industryclassmodsched: {
                    type: IndustryclassmodschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Industryclassmodsched')
                },

                interestscheddetailday: {
                    type: InterestscheddetaildayType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Interestscheddetailday')
                },

                interestscheddetail: {
                    type: InterestscheddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Interestscheddetail')
                },

                interestschedule: {
                    type: InterestscheduleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Interestschedule')
                },

                internaladjustreasoncode: {
                    type: InternaladjustreasoncodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Internaladjustreasoncode')
                },

                interestschednote: {
                    type: InterestschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Interestschednote')
                },

                invalidclaimedi: {
                    type: InvalidclaimediType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Invalidclaimedi')
                },

                invoiceamtvaluecode: {
                    type: InvoiceamtvaluecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Invoiceamtvaluecode')
                },

                internaladjustrsncdauditdetail: {
                    type: InternaladjustrsncdauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Internaladjustrsncdauditdetail')
                },

                investigationdeviceexempt: {
                    type: InvestigationdeviceexemptType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Investigationdeviceexempt')
                },

                ipservicecompauditdetail: {
                    type: IpservicecompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ipservicecompauditdetail')
                },

                ipservicecompdetailpricing: {
                    type: IpservicecompdetailpricingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ipservicecompdetailpricing')
                },

                ipservicecomp: {
                    type: IpservicecompType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ipservicecomp')
                },

                ipservicecompdrgcustom: {
                    type: IpservicecompdrgcustomType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ipservicecompdrgcustom')
                },

                ipservicecompdetail: {
                    type: IpservicecompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ipservicecompdetail')
                },

                ipservicecompdrg: {
                    type: IpservicecompdrgType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ipservicecompdrg')
                },

                ipservicecomphold: {
                    type: IpservicecompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ipservicecomphold')
                },

                iptransactionauditdetail: {
                    type: IptransactionauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Iptransactionauditdetail')
                },

                ipservicecompnote: {
                    type: IpservicecompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ipservicecompnote')
                },

                iptransactionheader: {
                    type: IptransactionheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Iptransactionheader')
                },

                iptransactionnote: {
                    type: IptransactionnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Iptransactionnote')
                },

                iptransactionnotedetail: {
                    type: IptransactionnotedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Iptransactionnotedetail')
                },

                iptransactiondetail: {
                    type: IptransactiondetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Iptransactiondetail')
                },

                irmEvnt: {
                    type: IrmEvntType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('IrmEvnt')
                },

                liabilitycarrier: {
                    type: LiabilitycarrierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Liabilitycarrier')
                },

                licensingentity: {
                    type: LicensingentityType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Licensingentity')
                },

                licensingentitypermit: {
                    type: LicensingentitypermitType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Licensingentitypermit')
                },

                licensingentityauditdetail: {
                    type: LicensingentityauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Licensingentityauditdetail')
                },

                joblastrundate: {
                    type: JoblastrundateType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Joblastrundate')
                },

                lineofbusinessauditdetail: {
                    type: LineofbusinessauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Lineofbusinessauditdetail')
                },

                lobmodifiercompassignhx: {
                    type: LobmodifiercompassignhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Lobmodifiercompassignhx')
                },

                medpolicyenginetierresponse: {
                    type: MedpolicyenginetierresponseType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicyenginetierresponse')
                },

                lineofbusiness: {
                    type: LineofbusinessType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Lineofbusiness')
                },

                locality: {
                    type: LocalityType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Locality')
                },

                lobmodifiercompassign: {
                    type: LobmodifiercompassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Lobmodifiercompassign')
                },

                lobmodassignauditdetail: {
                    type: LobmodassignauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Lobmodassignauditdetail')
                },

                medpolicyrulediag: {
                    type: MedpolicyrulediagType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicyrulediag')
                },

                medpolicyruleancillary: {
                    type: MedpolicyruleancillaryType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicyruleancillary')
                },

                medpolicyruleappliedhistory: {
                    type: MedpolicyruleappliedhistoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicyruleappliedhistory')
                },

                logo: {
                    type: LogoType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Logo')
                },

                medpolicyruleauditdetail: {
                    type: MedpolicyruleauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicyruleauditdetail')
                },

                medpolicyrule: {
                    type: MedpolicyruleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicyrule')
                },

                medpolicyrulebenefit: {
                    type: MedpolicyrulebenefitType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicyrulebenefit')
                },

                medpolicyengineresponse: {
                    type: MedpolicyengineresponseType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicyengineresponse')
                },

                medpolicyruleproc: {
                    type: MedpolicyruleprocType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicyruleproc')
                },

                medpolicyruletaxonomy: {
                    type: MedpolicyruletaxonomyType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicyruletaxonomy')
                },

                medpolicyrulenote: {
                    type: MedpolicyrulenoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicyrulenote')
                },

                medpolicyruletier: {
                    type: MedpolicyruletierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicyruletier')
                },

                medpolicyrulemodifier: {
                    type: MedpolicyrulemodifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicyrulemodifier')
                },

                medpolicyschedauditdetail: {
                    type: MedpolicyschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicyschedauditdetail')
                },

                medpolicyrulerev: {
                    type: MedpolicyrulerevType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicyrulerev')
                },

                medpolicyrulevalidation: {
                    type: MedpolicyrulevalidationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicyrulevalidation')
                },

                medpolicyrulerse: {
                    type: MedpolicyrulerseType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicyrulerse')
                },

                medpolicyschedtimeline: {
                    type: MedpolicyschedtimelineType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicyschedtimeline')
                },

                medpolicysched: {
                    type: MedpolicyschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicysched')
                },

                medpolicyschednotifdef: {
                    type: MedpolicyschednotifdefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicyschednotifdef')
                },

                medpolicyschednote: {
                    type: MedpolicyschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicyschednote')
                },

                medpolicyschedtimelinerule: {
                    type: MedpolicyschedtimelineruleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicyschedtimelinerule')
                },

                medpolicysetauditdetail: {
                    type: MedpolicysetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicysetauditdetail')
                },

                medpolicysetnote: {
                    type: MedpolicysetnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicysetnote')
                },

                medpolicysettimelinesched: {
                    type: MedpolicysettimelineschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicysettimelinesched')
                },

                memberaccounthold: {
                    type: MemberaccountholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberaccounthold')
                },

                memacctmembership: {
                    type: MemacctmembershipType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memacctmembership')
                },

                memacctacctbalhxxref: {
                    type: MemacctacctbalhxxrefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Memacctacctbalhxxref')
                },

                medpolicyset: {
                    type: MedpolicysetType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicyset')
                },

                memacctrun: {
                    type: MemacctrunType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memacctrun')
                },

                member: {
                    type: MemberType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Member')
                },

                memacctcustomerpurchaseitem: {
                    type: MemacctcustomerpurchaseitemType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memacctcustomerpurchaseitem')
                },

                memberaccount: {
                    type: MemberaccountType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberaccount')
                },

                memberacctpayroll: {
                    type: MemberacctpayrollType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberacctpayroll')
                },

                memacctcustomerpurchasedetail: {
                    type: MemacctcustomerpurchasedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memacctcustomerpurchasedetail')
                },

                medpolicysettimeline: {
                    type: MedpolicysettimelineType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Medpolicysettimeline')
                },

                memberaddressattn: {
                    type: MemberaddressattnType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberaddressattn')
                },

                memberaccounthx: {
                    type: MemberaccounthxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberaccounthx')
                },

                memberaddress: {
                    type: MemberaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberaddress')
                },

                memberaccountorder: {
                    type: MemberaccountorderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberaccountorder')
                },

                memberbenefit: {
                    type: MemberbenefitType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberbenefit')
                },

                memberauditdetail: {
                    type: MemberauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberauditdetail')
                },

                memberbanking: {
                    type: MemberbankingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberbanking')
                },

                memberattribute: {
                    type: MemberattributeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberattribute')
                },

                memberaddressprov: {
                    type: MemberaddressprovType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberaddressprov')
                },

                memberacctmaxhx: {
                    type: MemberacctmaxhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberacctmaxhx')
                },

                memberaccountsetting: {
                    type: MemberaccountsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberaccountsetting')
                },

                memberaddressdiag: {
                    type: MemberaddressdiagType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberaddressdiag')
                },

                memberbenefit834Hist: {
                    type: Memberbenefit834HistType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberbenefit834Hist')
                },

                membercobexcldiag: {
                    type: MembercobexcldiagType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Membercobexcldiag')
                },

                memberbenefitcovlevelcode: {
                    type: MemberbenefitcovlevelcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberbenefitcovlevelcode')
                },

                membercobexclproc: {
                    type: MembercobexclprocType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Membercobexclproc')
                },

                membercob: {
                    type: MembercobType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Membercob')
                },

                membercaserate: {
                    type: MembercaserateType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Membercaserate')
                },

                membercobrelentityaddress: {
                    type: MembercobrelentityaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Membercobrelentityaddress')
                },

                memberacctmax: {
                    type: MemberacctmaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberacctmax')
                },

                memberbenefitpremium: {
                    type: MemberbenefitpremiumType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberbenefitpremium')
                },

                memberbenefitrider: {
                    type: MemberbenefitriderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberbenefitrider')
                },

                membercobrelentityphone: {
                    type: MembercobrelentityphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Membercobrelentityphone')
                },

                membercontactaddress: {
                    type: MembercontactaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Membercontactaddress')
                },

                membercobrelentityelectcom: {
                    type: MembercobrelentityelectcomType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Membercobrelentityelectcom')
                },

                membercobverification: {
                    type: MembercobverificationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Membercobverification')
                },

                membercontact: {
                    type: MembercontactType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Membercontact')
                },

                membercontactphone: {
                    type: MembercontactphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Membercontactphone')
                },

                memberdepcertar: {
                    type: MemberdepcertarType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberdepcertar')
                },

                memberdisclosure: {
                    type: MemberdisclosureType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberdisclosure')
                },

                memberelectroniccomm: {
                    type: MemberelectroniccommType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberelectroniccomm')
                },

                membercontactlanguage: {
                    type: MembercontactlanguageType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Membercontactlanguage')
                },

                memberdepcert: {
                    type: MemberdepcertType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberdepcert')
                },

                memberexternalid: {
                    type: MemberexternalidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberexternalid')
                },

                membercustodial: {
                    type: MembercustodialType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Membercustodial')
                },

                membergovernmentbenefit: {
                    type: MembergovernmentbenefitType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Membergovernmentbenefit')
                },

                memberdelete: {
                    type: MemberdeleteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberdelete')
                },

                membercontactelectcomm: {
                    type: MembercontactelectcommType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Membercontactelectcomm')
                },

                memberdisability: {
                    type: MemberdisabilityType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberdisability')
                },

                memberidcard: {
                    type: MemberidcardType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberidcard')
                },

                memberhold: {
                    type: MemberholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberhold')
                },

                memberimage: {
                    type: MemberimageType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberimage')
                },

                memberincentar: {
                    type: MemberincentarType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberincentar')
                },

                memberinstitution: {
                    type: MemberinstitutionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberinstitution')
                },

                memberincent: {
                    type: MemberincentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberincent')
                },

                memberindivmax: {
                    type: MemberindivmaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberindivmax')
                },

                memberidcardrequest: {
                    type: MemberidcardrequestType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberidcardrequest')
                },

                memberindicator: {
                    type: MemberindicatorType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberindicator')
                },

                memberinternaloobtimeline: {
                    type: MemberinternaloobtimelineType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberinternaloobtimeline')
                },

                memberinvdate: {
                    type: MemberinvdateType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberinvdate')
                },

                memberinvaccident: {
                    type: MemberinvaccidentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberinvaccident')
                },

                memberindivmaxhx: {
                    type: MemberindivmaxhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberindivmaxhx')
                },

                memberinvprovider: {
                    type: MemberinvproviderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberinvprovider')
                },

                memberinvestigation: {
                    type: MemberinvestigationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberinvestigation')
                },

                memberinvnote: {
                    type: MemberinvnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberinvnote')
                },

                memberinternaloobplan: {
                    type: MemberinternaloobplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberinternaloobplan')
                },

                memberinvdiagnosis: {
                    type: MemberinvdiagnosisType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberinvdiagnosis')
                },

                membernetwork: {
                    type: MembernetworkType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Membernetwork')
                },

                membernote: {
                    type: MembernoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Membernote')
                },

                memberlanguage: {
                    type: MemberlanguageType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberlanguage')
                },

                memberooctimeline: {
                    type: MemberooctimelineType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberooctimeline')
                },

                memberotherincome: {
                    type: MemberotherincomeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberotherincome')
                },

                memberoocplan: {
                    type: MemberoocplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberoocplan')
                },

                memberphone: {
                    type: MemberphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberphone')
                },

                memberprovider: {
                    type: MemberproviderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberprovider')
                },

                memberperiochart: {
                    type: MemberperiochartType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberperiochart')
                },

                memberperiomeasure: {
                    type: MemberperiomeasureType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberperiomeasure')
                },

                memberperiopocket: {
                    type: MemberperiopocketType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberperiopocket')
                },

                memberrecoup: {
                    type: MemberrecoupType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberrecoup')
                },

                memberqueue: {
                    type: MemberqueueType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberqueue')
                },

                memberrecoupclaim: {
                    type: MemberrecoupclaimType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberrecoupclaim')
                },

                memberstudent: {
                    type: MemberstudentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberstudent')
                },

                membersupertooth: {
                    type: MembersupertoothType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Membersupertooth')
                },

                membertoothchart: {
                    type: MembertoothchartType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Membertoothchart')
                },

                memberutilizationoptin: {
                    type: MemberutilizationoptinType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberutilizationoptin')
                },

                memberserviceplan: {
                    type: MemberserviceplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberserviceplan')
                },

                membertransfer: {
                    type: MembertransferType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Membertransfer')
                },

                membersupertoothid: {
                    type: MembersupertoothidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Membersupertoothid')
                },

                membervital: {
                    type: MembervitalType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Membervital')
                },

                memexpensecodemax: {
                    type: MemexpensecodemaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memexpensecodemax')
                },

                memberutilizationplan: {
                    type: MemberutilizationplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memberutilizationplan')
                },

                memgroup: {
                    type: MemgroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroup')
                },

                memgroupaddress: {
                    type: MemgroupaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupaddress')
                },

                memgroupaddressphone: {
                    type: MemgroupaddressphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupaddressphone')
                },

                memgroupcontactaddress: {
                    type: MemgroupcontactaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontactaddress')
                },

                memgroupalias: {
                    type: MemgroupaliasType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupalias')
                },

                memgroupauditdetail: {
                    type: MemgroupauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupauditdetail')
                },

                memgroupaddresshour: {
                    type: MemgroupaddresshourType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupaddresshour')
                },

                memgroupcontact: {
                    type: MemgroupcontactType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontact')
                },

                memgroupbanking: {
                    type: MemgroupbankingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupbanking')
                },

                memgroupbusinessdef: {
                    type: MemgroupbusinessdefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupbusinessdef')
                },

                memgroupcontactaddressphone: {
                    type: MemgroupcontactaddressphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontactaddressphone')
                },

                memgroupcontactauditdetail: {
                    type: MemgroupcontactauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontactauditdetail')
                },

                memgroupcontacteleccomassign: {
                    type: MemgroupcontacteleccomassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontacteleccomassign')
                },

                memgroup834Extract: {
                    type: Memgroup834ExtractType,
                    args: {},
                    resolve: getEntityResolver('Memgroup834Extract')
                },

                memgroupcontactassignment: {
                    type: MemgroupcontactassignmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontactassignment')
                },

                memexpensecodemaxhx: {
                    type: MemexpensecodemaxhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memexpensecodemaxhx')
                },

                memgroupcontactelectroniccom: {
                    type: MemgroupcontactelectroniccomType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontactelectroniccom')
                },

                memgroupcontactphoneassign: {
                    type: MemgroupcontactphoneassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontactphoneassign')
                },

                memgroupcontactrole: {
                    type: MemgroupcontactroleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontactrole')
                },

                memgroupcontractauditdetail: {
                    type: MemgroupcontractauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractauditdetail')
                },

                memgroupcontactphone: {
                    type: MemgroupcontactphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontactphone')
                },

                memgroupcontract: {
                    type: MemgroupcontractType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontract')
                },

                memgroupcontractevent: {
                    type: MemgroupcontracteventType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractevent')
                },

                memgroupcontractdistchannel: {
                    type: MemgroupcontractdistchannelType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractdistchannel')
                },

                memgroupcontractoptcontribut: {
                    type: MemgroupcontractoptcontributType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractoptcontribut')
                },

                memgroupcontractbillingpref: {
                    type: MemgroupcontractbillingprefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractbillingpref')
                },

                memgroupcontractextid: {
                    type: MemgroupcontractextidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractextid')
                },

                memgroupcontractoptpop: {
                    type: MemgroupcontractoptpopType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractoptpop')
                },

                memgroupcontractoptinsrule: {
                    type: MemgroupcontractoptinsruleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractoptinsrule')
                },

                memgroupcontractlock: {
                    type: MemgroupcontractlockType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractlock')
                },

                memgroupcontractoptpopinsrule: {
                    type: MemgroupcontractoptpopinsruleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractoptpopinsrule')
                },

                memgroupcontractopt: {
                    type: MemgroupcontractoptType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractopt')
                },

                memgroupcontractgovtreport: {
                    type: MemgroupcontractgovtreportType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractgovtreport')
                },

                memgroupcontractopenenroll: {
                    type: MemgroupcontractopenenrollType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractopenenroll')
                },

                memgroupcontractplanattribset: {
                    type: MemgroupcontractplanattribsetType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanattribset')
                },

                memgroupcontractplanattrib: {
                    type: MemgroupcontractplanattribType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanattrib')
                },

                memgroupcontractplanoptextid: {
                    type: MemgroupcontractplanoptextidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanoptextid')
                },

                memgroupcontractplanoption: {
                    type: MemgroupcontractplanoptionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanoption')
                },

                memgroupcontractplanoptaddr: {
                    type: MemgroupcontractplanoptaddrType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanoptaddr')
                },

                memgroupcontractplanopthold: {
                    type: MemgroupcontractplanoptholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanopthold')
                },

                memgroupcontractplanoptmsa: {
                    type: MemgroupcontractplanoptmsaType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanoptmsa')
                },

                memgroupcontractplanyrbillovd: {
                    type: MemgroupcontractplanyrbillovdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanyrbillovd')
                },

                memgroupcontractplanoptphone: {
                    type: MemgroupcontractplanoptphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanoptphone')
                },

                memgroupcontractplanyrbillrt: {
                    type: MemgroupcontractplanyrbillrtType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanyrbillrt')
                },

                memgroupcontractplanoptnetwk: {
                    type: MemgroupcontractplanoptnetwkType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanoptnetwk')
                },

                memgroupcontractplanyear: {
                    type: MemgroupcontractplanyearType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanyear')
                },

                memgroupcontractplanopttag: {
                    type: MemgroupcontractplanopttagType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanopttag')
                },

                memgroupcontractplanoptplan: {
                    type: MemgroupcontractplanoptplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractplanoptplan')
                },

                memgroupcontractrenewal: {
                    type: MemgroupcontractrenewalType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractrenewal')
                },

                memgroupcontractproducer: {
                    type: MemgroupcontractproducerType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractproducer')
                },

                memgroupcontractsalesoffice: {
                    type: MemgroupcontractsalesofficeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractsalesoffice')
                },

                memgroupcontractvalidation: {
                    type: MemgroupcontractvalidationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractvalidation')
                },

                memgroupjobstatus: {
                    type: MemgroupjobstatusType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupjobstatus')
                },

                memgroupcontractrenewaltrigger: {
                    type: MemgroupcontractrenewaltriggerType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupcontractrenewaltrigger')
                },

                memgroupdepcert: {
                    type: MemgroupdepcertType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupdepcert')
                },

                memgroupemployeecount: {
                    type: MemgroupemployeecountType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupemployeecount')
                },

                memgroupexternalid: {
                    type: MemgroupexternalidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupexternalid')
                },

                memgrouppayroll: {
                    type: MemgrouppayrollType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgrouppayroll')
                },

                memgroupnote: {
                    type: MemgroupnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupnote')
                },

                memgrouppayrolldate: {
                    type: MemgrouppayrolldateType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgrouppayrolldate')
                },

                memgrouphold: {
                    type: MemgroupholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgrouphold')
                },

                memgrouppopidentifiervalue: {
                    type: MemgrouppopidentifiervalueType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgrouppopidentifiervalue')
                },

                memgroupimage: {
                    type: MemgroupimageType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupimage')
                },

                memgrouppopinsuringrule: {
                    type: MemgrouppopinsuringruleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgrouppopinsuringrule')
                },

                memgrouppopidentifier: {
                    type: MemgrouppopidentifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgrouppopidentifier')
                },

                memgroupinsuringrule: {
                    type: MemgroupinsuringruleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupinsuringrule')
                },

                memgrouppopulation: {
                    type: MemgrouppopulationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgrouppopulation')
                },

                memgrouppopulationconfig: {
                    type: MemgrouppopulationconfigType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgrouppopulationconfig')
                },

                memgrouppopulationorder: {
                    type: MemgrouppopulationorderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgrouppopulationorder')
                },

                memgrouppriorcarrier: {
                    type: MemgrouppriorcarrierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgrouppriorcarrier')
                },

                memgroupsetting: {
                    type: MemgroupsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupsetting')
                },

                memgroupsupportteam: {
                    type: MemgroupsupportteamType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupsupportteam')
                },

                memhealthcodemax: {
                    type: MemhealthcodemaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memhealthcodemax')
                },

                memgroupsurcharge: {
                    type: MemgroupsurchargeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupsurcharge')
                },

                memgrouptin: {
                    type: MemgrouptinType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgrouptin')
                },

                memgroupstmtempstat: {
                    type: MemgroupstmtempstatType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupstmtempstat')
                },

                memgroupstmt: {
                    type: MemgroupstmtType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupstmt')
                },

                mnrpcompauditdetail: {
                    type: MnrpcompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Mnrpcompauditdetail')
                },

                memgroupreportingcode: {
                    type: MemgroupreportingcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memgroupreportingcode')
                },

                memhealthcodemaxhx: {
                    type: MemhealthcodemaxhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Memhealthcodemaxhx')
                },

                mnrpcomp: {
                    type: MnrpcompType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Mnrpcomp')
                },

                mnrpcompnote: {
                    type: MnrpcompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Mnrpcompnote')
                },

                mnrpcompdetail: {
                    type: MnrpcompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Mnrpcompdetail')
                },

                mnrpcomphold: {
                    type: MnrpcompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Mnrpcomphold')
                },

                modifiercodebasefileuploaddeta: {
                    type: ModifiercodebasefileuploaddetaType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Modifiercodebasefileuploaddeta')
                },

                modifiercompdetail: {
                    type: ModifiercompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Modifiercompdetail')
                },

                mnrpcompdetailproc: {
                    type: MnrpcompdetailprocType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Mnrpcompdetailproc')
                },

                modifiercode: {
                    type: ModifiercodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Modifiercode')
                },

                modifiercomp: {
                    type: ModifiercompType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Modifiercomp')
                },

                modifiercodebasefileuploadhead: {
                    type: ModifiercodebasefileuploadheadType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Modifiercodebasefileuploadhead')
                },

                modifiercompclaimclass: {
                    type: ModifiercompclaimclassType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Modifiercompclaimclass')
                },

                mprcompauditdetail: {
                    type: MprcompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Mprcompauditdetail')
                },

                modifiercompauditdetail: {
                    type: ModifiercompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Modifiercompauditdetail')
                },

                modifiercompnote: {
                    type: ModifiercompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Modifiercompnote')
                },

                mprcomp: {
                    type: MprcompType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Mprcomp')
                },

                mprcompdetailmod: {
                    type: MprcompdetailmodType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Mprcompdetailmod')
                },

                mprcompdetailcoeff: {
                    type: MprcompdetailcoeffType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Mprcompdetailcoeff')
                },

                mprcompdetail: {
                    type: MprcompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Mprcompdetail')
                },

                mprcomphold: {
                    type: MprcompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Mprcomphold')
                },

                mprcompdetailmodassign: {
                    type: MprcompdetailmodassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Mprcompdetailmodassign')
                },

                msa: {
                    type: MsaType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msa')
                },

                msaaccesspoint: {
                    type: MsaaccesspointType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msaaccesspoint')
                },

                mprcompnote: {
                    type: MprcompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Mprcompnote')
                },

                msaaccesspointflat: {
                    type: MsaaccesspointflatType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msaaccesspointflat')
                },

                msaaccesspointfus: {
                    type: MsaaccesspointfusType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msaaccesspointfus')
                },

                msaaccesspointrctier: {
                    type: MsaaccesspointrctierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Msaaccesspointrctier')
                },

                msaaccesspointfuslevel: {
                    type: MsaaccesspointfuslevelType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msaaccesspointfuslevel')
                },

                msaaccesspointrc: {
                    type: MsaaccesspointrcType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Msaaccesspointrc')
                },

                msaaptranstypedef: {
                    type: MsaaptranstypedefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msaaptranstypedef')
                },

                msaauditdetail: {
                    type: MsaauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msaauditdetail')
                },

                msabalexchange: {
                    type: MsabalexchangeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msabalexchange')
                },

                msacontribmax: {
                    type: MsacontribmaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msacontribmax')
                },

                msacontribmaxfus: {
                    type: MsacontribmaxfusType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msacontribmaxfus')
                },

                msacontribmaxfuslevel: {
                    type: MsacontribmaxfuslevelType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msacontribmaxfuslevel')
                },

                msacarryover: {
                    type: MsacarryoverType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msacarryover')
                },

                msacapcarryoverfus: {
                    type: MsacapcarryoverfusType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msacapcarryoverfus')
                },

                msacontribdef: {
                    type: MsacontribdefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msacontribdef')
                },

                msacontribtypedef: {
                    type: MsacontribtypedefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msacontribtypedef')
                },

                msacontribtypeprorate: {
                    type: MsacontribtypeprorateType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msacontribtypeprorate')
                },

                msacapcarryoverfuslevel: {
                    type: MsacapcarryoverfuslevelType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msacapcarryoverfuslevel')
                },

                msacapcarryover: {
                    type: MsacapcarryoverType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msacapcarryover')
                },

                msacoveredmr: {
                    type: MsacoveredmrType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msacoveredmr')
                },

                msadepcert: {
                    type: MsadepcertType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Msadepcert')
                },

                msacovrelationship: {
                    type: MsacovrelationshipType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Msacovrelationship')
                },

                msaexpensecodemax: {
                    type: MsaexpensecodemaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msaexpensecodemax')
                },

                msaexpensecode: {
                    type: MsaexpensecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msaexpensecode')
                },

                msaexpense: {
                    type: MsaexpenseType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msaexpense')
                },

                msaflatap: {
                    type: MsaflatapType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Msaflatap')
                },

                msaflatcontrib: {
                    type: MsaflatcontribType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msaflatcontrib')
                },

                msafusaplevel: {
                    type: MsafusaplevelType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Msafusaplevel')
                },

                msafusmaxballevel: {
                    type: MsafusmaxballevelType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msafusmaxballevel')
                },

                msagraceperiod: {
                    type: MsagraceperiodType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Msagraceperiod')
                },

                msafusap: {
                    type: MsafusapType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Msafusap')
                },

                msahealthcodemax: {
                    type: MsahealthcodemaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msahealthcodemax')
                },

                msafusmaxbalance: {
                    type: MsafusmaxbalanceType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msafusmaxbalance')
                },

                msahealthcare: {
                    type: MsahealthcareType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msahealthcare')
                },

                msafuscontrib: {
                    type: MsafuscontribType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msafuscontrib')
                },

                msafuscontriblevel: {
                    type: MsafuscontriblevelType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msafuscontriblevel')
                },

                msaincdecrule: {
                    type: MsaincdecruleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msaincdecrule')
                },

                msahold: {
                    type: MsaholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msahold')
                },

                msaexternalid: {
                    type: MsaexternalidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msaexternalid')
                },

                msaindivmax: {
                    type: MsaindivmaxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msaindivmax')
                },

                msalevel: {
                    type: MsalevelType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msalevel')
                },

                msaincentcredit: {
                    type: MsaincentcreditType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msaincentcredit')
                },

                msamaximum: {
                    type: MsamaximumType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msamaximum')
                },

                msamaxbalance: {
                    type: MsamaxbalanceType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msamaxbalance')
                },

                msalevelplan: {
                    type: MsalevelplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msalevelplan')
                },

                msamaxfamilylvl: {
                    type: MsamaxfamilylvlType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Msamaxfamilylvl')
                },

                msanetworktier: {
                    type: MsanetworktierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msanetworktier')
                },

                msanote: {
                    type: MsanoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msanote')
                },

                msanoncovrxthercode: {
                    type: MsanoncovrxthercodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msanoncovrxthercode')
                },

                msalevelstatus: {
                    type: MsalevelstatusType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msalevelstatus')
                },

                msapaidincurred: {
                    type: MsapaidincurredType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Msapaidincurred')
                },

                msapayandchase: {
                    type: MsapayandchaseType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Msapayandchase')
                },

                msaplanyear: {
                    type: MsaplanyearType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msaplanyear')
                },

                msaindivcapcarryover: {
                    type: MsaindivcapcarryoverType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msaindivcapcarryover')
                },

                msapurse: {
                    type: MsapurseType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Msapurse')
                },

                msarelationship: {
                    type: MsarelationshipType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msarelationship')
                },

                msaproration: {
                    type: MsaprorationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msaproration')
                },

                msasetting: {
                    type: MsasettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msasetting')
                },

                msastudentage: {
                    type: MsastudentageType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Msastudentage')
                },

                msatermenrollstatus: {
                    type: MsatermenrollstatusType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msatermenrollstatus')
                },

                msastacking: {
                    type: MsastackingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msastacking')
                },

                msavalidation: {
                    type: MsavalidationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msavalidation')
                },

                msatype: {
                    type: MsatypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Msatype')
                },

                ndcawpfileuploadheader: {
                    type: NdcawpfileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ndcawpfileuploadheader')
                },

                ndcawpfileuploadstaging: {
                    type: NdcawpfileuploadstagingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ndcawpfileuploadstaging')
                },

                ndc: {
                    type: NdcType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Ndc')
                },

                ndccomp: {
                    type: NdccompType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ndccomp')
                },

                ndccomphold: {
                    type: NdccompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ndccomphold')
                },

                ndcmacref: {
                    type: NdcmacrefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ndcmacref')
                },

                ndcmacfileuploadheader: {
                    type: NdcmacfileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ndcmacfileuploadheader')
                },

                ndcmacfileuploadstaging: {
                    type: NdcmacfileuploadstagingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ndcmacfileuploadstaging')
                },

                ndcpackagefileuploadstaging: {
                    type: NdcpackagefileuploadstagingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ndcpackagefileuploadstaging')
                },

                ndcmodifiercompassign: {
                    type: NdcmodifiercompassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ndcmodifiercompassign')
                },

                ndccompnote: {
                    type: NdccompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ndccompnote')
                },

                ndcawpref: {
                    type: NdcawprefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ndcawpref')
                },

                ndccompdetail: {
                    type: NdccompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ndccompdetail')
                },

                ndccompauditdetail: {
                    type: NdccompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ndccompauditdetail')
                },

                ndcproductfileuploadstaging: {
                    type: NdcproductfileuploadstagingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ndcproductfileuploadstaging')
                },

                netcontract: {
                    type: NetcontractType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontract')
                },

                ndcprdpckbasefileuploadheader: {
                    type: NdcprdpckbasefileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ndcprdpckbasefileuploadheader')
                },

                netcontractcarrier: {
                    type: NetcontractcarrierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractcarrier')
                },

                netcontractcarrierfilinglimit: {
                    type: NetcontractcarrierfilinglimitType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractcarrierfilinglimit')
                },

                netcontractheader: {
                    type: NetcontractheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractheader')
                },

                netcontractauditdetail: {
                    type: NetcontractauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractauditdetail')
                },

                netcontractfinancialpen: {
                    type: NetcontractfinancialpenType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractfinancialpen')
                },

                netcontractfilinglimit: {
                    type: NetcontractfilinglimitType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractfilinglimit')
                },

                netcontractheadernote: {
                    type: NetcontractheadernoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractheadernote')
                },

                netcontractheaderauditdetail: {
                    type: NetcontractheaderauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractheaderauditdetail')
                },

                netcontractnetwork: {
                    type: NetcontractnetworkType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractnetwork')
                },

                netcontractcarriersupportteam: {
                    type: NetcontractcarriersupportteamType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractcarriersupportteam')
                },

                netcontractlob: {
                    type: NetcontractlobType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractlob')
                },

                netcontractlobfilinglimit: {
                    type: NetcontractlobfilinglimitType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractlobfilinglimit')
                },

                netcontracthold: {
                    type: NetcontractholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontracthold')
                },

                netcontractplan: {
                    type: NetcontractplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractplan')
                },

                netcontractnote: {
                    type: NetcontractnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractnote')
                },

                netcontractowner: {
                    type: NetcontractownerType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractowner')
                },

                netcontractmembergroup: {
                    type: NetcontractmembergroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractmembergroup')
                },

                netcontractid: {
                    type: NetcontractidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractid')
                },

                netcontractproduct: {
                    type: NetcontractproductType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractproduct')
                },

                netcontractlobclausecode: {
                    type: NetcontractlobclausecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractlobclausecode')
                },

                netcontractproviderfinpen: {
                    type: NetcontractproviderfinpenType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractproviderfinpen')
                },

                netcontractprovaffiliation: {
                    type: NetcontractprovaffiliationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractprovaffiliation')
                },

                netcontractprovlocation: {
                    type: NetcontractprovlocationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractprovlocation')
                },

                netcontractprovtin: {
                    type: NetcontractprovtinType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractprovtin')
                },

                netcontractservicearea: {
                    type: NetcontractserviceareaType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractservicearea')
                },

                netcontractsupportteam: {
                    type: NetcontractsupportteamType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractsupportteam')
                },

                netcontractprovnetworkpanel: {
                    type: NetcontractprovnetworkpanelType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontractprovnetworkpanel')
                },

                netcontracttermeventlog: {
                    type: NetcontracttermeventlogType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontracttermeventlog')
                },

                netcontracttaxonomy: {
                    type: NetcontracttaxonomyType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netcontracttaxonomy')
                },

                netdirsuppress: {
                    type: NetdirsuppressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netdirsuppress')
                },

                netscheduleheader: {
                    type: NetscheduleheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netscheduleheader')
                },

                netdirsuppressregion: {
                    type: NetdirsuppressregionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netdirsuppressregion')
                },

                netscheduleextid: {
                    type: NetscheduleextidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netscheduleextid')
                },

                netdirsuppressauditdetail: {
                    type: NetdirsuppressauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netdirsuppressauditdetail')
                },

                netschedulelogo: {
                    type: NetschedulelogoType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netschedulelogo')
                },

                netscheduledetail: {
                    type: NetscheduledetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Netscheduledetail')
                },

                network: {
                    type: NetworkType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Network')
                },

                netscheduletier: {
                    type: NetscheduletierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Netscheduletier')
                },

                networkcontact: {
                    type: NetworkcontactType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Networkcontact')
                },

                networkcontactaddressphone: {
                    type: NetworkcontactaddressphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Networkcontactaddressphone')
                },

                networkcontactassignment: {
                    type: NetworkcontactassignmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Networkcontactassignment')
                },

                networkauditdetail: {
                    type: NetworkauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Networkauditdetail')
                },

                networkcontactaddress: {
                    type: NetworkcontactaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Networkcontactaddress')
                },

                networkcontactelectroniccom: {
                    type: NetworkcontactelectroniccomType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Networkcontactelectroniccom')
                },

                networkid: {
                    type: NetworkidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Networkid')
                },

                networkcontactphone: {
                    type: NetworkcontactphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Networkcontactphone')
                },

                networkcontactauditdetail: {
                    type: NetworkcontactauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Networkcontactauditdetail')
                },

                networknote: {
                    type: NetworknoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Networknote')
                },

                networkservicearea: {
                    type: NetworkserviceareaType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Networkservicearea')
                },

                networksupportteam: {
                    type: NetworksupportteamType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Networksupportteam')
                },

                networktype: {
                    type: NetworktypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Networktype')
                },

                oonpricingptmdetail: {
                    type: OonpricingptmdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oonpricingptmdetail')
                },

                oonpricinglogo: {
                    type: OonpricinglogoType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oonpricinglogo')
                },

                oonpricingptmcomphold: {
                    type: OonpricingptmcompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oonpricingptmcomphold')
                },

                networksetting: {
                    type: NetworksettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Networksetting')
                },

                oonpricingptmprov: {
                    type: OonpricingptmprovType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oonpricingptmprov')
                },

                oonpricingptmcomp: {
                    type: OonpricingptmcompType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oonpricingptmcomp')
                },

                oonpricingptmcompnote: {
                    type: OonpricingptmcompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oonpricingptmcompnote')
                },

                networkmedpolicy: {
                    type: NetworkmedpolicyType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Networkmedpolicy')
                },

                oonpricingptmregion: {
                    type: OonpricingptmregionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oonpricingptmregion')
                },

                networktypecode: {
                    type: NetworktypecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Networktypecode')
                },

                oonpricingschedauditdetail: {
                    type: OonpricingschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oonpricingschedauditdetail')
                },

                oonpricingsched: {
                    type: OonpricingschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oonpricingsched')
                },

                oonpricingschedorderdetail: {
                    type: OonpricingschedorderdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oonpricingschedorderdetail')
                },

                oonpricingschedhold: {
                    type: OonpricingschedholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oonpricingschedhold')
                },

                oonpricingservicetype: {
                    type: OonpricingservicetypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oonpricingservicetype')
                },

                oonptmcomponentauditdetail: {
                    type: OonptmcomponentauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oonptmcomponentauditdetail')
                },

                oppservicecompdetail: {
                    type: OppservicecompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oppservicecompdetail')
                },

                oppservicecomp: {
                    type: OppservicecompType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oppservicecomp')
                },

                oonpricingschedtimeline: {
                    type: OonpricingschedtimelineType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oonpricingschedtimeline')
                },

                oppservicecompauditdetail: {
                    type: OppservicecompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oppservicecompauditdetail')
                },

                oonpricingschedorder: {
                    type: OonpricingschedorderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oonpricingschedorder')
                },

                oppservicecompnote: {
                    type: OppservicecompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oppservicecompnote')
                },

                oppservicecomphold: {
                    type: OppservicecompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oppservicecomphold')
                },

                oppservicecompmultprocreduct: {
                    type: OppservicecompmultprocreductType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oppservicecompmultprocreduct')
                },

                oppservicecompdetailpricing: {
                    type: OppservicecompdetailpricingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oppservicecompdetailpricing')
                },

                oppservicemodifiercompassign: {
                    type: OppservicemodifiercompassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oppservicemodifiercompassign')
                },

                outliercomp: {
                    type: OutliercompType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Outliercomp')
                },

                outliercompauditdetail: {
                    type: OutliercompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Outliercompauditdetail')
                },

                outliercompdetail: {
                    type: OutliercompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Outliercompdetail')
                },

                oppservicemodifiercompassignhx: {
                    type: OppservicemodifiercompassignhxType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oppservicemodifiercompassignhx')
                },

                outliercompclaimclass: {
                    type: OutliercompclaimclassType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Outliercompclaimclass')
                },

                outliercomphold: {
                    type: OutliercompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Outliercomphold')
                },

                outliercompnote: {
                    type: OutliercompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Outliercompnote')
                },

                overridereasoncode: {
                    type: OverridereasoncodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Overridereasoncode')
                },

                overridereasoncodeauditdetail: {
                    type: OverridereasoncodeauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Overridereasoncodeauditdetail')
                },

                oonpricingschednote: {
                    type: OonpricingschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oonpricingschednote')
                },

                passthrucomp: {
                    type: PassthrucompType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Passthrucomp')
                },

                oppservicemodassignauditdetail: {
                    type: OppservicemodassignauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Oppservicemodassignauditdetail')
                },

                passthrucompauditdetail: {
                    type: PassthrucompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Passthrucompauditdetail')
                },

                paytoaddressqueue: {
                    type: PaytoaddressqueueType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Paytoaddressqueue')
                },

                ownergroup: {
                    type: OwnergroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ownergroup')
                },

                passthrucompdetailsamedayrev: {
                    type: PassthrucompdetailsamedayrevType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Passthrucompdetailsamedayrev')
                },

                passthrucompclaimclass: {
                    type: PassthrucompclaimclassType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Passthrucompclaimclass')
                },

                passthrucomphold: {
                    type: PassthrucompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Passthrucomphold')
                },

                passthrucompdetail: {
                    type: PassthrucompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Passthrucompdetail')
                },

                passthrucompnote: {
                    type: PassthrucompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Passthrucompnote')
                },

                permission: {
                    type: PermissionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Permission')
                },

                permissiongroupauditdetail: {
                    type: PermissiongroupauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Permissiongroupauditdetail')
                },

                permissiongroup: {
                    type: PermissiongroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Permissiongroup')
                },

                pfscomp: {
                    type: PfscompType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pfscomp')
                },

                permissiongrouppermission: {
                    type: PermissiongrouppermissionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Permissiongrouppermission')
                },

                pfscompdefaultmodcompassign: {
                    type: PfscompdefaultmodcompassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pfscompdefaultmodcompassign')
                },

                pfscompnote: {
                    type: PfscompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pfscompnote')
                },

                pfsmodifiercompassign: {
                    type: PfsmodifiercompassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pfsmodifiercompassign')
                },

                pfscomphold: {
                    type: PfscompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pfscomphold')
                },

                pfscompposset: {
                    type: PfscomppossetType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pfscompposset')
                },

                pfscompauditdetail: {
                    type: PfscompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pfscompauditdetail')
                },

                placeofservicecategory: {
                    type: PlaceofservicecategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Placeofservicecategory')
                },

                placeofservicesetcatdetail: {
                    type: PlaceofservicesetcatdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Placeofservicesetcatdetail')
                },

                pfscompprocedure: {
                    type: PfscompprocedureType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pfscompprocedure')
                },

                pfsfileuploadheader: {
                    type: PfsfileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pfsfileuploadheader')
                },

                placeofserviceset: {
                    type: PlaceofservicesetType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Placeofserviceset')
                },

                pfscompprocmodifier: {
                    type: PfscompprocmodifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pfscompprocmodifier')
                },

                pfscompprotechcompassign: {
                    type: PfscompprotechcompassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pfscompprotechcompassign')
                },

                placeofservicesetauditdetail: {
                    type: PlaceofservicesetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Placeofservicesetauditdetail')
                },

                pricingsched: {
                    type: PricingschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pricingsched')
                },

                placeofservicesetcatdetaildef: {
                    type: PlaceofservicesetcatdetaildefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Placeofservicesetcatdetaildef')
                },

                pricingschedorder: {
                    type: PricingschedorderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pricingschedorder')
                },

                pricingschednote: {
                    type: PricingschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pricingschednote')
                },

                poscategory: {
                    type: PoscategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Poscategory')
                },

                placeofservicesetcat: {
                    type: PlaceofservicesetcatType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Placeofservicesetcat')
                },

                pricingschedauditdetail: {
                    type: PricingschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pricingschedauditdetail')
                },

                pricingschedhold: {
                    type: PricingschedholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pricingschedhold')
                },

                poscategorycode: {
                    type: PoscategorycodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Poscategorycode')
                },

                pricingmethodtypeexclusion: {
                    type: PricingmethodtypeexclusionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pricingmethodtypeexclusion')
                },

                pricingschedorderclaimclass: {
                    type: PricingschedorderclaimclassType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pricingschedorderclaimclass')
                },

                pricingservicecategory: {
                    type: PricingservicecategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pricingservicecategory')
                },

                pricingset: {
                    type: PricingsetType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pricingset')
                },

                pricingsetauditdetail: {
                    type: PricingsetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pricingsetauditdetail')
                },

                pricingschedorderdetail: {
                    type: PricingschedorderdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pricingschedorderdetail')
                },

                pricingsetsched: {
                    type: PricingsetschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pricingsetsched')
                },

                pricingsetsource: {
                    type: PricingsetsourceType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pricingsetsource')
                },

                pricingsettingauditdetail: {
                    type: PricingsettingauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pricingsettingauditdetail')
                },

                pricingsetnote: {
                    type: PricingsetnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pricingsetnote')
                },

                proccategory: {
                    type: ProccategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Proccategory')
                },

                pricingsettingmpr: {
                    type: PricingsettingmprType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pricingsettingmpr')
                },

                pricingsetting: {
                    type: PricingsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pricingsetting')
                },

                procedureset: {
                    type: ProceduresetType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Procedureset')
                },

                pricingsettingnote: {
                    type: PricingsettingnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pricingsettingnote')
                },

                pricingsettingdmemodifier: {
                    type: PricingsettingdmemodifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pricingsettingdmemodifier')
                },

                proceduresetauditdetail: {
                    type: ProceduresetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Proceduresetauditdetail')
                },

                pricingspiref: {
                    type: PricingspirefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Pricingspiref')
                },

                proccoderangecat: {
                    type: ProccoderangecatType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Proccoderangecat')
                },

                proceduresetcat: {
                    type: ProceduresetcatType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Proceduresetcat')
                },

                proceduresetcatdetaildef: {
                    type: ProceduresetcatdetaildefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Proceduresetcatdetaildef')
                },

                proceduresetcatdetail: {
                    type: ProceduresetcatdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Proceduresetcatdetail')
                },

                prodbennetworksched: {
                    type: ProdbennetworkschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Prodbennetworksched')
                },

                producer: {
                    type: ProducerType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Producer')
                },

                prodbenefittype: {
                    type: ProdbenefittypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Prodbenefittype')
                },

                prodbengroup: {
                    type: ProdbengroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Prodbengroup')
                },

                prodgovbentype: {
                    type: ProdgovbentypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Prodgovbentype')
                },

                producerphone: {
                    type: ProducerphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Producerphone')
                },

                producernote: {
                    type: ProducernoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Producernote')
                },

                producerexternalid: {
                    type: ProducerexternalidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Producerexternalid')
                },

                produceraddress: {
                    type: ProduceraddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Produceraddress')
                },

                product: {
                    type: ProductType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Product')
                },

                productnote: {
                    type: ProductnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Productnote')
                },

                productauditdetail: {
                    type: ProductauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Productauditdetail')
                },

                productvalidation: {
                    type: ProductvalidationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Productvalidation')
                },

                producerauditdetail: {
                    type: ProducerauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Producerauditdetail')
                },

                productgensetting: {
                    type: ProductgensettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Productgensetting')
                },

                promptpaysched: {
                    type: PromptpayschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Promptpaysched')
                },

                profclaimsetting: {
                    type: ProfclaimsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Profclaimsetting')
                },

                promptpayscheddetail: {
                    type: PromptpayscheddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Promptpayscheddetail')
                },

                promptpayschedauditdetail: {
                    type: PromptpayschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Promptpayschedauditdetail')
                },

                promptpayschednote: {
                    type: PromptpayschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Promptpayschednote')
                },

                protechsplitcompdetail: {
                    type: ProtechsplitcompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Protechsplitcompdetail')
                },

                productbenefit: {
                    type: ProductbenefitType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Productbenefit')
                },

                protechsplitcompauditdetail: {
                    type: ProtechsplitcompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Protechsplitcompauditdetail')
                },

                protechsplitcomp: {
                    type: ProtechsplitcompType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Protechsplitcomp')
                },

                provcategory: {
                    type: ProvcategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcategory')
                },

                provcertsched: {
                    type: ProvcertschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcertsched')
                },

                provcertschedauditdetail: {
                    type: ProvcertschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcertschedauditdetail')
                },

                provcertschedaccreditation: {
                    type: ProvcertschedaccreditationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcertschedaccreditation')
                },

                protechsplitcompnote: {
                    type: ProtechsplitcompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Protechsplitcompnote')
                },

                provcertschedclia: {
                    type: ProvcertschedcliaType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcertschedclia')
                },

                provcertschedboardcert: {
                    type: ProvcertschedboardcertType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcertschedboardcert')
                },

                provcertschedexcludeprovider: {
                    type: ProvcertschedexcludeproviderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcertschedexcludeprovider')
                },

                provcertschedlicense: {
                    type: ProvcertschedlicenseType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcertschedlicense')
                },

                provcertschedhold: {
                    type: ProvcertschedholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcertschedhold')
                },

                provcertsetauditdetail: {
                    type: ProvcertsetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcertsetauditdetail')
                },

                provcertsethold: {
                    type: ProvcertsetholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcertsethold')
                },

                provcertschedtaxonomy: {
                    type: ProvcertschedtaxonomyType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcertschedtaxonomy')
                },

                provcertschednote: {
                    type: ProvcertschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcertschednote')
                },

                provcertsetnote: {
                    type: ProvcertsetnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcertsetnote')
                },

                provcertsetschedassign: {
                    type: ProvcertsetschedassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcertsetschedassign')
                },

                provcertschedserv: {
                    type: ProvcertschedservType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcertschedserv')
                },

                provcontract: {
                    type: ProvcontractType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontract')
                },

                provcertscheddegree: {
                    type: ProvcertscheddegreeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcertscheddegree')
                },

                provcontractaffilnetpanel: {
                    type: ProvcontractaffilnetpanelType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractaffilnetpanel')
                },

                provcertset: {
                    type: ProvcertsetType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcertset')
                },

                provcertschedstate: {
                    type: ProvcertschedstateType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcertschedstate')
                },

                provcontractaffiliation: {
                    type: ProvcontractaffiliationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractaffiliation')
                },

                provcontractaddress: {
                    type: ProvcontractaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractaddress')
                },

                provcontractauditdetail: {
                    type: ProvcontractauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractauditdetail')
                },

                provcontractcarrierfilinglimit: {
                    type: ProvcontractcarrierfilinglimitType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractcarrierfilinglimit')
                },

                provcontractfilinglimit: {
                    type: ProvcontractfilinglimitType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractfilinglimit')
                },

                provcontractcarrier: {
                    type: ProvcontractcarrierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractcarrier')
                },

                provcontractfinpenaffiliation: {
                    type: ProvcontractfinpenaffiliationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractfinpenaffiliation')
                },

                provcontractheader: {
                    type: ProvcontractheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractheader')
                },

                provcontractheadernote: {
                    type: ProvcontractheadernoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractheadernote')
                },

                provcontractheaderauditdetail: {
                    type: ProvcontractheaderauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractheaderauditdetail')
                },

                provcontractfinancialpen: {
                    type: ProvcontractfinancialpenType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractfinancialpen')
                },

                provcontractid: {
                    type: ProvcontractidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractid')
                },

                provcontracthold: {
                    type: ProvcontractholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontracthold')
                },

                provcontractlobclausecode: {
                    type: ProvcontractlobclausecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractlobclausecode')
                },

                provcontractlob: {
                    type: ProvcontractlobType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractlob')
                },

                provcontractmedpolicy: {
                    type: ProvcontractmedpolicyType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractmedpolicy')
                },

                provcontractmembergroup: {
                    type: ProvcontractmembergroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractmembergroup')
                },

                provcontractnetwork: {
                    type: ProvcontractnetworkType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractnetwork')
                },

                provcontractlobfilinglimit: {
                    type: ProvcontractlobfilinglimitType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractlobfilinglimit')
                },

                provcontractowner: {
                    type: ProvcontractownerType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractowner')
                },

                provcontractnote: {
                    type: ProvcontractnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractnote')
                },

                provcontractproduct: {
                    type: ProvcontractproductType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractproduct')
                },

                provcontractplan: {
                    type: ProvcontractplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractplan')
                },

                provcontracttaxonomy: {
                    type: ProvcontracttaxonomyType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontracttaxonomy')
                },

                provcontractsupportteam: {
                    type: ProvcontractsupportteamType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractsupportteam')
                },

                provcontracttin: {
                    type: ProvcontracttinType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontracttin')
                },

                provdirsuppress: {
                    type: ProvdirsuppressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provdirsuppress')
                },

                provcontracttermeventlog: {
                    type: ProvcontracttermeventlogType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontracttermeventlog')
                },

                provdirsuppressauditdetail: {
                    type: ProvdirsuppressauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provdirsuppressauditdetail')
                },

                provexceptiondiagcode: {
                    type: ProvexceptiondiagcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provexceptiondiagcode')
                },

                provexceptionflag: {
                    type: ProvexceptionflagType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provexceptionflag')
                },

                provdirsuppressregion: {
                    type: ProvdirsuppressregionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provdirsuppressregion')
                },

                provexceptionlob: {
                    type: ProvexceptionlobType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provexceptionlob')
                },

                provexceptionplaceofservice: {
                    type: ProvexceptionplaceofserviceType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provexceptionplaceofservice')
                },

                provexceptionmodcode: {
                    type: ProvexceptionmodcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provexceptionmodcode')
                },

                provexceptionfundingsource: {
                    type: ProvexceptionfundingsourceType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provexceptionfundingsource')
                },

                provcontractcarriersupportteam: {
                    type: ProvcontractcarriersupportteamType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provcontractcarriersupportteam')
                },

                provexceptionproccode: {
                    type: ProvexceptionproccodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provexceptionproccode')
                },

                provider: {
                    type: ProviderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provider')
                },

                provideralias: {
                    type: ProvideraliasType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provideralias')
                },

                provideraccreditation: {
                    type: ProvideraccreditationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provideraccreditation')
                },

                provideradverseaction: {
                    type: ProvideradverseactionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provideradverseaction')
                },

                provideradverseactioncode: {
                    type: ProvideradverseactioncodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provideradverseactioncode')
                },

                providerassignmenttype: {
                    type: ProviderassignmenttypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerassignmenttype')
                },

                provexceptionstate: {
                    type: ProvexceptionstateType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provexceptionstate')
                },

                providerapplication: {
                    type: ProviderapplicationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerapplication')
                },

                providerassigntypetaxonomycode: {
                    type: ProviderassigntypetaxonomycodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerassigntypetaxonomycode')
                },

                provexceptionrevcode: {
                    type: ProvexceptionrevcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provexceptionrevcode')
                },

                provideradversebasis: {
                    type: ProvideradversebasisType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provideradversebasis')
                },

                providerauditdetail: {
                    type: ProviderauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerauditdetail')
                },

                providercontactaddressphone: {
                    type: ProvidercontactaddressphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providercontactaddressphone')
                },

                providercontactaddress: {
                    type: ProvidercontactaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providercontactaddress')
                },

                providercontactelectroniccom: {
                    type: ProvidercontactelectroniccomType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providercontactelectroniccom')
                },

                providercontactphone: {
                    type: ProvidercontactphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providercontactphone')
                },

                providereducation: {
                    type: ProvidereducationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providereducation')
                },

                providercontactauditdetail: {
                    type: ProvidercontactauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providercontactauditdetail')
                },

                providerelectroniccomm: {
                    type: ProviderelectroniccommType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerelectroniccomm')
                },

                providerfedexcl: {
                    type: ProviderfedexclType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerfedexcl')
                },

                providerhold: {
                    type: ProviderholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerhold')
                },

                providerhospitalaffil: {
                    type: ProviderhospitalaffilType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerhospitalaffil')
                },

                providerencumbrance: {
                    type: ProviderencumbranceType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerencumbrance')
                },

                providerhour: {
                    type: ProviderhourType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerhour')
                },

                providerid: {
                    type: ProvideridType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerid')
                },

                providercertification: {
                    type: ProvidercertificationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providercertification')
                },

                providerencumbrancepayment: {
                    type: ProviderencumbrancepaymentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerencumbrancepayment')
                },

                providerlicense: {
                    type: ProviderlicenseType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerlicense')
                },

                providercover: {
                    type: ProvidercoverType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providercover')
                },

                providercontact: {
                    type: ProvidercontactType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providercontact')
                },

                provideridlocation: {
                    type: ProvideridlocationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provideridlocation')
                },

                providercredential: {
                    type: ProvidercredentialType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providercredential')
                },

                providerlanguage: {
                    type: ProviderlanguageType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerlanguage')
                },

                providerjudgement: {
                    type: ProviderjudgementType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerjudgement')
                },

                providerliabilityin: {
                    type: ProviderliabilityinType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Providerliabilityin')
                },

                providerlocaffilclinicaleff: {
                    type: ProviderlocaffilclinicaleffType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerlocaffilclinicaleff')
                },

                providerlocationaffiliation: {
                    type: ProviderlocationaffiliationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerlocationaffiliation')
                },

                providerlocationcontact: {
                    type: ProviderlocationcontactType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerlocationcontact')
                },

                providerlocationlanguage: {
                    type: ProviderlocationlanguageType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerlocationlanguage')
                },

                providerlocationhospaffil: {
                    type: ProviderlocationhospaffilType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerlocationhospaffil')
                },

                providerlocationaccred: {
                    type: ProviderlocationaccredType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerlocationaccred')
                },

                providerlocationtaxonomy: {
                    type: ProviderlocationtaxonomyType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerlocationtaxonomy')
                },

                providermalpractice: {
                    type: ProvidermalpracticeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providermalpractice')
                },

                providerlocationphone: {
                    type: ProviderlocationphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerlocationphone')
                },

                providernote: {
                    type: ProvidernoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providernote')
                },

                providerorgaffiliation: {
                    type: ProviderorgaffiliationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerorgaffiliation')
                },

                providerorgfacility: {
                    type: ProviderorgfacilityType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerorgfacility')
                },

                providerorgelectroniccomm: {
                    type: ProviderorgelectroniccommType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerorgelectroniccomm')
                },

                providerorgauditdetail: {
                    type: ProviderorgauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerorgauditdetail')
                },

                providerorgalias: {
                    type: ProviderorgaliasType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerorgalias')
                },

                providerorglocation: {
                    type: ProviderorglocationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerorglocation')
                },

                providerorg: {
                    type: ProviderorgType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerorg')
                },

                providerorghold: {
                    type: ProviderorgholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerorghold')
                },

                providerorgidlocation: {
                    type: ProviderorgidlocationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerorgidlocation')
                },

                providerorgid: {
                    type: ProviderorgidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerorgid')
                },

                providerorglocationphone: {
                    type: ProviderorglocationphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerorglocationphone')
                },

                providerorgtin: {
                    type: ProviderorgtinType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerorgtin')
                },

                providerorglocationclia: {
                    type: ProviderorglocationcliaType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerorglocationclia')
                },

                providerorgqueue: {
                    type: ProviderorgqueueType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerorgqueue')
                },

                providerpremiumdesignation: {
                    type: ProviderpremiumdesignationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerpremiumdesignation')
                },

                providerorgnote: {
                    type: ProviderorgnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerorgnote')
                },

                providerorglocationclaimalias: {
                    type: ProviderorglocationclaimaliasType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerorglocationclaimalias')
                },

                providerpeerreview: {
                    type: ProviderpeerreviewType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerpeerreview')
                },

                providerqueue: {
                    type: ProviderqueueType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerqueue')
                },

                providerprocessexception: {
                    type: ProviderprocessexceptionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerprocessexception')
                },

                providerqueueheader: {
                    type: ProviderqueueheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerqueueheader')
                },

                providerqueueattachment: {
                    type: ProviderqueueattachmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerqueueattachment')
                },

                providerreference: {
                    type: ProviderreferenceType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerreference')
                },

                providersanction: {
                    type: ProvidersanctionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providersanction')
                },

                providertaxonomygroup: {
                    type: ProvidertaxonomygroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providertaxonomygroup')
                },

                providersanctionlicense: {
                    type: ProvidersanctionlicenseType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providersanctionlicense')
                },

                providerrefaddress: {
                    type: ProviderrefaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerrefaddress')
                },

                providertinaddreleccomm: {
                    type: ProvidertinaddreleccommType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providertinaddreleccomm')
                },

                providersetting: {
                    type: ProvidersettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Providersetting')
                },

                providertaxonomy: {
                    type: ProvidertaxonomyType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providertaxonomy')
                },

                providertinaddrphone: {
                    type: ProvidertinaddrphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providertinaddrphone')
                },

                provjudgeinvestigation: {
                    type: ProvjudgeinvestigationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provjudgeinvestigation')
                },

                providerworkhistory: {
                    type: ProviderworkhistoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Providerworkhistory')
                },

                provspecialtycat: {
                    type: ProvspecialtycatType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provspecialtycat')
                },

                provspecialtyset: {
                    type: ProvspecialtysetType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provspecialtyset')
                },

                provjudgeoffense: {
                    type: ProvjudgeoffenseType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provjudgeoffense')
                },

                provspecialtysetauditdetail: {
                    type: ProvspecialtysetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provspecialtysetauditdetail')
                },

                provspecialtysetcat: {
                    type: ProvspecialtysetcatType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provspecialtysetcat')
                },

                provspecialtysetcatdetaildef: {
                    type: ProvspecialtysetcatdetaildefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provspecialtysetcatdetaildef')
                },

                provtaxonomyassign: {
                    type: ProvtaxonomyassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provtaxonomyassign')
                },

                provspecialtysetcatdetail: {
                    type: ProvspecialtysetcatdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provspecialtysetcatdetail')
                },

                provtin: {
                    type: ProvtinType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provtin')
                },

                provtinaddress: {
                    type: ProvtinaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provtinaddress')
                },

                provtinauditdetail: {
                    type: ProvtinauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provtinauditdetail')
                },

                provtinaddressesclaimalias: {
                    type: ProvtinaddressesclaimaliasType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provtinaddressesclaimalias')
                },

                queueclaimtype: {
                    type: QueueclaimtypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Queueclaimtype')
                },

                queueeditcode: {
                    type: QueueeditcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Queueeditcode')
                },

                qualityandefficiencycodetype: {
                    type: QualityandefficiencycodetypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Qualityandefficiencycodetype')
                },

                provtinstate: {
                    type: ProvtinstateType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provtinstate')
                },

                provtaxonomycodeassign: {
                    type: ProvtaxonomycodeassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provtaxonomycodeassign')
                },

                provtinnote: {
                    type: ProvtinnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provtinnote')
                },

                queuememgroup: {
                    type: QueuememgroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Queuememgroup')
                },

                queueheader: {
                    type: QueueheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Queueheader')
                },

                queueprovtinid: {
                    type: QueueprovtinidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Queueprovtinid')
                },

                queuename: {
                    type: QueuenameType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Queuename')
                },

                queuerole: {
                    type: QueueroleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Queuerole')
                },

                reference: {
                    type: ReferenceType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Reference')
                },

                referencefilterchild: {
                    type: ReferencefilterchildType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Referencefilterchild')
                },

                queueroutingcode: {
                    type: QueueroutingcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Queueroutingcode')
                },

                referencefiltercustom: {
                    type: ReferencefiltercustomType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Referencefiltercustom')
                },

                referenceheader: {
                    type: ReferenceheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Referenceheader')
                },

                regentity: {
                    type: RegentityType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Regentity')
                },

                regentityauditdetail: {
                    type: RegentityauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Regentityauditdetail')
                },

                regentitycontact: {
                    type: RegentitycontactType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Regentitycontact')
                },

                regentitycontactaddress: {
                    type: RegentitycontactaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Regentitycontactaddress')
                },

                regentitycontacthour: {
                    type: RegentitycontacthourType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Regentitycontacthour')
                },

                regentitycontactphone: {
                    type: RegentitycontactphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Regentitycontactphone')
                },

                regentitycontacteleccom: {
                    type: RegentitycontacteleccomType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Regentitycontacteleccom')
                },

                queuegroup: {
                    type: QueuegroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Queuegroup')
                },

                provtinqueue: {
                    type: ProvtinqueueType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Provtinqueue')
                },

                queuegrouprole: {
                    type: QueuegrouproleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Queuegrouprole')
                },

                queueattachment: {
                    type: QueueattachmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Queueattachment')
                },

                regentitydept: {
                    type: RegentitydeptType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Regentitydept')
                },

                regentitydeptaddress: {
                    type: RegentitydeptaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Regentitydeptaddress')
                },

                regentitydeptcontact: {
                    type: RegentitydeptcontactType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Regentitydeptcontact')
                },

                queuegroupuser: {
                    type: QueuegroupuserType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Queuegroupuser')
                },

                regentitydepthour: {
                    type: RegentitydepthourType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Regentitydepthour')
                },

                regentitydepteleccom: {
                    type: RegentitydepteleccomType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Regentitydepteleccom')
                },

                regentityguardrail: {
                    type: RegentityguardrailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Regentityguardrail')
                },

                regentityguardrailerisa: {
                    type: RegentityguardrailerisaType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Regentityguardrailerisa')
                },

                regentityguardrailbenefit: {
                    type: RegentityguardrailbenefitType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Regentityguardrailbenefit')
                },

                regentityguardrailmetallic: {
                    type: RegentityguardrailmetallicType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Regentityguardrailmetallic')
                },

                regentitydeptphone: {
                    type: RegentitydeptphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Regentitydeptphone')
                },

                regentityguardrailgovt: {
                    type: RegentityguardrailgovtType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Regentityguardrailgovt')
                },

                regentityguardrailplan: {
                    type: RegentityguardrailplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Regentityguardrailplan')
                },

                region: {
                    type: RegionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Region')
                },

                relationshipauditdetail: {
                    type: RelationshipauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Relationshipauditdetail')
                },

                regentitynote: {
                    type: RegentitynoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Regentitynote')
                },

                relationshipnote: {
                    type: RelationshipnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Relationshipnote')
                },

                relationshipschedule: {
                    type: RelationshipscheduleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Relationshipschedule')
                },

                relationshiplevelcode: {
                    type: RelationshiplevelcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Relationshiplevelcode')
                },

                relationshipschedulelevel: {
                    type: RelationshipschedulelevelType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Relationshipschedulelevel')
                },

                remarkcode: {
                    type: RemarkcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcode')
                },

                remarkcodeauditdetail: {
                    type: RemarkcodeauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodeauditdetail')
                },

                remarkcodebenefit: {
                    type: RemarkcodebenefitType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodebenefit')
                },

                remarkcodeclaimeditcode: {
                    type: RemarkcodeclaimeditcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodeclaimeditcode')
                },

                remarkcodeaccounttype: {
                    type: RemarkcodeaccounttypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodeaccounttype')
                },

                remarkcodedeleg: {
                    type: RemarkcodedelegType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodedeleg')
                },

                remarkcodeorc: {
                    type: RemarkcodeorcType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodeorc')
                },

                remarkcodediag: {
                    type: RemarkcodediagType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodediag')
                },

                remarkcodepo: {
                    type: RemarkcodepoType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodepo')
                },

                remarkcodeexpense: {
                    type: RemarkcodeexpenseType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodeexpense')
                },

                remarkcodebilltype: {
                    type: RemarkcodebilltypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodebilltype')
                },

                remarkcodedrc: {
                    type: RemarkcodedrcType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodedrc')
                },

                remarkcodeclinicaleditresponse: {
                    type: RemarkcodeclinicaleditresponseType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodeclinicaleditresponse')
                },

                remarkcodemedpolicyrule: {
                    type: RemarkcodemedpolicyruleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodemedpolicyrule')
                },

                remarkcodemodifiercode: {
                    type: RemarkcodemodifiercodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodemodifiercode')
                },

                remarkcodeinternaladjustrsncd: {
                    type: RemarkcodeinternaladjustrsncdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodeinternaladjustrsncd')
                },

                remarkcodeprovdesignation: {
                    type: RemarkcodeprovdesignationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodeprovdesignation')
                },

                remarkcodepricingmethodtype: {
                    type: RemarkcodepricingmethodtypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodepricingmethodtype')
                },

                remarkcodeproc: {
                    type: RemarkcodeprocType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodeproc')
                },

                remarkcodescheduleauditdetail: {
                    type: RemarkcodescheduleauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodescheduleauditdetail')
                },

                remarkcodeschedbrand: {
                    type: RemarkcodeschedbrandType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodeschedbrand')
                },

                remarkcodesitusstate: {
                    type: RemarkcodesitusstateType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodesitusstate')
                },

                remarkcodeschedule: {
                    type: RemarkcodescheduleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodeschedule')
                },

                remarkcodesurcharge: {
                    type: RemarkcodesurchargeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodesurcharge')
                },

                remarkcoderevenue: {
                    type: RemarkcoderevenueType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcoderevenue')
                },

                remarkcodepricingcomp: {
                    type: RemarkcodepricingcompType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodepricingcomp')
                },

                remarkcodescheduleprov: {
                    type: RemarkcodescheduleprovType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodescheduleprov')
                },

                remarkcodevendorremarkcode: {
                    type: RemarkcodevendorremarkcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodevendorremarkcode')
                },

                remarkcodetrigger: {
                    type: RemarkcodetriggerType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodetrigger')
                },

                revenuebasefileuploaddetail: {
                    type: RevenuebasefileuploaddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Revenuebasefileuploaddetail')
                },

                revenuebasefileuploadheader: {
                    type: RevenuebasefileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Revenuebasefileuploadheader')
                },

                reportexecution: {
                    type: ReportexecutionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Reportexecution')
                },

                revenuecatrange: {
                    type: RevenuecatrangeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Revenuecatrange')
                },

                revenuecode: {
                    type: RevenuecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Revenuecode')
                },

                revenuesetauditdetail: {
                    type: RevenuesetauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Revenuesetauditdetail')
                },

                revenueset: {
                    type: RevenuesetType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Revenueset')
                },

                revenuecategory: {
                    type: RevenuecategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Revenuecategory')
                },

                revenuesetcatdetail: {
                    type: RevenuesetcatdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Revenuesetcatdetail')
                },

                revenuesetcatdetaildef: {
                    type: RevenuesetcatdetaildefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Revenuesetcatdetaildef')
                },

                remarkcodeschedulenote: {
                    type: RemarkcodeschedulenoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Remarkcodeschedulenote')
                },

                revenuesetcat: {
                    type: RevenuesetcatType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Revenuesetcat')
                },

                riskarrangecontractaffilprov: {
                    type: RiskarrangecontractaffilprovType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontractaffilprov')
                },

                riskarrangecontractdetail: {
                    type: RiskarrangecontractdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontractdetail')
                },

                riskarrangecontractdofr: {
                    type: RiskarrangecontractdofrType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontractdofr')
                },

                riderbenefittypestack: {
                    type: RiderbenefittypestackType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Riderbenefittypestack')
                },

                rhceditcodeassign: {
                    type: RhceditcodeassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Rhceditcodeassign')
                },

                riskarrangecontract: {
                    type: RiskarrangecontractType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontract')
                },

                riskarrangecontractentity: {
                    type: RiskarrangecontractentityType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontractentity')
                },

                riskarrangecontractcarrier: {
                    type: RiskarrangecontractcarrierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontractcarrier')
                },

                riskarrangecontractdeleg: {
                    type: RiskarrangecontractdelegType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontractdeleg')
                },

                riskarrangecontractlob: {
                    type: RiskarrangecontractlobType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontractlob')
                },

                riskarrangecontractnote: {
                    type: RiskarrangecontractnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontractnote')
                },

                riskarrangecontrauditdetail: {
                    type: RiskarrangecontrauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontrauditdetail')
                },

                riskarrangecontractplan: {
                    type: RiskarrangecontractplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontractplan')
                },

                riskarrangecontracthold: {
                    type: RiskarrangecontractholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontracthold')
                },

                riskarrangecontractproduct: {
                    type: RiskarrangecontractproductType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontractproduct')
                },

                rulecriterion: {
                    type: RulecriterionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Rulecriterion')
                },

                rule: {
                    type: RuleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Rule')
                },

                riskarrangecontrdelegfct: {
                    type: RiskarrangecontrdelegfctType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Riskarrangecontrdelegfct')
                },

                ruleservice: {
                    type: RuleserviceType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ruleservice')
                },

                rulelog: {
                    type: RulelogType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Rulelog')
                },

                routingcode: {
                    type: RoutingcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Routingcode')
                },

                rulelogheader: {
                    type: RulelogheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Rulelogheader')
                },

                rvu: {
                    type: RvuType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Rvu')
                },

                ruleassign: {
                    type: RuleassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ruleassign')
                },

                roomandboardrev: {
                    type: RoomandboardrevType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Roomandboardrev')
                },

                ruleset: {
                    type: RulesetType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ruleset')
                },

                rvufileuploadheader: {
                    type: RvufileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Rvufileuploadheader')
                },

                rxclaimsetting: {
                    type: RxclaimsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Rxclaimsetting')
                },

                salesoffice: {
                    type: SalesofficeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Salesoffice')
                },

                salesofficenote: {
                    type: SalesofficenoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Salesofficenote')
                },

                salesofficeauditdetail: {
                    type: SalesofficeauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Salesofficeauditdetail')
                },

                salesofficeexternalid: {
                    type: SalesofficeexternalidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Salesofficeexternalid')
                },

                scm: {
                    type: ScmType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Scm')
                },

                scheduledjoblock: {
                    type: ScheduledjoblockType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Scheduledjoblock')
                },

                scheduledjobauditdetail: {
                    type: ScheduledjobauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Scheduledjobauditdetail')
                },

                scheduledjob: {
                    type: ScheduledjobType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Scheduledjob')
                },

                scmbenecodemodifier: {
                    type: ScmbenecodemodifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Scmbenecodemodifier')
                },

                scmbenecodeposcategory: {
                    type: ScmbenecodeposcategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Scmbenecodeposcategory')
                },

                scmbenecodeproccategory: {
                    type: ScmbenecodeproccategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Scmbenecodeproccategory')
                },

                scmbenecodeprovcategory: {
                    type: ScmbenecodeprovcategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Scmbenecodeprovcategory')
                },

                scmbenecoderevenuecategory: {
                    type: ScmbenecoderevenuecategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Scmbenecoderevenuecategory')
                },

                scmnote: {
                    type: ScmnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Scmnote')
                },

                scmtoservcompvalidation: {
                    type: ScmtoservcompvalidationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Scmtoservcompvalidation')
                },

                scmvalidation: {
                    type: ScmvalidationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Scmvalidation')
                },

                servcomp: {
                    type: ServcompType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Servcomp')
                },

                servcompauditdetail: {
                    type: ServcompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Servcompauditdetail')
                },

                servcompnote: {
                    type: ServcompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Servcompnote')
                },

                rvufileuploadstaging: {
                    type: RvufileuploadstagingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Rvufileuploadstaging')
                },

                scmbenecode: {
                    type: ScmbenecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Scmbenecode')
                },

                ruleserviceproperty: {
                    type: RuleservicepropertyType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ruleserviceproperty')
                },

                servcompservdetailbilltypecode: {
                    type: ServcompservdetailbilltypecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetailbilltypecode')
                },

                scmbenecodebilltypecategory: {
                    type: ScmbenecodebilltypecategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Scmbenecodebilltypecategory')
                },

                scheduledjoblockauditdetail: {
                    type: ScheduledjoblockauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Scheduledjoblockauditdetail')
                },

                schemaVersion: {
                    type: SchemaVersionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('SchemaVersion')
                },

                servcompserv: {
                    type: ServcompservType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Servcompserv')
                },

                servcompservdetaildiag: {
                    type: ServcompservdetaildiagType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetaildiag')
                },

                scmbenecodediagcategory: {
                    type: ScmbenecodediagcategoryType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Scmbenecodediagcategory')
                },

                servcompservdetailbilltype: {
                    type: ServcompservdetailbilltypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetailbilltype')
                },

                servcompservdetailproc: {
                    type: ServcompservdetailprocType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetailproc')
                },

                servcompservdetailprovcode: {
                    type: ServcompservdetailprovcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetailprovcode')
                },

                servcompservdetailprovsplty: {
                    type: ServcompservdetailprovspltyType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetailprovsplty')
                },

                servcompservdetailpo: {
                    type: ServcompservdetailpoType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetailpo')
                },

                servcompservdetaildiagcode: {
                    type: ServcompservdetaildiagcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetaildiagcode')
                },

                servcompservdetailmodifier: {
                    type: ServcompservdetailmodifierType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetailmodifier')
                },

                servcompservdetail: {
                    type: ServcompservdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetail')
                },

                servcompservdetailposcode: {
                    type: ServcompservdetailposcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetailposcode')
                },

                servcomptempadjud: {
                    type: ServcomptempadjudType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Servcomptempadjud')
                },

                servcompservdetailrevcode: {
                    type: ServcompservdetailrevcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetailrevcode')
                },

                servcompvalidation: {
                    type: ServcompvalidationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Servcompvalidation')
                },

                serviceplan: {
                    type: ServiceplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Serviceplan')
                },

                servcompservdetailrevenue: {
                    type: ServcompservdetailrevenueType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetailrevenue')
                },

                serviceareaauditdetail: {
                    type: ServiceareaauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Serviceareaauditdetail')
                },

                servicearea: {
                    type: ServiceareaType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Servicearea')
                },

                servcompservdetailproccode: {
                    type: ServcompservdetailproccodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Servcompservdetailproccode')
                },

                serviceareapostal: {
                    type: ServiceareapostalType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Serviceareapostal')
                },

                serviceareanote: {
                    type: ServiceareanoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Serviceareanote')
                },

                serviceplanexternalid: {
                    type: ServiceplanexternalidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Serviceplanexternalid')
                },

                servicearearegion: {
                    type: ServicearearegionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Servicearearegion')
                },

                servicecatauditdetail: {
                    type: ServicecatauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Servicecatauditdetail')
                },

                settingsnote: {
                    type: SettingsnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Settingsnote')
                },

                serviceplanauditdetail: {
                    type: ServiceplanauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Serviceplanauditdetail')
                },

                statmodifiercomp: {
                    type: StatmodifiercompType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Statmodifiercomp')
                },

                statmodifiercompauditdetail: {
                    type: StatmodifiercompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Statmodifiercompauditdetail')
                },

                settingsnotedetail: {
                    type: SettingsnotedetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Settingsnotedetail')
                },

                statmodifiercompcode: {
                    type: StatmodifiercompcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Statmodifiercompcode')
                },

                statmodifiercompnote: {
                    type: StatmodifiercompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Statmodifiercompnote')
                },

                subpayrollfrequency: {
                    type: SubpayrollfrequencyType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Subpayrollfrequency')
                },

                subsacctsetting: {
                    type: SubsacctsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Subsacctsetting')
                },

                subsaffiliation834Hist: {
                    type: Subsaffiliation834HistType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Subsaffiliation834Hist')
                },

                subsaffiliationattribute: {
                    type: SubsaffiliationattributeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Subsaffiliationattribute')
                },

                subsaffiliation: {
                    type: SubsaffiliationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Subsaffiliation')
                },

                subsaffiliationpopbillingpref: {
                    type: SubsaffiliationpopbillingprefType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Subsaffiliationpopbillingpref')
                },

                subsbeneficiary: {
                    type: SubsbeneficiaryType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Subsbeneficiary')
                },

                subsaffiliationexternalid: {
                    type: SubsaffiliationexternalidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Subsaffiliationexternalid')
                },

                subsbeneficiaryparty: {
                    type: SubsbeneficiarypartyType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Subsbeneficiaryparty')
                },

                subsbeneficiarymem: {
                    type: SubsbeneficiarymemType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Subsbeneficiarymem')
                },

                subsmginfo: {
                    type: SubsmginfoType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Subsmginfo')
                },

                subsjob: {
                    type: SubsjobType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Subsjob')
                },

                substscheduleletter: {
                    type: SubstscheduleletterType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Substscheduleletter')
                },

                superbillclaimsetting: {
                    type: SuperbillclaimsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Superbillclaimsetting')
                },

                substschedule: {
                    type: SubstscheduleType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Substschedule')
                },

                supportteamaddress: {
                    type: SupportteamaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Supportteamaddress')
                },

                supportteam: {
                    type: SupportteamType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Supportteam')
                },

                serviceplanfunctioncode: {
                    type: ServiceplanfunctioncodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Serviceplanfunctioncode')
                },

                settingsauditdetail: {
                    type: SettingsauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Settingsauditdetail')
                },

                serviceplanfunction: {
                    type: ServiceplanfunctionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Serviceplanfunction')
                },

                servicetypecode: {
                    type: ServicetypecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Servicetypecode')
                },

                supportteamauditdetail: {
                    type: SupportteamauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Supportteamauditdetail')
                },

                supportteameleccomm: {
                    type: SupportteameleccommType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Supportteameleccomm')
                },

                supportteamaddressphone: {
                    type: SupportteamaddressphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Supportteamaddressphone')
                },

                surchargesched: {
                    type: SurchargeschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Surchargesched')
                },

                supportteamphone: {
                    type: SupportteamphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Supportteamphone')
                },

                surchargeschedexcludeclaimtype: {
                    type: SurchargeschedexcludeclaimtypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Surchargeschedexcludeclaimtype')
                },

                surchargeschedexcludepo: {
                    type: SurchargeschedexcludepoType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Surchargeschedexcludepo')
                },

                surchargeschedauditdetail: {
                    type: SurchargeschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Surchargeschedauditdetail')
                },

                surchargeschedprovtin: {
                    type: SurchargeschedprovtinType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Surchargeschedprovtin')
                },

                surchargeschedrate: {
                    type: SurchargeschedrateType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Surchargeschedrate')
                },

                surchargeschedexcludebilltype: {
                    type: SurchargeschedexcludebilltypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Surchargeschedexcludebilltype')
                },

                surchargeschednote: {
                    type: SurchargeschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Surchargeschednote')
                },

                surchargeschedrateexcludegovt: {
                    type: SurchargeschedrateexcludegovtType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Surchargeschedrateexcludegovt')
                },

                surchargeschedrateplan: {
                    type: SurchargeschedrateplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Surchargeschedrateplan')
                },

                surchargeschedratebenefit: {
                    type: SurchargeschedratebenefitType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Surchargeschedratebenefit')
                },

                sysKey: {
                    type: SysKeyType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('SysKey')
                },

                sysSetFramwrk: {
                    type: SysSetFramwrkType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('SysSetFramwrk')
                },

                sysErrLog: {
                    type: SysErrLogType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('SysErrLog')
                },

                sysSetFlSy: {
                    type: SysSetFlSyType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('SysSetFlSy')
                },

                sysSetEmailGrp: {
                    type: SysSetEmailGrpType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('SysSetEmailGrp')
                },

                sysSetSql: {
                    type: SysSetSqlType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('SysSetSql')
                },

                sysSqlLog: {
                    type: SysSqlLogType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('SysSqlLog')
                },

                sysSetPrgTbl: {
                    type: SysSetPrgTblType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('SysSetPrgTbl')
                },

                sysSetRpt: {
                    type: SysSetRptType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('SysSetRpt')
                },

                sysaddressauditdetail: {
                    type: SysaddressauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Sysaddressauditdetail')
                },

                sysaddressnote: {
                    type: SysaddressnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Sysaddressnote')
                },

                sysaddress: {
                    type: SysaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Sysaddress')
                },

                sysbillingdefaultvalue: {
                    type: SysbillingdefaultvalueType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Sysbillingdefaultvalue')
                },

                sysfinsettingbenefittype: {
                    type: SysfinsettingbenefittypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Sysfinsettingbenefittype')
                },

                sysfinsetting: {
                    type: SysfinsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Sysfinsetting')
                },

                sysaddresstypeassign: {
                    type: SysaddresstypeassignType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Sysaddresstypeassign')
                },

                sysfinsettingauditdetail: {
                    type: SysfinsettingauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Sysfinsettingauditdetail')
                },

                sysfinsettingfinattribschedap: {
                    type: SysfinsettingfinattribschedapType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Sysfinsettingfinattribschedap')
                },

                sysfinsettinginterest: {
                    type: SysfinsettinginterestType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Sysfinsettinginterest')
                },

                sysfinsettingfinattribschedar: {
                    type: SysfinsettingfinattribschedarType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Sysfinsettingfinattribschedar')
                },

                sysfinsettingfinattribsched: {
                    type: SysfinsettingfinattribschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Sysfinsettingfinattribsched')
                },

                sysfinsettingreportutil: {
                    type: SysfinsettingreportutilType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Sysfinsettingreportutil')
                },

                sysfinsettingsurcharge: {
                    type: SysfinsettingsurchargeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Sysfinsettingsurcharge')
                },

                sysfinsettingruleserv: {
                    type: SysfinsettingruleservType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Sysfinsettingruleserv')
                },

                sysfinsettingnote: {
                    type: SysfinsettingnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Sysfinsettingnote')
                },

                sysfinsettingservplan: {
                    type: SysfinsettingservplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Sysfinsettingservplan')
                },

                sysfinsettingutilplan: {
                    type: SysfinsettingutilplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Sysfinsettingutilplan')
                },

                sysmemgroupsetting: {
                    type: SysmemgroupsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Sysmemgroupsetting')
                },

                sysphonenumberauditdetail: {
                    type: SysphonenumberauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Sysphonenumberauditdetail')
                },

                sysphonenumberlanguage: {
                    type: SysphonenumberlanguageType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Sysphonenumberlanguage')
                },

                sysphonenumber: {
                    type: SysphonenumberType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Sysphonenumber')
                },

                systemTbl: {
                    type: SystemTblType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('SystemTbl')
                },

                systemactuarialvalue: {
                    type: SystemactuarialvalueType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Systemactuarialvalue')
                },

                systemactivitylog: {
                    type: SystemactivitylogType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Systemactivitylog')
                },

                sysphonenumbernote: {
                    type: SysphonenumbernoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Sysphonenumbernote')
                },

                systemcontactdepartment: {
                    type: SystemcontactdepartmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Systemcontactdepartment')
                },

                systemcontactname: {
                    type: SystemcontactnameType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Systemcontactname')
                },

                systemcorpholiday: {
                    type: SystemcorpholidayType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Systemcorpholiday')
                },

                systemcontactphone: {
                    type: SystemcontactphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Systemcontactphone')
                },

                systemcontactaddress: {
                    type: SystemcontactaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Systemcontactaddress')
                },

                systemdepartmenthour: {
                    type: SystemdepartmenthourType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Systemdepartmenthour')
                },

                systemdepartmentphone: {
                    type: SystemdepartmentphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Systemdepartmentphone')
                },

                systemdepartmentaddress: {
                    type: SystemdepartmentaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Systemdepartmentaddress')
                },

                systemediresponse: {
                    type: SystemediresponseType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Systemediresponse')
                },

                systemediresponsestatus: {
                    type: SystemediresponsestatusType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Systemediresponsestatus')
                },

                systemediresponseloop: {
                    type: SystemediresponseloopType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Systemediresponseloop')
                },

                systemedisetting: {
                    type: SystemedisettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Systemedisetting')
                },

                systemmsasetting: {
                    type: SystemmsasettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Systemmsasetting')
                },

                systempermit: {
                    type: SystempermitType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Systempermit')
                },

                systemgeneralsetting: {
                    type: SystemgeneralsettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Systemgeneralsetting')
                },

                systemmsaorderofacct: {
                    type: SystemmsaorderofacctType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Systemmsaorderofacct')
                },

                systemfederal: {
                    type: SystemfederalType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Systemfederal')
                },

                systemsettingsrestclient: {
                    type: SystemsettingsrestclientType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Systemsettingsrestclient')
                },

                systemsettingstemporary: {
                    type: SystemsettingstemporaryType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Systemsettingstemporary')
                },

                systemsettingsauditdetail: {
                    type: SystemsettingsauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Systemsettingsauditdetail')
                },

                taxonomyaccreditation: {
                    type: TaxonomyaccreditationType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Taxonomyaccreditation')
                },

                taxonomybasefileuploadheader: {
                    type: TaxonomybasefileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Taxonomybasefileuploadheader')
                },

                taxonomycode: {
                    type: TaxonomycodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Taxonomycode')
                },

                taxonomybasefileuploaddetail: {
                    type: TaxonomybasefileuploaddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Taxonomybasefileuploaddetail')
                },

                thresholdparameter: {
                    type: ThresholdparameterType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Thresholdparameter')
                },

                timelyfilingschedauditdetail: {
                    type: TimelyfilingschedauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Timelyfilingschedauditdetail')
                },

                taxtypecode: {
                    type: TaxtypecodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Taxtypecode')
                },

                timelyfilingsched: {
                    type: TimelyfilingschedType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Timelyfilingsched')
                },

                timelyfilingscheddetail: {
                    type: TimelyfilingscheddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Timelyfilingscheddetail')
                },

                thresholdparameterdetail: {
                    type: ThresholdparameterdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Thresholdparameterdetail')
                },

                timelyfilingschednote: {
                    type: TimelyfilingschednoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Timelyfilingschednote')
                },

                tradingpartnerconfig: {
                    type: TradingpartnerconfigType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Tradingpartnerconfig')
                },

                tooth: {
                    type: ToothType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Tooth')
                },

                transferpricingpatientstatus: {
                    type: TransferpricingpatientstatusType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Transferpricingpatientstatus')
                },

                ucrbasefileuploadstaging: {
                    type: UcrbasefileuploadstagingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ucrbasefileuploadstaging')
                },

                ucrbasefileuploadheader: {
                    type: UcrbasefileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ucrbasefileuploadheader')
                },

                ucrcompauditdetail: {
                    type: UcrcompauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ucrcompauditdetail')
                },

                ucrcomp: {
                    type: UcrcompType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ucrcomp')
                },

                ucrcompdetail: {
                    type: UcrcompdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ucrcompdetail')
                },

                ucrcomphold: {
                    type: UcrcompholdType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ucrcomphold')
                },

                systemstate: {
                    type: SystemstateType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Systemstate')
                },

                ucrcompdetailprof: {
                    type: UcrcompdetailprofType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ucrcompdetailprof')
                },

                ucrcompnote: {
                    type: UcrcompnoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Ucrcompnote')
                },

                umauthauditdetail: {
                    type: UmauthauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Umauthauditdetail')
                },

                systemworkhour: {
                    type: SystemworkhourType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Systemworkhour')
                },

                umauthdiagnosis: {
                    type: UmauthdiagnosisType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Umauthdiagnosis')
                },

                umauthbeddayrange: {
                    type: UmauthbeddayrangeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Umauthbeddayrange')
                },

                umauthfacilitydecision: {
                    type: UmauthfacilitydecisionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Umauthfacilitydecision')
                },

                umauth: {
                    type: UmauthType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Umauth')
                },

                umauthprovider: {
                    type: UmauthproviderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Umauthprovider')
                },

                umauthprovideraltid: {
                    type: UmauthprovideraltidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Umauthprovideraltid')
                },

                umauthfacilitytype: {
                    type: UmauthfacilitytypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Umauthfacilitytype')
                },

                umauthproviderroletype: {
                    type: UmauthproviderroletypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Umauthproviderroletype')
                },

                umauthservice: {
                    type: UmauthserviceType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Umauthservice')
                },

                umauthservicefacility: {
                    type: UmauthservicefacilityType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Umauthservicefacility')
                },

                umreferral: {
                    type: UmreferralType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Umreferral')
                },

                umauthservicenonfacil: {
                    type: UmauthservicenonfacilType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Umauthservicenonfacil')
                },

                umauthservicedecision: {
                    type: UmauthservicedecisionType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Umauthservicedecision')
                },

                umreferraldiagnosis: {
                    type: UmreferraldiagnosisType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Umreferraldiagnosis')
                },

                umreferralauditdetail: {
                    type: UmreferralauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Umreferralauditdetail')
                },

                useractivitylog: {
                    type: UseractivitylogType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Useractivitylog')
                },

                useractivity: {
                    type: UseractivityType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Useractivity')
                },

                useraddress: {
                    type: UseraddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Useraddress')
                },

                userauditdetail: {
                    type: UserauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Userauditdetail')
                },

                umreferralservice: {
                    type: UmreferralserviceType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Umreferralservice')
                },

                umreferralprovideraltid: {
                    type: UmreferralprovideraltidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Umreferralprovideraltid')
                },

                umreferralprovider: {
                    type: UmreferralproviderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Umreferralprovider')
                },

                usergroupuser: {
                    type: UsergroupuserType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Usergroupuser')
                },

                userdatasecuritygroup: {
                    type: UserdatasecuritygroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Userdatasecuritygroup')
                },

                userclaimcancelcode: {
                    type: UserclaimcancelcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Userclaimcancelcode')
                },

                usergrouppermissiongroup: {
                    type: UsergrouppermissiongroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Usergrouppermissiongroup')
                },

                userclaimcancelcodeauditdetail: {
                    type: UserclaimcancelcodeauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Userclaimcancelcodeauditdetail')
                },

                usersplitclaimcodeauditdetail: {
                    type: UsersplitclaimcodeauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Usersplitclaimcodeauditdetail')
                },

                umreferralproviderroletype: {
                    type: UmreferralproviderroletypeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Umreferralproviderroletype')
                },

                usergroupauditdetail: {
                    type: UsergroupauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Usergroupauditdetail')
                },

                usersplitclaimcode: {
                    type: UsersplitclaimcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Usersplitclaimcode')
                },

                usertelephone: {
                    type: UsertelephoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Usertelephone')
                },

                usergroup: {
                    type: UsergroupType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Usergroup')
                },

                utilizationplan: {
                    type: UtilizationplanType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Utilizationplan')
                },

                usertable: {
                    type: UsertableType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Usertable')
                },

                utilizationplanauditdetail: {
                    type: UtilizationplanauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Utilizationplanauditdetail')
                },

                utilizationplansetting: {
                    type: UtilizationplansettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Utilizationplansetting')
                },

                variablecontent: {
                    type: VariablecontentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Variablecontent')
                },

                utilizationplanexternalid: {
                    type: UtilizationplanexternalidType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Utilizationplanexternalid')
                },

                vendoraccount: {
                    type: VendoraccountType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Vendoraccount')
                },

                vendorauditdetail: {
                    type: VendorauditdetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Vendorauditdetail')
                },

                vendor: {
                    type: VendorType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Vendor')
                },

                vendorcontactdepartment: {
                    type: VendorcontactdepartmentType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Vendorcontactdepartment')
                },

                vendorcontactname: {
                    type: VendorcontactnameType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Vendorcontactname')
                },

                vendorcontactphone: {
                    type: VendorcontactphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Vendorcontactphone')
                },

                vendorcontactaddress: {
                    type: VendorcontactaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Vendorcontactaddress')
                },

                vendordepartmenthour: {
                    type: VendordepartmenthourType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Vendordepartmenthour')
                },

                vendordepartmentphone: {
                    type: VendordepartmentphoneType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Vendordepartmentphone')
                },

                vendorpackageucr: {
                    type: VendorpackageucrType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Vendorpackageucr')
                },

                vendornote: {
                    type: VendornoteType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Vendornote')
                },

                vendordepartmentaddress: {
                    type: VendordepartmentaddressType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLInt
                        }
                    },

                    resolve: getEntityResolver('Vendordepartmentaddress')
                },

                vendorremarkcode: {
                    type: VendorremarkcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Vendorremarkcode')
                },

                vendorworkhour: {
                    type: VendorworkhourType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Vendorworkhour')
                },

                vendorpermit: {
                    type: VendorpermitType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Vendorpermit')
                },

                zipcodefileuploaddetail: {
                    type: ZipcodefileuploaddetailType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Zipcodefileuploaddetail')
                },

                zipplus4: {
                    type: Zipplus4Type,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Zipplus4')
                },

                zipcode: {
                    type: ZipcodeType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Zipcode')
                },

                zipcodefileuploadheader: {
                    type: ZipcodefileuploadheaderType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Zipcodefileuploadheader')
                },

                userqualitysetting: {
                    type: UserqualitysettingType,

                    args: {
                        id: {
                            name: 'id',
                            type: GraphQLString
                        }
                    },

                    resolve: getEntityResolver('Userqualitysetting')
                }
            };
        }
    })
});

module.exports = schema;