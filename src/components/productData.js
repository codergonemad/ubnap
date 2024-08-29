import product1 from "../images/product1.png";
import product2 from "../images/product2.png";
import product3 from "../images/product3.png";
import product4 from "../images/product4.png";
import product5 from "../images/product5.png";
import product6 from "../images/product6.png";
import product7 from "../images/product7.png";
import product8 from "../images/product8.png";
import product9 from "../images/product9.png";
import product10 from "../images/product10.png";
import product11 from "../images/product11.png";
import product12 from "../images/product12.png";
import product13 from "../images/product13.png";
import product14 from "../images/product14.png";
import product15 from "../images/product15.png";
import product16 from "../images/product16.png";
import product17 from "../images/product17.png";
import product18 from "../images/product18.png";
import product19 from "../images/product19.png";
import product20 from "../images/product20.png";
import product21 from "../images/product21.png";
import product22 from "../images/product22.png";
import product23 from "../images/product23.png";
import product24 from "../images/product24.png";
import product25 from "../images/product25.png";

const products = [
    // Product 2
  {
    id: 2,
    name: 'Cefto-T',
    image: product2,
    description: 'Ceftriaxone & Tazobactam 1.125gm Injection',
    price: 14.99,
    category: 'Antibiotics',
    features: [
      'Synergistic Action of Ceftriaxone and Tazobactam',
      'Tazobactam Inhibits Beta-Lactamase Producing Bacteria',
      'Enhances Spectrum of Ceftriaxone',
      'Effective and Safe Treatment for Severe Infections',
      'Suitable for Complex and Multi-drug Resistant Infections',
    ],
    alsoAvailable: [
      {
        name: 'Cefto-T with Lactic Acid Bacillus',
        description: 'Ceftriaxone & Tazobactam with Lactic Acid Bacillus for enhanced efficacy and gut health.',
      },
      {
        name: 'Cefto-T Injectable Suspension',
        description: 'Ceftriaxone & Tazobactam in a suspension form for easier administration.',
      },
    ]
  },
  
  // Product 1
  {
    id: 1,
    name: 'Pamodol-SP',
    image: product1,
    description: 'Aceclofenac, Paracetamol & Serratiopeptidase Tablets',
    price: 9.99,
    category: 'Pain Relief',
    features: [
      'Effective for Rheumatoid Arthritis',
      'Relieves Acute Muscle Spasms and Spondylosis',
      'Alleviates Low Back Pain and Dental Infections',
      'Addresses Muscular Cramps and Sports Injuries',
      'Combines Aceclofenac, Paracetamol, and Serratiopeptidase for Comprehensive Relief',
    ],
    alsoAvailable: [
      {
        name: 'Pamodol',
        description: 'Aceclofenac Tablets for targeted pain relief without Paracetamol or Serratiopeptidase.',
      },
      {
        name: 'Pamodol-P',
        description: 'Aceclofenac & Paracetamol Tablets for focused pain and fever relief.',
      },
    ]
  }
  ,
    {
      id: 3,
      name: 'Pamodol-P',
      image: product3,
      description: 'Aceclofenac & Paracetamol Tablets',
      price: 8.99,
      category: 'Pain Relief',
      features: [
        'Effective for Fever Reduction',
        'Provides Relief from Pain and Inflammation',
        'Useful for Traumatic Injuries',
        'Helps in Acute Arthritis Management',
        'Combines Aceclofenac and Paracetamol for Enhanced Efficacy',
        'Fast-Acting with Long-Lasting Effects',
      ],
      alsoAvailable: [
        {
          name: 'Pamodol',
          description: 'Aceclofenac Tablets for targeted pain relief without Paracetamol.',
        },
        {
          name: 'Pamodol-F',
          description: 'Aceclofenac & Paracetamol Extended-Release Tablets for prolonged relief.',
        },
      ]
    }
    ,
    {
      id: 4,
      name: 'Ceftom-S',
      image: product4,
      description: 'Cefoperazone & Sulbactam 1.5gm Injection',
      price: 45.99,
      category: 'Antibiotics',
      features: [
        'Effective Against Respiratory Tract Infections',
        'Treats Urinary Tract Infections',
        'Useful in Managing Peritonitis',
        'Addresses Skin & Soft Tissue Infections',
        'Combines Cefoperazone with Sulbactam for Enhanced Activity',
        'Provides Broad-Spectrum Coverage Against Gram-Positive and Gram-Negative Bacteria',
      ],
      alsoAvailable: [
        {
          name: 'Ceftom-M',
          description: 'Cefoperazone 1gm Injection for broader use in infections.',
        },
        {
          name: 'Ceftom-L',
          description: 'Cefoperazone & Lactic Acid Bacillus Injection for added therapeutic benefits.',
        },
      ]
    }
    ,
    {
      id: 5,
      name: 'Neuroton-2500',
      image: product5,
      description: 'Methylcobalamin 2500mcg Injection',
      price: 22.99,
      category: 'Neurology',
      features: [
        'Effective for Peripheral Neuropathy Management',
        'Supports Treatment for Diabetes-Induced Neuropathy',
        'Addresses Drug-Induced Neuropathy',
        'Helps in Cases of Alcohol-Induced Neuropathy',
        'High Dose Methylcobalamin for Enhanced Nerve Health',
        'Provides Relief from Nerve Pain and Dysfunction',
      ],
      alsoAvailable: [
        {
          name: 'Neuroton-1000',
          description: 'Methylcobalamin 1000mcg Injection for less severe cases of neuropathy.',
        },
        {
          name: 'Neuroton-500',
          description: 'Methylcobalamin 500mcg Injection for general nerve health maintenance.',
        },
      ]
    }
    ,
    {
      id: 6,
      name: 'ASPAMIN-O',
      image: product6,
      description: 'Calcium Orotate 500mg + Calcium Aspartate 500mg + Vitamin K2-7 50mcg + Calcitriol 0.25mcg + Zinc Sulphate 7.5mg + Magnesium 50mg Tablet',
      price: 19.99,
      category: 'Bone Health',
      features: [
        'Synergistic Combination for Bone Rejuvenation and Strength',
        'Supports Bone Health in Post-Menopausal Osteoporosis and Senile Osteoporosis',
        'Helps Manage Renal Osteodystrophy',
        'Essential for Pregnant and Lactating Women',
        'Addresses Hypocalcaemia with Comprehensive Nutrient Support',
        'Includes Vitamin K2-7 for Optimal Calcium Utilization',
        'Provides Magnesium and Zinc for Enhanced Bone Health',
      ],
      alsoAvailable: [
        {
          name: 'ASPAMIN',
          description: 'Calcium Orotate and Calcium Aspartate Tablets for general bone health.',
        },
        {
          name: 'ASPAMIN-K',
          description: 'Calcium Supplement with Vitamin K2 for additional bone support.',
        },
      ]
    }
    ,
    {
      id: 7,
      name: 'Rabnap-LSP',
      image: product7,
      description: 'Rabeprazole Sodium 20mg (As enteric coated) + Levosulpiride 75mg (SR) Capsule',
      price: 14.99,
      category: 'Digestive Health',
      features: [
        'Quicker Onset of Action with Rapid Acid Suppression',
        'Unique PPI with Activation Half-Life of Just 1.3 Minutes in Acidic Media',
        'Achieves 88% Maximal Acid Suppression After First Dose',
        'Levosulpiride Helps Manage Functional Dyspepsia and Delayed Gastric Emptying',
        'Effective for Dysmotility-like Functional Dyspepsia and Non-Erosive Reflux Disease',
      ],
      alsoAvailable: [
        {
          name: 'Rabnap',
          description: 'Rabeprazole Sodium 20mg Capsule for standard acid suppression.',
        },
        {
          name: 'Levosulpride',
          description: 'Levosulpiride 75mg for management of dyspepsia and reflux.',
        },
      ]
    }
    ,
    {
      id: 8,
      name: 'Rabnap-DSR',
      image: product8,
      description: 'Rabeprazole Sodium 20mg (As enteric coated) + Domperidone 30mg as SUSTAINED RELEASE Capsule',
      price: 11.99,
      category: 'Digestive Health',
      features: [
        'Combines Rabeprazole and Domperidone for Enhanced Efficacy',
        'Provides Fast and Potent Relief from Heartburn and GERD Symptoms',
        'Well Tolerated with Improved Quality of Life for GERD Patients',
        'Rabeprazole Offers Similar Efficacy and Safety Profile as Esomeprazole 20mg',
        'Effective in Treating Chronic Gastritis',
      ],
      alsoAvailable: [
        {
          name: 'Rabnap',
          description: 'Rabeprazole Sodium 20mg Capsule for standard relief.',
        },
      ]
    }
    ,
    {
      id: 9,
      name: 'UBDERM',
      image: product9,
      description: 'Ofloxacin, Omnidazole, Itraconazole & Clobetasol Propionate Cream',
      price: 12.99,
      category: 'Skin Care',
      features: [
        'Effective Against Fungal Infections',
        'Treats Dermatitis and Redness of Scaly Rashes',
        'Relieves Itching and Stinging',
        'Effective for Scabies and Tinea Pedis',
        'Addresses Bacterial Infections',
      ],
      alsoAvailable: [
        {
          name: 'UBDERM Plus',
          description: 'Enhanced formulation for severe skin conditions.',
        },
      ]
    }
    ,
    {
      id: 10,
      name: 'UB-SPAS',
      image: product10,
      description: 'Drotaverine HCL IP 80mg + Aceclofenac IP 100mg Tablet',
      price: 7.99,
      category: 'Pain Relief',
      features: [
        'Prevents and Controls Pain and Dysfunction',
        'Provides High-Quality Analgesia',
        'Safe, Effective, and Fast Acting',
        'Ideal for Spasmodic Conditions',
        'Relieves Pain from Muscle Spasms and Related Disorders',
      ],
      alsoAvailable: [
        {
          name: 'UB-SPAS Plus',
          description: 'Enhanced formula for more severe pain conditions.',
        },
      ]
    },
    {
      id: 11,
      name: 'NV-50',
      image: product11,
      description: 'Cefpodoxime 50mg Dry Syrup with Water',
      price: 6.49,
      category: 'Antibiotics',
      features: [
        'Highly Active Against Both Gram-Positive and Gram-Negative Organisms',
        'Stable Against Beta-Lactamase Degradation',
        'Effective for Skin and Soft Tissue Infections',
        'Treats Community Acquired Pneumonia and Chronic Bronchitis',
        'Useful for Urinary Tract Infections and Pharyngitis/Tonsillitis',
        'Reliable Antibiotic for a Broad Range of Infections',
      ],
      alsoAvailable: [
        {
          name: 'NV-50 Oral Suspension',
          description: 'Convenient oral suspension for pediatric use.',
        },
      ]
    }
    ,
    {
      id: 12,
      name: 'Ubcid-0',
      image: product12,
      description: 'Magaldrate, Simethicone & Oxetacaine Suspension Syrup',
      price: 7.99,
      category: 'Digestive Health',
      features: [
        'Effective for Hyperacidity and Heartburn Relief',
        'Combines Magaldrate, Simethicone, and Oxetacaine for Comprehensive Relief',
        'Reduces Gastritis Symptoms and Belching',
        'Helps Alleviate Indigestion and Dyspepsia',
        'Provides Quick and Lasting Relief from Gastric Discomfort',
      ],
      alsoAvailable: [
        {
          name: 'Ubcid-0 Tablets',
          description: 'Convenient tablet form for relief from gastric issues.',
        },
      ]
    }
  ,  
    {
      id: 13,
      name: 'Cefpodoxime',
      image: product13,
      description: 'Cefpodoxime Oral Suspension',
      price: 11.49,
      category: 'Antibiotics',
      features: [
        'Effective for Treating Various Infections',
        'Available in Oral Suspension and Dry Syrup Forms',
        'Suitable for Pediatric and Adult Patients',
        'Targets Respiratory, Urinary, and Skin Infections',
        'Convenient Dosage Options for Different Needs',
      ],
      alsoAvailable: [
        {
          name: 'Cefpodoxime Oral Suspension LP',
          description: 'Long-acting oral suspension for sustained treatment.',
        },
        {
          name: 'Cefpodoxime 100mg Dry Syrup',
          description: 'Dry syrup to be mixed with water for oral administration.',
        },
      ]
    }
    ,
    {
      id: 14,
      name: 'Kanchan-Kalp',
      image: product14,
      description: 'Uterine Syrup',
      price: 8.99,
      category: 'Women\'s Health',
      features: [
        'Reduces Low Back Pain',
        'Supports Regular Menstruation Cycle',
        'Provides Significant Relief from Dysmenorrhoea',
        'Alleviates Abdominal Cramps',
        'Relieves Stress and Mood Swings',
      ],
      alsoAvailable: [
        {
          name: 'Kanchan-Kalp Forte',
          description: 'Enhanced formula for severe menstrual discomfort.',
        },
      ],
    }
  ,  
    {
      id: 15,
      name: 'UBCART-6',
      image: product15,
      description: 'Deflazacort 6mg Tablet',
      price: 8.99,
      category: 'Anti-Inflammatory',
      features: [
        'Suppresses Hyper-immune Response',
        'Effective for Asthma Management',
        'Helps with Ulcerative Colitis',
        'Relieves Rheumatoid Arthritis Symptoms',
        'Addresses Uncontrolled Inflammation',
        'Treats Severe Allergy or Inflammation',
        'Used for Inflammatory Skin Conditions',
      ],
      alsoAvailable: [
        {
          name: 'UBCART-12',
          description: 'Deflazacort 12mg Tablet with a higher dosage for severe conditions.',
        },
      ],
    }
    ,
    {
      id: 16,
      name: 'MONTINAP',
      image: product16,
      description: 'Montelukast 10 mg + Levofloxacin 5mg Tablet',
      price: 13.49,
      category: 'Allergy Relief',
      features: [
        'Effective for Seasonal Allergic Rhinitis',
        'Prophylaxis for Asthma',
        'Helps Manage Atopic Eczema',
        'Supports Bronchial Asthma Control',
        'Combines Antihistamine and Antibiotic Action',
        'Provides Comprehensive Allergy and Respiratory Relief',
      ],
      alsoAvailable: [
        {
          name: 'MONTINAP Plus',
          description: 'Montelukast 10 mg + Levofloxacin 5mg Tablet with additional ingredients for enhanced effectiveness.',
        },
      ],
    },
    
    {
      id: 17,
      name: 'LEVONAP',
      image: product17,
      description: 'Levocetirizine Hydrochloride IP 5mg Tablet',
      price: 8.99,
      category: 'Allergy Relief',
      features: [
        'Effective for Seasonal Allergic Rhinitis',
        'Helps with Perennial Allergic Rhinitis',
        'Relieves Chronic Idiopathic Urticaria',
        'Provides Long-lasting Allergy Relief',
        'Reduces Symptoms of Sneezing, Itching, and Nasal Congestion',
        'Safe for Daily Use',
      ],
      alsoAvailable: [
        {
          name: 'LEVONAP Plus',
          description: 'Levocetirizine Hydrochloride IP 5mg Tablet with added decongestants for enhanced relief.',
        },
      ],
    }
    ,
    {
      id: 18,
      name: 'CHT',
      image: product18,
      description: 'Cyproheptadine Hydrochloride & Tricholine Citrate Syrup',
      price: 14.99,
      category: 'Appetite Stimulants',
      features: [
        'Stimulates Appetite and Growth in Children',
        'Shows Stimulatory Effects on Growth Hormones',
        'Tones Up the Entire Digestive System',
        'Colagogue Action by Stimulating Intestinal, Duodenal, and Pancreatic Secretions',
        'Promotes Weight Gain and Growth',
        'Proven Appetite Stimulant',
        'Corrects Nutritional Oedema',
        'Offers Antihistaminic Action',
        'Supports Overall Nutritional and Growth Development',
      ],
      alsoAvailable: [
        {
          name: 'CHT with Added Vitamins',
          description: 'Cyproheptadine Hydrochloride & Tricholine Citrate Syrup with added vitamins for enhanced growth support.',
        },
      ],
    }
    ,
    {
      id: 19,
      name: 'LIVMARIN',
      image: product19,
      description: 'Silymarin, L-Carnitine, Co-Enzyme Q10, L-Ornithine, Curcumin, L-Aspartate & Vitamin B12 Liver Tonic',
      price: 18.99,
      category: 'Liver Health',
      features: [
        'Silymarin: Protects and regenerates liver cells.',
        'L-Carnitine: Supports liver function and energy production.',
        'Co-Enzyme Q10: Acts as an antioxidant to protect liver cells.',
        'L-Ornithine: Aids in detoxification and supports liver health.',
        'Curcumin: Reduces inflammation and protects against liver damage.',
        'L-Aspartate: Supports detoxification processes.',
        'Vitamin B12: Essential for overall liver health and energy.',
        'Effective for Jaundice, Viral Hepatitis, Alcoholic Liver Diseases, Early Cirrhosis, Fatty Liver, Loss of Appetite, and Liver Dysfunction.',
      ],
    }
    ,
    {
      id: 20,
      name: 'Neuron-OD',
      image: product20,
      description: 'Methylcobalamin, Alpha Lipoic Acid With Multivitamin Capsule',
      price: 14.99,
      category: 'Nutritional Supplements',
      features: [
        'Methylcobalamin: Supports nerve health and neurological function.',
        'Alpha Lipoic Acid: Acts as an antioxidant and helps in managing oxidative stress.',
        'Multivitamins: Provides essential vitamins for overall health and well-being.',
        'Effective Supplementary Therapy for Cardiovascular Health, Neurological Disorders, and General Weakness.',
      ],
    },
    
    {
      id: 21,
      name: 'LIVMARIN',
      image: product21,
      description: 'Protective & Healthy Liver Tonic',
      price: 18.99,
      category: 'Liver Health',
      features: [
        'Silymarin: Provides antioxidant support and promotes liver cell regeneration.',
        'L-Carnitine: Assists in fat metabolism and enhances liver function.',
        'Co-Enzyme Q10: Supports energy production and protects liver cells from oxidative damage.',
        'L-Ornithine: Helps in reducing ammonia levels and supports detoxification processes.',
        'Curcumin: Exhibits anti-inflammatory properties and helps in maintaining liver health.',
        'L-Aspartate: Aids in the detoxification of harmful substances and supports liver function.',
        'Vitamin B12: Essential for energy production and overall liver health.',
      ],
    },
    {
      id: 22,
      name: 'Moxynap',
      image: product22,
      description: 'Amoxycillin, Potassium Clavulanate Tablets',
      price: 12.99,
      category: 'Antibiotics',
      features: [
        'Preferred Agent for Typhoid, Bronchitis, UTI, and Gonorrhea',
        'Sustained Blood Levels for Effective Infection Control',
        'Clavulanic Acid Re-establishes Activity Against B-Lactamase Producing Bacteria',
        'Accurate Targeting of Infections',
        'Effective for Skin and Soft Tissue Infections, Upper Respiratory Tract Infections, ENT Infections, and Urinary Tract Infections',
        'Safe for Use During Pregnancy',
      ],
      alsoAvailable: [
        {
          name: 'Moxynap with Lactic Acid Bacillus',
          description: 'Amoxycillin, Potassium Clavulanate & Lactic Acid Bacillus Tablets',
        }
      ]
    },
      {
        id: 23,
        name: 'UFER-XT',
        image: product23, 
        description: 'Ferrous Ascorbate eqv. to elemental Iron 100 mg + Folic Acid 1.5 mg Tablet/Syrup',
        price: 6.99,
        category: 'Iron Supplements',
        features: [
          'Meets the Requirement for Iron Replacement Therapy',
          'Ensures a Greater Rise in Hb Levels',
          'Helps Alleviate Fatigue, Weakness, and Irritability Associated with Iron Deficiency',
          'Supports Pregnant and Lactating Women with Anaemia',
          'Effective in Chronic Blood Loss Conditions',
        ],
        alsoAvailable: [
          {
            name: 'UFER-XT Suspension',
            description: 'Ferrous Ascorbate & Folic Acid Suspension',
          }
        ]
      },  
    {
      id: 24,
      name: 'Cifi-O',
      image: product24, 
      description: 'Cefixime 200mg + Ofloxacin 200mg + Lactic Acid Bacillus 90 million spores Tablet',
      price: 6.99,
      category: 'Antibiotics',
      features: [
        'Unique Dual Mode Action',
        'Cefixime Prevents Nucleic Acid Synthesis',
        'Ofloxacin Inhibits Cell Wall Synthesis',
        'No Drug Interaction',
        'Safe and Effective in Treating Multi-Drug Resistant Infections',
        'Recommended by WHO for Typhoid Treatment',
        'Effective Against Respiratory, G.I. Tract, and Urinary Tract Infections',
        'Useful for Typhoid Fever, Surgical Prophylaxis, Intra-Abdominal Infections'
      ],
      alsoAvailable: [
        {
          name: 'Cifi-200',
          description: 'Cefixime 200mg + Lactic Acid Bacillus 2.5 Billion Excipients Tablet',
        }
      ]
    },
  
    {
      id: 25, 
      name: 'Lyconap-Fort', 
      image: product25, 
      description: 'Lycopene with Multivitamin, Multimineral & Antioxidant Softgel Capsule/Syrup.', 
      price: 19.99, 
      category: 'Vitamins & Supplements', 
      features: [
        'Contains Lycopene, a powerful antioxidant',
        'Enriched with essential vitamins and minerals',
        'Supports cardiovascular health',
        'Helps maintain healthy blood circulation',
        'Reduces oxidative stress',
        'Suitable for diabetes and obesity management',
        'Prevents tissue and blood vessel damage',
        'Lowers the risk of heart disease',
        'Aids in membrane stability and lipid peroxidation prevention'
      ] 
    }
    
  ];

export default products;