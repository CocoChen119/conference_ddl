const META = {
  "updated": "2026-11-26",
  "categories": [
    {
      "id": "all",
      "label": "All",
      "title": "All conferences"
    },
    {
      "id": "ai",
      "label": "AI",
      "title": "AI and language"
    },
    {
      "id": "cv",
      "label": "CV",
      "title": "Computer vision and multimedia"
    },
    {
      "id": "cog",
      "label": "Cognition / Perception",
      "title": "Cognition and perception"
    },
    {
      "id": "art",
      "label": "Art / Creativity",
      "title": "Art and creativity"
    },
    {
      "id": "game",
      "label": "Game",
      "title": "Games"
    }
  ]
};

const CONFS = [
  {
    "id": "ijcai",
    "req": "7 pages plus up to 2 reference pages. Tracks: Main, AI4Science, AI and Health, AI Arts and Creativity, AI for Social Good.",
    "cats": [
      "ai"
    ],
    "abbr": "IJCAI",
    "name": "International Joint Conference on Artificial Intelligence",
    "url": "https://2027.ijcai.org/",
    "when": "7–13 Aug 2027",
    "place": "Kyoto, Japan",
    "abstract": "2027-01-04",
    "deadline": "2027-01-11",
    "rebuttal": "2027-04-02",
    "notify": "2027-04-21",
    "tz": "AoE",
    "note": "Satellite event 15–17 Aug 2027, Hengqin, China."
  },
  {
    "id": "ecai",
    "cats": [
      "ai"
    ],
    "abbr": "ECAI",
    "name": "European Conference on Artificial Intelligence",
    "url": "https://ecai2027.org/",
    "when": "4–7 Oct 2027",
    "place": "Athens, Greece",
    "deadline": "2027-04-14",
    "rebuttal": "2027-06-18",
    "notify": "2027-07-15",
    "tz": "AoE"
  },
  {
    "id": "neurips",
    "cats": [
      "ai"
    ],
    "abbr": "NeurIPS",
    "name": "Neural Information Processing Systems",
    "url": "https://neurips.cc/Conferences/FutureMeetings",
    "when": null,
    "place": "Europe (city TBA)",
    "deadline": null,
    "notify": null,
    "note": "Europe is confirmed. City and deadline are not out."
  },
  {
    "id": "icml",
    "cats": [
      "ai"
    ],
    "abbr": "ICML",
    "name": "International Conference on Machine Learning",
    "url": "https://icml.cc/Conferences/2027",
    "when": "2–4 Aug 2027",
    "place": "Riocentro, Rio de Janeiro, Brazil",
    "abstract": "2027-01-14",
    "deadline": "2027-01-22",
    "notify": "2027-05-03",
    "tz": "AoE"
  },
  {
    "id": "uai",
    "cats": [
      "ai"
    ],
    "abbr": "UAI",
    "name": "Uncertainty in Artificial Intelligence",
    "url": "https://www.auai.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "colt",
    "req": "12 PMLR pages, excluding references. Accepted papers may appear as a 1-page extended abstract.",
    "cats": [
      "ai"
    ],
    "abbr": "COLT",
    "name": "Conference on Learning Theory",
    "url": "https://learningtheory.org/colt2027/",
    "when": "28 Jun – 2 Jul 2027",
    "place": "Tokyo, Japan",
    "deadline": "2027-01-29",
    "rebuttal": "2027-04-02",
    "notify": "2027-05-03",
    "tz": "AoE",
    "note": "Notification on or before 3 May."
  },
  {
    "id": "acml",
    "cats": [
      "ai"
    ],
    "abbr": "ACML",
    "name": "Asian Conference on Machine Learning",
    "url": "https://www.acml-conf.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "ecmlpkdd",
    "req": "Demo, applied data science, industry, and PhD tracks. Length not posted.",
    "cats": [
      "ai"
    ],
    "abbr": "ECML PKDD",
    "name": "European Conference on Machine Learning and Knowledge Discovery in Databases",
    "url": "https://ecmlpkdd.org/2027/",
    "when": "30 Aug – 3 Sep 2027",
    "place": "Eindhoven, The Netherlands",
    "deadline": null,
    "notify": null,
    "note": "Dates are set. Deadline is not out."
  },
  {
    "id": "kdd",
    "req": "Research and applied data science: 8 content pages. Also datasets and benchmarks, and AI for sciences.",
    "cats": [
      "ai"
    ],
    "abbr": "KDD",
    "name": "Knowledge Discovery and Data Mining",
    "url": "https://kdd2027.kdd.org/",
    "when": "1–5 Aug 2027",
    "place": "San Jose McEnery Convention Center, USA",
    "deadline": null,
    "notify": null,
    "note": "Cycle 2 is expected in Feb 2027. The date is not out."
  },
  {
    "id": "icdm",
    "cats": [
      "ai"
    ],
    "abbr": "ICDM",
    "name": "IEEE International Conference on Data Mining",
    "url": "https://icdm2027-website.onrender.com/",
    "when": "15–18 Nov 2027",
    "place": "Brisbane, Australia",
    "deadline": "2027-06-06",
    "notify": "2027-08-16",
    "tz": "AoE",
    "tentative": true,
    "note": "Dates are marked tentative."
  },
  {
    "id": "sdm",
    "cats": [
      "ai"
    ],
    "abbr": "SDM",
    "name": "SIAM International Conference on Data Mining",
    "url": "https://www.siam.org/conferences-events/siam-conferences/sdm/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "ijcnn",
    "req": "Up to 6 pages, IEEE two-column.",
    "cats": [
      "ai"
    ],
    "abbr": "IJCNN",
    "name": "International Joint Conference on Neural Networks",
    "url": "https://ijcnn.org/2027",
    "when": "14–18 Jun 2027",
    "place": "Cape Town, South Africa",
    "deadline": "2027-01-31",
    "notify": "2027-03-15",
    "tz": "AoE"
  },
  {
    "id": "icann",
    "cats": [
      "ai"
    ],
    "abbr": "ICANN",
    "name": "International Conference on Artificial Neural Networks",
    "url": "https://e-nns.org/icann2027/",
    "when": "24–27 Aug 2027",
    "place": "Linköping, Sweden",
    "deadline": null,
    "notify": null,
    "note": "Dates are set. Deadline is TBD."
  },
  {
    "id": "aies",
    "cats": [
      "ai"
    ],
    "abbr": "AIES",
    "name": "AAAI/ACM Conference on AI, Ethics, and Society",
    "url": "https://www.aies-conference.com/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "iros",
    "cats": [
      "ai"
    ],
    "abbr": "IROS",
    "name": "International Conference on Intelligent Robots and Systems",
    "url": "https://2027.ieee-iros.org/",
    "when": "27 Sep – 1 Oct 2027",
    "place": "Florence, Italy",
    "deadline": "2027-03-01",
    "notify": null,
    "note": "1 Mar is listed. Clock time is not."
  },
  {
    "id": "corl",
    "cats": [
      "ai"
    ],
    "abbr": "CoRL",
    "name": "Conference on Robot Learning",
    "url": "https://www.corl.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "iccv",
    "cats": [
      "cv"
    ],
    "abbr": "ICCV",
    "name": "International Conference on Computer Vision",
    "url": "https://iccv.thecvf.com/Conferences/2027",
    "when": "5–7 Oct 2027",
    "place": "Hong Kong, China",
    "deadline": null,
    "notify": null,
    "note": "Odd-year meeting. Deadline is TBD."
  },
  {
    "id": "eccv",
    "cats": [
      "cv"
    ],
    "abbr": "ECCV",
    "name": "European Conference on Computer Vision",
    "url": "https://eccv.ecva.net/",
    "when": null,
    "place": null,
    "skip": true,
    "note": "Even years only. Next meeting is ECCV 2028."
  },
  {
    "id": "bmvc",
    "cats": [
      "cv"
    ],
    "abbr": "BMVC",
    "name": "British Machine Vision Conference",
    "url": "https://bmva.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "accv",
    "cats": [
      "cv"
    ],
    "abbr": "ACCV",
    "name": "Asian Conference on Computer Vision",
    "url": "https://accv2026.org/",
    "when": null,
    "place": null,
    "skip": true,
    "note": "Even years only. Next meeting is expected in 2028."
  },
  {
    "id": "icpr",
    "cats": [
      "cv"
    ],
    "abbr": "ICPR",
    "name": "International Conference on Pattern Recognition",
    "url": "https://www.icpr2027.com/",
    "when": "4–6 and 14–15 Oct 2027",
    "place": "Online",
    "abstract": "2027-03-01",
    "deadline": "2027-03-08",
    "notify": "2027-06-14",
    "tz": "AoE",
    "tentative": true,
    "note": "All dates are tentative. 1 Mar is registration."
  },
  {
    "id": "icip",
    "cats": [
      "cv"
    ],
    "abbr": "ICIP",
    "name": "IEEE International Conference on Image Processing",
    "url": "https://2027.ieeeicip.org/",
    "when": "29 Nov – 3 Dec 2027",
    "place": "Singapore",
    "deadline": "2027-03-31",
    "rebuttal": "2027-07-07",
    "notify": "2027-08-06",
    "tz": "AoE"
  },
  {
    "id": "acmmm",
    "cats": [
      "cv"
    ],
    "abbr": "ACM MM",
    "name": "ACM International Conference on Multimedia",
    "url": "https://2027.acmmm.org/",
    "when": "8–12 Nov 2027",
    "place": "Hong Kong SAR, China",
    "deadline": null,
    "notify": null,
    "note": "Dates are set. Deadline is TBA."
  },
  {
    "id": "icmr",
    "cats": [
      "cv"
    ],
    "abbr": "ICMR",
    "name": "International Conference on Multimedia Retrieval",
    "url": "https://www.icmr2027.org/",
    "when": "7–10 Jun 2027",
    "place": "Singapore",
    "deadline": "2027-01-31",
    "notify": "2027-04-01",
    "tz": "AoE"
  },
  {
    "id": "icimcs",
    "cats": [
      "cv"
    ],
    "abbr": "ICIMCS",
    "name": "International Conference on Internet Multimedia Computing and Service",
    "url": "https://dblp.org/db/conf/icimcs/index.html",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null,
    "note": "No 2027 call found. Link goes to the DBLP index."
  },
  {
    "id": "scia",
    "cats": [
      "cv"
    ],
    "abbr": "SCIA",
    "name": "Scandinavian Conference on Image Analysis",
    "url": "https://ssba.org.se/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "iciap",
    "cats": [
      "cv"
    ],
    "abbr": "ICIAP",
    "name": "International Conference on Image Analysis and Processing",
    "url": "https://www.iciap.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "visapp",
    "cats": [
      "cv"
    ],
    "abbr": "VISAPP",
    "name": "International Conference on Computer Vision Theory and Applications",
    "url": "https://visapp.scitevents.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "vis",
    "cats": [
      "cv"
    ],
    "abbr": "VIS",
    "name": "IEEE Visualization Conference",
    "url": "https://ieeevis.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "miccai",
    "cats": [
      "cv"
    ],
    "abbr": "MICCAI",
    "name": "Medical Image Computing and Computer Assisted Intervention",
    "url": "https://conferences.miccai.org/2027/en/",
    "when": "26 Sep – 1 Oct 2027",
    "place": "Auckland, New Zealand",
    "deadline": null,
    "notify": null,
    "note": "Dates are set. Deadline is TBD."
  },
  {
    "id": "midl",
    "cats": [
      "cv"
    ],
    "abbr": "MIDL",
    "name": "Medical Imaging with Deep Learning",
    "url": "https://midl.io/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "acl",
    "req": "Long papers 8 pages; short papers 4 pages. Theme track can be either.",
    "cats": [
      "ai"
    ],
    "abbr": "ACL",
    "name": "Annual Meeting of the Association for Computational Linguistics",
    "url": "https://2027.aclweb.org/calls/main/",
    "when": "17–22 Aug 2027",
    "place": "Kyoto, Japan",
    "deadline": "2027-01-04",
    "notify": null,
    "tz": "AoE",
    "deadlineLabel": "ARR",
    "note": "Tutorials 17 Aug, workshops 18–19 Aug, main 20–22 Aug. Notification TBD."
  },
  {
    "id": "emnlp",
    "cats": [
      "ai"
    ],
    "abbr": "EMNLP",
    "name": "Empirical Methods in Natural Language Processing",
    "url": "https://www.aclweb.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "aacl",
    "cats": [
      "ai"
    ],
    "abbr": "AACL",
    "name": "Asia-Pacific Chapter of the ACL",
    "url": "https://www.aaclnet.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null,
    "note": "A 2027 meeting is not announced."
  },
  {
    "id": "colm",
    "cats": [
      "ai"
    ],
    "abbr": "COLM",
    "name": "Conference on Language Modeling",
    "url": "https://colmweb.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "lrec",
    "cats": [
      "ai"
    ],
    "abbr": "LREC",
    "name": "Language Resources and Evaluation Conference",
    "url": "https://lrec-conf.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "ijcnlp",
    "cats": [
      "ai"
    ],
    "abbr": "IJCNLP",
    "name": "International Joint Conference on Natural Language Processing",
    "url": "https://www.aaclnet.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null,
    "note": "A 2027 meeting is not announced."
  },
  {
    "id": "conll",
    "cats": [
      "ai"
    ],
    "abbr": "CoNLL",
    "name": "Conference on Computational Natural Language Learning",
    "url": "https://www.conll.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "inlg",
    "cats": [
      "ai"
    ],
    "abbr": "INLG",
    "name": "International Conference on Natural Language Generation",
    "url": "https://acl-siggen.github.io/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "sigdial",
    "cats": [
      "ai"
    ],
    "abbr": "SIGDIAL",
    "name": "Annual Meeting of the Special Interest Group on Discourse and Dialogue",
    "url": "https://www.sigdial.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "interspeech",
    "cats": [
      "ai"
    ],
    "abbr": "INTERSPEECH",
    "name": "Conference of the International Speech Communication Association",
    "url": "https://interspeech2027.org/",
    "when": "29 Aug – 2 Sep 2027",
    "place": "São Paulo, Brazil",
    "deadline": "2027-02-10",
    "rebuttal": "2027-04-20",
    "notify": "2027-06-03",
    "note": "Regular papers. Rebuttal window is about 13–20 Apr."
  },
  {
    "id": "starsem",
    "cats": [
      "ai"
    ],
    "abbr": "*SEM",
    "name": "Joint Conference on Lexical and Computational Semantics",
    "url": "https://starsem.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "aiide",
    "cats": [
      "game"
    ],
    "abbr": "AIIDE",
    "name": "Artificial Intelligence and Interactive Digital Entertainment",
    "url": "https://aiide.org/",
    "when": "8–12 Nov 2027",
    "place": "University of Calgary, Canada",
    "deadline": null,
    "notify": null,
    "note": "Dates and location are set. The call for papers is not out."
  },
  {
    "id": "cogames",
    "cats": [
      "game"
    ],
    "abbr": "CoG",
    "name": "IEEE Conference on Games",
    "url": "https://cog2027.u-aizu.ac.jp/",
    "when": "2–5 Aug 2027",
    "place": "University of Aizu, Aizuwakamatsu, Japan",
    "deadline": "2027-03-01",
    "notify": "2027-05-03",
    "tz": "AoE",
    "note": "Full papers. Proposals are due 5 Jan."
  },
  {
    "id": "fdg",
    "req": "Full papers usually up to 16 pages (desk reject over 24); abstract-only up to 2 pages. Also late-breaking, demos, and a doctoral consortium.",
    "cats": [
      "game"
    ],
    "abbr": "FDG",
    "name": "Foundations of Digital Games",
    "url": "http://www.fdg2027.org/authorinformation.html",
    "when": "21–24 Jun 2027",
    "place": "Melbourne, Australia",
    "abstract": "2027-01-04",
    "deadline": "2027-01-11",
    "notify": "2027-03-01",
    "tz": "AoE",
    "note": "4 Jan is metadata. Full papers are due 11 Jan."
  },
  {
    "id": "agi",
    "cats": [
      "ai"
    ],
    "abbr": "AGI",
    "name": "Artificial General Intelligence",
    "url": "https://agi-conference.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "icwsm",
    "req": "Full papers up to 11 pages, including references. Also posters, demos, datasets, and a social science and sociophysics track.",
    "cats": [
      "ai"
    ],
    "abbr": "ICWSM",
    "name": "International AAAI Conference on Web and Social Media",
    "url": "https://www.icwsm.org/2027/",
    "when": null,
    "place": "Edinburgh, Scotland",
    "deadline": "2027-01-15",
    "notify": null,
    "tz": "AoE",
    "deadlineLabel": "Round 3",
    "note": "Round 3. Conference dates are TBD."
  },
  {
    "id": "sigir",
    "cats": [
      "ai"
    ],
    "abbr": "SIGIR",
    "name": "Research and Development in Information Retrieval",
    "url": "https://sigir2027.org/",
    "when": "20–22 Jul 2027",
    "place": "San Jose, California, USA",
    "abstract": "2027-01-14",
    "deadline": "2027-01-21",
    "notify": "2027-04-05",
    "tz": "AoE"
  },
  {
    "id": "cikm",
    "cats": [
      "ai"
    ],
    "abbr": "CIKM",
    "name": "Conference on Information and Knowledge Management",
    "url": "https://www.cikm.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "cogsci",
    "req": "Research papers up to 6 pages, as talks or posters. You may publish only the abstract.",
    "cats": [
      "cog"
    ],
    "abbr": "CogSci",
    "name": "Annual Meeting of the Cognitive Science Society",
    "url": "https://cognitivesciencesociety.org/cogsci-2027/",
    "when": "28–31 Jul 2027",
    "place": "Euskalduna, Bilbao, Spain",
    "deadline": "2027-02-01",
    "notify": null,
    "notifyText": "Early Apr 2027",
    "note": "Deadline is midnight UTC−11. Camera-ready 7 May."
  },
  {
    "id": "ccn",
    "req": "8-page proceedings, or 2-page extended abstracts.",
    "cats": [
      "cog"
    ],
    "abbr": "CCN",
    "name": "Cognitive Computational Neuroscience",
    "url": "https://www.ccneuro.org/",
    "when": "26–29 Jul 2027",
    "place": "Edinburgh International Conference Centre, UK",
    "abstract": "2027-02-01",
    "deadline": "2027-02-04",
    "notify": null,
    "tz": "AoE",
    "note": "8-page proceedings. Extended abstracts are due 1 Apr. Notification is not listed yet."
  },
  {
    "id": "escop",
    "req": "Abstracts for regular talks, blitz talks, or posters. Also symposia.",
    "cats": [
      "cog"
    ],
    "abbr": "ESCoP",
    "name": "European Society for Cognitive Psychology Conference",
    "url": "https://escop2027.org/key-dates",
    "when": "30 Aug – 4 Sep 2027",
    "place": "Babeș-Bolyai University, Cluj-Napoca, Romania",
    "deadline": "2027-03-15",
    "notify": null,
    "notifyText": "8–15 Apr 2027",
    "abstractOnly": true,
    "note": "Talks, blitz talks, and posters. Abstracts only."
  },
  {
    "id": "vss",
    "cats": [
      "cog"
    ],
    "abbr": "VSS",
    "name": "Vision Sciences Society Annual Meeting",
    "url": "https://www.visionsciences.org/",
    "when": "21–25 May 2027",
    "place": "Hyatt Regency, Seattle, USA",
    "deadline": null,
    "notify": null,
    "abstractOnly": true,
    "note": "Abstracts only. The abstract deadline is in 2026."
  },
  {
    "id": "ecvp",
    "req": "Talks, posters, and symposia.",
    "cats": [
      "cog"
    ],
    "abbr": "ECVP",
    "name": "European Conference on Visual Perception",
    "url": "https://ecvp2027.dpg.unipd.it/",
    "when": "29 Aug – 2 Sep 2027",
    "place": "University of Padova, Italy",
    "deadline": "2027-04-06",
    "notify": "2027-05-26",
    "abstractOnly": true,
    "note": "Abstracts only. Symposium proposals are due 18 Jan."
  },
  {
    "id": "cosyne",
    "cats": [
      "cog"
    ],
    "abbr": "COSYNE",
    "name": "Computational and Systems Neuroscience",
    "url": "https://www.cosyne.org/",
    "when": "11–16 Mar 2027",
    "place": "Montréal, Canada",
    "deadline": null,
    "notify": null,
    "abstractOnly": true,
    "note": "Abstracts only. The abstract deadline was in 2026."
  },
  {
    "id": "cns",
    "cats": [
      "cog"
    ],
    "abbr": "CNS",
    "name": "Annual Computational Neuroscience Meeting",
    "url": "https://www.cnsorg.org/future-meetings",
    "when": "10–14 Jul 2027",
    "place": "Gran Canaria, Spain",
    "deadline": null,
    "notify": null,
    "note": "Dates and location are set. The submission deadline is not out."
  },
  {
    "id": "sfn",
    "cats": [
      "cog"
    ],
    "abbr": "SfN",
    "name": "Society for Neuroscience Annual Meeting",
    "url": "https://www.sfn.org/meetings/neuroscience-2027",
    "when": "23–27 Oct 2027",
    "place": "McCormick Place, Chicago, USA",
    "deadline": null,
    "notify": null,
    "abstractOnly": true,
    "note": "Abstracts only. The abstract deadline is not out."
  },
  {
    "id": "fens",
    "cats": [
      "cog"
    ],
    "abbr": "FENS",
    "name": "Forum of Neuroscience",
    "url": "https://www.fens.org/",
    "when": null,
    "place": null,
    "skip": true,
    "abstractOnly": true,
    "note": "Even years only. Next forum is expected in 2028."
  },
  {
    "id": "icon",
    "cats": [
      "cog"
    ],
    "abbr": "ICON",
    "name": "International Conference of Cognitive Neuroscience",
    "url": "https://www.icon-society.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null,
    "abstractOnly": true,
    "note": "Abstracts only."
  },
  {
    "id": "icmpc",
    "cats": [
      "cog"
    ],
    "abbr": "ICMPC",
    "name": "International Conference on Music Perception and Cognition",
    "url": "https://icmpc.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null,
    "abstractOnly": true,
    "note": "Often held with ESCOM."
  },
  {
    "id": "escom",
    "cats": [
      "cog"
    ],
    "abbr": "ESCOM",
    "name": "European Society for the Cognitive Sciences of Music Conference",
    "url": "https://www.escom.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null,
    "abstractOnly": true,
    "note": "Often held with ICMPC."
  },
  {
    "id": "sysmus",
    "cats": [
      "cog"
    ],
    "abbr": "SysMus",
    "name": "International Conference of Students of Systematic Musicology",
    "url": "https://sysmus.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null,
    "abstractOnly": true,
    "note": "Abstracts only."
  },
  {
    "id": "etra",
    "req": "Full papers and short papers. Page limits are not posted.",
    "cats": [
      "cog"
    ],
    "abbr": "ETRA",
    "name": "ACM Symposium on Eye Tracking Research & Applications",
    "url": "https://etra.acm.org/2027/cfp.html",
    "when": "7–10 Jun 2027",
    "place": "Pamplona, Spain",
    "abstract": "2027-02-04",
    "deadline": "2027-02-11",
    "notify": "2027-03-25",
    "tz": "AoE",
    "deadlineLabel": "Short papers",
    "note": "Full papers closed in 2026."
  },
  {
    "id": "icdl",
    "cats": [
      "cog"
    ],
    "abbr": "ICDL",
    "name": "IEEE International Conference on Development and Learning",
    "url": "https://icdl-epirob.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "sab",
    "cats": [
      "cog"
    ],
    "abbr": "SAB",
    "name": "International Conference on Simulation of Adaptive Behavior",
    "url": "https://www.sab2024.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "alife",
    "cats": [
      "cog"
    ],
    "abbr": "ALIFE",
    "name": "International Conference on Artificial Life",
    "url": "https://alife.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "iconip",
    "cats": [
      "cog"
    ],
    "abbr": "ICONIP",
    "name": "International Conference on Neural Information Processing",
    "url": "https://www.apnns.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "bics",
    "cats": [
      "cog"
    ],
    "abbr": "BICS",
    "name": "Brain Inspired Cognitive Systems",
    "url": "https://www.bicsconference.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "assc",
    "cats": [
      "cog"
    ],
    "abbr": "ASSC",
    "name": "Association for the Scientific Study of Consciousness Conference",
    "url": "https://theassc.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null,
    "abstractOnly": true,
    "note": "Abstracts only."
  },
  {
    "id": "siggraph",
    "req": "One technical-papers track. No page cap for journal papers; conference papers at most 9 pages, excluding references.",
    "cats": [
      "art"
    ],
    "abbr": "SIGGRAPH",
    "name": "ACM SIGGRAPH Conference",
    "url": "https://s2027.siggraph.org/",
    "when": "8–12 Aug 2027",
    "place": "Anaheim, California, USA",
    "abstract": "2027-01-21",
    "deadline": "2027-01-28",
    "notify": null,
    "note": "21 Jan submission form, 28 Jan paper. Notification not listed."
  },
  {
    "id": "siggraphasia",
    "cats": [
      "art"
    ],
    "abbr": "SIGGRAPH Asia",
    "name": "ACM SIGGRAPH Asia Conference",
    "url": "https://asia.siggraph.org/2026/about-the-event/siggraph-asia-2027/",
    "when": "30 Nov – 3 Dec 2027",
    "place": "Tokyo International Forum, Japan",
    "deadline": null,
    "notify": null,
    "note": "Tokyo is announced. Deadline is TBA."
  },
  {
    "id": "dis",
    "cats": [
      "art"
    ],
    "abbr": "DIS",
    "name": "Designing Interactive Systems",
    "url": "https://dis.acm.org/2027/",
    "when": "28 Jun – 2 Jul 2027",
    "place": "Stockholm, Sweden",
    "abstract": "2027-01-11",
    "deadline": "2027-01-18",
    "notify": null,
    "tz": "AoE"
  },
  {
    "id": "uist",
    "cats": [
      "art"
    ],
    "abbr": "UIST",
    "name": "User Interface Software and Technology",
    "url": "https://uist.acm.org/2027/",
    "when": "27–29 Oct 2027",
    "place": "VIECON, Vienna, Austria",
    "abstract": "2027-03-31",
    "deadline": "2027-04-07",
    "notify": null,
    "tz": "AoE"
  },
  {
    "id": "candc",
    "cats": [
      "art"
    ],
    "abbr": "C&C",
    "name": "Creativity and Cognition",
    "url": "https://cc.acm.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "iccc",
    "cats": [
      "art"
    ],
    "abbr": "ICCC",
    "name": "International Conference on Computational Creativity",
    "url": "https://computationalcreativity.net/iccc/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "imx",
    "cats": [
      "art"
    ],
    "abbr": "IMX",
    "name": "ACM International Conference on Interactive Media Experiences",
    "url": "https://imx.acm.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "icmi",
    "cats": [
      "art"
    ],
    "abbr": "ICMI",
    "name": "International Conference on Multimodal Interaction",
    "url": "https://icmi.acm.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "cscw",
    "req": "Rolling papers in PACM HCI. Length not posted.",
    "cats": [
      "art"
    ],
    "abbr": "CSCW",
    "name": "Computer-Supported Cooperative Work and Social Computing",
    "url": "https://cscw.acm.org/2027/",
    "when": "16–20 Oct 2027",
    "place": "Philadelphia, USA",
    "deadline": null,
    "notify": null,
    "note": "No fixed deadline. Papers accepted before the program is set are invited."
  },
  {
    "id": "ubicomp",
    "cats": [
      "art"
    ],
    "abbr": "UbiComp",
    "name": "Ubiquitous Computing",
    "url": "https://sigchi.org/events/ubicomp-2027/",
    "when": "3–7 Oct 2027",
    "place": "Seoul, South Korea",
    "deadline": null,
    "notify": null,
    "note": "Joint with ISWC. Many papers are accepted through IMWUT."
  },
  {
    "id": "mobilehci",
    "cats": [
      "art"
    ],
    "abbr": "MobileHCI",
    "name": "Human–Computer Interaction with Mobile Devices and Services",
    "url": "https://mobilehci.acm.org/2027/",
    "when": "20–23 Sep 2027",
    "place": "Limassol, Cyprus",
    "abstract": "2027-02-10",
    "deadline": "2027-02-17",
    "notify": "2027-06-17",
    "tz": "AoE"
  },
  {
    "id": "ismar",
    "cats": [
      "art"
    ],
    "abbr": "ISMAR",
    "name": "International Symposium on Mixed and Augmented Reality",
    "url": "https://www.ieeeismar.net/2027/",
    "when": null,
    "place": "Kobe, Japan",
    "deadline": null,
    "notify": null,
    "note": "Kobe is announced. Dates and deadline are TBD."
  },
  {
    "id": "nime",
    "cats": [
      "art"
    ],
    "abbr": "NIME",
    "name": "New Interfaces for Musical Expression",
    "url": "https://www.nime2027.org/",
    "when": "21–25 Jun 2027",
    "place": "Paris, France",
    "abstract": "2027-01-24",
    "deadline": "2027-01-31",
    "notify": null,
    "note": "Title and abstract 24 Jan, paper 31 Jan. Notification not listed."
  },
  {
    "id": "aimc",
    "cats": [
      "art"
    ],
    "abbr": "AIMC",
    "name": "AI Music Creativity",
    "url": "https://aimc2027.wordpress.com/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "icmc",
    "cats": [
      "art"
    ],
    "abbr": "ICMC",
    "name": "International Computer Music Conference",
    "url": "https://icmc2027.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "ismir",
    "cats": [
      "art"
    ],
    "abbr": "ISMIR",
    "name": "International Society for Music Information Retrieval Conference",
    "url": "https://ismir2027.ismir.net/",
    "when": "6–10 Sep 2027",
    "place": "Queen Mary University of London, UK",
    "abstract": "2027-03-09",
    "deadline": "2027-03-16",
    "notify": "2027-06-02",
    "tentative": true,
    "note": "The official site marks these dates as tentative."
  },
  {
    "id": "smc",
    "cats": [
      "art"
    ],
    "abbr": "SMC",
    "name": "Sound and Music Computing",
    "url": "https://smcnetwork.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "dafx",
    "cats": [
      "art"
    ],
    "abbr": "DAFx",
    "name": "Digital Audio Effects",
    "url": "https://www.dafx.de/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "icad",
    "cats": [
      "art"
    ],
    "abbr": "ICAD",
    "name": "International Conference on Auditory Display",
    "url": "https://icad.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "audiomostly",
    "cats": [
      "art"
    ],
    "abbr": "Audio Mostly",
    "name": "Conference on Interaction with Sound",
    "url": "https://audiomostly.com/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "moco",
    "cats": [
      "art"
    ],
    "abbr": "MOCO",
    "name": "International Conference on Movement and Computing",
    "url": "https://moco.movementcomputing.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "isea",
    "cats": [
      "art"
    ],
    "abbr": "ISEA",
    "name": "International Symposium on Electronic Art",
    "url": "https://www.isea-international.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "xcoax",
    "req": "Papers 3,000–6,000 words. Artworks and performances: 200-word abstract plus 700–2,000 words.",
    "cats": [
      "art"
    ],
    "abbr": "xCoAx",
    "name": "Computation, Communication, Aesthetics and X",
    "url": "https://xcoax.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "evalondon",
    "cats": [
      "art"
    ],
    "abbr": "EVA London",
    "name": "Electronic Visualisation and the Arts",
    "url": "https://www.eva-london.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "artech",
    "cats": [
      "art"
    ],
    "abbr": "ARTECH",
    "name": "International Conference on Digital Arts",
    "url": "https://www.artech-international.com/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "artsit",
    "cats": [
      "art"
    ],
    "abbr": "ArtsIT",
    "name": "Arts, Information, Interactivity and Digital Technologies",
    "url": "https://artsit.eai-conferences.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "drs",
    "cats": [
      "art"
    ],
    "abbr": "DRS",
    "name": "Design Research Society Conference",
    "url": "https://www.designresearchsociety.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "iasdr",
    "cats": [
      "art"
    ],
    "abbr": "IASDR",
    "name": "International Association of Societies of Design Research Conference",
    "url": "https://www.iasdr.net/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "visap",
    "cats": [
      "art"
    ],
    "abbr": "VISAP",
    "name": "IEEE VIS Arts Program",
    "url": "https://visap.net/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null,
    "note": "Held with IEEE VIS. The 2027 call is not out."
  }
];
