'use strict';

var resolveMap = {
    'Acctbalap': {
        'name': 'Acctbalap',
        'table': 'acctbalap',
        'primaryKey': 'apTransactionID',

        'aliases': {
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'timelineSeqNum': 'id',
            'apTransactionID': 'id',
            'claimID': 'claimId',
            'famMemberID': 'famMemberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'famMember': 'famMemberId'
        },

        'listReferences': {}
    },

    'Acctbal': {
        'name': 'Acctbal',
        'table': 'acctbal',
        'primaryKey': 'acctBalSeqNum',

        'aliases': {
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'msaID': 'msaId',
            'carryoverFUSID': 'carryoverFusid',
            'linkToAcctBalSetID': 'linkToAcctBalSetId',
            'linkFrmAcctBalSetID': 'linkFrmAcctBalSetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'purseID': 'purseId',
            'caremarkID': 'caremarkId'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Acctbalar': {
        'name': 'Acctbalar',
        'table': 'acctbalar',
        'primaryKey': 'arTransactionID',

        'aliases': {
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'timelineSeqNum': 'id',
            'arTransactionID': 'id',
            'familyUnitScheduleID': 'familyUnitScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbalarhx': {
        'name': 'Acctbalarhx',
        'table': 'acctbalarhx',
        'primaryKey': 'hxSequenceNum',

        'aliases': {
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'timelineSeqNum': 'id',
            'arTransactionID': 'id',
            'hxSequenceNum': 'id',
            'familyUnitScheduleID': 'familyUnitScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbalauditdetail': {
        'name': 'Acctbalauditdetail',
        'table': 'acctbalauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'acctBalSetID': 'acctBalSetId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbalfamacsclaimhx': {
        'name': 'Acctbalfamacsclaimhx',
        'table': 'acctbalfamacsclaimhx',
        'primaryKey': 'sequenceNum',

        'aliases': {
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'parStatusType': 'id',
            'claimID': 'id',
            'hxSequenceNum': 'id',
            'applyOOPAccessAmt': 'applyOopAccessAmt',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'acsPtSeqNum': 'id',
            'sequenceNum': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbalmemacsclaimhx': {
        'name': 'Acctbalmemacsclaimhx',
        'table': 'acctbalmemacsclaimhx',
        'primaryKey': 'sequenceNum',

        'aliases': {
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'famMemberID': 'id',
            'parStatusType': 'id',
            'claimID': 'id',
            'hxSequenceNum': 'id',
            'applyOOPAccessAmt': 'applyOopAccessAmt',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'acsPtSeqNum': 'id',
            'sequenceNum': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbalauditdetailhx': {
        'name': 'Acctbalauditdetailhx',
        'table': 'acctbalauditdetailhx',
        'primaryKey': 'hxSequenceNum',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'acctBalSetID': 'acctBalSetId',
            'hxSequenceNum': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbalmemacsclaim': {
        'name': 'Acctbalmemacsclaim',
        'table': 'acctbalmemacsclaim',
        'primaryKey': 'sequenceNum',

        'aliases': {
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'famMemberID': 'id',
            'parStatusType': 'id',
            'claimID': 'id',
            'applyOOPAccessAmt': 'applyOopAccessAmt',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'acsPtSeqNum': 'id',
            'sequenceNum': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbalhx': {
        'name': 'Acctbalhx',
        'table': 'acctbalhx',
        'primaryKey': 'hxSequenceNum',

        'aliases': {
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'hxSequenceNum': 'id',
            'msaID': 'msaId',
            'subscriberID': 'subscriberId',
            'purseID': 'purseId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'caremarkID': 'caremarkId',
            'carryoverFUSID': 'carryoverFusid',
            'linkToAcctBalSetID': 'linkToAcctBalSetId',
            'linkFrmAcctBalSetID': 'linkFrmAcctBalSetId'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Acctbalfamacspthx': {
        'name': 'Acctbalfamacspthx',
        'table': 'acctbalfamacspthx',
        'primaryKey': 'acsPtSeqNum',

        'aliases': {
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'parStatusType': 'id',
            'hxSequenceNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'acsPtSeqNum': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbalindcarryoverhx': {
        'name': 'Acctbalindcarryoverhx',
        'table': 'acctbalindcarryoverhx',
        'primaryKey': 'hxSequenceNum',

        'aliases': {
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'famMemberID': 'id',
            'hxSequenceNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbalfamacsclaim': {
        'name': 'Acctbalfamacsclaim',
        'table': 'acctbalfamacsclaim',
        'primaryKey': 'sequenceNum',

        'aliases': {
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'parStatusType': 'id',
            'claimID': 'id',
            'applyOOPAccessAmt': 'applyOopAccessAmt',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'acsPtSeqNum': 'id',
            'sequenceNum': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbalmemacspt': {
        'name': 'Acctbalmemacspt',
        'table': 'acctbalmemacspt',
        'primaryKey': 'acsPtSeqNum',

        'aliases': {
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'famMemberID': 'id',
            'parStatusType': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'acsPtSeqNum': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbalaphx': {
        'name': 'Acctbalaphx',
        'table': 'acctbalaphx',
        'primaryKey': 'hxSequenceNum',

        'aliases': {
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'timelineSeqNum': 'id',
            'apTransactionID': 'id',
            'hxSequenceNum': 'id',
            'claimID': 'claimId',
            'famMemberID': 'famMemberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'famMember': 'famMemberId'
        },

        'listReferences': {}
    },

    'Acctbalfamacspt': {
        'name': 'Acctbalfamacspt',
        'table': 'acctbalfamacspt',
        'primaryKey': 'acsPtSeqNum',

        'aliases': {
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'parStatusType': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'acsPtSeqNum': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbalindcarryover': {
        'name': 'Acctbalindcarryover',
        'table': 'acctbalindcarryover',
        'primaryKey': 'famMemberID',

        'aliases': {
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'famMemberID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbalnotedetail': {
        'name': 'Acctbalnotedetail',
        'table': 'acctbalnotedetail',
        'primaryKey': 'noteDetailID',

        'aliases': {
            'acctBalSetID': 'acctBalSetId',
            'noteID': 'noteId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'noteDetailID': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbalnotedetailhx': {
        'name': 'Acctbalnotedetailhx',
        'table': 'acctbalnotedetailhx',
        'primaryKey': 'noteDetailID',

        'aliases': {
            'acctBalSetID': 'acctBalSetId',
            'noteID': 'noteId',
            'hxSequenceNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'noteDetailID': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbalnote': {
        'name': 'Acctbalnote',
        'table': 'acctbalnote',
        'primaryKey': 'noteID',

        'aliases': {
            'acctBalSetID': 'id',
            'noteID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbalmemacspthx': {
        'name': 'Acctbalmemacspthx',
        'table': 'acctbalmemacspthx',
        'primaryKey': 'acsPtSeqNum',

        'aliases': {
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'famMemberID': 'id',
            'parStatusType': 'id',
            'hxSequenceNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'acsPtSeqNum': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbalnotehx': {
        'name': 'Acctbalnotehx',
        'table': 'acctbalnotehx',
        'primaryKey': 'hxSequenceNum',

        'aliases': {
            'acctBalSetID': 'id',
            'noteID': 'id',
            'hxSequenceNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbalprefundaphx': {
        'name': 'Acctbalprefundaphx',
        'table': 'acctbalprefundaphx',
        'primaryKey': 'hxSequenceNum',

        'aliases': {
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'apTransactionID': 'id',
            'hxSequenceNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbalprefundap': {
        'name': 'Acctbalprefundap',
        'table': 'acctbalprefundap',
        'primaryKey': 'apTransactionID',

        'aliases': {
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'apTransactionID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbaltimeline': {
        'name': 'Acctbaltimeline',
        'table': 'acctbaltimeline',
        'primaryKey': 'timelineSeqNum',

        'aliases': {
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'timelineSeqNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbalprefundarhx': {
        'name': 'Acctbalprefundarhx',
        'table': 'acctbalprefundarhx',
        'primaryKey': 'hxSequenceNum',

        'aliases': {
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'arTransactionID': 'id',
            'hxSequenceNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbaltimelinehx': {
        'name': 'Acctbaltimelinehx',
        'table': 'acctbaltimelinehx',
        'primaryKey': 'hxSequenceNum',

        'aliases': {
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'timelineSeqNum': 'id',
            'hxSequenceNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbalpurse': {
        'name': 'Acctbalpurse',
        'table': 'acctbalpurse',
        'primaryKey': 'acctPurseSeqNum',

        'aliases': {
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'acctPurseSeqNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbalpursehx': {
        'name': 'Acctbalpursehx',
        'table': 'acctbalpursehx',
        'primaryKey': 'hxSequenceNum',

        'aliases': {
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'acctPurseSeqNum': 'id',
            'hxSequenceNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumbypass': {
        'name': 'Accumbypass',
        'table': 'accumbypass',
        'primaryKey': 'accumBypassID',

        'aliases': {
            'accumBypassID': 'id',
            'planID': 'planId',
            'benefitBundleID': 'benefitBundleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Acctbalprefundar': {
        'name': 'Acctbalprefundar',
        'table': 'acctbalprefundar',
        'primaryKey': 'arTransactionID',

        'aliases': {
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'arTransactionID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumbypassaudit': {
        'name': 'Accumbypassaudit',
        'table': 'accumbypassaudit',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'accumBypassID': 'accumBypassId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumbypassplan': {
        'name': 'Accumbypassplan',
        'table': 'accumbypassplan',
        'primaryKey': 'accumBypassPlanID',

        'aliases': {
            'accumBypassPlanID': 'id',
            'accumBypassID': 'accumBypassId',
            'memberID': 'memberId',
            'planID': 'planId',
            'memberBenefitID': 'memberBenefitId',
            'controlPlanID': 'controlPlanId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'subscriberID': 'subscriberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'bypassID': 'bypassId',
            'benefitBundleOptionID': 'benefitBundleOptionId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Accumbypasstx': {
        'name': 'Accumbypasstx',
        'table': 'accumbypasstx',
        'primaryKey': 'accumBypassTXID',

        'aliases': {
            'accumBypassTXID': 'id',
            'accumBypassID': 'accumBypassId',
            'externalClaimID': 'externalClaimId',
            'planID': 'planId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'benefitBundlePlanID': 'benefitBundlePlanId',
            'subscriberID': 'subscriberId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumcobreserve': {
        'name': 'Accumcobreserve',
        'table': 'accumcobreserve',
        'primaryKey': 'accumCOBReserveID',

        'aliases': {
            'accumCOBReserveID': 'id',
            'memberID': 'memberId',
            'planID': 'planId',
            'benefitBundleID': 'benefitBundleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Accumcobreservetx': {
        'name': 'Accumcobreservetx',
        'table': 'accumcobreservetx',
        'primaryKey': 'accumCOBReserveTXID',

        'aliases': {
            'accumCOBReserveTXID': 'id',
            'accumCOBReserveID': 'accumCobReserveId',
            'externalClaimID': 'externalClaimId',
            'externalDOSStart': 'externalDosStart',
            'externalDOSEnd': 'externalDosEnd',
            'accumMessageID': 'accumMessageId',
            'planID': 'planId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'claimID': 'claimId',
            'benefitBundlePlanID': 'benefitBundlePlanId',
            'entityID': 'entityId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumbypasstxsuppress': {
        'name': 'Accumbypasstxsuppress',
        'table': 'accumbypasstxsuppress',
        'primaryKey': 'accumBypassTXSuppressID',

        'aliases': {
            'accumBypassTXSuppressID': 'id',
            'accumBypassTXID': 'accumBypassTxid',
            'accumBypassID': 'accumBypassId',
            'entityID': 'entityId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumdeductfamtxsuppress': {
        'name': 'Accumdeductfamtxsuppress',
        'table': 'accumdeductfamtxsuppress',
        'primaryKey': 'accumDeductFamTXSuppressID',

        'aliases': {
            'accumDeductFamTXSuppressID': 'id',
            'accumDeductFamTXID': 'accumDeductFamTxid',
            'accumDeductFamID': 'accumDeductFamId',
            'entityID': 'entityId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumdeductfamaudit': {
        'name': 'Accumdeductfamaudit',
        'table': 'accumdeductfamaudit',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'accumDeductFamID': 'accumDeductFamId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumdeductfamtx': {
        'name': 'Accumdeductfamtx',
        'table': 'accumdeductfamtx',
        'primaryKey': 'accumDeductFamTXID',

        'aliases': {
            'accumDeductFamTXID': 'id',
            'accumDeductFamID': 'accumDeductFamId',
            'accumDeductIndivTXID': 'accumDeductIndivTxid',
            'externalClaimID': 'externalClaimId',
            'planID': 'planId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'claimID': 'claimId',
            'memberID': 'memberId',
            'externalDOSEnd': 'externalDosEnd',
            'externalDOSStart': 'externalDosStart',
            'accumMessageID': 'accumMessageId',
            'benefitBundlePlanID': 'benefitBundlePlanId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'subscriberID': 'subscriberId',
            'entityID': 'entityId',
            'overageRecoveryTXID': 'overageRecoveryTxid'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Accumdeductindiv': {
        'name': 'Accumdeductindiv',
        'table': 'accumdeductindiv',
        'primaryKey': 'accumDeductIndivID',

        'aliases': {
            'accumDeductIndivID': 'id',
            'planID': 'planId',
            'benefitBundleID': 'benefitBundleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumdeductfam': {
        'name': 'Accumdeductfam',
        'table': 'accumdeductfam',
        'primaryKey': 'accumDeductFamID',

        'aliases': {
            'accumDeductFamID': 'id',
            'planID': 'planId',
            'benefitBundleID': 'benefitBundleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumdeductindivaudit': {
        'name': 'Accumdeductindivaudit',
        'table': 'accumdeductindivaudit',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'accumDeductIndivID': 'accumDeductIndivId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumdeductindivtx': {
        'name': 'Accumdeductindivtx',
        'table': 'accumdeductindivtx',
        'primaryKey': 'accumDeductIndivTXID',

        'aliases': {
            'accumDeductIndivTXID': 'id',
            'accumDeductIndivID': 'accumDeductIndivId',
            'tradingPartnerConfigID': 'tradingPartnerConfigId',
            'externalClaimID': 'externalClaimId',
            'planID': 'planId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'claimID': 'claimId',
            'externalDOSEnd': 'externalDosEnd',
            'externalDOSStart': 'externalDosStart',
            'accumMessageID': 'accumMessageId',
            'benefitBundlePlanID': 'benefitBundlePlanId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'subscriberID': 'subscriberId',
            'entityID': 'entityId',
            'memberID': 'memberId',
            'overageRecoveryTXID': 'overageRecoveryTxid'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Accumdeductindivtxsuppress': {
        'name': 'Accumdeductindivtxsuppress',
        'table': 'accumdeductindivtxsuppress',
        'primaryKey': 'accumDeductIndivTXSuppressID',

        'aliases': {
            'accumDeductIndivTXSuppressID': 'id',
            'accumDeductIndivTXID': 'accumDeductIndivTxid',
            'accumDeductIndivID': 'accumDeductIndivId',
            'entityID': 'entityId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumerror': {
        'name': 'Accumerror',
        'table': 'accumerror',
        'primaryKey': 'accumErrorID',

        'aliases': {
            'accumErrorID': 'id',
            'transID': 'transId',
            'accumMessageID': 'accumMessageId',
            'respondingSystemID': 'respondingSystemId',
            'originalSourceSystemID': 'originalSourceSystemId',
            'extMemberID': 'extMemberId',
            'extSubscriberID': 'extSubscriberId',
            'memGroupID': 'memGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'extMember': 'extMemberId'
        },

        'listReferences': {}
    },

    'Accumdeductindivplan': {
        'name': 'Accumdeductindivplan',
        'table': 'accumdeductindivplan',
        'primaryKey': 'accumDeductIndivPlanID',

        'aliases': {
            'accumDeductIndivPlanID': 'id',
            'accumDeductIndivID': 'accumDeductIndivId',
            'memberID': 'memberId',
            'planID': 'planId',
            'memberBenefitID': 'memberBenefitId',
            'deductibleID': 'deductibleId',
            'controlPlanID': 'controlPlanId',
            'subscriberID': 'subscriberId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Accummaxfamaudit': {
        'name': 'Accummaxfamaudit',
        'table': 'accummaxfamaudit',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'accumMaxFamID': 'accumMaxFamId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumerrornote': {
        'name': 'Accumerrornote',
        'table': 'accumerrornote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'accumErrorID': 'accumErrorId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumlockauditdetail': {
        'name': 'Accumlockauditdetail',
        'table': 'accumlockauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'lockOwnerMemberID': 'lockOwnerMemberId',
            'subscriberID': 'subscriberId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'lockOwnerMember': 'lockOwnerMemberId'
        },

        'listReferences': {}
    },

    'Accumdeductfamplan': {
        'name': 'Accumdeductfamplan',
        'table': 'accumdeductfamplan',
        'primaryKey': 'accumDeductFamPlanID',

        'aliases': {
            'accumDeductFamPlanID': 'id',
            'accumDeductFamID': 'accumDeductFamId',
            'planID': 'planId',
            'subscriberID': 'subscriberId',
            'memberBenefitID': 'memberBenefitId',
            'deductibleID': 'deductibleId',
            'controlPlanID': 'controlPlanId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'benefitBundleOptionID': 'benefitBundleOptionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumerrorconfig': {
        'name': 'Accumerrorconfig',
        'table': 'accumerrorconfig',
        'primaryKey': 'accumErrorCode',

        'aliases': {
            'accumErrorCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accummaxfam': {
        'name': 'Accummaxfam',
        'table': 'accummaxfam',
        'primaryKey': 'accumMaxFamID',

        'aliases': {
            'accumMaxFamID': 'id',
            'planID': 'planId',
            'benefitBundleID': 'benefitBundleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accummaxfamplan': {
        'name': 'Accummaxfamplan',
        'table': 'accummaxfamplan',
        'primaryKey': 'accumMaxFamPlanID',

        'aliases': {
            'accumMaxFamPlanID': 'id',
            'accumMaxFamID': 'accumMaxFamId',
            'planID': 'planId',
            'subscriberID': 'subscriberId',
            'memberBenefitID': 'memberBenefitId',
            'maximumID': 'maximumId',
            'controlPlanID': 'controlPlanId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'memGroupID': 'memGroupId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accummaxindiv': {
        'name': 'Accummaxindiv',
        'table': 'accummaxindiv',
        'primaryKey': 'accumMaxIndivID',

        'aliases': {
            'accumMaxIndivID': 'id',
            'planID': 'planId',
            'benefitBundleID': 'benefitBundleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accummaxfamtx': {
        'name': 'Accummaxfamtx',
        'table': 'accummaxfamtx',
        'primaryKey': 'accumMaxFamTXID',

        'aliases': {
            'accumMaxFamTXID': 'id',
            'accumMaxIndivTXID': 'accumMaxIndivTxid',
            'accumMaxFamID': 'accumMaxFamId',
            'externalClaimID': 'externalClaimId',
            'planID': 'planId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'claimID': 'claimId',
            'memberID': 'memberId',
            'externalDOSEnd': 'externalDosEnd',
            'externalDOSStart': 'externalDosStart',
            'accumMessageID': 'accumMessageId',
            'benefitBundlePlanID': 'benefitBundlePlanId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'subscriberID': 'subscriberId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Accumoopfamtx': {
        'name': 'Accumoopfamtx',
        'table': 'accumoopfamtx',
        'primaryKey': 'oopAccumFamTxID',

        'aliases': {
            'oopAccumFamTxID': 'id',
            'accumOOPFamID': 'accumOopFamId',
            'accumOOPIndivTXID': 'accumOopIndivTxid',
            'externalClaimID': 'externalClaimId',
            'planID': 'planId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'claimID': 'claimId',
            'memberID': 'memberId',
            'externalDOSEnd': 'externalDosEnd',
            'externalDOSStart': 'externalDosStart',
            'accumMessageID': 'accumMessageId',
            'benefitBundlePlanID': 'benefitBundlePlanId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'subscriberID': 'subscriberId',
            'entityID': 'entityId',
            'overageRecoveryTXID': 'overageRecoveryTxid'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Accummaxindivplan': {
        'name': 'Accummaxindivplan',
        'table': 'accummaxindivplan',
        'primaryKey': 'accumMaxIndivPlanID',

        'aliases': {
            'accumMaxIndivPlanID': 'id',
            'accumMaxIndivID': 'accumMaxIndivId',
            'memberID': 'memberId',
            'planID': 'planId',
            'memberBenefitID': 'memberBenefitId',
            'maximumID': 'maximumId',
            'controlPlanID': 'controlPlanId',
            'toothID': 'toothId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'subscriberID': 'subscriberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'memGroupID': 'memGroupId'
        },

        'referenceMap': {
            'member': 'memberId',
            'tooth': 'toothId'
        },

        'listReferences': {}
    },

    'Accummaxindivaudit': {
        'name': 'Accummaxindivaudit',
        'table': 'accummaxindivaudit',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'accumMaxIndivID': 'accumMaxIndivId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accummaxindivtx': {
        'name': 'Accummaxindivtx',
        'table': 'accummaxindivtx',
        'primaryKey': 'accumMaxIndivTXID',

        'aliases': {
            'accumMaxIndivTXID': 'id',
            'accumMaxIndivID': 'accumMaxIndivId',
            'externalClaimID': 'externalClaimId',
            'planID': 'planId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'claimID': 'claimId',
            'externalDOSEnd': 'externalDosEnd',
            'externalDOSStart': 'externalDosStart',
            'accumMessageID': 'accumMessageId',
            'benefitBundlePlanID': 'benefitBundlePlanId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'subscriberID': 'subscriberId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accummaxfamtxsuppress': {
        'name': 'Accummaxfamtxsuppress',
        'table': 'accummaxfamtxsuppress',
        'primaryKey': 'accumMaxFamTXSuppressID',

        'aliases': {
            'accumMaxFamTXSuppressID': 'id',
            'accumMaxFamTXID': 'accumMaxFamTxid',
            'accumMaxFamID': 'accumMaxFamId',
            'entityID': 'entityId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumoopfamtxsuppress': {
        'name': 'Accumoopfamtxsuppress',
        'table': 'accumoopfamtxsuppress',
        'primaryKey': 'accumOOPFamTXSuppressID',

        'aliases': {
            'accumOOPFamTXSuppressID': 'id',
            'oopAccumFamTxID': 'oopAccumFamTxId',
            'accumOOPFamID': 'accumOopFamId',
            'entityID': 'entityId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumoopfam': {
        'name': 'Accumoopfam',
        'table': 'accumoopfam',
        'primaryKey': 'accumOOPFamID',

        'aliases': {
            'accumOOPFamID': 'id',
            'planID': 'planId',
            'benefitBundleID': 'benefitBundleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumoopindiv': {
        'name': 'Accumoopindiv',
        'table': 'accumoopindiv',
        'primaryKey': 'accumOOPIndivID',

        'aliases': {
            'accumOOPIndivID': 'id',
            'planID': 'planId',
            'benefitBundleID': 'benefitBundleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumoopfamaudit': {
        'name': 'Accumoopfamaudit',
        'table': 'accumoopfamaudit',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'accumOOPFamID': 'accumOopFamId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accummaxindivtxsuppress': {
        'name': 'Accummaxindivtxsuppress',
        'table': 'accummaxindivtxsuppress',
        'primaryKey': 'accumMaxIndivTXSuppressID',

        'aliases': {
            'accumMaxIndivTXSuppressID': 'id',
            'accumMaxIndivTXID': 'accumMaxIndivTxid',
            'accumMaxIndivID': 'accumMaxIndivId',
            'entityID': 'entityId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumoopindivtx': {
        'name': 'Accumoopindivtx',
        'table': 'accumoopindivtx',
        'primaryKey': 'accumOOPIndivTXID',

        'aliases': {
            'accumOOPIndivTXID': 'id',
            'accumOOPIndivID': 'accumOopIndivId',
            'externalClaimID': 'externalClaimId',
            'planID': 'planId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'claimID': 'claimId',
            'externalDOSEnd': 'externalDosEnd',
            'externalDOSStart': 'externalDosStart',
            'accumMessageID': 'accumMessageId',
            'benefitBundlePlanID': 'benefitBundlePlanId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'subscriberID': 'subscriberId',
            'entityID': 'entityId',
            'overageRecoveryTXID': 'overageRecoveryTxid'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumoopindivplan': {
        'name': 'Accumoopindivplan',
        'table': 'accumoopindivplan',
        'primaryKey': 'accumOOPIndivPlanID',

        'aliases': {
            'accumOOPIndivPlanID': 'id',
            'accumOOPIndivID': 'accumOopIndivId',
            'memberID': 'memberId',
            'planID': 'planId',
            'memberBenefitID': 'memberBenefitId',
            'stoplossOOPID': 'stoplossOopid',
            'controlPlanID': 'controlPlanId',
            'subscriberID': 'subscriberId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Accumoopfamplan': {
        'name': 'Accumoopfamplan',
        'table': 'accumoopfamplan',
        'primaryKey': 'accumOOPFamPlanID',

        'aliases': {
            'accumOOPFamPlanID': 'id',
            'accumOOPFamID': 'accumOopFamId',
            'planID': 'planId',
            'subscriberID': 'subscriberId',
            'memberBenefitID': 'memberBenefitId',
            'stoplossOOPID': 'stoplossOopid',
            'controlPlanID': 'controlPlanId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'familyOOPAccumType': 'familyOopAccumType',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumoopindivaudit': {
        'name': 'Accumoopindivaudit',
        'table': 'accumoopindivaudit',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'accumOOPIndivID': 'accumOopIndivId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumoopindivtxsuppress': {
        'name': 'Accumoopindivtxsuppress',
        'table': 'accumoopindivtxsuppress',
        'primaryKey': 'accumOOPIndivTXSuppressID',

        'aliases': {
            'accumOOPIndivTXSuppressID': 'id',
            'accumOOPIndivTXID': 'accumOopIndivTxid',
            'accumOOPIndivID': 'accumOopIndivId',
            'entityID': 'entityId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumumauthbedday': {
        'name': 'Accumumauthbedday',
        'table': 'accumumauthbedday',
        'primaryKey': 'accumUmAuthBedDayID',

        'aliases': {
            'accumUmAuthBedDayID': 'id',
            'memberID': 'memberId',
            'umAuthID': 'umAuthId',
            'planID': 'planId',
            'memberBenefitID': 'memberBenefitId',
            'subscriberID': 'subscriberId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'controlPlanID': 'controlPlanId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Accumumauthbeddayrange': {
        'name': 'Accumumauthbeddayrange',
        'table': 'accumumauthbeddayrange',
        'primaryKey': 'accumUmAuthBedDayRangeID',

        'aliases': {
            'accumUmAuthBedDayRangeID': 'id',
            'umAuthBedDayRangeID': 'umAuthBedDayRangeId',
            'umAuthID': 'umAuthId',
            'accumUmAuthBedDayID': 'accumUmAuthBedDayId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumumauthbeddaytx': {
        'name': 'Accumumauthbeddaytx',
        'table': 'accumumauthbeddaytx',
        'primaryKey': 'accumUmAuthBedDayTxID',

        'aliases': {
            'accumUmAuthBedDayTxID': 'id',
            'accumUmAuthBedDayID': 'accumUmAuthBedDayId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumulatorlock': {
        'name': 'Accumulatorlock',
        'table': 'accumulatorlock',
        'primaryKey': 'subscriberID',

        'aliases': {
            'subscriberID': 'id',
            'lockOwnerMemberID': 'lockOwnerMemberId'
        },

        'referenceMap': {
            'lockOwnerMember': 'lockOwnerMemberId'
        },

        'listReferences': {}
    },

    'Accumumauthoutpatient': {
        'name': 'Accumumauthoutpatient',
        'table': 'accumumauthoutpatient',
        'primaryKey': 'accumUmAuthOutpatientID',

        'aliases': {
            'accumUmAuthOutpatientID': 'id',
            'memberID': 'memberId',
            'umAuthID': 'umAuthId',
            'umAuthServiceID': 'umAuthServiceId',
            'planID': 'planId',
            'memberBenefitID': 'memberBenefitId',
            'subscriberID': 'subscriberId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'controlPlanID': 'controlPlanId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Accumumauthservicenonfacil': {
        'name': 'Accumumauthservicenonfacil',
        'table': 'accumumauthservicenonfacil',
        'primaryKey': 'accumUmAuthServiceNonFacilID',

        'aliases': {
            'accumUmAuthServiceNonFacilID': 'id',
            'accumUmAuthOutpatientID': 'accumUmAuthOutpatientId',
            'umAuthID': 'umAuthId',
            'umAuthServiceNonFacilID': 'umAuthServiceNonFacilId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumumauthoutpatienttx': {
        'name': 'Accumumauthoutpatienttx',
        'table': 'accumumauthoutpatienttx',
        'primaryKey': 'accumUmAuthOutpatientTxID',

        'aliases': {
            'accumUmAuthOutpatientTxID': 'id',
            'accumUmAuthOutpatientID': 'accumUmAuthOutpatientId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumumreferraltx': {
        'name': 'Accumumreferraltx',
        'table': 'accumumreferraltx',
        'primaryKey': 'accumUmReferralTxID',

        'aliases': {
            'accumUmReferralTxID': 'id',
            'accumUmReferralID': 'accumUmReferralId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Accumumreferral': {
        'name': 'Accumumreferral',
        'table': 'accumumreferral',
        'primaryKey': 'accumUmReferralID',

        'aliases': {
            'accumUmReferralID': 'id',
            'memberID': 'memberId',
            'umReferralID': 'umReferralId',
            'planID': 'planId',
            'memberBenefitID': 'memberBenefitId',
            'subscriberID': 'subscriberId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'controlPlanID': 'controlPlanId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Adjudschedauditdetail': {
        'name': 'Adjudschedauditdetail',
        'table': 'adjudschedauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'adjudScheduleID': 'adjudScheduleId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Adaclaimsetting': {
        'name': 'Adaclaimsetting',
        'table': 'adaclaimsettings',
        'primaryKey': 'settingID',

        'aliases': {
            'settingID': 'id',
            'adaCOBPaymentsInd': 'adaCobPaymentsInd',
            'adaLine1bReq': 'adaLine1BReq',
            'adaLine18aReq': 'adaLine18AReq',
            'adaLine18bReq': 'adaLine18BReq',
            'adaLine40bReq': 'adaLine40BReq',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Adjudschedlettercode': {
        'name': 'Adjudschedlettercode',
        'table': 'adjudschedlettercodes',
        'primaryKey': 'letterCode',

        'aliases': {
            'adjudScheduleID': 'id',
            'editCode': 'id',
            'letterCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Adjudscheddupclaim': {
        'name': 'Adjudscheddupclaim',
        'table': 'adjudscheddupclaim',
        'primaryKey': 'adjudScheduleID',

        'aliases': {
            'adjudScheduleID': 'id',
            'dupProvTINID': 'dupProvTinid',
            'dupProviderID': 'dupProviderId',
            'dupDOSFrom': 'dupDosFrom',
            'dupDentalPOS': 'dupDentalPos',
            'dupToothID': 'dupToothId',
            'dupDRG': 'dupDrg',
            'dupProfDOSThru': 'dupProfDosThru',
            'dupProfPOS': 'dupProfPos',
            'dupSvcLineProviderID': 'dupSvcLineProviderId',
            'dupExpenseDOSThru': 'dupExpenseDosThru',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'dupBilledToICPMR': 'dupBilledToIcpmr',
            'dupCheckRMOInd': 'dupCheckRmoInd'
        },

        'referenceMap': {
            'dupProvider': 'dupProviderId',
            'dupTooth': 'dupToothId',
            'dupSvcLineProvider': 'dupSvcLineProviderId'
        },

        'listReferences': {}
    },

    'Adjudschedmodifier': {
        'name': 'Adjudschedmodifier',
        'table': 'adjudschedmodifier',
        'primaryKey': 'adjudScheduleID',

        'aliases': {
            'modifierCode': 'id',
            'adjudScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Adjudschedgencode': {
        'name': 'Adjudschedgencode',
        'table': 'adjudschedgencodes',
        'primaryKey': 'genEditCode',

        'aliases': {
            'adjudScheduleID': 'id',
            'editCode': 'id',
            'genEditCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Adjudschedpendtemplate': {
        'name': 'Adjudschedpendtemplate',
        'table': 'adjudschedpendtemplate',
        'primaryKey': 'adjudSchedPendTemplateID',

        'aliases': {
            'adjudSchedPendTemplateID': 'id',
            'adjudScheduleID': 'adjudScheduleId',
            'fulfillTemplateID': 'fulfillTemplateId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Adjudschedpendtemplatevc': {
        'name': 'Adjudschedpendtemplatevc',
        'table': 'adjudschedpendtemplatevc',
        'primaryKey': 'adjudSchedPendTemplateID',

        'aliases': {
            'variableContentID': 'id',
            'adjudSchedPendTemplateID': 'id',
            'adjudScheduleID': 'adjudScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Adjudschedoverridecode': {
        'name': 'Adjudschedoverridecode',
        'table': 'adjudschedoverridecodes',
        'primaryKey': 'overrideReasonCode',

        'aliases': {
            'adjudScheduleID': 'id',
            'editCode': 'id',
            'overrideReasonCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Adjudscheddenycode': {
        'name': 'Adjudscheddenycode',
        'table': 'adjudscheddenycodes',
        'primaryKey': 'denyReasonCode',

        'aliases': {
            'adjudScheduleID': 'id',
            'editCode': 'id',
            'denyReasonCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Adjudschedmemberdiff': {
        'name': 'Adjudschedmemberdiff',
        'table': 'adjudschedmemberdiff',
        'primaryKey': 'adjudScheduleID',

        'aliases': {
            'adjudScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Adjudschedheader': {
        'name': 'Adjudschedheader',
        'table': 'adjudschedheader',
        'primaryKey': 'adjudScheduleID',

        'aliases': {
            'adjudScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Adjudschedproviderdiff': {
        'name': 'Adjudschedproviderdiff',
        'table': 'adjudschedproviderdiff',
        'primaryKey': 'adjudScheduleID',

        'aliases': {
            'adjudScheduleID': 'id',
            'difProvTINName': 'difProvTinName',
            'difProvTINAddrLine1': 'difProvTinAddrLine1',
            'difProvTINCity': 'difProvTinCity',
            'difProvTINState': 'difProvTinState',
            'difProvTINPostalCode': 'difProvTinPostalCode',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Adjudschedsettingsaccount': {
        'name': 'Adjudschedsettingsaccount',
        'table': 'adjudschedsettingsaccount',
        'primaryKey': 'adjudScheduleID',

        'aliases': {
            'pendUntilFundedDRC': 'pendUntilFundedDrc',
            'pendUntilFundMaxdDRC': 'pendUntilFundMaxdDrc',
            'subsDefinedCoinsDRC': 'subsDefinedCoinsDrc',
            'noBenCodeAssignedDRC': 'noBenCodeAssignedDrc',
            'accessPointDRC': 'accessPointDrc',
            'pledgeReductDRC': 'pledgeReductDrc',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'adjudScheduleID': 'id',
            'nonCovRemarkDRC': 'nonCovRemarkDrc',
            'recoupDRC': 'recoupDrc',
            'healthRulesCarrierCoinsDRC': 'healthRulesCarrierCoinsDrc',
            'dualHealthCovDRC': 'dualHealthCovDrc',
            'expenseRulesCarrierCoinsDRC': 'expenseRulesCarrierCoinsDrc',
            'availableBalanceReductionDRC': 'availableBalanceReductionDrc',
            'curBalOnlyExceededDRC': 'curBalOnlyExceededDrc',
            'currentBalAndCarryoverExceededDRC': 'currentBalAndCarryoverExceededDrc',
            'carryoverOnlyExceededDRC': 'carryoverOnlyExceededDrc',
            'perMemberPlanYearMaxDRC': 'perMemberPlanYearMaxDrc',
            'priorBalOnlyExceededDRC': 'priorBalOnlyExceededDrc',
            'currentBalExceededDRC': 'currentBalExceededDrc',
            'perClaimLimitDRC': 'perClaimLimitDrc',
            'lifetimeIndividualDollarMaxDRC': 'lifetimeIndividualDollarMaxDrc',
            'lifetimeIndividualOccurrenceMaxDRC': 'lifetimeIndividualOccurrenceMaxDrc',
            'lifetimeFamilyDollarMaxDRC': 'lifetimeFamilyDollarMaxDrc',
            'lifetimeFamilyOccurrenceMaxDRC': 'lifetimeFamilyOccurrenceMaxDrc',
            'planYearIndividualDollarMaxDRC': 'planYearIndividualDollarMaxDrc',
            'planYearIndividualOccurrenceMaxDRC': 'planYearIndividualOccurrenceMaxDrc',
            'planYearFamilyDollarMaxDRC': 'planYearFamilyDollarMaxDrc',
            'planYearFamilyOccurrenceMaxDRC': 'planYearFamilyOccurrenceMaxDrc',
            'calendarYearIndividualDollarMaxDRC': 'calendarYearIndividualDollarMaxDrc',
            'calendarYearIndividualOccurrenceMaxDRC': 'calendarYearIndividualOccurrenceMaxDrc',
            'calendarYearFamilyDollarMaxDRC': 'calendarYearFamilyDollarMaxDrc',
            'calendarYearFamilyOccurrenceMaxDRC': 'calendarYearFamilyOccurrenceMaxDrc',
            'calendarMonthIndividualDollarMaxDRC': 'calendarMonthIndividualDollarMaxDrc',
            'calendarMonthIndividualOccurrenceMaxDRC': 'calendarMonthIndividualOccurrenceMaxDrc',
            'calendarMonthFamilyDollarMaxDRC': 'calendarMonthFamilyDollarMaxDrc',
            'calendarMonthFamilyOccurrenceMaxDRC': 'calendarMonthFamilyOccurrenceMaxDrc',
            'calendarWeekIndividualDollarMaxDRC': 'calendarWeekIndividualDollarMaxDrc',
            'calendarWeekIndividualOccurrenceMaxDRC': 'calendarWeekIndividualOccurrenceMaxDrc',
            'calendarWeekFamilyDollarMaxDRC': 'calendarWeekFamilyDollarMaxDrc',
            'calendarWeekFamilyOccurrenceMaxDRC': 'calendarWeekFamilyOccurrenceMaxDrc',
            'individualOccurrenceMaxDRC': 'individualOccurrenceMaxDrc',
            'familyOccurrenceMaxDRC': 'familyOccurrenceMaxDrc',
            'codeRulesCalendarMonthMaxDRC': 'codeRulesCalendarMonthMaxDrc',
            'codeRulesPlanYearMaxDRC': 'codeRulesPlanYearMaxDrc',
            'occurrencePerDefinedPeriodMaxDRC': 'occurrencePerDefinedPeriodMaxDrc',
            'codeRulesPerUnitMaxDRC': 'codeRulesPerUnitMaxDrc'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Adjudschedroutecode': {
        'name': 'Adjudschedroutecode',
        'table': 'adjudschedroutecodes',
        'primaryKey': 'routingEditCode',

        'aliases': {
            'adjudScheduleID': 'id',
            'editCode': 'id',
            'routingEditCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Adjudschedrelcoderestriction': {
        'name': 'Adjudschedrelcoderestriction',
        'table': 'adjudschedrelcoderestrictions',
        'primaryKey': 'relationshipCode',

        'aliases': {
            'adjudScheduleID': 'id',
            'relationshipCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Adjudschedtpldiagcategory': {
        'name': 'Adjudschedtpldiagcategory',
        'table': 'adjudschedtpldiagcategories',
        'primaryKey': 'diagCategory',

        'aliases': {
            'adjudScheduleID': 'id',
            'diagCategory': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Adjudschedrx': {
        'name': 'Adjudschedrx',
        'table': 'adjudschedrx',
        'primaryKey': 'adjudScheduleID',

        'aliases': {
            'adjudScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Adjudschedsettingssystem': {
        'name': 'Adjudschedsettingssystem',
        'table': 'adjudschedsettingssystem',
        'primaryKey': 'adjudScheduleID',

        'aliases': {
            'adjudScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'claimAuditSchedID': 'claimAuditSchedId',
            'orthonetClaimAuditSchedRuleID': 'orthonetClaimAuditSchedRuleId'
        },

        'referenceMap': {
            'orthonetClaimAuditSchedRule': 'orthonetClaimAuditSchedRuleId'
        },

        'listReferences': {}
    },

    'Agegenderschednote': {
        'name': 'Agegenderschednote',
        'table': 'agegenderschednote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'ageGendSchedID': 'ageGendSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Adjudschedsettingsmemgroup': {
        'name': 'Adjudschedsettingsmemgroup',
        'table': 'adjudschedsettingsmemgroup',
        'primaryKey': 'adjudScheduleID',

        'aliases': {
            'adjudScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'claimAuditSchedID': 'claimAuditSchedId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Altartransactiondesc': {
        'name': 'Altartransactiondesc',
        'table': 'altartransactiondesc',
        'primaryKey': 'altDescSeqNum',

        'aliases': {
            'arTransactionType': 'id',
            'altDescSeqNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Adjudschednote': {
        'name': 'Adjudschednote',
        'table': 'adjudschednote',
        'primaryKey': 'noteID',

        'aliases': {
            'adjudScheduleID': 'adjudScheduleId',
            'noteID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Adjudschedrevenuecategory': {
        'name': 'Adjudschedrevenuecategory',
        'table': 'adjudschedrevenuecategory',
        'primaryKey': 'revenueCategory',

        'aliases': {
            'adjudScheduleID': 'id',
            'editCode': 'id',
            'revenueCategory': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Agegendersched': {
        'name': 'Agegendersched',
        'table': 'agegendersched',
        'primaryKey': 'ageGendSchedID',

        'aliases': {
            'ageGendSchedID': 'id',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ambulancecompdetailregion': {
        'name': 'Ambulancecompdetailregion',
        'table': 'ambulancecompdetailregion',
        'primaryKey': 'ambulanceCompDetailRegionID',

        'aliases': {
            'ambulanceCompDetailRegionID': 'id',
            'ambulanceCompDetailID': 'ambulanceCompDetailId',
            'ambulanceCompVersionID': 'ambulanceCompVersionId',
            'serviceAreaRegionID': 'serviceAreaRegionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'serviceAreaRegion': 'serviceAreaRegionId'
        },

        'listReferences': {}
    },

    'Agegenderschedauditdetail': {
        'name': 'Agegenderschedauditdetail',
        'table': 'agegenderschedauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'ageGendSchedID': 'ageGendSchedId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Adjudschedulecob': {
        'name': 'Adjudschedulecob',
        'table': 'adjudschedulecob',
        'primaryKey': 'cobCoverageType',

        'aliases': {
            'adjudScheduleID': 'id',
            'cobCoverageType': 'id',
            'cobInclDDBLInd': 'cobInclDdblInd',
            'cobSBCalc': 'cobSbCalc',
            'cobReservesDDBLInd': 'cobReservesDdblInd',
            'cobRetroDDBLInd': 'cobRetroDdblInd',
            'enableCOBInd': 'enableCobInd',
            'enableCOBBankInd': 'enableCobBankInd',
            'enableCOBCarOvrInd': 'enableCobCarOvrInd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Adjudschedule': {
        'name': 'Adjudschedule',
        'table': 'adjudschedule',
        'primaryKey': 'editCode',

        'aliases': {
            'adjudScheduleID': 'id',
            'editCode': 'id',
            'autoDRC': 'autoDrc',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'queueDenyDRC': 'queueDenyDrc',
            'allowDenyWithoutDRCInd': 'allowDenyWithoutDrcInd'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ambulancecompdetailmod': {
        'name': 'Ambulancecompdetailmod',
        'table': 'ambulancecompdetailmod',
        'primaryKey': 'ambulanceCompDetailModID',

        'aliases': {
            'ambulanceCompDetailModID': 'id',
            'ambulanceCompVersionID': 'ambulanceCompVersionId',
            'ambulanceCompDetailID': 'ambulanceCompDetailId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Adjudschedsettingsbenefit': {
        'name': 'Adjudschedsettingsbenefit',
        'table': 'adjudschedsettingsbenefit',
        'primaryKey': 'adjudScheduleID',

        'aliases': {
            'adjudScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'authPenaltyPctDRC': 'authPenaltyPctDrc',
            'authPenaltyAmtDRC': 'authPenaltyAmtDrc',
            'copaymentDRC': 'copaymentDrc',
            'semiPrivateRateDRC': 'semiPrivateRateDrc',
            'priorExtractDRC': 'priorExtractDrc',
            'compRestorationDRC': 'compRestorationDrc',
            'porcelainCrownDRC': 'porcelainCrownDrc',
            'deductibleDRC': 'deductibleDrc',
            'memCoinsDRC': 'memCoinsDrc',
            'withholdDRC': 'withholdDrc',
            'deniedTaxDRC': 'deniedTaxDrc',
            'servicePctDRC': 'servicePctDrc',
            'procedureDRC': 'procedureDrc',
            'reinsReductAmtDRC': 'reinsReductAmtDrc',
            'benefitNotCoveredByBctlvDRC': 'benefitNotCoveredByBctlvDrc',
            'tierDRC': 'tierDrc',
            'maximumDRC': 'maximumDrc',
            'occurrenceMaxDRC': 'occurrenceMaxDrc',
            'maxConsecutiveDaysDRC': 'maxConsecutiveDaysDrc',
            'excessAllowedDRC': 'excessAllowedDrc',
            'delegatedServicesDRC': 'delegatedServicesDrc',
            'benefitCodeMatchNotFoundDRC': 'benefitCodeMatchNotFoundDrc',
            'externalPlanDRC': 'externalPlanDrc',
            'linePreviouslyDelegatedDRC': 'linePreviouslyDelegatedDrc',
            'authMatchingSchedID': 'authMatchingSchedId',
            'provCertCLIADRC': 'provCertCliadrc',
            'provCertAccreditationDRC': 'provCertAccreditationDrc',
            'provCertTaxonomyDRC': 'provCertTaxonomyDrc',
            'provCertBoardCertDRC': 'provCertBoardCertDrc',
            'provCertLicenseDRC': 'provCertLicenseDrc',
            'provCertDegreeDRC': 'provCertDegreeDrc',
            'capitatedServiceDRC': 'capitatedServiceDrc',
            'cobAdjustmentDRC': 'cobAdjustmentDrc',
            'apportionedPricedDRC': 'apportionedPricedDrc',
            'multiLinePricedDRC': 'multiLinePricedDrc',
            'multiLinePricedParentDRC': 'multiLinePricedParentDrc'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ambulancecompauditdetail': {
        'name': 'Ambulancecompauditdetail',
        'table': 'ambulancecompauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'ambulanceCompVersionID': 'ambulanceCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ambulancecomp': {
        'name': 'Ambulancecomp',
        'table': 'ambulancecomp',
        'primaryKey': 'ambulanceCompVersionID',

        'aliases': {
            'ambulanceCompID': 'ambulanceCompId',
            'serviceAreaID': 'serviceAreaId',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'ambulanceCompVersionID': 'id',
            'pricingExternalID': 'pricingExternalId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ambulancecompnote': {
        'name': 'Ambulancecompnote',
        'table': 'ambulancecompnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'ambulanceCompVersionID': 'ambulanceCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ambulancecompdetail': {
        'name': 'Ambulancecompdetail',
        'table': 'ambulancecompdetail',
        'primaryKey': 'ambulanceCompDetailID',

        'aliases': {
            'ambulanceCompDetailID': 'id',
            'ambulanceCompVersionID': 'ambulanceCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ambulancecomphold': {
        'name': 'Ambulancecomphold',
        'table': 'ambulancecomphold',
        'primaryKey': 'ambulanceCompHoldID',

        'aliases': {
            'ambulanceCompHoldID': 'id',
            'ambulanceCompVersionID': 'ambulanceCompVersionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Anesthesiacompauditdetail': {
        'name': 'Anesthesiacompauditdetail',
        'table': 'anesthesiacompauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'anesthesiaCompVersionID': 'anesthesiaCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Anesthesiacomp': {
        'name': 'Anesthesiacomp',
        'table': 'anesthesiacomp',
        'primaryKey': 'anesthesiaCompVersionID',

        'aliases': {
            'anesthesiaCompID': 'anesthesiaCompId',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'anesthesiaCompVersionID': 'id',
            'pricingExternalID': 'pricingExternalId',
            'serviceAreaRegionID': 'serviceAreaRegionId'
        },

        'referenceMap': {
            'serviceAreaRegion': 'serviceAreaRegionId'
        },

        'listReferences': {}
    },

    'Ambulancemodifier': {
        'name': 'Ambulancemodifier',
        'table': 'ambulancemodifiers',
        'primaryKey': 'ambModifierCode',

        'aliases': {
            'ambModifierCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Anesthesiacompdetailmod': {
        'name': 'Anesthesiacompdetailmod',
        'table': 'anesthesiacompdetailmod',
        'primaryKey': 'anesthesiaCompDetailModID',

        'aliases': {
            'anesthesiaCompDetailModID': 'id',
            'anesthesiaCompDetailID': 'anesthesiaCompDetailId',
            'anesthesiaCompVersionID': 'anesthesiaCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Anesthesiacompnote': {
        'name': 'Anesthesiacompnote',
        'table': 'anesthesiacompnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'anesthesiaCompVersionID': 'anesthesiaCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Anesthesiaphysicalstatusmod': {
        'name': 'Anesthesiaphysicalstatusmod',
        'table': 'anesthesiaphysicalstatusmod',
        'primaryKey': 'modifierCode',

        'aliases': {
            'modifierCode': 'id',
            'pricingSettingID': 'pricingSettingId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Anesthesiacomphold': {
        'name': 'Anesthesiacomphold',
        'table': 'anesthesiacomphold',
        'primaryKey': 'anesthesiaCompHoldID',

        'aliases': {
            'anesthesiaCompHoldID': 'id',
            'anesthesiaCompVersionID': 'anesthesiaCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Anesthesiacompdetail': {
        'name': 'Anesthesiacompdetail',
        'table': 'anesthesiacompdetail',
        'primaryKey': 'anesthesiaCompDetailID',

        'aliases': {
            'anesthesiaCompDetailID': 'id',
            'anesthesiaCompVersionID': 'anesthesiaCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Apccodedetail': {
        'name': 'Apccodedetail',
        'table': 'apccodedetail',
        'primaryKey': 'versionYearMonth',

        'aliases': {
            'apcNumber': 'id',
            'versionYearMonth': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Anesthmodifiercompassign': {
        'name': 'Anesthmodifiercompassign',
        'table': 'anesthmodifiercompassign',
        'primaryKey': 'anesthModifierCompAssignID',

        'aliases': {
            'anesthModifierCompAssignID': 'id',
            'anesthesiaCompVersionID': 'anesthesiaCompVersionId',
            'modifierCompID': 'modifierCompId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Apcbasefileuploaddetail': {
        'name': 'Apcbasefileuploaddetail',
        'table': 'apcbasefileuploaddetail',
        'primaryKey': 'apcBaseFileUploadDetailID',

        'aliases': {
            'apcBaseFileUploadDetailID': 'id',
            'apcBaseFileUploadHeaderID': 'apcBaseFileUploadHeaderId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Apccodeheader': {
        'name': 'Apccodeheader',
        'table': 'apccodeheader',
        'primaryKey': 'apcNumber',

        'aliases': {
            'apcNumber': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Apcprocgrouper': {
        'name': 'Apcprocgrouper',
        'table': 'apcprocgrouper',
        'primaryKey': 'versionYearMonth',

        'aliases': {
            'apcNumber': 'id',
            'procedureCode': 'id',
            'versionYearMonth': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Anesthesiamodifier': {
        'name': 'Anesthesiamodifier',
        'table': 'anesthesiamodifier',
        'primaryKey': 'modifierCode',

        'aliases': {
            'modifierCode': 'id',
            'pricingSettingID': 'pricingSettingId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Apcbasefileuploadheader': {
        'name': 'Apcbasefileuploadheader',
        'table': 'apcbasefileuploadheader',
        'primaryKey': 'apcBaseFileUploadHeaderID',

        'aliases': {
            'apcBaseFileUploadHeaderID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Apidefaultpricingcomporder': {
        'name': 'Apidefaultpricingcomporder',
        'table': 'apidefaultpricingcomporder',
        'primaryKey': 'apiDefaultPricingCompOrderID',

        'aliases': {
            'apiDefaultPricingCompOrderID': 'id',
            'pricingSettingID': 'pricingSettingId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Aptransaction': {
        'name': 'Aptransaction',
        'table': 'aptransaction',
        'primaryKey': 'apTransactionID',

        'aliases': {
            'apTransactionID': 'id',
            'claimID': 'claimId',
            'payerEntityID': 'payerEntityId',
            'payerBankID': 'payerBankId',
            'payeeEntityID': 'payeeEntityId',
            'origAPTransactionID': 'origApTransactionId',
            'apReissueTransID': 'apReissueTransId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'arTransactionID': 'arTransactionId',
            'deleteArTransID': 'deleteArTransId',
            'parentAPTransID': 'parentApTransId',
            'capitationRunID': 'capitationRunId',
            'payeeBankID': 'payeeBankId',
            'claimEventID': 'claimEventId',
            'memberBenefitID': 'memberBenefitId',
            'payeeEntityIDQual': 'payeeEntityIdQual',
            'payeeTIN': 'payeeTin',
            'memberAccountID': 'memberAccountId',
            'remarkCodeSchedID': 'remarkCodeSchedId',
            'clearinghouseClaimID': 'clearinghouseClaimId'
        },

        'referenceMap': {
            'payerBank': 'payerBankId',
            'payeeBank': 'payeeBankId'
        },

        'listReferences': {}
    },

    'Approveddestination': {
        'name': 'Approveddestination',
        'table': 'approveddestination',
        'primaryKey': 'effDate',

        'aliases': {
            'environmentID': 'id',
            'destinationType': 'id',
            'destinationAddress': 'id',
            'effDate': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Apgenerationresponse': {
        'name': 'Apgenerationresponse',
        'table': 'apgenerationresponse',
        'primaryKey': 'apGenerationResponseID',

        'aliases': {
            'apGenerationResponseID': 'id',
            'apTransactionID': 'apTransactionId',
            'ledgerActivityLogID': 'ledgerActivityLogId',
            'clearinghouseClaimID': 'clearinghouseClaimId',
            'checkSeriesID': 'checkSeriesId',
            'checkImageID': 'checkImageId',
            'bulkPaymentID': 'bulkPaymentId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Aptransactionattrib': {
        'name': 'Aptransactionattrib',
        'table': 'aptransactionattrib',
        'primaryKey': 'apTransactionAttribID',

        'aliases': {
            'apTransactionAttribID': 'id',
            'apTransactionAttribSetID': 'apTransactionAttribSetId',
            'apTransactionID': 'apTransactionId',
            'apTransactionDetailID': 'apTransactionDetailId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Aptransactionattribsetglstring': {
        'name': 'Aptransactionattribsetglstring',
        'table': 'aptransactionattribsetglstring',
        'primaryKey': 'apTransactionAttribSetGlStringID',

        'aliases': {
            'apTransactionAttribSetGlStringID': 'id',
            'apTransactionAttribSetID': 'apTransactionAttribSetId',
            'apTransactionDetailID': 'apTransactionDetailId',
            'apTransactionID': 'apTransactionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Aptransactionattribtag': {
        'name': 'Aptransactionattribtag',
        'table': 'aptransactionattribtag',
        'primaryKey': 'apTransactionAttribTagID',

        'aliases': {
            'apTransactionAttribTagID': 'id',
            'apTransactionAttribSetID': 'apTransactionAttribSetId',
            'apTransactionID': 'apTransactionId',
            'apTransactionDetailID': 'apTransactionDetailId',
            'finAttribSchedSegmentID': 'finAttribSchedSegmentId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Aptransactionaccumsnapshot': {
        'name': 'Aptransactionaccumsnapshot',
        'table': 'aptransactionaccumsnapshot',
        'primaryKey': 'apTransactionAccumSnapshotID',

        'aliases': {
            'apTransactionAccumSnapshotID': 'id',
            'apTransactionID': 'apTransactionId',
            'accumulationYTDAmt': 'accumulationYtdAmt',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Aptransactionauditdetail': {
        'name': 'Aptransactionauditdetail',
        'table': 'aptransactionauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'apTransactionID': 'apTransactionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Aptransactioninterest': {
        'name': 'Aptransactioninterest',
        'table': 'aptransactioninterest',
        'primaryKey': 'apTransactionInterestID',

        'aliases': {
            'apTransactionInterestID': 'id',
            'apTransactionID': 'apTransactionId',
            'interestSchedID': 'interestSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'interestSchedDetailID': 'interestSchedDetailId',
            'interestSchedDetailDaysID': 'interestSchedDetailDaysId',
            'claimEventPromptPayID': 'claimEventPromptPayId',
            'apTransactionDetailID': 'apTransactionDetailId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Aptransactiondetail': {
        'name': 'Aptransactiondetail',
        'table': 'aptransactiondetail',
        'primaryKey': 'apTransactionDetailID',

        'aliases': {
            'apTransactionDetailID': 'id',
            'apTransactionID': 'apTransactionId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'acctBalSetID': 'acctBalSetId',
            'memberID': 'memberId',
            'msaID': 'msaId',
            'memberAccountID': 'memberAccountId',
            'subscriberID': 'subscriberId',
            'famMemberID': 'famMemberId',
            'memGroupID': 'memGroupId',
            'capitationRunDetailID': 'capitationRunDetailId',
            'responsibleEntityID': 'responsibleEntityId'
        },

        'referenceMap': {
            'member': 'memberId',
            'msa': 'msaId',
            'famMember': 'famMemberId'
        },

        'listReferences': {}
    },

    'Aptransactionattribset': {
        'name': 'Aptransactionattribset',
        'table': 'aptransactionattribset',
        'primaryKey': 'apTransactionAttribSetID',

        'aliases': {
            'apTransactionAttribSetID': 'id',
            'apTransactionID': 'apTransactionId',
            'apTransactionDetailID': 'apTransactionDetailId',
            'apTransactionInterestID': 'apTransactionInterestId',
            'apTransactionSurchargeID': 'apTransactionSurchargeId',
            'finAttribSchedID': 'finAttribSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Aptransactionoprecover': {
        'name': 'Aptransactionoprecover',
        'table': 'aptransactionoprecover',
        'primaryKey': 'apTransactionOPRecoverID',

        'aliases': {
            'apTransactionOPRecoverID': 'id',
            'apTransactionOPID': 'apTransactionOpid',
            'apTransactionID': 'apTransactionId',
            'arTransactionID': 'arTransactionId',
            'arTransactionDetailID': 'arTransactionDetailId',
            'recoveryAPTransactionID': 'recoveryApTransactionId',
            'recoveryClaimID': 'recoveryClaimId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Aptransactionrecipient': {
        'name': 'Aptransactionrecipient',
        'table': 'aptransactionrecipient',
        'primaryKey': 'apTransactionRecipientID',

        'aliases': {
            'apTransactionRecipientID': 'id',
            'apTransactionID': 'apTransactionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Aptransactionreduction': {
        'name': 'Aptransactionreduction',
        'table': 'aptransactionreduction',
        'primaryKey': 'apTransactionReductionID',

        'aliases': {
            'apTransactionReductionID': 'id',
            'apTransactionID': 'apTransactionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Armax': {
        'name': 'Armax',
        'table': 'armax',
        'primaryKey': 'arMaxID',

        'aliases': {
            'arMaxID': 'id',
            'arTransactionID': 'arTransactionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Aptransactionop': {
        'name': 'Aptransactionop',
        'table': 'aptransactionop',
        'primaryKey': 'apTransactionOPID',

        'aliases': {
            'apTransactionOPID': 'id',
            'apTransactionID': 'apTransactionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Aptransactionnote': {
        'name': 'Aptransactionnote',
        'table': 'aptransactionnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'apTransactionID': 'apTransactionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Aptransactionsurcharge': {
        'name': 'Aptransactionsurcharge',
        'table': 'aptransactionsurcharge',
        'primaryKey': 'apTransactionSurchargeID',

        'aliases': {
            'apTransactionSurchargeID': 'id',
            'apTransactionID': 'apTransactionId',
            'apTransactionDetailID': 'apTransactionDetailId',
            'surchargeSchedID': 'surchargeSchedId',
            'regEntityGuardrailID': 'regEntityGuardrailId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Aptransactiontag': {
        'name': 'Aptransactiontag',
        'table': 'aptransactiontag',
        'primaryKey': 'apTransactionTagID',

        'aliases': {
            'apTransactionTagID': 'id',
            'apTransactionID': 'apTransactionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Arcreditreceipt': {
        'name': 'Arcreditreceipt',
        'table': 'arcreditreceipt',
        'primaryKey': 'arCreditReceiptID',

        'aliases': {
            'arCreditReceiptID': 'id',
            'arTransactionID': 'arTransactionId',
            'eftTransID': 'eftTransId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Artransactionauditdetail': {
        'name': 'Artransactionauditdetail',
        'table': 'artransactionauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'arTransactionID': 'arTransactionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Artransactionheader': {
        'name': 'Artransactionheader',
        'table': 'artransactionheader',
        'primaryKey': 'arTransactionID',

        'aliases': {
            'arTransactionID': 'id',
            'msaID': 'msaId',
            'payerEntityID': 'payerEntityId',
            'dcnID': 'dcnId',
            'memberID': 'memberId',
            'apTransactionID': 'apTransactionId',
            'incentID': 'incentId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'overflowArTransID': 'overflowArTransId',
            'originalArTransID': 'originalArTransId',
            'depMemberID': 'depMemberId',
            'cancelArTransID': 'cancelArTransId',
            'memberAccountID': 'memberAccountId',
            'claimID': 'claimId',
            'linkToID': 'linkToId',
            'linkFrmID': 'linkFrmId',
            'ehpFullfillID': 'ehpFullfillId',
            'subsAffiliationID': 'subsAffiliationId'
        },

        'referenceMap': {
            'msa': 'msaId',
            'member': 'memberId',
            'incent': 'incentId',
            'depMember': 'depMemberId'
        },

        'listReferences': {}
    },

    'Asacpt': {
        'name': 'Asacpt',
        'table': 'asacpt',
        'primaryKey': 'procedureCode',

        'aliases': {
            'procedureCode': 'id',
            'pricingSettingID': 'pricingSettingId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Aptransactionremark': {
        'name': 'Aptransactionremark',
        'table': 'aptransactionremark',
        'primaryKey': 'apTransactionRemarkID',

        'aliases': {
            'apTransactionRemarkID': 'id',
            'apTransactionDetailID': 'apTransactionDetailId',
            'apTransactionID': 'apTransactionId',
            'apTransactionReductionID': 'apTransactionReductionId',
            'apTransactionInterestID': 'apTransactionInterestId',
            'apTransactionSurchargeID': 'apTransactionSurchargeId',
            'claDenyID': 'claDenyId',
            'remarkCodeTriggerID': 'remarkCodeTriggerId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Aptransactiontype': {
        'name': 'Aptransactiontype',
        'table': 'aptransactiontype',
        'primaryKey': 'apTransactionType',

        'aliases': {
            'apTransactionType': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Artransactionnotedetail': {
        'name': 'Artransactionnotedetail',
        'table': 'artransactionnotedetail',
        'primaryKey': 'noteDetailID',

        'aliases': {
            'arTransactionID': 'arTransactionId',
            'noteID': 'noteId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'noteDetailID': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Artransactiondetail': {
        'name': 'Artransactiondetail',
        'table': 'artransactiondetail',
        'primaryKey': 'arTransactionDetailID',

        'aliases': {
            'arTransactionDetailID': 'id',
            'arTransactionID': 'arTransactionId',
            'apTransactionDetailID': 'apTransactionDetailId',
            'priorBalDropApTxID': 'priorBalDropApTxId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Artransactionnote': {
        'name': 'Artransactionnote',
        'table': 'artransactionnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'arTransactionID': 'arTransactionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Artransactiontype': {
        'name': 'Artransactiontype',
        'table': 'artransactiontype',
        'primaryKey': 'arTransactionType',

        'aliases': {
            'arTransactionType': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'sendToSCInd': 'sendToScInd',
            'sendCacToSCInd': 'sendCacToScInd'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Assignoutliercomp': {
        'name': 'Assignoutliercomp',
        'table': 'assignoutliercomp',
        'primaryKey': 'assignOutlierCompID',

        'aliases': {
            'assignOutlierCompID': 'id',
            'pricingSchedVersionID': 'pricingSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'outlierCompID': 'outlierCompId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Assignpassthrucomp': {
        'name': 'Assignpassthrucomp',
        'table': 'assignpassthrucomp',
        'primaryKey': 'assignPassThruCompID',

        'aliases': {
            'assignPassThruCompID': 'id',
            'pricingSchedVersionID': 'pricingSchedVersionId',
            'passThruCompID': 'passThruCompId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Assignfallthrucomp': {
        'name': 'Assignfallthrucomp',
        'table': 'assignfallthrucomp',
        'primaryKey': 'assignFallThruCompID',

        'aliases': {
            'assignFallThruCompID': 'id',
            'pricingSchedVersionID': 'pricingSchedVersionId',
            'fallThruCompID': 'fallThruCompId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Auditerrorvrcode': {
        'name': 'Auditerrorvrcode',
        'table': 'auditerrorvrcode',
        'primaryKey': 'auditErrorVRcode',

        'aliases': {
            'auditErrorVRcode': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Auditsampletype': {
        'name': 'Auditsampletype',
        'table': 'auditsampletype',
        'primaryKey': 'auditSampleType',

        'aliases': {
            'auditSampleType': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Auditerrorcode': {
        'name': 'Auditerrorcode',
        'table': 'auditerrorcode',
        'primaryKey': 'auditErrorCode',

        'aliases': {
            'auditErrorCode': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Auditerrorsource': {
        'name': 'Auditerrorsource',
        'table': 'auditerrorsource',
        'primaryKey': 'auditErrorSource',

        'aliases': {
            'auditErrorSource': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Authmatchingsched': {
        'name': 'Authmatchingsched',
        'table': 'authmatchingsched',
        'primaryKey': 'authMatchingSchedID',

        'aliases': {
            'authMatchingSchedID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Authdecisionactiontrigger': {
        'name': 'Authdecisionactiontrigger',
        'table': 'authdecisionactiontrigger',
        'primaryKey': 'authDecisionActionTriggerID',

        'aliases': {
            'authDecisionActionTriggerID': 'id',
            'authDecisionActionScheduleID': 'authDecisionActionScheduleId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Authmatchingschednote': {
        'name': 'Authmatchingschednote',
        'table': 'authmatchingschednote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'authMatchingSchedID': 'authMatchingSchedId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Authdecisioncode': {
        'name': 'Authdecisioncode',
        'table': 'authdecisioncode',
        'primaryKey': 'authDecisionCode',

        'aliases': {
            'authDecisionCode': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Authprogramauthcharorder': {
        'name': 'Authprogramauthcharorder',
        'table': 'authprogramauthcharorder',
        'primaryKey': 'authProgramAuthCharOrderID',

        'aliases': {
            'authProgramAuthCharOrderID': 'id',
            'authProgramAuthProcCodeMatchID': 'authProgramAuthProcCodeMatchId',
            'authMatchingSchedID': 'authMatchingSchedId',
            'authProgramTypeID': 'authProgramTypeId',
            'authProgramAuthServiceTypeID': 'authProgramAuthServiceTypeId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Authmatchingschedauditdetail': {
        'name': 'Authmatchingschedauditdetail',
        'table': 'authmatchingschedauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'authMatchingSchedID': 'authMatchingSchedId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Authdecactionschedauditdetail': {
        'name': 'Authdecactionschedauditdetail',
        'table': 'authdecactionschedauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'authDecisionActionScheduleID': 'authDecisionActionScheduleId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Authdecisionactionschedule': {
        'name': 'Authdecisionactionschedule',
        'table': 'authdecisionactionschedule',
        'primaryKey': 'authDecisionActionScheduleID',

        'aliases': {
            'authDecisionActionScheduleID': 'id',
            'ownerGroupID': 'ownerGroupId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Authdecactionschednote': {
        'name': 'Authdecactionschednote',
        'table': 'authdecactionschednote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'authDecisionActionScheduleID': 'authDecisionActionScheduleId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Authprogramauthservicetype': {
        'name': 'Authprogramauthservicetype',
        'table': 'authprogramauthservicetype',
        'primaryKey': 'authProgramAuthServiceTypeID',

        'aliases': {
            'authProgramAuthServiceTypeID': 'id',
            'authProgramTypeID': 'authProgramTypeId',
            'authMatchingSchedID': 'authMatchingSchedId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Authprogramauthproccodematch': {
        'name': 'Authprogramauthproccodematch',
        'table': 'authprogramauthproccodematch',
        'primaryKey': 'authProgramAuthProcCodeMatchID',

        'aliases': {
            'authProgramAuthProcCodeMatchID': 'id',
            'authProgramAuthServiceTypeID': 'authProgramAuthServiceTypeId',
            'authMatchingSchedID': 'authMatchingSchedId',
            'authProgramTypeID': 'authProgramTypeId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Authdecisionaction': {
        'name': 'Authdecisionaction',
        'table': 'authdecisionaction',
        'primaryKey': 'authDecisionActionType',

        'aliases': {
            'authDecisionActionType': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Authprogramprocedure': {
        'name': 'Authprogramprocedure',
        'table': 'authprogramprocedure',
        'primaryKey': 'authProgramProcedureID',

        'aliases': {
            'authProgramProcedureID': 'id',
            'authProgramTypeID': 'authProgramTypeId',
            'authProgramAuthServiceTypeID': 'authProgramAuthServiceTypeId',
            'authMatchingSchedID': 'authMatchingSchedId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Authprogramdiagnosis': {
        'name': 'Authprogramdiagnosis',
        'table': 'authprogramdiagnosis',
        'primaryKey': 'authProgramDiagnosisID',

        'aliases': {
            'authProgramDiagnosisID': 'id',
            'authProgramTypeID': 'authProgramTypeId',
            'authProgramAuthServiceTypeID': 'authProgramAuthServiceTypeId',
            'authMatchingSchedID': 'authMatchingSchedId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Bank': {
        'name': 'Bank',
        'table': 'bank',
        'primaryKey': 'bankID',

        'aliases': {
            'bankID': 'id',
            'businessURL': 'businessUrl',
            'onlineBankingURL': 'onlineBankingUrl',
            'federalTaxID': 'federalTaxId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Authprogramprocdiagnosis': {
        'name': 'Authprogramprocdiagnosis',
        'table': 'authprogramprocdiagnosis',
        'primaryKey': 'authProgramProcDiagnosisID',

        'aliases': {
            'authProgramProcDiagnosisID': 'id',
            'authProgramProcedureID': 'authProgramProcedureId',
            'authProgramAuthServiceTypeID': 'authProgramAuthServiceTypeId',
            'authProgramTypeID': 'authProgramTypeId',
            'authMatchingSchedID': 'authMatchingSchedId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Bankaccounttype': {
        'name': 'Bankaccounttype',
        'table': 'bankaccounttype',
        'primaryKey': 'accountType',

        'aliases': {
            'bankID': 'id',
            'accountType': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Bankaccount': {
        'name': 'Bankaccount',
        'table': 'bankaccount',
        'primaryKey': 'accountNumber',

        'aliases': {
            'bankID': 'id',
            'accountNumber': 'id',
            'entityID': 'entityId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Bankacctbalance': {
        'name': 'Bankacctbalance',
        'table': 'bankacctbalance',
        'primaryKey': 'planYearStartDate',

        'aliases': {
            'bankID': 'id',
            'accountNumber': 'id',
            'planYearStartDate': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Bankacctcreditline': {
        'name': 'Bankacctcreditline',
        'table': 'bankacctcreditline',
        'primaryKey': 'sequenceNum',

        'aliases': {
            'bankID': 'id',
            'accountNumber': 'id',
            'sequenceNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Autocontribqueue': {
        'name': 'Autocontribqueue',
        'table': 'autocontribqueue',
        'primaryKey': 'queueID',

        'aliases': {
            'queueID': 'id',
            'msaID': 'msaId',
            'subscriberID': 'subscriberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'lockUserID': 'lockUserId',
            'memGroupID': 'memGroupId',
            'extMemGroupID': 'extMemGroupId'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Bankacctcredit': {
        'name': 'Bankacctcredit',
        'table': 'bankacctcredit',
        'primaryKey': 'sequenceNum',

        'aliases': {
            'bankID': 'id',
            'accountNumber': 'id',
            'sequenceNum': 'id',
            'arTransactionID': 'arTransactionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Authprogramtype': {
        'name': 'Authprogramtype',
        'table': 'authprogramtype',
        'primaryKey': 'authProgramTypeID',

        'aliases': {
            'authProgramTypeID': 'id',
            'authMatchingSchedID': 'authMatchingSchedId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Bankauditdetail': {
        'name': 'Bankauditdetail',
        'table': 'bankauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'bankID': 'bankId'
        },

        'referenceMap': {
            'bank': 'bankId'
        },

        'listReferences': {}
    },

    'Bankbranch': {
        'name': 'Bankbranch',
        'table': 'bankbranch',
        'primaryKey': 'sequenceNum',

        'aliases': {
            'bankID': 'id',
            'sequenceNum': 'id',
            'branchID': 'branchId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Bankacctdebit': {
        'name': 'Bankacctdebit',
        'table': 'bankacctdebit',
        'primaryKey': 'sequenceNum',

        'aliases': {
            'bankID': 'id',
            'accountNumber': 'id',
            'sequenceNum': 'id',
            'apTransactionID': 'apTransactionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Bankcontactname': {
        'name': 'Bankcontactname',
        'table': 'bankcontactname',
        'primaryKey': 'contactNum',

        'aliases': {
            'bankID': 'id',
            'departmentCode': 'id',
            'contactNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Bankcontactaddress': {
        'name': 'Bankcontactaddress',
        'table': 'bankcontactaddress',
        'primaryKey': 'sequenceNum',

        'aliases': {
            'bankID': 'id',
            'departmentCode': 'id',
            'contactNum': 'id',
            'sequenceNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Bankdepartmenthour': {
        'name': 'Bankdepartmenthour',
        'table': 'bankdepartmenthours',
        'primaryKey': 'dayOfWeek',

        'aliases': {
            'bankID': 'id',
            'departmentCode': 'id',
            'dayOfWeek': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Bankcontactdepartment': {
        'name': 'Bankcontactdepartment',
        'table': 'bankcontactdepartment',
        'primaryKey': 'departmentCode',

        'aliases': {
            'bankID': 'id',
            'departmentCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Banknote': {
        'name': 'Banknote',
        'table': 'banknote',
        'primaryKey': 'noteID',

        'aliases': {
            'bankID': 'id',
            'noteID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Bankdepartmentphone': {
        'name': 'Bankdepartmentphone',
        'table': 'bankdepartmentphone',
        'primaryKey': 'phoneRecordNum',

        'aliases': {
            'bankID': 'id',
            'departmentCode': 'id',
            'phoneRecordNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Banknotedetail': {
        'name': 'Banknotedetail',
        'table': 'banknotedetail',
        'primaryKey': 'noteDetailID',

        'aliases': {
            'bankID': 'bankId',
            'noteID': 'noteId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'noteDetailID': 'id'
        },

        'referenceMap': {
            'bank': 'bankId'
        },

        'listReferences': {}
    },

    'Bankrouting': {
        'name': 'Bankrouting',
        'table': 'bankrouting',
        'primaryKey': 'sequenceNum',

        'aliases': {
            'bankID': 'id',
            'sequenceNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Bankcontactphone': {
        'name': 'Bankcontactphone',
        'table': 'bankcontactphone',
        'primaryKey': 'phoneRecordNum',

        'aliases': {
            'bankID': 'id',
            'departmentCode': 'id',
            'contactNum': 'id',
            'phoneRecordNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Bankdepartmentaddress': {
        'name': 'Bankdepartmentaddress',
        'table': 'bankdepartmentaddress',
        'primaryKey': 'addressRecordNum',

        'aliases': {
            'bankID': 'id',
            'departmentCode': 'id',
            'addressRecordNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Batchentrylog': {
        'name': 'Batchentrylog',
        'table': 'batchentrylog',
        'primaryKey': 'batchEntryLogID',

        'aliases': {
            'batchEntryLogID': 'id',
            'transID': 'transId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Bankworkhour': {
        'name': 'Bankworkhour',
        'table': 'bankworkhours',
        'primaryKey': 'dayOfWeek',

        'aliases': {
            'bankID': 'id',
            'departmentCode': 'id',
            'contactNum': 'id',
            'dayOfWeek': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'BbTableField': {
        'name': 'BbTableField',
        'table': 'bb_table_fields',
        'primaryKey': 'field_name',

        'aliases': {
            'table_name': 'id',
            'field_name': 'id',
            'sort_num': 'sortNum',
            'primary_key': 'primaryKey',
            'incremented_key': 'incrementedKey',
            'hilo_block_size': 'hiloBlockSize',
            'seq_name': 'seqName',
            'fkey_table': 'fkeyTable',
            'fkey_field': 'fkeyField',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'BbTable': {
        'name': 'BbTable',
        'table': 'bb_tables',
        'primaryKey': 'table_name',

        'aliases': {
            'table_name': 'id',
            'view_indicator': 'viewIndicator',
            'virtual_indicator': 'virtualIndicator',
            'under_construction': 'underConstruction',
            'num_pk_index_partitions': 'numPkIndexPartitions',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Beddayscheduleauditdetail': {
        'name': 'Beddayscheduleauditdetail',
        'table': 'beddayscheduleauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'bedDayScheduleID': 'bedDayScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'BbMessage': {
        'name': 'BbMessage',
        'table': 'bb_message',
        'primaryKey': 'propertyKey',

        'aliases': {
            'propertyKey': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'BbField': {
        'name': 'BbField',
        'table': 'bb_fields',
        'primaryKey': 'field_name',

        'aliases': {
            'field_name': 'id',
            'data_type': 'dataType',
            'field_length': 'fieldLength',
            'field_precision': 'fieldPrecision',
            'doubleclick_uri': 'doubleclickUri',
            'field_xref': 'fieldXref',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Beddayschedulenote': {
        'name': 'Beddayschedulenote',
        'table': 'beddayschedulenote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'bedDayScheduleID': 'bedDayScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Beddayscheduledetail': {
        'name': 'Beddayscheduledetail',
        'table': 'beddayscheduledetail',
        'primaryKey': 'bedDayScheduleDetailID',

        'aliases': {
            'bedDayScheduleDetailID': 'id',
            'bedDayScheduleID': 'bedDayScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Beddayschedule': {
        'name': 'Beddayschedule',
        'table': 'beddayschedule',
        'primaryKey': 'bedDayScheduleID',

        'aliases': {
            'bedDayScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Beneaccumbypassperiod': {
        'name': 'Beneaccumbypassperiod',
        'table': 'beneaccumbypassperiod',
        'primaryKey': 'beneAccumBypassPeriodID',

        'aliases': {
            'beneAccumBypassPeriodID': 'id',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'beneAccumBypassID': 'beneAccumBypassId',
            'accumOOPBypassAmt': 'accumOopBypassAmt',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Beneaccumbypassref': {
        'name': 'Beneaccumbypassref',
        'table': 'beneaccumbypassref',
        'primaryKey': 'beneAccumBypassID',

        'aliases': {
            'benefitPlanVersionID': 'id',
            'benefitCode': 'id',
            'tierNumber': 'id',
            'codeLevel': 'id',
            'version': 'id',
            'beneAccumBypassID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'bypassID': 'bypassId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Beddayscheduledetailrev': {
        'name': 'Beddayscheduledetailrev',
        'table': 'beddayscheduledetailrev',
        'primaryKey': 'bedDayScheduleDetailRevID',

        'aliases': {
            'bedDayScheduleDetailRevID': 'id',
            'bedDayScheduleDetailID': 'bedDayScheduleDetailId',
            'bedDayScheduleID': 'bedDayScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Beneaccumbypass': {
        'name': 'Beneaccumbypass',
        'table': 'beneaccumbypass',
        'primaryKey': 'beneAccumBypassID',

        'aliases': {
            'beneAccumBypassID': 'id',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'bypassID': 'bypassId',
            'benefitFulfillmentTextID': 'benefitFulfillmentTextId',
            'generatedBenefitFulfillmentTextID': 'generatedBenefitFulfillmentTextId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Beneauditdetail': {
        'name': 'Beneauditdetail',
        'table': 'beneauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'benefitPlanVersionID': 'benefitPlanVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benecobemploystatus': {
        'name': 'Benecobemploystatus',
        'table': 'benecobemploystatus',
        'primaryKey': 'beneCobEmployStatusID',

        'aliases': {
            'beneCobEmployStatusID': 'id',
            'benePlanSettingsID': 'benePlanSettingsId',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benebaserate': {
        'name': 'Benebaserate',
        'table': 'benebaserate',
        'primaryKey': 'beneBaseRateID',

        'aliases': {
            'beneBaseRateID': 'id',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Beneaccumbypasstier': {
        'name': 'Beneaccumbypasstier',
        'table': 'beneaccumbypasstier',
        'primaryKey': 'beneAccumBypassTierID',

        'aliases': {
            'beneAccumBypassTierID': 'id',
            'beneAccumBypassID': 'beneAccumBypassId',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benecodeadj': {
        'name': 'Benecodeadj',
        'table': 'benecodeadj',
        'primaryKey': 'version',

        'aliases': {
            'benefitPlanVersionID': 'id',
            'benefitCode': 'id',
            'tierNumber': 'id',
            'codeLevel': 'id',
            'version': 'id',
            'copaymentDT': 'copaymentDt',
            'maxCopaymentsDT': 'maxCopaymentsDt',
            'maxOccurrencesDT': 'maxOccurrencesDt',
            'primaryBeneDeductibleID': 'primaryBeneDeductibleId',
            'dollarDT': 'dollarDt',
            'maxDollarAmtDT': 'maxDollarAmtDt',
            'occurrenceDT': 'occurrenceDt',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'primaryDeductibleID': 'primaryDeductibleId',
            'maxCostShareDT': 'maxCostShareDt'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benecoderelationship': {
        'name': 'Benecoderelationship',
        'table': 'benecoderelationship',
        'primaryKey': 'relationshipCode',

        'aliases': {
            'benefitPlanVersionID': 'id',
            'benefitCode': 'id',
            'tierNumber': 'id',
            'codeLevel': 'id',
            'version': 'id',
            'relationshipCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benecodeservicetypecode': {
        'name': 'Benecodeservicetypecode',
        'table': 'benecodeservicetypecode',
        'primaryKey': 'serviceTypeCode',

        'aliases': {
            'benefitPlanVersionID': 'id',
            'benefitCode': 'id',
            'tierNumber': 'id',
            'codeLevel': 'id',
            'version': 'id',
            'serviceTypeCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benecompositelimit': {
        'name': 'Benecompositelimit',
        'table': 'benecompositelimit',
        'primaryKey': 'toothID',

        'aliases': {
            'benefitPlanVersionID': 'id',
            'benefitCode': 'id',
            'tierNumber': 'id',
            'codeLevel': 'id',
            'version': 'id',
            'toothID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benecodestate': {
        'name': 'Benecodestate',
        'table': 'benecodestate',
        'primaryKey': 'state',

        'aliases': {
            'benefitPlanVersionID': 'id',
            'benefitCode': 'id',
            'tierNumber': 'id',
            'codeLevel': 'id',
            'version': 'id',
            'state': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benecodesuppl': {
        'name': 'Benecodesuppl',
        'table': 'benecodesuppl',
        'primaryKey': 'version',

        'aliases': {
            'benefitPlanVersionID': 'id',
            'benefitCode': 'id',
            'tierNumber': 'id',
            'codeLevel': 'id',
            'version': 'id',
            'quadrantUL': 'quadrantUl',
            'quadrantLL': 'quadrantLl',
            'quadrantUR': 'quadrantUr',
            'quadrantLR': 'quadrantLr',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benedeductible': {
        'name': 'Benedeductible',
        'table': 'benedeductible',
        'primaryKey': 'beneDeductibleID',

        'aliases': {
            'beneDeductibleID': 'id',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'deductibleID': 'deductibleId',
            'benefitFulfillmentTextID': 'benefitFulfillmentTextId',
            'generatedBenefitFulfillmentTextID': 'generatedBenefitFulfillmentTextId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benedeductibleperiod': {
        'name': 'Benedeductibleperiod',
        'table': 'benedeductibleperiod',
        'primaryKey': 'beneDeductiblePeriodID',

        'aliases': {
            'beneDeductiblePeriodID': 'id',
            'beneDeductibleID': 'beneDeductibleId',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'deductibleFUDSInd': 'deductibleFudsInd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benedeductiblefamily': {
        'name': 'Benedeductiblefamily',
        'table': 'benedeductiblefamily',
        'primaryKey': 'beneDedFamilyID',

        'aliases': {
            'beneDedFamilyID': 'id',
            'beneDeductiblePeriodID': 'beneDeductiblePeriodId',
            'beneDeductibleID': 'beneDeductibleId',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'familyUnitScheduleID': 'familyUnitScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benedeductibleref': {
        'name': 'Benedeductibleref',
        'table': 'benedeductibleref',
        'primaryKey': 'beneDeductibleID',

        'aliases': {
            'benefitPlanVersionID': 'id',
            'benefitCode': 'id',
            'tierNumber': 'id',
            'codeLevel': 'id',
            'version': 'id',
            'beneDeductibleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'deductibleID': 'deductibleId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benecoveragecondition': {
        'name': 'Benecoveragecondition',
        'table': 'benecoveragecondition',
        'primaryKey': 'version',

        'aliases': {
            'beneCoverageConditionID': 'id',
            'benefitPlanVersionID': 'id',
            'benefitCode': 'id',
            'tierNumber': 'id',
            'codeLevel': 'id',
            'version': 'id',
            'conditionTimeframeDMY': 'conditionTimeframeDmy',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benedeductibletier': {
        'name': 'Benedeductibletier',
        'table': 'benedeductibletier',
        'primaryKey': 'beneDeductibleTierID',

        'aliases': {
            'beneDeductibleTierID': 'id',
            'beneDeductibleID': 'beneDeductibleId',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Beneexternalid': {
        'name': 'Beneexternalid',
        'table': 'beneexternalid',
        'primaryKey': 'beneExternalID',

        'aliases': {
            'beneExternalID': 'id',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'tradingPartnerConfigID': 'tradingPartnerConfigId',
            'entityID': 'entityId',
            'externalPlanID': 'externalPlanId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'externalIDEffDate': 'externalIdEffDate',
            'externalIDExpDate': 'externalIdExpDate'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundleauditdetail': {
        'name': 'Benefitbundleauditdetail',
        'table': 'benefitbundleauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'benefitBundleID': 'benefitBundleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundle': {
        'name': 'Benefitbundle',
        'table': 'benefitbundle',
        'primaryKey': 'benefitBundleID',

        'aliases': {
            'benefitBundleID': 'id',
            'lockMemberGroupID': 'lockMemberGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundleactuarialvalue': {
        'name': 'Benefitbundleactuarialvalue',
        'table': 'benefitbundleactuarialvalue',
        'primaryKey': 'benefitBundleAVID',

        'aliases': {
            'benefitBundleAVID': 'id',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'benefitBundleID': 'benefitBundleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundleccbypassgroup': {
        'name': 'Benefitbundleccbypassgroup',
        'table': 'benefitbundleccbypassgroup',
        'primaryKey': 'benefitBundleCCBypassGroupID',

        'aliases': {
            'benefitBundleCCBypassGroupID': 'id',
            'bundleCrossControlAccumID': 'bundleCrossControlAccumId',
            'benefitBundleID': 'benefitBundleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundleccbypassplan': {
        'name': 'Benefitbundleccbypassplan',
        'table': 'benefitbundleccbypassplan',
        'primaryKey': 'benefitBundleCCBypassPlanID',

        'aliases': {
            'benefitBundleCCBypassPlanID': 'id',
            'benefitBundleCCBypassGroupID': 'benefitBundleCcBypassGroupId',
            'bundleCrossControlAccumID': 'bundleCrossControlAccumId',
            'benefitBundleID': 'benefitBundleId',
            'benefitBundlePlanID': 'benefitBundlePlanId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'planID': 'planId',
            'bypassID': 'bypassId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundlebaserate': {
        'name': 'Benefitbundlebaserate',
        'table': 'benefitbundlebaserate',
        'primaryKey': 'benefitBundleBaseRateID',

        'aliases': {
            'benefitBundleBaseRateID': 'id',
            'benefitBundleBillingSetID': 'benefitBundleBillingSetId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'benefitBundleID': 'benefitBundleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundlebillingset': {
        'name': 'Benefitbundlebillingset',
        'table': 'benefitbundlebillingset',
        'primaryKey': 'benefitBundleBillingSetID',

        'aliases': {
            'benefitBundleBillingSetID': 'id',
            'billingSetID': 'billingSetId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'benefitBundleID': 'benefitBundleId',
            'networkScheduleID': 'networkScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'serviceAreaRegionID': 'serviceAreaRegionId'
        },

        'referenceMap': {
            'serviceAreaRegion': 'serviceAreaRegionId'
        },

        'listReferences': {}
    },

    'Benefitbundleccmaxgroup': {
        'name': 'Benefitbundleccmaxgroup',
        'table': 'benefitbundleccmaxgroup',
        'primaryKey': 'benefitBundleCCMaxGroupID',

        'aliases': {
            'benefitBundleCCMaxGroupID': 'id',
            'bundleCrossControlAccumID': 'bundleCrossControlAccumId',
            'benefitBundleID': 'benefitBundleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundleccdedplan': {
        'name': 'Benefitbundleccdedplan',
        'table': 'benefitbundleccdedplan',
        'primaryKey': 'benefitBundleCCDedPlanID',

        'aliases': {
            'benefitBundleCCDedPlanID': 'id',
            'benefitBundleCCDedGroupID': 'benefitBundleCcDedGroupId',
            'bundleCrossControlAccumID': 'bundleCrossControlAccumId',
            'benefitBundleID': 'benefitBundleId',
            'benefitBundlePlanID': 'benefitBundlePlanId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'planID': 'planId',
            'deductibleID': 'deductibleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundleextid': {
        'name': 'Benefitbundleextid',
        'table': 'benefitbundleextid',
        'primaryKey': 'benefitBundleExtID',

        'aliases': {
            'benefitBundleExtID': 'id',
            'benefitBundleID': 'benefitBundleId',
            'entityID': 'entityId',
            'externalBundleID': 'externalBundleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundlecontrolplanbypass': {
        'name': 'Benefitbundlecontrolplanbypass',
        'table': 'benefitbundlecontrolplanbypass',
        'primaryKey': 'controlPlanBypassID',

        'aliases': {
            'controlPlanBypassID': 'id',
            'benefitBundlePlanAccumID': 'benefitBundlePlanAccumId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'benefitBundleID': 'benefitBundleId',
            'controlPlanID': 'controlPlanId',
            'controlBypassID': 'controlBypassId',
            'riderPlanID': 'riderPlanId',
            'riderBypassID': 'riderBypassId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundleccoopgroup': {
        'name': 'Benefitbundleccoopgroup',
        'table': 'benefitbundleccoopgroup',
        'primaryKey': 'benefitBundleCCOOPGroupID',

        'aliases': {
            'benefitBundleCCOOPGroupID': 'id',
            'bundleCrossControlAccumID': 'bundleCrossControlAccumId',
            'benefitBundleID': 'benefitBundleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundlecontrolplanded': {
        'name': 'Benefitbundlecontrolplanded',
        'table': 'benefitbundlecontrolplanded',
        'primaryKey': 'controlPlanDeductibleID',

        'aliases': {
            'controlPlanDeductibleID': 'id',
            'benefitBundlePlanAccumID': 'benefitBundlePlanAccumId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'benefitBundleID': 'benefitBundleId',
            'controlPlanID': 'controlPlanId',
            'controlDeductibleID': 'controlDeductibleId',
            'riderPlanID': 'riderPlanId',
            'riderDeductibleID': 'riderDeductibleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundlenote': {
        'name': 'Benefitbundlenote',
        'table': 'benefitbundlenote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'benefitBundleID': 'benefitBundleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundlecrosscontrolaccum': {
        'name': 'Benefitbundlecrosscontrolaccum',
        'table': 'benefitbundlecrosscontrolaccum',
        'primaryKey': 'bundleCrossControlAccumID',

        'aliases': {
            'bundleCrossControlAccumID': 'id',
            'benefitBundleID': 'benefitBundleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundlemsaplan': {
        'name': 'Benefitbundlemsaplan',
        'table': 'benefitbundlemsaplan',
        'primaryKey': 'benefitBundleMsaPlanID',

        'aliases': {
            'benefitBundleMsaPlanID': 'id',
            'benefitBundleMsaOptionID': 'benefitBundleMsaOptionId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'benefitBundleID': 'benefitBundleId',
            'carrierLobProductID': 'carrierLobProductId',
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'carrierLobProduct': 'carrierLobProductId',
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Benefitbundleccoopplan': {
        'name': 'Benefitbundleccoopplan',
        'table': 'benefitbundleccoopplan',
        'primaryKey': 'benefitBundleCCOOPPlanID',

        'aliases': {
            'benefitBundleCCOOPPlanID': 'id',
            'benefitBundleCCOOPGroupID': 'benefitBundleCcoopGroupId',
            'bundleCrossControlAccumID': 'bundleCrossControlAccumId',
            'benefitBundleID': 'benefitBundleId',
            'benefitBundlePlanID': 'benefitBundlePlanId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'planID': 'planId',
            'stoplossOOPID': 'stoplossOopid',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundlecontrolplanoop': {
        'name': 'Benefitbundlecontrolplanoop',
        'table': 'benefitbundlecontrolplanoop',
        'primaryKey': 'controlPlanOOPID',

        'aliases': {
            'controlPlanOOPID': 'id',
            'benefitBundlePlanAccumID': 'benefitBundlePlanAccumId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'benefitBundleID': 'benefitBundleId',
            'controlPlanID': 'controlPlanId',
            'controlStoplossOOPID': 'controlStoplossOopid',
            'riderPlanID': 'riderPlanId',
            'riderStoplossOOPID': 'riderStoplossOopid',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundleccmaxplan': {
        'name': 'Benefitbundleccmaxplan',
        'table': 'benefitbundleccmaxplan',
        'primaryKey': 'benefitBundleCCMaxPlanID',

        'aliases': {
            'benefitBundleCCMaxPlanID': 'id',
            'benefitBundleCCMaxGroupID': 'benefitBundleCcMaxGroupId',
            'bundleCrossControlAccumID': 'bundleCrossControlAccumId',
            'benefitBundleID': 'benefitBundleId',
            'benefitBundlePlanID': 'benefitBundlePlanId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'planID': 'planId',
            'maximumID': 'maximumId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundlemsaoption': {
        'name': 'Benefitbundlemsaoption',
        'table': 'benefitbundlemsaoption',
        'primaryKey': 'benefitBundleMsaOptionID',

        'aliases': {
            'benefitBundleMsaOptionID': 'id',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'benefitBundleID': 'benefitBundleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundleoonpricingadjust': {
        'name': 'Benefitbundleoonpricingadjust',
        'table': 'benefitbundleoonpricingadjust',
        'primaryKey': 'benefitBundleOonPricingAdjustID',

        'aliases': {
            'benefitBundleOonPricingAdjustID': 'id',
            'benefitBundleID': 'benefitBundleId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundleplan': {
        'name': 'Benefitbundleplan',
        'table': 'benefitbundleplan',
        'primaryKey': 'benefitBundlePlanID',

        'aliases': {
            'benefitBundlePlanID': 'id',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'benefitBundleID': 'benefitBundleId',
            'carrierLobPlanID': 'carrierLobPlanId',
            'planID': 'planId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundlecontrolplanmax': {
        'name': 'Benefitbundlecontrolplanmax',
        'table': 'benefitbundlecontrolplanmax',
        'primaryKey': 'controlPlanMaximumID',

        'aliases': {
            'controlPlanMaximumID': 'id',
            'benefitBundlePlanAccumID': 'benefitBundlePlanAccumId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'benefitBundleID': 'benefitBundleId',
            'controlPlanID': 'controlPlanId',
            'controlMaximumID': 'controlMaximumId',
            'riderPlanID': 'riderPlanId',
            'riderMaximumID': 'riderMaximumId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundleccdedgroup': {
        'name': 'Benefitbundleccdedgroup',
        'table': 'benefitbundleccdedgroup',
        'primaryKey': 'benefitBundleCCDedGroupID',

        'aliases': {
            'benefitBundleCCDedGroupID': 'id',
            'bundleCrossControlAccumID': 'bundleCrossControlAccumId',
            'benefitBundleID': 'benefitBundleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundleoption': {
        'name': 'Benefitbundleoption',
        'table': 'benefitbundleoption',
        'primaryKey': 'benefitBundleOptionID',

        'aliases': {
            'benefitBundleOptionID': 'id',
            'benefitBundleID': 'benefitBundleId',
            'serviceAreaID': 'serviceAreaId',
            'oonPricingSchedID': 'oonPricingSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundleoptionextid': {
        'name': 'Benefitbundleoptionextid',
        'table': 'benefitbundleoptionextid',
        'primaryKey': 'benefitBundleOptionExtID',

        'aliases': {
            'benefitBundleOptionExtID': 'id',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'benefitBundleID': 'benefitBundleId',
            'entityID': 'entityId',
            'benefitBundleOptionExternalID': 'benefitBundleOptionExternalId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundlerideroption': {
        'name': 'Benefitbundlerideroption',
        'table': 'benefitbundlerideroption',
        'primaryKey': 'benefitBundleRiderOptionID',

        'aliases': {
            'benefitBundleRiderOptionID': 'id',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'benefitBundleID': 'benefitBundleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundleriderplan': {
        'name': 'Benefitbundleriderplan',
        'table': 'benefitbundleriderplan',
        'primaryKey': 'benefitBundleRiderPlanID',

        'aliases': {
            'benefitBundleRiderPlanID': 'id',
            'benefitBundleRiderOptionID': 'benefitBundleRiderOptionId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'benefitBundleID': 'benefitBundleId',
            'carrierLobPlanID': 'carrierLobPlanId',
            'planID': 'planId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundleplanaccum': {
        'name': 'Benefitbundleplanaccum',
        'table': 'benefitbundleplanaccum',
        'primaryKey': 'benefitBundlePlanAccumID',

        'aliases': {
            'benefitBundlePlanAccumID': 'id',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'benefitBundleID': 'benefitBundleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundlestandardcompid': {
        'name': 'Benefitbundlestandardcompid',
        'table': 'benefitbundlestandardcompid',
        'primaryKey': 'benefitBundleStandardCompID',

        'aliases': {
            'benefitBundleStandardCompID': 'id',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'benefitBundleID': 'benefitBundleId',
            'standardCompID': 'standardCompId',
            'networkScheduleID': 'networkScheduleId',
            'serviceAreaRegionID': 'serviceAreaRegionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'serviceAreaRegion': 'serviceAreaRegionId'
        },

        'listReferences': {}
    },

    'Benefitbundleserviceplan': {
        'name': 'Benefitbundleserviceplan',
        'table': 'benefitbundleserviceplan',
        'primaryKey': 'benefitBundleServicePlanID',

        'aliases': {
            'benefitBundleServicePlanID': 'id',
            'benefitBundleServiceOptionID': 'benefitBundleServiceOptionId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'benefitBundleID': 'benefitBundleId',
            'carrierLobProductID': 'carrierLobProductId',
            'servicePlanID': 'servicePlanId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'carrierLobProduct': 'carrierLobProductId'
        },

        'listReferences': {}
    },

    'Benefitbundleutilizationopt': {
        'name': 'Benefitbundleutilizationopt',
        'table': 'benefitbundleutilizationopt',
        'primaryKey': 'benefitBundleUtilizationOptID',

        'aliases': {
            'benefitBundleUtilizationOptID': 'id',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'benefitBundleID': 'benefitBundleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundleutilizationplan': {
        'name': 'Benefitbundleutilizationplan',
        'table': 'benefitbundleutilizationplan',
        'primaryKey': 'benefitBundleUtilizationPlanID',

        'aliases': {
            'benefitBundleUtilizationPlanID': 'id',
            'benefitBundleUtilizationOptID': 'benefitBundleUtilizationOptId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'benefitBundleID': 'benefitBundleId',
            'carrierLobProductID': 'carrierLobProductId',
            'utilizationPlanID': 'utilizationPlanId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'carrierLobProduct': 'carrierLobProductId'
        },

        'listReferences': {}
    },

    'Benefitbundleserviceoption': {
        'name': 'Benefitbundleserviceoption',
        'table': 'benefitbundleserviceoption',
        'primaryKey': 'benefitBundleServiceOptionID',

        'aliases': {
            'benefitBundleServiceOptionID': 'id',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'benefitBundleID': 'benefitBundleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitcode': {
        'name': 'Benefitcode',
        'table': 'benefitcode',
        'primaryKey': 'benefitCode',

        'aliases': {
            'benefitCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitfulfillmenttextnote': {
        'name': 'Benefitfulfillmenttextnote',
        'table': 'benefitfulfillmenttextnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'benefitFulfillmentTextID': 'benefitFulfillmentTextId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitcodemerchantcatcode': {
        'name': 'Benefitcodemerchantcatcode',
        'table': 'benefitcodemerchantcatcode',
        'primaryKey': 'merchantCategoryCode',

        'aliases': {
            'merchantCategoryCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitfulfillmenttext': {
        'name': 'Benefitfulfillmenttext',
        'table': 'benefitfulfillmenttext',
        'primaryKey': 'benefitFulfillmentTextID',

        'aliases': {
            'benefitFulfillmentTextID': 'id',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitfulfillmenttextperiod': {
        'name': 'Benefitfulfillmenttextperiod',
        'table': 'benefitfulfillmenttextperiod',
        'primaryKey': 'benefitFulfillmentTextPeriodID',

        'aliases': {
            'benefitFulfillmentTextPeriodID': 'id',
            'languageCodeISO': 'languageCodeIso',
            'benefitFulfillmentTextID': 'benefitFulfillmentTextId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitfulfillmenttexttype': {
        'name': 'Benefitfulfillmenttexttype',
        'table': 'benefitfulfillmenttexttype',
        'primaryKey': 'benefitFulfillmentTextPeriodID',

        'aliases': {
            'fulfillmentType': 'id',
            'benefitFulfillmentTextPeriodID': 'id',
            'benefitFulfillmentTextID': 'benefitFulfillmentTextId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitplancode': {
        'name': 'Benefitplancode',
        'table': 'benefitplancode',
        'primaryKey': 'version',

        'aliases': {
            'benefitPlanVersionID': 'id',
            'benefitCode': 'id',
            'tierNumber': 'id',
            'codeLevel': 'id',
            'version': 'id',
            'benWaitingPeriodDT': 'benWaitingPeriodDt',
            'ageLimitFromDT': 'ageLimitFromDt',
            'ageLimitThruDT': 'ageLimitThruDt',
            'ageLimitFromLCD': 'ageLimitFromLcd',
            'ageLimitThruLCD': 'ageLimitThruLcd',
            'networkID': 'networkId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'network': 'networkId'
        },

        'listReferences': {}
    },

    'Benefitplan': {
        'name': 'Benefitplan',
        'table': 'benefitplan',
        'primaryKey': 'benefitPlanVersionID',

        'aliases': {
            'benefitPlanVersionID': 'id',
            'planID': 'planId',
            'productVersionID': 'productVersionId',
            'filingLimitDT': 'filingLimitDt',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'memGroupID': 'memGroupId',
            'includeChildMGInd': 'includeChildMgInd',
            'delegSetID': 'delegSetId',
            'dofrSetID': 'dofrSetId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitplantradingoop': {
        'name': 'Benefitplantradingoop',
        'table': 'benefitplantradingoop',
        'primaryKey': 'benefitPlanTradingOOPID',

        'aliases': {
            'benefitPlanTradingOOPID': 'id',
            'benefitPlanTradingPartnerID': 'benefitPlanTradingPartnerId',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'stoplossOOPID': 'stoplossOopid',
            'tradingPartnerOOPID': 'tradingPartnerOopid',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitssetting': {
        'name': 'Benefitssetting',
        'table': 'benefitssettings',
        'primaryKey': 'settingID',

        'aliases': {
            'settingID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefulfillmenttextauditdetail': {
        'name': 'Benefulfillmenttextauditdetail',
        'table': 'benefulfillmenttextauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'benefitFulfillmentTextID': 'benefitFulfillmentTextId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitplantradingpartner': {
        'name': 'Benefitplantradingpartner',
        'table': 'benefitplantradingpartner',
        'primaryKey': 'benefitPlanTradingPartnerID',

        'aliases': {
            'benefitPlanTradingPartnerID': 'id',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'tradingPartnerConfigID': 'tradingPartnerConfigId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benelanguageschedauditdetail': {
        'name': 'Benelanguageschedauditdetail',
        'table': 'benelanguageschedauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'beneLanguageSchedID': 'beneLanguageSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitplantradingded': {
        'name': 'Benefitplantradingded',
        'table': 'benefitplantradingded',
        'primaryKey': 'benefitPlanTradingDedID',

        'aliases': {
            'benefitPlanTradingDedID': 'id',
            'benefitPlanTradingPartnerID': 'benefitPlanTradingPartnerId',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'deductibleID': 'deductibleId',
            'tradingPartnerDedID': 'tradingPartnerDedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benelanguageschednote': {
        'name': 'Benelanguageschednote',
        'table': 'benelanguageschednote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'beneLanguageSchedID': 'beneLanguageSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benelangschedtextauditdetail': {
        'name': 'Benelangschedtextauditdetail',
        'table': 'benelangschedtextauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'beneLanguageSchedTextID': 'beneLanguageSchedTextId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benelanguageschedtextrelcode': {
        'name': 'Benelanguageschedtextrelcode',
        'table': 'benelanguageschedtextrelcode',
        'primaryKey': 'beneLanguageSchedTextID',

        'aliases': {
            'relationshipCode': 'id',
            'beneLanguageSchedTextID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefittypestack': {
        'name': 'Benefittypestack',
        'table': 'benefittypestack',
        'primaryKey': 'benefitTypeStackID',

        'aliases': {
            'benefitTypeStackID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benelanguagesched': {
        'name': 'Benelanguagesched',
        'table': 'benelanguagesched',
        'primaryKey': 'beneLanguageSchedID',

        'aliases': {
            'beneLanguageSchedID': 'id',
            'ownerGroupID': 'ownerGroupId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benefitbundlevalidation': {
        'name': 'Benefitbundlevalidation',
        'table': 'benefitbundlevalidation',
        'primaryKey': 'benefitBundleValidationID',

        'aliases': {
            'benefitBundleValidationID': 'id',
            'benefitBundleID': 'benefitBundleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benelanguageschedtexttype': {
        'name': 'Benelanguageschedtexttype',
        'table': 'benelanguageschedtexttype',
        'primaryKey': 'beneLanguageSchedTextID',

        'aliases': {
            'fulfillmentType': 'id',
            'beneLanguageSchedTextID': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benelanguageschedtext': {
        'name': 'Benelanguageschedtext',
        'table': 'benelanguageschedtext',
        'primaryKey': 'beneLanguageSchedTextID',

        'aliases': {
            'beneLanguageSchedTextID': 'id',
            'ageLimitFromDT': 'ageLimitFromDt',
            'ageLimitThruDT': 'ageLimitThruDt',
            'ageLimitFromLCD': 'ageLimitFromLcd',
            'ageLimitThruLCD': 'ageLimitThruLcd',
            'networkID': 'networkId',
            'languageCodeISO': 'languageCodeIso',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'network': 'networkId'
        },

        'listReferences': {}
    },

    'Benelanguageschedassign': {
        'name': 'Benelanguageschedassign',
        'table': 'benelanguageschedassign',
        'primaryKey': 'beneLanguageSchedAssignID',

        'aliases': {
            'beneLanguageSchedAssignID': 'id',
            'beneLanguageSchedID': 'beneLanguageSchedId',
            'beneLanguageSchedTextID': 'beneLanguageSchedTextId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benelanguagevariablecode': {
        'name': 'Benelanguagevariablecode',
        'table': 'benelanguagevariablecode',
        'primaryKey': 'beneLanguageVariableCode',

        'aliases': {
            'beneLanguageVariableCode': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benelangschedtextsvctypecode': {
        'name': 'Benelangschedtextsvctypecode',
        'table': 'benelangschedtextsvctypecode',
        'primaryKey': 'beneLanguageSchedTextID',

        'aliases': {
            'serviceTypeCode': 'id',
            'beneLanguageSchedTextID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benelanguagevariablefulfillapp': {
        'name': 'Benelanguagevariablefulfillapp',
        'table': 'benelanguagevariablefulfillapp',
        'primaryKey': 'beneLanguageVariableCode',

        'aliases': {
            'fulfillmentApplicabilityType': 'id',
            'beneLanguageVariableCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benemaxperiod': {
        'name': 'Benemaxperiod',
        'table': 'benemaxperiod',
        'primaryKey': 'beneMaxPeriodID',

        'aliases': {
            'beneMaxPeriodID': 'id',
            'beneMaxID': 'beneMaxId',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'maximumDT': 'maximumDt',
            'maximumDTQty': 'maximumDtQty',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benemax': {
        'name': 'Benemax',
        'table': 'benemax',
        'primaryKey': 'beneMaxID',

        'aliases': {
            'beneMaxID': 'id',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'maximumID': 'maximumId',
            'benefitFulfillmentTextID': 'benefitFulfillmentTextId',
            'generatedBenefitFulfillmentTextID': 'generatedBenefitFulfillmentTextId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benemaxperiodprocedure': {
        'name': 'Benemaxperiodprocedure',
        'table': 'benemaxperiodprocedure',
        'primaryKey': 'beneMaxPeriodProcedureID',

        'aliases': {
            'beneMaxPeriodProcedureID': 'id',
            'beneMaxPeriodID': 'beneMaxPeriodId',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'beneMaxID': 'beneMaxId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benenote': {
        'name': 'Benenote',
        'table': 'benenote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Beneoverride': {
        'name': 'Beneoverride',
        'table': 'beneoverride',
        'primaryKey': 'billedWithBenefitCode',

        'aliases': {
            'benefitPlanVersionID': 'id',
            'benefitCode': 'id',
            'tierNumber': 'id',
            'codeLevel': 'id',
            'version': 'id',
            'billedWithBenefitCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benemaxref': {
        'name': 'Benemaxref',
        'table': 'benemaxref',
        'primaryKey': 'beneMaxID',

        'aliases': {
            'benefitPlanVersionID': 'id',
            'benefitCode': 'id',
            'tierNumber': 'id',
            'codeLevel': 'id',
            'version': 'id',
            'beneMaxID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'maximumID': 'maximumId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benemaxtier': {
        'name': 'Benemaxtier',
        'table': 'benemaxtier',
        'primaryKey': 'beneMaxTierID',

        'aliases': {
            'beneMaxTierID': 'id',
            'beneMaxID': 'beneMaxId',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benenetworksched': {
        'name': 'Benenetworksched',
        'table': 'benenetworksched',
        'primaryKey': 'beneNetworkSchedID',

        'aliases': {
            'beneNetworkSchedID': 'id',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'networkScheduleID': 'networkScheduleId',
            'serviceAreaID': 'serviceAreaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'billingSetID': 'billingSetId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benenetworkbaserate': {
        'name': 'Benenetworkbaserate',
        'table': 'benenetworkbaserate',
        'primaryKey': 'beneNetworkBaseRateID',

        'aliases': {
            'beneNetworkBaseRateID': 'id',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'beneNetworkSchedID': 'beneNetworkSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Beneplanactuarialvalue': {
        'name': 'Beneplanactuarialvalue',
        'table': 'beneplanactuarialvalue',
        'primaryKey': 'benePlanAVID',

        'aliases': {
            'benePlanAVID': 'id',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Beneplanaddress': {
        'name': 'Beneplanaddress',
        'table': 'beneplanaddress',
        'primaryKey': 'benePlanAddressID',

        'aliases': {
            'benePlanAddressID': 'id',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'sysAddressID': 'sysAddressId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Beneplanrelationship': {
        'name': 'Beneplanrelationship',
        'table': 'beneplanrelationship',
        'primaryKey': 'benePlanRelationshipID',

        'aliases': {
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'relationshipCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'benePlanRelationshipID': 'id',
            'ageLimitFromDT': 'ageLimitFromDt',
            'ageLimitFromLCD': 'ageLimitFromLcd',
            'ageLimitThruDT': 'ageLimitThruDt',
            'ageLimitThruLCD': 'ageLimitThruLcd'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Beneplansetting': {
        'name': 'Beneplansetting',
        'table': 'beneplansettings',
        'primaryKey': 'benePlanSettingsID',

        'aliases': {
            'benePlanSettingsID': 'id',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'sourceID': 'sourceId',
            'scmID': 'scmId',
            'formularyScheduleID': 'formularyScheduleId',
            'familyUnitScheduleID': 'familyUnitScheduleId',
            'fulfillmentSchedID': 'fulfillmentSchedId',
            'varyODBByEmployStatus': 'varyOdbByEmployStatus',
            'serviceAreaID': 'serviceAreaId',
            'preXPriorPeriodDT': 'preXPriorPeriodDt',
            'preXWaitingPeriodDT': 'preXWaitingPeriodDt',
            'preXWaitLateEnrollDT': 'preXWaitLateEnrollDt',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'maxAdmitOnTermDM': 'maxAdmitOnTermDm',
            'remarkCodeScheduleID': 'remarkCodeScheduleId',
            'adjudScheduleID': 'adjudScheduleId',
            'allowOONPricingPctOverrideInd': 'allowOonPricingPctOverrideInd',
            'eocSetID': 'eocSetId',
            'servCompID': 'servCompId',
            'billingSetID': 'billingSetId',
            'clinicalEditSchedID': 'clinicalEditSchedId',
            'provCertSetID': 'provCertSetId',
            'crossAccumByPrimOOPInd': 'crossAccumByPrimOopInd',
            'salesServiceAreaID': 'salesServiceAreaId',
            'medPolicySchedID': 'medPolicySchedId',
            'authDecisionActionScheduleID': 'authDecisionActionScheduleId',
            'benefitFulfillmentTextID': 'benefitFulfillmentTextId',
            'generatedBenefitFulfillmentTextID': 'generatedBenefitFulfillmentTextId',
            'beneLanguageSchedID': 'beneLanguageSchedId',
            'generatedBeneLanguageSchedID': 'generatedBeneLanguageSchedId',
            'timelyFilingSchedID': 'timelyFilingSchedId',
            'claimAuditSchedID': 'claimAuditSchedId',
            'medPolicySetID': 'medPolicySetId'
        },

        'referenceMap': {
            'scm': 'scmId'
        },

        'listReferences': {}
    },

    'Beneplanphonenumber': {
        'name': 'Beneplanphonenumber',
        'table': 'beneplanphonenumber',
        'primaryKey': 'benePlanPhoneNumberID',

        'aliases': {
            'benePlanPhoneNumberID': 'id',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'sysPhoneNumberID': 'sysPhoneNumberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Beneporcelainlimit': {
        'name': 'Beneporcelainlimit',
        'table': 'beneporcelainlimit',
        'primaryKey': 'toothID',

        'aliases': {
            'benefitPlanVersionID': 'id',
            'benefitCode': 'id',
            'tierNumber': 'id',
            'codeLevel': 'id',
            'version': 'id',
            'toothID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benestoplossoopperiod': {
        'name': 'Benestoplossoopperiod',
        'table': 'benestoplossoopperiod',
        'primaryKey': 'beneStoplossOOPPeriodID',

        'aliases': {
            'beneStoplossOOPPeriodID': 'id',
            'beneStoplossOOPID': 'beneStoplossOopid',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'stoplossOOPEffDate': 'stoplossOopEffDate',
            'stoplossOOPExpDate': 'stoplossOopExpDate',
            'stoplossFUDSInd': 'stoplossFudsInd',
            'individualOOP': 'individualOop',
            'familySLOOPOnlyInd': 'familySloopOnlyInd',
            'familyOOPAccumType': 'familyOopAccumType',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'familyOOPAmt': 'familyOopAmt'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benestoplossoop': {
        'name': 'Benestoplossoop',
        'table': 'benestoplossoop',
        'primaryKey': 'beneStoplossOOPID',

        'aliases': {
            'beneStoplossOOPID': 'id',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'stoplossOOPID': 'stoplossOopid',
            'stoplossOOPDesc': 'stoplossOopDesc',
            'benefitFulfillmentTextID': 'benefitFulfillmentTextId',
            'generatedBenefitFulfillmentTextID': 'generatedBenefitFulfillmentTextId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benestandardcompid': {
        'name': 'Benestandardcompid',
        'table': 'benestandardcompid',
        'primaryKey': 'beneStandardCompID',

        'aliases': {
            'beneStandardCompID': 'id',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'standardCompID': 'standardCompId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benestoplossfamily': {
        'name': 'Benestoplossfamily',
        'table': 'benestoplossfamily',
        'primaryKey': 'beneStoplossFamilyID',

        'aliases': {
            'beneStoplossFamilyID': 'id',
            'beneStoplossOOPPeriodID': 'beneStoplossOopPeriodId',
            'beneStoplossOOPID': 'beneStoplossOopid',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'familyUnitScheduleID': 'familyUnitScheduleId',
            'familyOOPAmt': 'familyOopAmt',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benestoplosstier': {
        'name': 'Benestoplosstier',
        'table': 'benestoplosstier',
        'primaryKey': 'beneStoplossTierID',

        'aliases': {
            'beneStoplossTierID': 'id',
            'beneStoplossOOPID': 'beneStoplossOopid',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benetier': {
        'name': 'Benetier',
        'table': 'benetier',
        'primaryKey': 'beneTierID',

        'aliases': {
            'beneTierID': 'id',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'tierEOBMember': 'tierEobMember',
            'tierEOBProvider': 'tierEobProvider',
            'benefitFulfillmentTextID': 'benefitFulfillmentTextId',
            'generatedBenefitFulfillmentTextID': 'generatedBenefitFulfillmentTextId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'delegSetID': 'delegSetId',
            'dofrSetID': 'dofrSetId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benestoplossref': {
        'name': 'Benestoplossref',
        'table': 'benestoplossref',
        'primaryKey': 'beneStoplossOOPID',

        'aliases': {
            'benefitPlanVersionID': 'id',
            'benefitCode': 'id',
            'tierNumber': 'id',
            'codeLevel': 'id',
            'version': 'id',
            'beneStoplossOOPID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'stoplossOOPDesc': 'stoplossOopDesc',
            'stoplossOOPID': 'stoplossOopid',
            'primaryStoplossOOPInd': 'primaryStoplossOopInd'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benetierprov': {
        'name': 'Benetierprov',
        'table': 'benetierprov',
        'primaryKey': 'beneTierProvID',

        'aliases': {
            'beneTierProvID': 'id',
            'beneTierID': 'beneTierId',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'openAccessPeriodDT': 'openAccessPeriodDt',
            'electiveChangeFreqDT': 'electiveChangeFreqDt',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benetiernetwork': {
        'name': 'Benetiernetwork',
        'table': 'benetiernetwork',
        'primaryKey': 'beneTierNetworkID',

        'aliases': {
            'beneTierNetworkID': 'id',
            'beneTierID': 'beneTierId',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'networkScheduleID': 'networkScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benevalidation': {
        'name': 'Benevalidation',
        'table': 'benevalidation',
        'primaryKey': 'beneValidationID',

        'aliases': {
            'beneValidationID': 'id',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Benewaiveref': {
        'name': 'Benewaiveref',
        'table': 'benewaiveref',
        'primaryKey': 'beneWaiveCode',

        'aliases': {
            'benefitPlanVersionID': 'id',
            'benefitCode': 'id',
            'tierNumber': 'id',
            'codeLevel': 'id',
            'version': 'id',
            'beneWaiveCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Billingschedagegender': {
        'name': 'Billingschedagegender',
        'table': 'billingschedagegender',
        'primaryKey': 'billingSchedAgeGenderID',

        'aliases': {
            'billingSchedAgeGenderID': 'id',
            'billingSchedID': 'billingSchedId',
            'ageLimitFromDT': 'ageLimitFromDt',
            'ageLimitFromLCD': 'ageLimitFromLcd',
            'ageLimitThruDT': 'ageLimitThruDt',
            'ageLimitThruLCD': 'ageLimitThruLcd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Billingsched': {
        'name': 'Billingsched',
        'table': 'billingsched',
        'primaryKey': 'billingSchedID',

        'aliases': {
            'billingSchedID': 'id',
            'familyUnitScheduleID': 'familyUnitScheduleId',
            'bandPMPMRateInd': 'bandPmpmRateInd',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Billingschedentity': {
        'name': 'Billingschedentity',
        'table': 'billingschedentity',
        'primaryKey': 'billingSchedEntityID',

        'aliases': {
            'billingSchedEntityID': 'id',
            'billingSchedID': 'billingSchedId',
            'billingEntityID': 'billingEntityId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Billingschedfudslevel': {
        'name': 'Billingschedfudslevel',
        'table': 'billingschedfudslevel',
        'primaryKey': 'billingSchedFUDSLevelID',

        'aliases': {
            'billingSchedFUDSLevelID': 'id',
            'billingSchedID': 'billingSchedId',
            'familyUnitScheduleID': 'familyUnitScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Billingschedmodifier': {
        'name': 'Billingschedmodifier',
        'table': 'billingschedmodifier',
        'primaryKey': 'billingSchedModifierID',

        'aliases': {
            'billingSchedModifierID': 'id',
            'billingSchedID': 'billingSchedId',
            'industryClassModSchedID': 'industryClassModSchedId',
            'serviceAreaID': 'serviceAreaId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Billingschedauditdetail': {
        'name': 'Billingschedauditdetail',
        'table': 'billingschedauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'billingSchedID': 'billingSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Billingset': {
        'name': 'Billingset',
        'table': 'billingset',
        'primaryKey': 'billingSetID',

        'aliases': {
            'billingSetID': 'id',
            'ownerGroupID': 'ownerGroupId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Billingsetnote': {
        'name': 'Billingsetnote',
        'table': 'billingsetnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'billingSetID': 'billingSetId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Billingsetauditdetail': {
        'name': 'Billingsetauditdetail',
        'table': 'billingsetauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'billingSetID': 'billingSetId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Billingschednote': {
        'name': 'Billingschednote',
        'table': 'billingschednote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'billingSchedID': 'billingSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Billitemtype': {
        'name': 'Billitemtype',
        'table': 'billitemtype',
        'primaryKey': 'billItemType',

        'aliases': {
            'billItemType': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Billtypecategorydefinition': {
        'name': 'Billtypecategorydefinition',
        'table': 'billtypecategorydefinition',
        'primaryKey': 'typeOfBill',

        'aliases': {
            'billTypeCategory': 'id',
            'typeOfBill': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Billtypeset': {
        'name': 'Billtypeset',
        'table': 'billtypeset',
        'primaryKey': 'billTypeSetID',

        'aliases': {
            'billTypeSetID': 'id',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Billtype': {
        'name': 'Billtype',
        'table': 'billtype',
        'primaryKey': 'billType',

        'aliases': {
            'billType': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Billtypecategory': {
        'name': 'Billtypecategory',
        'table': 'billtypecategory',
        'primaryKey': 'billTypeCategory',

        'aliases': {
            'billTypeCategory': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Billingsetschedassign': {
        'name': 'Billingsetschedassign',
        'table': 'billingsetschedassign',
        'primaryKey': 'billingSetSchedAssignID',

        'aliases': {
            'billingSetSchedAssignID': 'id',
            'billingSetID': 'billingSetId',
            'billingSchedID': 'billingSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Billtypesetcat': {
        'name': 'Billtypesetcat',
        'table': 'billtypesetcat',
        'primaryKey': 'billTypeSetCatID',

        'aliases': {
            'billTypeSetCatID': 'id',
            'billTypeSetID': 'billTypeSetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Billtypesetcatdetail': {
        'name': 'Billtypesetcatdetail',
        'table': 'billtypesetcatdetail',
        'primaryKey': 'billTypeSetCatDetailID',

        'aliases': {
            'billTypeSetCatDetailID': 'id',
            'billTypeSetID': 'billTypeSetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'billTypeSetCatID': 'billTypeSetCatId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Brandingentity': {
        'name': 'Brandingentity',
        'table': 'brandingentity',
        'primaryKey': 'brandingEntity',

        'aliases': {
            'brandingEntity': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Capschednote': {
        'name': 'Capschednote',
        'table': 'capschednote',
        'primaryKey': 'noteID',

        'aliases': {
            'scheduleID': 'id',
            'noteID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Billtypesetauditdetail': {
        'name': 'Billtypesetauditdetail',
        'table': 'billtypesetauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'billTypeSetID': 'billTypeSetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Capschedule': {
        'name': 'Capschedule',
        'table': 'capschedule',
        'primaryKey': 'scheduleID',

        'aliases': {
            'scheduleID': 'id',
            'bandPMPMCapInd': 'bandPmpmCapInd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Capsetassignment': {
        'name': 'Capsetassignment',
        'table': 'capsetassignment',
        'primaryKey': 'effectiveDate',

        'aliases': {
            'setID': 'id',
            'scheduleID': 'id',
            'effectiveDate': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Carrier': {
        'name': 'Carrier',
        'table': 'carrier',
        'primaryKey': 'carrierID',

        'aliases': {
            'carrierID': 'id',
            'businessURL': 'businessUrl',
            'natlProviderID': 'natlProviderId',
            'parentID': 'parentId',
            'alphaParentID': 'alphaParentId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'carrierBusinessID': 'carrierBusinessId'
        },

        'referenceMap': {
            'natlProvider': 'natlProviderId'
        },

        'listReferences': {}
    },

    'Capmodifier': {
        'name': 'Capmodifier',
        'table': 'capmodifier',
        'primaryKey': 'capModifierID',

        'aliases': {
            'scheduleID': 'id',
            'capModifierID': 'id',
            'serviceAreaID': 'serviceAreaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Carrierauditdetail': {
        'name': 'Carrierauditdetail',
        'table': 'carrierauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'carrierID': 'carrierId'
        },

        'referenceMap': {
            'carrier': 'carrierId'
        },

        'listReferences': {}
    },

    'Capschedauditdetail': {
        'name': 'Capschedauditdetail',
        'table': 'capschedauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'scheduleID': 'scheduleId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Carriercontactdepartment': {
        'name': 'Carriercontactdepartment',
        'table': 'carriercontactdepartment',
        'primaryKey': 'departmentCode',

        'aliases': {
            'carrierID': 'id',
            'departmentCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Carrierdepartmenthour': {
        'name': 'Carrierdepartmenthour',
        'table': 'carrierdepartmenthours',
        'primaryKey': 'dayOfWeek',

        'aliases': {
            'carrierID': 'id',
            'departmentCode': 'id',
            'dayOfWeek': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Capset': {
        'name': 'Capset',
        'table': 'capset',
        'primaryKey': 'setID',

        'aliases': {
            'setID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Billtypesetcatdetaildef': {
        'name': 'Billtypesetcatdetaildef',
        'table': 'billtypesetcatdetaildef',
        'primaryKey': 'billTypeSetID',

        'aliases': {
            'billTypeSetCatDetailID': 'id',
            'typeOfBill': 'id',
            'billTypeSetID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'billTypeSetCatID': 'billTypeSetCatId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Capagegender': {
        'name': 'Capagegender',
        'table': 'capagegender',
        'primaryKey': 'bandNumber',

        'aliases': {
            'scheduleID': 'id',
            'bandNumber': 'id',
            'ageLimitFromDT': 'ageLimitFromDt',
            'ageLimitFromLCD': 'ageLimitFromLcd',
            'ageLimitThruDT': 'ageLimitThruDt',
            'ageLimitThruLCD': 'ageLimitThruLcd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Carriercontactaddress': {
        'name': 'Carriercontactaddress',
        'table': 'carriercontactaddress',
        'primaryKey': 'sequenceNum',

        'aliases': {
            'carrierID': 'id',
            'departmentCode': 'id',
            'contactNum': 'id',
            'sequenceNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Carrierdepartmentaddress': {
        'name': 'Carrierdepartmentaddress',
        'table': 'carrierdepartmentaddress',
        'primaryKey': 'addressRecordNum',

        'aliases': {
            'carrierID': 'id',
            'departmentCode': 'id',
            'addressRecordNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Carrierdepartmentphone': {
        'name': 'Carrierdepartmentphone',
        'table': 'carrierdepartmentphone',
        'primaryKey': 'phoneRecordNum',

        'aliases': {
            'carrierID': 'id',
            'departmentCode': 'id',
            'phoneRecordNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Carrierlobauditdetail': {
        'name': 'Carrierlobauditdetail',
        'table': 'carrierlobauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'carrierLineOfBusinessID': 'carrierLineOfBusinessId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Carrierextid': {
        'name': 'Carrierextid',
        'table': 'carrierextid',
        'primaryKey': 'carrierExtID',

        'aliases': {
            'carrierExtID': 'id',
            'carrierID': 'carrierId',
            'externalCarrierID': 'externalCarrierId',
            'entityID': 'entityId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'carrier': 'carrierId',
            'externalCarrier': 'externalCarrierId'
        },

        'listReferences': {}
    },

    'Carriercontactname': {
        'name': 'Carriercontactname',
        'table': 'carriercontactname',
        'primaryKey': 'contactNum',

        'aliases': {
            'carrierID': 'id',
            'departmentCode': 'id',
            'contactNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Carrierfein': {
        'name': 'Carrierfein',
        'table': 'carrierfein',
        'primaryKey': 'carrierID',

        'aliases': {
            'sequenceNum': 'id',
            'carrierID': 'id',
            'federalTaxID': 'federalTaxId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Capschednotedetail': {
        'name': 'Capschednotedetail',
        'table': 'capschednotedetail',
        'primaryKey': 'noteDetailID',

        'aliases': {
            'scheduleID': 'scheduleId',
            'noteID': 'noteId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'noteDetailID': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Carrierlobplan': {
        'name': 'Carrierlobplan',
        'table': 'carrierlobplan',
        'primaryKey': 'carrierLobPlanID',

        'aliases': {
            'carrierLobPlanID': 'id',
            'carrierLineOfBusinessID': 'carrierLineOfBusinessId',
            'planID': 'planId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'oonCarrierLineOfBusinessID': 'oonCarrierLineOfBusinessId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Carrierhiosissuerid': {
        'name': 'Carrierhiosissuerid',
        'table': 'carrierhiosissuerid',
        'primaryKey': 'carrierHIOSIssuerID',

        'aliases': {
            'carrierHIOSIssuerID': 'id',
            'carrierID': 'carrierId',
            'hiosIssuerID': 'hiosIssuerId',
            'carrierHIOSIssuerEffDate': 'carrierHiosIssuerEffDate',
            'carrierHIOSIssuerExpDate': 'carrierHiosIssuerExpDate',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'carrier': 'carrierId'
        },

        'listReferences': {}
    },

    'Carrierlineofbusiness': {
        'name': 'Carrierlineofbusiness',
        'table': 'carrierlineofbusiness',
        'primaryKey': 'carrierLineOfBusinessID',

        'aliases': {
            'carrierLineOfBusinessID': 'id',
            'carrierID': 'carrierId',
            'lineOfBusinessID': 'lineOfBusinessId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'carrier': 'carrierId'
        },

        'listReferences': {}
    },

    'Carrierlobproduct': {
        'name': 'Carrierlobproduct',
        'table': 'carrierlobproduct',
        'primaryKey': 'carrierLobProductID',

        'aliases': {
            'carrierLobProductID': 'id',
            'carrierLineOfBusinessID': 'carrierLineOfBusinessId',
            'productID': 'productId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'product': 'productId'
        },

        'listReferences': {}
    },

    'Carrierservice': {
        'name': 'Carrierservice',
        'table': 'carrierservice',
        'primaryKey': 'carrierServiceSeqNum',

        'aliases': {
            'carrierID': 'id',
            'carrierServiceSeqNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Carriernote': {
        'name': 'Carriernote',
        'table': 'carriernote',
        'primaryKey': 'noteID',

        'aliases': {
            'carrierID': 'id',
            'noteID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Carriercontactphone': {
        'name': 'Carriercontactphone',
        'table': 'carriercontactphone',
        'primaryKey': 'phoneRecordNum',

        'aliases': {
            'carrierID': 'id',
            'departmentCode': 'id',
            'contactNum': 'id',
            'phoneRecordNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Carrierstate': {
        'name': 'Carrierstate',
        'table': 'carrierstate',
        'primaryKey': 'state',

        'aliases': {
            'carrierID': 'id',
            'state': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Carriernotedetail': {
        'name': 'Carriernotedetail',
        'table': 'carriernotedetail',
        'primaryKey': 'noteDetailID',

        'aliases': {
            'carrierID': 'carrierId',
            'noteID': 'noteId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'noteDetailID': 'id'
        },

        'referenceMap': {
            'carrier': 'carrierId'
        },

        'listReferences': {}
    },

    'Carryovererrorqueue': {
        'name': 'Carryovererrorqueue',
        'table': 'carryovererrorqueue',
        'primaryKey': 'queueID',

        'aliases': {
            'queueID': 'id',
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'acctBalSetID': 'acctBalSetId'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Carrierurl': {
        'name': 'Carrierurl',
        'table': 'carrierurl',
        'primaryKey': 'carrierID',

        'aliases': {
            'sequenceNum': 'id',
            'carrierID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'CislBatchprocesstype': {
        'name': 'CislBatchprocesstype',
        'table': 'cisl_batchprocesstype',
        'primaryKey': 'batchProcessTypeId',

        'aliases': {
            'batchProcessTypeId': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'CislBatchprocess': {
        'name': 'CislBatchprocess',
        'table': 'cisl_batchprocess',
        'primaryKey': 'batchProcessID',

        'aliases': {
            'batchProcessID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Carrierlobpermit': {
        'name': 'Carrierlobpermit',
        'table': 'carrierlobpermit',
        'primaryKey': 'carrierLobPermitID',

        'aliases': {
            'carrierLobPermitID': 'id',
            'carrierLineOfBusinessID': 'carrierLineOfBusinessId',
            'licensingEntityPermitID': 'licensingEntityPermitId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Carrierworkhour': {
        'name': 'Carrierworkhour',
        'table': 'carrierworkhours',
        'primaryKey': 'dayOfWeek',

        'aliases': {
            'carrierID': 'id',
            'departmentCode': 'id',
            'contactNum': 'id',
            'dayOfWeek': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claaccountexpense': {
        'name': 'Claaccountexpense',
        'table': 'claaccountexpense',
        'primaryKey': 'claimLineAdjudicationID',

        'aliases': {
            'claimLineAdjudicationID': 'id',
            'deniedMRTotal': 'deniedMrTotal',
            'coveredMRTotal': 'coveredMrTotal',
            'postCoinsMR': 'postCoinsMr',
            'postPriorPymtMR': 'postPriorPymtMr',
            'postMaxReductMR': 'postMaxReductMr',
            'postAvailBalMR': 'postAvailBalMr',
            'postRecoupBalMR': 'postRecoupBalMr',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'postAccessPointMR': 'postAccessPointMr',
            'postPledgeMR': 'postPledgeMr'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claaccount': {
        'name': 'Claaccount',
        'table': 'claaccount',
        'primaryKey': 'claimLineAdjudicationID',

        'aliases': {
            'claimLineAdjudicationID': 'id',
            'claimID': 'claimId',
            'memberAccountID': 'memberAccountId',
            'msaID': 'msaId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Claaccounthealth': {
        'name': 'Claaccounthealth',
        'table': 'claaccounthealth',
        'primaryKey': 'claimLineAdjudicationID',

        'aliases': {
            'claimLineAdjudicationID': 'id',
            'deniedMRTotal': 'deniedMrTotal',
            'coveredMRDed': 'coveredMrDed',
            'coveredMRCopay': 'coveredMrCopay',
            'coveredMRCoins': 'coveredMrCoins',
            'coveredMROther': 'coveredMrOther',
            'coveredMRTotal': 'coveredMrTotal',
            'postCoinsMR': 'postCoinsMr',
            'postPriorPymtMR': 'postPriorPymtMr',
            'postMaxReductMR': 'postMaxReductMr',
            'postAvailBalMR': 'postAvailBalMr',
            'postRecoupBalMR': 'postRecoupBalMr',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'postAccessPointMR': 'postAccessPointMr',
            'postPledgeMR': 'postPledgeMr'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clabenefit': {
        'name': 'Clabenefit',
        'table': 'clabenefit',
        'primaryKey': 'claimLineAdjudicationID',

        'aliases': {
            'claimLineAdjudicationID': 'id',
            'claimID': 'claimId',
            'memberBenefitID': 'memberBenefitId',
            'benefitPlanVersionID': 'benefitPlanVersionId',
            'planID': 'planId',
            'noCOBInd': 'noCobInd',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claacctbaltimeline': {
        'name': 'Claacctbaltimeline',
        'table': 'claacctbaltimeline',
        'primaryKey': 'timelineSeqNum',

        'aliases': {
            'claimLineAdjudicationID': 'id',
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'timelineSeqNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claacctbaltimelinehx': {
        'name': 'Claacctbaltimelinehx',
        'table': 'claacctbaltimelinehx',
        'primaryKey': 'timelineSeqNum',

        'aliases': {
            'claimLineAdjudicationID': 'id',
            'hxSequenceNum': 'id',
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'timelineSeqNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clabenefitallowed': {
        'name': 'Clabenefitallowed',
        'table': 'clabenefitallowed',
        'primaryKey': 'claimLineAdjudicationID',

        'aliases': {
            'claimLineAdjudicationID': 'id',
            'allowBilledChargeEOCInd': 'allowBilledChargeEocInd',
            'pricingSetVersionID': 'pricingSetVersionId',
            'pricingSetID': 'pricingSetId',
            'claimPricingOutputHeaderID': 'claimPricingOutputHeaderId',
            'claimPricingOutputDetailID': 'claimPricingOutputDetailId',
            'stoplossBypassReachedThisCLAInd': 'stoplossBypassReachedThisClaInd',
            'stoplossSatisfiedThisCLAInd': 'stoplossSatisfiedThisClaInd',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'oonPricingSchedID': 'oonPricingSchedId',
            'oonPricingSchedVersionID': 'oonPricingSchedVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clabenefitauthreferral': {
        'name': 'Clabenefitauthreferral',
        'table': 'clabenefitauthreferral',
        'primaryKey': 'claimLineAdjudicationID',

        'aliases': {
            'claimLineAdjudicationID': 'id',
            'waiveAuthReqEOCInd': 'waiveAuthReqEocInd',
            'waiveReferralReqEOCInd': 'waiveReferralReqEocInd',
            'umReferralID': 'umReferralId',
            'umAuthID': 'umAuthId',
            'authMatchingSchedID': 'authMatchingSchedId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'planMedPolicySetID': 'planMedPolicySetId',
            'medPolicyRuleVersionID': 'medPolicyRuleVersionId',
            'medPolicyRuleTierID': 'medPolicyRuleTierId',
            'contractMedPolicySetID': 'contractMedPolicySetId',
            'networkMedPolicySetID': 'networkMedPolicySetId',
            'medPolicyRuleID': 'medPolicyRuleId',
            'umAuthServiceID': 'umAuthServiceId'
        },

        'referenceMap': {
            'medPolicyRule': 'medPolicyRuleId'
        },

        'listReferences': {}
    },

    'Clabenefitauthreferralmatch': {
        'name': 'Clabenefitauthreferralmatch',
        'table': 'clabenefitauthreferralmatch',
        'primaryKey': 'claBenefitAuthReferralMatchID',

        'aliases': {
            'claBenefitAuthReferralMatchID': 'id',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'umAuthID': 'umAuthId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clabenefitcob': {
        'name': 'Clabenefitcob',
        'table': 'clabenefitcob',
        'primaryKey': 'claimLineAdjudicationID',

        'aliases': {
            'claimLineAdjudicationID': 'id',
            'postedToCOBSavingsAmt': 'postedToCobSavingsAmt',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clabenefitcode': {
        'name': 'Clabenefitcode',
        'table': 'clabenefitcode',
        'primaryKey': 'claimLineAdjudicationID',

        'aliases': {
            'claimLineAdjudicationID': 'id',
            'userBCTLVOverrideInd': 'userBctlvOverrideInd',
            'servCompVersionID': 'servCompVersionId',
            'servCompID': 'servCompId',
            'servCompServID': 'servCompServId',
            'servCompServDetailID': 'servCompServDetailId',
            'procedureSetID': 'procedureSetId',
            'procedureSetCatID': 'procedureSetCatId',
            'placeOfServiceSetID': 'placeOfServiceSetId',
            'placeOfServiceSetCatID': 'placeOfServiceSetCatId',
            'diagnosisSetID': 'diagnosisSetId',
            'diagnosisSetCatID': 'diagnosisSetCatId',
            'revenueSetID': 'revenueSetId',
            'revenueSetCatID': 'revenueSetCatId',
            'provSpecialtySetID': 'provSpecialtySetId',
            'provSpecialtySetCatID': 'provSpecialtySetCatId',
            'billTypeSetID': 'billTypeSetId',
            'billTypeSetCatID': 'billTypeSetCatId',
            'regEntityID': 'regEntityId',
            'regEntityGuardrailID': 'regEntityGuardrailId',
            'eoiInvestigationID': 'eoiInvestigationId',
            'covConditionDiagnosisSetCatID': 'covConditionDiagnosisSetCatId',
            'covConditionProcedureSetCatID': 'covConditionProcedureSetCatId',
            'covConditionMemIndicatorID': 'covConditionMemIndicatorId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clabenefitcoinsurance': {
        'name': 'Clabenefitcoinsurance',
        'table': 'clabenefitcoinsurance',
        'primaryKey': 'claimLineAdjudicationID',

        'aliases': {
            'claimLineAdjudicationID': 'id',
            'alterCoinsTriggerEOCInd': 'alterCoinsTriggerEocInd',
            'waiveCoinsOOPAmt': 'waiveCoinsOopAmt',
            'waiveCoinsEOCAmt': 'waiveCoinsEocAmt',
            'coinsAppliedToOOPAmt': 'coinsAppliedToOopAmt',
            'oopBypassReachedThisCLAInd': 'oopBypassReachedThisClaInd',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clabenefitdeductible': {
        'name': 'Clabenefitdeductible',
        'table': 'clabenefitdeductible',
        'primaryKey': 'claimLineAdjudicationID',

        'aliases': {
            'claimLineAdjudicationID': 'id',
            'waiveDeductibleOOPAmt': 'waiveDeductibleOopAmt',
            'waiveDeductibleEOCAmt': 'waiveDeductibleEocAmt',
            'waiveDeductibleETBenefitAmt': 'waiveDeductibleEtBenefitAmt',
            'deductAppliedToOOPAmt': 'deductAppliedToOopAmt',
            'deductibleBypassReachedThisCLAInd': 'deductibleBypassReachedThisClaInd',
            'oopBypassReachedThisCLAInd': 'oopBypassReachedThisClaInd',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clabenefitcopayment': {
        'name': 'Clabenefitcopayment',
        'table': 'clabenefitcopayment',
        'primaryKey': 'claimLineAdjudicationID',

        'aliases': {
            'claimLineAdjudicationID': 'id',
            'waiveCopayEOCAmt': 'waiveCopayEocAmt',
            'waiveCopayETBenefitAmt': 'waiveCopayEtBenefitAmt',
            'waiveCopayOOPAmt': 'waiveCopayOopAmt',
            'copayAppliedToOOPAmt': 'copayAppliedToOopAmt',
            'oopBypassReachedThisCLAInd': 'oopBypassReachedThisClaInd',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clabenefitprovider': {
        'name': 'Clabenefitprovider',
        'table': 'clabenefitprovider',
        'primaryKey': 'claimLineAdjudicationID',

        'aliases': {
            'claimLineAdjudicationID': 'id',
            'networkID': 'networkId',
            'provContractVersionID': 'provContractVersionId',
            'provContractID': 'provContractId',
            'provContractHeaderID': 'provContractHeaderId',
            'netContractVersionID': 'netContractVersionId',
            'netContractID': 'netContractId',
            'netContractHeaderID': 'netContractHeaderId',
            'riskArrangeContractVersionID': 'riskArrangeContractVersionId',
            'riskArrangeContractID': 'riskArrangeContractId',
            'riskArrangeContractDetailID': 'riskArrangeContractDetailId',
            'provCertSetID': 'provCertSetId',
            'provCertSchedID': 'provCertSchedId',
            'servCompVersionID': 'servCompVersionId',
            'servCompID': 'servCompId',
            'servID': 'servId',
            'servCompServDetailID': 'servCompServDetailId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'network': 'networkId'
        },

        'listReferences': {}
    },

    'Clabenefitproviderflag': {
        'name': 'Clabenefitproviderflag',
        'table': 'clabenefitproviderflag',
        'primaryKey': 'claBenefitProviderFlagID',

        'aliases': {
            'claBenefitProviderFlagID': 'id',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'provExceptionFlagID': 'provExceptionFlagId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clabenefituseroverridewaivemax': {
        'name': 'Clabenefituseroverridewaivemax',
        'table': 'clabenefituseroverridewaivemax',
        'primaryKey': 'claBenefitUserOverrideWaiveMaxID',

        'aliases': {
            'claBenefitUserOverrideWaiveMaxID': 'id',
            'claBenefitUserOverrideID': 'claBenefitUserOverrideId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'beneMaxID': 'beneMaxId',
            'maximumID': 'maximumId',
            'waiveMaximumsORC': 'waiveMaximumsOrc',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clabenefitwithhold': {
        'name': 'Clabenefitwithhold',
        'table': 'clabenefitwithhold',
        'primaryKey': 'claBenefitWithholdID',

        'aliases': {
            'claBenefitWithholdID': 'id',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clabenefitfiling': {
        'name': 'Clabenefitfiling',
        'table': 'clabenefitfiling',
        'primaryKey': 'claimLineAdjudicationID',

        'aliases': {
            'claimLineAdjudicationID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Cladofr': {
        'name': 'Cladofr',
        'table': 'cladofr',
        'primaryKey': 'claDOFRID',

        'aliases': {
            'claDOFRID': 'id',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'responsibleEntityID': 'responsibleEntityId',
            'netContractHeaderID': 'netContractHeaderId',
            'netContractVersionID': 'netContractVersionId',
            'netContractID': 'netContractId',
            'networkID': 'networkId',
            'riskArrangeContractVersionID': 'riskArrangeContractVersionId',
            'riskArrangeContractDetailID': 'riskArrangeContractDetailId',
            'riskArrangeContractID': 'riskArrangeContractId',
            'dofrSchedVersionID': 'dofrSchedVersionId',
            'dofrSchedID': 'dofrSchedId',
            'servCompVersionID': 'servCompVersionId',
            'servCompID': 'servCompId',
            'servCompServID': 'servCompServId',
            'servCompServDetailID': 'servCompServDetailId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'network': 'networkId'
        },

        'listReferences': {}
    },

    'Clabenefiteocaction': {
        'name': 'Clabenefiteocaction',
        'table': 'clabenefiteocaction',
        'primaryKey': 'claBenefitEocActionID',

        'aliases': {
            'claBenefitEocActionID': 'id',
            'claEocRelatedLogID': 'claEocRelatedLogId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clabenefituseroverride': {
        'name': 'Clabenefituseroverride',
        'table': 'clabenefituseroverride',
        'primaryKey': 'claBenefitUserOverrideID',

        'aliases': {
            'claBenefitUserOverrideID': 'id',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'claimID': 'claimId',
            'benefitCodeORC': 'benefitCodeOrc',
            'tierNumberORC': 'tierNumberOrc',
            'providerDesignationORC': 'providerDesignationOrc',
            'delegationEntityIDOverride': 'delegationEntityIdOverride',
            'delegationORC': 'delegationOrc',
            'salesTaxDRC': 'salesTaxDrc',
            'salesTaxORC': 'salesTaxOrc',
            'pricedAmtDRC': 'pricedAmtDrc',
            'pricedAmtORC': 'pricedAmtOrc',
            'waiveFilingPenaltyAllowedDRC': 'waiveFilingPenaltyAllowedDrc',
            'waiveFilingPenaltyAllowedORC': 'waiveFilingPenaltyAllowedOrc',
            'waiveAuthPenaltyORC': 'waiveAuthPenaltyOrc',
            'authPenaltyAllowedDRC': 'authPenaltyAllowedDrc',
            'authPenaltyAllowedORC': 'authPenaltyAllowedOrc',
            'copaymentDRC': 'copaymentDrc',
            'copaymentORC': 'copaymentOrc',
            'deductibleDRC': 'deductibleDrc',
            'deductibleORC': 'deductibleOrc',
            'memCoinsuranceDRC': 'memCoinsuranceDrc',
            'memCoinsuranceORC': 'memCoinsuranceOrc',
            'carrierCoinsuranceDRC': 'carrierCoinsuranceDrc',
            'carrierCoinsuranceORC': 'carrierCoinsuranceOrc',
            'capitatedServiceDRC': 'capitatedServiceDrc',
            'capitatedServiceORC': 'capitatedServiceOrc',
            'noCOBInd': 'noCobInd',
            'cobAdjustmentDRC': 'cobAdjustmentDrc',
            'cobAdjustmentORC': 'cobAdjustmentOrc',
            'providerWithholdDRC': 'providerWithholdDrc',
            'providerWithholdORC': 'providerWithholdOrc',
            'umAuthIDOverride': 'umAuthIdOverride',
            'umAuthServiceIDORC': 'umAuthServiceIdorc',
            'umAuthServiceIDOverride': 'umAuthServiceIdOverride',
            'umAuthIDORC': 'umAuthIdorc',
            'umReferralIDOverride': 'umReferralIdOverride',
            'umReferralIDORC': 'umReferralIdorc',
            'dofrEntityIDOverride': 'dofrEntityIdOverride',
            'dofrORC': 'dofrOrc',
            'memberBenefitID': 'memberBenefitId',
            'fullClaDenyIndDRC': 'fullClaDenyIndDrc',
            'fullClaDenyIndORC': 'fullClaDenyIndOrc',
            'delegationDRC': 'delegationDrc',
            'userOverrideReferralReqORC': 'userOverrideReferralReqOrc',
            'userOverrideAuthReqORC': 'userOverrideAuthReqOrc',
            'splitContinuationCLAInd': 'splitContinuationClaInd',
            'userOverrideDisAuthFoundORC': 'userOverrideDisAuthFoundOrc',
            'userOverrideDisReferFoundORC': 'userOverrideDisReferFoundOrc',
            'waiveFilingPenaltyBilledDRC': 'waiveFilingPenaltyBilledDrc',
            'waiveFilingPenaltyBilledORC': 'waiveFilingPenaltyBilledOrc',
            'waiveFilingPenaltyPaidDRC': 'waiveFilingPenaltyPaidDrc',
            'waiveFilingPenaltyPaidORC': 'waiveFilingPenaltyPaidOrc',
            'disregardProvContractNetwrkAuthWaiverORC': 'disregardProvContractNetwrkAuthWaiverOrc',
            'postDedCopayReductAmtDRC': 'postDedCopayReductAmtDrc',
            'postDedCopayReductAmtORC': 'postDedCopayReductAmtOrc',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimaccident': {
        'name': 'Claimaccident',
        'table': 'claimaccident',
        'primaryKey': 'claimID',

        'aliases': {
            'claimID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clabenefituseroverridebcrr': {
        'name': 'Clabenefituseroverridebcrr',
        'table': 'clabenefituseroverridebcrr',
        'primaryKey': 'claBenefitUserOverrideBCRRID',

        'aliases': {
            'claBenefitUserOverrideBCRRID': 'id',
            'claBenefitUserOverrideID': 'claBenefitUserOverrideId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'bcrrORC': 'bcrrOrc',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claeocrelatedlog': {
        'name': 'Claeocrelatedlog',
        'table': 'claeocrelatedlog',
        'primaryKey': 'claEocRelatedLogID',

        'aliases': {
            'claEocRelatedLogID': 'id',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'claimID': 'claimId',
            'eocSchedRelatedEventID': 'eocSchedRelatedEventId',
            'eocSchedID': 'eocSchedId',
            'claEocTriggerLogID': 'claEocTriggerLogId',
            'eocSchedVersionID': 'eocSchedVersionId',
            'eocSetID': 'eocSetId',
            'eocSetVersionID': 'eocSetVersionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Cladeny': {
        'name': 'Cladeny',
        'table': 'cladeny',
        'primaryKey': 'claDenyID',

        'aliases': {
            'claDenyID': 'id',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claeocrelatedlogoverride': {
        'name': 'Claeocrelatedlogoverride',
        'table': 'claeocrelatedlogoverride',
        'primaryKey': 'claEocRelatedLogID',

        'aliases': {
            'claEocRelatedLogID': 'id',
            'denyServiceEOCInd': 'denyServiceEocInd',
            'elevateToHighestINNTierInd': 'elevateToHighestInnTierInd',
            'elevateToLowestINNTierInd': 'elevateToLowestInnTierInd',
            'highestINNTierWithAreaMatchInd': 'highestInnTierWithAreaMatchInd',
            'lowestINNTierWithAreaMatchInd': 'lowestInnTierWithAreaMatchInd',
            'waiveCopayEOCInd': 'waiveCopayEocInd',
            'alterCopayTriggerEOCInd': 'alterCopayTriggerEocInd',
            'alterCoinsTriggerEOCInd': 'alterCoinsTriggerEocInd',
            'ignoreOccurMaxEOCInd': 'ignoreOccurMaxEocInd',
            'ignoreDollarMaxEOCInd': 'ignoreDollarMaxEocInd',
            'waiveDeductibleEOCInd': 'waiveDeductibleEocInd',
            'waiveMemCoinsEOCInd': 'waiveMemCoinsEocInd',
            'waiveAuthReqEOCInd': 'waiveAuthReqEocInd',
            'waiveReferralReqEOCInd': 'waiveReferralReqEocInd',
            'waiveAllMemCostShareEOCInd': 'waiveAllMemCostShareEocInd',
            'allowBilledChargeEOCInd': 'allowBilledChargeEocInd',
            'benCodeOverrideEOCInd': 'benCodeOverrideEocInd',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimauditbenefit': {
        'name': 'Claimauditbenefit',
        'table': 'claimauditbenefit',
        'primaryKey': 'claimAuditSchedRuleID',

        'aliases': {
            'benefitCode': 'id',
            'claimAuditSchedRuleID': 'id',
            'claimAuditSchedVersionID': 'claimAuditSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimattachment': {
        'name': 'Claimattachment',
        'table': 'claimattachment',
        'primaryKey': 'claimAttachmentID',

        'aliases': {
            'claimAttachmentID': 'id',
            'claimID': 'claimId',
            'dcnID': 'dcnId',
            'subACN': 'subAcn',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claeoctriggerlog': {
        'name': 'Claeoctriggerlog',
        'table': 'claeoctriggerlog',
        'primaryKey': 'claEocTriggerLogID',

        'aliases': {
            'claEocTriggerLogID': 'id',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'claimID': 'claimId',
            'eocSchedTriggerEventID': 'eocSchedTriggerEventId',
            'eocSchedID': 'eocSchedId',
            'eocSchedVersionID': 'eocSchedVersionId',
            'eocSetID': 'eocSetId',
            'eocSetVersionID': 'eocSetVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimauditcovsequence': {
        'name': 'Claimauditcovsequence',
        'table': 'claimauditcovsequence',
        'primaryKey': 'claimAuditSchedRuleID',

        'aliases': {
            'coverageSeqCode': 'id',
            'claimAuditSchedRuleID': 'id',
            'claimAuditSchedVersionID': 'claimAuditSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimauditbilltype': {
        'name': 'Claimauditbilltype',
        'table': 'claimauditbilltype',
        'primaryKey': 'claimAuditSchedRuleID',

        'aliases': {
            'billTypeSetCatID': 'id',
            'claimAuditSchedRuleID': 'id',
            'claimAuditSchedVersionID': 'claimAuditSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimauditdiagnosis': {
        'name': 'Claimauditdiagnosis',
        'table': 'claimauditdiagnosis',
        'primaryKey': 'claimAuditSchedRuleID',

        'aliases': {
            'diagnosisSetCatID': 'id',
            'claimAuditSchedRuleID': 'id',
            'claimAuditSchedVersionID': 'claimAuditSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clabenefitoverpay': {
        'name': 'Clabenefitoverpay',
        'table': 'clabenefitoverpay',
        'primaryKey': 'claimLineAdjudicationID',

        'aliases': {
            'claimLineAdjudicationID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimauditexternalrequest': {
        'name': 'Claimauditexternalrequest',
        'table': 'claimauditexternalrequest',
        'primaryKey': 'claimAuditExternalRequestID',

        'aliases': {
            'claimAuditExternalRequestID': 'id',
            'claimAuditDispositionID': 'claimAuditDispositionId',
            'genQueueDetailID': 'genQueueDetailId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimauditmodifier': {
        'name': 'Claimauditmodifier',
        'table': 'claimauditmodifier',
        'primaryKey': 'claimAuditSchedRuleID',

        'aliases': {
            'modifierCode': 'id',
            'claimAuditSchedRuleID': 'id',
            'claimAuditSchedVersionID': 'claimAuditSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clabenefitdelegation': {
        'name': 'Clabenefitdelegation',
        'table': 'clabenefitdelegation',
        'primaryKey': 'claimLineAdjudicationID',

        'aliases': {
            'claimLineAdjudicationID': 'id',
            'generateMemberEOBInd': 'generateMemberEobInd',
            'generateProviderPRAInd': 'generateProviderPraInd',
            'delegationEntityID': 'delegationEntityId',
            'netContractVersionID': 'netContractVersionId',
            'netContractID': 'netContractId',
            'netContractHeaderID': 'netContractHeaderId',
            'networkID': 'networkId',
            'riskArrangeContractVersionID': 'riskArrangeContractVersionId',
            'riskArangeContractID': 'riskArangeContractId',
            'riskArrangeContractDetailID': 'riskArrangeContractDetailId',
            'delegSchedVersionID': 'delegSchedVersionId',
            'delegSchedID': 'delegSchedId',
            'servCompVersionID': 'servCompVersionId',
            'servCompID': 'servCompId',
            'servCompServID': 'servCompServId',
            'servCompServDetailID': 'servCompServDetailId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'network': 'networkId'
        },

        'listReferences': {}
    },

    'Clabenefitmaximum': {
        'name': 'Clabenefitmaximum',
        'table': 'clabenefitmaximum',
        'primaryKey': 'claimLineAdjudicationID',

        'aliases': {
            'claimLineAdjudicationID': 'id',
            'waiveDeniedOccurQtyEOC': 'waiveDeniedOccurQtyEoc',
            'waiveDeniedOccurQtyET': 'waiveDeniedOccurQtyEt',
            'waiveDeniedOccurMaxReductAmtEOC': 'waiveDeniedOccurMaxReductAmtEoc',
            'waiveDeniedOccurMaxReductAmtET': 'waiveDeniedOccurMaxReductAmtEt',
            'waiveDollarBasedMaxReductAmtEOC': 'waiveDollarBasedMaxReductAmtEoc',
            'waiveDollarBasedMaxReductAmtET': 'waiveDollarBasedMaxReductAmtEt',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimambulance': {
        'name': 'Claimambulance',
        'table': 'claimambulance',
        'primaryKey': 'claimAmbulanceID',

        'aliases': {
            'claimAmbulanceID': 'id',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimauditpo': {
        'name': 'Claimauditpo',
        'table': 'claimauditpos',
        'primaryKey': 'claimAuditSchedRuleID',

        'aliases': {
            'placeOfServiceSetCatID': 'id',
            'claimAuditSchedRuleID': 'id',
            'claimAuditSchedVersionID': 'claimAuditSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimauditnetwork': {
        'name': 'Claimauditnetwork',
        'table': 'claimauditnetwork',
        'primaryKey': 'claimAuditSchedRuleID',

        'aliases': {
            'networkID': 'id',
            'claimAuditSchedRuleID': 'id',
            'claimAuditSchedVersionID': 'claimAuditSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimauditpricingmethod': {
        'name': 'Claimauditpricingmethod',
        'table': 'claimauditpricingmethod',
        'primaryKey': 'claimAuditSchedRuleID',

        'aliases': {
            'pricingMethodType': 'id',
            'claimAuditSchedRuleID': 'id',
            'claimAuditSchedVersionID': 'claimAuditSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimauditprocedure': {
        'name': 'Claimauditprocedure',
        'table': 'claimauditprocedure',
        'primaryKey': 'claimAuditSchedRuleID',

        'aliases': {
            'procedureSetCatID': 'id',
            'claimAuditSchedRuleID': 'id',
            'claimAuditSchedVersionID': 'claimAuditSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimauditdeleg': {
        'name': 'Claimauditdeleg',
        'table': 'claimauditdeleg',
        'primaryKey': 'claimAuditDelegID',

        'aliases': {
            'claimAuditDelegID': 'id',
            'claimAuditSchedRuleID': 'claimAuditSchedRuleId',
            'claimAuditSchedVersionID': 'claimAuditSchedVersionId',
            'delegationEntityID': 'delegationEntityId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'claimAuditSchedRule': 'claimAuditSchedRuleId'
        },

        'listReferences': {}
    },

    'Claimauditprovider': {
        'name': 'Claimauditprovider',
        'table': 'claimauditprovider',
        'primaryKey': 'claimAuditSchedRuleID',

        'aliases': {
            'providerID': 'id',
            'claimAuditSchedRuleID': 'id',
            'claimAuditSchedVersionID': 'claimAuditSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimauditschedauditdetail': {
        'name': 'Claimauditschedauditdetail',
        'table': 'claimauditschedauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'claimAuditSchedVersionID': 'claimAuditSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimauditsched': {
        'name': 'Claimauditsched',
        'table': 'claimauditsched',
        'primaryKey': 'claimAuditSchedVersionID',

        'aliases': {
            'claimAuditSchedVersionID': 'id',
            'claimAuditSchedID': 'claimAuditSchedId',
            'placeOfServiceSetID': 'placeOfServiceSetId',
            'billTypeSetID': 'billTypeSetId',
            'procedureSetID': 'procedureSetId',
            'diagnosisSetID': 'diagnosisSetId',
            'provSpecialtySetID': 'provSpecialtySetId',
            'revenueSetID': 'revenueSetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimauditproviderspecialty': {
        'name': 'Claimauditproviderspecialty',
        'table': 'claimauditproviderspecialty',
        'primaryKey': 'claimAuditSchedRuleID',

        'aliases': {
            'provSpecialtySetCatID': 'id',
            'claimAuditSchedRuleID': 'id',
            'claimAuditSchedVersionID': 'claimAuditSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimauditrevenue': {
        'name': 'Claimauditrevenue',
        'table': 'claimauditrevenue',
        'primaryKey': 'claimAuditSchedRuleID',

        'aliases': {
            'revenueSetCatID': 'id',
            'claimAuditSchedRuleID': 'id',
            'claimAuditSchedVersionID': 'claimAuditSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimauditdisposition': {
        'name': 'Claimauditdisposition',
        'table': 'claimauditdisposition',
        'primaryKey': 'claimAuditDispositionID',

        'aliases': {
            'claimAuditDispositionID': 'id',
            'claimQualityAuditID': 'claimQualityAuditId',
            'auditorUserID': 'auditorUserId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimauditschedsetting': {
        'name': 'Claimauditschedsetting',
        'table': 'claimauditschedsettings',
        'primaryKey': 'claimAuditSchedSettingsID',

        'aliases': {
            'claimAuditSchedSettingsID': 'id',
            'claimAuditSchedVersionID': 'claimAuditSchedVersionId',
            'auditCOB': 'auditCob',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'postAPPct': 'postApPct',
            'postAPBilledThreshold': 'postApBilledThreshold',
            'postAPAllowedThreshold': 'postApAllowedThreshold',
            'postAPPayableThreshold': 'postApPayableThreshold'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimaudittype': {
        'name': 'Claimaudittype',
        'table': 'claimaudittype',
        'primaryKey': 'claimAuditSchedRuleID',

        'aliases': {
            'claimType': 'id',
            'claimAuditSchedRuleID': 'id',
            'claimAuditSchedVersionID': 'claimAuditSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimaudituser': {
        'name': 'Claimaudituser',
        'table': 'claimaudituser',
        'primaryKey': 'claimAuditUserID',

        'aliases': {
            'claimAuditUserID': 'id',
            'claimAuditDispositionID': 'claimAuditDispositionId',
            'userID': 'userId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimauditstate': {
        'name': 'Claimauditstate',
        'table': 'claimauditstate',
        'primaryKey': 'claimAuditSchedRuleID',

        'aliases': {
            'state': 'id',
            'claimAuditSchedRuleID': 'id',
            'claimAuditSchedVersionID': 'claimAuditSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimauditschedrule': {
        'name': 'Claimauditschedrule',
        'table': 'claimauditschedrule',
        'primaryKey': 'claimAuditSchedRuleID',

        'aliases': {
            'claimAuditSchedRuleID': 'id',
            'claimAuditSchedVersionID': 'claimAuditSchedVersionId',
            'dollarThresholdBAP': 'dollarThresholdBap',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimclinicedit': {
        'name': 'Claimclinicedit',
        'table': 'claimclinicedit',
        'primaryKey': 'claimClinicEditID',

        'aliases': {
            'claimClinicEditID': 'id',
            'claimClinicID': 'claimClinicId',
            'claimID': 'claimId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimcarrier': {
        'name': 'Claimcarrier',
        'table': 'claimcarrier',
        'primaryKey': 'carrierSeqID',

        'aliases': {
            'carrierSeqID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimclinic': {
        'name': 'Claimclinic',
        'table': 'claimclinic',
        'primaryKey': 'claimClinicID',

        'aliases': {
            'claimClinicID': 'id',
            'claimID': 'claimId',
            'claimEventID': 'claimEventId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'clinicalEditSchedDetailID': 'clinicalEditSchedDetailId',
            'mgAdjudScheduleID': 'mgAdjudScheduleId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimcliniceditflag': {
        'name': 'Claimcliniceditflag',
        'table': 'claimcliniceditflag',
        'primaryKey': 'claimClinicEditFlagID',

        'aliases': {
            'claimClinicEditFlagID': 'id',
            'claimClinicEditID': 'claimClinicEditId',
            'claimClinicID': 'claimClinicId',
            'claimID': 'claimId',
            'linkID': 'linkId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimcobadjudication': {
        'name': 'Claimcobadjudication',
        'table': 'claimcobadjudication',
        'primaryKey': 'claimCOBAdjudicationID',

        'aliases': {
            'claimCOBAdjudicationID': 'id',
            'claimID': 'claimId',
            'claimCOBPayerID': 'claimCobPayerId',
            'productServiceIDQual': 'productServiceIdQual',
            'productServiceID': 'productServiceId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimcliniceditdiagnosis': {
        'name': 'Claimcliniceditdiagnosis',
        'table': 'claimcliniceditdiagnosis',
        'primaryKey': 'claimClinicEditDiagnosisID',

        'aliases': {
            'claimClinicEditDiagnosisID': 'id',
            'claimClinicEditID': 'claimClinicEditId',
            'claimClinicID': 'claimClinicId',
            'claimID': 'claimId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimcobadjustment': {
        'name': 'Claimcobadjustment',
        'table': 'claimcobadjustment',
        'primaryKey': 'claimCOBAdjustmentID',

        'aliases': {
            'claimCOBAdjustmentID': 'id',
            'claimID': 'claimId',
            'claimCOBOtherSubscriberID': 'claimCobOtherSubscriberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimcobcontract': {
        'name': 'Claimcobcontract',
        'table': 'claimcobcontract',
        'primaryKey': 'claimContractID',

        'aliases': {
            'claimContractID': 'id',
            'claimID': 'claimId',
            'versionID': 'versionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimcobmedicare': {
        'name': 'Claimcobmedicare',
        'table': 'claimcobmedicare',
        'primaryKey': 'claimCOBMedicareID',

        'aliases': {
            'claimCOBMedicareID': 'id',
            'claimID': 'claimId',
            'claimCOBOtherSubscriberID': 'claimCobOtherSubscriberId',
            'ppsCapitalFSPDRGAmt': 'ppsCapitalFspdrgAmt',
            'ppsCapitalHSPDRGAmt': 'ppsCapitalHspdrgAmt',
            'ppsCapitalDSHDRGAmt': 'ppsCapitalDshdrgAmt',
            'ppsCapitalIMEAmt': 'ppsCapitalImeAmt',
            'ppsOperatingHospDRGAmt': 'ppsOperatingHospDrgAmt',
            'ppsOperatingFedDRGAmt': 'ppsOperatingFedDrgAmt',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimcobprovsecondaryid': {
        'name': 'Claimcobprovsecondaryid',
        'table': 'claimcobprovsecondaryid',
        'primaryKey': 'claimCOBProvSecondaryIDID',

        'aliases': {
            'claimCOBProvSecondaryIDID': 'id',
            'claimID': 'claimId',
            'claimCOBOtherSubscriberID': 'claimCobOtherSubscriberId',
            'entityIDCode': 'entityIdCode',
            'secondaryIDCodeQual': 'secondaryIdCodeQual',
            'secondaryIDCode': 'secondaryIdCode',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimcontact': {
        'name': 'Claimcontact',
        'table': 'claimcontact',
        'primaryKey': 'claimContactID',

        'aliases': {
            'claimContactID': 'id',
            'claimID': 'claimId',
            'nonUSPhoneInd': 'nonUsPhoneInd',
            'entityIDCode': 'entityIdCode',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimcobothersubscriber': {
        'name': 'Claimcobothersubscriber',
        'table': 'claimcobothersubscriber',
        'primaryKey': 'claimCOBOtherSubscriberID',

        'aliases': {
            'claimCOBOtherSubscriberID': 'id',
            'claimID': 'claimId',
            'secondaryIDCodeQual': 'secondaryIdCodeQual',
            'secondaryIDCode': 'secondaryIdCode',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'entityIDCode': 'entityIdCode',
            'memberCOBID': 'memberCobid'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimcobheader': {
        'name': 'Claimcobheader',
        'table': 'claimcobheader',
        'primaryKey': 'claimCOBHeaderID',

        'aliases': {
            'claimCOBHeaderID': 'id',
            'claimID': 'claimId',
            'claimCOBOtherSubscriberID': 'claimCobOtherSubscriberId',
            'predeterminationBenefitID': 'predeterminationBenefitId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimcobinfo': {
        'name': 'Claimcobinfo',
        'table': 'claimcobinfo',
        'primaryKey': 'claimID',

        'aliases': {
            'claimID': 'id',
            'cobMemberID': 'cobMemberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'cobMember': 'cobMemberId'
        },

        'listReferences': {}
    },

    'Claimcompositeblob': {
        'name': 'Claimcompositeblob',
        'table': 'claimcompositeblob',
        'primaryKey': 'claimID',

        'aliases': {
            'claimID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimcondition': {
        'name': 'Claimcondition',
        'table': 'claimcondition',
        'primaryKey': 'claimConditionID',

        'aliases': {
            'claimConditionID': 'id',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimcobpayer': {
        'name': 'Claimcobpayer',
        'table': 'claimcobpayer',
        'primaryKey': 'claimCOBPayerID',

        'aliases': {
            'claimCOBPayerID': 'id',
            'claimID': 'claimId',
            'claimCOBOtherSubscriberID': 'claimCobOtherSubscriberId',
            'otherPayerPrimaryIDQual': 'otherPayerPrimaryIdQual',
            'otherPayerPrimaryIDCode': 'otherPayerPrimaryIdCode',
            'secondaryID1CodeQual': 'secondaryId1CodeQual',
            'secondaryID1Code': 'secondaryId1Code',
            'secondaryID2CodeQual': 'secondaryId2CodeQual',
            'secondaryID2Code': 'secondaryId2Code',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimcobline': {
        'name': 'Claimcobline',
        'table': 'claimcobline',
        'primaryKey': 'claimCOBLineID',

        'aliases': {
            'claimCOBLineID': 'id',
            'claimID': 'claimId',
            'claimCOBOtherSubscriberID': 'claimCobOtherSubscriberId',
            'productServiceIDQual': 'productServiceIdQual',
            'productServiceID': 'productServiceId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimdentalortho': {
        'name': 'Claimdentalortho',
        'table': 'claimdentalortho',
        'primaryKey': 'claimID',

        'aliases': {
            'claimID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimevent': {
        'name': 'Claimevent',
        'table': 'claimevent',
        'primaryKey': 'claimEventID',

        'aliases': {
            'claimEventID': 'id',
            'claimID': 'claimId',
            'claimEnvelopeID': 'claimEnvelopeId',
            'splitFromClaimID': 'splitFromClaimId',
            'splitToClaimID': 'splitToClaimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimdentalprosth': {
        'name': 'Claimdentalprosth',
        'table': 'claimdentalprosth',
        'primaryKey': 'claimID',

        'aliases': {
            'claimID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimedit': {
        'name': 'Claimedit',
        'table': 'claimedit',
        'primaryKey': 'claimEditID',

        'aliases': {
            'claimEditID': 'id',
            'claimQualityAuditID': 'claimQualityAuditId',
            'queueID': 'queueId',
            'claimID': 'claimId',
            'fieldNameID': 'fieldNameId',
            'fromClaimEditID': 'fromClaimEditId',
            'planID': 'planId',
            'memberBenefitID': 'memberBenefitId',
            'memberAccountID': 'memberAccountId',
            'editMsaID': 'editMsaId',
            'editLockUserID': 'editLockUserId',
            'processUserID': 'processUserId',
            'adjudScheduleID': 'adjudScheduleId',
            'claimSubscriberID': 'claimSubscriberId',
            'memGroupID': 'memGroupId',
            'providerTIN': 'providerTin',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'fulfillTemplateID': 'fulfillTemplateId',
            'variableContentID': 'variableContentId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'umAuthID': 'umAuthId',
            'umAuthServiceID': 'umAuthServiceId'
        },

        'referenceMap': {
            'editMsa': 'editMsaId'
        },

        'listReferences': {}
    },

    'Claimdiagnosis': {
        'name': 'Claimdiagnosis',
        'table': 'claimdiagnosis',
        'primaryKey': 'diagSeqNum',

        'aliases': {
            'claimID': 'id',
            'diagSeqNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimedithx': {
        'name': 'Claimedithx',
        'table': 'claimedithx',
        'primaryKey': 'claimEditHxID',

        'aliases': {
            'claimEditHxID': 'id',
            'claimEditID': 'claimEditId',
            'claimID': 'claimId',
            'editLockUserID': 'editLockUserId',
            'processUserID': 'processUserId',
            'fromClaimEditID': 'fromClaimEditId',
            'adjudScheduleID': 'adjudScheduleId',
            'fulfillTemplateID': 'fulfillTemplateId',
            'variableContentID': 'variableContentId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimeditintermediate': {
        'name': 'Claimeditintermediate',
        'table': 'claimeditintermediate',
        'primaryKey': 'queueID',

        'aliases': {
            'sequenceNum': 'id',
            'queueID': 'id',
            'memGroupID': 'memGroupId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimfileinfo': {
        'name': 'Claimfileinfo',
        'table': 'claimfileinfo',
        'primaryKey': 'claimFileInfoID',

        'aliases': {
            'claimFileInfoID': 'id',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimenvmatchedclaim': {
        'name': 'Claimenvmatchedclaim',
        'table': 'claimenvmatchedclaims',
        'primaryKey': 'claimEnvMatchedClaimsID',

        'aliases': {
            'claimEnvMatchedClaimsID': 'id',
            'claimEnvelopeID': 'claimEnvelopeId',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimeditsummary': {
        'name': 'Claimeditsummary',
        'table': 'claimeditsummary',
        'primaryKey': 'queueID',

        'aliases': {
            'sequenceNum': 'id',
            'queueID': 'id',
            'memGroupID': 'memGroupId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimheader': {
        'name': 'Claimheader',
        'table': 'claimheader',
        'primaryKey': 'claimID',

        'aliases': {
            'claimID': 'id',
            'dcnID': 'dcnId',
            'memberID': 'memberId',
            'tplInvestigationID': 'tplInvestigationId',
            'eoiInvestigationID': 'eoiInvestigationId',
            'preExInvestigationID': 'preExInvestigationId',
            'totalNonrecoupMRAmt': 'totalNonrecoupMrAmt',
            'extBatchID': 'extBatchId',
            'dupCACClaimID': 'dupCacClaimId',
            'ediTokenID': 'ediTokenId',
            'claimXrefID': 'claimXrefId',
            'carrierSeqID': 'carrierSeqId',
            'imageID': 'imageId',
            'providerOrgID': 'providerOrgId',
            'demonstrationProjectID': 'demonstrationProjectId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'payeeLocID': 'payeeLocId',
            'payeeID': 'payeeId',
            'planID': 'planId',
            'paymentClaimProviderAddressID': 'paymentClaimProviderAddressId',
            'renderingClaimProviderID': 'renderingClaimProviderId',
            'renderingClaimProviderAddressID': 'renderingClaimProviderAddressId'
        },

        'referenceMap': {
            'member': 'memberId',
            'renderingClaimProvider': 'renderingClaimProviderId'
        },

        'listReferences': {}
    },

    'Claimheadercob': {
        'name': 'Claimheadercob',
        'table': 'claimheadercob',
        'primaryKey': 'claimID',

        'aliases': {
            'claimID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimenvelope': {
        'name': 'Claimenvelope',
        'table': 'claimenvelope',
        'primaryKey': 'claimEnvelopeID',

        'aliases': {
            'claimEnvelopeID': 'id',
            'claimID': 'claimId',
            'clearinghouseClaimID': 'clearinghouseClaimId',
            'providerTIN': 'providerTin',
            'externalClaimID': 'externalClaimId',
            'inboundTransID': 'inboundTransId',
            'outboundTransID': 'outboundTransId',
            'originatorAppTransID': 'originatorAppTransId',
            'dcnID': 'dcnId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimheaderdental': {
        'name': 'Claimheaderdental',
        'table': 'claimheaderdental',
        'primaryKey': 'claimID',

        'aliases': {
            'claimID': 'id',
            'predeterminationBenefitID': 'predeterminationBenefitId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimefstx': {
        'name': 'Claimefstx',
        'table': 'claimefstx',
        'primaryKey': 'efsTransactionID',

        'aliases': {
            'claimID': 'id',
            'efsTransactionID': 'id',
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Claimheadericpdeny': {
        'name': 'Claimheadericpdeny',
        'table': 'claimheadericpdeny',
        'primaryKey': 'claimHeaderICPDenyID',

        'aliases': {
            'claimHeaderICPDenyID': 'id',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimeventpromptpay': {
        'name': 'Claimeventpromptpay',
        'table': 'claimeventpromptpay',
        'primaryKey': 'claimEventPromptPayID',

        'aliases': {
            'claimEventPromptPayID': 'id',
            'claimEventID': 'claimEventId',
            'interestScheduleID': 'interestScheduleId',
            'promptPaySchedID': 'promptPaySchedId',
            'promptPaySchedDetailID': 'promptPaySchedDetailId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'claimID': 'claimId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimheadericp': {
        'name': 'Claimheadericp',
        'table': 'claimheadericp',
        'primaryKey': 'claimID',

        'aliases': {
            'claimID': 'id',
            'icpCOBPaidAmt': 'icpCobPaidAmt',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimeventuncleantime': {
        'name': 'Claimeventuncleantime',
        'table': 'claimeventuncleantime',
        'primaryKey': 'claimEventUncleanTimeID',

        'aliases': {
            'claimEventUncleanTimeID': 'id',
            'claimEventID': 'claimEventId',
            'claimEditID': 'claimEditId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'claimID': 'claimId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimheaderauditdetail': {
        'name': 'Claimheaderauditdetail',
        'table': 'claimheaderauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'claimID': 'claimId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimheadernote': {
        'name': 'Claimheadernote',
        'table': 'claimheadernote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimheaderinst': {
        'name': 'Claimheaderinst',
        'table': 'claimheaderinst',
        'primaryKey': 'claimID',

        'aliases': {
            'claimID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimheaderrx': {
        'name': 'Claimheaderrx',
        'table': 'claimheaderrx',
        'primaryKey': 'claimID',

        'aliases': {
            'claimID': 'id',
            'referringProvID': 'referringProvId',
            'referralID': 'referralId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claiminstpayer': {
        'name': 'Claiminstpayer',
        'table': 'claiminstpayer',
        'primaryKey': 'claimInstPayerID',

        'aliases': {
            'claimInstPayerID': 'id',
            'claimID': 'claimId',
            'instClaimICN': 'instClaimIcn',
            'carrierID': 'carrierId',
            'externalProviderID': 'externalProviderId',
            'subsGroupID': 'subsGroupId',
            'otherProviderID': 'otherProviderId',
            'subsUniqueID': 'subsUniqueId',
            'extHealthPlanID': 'extHealthPlanId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'externalSubID': 'externalSubId'
        },

        'referenceMap': {
            'carrier': 'carrierId',
            'externalProvider': 'externalProviderId',
            'otherProvider': 'otherProviderId'
        },

        'listReferences': {}
    },

    'Claiminst81Cc': {
        'name': 'Claiminst81Cc',
        'table': 'claiminst81cc',
        'primaryKey': 'claimID',

        'aliases': {
            'claimID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimheaderprof': {
        'name': 'Claimheaderprof',
        'table': 'claimheaderprof',
        'primaryKey': 'claimID',

        'aliases': {
            'claimID': 'id',
            'referringProvID': 'referringProvId',
            'claimTaxIDType': 'claimTaxIdType',
            'billingProvID': 'billingProvId',
            'addtlBillingProvID': 'addtlBillingProvId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claiminstproc': {
        'name': 'Claiminstproc',
        'table': 'claiminstproc',
        'primaryKey': 'instProcSeqNum',

        'aliases': {
            'claimID': 'id',
            'instProcSeqNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimheadersuperbill': {
        'name': 'Claimheadersuperbill',
        'table': 'claimheadersuperbill',
        'primaryKey': 'claimID',

        'aliases': {
            'claimID': 'id',
            'referralID': 'referralId',
            'referringProvID': 'referringProvId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimlinedental': {
        'name': 'Claimlinedental',
        'table': 'claimlinedental',
        'primaryKey': 'claimLineNum',

        'aliases': {
            'claimID': 'id',
            'claimLineNum': 'id',
            'totalNonrecoupMRAmt': 'totalNonrecoupMrAmt',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'lineItemControlID': 'lineItemControlId',
            'claimXrefID': 'claimXrefId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claiminstcond': {
        'name': 'Claiminstcond',
        'table': 'claiminstcond',
        'primaryKey': 'instCondSeqNum',

        'aliases': {
            'claimID': 'id',
            'instCondSeqNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimlineadjudication': {
        'name': 'Claimlineadjudication',
        'table': 'claimlineadjudication',
        'primaryKey': 'claimLineAdjudicationID',

        'aliases': {
            'claimLineAdjudicationID': 'id',
            'claimID': 'claimId',
            'benefitCLAInd': 'benefitClaInd',
            'recoupOPInd': 'recoupOpInd',
            'claimSubscriberID': 'claimSubscriberId',
            'mgAdjudScheduleID': 'mgAdjudScheduleId',
            'productAdjudScheduleID': 'productAdjudScheduleId',
            'subsAffiliationID': 'subsAffiliationId',
            'generateProviderPRAInd': 'generateProviderPraInd',
            'generateMemberEOBInd': 'generateMemberEobInd',
            'claimEventID': 'claimEventId',
            'splitContinuationCLAInd': 'splitContinuationClaInd',
            'lineOfBusinessID': 'lineOfBusinessId',
            'productVersionID': 'productVersionId',
            'carrierID': 'carrierId',
            'memberCOBID': 'memberCobid',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'carrier': 'carrierId'
        },

        'listReferences': {}
    },

    'Claiminstoccur': {
        'name': 'Claiminstoccur',
        'table': 'claiminstoccur',
        'primaryKey': 'occurSeqNum',

        'aliases': {
            'claimID': 'id',
            'occurSeqNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimhealthinformation': {
        'name': 'Claimhealthinformation',
        'table': 'claimhealthinformation',
        'primaryKey': 'claimHealthInformationID',

        'aliases': {
            'claimHealthInformationID': 'id',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimlineicp': {
        'name': 'Claimlineicp',
        'table': 'claimlineicp',
        'primaryKey': 'claimLineNum',

        'aliases': {
            'claimID': 'id',
            'claimLineNum': 'id',
            'icpCOBPaidAmt': 'icpCobPaidAmt',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimlinecob': {
        'name': 'Claimlinecob',
        'table': 'claimlinecob',
        'primaryKey': 'claimLineNum',

        'aliases': {
            'claimID': 'id',
            'claimLineNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claiminstvalue': {
        'name': 'Claiminstvalue',
        'table': 'claiminstvalue',
        'primaryKey': 'valueSeqNum',

        'aliases': {
            'claimID': 'id',
            'valueSeqNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimlineexpense': {
        'name': 'Claimlineexpense',
        'table': 'claimlineexpense',
        'primaryKey': 'claimLineNum',

        'aliases': {
            'claimID': 'id',
            'claimLineNum': 'id',
            'totalNonrecoupMRAmt': 'totalNonrecoupMrAmt',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'foreignRXInd': 'foreignRxInd',
            'outdatedLMNInd': 'outdatedLmnInd'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claiminstoccurspan': {
        'name': 'Claiminstoccurspan',
        'table': 'claiminstoccurspan',
        'primaryKey': 'occurSpanSeqNum',

        'aliases': {
            'claimID': 'id',
            'occurSpanSeqNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimlineicpdeny': {
        'name': 'Claimlineicpdeny',
        'table': 'claimlineicpdeny',
        'primaryKey': 'claimLineICPDenyID',

        'aliases': {
            'claimLineICPDenyID': 'id',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimlineinst': {
        'name': 'Claimlineinst',
        'table': 'claimlineinst',
        'primaryKey': 'claimLineNum',

        'aliases': {
            'claimID': 'id',
            'claimLineNum': 'id',
            'totalNonrecoupMRAmt': 'totalNonrecoupMrAmt',
            'delegatedMemberBenefitID': 'delegatedMemberBenefitId',
            'lineItemControlID': 'lineItemControlId',
            'renderingClaimProviderID': 'renderingClaimProviderId',
            'renderingClaimProviderAddressID': 'renderingClaimProviderAddressId',
            'providerLocationAffiliationID': 'providerLocationAffiliationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'renderingClaimProvider': 'renderingClaimProviderId'
        },

        'listReferences': {}
    },

    'Claimlinepriorauth': {
        'name': 'Claimlinepriorauth',
        'table': 'claimlinepriorauth',
        'primaryKey': 'claimLinePriorAuthID',

        'aliases': {
            'claimLinePriorAuthID': 'id',
            'claimID': 'claimId',
            'otherPayerPrimaryID': 'otherPayerPrimaryId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimlineprofanesthesia': {
        'name': 'Claimlineprofanesthesia',
        'table': 'claimlineprofanesthesia',
        'primaryKey': 'claimLineNum',

        'aliases': {
            'claimID': 'id',
            'claimLineNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimlineprof': {
        'name': 'Claimlineprof',
        'table': 'claimlineprof',
        'primaryKey': 'claimLineNum',

        'aliases': {
            'claimID': 'id',
            'claimLineNum': 'id',
            'localUse24k': 'localUse24K',
            'totalNonrecoupMRAmt': 'totalNonrecoupMrAmt',
            'referringCLIANum': 'referringCliaNum',
            'purchaseServiceProviderID': 'purchaseServiceProviderId',
            'delegatedMemberBenefitID': 'delegatedMemberBenefitId',
            'suppl24AG': 'suppl24Ag',
            'lineItemControlID': 'lineItemControlId',
            'claimXrefID': 'claimXrefId',
            'renderingClaimProviderID': 'renderingClaimProviderId',
            'renderingClaimProviderAddressID': 'renderingClaimProviderAddressId',
            'providerLocationAffiliationID': 'providerLocationAffiliationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'purchaseServiceProvider': 'purchaseServiceProviderId',
            'renderingClaimProvider': 'renderingClaimProviderId'
        },

        'listReferences': {}
    },

    'Claimlineprofmeasure': {
        'name': 'Claimlineprofmeasure',
        'table': 'claimlineprofmeasure',
        'primaryKey': 'claimLineProfMeasureID',

        'aliases': {
            'claimLineProfMeasureID': 'id',
            'claimID': 'claimId',
            'measurementIDQual': 'measurementIdQual',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimlinemap': {
        'name': 'Claimlinemap',
        'table': 'claimlinemap',
        'primaryKey': 'claimLineMapID',

        'aliases': {
            'claimLineMapID': 'id',
            'alphaParentClaimID': 'alphaParentClaimId',
            'parentClaimID': 'parentClaimId',
            'childClaimID': 'childClaimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimlinepredetermination': {
        'name': 'Claimlinepredetermination',
        'table': 'claimlinepredetermination',
        'primaryKey': 'claimLinePredeterminationID',

        'aliases': {
            'claimLinePredeterminationID': 'id',
            'claimID': 'claimId',
            'predeterminationBenefitID': 'predeterminationBenefitId',
            'otherPayerPrimaryID': 'otherPayerPrimaryId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimlinesupportingdoc': {
        'name': 'Claimlinesupportingdoc',
        'table': 'claimlinesupportingdoc',
        'primaryKey': 'claimLineSupportingDocID',

        'aliases': {
            'claimLineSupportingDocID': 'id',
            'claimID': 'claimId',
            'formID': 'formId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimlinesuperbill': {
        'name': 'Claimlinesuperbill',
        'table': 'claimlinesuperbill',
        'primaryKey': 'claimLineNum',

        'aliases': {
            'claimID': 'id',
            'claimLineNum': 'id',
            'totalNonrecoupMRAmt': 'totalNonrecoupMrAmt',
            'claimXrefID': 'claimXrefId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimlineevent': {
        'name': 'Claimlineevent',
        'table': 'claimlineevent',
        'primaryKey': 'claimLineEventID',

        'aliases': {
            'claimLineEventID': 'id',
            'claimEventID': 'claimEventId',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimlineprofdme': {
        'name': 'Claimlineprofdme',
        'table': 'claimlineprofdme',
        'primaryKey': 'claimLineNum',

        'aliases': {
            'claimID': 'id',
            'claimLineNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimmedpolicyengineinputline': {
        'name': 'Claimmedpolicyengineinputline',
        'table': 'claimmedpolicyengineinputline',
        'primaryKey': 'claimMedPolicyEngineInputLineID',

        'aliases': {
            'claimMedPolicyEngineInputLineID': 'id',
            'claimMedPolEngineInputHeaderID': 'claimMedPolEngineInputHeaderId',
            'claimID': 'claimId',
            'contractMedPolicySchedID': 'contractMedPolicySchedId',
            'planMedPolicySchedID': 'planMedPolicySchedId',
            'umAuthID': 'umAuthId',
            'waiveAuthReqEOCInd': 'waiveAuthReqEocInd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimlinerxcompound': {
        'name': 'Claimlinerxcompound',
        'table': 'claimlinerxcompound',
        'primaryKey': 'claimLineRxCompoundID',

        'aliases': {
            'claimLineRxCompoundID': 'id',
            'claimID': 'claimId',
            'rxCompProdID': 'rxCompProdId',
            'rxCompProdIDQual': 'rxCompProdIdQual',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimmember': {
        'name': 'Claimmember',
        'table': 'claimmember',
        'primaryKey': 'claimID',

        'aliases': {
            'claimID': 'id',
            'memberExternalID': 'memberExternalId',
            'externalIDType': 'externalIdType',
            'memberAddressID': 'memberAddressId',
            'nonUSPhoneInd': 'nonUsPhoneInd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimlineprofrx': {
        'name': 'Claimlineprofrx',
        'table': 'claimlineprofrx',
        'primaryKey': 'claimLineNum',

        'aliases': {
            'claimID': 'id',
            'claimLineNum': 'id',
            'rxProviderID': 'rxProviderId',
            'rxProviderIDQual': 'rxProviderIdQual',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'rxProvider': 'rxProviderId'
        },

        'listReferences': {}
    },

    'Claimpricingdetailmodifier': {
        'name': 'Claimpricingdetailmodifier',
        'table': 'claimpricingdetailmodifier',
        'primaryKey': 'claimPricingDetailModifierID',

        'aliases': {
            'claimPricingDetailModifierID': 'id',
            'claimPricingOutputDetailID': 'claimPricingOutputDetailId',
            'exceptionModifierCompID': 'exceptionModifierCompId',
            'exceptionModCompVersionID': 'exceptionModCompVersionId',
            'globalModifierCompID': 'globalModifierCompId',
            'globalModCompVersionID': 'globalModCompVersionId',
            'proTechSplitCompDetailID': 'proTechSplitCompDetailId',
            'proTechSplitCompVersionID': 'proTechSplitCompVersionId',
            'defaultModifierCompID': 'defaultModifierCompId',
            'defaultModifierCompVersionID': 'defaultModifierCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'claimPricingOutputHeaderID': 'claimPricingOutputHeaderId',
            'claimPricingInputHeaderID': 'claimPricingInputHeaderId',
            'claimID': 'claimId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimnote': {
        'name': 'Claimnote',
        'table': 'claimnote',
        'primaryKey': 'claimNoteID',

        'aliases': {
            'claimNoteID': 'id',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimpayer': {
        'name': 'Claimpayer',
        'table': 'claimpayer',
        'primaryKey': 'claimPayerID',

        'aliases': {
            'claimPayerID': 'id',
            'claimID': 'claimId',
            'groupIDQual': 'groupIdQual',
            'groupID': 'groupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimmembergroupinfo': {
        'name': 'Claimmembergroupinfo',
        'table': 'claimmembergroupinfo',
        'primaryKey': 'claimID',

        'aliases': {
            'claimID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'memGroupExtID': 'memGroupExtId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimpricingdetailreapportion': {
        'name': 'Claimpricingdetailreapportion',
        'table': 'claimpricingdetailreapportion',
        'primaryKey': 'claimPricingDetailReapportionID',

        'aliases': {
            'claimPricingDetailReapportionID': 'id',
            'claimID': 'claimId',
            'claimPricingInputHeaderID': 'claimPricingInputHeaderId',
            'claimPricingOutputHeaderID': 'claimPricingOutputHeaderId',
            'claimPricingOutputDetailID': 'claimPricingOutputDetailId',
            'memberBenefitID': 'memberBenefitId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimmedpolengineinputheader': {
        'name': 'Claimmedpolengineinputheader',
        'table': 'claimmedpolengineinputheader',
        'primaryKey': 'claimMedPolEngineInputHeaderID',

        'aliases': {
            'claimMedPolEngineInputHeaderID': 'id',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimlinerx': {
        'name': 'Claimlinerx',
        'table': 'claimlinerx',
        'primaryKey': 'claimLineNum',

        'aliases': {
            'claimID': 'id',
            'claimLineNum': 'id',
            'rxDAWCode': 'rxDawCode',
            'rxPrescriberID': 'rxPrescriberId',
            'rxPrescriberIDQual': 'rxPrescriberIdQual',
            'totalNonrecoupMRAmt': 'totalNonrecoupMrAmt',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'claimXrefID': 'claimXrefId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimpricingexternalrequest': {
        'name': 'Claimpricingexternalrequest',
        'table': 'claimpricingexternalrequest',
        'primaryKey': 'claimPricingExternalRequestID',

        'aliases': {
            'claimPricingExternalRequestID': 'id',
            'claimPricingOutputHeaderID': 'claimPricingOutputHeaderId',
            'claimPricingInputHeaderID': 'claimPricingInputHeaderId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'claimID': 'claimId',
            'apcPayerID': 'apcPayerId',
            'externalVendorID': 'externalVendorId',
            'tradingPartnerConfigID': 'tradingPartnerConfigId'
        },

        'referenceMap': {
            'externalVendor': 'externalVendorId'
        },

        'listReferences': {}
    },

    'Claimpayersecondaryid': {
        'name': 'Claimpayersecondaryid',
        'table': 'claimpayersecondaryid',
        'primaryKey': 'claimPayerSecondaryIDID',

        'aliases': {
            'claimPayerSecondaryIDID': 'id',
            'claimID': 'claimId',
            'claimPayerID': 'claimPayerId',
            'secondaryIDCodeQual': 'secondaryIdCodeQual',
            'secondaryIDCode': 'secondaryIdCode',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimpricingdetailtier': {
        'name': 'Claimpricingdetailtier',
        'table': 'claimpricingdetailtier',
        'primaryKey': 'claimPricingDetailTierID',

        'aliases': {
            'claimPricingDetailTierID': 'id',
            'claimPricingOutputDetailID': 'claimPricingOutputDetailId',
            'claimPricingOutputHeaderID': 'claimPricingOutputHeaderId',
            'claimPricingInputHeaderID': 'claimPricingInputHeaderId',
            'pricingCompDetailID': 'pricingCompDetailId',
            'pricingCompDetailPricingID': 'pricingCompDetailPricingId',
            'ipServiceCompDrgID': 'ipServiceCompDrgId',
            'ipServiceCompDrgCustomID': 'ipServiceCompDrgCustomId',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'ipServiceCompDrg': 'ipServiceCompDrgId'
        },

        'listReferences': {}
    },

    'Claimpayee': {
        'name': 'Claimpayee',
        'table': 'claimpayee',
        'primaryKey': 'claimPayeeID',

        'aliases': {
            'claimPayeeID': 'id',
            'claimID': 'claimId',
            'payeeID': 'payeeId',
            'federalTaxID': 'federalTaxId',
            'nonUSPhoneInd': 'nonUsPhoneInd',
            'secondaryIDCodeQual': 'secondaryIdCodeQual',
            'secondaryIDCode': 'secondaryIdCode',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimpricinginputdetail': {
        'name': 'Claimpricinginputdetail',
        'table': 'claimpricinginputdetail',
        'primaryKey': 'claimPricingInputDetailID',

        'aliases': {
            'claimPricingInputDetailID': 'id',
            'claimPricingInputHeaderID': 'claimPricingInputHeaderId',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimnotification': {
        'name': 'Claimnotification',
        'table': 'claimnotification',
        'primaryKey': 'sourceFileType',

        'aliases': {
            'commonClaimID': 'id',
            'claimSource': 'id',
            'sourceFileType': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimpricingoutputdetail': {
        'name': 'Claimpricingoutputdetail',
        'table': 'claimpricingoutputdetail',
        'primaryKey': 'claimPricingOutputDetailID',

        'aliases': {
            'claimPricingOutputDetailID': 'id',
            'claimPricingOutputHeaderID': 'claimPricingOutputHeaderId',
            'claimPricingInputHeaderID': 'claimPricingInputHeaderId',
            'claimID': 'claimId',
            'pricingSchedOrderDetailID': 'pricingSchedOrderDetailId',
            'oonPricingSchedOrderDetailID': 'oonPricingSchedOrderDetailId',
            'vendorID': 'vendorId',
            'pricingComponentVersionID': 'pricingComponentVersionId',
            'outlierCompVersionID': 'outlierCompVersionId',
            'memberAgeAtDosFromLCD': 'memberAgeAtDosFromLcd',
            'pricingSchedOrderID': 'pricingSchedOrderId',
            'procedureSetCatID': 'procedureSetCatId',
            'mprCompVersionID': 'mprCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'externalVendorID': 'externalVendorId'
        },

        'referenceMap': {
            'vendor': 'vendorId',
            'externalVendor': 'externalVendorId'
        },

        'listReferences': {}
    },

    'Claimpricinginputheader': {
        'name': 'Claimpricinginputheader',
        'table': 'claimpricinginputheader',
        'primaryKey': 'claimPricingInputHeaderID',

        'aliases': {
            'claimPricingInputHeaderID': 'id',
            'claimID': 'claimId',
            'lineOfBusinessID': 'lineOfBusinessId',
            'pricingSetID': 'pricingSetId',
            'pricingSetVersionID': 'pricingSetVersionId',
            'oonPricingSchedID': 'oonPricingSchedId',
            'oonPricingSchedVersionID': 'oonPricingSchedVersionId',
            'primaryProviderID': 'primaryProviderId',
            'claimEventID': 'claimEventId',
            'provContractID': 'provContractId',
            'netContractID': 'netContractId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'provContractVersionID': 'provContractVersionId',
            'netContractVersionID': 'netContractVersionId'
        },

        'referenceMap': {
            'primaryProvider': 'primaryProviderId'
        },

        'listReferences': {}
    },

    'Claimpricingexternalresphdr': {
        'name': 'Claimpricingexternalresphdr',
        'table': 'claimpricingexternalresphdr',
        'primaryKey': 'claimPricingExternalRespHdrID',

        'aliases': {
            'claimPricingExternalRespHdrID': 'id',
            'claimPricingExternalRequestID': 'claimPricingExternalRequestId',
            'pricingSystemID': 'pricingSystemId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'claimID': 'claimId',
            'claimPricingInputHeaderID': 'claimPricingInputHeaderId',
            'claimPricingOutputHeaderID': 'claimPricingOutputHeaderId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimpricingexternalrespdtledt': {
        'name': 'Claimpricingexternalrespdtledt',
        'table': 'claimpricingexternalrespdtledt',
        'primaryKey': 'claimPricingExternalRespDtlEdtID',

        'aliases': {
            'claimPricingExternalRespDtlEdtID': 'id',
            'claimPricingExternalRespDtlID': 'claimPricingExternalRespDtlId',
            'claimPricingExternalRespHdrID': 'claimPricingExternalRespHdrId',
            'claimPricingInputHeaderID': 'claimPricingInputHeaderId',
            'claimPricingOutputHeaderID': 'claimPricingOutputHeaderId',
            'claimID': 'claimId',
            'editID': 'editId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimpricingexternalresphdredt': {
        'name': 'Claimpricingexternalresphdredt',
        'table': 'claimpricingexternalresphdredt',
        'primaryKey': 'claimPricingExternalRespHdrEdtID',

        'aliases': {
            'claimPricingExternalRespHdrEdtID': 'id',
            'claimPricingExternalRespHdrID': 'claimPricingExternalRespHdrId',
            'claimPricingInputHeaderID': 'claimPricingInputHeaderId',
            'claimPricingOutputHeaderID': 'claimPricingOutputHeaderId',
            'claimID': 'claimId',
            'editSystemID': 'editSystemId',
            'editID': 'editId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimpricingdetailspi': {
        'name': 'Claimpricingdetailspi',
        'table': 'claimpricingdetailspi',
        'primaryKey': 'claimPricingDetailSpiID',

        'aliases': {
            'claimPricingDetailSpiID': 'id',
            'claimPricingOutputDetailID': 'claimPricingOutputDetailId',
            'claimPricingOutputHeaderID': 'claimPricingOutputHeaderId',
            'claimPricingInputHeaderID': 'claimPricingInputHeaderId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'claimID': 'claimId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimpricingedi': {
        'name': 'Claimpricingedi',
        'table': 'claimpricingedi',
        'primaryKey': 'claimPricingID',

        'aliases': {
            'claimPricingID': 'id',
            'claimID': 'claimId',
            'organizationID': 'organizationId',
            'approvedDRGCode': 'approvedDrgCode',
            'approvedDRGAmt': 'approvedDrgAmt',
            'productServiceIDQual': 'productServiceIdQual',
            'productServiceID': 'productServiceId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimpricingexternalrespdtl': {
        'name': 'Claimpricingexternalrespdtl',
        'table': 'claimpricingexternalrespdtl',
        'primaryKey': 'claimPricingExternalRespDtlID',

        'aliases': {
            'claimPricingExternalRespDtlID': 'id',
            'claimPricingExternalRespHdrID': 'claimPricingExternalRespHdrId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'claimID': 'claimId',
            'claimPricingInputHeaderID': 'claimPricingInputHeaderId',
            'claimPricingOutputHeaderID': 'claimPricingOutputHeaderId',
            'claimPricingExternalRequestID': 'claimPricingExternalRequestId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimpricinguseroverridedetail': {
        'name': 'Claimpricinguseroverridedetail',
        'table': 'claimpricinguseroverridedetail',
        'primaryKey': 'claimPricingUserOverrideDetailID',

        'aliases': {
            'claimPricingUserOverrideDetailID': 'id',
            'claimPricingUserOverrideHeaderID': 'claimPricingUserOverrideHeaderId',
            'claimID': 'claimId',
            'pricedAmtDRC': 'pricedAmtDrc',
            'pricedAmtORC': 'pricedAmtOrc',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'origPricingInputHeaderID': 'origPricingInputHeaderId',
            'origPricingOutputDetailID': 'origPricingOutputDetailId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimpricinguseroverrideheader': {
        'name': 'Claimpricinguseroverrideheader',
        'table': 'claimpricinguseroverrideheader',
        'primaryKey': 'claimPricingUserOverrideHeaderID',

        'aliases': {
            'claimPricingUserOverrideHeaderID': 'id',
            'claimID': 'claimId',
            'lineOfBusinessID': 'lineOfBusinessId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'provContractID': 'provContractId',
            'netContractID': 'netContractId',
            'pricingSetVersionID': 'pricingSetVersionId',
            'oonPricingSchedVersionID': 'oonPricingSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimpricingoutputheader': {
        'name': 'Claimpricingoutputheader',
        'table': 'claimpricingoutputheader',
        'primaryKey': 'claimPricingOutputHeaderID',

        'aliases': {
            'claimPricingOutputHeaderID': 'id',
            'claimPricingInputHeaderID': 'claimPricingInputHeaderId',
            'claimID': 'claimId',
            'pricingSchedID': 'pricingSchedId',
            'pricingSchedVersionID': 'pricingSchedVersionId',
            'oonPricingSchedOrderID': 'oonPricingSchedOrderId',
            'claimClassID': 'claimClassId',
            'memberAgeAtEarliestDosLCD': 'memberAgeAtEarliestDosLcd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimprovider': {
        'name': 'Claimprovider',
        'table': 'claimprovider',
        'primaryKey': 'claimProviderID',

        'aliases': {
            'claimProviderID': 'id',
            'claimID': 'claimId',
            'providerID': 'providerId',
            'natlProviderID': 'natlProviderId',
            'externalProviderID': 'externalProviderId',
            'providerOrgAffiliationID': 'providerOrgAffiliationId',
            'licenseID': 'licenseId',
            'nabpID': 'nabpId',
            'provSecondaryIDQual': 'provSecondaryIdQual',
            'provSecondaryID': 'provSecondaryId',
            'entityIDCode': 'entityIdCode',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'provTINID': 'provTinid',
            'providerTIN': 'providerTin',
            'referenceIDQual': 'referenceIdQual',
            'provTINAddressesID': 'provTinAddressesId',
            'providerTINQual': 'providerTinQual'
        },

        'referenceMap': {
            'provider': 'providerId',
            'natlProvider': 'natlProviderId',
            'externalProvider': 'externalProviderId'
        },

        'listReferences': {}
    },

    'Claimpropertycasualty': {
        'name': 'Claimpropertycasualty',
        'table': 'claimpropertycasualty',
        'primaryKey': 'claimPropertyCasualtyID',

        'aliases': {
            'claimPropertyCasualtyID': 'id',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimprocedurexref': {
        'name': 'Claimprocedurexref',
        'table': 'claimprocedurexref',
        'primaryKey': 'claimProcedureXrefID',

        'aliases': {
            'claimProcedureXrefID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'authMatchingSchedID': 'authMatchingSchedId',
            'authProgramTypeID': 'authProgramTypeId',
            'authProgramAuthServiceTypeID': 'authProgramAuthServiceTypeId',
            'authProgramProcedureID': 'authProgramProcedureId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimprovidersecondaryid': {
        'name': 'Claimprovidersecondaryid',
        'table': 'claimprovidersecondaryid',
        'primaryKey': 'claimProviderSecondaryIDID',

        'aliases': {
            'claimProviderSecondaryIDID': 'id',
            'claimID': 'claimId',
            'claimProviderID': 'claimProviderId',
            'otherPayerPrimaryID': 'otherPayerPrimaryId',
            'secondaryIDCodeQual': 'secondaryIdCodeQual',
            'secondaryIDCode': 'secondaryIdCode',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'claimProvider': 'claimProviderId'
        },

        'listReferences': {}
    },

    'Claimprovtin': {
        'name': 'Claimprovtin',
        'table': 'claimprovtin',
        'primaryKey': 'claimID',

        'aliases': {
            'claimID': 'id',
            'provTINName': 'provTinName',
            'natlProviderID': 'natlProviderId',
            'provTINID': 'provTinid',
            'providerTIN': 'providerTin',
            'provTINAddressesID': 'provTinAddressesId',
            'referenceIDQual': 'referenceIdQual',
            'secondaryIDG2Code': 'secondaryIdg2Code',
            'secondaryIDLUCode': 'secondaryIdluCode',
            'nonUSPhoneInd': 'nonUsPhoneInd',
            'entityIDCode': 'entityIdCode',
            'payToEntityIDCode': 'payToEntityIdCode',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'natlProvider': 'natlProviderId'
        },

        'listReferences': {}
    },

    'Claimprovideraddress': {
        'name': 'Claimprovideraddress',
        'table': 'claimprovideraddress',
        'primaryKey': 'claimProviderAddressID',

        'aliases': {
            'claimID': 'claimId',
            'providerOrgLocationID': 'providerOrgLocationId',
            'claimProviderAddressID': 'id',
            'claimProviderID': 'claimProviderId',
            'nonUSPhoneInd': 'nonUsPhoneInd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'addressEntityIDCode': 'addressEntityIdCode',
            'provTINAddressesID': 'provTinAddressesId'
        },

        'referenceMap': {
            'claimProvider': 'claimProviderId'
        },

        'listReferences': {}
    },

    'Claimqualityauditauditdetail': {
        'name': 'Claimqualityauditauditdetail',
        'table': 'claimqualityauditauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'claimQualityAuditID': 'claimQualityAuditId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimreferral': {
        'name': 'Claimreferral',
        'table': 'claimreferral',
        'primaryKey': 'claimReferralID',

        'aliases': {
            'claimReferralID': 'id',
            'claimID': 'claimId',
            'otherPayerPrimaryID': 'otherPayerPrimaryId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimtoothchart': {
        'name': 'Claimtoothchart',
        'table': 'claimtoothchart',
        'primaryKey': 'claimToothChartID',

        'aliases': {
            'claimToothChartID': 'id',
            'claimID': 'claimId',
            'toothID': 'toothId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'tooth': 'toothId'
        },

        'listReferences': {}
    },

    'Claimsubsgroupinfo': {
        'name': 'Claimsubsgroupinfo',
        'table': 'claimsubsgroupinfo',
        'primaryKey': 'claimID',

        'aliases': {
            'claimID': 'id',
            'claimIDQual': 'claimIdQual',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimqualityaudit': {
        'name': 'Claimqualityaudit',
        'table': 'claimqualityaudit',
        'primaryKey': 'claimQualityAuditID',

        'aliases': {
            'claimQualityAuditID': 'id',
            'claimID': 'claimId',
            'claimEventID': 'claimEventId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimrespparty': {
        'name': 'Claimrespparty',
        'table': 'claimrespparty',
        'primaryKey': 'claimID',

        'aliases': {
            'claimID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clausecoderef': {
        'name': 'Clausecoderef',
        'table': 'clausecoderef',
        'primaryKey': 'clauseCode',

        'aliases': {
            'clauseCode': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'clauseCodeSetID': 'clauseCodeSetId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clceffratgbasefileupldheader': {
        'name': 'Clceffratgbasefileupldheader',
        'table': 'clceffratgbasefileupldheader',
        'primaryKey': 'clcEffRatgBaseFileUpldHeaderID',

        'aliases': {
            'clcEffRatgBaseFileUpldHeaderID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clinicaleditresponsecode': {
        'name': 'Clinicaleditresponsecode',
        'table': 'clinicaleditresponsecode',
        'primaryKey': 'clinicalEditResponseCode',

        'aliases': {
            'clinicalEditResponseCode': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clausecodeset': {
        'name': 'Clausecodeset',
        'table': 'clausecodeset',
        'primaryKey': 'clauseCodeSetID',

        'aliases': {
            'clauseCodeSetID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clinicaleditresponsecodeaudit': {
        'name': 'Clinicaleditresponsecodeaudit',
        'table': 'clinicaleditresponsecodeaudit',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clinicaleditscheddetail': {
        'name': 'Clinicaleditscheddetail',
        'table': 'clinicaleditscheddetail',
        'primaryKey': 'clinicalEditSchedDetailID',

        'aliases': {
            'clinicalEditSchedDetailID': 'id',
            'clinicalEditSchedID': 'clinicalEditSchedId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clineditscheddetailclmtypexcl': {
        'name': 'Clineditscheddetailclmtypexcl',
        'table': 'clineditscheddetailclmtypexcl',
        'primaryKey': 'claimType',

        'aliases': {
            'clinicalEditSchedDetailID': 'id',
            'claimType': 'id',
            'clinicalEditSchedID': 'clinicalEditSchedId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimsubscriber': {
        'name': 'Claimsubscriber',
        'table': 'claimsubscriber',
        'primaryKey': 'claimSubscriberID',

        'aliases': {
            'claimSubscriberID': 'id',
            'claimID': 'claimId',
            'subscriberID': 'subscriberId',
            'subsAffiliationID': 'subsAffiliationId',
            'parentSubsAffiliationID': 'parentSubsAffiliationId',
            'memGroupID': 'memGroupId',
            'externalSubID': 'externalSubId',
            'externalIDType': 'externalIdType',
            'subLocationID': 'subLocationId',
            'externalSubIDQual': 'externalSubIdQual',
            'memGroupExternalID': 'memGroupExternalId',
            'nonUSPhoneInd': 'nonUsPhoneInd',
            'entityIDCode': 'entityIdCode',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'languageCodeNISO': 'languageCodeNiso'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimtat': {
        'name': 'Claimtat',
        'table': 'claimtat',
        'primaryKey': 'claimID',

        'aliases': {
            'claimID': 'id',
            'memGroupID': 'memGroupId',
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Clausecodesetauditdetail': {
        'name': 'Clausecodesetauditdetail',
        'table': 'clausecodesetauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'clauseCodeSetID': 'clauseCodeSetId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clinicaleditassignment': {
        'name': 'Clinicaleditassignment',
        'table': 'clinicaleditassignment',
        'primaryKey': 'clinicalEditResponseCode',

        'aliases': {
            'clinicalEditSchedDetailID': 'id',
            'clinicalEditResponseCode': 'id',
            'clinicalEditSchedID': 'clinicalEditSchedId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Claimtransmitter': {
        'name': 'Claimtransmitter',
        'table': 'claimtransmitter',
        'primaryKey': 'claimTransmitterID',

        'aliases': {
            'claimTransmitterID': 'id',
            'claimID': 'claimId',
            'entityIDCode': 'entityIdCode',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clinicaleditsched': {
        'name': 'Clinicaleditsched',
        'table': 'clinicaleditsched',
        'primaryKey': 'clinicalEditSchedID',

        'aliases': {
            'clinicalEditSchedID': 'id',
            'ownerGroupID': 'ownerGroupId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clinicaleditschedauditdetail': {
        'name': 'Clinicaleditschedauditdetail',
        'table': 'clinicaleditschedauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'clinicalEditSchedID': 'clinicalEditSchedId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Cobrasched': {
        'name': 'Cobrasched',
        'table': 'cobrasched',
        'primaryKey': 'cobraSchedID',

        'aliases': {
            'cobraSchedID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clinicaleffratgbaseuploadstage': {
        'name': 'Clinicaleffratgbaseuploadstage',
        'table': 'clinicaleffratgbaseuploadstage',
        'primaryKey': 'clinicalEffRatgBaseUploadStageID',

        'aliases': {
            'clinicalEffRatgBaseUploadStageID': 'id',
            'clcEffRatgBaseFileUpldHeaderID': 'clcEffRatgBaseFileUpldHeaderId',
            'providerID': 'providerId',
            'mpinID': 'mpinId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'officeLocationID': 'officeLocationId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Clinicaleditschednote': {
        'name': 'Clinicaleditschednote',
        'table': 'clinicaleditschednote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'clinicalEditSchedID': 'clinicalEditSchedId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Cobrascheddetailbenefit': {
        'name': 'Cobrascheddetailbenefit',
        'table': 'cobrascheddetailbenefit',
        'primaryKey': 'cobraSchedDetailBenefitID',

        'aliases': {
            'cobraSchedDetailBenefitID': 'id',
            'cobraSchedDetailID': 'cobraSchedDetailId',
            'cobraSchedID': 'cobraSchedId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Cobrascheddetailconversion': {
        'name': 'Cobrascheddetailconversion',
        'table': 'cobrascheddetailconversion',
        'primaryKey': 'cobraSchedDetailConversionID',

        'aliases': {
            'cobraSchedDetailConversionID': 'id',
            'cobraSchedDetailID': 'cobraSchedDetailId',
            'cobraSchedID': 'cobraSchedId',
            'memGroupID': 'memGroupId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Cobrascheddetailqualeventprem': {
        'name': 'Cobrascheddetailqualeventprem',
        'table': 'cobrascheddetailqualeventprem',
        'primaryKey': 'cobraSchedDetailQualEventPremID',

        'aliases': {
            'cobraSchedDetailQualEventPremID': 'id',
            'cobraSchedDetailQualEventID': 'cobraSchedDetailQualEventId',
            'cobraSchedDetailID': 'cobraSchedDetailId',
            'cobraSchedID': 'cobraSchedId',
            'cobraSchedQualEventPremDT': 'cobraSchedQualEventPremDt',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Cobrascheddetailqualbeneficiar': {
        'name': 'Cobrascheddetailqualbeneficiar',
        'table': 'cobrascheddetailqualbeneficiar',
        'primaryKey': 'cobraSchedDetailQualBeneficiaryID',

        'aliases': {
            'cobraSchedDetailQualBeneficiaryID': 'id',
            'cobraSchedDetailID': 'cobraSchedDetailId',
            'cobraSchedID': 'cobraSchedId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Cobrascheddetailexclusion': {
        'name': 'Cobrascheddetailexclusion',
        'table': 'cobrascheddetailexclusion',
        'primaryKey': 'cobraSchedDetailExclusionID',

        'aliases': {
            'cobraSchedDetailExclusionID': 'id',
            'cobraSchedDetailID': 'cobraSchedDetailId',
            'cobraSchedID': 'cobraSchedId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Cobrascheddetailnotification': {
        'name': 'Cobrascheddetailnotification',
        'table': 'cobrascheddetailnotification',
        'primaryKey': 'cobraSchedDetailNotificationID',

        'aliases': {
            'cobraSchedDetailNotificationID': 'id',
            'cobraSchedDetailID': 'cobraSchedDetailId',
            'cobraSchedID': 'cobraSchedId',
            'fulfillTemplateID': 'fulfillTemplateId',
            'variableContentID': 'variableContentId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Cobrascheddetail': {
        'name': 'Cobrascheddetail',
        'table': 'cobrascheddetail',
        'primaryKey': 'cobraSchedDetailID',

        'aliases': {
            'cobraSchedDetailID': 'id',
            'cobraSchedID': 'cobraSchedId',
            'priorInsuredDT': 'priorInsuredDt',
            'maxCobraDT': 'maxCobraDt',
            'cobraMemberBenefitID': 'cobraMemberBenefitId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Cobraschedauditdetail': {
        'name': 'Cobraschedauditdetail',
        'table': 'cobraschedauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'cobraSchedID': 'cobraSchedId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Clinicaleffratgfileuploaderror': {
        'name': 'Clinicaleffratgfileuploaderror',
        'table': 'clinicaleffratgfileuploaderror',
        'primaryKey': 'clinicalEffRatgFileUploadErrorID',

        'aliases': {
            'clinicalEffRatgFileUploadErrorID': 'id',
            'clcEffRatgBaseFileUpldHeaderID': 'clcEffRatgBaseFileUpldHeaderId',
            'mpinID': 'mpinId',
            'officeLocationID': 'officeLocationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Cobraschednote': {
        'name': 'Cobraschednote',
        'table': 'cobraschednote',
        'primaryKey': 'cobraSchedNoteID',

        'aliases': {
            'cobraSchedNoteID': 'id',
            'cobraSchedID': 'cobraSchedId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Cobrule': {
        'name': 'Cobrule',
        'table': 'cobrules',
        'primaryKey': 'cobRuleSetID',

        'aliases': {
            'cobRuleSetID': 'id',
            'noCOBRuleInd': 'noCobRuleInd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Cobrascheddetailsubsidy': {
        'name': 'Cobrascheddetailsubsidy',
        'table': 'cobrascheddetailsubsidy',
        'primaryKey': 'cobraSchedDetailSubsidyID',

        'aliases': {
            'cobraSchedDetailSubsidyID': 'id',
            'cobraSchedDetailID': 'cobraSchedDetailId',
            'cobraSchedID': 'cobraSchedId',
            'billToEntityID': 'billToEntityId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Cobrascheddetailgracetime': {
        'name': 'Cobrascheddetailgracetime',
        'table': 'cobrascheddetailgracetime',
        'primaryKey': 'cobraSchedDetailGraceTimeID',

        'aliases': {
            'cobraSchedDetailGraceTimeID': 'id',
            'cobraSchedDetailID': 'cobraSchedDetailId',
            'cobraSchedID': 'cobraSchedId',
            'cobraSchedGraceTimeDT': 'cobraSchedGraceTimeDt',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Continuationeventmember': {
        'name': 'Continuationeventmember',
        'table': 'continuationeventmember',
        'primaryKey': 'continuationEventMemberID',

        'aliases': {
            'continuationEventMemberID': 'id',
            'continuationEventID': 'continuationEventId',
            'subsAffiliationID': 'subsAffiliationId',
            'dependentSubsAffiliationID': 'dependentSubsAffiliationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Cobrascheddetailpartialmonth': {
        'name': 'Cobrascheddetailpartialmonth',
        'table': 'cobrascheddetailpartialmonth',
        'primaryKey': 'cobraSchedDetailPartialMonthID',

        'aliases': {
            'cobraSchedDetailPartialMonthID': 'id',
            'cobraSchedDetailID': 'cobraSchedDetailId',
            'cobraSchedID': 'cobraSchedId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Cobrulestext': {
        'name': 'Cobrulestext',
        'table': 'cobrulestext',
        'primaryKey': 'referenceName',

        'aliases': {
            'referenceName': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Cobrascheddetailsubsidytier': {
        'name': 'Cobrascheddetailsubsidytier',
        'table': 'cobrascheddetailsubsidytier',
        'primaryKey': 'cobraSchedDetailSubsidyTierID',

        'aliases': {
            'cobraSchedDetailSubsidyTierID': 'id',
            'cobraSchedDetailSubsidyID': 'cobraSchedDetailSubsidyId',
            'cobraSchedDetailID': 'cobraSchedDetailId',
            'cobraSchedID': 'cobraSchedId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Cobrascheddetailqualevent': {
        'name': 'Cobrascheddetailqualevent',
        'table': 'cobrascheddetailqualevent',
        'primaryKey': 'cobraSchedDetailQualEventID',

        'aliases': {
            'cobraSchedDetailQualEventID': 'id',
            'cobraSchedDetailID': 'cobraSchedDetailId',
            'cobraSchedID': 'cobraSchedId',
            'maxCobraDT': 'maxCobraDt',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Codexref': {
        'name': 'Codexref',
        'table': 'codexref',
        'primaryKey': 'codeXRefID',

        'aliases': {
            'codeXRefID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Continuationevent': {
        'name': 'Continuationevent',
        'table': 'continuationevent',
        'primaryKey': 'continuationEventID',

        'aliases': {
            'continuationEventID': 'id',
            'subsAffiliationID': 'subsAffiliationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Contractclaimtype': {
        'name': 'Contractclaimtype',
        'table': 'contractclaimtype',
        'primaryKey': 'contractClaimType',

        'aliases': {
            'contractClaimType': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Continuationsecondaryevent': {
        'name': 'Continuationsecondaryevent',
        'table': 'continuationsecondaryevent',
        'primaryKey': 'continuationSecondaryEventID',

        'aliases': {
            'continuationSecondaryEventID': 'id',
            'continuationEventMemberID': 'continuationEventMemberId',
            'continuationEventID': 'continuationEventId',
            'subsAffiliationID': 'subsAffiliationId',
            'dependentSubsAffiliationID': 'dependentSubsAffiliationId',
            'memberID': 'memberId',
            'subscriberID': 'subscriberId',
            'memGroupID': 'memGroupId'
        },

        'referenceMap': {
            'continuationEventMember': 'continuationEventMemberId',
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Correspondence': {
        'name': 'Correspondence',
        'table': 'correspondence',
        'primaryKey': 'correspondenceID',

        'aliases': {
            'correspondenceID': 'id',
            'dcnID': 'dcnId',
            'correspondenceSourceLocationCD': 'correspondenceSourceLocationCd',
            'correspondenceLockUserID': 'correspondenceLockUserId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Correspondenceauditdetail': {
        'name': 'Correspondenceauditdetail',
        'table': 'correspondenceauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'correspondenceID': 'correspondenceId'
        },

        'referenceMap': {
            'correspondence': 'correspondenceId'
        },

        'listReferences': {}
    },

    'Correspondencereason': {
        'name': 'Correspondencereason',
        'table': 'correspondencereason',
        'primaryKey': 'correspondenceReasonID',

        'aliases': {
            'correspondenceReasonID': 'id',
            'memberID': 'memberId',
            'subsAffiliationID': 'subsAffiliationId',
            'memberBenefitID': 'memberBenefitId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Correspondencenote': {
        'name': 'Correspondencenote',
        'table': 'correspondencenote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'correspondenceID': 'correspondenceId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'correspondence': 'correspondenceId'
        },

        'listReferences': {}
    },

    'Cpt4Procedureauditdetail': {
        'name': 'Cpt4Procedureauditdetail',
        'table': 'cpt4procedureauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'cpt4ProcedureID': 'cpt4ProcedureId'
        },

        'referenceMap': {
            'cpt4Procedure': 'cpt4ProcedureId'
        },

        'listReferences': {}
    },

    'Countycode': {
        'name': 'Countycode',
        'table': 'countycodes',
        'primaryKey': 'county',

        'aliases': {
            'county': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Correspondenceentitydetail': {
        'name': 'Correspondenceentitydetail',
        'table': 'correspondenceentitydetail',
        'primaryKey': 'correspondenceEntityDetailID',

        'aliases': {
            'correspondenceEntityDetailID': 'id',
            'correspondenceID': 'correspondenceId',
            'correspondenceEntityID': 'correspondenceEntityId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'correspondence': 'correspondenceId'
        },

        'listReferences': {}
    },

    'Cpt4Procasafileuploaddetail': {
        'name': 'Cpt4Procasafileuploaddetail',
        'table': 'cpt4procasafileuploaddetail',
        'primaryKey': 'cpt4ProcAsaFileUploadDetailID',

        'aliases': {
            'cpt4ProcAsaFileUploadDetailID': 'id',
            'cpt4ProcedureFileUploadHeaderID': 'cpt4ProcedureFileUploadHeaderId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Correspondencetransdetail': {
        'name': 'Correspondencetransdetail',
        'table': 'correspondencetransdetail',
        'primaryKey': 'correspondenceTransDetailID',

        'aliases': {
            'correspondenceTransDetailID': 'id',
            'correspondenceID': 'correspondenceId',
            'correspondenceTransID': 'correspondenceTransId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'correspondence': 'correspondenceId'
        },

        'listReferences': {}
    },

    'Cpt4Procedure': {
        'name': 'Cpt4Procedure',
        'table': 'cpt4procedure',
        'primaryKey': 'cpt4ProcedureID',

        'aliases': {
            'cpt4ProcedureID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Cpt4Procedurefileuploadheader': {
        'name': 'Cpt4Procedurefileuploadheader',
        'table': 'cpt4procedurefileuploadheader',
        'primaryKey': 'cpt4ProcedureFileUploadHeaderID',

        'aliases': {
            'cpt4ProcedureFileUploadHeaderID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Customprocedure': {
        'name': 'Customprocedure',
        'table': 'customprocedure',
        'primaryKey': 'sequenceNum',

        'aliases': {
            'procedureCode': 'id',
            'sequenceNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Datasecuritygroup': {
        'name': 'Datasecuritygroup',
        'table': 'datasecuritygroup',
        'primaryKey': 'dataSecurityGroupID',

        'aliases': {
            'dataSecurityGroupID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'dataSecurityDataSetID': 'dataSecurityDataSetId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Datasecuritymembergroup': {
        'name': 'Datasecuritymembergroup',
        'table': 'datasecuritymembergroup',
        'primaryKey': 'memGroupID',

        'aliases': {
            'dataSecurityDataSetID': 'id',
            'memGroupID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Datasecuritydatasetauditdetail': {
        'name': 'Datasecuritydatasetauditdetail',
        'table': 'datasecuritydatasetauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'dataSecurityDataSetID': 'dataSecurityDataSetId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Datasecurityownergroup': {
        'name': 'Datasecurityownergroup',
        'table': 'datasecurityownergroup',
        'primaryKey': 'ownerGroupID',

        'aliases': {
            'dataSecurityDataSetID': 'id',
            'ownerGroupID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Defaultmodifierauditdetail': {
        'name': 'Defaultmodifierauditdetail',
        'table': 'defaultmodifierauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'defaultModifierCompVersionID': 'defaultModifierCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Cpt4Procedurefileuploaddetail': {
        'name': 'Cpt4Procedurefileuploaddetail',
        'table': 'cpt4procedurefileuploaddetail',
        'primaryKey': 'cpt4ProcedureFileUploadDetailID',

        'aliases': {
            'cpt4ProcedureFileUploadDetailID': 'id',
            'cpt4ProcedureFileUploadHeaderID': 'cpt4ProcedureFileUploadHeaderId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Defaultmodifiercompnote': {
        'name': 'Defaultmodifiercompnote',
        'table': 'defaultmodifiercompnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'defaultModifierCompVersionID': 'defaultModifierCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Delegschedauditdetail': {
        'name': 'Delegschedauditdetail',
        'table': 'delegschedauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'delegSchedVersionID': 'delegSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Defaultmodifiercomp': {
        'name': 'Defaultmodifiercomp',
        'table': 'defaultmodifiercomp',
        'primaryKey': 'defaultModifierCompVersionID',

        'aliases': {
            'defaultModifierCompID': 'defaultModifierCompId',
            'modifierTCCalcType': 'modifierTcCalcType',
            'modifierTCPct': 'modifierTcPct',
            'modifierTCAmtLimit': 'modifierTcAmtLimit',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'ownerGroupID': 'ownerGroupId',
            'pricingExternalID': 'pricingExternalId',
            'defaultModifierCompVersionID': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Credstatuscode': {
        'name': 'Credstatuscode',
        'table': 'credstatuscode',
        'primaryKey': 'credStatusCode',

        'aliases': {
            'credStatusCode': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Cpt4Procmedfileuploaddetail': {
        'name': 'Cpt4Procmedfileuploaddetail',
        'table': 'cpt4procmedfileuploaddetail',
        'primaryKey': 'cpt4ProcMedFileUploadDetailID',

        'aliases': {
            'cpt4ProcMedFileUploadDetailID': 'id',
            'cpt4ProcedureFileUploadHeaderID': 'cpt4ProcedureFileUploadHeaderId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Datasecurityproduct': {
        'name': 'Datasecurityproduct',
        'table': 'datasecurityproduct',
        'primaryKey': 'productID',

        'aliases': {
            'dataSecurityDataSetID': 'id',
            'productID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Delegfunction': {
        'name': 'Delegfunction',
        'table': 'delegfunction',
        'primaryKey': 'delegFunctionCode',

        'aliases': {
            'delegFunctionCode': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Delegschedfunctionassign': {
        'name': 'Delegschedfunctionassign',
        'table': 'delegschedfunctionassign',
        'primaryKey': 'delegFunctionCode',

        'aliases': {
            'delegSchedScenarioFunctionID': 'id',
            'delegFunctionCode': 'id',
            'delegSchedScenarioID': 'delegSchedScenarioId',
            'delegSchedVersionID': 'delegSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Datasecuritydataset': {
        'name': 'Datasecuritydataset',
        'table': 'datasecuritydataset',
        'primaryKey': 'dataSecurityDataSetID',

        'aliases': {
            'dataSecurityDataSetID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Delegsched': {
        'name': 'Delegsched',
        'table': 'delegsched',
        'primaryKey': 'delegSchedVersionID',

        'aliases': {
            'delegSchedVersionID': 'id',
            'delegSchedID': 'delegSchedId',
            'servCompID': 'servCompId',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'serviceAreaID': 'serviceAreaId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Delegschedfunction': {
        'name': 'Delegschedfunction',
        'table': 'delegschedfunction',
        'primaryKey': 'delegSchedFunctionID',

        'aliases': {
            'delegSchedFunctionID': 'id',
            'delegSchedVersionID': 'delegSchedVersionId',
            'delegSchedEntityID': 'delegSchedEntityId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Delegset': {
        'name': 'Delegset',
        'table': 'delegset',
        'primaryKey': 'delegSetVersionID',

        'aliases': {
            'delegSetVersionID': 'id',
            'delegSetID': 'delegSetId',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Delegsetnote': {
        'name': 'Delegsetnote',
        'table': 'delegsetnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'delegSetVersionID': 'delegSetVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Delegschedscenariofunction': {
        'name': 'Delegschedscenariofunction',
        'table': 'delegschedscenariofunction',
        'primaryKey': 'delegSchedScenarioFunctionID',

        'aliases': {
            'delegSchedScenarioFunctionID': 'id',
            'delegSchedScenarioID': 'delegSchedScenarioId',
            'delegSchedVersionID': 'delegSchedVersionId',
            'defaultEntityID': 'defaultEntityId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Delegschedscenario': {
        'name': 'Delegschedscenario',
        'table': 'delegschedscenario',
        'primaryKey': 'delegSchedScenarioID',

        'aliases': {
            'delegSchedScenarioID': 'id',
            'delegSchedVersionID': 'delegSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Delegschedscenariofunctionserv': {
        'name': 'Delegschedscenariofunctionserv',
        'table': 'delegschedscenariofunctionserv',
        'primaryKey': 'delegSchedScenarioFunctionServID',

        'aliases': {
            'delegSchedScenarioFunctionServID': 'id',
            'delegSchedScenarioFunctionID': 'delegSchedScenarioFunctionId',
            'delegSchedEntityID': 'delegSchedEntityId',
            'delegSchedScenarioID': 'delegSchedScenarioId',
            'servID': 'servId',
            'delegSchedVersionID': 'delegSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Denyreasoncode': {
        'name': 'Denyreasoncode',
        'table': 'denyreasoncode',
        'primaryKey': 'denyReasonCode',

        'aliases': {
            'denyReasonCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Diagcoderangecat': {
        'name': 'Diagcoderangecat',
        'table': 'diagcoderangecat',
        'primaryKey': 'diagCodeRangeSeqNum',

        'aliases': {
            'diagCategory': 'id',
            'diagCodeRangeSeqNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Delegschedentity': {
        'name': 'Delegschedentity',
        'table': 'delegschedentity',
        'primaryKey': 'delegSchedEntityID',

        'aliases': {
            'delegSchedEntityID': 'id',
            'delegSchedVersionID': 'delegSchedVersionId',
            'entityID': 'entityId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Delegsettimeline': {
        'name': 'Delegsettimeline',
        'table': 'delegsettimeline',
        'primaryKey': 'delegSetTimelineID',

        'aliases': {
            'delegSetTimelineID': 'id',
            'delegSetVersionID': 'delegSetVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Delegsetschedassign': {
        'name': 'Delegsetschedassign',
        'table': 'delegsetschedassign',
        'primaryKey': 'delegSetSchedAssignID',

        'aliases': {
            'delegSetSchedAssignID': 'id',
            'delegSetVersionID': 'delegSetVersionId',
            'delegSchedID': 'delegSchedId',
            'delegSetTimelineID': 'delegSetTimelineId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Denyreasoncodeauditdetail': {
        'name': 'Denyreasoncodeauditdetail',
        'table': 'denyreasoncodeauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Delegsetauditdetail': {
        'name': 'Delegsetauditdetail',
        'table': 'delegsetauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'delegSetVersionID': 'delegSetVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Directoryusersuppressrsncode': {
        'name': 'Directoryusersuppressrsncode',
        'table': 'directoryusersuppressrsncode',
        'primaryKey': 'directoryUserSuppressRsnCode',

        'aliases': {
            'directoryUserSuppressRsnCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Diagnosissetcatdetail': {
        'name': 'Diagnosissetcatdetail',
        'table': 'diagnosissetcatdetail',
        'primaryKey': 'diagnosisSetCatDetailID',

        'aliases': {
            'diagnosisSetCatDetailID': 'id',
            'diagnosisSetID': 'diagnosisSetId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'diagnosisSetCatID': 'diagnosisSetCatId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Delegschednote': {
        'name': 'Delegschednote',
        'table': 'delegschednote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'delegSchedVersionID': 'delegSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Distributionchannel': {
        'name': 'Distributionchannel',
        'table': 'distributionchannel',
        'primaryKey': 'distributionChannelID',

        'aliases': {
            'distributionChannelID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Deleteutilityerrorqueue': {
        'name': 'Deleteutilityerrorqueue',
        'table': 'deleteutilityerrorqueue',
        'primaryKey': 'queueID',

        'aliases': {
            'queueID': 'id',
            'memGroupID': 'memGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'lockUserID': 'lockUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Diagcategory': {
        'name': 'Diagcategory',
        'table': 'diagcategory',
        'primaryKey': 'diagCategory',

        'aliases': {
            'diagCategory': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Diagnosisset': {
        'name': 'Diagnosisset',
        'table': 'diagnosisset',
        'primaryKey': 'diagnosisSetID',

        'aliases': {
            'diagnosisSetID': 'id',
            'ownerGroupID': 'ownerGroupId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Diagnosissetcatdetaildef': {
        'name': 'Diagnosissetcatdetaildef',
        'table': 'diagnosissetcatdetaildef',
        'primaryKey': 'diagnosisSetCatDetailDefID',

        'aliases': {
            'diagnosisSetCatDetailDefID': 'id',
            'diagnosisSetCatDetailID': 'diagnosisSetCatDetailId',
            'diagnosisSetID': 'diagnosisSetId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'diagnosisSetCatID': 'diagnosisSetCatId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Diagnosissetcat': {
        'name': 'Diagnosissetcat',
        'table': 'diagnosissetcat',
        'primaryKey': 'diagnosisSetCatID',

        'aliases': {
            'diagnosisSetCatID': 'id',
            'diagnosisSetID': 'diagnosisSetId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Dofrschedscenarioserv': {
        'name': 'Dofrschedscenarioserv',
        'table': 'dofrschedscenarioserv',
        'primaryKey': 'dofrSchedScenarioServID',

        'aliases': {
            'dofrSchedScenarioServID': 'id',
            'dofrSchedEntityID': 'dofrSchedEntityId',
            'dofrSchedScenarioID': 'dofrSchedScenarioId',
            'servID': 'servId',
            'dofrSchedVersionID': 'dofrSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Dofrsetauditdetail': {
        'name': 'Dofrsetauditdetail',
        'table': 'dofrsetauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'dofrSetVersionID': 'dofrSetVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Distributionchannelnote': {
        'name': 'Distributionchannelnote',
        'table': 'distributionchannelnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'distributionChannelID': 'distributionChannelId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Distchannelauditdetail': {
        'name': 'Distchannelauditdetail',
        'table': 'distchannelauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'distributionChannelID': 'distributionChannelId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Dofrschedauditdetail': {
        'name': 'Dofrschedauditdetail',
        'table': 'dofrschedauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'dofrSchedVersionID': 'dofrSchedVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Diagnosissetauditdetail': {
        'name': 'Diagnosissetauditdetail',
        'table': 'diagnosissetauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'diagnosisSetID': 'diagnosisSetId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Dofrsched': {
        'name': 'Dofrsched',
        'table': 'dofrsched',
        'primaryKey': 'dofrSchedVersionID',

        'aliases': {
            'dofrSchedVersionID': 'id',
            'dofrSchedID': 'dofrSchedId',
            'servCompID': 'servCompId',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'serviceAreaID': 'serviceAreaId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Dofrsettimeline': {
        'name': 'Dofrsettimeline',
        'table': 'dofrsettimeline',
        'primaryKey': 'dofrSetTimelineID',

        'aliases': {
            'dofrSetTimelineID': 'id',
            'dofrSetVersionID': 'dofrSetVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Dofrsetschedassign': {
        'name': 'Dofrsetschedassign',
        'table': 'dofrsetschedassign',
        'primaryKey': 'dofrSetSchedAssignID',

        'aliases': {
            'dofrSetSchedAssignID': 'id',
            'dofrSetVersionID': 'dofrSetVersionId',
            'dofrSchedID': 'dofrSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'dofrSetTimelineID': 'dofrSetTimelineId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Drcrestrict': {
        'name': 'Drcrestrict',
        'table': 'drcrestrict',
        'primaryKey': 'coveredMRSeqNum',

        'aliases': {
            'msaID': 'id',
            'denyReasonCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'coveredMRSeqNum': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Drcmapper': {
        'name': 'Drcmapper',
        'table': 'drcmapper',
        'primaryKey': 'claimSource',

        'aliases': {
            'externalAppDrc': 'id',
            'claimSource': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Drgbasefileuploaddetail': {
        'name': 'Drgbasefileuploaddetail',
        'table': 'drgbasefileuploaddetail',
        'primaryKey': 'drgBaseFileUploadDetailID',

        'aliases': {
            'drgBaseFileUploadDetailID': 'id',
            'drgBaseFileUploadHeaderID': 'drgBaseFileUploadHeaderId',
            'gm_los': 'gmLos',
            'am_los': 'amLos',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Drgversion': {
        'name': 'Drgversion',
        'table': 'drgversion',
        'primaryKey': 'drgVersion',

        'aliases': {
            'drgVersion': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Drgbasefileuploadheader': {
        'name': 'Drgbasefileuploadheader',
        'table': 'drgbasefileuploadheader',
        'primaryKey': 'drgBaseFileUploadHeaderID',

        'aliases': {
            'drgBaseFileUploadHeaderID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Eocactioncode': {
        'name': 'Eocactioncode',
        'table': 'eocactioncode',
        'primaryKey': 'eocActionCode',

        'aliases': {
            'eocActionCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Editcode': {
        'name': 'Editcode',
        'table': 'editcode',
        'primaryKey': 'editCode',

        'aliases': {
            'editCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'allowDenyWithoutDRCInd': 'allowDenyWithoutDrcInd'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Eocsched': {
        'name': 'Eocsched',
        'table': 'eocsched',
        'primaryKey': 'eocSchedVersionID',

        'aliases': {
            'eocSchedID': 'eocSchedId',
            'eocSchedVersionID': 'id',
            'ownerGroupID': 'ownerGroupId',
            'servCompID': 'servCompId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Eocschedhold': {
        'name': 'Eocschedhold',
        'table': 'eocschedhold',
        'primaryKey': 'eocSchedHoldID',

        'aliases': {
            'eocSchedHoldID': 'id',
            'eocSchedVersionID': 'eocSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Eocschedauditdetail': {
        'name': 'Eocschedauditdetail',
        'table': 'eocschedauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'eocSchedVersionID': 'eocSchedVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Drg': {
        'name': 'Drg',
        'table': 'drg',
        'primaryKey': 'drgVersion',

        'aliases': {
            'drgCode': 'id',
            'drgVersion': 'id',
            'geometricMeanLOS': 'geometricMeanLos',
            'arithmeticMeanLOS': 'arithmeticMeanLos',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Dofrschedscenario': {
        'name': 'Dofrschedscenario',
        'table': 'dofrschedscenario',
        'primaryKey': 'dofrSchedScenarioID',

        'aliases': {
            'dofrSchedScenarioID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'defaultDofrSchedEntityID': 'defaultDofrSchedEntityId',
            'dofrSchedVersionID': 'dofrSchedVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Dofrschednote': {
        'name': 'Dofrschednote',
        'table': 'dofrschednote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'dofrSchedVersionID': 'dofrSchedVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Eocschednote': {
        'name': 'Eocschednote',
        'table': 'eocschednote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'eocSchedVersionID': 'eocSchedVersionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Dofrset': {
        'name': 'Dofrset',
        'table': 'dofrset',
        'primaryKey': 'dofrSetVersionID',

        'aliases': {
            'dofrSetVersionID': 'id',
            'dofrSetID': 'dofrSetId',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Eocschedtriggerevent': {
        'name': 'Eocschedtriggerevent',
        'table': 'eocschedtriggerevent',
        'primaryKey': 'eocSchedTriggerEventVersionID',

        'aliases': {
            'eocSchedTriggerEventID': 'eocSchedTriggerEventId',
            'eocSchedTriggerEventVersionID': 'id',
            'eocSchedVersionID': 'eocSchedVersionId',
            'ageLimitFromDT': 'ageLimitFromDt',
            'ageLimitThruDT': 'ageLimitThruDt',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'ageLimitFromLCD': 'ageLimitFromLcd',
            'ageLimitThruLCD': 'ageLimitThruLcd'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Eocschedtriggereventaction': {
        'name': 'Eocschedtriggereventaction',
        'table': 'eocschedtriggereventaction',
        'primaryKey': 'eocActionCode',

        'aliases': {
            'eocSchedTriggerEventVersionID': 'id',
            'eocActionCode': 'id',
            'eocSchedVersionID': 'eocSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Dofrschedentity': {
        'name': 'Dofrschedentity',
        'table': 'dofrschedentity',
        'primaryKey': 'dofrSchedEntityID',

        'aliases': {
            'dofrSchedEntityID': 'id',
            'entityID': 'entityId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'dofrSchedVersionID': 'dofrSchedVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Dofrsetnote': {
        'name': 'Dofrsetnote',
        'table': 'dofrsetnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'dofrSetVersionID': 'dofrSetVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Eocschedrelatedeventserv': {
        'name': 'Eocschedrelatedeventserv',
        'table': 'eocschedrelatedeventserv',
        'primaryKey': 'servID',

        'aliases': {
            'eocSchedRelatedEventVersionID': 'id',
            'servID': 'id',
            'eocSchedVersionID': 'eocSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Eocschedrelatedeventaction': {
        'name': 'Eocschedrelatedeventaction',
        'table': 'eocschedrelatedeventaction',
        'primaryKey': 'eocActionCode',

        'aliases': {
            'eocSchedRelatedEventVersionID': 'id',
            'eocActionCode': 'id',
            'eocSchedVersionID': 'eocSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Eocschedstate': {
        'name': 'Eocschedstate',
        'table': 'eocschedstate',
        'primaryKey': 'eocSchedVersionID',

        'aliases': {
            'state': 'id',
            'eocSchedVersionID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Eocschedtriggereventserv': {
        'name': 'Eocschedtriggereventserv',
        'table': 'eocschedtriggereventserv',
        'primaryKey': 'servID',

        'aliases': {
            'eocSchedTriggerEventVersionID': 'id',
            'servID': 'id',
            'eocSchedVersionID': 'eocSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Eventlog': {
        'name': 'Eventlog',
        'table': 'eventlog',
        'primaryKey': 'eventLogID',

        'aliases': {
            'eventLogID': 'id',
            'transID': 'transId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Eocsetschedassign': {
        'name': 'Eocsetschedassign',
        'table': 'eocsetschedassign',
        'primaryKey': 'eocSetSchedAssignID',

        'aliases': {
            'eocSetSchedAssignID': 'id',
            'eocSetVersionID': 'eocSetVersionId',
            'eocSchedID': 'eocSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Eocset': {
        'name': 'Eocset',
        'table': 'eocset',
        'primaryKey': 'eocSetVersionID',

        'aliases': {
            'eocSetID': 'eocSetId',
            'eocSetVersionID': 'id',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Eocsetnote': {
        'name': 'Eocsetnote',
        'table': 'eocsetnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'eocSetVersionID': 'eocSetVersionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Eocschedrelatedevent': {
        'name': 'Eocschedrelatedevent',
        'table': 'eocschedrelatedevent',
        'primaryKey': 'eocSchedRelatedEventVersionID',

        'aliases': {
            'eocSchedRelatedEventID': 'eocSchedRelatedEventId',
            'eocSchedRelatedEventVersionID': 'id',
            'eocSchedVersionID': 'eocSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Eocsethold': {
        'name': 'Eocsethold',
        'table': 'eocsethold',
        'primaryKey': 'eocSetHoldID',

        'aliases': {
            'eocSetHoldID': 'id',
            'eocSetVersionID': 'eocSetVersionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Eocsetauditdetail': {
        'name': 'Eocsetauditdetail',
        'table': 'eocsetauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'eocSetVersionID': 'eocSetVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Dupclaimedit': {
        'name': 'Dupclaimedit',
        'table': 'dupclaimedit',
        'primaryKey': 'dupClaimEditID',

        'aliases': {
            'dupClaimEditID': 'id',
            'claimEditID': 'claimEditId',
            'claimID': 'claimId',
            'dupClaimID': 'dupClaimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Extractftpsettingsauditdetail': {
        'name': 'Extractftpsettingsauditdetail',
        'table': 'extractftpsettingsauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'environmentID': 'environmentId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fallthrucomp': {
        'name': 'Fallthrucomp',
        'table': 'fallthrucomp',
        'primaryKey': 'fallThruCompVersionID',

        'aliases': {
            'fallThruCompID': 'fallThruCompId',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'pricingExternalID': 'pricingExternalId',
            'fallThruCompVersionID': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Extractftpsetting': {
        'name': 'Extractftpsetting',
        'table': 'extractftpsettings',
        'primaryKey': 'environmentID',

        'aliases': {
            'extractType': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'environmentID': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Extractftpsettingsnote': {
        'name': 'Extractftpsettingsnote',
        'table': 'extractftpsettingsnote',
        'primaryKey': 'noteID',

        'aliases': {
            'extractType': 'id',
            'environmentID': 'id',
            'noteID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fallthrucompauditdetail': {
        'name': 'Fallthrucompauditdetail',
        'table': 'fallthrucompauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'fallThruCompVersionID': 'fallThruCompVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Extractftpsettingsnotedetail': {
        'name': 'Extractftpsettingsnotedetail',
        'table': 'extractftpsettingsnotedetail',
        'primaryKey': 'noteDetailID',

        'aliases': {
            'extractType': 'id',
            'environmentID': 'id',
            'noteID': 'noteId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'noteDetailID': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Eocschedtriggerrelatedassign': {
        'name': 'Eocschedtriggerrelatedassign',
        'table': 'eocschedtriggerrelatedassign',
        'primaryKey': 'eocSchedRelatedEventVersionID',

        'aliases': {
            'eocSchedTriggerEventID': 'eocSchedTriggerEventId',
            'eocSchedTriggerEventVersionID': 'id',
            'eocSchedRelatedEventID': 'eocSchedRelatedEventId',
            'eocSchedRelatedEventVersionID': 'id',
            'eocSchedVersionID': 'eocSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Facilitypapertype': {
        'name': 'Facilitypapertype',
        'table': 'facilitypapertype',
        'primaryKey': 'facilityPaperType',

        'aliases': {
            'facilityPaperType': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Expensecode': {
        'name': 'Expensecode',
        'table': 'expensecode',
        'primaryKey': 'expenseCode',

        'aliases': {
            'expenseCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Expensecodeemplstatus': {
        'name': 'Expensecodeemplstatus',
        'table': 'expensecodeemplstatus',
        'primaryKey': 'employStatusCode',

        'aliases': {
            'msaID': 'id',
            'expenseCode': 'id',
            'expenseCodeSeqNum': 'id',
            'employStatusCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fallthrucompnote': {
        'name': 'Fallthrucompnote',
        'table': 'fallthrucompnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'fallThruCompVersionID': 'fallThruCompVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Familyacctmaxhx': {
        'name': 'Familyacctmaxhx',
        'table': 'familyacctmaxhx',
        'primaryKey': 'familyAcctMaxHxID',

        'aliases': {
            'familyAcctMaxHxID': 'id',
            'familyAcctMaxID': 'familyAcctMaxId',
            'memberID': 'memberId',
            'msaID': 'msaId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId',
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Fallthrucompclaimclass': {
        'name': 'Fallthrucompclaimclass',
        'table': 'fallthrucompclaimclass',
        'primaryKey': 'fallThruCompClaimClassID',

        'aliases': {
            'fallThruCompClaimClassID': 'id',
            'assignFallThruCompID': 'assignFallThruCompId',
            'pricingSchedVersionID': 'pricingSchedVersionId',
            'claimClassID': 'claimClassId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'pricingSchedID': 'pricingSchedId',
            'fallThruCompID': 'fallThruCompId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Familyunitlevelcovlev': {
        'name': 'Familyunitlevelcovlev',
        'table': 'familyunitlevelcovlev',
        'primaryKey': 'covLevelCode',

        'aliases': {
            'familyUnitScheduleID': 'id',
            'familyLevel': 'id',
            'covLevelCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Familyunitnote': {
        'name': 'Familyunitnote',
        'table': 'familyunitnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'familyUnitScheduleID': 'familyUnitScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Familyunitschedleveldetailrel': {
        'name': 'Familyunitschedleveldetailrel',
        'table': 'familyunitschedleveldetailrel',
        'primaryKey': 'familyUnitSchedLevelDetailRelID',

        'aliases': {
            'familyUnitSchedLevelDetailRelID': 'id',
            'familyUnitScheduleLevelDetailID': 'familyUnitScheduleLevelDetailId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Familyunitschedule': {
        'name': 'Familyunitschedule',
        'table': 'familyunitschedule',
        'primaryKey': 'familyUnitScheduleID',

        'aliases': {
            'familyUnitScheduleID': 'id',
            'relationshipScheduleID': 'relationshipScheduleId',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Familyunitschedulelevel': {
        'name': 'Familyunitschedulelevel',
        'table': 'familyunitschedulelevel',
        'primaryKey': 'familyLevel',

        'aliases': {
            'familyUnitScheduleID': 'id',
            'familyLevel': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Familyunitscheduleleveldetail': {
        'name': 'Familyunitscheduleleveldetail',
        'table': 'familyunitscheduleleveldetail',
        'primaryKey': 'familyUnitScheduleLevelDetailID',

        'aliases': {
            'familyUnitScheduleLevelDetailID': 'id',
            'familyUnitScheduleID': 'familyUnitScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Finactivitycode': {
        'name': 'Finactivitycode',
        'table': 'finactivitycode',
        'primaryKey': 'finActivityCode',

        'aliases': {
            'finActivityCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Financeactivitylog': {
        'name': 'Financeactivitylog',
        'table': 'financeactivitylog',
        'primaryKey': 'financeActivityLogID',

        'aliases': {
            'financeActivityLogID': 'id',
            'apTransactionID': 'apTransactionId',
            'claimID': 'claimId',
            'memberID': 'memberId',
            'clearinghouseClaimID': 'clearinghouseClaimId',
            'parentFinanceActivityLogID': 'parentFinanceActivityLogId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Fallthrumodifiercompassign': {
        'name': 'Fallthrumodifiercompassign',
        'table': 'fallthrumodifiercompassign',
        'primaryKey': 'fallThruModifierCompAssignID',

        'aliases': {
            'fallThruModifierCompAssignID': 'id',
            'fallThruCompVersionID': 'fallThruCompVersionId',
            'modifierCompID': 'modifierCompId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fallthrucompdetail': {
        'name': 'Fallthrucompdetail',
        'table': 'fallthrucompdetail',
        'primaryKey': 'fallThruCompDetailID',

        'aliases': {
            'fallThruCompDetailID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'fallThruCompVersionID': 'fallThruCompVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Financeactivitylogattribtag': {
        'name': 'Financeactivitylogattribtag',
        'table': 'financeactivitylogattribtag',
        'primaryKey': 'financeActivityLogAttribTagID',

        'aliases': {
            'financeActivityLogAttribTagID': 'id',
            'financeActivityLogAttribSetID': 'financeActivityLogAttribSetId',
            'financeActivityLogID': 'financeActivityLogId',
            'apTransactionAttribTagID': 'apTransactionAttribTagId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Financeactivitylogattrib': {
        'name': 'Financeactivitylogattrib',
        'table': 'financeactivitylogattrib',
        'primaryKey': 'financeActivityLogAttribID',

        'aliases': {
            'financeActivityLogAttribID': 'id',
            'financeActivityLogAttribSetID': 'financeActivityLogAttribSetId',
            'financeActivityLogID': 'financeActivityLogId',
            'apTransactionAttribID': 'apTransactionAttribId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Financeactivitylogattribset': {
        'name': 'Financeactivitylogattribset',
        'table': 'financeactivitylogattribset',
        'primaryKey': 'financeActivityLogAttribSetID',

        'aliases': {
            'financeActivityLogAttribSetID': 'id',
            'financeActivityLogID': 'financeActivityLogId',
            'apTransactionAttribSetID': 'apTransactionAttribSetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Financialpenalty': {
        'name': 'Financialpenalty',
        'table': 'financialpenalty',
        'primaryKey': 'tableNumber',

        'aliases': {
            'tableNumber': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Financeerror': {
        'name': 'Financeerror',
        'table': 'financeerror',
        'primaryKey': 'financeErrorCode',

        'aliases': {
            'financeErrorCode': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Finattribschedauditdetail': {
        'name': 'Finattribschedauditdetail',
        'table': 'finattribschedauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'finAttribSchedID': 'finAttribSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Finattribsched': {
        'name': 'Finattribsched',
        'table': 'finattribsched',
        'primaryKey': 'finAttribSchedID',

        'aliases': {
            'finAttribSchedID': 'id',
            'sysFinSettingRuleServID': 'sysFinSettingRuleServId',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fallthrucomphold': {
        'name': 'Fallthrucomphold',
        'table': 'fallthrucomphold',
        'primaryKey': 'fallThruCompHoldID',

        'aliases': {
            'fallThruCompHoldID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'fallThruCompVersionID': 'fallThruCompVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Familyacctmax': {
        'name': 'Familyacctmax',
        'table': 'familyacctmax',
        'primaryKey': 'familyAcctMaxID',

        'aliases': {
            'familyAcctMaxID': 'id',
            'memberID': 'memberId',
            'msaID': 'msaId',
            'maximumID': 'maximumId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId',
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Financialpenaltyauditdetail': {
        'name': 'Financialpenaltyauditdetail',
        'table': 'financialpenaltyauditdetail',
        'primaryKey': 'tableNumber',

        'aliases': {
            'auditDetailID': 'id',
            'tableNumber': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Familyunitauditdetail': {
        'name': 'Familyunitauditdetail',
        'table': 'familyunitauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'familyUnitScheduleID': 'familyUnitScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Finattribcode': {
        'name': 'Finattribcode',
        'table': 'finattribcode',
        'primaryKey': 'finAttribCode',

        'aliases': {
            'finAttribCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Finattribschedsegment': {
        'name': 'Finattribschedsegment',
        'table': 'finattribschedsegment',
        'primaryKey': 'finAttribSchedSegmentID',

        'aliases': {
            'finAttribSchedSegmentID': 'id',
            'finAttribSchedID': 'finAttribSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Finattribschedcodeassign': {
        'name': 'Finattribschedcodeassign',
        'table': 'finattribschedcodeassign',
        'primaryKey': 'finAttribSchedCodeAssignID',

        'aliases': {
            'finAttribSchedCodeAssignID': 'id',
            'finAttribSchedID': 'finAttribSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Finattribschednote': {
        'name': 'Finattribschednote',
        'table': 'finattribschednote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'finAttribSchedID': 'finAttribSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Financialpenaltydetail': {
        'name': 'Financialpenaltydetail',
        'table': 'financialpenaltydetail',
        'primaryKey': 'financialPenaltyDetailID',

        'aliases': {
            'financialPenaltyDetailID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Finattribschedvariable': {
        'name': 'Finattribschedvariable',
        'table': 'finattribschedvariable',
        'primaryKey': 'finAttribSchedVariableID',

        'aliases': {
            'finAttribSchedVariableID': 'id',
            'finAttribSchedID': 'finAttribSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Finerrorapremark': {
        'name': 'Finerrorapremark',
        'table': 'finerrorapremark',
        'primaryKey': 'finErrorQueueID',

        'aliases': {
            'finErrorQueueID': 'id',
            'claimID': 'claimId',
            'apTransactionID': 'apTransactionId',
            'apTransactionDetailID': 'apTransactionDetailId',
            'apTransactionInterestID': 'apTransactionInterestId',
            'apTransactionSurchargeID': 'apTransactionSurchargeId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Finerrorapinterest': {
        'name': 'Finerrorapinterest',
        'table': 'finerrorapinterest',
        'primaryKey': 'finErrorQueueID',

        'aliases': {
            'finErrorQueueID': 'id',
            'apTransactionID': 'apTransactionId',
            'claimID': 'claimId',
            'interestSchedID': 'interestSchedId',
            'claimEventID': 'claimEventId',
            'claimEventPromptPayID': 'claimEventPromptPayId',
            'promptPaySchedID': 'promptPaySchedId',
            'promptPaySchedDetailID': 'promptPaySchedDetailId',
            'interestSchedDetailID': 'interestSchedDetailId',
            'interestSchedDetailDaysID': 'interestSchedDetailDaysId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Finattribschedvariabledef': {
        'name': 'Finattribschedvariabledef',
        'table': 'finattribschedvariabledef',
        'primaryKey': 'finAttribSchedVariableDefID',

        'aliases': {
            'finAttribSchedVariableDefID': 'id',
            'finAttribSchedVariableID': 'finAttribSchedVariableId',
            'finAttribSchedID': 'finAttribSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Finerroraptransaction': {
        'name': 'Finerroraptransaction',
        'table': 'finerroraptransaction',
        'primaryKey': 'finErrorQueueID',

        'aliases': {
            'finErrorQueueID': 'id',
            'apTransactionDetailID': 'apTransactionDetailId',
            'apTransactionInterestID': 'apTransactionInterestId',
            'apTransactionSurchargeID': 'apTransactionSurchargeId',
            'apTransactionReductionID': 'apTransactionReductionId',
            'apTransactionID': 'apTransactionId',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Finattribschedsegmentdef': {
        'name': 'Finattribschedsegmentdef',
        'table': 'finattribschedsegmentdef',
        'primaryKey': 'finAttribSchedSegmentDefID',

        'aliases': {
            'finAttribSchedSegmentDefID': 'id',
            'finAttribSchedSegmentID': 'finAttribSchedSegmentId',
            'finAttribSchedID': 'finAttribSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Finerrorpaymentrequesterror': {
        'name': 'Finerrorpaymentrequesterror',
        'table': 'finerrorpaymentrequesterror',
        'primaryKey': 'finErrorPaymentRequestErrorID',

        'aliases': {
            'finErrorPaymentRequestErrorID': 'id',
            'finErrorQueueID': 'finErrorQueueId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Finerrorstatcorrection': {
        'name': 'Finerrorstatcorrection',
        'table': 'finerrorstatcorrection',
        'primaryKey': 'finErrorQueueID',

        'aliases': {
            'finErrorQueueID': 'id',
            'claimID': 'claimId',
            'subscriberID': 'subscriberId',
            'apTransactionID': 'apTransactionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Financeerrorqueue': {
        'name': 'Financeerrorqueue',
        'table': 'financeerrorqueue',
        'primaryKey': 'queueID',

        'aliases': {
            'queueID': 'id',
            'lockUserID': 'lockUserId',
            'memberID': 'memberId',
            'msaID': 'msaId',
            'arTransactionID': 'arTransactionId',
            'apTransactionID': 'apTransactionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'claimID': 'claimId',
            'subPayrollFrequencyID': 'subPayrollFrequencyId',
            'memGroupID': 'memGroupId',
            'memGroupPayrollID': 'memGroupPayrollId',
            'memGroupPayrollDateID': 'memGroupPayrollDateId'
        },

        'referenceMap': {
            'member': 'memberId',
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Finerrorqueue': {
        'name': 'Finerrorqueue',
        'table': 'finerrorqueue',
        'primaryKey': 'finErrorQueueID',

        'aliases': {
            'finErrorQueueID': 'id',
            'finErrorQueueChildID': 'finErrorQueueChildId',
            'lockUserID': 'lockUserId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Finerrorsystem': {
        'name': 'Finerrorsystem',
        'table': 'finerrorsystem',
        'primaryKey': 'finErrorQueueID',

        'aliases': {
            'finErrorQueueID': 'id',
            'apTransactionID': 'apTransactionId',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Finerrorpaymentresponse': {
        'name': 'Finerrorpaymentresponse',
        'table': 'finerrorpaymentresponse',
        'primaryKey': 'finErrorQueueID',

        'aliases': {
            'finErrorQueueID': 'id',
            'apTransactionID': 'apTransactionId',
            'clearinghouseClaimID': 'clearinghouseClaimId',
            'ledgerActivityLogID': 'ledgerActivityLogId',
            'bulkPaymentID': 'bulkPaymentId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Finerrortranstagging': {
        'name': 'Finerrortranstagging',
        'table': 'finerrortranstagging',
        'primaryKey': 'finErrorQueueID',

        'aliases': {
            'finErrorQueueID': 'id',
            'apTransactionDetailID': 'apTransactionDetailId',
            'apTransactionInterestID': 'apTransactionInterestId',
            'apTransactionSurchargeID': 'apTransactionSurchargeId',
            'claimID': 'claimId',
            'apTransactionID': 'apTransactionId',
            'finAttribSchedID': 'finAttribSchedId',
            'finAttribSchedSegmentID': 'finAttribSchedSegmentId',
            'finAttribSchedSegmentDefID': 'finAttribSchedSegmentDefId',
            'finAttribSchedVariableID': 'finAttribSchedVariableId',
            'finAttribSchedVariableDefID': 'finAttribSchedVariableDefId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fulfillcontent': {
        'name': 'Fulfillcontent',
        'table': 'fulfillcontent',
        'primaryKey': 'fulfillContentID',

        'aliases': {
            'fulfillContentID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fulfillevent': {
        'name': 'Fulfillevent',
        'table': 'fulfillevent',
        'primaryKey': 'fulfillEventID',

        'aliases': {
            'fulfillEventID': 'id',
            'externalCorrelationID': 'externalCorrelationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'parentExternalCorrelationID': 'parentExternalCorrelationId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fulfilleventidentifier': {
        'name': 'Fulfilleventidentifier',
        'table': 'fulfilleventidentifier',
        'primaryKey': 'fulfillEventIdentifierID',

        'aliases': {
            'fulfillEventIdentifierID': 'id',
            'fulfillEventID': 'fulfillEventId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fulfilleventtemplate': {
        'name': 'Fulfilleventtemplate',
        'table': 'fulfilleventtemplate',
        'primaryKey': 'fulfillEventTemplateID',

        'aliases': {
            'fulfillEventTemplateID': 'id',
            'fulfillTemplateID': 'fulfillTemplateId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fulfilleventtemplateoverride': {
        'name': 'Fulfilleventtemplateoverride',
        'table': 'fulfilleventtemplateoverride',
        'primaryKey': 'fulfillEventTemplateOverrideID',

        'aliases': {
            'fulfillEventTemplateOverrideID': 'id',
            'fulfillEventID': 'fulfillEventId',
            'fulfillTemplateID': 'fulfillTemplateId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fulfilleventtracking': {
        'name': 'Fulfilleventtracking',
        'table': 'fulfilleventtracking',
        'primaryKey': 'fulfillEventTrackingID',

        'aliases': {
            'fulfillEventTrackingID': 'id',
            'fulfillEventID': 'fulfillEventId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fulfillmassrequest': {
        'name': 'Fulfillmassrequest',
        'table': 'fulfillmassrequest',
        'primaryKey': 'fulfillMassRequestID',

        'aliases': {
            'fulfillMassRequestID': 'id',
            'fulfillTemplateID': 'fulfillTemplateId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fulfillmassrequestmailingloc': {
        'name': 'Fulfillmassrequestmailingloc',
        'table': 'fulfillmassrequestmailingloc',
        'primaryKey': 'fulfillMassRequestMailingLocID',

        'aliases': {
            'fulfillMassRequestMailingLocID': 'id',
            'fulfillMassRequestIdentifierID': 'fulfillMassRequestIdentifierId',
            'entityID': 'entityId',
            'entityAddID': 'entityAddId',
            'entityContactID': 'entityContactId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fulfillmassvariablecontent': {
        'name': 'Fulfillmassvariablecontent',
        'table': 'fulfillmassvariablecontent',
        'primaryKey': 'fulfillMassVariableContentID',

        'aliases': {
            'fulfillMassVariableContentID': 'id',
            'fulfillMassRequestID': 'fulfillMassRequestId',
            'variableContentID': 'variableContentId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Finerrorvoidpayment': {
        'name': 'Finerrorvoidpayment',
        'table': 'finerrorvoidpayment',
        'primaryKey': 'finErrorQueueID',

        'aliases': {
            'finErrorQueueID': 'id',
            'apTransactionID': 'apTransactionId',
            'apTransactionDetailID': 'apTransactionDetailId',
            'claimID': 'claimId',
            'subscriberID': 'subscriberId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fulfillmentclient': {
        'name': 'Fulfillmentclient',
        'table': 'fulfillmentclient',
        'primaryKey': 'clientAppID',

        'aliases': {
            'clientAppID': 'id',
            'clientID': 'clientId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fulfillrecipientidentifier': {
        'name': 'Fulfillrecipientidentifier',
        'table': 'fulfillrecipientidentifier',
        'primaryKey': 'fulfillRecipientIdentifierID',

        'aliases': {
            'fulfillRecipientIdentifierID': 'id',
            'fulfillRequestID': 'fulfillRequestId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fulfilltemplatedetail': {
        'name': 'Fulfilltemplatedetail',
        'table': 'fulfilltemplatedetail',
        'primaryKey': 'fulfillTemplateDetailID',

        'aliases': {
            'fulfillTemplateDetailID': 'id',
            'fulfillContentID': 'fulfillContentId',
            'fulfillTemplateID': 'fulfillTemplateId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fulfillrequest': {
        'name': 'Fulfillrequest',
        'table': 'fulfillrequest',
        'primaryKey': 'fulfillRequestID',

        'aliases': {
            'fulfillRequestID': 'id',
            'fulfillEventID': 'fulfillEventId',
            'fulfillTemplateID': 'fulfillTemplateId',
            'fulfillDocumentID': 'fulfillDocumentId',
            'languageCodeNISO': 'languageCodeNiso',
            'origFulfillRequestLogID': 'origFulfillRequestLogId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fulfillrequesttracking': {
        'name': 'Fulfillrequesttracking',
        'table': 'fulfillrequesttracking',
        'primaryKey': 'fulfillmentRequestTrackingID',

        'aliases': {
            'fulfillmentRequestTrackingID': 'id',
            'fulfillRequestID': 'fulfillRequestId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fulfilltemplate': {
        'name': 'Fulfilltemplate',
        'table': 'fulfilltemplate',
        'primaryKey': 'fulfillTemplateID',

        'aliases': {
            'fulfillTemplateID': 'id',
            'fulfillTemplateExternalID': 'fulfillTemplateExternalId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Finerrorpaymentrequest': {
        'name': 'Finerrorpaymentrequest',
        'table': 'finerrorpaymentrequest',
        'primaryKey': 'finErrorQueueID',

        'aliases': {
            'finErrorQueueID': 'id',
            'ledgerActivityLogID': 'ledgerActivityLogId',
            'apTransactionID': 'apTransactionId',
            'clearinghouseClaimID': 'clearinghouseClaimId',
            'claimID': 'claimId',
            'transID': 'transId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Finerrorcontracttagging': {
        'name': 'Finerrorcontracttagging',
        'table': 'finerrorcontracttagging',
        'primaryKey': 'finErrorQueueID',

        'aliases': {
            'finErrorQueueID': 'id',
            'memGroupID': 'memGroupId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupContractOptID': 'memGroupContractOptId',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'itemID': 'itemId',
            'memGroupContrPlanAttribSetID': 'memGroupContrPlanAttribSetId',
            'finAttribSchedID': 'finAttribSchedId',
            'finAttribSchedSegmentID': 'finAttribSchedSegmentId',
            'finAttribSchedSegmentDefID': 'finAttribSchedSegmentDefId',
            'finAttribSchedVariableID': 'finAttribSchedVariableId',
            'finAttribSchedVariableDefID': 'finAttribSchedVariableDefId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Finerrorattrib': {
        'name': 'Finerrorattrib',
        'table': 'finerrorattrib',
        'primaryKey': 'finErrorAttribID',

        'aliases': {
            'finErrorAttribID': 'id',
            'finErrorQueueID': 'finErrorQueueId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Finerrorapsurcharge': {
        'name': 'Finerrorapsurcharge',
        'table': 'finerrorapsurcharge',
        'primaryKey': 'finErrorQueueID',

        'aliases': {
            'finErrorQueueID': 'id',
            'apTransactionID': 'apTransactionId',
            'claimID': 'claimId',
            'surchargeSchedID': 'surchargeSchedId',
            'surchargeSchedRateID': 'surchargeSchedRateId',
            'apTransactionSurchargeID': 'apTransactionSurchargeId',
            'regEntityID': 'regEntityId',
            'regEntityGuardrailID': 'regEntityGuardrailId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fulfilltemplaterecipient': {
        'name': 'Fulfilltemplaterecipient',
        'table': 'fulfilltemplaterecipient',
        'primaryKey': 'fulfillTemplateRecipientID',

        'aliases': {
            'fulfillTemplateRecipientID': 'id',
            'fulfillTemplateID': 'fulfillTemplateId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fulfillrequestidentifier': {
        'name': 'Fulfillrequestidentifier',
        'table': 'fulfillrequestidentifier',
        'primaryKey': 'fulfillRequestIdentifierID',

        'aliases': {
            'fulfillRequestIdentifierID': 'id',
            'fulfillRequestID': 'fulfillRequestId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fulfillvariablecontent': {
        'name': 'Fulfillvariablecontent',
        'table': 'fulfillvariablecontent',
        'primaryKey': 'fulfillVariableContentID',

        'aliases': {
            'fulfillVariableContentID': 'id',
            'fulfillEventID': 'fulfillEventId',
            'variableContentID': 'variableContentId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fundpoolauditdetail': {
        'name': 'Fundpoolauditdetail',
        'table': 'fundpoolauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'fundID': 'fundId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fundpoolnote': {
        'name': 'Fundpoolnote',
        'table': 'fundpoolnote',
        'primaryKey': 'noteID',

        'aliases': {
            'fundID': 'id',
            'noteID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Generalclaimsetting': {
        'name': 'Generalclaimsetting',
        'table': 'generalclaimsettings',
        'primaryKey': 'settingID',

        'aliases': {
            'settingID': 'id',
            'promptPaySchedID': 'promptPaySchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Guardrailinsrulemaximumage': {
        'name': 'Guardrailinsrulemaximumage',
        'table': 'guardrailinsrulemaximumage',
        'primaryKey': 'guardrailInsRuleMaximumAgeID',

        'aliases': {
            'guardrailInsRuleMaximumAgeID': 'id',
            'guardrailScheduleID': 'guardrailScheduleId',
            'guardrailInsuringRuleID': 'guardrailInsuringRuleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'guardrailInsuringRule': 'guardrailInsuringRuleId'
        },

        'listReferences': {}
    },

    'Guardrailinsruleretro': {
        'name': 'Guardrailinsruleretro',
        'table': 'guardrailinsruleretro',
        'primaryKey': 'guardrailInsRuleRetroID',

        'aliases': {
            'guardrailInsRuleRetroID': 'id',
            'guardrailScheduleID': 'guardrailScheduleId',
            'guardrailInsuringRuleID': 'guardrailInsuringRuleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'guardrailInsuringRule': 'guardrailInsuringRuleId'
        },

        'listReferences': {}
    },

    'Fundpool': {
        'name': 'Fundpool',
        'table': 'fundpool',
        'primaryKey': 'fundID',

        'aliases': {
            'fundID': 'id',
            'apOverflowFundID': 'apOverflowFundId',
            'arOverflowFundID': 'arOverflowFundId',
            'fundingEntityID': 'fundingEntityId',
            'enableManualAPInd': 'enableManualApInd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Guardrailauditdetail': {
        'name': 'Guardrailauditdetail',
        'table': 'guardrailauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'guardrailScheduleID': 'guardrailScheduleId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Guardrailschedule': {
        'name': 'Guardrailschedule',
        'table': 'guardrailschedule',
        'primaryKey': 'guardrailScheduleID',

        'aliases': {
            'guardrailScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'entityID': 'entityId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fundtransfer': {
        'name': 'Fundtransfer',
        'table': 'fundtransfer',
        'primaryKey': 'fundTransferSeqNum',

        'aliases': {
            'fundID': 'id',
            'fundTransferSeqNum': 'id',
            'transferFundID': 'transferFundId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Fundpoolnotedetail': {
        'name': 'Fundpoolnotedetail',
        'table': 'fundpoolnotedetail',
        'primaryKey': 'noteDetailID',

        'aliases': {
            'fundID': 'fundId',
            'noteID': 'noteId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'noteDetailID': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Guardrailschedulenote': {
        'name': 'Guardrailschedulenote',
        'table': 'guardrailschedulenote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'guardrailScheduleID': 'guardrailScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Guardrailinsuringrule': {
        'name': 'Guardrailinsuringrule',
        'table': 'guardrailinsuringrule',
        'primaryKey': 'guardrailInsuringRuleID',

        'aliases': {
            'guardrailInsuringRuleID': 'id',
            'guardrailScheduleID': 'guardrailScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Guardrailinsrulenewborn': {
        'name': 'Guardrailinsrulenewborn',
        'table': 'guardrailinsrulenewborn',
        'primaryKey': 'guardrailInsRuleNewbornID',

        'aliases': {
            'guardrailInsRuleNewbornID': 'id',
            'guardrailScheduleID': 'guardrailScheduleId',
            'guardrailInsuringRuleID': 'guardrailInsuringRuleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'guardrailInsuringRule': 'guardrailInsuringRuleId'
        },

        'listReferences': {}
    },

    'Guardrailinsruletermination': {
        'name': 'Guardrailinsruletermination',
        'table': 'guardrailinsruletermination',
        'primaryKey': 'guardrailInsRuleTerminationID',

        'aliases': {
            'guardrailInsRuleTerminationID': 'id',
            'guardrailScheduleID': 'guardrailScheduleId',
            'guardrailInsuringRuleID': 'guardrailInsuringRuleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'guardrailInsuringRule': 'guardrailInsuringRuleId'
        },

        'listReferences': {}
    },

    'Guardrailinsrulewaitperiod': {
        'name': 'Guardrailinsrulewaitperiod',
        'table': 'guardrailinsrulewaitperiod',
        'primaryKey': 'guardrailInsRuleWaitPeriodID',

        'aliases': {
            'guardrailInsRuleWaitPeriodID': 'id',
            'guardrailScheduleID': 'guardrailScheduleId',
            'guardrailInsuringRuleID': 'guardrailInsuringRuleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'guardrailInsuringRule': 'guardrailInsuringRuleId'
        },

        'listReferences': {}
    },

    'Hcpcsprocdentfileuploaddetail': {
        'name': 'Hcpcsprocdentfileuploaddetail',
        'table': 'hcpcsprocdentfileuploaddetail',
        'primaryKey': 'hcpcsProcDentFileUploadDetailID',

        'aliases': {
            'hcpcsProcDentFileUploadDetailID': 'id',
            'hcpcsProcedureFileUploadHeaderID': 'hcpcsProcedureFileUploadHeaderId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Hcpcsprocedureauditdetail': {
        'name': 'Hcpcsprocedureauditdetail',
        'table': 'hcpcsprocedureauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'hcpcsProcedureID': 'hcpcsProcedureId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Healthcodeemplstatus': {
        'name': 'Healthcodeemplstatus',
        'table': 'healthcodeemplstatus',
        'primaryKey': 'employStatusCode',

        'aliases': {
            'msaID': 'id',
            'benefitCode': 'id',
            'healthCodeSeqNum': 'id',
            'employStatusCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Guardrailschedulevalidation': {
        'name': 'Guardrailschedulevalidation',
        'table': 'guardrailschedulevalidation',
        'primaryKey': 'guardrailScheduleValidationID',

        'aliases': {
            'guardrailScheduleValidationID': 'id',
            'guardrailScheduleID': 'guardrailScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Healthcoderule': {
        'name': 'Healthcoderule',
        'table': 'healthcoderules',
        'primaryKey': 'healthCodeRulesID',

        'aliases': {
            'healthCodeRulesID': 'id',
            'msaVersionID': 'msaVersionId',
            'msaID': 'msaId',
            'ageFromDT': 'ageFromDt',
            'ageThruDT': 'ageThruDt',
            'maxOccurDT': 'maxOccurDt',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'allowFutureDOSInd': 'allowFutureDosInd',
            'futureDOSType': 'futureDosType',
            'futureDOSDays': 'futureDosDays',
            'futureDOSMonths': 'futureDosMonths',
            'reqStartDOS': 'reqStartDos'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Hcpcsprocedure': {
        'name': 'Hcpcsprocedure',
        'table': 'hcpcsprocedure',
        'primaryKey': 'hcpcsProcedureID',

        'aliases': {
            'hcpcsProcedureID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Icd10Diagnosisfileuploaddetail': {
        'name': 'Icd10Diagnosisfileuploaddetail',
        'table': 'icd10diagnosisfileuploaddetail',
        'primaryKey': 'icd10DiagnosisFileUploadDetailID',

        'aliases': {
            'icd10DiagnosisFileUploadDetailID': 'id',
            'icd10FileUploadHeaderID': 'icd10FileUploadHeaderId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Hcpcsprocedurefileuploaddetail': {
        'name': 'Hcpcsprocedurefileuploaddetail',
        'table': 'hcpcsprocedurefileuploaddetail',
        'primaryKey': 'hcpcsProcedureFileUploadDetailID',

        'aliases': {
            'hcpcsProcedureFileUploadDetailID': 'id',
            'hcpcsProcedureFileUploadHeaderID': 'hcpcsProcedureFileUploadHeaderId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Holdcode': {
        'name': 'Holdcode',
        'table': 'holdcode',
        'primaryKey': 'holdCode',

        'aliases': {
            'holdCode': 'id',
            'providerHCInd': 'providerHcInd',
            'memberHCInd': 'memberHcInd',
            'memGroupHCInd': 'memGroupHcInd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'holdMedcoRTBE': 'holdMedcoRtbe',
            'holdCAC': 'holdCac',
            'providerOrgHCInd': 'providerOrgHcInd',
            'contractHCInd': 'contractHcInd',
            'scheduleHCInd': 'scheduleHcInd',
            'holdFulfillmentIDCardsInd': 'holdFulfillmentIdCardsInd',
            'memGroupContractPlanOptHCInd': 'memGroupContractPlanOptHcInd',
            'systemHCInd': 'systemHcInd'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Icd10Diagnosis': {
        'name': 'Icd10Diagnosis',
        'table': 'icd10diagnosis',
        'primaryKey': 'icd10DiagnosisID',

        'aliases': {
            'icd10DiagnosisID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Icd10Fileuploadheader': {
        'name': 'Icd10Fileuploadheader',
        'table': 'icd10fileuploadheader',
        'primaryKey': 'icd10FileUploadHeaderID',

        'aliases': {
            'icd10FileUploadHeaderID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Hcpcsprocedurefileuploadheader': {
        'name': 'Hcpcsprocedurefileuploadheader',
        'table': 'hcpcsprocedurefileuploadheader',
        'primaryKey': 'hcpcsProcedureFileUploadHeaderID',

        'aliases': {
            'hcpcsProcedureFileUploadHeaderID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Incent': {
        'name': 'Incent',
        'table': 'incent',
        'primaryKey': 'incentID',

        'aliases': {
            'incentID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Icd10Diagnosisauditdetail': {
        'name': 'Icd10Diagnosisauditdetail',
        'table': 'icd10diagnosisauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'icd10DiagnosisID': 'icd10DiagnosisId'
        },

        'referenceMap': {
            'icd10Diagnosis': 'icd10DiagnosisId'
        },

        'listReferences': {}
    },

    'Icd10Procedure': {
        'name': 'Icd10Procedure',
        'table': 'icd10procedure',
        'primaryKey': 'icd10ProcedureID',

        'aliases': {
            'icd10ProcedureID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Homepage': {
        'name': 'Homepage',
        'table': 'homepage',
        'primaryKey': 'homePage',

        'aliases': {
            'homePage': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Icd9': {
        'name': 'Icd9',
        'table': 'icd9',
        'primaryKey': 'diagnosisCode',

        'aliases': {
            'diagnosisCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Holdclaimap': {
        'name': 'Holdclaimap',
        'table': 'holdclaimap',
        'primaryKey': 'sourceFileType',

        'aliases': {
            'sourceFileType': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Industryclassmodcode': {
        'name': 'Industryclassmodcode',
        'table': 'industryclassmodcode',
        'primaryKey': 'industryClassModCodeID',

        'aliases': {
            'industryClassModCodeID': 'id',
            'industryClassModDetailID': 'industryClassModDetailId',
            'industryClassModSchedID': 'industryClassModSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Integrationtransaction': {
        'name': 'Integrationtransaction',
        'table': 'integrationtransaction',
        'primaryKey': 'transID',

        'aliases': {
            'transID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Interestaccountappl': {
        'name': 'Interestaccountappl',
        'table': 'interestaccountappl',
        'primaryKey': 'msaType',

        'aliases': {
            'state': 'id',
            'msaType': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Industryclassmodsched': {
        'name': 'Industryclassmodsched',
        'table': 'industryclassmodsched',
        'primaryKey': 'industryClassModSchedID',

        'aliases': {
            'industryClassModSchedID': 'id',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Interestscheddetail': {
        'name': 'Interestscheddetail',
        'table': 'interestscheddetail',
        'primaryKey': 'interestSchedDetailID',

        'aliases': {
            'interestSchedDetailID': 'id',
            'interestSchedID': 'interestSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Industryclassauditdetail': {
        'name': 'Industryclassauditdetail',
        'table': 'industryclassauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'industryClassModSchedID': 'industryClassModSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Interestpenaltysetting': {
        'name': 'Interestpenaltysetting',
        'table': 'interestpenaltysettings',
        'primaryKey': 'state',

        'aliases': {
            'state': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Icd10Procedurefileuploaddetail': {
        'name': 'Icd10Procedurefileuploaddetail',
        'table': 'icd10procedurefileuploaddetail',
        'primaryKey': 'icd10ProcedureFileUploadDetailID',

        'aliases': {
            'icd10ProcedureFileUploadDetailID': 'id',
            'icd10FileUploadHeaderID': 'icd10FileUploadHeaderId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Icd10Procedureauditdetail': {
        'name': 'Icd10Procedureauditdetail',
        'table': 'icd10procedureauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'icd10ProcedureID': 'icd10ProcedureId'
        },

        'referenceMap': {
            'icd10Procedure': 'icd10ProcedureId'
        },

        'listReferences': {}
    },

    'Installationinsuringrule': {
        'name': 'Installationinsuringrule',
        'table': 'installationinsuringrule',
        'primaryKey': 'installationInsuringRuleID',

        'aliases': {
            'installationInsuringRuleID': 'id',
            'guardrailScheduleID': 'guardrailScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Instclaimsetting': {
        'name': 'Instclaimsetting',
        'table': 'instclaimsettings',
        'primaryKey': 'settingID',

        'aliases': {
            'settingID': 'id',
            'instCOBPaymentsInd': 'instCobPaymentsInd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Interestschedule': {
        'name': 'Interestschedule',
        'table': 'interestschedule',
        'primaryKey': 'interestSchedID',

        'aliases': {
            'interestSchedID': 'id',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Industryclassnote': {
        'name': 'Industryclassnote',
        'table': 'industryclassnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'industryClassModSchedID': 'industryClassModSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Interestschednote': {
        'name': 'Interestschednote',
        'table': 'interestschednote',
        'primaryKey': 'noteID',

        'aliases': {
            'interestSchedID': 'id',
            'noteID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Invoiceamtvaluecode': {
        'name': 'Invoiceamtvaluecode',
        'table': 'invoiceamtvaluecode',
        'primaryKey': 'valueCode',

        'aliases': {
            'valueCode': 'id',
            'pricingSettingID': 'pricingSettingId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ipservicecomp': {
        'name': 'Ipservicecomp',
        'table': 'ipservicecomp',
        'primaryKey': 'ipServiceCompVersionID',

        'aliases': {
            'ipServiceCompID': 'ipServiceCompId',
            'ownerGroupID': 'ownerGroupId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'ipServiceCompVersionID': 'id',
            'pricingExternalID': 'pricingExternalId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Internaladjustreasoncode': {
        'name': 'Internaladjustreasoncode',
        'table': 'internaladjustreasoncode',
        'primaryKey': 'internalAdjustReasonCode',

        'aliases': {
            'internalAdjustReasonCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Interestschedauditdetail': {
        'name': 'Interestschedauditdetail',
        'table': 'interestschedauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'interestSchedID': 'interestSchedId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ipservicecompauditdetail': {
        'name': 'Ipservicecompauditdetail',
        'table': 'ipservicecompauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'ipServiceCompVersionID': 'ipServiceCompVersionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ipservicecompdrg': {
        'name': 'Ipservicecompdrg',
        'table': 'ipservicecompdrg',
        'primaryKey': 'ipServiceCompDrgID',

        'aliases': {
            'ipServiceCompDrgID': 'id',
            'ipServiceCompVersionID': 'ipServiceCompVersionId',
            'passThruCompID': 'passThruCompId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Interestscheddetailday': {
        'name': 'Interestscheddetailday',
        'table': 'interestscheddetaildays',
        'primaryKey': 'interestSchedDetailDaysID',

        'aliases': {
            'interestSchedDetailDaysID': 'id',
            'interestSchedDetailID': 'interestSchedDetailId',
            'interestSchedID': 'interestSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Invalidclaimedi': {
        'name': 'Invalidclaimedi',
        'table': 'invalidclaimedi',
        'primaryKey': 'bigSequenceNum',

        'aliases': {
            'bigSequenceNum': 'id',
            'extClaimID': 'extClaimId',
            'subscriberSSN': 'subscriberSsn',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Internaladjustrsncdauditdetail': {
        'name': 'Internaladjustrsncdauditdetail',
        'table': 'internaladjustrsncdauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Industryclassmoddetail': {
        'name': 'Industryclassmoddetail',
        'table': 'industryclassmoddetail',
        'primaryKey': 'industryClassModDetailID',

        'aliases': {
            'industryClassModDetailID': 'id',
            'industryClassModSchedID': 'industryClassModSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Iptransactionauditdetail': {
        'name': 'Iptransactionauditdetail',
        'table': 'iptransactionauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'ipTransactionID': 'ipTransactionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Investigationdeviceexempt': {
        'name': 'Investigationdeviceexempt',
        'table': 'investigationdeviceexempt',
        'primaryKey': 'investigationDeviceExemptID',

        'aliases': {
            'investigationDeviceExemptID': 'id',
            'claimID': 'claimId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Iptransactiondetail': {
        'name': 'Iptransactiondetail',
        'table': 'iptransactiondetail',
        'primaryKey': 'ipTransSeqNumber',

        'aliases': {
            'ipTransactionID': 'id',
            'ipTransSeqNumber': 'id',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'acctBalSetID': 'acctBalSetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'apTransactionID': 'apTransactionId',
            'apTransactionDetailID': 'apTransactionDetailId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ipservicecompdrgcustom': {
        'name': 'Ipservicecompdrgcustom',
        'table': 'ipservicecompdrgcustom',
        'primaryKey': 'ipServiceCompDrgCustomID',

        'aliases': {
            'ipServiceCompDrgCustomID': 'id',
            'ipServiceCompDrgID': 'ipServiceCompDrgId',
            'ipServiceCompVersionID': 'ipServiceCompVersionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'ipServiceCompDrg': 'ipServiceCompDrgId'
        },

        'listReferences': {}
    },

    'Ipservicecompdetailpricing': {
        'name': 'Ipservicecompdetailpricing',
        'table': 'ipservicecompdetailpricing',
        'primaryKey': 'ipServiceCompDetailPricingID',

        'aliases': {
            'ipServiceCompDetailPricingID': 'id',
            'ipServiceCompDetailID': 'ipServiceCompDetailId',
            'ipServiceCompVersionID': 'ipServiceCompVersionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ipservicecompnote': {
        'name': 'Ipservicecompnote',
        'table': 'ipservicecompnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'ipServiceCompVersionID': 'ipServiceCompVersionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ipservicecompdetail': {
        'name': 'Ipservicecompdetail',
        'table': 'ipservicecompdetail',
        'primaryKey': 'ipServiceCompDetailID',

        'aliases': {
            'ipServiceCompDetailID': 'id',
            'ipServiceCompVersionID': 'ipServiceCompVersionId',
            'passThruCompID': 'passThruCompId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ipservicecomphold': {
        'name': 'Ipservicecomphold',
        'table': 'ipservicecomphold',
        'primaryKey': 'ipServiceCompHoldID',

        'aliases': {
            'ipServiceCompHoldID': 'id',
            'ipServiceCompVersionID': 'ipServiceCompVersionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Liabilitycarrier': {
        'name': 'Liabilitycarrier',
        'table': 'liabilitycarrier',
        'primaryKey': 'liabCarrierID',

        'aliases': {
            'liabCarrierID': 'id',
            'businessURL': 'businessUrl',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Iptransactionnotedetail': {
        'name': 'Iptransactionnotedetail',
        'table': 'iptransactionnotedetail',
        'primaryKey': 'noteDetailID',

        'aliases': {
            'ipTransactionID': 'id',
            'noteID': 'id',
            'noteDetailID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Iptransactionnote': {
        'name': 'Iptransactionnote',
        'table': 'iptransactionnote',
        'primaryKey': 'noteID',

        'aliases': {
            'ipTransactionID': 'id',
            'noteID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Licensingentitypermit': {
        'name': 'Licensingentitypermit',
        'table': 'licensingentitypermit',
        'primaryKey': 'licensingEntityPermitID',

        'aliases': {
            'licensingEntityPermitID': 'id',
            'licensingEntityID': 'licensingEntityId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Lobmodifiercompassign': {
        'name': 'Lobmodifiercompassign',
        'table': 'lobmodifiercompassign',
        'primaryKey': 'lobModifierCompAssignID',

        'aliases': {
            'lobModifierCompAssignID': 'id',
            'modifierCompVersionID': 'modifierCompVersionId',
            'lineOfBusinessID': 'lineOfBusinessId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'IrmEvnt': {
        'name': 'IrmEvnt',
        'table': 'irm_evnt',
        'primaryKey': 'irmEventCode',

        'aliases': {
            'irmEventCode': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Licensingentity': {
        'name': 'Licensingentity',
        'table': 'licensingentity',
        'primaryKey': 'licensingEntityID',

        'aliases': {
            'licensingEntityID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Lobmodassignauditdetail': {
        'name': 'Lobmodassignauditdetail',
        'table': 'lobmodassignauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'lobModifierCompAssignID': 'lobModifierCompAssignId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Joblastrundate': {
        'name': 'Joblastrundate',
        'table': 'joblastrundate',
        'primaryKey': 'sysJobID',

        'aliases': {
            'sysJobID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Lobmodifiercompassignhx': {
        'name': 'Lobmodifiercompassignhx',
        'table': 'lobmodifiercompassignhx',
        'primaryKey': 'lobModifierCompAssignHxID',

        'aliases': {
            'lobModifierCompAssignHxID': 'id',
            'lobModifierCompAssignID': 'lobModifierCompAssignId',
            'modifierCompVersionID': 'modifierCompVersionId',
            'lineOfBusinessID': 'lineOfBusinessId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Locality': {
        'name': 'Locality',
        'table': 'localities',
        'primaryKey': 'locality',

        'aliases': {
            'carrierNum': 'id',
            'locality': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Lineofbusinessauditdetail': {
        'name': 'Lineofbusinessauditdetail',
        'table': 'lineofbusinessauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'lineOfBusinessID': 'lineOfBusinessId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Iptransactionheader': {
        'name': 'Iptransactionheader',
        'table': 'iptransactionheader',
        'primaryKey': 'ipTransactionID',

        'aliases': {
            'ipTransactionID': 'id',
            'apTransactionID': 'apTransactionId',
            'claimID': 'claimId',
            'memberID': 'memberId',
            'msaID': 'msaId',
            'memberAccountID': 'memberAccountId',
            'payerEntityID': 'payerEntityId',
            'payerBankID': 'payerBankId',
            'payeeEntityID': 'payeeEntityId',
            'paymentBatchID': 'paymentBatchId',
            'origIPTransactionID': 'origIpTransactionId',
            'ipReissueTransID': 'ipReissueTransId',
            'originalEftTransID': 'originalEftTransId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'subsAffiliationID': 'subsAffiliationId'
        },

        'referenceMap': {
            'member': 'memberId',
            'msa': 'msaId',
            'payerBank': 'payerBankId'
        },

        'listReferences': {}
    },

    'Medpolicyengineresponse': {
        'name': 'Medpolicyengineresponse',
        'table': 'medpolicyengineresponse',
        'primaryKey': 'medPolicyEngineResponseID',

        'aliases': {
            'medPolicyEngineResponseID': 'id',
            'medPolicyRuleVersionID': 'medPolicyRuleVersionId',
            'medPolicySchedID': 'medPolicySchedId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Medpolicyenginetierresponse': {
        'name': 'Medpolicyenginetierresponse',
        'table': 'medpolicyenginetierresponse',
        'primaryKey': 'medPolicyEngineTierResponseID',

        'aliases': {
            'medPolicyEngineTierResponseID': 'id',
            'medPolicyEngineResponseID': 'medPolicyEngineResponseId',
            'medPolicyRuleTierID': 'medPolicyRuleTierId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Lineofbusiness': {
        'name': 'Lineofbusiness',
        'table': 'lineofbusiness',
        'primaryKey': 'lineOfBusinessID',

        'aliases': {
            'lineOfBusinessID': 'id',
            'parentID': 'parentId',
            'alphaParentID': 'alphaParentId',
            'natlProviderID': 'natlProviderId',
            'externalLOBID': 'externalLobid',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'natlProvider': 'natlProviderId'
        },

        'listReferences': {}
    },

    'Medpolicyruleappliedhistory': {
        'name': 'Medpolicyruleappliedhistory',
        'table': 'medpolicyruleappliedhistory',
        'primaryKey': 'medPolicyRuleAppliedHistoryID',

        'aliases': {
            'medPolicyRuleAppliedHistoryID': 'id',
            'claimID': 'claimId',
            'medPolicyRuleVersionID': 'medPolicyRuleVersionId',
            'medPolicyRuleTierID': 'medPolicyRuleTierId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Licensingentityauditdetail': {
        'name': 'Licensingentityauditdetail',
        'table': 'licensingentityauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'licensingEntityID': 'licensingEntityId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Medpolicyrule': {
        'name': 'Medpolicyrule',
        'table': 'medpolicyrule',
        'primaryKey': 'medPolicyRuleVersionID',

        'aliases': {
            'medPolicyRuleVersionID': 'id',
            'medPolicyRuleID': 'medPolicyRuleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'medPolicyRule': 'medPolicyRuleId'
        },

        'listReferences': {}
    },

    'Medpolicyrulebenefit': {
        'name': 'Medpolicyrulebenefit',
        'table': 'medpolicyrulebenefit',
        'primaryKey': 'medPolicyRuleBenefitID',

        'aliases': {
            'medPolicyRuleBenefitID': 'id',
            'medPolicyRuleVersionID': 'medPolicyRuleVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Medpolicyrulerse': {
        'name': 'Medpolicyrulerse',
        'table': 'medpolicyrulerse',
        'primaryKey': 'medPolicyRuleRseID',

        'aliases': {
            'medPolicyRuleRseID': 'id',
            'medPolicyRuleVersionID': 'medPolicyRuleVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Medpolicyrulemodifier': {
        'name': 'Medpolicyrulemodifier',
        'table': 'medpolicyrulemodifier',
        'primaryKey': 'medPolicyRuleModifierID',

        'aliases': {
            'medPolicyRuleModifierID': 'id',
            'medPolicyRuleVersionID': 'medPolicyRuleVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Medpolicyruleauditdetail': {
        'name': 'Medpolicyruleauditdetail',
        'table': 'medpolicyruleauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'medPolicyRuleVersionID': 'medPolicyRuleVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Medpolicyrulerev': {
        'name': 'Medpolicyrulerev',
        'table': 'medpolicyrulerev',
        'primaryKey': 'medPolicyRuleRevID',

        'aliases': {
            'medPolicyRuleRevID': 'id',
            'medPolicyRuleVersionID': 'medPolicyRuleVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Medpolicyrulediag': {
        'name': 'Medpolicyrulediag',
        'table': 'medpolicyrulediag',
        'primaryKey': 'medPolicyRuleDiagID',

        'aliases': {
            'medPolicyRuleDiagID': 'id',
            'medPolicyRuleVersionID': 'medPolicyRuleVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Medpolicyrulenote': {
        'name': 'Medpolicyrulenote',
        'table': 'medpolicyrulenote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'medPolicyRuleVersionID': 'medPolicyRuleVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Medpolicysched': {
        'name': 'Medpolicysched',
        'table': 'medpolicysched',
        'primaryKey': 'medPolicySchedID',

        'aliases': {
            'medPolicySchedID': 'id',
            'externalMedPolicySchedID': 'externalMedPolicySchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Logo': {
        'name': 'Logo',
        'table': 'logo',
        'primaryKey': 'logoID',

        'aliases': {
            'logoID': 'id',
            'externalLogoID': 'externalLogoId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'externalLogo': 'externalLogoId'
        },

        'listReferences': {}
    },

    'Medpolicyruleancillary': {
        'name': 'Medpolicyruleancillary',
        'table': 'medpolicyruleancillary',
        'primaryKey': 'medPolicyRuleAncillaryID',

        'aliases': {
            'medPolicyRuleAncillaryID': 'id',
            'medPolicyRuleVersionID': 'medPolicyRuleVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Medpolicyschedtimeline': {
        'name': 'Medpolicyschedtimeline',
        'table': 'medpolicyschedtimeline',
        'primaryKey': 'medPolicySchedTimelineID',

        'aliases': {
            'medPolicySchedTimelineID': 'id',
            'medPolicySchedID': 'medPolicySchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Medpolicyrulevalidation': {
        'name': 'Medpolicyrulevalidation',
        'table': 'medpolicyrulevalidation',
        'primaryKey': 'medPolicyRuleValidationID',

        'aliases': {
            'medPolicyRuleValidationID': 'id',
            'medPolicyRuleVersionID': 'medPolicyRuleVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Medpolicysetauditdetail': {
        'name': 'Medpolicysetauditdetail',
        'table': 'medpolicysetauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'medPolicySetID': 'medPolicySetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Medpolicyset': {
        'name': 'Medpolicyset',
        'table': 'medpolicyset',
        'primaryKey': 'medPolicySetID',

        'aliases': {
            'medPolicySetID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Medpolicyschedauditdetail': {
        'name': 'Medpolicyschedauditdetail',
        'table': 'medpolicyschedauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'medPolicySchedID': 'medPolicySchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Medpolicyruleproc': {
        'name': 'Medpolicyruleproc',
        'table': 'medpolicyruleproc',
        'primaryKey': 'medPolicyRuleProcID',

        'aliases': {
            'medPolicyRuleProcID': 'id',
            'medPolicyRuleVersionID': 'medPolicyRuleVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Medpolicyruletaxonomy': {
        'name': 'Medpolicyruletaxonomy',
        'table': 'medpolicyruletaxonomy',
        'primaryKey': 'medPolicyRuleTaxonomyID',

        'aliases': {
            'medPolicyRuleTaxonomyID': 'id',
            'medPolicyRuleVersionID': 'medPolicyRuleVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Medpolicysettimeline': {
        'name': 'Medpolicysettimeline',
        'table': 'medpolicysettimeline',
        'primaryKey': 'medPolicySetTimelineID',

        'aliases': {
            'medPolicySetTimelineID': 'id',
            'medPolicySetID': 'medPolicySetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Medpolicysetnote': {
        'name': 'Medpolicysetnote',
        'table': 'medpolicysetnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'medPolicySetID': 'medPolicySetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Medpolicyschedtimelinerule': {
        'name': 'Medpolicyschedtimelinerule',
        'table': 'medpolicyschedtimelinerule',
        'primaryKey': 'medPolicySchedTimelineRuleID',

        'aliases': {
            'medPolicySchedTimelineRuleID': 'id',
            'medPolicySchedID': 'medPolicySchedId',
            'medPolicySchedTimelineID': 'medPolicySchedTimelineId',
            'medPolicyRuleID': 'medPolicyRuleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'medPolicyRule': 'medPolicyRuleId'
        },

        'listReferences': {}
    },

    'Medpolicysettimelinesched': {
        'name': 'Medpolicysettimelinesched',
        'table': 'medpolicysettimelinesched',
        'primaryKey': 'medPolicySetTimelineSchedID',

        'aliases': {
            'medPolicySetTimelineSchedID': 'id',
            'medPolicySetID': 'medPolicySetId',
            'medPolicySetTimelineID': 'medPolicySetTimelineId',
            'medPolicySchedID': 'medPolicySchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Medpolicyschednotifdef': {
        'name': 'Medpolicyschednotifdef',
        'table': 'medpolicyschednotifdef',
        'primaryKey': 'medPolicySchedNotifDefID',

        'aliases': {
            'medPolicySchedNotifDefID': 'id',
            'medPolicySchedID': 'medPolicySchedId',
            'medPolicySchedTimelineID': 'medPolicySchedTimelineId',
            'lateThresholdLCD': 'lateThresholdLcd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memacctacctbalhxxref': {
        'name': 'Memacctacctbalhxxref',
        'table': 'memacctacctbalhxxref',
        'primaryKey': 'hxSequenceNum',

        'aliases': {
            'memberID': 'id',
            'memberAccountID': 'id',
            'acctBalSetID': 'id',
            'acctBalSeqNum': 'id',
            'hxSequenceNum': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Medpolicyschednote': {
        'name': 'Medpolicyschednote',
        'table': 'medpolicyschednote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'medPolicySchedID': 'medPolicySchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Medpolicyruletier': {
        'name': 'Medpolicyruletier',
        'table': 'medpolicyruletier',
        'primaryKey': 'medPolicyRuleTierID',

        'aliases': {
            'medPolicyRuleTierID': 'id',
            'medPolicyRuleVersionID': 'medPolicyRuleVersionId',
            'ageLimitFromDT': 'ageLimitFromDt',
            'ageLimitThruDT': 'ageLimitThruDt',
            'ageLimitFromLCD': 'ageLimitFromLcd',
            'ageLimitThruLCD': 'ageLimitThruLcd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memacctmembership': {
        'name': 'Memacctmembership',
        'table': 'memacctmembership',
        'primaryKey': 'memAcctMembershipID',

        'aliases': {
            'memAcctMembershipID': 'id',
            'memAcctRunID': 'memAcctRunId',
            'memAcctCustomerPurchaseDetailID': 'memAcctCustomerPurchaseDetailId',
            'memAcctCustomerPurchaseItemID': 'memAcctCustomerPurchaseItemId',
            'invalidationRunID': 'invalidationRunId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Member': {
        'name': 'Member',
        'table': 'member',
        'primaryKey': 'memberID',

        'aliases': {
            'memberID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memacctcustomerpurchasedetail': {
        'name': 'Memacctcustomerpurchasedetail',
        'table': 'memacctcustomerpurchasedetail',
        'primaryKey': 'memAcctCustomerPurchaseDetailID',

        'aliases': {
            'memAcctCustomerPurchaseDetailID': 'id',
            'memAcctRunID': 'memAcctRunId',
            'generalLedgerIDBDate': 'generalLedgerIdbDate',
            'invalidationRunID': 'invalidationRunId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memacctcustomerpurchaseitem': {
        'name': 'Memacctcustomerpurchaseitem',
        'table': 'memacctcustomerpurchaseitem',
        'primaryKey': 'memAcctCustomerPurchaseItemID',

        'aliases': {
            'memAcctCustomerPurchaseItemID': 'id',
            'memAcctRunID': 'memAcctRunId',
            'memAcctCustomerPurchaseDetailID': 'memAcctCustomerPurchaseDetailId',
            'generalLedgerCustomerATNEIdentifier': 'generalLedgerCustomerAtneIdentifier',
            'invalidationRunID': 'invalidationRunId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memberaccountorder': {
        'name': 'Memberaccountorder',
        'table': 'memberaccountorder',
        'primaryKey': 'memberAccountOrderID',

        'aliases': {
            'memberAccountOrderID': 'id',
            'memberAccountSettingID': 'memberAccountSettingId',
            'memberID': 'memberId',
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId',
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Memberaccounthold': {
        'name': 'Memberaccounthold',
        'table': 'memberaccounthold',
        'primaryKey': 'memberAccountHoldID',

        'aliases': {
            'memberAccountHoldID': 'id',
            'memberAccountID': 'memberAccountId',
            'memberID': 'memberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'holdCAC': 'holdCac'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberaccount': {
        'name': 'Memberaccount',
        'table': 'memberaccount',
        'primaryKey': 'memberAccountID',

        'aliases': {
            'memberAccountID': 'id',
            'memberID': 'memberId',
            'msaID': 'msaId',
            'subscriberID': 'subscriberId',
            'memGroupID': 'memGroupId',
            'subsAffiliationID': 'subsAffiliationId',
            'bankID': 'bankId',
            'controlPlanID': 'controlPlanId',
            'memberBenefitID': 'memberBenefitId',
            'finPolicyID': 'finPolicyId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'acctBalSetID': 'acctBalSetId',
            'memGroupContractID': 'memGroupContractId',
            'parentSubsAffiliationID': 'parentSubsAffiliationId'
        },

        'referenceMap': {
            'member': 'memberId',
            'msa': 'msaId',
            'bank': 'bankId'
        },

        'listReferences': {}
    },

    'Memberaccountsetting': {
        'name': 'Memberaccountsetting',
        'table': 'memberaccountsetting',
        'primaryKey': 'memberAccountSettingID',

        'aliases': {
            'memberAccountSettingID': 'id',
            'memberID': 'memberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memacctrun': {
        'name': 'Memacctrun',
        'table': 'memacctrun',
        'primaryKey': 'memAcctRunID',

        'aliases': {
            'memAcctRunID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memberaccounthx': {
        'name': 'Memberaccounthx',
        'table': 'memberaccounthx',
        'primaryKey': 'memberAccountHxID',

        'aliases': {
            'memberAccountHxID': 'id',
            'memberAccountID': 'memberAccountId',
            'memberID': 'memberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberacctmaxhx': {
        'name': 'Memberacctmaxhx',
        'table': 'memberacctmaxhx',
        'primaryKey': 'memberAcctMaxHxID',

        'aliases': {
            'memberAcctMaxHxID': 'id',
            'memberAcctMaxID': 'memberAcctMaxId',
            'memberID': 'memberId',
            'msaID': 'msaId',
            'famMemberID': 'famMemberId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId',
            'msa': 'msaId',
            'famMember': 'famMemberId'
        },

        'listReferences': {}
    },

    'Memberaddressdiag': {
        'name': 'Memberaddressdiag',
        'table': 'memberaddressdiag',
        'primaryKey': 'memberAddressDiagID',

        'aliases': {
            'memberAddressDiagID': 'id',
            'memberAddressID': 'memberAddressId',
            'memberID': 'memberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberacctmax': {
        'name': 'Memberacctmax',
        'table': 'memberacctmax',
        'primaryKey': 'memberAcctMaxID',

        'aliases': {
            'memberAcctMaxID': 'id',
            'memberID': 'memberId',
            'msaID': 'msaId',
            'famMemberID': 'famMemberId',
            'maximumID': 'maximumId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId',
            'msa': 'msaId',
            'famMember': 'famMemberId'
        },

        'listReferences': {}
    },

    'Memberaddress': {
        'name': 'Memberaddress',
        'table': 'memberaddress',
        'primaryKey': 'memberAddressID',

        'aliases': {
            'memberAddressID': 'id',
            'memberID': 'memberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'countyFIPS': 'countyFips'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberattribute': {
        'name': 'Memberattribute',
        'table': 'memberattribute',
        'primaryKey': 'memberAttributeID',

        'aliases': {
            'memberAttributeID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memberaddressattn': {
        'name': 'Memberaddressattn',
        'table': 'memberaddressattn',
        'primaryKey': 'memberAddressAttnID',

        'aliases': {
            'memberAddressAttnID': 'id',
            'memberAddressID': 'memberAddressId',
            'memberID': 'memberId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberacctpayroll': {
        'name': 'Memberacctpayroll',
        'table': 'memberacctpayroll',
        'primaryKey': 'memberAcctPayrollID',

        'aliases': {
            'memberAcctPayrollID': 'id',
            'memberID': 'memberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'subPayrollFrequencyID': 'subPayrollFrequencyId',
            'msaID': 'msaId'
        },

        'referenceMap': {
            'member': 'memberId',
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Memberaddressprov': {
        'name': 'Memberaddressprov',
        'table': 'memberaddressprov',
        'primaryKey': 'memberAddressProvID',

        'aliases': {
            'memberAddressProvID': 'id',
            'memberAddressID': 'memberAddressId',
            'memberID': 'memberId',
            'providerID': 'providerId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId',
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Memberbenefit': {
        'name': 'Memberbenefit',
        'table': 'memberbenefit',
        'primaryKey': 'memberBenefitID',

        'aliases': {
            'memberBenefitID': 'id',
            'memberID': 'memberId',
            'planID': 'planId',
            'carrierID': 'carrierId',
            'subscriberID': 'subscriberId',
            'memGroupID': 'memGroupId',
            'subsAffiliationID': 'subsAffiliationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'networkScheduleID': 'networkScheduleId',
            'lineOfBusinessID': 'lineOfBusinessId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupContractOptID': 'memGroupContractOptId',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'productID': 'productId',
            'controlPlanID': 'controlPlanId',
            'benefitBundleID': 'benefitBundleId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'carrierLineOfBusinessID': 'carrierLineOfBusinessId',
            'carrierLOBPlanBrandingEntity': 'carrierLobPlanBrandingEntity',
            'standardCompID': 'standardCompId',
            'oonCarrierID': 'oonCarrierId',
            'parentSubsAffiliationID': 'parentSubsAffiliationId',
            'oonCarrierLineOfBusinessID': 'oonCarrierLineOfBusinessId',
            'oonLineOfBusinessID': 'oonLineOfBusinessId',
            'memGroupPopulationID': 'memGroupPopulationId'
        },

        'referenceMap': {
            'member': 'memberId',
            'carrier': 'carrierId',
            'product': 'productId',
            'oonCarrier': 'oonCarrierId'
        },

        'listReferences': {}
    },

    'Memberbanking': {
        'name': 'Memberbanking',
        'table': 'memberbanking',
        'primaryKey': 'memberBankingID',

        'aliases': {
            'memberBankingID': 'id',
            'memberID': 'memberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberbenefitcovlevelcode': {
        'name': 'Memberbenefitcovlevelcode',
        'table': 'memberbenefitcovlevelcode',
        'primaryKey': 'memberBenefitCovLevelCodeID',

        'aliases': {
            'memberBenefitCovLevelCodeID': 'id',
            'memberBenefitID': 'memberBenefitId',
            'memberID': 'memberId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberbenefitpremium': {
        'name': 'Memberbenefitpremium',
        'table': 'memberbenefitpremium',
        'primaryKey': 'memberBenefitPremiumID',

        'aliases': {
            'memberBenefitPremiumID': 'id',
            'memberBenefitID': 'memberBenefitId',
            'memberID': 'memberId',
            'referenceIDQual': 'referenceIdQual',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberbenefitrider': {
        'name': 'Memberbenefitrider',
        'table': 'memberbenefitrider',
        'primaryKey': 'memberBenefitRiderID',

        'aliases': {
            'memberBenefitRiderID': 'id',
            'memberBenefitID': 'memberBenefitId',
            'riderPlanID': 'riderPlanId',
            'contractID': 'contractId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memberbenefit834Hist': {
        'name': 'Memberbenefit834Hist',
        'table': 'memberbenefit834hist',
        'primaryKey': 'memberBenefit834HistID',

        'aliases': {
            'memberBenefit834HistID': 'id',
            'memberBenefitID': 'memberBenefitId',
            'memberID': 'memberId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'ediTransactionID': 'ediTransactionId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Membercob': {
        'name': 'Membercob',
        'table': 'membercob',
        'primaryKey': 'memberCOBID',

        'aliases': {
            'memberCOBID': 'id',
            'memberID': 'memberId',
            'cobSubscriberID': 'cobSubscriberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'cobMemberGroupID': 'cobMemberGroupId',
            'cobMemberID': 'cobMemberId',
            'cobSubscriberSSN': 'cobSubscriberSsn',
            'cobEntityIDCodeQual': 'cobEntityIdCodeQual',
            'cobRelEntityIDCode': 'cobRelEntityIdCode'
        },

        'referenceMap': {
            'member': 'memberId',
            'cobMember': 'cobMemberId'
        },

        'listReferences': {}
    },

    'Membercobexcldiag': {
        'name': 'Membercobexcldiag',
        'table': 'membercobexcldiag',
        'primaryKey': 'diagCategory',

        'aliases': {
            'memberID': 'memberId',
            'memberCOBID': 'id',
            'diagCategory': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberauditdetail': {
        'name': 'Memberauditdetail',
        'table': 'memberauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'memberID': 'memberId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Membercaserate': {
        'name': 'Membercaserate',
        'table': 'membercaserate',
        'primaryKey': 'memberCaseRateID',

        'aliases': {
            'memberCaseRateID': 'id',
            'memberID': 'memberId',
            'caseRateID': 'caseRateId',
            'providerID': 'providerId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId',
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Membercobexclproc': {
        'name': 'Membercobexclproc',
        'table': 'membercobexclproc',
        'primaryKey': 'procCategory',

        'aliases': {
            'memberID': 'memberId',
            'memberCOBID': 'id',
            'procCategory': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Membercobrelentityphone': {
        'name': 'Membercobrelentityphone',
        'table': 'membercobrelentityphone',
        'primaryKey': 'memberCOBRelEntityPhoneID',

        'aliases': {
            'memberCOBRelEntityPhoneID': 'id',
            'memberID': 'memberId',
            'memberCOBID': 'memberCobid',
            'nonUSPhoneInd': 'nonUsPhoneInd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Membercobrelentityelectcom': {
        'name': 'Membercobrelentityelectcom',
        'table': 'membercobrelentityelectcom',
        'primaryKey': 'memberCOBRelEntityElectComID',

        'aliases': {
            'memberCOBRelEntityElectComID': 'id',
            'memberID': 'memberId',
            'memberCOBID': 'memberCobid',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Membercontactaddress': {
        'name': 'Membercontactaddress',
        'table': 'membercontactaddress',
        'primaryKey': 'memberContactAddressID',

        'aliases': {
            'memberContactAddressID': 'id',
            'memberContactID': 'memberContactId',
            'memberID': 'memberId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Membercontactelectcomm': {
        'name': 'Membercontactelectcomm',
        'table': 'membercontactelectcomm',
        'primaryKey': 'memberContactElectCommID',

        'aliases': {
            'memberContactElectCommID': 'id',
            'memberContactID': 'memberContactId',
            'memberID': 'memberId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Membercontactlanguage': {
        'name': 'Membercontactlanguage',
        'table': 'membercontactlanguage',
        'primaryKey': 'memberContactLanguageID',

        'aliases': {
            'memberContactLanguageID': 'id',
            'memberContactID': 'memberContactId',
            'memberID': 'memberId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Membercustodial': {
        'name': 'Membercustodial',
        'table': 'membercustodial',
        'primaryKey': 'memberCustodialID',

        'aliases': {
            'memberCustodialID': 'id',
            'memberID': 'memberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberdepcert': {
        'name': 'Memberdepcert',
        'table': 'memberdepcert',
        'primaryKey': 'memberDepCertID',

        'aliases': {
            'memberDepCertID': 'id',
            'memberID': 'memberId',
            'dcnID': 'dcnId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberdepcertar': {
        'name': 'Memberdepcertar',
        'table': 'memberdepcertar',
        'primaryKey': 'arTransactionID',

        'aliases': {
            'memberID': 'memberId',
            'memberDepCertID': 'id',
            'arTransactionID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberdisability': {
        'name': 'Memberdisability',
        'table': 'memberdisability',
        'primaryKey': 'memberDisabilityID',

        'aliases': {
            'memberDisabilityID': 'id',
            'memberID': 'memberId',
            'memberIndicatorID': 'memberIndicatorId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberdisclosure': {
        'name': 'Memberdisclosure',
        'table': 'memberdisclosure',
        'primaryKey': 'memberDisclosureID',

        'aliases': {
            'memberDisclosureID': 'id',
            'memberID': 'memberId',
            'entityID': 'entityId',
            'memberIDInd': 'memberIdInd',
            'memSSNInd': 'memSsnInd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberelectroniccomm': {
        'name': 'Memberelectroniccomm',
        'table': 'memberelectroniccomm',
        'primaryKey': 'memberElectronicCommID',

        'aliases': {
            'memberElectronicCommID': 'id',
            'memberID': 'memberId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberexternalid': {
        'name': 'Memberexternalid',
        'table': 'memberexternalid',
        'primaryKey': 'memberExternalIDID',

        'aliases': {
            'memberExternalIDID': 'id',
            'memberID': 'memberId',
            'externalIDType': 'externalIdType',
            'memberExternalID': 'memberExternalId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Membergovernmentbenefit': {
        'name': 'Membergovernmentbenefit',
        'table': 'membergovernmentbenefit',
        'primaryKey': 'memberGovernmentBenefitID',

        'aliases': {
            'memberGovernmentBenefitID': 'id',
            'memberID': 'memberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Membercontactphone': {
        'name': 'Membercontactphone',
        'table': 'membercontactphone',
        'primaryKey': 'memberContactPhoneID',

        'aliases': {
            'memberContactPhoneID': 'id',
            'memberContactID': 'memberContactId',
            'memberID': 'memberId',
            'nonUSPhoneInd': 'nonUsPhoneInd',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Membercobrelentityaddress': {
        'name': 'Membercobrelentityaddress',
        'table': 'membercobrelentityaddress',
        'primaryKey': 'memberCOBRelEntityAddressID',

        'aliases': {
            'memberCOBRelEntityAddressID': 'id',
            'memberID': 'memberId',
            'memberCOBID': 'memberCobid',
            'countyFIPS': 'countyFips',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Membercobverification': {
        'name': 'Membercobverification',
        'table': 'membercobverification',
        'primaryKey': 'memberCOBVerificationID',

        'aliases': {
            'memberCOBVerificationID': 'id',
            'memberCOBID': 'memberCobid',
            'memberID': 'memberId',
            'verificationUserID': 'verificationUserId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberhold': {
        'name': 'Memberhold',
        'table': 'memberhold',
        'primaryKey': 'memberHoldID',

        'aliases': {
            'memberHoldID': 'id',
            'memberID': 'memberId',
            'memGroupID': 'memGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'holdCAC': 'holdCac'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberdelete': {
        'name': 'Memberdelete',
        'table': 'memberdelete',
        'primaryKey': 'memberID',

        'aliases': {
            'memberID': 'id',
            'subscriberID': 'subscriberId',
            'mergeToMemberID': 'mergeToMemberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'mergeToMember': 'mergeToMemberId'
        },

        'listReferences': {}
    },

    'Memberindicator': {
        'name': 'Memberindicator',
        'table': 'memberindicator',
        'primaryKey': 'memberIndicatorID',

        'aliases': {
            'memberIndicatorID': 'id',
            'memberID': 'memberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Membercontact': {
        'name': 'Membercontact',
        'table': 'membercontact',
        'primaryKey': 'memberContactID',

        'aliases': {
            'memberContactID': 'id',
            'memberID': 'memberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'memEntityIDCode': 'memEntityIdCode'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberincentar': {
        'name': 'Memberincentar',
        'table': 'memberincentar',
        'primaryKey': 'memberIncentArID',

        'aliases': {
            'memberIncentArID': 'id',
            'memberIncentID': 'memberIncentId',
            'memberID': 'memberId',
            'incentID': 'incentId',
            'arTransactionID': 'arTransactionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'memberIncent': 'memberIncentId',
            'member': 'memberId',
            'incent': 'incentId'
        },

        'listReferences': {}
    },

    'Memberincent': {
        'name': 'Memberincent',
        'table': 'memberincent',
        'primaryKey': 'memberIncentID',

        'aliases': {
            'memberIncentID': 'id',
            'memberID': 'memberId',
            'incentID': 'incentId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId',
            'incent': 'incentId'
        },

        'listReferences': {}
    },

    'Memberimage': {
        'name': 'Memberimage',
        'table': 'memberimage',
        'primaryKey': 'memberImageID',

        'aliases': {
            'memberImageID': 'id',
            'memberID': 'memberId',
            'dcnID': 'dcnId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberinvaccident': {
        'name': 'Memberinvaccident',
        'table': 'memberinvaccident',
        'primaryKey': 'memberInvestigationID',

        'aliases': {
            'memberInvestigationID': 'id',
            'memberID': 'memberId',
            'respPartyPolicyID': 'respPartyPolicyId',
            'waiveTPLDenyInd': 'waiveTplDenyInd',
            'waiveTPLDate': 'waiveTplDate',
            'waiveTPLReason': 'waiveTplReason',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberidcard': {
        'name': 'Memberidcard',
        'table': 'memberidcard',
        'primaryKey': 'memberIDCardID',

        'aliases': {
            'memberIDCardID': 'id',
            'memberID': 'memberId',
            'memGroupID': 'memGroupId',
            'subsAffiliationID': 'subsAffiliationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberinvdate': {
        'name': 'Memberinvdate',
        'table': 'memberinvdates',
        'primaryKey': 'memberInvDatesID',

        'aliases': {
            'memberInvDatesID': 'id',
            'memberID': 'memberId',
            'memberInvestigationID': 'memberInvestigationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberinternaloobtimeline': {
        'name': 'Memberinternaloobtimeline',
        'table': 'memberinternaloobtimeline',
        'primaryKey': 'memberInternalOOBTimelineID',

        'aliases': {
            'memberInternalOOBTimelineID': 'id',
            'memberID': 'memberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberidcardrequest': {
        'name': 'Memberidcardrequest',
        'table': 'memberidcardrequest',
        'primaryKey': 'memberIDCardRequestID',

        'aliases': {
            'memberIDCardRequestID': 'id',
            'memberIDCardID': 'memberIdCardId',
            'memberID': 'memberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberinvdiagnosis': {
        'name': 'Memberinvdiagnosis',
        'table': 'memberinvdiagnosis',
        'primaryKey': 'memberInvDiagnosisID',

        'aliases': {
            'memberInvDiagnosisID': 'id',
            'memberID': 'memberId',
            'memberInvestigationID': 'memberInvestigationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberinstitution': {
        'name': 'Memberinstitution',
        'table': 'memberinstitution',
        'primaryKey': 'memberInstitutionID',

        'aliases': {
            'memberInstitutionID': 'id',
            'memberIndicatorID': 'memberIndicatorId',
            'memberID': 'memberId',
            'providerID': 'providerId',
            'providerOrgLocationID': 'providerOrgLocationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId',
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Memberinvestigation': {
        'name': 'Memberinvestigation',
        'table': 'memberinvestigation',
        'primaryKey': 'memberInvestigationID',

        'aliases': {
            'memberInvestigationID': 'id',
            'memberID': 'memberId',
            'memberCOBID': 'memberCobid',
            'planID': 'planId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberinvnote': {
        'name': 'Memberinvnote',
        'table': 'memberinvnote',
        'primaryKey': 'memberInvNoteID',

        'aliases': {
            'memberInvNoteID': 'id',
            'memberID': 'memberId',
            'memberInvestigationID': 'memberInvestigationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberindivmaxhx': {
        'name': 'Memberindivmaxhx',
        'table': 'memberindivmaxhx',
        'primaryKey': 'memberIndivMaxHxID',

        'aliases': {
            'memberIndivMaxHxID': 'id',
            'memberIndivMaxID': 'memberIndivMaxId',
            'memberID': 'memberId',
            'msaID': 'msaId',
            'famMemberID': 'famMemberId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId',
            'msa': 'msaId',
            'famMember': 'famMemberId'
        },

        'listReferences': {}
    },

    'Memberinvprovider': {
        'name': 'Memberinvprovider',
        'table': 'memberinvprovider',
        'primaryKey': 'memberInvProviderID',

        'aliases': {
            'memberInvProviderID': 'id',
            'memberID': 'memberId',
            'memberInvestigationID': 'memberInvestigationId',
            'providerID': 'providerId',
            'providerOrgLocationID': 'providerOrgLocationId',
            'medicalRecordID': 'medicalRecordId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId',
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Memberinternaloobplan': {
        'name': 'Memberinternaloobplan',
        'table': 'memberinternaloobplan',
        'primaryKey': 'memberInternalOOBPlanID',

        'aliases': {
            'memberInternalOOBPlanID': 'id',
            'memberID': 'memberId',
            'memberBenefitID': 'memberBenefitId',
            'memberInternalOOBTimelineID': 'memberInternalOobTimelineId',
            'subscriberID': 'subscriberId',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberindivmax': {
        'name': 'Memberindivmax',
        'table': 'memberindivmax',
        'primaryKey': 'memberIndivMaxID',

        'aliases': {
            'memberIndivMaxID': 'id',
            'memberID': 'memberId',
            'msaID': 'msaId',
            'famMemberID': 'famMemberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId',
            'msa': 'msaId',
            'famMember': 'famMemberId'
        },

        'listReferences': {}
    },

    'Memberlanguage': {
        'name': 'Memberlanguage',
        'table': 'memberlanguage',
        'primaryKey': 'memberLanguageID',

        'aliases': {
            'memberLanguageID': 'id',
            'memberID': 'memberId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberoocplan': {
        'name': 'Memberoocplan',
        'table': 'memberoocplan',
        'primaryKey': 'memberOOCPlanID',

        'aliases': {
            'memberOOCPlanID': 'id',
            'memberOOCTimelineID': 'memberOocTimelineId',
            'memberID': 'memberId',
            'subscriberID': 'subscriberId',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'memberCOBID': 'memberCobid',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'subsAffiliationID': 'subsAffiliationId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberperiochart': {
        'name': 'Memberperiochart',
        'table': 'memberperiochart',
        'primaryKey': 'memberPerioChartID',

        'aliases': {
            'memberPerioChartID': 'id',
            'memberID': 'memberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberperiopocket': {
        'name': 'Memberperiopocket',
        'table': 'memberperiopocket',
        'primaryKey': 'memberPerioPocketID',

        'aliases': {
            'memberPerioPocketID': 'id',
            'memberID': 'memberId',
            'pocketLR': 'pocketLr',
            'pocketLL': 'pocketLl',
            'pocketUR': 'pocketUr',
            'pocketUL': 'pocketUl',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberotherincome': {
        'name': 'Memberotherincome',
        'table': 'memberotherincome',
        'primaryKey': 'memberOtherIncomeID',

        'aliases': {
            'memberOtherIncomeID': 'id',
            'memberID': 'memberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberphone': {
        'name': 'Memberphone',
        'table': 'memberphone',
        'primaryKey': 'memberPhoneID',

        'aliases': {
            'memberID': 'memberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'memberPhoneID': 'id',
            'nonUSPhoneInd': 'nonUsPhoneInd'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberserviceplan': {
        'name': 'Memberserviceplan',
        'table': 'memberserviceplan',
        'primaryKey': 'memberServicePlanID',

        'aliases': {
            'memberServicePlanID': 'id',
            'memberID': 'memberId',
            'subscriberID': 'subscriberId',
            'memGroupID': 'memGroupId',
            'subsAffiliationID': 'subsAffiliationId',
            'servicePlanID': 'servicePlanId',
            'benefitBundleID': 'benefitBundleId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupContractOptID': 'memGroupContractOptId',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'productID': 'productId',
            'carrierID': 'carrierId',
            'lineOfBusinessID': 'lineOfBusinessId',
            'controlPlanID': 'controlPlanId',
            'parentSubsAffiliationID': 'parentSubsAffiliationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId',
            'product': 'productId',
            'carrier': 'carrierId'
        },

        'listReferences': {}
    },

    'Memberooctimeline': {
        'name': 'Memberooctimeline',
        'table': 'memberooctimeline',
        'primaryKey': 'memberOOCTimelineID',

        'aliases': {
            'memberOOCTimelineID': 'id',
            'memberID': 'memberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberqueue': {
        'name': 'Memberqueue',
        'table': 'memberqueue',
        'primaryKey': 'queueID',

        'aliases': {
            'queueID': 'id',
            'memberID': 'memberId',
            'subscriberID': 'subscriberId',
            'memGroupID': 'memGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'lockUserID': 'lockUserId',
            'txfrQueueID': 'txfrQueueId',
            'claimID': 'claimId',
            'externalSubID': 'externalSubId',
            'memGroupExternalID': 'memGroupExternalId',
            'claimSubscriberID': 'claimSubscriberId',
            'subsAffiliationID': 'subsAffiliationId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Membernote': {
        'name': 'Membernote',
        'table': 'membernote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'memberID': 'memberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberprovider': {
        'name': 'Memberprovider',
        'table': 'memberprovider',
        'primaryKey': 'memberProviderID',

        'aliases': {
            'memberProviderID': 'id',
            'memberID': 'memberId',
            'memberBenefitID': 'memberBenefitId',
            'networkID': 'networkId',
            'providerID': 'providerId',
            'providerOrgLocationID': 'providerOrgLocationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'networkScheduleID': 'networkScheduleId'
        },

        'referenceMap': {
            'member': 'memberId',
            'network': 'networkId',
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Memberrecoup': {
        'name': 'Memberrecoup',
        'table': 'memberrecoup',
        'primaryKey': 'memberRecoupID',

        'aliases': {
            'memberRecoupID': 'id',
            'memberID': 'memberId',
            'msaID': 'msaId',
            'memberAccountID': 'memberAccountId',
            'planID': 'planId',
            'memberBenefitID': 'memberBenefitId',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'recoupEobTransID': 'recoupEobTransId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId'
        },

        'referenceMap': {
            'member': 'memberId',
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Memberperiomeasure': {
        'name': 'Memberperiomeasure',
        'table': 'memberperiomeasure',
        'primaryKey': 'toothID',

        'aliases': {
            'memberPerioMeasureID': 'id',
            'memberPerioPocketID': 'memberPerioPocketId',
            'memberID': 'id',
            'toothID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memberstudent': {
        'name': 'Memberstudent',
        'table': 'memberstudent',
        'primaryKey': 'memberStudentID',

        'aliases': {
            'memberStudentID': 'id',
            'memberIndicatorID': 'memberIndicatorId',
            'memberID': 'memberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memberrecoupclaim': {
        'name': 'Memberrecoupclaim',
        'table': 'memberrecoupclaim',
        'primaryKey': 'memberRecoupClaimID',

        'aliases': {
            'memberRecoupClaimID': 'id',
            'memberID': 'memberId',
            'memberRecoupID': 'memberRecoupId',
            'claimID': 'claimId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'claimMemberID': 'claimMemberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId',
            'claimMember': 'claimMemberId'
        },

        'listReferences': {}
    },

    'Membernetwork': {
        'name': 'Membernetwork',
        'table': 'membernetwork',
        'primaryKey': 'memberNetworkID',

        'aliases': {
            'memberNetworkID': 'id',
            'memberID': 'memberId',
            'memberBenefitID': 'memberBenefitId',
            'networkScheduleID': 'networkScheduleId',
            'networkID': 'networkId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId',
            'network': 'networkId'
        },

        'listReferences': {}
    },

    'Membersupertoothid': {
        'name': 'Membersupertoothid',
        'table': 'membersupertoothid',
        'primaryKey': 'providerID',

        'aliases': {
            'memberSuperToothIDID': 'id',
            'memberID': 'id',
            'supernumeraryToothID': 'id',
            'providerToothID': 'providerToothId',
            'providerID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'providerTooth': 'providerToothId'
        },

        'listReferences': {}
    },

    'Membersupertooth': {
        'name': 'Membersupertooth',
        'table': 'membersupertooth',
        'primaryKey': 'memberSuperToothID',

        'aliases': {
            'memberSuperToothID': 'id',
            'memberID': 'memberId',
            'supernumeraryToothID': 'supernumeraryToothId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId',
            'supernumeraryTooth': 'supernumeraryToothId'
        },

        'listReferences': {}
    },

    'Memberutilizationoptin': {
        'name': 'Memberutilizationoptin',
        'table': 'memberutilizationoptin',
        'primaryKey': 'memberUtilizationOptInID',

        'aliases': {
            'memberUtilizationOptInID': 'id',
            'memberUtilizationPlanID': 'memberUtilizationPlanId',
            'providerTIN': 'providerTin',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'memberID': 'memberId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memgroup': {
        'name': 'Memgroup',
        'table': 'memgroup',
        'primaryKey': 'memGroupID',

        'aliases': {
            'memGroupID': 'id',
            'parentID': 'parentId',
            'alphaParentID': 'alphaParentId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'vendorID': 'vendorId'
        },

        'referenceMap': {
            'vendor': 'vendorId'
        },

        'listReferences': {}
    },

    'Memgroup834Extract': {
        'name': 'Memgroup834Extract',
        'table': 'memgroup834extract',
        'primaryKey': null,

        'aliases': {
            'memGroupID': 'memGroupId',
            'subscriberID': 'subscriberId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memexpensecodemaxhx': {
        'name': 'Memexpensecodemaxhx',
        'table': 'memexpensecodemaxhx',
        'primaryKey': 'memExpenseCodeMaxHxID',

        'aliases': {
            'memExpenseCodeMaxHxID': 'id',
            'memExpenseCodeMaxID': 'memExpenseCodeMaxId',
            'memberID': 'memberId',
            'msaID': 'msaId',
            'famMemberID': 'famMemberId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId',
            'msa': 'msaId',
            'famMember': 'famMemberId'
        },

        'listReferences': {}
    },

    'Membertransfer': {
        'name': 'Membertransfer',
        'table': 'membertransfer',
        'primaryKey': 'memberTransferID',

        'aliases': {
            'memberTransferID': 'id',
            'memberID': 'memberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'totalHRACUsed': 'totalHracUsed',
            'totalHRARUsed': 'totalHrarUsed'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Memexpensecodemax': {
        'name': 'Memexpensecodemax',
        'table': 'memexpensecodemax',
        'primaryKey': 'memExpenseCodeMaxID',

        'aliases': {
            'memExpenseCodeMaxID': 'id',
            'memberID': 'memberId',
            'msaID': 'msaId',
            'famMemberID': 'famMemberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId',
            'msa': 'msaId',
            'famMember': 'famMemberId'
        },

        'listReferences': {}
    },

    'Memgroupaddresshour': {
        'name': 'Memgroupaddresshour',
        'table': 'memgroupaddresshours',
        'primaryKey': 'memGroupAddressHoursID',

        'aliases': {
            'memGroupAddressHoursID': 'id',
            'memGroupID': 'memGroupId',
            'memGroupAddressID': 'memGroupAddressId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Membervital': {
        'name': 'Membervital',
        'table': 'membervitals',
        'primaryKey': 'memberVitalsID',

        'aliases': {
            'memberVitalsID': 'id',
            'memberIndicatorID': 'memberIndicatorId',
            'memberID': 'memberId',
            'systolicBP': 'systolicBp',
            'diastolicBP': 'diastolicBp',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Membertoothchart': {
        'name': 'Membertoothchart',
        'table': 'membertoothchart',
        'primaryKey': 'memberToothChartID',

        'aliases': {
            'memberToothChartID': 'id',
            'memberID': 'memberId',
            'toothID': 'toothId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId',
            'tooth': 'toothId'
        },

        'listReferences': {}
    },

    'Memberutilizationplan': {
        'name': 'Memberutilizationplan',
        'table': 'memberutilizationplan',
        'primaryKey': 'memberUtilizationPlanID',

        'aliases': {
            'memberUtilizationPlanID': 'id',
            'memberID': 'memberId',
            'subscriberID': 'subscriberId',
            'memGroupID': 'memGroupId',
            'subsAffiliationID': 'subsAffiliationId',
            'utilizationPlanID': 'utilizationPlanId',
            'benefitBundleID': 'benefitBundleId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupContractOptID': 'memGroupContractOptId',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'productID': 'productId',
            'carrierID': 'carrierId',
            'lineOfBusinessID': 'lineOfBusinessId',
            'controlPlanID': 'controlPlanId',
            'parentSubsAffiliationID': 'parentSubsAffiliationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId',
            'product': 'productId',
            'carrier': 'carrierId'
        },

        'listReferences': {}
    },

    'Memgroupaddress': {
        'name': 'Memgroupaddress',
        'table': 'memgroupaddress',
        'primaryKey': 'memGroupAddressID',

        'aliases': {
            'memGroupAddressID': 'id',
            'memGroupID': 'memGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'countyFIPS': 'countyFips'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupalias': {
        'name': 'Memgroupalias',
        'table': 'memgroupalias',
        'primaryKey': 'memGroupAliasID',

        'aliases': {
            'memGroupAliasID': 'id',
            'memGroupID': 'memGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupaddressphone': {
        'name': 'Memgroupaddressphone',
        'table': 'memgroupaddressphone',
        'primaryKey': 'memGroupAddressPhoneID',

        'aliases': {
            'memGroupAddressPhoneID': 'id',
            'memGroupAddressID': 'memGroupAddressId',
            'memGroupID': 'memGroupId',
            'nonUSPhoneInd': 'nonUsPhoneInd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupbanking': {
        'name': 'Memgroupbanking',
        'table': 'memgroupbanking',
        'primaryKey': 'memGroupBankingID',

        'aliases': {
            'memGroupBankingID': 'id',
            'memGroupID': 'memGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupbusinessdef': {
        'name': 'Memgroupbusinessdef',
        'table': 'memgroupbusinessdef',
        'primaryKey': 'memGroupBusinessDefID',

        'aliases': {
            'memGroupBusinessDefID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupauditdetail': {
        'name': 'Memgroupauditdetail',
        'table': 'memgroupauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'memGroupID': 'memGroupId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontactelectroniccom': {
        'name': 'Memgroupcontactelectroniccom',
        'table': 'memgroupcontactelectroniccom',
        'primaryKey': 'memGroupContactElectronicComID',

        'aliases': {
            'memGroupContactElectronicComID': 'id',
            'memGroupContactID': 'memGroupContactId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontactaddress': {
        'name': 'Memgroupcontactaddress',
        'table': 'memgroupcontactaddress',
        'primaryKey': 'memGroupContactAddressID',

        'aliases': {
            'memGroupContactAddressID': 'id',
            'memGroupContactID': 'memGroupContactId',
            'memGroupAddressID': 'memGroupAddressId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontact': {
        'name': 'Memgroupcontact',
        'table': 'memgroupcontact',
        'primaryKey': 'memGroupContactID',

        'aliases': {
            'memGroupContactID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'originalSourceSystemID': 'originalSourceSystemId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontactassignment': {
        'name': 'Memgroupcontactassignment',
        'table': 'memgroupcontactassignment',
        'primaryKey': 'memGroupContactAssignmentID',

        'aliases': {
            'memGroupContactAssignmentID': 'id',
            'memGroupID': 'memGroupId',
            'memGroupContactID': 'memGroupContactId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontactphone': {
        'name': 'Memgroupcontactphone',
        'table': 'memgroupcontactphone',
        'primaryKey': 'memGroupContactPhoneID',

        'aliases': {
            'memGroupContactPhoneID': 'id',
            'memGroupContactID': 'memGroupContactId',
            'nonUSPhoneInd': 'nonUsPhoneInd',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontactauditdetail': {
        'name': 'Memgroupcontactauditdetail',
        'table': 'memgroupcontactauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'memGroupContactID': 'memGroupContactId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontactaddressphone': {
        'name': 'Memgroupcontactaddressphone',
        'table': 'memgroupcontactaddressphone',
        'primaryKey': 'memGroupContactAddressPhoneID',

        'aliases': {
            'memGroupContactAddressPhoneID': 'id',
            'memGroupContactAddressID': 'memGroupContactAddressId',
            'memGroupContactPhoneID': 'memGroupContactPhoneId',
            'memGroupContactID': 'memGroupContactId',
            'memGroupAddressPhoneID': 'memGroupAddressPhoneId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractbillingpref': {
        'name': 'Memgroupcontractbillingpref',
        'table': 'memgroupcontractbillingpref',
        'primaryKey': 'memGroupContractBillingPrefID',

        'aliases': {
            'memGroupContractBillingPrefID': 'id',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'billingMemGroupID': 'billingMemGroupId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'memGroupContactID': 'memGroupContactId',
            'memGroupContactAddressID': 'memGroupContactAddressId',
            'memGroupContactPhoneID': 'memGroupContactPhoneId',
            'memGroupContactElectronicComID': 'memGroupContactElectronicComId',
            'alphaParentID': 'alphaParentId',
            'parentID': 'parentId',
            'originalSourceSystemID': 'originalSourceSystemId',
            'billingPreferenceExternalID': 'billingPreferenceExternalId',
            'originalSourceContactID': 'originalSourceContactId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractgovtreport': {
        'name': 'Memgroupcontractgovtreport',
        'table': 'memgroupcontractgovtreport',
        'primaryKey': 'memGroupContractGovtReportID',

        'aliases': {
            'memGroupContractGovtReportID': 'id',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'memGroupContractOptID': 'memGroupContractOptId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontract': {
        'name': 'Memgroupcontract',
        'table': 'memgroupcontract',
        'primaryKey': 'memGroupContractID',

        'aliases': {
            'memGroupContractID': 'id',
            'memGroupID': 'memGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'promptPaySchedID': 'promptPaySchedId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractauditdetail': {
        'name': 'Memgroupcontractauditdetail',
        'table': 'memgroupcontractauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'memGroupContractID': 'memGroupContractId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractevent': {
        'name': 'Memgroupcontractevent',
        'table': 'memgroupcontractevent',
        'primaryKey': 'memGroupContractEventID',

        'aliases': {
            'memGroupContractEventID': 'id',
            'memGroupContractID': 'memGroupContractId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'memGroupID': 'memGroupId',
            'parentEventID': 'parentEventId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontactrole': {
        'name': 'Memgroupcontactrole',
        'table': 'memgroupcontactrole',
        'primaryKey': 'memGroupContactRoleID',

        'aliases': {
            'memGroupContactRoleID': 'id',
            'memGroupContactAssignmentID': 'memGroupContactAssignmentId',
            'memGroupID': 'memGroupId',
            'memGroupContactID': 'memGroupContactId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontactphoneassign': {
        'name': 'Memgroupcontactphoneassign',
        'table': 'memgroupcontactphoneassign',
        'primaryKey': 'memGroupContactPhoneAssignID',

        'aliases': {
            'memGroupContactPhoneAssignID': 'id',
            'memGroupContactPhoneID': 'memGroupContactPhoneId',
            'memGroupContactAssignmentID': 'memGroupContactAssignmentId',
            'memGroupID': 'memGroupId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'memGroupContactID': 'memGroupContactId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractdistchannel': {
        'name': 'Memgroupcontractdistchannel',
        'table': 'memgroupcontractdistchannel',
        'primaryKey': 'memGroupContractDistChannelID',

        'aliases': {
            'memGroupContractDistChannelID': 'id',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'distributionChannelID': 'distributionChannelId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractextid': {
        'name': 'Memgroupcontractextid',
        'table': 'memgroupcontractextid',
        'primaryKey': 'memGroupContractExtIDID',

        'aliases': {
            'memGroupContractExtIDID': 'id',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'originalSourceSystemID': 'originalSourceSystemId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontacteleccomassign': {
        'name': 'Memgroupcontacteleccomassign',
        'table': 'memgroupcontacteleccomassign',
        'primaryKey': 'memGroupContactElecComAssignID',

        'aliases': {
            'memGroupContactElecComAssignID': 'id',
            'memGroupContactElectronicComID': 'memGroupContactElectronicComId',
            'memGroupID': 'memGroupId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'memGroupContactAssignmentID': 'memGroupContactAssignmentId',
            'memGroupContactID': 'memGroupContactId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractopt': {
        'name': 'Memgroupcontractopt',
        'table': 'memgroupcontractopt',
        'primaryKey': 'memGroupContractOptID',

        'aliases': {
            'memGroupContractOptID': 'id',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractoptcontribut': {
        'name': 'Memgroupcontractoptcontribut',
        'table': 'memgroupcontractoptcontribut',
        'primaryKey': 'memGroupContractOptContributID',

        'aliases': {
            'memGroupContractOptContributID': 'id',
            'memGroupContractOptID': 'memGroupContractOptId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractopenenroll': {
        'name': 'Memgroupcontractopenenroll',
        'table': 'memgroupcontractopenenroll',
        'primaryKey': 'memGroupContractOpenEnrollID',

        'aliases': {
            'memGroupContractOpenEnrollID': 'id',
            'memGroupContractOptID': 'memGroupContractOptId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'memGroupContractOptPopID': 'memGroupContractOptPopId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractoptpop': {
        'name': 'Memgroupcontractoptpop',
        'table': 'memgroupcontractoptpop',
        'primaryKey': 'memGroupContractOptPopID',

        'aliases': {
            'memGroupContractOptPopID': 'id',
            'memGroupPopulationID': 'memGroupPopulationId',
            'memGroupPopulationConfigID': 'memGroupPopulationConfigId',
            'memGroupPopulationOrderID': 'memGroupPopulationOrderId',
            'memGroupContractOptID': 'memGroupContractOptId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'memGroupContractBillingPrefID': 'memGroupContractBillingPrefId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractplanattrib': {
        'name': 'Memgroupcontractplanattrib',
        'table': 'memgroupcontractplanattrib',
        'primaryKey': 'memGroupContractPlanAttribID',

        'aliases': {
            'memGroupContractPlanAttribID': 'id',
            'memGroupContrPlanAttribSetID': 'memGroupContrPlanAttribSetId',
            'memGroupContractPlanOptPlanID': 'memGroupContractPlanOptPlanId',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'memGroupContractOptID': 'memGroupContractOptId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractoptinsrule': {
        'name': 'Memgroupcontractoptinsrule',
        'table': 'memgroupcontractoptinsrule',
        'primaryKey': 'memGroupContractOptInsRuleID',

        'aliases': {
            'memGroupContractOptInsRuleID': 'id',
            'memGroupContractOptID': 'memGroupContractOptId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'guardrailScheduleID': 'guardrailScheduleId',
            'newHireGuardInsRuleWaitPrdID': 'newHireGuardInsRuleWaitPrdId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractplanoptaddr': {
        'name': 'Memgroupcontractplanoptaddr',
        'table': 'memgroupcontractplanoptaddr',
        'primaryKey': 'memGroupContractPlanOptAddrID',

        'aliases': {
            'memGroupContractPlanOptAddrID': 'id',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'memGroupContractOptID': 'memGroupContractOptId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'sysAddressID': 'sysAddressId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractplanattribset': {
        'name': 'Memgroupcontractplanattribset',
        'table': 'memgroupcontractplanattribset',
        'primaryKey': 'memGroupContrPlanAttribSetID',

        'aliases': {
            'memGroupContrPlanAttribSetID': 'id',
            'memGroupContractPlanOptPlanID': 'memGroupContractPlanOptPlanId',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'memGroupContractOptID': 'memGroupContractOptId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractoptpopinsrule': {
        'name': 'Memgroupcontractoptpopinsrule',
        'table': 'memgroupcontractoptpopinsrule',
        'primaryKey': 'memGroupContractOptPopInsRulID',

        'aliases': {
            'memGroupContractOptPopInsRulID': 'id',
            'memGroupContractOptPopID': 'memGroupContractOptPopId',
            'memGroupContractOptID': 'memGroupContractOptId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'guardrailScheduleID': 'guardrailScheduleId',
            'newHireGuardInsRuleWaitPrdID': 'newHireGuardInsRuleWaitPrdId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractplanopthold': {
        'name': 'Memgroupcontractplanopthold',
        'table': 'memgroupcontractplanopthold',
        'primaryKey': 'memGroupContractPlanOptHoldID',

        'aliases': {
            'memGroupContractPlanOptHoldID': 'id',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'memGroupContractOptID': 'memGroupContractOptId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'holdFulfillmentIDCardsInd': 'holdFulfillmentIdCardsInd',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractplanoptmsa': {
        'name': 'Memgroupcontractplanoptmsa',
        'table': 'memgroupcontractplanoptmsa',
        'primaryKey': 'memGroupContractPlanOptMsaID',

        'aliases': {
            'memGroupContractPlanOptMsaID': 'id',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'memGroupContractOptID': 'memGroupContractOptId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'msaID': 'msaId',
            'benefitBundleID': 'benefitBundleId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'remitMemGroupAddressID': 'remitMemGroupAddressId',
            'electronicEOBOnlyInd': 'electronicEobOnlyInd',
            'suppressEOBforNoPaymentInd': 'suppressEoBforNoPaymentInd',
            'suppressProviderEOBMbrPayeeInd': 'suppressProviderEobMbrPayeeInd',
            'allowMemberEOBOverrideInd': 'allowMemberEobOverrideInd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Memgroupcontractplanopttag': {
        'name': 'Memgroupcontractplanopttag',
        'table': 'memgroupcontractplanopttag',
        'primaryKey': 'memGroupContractPlanOptTagID',

        'aliases': {
            'memGroupContractPlanOptTagID': 'id',
            'memGroupContractPlanOptPlanID': 'memGroupContractPlanOptPlanId',
            'memGroupContrPlanAttribSetID': 'memGroupContrPlanAttribSetId',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'memGroupContractOptID': 'memGroupContractOptId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'finAttribSchedID': 'finAttribSchedId',
            'finAttribSchedSegmentID': 'finAttribSchedSegmentId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractplanyear': {
        'name': 'Memgroupcontractplanyear',
        'table': 'memgroupcontractplanyear',
        'primaryKey': 'memGroupContractPlanYearID',

        'aliases': {
            'memGroupContractPlanYearID': 'id',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'memGroupContractOptID': 'memGroupContractOptId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'ratingCountyFIPS': 'ratingCountyFips',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractplanyrbillrt': {
        'name': 'Memgroupcontractplanyrbillrt',
        'table': 'memgroupcontractplanyrbillrt',
        'primaryKey': 'memGroupContractPlanYrBillRtID',

        'aliases': {
            'memGroupContractPlanYrBillRtID': 'id',
            'memGroupContractPlanYearID': 'memGroupContractPlanYearId',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'memGroupContractOptID': 'memGroupContractOptId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'billingSchedID': 'billingSchedId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractplanoptplan': {
        'name': 'Memgroupcontractplanoptplan',
        'table': 'memgroupcontractplanoptplan',
        'primaryKey': 'memGroupContractPlanOptPlanID',

        'aliases': {
            'memGroupContractPlanOptPlanID': 'id',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'memGroupContractOptID': 'memGroupContractOptId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'servicePlanID': 'servicePlanId',
            'utilizationPlanID': 'utilizationPlanId',
            'msaID': 'msaId',
            'planID': 'planId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Memgroupcontractlock': {
        'name': 'Memgroupcontractlock',
        'table': 'memgroupcontractlock',
        'primaryKey': 'memGroupContractID',

        'aliases': {
            'memGroupContractID': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractplanyrbillovd': {
        'name': 'Memgroupcontractplanyrbillovd',
        'table': 'memgroupcontractplanyrbillovd',
        'primaryKey': 'memGroupContractPlanYrBillOvdID',

        'aliases': {
            'memGroupContractPlanYrBillOvdID': 'id',
            'memGroupContractPlanYearID': 'memGroupContractPlanYearId',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'memGroupContractOptID': 'memGroupContractOptId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'billingSchedID': 'billingSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractrenewal': {
        'name': 'Memgroupcontractrenewal',
        'table': 'memgroupcontractrenewal',
        'primaryKey': 'memGroupContractRenewalID',

        'aliases': {
            'memGroupContractRenewalID': 'id',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractvalidation': {
        'name': 'Memgroupcontractvalidation',
        'table': 'memgroupcontractvalidation',
        'primaryKey': 'validationID',

        'aliases': {
            'validationID': 'id',
            'memGroupContractID': 'memGroupContractId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupdepcert': {
        'name': 'Memgroupdepcert',
        'table': 'memgroupdepcert',
        'primaryKey': 'relationshipCode',

        'aliases': {
            'memGroupID': 'id',
            'relationshipCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractplanoptnetwk': {
        'name': 'Memgroupcontractplanoptnetwk',
        'table': 'memgroupcontractplanoptnetwk',
        'primaryKey': 'memGroupContractPlanOptNetwkID',

        'aliases': {
            'memGroupContractPlanOptNetwkID': 'id',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'memGroupContractOptID': 'memGroupContractOptId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'planID': 'planId',
            'networkScheduleID': 'networkScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractproducer': {
        'name': 'Memgroupcontractproducer',
        'table': 'memgroupcontractproducer',
        'primaryKey': 'memGroupContractProducerID',

        'aliases': {
            'memGroupContractProducerID': 'id',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'producerID': 'producerId',
            'writingAgentID': 'writingAgentId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'overridePEPMAmount': 'overridePepmAmount'
        },

        'referenceMap': {
            'producer': 'producerId'
        },

        'listReferences': {}
    },

    'Memgroupcontractplanoptphone': {
        'name': 'Memgroupcontractplanoptphone',
        'table': 'memgroupcontractplanoptphone',
        'primaryKey': 'memGroupContractPlanOptPhoneID',

        'aliases': {
            'memGroupContractPlanOptPhoneID': 'id',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'memGroupContractOptID': 'memGroupContractOptId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'sysPhoneNumberID': 'sysPhoneNumberId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupexternalid': {
        'name': 'Memgroupexternalid',
        'table': 'memgroupexternalid',
        'primaryKey': 'memGroupExternalIDID',

        'aliases': {
            'memGroupExternalIDID': 'id',
            'memGroupID': 'memGroupId',
            'originalSourceSystemID': 'originalSourceSystemId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractrenewaltrigger': {
        'name': 'Memgroupcontractrenewaltrigger',
        'table': 'memgroupcontractrenewaltrigger',
        'primaryKey': 'memGroupContractRenewalTriggerID',

        'aliases': {
            'memGroupContractRenewalTriggerID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupimage': {
        'name': 'Memgroupimage',
        'table': 'memgroupimage',
        'primaryKey': 'memGroupImageID',

        'aliases': {
            'memGroupImageID': 'id',
            'memGroupID': 'memGroupId',
            'dcnID': 'dcnId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupinsuringrule': {
        'name': 'Memgroupinsuringrule',
        'table': 'memgroupinsuringrule',
        'primaryKey': 'memGroupInsuringRuleID',

        'aliases': {
            'memGroupInsuringRuleID': 'id',
            'memGroupID': 'memGroupId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgrouppayroll': {
        'name': 'Memgrouppayroll',
        'table': 'memgrouppayroll',
        'primaryKey': 'memGroupPayrollID',

        'aliases': {
            'memGroupPayrollID': 'id',
            'memGroupID': 'memGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgrouppayrolldate': {
        'name': 'Memgrouppayrolldate',
        'table': 'memgrouppayrolldates',
        'primaryKey': 'memGroupPayrollDateID',

        'aliases': {
            'memGroupPayrollDateID': 'id',
            'memGroupID': 'memGroupId',
            'memGroupPayrollID': 'memGroupPayrollId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupjobstatus': {
        'name': 'Memgroupjobstatus',
        'table': 'memgroupjobstatus',
        'primaryKey': 'employStatusCode',

        'aliases': {
            'memGroupID': 'id',
            'employStatusCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractplanoption': {
        'name': 'Memgroupcontractplanoption',
        'table': 'memgroupcontractplanoption',
        'primaryKey': 'memGroupContractPlanOptionID',

        'aliases': {
            'memGroupContractPlanOptionID': 'id',
            'memGroupContractOptID': 'memGroupContractOptId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'billingSetID': 'billingSetId',
            'benefitBundleID': 'benefitBundleId',
            'planID': 'planId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'carrierLobPlanID': 'carrierLobPlanId',
            'beneStandardCompID': 'beneStandardCompId',
            'eocSetID': 'eocSetId',
            'msaID': 'msaId',
            'printPCPonIDCardInd': 'printPcPonIdCardInd',
            'memGroupContractBillingPrefID': 'memGroupContractBillingPrefId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'benefitBundleStandardCompID': 'benefitBundleStandardCompId',
            'adminVendorID': 'adminVendorId'
        },

        'referenceMap': {
            'msa': 'msaId',
            'adminVendor': 'adminVendorId'
        },

        'listReferences': {}
    },

    'Memgroupcontractplanoptextid': {
        'name': 'Memgroupcontractplanoptextid',
        'table': 'memgroupcontractplanoptextid',
        'primaryKey': 'memGroupContractPlanOptExtID',

        'aliases': {
            'memGroupContractPlanOptExtID': 'id',
            'memGroupContractPlanOptionID': 'memGroupContractPlanOptionId',
            'memGroupContractOptID': 'memGroupContractOptId',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'originalSourceSystemID': 'originalSourceSystemId',
            'extIDDescription': 'extIdDescription',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgrouphold': {
        'name': 'Memgrouphold',
        'table': 'memgrouphold',
        'primaryKey': 'memGroupHoldID',

        'aliases': {
            'memGroupHoldID': 'id',
            'memGroupID': 'memGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'holdMedcoRTBE': 'holdMedcoRtbe',
            'releaseMedcoRTBEDate': 'releaseMedcoRtbeDate',
            'holdCAC': 'holdCac'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupemployeecount': {
        'name': 'Memgroupemployeecount',
        'table': 'memgroupemployeecount',
        'primaryKey': 'memGroupEmployeeCountID',

        'aliases': {
            'memGroupEmployeeCountID': 'id',
            'memGroupID': 'memGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupcontractsalesoffice': {
        'name': 'Memgroupcontractsalesoffice',
        'table': 'memgroupcontractsalesoffice',
        'primaryKey': 'memGroupContractSalesOfficeID',

        'aliases': {
            'memGroupContractSalesOfficeID': 'id',
            'memGroupContractID': 'memGroupContractId',
            'memGroupID': 'memGroupId',
            'salesOfficeID': 'salesOfficeId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgrouppopidentifiervalue': {
        'name': 'Memgrouppopidentifiervalue',
        'table': 'memgrouppopidentifiervalue',
        'primaryKey': 'memGroupPopIdentifierValueID',

        'aliases': {
            'memGroupPopIdentifierValueID': 'id',
            'memGroupPopIdentifierID': 'memGroupPopIdentifierId',
            'memGroupPopulationID': 'memGroupPopulationId',
            'memGroupID': 'memGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupnote': {
        'name': 'Memgroupnote',
        'table': 'memgroupnote',
        'primaryKey': 'memGroupNoteID',

        'aliases': {
            'memGroupNoteID': 'id',
            'memGroupID': 'memGroupId',
            'memGroupContractID': 'memGroupContractId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgrouppopulationorder': {
        'name': 'Memgrouppopulationorder',
        'table': 'memgrouppopulationorder',
        'primaryKey': 'memGroupPopulationOrderID',

        'aliases': {
            'memGroupPopulationOrderID': 'id',
            'memGroupPopulationConfigID': 'memGroupPopulationConfigId',
            'memGroupID': 'memGroupId',
            'memGroupPopulationID': 'memGroupPopulationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgrouppopidentifier': {
        'name': 'Memgrouppopidentifier',
        'table': 'memgrouppopidentifier',
        'primaryKey': 'memGroupPopIdentifierID',

        'aliases': {
            'memGroupPopIdentifierID': 'id',
            'memGroupPopulationID': 'memGroupPopulationId',
            'memGroupID': 'memGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'memberAttributeID': 'memberAttributeId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgrouppopulation': {
        'name': 'Memgrouppopulation',
        'table': 'memgrouppopulation',
        'primaryKey': 'memGroupPopulationID',

        'aliases': {
            'memGroupPopulationID': 'id',
            'memGroupID': 'memGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'externalPopulationID': 'externalPopulationId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupreportingcode': {
        'name': 'Memgroupreportingcode',
        'table': 'memgroupreportingcode',
        'primaryKey': 'memGroupReportingCodeID',

        'aliases': {
            'memGroupReportingCodeID': 'id',
            'memGroupID': 'memGroupId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgrouppriorcarrier': {
        'name': 'Memgrouppriorcarrier',
        'table': 'memgrouppriorcarrier',
        'primaryKey': 'memGroupPriorCarrierID',

        'aliases': {
            'memGroupPriorCarrierID': 'id',
            'memGroupID': 'memGroupId',
            'customerAccountID': 'customerAccountId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupstmt': {
        'name': 'Memgroupstmt',
        'table': 'memgroupstmt',
        'primaryKey': 'memGroupID',

        'aliases': {
            'memGroupID': 'id',
            'logoID1': 'logoId1',
            'logoID2': 'logoId2',
            'logoID3': 'logoId3',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'sysAddressID': 'sysAddressId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupsupportteam': {
        'name': 'Memgroupsupportteam',
        'table': 'memgroupsupportteam',
        'primaryKey': 'memGroupSupportTeamID',

        'aliases': {
            'memGroupSupportTeamID': 'id',
            'memGroupID': 'memGroupId',
            'supportTeamID': 'supportTeamId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupsetting': {
        'name': 'Memgroupsetting',
        'table': 'memgroupsettings',
        'primaryKey': 'memGroupSettingsID',

        'aliases': {
            'memGroupSettingsID': 'id',
            'memGroupID': 'memGroupId',
            'adjudScheduleID': 'adjudScheduleId',
            'remarkCodeScheduleID': 'remarkCodeScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'timelyFilingSchedID': 'timelyFilingSchedId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupsurcharge': {
        'name': 'Memgroupsurcharge',
        'table': 'memgroupsurcharge',
        'primaryKey': 'memGroupSurchargeID',

        'aliases': {
            'memGroupSurchargeID': 'id',
            'memGroupID': 'memGroupId',
            'memGroupSettingsID': 'memGroupSettingsId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgrouppopulationconfig': {
        'name': 'Memgrouppopulationconfig',
        'table': 'memgrouppopulationconfig',
        'primaryKey': 'memGroupPopulationConfigID',

        'aliases': {
            'memGroupPopulationConfigID': 'id',
            'memGroupID': 'memGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgrouppopinsuringrule': {
        'name': 'Memgrouppopinsuringrule',
        'table': 'memgrouppopinsuringrule',
        'primaryKey': 'memGroupPopInsuringRuleID',

        'aliases': {
            'memGroupPopInsuringRuleID': 'id',
            'memGroupPopulationID': 'memGroupPopulationId',
            'memGroupID': 'memGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memgroupstmtempstat': {
        'name': 'Memgroupstmtempstat',
        'table': 'memgroupstmtempstat',
        'primaryKey': 'employStatusCode',

        'aliases': {
            'memGroupID': 'id',
            'employStatusCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memhealthcodemax': {
        'name': 'Memhealthcodemax',
        'table': 'memhealthcodemax',
        'primaryKey': 'memHealthCodeMaxID',

        'aliases': {
            'memHealthCodeMaxID': 'id',
            'memberID': 'memberId',
            'msaID': 'msaId',
            'famMemberID': 'famMemberId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId',
            'msa': 'msaId',
            'famMember': 'famMemberId'
        },

        'listReferences': {}
    },

    'Memgrouptin': {
        'name': 'Memgrouptin',
        'table': 'memgrouptin',
        'primaryKey': 'memGroupTINID',

        'aliases': {
            'memGroupTINID': 'id',
            'memGroupID': 'memGroupId',
            'memGroupTIN': 'memGroupTin',
            'memGroupTINDesc': 'memGroupTinDesc',
            'referenceIDQual': 'referenceIdQual',
            'memGroupTINType': 'memGroupTinType',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Mnrpcomp': {
        'name': 'Mnrpcomp',
        'table': 'mnrpcomp',
        'primaryKey': 'mnrpCompID',

        'aliases': {
            'mnrpCompID': 'id',
            'serviceAreaID': 'serviceAreaId',
            'placeOfServiceSetID': 'placeOfServiceSetId',
            'statModifierCompID': 'statModifierCompId',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Mnrpcompauditdetail': {
        'name': 'Mnrpcompauditdetail',
        'table': 'mnrpcompauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'mnrpCompID': 'mnrpCompId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Memhealthcodemaxhx': {
        'name': 'Memhealthcodemaxhx',
        'table': 'memhealthcodemaxhx',
        'primaryKey': 'memHealthCodeMaxHxID',

        'aliases': {
            'memHealthCodeMaxHxID': 'id',
            'memHealthCodeMaxID': 'memHealthCodeMaxId',
            'memberID': 'memberId',
            'msaID': 'msaId',
            'famMemberID': 'famMemberId',
            'claimLineAdjudicationID': 'claimLineAdjudicationId',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId',
            'msa': 'msaId',
            'famMember': 'famMemberId'
        },

        'listReferences': {}
    },

    'Mnrpcompdetailproc': {
        'name': 'Mnrpcompdetailproc',
        'table': 'mnrpcompdetailproc',
        'primaryKey': 'mnrpCompDetailProcID',

        'aliases': {
            'mnrpCompDetailProcID': 'id',
            'mnrpCompDetailID': 'mnrpCompDetailId',
            'mnrpCompID': 'mnrpCompId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Mnrpcomphold': {
        'name': 'Mnrpcomphold',
        'table': 'mnrpcomphold',
        'primaryKey': 'mnrpCompHoldID',

        'aliases': {
            'mnrpCompHoldID': 'id',
            'mnrpCompID': 'mnrpCompId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Mnrpcompdetail': {
        'name': 'Mnrpcompdetail',
        'table': 'mnrpcompdetail',
        'primaryKey': 'mnrpCompDetailID',

        'aliases': {
            'mnrpCompDetailID': 'id',
            'mnrpCompID': 'mnrpCompId',
            'mnrpCompDetailExternalID': 'mnrpCompDetailExternalId',
            'serviceAreaRegionID': 'serviceAreaRegionId',
            'placeOfServiceSetCatDetailID': 'placeOfServiceSetCatDetailId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'serviceAreaRegion': 'serviceAreaRegionId'
        },

        'listReferences': {}
    },

    'Mnrpcompnote': {
        'name': 'Mnrpcompnote',
        'table': 'mnrpcompnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'mnrpCompID': 'mnrpCompId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Modifiercodebasefileuploaddeta': {
        'name': 'Modifiercodebasefileuploaddeta',
        'table': 'modifiercodebasefileuploaddeta',
        'primaryKey': 'modifierCodeBaseFileUploadDetailID',

        'aliases': {
            'modifierCodeBaseFileUploadDetailID': 'id',
            'modifierCodeBaseFileUploadHeaderID': 'modifierCodeBaseFileUploadHeaderId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Modifiercode': {
        'name': 'Modifiercode',
        'table': 'modifiercode',
        'primaryKey': 'modifierCode',

        'aliases': {
            'modifierCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Modifiercomp': {
        'name': 'Modifiercomp',
        'table': 'modifiercomp',
        'primaryKey': 'modifierCompVersionID',

        'aliases': {
            'modifierCompID': 'modifierCompId',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'modifierCompVersionID': 'id',
            'pricingExternalID': 'pricingExternalId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Modifiercompauditdetail': {
        'name': 'Modifiercompauditdetail',
        'table': 'modifiercompauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'modifierCompVersionID': 'modifierCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Modifiercompclaimclass': {
        'name': 'Modifiercompclaimclass',
        'table': 'modifiercompclaimclass',
        'primaryKey': 'modifierCompClaimClassID',

        'aliases': {
            'modifierCompClaimClassID': 'id',
            'claimClassID': 'claimClassId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'lobModifierCompAssignID': 'lobModifierCompAssignId',
            'lineOfBusinessID': 'lineOfBusinessId',
            'modifierCompVersionID': 'modifierCompVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Modifiercodebasefileuploadhead': {
        'name': 'Modifiercodebasefileuploadhead',
        'table': 'modifiercodebasefileuploadhead',
        'primaryKey': 'modifierCodeBaseFileUploadHeaderID',

        'aliases': {
            'modifierCodeBaseFileUploadHeaderID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Modifiercompnote': {
        'name': 'Modifiercompnote',
        'table': 'modifiercompnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'modifierCompVersionID': 'modifierCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Mprcompdetailmodassign': {
        'name': 'Mprcompdetailmodassign',
        'table': 'mprcompdetailmodassign',
        'primaryKey': 'mprCompDetailModAssignID',

        'aliases': {
            'mprCompDetailModAssignID': 'id',
            'mprCompDetailModID': 'mprCompDetailModId',
            'mprCompVersionID': 'mprCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'mprCompDetailID': 'mprCompDetailId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Mprcompdetail': {
        'name': 'Mprcompdetail',
        'table': 'mprcompdetail',
        'primaryKey': 'mprCompDetailID',

        'aliases': {
            'mprCompDetailID': 'id',
            'mprCompVersionID': 'mprCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Mprcompdetailmod': {
        'name': 'Mprcompdetailmod',
        'table': 'mprcompdetailmod',
        'primaryKey': 'mprCompDetailModID',

        'aliases': {
            'mprCompDetailModID': 'id',
            'mprCompDetailID': 'mprCompDetailId',
            'mprCompVersionID': 'mprCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Mprcompnote': {
        'name': 'Mprcompnote',
        'table': 'mprcompnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'mprCompVersionID': 'mprCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Mprcomphold': {
        'name': 'Mprcomphold',
        'table': 'mprcomphold',
        'primaryKey': 'mprCompHoldID',

        'aliases': {
            'mprCompHoldID': 'id',
            'mprCompVersionID': 'mprCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Modifiercompdetail': {
        'name': 'Modifiercompdetail',
        'table': 'modifiercompdetail',
        'primaryKey': 'modifierCompDetailID',

        'aliases': {
            'modifierCompDetailID': 'id',
            'modifierCompVersionID': 'modifierCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Mprcomp': {
        'name': 'Mprcomp',
        'table': 'mprcomp',
        'primaryKey': 'mprCompVersionID',

        'aliases': {
            'mprCompVersionID': 'id',
            'mprCompID': 'mprCompId',
            'ownerGroupID': 'ownerGroupId',
            'pricingExternalID': 'pricingExternalId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Mprcompdetailcoeff': {
        'name': 'Mprcompdetailcoeff',
        'table': 'mprcompdetailcoeff',
        'primaryKey': 'mprCompDetailCoeffID',

        'aliases': {
            'mprCompDetailCoeffID': 'id',
            'mprCompVersionID': 'mprCompVersionId',
            'mprCompDetailID': 'mprCompDetailId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Mprcompauditdetail': {
        'name': 'Mprcompauditdetail',
        'table': 'mprcompauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'mprCompVersionID': 'mprCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msa': {
        'name': 'Msa',
        'table': 'msa',
        'primaryKey': 'msaVersionID',

        'aliases': {
            'msaID': 'msaId',
            'msaVersionID': 'id',
            'msaTemplateID': 'msaTemplateId',
            'memGroupID': 'memGroupId',
            'includeChildMGInd': 'includeChildMgInd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'productVersionID': 'productVersionId',
            'productID': 'productId',
            'adminVendorID': 'adminVendorId'
        },

        'referenceMap': {
            'msa': 'msaId',
            'product': 'productId',
            'adminVendor': 'adminVendorId'
        },

        'listReferences': {}
    },

    'Msaaccesspoint': {
        'name': 'Msaaccesspoint',
        'table': 'msaaccesspoint',
        'primaryKey': 'msaAccessPointID',

        'aliases': {
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'addInOutNetYTDInd': 'addInOutNetYtdInd',
            'msaVersionID': 'msaVersionId',
            'msaAccessPointID': 'id'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msaaccesspointfus': {
        'name': 'Msaaccesspointfus',
        'table': 'msaaccesspointfus',
        'primaryKey': 'msaAccessPointFusID',

        'aliases': {
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'msaVersionID': 'msaVersionId',
            'msaAccessPointFusID': 'id'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msaaccesspointfuslevel': {
        'name': 'Msaaccesspointfuslevel',
        'table': 'msaaccesspointfuslevel',
        'primaryKey': 'msaAccessPointFusLevelID',

        'aliases': {
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'msaVersionID': 'msaVersionId',
            'msaAccessPointFusLevelID': 'id'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msaaccesspointflat': {
        'name': 'Msaaccesspointflat',
        'table': 'msaaccesspointflat',
        'primaryKey': 'msaAccessPointFlatID',

        'aliases': {
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'msaVersionID': 'msaVersionId',
            'msaAccessPointFlatID': 'id'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msacapcarryoverfuslevel': {
        'name': 'Msacapcarryoverfuslevel',
        'table': 'msacapcarryoverfuslevel',
        'primaryKey': 'msaCapCarryoverFusLevelID',

        'aliases': {
            'msaCapCarryoverFusLevelID': 'id',
            'msaVersionID': 'msaVersionId',
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msacarryover': {
        'name': 'Msacarryover',
        'table': 'msacarryover',
        'primaryKey': 'msaCarryoverID',

        'aliases': {
            'msaCarryoverID': 'id',
            'msaVersionID': 'msaVersionId',
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msaauditdetail': {
        'name': 'Msaauditdetail',
        'table': 'msaauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'msaVersionID': 'msaVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msacontribdef': {
        'name': 'Msacontribdef',
        'table': 'msacontribdef',
        'primaryKey': 'msaVersionID',

        'aliases': {
            'msaVersionID': 'id',
            'familyUnitScheduleID': 'familyUnitScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'varyMaxContribByMGInd': 'varyMaxContribByMgInd',
            'varyMaxBalanceByMGInd': 'varyMaxBalanceByMgInd',
            'varyCarryoverByMGInd': 'varyCarryoverByMgInd',
            'varyAccessPointByMGInd': 'varyAccessPointByMgInd'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msaaccesspointrctier': {
        'name': 'Msaaccesspointrctier',
        'table': 'msaaccesspointrctier',
        'primaryKey': 'accessPtSeqNum',

        'aliases': {
            'msaID': 'id',
            'sequenceNum': 'id',
            'relationshipCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'accessPtSeqNum': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msacapcarryoverfus': {
        'name': 'Msacapcarryoverfus',
        'table': 'msacapcarryoverfus',
        'primaryKey': 'msaCapCarryoverFusID',

        'aliases': {
            'msaCapCarryoverFusID': 'id',
            'msaVersionID': 'msaVersionId',
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msacontribmaxfus': {
        'name': 'Msacontribmaxfus',
        'table': 'msacontribmaxfus',
        'primaryKey': 'msaContribMaxFusID',

        'aliases': {
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'msaVersionID': 'msaVersionId',
            'msaContribMaxFusID': 'id'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msaaccesspointrc': {
        'name': 'Msaaccesspointrc',
        'table': 'msaaccesspointrc',
        'primaryKey': 'accessPtSeqNum',

        'aliases': {
            'msaID': 'id',
            'sequenceNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'accessPtSeqNum': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msaaptranstypedef': {
        'name': 'Msaaptranstypedef',
        'table': 'msaaptranstypedef',
        'primaryKey': 'msaAPTransTypeDefID',

        'aliases': {
            'msaAPTransTypeDefID': 'id',
            'msaVersionID': 'msaVersionId',
            'msaID': 'msaId',
            'toMsaID': 'toMsaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'msa': 'msaId',
            'toMsa': 'toMsaId'
        },

        'listReferences': {}
    },

    'Msacapcarryover': {
        'name': 'Msacapcarryover',
        'table': 'msacapcarryover',
        'primaryKey': 'msaCapCarryoverID',

        'aliases': {
            'msaCapCarryoverID': 'id',
            'msaVersionID': 'msaVersionId',
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msacontribmaxfuslevel': {
        'name': 'Msacontribmaxfuslevel',
        'table': 'msacontribmaxfuslevel',
        'primaryKey': 'msaContribMaxFusLevelID',

        'aliases': {
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'msaVersionID': 'msaVersionId',
            'msaContribMaxFusLevelID': 'id'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msacontribmax': {
        'name': 'Msacontribmax',
        'table': 'msacontribmax',
        'primaryKey': 'msaContribMaxID',

        'aliases': {
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'msaVersionID': 'msaVersionId',
            'msaContribMaxID': 'id'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msaexpensecodemax': {
        'name': 'Msaexpensecodemax',
        'table': 'msaexpensecodemax',
        'primaryKey': 'maximumID',

        'aliases': {
            'msaID': 'id',
            'expenseCode': 'id',
            'expenseCodeSeqNum': 'id',
            'maximumID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msabalexchange': {
        'name': 'Msabalexchange',
        'table': 'msabalexchange',
        'primaryKey': 'msaBalExchangeID',

        'aliases': {
            'msaBalExchangeID': 'id',
            'msaVersionID': 'msaVersionId',
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'autoFSAInd': 'autoFsaInd',
            'carrierID': 'carrierId',
            'employeeIDSource': 'employeeIdSource'
        },

        'referenceMap': {
            'msa': 'msaId',
            'carrier': 'carrierId'
        },

        'listReferences': {}
    },

    'Msacontribtypedef': {
        'name': 'Msacontribtypedef',
        'table': 'msacontribtypedef',
        'primaryKey': 'msaContribTypeDefID',

        'aliases': {
            'msaContribTypeDefID': 'id',
            'msaVersionID': 'msaVersionId',
            'msaID': 'msaId',
            'interestDT': 'interestDt',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msacoveredmr': {
        'name': 'Msacoveredmr',
        'table': 'msacoveredmr',
        'primaryKey': 'msaCoveredMRID',

        'aliases': {
            'msaCoveredMRID': 'id',
            'msaVersionID': 'msaVersionId',
            'msaID': 'msaId',
            'coveredMRSeqNum': 'coveredMrSeqNum',
            'coveredMREffDate': 'coveredMrEffDate',
            'coveredMRExpDate': 'coveredMrExpDate',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msacovrelationship': {
        'name': 'Msacovrelationship',
        'table': 'msacovrelationship',
        'primaryKey': 'covRelSeqNum',

        'aliases': {
            'msaID': 'id',
            'covRelSeqNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msacontribtypeprorate': {
        'name': 'Msacontribtypeprorate',
        'table': 'msacontribtypeprorate',
        'primaryKey': 'msaContribTypeProrateID',

        'aliases': {
            'msaContribTypeProrateID': 'id',
            'msaVersionID': 'msaVersionId',
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msaexpense': {
        'name': 'Msaexpense',
        'table': 'msaexpense',
        'primaryKey': 'msaExpenseID',

        'aliases': {
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'allowFutureDOSInd': 'allowFutureDosInd',
            'futureDOSType': 'futureDosType',
            'futureDOSDays': 'futureDosDays',
            'futureDOSMonths': 'futureDosMonths',
            'reqStartDOS': 'reqStartDos',
            'msaVersionID': 'msaVersionId',
            'msaExpenseID': 'id'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msaexternalid': {
        'name': 'Msaexternalid',
        'table': 'msaexternalid',
        'primaryKey': 'msaExternalID',

        'aliases': {
            'msaExternalID': 'id',
            'msaVersionID': 'msaVersionId',
            'entityID': 'entityId',
            'externalMsaID': 'externalMsaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'externalMsa': 'externalMsaId'
        },

        'listReferences': {}
    },

    'Msadepcert': {
        'name': 'Msadepcert',
        'table': 'msadepcert',
        'primaryKey': 'sequenceNum',

        'aliases': {
            'msaID': 'id',
            'relationshipCode': 'id',
            'sequenceNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msaexpensecode': {
        'name': 'Msaexpensecode',
        'table': 'msaexpensecode',
        'primaryKey': 'msaExpenseCodeID',

        'aliases': {
            'msaID': 'msaId',
            'ageFromDT': 'ageFromDt',
            'ageThruDT': 'ageThruDt',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'allowFutureDOSInd': 'allowFutureDosInd',
            'futureDOSType': 'futureDosType',
            'futureDOSDays': 'futureDosDays',
            'futureDOSMonths': 'futureDosMonths',
            'reqStartDOS': 'reqStartDos',
            'msaVersionID': 'msaVersionId',
            'msaExpenseCodeID': 'id'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msaflatcontrib': {
        'name': 'Msaflatcontrib',
        'table': 'msaflatcontrib',
        'primaryKey': 'msaFlatContribID',

        'aliases': {
            'msaFlatContribID': 'id',
            'msaVersionID': 'msaVersionId',
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msaflatap': {
        'name': 'Msaflatap',
        'table': 'msaflatap',
        'primaryKey': 'sequenceNum',

        'aliases': {
            'msaID': 'id',
            'apTransactionType': 'id',
            'sequenceNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msafusaplevel': {
        'name': 'Msafusaplevel',
        'table': 'msafusaplevel',
        'primaryKey': 'familyLevel',

        'aliases': {
            'msaID': 'id',
            'apTransactionType': 'id',
            'sequenceNum': 'id',
            'familyLevel': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msafusmaxbalance': {
        'name': 'Msafusmaxbalance',
        'table': 'msafusmaxbalance',
        'primaryKey': 'msaFusMaxBalanceID',

        'aliases': {
            'msaID': 'msaId',
            'maxBalanceDT': 'maxBalanceDt',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'msaVersionID': 'msaVersionId',
            'msaFusMaxBalanceID': 'id'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msafusap': {
        'name': 'Msafusap',
        'table': 'msafusap',
        'primaryKey': 'sequenceNum',

        'aliases': {
            'msaID': 'id',
            'apTransactionType': 'id',
            'sequenceNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msafuscontrib': {
        'name': 'Msafuscontrib',
        'table': 'msafuscontrib',
        'primaryKey': 'msaFusContribID',

        'aliases': {
            'msaFusContribID': 'id',
            'msaVersionID': 'msaVersionId',
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msahealthcare': {
        'name': 'Msahealthcare',
        'table': 'msahealthcare',
        'primaryKey': 'msaHealthcareID',

        'aliases': {
            'msaHealthcareID': 'id',
            'msaVersionID': 'msaVersionId',
            'msaID': 'msaId',
            'scmID': 'scmId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'allowFutureDOSInd': 'allowFutureDosInd',
            'futureDOSType': 'futureDosType',
            'futureDOSDays': 'futureDosDays',
            'futureDOSMonths': 'futureDosMonths',
            'reqStartDOS': 'reqStartDos'
        },

        'referenceMap': {
            'msa': 'msaId',
            'scm': 'scmId'
        },

        'listReferences': {}
    },

    'Msafuscontriblevel': {
        'name': 'Msafuscontriblevel',
        'table': 'msafuscontriblevel',
        'primaryKey': 'msaFusContribLevelID',

        'aliases': {
            'msaFusContribLevelID': 'id',
            'msaVersionID': 'msaVersionId',
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msagraceperiod': {
        'name': 'Msagraceperiod',
        'table': 'msagraceperiod',
        'primaryKey': 'gracePeriodSeqNum',

        'aliases': {
            'msaID': 'id',
            'gracePeriodSeqNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msafusmaxballevel': {
        'name': 'Msafusmaxballevel',
        'table': 'msafusmaxballevel',
        'primaryKey': 'msaFusMaxBalLevelID',

        'aliases': {
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'msaVersionID': 'msaVersionId',
            'msaFusMaxBalLevelID': 'id'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msaindivmax': {
        'name': 'Msaindivmax',
        'table': 'msaindivmax',
        'primaryKey': 'msaIndivMaxID',

        'aliases': {
            'msaIndivMaxID': 'id',
            'msaVersionID': 'msaVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'subjectToIMRInd': 'subjectToImrInd'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msahealthcodemax': {
        'name': 'Msahealthcodemax',
        'table': 'msahealthcodemax',
        'primaryKey': 'maximumID',

        'aliases': {
            'msaID': 'id',
            'benefitCode': 'id',
            'healthCodeSeqNum': 'id',
            'maximumID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msalevelstatus': {
        'name': 'Msalevelstatus',
        'table': 'msalevelstatus',
        'primaryKey': 'employStatusCode',

        'aliases': {
            'msaID': 'id',
            'contribLevel': 'id',
            'employStatusCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msaincentcredit': {
        'name': 'Msaincentcredit',
        'table': 'msaincentcredit',
        'primaryKey': 'msaIncentCreditID',

        'aliases': {
            'msaID': 'msaId',
            'incentID': 'incentId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'msaVersionID': 'msaVersionId',
            'msaIncentCreditID': 'id'
        },

        'referenceMap': {
            'msa': 'msaId',
            'incent': 'incentId'
        },

        'listReferences': {}
    },

    'Msaincdecrule': {
        'name': 'Msaincdecrule',
        'table': 'msaincdecrule',
        'primaryKey': 'msaIncDecRuleID',

        'aliases': {
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'msaVersionID': 'msaVersionId',
            'msaIncDecRuleID': 'id'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msalevelplan': {
        'name': 'Msalevelplan',
        'table': 'msalevelplan',
        'primaryKey': 'planID',

        'aliases': {
            'msaID': 'id',
            'contribLevel': 'id',
            'planID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msalevel': {
        'name': 'Msalevel',
        'table': 'msalevel',
        'primaryKey': 'msaLevelID',

        'aliases': {
            'msaLevelID': 'id',
            'msaVersionID': 'msaVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'ageLimitFromDT': 'ageLimitFromDt',
            'ageLimitFromLCD': 'ageLimitFromLcd',
            'ageLimitThruDT': 'ageLimitThruDt',
            'ageLimitThruLCD': 'ageLimitThruLcd'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msamaxbalance': {
        'name': 'Msamaxbalance',
        'table': 'msamaxbalance',
        'primaryKey': 'msaMaxBalanceID',

        'aliases': {
            'msaID': 'msaId',
            'maxBalanceDT': 'maxBalanceDt',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'msaVersionID': 'msaVersionId',
            'msaMaxBalanceID': 'id'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msanetworktier': {
        'name': 'Msanetworktier',
        'table': 'msanetworktier',
        'primaryKey': 'parStatusType',

        'aliases': {
            'msaID': 'id',
            'networkTier': 'id',
            'parStatusType': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msamaximum': {
        'name': 'Msamaximum',
        'table': 'msamaximum',
        'primaryKey': 'maximumID',

        'aliases': {
            'msaID': 'id',
            'maximumID': 'id',
            'maximumDT': 'maximumDt',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msanote': {
        'name': 'Msanote',
        'table': 'msanote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'msaVersionID': 'msaVersionId',
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msapaidincurred': {
        'name': 'Msapaidincurred',
        'table': 'msapaidincurred',
        'primaryKey': 'paidIncSeqNum',

        'aliases': {
            'msaID': 'id',
            'paidIncSeqNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msanoncovrxthercode': {
        'name': 'Msanoncovrxthercode',
        'table': 'msanoncovrxthercode',
        'primaryKey': 'therapeuticClassCode',

        'aliases': {
            'msaID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'therapeuticClassCode': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msaproration': {
        'name': 'Msaproration',
        'table': 'msaproration',
        'primaryKey': 'msaProrationID',

        'aliases': {
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'msaVersionID': 'msaVersionId',
            'msaProrationID': 'id'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msamaxfamilylvl': {
        'name': 'Msamaxfamilylvl',
        'table': 'msamaxfamilylvl',
        'primaryKey': 'familyLevel',

        'aliases': {
            'msaID': 'id',
            'maximumID': 'id',
            'familyLevel': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msahold': {
        'name': 'Msahold',
        'table': 'msahold',
        'primaryKey': 'msaHoldID',

        'aliases': {
            'msaHoldID': 'id',
            'msaVersionID': 'msaVersionId',
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'holdCAC': 'holdCac'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Msapurse': {
        'name': 'Msapurse',
        'table': 'msapurse',
        'primaryKey': 'planStartYear',

        'aliases': {
            'msaType': 'id',
            'purseID': 'purseId',
            'planStartYear': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msarelationship': {
        'name': 'Msarelationship',
        'table': 'msarelationship',
        'primaryKey': 'msaRelationshipID',

        'aliases': {
            'msaRelationshipID': 'id',
            'msaSettingID': 'msaSettingId',
            'msaVersionID': 'msaVersionId',
            'ageLimitFromDT': 'ageLimitFromDt',
            'ageLimitFromLCD': 'ageLimitFromLcd',
            'ageLimitThruDT': 'ageLimitThruDt',
            'ageLimitThruLCD': 'ageLimitThruLcd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msastacking': {
        'name': 'Msastacking',
        'table': 'msastacking',
        'primaryKey': 'stackAccountType',

        'aliases': {
            'msaType': 'id',
            'stackAccountType': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msatermenrollstatus': {
        'name': 'Msatermenrollstatus',
        'table': 'msatermenrollstatus',
        'primaryKey': 'employStatusCode',

        'aliases': {
            'msaVersionID': 'id',
            'msaSettingID': 'id',
            'termEnrollType': 'id',
            'employStatusCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msastudentage': {
        'name': 'Msastudentage',
        'table': 'msastudentage',
        'primaryKey': 'sequenceNum',

        'aliases': {
            'msaID': 'id',
            'sequenceNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msatype': {
        'name': 'Msatype',
        'table': 'msatype',
        'primaryKey': 'msaType',

        'aliases': {
            'msaType': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msavalidation': {
        'name': 'Msavalidation',
        'table': 'msavalidation',
        'primaryKey': 'msaValidationID',

        'aliases': {
            'msaValidationID': 'id',
            'msaVersionID': 'msaVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msasetting': {
        'name': 'Msasetting',
        'table': 'msasetting',
        'primaryKey': 'msaSettingID',

        'aliases': {
            'msaSettingID': 'id',
            'msaVersionID': 'msaVersionId',
            'msaID': 'msaId',
            'breakDT': 'breakDt',
            'disregardTPLInd': 'disregardTplInd',
            'filingLimitDT': 'filingLimitDt',
            'remarkCodeScheduleID': 'remarkCodeScheduleId',
            'termFilingDT': 'termFilingDt',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'filLimDTNonP': 'filLimDtNonP',
            'termFilingDTNonP': 'termFilingDtNonP',
            'adjudScheduleID': 'adjudScheduleId'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Ndcawpfileuploadstaging': {
        'name': 'Ndcawpfileuploadstaging',
        'table': 'ndcawpfileuploadstaging',
        'primaryKey': 'ndcAwpFileUploadStagingID',

        'aliases': {
            'ndcAwpFileUploadStagingID': 'id',
            'ndcAwpFileUploadHeaderID': 'ndcAwpFileUploadHeaderId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ndcawpref': {
        'name': 'Ndcawpref',
        'table': 'ndcawpref',
        'primaryKey': 'ndcAwpRefID',

        'aliases': {
            'ndcAwpRefID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ndc': {
        'name': 'Ndc',
        'table': 'ndc',
        'primaryKey': 'sequenceNum',

        'aliases': {
            'ndcCode': 'id',
            'sequenceNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msapayandchase': {
        'name': 'Msapayandchase',
        'table': 'msapayandchase',
        'primaryKey': 'payAndChaseSeqNum',

        'aliases': {
            'msaID': 'id',
            'payAndChaseSeqNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ndccomphold': {
        'name': 'Ndccomphold',
        'table': 'ndccomphold',
        'primaryKey': 'ndcCompHoldID',

        'aliases': {
            'ndcCompHoldID': 'id',
            'ndcCompVersionID': 'ndcCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msaplanyear': {
        'name': 'Msaplanyear',
        'table': 'msaplanyear',
        'primaryKey': 'benPeriodStartDate',

        'aliases': {
            'msaID': 'id',
            'benPeriodStartDate': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Msaindivcapcarryover': {
        'name': 'Msaindivcapcarryover',
        'table': 'msaindivcapcarryover',
        'primaryKey': 'msaIndivCapCarryoverID',

        'aliases': {
            'msaIndivCapCarryoverID': 'id',
            'msaVersionID': 'msaVersionId',
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Ndccomp': {
        'name': 'Ndccomp',
        'table': 'ndccomp',
        'primaryKey': 'ndcCompVersionID',

        'aliases': {
            'ndcCompVersionID': 'id',
            'ndcCompID': 'ndcCompId',
            'ownerGroupID': 'ownerGroupId',
            'pricingExternalID': 'pricingExternalId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ndccompnote': {
        'name': 'Ndccompnote',
        'table': 'ndccompnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'ndcCompVersionID': 'ndcCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ndccompauditdetail': {
        'name': 'Ndccompauditdetail',
        'table': 'ndccompauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'ndcCompVersionID': 'ndcCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ndccompdetail': {
        'name': 'Ndccompdetail',
        'table': 'ndccompdetail',
        'primaryKey': 'ndcCompDetailID',

        'aliases': {
            'ndcCompDetailID': 'id',
            'ndcCompVersionID': 'ndcCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ndcawpfileuploadheader': {
        'name': 'Ndcawpfileuploadheader',
        'table': 'ndcawpfileuploadheader',
        'primaryKey': 'ndcAwpFileUploadHeaderID',

        'aliases': {
            'ndcAwpFileUploadHeaderID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ndcmacfileuploadheader': {
        'name': 'Ndcmacfileuploadheader',
        'table': 'ndcmacfileuploadheader',
        'primaryKey': 'ndcMacFileUploadHeaderID',

        'aliases': {
            'ndcMacFileUploadHeaderID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ndcprdpckbasefileuploadheader': {
        'name': 'Ndcprdpckbasefileuploadheader',
        'table': 'ndcprdpckbasefileuploadheader',
        'primaryKey': 'ndcPrdPckBaseFileUploadHeaderID',

        'aliases': {
            'ndcPrdPckBaseFileUploadHeaderID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ndcmodifiercompassign': {
        'name': 'Ndcmodifiercompassign',
        'table': 'ndcmodifiercompassign',
        'primaryKey': 'ndcModifierCompAssignID',

        'aliases': {
            'ndcModifierCompAssignID': 'id',
            'ndcCompVersionID': 'ndcCompVersionId',
            'modifierCompID': 'modifierCompId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ndcpackagefileuploadstaging': {
        'name': 'Ndcpackagefileuploadstaging',
        'table': 'ndcpackagefileuploadstaging',
        'primaryKey': 'ndcPackageFileUploadStagingID',

        'aliases': {
            'ndcPackageFileUploadStagingID': 'id',
            'ndcPrdPckBaseFileUploadHeaderID': 'ndcPrdPckBaseFileUploadHeaderId',
            'ndcPrdPckProductID': 'ndcPrdPckProductId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'ndcPrdPckProduct': 'ndcPrdPckProductId'
        },

        'listReferences': {}
    },

    'Netcontract': {
        'name': 'Netcontract',
        'table': 'netcontract',
        'primaryKey': 'netContractVersionID',

        'aliases': {
            'netContractVersionID': 'id',
            'netContractID': 'netContractId',
            'netContractHeaderID': 'netContractHeaderId',
            'pricingSetID': 'pricingSetId',
            'externalContractID': 'externalContractId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'promptPaySchedID': 'promptPaySchedId',
            'delegSetID': 'delegSetId',
            'dofrSetID': 'dofrSetId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ndcproductfileuploadstaging': {
        'name': 'Ndcproductfileuploadstaging',
        'table': 'ndcproductfileuploadstaging',
        'primaryKey': 'ndcProductFileUploadStagingID',

        'aliases': {
            'ndcProductFileUploadStagingID': 'id',
            'ndcPrdPckBaseFileUploadHeaderID': 'ndcPrdPckBaseFileUploadHeaderId',
            'ndcPrdPckProductID': 'ndcPrdPckProductId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'ndcPrdPckProduct': 'ndcPrdPckProductId'
        },

        'listReferences': {}
    },

    'Netcontractcarriersupportteam': {
        'name': 'Netcontractcarriersupportteam',
        'table': 'netcontractcarriersupportteam',
        'primaryKey': 'netContractCarrierSupTeamID',

        'aliases': {
            'netContractCarrierSupTeamID': 'id',
            'netContractCarrierID': 'netContractCarrierId',
            'netContractVersionID': 'netContractVersionId',
            'netContractHeaderID': 'netContractHeaderId',
            'supportTeamID': 'supportTeamId',
            'netContractSupportTeamID': 'netContractSupportTeamId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'netContractCarrier': 'netContractCarrierId'
        },

        'listReferences': {}
    },

    'Netcontractfilinglimit': {
        'name': 'Netcontractfilinglimit',
        'table': 'netcontractfilinglimit',
        'primaryKey': 'netContractFilingLimitID',

        'aliases': {
            'netContractFilingLimitID': 'id',
            'netContractVersionID': 'netContractVersionId',
            'netContractHeaderID': 'netContractHeaderId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ndcmacref': {
        'name': 'Ndcmacref',
        'table': 'ndcmacref',
        'primaryKey': 'ndcMacRefID',

        'aliases': {
            'ndcMacRefID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Netcontractcarrier': {
        'name': 'Netcontractcarrier',
        'table': 'netcontractcarrier',
        'primaryKey': 'netContractCarrierID',

        'aliases': {
            'netContractCarrierID': 'id',
            'netContractVersionID': 'netContractVersionId',
            'netContractHeaderID': 'netContractHeaderId',
            'carrierID': 'carrierId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'carrier': 'carrierId'
        },

        'listReferences': {}
    },

    'Ndcmacfileuploadstaging': {
        'name': 'Ndcmacfileuploadstaging',
        'table': 'ndcmacfileuploadstaging',
        'primaryKey': 'ndcMacFileUploadStagingID',

        'aliases': {
            'ndcMacFileUploadStagingID': 'id',
            'ndcMacFileUploadHeaderID': 'ndcMacFileUploadHeaderId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Netcontractheaderauditdetail': {
        'name': 'Netcontractheaderauditdetail',
        'table': 'netcontractheaderauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'netContractHeaderID': 'netContractHeaderId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Netcontractcarrierfilinglimit': {
        'name': 'Netcontractcarrierfilinglimit',
        'table': 'netcontractcarrierfilinglimit',
        'primaryKey': 'netContractCarrierFilingLmtID',

        'aliases': {
            'netContractCarrierFilingLmtID': 'id',
            'netContractCarrierID': 'netContractCarrierId',
            'netContractVersionID': 'netContractVersionId',
            'netContractHeaderID': 'netContractHeaderId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'netContractCarrier': 'netContractCarrierId'
        },

        'listReferences': {}
    },

    'Netcontractheader': {
        'name': 'Netcontractheader',
        'table': 'netcontractheader',
        'primaryKey': 'netContractHeaderID',

        'aliases': {
            'netContractHeaderID': 'id',
            'networkID': 'networkId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'network': 'networkId'
        },

        'listReferences': {}
    },

    'Netcontractfinancialpen': {
        'name': 'Netcontractfinancialpen',
        'table': 'netcontractfinancialpen',
        'primaryKey': 'netContractFinancialPenID',

        'aliases': {
            'netContractFinancialPenID': 'id',
            'netContractVersionID': 'netContractVersionId',
            'netContractHeaderID': 'netContractHeaderId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Netcontractauditdetail': {
        'name': 'Netcontractauditdetail',
        'table': 'netcontractauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'netContractVersionID': 'netContractVersionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Netcontractnote': {
        'name': 'Netcontractnote',
        'table': 'netcontractnotes',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'netContractVersionID': 'netContractVersionId',
            'netContractHeaderID': 'netContractHeaderId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Netcontractlob': {
        'name': 'Netcontractlob',
        'table': 'netcontractlob',
        'primaryKey': 'netContractLOBID',

        'aliases': {
            'netContractLOBID': 'id',
            'netContractVersionID': 'netContractVersionId',
            'netContractHeaderID': 'netContractHeaderId',
            'lineOfBusinessID': 'lineOfBusinessId',
            'clauseCodeExternalContractID': 'clauseCodeExternalContractId',
            'clauseCodeSetID': 'clauseCodeSetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Netcontractowner': {
        'name': 'Netcontractowner',
        'table': 'netcontractowner',
        'primaryKey': 'netContractOwnerID',

        'aliases': {
            'netContractOwnerID': 'id',
            'netContractVersionID': 'netContractVersionId',
            'netContractHeaderID': 'netContractHeaderId',
            'carrierID': 'carrierId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'carrier': 'carrierId'
        },

        'listReferences': {}
    },

    'Netcontractlobfilinglimit': {
        'name': 'Netcontractlobfilinglimit',
        'table': 'netcontractlobfilinglimit',
        'primaryKey': 'netContractLOBFilingLimitID',

        'aliases': {
            'netContractLOBFilingLimitID': 'id',
            'netContractLOBID': 'netContractLobid',
            'netContractVersionID': 'netContractVersionId',
            'netContractHeaderID': 'netContractHeaderId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Netcontractmembergroup': {
        'name': 'Netcontractmembergroup',
        'table': 'netcontractmembergroup',
        'primaryKey': 'netContractMemberGroupID',

        'aliases': {
            'netContractMemberGroupID': 'id',
            'netContractVersionID': 'netContractVersionId',
            'netContractHeaderID': 'netContractHeaderId',
            'memGroupID': 'memGroupId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Netcontractprovaffiliation': {
        'name': 'Netcontractprovaffiliation',
        'table': 'netcontractprovaffiliation',
        'primaryKey': 'netContractProvAffiliationID',

        'aliases': {
            'netContractProvAffiliationID': 'id',
            'netContractVersionID': 'netContractVersionId',
            'netContractHeaderID': 'netContractHeaderId',
            'providerOrgAffiliationID': 'providerOrgAffiliationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Netcontractplan': {
        'name': 'Netcontractplan',
        'table': 'netcontractplan',
        'primaryKey': 'netContractPlanID',

        'aliases': {
            'netContractPlanID': 'id',
            'netContractVersionID': 'netContractVersionId',
            'netContractHeaderID': 'netContractHeaderId',
            'planID': 'planId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Netcontractid': {
        'name': 'Netcontractid',
        'table': 'netcontractid',
        'primaryKey': 'netContractIDID',

        'aliases': {
            'netContractIDID': 'id',
            'netContractVersionID': 'netContractVersionId',
            'netContractHeaderID': 'netContractHeaderId',
            'originalSourceSystemID': 'originalSourceSystemId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Netcontractnetwork': {
        'name': 'Netcontractnetwork',
        'table': 'netcontractnetwork',
        'primaryKey': 'netContractNetworkID',

        'aliases': {
            'netContractNetworkID': 'id',
            'netContractVersionID': 'netContractVersionId',
            'netContractHeaderID': 'netContractHeaderId',
            'networkID': 'networkId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'network': 'networkId'
        },

        'listReferences': {}
    },

    'Netcontractheadernote': {
        'name': 'Netcontractheadernote',
        'table': 'netcontractheadernote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'netContractHeaderID': 'netContractHeaderId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Netcontracthold': {
        'name': 'Netcontracthold',
        'table': 'netcontracthold',
        'primaryKey': 'netContractHoldID',

        'aliases': {
            'netContractHoldID': 'id',
            'netContractVersionID': 'netContractVersionId',
            'netContractHeaderID': 'netContractHeaderId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Netcontractservicearea': {
        'name': 'Netcontractservicearea',
        'table': 'netcontractservicearea',
        'primaryKey': 'netContractServiceAreaID',

        'aliases': {
            'netContractServiceAreaID': 'id',
            'netContractVersionID': 'netContractVersionId',
            'netContractHeaderID': 'netContractHeaderId',
            'serviceAreaID': 'serviceAreaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Netcontractprovlocation': {
        'name': 'Netcontractprovlocation',
        'table': 'netcontractprovlocation',
        'primaryKey': 'netContractProvLocationID',

        'aliases': {
            'netContractProvLocationID': 'id',
            'netContractProvAffiliationID': 'netContractProvAffiliationId',
            'netContractVersionID': 'netContractVersionId',
            'netContractHeaderID': 'netContractHeaderId',
            'providerLocationAffiliationID': 'providerLocationAffiliationId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Netcontractprovnetworkpanel': {
        'name': 'Netcontractprovnetworkpanel',
        'table': 'netcontractprovnetworkpanel',
        'primaryKey': 'netContractProvNetworkPanelID',

        'aliases': {
            'netContractProvNetworkPanelID': 'id',
            'netContractProvAffiliationID': 'netContractProvAffiliationId',
            'netContractNetworkID': 'netContractNetworkId',
            'netContractVersionID': 'netContractVersionId',
            'netContractHeaderID': 'netContractHeaderId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'netContractNetwork': 'netContractNetworkId'
        },

        'listReferences': {}
    },

    'Netcontractlobclausecode': {
        'name': 'Netcontractlobclausecode',
        'table': 'netcontractlobclausecode',
        'primaryKey': 'netContractLOBClauseCodeID',

        'aliases': {
            'netContractLOBClauseCodeID': 'id',
            'netContractLOBID': 'netContractLobid',
            'netContractVersionID': 'netContractVersionId',
            'netContractHeaderID': 'netContractHeaderId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Netcontractprovtin': {
        'name': 'Netcontractprovtin',
        'table': 'netcontractprovtin',
        'primaryKey': 'netContractProvTinID',

        'aliases': {
            'netContractProvTinID': 'id',
            'netContractProvAffiliationID': 'netContractProvAffiliationId',
            'netContractVersionID': 'netContractVersionId',
            'netContractHeaderID': 'netContractHeaderId',
            'provTINID': 'provTinid',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Netcontractproduct': {
        'name': 'Netcontractproduct',
        'table': 'netcontractproduct',
        'primaryKey': 'netContractProductID',

        'aliases': {
            'netContractProductID': 'id',
            'netContractVersionID': 'netContractVersionId',
            'netContractHeaderID': 'netContractHeaderId',
            'productID': 'productId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'product': 'productId'
        },

        'listReferences': {}
    },

    'Netdirsuppress': {
        'name': 'Netdirsuppress',
        'table': 'netdirsuppress',
        'primaryKey': 'netDirSuppressID',

        'aliases': {
            'netDirSuppressID': 'id',
            'networkID': 'networkId',
            'productID': 'productId',
            'planID': 'planId',
            'lineOfBusinessID': 'lineOfBusinessId',
            'serviceAreaID': 'serviceAreaId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'network': 'networkId',
            'product': 'productId'
        },

        'listReferences': {}
    },

    'Netcontractsupportteam': {
        'name': 'Netcontractsupportteam',
        'table': 'netcontractsupportteam',
        'primaryKey': 'netContractSupportTeamID',

        'aliases': {
            'netContractSupportTeamID': 'id',
            'netContractVersionID': 'netContractVersionId',
            'netContractHeaderID': 'netContractHeaderId',
            'supportTeamID': 'supportTeamId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Netdirsuppressregion': {
        'name': 'Netdirsuppressregion',
        'table': 'netdirsuppressregion',
        'primaryKey': 'netDirSuppressRegionID',

        'aliases': {
            'netDirSuppressRegionID': 'id',
            'netDirSuppressID': 'netDirSuppressId',
            'serviceAreaRegionID': 'serviceAreaRegionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'serviceAreaRegion': 'serviceAreaRegionId'
        },

        'listReferences': {}
    },

    'Netcontracttermeventlog': {
        'name': 'Netcontracttermeventlog',
        'table': 'netcontracttermeventlog',
        'primaryKey': 'netContractTermEventLogID',

        'aliases': {
            'netContractTermEventLogID': 'id',
            'netContractVersionID': 'netContractVersionId',
            'netContractID': 'netContractId',
            'netContractHeaderID': 'netContractHeaderId',
            'netContractProvAffiliationID': 'netContractProvAffiliationId',
            'providerOrgAffiliationID': 'providerOrgAffiliationId',
            'netContractNetworkID': 'netContractNetworkId',
            'networkID': 'networkId',
            'providerID': 'providerId',
            'memberID': 'memberId',
            'memberBenefitID': 'memberBenefitId',
            'planID': 'planId',
            'memGroupID': 'memGroupId',
            'networkScheduleID': 'networkScheduleId',
            'subsAffiliationID': 'subsAffiliationId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'netContractNetwork': 'netContractNetworkId',
            'network': 'networkId',
            'provider': 'providerId',
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Netdirsuppressauditdetail': {
        'name': 'Netdirsuppressauditdetail',
        'table': 'netdirsuppressauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'netDirSuppressID': 'netDirSuppressId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Netcontracttaxonomy': {
        'name': 'Netcontracttaxonomy',
        'table': 'netcontracttaxonomy',
        'primaryKey': 'netContractTaxonomyID',

        'aliases': {
            'netContractTaxonomyID': 'id',
            'netContractVersionID': 'netContractVersionId',
            'netContractHeaderID': 'netContractHeaderId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Netschedulelogo': {
        'name': 'Netschedulelogo',
        'table': 'netschedulelogo',
        'primaryKey': 'netScheduleLogoID',

        'aliases': {
            'netScheduleLogoID': 'id',
            'networkScheduleID': 'networkScheduleId',
            'logoID': 'logoId',
            'serviceAreaID': 'serviceAreaId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'logo': 'logoId'
        },

        'listReferences': {}
    },

    'Netscheduleextid': {
        'name': 'Netscheduleextid',
        'table': 'netscheduleextid',
        'primaryKey': 'netScheduleExtIDID',

        'aliases': {
            'netScheduleExtIDID': 'id',
            'networkScheduleID': 'networkScheduleId',
            'originalSourceSystemID': 'originalSourceSystemId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Netcontractproviderfinpen': {
        'name': 'Netcontractproviderfinpen',
        'table': 'netcontractproviderfinpen',
        'primaryKey': 'netContractProviderFinPenID',

        'aliases': {
            'netContractProviderFinPenID': 'id',
            'netContractFinancialPenID': 'netContractFinancialPenId',
            'netContractVersionID': 'netContractVersionId',
            'netContractHeaderID': 'netContractHeaderId',
            'providerID': 'providerId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Networkauditdetail': {
        'name': 'Networkauditdetail',
        'table': 'networkauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'networkID': 'networkId'
        },

        'referenceMap': {
            'network': 'networkId'
        },

        'listReferences': {}
    },

    'Networkcontact': {
        'name': 'Networkcontact',
        'table': 'networkcontact',
        'primaryKey': 'networkContactID',

        'aliases': {
            'networkContactID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Netscheduletier': {
        'name': 'Netscheduletier',
        'table': 'netscheduletier',
        'primaryKey': 'networkTierNum',

        'aliases': {
            'networkScheduleID': 'id',
            'networkTierNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Network': {
        'name': 'Network',
        'table': 'network',
        'primaryKey': 'networkID',

        'aliases': {
            'networkID': 'id',
            'parentID': 'parentId',
            'alphaParentID': 'alphaParentId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Networkcontactaddressphone': {
        'name': 'Networkcontactaddressphone',
        'table': 'networkcontactaddressphone',
        'primaryKey': 'networkContactAddressPhoneID',

        'aliases': {
            'networkContactAddressPhoneID': 'id',
            'networkContactAddressID': 'networkContactAddressId',
            'networkContactPhoneID': 'networkContactPhoneId',
            'networkContactID': 'networkContactId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Networkcontactassignment': {
        'name': 'Networkcontactassignment',
        'table': 'networkcontactassignment',
        'primaryKey': 'networkContactAssignmentID',

        'aliases': {
            'networkContactAssignmentID': 'id',
            'networkID': 'networkId',
            'networkContactID': 'networkContactId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'network': 'networkId'
        },

        'listReferences': {}
    },

    'Netscheduledetail': {
        'name': 'Netscheduledetail',
        'table': 'netscheduledetail',
        'primaryKey': 'netScheduleDetailID',

        'aliases': {
            'netScheduleDetailID': 'id',
            'networkScheduleID': 'networkScheduleId',
            'networkID': 'networkId',
            'netOOAonly': 'netOoAonly',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'network': 'networkId'
        },

        'listReferences': {}
    },

    'Netscheduleheader': {
        'name': 'Netscheduleheader',
        'table': 'netscheduleheader',
        'primaryKey': 'networkScheduleID',

        'aliases': {
            'networkScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Networkcontactaddress': {
        'name': 'Networkcontactaddress',
        'table': 'networkcontactaddress',
        'primaryKey': 'networkContactAddressID',

        'aliases': {
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'networkContactAddressID': 'id',
            'networkContactID': 'networkContactId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Networkcontactauditdetail': {
        'name': 'Networkcontactauditdetail',
        'table': 'networkcontactauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'networkContactID': 'networkContactId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Networkcontactphone': {
        'name': 'Networkcontactphone',
        'table': 'networkcontactphone',
        'primaryKey': 'networkContactPhoneID',

        'aliases': {
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'networkContactPhoneID': 'id',
            'networkContactID': 'networkContactId',
            'nonUSPhoneInd': 'nonUsPhoneInd'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Networkcontactelectroniccom': {
        'name': 'Networkcontactelectroniccom',
        'table': 'networkcontactelectroniccom',
        'primaryKey': 'networkContactElectronicComID',

        'aliases': {
            'networkContactElectronicComID': 'id',
            'networkContactID': 'networkContactId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Networkmedpolicy': {
        'name': 'Networkmedpolicy',
        'table': 'networkmedpolicy',
        'primaryKey': 'networkMedPolicyID',

        'aliases': {
            'networkMedPolicyID': 'id',
            'networkID': 'networkId',
            'medPolicySetID': 'medPolicySetId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'network': 'networkId'
        },

        'listReferences': {}
    },

    'Networkid': {
        'name': 'Networkid',
        'table': 'networkid',
        'primaryKey': 'networkIDID',

        'aliases': {
            'networkIDID': 'id',
            'networkID': 'networkId',
            'originalSourceSystemID': 'originalSourceSystemId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'network': 'networkId'
        },

        'listReferences': {}
    },

    'Networkservicearea': {
        'name': 'Networkservicearea',
        'table': 'networkservicearea',
        'primaryKey': 'networkServiceAreaID',

        'aliases': {
            'networkServiceAreaID': 'id',
            'networkID': 'networkId',
            'serviceAreaScheduleID': 'serviceAreaScheduleId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'network': 'networkId'
        },

        'listReferences': {}
    },

    'Oonpricingptmcomp': {
        'name': 'Oonpricingptmcomp',
        'table': 'oonpricingptmcomp',
        'primaryKey': 'oonPricingPtmCompID',

        'aliases': {
            'oonPricingPtmCompID': 'id',
            'serviceAreaID': 'serviceAreaId',
            'provSpecialtySetID': 'provSpecialtySetId',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Oonpricingptmcompnote': {
        'name': 'Oonpricingptmcompnote',
        'table': 'oonpricingptmcompnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'oonPricingPtmCompID': 'oonPricingPtmCompId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Networknote': {
        'name': 'Networknote',
        'table': 'networknotes',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'networkID': 'networkId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'network': 'networkId'
        },

        'listReferences': {}
    },

    'Networktypecode': {
        'name': 'Networktypecode',
        'table': 'networktypecode',
        'primaryKey': 'networkType',

        'aliases': {
            'networkType': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Networksupportteam': {
        'name': 'Networksupportteam',
        'table': 'networksupportteam',
        'primaryKey': 'networkSupportTeamID',

        'aliases': {
            'networkSupportTeamID': 'id',
            'networkID': 'networkId',
            'supportTeamID': 'supportTeamId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'network': 'networkId'
        },

        'listReferences': {}
    },

    'Oonpricinglogo': {
        'name': 'Oonpricinglogo',
        'table': 'oonpricinglogo',
        'primaryKey': 'oonPricingLogoID',

        'aliases': {
            'oonPricingLogoID': 'id',
            'logoID': 'logoId',
            'serviceAreaID': 'serviceAreaId',
            'oonPricingSchedVersionID': 'oonPricingSchedVersionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'logo': 'logoId'
        },

        'listReferences': {}
    },

    'Oonpricingptmdetail': {
        'name': 'Oonpricingptmdetail',
        'table': 'oonpricingptmdetail',
        'primaryKey': 'oonPricingPtmDetailID',

        'aliases': {
            'oonPricingPtmDetailID': 'id',
            'oonPricingPtmCompID': 'oonPricingPtmCompId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Oonpricingptmcomphold': {
        'name': 'Oonpricingptmcomphold',
        'table': 'oonpricingptmcomphold',
        'primaryKey': 'oonPricingPtmCompHoldID',

        'aliases': {
            'oonPricingPtmCompHoldID': 'id',
            'oonPricingPtmCompID': 'oonPricingPtmCompId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Oonpricingptmprov': {
        'name': 'Oonpricingptmprov',
        'table': 'oonpricingptmprov',
        'primaryKey': 'oonPricingPtmProvID',

        'aliases': {
            'oonPricingPtmProvID': 'id',
            'oonPricingPtmDetailID': 'oonPricingPtmDetailId',
            'oonPricingPtmCompID': 'oonPricingPtmCompId',
            'provSpecialtySetCatID': 'provSpecialtySetCatId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Oonpricingsched': {
        'name': 'Oonpricingsched',
        'table': 'oonpricingsched',
        'primaryKey': 'oonPricingSchedVersionID',

        'aliases': {
            'oonPricingSchedVersionID': 'id',
            'oonPricingSchedID': 'oonPricingSchedId',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Oonpricingschedhold': {
        'name': 'Oonpricingschedhold',
        'table': 'oonpricingschedhold',
        'primaryKey': 'oonPricingSchedHoldID',

        'aliases': {
            'oonPricingSchedHoldID': 'id',
            'oonPricingSchedVersionID': 'oonPricingSchedVersionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Oonpricingschednote': {
        'name': 'Oonpricingschednote',
        'table': 'oonpricingschednote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'oonPricingSchedVersionID': 'oonPricingSchedVersionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Oonpricingschedtimeline': {
        'name': 'Oonpricingschedtimeline',
        'table': 'oonpricingschedtimeline',
        'primaryKey': 'oonPricingSchedTimelineID',

        'aliases': {
            'oonPricingSchedTimelineID': 'id',
            'oonPricingSchedVersionID': 'oonPricingSchedVersionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Oonpricingservicetype': {
        'name': 'Oonpricingservicetype',
        'table': 'oonpricingservicetype',
        'primaryKey': 'oonPricingServiceType',

        'aliases': {
            'oonPricingServiceType': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Oonpricingschedorder': {
        'name': 'Oonpricingschedorder',
        'table': 'oonpricingschedorder',
        'primaryKey': 'oonPricingSchedOrderID',

        'aliases': {
            'oonPricingSchedOrderID': 'id',
            'oonPricingSchedVersionID': 'oonPricingSchedVersionId',
            'oonPricingSchedTimelineID': 'oonPricingSchedTimelineId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Oonpricingschedorderdetail': {
        'name': 'Oonpricingschedorderdetail',
        'table': 'oonpricingschedorderdetail',
        'primaryKey': 'oonPricingSchedOrderDetailID',

        'aliases': {
            'oonPricingSchedOrderDetailID': 'id',
            'oonPricingSchedVersionID': 'oonPricingSchedVersionId',
            'oonPricingSchedTimelineID': 'oonPricingSchedTimelineId',
            'oonPricingSchedOrderID': 'oonPricingSchedOrderId',
            'pricingComponentID': 'pricingComponentId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'tradingPartnerConfigID': 'tradingPartnerConfigId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Oonptmcomponentauditdetail': {
        'name': 'Oonptmcomponentauditdetail',
        'table': 'oonptmcomponentauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'oonPricingPtmCompID': 'oonPricingPtmCompId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Oppservicecomp': {
        'name': 'Oppservicecomp',
        'table': 'oppservicecomp',
        'primaryKey': 'oppServiceCompVersionID',

        'aliases': {
            'oppServiceCompID': 'oppServiceCompId',
            'ownerGroupID': 'ownerGroupId',
            'procedureSetID': 'procedureSetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'oppServiceCompVersionID': 'id',
            'pricingExternalID': 'pricingExternalId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Oppservicecompauditdetail': {
        'name': 'Oppservicecompauditdetail',
        'table': 'oppservicecompauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'oppServiceCompVersionID': 'oppServiceCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Oppservicecompdetail': {
        'name': 'Oppservicecompdetail',
        'table': 'oppservicecompdetail',
        'primaryKey': 'oppServiceCompDetailID',

        'aliases': {
            'oppServiceCompDetailID': 'id',
            'oppServiceCompVersionID': 'oppServiceCompVersionId',
            'passThruCompID': 'passThruCompId',
            'procedureSetCatID': 'procedureSetCatId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Networksetting': {
        'name': 'Networksetting',
        'table': 'networksettings',
        'primaryKey': 'networkSettingsID',

        'aliases': {
            'networkSettingsID': 'id',
            'networkID': 'networkId',
            'clinicalEditSchedID': 'clinicalEditSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'network': 'networkId'
        },

        'listReferences': {}
    },

    'Oppservicecompnote': {
        'name': 'Oppservicecompnote',
        'table': 'oppservicecompnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'oppServiceCompVersionID': 'oppServiceCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Oonpricingptmregion': {
        'name': 'Oonpricingptmregion',
        'table': 'oonpricingptmregion',
        'primaryKey': 'oonPricingPtmRegionID',

        'aliases': {
            'oonPricingPtmRegionID': 'id',
            'oonPricingPtmDetailID': 'oonPricingPtmDetailId',
            'oonPricingPtmCompID': 'oonPricingPtmCompId',
            'serviceAreaRegionID': 'serviceAreaRegionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'serviceAreaRegion': 'serviceAreaRegionId'
        },

        'listReferences': {}
    },

    'Oonpricingschedauditdetail': {
        'name': 'Oonpricingschedauditdetail',
        'table': 'oonpricingschedauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'oonPricingSchedVersionID': 'oonPricingSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Outliercomp': {
        'name': 'Outliercomp',
        'table': 'outliercomp',
        'primaryKey': 'outlierCompVersionID',

        'aliases': {
            'outlierCompID': 'outlierCompId',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'pricingExternalID': 'pricingExternalId',
            'outlierCompVersionID': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Outliercompauditdetail': {
        'name': 'Outliercompauditdetail',
        'table': 'outliercompauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'outlierCompVersionID': 'outlierCompVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Oppservicemodifiercompassignhx': {
        'name': 'Oppservicemodifiercompassignhx',
        'table': 'oppservicemodifiercompassignhx',
        'primaryKey': 'oppServiceModifierCompAssignHxID',

        'aliases': {
            'oppServiceModifierCompAssignHxID': 'id',
            'oppServiceModifierCompAssignID': 'oppServiceModifierCompAssignId',
            'oppServiceCompDetailID': 'oppServiceCompDetailId',
            'modifierCompID': 'modifierCompId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'oppServiceCompID': 'oppServiceCompId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Outliercompclaimclass': {
        'name': 'Outliercompclaimclass',
        'table': 'outliercompclaimclass',
        'primaryKey': 'outlierCompClaimClassID',

        'aliases': {
            'outlierCompClaimClassID': 'id',
            'assignOutlierCompID': 'assignOutlierCompId',
            'pricingSchedVersionID': 'pricingSchedVersionId',
            'pricingSchedID': 'pricingSchedId',
            'claimClassID': 'claimClassId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'outlierCompID': 'outlierCompId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Outliercompdetail': {
        'name': 'Outliercompdetail',
        'table': 'outliercompdetail',
        'primaryKey': 'outlierCompDetailID',

        'aliases': {
            'outlierCompDetailID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'outlierCompVersionID': 'outlierCompVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Outliercomphold': {
        'name': 'Outliercomphold',
        'table': 'outliercomphold',
        'primaryKey': 'outlierCompHoldID',

        'aliases': {
            'outlierCompHoldID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'outlierCompVersionID': 'outlierCompVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Networktype': {
        'name': 'Networktype',
        'table': 'networktype',
        'primaryKey': 'networkType',

        'aliases': {
            'networkID': 'id',
            'networkType': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Overridereasoncodeauditdetail': {
        'name': 'Overridereasoncodeauditdetail',
        'table': 'overridereasoncodeauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Overridereasoncode': {
        'name': 'Overridereasoncode',
        'table': 'overridereasoncode',
        'primaryKey': 'overrideReasonCode',

        'aliases': {
            'overrideReasonCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ownergroup': {
        'name': 'Ownergroup',
        'table': 'ownergroup',
        'primaryKey': 'ownerGroupID',

        'aliases': {
            'ownerGroupID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Oppservicecompdetailpricing': {
        'name': 'Oppservicecompdetailpricing',
        'table': 'oppservicecompdetailpricing',
        'primaryKey': 'oppServiceCompDetailPricingID',

        'aliases': {
            'oppServiceCompDetailPricingID': 'id',
            'oppServiceCompDetailID': 'oppServiceCompDetailId',
            'oppServiceCompVersionID': 'oppServiceCompVersionId',
            'pricingComponentID': 'pricingComponentId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Passthrucomp': {
        'name': 'Passthrucomp',
        'table': 'passthrucomp',
        'primaryKey': 'passThruCompVersionID',

        'aliases': {
            'passThruCompID': 'passThruCompId',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'pricingExternalID': 'pricingExternalId',
            'passThruCompVersionID': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Passthrucompauditdetail': {
        'name': 'Passthrucompauditdetail',
        'table': 'passthrucompauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'passThruCompVersionID': 'passThruCompVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Passthrucompclaimclass': {
        'name': 'Passthrucompclaimclass',
        'table': 'passthrucompclaimclass',
        'primaryKey': 'passThruCompClaimClassID',

        'aliases': {
            'passThruCompClaimClassID': 'id',
            'assignPassThruCompID': 'assignPassThruCompId',
            'pricingSchedVersionID': 'pricingSchedVersionId',
            'claimClassID': 'claimClassId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'pricingSchedID': 'pricingSchedId',
            'passThruCompID': 'passThruCompId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Passthrucompdetailsamedayrev': {
        'name': 'Passthrucompdetailsamedayrev',
        'table': 'passthrucompdetailsamedayrev',
        'primaryKey': 'passThruCompDetailID',

        'aliases': {
            'revenueCode': 'id',
            'passThruCompDetailID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'passThruCompVersionID': 'passThruCompVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Outliercompnote': {
        'name': 'Outliercompnote',
        'table': 'outliercompnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'outlierCompVersionID': 'outlierCompVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Passthrucomphold': {
        'name': 'Passthrucomphold',
        'table': 'passthrucomphold',
        'primaryKey': 'passThruCompHoldID',

        'aliases': {
            'passThruCompHoldID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'passThruCompVersionID': 'passThruCompVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Oppservicecomphold': {
        'name': 'Oppservicecomphold',
        'table': 'oppservicecomphold',
        'primaryKey': 'oppServiceCompHoldID',

        'aliases': {
            'oppServiceCompHoldID': 'id',
            'oppServiceCompVersionID': 'oppServiceCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Permission': {
        'name': 'Permission',
        'table': 'permission',
        'primaryKey': 'permissionID',

        'aliases': {
            'permissionID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Passthrucompnote': {
        'name': 'Passthrucompnote',
        'table': 'passthrucompnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'passThruCompVersionID': 'passThruCompVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Permissiongroup': {
        'name': 'Permissiongroup',
        'table': 'permissiongroup',
        'primaryKey': 'permissionGroupID',

        'aliases': {
            'permissionGroupID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Passthrucompdetail': {
        'name': 'Passthrucompdetail',
        'table': 'passthrucompdetail',
        'primaryKey': 'passThruCompDetailID',

        'aliases': {
            'passThruCompDetailID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'pricingComponentID': 'pricingComponentId',
            'passThruCompVersionID': 'passThruCompVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Permissiongrouppermission': {
        'name': 'Permissiongrouppermission',
        'table': 'permissiongrouppermission',
        'primaryKey': 'permissionID',

        'aliases': {
            'permissionGroupID': 'id',
            'permissionID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pfscomp': {
        'name': 'Pfscomp',
        'table': 'pfscomp',
        'primaryKey': 'pfsCompVersionID',

        'aliases': {
            'pfsCompID': 'pfsCompId',
            'placeOfServiceSetID': 'placeOfServiceSetId',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'pfsCompVersionID': 'id',
            'pricingExternalID': 'pricingExternalId',
            'serviceAreaRegionID': 'serviceAreaRegionId'
        },

        'referenceMap': {
            'serviceAreaRegion': 'serviceAreaRegionId'
        },

        'listReferences': {}
    },

    'Pfscompauditdetail': {
        'name': 'Pfscompauditdetail',
        'table': 'pfscompauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'pfsCompVersionID': 'pfsCompVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Permissiongroupauditdetail': {
        'name': 'Permissiongroupauditdetail',
        'table': 'permissiongroupauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'permissionGroupID': 'permissionGroupId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pfscompdefaultmodcompassign': {
        'name': 'Pfscompdefaultmodcompassign',
        'table': 'pfscompdefaultmodcompassign',
        'primaryKey': 'pfsCompDefaultModCompAssignID',

        'aliases': {
            'pfsCompDefaultModCompAssignID': 'id',
            'pfsCompVersionID': 'pfsCompVersionId',
            'defaultModifierCompID': 'defaultModifierCompId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pfscompposset': {
        'name': 'Pfscompposset',
        'table': 'pfscompposset',
        'primaryKey': 'pfsCompPosSetID',

        'aliases': {
            'pfsCompPosSetID': 'id',
            'pfsCompVersionID': 'pfsCompVersionId',
            'placeOfServiceSetID': 'placeOfServiceSetId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pfscomphold': {
        'name': 'Pfscomphold',
        'table': 'pfscomphold',
        'primaryKey': 'pfsCompHoldID',

        'aliases': {
            'pfsCompHoldID': 'id',
            'pfsCompVersionID': 'pfsCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pfscompnote': {
        'name': 'Pfscompnote',
        'table': 'pfscompnote',
        'primaryKey': 'noteID',

        'aliases': {
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'noteID': 'id',
            'pfsCompVersionID': 'pfsCompVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pfscompprocedure': {
        'name': 'Pfscompprocedure',
        'table': 'pfscompprocedure',
        'primaryKey': 'pfsCompProcedureID',

        'aliases': {
            'pfsCompProcedureID': 'id',
            'pfsCompVersionID': 'pfsCompVersionId',
            'placeOfServiceSetCatID': 'placeOfServiceSetCatId',
            'ageLimitFromDT': 'ageLimitFromDt',
            'ageLimitFromLCD': 'ageLimitFromLcd',
            'ageLimitThruDT': 'ageLimitThruDt',
            'ageLimitThruLCD': 'ageLimitThruLcd',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'placeOfServiceCategoryID': 'placeOfServiceCategoryId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Oppservicecompmultprocreduct': {
        'name': 'Oppservicecompmultprocreduct',
        'table': 'oppservicecompmultprocreduct',
        'primaryKey': 'oppServiceCompMultProcReductID',

        'aliases': {
            'oppServiceCompMultProcReductID': 'id',
            'oppServiceCompVersionID': 'oppServiceCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Oppservicemodassignauditdetail': {
        'name': 'Oppservicemodassignauditdetail',
        'table': 'oppservicemodassignauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'oppServiceModifierCompAssignID': 'oppServiceModifierCompAssignId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pfscompprocmodifier': {
        'name': 'Pfscompprocmodifier',
        'table': 'pfscompprocmodifier',
        'primaryKey': 'pfsCompProcModifierID',

        'aliases': {
            'pfsCompProcModifierID': 'id',
            'pfsCompProcedureID': 'pfsCompProcedureId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'pfsCompVersionID': 'pfsCompVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pfscompprotechcompassign': {
        'name': 'Pfscompprotechcompassign',
        'table': 'pfscompprotechcompassign',
        'primaryKey': 'pfsCompProTechCompAssignID',

        'aliases': {
            'pfsCompProTechCompAssignID': 'id',
            'pfsCompVersionID': 'pfsCompVersionId',
            'proTechSplitCompID': 'proTechSplitCompId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pfsfileuploadheader': {
        'name': 'Pfsfileuploadheader',
        'table': 'pfsfileuploadheader',
        'primaryKey': 'pfsFileUploadHeaderID',

        'aliases': {
            'pfsFileUploadHeaderID': 'id',
            'pfsFileUploadTransactionID': 'pfsFileUploadTransactionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pfsmodifiercompassign': {
        'name': 'Pfsmodifiercompassign',
        'table': 'pfsmodifiercompassign',
        'primaryKey': 'pfsModifierCompAssignID',

        'aliases': {
            'pfsModifierCompAssignID': 'id',
            'pfsCompVersionID': 'pfsCompVersionId',
            'modifierCompID': 'modifierCompId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Placeofserviceset': {
        'name': 'Placeofserviceset',
        'table': 'placeofserviceset',
        'primaryKey': 'placeOfServiceSetID',

        'aliases': {
            'placeOfServiceSetID': 'id',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Oppservicemodifiercompassign': {
        'name': 'Oppservicemodifiercompassign',
        'table': 'oppservicemodifiercompassign',
        'primaryKey': 'oppServiceModifierCompAssignID',

        'aliases': {
            'oppServiceModifierCompAssignID': 'id',
            'oppServiceCompDetailID': 'oppServiceCompDetailId',
            'modifierCompID': 'modifierCompId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'oppServiceCompID': 'oppServiceCompId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Placeofservicesetcat': {
        'name': 'Placeofservicesetcat',
        'table': 'placeofservicesetcat',
        'primaryKey': 'placeOfServiceSetCatID',

        'aliases': {
            'placeOfServiceSetCatID': 'id',
            'placeOfServiceSetID': 'placeOfServiceSetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'placeOfServiceCategoryID': 'placeOfServiceCategoryId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Placeofservicesetauditdetail': {
        'name': 'Placeofservicesetauditdetail',
        'table': 'placeofservicesetauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'placeOfServiceSetID': 'placeOfServiceSetId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pricingmethodtypeexclusion': {
        'name': 'Pricingmethodtypeexclusion',
        'table': 'pricingmethodtypeexclusion',
        'primaryKey': 'pricingMethodTypeExclusionID',

        'aliases': {
            'pricingMethodTypeExclusionID': 'id',
            'pricingSettingID': 'pricingSettingId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Placeofservicecategory': {
        'name': 'Placeofservicecategory',
        'table': 'placeofservicecategory',
        'primaryKey': 'placeOfServiceCategoryID',

        'aliases': {
            'placeOfServiceCategoryID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Placeofservicesetcatdetail': {
        'name': 'Placeofservicesetcatdetail',
        'table': 'placeofservicesetcatdetail',
        'primaryKey': 'placeOfServiceSetCatDetailID',

        'aliases': {
            'placeOfServiceSetCatDetailID': 'id',
            'placeOfServiceSetCatID': 'placeOfServiceSetCatId',
            'placeOfServiceSetID': 'placeOfServiceSetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pricingsched': {
        'name': 'Pricingsched',
        'table': 'pricingsched',
        'primaryKey': 'pricingSchedVersionID',

        'aliases': {
            'pricingSchedVersionID': 'id',
            'pricingSchedID': 'pricingSchedId',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'pricingExternalID': 'pricingExternalId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Poscategorycode': {
        'name': 'Poscategorycode',
        'table': 'poscategorycode',
        'primaryKey': 'posCode',

        'aliases': {
            'posCategory': 'id',
            'posCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pricingschednote': {
        'name': 'Pricingschednote',
        'table': 'pricingschednote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'pricingSchedVersionID': 'pricingSchedVersionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Paytoaddressqueue': {
        'name': 'Paytoaddressqueue',
        'table': 'paytoaddressqueue',
        'primaryKey': 'queueID',

        'aliases': {
            'queueID': 'id',
            'provTINAddressesID': 'provTinAddressesId',
            'providerOrgLocationID': 'providerOrgLocationId',
            'claimProviderID': 'claimProviderId',
            'claimProviderAddressID': 'claimProviderAddressId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'claimProvider': 'claimProviderId'
        },

        'listReferences': {}
    },

    'Pricingschedauditdetail': {
        'name': 'Pricingschedauditdetail',
        'table': 'pricingschedauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'pricingSchedVersionID': 'pricingSchedVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Placeofservicesetcatdetaildef': {
        'name': 'Placeofservicesetcatdetaildef',
        'table': 'placeofservicesetcatdetaildef',
        'primaryKey': 'posCode',

        'aliases': {
            'placeOfServiceSetCatDetailID': 'id',
            'placeOfServiceSetID': 'id',
            'posCode': 'id',
            'placeOfServiceSetCatID': 'placeOfServiceSetCatId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pricingschedorder': {
        'name': 'Pricingschedorder',
        'table': 'pricingschedorder',
        'primaryKey': 'pricingSchedOrderID',

        'aliases': {
            'pricingSchedOrderID': 'id',
            'pricingSchedVersionID': 'pricingSchedVersionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'apcPayerID': 'apcPayerId',
            'apcFacilityID': 'apcFacilityId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pricingset': {
        'name': 'Pricingset',
        'table': 'pricingset',
        'primaryKey': 'pricingSetVersionID',

        'aliases': {
            'pricingSetVersionID': 'id',
            'pricingSetID': 'pricingSetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pricingschedorderclaimclass': {
        'name': 'Pricingschedorderclaimclass',
        'table': 'pricingschedorderclaimclass',
        'primaryKey': 'pricingSchedOrderClaimClassID',

        'aliases': {
            'pricingSchedOrderClaimClassID': 'id',
            'pricingSchedOrderID': 'pricingSchedOrderId',
            'pricingSchedVersionID': 'pricingSchedVersionId',
            'claimClassID': 'claimClassId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pricingschedorderdetail': {
        'name': 'Pricingschedorderdetail',
        'table': 'pricingschedorderdetail',
        'primaryKey': 'pricingSchedOrderDetailID',

        'aliases': {
            'pricingSchedOrderDetailID': 'id',
            'pricingSchedOrderID': 'pricingSchedOrderId',
            'pricingSchedVersionID': 'pricingSchedVersionId',
            'pricingComponentID': 'pricingComponentId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'tradingPartnerConfigID': 'tradingPartnerConfigId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pricingsetauditdetail': {
        'name': 'Pricingsetauditdetail',
        'table': 'pricingsetauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'auditDetailID': 'id',
            'pricingSetVersionID': 'pricingSetVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pricingsetnote': {
        'name': 'Pricingsetnote',
        'table': 'pricingsetnote',
        'primaryKey': 'noteID',

        'aliases': {
            'pricingSetVersionID': 'pricingSetVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'noteID': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pricingschedhold': {
        'name': 'Pricingschedhold',
        'table': 'pricingschedhold',
        'primaryKey': 'pricingSchedHoldID',

        'aliases': {
            'pricingSchedHoldID': 'id',
            'pricingSchedVersionID': 'pricingSchedVersionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pricingservicecategory': {
        'name': 'Pricingservicecategory',
        'table': 'pricingservicecategory',
        'primaryKey': 'pricingServiceCategory',

        'aliases': {
            'pricingServiceCategory': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Poscategory': {
        'name': 'Poscategory',
        'table': 'poscategory',
        'primaryKey': 'posCategory',

        'aliases': {
            'posCategory': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pricingsetsource': {
        'name': 'Pricingsetsource',
        'table': 'pricingsetsource',
        'primaryKey': 'pricingSetSourceID',

        'aliases': {
            'pricingSetSourceID': 'id',
            'pricingSetVersionID': 'pricingSetVersionId',
            'originalSourceSystemID': 'originalSourceSystemId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pricingsetsched': {
        'name': 'Pricingsetsched',
        'table': 'pricingsetsched',
        'primaryKey': 'pricingSetSchedID',

        'aliases': {
            'pricingSetSchedID': 'id',
            'pricingSetVersionID': 'pricingSetVersionId',
            'pricingSchedID': 'pricingSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pricingsettingnote': {
        'name': 'Pricingsettingnote',
        'table': 'pricingsettingnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'pricingSettingID': 'pricingSettingId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pricingsettingmpr': {
        'name': 'Pricingsettingmpr',
        'table': 'pricingsettingmpr',
        'primaryKey': 'pricingSettingMprID',

        'aliases': {
            'pricingSettingMprID': 'id',
            'mprCompID': 'mprCompId',
            'pricingSettingID': 'pricingSettingId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pricingspiref': {
        'name': 'Pricingspiref',
        'table': 'pricingspiref',
        'primaryKey': 'pricingSPIRefID',

        'aliases': {
            'pricingSPIRefID': 'id',
            'pricingSPIRefDesc': 'pricingSpiRefDesc',
            'pricingSPI': 'pricingSpi',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pricingsettingdmemodifier': {
        'name': 'Pricingsettingdmemodifier',
        'table': 'pricingsettingdmemodifier',
        'primaryKey': 'modifierCode',

        'aliases': {
            'modifierCode': 'id',
            'pricingSettingID': 'pricingSettingId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Proceduresetcatdetaildef': {
        'name': 'Proceduresetcatdetaildef',
        'table': 'proceduresetcatdetaildef',
        'primaryKey': 'procedureSetCatDetailDefID',

        'aliases': {
            'procedureSetCatDetailDefID': 'id',
            'procedureSetCatDetailID': 'procedureSetCatDetailId',
            'procedureSetID': 'procedureSetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'procedureSetCatID': 'procedureSetCatId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Prodbenefittype': {
        'name': 'Prodbenefittype',
        'table': 'prodbenefittype',
        'primaryKey': 'prodBenefitTypeID',

        'aliases': {
            'prodBenefitTypeID': 'id',
            'productVersionID': 'productVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Prodbengroup': {
        'name': 'Prodbengroup',
        'table': 'prodbengroup',
        'primaryKey': 'prodBenGroupID',

        'aliases': {
            'prodBenGroupID': 'id',
            'productVersionID': 'productVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Pricingsettingauditdetail': {
        'name': 'Pricingsettingauditdetail',
        'table': 'pricingsettingauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'pricingSettingID': 'pricingSettingId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Proccategory': {
        'name': 'Proccategory',
        'table': 'proccategory',
        'primaryKey': 'procCategory',

        'aliases': {
            'procCategory': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Proccoderangecat': {
        'name': 'Proccoderangecat',
        'table': 'proccoderangecat',
        'primaryKey': 'procCodeRangeSeqNum',

        'aliases': {
            'procCategory': 'id',
            'procCodeRangeSeqNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Proceduresetcat': {
        'name': 'Proceduresetcat',
        'table': 'proceduresetcat',
        'primaryKey': 'procedureSetCatID',

        'aliases': {
            'procedureSetCatID': 'id',
            'procedureSetID': 'procedureSetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Prodgovbentype': {
        'name': 'Prodgovbentype',
        'table': 'prodgovbentype',
        'primaryKey': 'prodGovBenTypeID',

        'aliases': {
            'prodGovBenTypeID': 'id',
            'productVersionID': 'productVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Procedureset': {
        'name': 'Procedureset',
        'table': 'procedureset',
        'primaryKey': 'procedureSetID',

        'aliases': {
            'procedureSetID': 'id',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Proceduresetauditdetail': {
        'name': 'Proceduresetauditdetail',
        'table': 'proceduresetauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'procedureSetID': 'procedureSetId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Producerauditdetail': {
        'name': 'Producerauditdetail',
        'table': 'producerauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'producerID': 'producerId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'producer': 'producerId'
        },

        'listReferences': {}
    },

    'Pricingsetting': {
        'name': 'Pricingsetting',
        'table': 'pricingsetting',
        'primaryKey': 'pricingSettingID',

        'aliases': {
            'pricingSettingID': 'id',
            'procedureSetID': 'procedureSetId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'statModifierCompID': 'statModifierCompId',
            'oonPricingCmsBasedServiceAreaID': 'oonPricingCmsBasedServiceAreaId',
            'drgTradingPartnerConfigID': 'drgTradingPartnerConfigId',
            'apcTradingPartnerConfigID': 'apcTradingPartnerConfigId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Proceduresetcatdetail': {
        'name': 'Proceduresetcatdetail',
        'table': 'proceduresetcatdetail',
        'primaryKey': 'procedureSetCatDetailID',

        'aliases': {
            'procedureSetCatDetailID': 'id',
            'procedureSetID': 'procedureSetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'procedureSetCatID': 'procedureSetCatId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Producer': {
        'name': 'Producer',
        'table': 'producer',
        'primaryKey': 'producerID',

        'aliases': {
            'producerID': 'id',
            'producerTIN': 'producerTin',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Produceraddress': {
        'name': 'Produceraddress',
        'table': 'produceraddress',
        'primaryKey': 'producerAddressID',

        'aliases': {
            'producerAddressID': 'id',
            'producerID': 'producerId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'producer': 'producerId'
        },

        'listReferences': {}
    },

    'Product': {
        'name': 'Product',
        'table': 'product',
        'primaryKey': 'productVersionID',

        'aliases': {
            'productVersionID': 'id',
            'productID': 'productId',
            'copyProductID': 'copyProductId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'parentProductID': 'parentProductId',
            'alphaParentProductID': 'alphaParentProductId',
            'dofrSetID': 'dofrSetId',
            'delegSetID': 'delegSetId'
        },

        'referenceMap': {
            'product': 'productId',
            'copyProduct': 'copyProductId',
            'parentProduct': 'parentProductId',
            'alphaParentProduct': 'alphaParentProductId'
        },

        'listReferences': {}
    },

    'Producerphone': {
        'name': 'Producerphone',
        'table': 'producerphone',
        'primaryKey': 'producerPhoneID',

        'aliases': {
            'producerPhoneID': 'id',
            'producerID': 'producerId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'producer': 'producerId'
        },

        'listReferences': {}
    },

    'Prodbennetworksched': {
        'name': 'Prodbennetworksched',
        'table': 'prodbennetworksched',
        'primaryKey': 'prodBenNetworkSchedID',

        'aliases': {
            'prodBenNetworkSchedID': 'id',
            'productVersionID': 'productVersionId',
            'networkScheduleID': 'networkScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Profclaimsetting': {
        'name': 'Profclaimsetting',
        'table': 'profclaimsettings',
        'primaryKey': 'settingID',

        'aliases': {
            'settingID': 'id',
            'cmsCOBPaymentsInd': 'cmsCobPaymentsInd',
            'cmsLine10aReq': 'cmsLine10AReq',
            'cmsLine10bReq': 'cmsLine10BReq',
            'cmsLine10cReq': 'cmsLine10CReq',
            'cmsLine24cReq': 'cmsLine24CReq',
            'cmsLine24hReq': 'cmsLine24HReq',
            'cmsLine24iReq': 'cmsLine24IReq',
            'cmsLine24jReq': 'cmsLine24JReq',
            'cmsLine10dReq': 'cmsLine10DReq',
            'cmsLine24kReq': 'cmsLine24KReq',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Producerexternalid': {
        'name': 'Producerexternalid',
        'table': 'producerexternalid',
        'primaryKey': 'producerExternalID',

        'aliases': {
            'producerExternalID': 'id',
            'producerID': 'producerId',
            'originalSourceSystemID': 'originalSourceSystemId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'producer': 'producerId'
        },

        'listReferences': {}
    },

    'Productbenefit': {
        'name': 'Productbenefit',
        'table': 'productbenefit',
        'primaryKey': 'productVersionID',

        'aliases': {
            'productVersionID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'usePCPratesInd': 'usePcPratesInd'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Producernote': {
        'name': 'Producernote',
        'table': 'producernote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'producerID': 'producerId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'producer': 'producerId'
        },

        'listReferences': {}
    },

    'Productnote': {
        'name': 'Productnote',
        'table': 'productnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'productVersionID': 'productVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Productgensetting': {
        'name': 'Productgensetting',
        'table': 'productgensettings',
        'primaryKey': 'productGenSettingsID',

        'aliases': {
            'productGenSettingsID': 'id',
            'productVersionID': 'productVersionId',
            'familyUnitScheduleID': 'familyUnitScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Promptpaysched': {
        'name': 'Promptpaysched',
        'table': 'promptpaysched',
        'primaryKey': 'promptPaySchedID',

        'aliases': {
            'promptPaySchedID': 'id',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Productvalidation': {
        'name': 'Productvalidation',
        'table': 'productvalidation',
        'primaryKey': 'productValidationID',

        'aliases': {
            'productValidationID': 'id',
            'productVersionID': 'productVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Productauditdetail': {
        'name': 'Productauditdetail',
        'table': 'productauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'productVersionID': 'productVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Promptpayschedauditdetail': {
        'name': 'Promptpayschedauditdetail',
        'table': 'promptpayschedauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'promptPaySchedID': 'promptPaySchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Promptpayschednote': {
        'name': 'Promptpayschednote',
        'table': 'promptpayschednote',
        'primaryKey': 'promptPaySchedNoteID',

        'aliases': {
            'promptPaySchedNoteID': 'id',
            'promptPaySchedID': 'promptPaySchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Promptpayscheddetail': {
        'name': 'Promptpayscheddetail',
        'table': 'promptpayscheddetail',
        'primaryKey': 'promptPaySchedDetailID',

        'aliases': {
            'promptPaySchedDetailID': 'id',
            'promptPaySchedID': 'promptPaySchedId',
            'interestScheduleID': 'interestScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Protechsplitcompauditdetail': {
        'name': 'Protechsplitcompauditdetail',
        'table': 'protechsplitcompauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'proTechSplitCompVersionID': 'proTechSplitCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcertschedaccreditation': {
        'name': 'Provcertschedaccreditation',
        'table': 'provcertschedaccreditation',
        'primaryKey': 'provCertSchedID',

        'aliases': {
            'accreditationType': 'id',
            'provCertSchedID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Protechsplitcomp': {
        'name': 'Protechsplitcomp',
        'table': 'protechsplitcomp',
        'primaryKey': 'proTechSplitCompVersionID',

        'aliases': {
            'proTechSplitCompID': 'proTechSplitCompId',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'pricingExternalID': 'pricingExternalId',
            'proTechSplitCompVersionID': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcategory': {
        'name': 'Provcategory',
        'table': 'provcategory',
        'primaryKey': 'provCategory',

        'aliases': {
            'provCategory': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Protechsplitcompdetail': {
        'name': 'Protechsplitcompdetail',
        'table': 'protechsplitcompdetail',
        'primaryKey': 'proTechSplitCompDetailID',

        'aliases': {
            'proTechSplitCompDetailID': 'id',
            'proTechSplitCompVersionID': 'proTechSplitCompVersionId',
            'modifierTCPct': 'modifierTcPct',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcertsched': {
        'name': 'Provcertsched',
        'table': 'provcertsched',
        'primaryKey': 'provCertSchedID',

        'aliases': {
            'provCertSchedID': 'id',
            'ownerGroupID': 'ownerGroupId',
            'servCompID': 'servCompId',
            'provCertDRC': 'provCertDrc',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcertschedboardcert': {
        'name': 'Provcertschedboardcert',
        'table': 'provcertschedboardcert',
        'primaryKey': 'provCertSchedID',

        'aliases': {
            'boardCertification': 'id',
            'provCertSchedID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcertschedhold': {
        'name': 'Provcertschedhold',
        'table': 'provcertschedhold',
        'primaryKey': 'provCertSchedHoldID',

        'aliases': {
            'provCertSchedHoldID': 'id',
            'provCertSchedID': 'provCertSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcertschedclia': {
        'name': 'Provcertschedclia',
        'table': 'provcertschedclia',
        'primaryKey': 'provCertSchedID',

        'aliases': {
            'cliaType': 'id',
            'provCertSchedID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcertschedlicense': {
        'name': 'Provcertschedlicense',
        'table': 'provcertschedlicense',
        'primaryKey': 'provCertSchedID',

        'aliases': {
            'licenseType': 'id',
            'provCertSchedID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Protechsplitcompnote': {
        'name': 'Protechsplitcompnote',
        'table': 'protechsplitcompnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'proTechSplitCompVersionID': 'proTechSplitCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcertschedauditdetail': {
        'name': 'Provcertschedauditdetail',
        'table': 'provcertschedauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'provCertSchedID': 'provCertSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcertschedserv': {
        'name': 'Provcertschedserv',
        'table': 'provcertschedserv',
        'primaryKey': 'provCertSchedID',

        'aliases': {
            'servID': 'id',
            'provCertSchedID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcertschedstate': {
        'name': 'Provcertschedstate',
        'table': 'provcertschedstate',
        'primaryKey': 'provCertSchedID',

        'aliases': {
            'state': 'id',
            'provCertSchedID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcertscheddegree': {
        'name': 'Provcertscheddegree',
        'table': 'provcertscheddegree',
        'primaryKey': 'provCertSchedID',

        'aliases': {
            'degree': 'id',
            'provCertSchedID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcertsethold': {
        'name': 'Provcertsethold',
        'table': 'provcertsethold',
        'primaryKey': 'provCertSetHoldID',

        'aliases': {
            'provCertSetHoldID': 'id',
            'provCertSetID': 'provCertSetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcertschedexcludeprovider': {
        'name': 'Provcertschedexcludeprovider',
        'table': 'provcertschedexcludeprovider',
        'primaryKey': 'provCertSchedExcludeProviderID',

        'aliases': {
            'provCertSchedExcludeProviderID': 'id',
            'provCertSchedID': 'provCertSchedId',
            'providerID': 'providerId',
            'providerOrgID': 'providerOrgId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Provcertschednote': {
        'name': 'Provcertschednote',
        'table': 'provcertschednote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'provCertSchedID': 'provCertSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcontractaffilnetpanel': {
        'name': 'Provcontractaffilnetpanel',
        'table': 'provcontractaffilnetpanel',
        'primaryKey': 'provContractAffilNetPanelID',

        'aliases': {
            'provContractAffilNetPanelID': 'id',
            'provContractAffiliationID': 'provContractAffiliationId',
            'provContractNetworkID': 'provContractNetworkId',
            'providerOrgAffiliationID': 'providerOrgAffiliationId',
            'provContractVersionID': 'provContractVersionId',
            'provContractHeaderID': 'provContractHeaderId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'provContractNetwork': 'provContractNetworkId'
        },

        'listReferences': {}
    },

    'Provcontract': {
        'name': 'Provcontract',
        'table': 'provcontract',
        'primaryKey': 'provContractVersionID',

        'aliases': {
            'provContractVersionID': 'id',
            'provContractID': 'provContractId',
            'provContractHeaderID': 'provContractHeaderId',
            'pricingSetID': 'pricingSetId',
            'externalContractID': 'externalContractId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'promptPaySchedID': 'promptPaySchedId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcontractcarrier': {
        'name': 'Provcontractcarrier',
        'table': 'provcontractcarrier',
        'primaryKey': 'provContractCarrierID',

        'aliases': {
            'provContractCarrierID': 'id',
            'provContractVersionID': 'provContractVersionId',
            'provContractHeaderID': 'provContractHeaderId',
            'carrierID': 'carrierId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'carrier': 'carrierId'
        },

        'listReferences': {}
    },

    'Provcertsetnote': {
        'name': 'Provcertsetnote',
        'table': 'provcertsetnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'provCertSetID': 'provCertSetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcertschedtaxonomy': {
        'name': 'Provcertschedtaxonomy',
        'table': 'provcertschedtaxonomy',
        'primaryKey': 'provCertSchedID',

        'aliases': {
            'taxonomyCode': 'id',
            'provCertSchedID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcontractauditdetail': {
        'name': 'Provcontractauditdetail',
        'table': 'provcontractauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'provContractVersionID': 'provContractVersionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcertsetauditdetail': {
        'name': 'Provcertsetauditdetail',
        'table': 'provcertsetauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'provCertSetID': 'provCertSetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcertsetschedassign': {
        'name': 'Provcertsetschedassign',
        'table': 'provcertsetschedassign',
        'primaryKey': 'provCertSetSchedAssignID',

        'aliases': {
            'provCertSetSchedAssignID': 'id',
            'provCertSetID': 'provCertSetId',
            'provCertSchedID': 'provCertSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcertset': {
        'name': 'Provcertset',
        'table': 'provcertset',
        'primaryKey': 'provCertSetID',

        'aliases': {
            'provCertSetID': 'id',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcontractaffiliation': {
        'name': 'Provcontractaffiliation',
        'table': 'provcontractaffiliation',
        'primaryKey': 'provContractAffiliationID',

        'aliases': {
            'provContractAffiliationID': 'id',
            'provContractVersionID': 'provContractVersionId',
            'provContractHeaderID': 'provContractHeaderId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'providerOrgAffiliationID': 'providerOrgAffiliationId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcontractcarrierfilinglimit': {
        'name': 'Provcontractcarrierfilinglimit',
        'table': 'provcontractcarrierfilinglimit',
        'primaryKey': 'provContractCarrierFilingLmtID',

        'aliases': {
            'provContractCarrierFilingLmtID': 'id',
            'provContractCarrierID': 'provContractCarrierId',
            'provContractVersionID': 'provContractVersionId',
            'provContractHeaderID': 'provContractHeaderId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'provContractCarrier': 'provContractCarrierId'
        },

        'listReferences': {}
    },

    'Provcontractaddress': {
        'name': 'Provcontractaddress',
        'table': 'provcontractaddress',
        'primaryKey': 'provContractAddressID',

        'aliases': {
            'provContractAddressID': 'id',
            'provContractVersionID': 'provContractVersionId',
            'provContractHeaderID': 'provContractHeaderId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'providerOrgLocationID': 'providerOrgLocationId',
            'serviceAreaID': 'serviceAreaId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcontractfilinglimit': {
        'name': 'Provcontractfilinglimit',
        'table': 'provcontractfilinglimit',
        'primaryKey': 'provContractFilingLimitID',

        'aliases': {
            'provContractFilingLimitID': 'id',
            'provContractVersionID': 'provContractVersionId',
            'provContractHeaderID': 'provContractHeaderId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcontractfinancialpen': {
        'name': 'Provcontractfinancialpen',
        'table': 'provcontractfinancialpen',
        'primaryKey': 'provContractFinancialPenID',

        'aliases': {
            'provContractFinancialPenID': 'id',
            'provContractVersionID': 'provContractVersionId',
            'provContractHeaderID': 'provContractHeaderId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcontractheader': {
        'name': 'Provcontractheader',
        'table': 'provcontractheader',
        'primaryKey': 'provContractHeaderID',

        'aliases': {
            'provContractHeaderID': 'id',
            'providerOrgID': 'providerOrgId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcontractcarriersupportteam': {
        'name': 'Provcontractcarriersupportteam',
        'table': 'provcontractcarriersupportteam',
        'primaryKey': 'provContractCarrierSuptTeamID',

        'aliases': {
            'provContractCarrierSuptTeamID': 'id',
            'provContractCarrierID': 'provContractCarrierId',
            'provContractVersionID': 'provContractVersionId',
            'provContractHeaderID': 'provContractHeaderId',
            'provContractSupportTeamID': 'provContractSupportTeamId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'provContractCarrier': 'provContractCarrierId'
        },

        'listReferences': {}
    },

    'Provcontractfinpenaffiliation': {
        'name': 'Provcontractfinpenaffiliation',
        'table': 'provcontractfinpenaffiliation',
        'primaryKey': 'provContractFinPenAffilID',

        'aliases': {
            'provContractFinPenAffilID': 'id',
            'provContractFinancialPenID': 'provContractFinancialPenId',
            'provContractVersionID': 'provContractVersionId',
            'provContractHeaderID': 'provContractHeaderId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'providerOrgAffiliationID': 'providerOrgAffiliationId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcontractheaderauditdetail': {
        'name': 'Provcontractheaderauditdetail',
        'table': 'provcontractheaderauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'provContractHeaderID': 'provContractHeaderId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcontractheadernote': {
        'name': 'Provcontractheadernote',
        'table': 'provcontractheadernote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'provContractHeaderID': 'provContractHeaderId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcontractlobfilinglimit': {
        'name': 'Provcontractlobfilinglimit',
        'table': 'provcontractlobfilinglimit',
        'primaryKey': 'provContractLOBFilingLimitID',

        'aliases': {
            'provContractLOBFilingLimitID': 'id',
            'provContractLOBID': 'provContractLobid',
            'provContractVersionID': 'provContractVersionId',
            'provContractHeaderID': 'provContractHeaderId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcontractmedpolicy': {
        'name': 'Provcontractmedpolicy',
        'table': 'provcontractmedpolicy',
        'primaryKey': 'provContractMedPolicyID',

        'aliases': {
            'provContractMedPolicyID': 'id',
            'provContractVersionID': 'provContractVersionId',
            'provContractHeaderID': 'provContractHeaderId',
            'medPolicySchedID': 'medPolicySchedId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'medPolicySetID': 'medPolicySetId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcontractowner': {
        'name': 'Provcontractowner',
        'table': 'provcontractowner',
        'primaryKey': 'provContractOwnerID',

        'aliases': {
            'provContractOwnerID': 'id',
            'provContractVersionID': 'provContractVersionId',
            'provContractHeaderID': 'provContractHeaderId',
            'carrierID': 'carrierId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'carrier': 'carrierId'
        },

        'listReferences': {}
    },

    'Provcontractmembergroup': {
        'name': 'Provcontractmembergroup',
        'table': 'provcontractmembergroup',
        'primaryKey': 'provContractMemberGroupID',

        'aliases': {
            'provContractMemberGroupID': 'id',
            'provContractVersionID': 'provContractVersionId',
            'provContractHeaderID': 'provContractHeaderId',
            'memGroupID': 'memGroupId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcontractlob': {
        'name': 'Provcontractlob',
        'table': 'provcontractlob',
        'primaryKey': 'provContractLOBID',

        'aliases': {
            'provContractLOBID': 'id',
            'provContractVersionID': 'provContractVersionId',
            'provContractHeaderID': 'provContractHeaderId',
            'lineOfBusinessID': 'lineOfBusinessId',
            'clauseCodeExternalContractID': 'clauseCodeExternalContractId',
            'clauseCodeSetID': 'clauseCodeSetId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcontracthold': {
        'name': 'Provcontracthold',
        'table': 'provcontracthold',
        'primaryKey': 'provContractHoldID',

        'aliases': {
            'provContractHoldID': 'id',
            'provContractVersionID': 'provContractVersionId',
            'provContractHeaderID': 'provContractHeaderId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcontractplan': {
        'name': 'Provcontractplan',
        'table': 'provcontractplan',
        'primaryKey': 'provContractPlanID',

        'aliases': {
            'provContractPlanID': 'id',
            'provContractVersionID': 'provContractVersionId',
            'provContractHeaderID': 'provContractHeaderId',
            'planID': 'planId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcontractid': {
        'name': 'Provcontractid',
        'table': 'provcontractid',
        'primaryKey': 'provContractIDID',

        'aliases': {
            'provContractIDID': 'id',
            'provContractVersionID': 'provContractVersionId',
            'provContractHeaderID': 'provContractHeaderId',
            'originalSourceSystemID': 'originalSourceSystemId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcontractnetwork': {
        'name': 'Provcontractnetwork',
        'table': 'provcontractnetwork',
        'primaryKey': 'provContractNetworkID',

        'aliases': {
            'provContractNetworkID': 'id',
            'provContractVersionID': 'provContractVersionId',
            'provContractHeaderID': 'provContractHeaderId',
            'networkID': 'networkId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'network': 'networkId'
        },

        'listReferences': {}
    },

    'Provcontractnote': {
        'name': 'Provcontractnote',
        'table': 'provcontractnotes',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'provContractVersionID': 'provContractVersionId',
            'provContractHeaderID': 'provContractHeaderId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcontracttaxonomy': {
        'name': 'Provcontracttaxonomy',
        'table': 'provcontracttaxonomy',
        'primaryKey': 'provContractTaxonomyID',

        'aliases': {
            'provContractTaxonomyID': 'id',
            'provContractVersionID': 'provContractVersionId',
            'provContractHeaderID': 'provContractHeaderId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcontracttermeventlog': {
        'name': 'Provcontracttermeventlog',
        'table': 'provcontracttermeventlog',
        'primaryKey': 'provContractTermEventLogID',

        'aliases': {
            'provContractTermEventLogID': 'id',
            'provContractVersionID': 'provContractVersionId',
            'provContractID': 'provContractId',
            'provContractHeaderID': 'provContractHeaderId',
            'provContractAffiliationID': 'provContractAffiliationId',
            'providerOrgAffiliationID': 'providerOrgAffiliationId',
            'provContractNetworkID': 'provContractNetworkId',
            'networkID': 'networkId',
            'providerID': 'providerId',
            'memberID': 'memberId',
            'memberBenefitID': 'memberBenefitId',
            'planID': 'planId',
            'memGroupID': 'memGroupId',
            'networkScheduleID': 'networkScheduleId',
            'subsAffiliationID': 'subsAffiliationId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'provContractNetwork': 'provContractNetworkId',
            'network': 'networkId',
            'provider': 'providerId',
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Provcontracttin': {
        'name': 'Provcontracttin',
        'table': 'provcontracttin',
        'primaryKey': 'provContractTINID',

        'aliases': {
            'provContractTINID': 'id',
            'provContractVersionID': 'provContractVersionId',
            'provContractHeaderID': 'provContractHeaderId',
            'providerOrgTINID': 'providerOrgTinid',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcontractsupportteam': {
        'name': 'Provcontractsupportteam',
        'table': 'provcontractsupportteam',
        'primaryKey': 'provContractSupportTeamID',

        'aliases': {
            'provContractSupportTeamID': 'id',
            'provContractVersionID': 'provContractVersionId',
            'provContractHeaderID': 'provContractHeaderId',
            'supportTeamID': 'supportTeamId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcontractlobclausecode': {
        'name': 'Provcontractlobclausecode',
        'table': 'provcontractlobclausecode',
        'primaryKey': 'provContractLOBClauseCodeID',

        'aliases': {
            'provContractLOBClauseCodeID': 'id',
            'provContractLOBID': 'provContractLobid',
            'provContractVersionID': 'provContractVersionId',
            'provContractHeaderID': 'provContractHeaderId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provcontractproduct': {
        'name': 'Provcontractproduct',
        'table': 'provcontractproduct',
        'primaryKey': 'provContractProductID',

        'aliases': {
            'provContractProductID': 'id',
            'provContractVersionID': 'provContractVersionId',
            'provContractHeaderID': 'provContractHeaderId',
            'productID': 'productId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'product': 'productId'
        },

        'listReferences': {}
    },

    'Provdirsuppressregion': {
        'name': 'Provdirsuppressregion',
        'table': 'provdirsuppressregion',
        'primaryKey': 'provDirSuppressRegionID',

        'aliases': {
            'provDirSuppressRegionID': 'id',
            'provDirSuppressID': 'provDirSuppressId',
            'serviceAreaRegionID': 'serviceAreaRegionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'serviceAreaRegion': 'serviceAreaRegionId'
        },

        'listReferences': {}
    },

    'Provexceptiondiagcode': {
        'name': 'Provexceptiondiagcode',
        'table': 'provexceptiondiagcode',
        'primaryKey': 'provExceptionDiagCodeID',

        'aliases': {
            'provExceptionDiagCodeID': 'id',
            'providerID': 'providerId',
            'provExceptionFlagID': 'provExceptionFlagId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Provdirsuppressauditdetail': {
        'name': 'Provdirsuppressauditdetail',
        'table': 'provdirsuppressauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'provDirSuppressID': 'provDirSuppressId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provexceptionflag': {
        'name': 'Provexceptionflag',
        'table': 'provexceptionflag',
        'primaryKey': 'provExceptionFlagID',

        'aliases': {
            'provExceptionFlagID': 'id',
            'providerID': 'providerId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Provdirsuppress': {
        'name': 'Provdirsuppress',
        'table': 'provdirsuppress',
        'primaryKey': 'provDirSuppressID',

        'aliases': {
            'provDirSuppressID': 'id',
            'providerID': 'providerId',
            'providerOrgID': 'providerOrgId',
            'provTINID': 'provTinid',
            'providerOrgLocationID': 'providerOrgLocationId',
            'providerOrgLocationPhoneID': 'providerOrgLocationPhoneId',
            'networkID': 'networkId',
            'productID': 'productId',
            'planID': 'planId',
            'lineOfBusinessID': 'lineOfBusinessId',
            'serviceAreaID': 'serviceAreaId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'provider': 'providerId',
            'network': 'networkId',
            'product': 'productId'
        },

        'listReferences': {}
    },

    'Provexceptionfundingsource': {
        'name': 'Provexceptionfundingsource',
        'table': 'provexceptionfundingsource',
        'primaryKey': 'provExceptionFlagID',

        'aliases': {
            'fundingSource': 'id',
            'provExceptionFlagID': 'id',
            'providerID': 'providerId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Provexceptionproccode': {
        'name': 'Provexceptionproccode',
        'table': 'provexceptionproccode',
        'primaryKey': 'provExceptionProcCodeID',

        'aliases': {
            'provExceptionProcCodeID': 'id',
            'providerID': 'providerId',
            'provExceptionFlagID': 'provExceptionFlagId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Provexceptionrevcode': {
        'name': 'Provexceptionrevcode',
        'table': 'provexceptionrevcodes',
        'primaryKey': 'provExceptionFlagID',

        'aliases': {
            'revenueCode': 'id',
            'provExceptionFlagID': 'id',
            'providerID': 'providerId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Provider': {
        'name': 'Provider',
        'table': 'provider',
        'primaryKey': 'providerID',

        'aliases': {
            'providerID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'originalSourceSystemID': 'originalSourceSystemId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provideralias': {
        'name': 'Provideralias',
        'table': 'provideralias',
        'primaryKey': 'providerAliasID',

        'aliases': {
            'providerAliasID': 'id',
            'providerID': 'providerId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Provexceptionstate': {
        'name': 'Provexceptionstate',
        'table': 'provexceptionstate',
        'primaryKey': 'provExceptionFlagID',

        'aliases': {
            'state': 'id',
            'provExceptionFlagID': 'id',
            'providerID': 'providerId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Provideraccreditation': {
        'name': 'Provideraccreditation',
        'table': 'provideraccreditation',
        'primaryKey': 'providerAccreditationID',

        'aliases': {
            'providerAccreditationID': 'id',
            'providerID': 'providerId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Provexceptionlob': {
        'name': 'Provexceptionlob',
        'table': 'provexceptionlob',
        'primaryKey': 'provExceptionFlagID',

        'aliases': {
            'lineOfBusinessID': 'id',
            'provExceptionFlagID': 'id',
            'providerID': 'providerId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Provideradverseaction': {
        'name': 'Provideradverseaction',
        'table': 'provideradverseaction',
        'primaryKey': 'providerAdverseActionID',

        'aliases': {
            'providerAdverseActionID': 'id',
            'providerID': 'providerId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Provideradversebasis': {
        'name': 'Provideradversebasis',
        'table': 'provideradversebasis',
        'primaryKey': 'providerAdverseBasisID',

        'aliases': {
            'providerAdverseBasisID': 'id',
            'providerID': 'providerId',
            'providerAdverseActionID': 'providerAdverseActionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providercertification': {
        'name': 'Providercertification',
        'table': 'providercertification',
        'primaryKey': 'providerCertificationID',

        'aliases': {
            'providerCertificationID': 'id',
            'providerID': 'providerId',
            'certificationID': 'certificationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Provideradverseactioncode': {
        'name': 'Provideradverseactioncode',
        'table': 'provideradverseactioncode',
        'primaryKey': 'providerAdverseActionCodeID',

        'aliases': {
            'providerAdverseActionCodeID': 'id',
            'providerID': 'providerId',
            'providerAdverseActionID': 'providerAdverseActionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providerapplication': {
        'name': 'Providerapplication',
        'table': 'providerapplication',
        'primaryKey': 'providerApplicationID',

        'aliases': {
            'providerApplicationID': 'id',
            'providerID': 'providerId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providercontact': {
        'name': 'Providercontact',
        'table': 'providercontact',
        'primaryKey': 'providerContactID',

        'aliases': {
            'providerContactID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provexceptionplaceofservice': {
        'name': 'Provexceptionplaceofservice',
        'table': 'provexceptionplaceofservice',
        'primaryKey': 'provExceptionFlagID',

        'aliases': {
            'posCode': 'id',
            'provExceptionFlagID': 'id',
            'providerID': 'providerId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providercontactaddressphone': {
        'name': 'Providercontactaddressphone',
        'table': 'providercontactaddressphone',
        'primaryKey': 'providerContactAddressPhoneID',

        'aliases': {
            'providerContactAddressPhoneID': 'id',
            'providerContactAddressID': 'providerContactAddressId',
            'providerContactPhoneID': 'providerContactPhoneId',
            'providerContactID': 'providerContactId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providerassignmenttype': {
        'name': 'Providerassignmenttype',
        'table': 'providerassignmenttype',
        'primaryKey': 'providerAssignmentType',

        'aliases': {
            'providerAssignmentType': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providercontactauditdetail': {
        'name': 'Providercontactauditdetail',
        'table': 'providercontactauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'providerContactID': 'providerContactId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providercover': {
        'name': 'Providercover',
        'table': 'providercover',
        'primaryKey': 'providerCoverID',

        'aliases': {
            'providerCoverID': 'id',
            'providerID': 'providerId',
            'coveringProviderID': 'coveringProviderId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId',
            'coveringProvider': 'coveringProviderId'
        },

        'listReferences': {}
    },

    'Providerassigntypetaxonomycode': {
        'name': 'Providerassigntypetaxonomycode',
        'table': 'providerassigntypetaxonomycode',
        'primaryKey': 'providerAssignmentType',

        'aliases': {
            'taxonomyCode': 'id',
            'providerAssignmentType': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providercontactelectroniccom': {
        'name': 'Providercontactelectroniccom',
        'table': 'providercontactelectroniccom',
        'primaryKey': 'providerContactElectronicComID',

        'aliases': {
            'providerContactElectronicComID': 'id',
            'providerContactID': 'providerContactId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providerauditdetail': {
        'name': 'Providerauditdetail',
        'table': 'providerauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'providerID': 'providerId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providercontactphone': {
        'name': 'Providercontactphone',
        'table': 'providercontactphone',
        'primaryKey': 'providerContactPhoneID',

        'aliases': {
            'providerContactPhoneID': 'id',
            'providerContactID': 'providerContactId',
            'nonUSPhoneInd': 'nonUsPhoneInd',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provexceptionmodcode': {
        'name': 'Provexceptionmodcode',
        'table': 'provexceptionmodcodes',
        'primaryKey': 'provExceptionFlagID',

        'aliases': {
            'modifierCode': 'id',
            'provExceptionFlagID': 'id',
            'providerID': 'providerId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providerencumbrance': {
        'name': 'Providerencumbrance',
        'table': 'providerencumbrance',
        'primaryKey': 'providerEncumbranceID',

        'aliases': {
            'providerEncumbranceID': 'id',
            'providerID': 'providerId',
            'vendorID': 'vendorId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId',
            'vendor': 'vendorId'
        },

        'listReferences': {}
    },

    'Providerelectroniccomm': {
        'name': 'Providerelectroniccomm',
        'table': 'providerelectroniccomm',
        'primaryKey': 'providerElectronicCommID',

        'aliases': {
            'providerElectronicCommID': 'id',
            'providerID': 'providerId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providerhospitalaffil': {
        'name': 'Providerhospitalaffil',
        'table': 'providerhospitalaffil',
        'primaryKey': 'providerHospitalAffilID',

        'aliases': {
            'providerHospitalAffilID': 'id',
            'providerID': 'providerId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'facilityID': 'facilityId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providerhold': {
        'name': 'Providerhold',
        'table': 'providerhold',
        'primaryKey': 'providerHoldID',

        'aliases': {
            'providerHoldID': 'id',
            'providerID': 'providerId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providercredential': {
        'name': 'Providercredential',
        'table': 'providercredential',
        'primaryKey': 'providerCredentialID',

        'aliases': {
            'providerCredentialID': 'id',
            'providerID': 'providerId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providercontactaddress': {
        'name': 'Providercontactaddress',
        'table': 'providercontactaddress',
        'primaryKey': 'providerContactAddressID',

        'aliases': {
            'providerContactAddressID': 'id',
            'providerContactID': 'providerContactId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providerid': {
        'name': 'Providerid',
        'table': 'providerid',
        'primaryKey': 'providerIDID',

        'aliases': {
            'providerIDID': 'id',
            'providerID': 'providerId',
            'providerIDText': 'providerIdText',
            'referenceIDQual': 'referenceIdQual',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providerliabilityin': {
        'name': 'Providerliabilityin',
        'table': 'providerliabilityins',
        'primaryKey': 'liabCarrierID',

        'aliases': {
            'providerID': 'id',
            'liabCarrierID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providerlanguage': {
        'name': 'Providerlanguage',
        'table': 'providerlanguage',
        'primaryKey': 'languageCodeNISO',

        'aliases': {
            'providerID': 'id',
            'languageCodeNISO': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provideridlocation': {
        'name': 'Provideridlocation',
        'table': 'provideridlocation',
        'primaryKey': 'providerIDLocationID',

        'aliases': {
            'providerIDLocationID': 'id',
            'providerID': 'providerId',
            'providerIDID': 'providerIdid',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'providerLocationAffiliationID': 'providerLocationAffiliationId',
            'providerOrigSrcSysID': 'providerOrigSrcSysId',
            'providerOrgLocOrigSrcSysID': 'providerOrgLocOrigSrcSysId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providerfedexcl': {
        'name': 'Providerfedexcl',
        'table': 'providerfedexcl',
        'primaryKey': 'providerFedExclID',

        'aliases': {
            'providerFedExclID': 'id',
            'providerID': 'providerId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providerhour': {
        'name': 'Providerhour',
        'table': 'providerhours',
        'primaryKey': 'providerHoursID',

        'aliases': {
            'providerHoursID': 'id',
            'providerLocationAffiliationID': 'providerLocationAffiliationId',
            'providerID': 'providerId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providereducation': {
        'name': 'Providereducation',
        'table': 'providereducation',
        'primaryKey': 'providerEducationID',

        'aliases': {
            'providerEducationID': 'id',
            'providerID': 'providerId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'nonUSPhoneInd': 'nonUsPhoneInd'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providerencumbrancepayment': {
        'name': 'Providerencumbrancepayment',
        'table': 'providerencumbrancepayment',
        'primaryKey': 'providerEncumbrancePaymentID',

        'aliases': {
            'providerEncumbrancePaymentID': 'id',
            'providerID': 'providerId',
            'providerEncumbranceID': 'providerEncumbranceId',
            'apTransactionID': 'apTransactionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providerjudgement': {
        'name': 'Providerjudgement',
        'table': 'providerjudgement',
        'primaryKey': 'providerJudgementID',

        'aliases': {
            'providerJudgementID': 'id',
            'providerID': 'providerId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providerlicense': {
        'name': 'Providerlicense',
        'table': 'providerlicense',
        'primaryKey': 'providerLicenseID',

        'aliases': {
            'providerLicenseID': 'id',
            'providerID': 'providerId',
            'licenseID': 'licenseId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providerlocationaccred': {
        'name': 'Providerlocationaccred',
        'table': 'providerlocationaccred',
        'primaryKey': 'providerLocationAccredID',

        'aliases': {
            'providerLocationAccredID': 'id',
            'providerAccreditationID': 'providerAccreditationId',
            'providerLocationAffiliationID': 'providerLocationAffiliationId',
            'providerID': 'providerId',
            'providerOrgOrigSrcSysID': 'providerOrgOrigSrcSysId',
            'providerOrgLocOrigSrcSysID': 'providerOrgLocOrigSrcSysId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providerlocationaffiliation': {
        'name': 'Providerlocationaffiliation',
        'table': 'providerlocationaffiliation',
        'primaryKey': 'providerLocationAffiliationID',

        'aliases': {
            'providerLocationAffiliationID': 'id',
            'providerOrgLocationID': 'providerOrgLocationId',
            'providerID': 'providerId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providerlocationcontact': {
        'name': 'Providerlocationcontact',
        'table': 'providerlocationcontact',
        'primaryKey': 'providerLocationContactID',

        'aliases': {
            'providerLocationContactID': 'id',
            'providerLocationAffiliationID': 'providerLocationAffiliationId',
            'providerID': 'providerId',
            'providerContactID': 'providerContactId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providerlocaffilclinicaleff': {
        'name': 'Providerlocaffilclinicaleff',
        'table': 'providerlocaffilclinicaleff',
        'primaryKey': 'providerLocAffilClinicalEffID',

        'aliases': {
            'providerLocAffilClinicalEffID': 'id',
            'providerLocationAffiliationID': 'providerLocationAffiliationId',
            'providerID': 'providerId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providerlocationlanguage': {
        'name': 'Providerlocationlanguage',
        'table': 'providerlocationlanguage',
        'primaryKey': 'providerLocationLanguageID',

        'aliases': {
            'providerLocationLanguageID': 'id',
            'providerID': 'providerId',
            'languageCodeNISO': 'languageCodeNiso',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'providerLocationAffiliationID': 'providerLocationAffiliationId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providerlocationphone': {
        'name': 'Providerlocationphone',
        'table': 'providerlocationphone',
        'primaryKey': 'providerLocationPhoneID',

        'aliases': {
            'providerLocationPhoneID': 'id',
            'providerID': 'providerId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'nonUSPhoneInd': 'nonUsPhoneInd',
            'providerLocationAffiliationID': 'providerLocationAffiliationId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providerlocationhospaffil': {
        'name': 'Providerlocationhospaffil',
        'table': 'providerlocationhospaffil',
        'primaryKey': 'providerLocationHospAffilID',

        'aliases': {
            'providerLocationHospAffilID': 'id',
            'providerID': 'providerId',
            'providerHospitalAffilID': 'providerHospitalAffilId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'providerLocationAffiliationID': 'providerLocationAffiliationId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providerlocationtaxonomy': {
        'name': 'Providerlocationtaxonomy',
        'table': 'providerlocationtaxonomy',
        'primaryKey': 'providerLocationTaxonomyID',

        'aliases': {
            'providerLocationTaxonomyID': 'id',
            'providerID': 'providerId',
            'providerTaxonomyID': 'providerTaxonomyId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'providerLocationAffiliationID': 'providerLocationAffiliationId',
            'providerOrigSrcSysID': 'providerOrigSrcSysId',
            'providerOrgLocOrigSrcSysID': 'providerOrgLocOrigSrcSysId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providermalpractice': {
        'name': 'Providermalpractice',
        'table': 'providermalpractice',
        'primaryKey': 'providerMalpracticeID',

        'aliases': {
            'providerMalpracticeID': 'id',
            'providerID': 'providerId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providerorgaffiliation': {
        'name': 'Providerorgaffiliation',
        'table': 'providerorgaffiliation',
        'primaryKey': 'providerOrgAffiliationID',

        'aliases': {
            'providerOrgAffiliationID': 'id',
            'providerID': 'providerId',
            'providerOrgID': 'providerOrgId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providerorgauditdetail': {
        'name': 'Providerorgauditdetail',
        'table': 'providerorgauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'providerOrgID': 'providerOrgId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providerorgalias': {
        'name': 'Providerorgalias',
        'table': 'providerorgalias',
        'primaryKey': 'providerOrgAliasID',

        'aliases': {
            'providerOrgAliasID': 'id',
            'providerOrgID': 'providerOrgId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providerorg': {
        'name': 'Providerorg',
        'table': 'providerorg',
        'primaryKey': 'providerOrgID',

        'aliases': {
            'providerOrgID': 'id',
            'alphaParentID': 'alphaParentId',
            'parentID': 'parentId',
            'originalSourceSystemID': 'originalSourceSystemId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providernote': {
        'name': 'Providernote',
        'table': 'providernotes',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'providerID': 'providerId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providerorgelectroniccomm': {
        'name': 'Providerorgelectroniccomm',
        'table': 'providerorgelectroniccomm',
        'primaryKey': 'providerOrgElectronicCommID',

        'aliases': {
            'providerOrgElectronicCommID': 'id',
            'providerOrgID': 'providerOrgId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providerorgidlocation': {
        'name': 'Providerorgidlocation',
        'table': 'providerorgidlocation',
        'primaryKey': 'providerOrgIDLocationID',

        'aliases': {
            'providerOrgIDLocationID': 'id',
            'providerOrgLocationID': 'providerOrgLocationId',
            'providerOrgIDID': 'providerOrgIdid',
            'providerOrgID': 'providerOrgId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'providerOrgOrigSrcSysID': 'providerOrgOrigSrcSysId',
            'providerOrgLocOrigSrcSysID': 'providerOrgLocOrigSrcSysId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providerorglocationclia': {
        'name': 'Providerorglocationclia',
        'table': 'providerorglocationclia',
        'primaryKey': 'providerOrgLocationCliaID',

        'aliases': {
            'providerOrgLocationCliaID': 'id',
            'providerOrgLocationID': 'providerOrgLocationId',
            'providerOrgID': 'providerOrgId',
            'cliaMedicareID': 'cliaMedicareId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providerorghold': {
        'name': 'Providerorghold',
        'table': 'providerorghold',
        'primaryKey': 'providerOrgHoldID',

        'aliases': {
            'providerOrgHoldID': 'id',
            'providerOrgID': 'providerOrgId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providerorgid': {
        'name': 'Providerorgid',
        'table': 'providerorgid',
        'primaryKey': 'providerOrgIDID',

        'aliases': {
            'providerOrgIDID': 'id',
            'providerOrgID': 'providerOrgId',
            'providerIDText': 'providerIdText',
            'referenceIDQual': 'referenceIdQual',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providerorgfacility': {
        'name': 'Providerorgfacility',
        'table': 'providerorgfacility',
        'primaryKey': 'providerOrgFacilityID',

        'aliases': {
            'providerOrgFacilityID': 'id',
            'providerOrgLocationID': 'providerOrgLocationId',
            'providerOrgID': 'providerOrgId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providerorglocation': {
        'name': 'Providerorglocation',
        'table': 'providerorglocation',
        'primaryKey': 'providerOrgLocationID',

        'aliases': {
            'providerOrgLocationID': 'id',
            'providerOrgID': 'providerOrgId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'originalSourceSystemID': 'originalSourceSystemId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providerorglocationclaimalias': {
        'name': 'Providerorglocationclaimalias',
        'table': 'providerorglocationclaimalias',
        'primaryKey': 'providerOrgLocationClaimAliasID',

        'aliases': {
            'providerOrgLocationClaimAliasID': 'id',
            'providerOrgLocationID': 'providerOrgLocationId',
            'providerOrgID': 'providerOrgId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providerorgqueue': {
        'name': 'Providerorgqueue',
        'table': 'providerorgqueue',
        'primaryKey': 'queueID',

        'aliases': {
            'queueID': 'id',
            'providerOrgID': 'providerOrgId',
            'providerOrgLocationID': 'providerOrgLocationId',
            'provTINAddressesID': 'provTinAddressesId',
            'claimProviderID': 'claimProviderId',
            'claimProviderAddressID': 'claimProviderAddressId',
            'natlProviderID': 'natlProviderId',
            'entityIDCode': 'entityIdCode',
            'addressEntityIDCode': 'addressEntityIdCode',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'claimProvider': 'claimProviderId',
            'natlProvider': 'natlProviderId'
        },

        'listReferences': {}
    },

    'Providerorglocationphone': {
        'name': 'Providerorglocationphone',
        'table': 'providerorglocationphone',
        'primaryKey': 'providerOrgLocationPhoneID',

        'aliases': {
            'providerOrgLocationPhoneID': 'id',
            'providerOrgLocationID': 'providerOrgLocationId',
            'providerOrgID': 'providerOrgId',
            'nonUSPhoneInd': 'nonUsPhoneInd',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providerorgtin': {
        'name': 'Providerorgtin',
        'table': 'providerorgtin',
        'primaryKey': 'providerOrgTINID',

        'aliases': {
            'providerOrgTINID': 'id',
            'providerOrgID': 'providerOrgId',
            'provTINID': 'provTinid',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providerpeerreview': {
        'name': 'Providerpeerreview',
        'table': 'providerpeerreview',
        'primaryKey': 'reviewDate',

        'aliases': {
            'providerID': 'id',
            'reviewDate': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providerorgnote': {
        'name': 'Providerorgnote',
        'table': 'providerorgnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'providerOrgID': 'providerOrgId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providerprocessexception': {
        'name': 'Providerprocessexception',
        'table': 'providerprocessexception',
        'primaryKey': 'providerProcessExceptionID',

        'aliases': {
            'providerProcessExceptionID': 'id',
            'providerID': 'providerId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providerqueueattachment': {
        'name': 'Providerqueueattachment',
        'table': 'providerqueueattachment',
        'primaryKey': 'providerQueueAttachmentID',

        'aliases': {
            'providerQueueAttachmentID': 'id',
            'queueID': 'queueId',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providerpremiumdesignation': {
        'name': 'Providerpremiumdesignation',
        'table': 'providerpremiumdesignation',
        'primaryKey': 'providerPremiumDesignationID',

        'aliases': {
            'providerPremiumDesignationID': 'id',
            'providerID': 'providerId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providerqueue': {
        'name': 'Providerqueue',
        'table': 'providerqueue',
        'primaryKey': 'queueID',

        'aliases': {
            'queueID': 'id',
            'providerID': 'providerId',
            'oltpProvID': 'oltpProvId',
            'natlProviderID': 'natlProviderId',
            'medicareID': 'medicareId',
            'entityID': 'entityId',
            'provAltID': 'provAltId',
            'altIDEffDate': 'altIdEffDate',
            'altIDExpDate': 'altIdExpDate',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'providerOrgLocationID': 'providerOrgLocationId',
            'claimProviderID': 'claimProviderId',
            'claimProviderAddressID': 'claimProviderAddressId',
            'entityIDCode': 'entityIdCode',
            'addressEntityIDCode': 'addressEntityIdCode'
        },

        'referenceMap': {
            'provider': 'providerId',
            'natlProvider': 'natlProviderId',
            'claimProvider': 'claimProviderId'
        },

        'listReferences': {}
    },

    'Providerrefaddress': {
        'name': 'Providerrefaddress',
        'table': 'providerrefaddress',
        'primaryKey': 'providerReferenceAddressID',

        'aliases': {
            'providerReferenceAddressID': 'id',
            'providerID': 'providerId',
            'providerReferencesID': 'providerReferencesId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providerreference': {
        'name': 'Providerreference',
        'table': 'providerreferences',
        'primaryKey': 'providerReferencesID',

        'aliases': {
            'providerReferencesID': 'id',
            'providerID': 'providerId',
            'refProviderID': 'refProviderId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId',
            'refProvider': 'refProviderId'
        },

        'listReferences': {}
    },

    'Providertaxonomy': {
        'name': 'Providertaxonomy',
        'table': 'providertaxonomy',
        'primaryKey': 'providerTaxonomyID',

        'aliases': {
            'providerTaxonomyID': 'id',
            'providerID': 'providerId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providersanctionlicense': {
        'name': 'Providersanctionlicense',
        'table': 'providersanctionlicense',
        'primaryKey': 'providerSanctionLicenseID',

        'aliases': {
            'providerSanctionLicenseID': 'id',
            'providerID': 'providerId',
            'providerSanctionID': 'providerSanctionId',
            'providerLicenseID': 'providerLicenseId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providersetting': {
        'name': 'Providersetting',
        'table': 'providersettings',
        'primaryKey': 'settingID',

        'aliases': {
            'settingID': 'id',
            'entityDBID': 'entityDbid',
            'databankUserID': 'databankUserId',
            'agentDBID': 'agentDbid',
            'useCODAInd': 'useCodaInd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'provSpecialtySetID': 'provSpecialtySetId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providerqueueheader': {
        'name': 'Providerqueueheader',
        'table': 'providerqueueheader',
        'primaryKey': 'queueID',

        'aliases': {
            'queueID': 'id',
            'lockUserID': 'lockUserId',
            'txfrQueueID': 'txfrQueueId',
            'claimID': 'claimId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providertaxonomygroup': {
        'name': 'Providertaxonomygroup',
        'table': 'providertaxonomygroup',
        'primaryKey': 'provTaxonomyGroup',

        'aliases': {
            'provTaxonomyGroup': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providersanction': {
        'name': 'Providersanction',
        'table': 'providersanction',
        'primaryKey': 'providerSanctionID',

        'aliases': {
            'providerSanctionID': 'id',
            'providerID': 'providerId',
            'originalSourceSystemID': 'originalSourceSystemId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Provjudgeoffense': {
        'name': 'Provjudgeoffense',
        'table': 'provjudgeoffenses',
        'primaryKey': 'providerJudgementOffenseID',

        'aliases': {
            'providerJudgementOffenseID': 'id',
            'providerID': 'providerId',
            'providerJudgementID': 'providerJudgementId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providertinaddreleccomm': {
        'name': 'Providertinaddreleccomm',
        'table': 'providertinaddreleccomm',
        'primaryKey': 'providerTINAddrElecCommID',

        'aliases': {
            'providerTINAddrElecCommID': 'id',
            'provTINAddressesID': 'provTinAddressesId',
            'provTINID': 'provTinid',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Providerworkhistory': {
        'name': 'Providerworkhistory',
        'table': 'providerworkhistory',
        'primaryKey': 'provWorkHistID',

        'aliases': {
            'provWorkHistID': 'id',
            'providerID': 'providerId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Provjudgeinvestigation': {
        'name': 'Provjudgeinvestigation',
        'table': 'provjudgeinvestigation',
        'primaryKey': 'provJudgementInvestigationID',

        'aliases': {
            'provJudgementInvestigationID': 'id',
            'providerID': 'providerId',
            'providerJudgementID': 'providerJudgementId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Providertinaddrphone': {
        'name': 'Providertinaddrphone',
        'table': 'providertinaddrphone',
        'primaryKey': 'providerTINAddrPhoneID',

        'aliases': {
            'providerTINAddrPhoneID': 'id',
            'provTINAddressesID': 'provTinAddressesId',
            'provTINID': 'provTinid',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'nonUSPhoneInd': 'nonUsPhoneInd'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provspecialtycat': {
        'name': 'Provspecialtycat',
        'table': 'provspecialtycat',
        'primaryKey': 'provTaxonomyGroup',

        'aliases': {
            'provCategory': 'id',
            'provTaxonomyGroup': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provspecialtysetauditdetail': {
        'name': 'Provspecialtysetauditdetail',
        'table': 'provspecialtysetauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'provSpecialtySetID': 'provSpecialtySetId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provspecialtyset': {
        'name': 'Provspecialtyset',
        'table': 'provspecialtyset',
        'primaryKey': 'provSpecialtySetID',

        'aliases': {
            'provSpecialtySetID': 'id',
            'ownerGroupID': 'ownerGroupId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provspecialtysetcatdetail': {
        'name': 'Provspecialtysetcatdetail',
        'table': 'provspecialtysetcatdetail',
        'primaryKey': 'provSpecialtySetCatDetailID',

        'aliases': {
            'provSpecialtySetCatDetailID': 'id',
            'provSpecialtySetID': 'provSpecialtySetId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'provSpecialtySetCatID': 'provSpecialtySetCatId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provspecialtysetcatdetaildef': {
        'name': 'Provspecialtysetcatdetaildef',
        'table': 'provspecialtysetcatdetaildef',
        'primaryKey': 'taxonomyCode',

        'aliases': {
            'provSpecialtySetCatDetailID': 'id',
            'provSpecialtySetID': 'id',
            'taxonomyCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'provSpecialtySetCatID': 'provSpecialtySetCatId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provspecialtysetcat': {
        'name': 'Provspecialtysetcat',
        'table': 'provspecialtysetcat',
        'primaryKey': 'provSpecialtySetCatID',

        'aliases': {
            'provSpecialtySetCatID': 'id',
            'provSpecialtySetID': 'provSpecialtySetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provtaxonomycodeassign': {
        'name': 'Provtaxonomycodeassign',
        'table': 'provtaxonomycodeassign',
        'primaryKey': 'taxonomyCode',

        'aliases': {
            'provTaxonomyGroup': 'id',
            'taxonomyCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provtinaddressesclaimalias': {
        'name': 'Provtinaddressesclaimalias',
        'table': 'provtinaddressesclaimalias',
        'primaryKey': 'provTINAddressesClaimAliasID',

        'aliases': {
            'provTINAddressesClaimAliasID': 'id',
            'provTINAddressesID': 'provTinAddressesId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'provTINID': 'provTinid'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provtinstate': {
        'name': 'Provtinstate',
        'table': 'provtinstate',
        'primaryKey': 'provTINID',

        'aliases': {
            'state': 'id',
            'stateTaxID': 'id',
            'provTINID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provtaxonomyassign': {
        'name': 'Provtaxonomyassign',
        'table': 'provtaxonomyassign',
        'primaryKey': 'taxonomyCode',

        'aliases': {
            'providerAssignmentType': 'id',
            'taxonomyCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Qualityandefficiencycodetype': {
        'name': 'Qualityandefficiencycodetype',
        'table': 'qualityandefficiencycodetype',
        'primaryKey': 'qualityAndEfficiencyCode',

        'aliases': {
            'qualityAndEfficiencyCode': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Queueattachment': {
        'name': 'Queueattachment',
        'table': 'queueattachment',
        'primaryKey': 'queueAttachmentID',

        'aliases': {
            'queueAttachmentID': 'id',
            'queueID': 'queueId',
            'keyID': 'keyId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provtin': {
        'name': 'Provtin',
        'table': 'provtin',
        'primaryKey': 'provTINID',

        'aliases': {
            'provTINID': 'id',
            'providerTIN': 'providerTin',
            'provTINName': 'provTinName',
            'referenceIDQual': 'referenceIdQual',
            'w9DCNID': 'w9Dcnid',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provtinauditdetail': {
        'name': 'Provtinauditdetail',
        'table': 'provtinauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'provTINID': 'provTinid',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Queueclaimtype': {
        'name': 'Queueclaimtype',
        'table': 'queueclaimtype',
        'primaryKey': 'claimType',

        'aliases': {
            'queueRoleID': 'id',
            'claimType': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provtinnote': {
        'name': 'Provtinnote',
        'table': 'provtinnotes',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'provTINID': 'provTinid',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provtinqueue': {
        'name': 'Provtinqueue',
        'table': 'provtinqueue',
        'primaryKey': 'queueID',

        'aliases': {
            'queueID': 'id',
            'providerID': 'providerId',
            'providerTIN': 'providerTin',
            'provTINName': 'provTinName',
            'w9DCNID': 'w9Dcnid',
            'taxIDState': 'taxIdState',
            'stateTaxID': 'stateTaxId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'referenceIDQual': 'referenceIdQual',
            'provTINID': 'provTinid'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Queuegrouprole': {
        'name': 'Queuegrouprole',
        'table': 'queuegrouprole',
        'primaryKey': 'queueRoleID',

        'aliases': {
            'queueGroupID': 'id',
            'queueRoleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Queuegroup': {
        'name': 'Queuegroup',
        'table': 'queuegroup',
        'primaryKey': 'queueGroupID',

        'aliases': {
            'queueGroupID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Queuegroupuser': {
        'name': 'Queuegroupuser',
        'table': 'queuegroupuser',
        'primaryKey': 'userID',

        'aliases': {
            'queueGroupID': 'id',
            'userID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Provtinaddress': {
        'name': 'Provtinaddress',
        'table': 'provtinaddresses',
        'primaryKey': 'provTINAddressesID',

        'aliases': {
            'provTINAddressesID': 'id',
            'provTINID': 'provTinid',
            'provTIN1099Ind': 'provTin1099Ind',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'originalSourceSystemID': 'originalSourceSystemId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Reference': {
        'name': 'Reference',
        'table': 'reference',
        'primaryKey': 'referenceCode',

        'aliases': {
            'referenceName': 'id',
            'referenceCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Queuerole': {
        'name': 'Queuerole',
        'table': 'queuerole',
        'primaryKey': 'queueRoleID',

        'aliases': {
            'queueRoleID': 'id',
            'provTINIDFilter': 'provTinidFilter',
            'providerIDFilter': 'providerIdFilter',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Queuememgroup': {
        'name': 'Queuememgroup',
        'table': 'queuememgroup',
        'primaryKey': 'memGroupID',

        'aliases': {
            'queueRoleID': 'id',
            'memGroupID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Queuename': {
        'name': 'Queuename',
        'table': 'queuename',
        'primaryKey': 'nameLastSub',

        'aliases': {
            'queueRoleID': 'id',
            'nameLastSub': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Queueeditcode': {
        'name': 'Queueeditcode',
        'table': 'queueeditcode',
        'primaryKey': 'editCode',

        'aliases': {
            'queueRoleID': 'id',
            'editCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Queueprovtinid': {
        'name': 'Queueprovtinid',
        'table': 'queueprovtinid',
        'primaryKey': 'providerTIN',

        'aliases': {
            'queueRoleID': 'id',
            'providerTIN': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Queueheader': {
        'name': 'Queueheader',
        'table': 'queueheader',
        'primaryKey': 'queueID',

        'aliases': {
            'queueID': 'id',
            'lockUserID': 'lockUserId',
            'txfrQueueID': 'txfrQueueId',
            'claimID': 'claimId',
            'claimEventID': 'claimEventId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Queuesourcetype': {
        'name': 'Queuesourcetype',
        'table': 'queuesourcetype',
        'primaryKey': 'enrollmentSource',

        'aliases': {
            'queueRoleID': 'id',
            'enrollmentSource': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Queueroutingcode': {
        'name': 'Queueroutingcode',
        'table': 'queueroutingcode',
        'primaryKey': 'queueRoleID',

        'aliases': {
            'routingCode': 'id',
            'queueRoleID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Regentitycontacteleccom': {
        'name': 'Regentitycontacteleccom',
        'table': 'regentitycontacteleccom',
        'primaryKey': 'regEntityContactElecComID',

        'aliases': {
            'regEntityContactElecComID': 'id',
            'regEntityContactID': 'regEntityContactId',
            'regEntityID': 'regEntityId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Referenceheader': {
        'name': 'Referenceheader',
        'table': 'referenceheader',
        'primaryKey': 'referenceName',

        'aliases': {
            'referenceName': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Regentity': {
        'name': 'Regentity',
        'table': 'regentity',
        'primaryKey': 'regEntityID',

        'aliases': {
            'regEntityID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Regentitycontact': {
        'name': 'Regentitycontact',
        'table': 'regentitycontact',
        'primaryKey': 'regEntityContactID',

        'aliases': {
            'regEntityContactID': 'id',
            'regEntityID': 'regEntityId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Referencefilterchild': {
        'name': 'Referencefilterchild',
        'table': 'referencefilterchild',
        'primaryKey': 'childReferenceCode',

        'aliases': {
            'referenceName': 'id',
            'referenceCode': 'id',
            'childReferenceName': 'id',
            'childReferenceCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Referencefiltercustom': {
        'name': 'Referencefiltercustom',
        'table': 'referencefiltercustom',
        'primaryKey': 'referenceCode',

        'aliases': {
            'referenceCustomFilterName': 'id',
            'referenceName': 'id',
            'referenceCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Regentitydept': {
        'name': 'Regentitydept',
        'table': 'regentitydept',
        'primaryKey': 'regEntityDeptID',

        'aliases': {
            'regEntityDeptID': 'id',
            'regEntityID': 'regEntityId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Regentitycontactaddress': {
        'name': 'Regentitycontactaddress',
        'table': 'regentitycontactaddress',
        'primaryKey': 'regEntityContactAddressID',

        'aliases': {
            'regEntityContactAddressID': 'id',
            'regEntityContactID': 'regEntityContactId',
            'regEntityID': 'regEntityId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Regentitydepthour': {
        'name': 'Regentitydepthour',
        'table': 'regentitydepthours',
        'primaryKey': 'regEntityDeptHoursID',

        'aliases': {
            'regEntityDeptHoursID': 'id',
            'regEntityDeptID': 'regEntityDeptId',
            'regEntityID': 'regEntityId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Regentityauditdetail': {
        'name': 'Regentityauditdetail',
        'table': 'regentityauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'regEntityID': 'regEntityId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Regentitydeptcontact': {
        'name': 'Regentitydeptcontact',
        'table': 'regentitydeptcontact',
        'primaryKey': 'regEntityDeptID',

        'aliases': {
            'regEntityContactID': 'id',
            'regEntityDeptID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'regEntityID': 'regEntityId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Regentitydepteleccom': {
        'name': 'Regentitydepteleccom',
        'table': 'regentitydepteleccom',
        'primaryKey': 'regEntityDeptElecComID',

        'aliases': {
            'regEntityDeptElecComID': 'id',
            'regEntityDeptID': 'regEntityDeptId',
            'regEntityID': 'regEntityId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Regentitycontacthour': {
        'name': 'Regentitycontacthour',
        'table': 'regentitycontacthours',
        'primaryKey': 'regEntityContactHoursID',

        'aliases': {
            'regEntityContactHoursID': 'id',
            'regEntityContactID': 'regEntityContactId',
            'regEntityID': 'regEntityId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Regentitycontactphone': {
        'name': 'Regentitycontactphone',
        'table': 'regentitycontactphone',
        'primaryKey': 'regEntityContactPhoneID',

        'aliases': {
            'regEntityContactPhoneID': 'id',
            'regEntityContactID': 'regEntityContactId',
            'regEntityID': 'regEntityId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Regentityguardrail': {
        'name': 'Regentityguardrail',
        'table': 'regentityguardrail',
        'primaryKey': 'regEntityGuardrailID',

        'aliases': {
            'regEntityGuardrailID': 'id',
            'regEntityID': 'regEntityId',
            'serviceAreaID': 'serviceAreaId',
            'familyUnitScheduleID': 'familyUnitScheduleId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'memStateETInd': 'memStateEtInd',
            'provStateETInd': 'provStateEtInd',
            'surchargeSchedID': 'surchargeSchedId',
            'promptPaySchedID': 'promptPaySchedId',
            'guardrailScheduleID': 'guardrailScheduleId',
            'timelyFilingSchedID': 'timelyFilingSchedId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Regentityguardrailbenefit': {
        'name': 'Regentityguardrailbenefit',
        'table': 'regentityguardrailbenefit',
        'primaryKey': 'benefitType',

        'aliases': {
            'regEntityID': 'id',
            'regEntityGuardrailID': 'id',
            'benefitType': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Regentitydeptphone': {
        'name': 'Regentitydeptphone',
        'table': 'regentitydeptphone',
        'primaryKey': 'regEntityDeptPhoneID',

        'aliases': {
            'regEntityDeptPhoneID': 'id',
            'regEntityDeptID': 'regEntityDeptId',
            'regEntityID': 'regEntityId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Regentitydeptaddress': {
        'name': 'Regentitydeptaddress',
        'table': 'regentitydeptaddress',
        'primaryKey': 'regEntityDeptAddressID',

        'aliases': {
            'regEntityDeptAddressID': 'id',
            'regEntityDeptID': 'regEntityDeptId',
            'regEntityID': 'regEntityId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Regentityguardrailerisa': {
        'name': 'Regentityguardrailerisa',
        'table': 'regentityguardrailerisa',
        'primaryKey': 'erisaCategoryType',

        'aliases': {
            'regEntityID': 'id',
            'regEntityGuardrailID': 'id',
            'erisaCategoryType': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Region': {
        'name': 'Region',
        'table': 'region',
        'primaryKey': 'regionID',

        'aliases': {
            'regionID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Regentityguardrailplan': {
        'name': 'Regentityguardrailplan',
        'table': 'regentityguardrailplan',
        'primaryKey': 'planType',

        'aliases': {
            'regEntityID': 'id',
            'regEntityGuardrailID': 'id',
            'planType': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Regentitynote': {
        'name': 'Regentitynote',
        'table': 'regentitynote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'regEntityID': 'regEntityId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcode': {
        'name': 'Remarkcode',
        'table': 'remarkcode',
        'primaryKey': 'remarkCode',

        'aliases': {
            'remarkCode': 'id',
            'suppressEOBInd': 'suppressEobInd',
            'suppressPRAInd': 'suppressPraInd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Relationshipauditdetail': {
        'name': 'Relationshipauditdetail',
        'table': 'relationshipauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'relationshipScheduleID': 'relationshipScheduleId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Regentityguardrailmetallic': {
        'name': 'Regentityguardrailmetallic',
        'table': 'regentityguardrailmetallic',
        'primaryKey': 'metallicLevel',

        'aliases': {
            'regEntityID': 'id',
            'regEntityGuardrailID': 'id',
            'metallicLevel': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Relationshiplevelcode': {
        'name': 'Relationshiplevelcode',
        'table': 'relationshiplevelcode',
        'primaryKey': 'relationshipCode',

        'aliases': {
            'relationshipScheduleID': 'id',
            'relLevel': 'id',
            'relationshipCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Relationshipnote': {
        'name': 'Relationshipnote',
        'table': 'relationshipnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'relationshipScheduleID': 'relationshipScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Regentityguardrailgovt': {
        'name': 'Regentityguardrailgovt',
        'table': 'regentityguardrailgovt',
        'primaryKey': 'govtBenefitType',

        'aliases': {
            'regEntityID': 'id',
            'regEntityGuardrailID': 'id',
            'govtBenefitType': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodeaccounttype': {
        'name': 'Remarkcodeaccounttype',
        'table': 'remarkcodeaccounttype',
        'primaryKey': 'remarkCodeScheduleID',

        'aliases': {
            'msaType': 'id',
            'remarkCodeTriggerID': 'id',
            'remarkCodeScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Relationshipschedule': {
        'name': 'Relationshipschedule',
        'table': 'relationshipschedule',
        'primaryKey': 'relationshipScheduleID',

        'aliases': {
            'relationshipScheduleID': 'id',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodeauditdetail': {
        'name': 'Remarkcodeauditdetail',
        'table': 'remarkcodeauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodebilltype': {
        'name': 'Remarkcodebilltype',
        'table': 'remarkcodebilltype',
        'primaryKey': 'remarkCodeScheduleID',

        'aliases': {
            'billTypeSetCatID': 'id',
            'remarkCodeTriggerID': 'id',
            'remarkCodeScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodedeleg': {
        'name': 'Remarkcodedeleg',
        'table': 'remarkcodedeleg',
        'primaryKey': 'remarkCodeScheduleID',

        'aliases': {
            'remarkCodeDelegID': 'id',
            'remarkCodeTriggerID': 'id',
            'remarkCodeScheduleID': 'id',
            'delegationEntityID': 'delegationEntityId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodediag': {
        'name': 'Remarkcodediag',
        'table': 'remarkcodediag',
        'primaryKey': 'remarkCodeScheduleID',

        'aliases': {
            'diagnosisSetCatID': 'id',
            'remarkCodeTriggerID': 'id',
            'remarkCodeScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodeclinicaleditresponse': {
        'name': 'Remarkcodeclinicaleditresponse',
        'table': 'remarkcodeclinicaleditresponse',
        'primaryKey': 'remarkCodeScheduleID',

        'aliases': {
            'clinicalEditResponseCode': 'id',
            'remarkCodeTriggerID': 'id',
            'remarkCodeScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Relationshipschedulelevel': {
        'name': 'Relationshipschedulelevel',
        'table': 'relationshipschedulelevel',
        'primaryKey': 'relLevel',

        'aliases': {
            'relationshipScheduleID': 'id',
            'relLevel': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodedrc': {
        'name': 'Remarkcodedrc',
        'table': 'remarkcodedrc',
        'primaryKey': 'remarkCodeScheduleID',

        'aliases': {
            'denyReasonCode': 'id',
            'remarkCodeTriggerID': 'id',
            'remarkCodeScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodeexpense': {
        'name': 'Remarkcodeexpense',
        'table': 'remarkcodeexpense',
        'primaryKey': 'remarkCodeScheduleID',

        'aliases': {
            'expenseCode': 'id',
            'remarkCodeTriggerID': 'id',
            'remarkCodeScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodeclaimeditcode': {
        'name': 'Remarkcodeclaimeditcode',
        'table': 'remarkcodeclaimeditcode',
        'primaryKey': 'remarkCodeScheduleID',

        'aliases': {
            'editCode': 'id',
            'remarkCodeTriggerID': 'id',
            'remarkCodeScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodeinternaladjustrsncd': {
        'name': 'Remarkcodeinternaladjustrsncd',
        'table': 'remarkcodeinternaladjustrsncd',
        'primaryKey': 'remarkCodeScheduleID',

        'aliases': {
            'internalAdjustReasonCode': 'id',
            'remarkCodeTriggerID': 'id',
            'remarkCodeScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodebenefit': {
        'name': 'Remarkcodebenefit',
        'table': 'remarkcodebenefit',
        'primaryKey': 'remarkCodeScheduleID',

        'aliases': {
            'benefitCode': 'id',
            'remarkCodeTriggerID': 'id',
            'remarkCodeScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodepricingcomp': {
        'name': 'Remarkcodepricingcomp',
        'table': 'remarkcodepricingcomp',
        'primaryKey': 'remarkCodePricingCompID',

        'aliases': {
            'remarkCodePricingCompID': 'id',
            'remarkCodeTriggerID': 'remarkCodeTriggerId',
            'remarkCodeScheduleID': 'remarkCodeScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodepricingmethodtype': {
        'name': 'Remarkcodepricingmethodtype',
        'table': 'remarkcodepricingmethodtype',
        'primaryKey': 'remarkCodePricingMethodTypeID',

        'aliases': {
            'remarkCodePricingMethodTypeID': 'id',
            'remarkCodeTriggerID': 'remarkCodeTriggerId',
            'remarkCodeScheduleID': 'remarkCodeScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodemedpolicyrule': {
        'name': 'Remarkcodemedpolicyrule',
        'table': 'remarkcodemedpolicyrule',
        'primaryKey': 'remarkCodeScheduleID',

        'aliases': {
            'medPolicyRuleID': 'id',
            'remarkCodeTriggerID': 'id',
            'remarkCodeScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodeorc': {
        'name': 'Remarkcodeorc',
        'table': 'remarkcodeorc',
        'primaryKey': 'remarkCodeScheduleID',

        'aliases': {
            'overrideReasonCode': 'id',
            'remarkCodeTriggerID': 'id',
            'remarkCodeScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodeproc': {
        'name': 'Remarkcodeproc',
        'table': 'remarkcodeproc',
        'primaryKey': 'remarkCodeScheduleID',

        'aliases': {
            'procedureSetCatID': 'id',
            'remarkCodeTriggerID': 'id',
            'remarkCodeScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodeprovdesignation': {
        'name': 'Remarkcodeprovdesignation',
        'table': 'remarkcodeprovdesignation',
        'primaryKey': 'remarkCodeScheduleID',

        'aliases': {
            'providerDesignation': 'id',
            'remarkCodeTriggerID': 'id',
            'remarkCodeScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcoderevenue': {
        'name': 'Remarkcoderevenue',
        'table': 'remarkcoderevenue',
        'primaryKey': 'remarkCodeScheduleID',

        'aliases': {
            'revenueSetCatID': 'id',
            'remarkCodeTriggerID': 'id',
            'remarkCodeScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodemodifiercode': {
        'name': 'Remarkcodemodifiercode',
        'table': 'remarkcodemodifiercode',
        'primaryKey': 'remarkCodeScheduleID',

        'aliases': {
            'modifierCode': 'id',
            'remarkCodeTriggerID': 'id',
            'remarkCodeScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodescheduleauditdetail': {
        'name': 'Remarkcodescheduleauditdetail',
        'table': 'remarkcodescheduleauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'remarkCodeScheduleID': 'remarkCodeScheduleId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodesurcharge': {
        'name': 'Remarkcodesurcharge',
        'table': 'remarkcodesurcharge',
        'primaryKey': 'remarkCodeScheduleID',

        'aliases': {
            'regEntityID': 'id',
            'remarkCodeTriggerID': 'id',
            'remarkCodeScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodepo': {
        'name': 'Remarkcodepo',
        'table': 'remarkcodepos',
        'primaryKey': 'remarkCodeScheduleID',

        'aliases': {
            'placeOfServiceSetCatID': 'id',
            'remarkCodeTriggerID': 'id',
            'remarkCodeScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodesitusstate': {
        'name': 'Remarkcodesitusstate',
        'table': 'remarkcodesitusstate',
        'primaryKey': 'remarkCodeScheduleID',

        'aliases': {
            'state': 'id',
            'remarkCodeTriggerID': 'id',
            'remarkCodeScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodeschedule': {
        'name': 'Remarkcodeschedule',
        'table': 'remarkcodeschedule',
        'primaryKey': 'remarkCodeScheduleID',

        'aliases': {
            'remarkCodeScheduleID': 'id',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'procedureSetID': 'procedureSetId',
            'billTypeSetID': 'billTypeSetId',
            'diagnosisSetID': 'diagnosisSetId',
            'provSpecialtySetID': 'provSpecialtySetId',
            'revenueSetID': 'revenueSetId',
            'placeOfServiceSetID': 'placeOfServiceSetId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodeschedbrand': {
        'name': 'Remarkcodeschedbrand',
        'table': 'remarkcodeschedbrand',
        'primaryKey': 'remarkCodeScheduleID',

        'aliases': {
            'brandingEntity': 'id',
            'remarkCodeTriggerID': 'id',
            'remarkCodeScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Revenuecatrange': {
        'name': 'Revenuecatrange',
        'table': 'revenuecatrange',
        'primaryKey': 'revenueCatSeqNum',

        'aliases': {
            'revenueCategory': 'id',
            'revenueCatSeqNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Revenuecategory': {
        'name': 'Revenuecategory',
        'table': 'revenuecategory',
        'primaryKey': 'revenueCategory',

        'aliases': {
            'revenueCategory': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Revenuebasefileuploaddetail': {
        'name': 'Revenuebasefileuploaddetail',
        'table': 'revenuebasefileuploaddetail',
        'primaryKey': 'revenueBaseFileUploadDetailID',

        'aliases': {
            'revenueBaseFileUploadDetailID': 'id',
            'revenueBaseFileUploadHeaderID': 'revenueBaseFileUploadHeaderId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodeschedulenote': {
        'name': 'Remarkcodeschedulenote',
        'table': 'remarkcodeschedulenote',
        'primaryKey': 'remarkCodeScheduleNoteID',

        'aliases': {
            'remarkCodeScheduleNoteID': 'id',
            'remarkCodeScheduleID': 'remarkCodeScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodescheduleprov': {
        'name': 'Remarkcodescheduleprov',
        'table': 'remarkcodescheduleprov',
        'primaryKey': 'remarkCodeScheduleID',

        'aliases': {
            'provSpecialtySetCatID': 'id',
            'remarkCodeTriggerID': 'id',
            'remarkCodeScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodetrigger': {
        'name': 'Remarkcodetrigger',
        'table': 'remarkcodetrigger',
        'primaryKey': 'remarkCodeTriggerID',

        'aliases': {
            'remarkCodeTriggerID': 'id',
            'remarkCodeScheduleID': 'remarkCodeScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'fulfillTemplateID': 'fulfillTemplateId',
            'variableContentID': 'variableContentId',
            'deductibleSatisfiedThisCLAInd': 'deductibleSatisfiedThisClaInd',
            'deductibleBypassReachedThisCLAInd': 'deductibleBypassReachedThisClaInd',
            'stoplossSatisfiedThisCLAInd': 'stoplossSatisfiedThisClaInd',
            'stoplossBypassReachedThisCLAInd': 'stoplossBypassReachedThisClaInd',
            'oopSatisfiedThisCLAInd': 'oopSatisfiedThisClaInd',
            'oopBypassReachedThisCLAInd': 'oopBypassReachedThisClaInd'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Revenuesetauditdetail': {
        'name': 'Revenuesetauditdetail',
        'table': 'revenuesetauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'revenueSetID': 'revenueSetId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Remarkcodevendorremarkcode': {
        'name': 'Remarkcodevendorremarkcode',
        'table': 'remarkcodevendorremarkcode',
        'primaryKey': 'remarkCodeScheduleID',

        'aliases': {
            'vendorRemarkCode': 'id',
            'remarkCodeTriggerID': 'id',
            'remarkCodeScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Rhceditcodeassign': {
        'name': 'Rhceditcodeassign',
        'table': 'rhceditcodeassign',
        'primaryKey': 'settingID',

        'aliases': {
            'editCode': 'id',
            'settingID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Reportexecution': {
        'name': 'Reportexecution',
        'table': 'reportexecution',
        'primaryKey': 'reportExecutionID',

        'aliases': {
            'reportExecutionID': 'id',
            'reportID': 'reportId',
            'ownerUserID': 'ownerUserId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Revenuesetcatdetail': {
        'name': 'Revenuesetcatdetail',
        'table': 'revenuesetcatdetail',
        'primaryKey': 'revenueSetCatDetailID',

        'aliases': {
            'revenueSetCatDetailID': 'id',
            'revenueSetCatID': 'revenueSetCatId',
            'revenueSetID': 'revenueSetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Revenuesetcat': {
        'name': 'Revenuesetcat',
        'table': 'revenuesetcat',
        'primaryKey': 'revenueSetCatID',

        'aliases': {
            'revenueSetCatID': 'id',
            'revenueSetID': 'revenueSetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Revenuecode': {
        'name': 'Revenuecode',
        'table': 'revenuecode',
        'primaryKey': 'revenueCodeID',

        'aliases': {
            'revenueCodeID': 'id',
            'short_description': 'shortDescription',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Revenuesetcatdetaildef': {
        'name': 'Revenuesetcatdetaildef',
        'table': 'revenuesetcatdetaildef',
        'primaryKey': 'revenueSetCatDetailDefID',

        'aliases': {
            'revenueSetCatDetailDefID': 'id',
            'revenueSetCatDetailID': 'revenueSetCatDetailId',
            'revenueSetID': 'revenueSetId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'revenueSetCatID': 'revenueSetCatId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Revenuebasefileuploadheader': {
        'name': 'Revenuebasefileuploadheader',
        'table': 'revenuebasefileuploadheader',
        'primaryKey': 'revenueBaseFileUploadHeaderID',

        'aliases': {
            'revenueBaseFileUploadHeaderID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Revenueset': {
        'name': 'Revenueset',
        'table': 'revenueset',
        'primaryKey': 'revenueSetID',

        'aliases': {
            'revenueSetID': 'id',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Riskarrangecontractdetail': {
        'name': 'Riskarrangecontractdetail',
        'table': 'riskarrangecontractdetail',
        'primaryKey': 'riskArrangeContractDetailID',

        'aliases': {
            'riskArrangeContractDetailID': 'id',
            'riskArrangeContractVersionID': 'riskArrangeContractVersionId',
            'defaultDOFRRiskContrEntityID': 'defaultDofrRiskContrEntityId',
            'defaultDelegRiskContrEntityID': 'defaultDelegRiskContrEntityId',
            'servCompID': 'servCompId',
            'serviceAreaID': 'serviceAreaId',
            'pricingSetID': 'pricingSetId',
            'capitationSetID': 'capitationSetId',
            'capPayeeRiskContrEntityID': 'capPayeeRiskContrEntityId',
            'capRecipientRiskContrEntityID': 'capRecipientRiskContrEntityId',
            'capRetroPeriodDT': 'capRetroPeriodDt',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Riskarrangecontractcarrier': {
        'name': 'Riskarrangecontractcarrier',
        'table': 'riskarrangecontractcarrier',
        'primaryKey': 'riskArrangeContractCarrierID',

        'aliases': {
            'riskArrangeContractCarrierID': 'id',
            'riskArrangeContractDetailID': 'riskArrangeContractDetailId',
            'riskArrangeContractVersionID': 'riskArrangeContractVersionId',
            'carrierID': 'carrierId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'carrier': 'carrierId'
        },

        'listReferences': {}
    },

    'Riskarrangecontractdeleg': {
        'name': 'Riskarrangecontractdeleg',
        'table': 'riskarrangecontractdeleg',
        'primaryKey': 'riskArrangeContractDelegID',

        'aliases': {
            'riskArrangeContractDelegID': 'id',
            'riskArrangeContractDetailID': 'riskArrangeContractDetailId',
            'riskArrangeContractEntityID': 'riskArrangeContractEntityId',
            'riskArrangeContractVersionID': 'riskArrangeContractVersionId',
            'servID': 'servId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Riskarrangecontractaffilprov': {
        'name': 'Riskarrangecontractaffilprov',
        'table': 'riskarrangecontractaffilprov',
        'primaryKey': 'riskArrangeContractAffilProvID',

        'aliases': {
            'riskArrangeContractAffilProvID': 'id',
            'riskArrangeContractDetailID': 'riskArrangeContractDetailId',
            'riskArrangeContractVersionID': 'riskArrangeContractVersionId',
            'affiliatedToEntityID': 'affiliatedToEntityId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Riskarrangecontract': {
        'name': 'Riskarrangecontract',
        'table': 'riskarrangecontract',
        'primaryKey': 'riskArrangeContractVersionID',

        'aliases': {
            'riskArrangeContractVersionID': 'id',
            'riskArrangeContractID': 'riskArrangeContractId',
            'ownerGroupID': 'ownerGroupId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Riskarrangecontractdofr': {
        'name': 'Riskarrangecontractdofr',
        'table': 'riskarrangecontractdofr',
        'primaryKey': 'riskArrangeContractDOFRID',

        'aliases': {
            'riskArrangeContractDOFRID': 'id',
            'riskArrangeContractDetailID': 'riskArrangeContractDetailId',
            'riskArrangeContractEntityID': 'riskArrangeContractEntityId',
            'riskArrangeContractVersionID': 'riskArrangeContractVersionId',
            'servID': 'servId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Riskarrangecontracthold': {
        'name': 'Riskarrangecontracthold',
        'table': 'riskarrangecontracthold',
        'primaryKey': 'riskArrangeContractHoldID',

        'aliases': {
            'riskArrangeContractHoldID': 'id',
            'riskArrangeContractVersionID': 'riskArrangeContractVersionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Riskarrangecontractlob': {
        'name': 'Riskarrangecontractlob',
        'table': 'riskarrangecontractlob',
        'primaryKey': 'riskArrangeContractLOBID',

        'aliases': {
            'riskArrangeContractLOBID': 'id',
            'riskArrangeContractDetailID': 'riskArrangeContractDetailId',
            'riskArrangeContractVersionID': 'riskArrangeContractVersionId',
            'lineOfBusinessID': 'lineOfBusinessId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Riskarrangecontractnote': {
        'name': 'Riskarrangecontractnote',
        'table': 'riskarrangecontractnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'riskArrangeContractVersionID': 'riskArrangeContractVersionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Riskarrangecontractproduct': {
        'name': 'Riskarrangecontractproduct',
        'table': 'riskarrangecontractproduct',
        'primaryKey': 'riskArrangeContractProductID',

        'aliases': {
            'riskArrangeContractProductID': 'id',
            'riskArrangeContractDetailID': 'riskArrangeContractDetailId',
            'riskArrangeContractVersionID': 'riskArrangeContractVersionId',
            'productID': 'productId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'product': 'productId'
        },

        'listReferences': {}
    },

    'Riderbenefittypestack': {
        'name': 'Riderbenefittypestack',
        'table': 'riderbenefittypestack',
        'primaryKey': 'riderBenefitTypeStackID',

        'aliases': {
            'riderBenefitTypeStackID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Riskarrangecontrdelegfct': {
        'name': 'Riskarrangecontrdelegfct',
        'table': 'riskarrangecontrdelegfct',
        'primaryKey': 'riskArrangeContrDelegFctID',

        'aliases': {
            'riskArrangeContrDelegFctID': 'id',
            'riskArrangeContractDetailID': 'riskArrangeContractDetailId',
            'riskArrangeContractEntityID': 'riskArrangeContractEntityId',
            'riskArrangeContractVersionID': 'riskArrangeContractVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Riskarrangecontractentity': {
        'name': 'Riskarrangecontractentity',
        'table': 'riskarrangecontractentity',
        'primaryKey': 'riskArrangeContractEntityID',

        'aliases': {
            'riskArrangeContractEntityID': 'id',
            'riskArrangeContractVersionID': 'riskArrangeContractVersionId',
            'entityID': 'entityId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Rule': {
        'name': 'Rule',
        'table': 'rule',
        'primaryKey': 'ruleID',

        'aliases': {
            'ruleID': 'id',
            'ruleCriteriaID': 'ruleCriteriaId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'ownerGroupID': 'ownerGroupId'
        },

        'referenceMap': {},

        'listReferences': {
            'rulecriteria': 'ruleID'
        }
    },

    'Roomandboardrev': {
        'name': 'Roomandboardrev',
        'table': 'roomandboardrev',
        'primaryKey': 'revenueCode',

        'aliases': {
            'revenueCode': 'id',
            'pricingSettingID': 'pricingSettingId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Riskarrangecontractplan': {
        'name': 'Riskarrangecontractplan',
        'table': 'riskarrangecontractplan',
        'primaryKey': 'riskArrangeContractPlanID',

        'aliases': {
            'riskArrangeContractPlanID': 'id',
            'riskArrangeContractDetailID': 'riskArrangeContractDetailId',
            'riskArrangeContractVersionID': 'riskArrangeContractVersionId',
            'planID': 'planId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Rulecriterion': {
        'name': 'Rulecriterion',
        'table': 'rulecriteria',
        'primaryKey': 'ruleCriteriaID',

        'aliases': {
            'ruleCriteriaID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'ruleServicePropertyID': 'ruleServicePropertyId',
            'ruleID': 'ruleId'
        },

        'referenceMap': {
            'rule': 'ruleId'
        },

        'listReferences': {}
    },

    'Riskarrangecontrauditdetail': {
        'name': 'Riskarrangecontrauditdetail',
        'table': 'riskarrangecontrauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'riskArrangeContractVersionID': 'riskArrangeContractVersionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ruleassign': {
        'name': 'Ruleassign',
        'table': 'ruleassign',
        'primaryKey': 'ruleAssignID',

        'aliases': {
            'ruleSetID': 'ruleSetId',
            'ruleID': 'ruleId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'ruleAssignID': 'id',
            'baseVersionID': 'baseVersionId'
        },

        'referenceMap': {
            'rule': 'ruleId'
        },

        'listReferences': {}
    },

    'Rulelogheader': {
        'name': 'Rulelogheader',
        'table': 'rulelogheader',
        'primaryKey': 'ruleLogHeaderID',

        'aliases': {
            'ruleLogHeaderID': 'id',
            'ruleSetID': 'ruleSetId',
            'ruleTransactionID': 'ruleTransactionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Rulelog': {
        'name': 'Rulelog',
        'table': 'rulelog',
        'primaryKey': 'ruleLogID',

        'aliases': {
            'ruleLogID': 'id',
            'ruleSetID': 'ruleSetId',
            'ruleID': 'ruleId',
            'ruleCriteriaID': 'ruleCriteriaId',
            'ruleTransactionID': 'ruleTransactionId',
            'ruleLogHeaderID': 'ruleLogHeaderId'
        },

        'referenceMap': {
            'rule': 'ruleId'
        },

        'listReferences': {}
    },

    'Routingcode': {
        'name': 'Routingcode',
        'table': 'routingcode',
        'primaryKey': 'routingCode',

        'aliases': {
            'routingCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Rvu': {
        'name': 'Rvu',
        'table': 'rvu',
        'primaryKey': 'rvuID',

        'aliases': {
            'rvuID': 'id',
            'workRVU': 'workRvu',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ruleserviceproperty': {
        'name': 'Ruleserviceproperty',
        'table': 'ruleserviceproperty',
        'primaryKey': 'ruleServicePropertyID',

        'aliases': {
            'ruleServicePropertyID': 'id',
            'ruleServicePropertyParentID': 'ruleServicePropertyParentId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ruleservice': {
        'name': 'Ruleservice',
        'table': 'ruleservice',
        'primaryKey': 'ruleServiceName',

        'aliases': {
            'ruleServiceName': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'ownerGroupID': 'ownerGroupId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ruleset': {
        'name': 'Ruleset',
        'table': 'ruleset',
        'primaryKey': 'ruleSetID',

        'aliases': {
            'ruleSetID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'ownerGroupID': 'ownerGroupId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Rvufileuploadheader': {
        'name': 'Rvufileuploadheader',
        'table': 'rvufileuploadheader',
        'primaryKey': 'rvuFileUploadHeaderID',

        'aliases': {
            'rvuFileUploadHeaderID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Salesoffice': {
        'name': 'Salesoffice',
        'table': 'salesoffice',
        'primaryKey': 'salesOfficeID',

        'aliases': {
            'salesOfficeID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Rvufileuploadstaging': {
        'name': 'Rvufileuploadstaging',
        'table': 'rvufileuploadstaging',
        'primaryKey': 'rvuFileUploadStagingID',

        'aliases': {
            'rvuFileUploadStagingID': 'id',
            'rvuFileUploadHeaderID': 'rvuFileUploadHeaderId',
            'workRVU': 'workRvu',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Scheduledjob': {
        'name': 'Scheduledjob',
        'table': 'scheduledjob',
        'primaryKey': 'jobSeqNum',

        'aliases': {
            'jobSeqNum': 'id',
            'sysJobID': 'sysJobId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'jobExecutionID': 'jobExecutionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Rxclaimsetting': {
        'name': 'Rxclaimsetting',
        'table': 'rxclaimsettings',
        'primaryKey': 'settingID',

        'aliases': {
            'settingID': 'id',
            'rxCOBPaymentsInd': 'rxCobPaymentsInd',
            'rxProductIDQualReq': 'rxProductIdQualReq',
            'rxDAWCodeReq': 'rxDawCodeReq',
            'rxPrescIDQualReq': 'rxPrescIdQualReq',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Scheduledjoblockauditdetail': {
        'name': 'Scheduledjoblockauditdetail',
        'table': 'scheduledjoblockauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'systemID': 'systemId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Scheduledjobauditdetail': {
        'name': 'Scheduledjobauditdetail',
        'table': 'scheduledjobauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Salesofficeauditdetail': {
        'name': 'Salesofficeauditdetail',
        'table': 'salesofficeauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'salesOfficeID': 'salesOfficeId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Salesofficenote': {
        'name': 'Salesofficenote',
        'table': 'salesofficenote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'salesOfficeID': 'salesOfficeId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Salesofficeexternalid': {
        'name': 'Salesofficeexternalid',
        'table': 'salesofficeexternalid',
        'primaryKey': 'salesOfficeExternalID',

        'aliases': {
            'salesOfficeExternalID': 'id',
            'salesOfficeID': 'salesOfficeId',
            'originalSourceSystemID': 'originalSourceSystemId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Scheduledjoblock': {
        'name': 'Scheduledjoblock',
        'table': 'scheduledjoblock',
        'primaryKey': 'systemID',

        'aliases': {
            'systemID': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Scmbenecodebilltypecategory': {
        'name': 'Scmbenecodebilltypecategory',
        'table': 'scmbenecodebilltypecategory',
        'primaryKey': 'billTypeCategory',

        'aliases': {
            'scmID': 'scmId',
            'scmBeneCodeID': 'id',
            'billTypeCategory': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'scm': 'scmId'
        },

        'listReferences': {}
    },

    'Scmbenecode': {
        'name': 'Scmbenecode',
        'table': 'scmbenecode',
        'primaryKey': 'scmBeneCodeID',

        'aliases': {
            'scmID': 'scmId',
            'scmBeneCodeID': 'id',
            'allPOSCodes': 'allPosCodes',
            'allExceptPOSCodes': 'allExceptPosCodes',
            'noPOSCodes': 'noPosCodes',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'scm': 'scmId'
        },

        'listReferences': {}
    },

    'Scm': {
        'name': 'Scm',
        'table': 'scm',
        'primaryKey': 'scmID',

        'aliases': {
            'scmID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'SchemaVersion': {
        'name': 'SchemaVersion',
        'table': 'schema_version',
        'primaryKey': 'installed_rank',

        'aliases': {
            'installed_rank': 'id',
            'type': 'schemaVersionType',
            'installed_by': 'installedBy',
            'installed_on': 'installedOn',
            'execution_time': 'executionTime'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Scmbenecodemodifier': {
        'name': 'Scmbenecodemodifier',
        'table': 'scmbenecodemodifier',
        'primaryKey': 'modifierCode',

        'aliases': {
            'scmID': 'scmId',
            'scmBeneCodeID': 'id',
            'modifierCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'scm': 'scmId'
        },

        'listReferences': {}
    },

    'Scmbenecodeposcategory': {
        'name': 'Scmbenecodeposcategory',
        'table': 'scmbenecodeposcategory',
        'primaryKey': 'posCategory',

        'aliases': {
            'scmID': 'scmId',
            'scmBeneCodeID': 'id',
            'posCategory': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'scm': 'scmId'
        },

        'listReferences': {}
    },

    'Scmbenecodediagcategory': {
        'name': 'Scmbenecodediagcategory',
        'table': 'scmbenecodediagcategory',
        'primaryKey': 'diagCategory',

        'aliases': {
            'scmID': 'scmId',
            'scmBeneCodeID': 'id',
            'diagCategory': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'scm': 'scmId'
        },

        'listReferences': {}
    },

    'Scmbenecodeprovcategory': {
        'name': 'Scmbenecodeprovcategory',
        'table': 'scmbenecodeprovcategory',
        'primaryKey': 'provTaxonomyGroup',

        'aliases': {
            'scmID': 'scmId',
            'scmBeneCodeID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'provTaxonomyGroup': 'id'
        },

        'referenceMap': {
            'scm': 'scmId'
        },

        'listReferences': {}
    },

    'Scmbenecoderevenuecategory': {
        'name': 'Scmbenecoderevenuecategory',
        'table': 'scmbenecoderevenuecategory',
        'primaryKey': 'revenueCategory',

        'aliases': {
            'scmID': 'scmId',
            'scmBeneCodeID': 'id',
            'revenueCategory': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'scm': 'scmId'
        },

        'listReferences': {}
    },

    'Scmbenecodeproccategory': {
        'name': 'Scmbenecodeproccategory',
        'table': 'scmbenecodeproccategory',
        'primaryKey': 'procCategory',

        'aliases': {
            'scmID': 'scmId',
            'scmBeneCodeID': 'id',
            'procCategory': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'scm': 'scmId'
        },

        'listReferences': {}
    },

    'Scmtoservcompvalidation': {
        'name': 'Scmtoservcompvalidation',
        'table': 'scmtoservcompvalidation',
        'primaryKey': 'scmToServCompValidationID',

        'aliases': {
            'scmToServCompValidationID': 'id',
            'scmID': 'scmId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'scm': 'scmId'
        },

        'listReferences': {}
    },

    'Scmvalidation': {
        'name': 'Scmvalidation',
        'table': 'scmvalidation',
        'primaryKey': 'scmValidationID',

        'aliases': {
            'scmValidationID': 'id',
            'scmID': 'scmId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'scm': 'scmId'
        },

        'listReferences': {}
    },

    'Servcompauditdetail': {
        'name': 'Servcompauditdetail',
        'table': 'servcompauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'servCompVersionID': 'servCompVersionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Servcompnote': {
        'name': 'Servcompnote',
        'table': 'servcompnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'servCompVersionID': 'servCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Servcompservdetailbilltype': {
        'name': 'Servcompservdetailbilltype',
        'table': 'servcompservdetailbilltype',
        'primaryKey': 'servCompServDetailBillTypeID',

        'aliases': {
            'servCompServDetailBillTypeID': 'id',
            'servCompServDetailID': 'servCompServDetailId',
            'servCompServID': 'servCompServId',
            'servCompVersionID': 'servCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'billTypeSetCatID': 'billTypeSetCatId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Servcomp': {
        'name': 'Servcomp',
        'table': 'servcomp',
        'primaryKey': 'servCompVersionID',

        'aliases': {
            'servCompVersionID': 'id',
            'servCompID': 'servCompId',
            'placeOfServiceSetID': 'placeOfServiceSetId',
            'procedureSetID': 'procedureSetId',
            'diagnosisSetID': 'diagnosisSetId',
            'revenueSetID': 'revenueSetId',
            'provSpecialtySetID': 'provSpecialtySetId',
            'billTypeSetID': 'billTypeSetId',
            'ownerGroupID': 'ownerGroupId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Servcompservdetail': {
        'name': 'Servcompservdetail',
        'table': 'servcompservdetail',
        'primaryKey': 'servCompServDetailID',

        'aliases': {
            'servCompServDetailID': 'id',
            'servCompServID': 'servCompServId',
            'servCompVersionID': 'servCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Servcompserv': {
        'name': 'Servcompserv',
        'table': 'servcompserv',
        'primaryKey': 'servCompServID',

        'aliases': {
            'servCompServID': 'id',
            'servCompVersionID': 'servCompVersionId',
            'servID': 'servId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Servcompservdetaildiagcode': {
        'name': 'Servcompservdetaildiagcode',
        'table': 'servcompservdetaildiagcode',
        'primaryKey': 'servCompServDetailDiagCodeID',

        'aliases': {
            'servCompServDetailDiagCodeID': 'id',
            'servCompServDetailID': 'servCompServDetailId',
            'servCompServID': 'servCompServId',
            'servCompVersionID': 'servCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Servcompservdetaildiag': {
        'name': 'Servcompservdetaildiag',
        'table': 'servcompservdetaildiag',
        'primaryKey': 'servCompServDetailDiagID',

        'aliases': {
            'servCompServDetailID': 'servCompServDetailId',
            'servCompServID': 'servCompServId',
            'servCompVersionID': 'servCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'servCompServDetailDiagID': 'id',
            'diagnosisSetCatID': 'diagnosisSetCatId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Servcompservdetailbilltypecode': {
        'name': 'Servcompservdetailbilltypecode',
        'table': 'servcompservdetailbilltypecode',
        'primaryKey': 'servCompServDetailID',

        'aliases': {
            'typeOfBill': 'id',
            'servCompServDetailID': 'id',
            'servCompServID': 'servCompServId',
            'servCompVersionID': 'servCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Servcompservdetailposcode': {
        'name': 'Servcompservdetailposcode',
        'table': 'servcompservdetailposcode',
        'primaryKey': 'servCompServDetailID',

        'aliases': {
            'posCode': 'id',
            'servCompServDetailID': 'id',
            'servCompServID': 'servCompServId',
            'servCompVersionID': 'servCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Scmnote': {
        'name': 'Scmnote',
        'table': 'scmnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'scmID': 'scmId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'scm': 'scmId'
        },

        'listReferences': {}
    },

    'Servcompservdetailpo': {
        'name': 'Servcompservdetailpo',
        'table': 'servcompservdetailpos',
        'primaryKey': 'servCompServDetailPosID',

        'aliases': {
            'servCompServDetailPosID': 'id',
            'servCompServDetailID': 'servCompServDetailId',
            'servCompServID': 'servCompServId',
            'servCompVersionID': 'servCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'placeOfServiceSetCatID': 'placeOfServiceSetCatId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Servcompservdetailrevenue': {
        'name': 'Servcompservdetailrevenue',
        'table': 'servcompservdetailrevenue',
        'primaryKey': 'servCompServDetailRevenueID',

        'aliases': {
            'servCompServDetailID': 'servCompServDetailId',
            'servCompServID': 'servCompServId',
            'servCompVersionID': 'servCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'servCompServDetailRevenueID': 'id',
            'revenueSetCatID': 'revenueSetCatId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Servcompservdetailprovcode': {
        'name': 'Servcompservdetailprovcode',
        'table': 'servcompservdetailprovcode',
        'primaryKey': 'servCompServDetailID',

        'aliases': {
            'taxonomyCode': 'id',
            'servCompServDetailID': 'id',
            'servCompServID': 'servCompServId',
            'servCompVersionID': 'servCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Servcompservdetailproc': {
        'name': 'Servcompservdetailproc',
        'table': 'servcompservdetailproc',
        'primaryKey': 'servCompServDetailProcID',

        'aliases': {
            'servCompServDetailProcID': 'id',
            'servCompServDetailID': 'servCompServDetailId',
            'servCompServID': 'servCompServId',
            'servCompVersionID': 'servCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'procedureSetCatID': 'procedureSetCatId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Servcompservdetailprovsplty': {
        'name': 'Servcompservdetailprovsplty',
        'table': 'servcompservdetailprovsplty',
        'primaryKey': 'servCompServDetailProvSpltyID',

        'aliases': {
            'servCompServDetailID': 'servCompServDetailId',
            'servCompServID': 'servCompServId',
            'servCompVersionID': 'servCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'servCompServDetailProvSpltyID': 'id',
            'provSpecialtySetCatID': 'provSpecialtySetCatId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Servcompservdetailrevcode': {
        'name': 'Servcompservdetailrevcode',
        'table': 'servcompservdetailrevcode',
        'primaryKey': 'servCompServDetailRevCodeID',

        'aliases': {
            'servCompServDetailRevCodeID': 'id',
            'servCompServDetailID': 'servCompServDetailId',
            'servCompServID': 'servCompServId',
            'servCompVersionID': 'servCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Servcompvalidation': {
        'name': 'Servcompvalidation',
        'table': 'servcompvalidation',
        'primaryKey': 'servCompValidationID',

        'aliases': {
            'servCompValidationID': 'id',
            'servCompVersionID': 'servCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Servicearea': {
        'name': 'Servicearea',
        'table': 'servicearea',
        'primaryKey': 'serviceAreaID',

        'aliases': {
            'serviceAreaID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Serviceareanote': {
        'name': 'Serviceareanote',
        'table': 'serviceareanote',
        'primaryKey': 'noteID',

        'aliases': {
            'serviceAreaID': 'serviceAreaId',
            'noteID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Servcompservdetailproccode': {
        'name': 'Servcompservdetailproccode',
        'table': 'servcompservdetailproccode',
        'primaryKey': 'servCompServDetailProcCodeID',

        'aliases': {
            'servCompServDetailProcCodeID': 'id',
            'servCompServDetailID': 'servCompServDetailId',
            'servCompServID': 'servCompServId',
            'servCompVersionID': 'servCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Servicearearegion': {
        'name': 'Servicearearegion',
        'table': 'servicearearegion',
        'primaryKey': 'serviceAreaRegionID',

        'aliases': {
            'serviceAreaRegionID': 'id',
            'serviceAreaID': 'serviceAreaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Serviceareapostal': {
        'name': 'Serviceareapostal',
        'table': 'serviceareapostal',
        'primaryKey': 'serviceAreaPostalID',

        'aliases': {
            'serviceAreaPostalID': 'id',
            'serviceAreaID': 'serviceAreaId',
            'serviceAreaRegionID': 'serviceAreaRegionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'serviceAreaRegion': 'serviceAreaRegionId'
        },

        'listReferences': {}
    },

    'Serviceplan': {
        'name': 'Serviceplan',
        'table': 'serviceplan',
        'primaryKey': 'servicePlanID',

        'aliases': {
            'servicePlanID': 'id',
            'productID': 'productId',
            'memGroupID': 'memGroupId',
            'includeChildMGInd': 'includeChildMgInd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'adminVendorID': 'adminVendorId'
        },

        'referenceMap': {
            'product': 'productId',
            'adminVendor': 'adminVendorId'
        },

        'listReferences': {}
    },

    'Servicecatauditdetail': {
        'name': 'Servicecatauditdetail',
        'table': 'servicecatauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'scmID': 'scmId'
        },

        'referenceMap': {
            'scm': 'scmId'
        },

        'listReferences': {}
    },

    'Serviceplanauditdetail': {
        'name': 'Serviceplanauditdetail',
        'table': 'serviceplanauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'servicePlanID': 'servicePlanId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Serviceplanexternalid': {
        'name': 'Serviceplanexternalid',
        'table': 'serviceplanexternalid',
        'primaryKey': 'servicePlanExternalID',

        'aliases': {
            'servicePlanExternalID': 'id',
            'servicePlanID': 'servicePlanId',
            'entityID': 'entityId',
            'externalPlanID': 'externalPlanId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Serviceplanfunction': {
        'name': 'Serviceplanfunction',
        'table': 'serviceplanfunction',
        'primaryKey': 'servicePlanFunctionID',

        'aliases': {
            'servicePlanFunctionID': 'id',
            'servicePlanID': 'servicePlanId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Serviceplanfunctioncode': {
        'name': 'Serviceplanfunctioncode',
        'table': 'serviceplanfunctioncode',
        'primaryKey': 'servicePlanFunctionCode',

        'aliases': {
            'servicePlanFunctionCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Servicetypecode': {
        'name': 'Servicetypecode',
        'table': 'servicetypecode',
        'primaryKey': 'serviceTypeCode',

        'aliases': {
            'serviceTypeCode': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Settingsnote': {
        'name': 'Settingsnote',
        'table': 'settingsnote',
        'primaryKey': 'noteID',

        'aliases': {
            'settingID': 'id',
            'noteID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Settingsnotedetail': {
        'name': 'Settingsnotedetail',
        'table': 'settingsnotedetail',
        'primaryKey': 'noteDetailID',

        'aliases': {
            'settingID': 'settingId',
            'noteID': 'noteId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'noteDetailID': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Statmodifiercomp': {
        'name': 'Statmodifiercomp',
        'table': 'statmodifiercomp',
        'primaryKey': 'statModifierCompID',

        'aliases': {
            'statModifierCompID': 'id',
            'ownerGroupID': 'ownerGroupId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Settingsauditdetail': {
        'name': 'Settingsauditdetail',
        'table': 'settingsauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'settingID': 'settingId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Statmodifiercompcode': {
        'name': 'Statmodifiercompcode',
        'table': 'statmodifiercompcode',
        'primaryKey': 'statModifierCompCodeID',

        'aliases': {
            'statModifierCompCodeID': 'id',
            'statModifierCompID': 'statModifierCompId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Statmodifiercompnote': {
        'name': 'Statmodifiercompnote',
        'table': 'statmodifiercompnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'statModifierCompID': 'statModifierCompId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Statmodifiercompauditdetail': {
        'name': 'Statmodifiercompauditdetail',
        'table': 'statmodifiercompauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'statModifierCompID': 'statModifierCompId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Subpayrollfrequency': {
        'name': 'Subpayrollfrequency',
        'table': 'subpayrollfrequency',
        'primaryKey': 'subPayrollFrequencyID',

        'aliases': {
            'subPayrollFrequencyID': 'id',
            'subscriberID': 'subscriberId',
            'memGroupID': 'memGroupId',
            'memGroupPayrollID': 'memGroupPayrollId',
            'subsAffiliationID': 'subsAffiliationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Subsacctsetting': {
        'name': 'Subsacctsetting',
        'table': 'subsacctsettings',
        'primaryKey': 'subsAcctSettingsID',

        'aliases': {
            'subsAcctSettingsID': 'id',
            'memberID': 'memberId',
            'subsAffiliationID': 'subsAffiliationId',
            'msaID': 'msaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId',
            'msa': 'msaId'
        },

        'listReferences': {}
    },

    'Subsaffiliation': {
        'name': 'Subsaffiliation',
        'table': 'subsaffiliation',
        'primaryKey': 'subsAffiliationID',

        'aliases': {
            'subsAffiliationID': 'id',
            'memberID': 'memberId',
            'subscriberID': 'subscriberId',
            'memGroupID': 'memGroupId',
            'parentSubsAffiliationID': 'parentSubsAffiliationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'memberAddressID': 'memberAddressId',
            'subscriberIDChangeInd': 'subscriberIdChangeInd',
            'relatedMemGroupID': 'relatedMemGroupId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Subsaffiliation834Hist': {
        'name': 'Subsaffiliation834Hist',
        'table': 'subsaffiliation834hist',
        'primaryKey': 'subsAffiliation834HistID',

        'aliases': {
            'subsAffiliation834HistID': 'id',
            'subsAffiliationID': 'subsAffiliationId',
            'memberID': 'memberId',
            'ediTransactionID': 'ediTransactionId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Subsaffiliationexternalid': {
        'name': 'Subsaffiliationexternalid',
        'table': 'subsaffiliationexternalid',
        'primaryKey': 'subsAffiliationExternalIDID',

        'aliases': {
            'subsAffiliationExternalIDID': 'id',
            'subsAffiliationID': 'subsAffiliationId',
            'externalIDType': 'externalIdType',
            'memberID': 'memberId',
            'affiliationExternalID': 'affiliationExternalId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Subsaffiliationpopbillingpref': {
        'name': 'Subsaffiliationpopbillingpref',
        'table': 'subsaffiliationpopbillingpref',
        'primaryKey': 'subsAffiliationPopBillingPrefID',

        'aliases': {
            'subsAffiliationPopBillingPrefID': 'id',
            'subsAffiliationID': 'subsAffiliationId',
            'memberID': 'memberId',
            'memGroupID': 'memGroupId',
            'memGroupPopulationOrderID': 'memGroupPopulationOrderId',
            'memGroupPopulationConfigID': 'memGroupPopulationConfigId',
            'memGroupPopulationID': 'memGroupPopulationId',
            'memGroupContractBillingPrefID': 'memGroupContractBillingPrefId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Subsaffiliationattribute': {
        'name': 'Subsaffiliationattribute',
        'table': 'subsaffiliationattribute',
        'primaryKey': 'subsAffiliationAttributeID',

        'aliases': {
            'subsAffiliationAttributeID': 'id',
            'subsAffiliationID': 'subsAffiliationId',
            'memberID': 'memberId',
            'referenceIDQual': 'referenceIdQual',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Subsbeneficiarymem': {
        'name': 'Subsbeneficiarymem',
        'table': 'subsbeneficiarymem',
        'primaryKey': 'subsBeneficiaryMemID',

        'aliases': {
            'subsBeneficiaryMemID': 'id',
            'beneficiaryMemID': 'beneficiaryMemId',
            'subscriberID': 'subscriberId',
            'memGroupID': 'memGroupId',
            'subsAffiliationID': 'subsAffiliationId',
            'subsBeneficiaryID': 'subsBeneficiaryId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Subsbeneficiaryparty': {
        'name': 'Subsbeneficiaryparty',
        'table': 'subsbeneficiaryparty',
        'primaryKey': 'subsBeneficiaryPartyID',

        'aliases': {
            'subsBeneficiaryPartyID': 'id',
            'subscriberID': 'subscriberId',
            'memGroupID': 'memGroupId',
            'subsAffiliationID': 'subsAffiliationId',
            'subsBeneficiaryID': 'subsBeneficiaryId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Subsbeneficiary': {
        'name': 'Subsbeneficiary',
        'table': 'subsbeneficiary',
        'primaryKey': 'subsBeneficiaryID',

        'aliases': {
            'subsBeneficiaryID': 'id',
            'subscriberID': 'subscriberId',
            'memGroupID': 'memGroupId',
            'subsAffiliationID': 'subsAffiliationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Servcompservdetailmodifier': {
        'name': 'Servcompservdetailmodifier',
        'table': 'servcompservdetailmodifier',
        'primaryKey': 'servCompServDetailID',

        'aliases': {
            'modifierCode': 'id',
            'servCompServDetailID': 'id',
            'servCompServID': 'servCompServId',
            'servCompVersionID': 'servCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Servcomptempadjud': {
        'name': 'Servcomptempadjud',
        'table': 'servcomptempadjud',
        'primaryKey': 'claimID',

        'aliases': {
            'claimID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Subsjob': {
        'name': 'Subsjob',
        'table': 'subsjob',
        'primaryKey': 'subsJobID',

        'aliases': {
            'subsJobID': 'id',
            'subscriberID': 'subscriberId',
            'memGroupID': 'memGroupId',
            'subsAffiliationID': 'subsAffiliationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'memberID': 'memberId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Serviceareaauditdetail': {
        'name': 'Serviceareaauditdetail',
        'table': 'serviceareaauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'serviceAreaID': 'serviceAreaId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Substschedule': {
        'name': 'Substschedule',
        'table': 'substschedule',
        'primaryKey': 'substScheduleID',

        'aliases': {
            'substScheduleID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'substVendorID': 'substVendorId'
        },

        'referenceMap': {
            'substVendor': 'substVendorId'
        },

        'listReferences': {}
    },

    'Subsmginfo': {
        'name': 'Subsmginfo',
        'table': 'subsmginfo',
        'primaryKey': 'subsMGInfoID',

        'aliases': {
            'subsMGInfoID': 'id',
            'subscriberID': 'subscriberId',
            'subsAffiliationID': 'subsAffiliationId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Superbillclaimsetting': {
        'name': 'Superbillclaimsetting',
        'table': 'superbillclaimsettings',
        'primaryKey': 'settingID',

        'aliases': {
            'settingID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Substscheduleletter': {
        'name': 'Substscheduleletter',
        'table': 'substscheduleletter',
        'primaryKey': 'letterType',

        'aliases': {
            'substScheduleID': 'id',
            'letterType': 'id',
            'templateID': 'templateId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Supportteamaddress': {
        'name': 'Supportteamaddress',
        'table': 'supportteamaddress',
        'primaryKey': 'supportTeamAddressID',

        'aliases': {
            'supportTeamAddressID': 'id',
            'supportTeamID': 'supportTeamId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Supportteamphone': {
        'name': 'Supportteamphone',
        'table': 'supportteamphone',
        'primaryKey': 'supportTeamPhoneID',

        'aliases': {
            'supportTeamPhoneID': 'id',
            'supportTeamID': 'supportTeamId',
            'nonUSPhoneInd': 'nonUsPhoneInd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Surchargeschedexcludebilltype': {
        'name': 'Surchargeschedexcludebilltype',
        'table': 'surchargeschedexcludebilltype',
        'primaryKey': 'surchargeSchedExcludeBillTypeID',

        'aliases': {
            'surchargeSchedExcludeBillTypeID': 'id',
            'surchargeSchedID': 'surchargeSchedId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Supportteameleccomm': {
        'name': 'Supportteameleccomm',
        'table': 'supportteameleccomm',
        'primaryKey': 'supportTeamElecCommID',

        'aliases': {
            'supportTeamElecCommID': 'id',
            'supportTeamID': 'supportTeamId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Supportteam': {
        'name': 'Supportteam',
        'table': 'supportteam',
        'primaryKey': 'supportTeamID',

        'aliases': {
            'supportTeamID': 'id',
            'internalID': 'internalId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Surchargeschednote': {
        'name': 'Surchargeschednote',
        'table': 'surchargeschednote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'surchargeSchedID': 'surchargeSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Surchargeschedauditdetail': {
        'name': 'Surchargeschedauditdetail',
        'table': 'surchargeschedauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'surchargeSchedID': 'surchargeSchedId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Supportteamauditdetail': {
        'name': 'Supportteamauditdetail',
        'table': 'supportteamauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'supportTeamID': 'supportTeamId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Surchargeschedexcludeclaimtype': {
        'name': 'Surchargeschedexcludeclaimtype',
        'table': 'surchargeschedexcludeclaimtype',
        'primaryKey': 'surchargeSchedExcludeClaimTypeID',

        'aliases': {
            'surchargeSchedExcludeClaimTypeID': 'id',
            'surchargeSchedID': 'surchargeSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Supportteamaddressphone': {
        'name': 'Supportteamaddressphone',
        'table': 'supportteamaddressphone',
        'primaryKey': 'supportTeamAddressPhoneID',

        'aliases': {
            'supportTeamAddressPhoneID': 'id',
            'supportTeamPhoneID': 'supportTeamPhoneId',
            'supportTeamAddressID': 'supportTeamAddressId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'supportTeamID': 'supportTeamId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Surchargeschedrateplan': {
        'name': 'Surchargeschedrateplan',
        'table': 'surchargeschedrateplan',
        'primaryKey': 'surchargeSchedRatePlanID',

        'aliases': {
            'surchargeSchedRatePlanID': 'id',
            'surchargeSchedID': 'surchargeSchedId',
            'surchargeSchedRateID': 'surchargeSchedRateId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Surchargeschedexcludepo': {
        'name': 'Surchargeschedexcludepo',
        'table': 'surchargeschedexcludepos',
        'primaryKey': 'surchargeSchedExcludePosID',

        'aliases': {
            'surchargeSchedExcludePosID': 'id',
            'surchargeSchedID': 'surchargeSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Surchargeschedprovtin': {
        'name': 'Surchargeschedprovtin',
        'table': 'surchargeschedprovtin',
        'primaryKey': 'surchargeSchedProvTINID',

        'aliases': {
            'surchargeSchedProvTINID': 'id',
            'surchargeSchedID': 'surchargeSchedId',
            'providerTIN': 'providerTin',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'SysSetEmailGrp': {
        'name': 'SysSetEmailGrp',
        'table': 'sys_set_email_grp',
        'primaryKey': 'emailGroupID',

        'aliases': {
            'systemSettingID': 'id',
            'environmentID': 'id',
            'emailGroupID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Surchargeschedrateexcludegovt': {
        'name': 'Surchargeschedrateexcludegovt',
        'table': 'surchargeschedrateexcludegovt',
        'primaryKey': 'surchargeSchedRateGovtBenefitID',

        'aliases': {
            'surchargeSchedRateGovtBenefitID': 'id',
            'surchargeSchedID': 'surchargeSchedId',
            'surchargeSchedRateID': 'surchargeSchedRateId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Surchargesched': {
        'name': 'Surchargesched',
        'table': 'surchargesched',
        'primaryKey': 'surchargeSchedID',

        'aliases': {
            'surchargeSchedID': 'id',
            'memberEOBsuppressInd': 'memberEoBsuppressInd',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Surchargeschedrate': {
        'name': 'Surchargeschedrate',
        'table': 'surchargeschedrate',
        'primaryKey': 'surchargeSchedRateID',

        'aliases': {
            'surchargeSchedRateID': 'id',
            'surchargeSchedID': 'surchargeSchedId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'SysKey': {
        'name': 'SysKey',
        'table': 'sys_key',
        'primaryKey': 'sequenceName',

        'aliases': {
            'sequenceName': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Surchargeschedratebenefit': {
        'name': 'Surchargeschedratebenefit',
        'table': 'surchargeschedratebenefit',
        'primaryKey': 'surchargeSchedRateBenefitID',

        'aliases': {
            'surchargeSchedRateBenefitID': 'id',
            'surchargeSchedID': 'surchargeSchedId',
            'surchargeSchedRateID': 'surchargeSchedRateId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'SysSetFlSy': {
        'name': 'SysSetFlSy',
        'table': 'sys_set_fl_sys',
        'primaryKey': 'fileSystemID',

        'aliases': {
            'systemSettingID': 'id',
            'environmentID': 'id',
            'fileSystemID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'SysErrLog': {
        'name': 'SysErrLog',
        'table': 'sys_err_log',
        'primaryKey': 'systemErrorLogID',

        'aliases': {
            'systemErrorLogID': 'id',
            'userActivityLogID': 'userActivityLogId',
            'userID': 'userId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'SysSetRpt': {
        'name': 'SysSetRpt',
        'table': 'sys_set_rpt',
        'primaryKey': 'reportID',

        'aliases': {
            'systemSettingID': 'id',
            'environmentID': 'id',
            'reportID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'SysSetSql': {
        'name': 'SysSetSql',
        'table': 'sys_set_sql',
        'primaryKey': 'systemSettingsSqlID',

        'aliases': {
            'systemSettingsSqlID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'SysSetPrgTbl': {
        'name': 'SysSetPrgTbl',
        'table': 'sys_set_prg_tbl',
        'primaryKey': 'purgeTableName',

        'aliases': {
            'systemSettingID': 'id',
            'environmentID': 'id',
            'purgeTableName': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Sysaddress': {
        'name': 'Sysaddress',
        'table': 'sysaddress',
        'primaryKey': 'sysAddressID',

        'aliases': {
            'sysAddressID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'SysSqlLog': {
        'name': 'SysSqlLog',
        'table': 'sys_sql_log',
        'primaryKey': 'systemSqlLogID',

        'aliases': {
            'systemSqlLogID': 'id',
            'userActivityLogID': 'userActivityLogId',
            'userID': 'userId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Sysaddressauditdetail': {
        'name': 'Sysaddressauditdetail',
        'table': 'sysaddressauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'sysAddressID': 'sysAddressId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'SysSetFramwrk': {
        'name': 'SysSetFramwrk',
        'table': 'sys_set_framwrk',
        'primaryKey': 'environmentID',

        'aliases': {
            'systemSettingID': 'id',
            'environmentID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Sysfinsettingauditdetail': {
        'name': 'Sysfinsettingauditdetail',
        'table': 'sysfinsettingauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'settingID': 'settingId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Sysaddressnote': {
        'name': 'Sysaddressnote',
        'table': 'sysaddressnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'sysAddressID': 'sysAddressId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Sysfinsetting': {
        'name': 'Sysfinsetting',
        'table': 'sysfinsetting',
        'primaryKey': 'settingID',

        'aliases': {
            'settingID': 'id',
            'memGroupContrFinAttribSchedID': 'memGroupContrFinAttribSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Sysfinsettingfinattribschedar': {
        'name': 'Sysfinsettingfinattribschedar',
        'table': 'sysfinsettingfinattribschedar',
        'primaryKey': 'arTransactionType',

        'aliases': {
            'arTransactionType': 'id',
            'sysFinSettingFinAttribSchedID': 'sysFinSettingFinAttribSchedId',
            'settingID': 'settingId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Sysaddresstypeassign': {
        'name': 'Sysaddresstypeassign',
        'table': 'sysaddresstypeassign',
        'primaryKey': 'addressType',

        'aliases': {
            'sysAddressID': 'id',
            'addressType': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Sysfinsettingreportutil': {
        'name': 'Sysfinsettingreportutil',
        'table': 'sysfinsettingreportutil',
        'primaryKey': 'sysFinSettingReportUtilID',

        'aliases': {
            'sysFinSettingReportUtilID': 'id',
            'settingID': 'settingId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Sysfinsettingnote': {
        'name': 'Sysfinsettingnote',
        'table': 'sysfinsettingnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'settingID': 'settingId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Sysfinsettingservplan': {
        'name': 'Sysfinsettingservplan',
        'table': 'sysfinsettingservplan',
        'primaryKey': 'sysFinSettingServPlanID',

        'aliases': {
            'sysFinSettingServPlanID': 'id',
            'settingID': 'settingId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Sysfinsettingruleserv': {
        'name': 'Sysfinsettingruleserv',
        'table': 'sysfinsettingruleserv',
        'primaryKey': 'sysFinSettingRuleServID',

        'aliases': {
            'sysFinSettingRuleServID': 'id',
            'settingID': 'settingId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Sysfinsettingfinattribschedap': {
        'name': 'Sysfinsettingfinattribschedap',
        'table': 'sysfinsettingfinattribschedap',
        'primaryKey': 'apTransactionType',

        'aliases': {
            'apTransactionType': 'id',
            'sysFinSettingFinAttribSchedID': 'sysFinSettingFinAttribSchedId',
            'settingID': 'settingId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Sysbillingdefaultvalue': {
        'name': 'Sysbillingdefaultvalue',
        'table': 'sysbillingdefaultvalue',
        'primaryKey': 'sysBillingDefaultValueID',

        'aliases': {
            'sysBillingDefaultValueID': 'id',
            'billingSchedID': 'billingSchedId',
            'carrierID': 'carrierId',
            'familyUnitScheduleID': 'familyUnitScheduleId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'carrier': 'carrierId'
        },

        'listReferences': {}
    },

    'Sysfinsettingbenefittype': {
        'name': 'Sysfinsettingbenefittype',
        'table': 'sysfinsettingbenefittype',
        'primaryKey': 'sysFinSettingBenefitTypeID',

        'aliases': {
            'sysFinSettingBenefitTypeID': 'id',
            'settingID': 'settingId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Sysfinsettingfinattribsched': {
        'name': 'Sysfinsettingfinattribsched',
        'table': 'sysfinsettingfinattribsched',
        'primaryKey': 'sysFinSettingFinAttribSchedID',

        'aliases': {
            'sysFinSettingFinAttribSchedID': 'id',
            'allAPTransTypeInd': 'allApTransTypeInd',
            'allARTransTypeInd': 'allArTransTypeInd',
            'finAttribSchedID': 'finAttribSchedId',
            'settingID': 'settingId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Sysmemgroupsetting': {
        'name': 'Sysmemgroupsetting',
        'table': 'sysmemgroupsettings',
        'primaryKey': 'settingID',

        'aliases': {
            'settingID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Sysfinsettingsurcharge': {
        'name': 'Sysfinsettingsurcharge',
        'table': 'sysfinsettingsurcharge',
        'primaryKey': 'sysFinSettingSurchargeID',

        'aliases': {
            'sysFinSettingSurchargeID': 'id',
            'settingID': 'settingId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Sysfinsettingutilplan': {
        'name': 'Sysfinsettingutilplan',
        'table': 'sysfinsettingutilplan',
        'primaryKey': 'sysFinSettingUtilPlanID',

        'aliases': {
            'sysFinSettingUtilPlanID': 'id',
            'settingID': 'settingId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Sysphonenumber': {
        'name': 'Sysphonenumber',
        'table': 'sysphonenumber',
        'primaryKey': 'sysPhoneNumberID',

        'aliases': {
            'sysPhoneNumberID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Sysphonenumberlanguage': {
        'name': 'Sysphonenumberlanguage',
        'table': 'sysphonenumberlanguage',
        'primaryKey': 'languageCodeISO',

        'aliases': {
            'sysPhoneNumberID': 'id',
            'languageCodeISO': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Sysphonenumbernote': {
        'name': 'Sysphonenumbernote',
        'table': 'sysphonenumbernote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'sysPhoneNumberID': 'sysPhoneNumberId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Sysphonenumberauditdetail': {
        'name': 'Sysphonenumberauditdetail',
        'table': 'sysphonenumberauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'sysPhoneNumberID': 'sysPhoneNumberId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Sysfinsettinginterest': {
        'name': 'Sysfinsettinginterest',
        'table': 'sysfinsettinginterest',
        'primaryKey': 'sysFinSettingInterestID',

        'aliases': {
            'sysFinSettingInterestID': 'id',
            'settingID': 'settingId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'SystemTbl': {
        'name': 'SystemTbl',
        'table': 'system_tbl',
        'primaryKey': 'systemID',

        'aliases': {
            'systemID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Systemactuarialvalue': {
        'name': 'Systemactuarialvalue',
        'table': 'systemactuarialvalue',
        'primaryKey': 'systemActuarialValueID',

        'aliases': {
            'systemActuarialValueID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Systemcontactaddress': {
        'name': 'Systemcontactaddress',
        'table': 'systemcontactaddress',
        'primaryKey': 'sequenceNum',

        'aliases': {
            'systemID': 'id',
            'departmentCode': 'id',
            'contactNum': 'id',
            'sequenceNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Systemcontactname': {
        'name': 'Systemcontactname',
        'table': 'systemcontactname',
        'primaryKey': 'contactNum',

        'aliases': {
            'systemID': 'id',
            'departmentCode': 'id',
            'contactNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Systemcontactphone': {
        'name': 'Systemcontactphone',
        'table': 'systemcontactphone',
        'primaryKey': 'phoneRecordNum',

        'aliases': {
            'systemID': 'id',
            'departmentCode': 'id',
            'contactNum': 'id',
            'phoneRecordNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Systemactivitylog': {
        'name': 'Systemactivitylog',
        'table': 'systemactivitylog',
        'primaryKey': 'systemActivityLogID',

        'aliases': {
            'systemActivityLogID': 'id',
            'userID': 'userId',
            'userActivityLogID': 'userActivityLogId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Systemcontactdepartment': {
        'name': 'Systemcontactdepartment',
        'table': 'systemcontactdepartment',
        'primaryKey': 'departmentCode',

        'aliases': {
            'systemID': 'id',
            'departmentCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Systemcorpholiday': {
        'name': 'Systemcorpholiday',
        'table': 'systemcorpholiday',
        'primaryKey': 'corpHolidayDate',

        'aliases': {
            'corpHolidayDate': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Systemdepartmenthour': {
        'name': 'Systemdepartmenthour',
        'table': 'systemdepartmenthours',
        'primaryKey': 'dayOfWeek',

        'aliases': {
            'systemID': 'id',
            'departmentCode': 'id',
            'dayOfWeek': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Systemdepartmentphone': {
        'name': 'Systemdepartmentphone',
        'table': 'systemdepartmentphone',
        'primaryKey': 'phoneRecordNum',

        'aliases': {
            'systemID': 'id',
            'departmentCode': 'id',
            'phoneRecordNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Systemdepartmentaddress': {
        'name': 'Systemdepartmentaddress',
        'table': 'systemdepartmentaddress',
        'primaryKey': 'addressRecordNum',

        'aliases': {
            'systemID': 'id',
            'departmentCode': 'id',
            'addressRecordNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Systemediresponse': {
        'name': 'Systemediresponse',
        'table': 'systemediresponse',
        'primaryKey': 'systemEDIResponseID',

        'aliases': {
            'systemEDIResponseID': 'id',
            'EDITransaction': 'ediTransaction',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Systemediresponsestatus': {
        'name': 'Systemediresponsestatus',
        'table': 'systemediresponsestatus',
        'primaryKey': 'systemEDIResponseStatusID',

        'aliases': {
            'systemEDIResponseStatusID': 'id',
            'systemEDIResponseLoopID': 'systemEdiResponseLoopId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Systemedisetting': {
        'name': 'Systemedisetting',
        'table': 'systemedisettings',
        'primaryKey': 'environmentID',

        'aliases': {
            'settingID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'environmentID': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Systemsettingsrestclient': {
        'name': 'Systemsettingsrestclient',
        'table': 'systemsettingsrestclient',
        'primaryKey': 'environmentID',

        'aliases': {
            'systemSettingID': 'id',
            'restClientID': 'id',
            'environmentID': 'id',
            'securityClientID': 'securityClientId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Systemediresponseloop': {
        'name': 'Systemediresponseloop',
        'table': 'systemediresponseloop',
        'primaryKey': 'systemEDIResponseLoopID',

        'aliases': {
            'systemEDIResponseLoopID': 'id',
            'systemEDIResponseID': 'systemEdiResponseId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Systempermit': {
        'name': 'Systempermit',
        'table': 'systempermit',
        'primaryKey': 'permitID',

        'aliases': {
            'systemID': 'id',
            'permitID': 'id',
            'federalTaxID': 'federalTaxId',
            'stateTaxID': 'stateTaxId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Systemsettingstemporary': {
        'name': 'Systemsettingstemporary',
        'table': 'systemsettingstemporary',
        'primaryKey': 'settingDataType',

        'aliases': {
            'systemSettingID': 'id',
            'settingKey': 'id',
            'settingDataType': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Systemfederal': {
        'name': 'Systemfederal',
        'table': 'systemfederal',
        'primaryKey': 'federalTaxID',

        'aliases': {
            'systemID': 'id',
            'federalTaxID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Systemmsaorderofacct': {
        'name': 'Systemmsaorderofacct',
        'table': 'systemmsaorderofaccts',
        'primaryKey': 'systemMsaOrderOfAcctsID',

        'aliases': {
            'systemMsaOrderOfAcctsID': 'id',
            'settingID': 'settingId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Systemgeneralsetting': {
        'name': 'Systemgeneralsetting',
        'table': 'systemgeneralsettings',
        'primaryKey': 'settingID',

        'aliases': {
            'settingID': 'id',
            'adjudScheduleID': 'adjudScheduleId',
            'remarkCodeScheduleID': 'remarkCodeScheduleId',
            'enableAPClmRepostInd': 'enableApClmRepostInd',
            'productAdjudScheduleID': 'productAdjudScheduleId',
            'mgAdjudScheduleID': 'mgAdjudScheduleId',
            'eocSetID': 'eocSetId',
            'applicationInstanceID': 'applicationInstanceId',
            'opfAsOP': 'opfAsOp',
            'bedDayScheduleID': 'bedDayScheduleId',
            'serviceAreaID': 'serviceAreaId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'accumLockDT': 'accumLockDt',
            'accumLockDTQty': 'accumLockDtQty'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Systemmsasetting': {
        'name': 'Systemmsasetting',
        'table': 'systemmsasettings',
        'primaryKey': 'settingID',

        'aliases': {
            'settingID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Systemstate': {
        'name': 'Systemstate',
        'table': 'systemstate',
        'primaryKey': 'stateTaxID',

        'aliases': {
            'systemID': 'id',
            'stateTaxID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Systemworkhour': {
        'name': 'Systemworkhour',
        'table': 'systemworkhours',
        'primaryKey': 'dayOfWeek',

        'aliases': {
            'systemID': 'id',
            'departmentCode': 'id',
            'contactNum': 'id',
            'dayOfWeek': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Taxonomybasefileuploaddetail': {
        'name': 'Taxonomybasefileuploaddetail',
        'table': 'taxonomybasefileuploaddetail',
        'primaryKey': 'taxonomyBaseFileUploadDetailID',

        'aliases': {
            'taxonomyBaseFileUploadDetailID': 'id',
            'taxonomyBaseFileUploadHeaderID': 'taxonomyBaseFileUploadHeaderId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Taxonomyaccreditation': {
        'name': 'Taxonomyaccreditation',
        'table': 'taxonomyaccreditation',
        'primaryKey': 'accreditationType',

        'aliases': {
            'taxonomyCode': 'id',
            'accreditationType': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Taxonomycode': {
        'name': 'Taxonomycode',
        'table': 'taxonomycode',
        'primaryKey': 'taxonomyCode',

        'aliases': {
            'taxonomyCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Thresholdparameterdetail': {
        'name': 'Thresholdparameterdetail',
        'table': 'thresholdparameterdetail',
        'primaryKey': 'thresholdParameterDetailID',

        'aliases': {
            'thresholdParameterDetailID': 'id',
            'thresholdParameterID': 'thresholdParameterId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Taxonomybasefileuploadheader': {
        'name': 'Taxonomybasefileuploadheader',
        'table': 'taxonomybasefileuploadheader',
        'primaryKey': 'taxonomyBaseFileUploadHeaderID',

        'aliases': {
            'taxonomyBaseFileUploadHeaderID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Timelyfilingsched': {
        'name': 'Timelyfilingsched',
        'table': 'timelyfilingsched',
        'primaryKey': 'timelyFilingSchedID',

        'aliases': {
            'timelyFilingSchedID': 'id',
            'ownerGroupID': 'ownerGroupId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Timelyfilingscheddetail': {
        'name': 'Timelyfilingscheddetail',
        'table': 'timelyfilingscheddetail',
        'primaryKey': 'timelyFilingSchedDetailID',

        'aliases': {
            'timelyFilingSchedDetailID': 'id',
            'timelyFilingSchedID': 'timelyFilingSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Tradingpartnerconfig': {
        'name': 'Tradingpartnerconfig',
        'table': 'tradingpartnerconfig',
        'primaryKey': 'tradingPartnerConfigID',

        'aliases': {
            'tradingPartnerConfigID': 'id',
            'entityID': 'entityId',
            'extSystID': 'extSystId',
            'aggregatorID': 'aggregatorId',
            'batchTXInd': 'batchTxInd',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Taxtypecode': {
        'name': 'Taxtypecode',
        'table': 'taxtypecode',
        'primaryKey': 'taxTypeCode',

        'aliases': {
            'taxTypeCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Systemsettingsauditdetail': {
        'name': 'Systemsettingsauditdetail',
        'table': 'systemsettingsauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'systemSettingID': 'systemSettingId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Transferpricingpatientstatus': {
        'name': 'Transferpricingpatientstatus',
        'table': 'transferpricingpatientstatus',
        'primaryKey': 'transferPricingPatientStatusID',

        'aliases': {
            'pricingSettingID': 'pricingSettingId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'transferPricingPatientStatusID': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Thresholdparameter': {
        'name': 'Thresholdparameter',
        'table': 'thresholdparameter',
        'primaryKey': 'thresholdParameterID',

        'aliases': {
            'thresholdParameterID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'thresholdEntityID': 'thresholdEntityId',
            'memGroupPopulationID': 'memGroupPopulationId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Timelyfilingschednote': {
        'name': 'Timelyfilingschednote',
        'table': 'timelyfilingschednote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'timelyFilingSchedID': 'timelyFilingSchedId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Tooth': {
        'name': 'Tooth',
        'table': 'tooth',
        'primaryKey': 'toothID',

        'aliases': {
            'toothID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ucrbasefileuploadheader': {
        'name': 'Ucrbasefileuploadheader',
        'table': 'ucrbasefileuploadheader',
        'primaryKey': 'ucrBaseFileUploadHeaderID',

        'aliases': {
            'ucrBaseFileUploadHeaderID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ucrcompauditdetail': {
        'name': 'Ucrcompauditdetail',
        'table': 'ucrcompauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'ucrCompVersionID': 'ucrCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Timelyfilingschedauditdetail': {
        'name': 'Timelyfilingschedauditdetail',
        'table': 'timelyfilingschedauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'timelyFilingSchedID': 'timelyFilingSchedId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ucrcomphold': {
        'name': 'Ucrcomphold',
        'table': 'ucrcomphold',
        'primaryKey': 'ucrCompHoldID',

        'aliases': {
            'ucrCompHoldID': 'id',
            'ucrCompVersionID': 'ucrCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ucrcompdetailprof': {
        'name': 'Ucrcompdetailprof',
        'table': 'ucrcompdetailprof',
        'primaryKey': 'ucrCompDetailProfID',

        'aliases': {
            'ucrCompDetailProfID': 'id',
            'ucrCompDetailID': 'ucrCompDetailId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'ucrCompVersionID': 'ucrCompVersionId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ucrcomp': {
        'name': 'Ucrcomp',
        'table': 'ucrcomp',
        'primaryKey': 'ucrCompVersionID',

        'aliases': {
            'ucrCompVersionID': 'id',
            'ucrCompID': 'ucrCompId',
            'ownerGroupID': 'ownerGroupId',
            'pricingExternalID': 'pricingExternalId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Umauthprovider': {
        'name': 'Umauthprovider',
        'table': 'umauthprovider',
        'primaryKey': 'umAuthProviderID',

        'aliases': {
            'umAuthProviderID': 'id',
            'umAuthID': 'umAuthId',
            'providerID': 'providerId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Ucrcompdetail': {
        'name': 'Ucrcompdetail',
        'table': 'ucrcompdetail',
        'primaryKey': 'ucrCompDetailID',

        'aliases': {
            'ucrCompDetailID': 'id',
            'ucrCompVersionID': 'ucrCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'ucrHCPCSFileInd': 'ucrHcpcsFileInd'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ucrcompnote': {
        'name': 'Ucrcompnote',
        'table': 'ucrcompnote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'ucrCompVersionID': 'ucrCompVersionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Ucrbasefileuploadstaging': {
        'name': 'Ucrbasefileuploadstaging',
        'table': 'ucrbasefileuploadstaging',
        'primaryKey': 'ucrBaseFileUploadStagingID',

        'aliases': {
            'ucrBaseFileUploadStagingID': 'id',
            'ucrBaseFileUploadHeaderID': 'ucrBaseFileUploadHeaderId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Umauth': {
        'name': 'Umauth',
        'table': 'umauth',
        'primaryKey': 'umAuthID',

        'aliases': {
            'umAuthID': 'id',
            'memberID': 'memberId',
            'originalSourceSystemID': 'originalSourceSystemId',
            'clinicalSourceSystemID': 'clinicalSourceSystemId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Umauthfacilitytype': {
        'name': 'Umauthfacilitytype',
        'table': 'umauthfacilitytype',
        'primaryKey': 'umAuthFacilityTypeID',

        'aliases': {
            'umAuthFacilityTypeID': 'id',
            'umAuthServiceID': 'umAuthServiceId',
            'umAuthID': 'umAuthId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Umauthfacilitydecision': {
        'name': 'Umauthfacilitydecision',
        'table': 'umauthfacilitydecision',
        'primaryKey': 'umAuthFacilityDecisionID',

        'aliases': {
            'umAuthFacilityDecisionID': 'id',
            'umAuthServiceID': 'umAuthServiceId',
            'umAuthID': 'umAuthId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Umauthdiagnosis': {
        'name': 'Umauthdiagnosis',
        'table': 'umauthdiagnosis',
        'primaryKey': 'umAuthDiagnosisID',

        'aliases': {
            'umAuthDiagnosisID': 'id',
            'umAuthID': 'umAuthId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Umauthbeddayrange': {
        'name': 'Umauthbeddayrange',
        'table': 'umauthbeddayrange',
        'primaryKey': 'umAuthBedDayRangeID',

        'aliases': {
            'umAuthBedDayRangeID': 'id',
            'umAuthServiceID': 'umAuthServiceId',
            'umAuthID': 'umAuthId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Umauthproviderroletype': {
        'name': 'Umauthproviderroletype',
        'table': 'umauthproviderroletype',
        'primaryKey': 'umAuthProviderRoleTypeID',

        'aliases': {
            'umAuthProviderRoleTypeID': 'id',
            'umAuthProviderID': 'umAuthProviderId',
            'umAuthID': 'umAuthId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'umAuthProvider': 'umAuthProviderId'
        },

        'listReferences': {}
    },

    'Umauthservice': {
        'name': 'Umauthservice',
        'table': 'umauthservice',
        'primaryKey': 'umAuthServiceID',

        'aliases': {
            'umAuthServiceID': 'id',
            'umAuthProviderID': 'umAuthProviderId',
            'umAuthID': 'umAuthId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'umAuthProvider': 'umAuthProviderId'
        },

        'listReferences': {}
    },

    'Umauthservicefacility': {
        'name': 'Umauthservicefacility',
        'table': 'umauthservicefacility',
        'primaryKey': 'umAuthServiceFacilityID',

        'aliases': {
            'umAuthServiceFacilityID': 'id',
            'umAuthServiceID': 'umAuthServiceId',
            'umAuthID': 'umAuthId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Umreferralauditdetail': {
        'name': 'Umreferralauditdetail',
        'table': 'umreferralauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'umReferralID': 'umReferralId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Umreferralprovider': {
        'name': 'Umreferralprovider',
        'table': 'umreferralprovider',
        'primaryKey': 'umReferralProviderID',

        'aliases': {
            'umReferralProviderID': 'id',
            'umReferralID': 'umReferralId',
            'providerID': 'providerId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'provider': 'providerId'
        },

        'listReferences': {}
    },

    'Umreferraldiagnosis': {
        'name': 'Umreferraldiagnosis',
        'table': 'umreferraldiagnosis',
        'primaryKey': 'umReferralDiagnosisID',

        'aliases': {
            'umReferralDiagnosisID': 'id',
            'umReferralID': 'umReferralId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Umreferralprovideraltid': {
        'name': 'Umreferralprovideraltid',
        'table': 'umreferralprovideraltid',
        'primaryKey': 'umReferralProviderAltIDID',

        'aliases': {
            'umReferralProviderAltIDID': 'id',
            'umReferralProviderID': 'umReferralProviderId',
            'providerIDText': 'providerIdText',
            'referenceIDQual': 'referenceIdQual',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'umReferralProvider': 'umReferralProviderId'
        },

        'listReferences': {}
    },

    'Umauthservicedecision': {
        'name': 'Umauthservicedecision',
        'table': 'umauthservicedecision',
        'primaryKey': 'umAuthServiceDecisionID',

        'aliases': {
            'umAuthServiceDecisionID': 'id',
            'umAuthServiceID': 'umAuthServiceId',
            'umAuthID': 'umAuthId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Umauthauditdetail': {
        'name': 'Umauthauditdetail',
        'table': 'umauthauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'umAuthID': 'umAuthId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Umauthservicenonfacil': {
        'name': 'Umauthservicenonfacil',
        'table': 'umauthservicenonfacil',
        'primaryKey': 'umAuthServiceNonFacilID',

        'aliases': {
            'umAuthServiceNonFacilID': 'id',
            'umAuthServiceID': 'umAuthServiceId',
            'umAuthID': 'umAuthId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Useractivity': {
        'name': 'Useractivity',
        'table': 'useractivity',
        'primaryKey': 'prodSeqNum',

        'aliases': {
            'prodSeqNum': 'id',
            'loginID': 'loginId',
            'transactionID': 'transactionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Umauthprovideraltid': {
        'name': 'Umauthprovideraltid',
        'table': 'umauthprovideraltid',
        'primaryKey': 'umAuthProviderAltIDID',

        'aliases': {
            'umAuthProviderAltIDID': 'id',
            'umAuthProviderID': 'umAuthProviderId',
            'providerIDText': 'providerIdText',
            'referenceIDQual': 'referenceIdQual',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'umAuthProvider': 'umAuthProviderId'
        },

        'listReferences': {}
    },

    'Umreferralservice': {
        'name': 'Umreferralservice',
        'table': 'umreferralservice',
        'primaryKey': 'umReferralServiceID',

        'aliases': {
            'umReferralServiceID': 'id',
            'umReferralProviderID': 'umReferralProviderId',
            'umReferralID': 'umReferralId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'umReferralProvider': 'umReferralProviderId'
        },

        'listReferences': {}
    },

    'Useractivitylog': {
        'name': 'Useractivitylog',
        'table': 'useractivitylog',
        'primaryKey': 'userActivityLogID',

        'aliases': {
            'userID': 'userId',
            'permissionID': 'permissionId',
            'userActivityLogID': 'id',
            'serverIPText': 'serverIpText',
            'userIPText': 'userIpText'
        },

        'referenceMap': {
            'permission': 'permissionId'
        },

        'listReferences': {}
    },

    'Useraddress': {
        'name': 'Useraddress',
        'table': 'useraddress',
        'primaryKey': 'addressType',

        'aliases': {
            'userID': 'id',
            'addressType': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'countyFIPS': 'countyFips'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Userauditdetail': {
        'name': 'Userauditdetail',
        'table': 'userauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'userID': 'userId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Umreferralproviderroletype': {
        'name': 'Umreferralproviderroletype',
        'table': 'umreferralproviderroletype',
        'primaryKey': 'umReferralProviderRoleTypeID',

        'aliases': {
            'umReferralProviderRoleTypeID': 'id',
            'umReferralProviderID': 'umReferralProviderId',
            'umReferralID': 'umReferralId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'umReferralProvider': 'umReferralProviderId'
        },

        'listReferences': {}
    },

    'Umreferral': {
        'name': 'Umreferral',
        'table': 'umreferral',
        'primaryKey': 'umReferralID',

        'aliases': {
            'umReferralID': 'id',
            'memberID': 'memberId',
            'originalSourceSystemID': 'originalSourceSystemId',
            'clinicalSourceSystemID': 'clinicalSourceSystemId',
            'benefitBundleOptionID': 'benefitBundleOptionId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'member': 'memberId'
        },

        'listReferences': {}
    },

    'Userclaimcancelcode': {
        'name': 'Userclaimcancelcode',
        'table': 'userclaimcancelcode',
        'primaryKey': 'userClaimCancelCode',

        'aliases': {
            'userClaimCancelCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Userclaimcancelcodeauditdetail': {
        'name': 'Userclaimcancelcodeauditdetail',
        'table': 'userclaimcancelcodeauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Usergroup': {
        'name': 'Usergroup',
        'table': 'usergroup',
        'primaryKey': 'userGroupID',

        'aliases': {
            'userGroupID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Usertable': {
        'name': 'Usertable',
        'table': 'usertable',
        'primaryKey': 'userID',

        'aliases': {
            'userID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Usergroupauditdetail': {
        'name': 'Usergroupauditdetail',
        'table': 'usergroupauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'userGroupID': 'userGroupId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Usergroupuser': {
        'name': 'Usergroupuser',
        'table': 'usergroupuser',
        'primaryKey': 'userID',

        'aliases': {
            'userGroupID': 'id',
            'userID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Usersplitclaimcode': {
        'name': 'Usersplitclaimcode',
        'table': 'usersplitclaimcode',
        'primaryKey': 'userSplitClaimCode',

        'aliases': {
            'userSplitClaimCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Usersplitclaimcodeauditdetail': {
        'name': 'Usersplitclaimcodeauditdetail',
        'table': 'usersplitclaimcodeauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Utilizationplan': {
        'name': 'Utilizationplan',
        'table': 'utilizationplan',
        'primaryKey': 'utilizationPlanID',

        'aliases': {
            'utilizationPlanID': 'id',
            'productID': 'productId',
            'memGroupID': 'memGroupId',
            'includeChildMGInd': 'includeChildMgInd',
            'adminVendorID': 'adminVendorId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'product': 'productId',
            'adminVendor': 'adminVendorId'
        },

        'listReferences': {}
    },

    'Usergrouppermissiongroup': {
        'name': 'Usergrouppermissiongroup',
        'table': 'usergrouppermissiongroup',
        'primaryKey': 'permissionGroupID',

        'aliases': {
            'userGroupID': 'id',
            'permissionGroupID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Usertelephone': {
        'name': 'Usertelephone',
        'table': 'usertelephone',
        'primaryKey': 'phoneType',

        'aliases': {
            'userID': 'id',
            'phoneType': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Utilizationplansetting': {
        'name': 'Utilizationplansetting',
        'table': 'utilizationplansettings',
        'primaryKey': 'utilizationPlanSettingsID',

        'aliases': {
            'utilizationPlanSettingsID': 'id',
            'utilizationPlanID': 'utilizationPlanId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'servCompID': 'servCompId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Userdatasecuritygroup': {
        'name': 'Userdatasecuritygroup',
        'table': 'userdatasecuritygroup',
        'primaryKey': 'dataSecurityGroupID',

        'aliases': {
            'userID': 'id',
            'dataSecurityGroupID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Utilizationplanauditdetail': {
        'name': 'Utilizationplanauditdetail',
        'table': 'utilizationplanauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'utilizationPlanID': 'utilizationPlanId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Usersetting': {
        'name': 'Usersetting',
        'table': 'usersettings',
        'primaryKey': 'userID',

        'aliases': {
            'userID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Userqualitysetting': {
        'name': 'Userqualitysetting',
        'table': 'userqualitysettings',
        'primaryKey': 'userQualitySettingsID',

        'aliases': {
            'userQualitySettingsID': 'id',
            'userID': 'userId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Utilizationplanexternalid': {
        'name': 'Utilizationplanexternalid',
        'table': 'utilizationplanexternalid',
        'primaryKey': 'utilizationPlanExternalID',

        'aliases': {
            'utilizationPlanExternalID': 'id',
            'utilizationPlanID': 'utilizationPlanId',
            'entityID': 'entityId',
            'externalPlanID': 'externalPlanId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Vendor': {
        'name': 'Vendor',
        'table': 'vendor',
        'primaryKey': 'vendorID',

        'aliases': {
            'vendorID': 'id',
            'externalVendorID': 'externalVendorId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'externalVendor': 'externalVendorId'
        },

        'listReferences': {}
    },

    'Variablecontent': {
        'name': 'Variablecontent',
        'table': 'variablecontent',
        'primaryKey': 'variableContentID',

        'aliases': {
            'variableContentID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Vendorauditdetail': {
        'name': 'Vendorauditdetail',
        'table': 'vendorauditdetail',
        'primaryKey': 'auditDetailID',

        'aliases': {
            'auditDetailID': 'id',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId',
            'vendorID': 'vendorId'
        },

        'referenceMap': {
            'vendor': 'vendorId'
        },

        'listReferences': {}
    },

    'Vendoraccount': {
        'name': 'Vendoraccount',
        'table': 'vendoraccounts',
        'primaryKey': 'accountSeqNum',

        'aliases': {
            'vendorID': 'id',
            'accountNumber': 'id',
            'accountSeqNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Vendorcontactdepartment': {
        'name': 'Vendorcontactdepartment',
        'table': 'vendorcontactdepartment',
        'primaryKey': 'departmentCode',

        'aliases': {
            'vendorID': 'id',
            'departmentCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Vendorcontactname': {
        'name': 'Vendorcontactname',
        'table': 'vendorcontactname',
        'primaryKey': 'contactNum',

        'aliases': {
            'vendorID': 'id',
            'departmentCode': 'id',
            'contactNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Vendordepartmentaddress': {
        'name': 'Vendordepartmentaddress',
        'table': 'vendordepartmentaddress',
        'primaryKey': 'addressRecordNum',

        'aliases': {
            'vendorID': 'id',
            'departmentCode': 'id',
            'addressRecordNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Vendorcontactaddress': {
        'name': 'Vendorcontactaddress',
        'table': 'vendorcontactaddress',
        'primaryKey': 'sequenceNum',

        'aliases': {
            'vendorID': 'id',
            'departmentCode': 'id',
            'contactNum': 'id',
            'sequenceNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Vendordepartmenthour': {
        'name': 'Vendordepartmenthour',
        'table': 'vendordepartmenthours',
        'primaryKey': 'dayOfWeek',

        'aliases': {
            'vendorID': 'id',
            'departmentCode': 'id',
            'dayOfWeek': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Vendorpackageucr': {
        'name': 'Vendorpackageucr',
        'table': 'vendorpackageucr',
        'primaryKey': 'sspPackageType',

        'aliases': {
            'sspPackageType': 'id',
            'pricingSettingID': 'pricingSettingId',
            'createUserID': 'createUserId',
            'changeUserID': 'changeUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Vendorcontactphone': {
        'name': 'Vendorcontactphone',
        'table': 'vendorcontactphone',
        'primaryKey': 'phoneRecordNum',

        'aliases': {
            'vendorID': 'id',
            'departmentCode': 'id',
            'contactNum': 'id',
            'phoneRecordNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Vendordepartmentphone': {
        'name': 'Vendordepartmentphone',
        'table': 'vendordepartmentphone',
        'primaryKey': 'phoneRecordNum',

        'aliases': {
            'vendorID': 'id',
            'departmentCode': 'id',
            'phoneRecordNum': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Vendorpermit': {
        'name': 'Vendorpermit',
        'table': 'vendorpermit',
        'primaryKey': 'permitID',

        'aliases': {
            'vendorID': 'id',
            'permitType': 'id',
            'permitID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Vendornote': {
        'name': 'Vendornote',
        'table': 'vendornote',
        'primaryKey': 'noteID',

        'aliases': {
            'noteID': 'id',
            'vendorID': 'vendorId',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {
            'vendor': 'vendorId'
        },

        'listReferences': {}
    },

    'Vendorworkhour': {
        'name': 'Vendorworkhour',
        'table': 'vendorworkhours',
        'primaryKey': 'dayOfWeek',

        'aliases': {
            'vendorID': 'id',
            'departmentCode': 'id',
            'contactNum': 'id',
            'dayOfWeek': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Vendorremarkcode': {
        'name': 'Vendorremarkcode',
        'table': 'vendorremarkcode',
        'primaryKey': 'vendorRemarkCode',

        'aliases': {
            'vendorRemarkCode': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Zipcode': {
        'name': 'Zipcode',
        'table': 'zipcode',
        'primaryKey': 'zipCodeID',

        'aliases': {
            'countyFIPS': 'countyFips',
            'stateFIPS': 'stateFips',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId',
            'zipCodeID': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Zipcodefileuploadheader': {
        'name': 'Zipcodefileuploadheader',
        'table': 'zipcodefileuploadheader',
        'primaryKey': 'zipCodeFileUploadHeaderID',

        'aliases': {
            'zipCodeFileUploadHeaderID': 'id',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Zipplus4': {
        'name': 'Zipplus4',
        'table': 'zipplus4',
        'primaryKey': 'zipPlus4ID',

        'aliases': {
            'zipPlus4ID': 'id',
            'carrierRouteID': 'carrierRouteId',
            'countyFIPS': 'countyFips',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'Zipcodefileuploaddetail': {
        'name': 'Zipcodefileuploaddetail',
        'table': 'zipcodefileuploaddetail',
        'primaryKey': 'zipCodeFileUploadDetailID',

        'aliases': {
            'zipCodeFileUploadDetailID': 'id',
            'zipCodeFileUploadHeaderID': 'zipCodeFileUploadHeaderId',
            'countyFIPS': 'countyFips',
            'stateFIPS': 'stateFips',
            'changeUserID': 'changeUserId',
            'createUserID': 'createUserId'
        },

        'referenceMap': {},
        'listReferences': {}
    }
};

exports.resolveMap = resolveMap;

exports.registerType = function registerType(type) {
    if (!resolveMap[type.name]) {
        throw new Error(
            'Cannot register type "' + type.name + '" - resolve map does not exist for that type'
        );
    }

    resolveMap[type.name].type = type;
};

exports.getType = function getType(type) {
    if (!resolveMap[type] || !resolveMap[type].type) {
        throw new Error('No type registered for type \'' + type + '\'');
    }

    return resolveMap[type].type;
};