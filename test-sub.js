// DEG Vendor Prequal — Subcontractor Test Script
// Run in browser console on distributedei.solutions/form.html
// OR run as node test-sub.js

const WEBHOOK_URL = 'https://defaultec357a325b85438da765ae33c8eb13.b7.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/809579ee018146c0b7bf30b1fc1f3465/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=z_oVZah2JwcyDtWSaZWQtsjNtJhcTL48h3lbEeaSCPo';

const DUMMY_PDF = 'JVBERi0xLjQKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPJ4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQo+PgplbmRvYmoKeHJlZgowIDQKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAwNTggMDAwMDAgbiAKMDAwMDAwMDExNSAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDQKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjIxNgolJUVPRgo=';

const payload = {
  // ── Core ──────────────────────────────────────────────
  Title:           'Coastal Power Services LLC',
  VendorType:      'Subcontractor',
  Entity:          'DEI',
  DBA:             'CPS Electric',
  YearEstablished: 2014,
  Website:         'https://www.coastalpowerservices.com',
  CoreFunctions:   'Electrical Installation, Solar PV, BESS Commissioning, HV Testing',
  Address1:        '2847 Commerce Pkwy, Orlando, FL 32819',

  // ── Contacts ──────────────────────────────────────────
  ExecName:   'Derek Fontaine',
  ExecEmail:  'dfontaine@coastalpowerservices.com',
  ExecPhone:  '(407) 555-0183',
  OpsName:    'Krista Bowman',
  OpsEmail:   'kbowman@coastalpowerservices.com',
  OpsPhone:   '(407) 555-0219',
  SalesName:  'Marcus Webb',
  SalesEmail: 'mwebb@coastalpowerservices.com',
  SalesPhone: '(407) 555-0247',

  // Dashboard compat
  Contact:     'Derek Fontaine',
  VendorEmail: 'dfontaine@coastalpowerservices.com',
  Phone:       '(407) 555-0183',

  // ── Scope ─────────────────────────────────────────────
  Tier:          'Tier 3',
  Trades:        'Electrical, BESS Install, Commissioning, Testing / QC',
  ServiceRegion: 'FL, GA, AL, SC, NC, TN',
  Licenses:      'FL EC1312988, GA EL007423, NABCEP PV Installation Professional',
  OEMCerts:      'Tesla Megapack Certified, Sungrow Certified Installer',

  // ── NDA ───────────────────────────────────────────────
  NDAStatus: 'Yes',
  NDADate:   '01/15/2025',

  // ── Financial ─────────────────────────────────────────
  EIN:               '83-4721039',
  Revenue:           '$12,500,000',
  DUNS:              '078-421-993',
  AuditedFinancials: '3 Years',
  GL_Limit:          '$5,000,000',
  ProfLiability:     '$2,000,000',
  BondCapacity:      '$8,000,000',
  WC_Carrier:        'Zurich North America',
  COI_Expiry:        '2026-12-31',
  BankRef:           'Regions Bank | Sandra Cho | scho@regions.com | (407) 555-0300',
  BankEmail:         'scho@regions.com',
  BankPhone:         '(407) 555-0300',

  // ── Legal ─────────────────────────────────────────────
  LegalIssues:  'No',
  LegalDetails: '',

  // ── Safety (Sub) ──────────────────────────────────────
  SafetyIncidents:  '0-2',
  SafetyProgram:    'Yes',
  OSHA_Incidents:   0,
  SafetyPersonnel:  'Dedicated Safety Supervisor',
  EMR_Current:      '0.74',
  EMR_Prior:        '0.79',
  EMR_2Prior:       '0.83',
  TRIR:             '0-1.5',

  // ── BESS ──────────────────────────────────────────────
  BESSExperience:   '5-7 years',
  BESSOEM:          'Tesla Megapack, Sungrow, BYD, FlexGen',

  // ── Project Experience ────────────────────────────────
  MWInstalled:       '101-300 MW',
  LargestProject:    '62 MW AC',
  SupervisorAvail:   'On-site full time',
  OperatingDistance: '100-200 miles',

  // ── Staffing ──────────────────────────────────────────
  WorkforceComp: 'Mostly permanent',
  CrewSize:       68,
  PermanentEmp:   55,
  PartnerCount:    6,

  // ── References ────────────────────────────────────────
  Ref1: 'NextEra Energy Resources | Pat Sullivan | psullivan@nextera.com | (561) 555-0140',
  Ref2: 'McCarthy Building Companies | Dana Ortiz | d.ortiz@mccarthy.com | (314) 555-0188',
  Ref3: 'Moss Construction | Tyler Grant | tgrant@mossconstruction.com | (954) 555-0162',

  Notes: 'Active DEI sub on Hendry County Solar Farm (Phase 2). Available Q3 2026 for new project starts. Full mobilization capability within 3 weeks. TEST SUBMISSION.',

  // ── Meta ──────────────────────────────────────────────
  Status:        'Pending',
  SubmittedDate: new Date().toISOString().split('T')[0],
  SubmittedBy:   'Vendor Self-Submit',

  // ── Attachments ───────────────────────────────────────
  attachments: [
    { label: 'W9',           name: 'W9_CoastalPowerServices.pdf',    mimeType: 'application/pdf', data: DUMMY_PDF },
    { label: 'COI',          name: 'COI_CoastalPowerServices.pdf',   mimeType: 'application/pdf', data: DUMMY_PDF },
    { label: 'BusinessLicense', name: 'License_FL_EC1312988.pdf',    mimeType: 'application/pdf', data: DUMMY_PDF },
    { label: 'OSHA300',      name: 'OSHA300_2023_CPS.pdf',           mimeType: 'application/pdf', data: DUMMY_PDF },
    { label: 'OSHA300',      name: 'OSHA300_2024_CPS.pdf',           mimeType: 'application/pdf', data: DUMMY_PDF },
  ]
};

const body = JSON.stringify(payload);
console.log('Payload:', (body.length/1024).toFixed(1), 'KB');
console.log('Company:', payload.Title);
console.log('Address:', payload.Address1);
console.log('Attachments:', payload.attachments.length);
console.log('Submitting...');

fetch(WEBHOOK_URL, {
  method:  'POST',
  mode:    'no-cors',
  headers: { 'Content-Type': 'text/plain' },
  body:    body
})
.then(() => {
  console.log('');
  console.log('✅ Submitted — Coastal Power Services LLC');
  console.log('');
  console.log('Check:');
  console.log('  1. PA run history — all steps green');
  console.log('  2. Vendors list — new row, ServiceRegion = FL, GA, AL, SC, NC, TN');
  console.log('  3. Vendor Documents / Coastal Power Services LLC — 5 files');
  console.log('  4. Coverage Map — pin should appear in Orlando, FL');
})
.catch(err => console.error('❌ Failed:', err.message));
