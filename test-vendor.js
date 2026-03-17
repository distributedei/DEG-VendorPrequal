// DEG Vendor Prequal — Test Submission Script
// Run with: node test-vendor.js
// Submits a full Subcontractor payload with a real base64 PDF attachment

const WEBHOOK_URL = 'https://defaultec357a325b85438da765ae33c8eb13.b7.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/809579ee018146c0b7bf30b1fc1f3465/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=z_oVZah2JwcyDtWSaZWQtsjNtJhcTL48h3lbEeaSCPo';

// Minimal valid PDF in base64 (renders as a 1-page blank PDF)
const DUMMY_PDF_BASE64 = 'JVBERi0xLjQKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPJ4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQo+PgplbmRvYmoKeHJlZgowIDQKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAwNTggMDAwMDAgbiAKMDAwMDAwMDExNSAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDQKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjIxNgolJUVPRgo=';

const payload = {
  // Core
  Title:         'Sunbelt Electric LLC',
  VendorType:    'Subcontractor',
  Entity:        'DEI',
  DBA:           '',
  YearEstablished: 2018,
  Website:       'https://www.sunbeltelectric.com',
  CoreFunctions: 'Electrical Installation, Solar PV, BESS Commissioning',
  Address1:      '1234 Industrial Blvd, Tampa, FL 33601',

  // Contacts
  ExecName:   'James Harrell',
  ExecEmail:  'jharrell@sunbeltelectric.com',
  ExecPhone:  '(813) 555-0142',
  OpsName:    'Maria Vega',
  OpsEmail:   'mvega@sunbeltelectric.com',
  OpsPhone:   '(813) 555-0198',
  SalesName:  '',
  SalesEmail: '',
  SalesPhone: '',

  // Dashboard compat
  Contact:     'James Harrell',
  VendorEmail: 'jharrell@sunbeltelectric.com',
  Phone:       '(813) 555-0142',

  // Scope
  Tier:          'Tier 2',
  Trades:        'Electrical, BESS Install, Commissioning',
  ServiceRegion: 'FL, GA, AL',
  Licenses:      'FL EC1312345, NABCEP PV Installation Professional',
  OEMCerts:      'Tesla Powerwall Certified',

  // NDA
  NDAStatus: 'No',
  NDADate:   null,

  // Financial
  EIN:               '47-1234567',
  Revenue:           '$4,500,000',
  DUNS:              '',
  AuditedFinancials: '2 Years',
  GL_Limit:          '$2,000,000',
  ProfLiability:     '$1,000,000',
  BondCapacity:      '$500,000',
  WC_Carrier:        'Travelers',
  COI_Expiry:        '2026-12-31',
  BankRef:           'First Florida Bank | jsmith@ffbank.com | (813) 555-0100',
  BankEmail:         'jsmith@ffbank.com',
  BankPhone:         '(813) 555-0100',

  // Legal
  LegalIssues:  'No',
  LegalDetails: '',

  // Sub-specific safety
  SafetyIncidents:  '0-2',
  SafetyProgram:    'Yes',
  OSHA_Incidents:   0,
  SafetyPersonnel:  'OSHA 30',
  EMR_Current:      '0.82',
  EMR_Prior:        '0.87',
  EMR_2Prior:       '0.91',
  TRIR:             '0-1.5',
  BESSExperience:   '3-5 years',
  BESSOEM:          'Tesla Megapack, BYD',
  MWInstalled:      '101-300 MW',
  LargestProject:   '85 MW',
  SupervisorAvail:  'On-site full time',
  OperatingDistance:'50-100 miles',

  // Staffing
  WorkforceComp: 'Mostly permanent',
  CrewSize:       42,
  PermanentEmp:   35,
  PartnerCount:    4,

  // References
  Ref1: 'SunPower EPC | Tom Blake | tblake@sunpower.com',
  Ref2: 'NextEra Energy | Dana Cole | dcole@nextera.com',
  Ref3: '',
  Notes: 'TEST SUBMISSION — DEG prequal system validation. Please disregard or delete.',

  // Meta
  Status:        'Pending',
  SubmittedDate: new Date().toISOString().split('T')[0],
  SubmittedBy:   'Vendor Self-Submit',

  // Structured attachments — Power Automate loops this → SharePoint Create File
  attachments: [
    {
      label:    'W9',
      name:     'W9_SunbeltElectric.pdf',
      mimeType: 'application/pdf',
      data:     DUMMY_PDF_BASE64
    },
    {
      label:    'COI',
      name:     'COI_SunbeltElectric.pdf',
      mimeType: 'application/pdf',
      data:     DUMMY_PDF_BASE64
    },
    {
      label:    'NDA',
      name:     'NDA_SunbeltElectric_Signed.pdf',
      mimeType: 'application/pdf',
      data:     DUMMY_PDF_BASE64
    }
  ]
};

const body = JSON.stringify(payload);
console.log('Payload size:', (body.length / 1024).toFixed(1), 'KB');
console.log('Attachments:', payload.attachments.length);
console.log('Submitting to Power Automate...\n');

fetch(WEBHOOK_URL, {
  method: 'POST',
  mode: 'no-cors',
  headers: { 'Content-Type': 'text/plain' },
  body: body
})
.then(() => {
  console.log('✅ Submitted successfully');
  console.log('\nNow check:');
  console.log('  1. Power Automate run history — all steps green');
  console.log('  2. Vendors list — new row for Sunbelt Electric LLC');
  console.log('  3. Vendor Documents library — folder "Sunbelt Electric LLC" with 3 PDFs');
  console.log('  4. DocumentsFolder column on that row — should have a link');
})
.catch(err => {
  console.error('❌ Failed:', err.message);
});
