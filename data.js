const META = {
  "updated": "2026-11-26",
  "categories": [
    { "id": "all", "label": "All", "title": "All conferences" },
    { "id": "ai", "label": "AI", "title": "AI & Machine Learning" },
    { "id": "cv", "label": "Vision", "title": "Vision & Multimedia" },
    { "id": "nlp", "label": "Language", "title": "Language & Agents" },
    { "id": "cog", "label": "Cognition", "title": "Cognition & Neuroscience" },
    { "id": "art", "label": "Interaction", "title": "Creativity & Interaction" }
  ]
};

const CONFS = [
  {
    "id": "aaai",
    "cats": [
      "ai"
    ],
    "abbr": "AAAI",
    "name": "AAAI Conference on Artificial Intelligence",
    "url": "https://aaai.org/conference/aaai/aaai-27/",
    "when": "16–23 Feb 2027",
    "place": "Montréal, Canada",
    "abstract": "2026-07-21",
    "deadline": "2026-07-28",
    "notify": "2026-11-30",
    "tz": "AoE",
    "note": "Main track. Palais des congrès de Montréal."
  },
  {
    "id": "ijcai",
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
    "id": "iclr",
    "cats": [
      "ai"
    ],
    "abbr": "ICLR",
    "name": "International Conference on Learning Representations",
    "url": "https://iclr.cc/Conferences/2027",
    "when": "26–30 Apr 2027",
    "place": "California, USA (venue TBA)",
    "abstract": "2026-09-18",
    "deadline": "2026-09-25",
    "notify": "2026-12-16",
    "tz": "AoE",
    "note": "Main conference 26–28 Apr, workshops 29–30 Apr. Venue TBA."
  },
  {
    "id": "aistats",
    "cats": [
      "ai"
    ],
    "abbr": "AISTATS",
    "name": "Artificial Intelligence and Statistics",
    "url": "https://virtual.aistats.org/Conferences/2027",
    "when": "3–6 May 2027",
    "place": "Montréal, Canada",
    "abstract": "2026-09-29",
    "deadline": "2026-10-06",
    "rebuttal": "2026-11-22",
    "notify": "2027-01-20",
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
    "note": "Cycle 1 is closed. Cycle 2 is expected in Feb 2027; the date is not out."
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
    "id": "icassp",
    "cats": [
      "ai"
    ],
    "abbr": "ICASSP",
    "name": "International Conference on Acoustics, Speech and Signal Processing",
    "url": "https://2027.ieeeicassp.org/",
    "when": "16–21 May 2027",
    "place": "Toronto, Canada",
    "deadline": "2026-09-23",
    "notify": "2027-01-13",
    "tz": "AoE",
    "note": "Deadline taken from CCF Deadlines. Another listing said 16 Sep."
  },
  {
    "id": "facct",
    "cats": [
      "ai"
    ],
    "abbr": "FAccT",
    "name": "ACM Conference on Fairness, Accountability, and Transparency",
    "url": "https://facctconference.org/2027/cfp.html",
    "when": "21–24 Jun 2027",
    "place": null,
    "abstract": "2026-10-27",
    "deadline": "2026-11-03",
    "notify": "2027-03-23",
    "tz": "AoE",
    "note": "First decision 22 Dec 2026. Revisions due 28 Jan 2027. City not listed."
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
    "id": "satml",
    "cats": [
      "ai"
    ],
    "abbr": "SaTML",
    "name": "IEEE Conference on Secure and Trustworthy Machine Learning",
    "url": "https://satml.org/",
    "when": "4–6 May 2027",
    "place": "Reykjavik, Iceland",
    "abstract": "2026-09-22",
    "deadline": "2026-09-29",
    "rebuttal": "2026-12-09",
    "notify": "2027-02-01",
    "tz": "AoE"
  },
  {
    "id": "aamas",
    "cats": [
      "ai",
      "nlp"
    ],
    "abbr": "AAMAS",
    "name": "International Conference on Autonomous Agents and Multiagent Systems",
    "url": "https://warwick.ac.uk/fac/sci/dcs/aamas2027/",
    "when": "3–7 May 2027",
    "place": "JW Marriott Hotel, Hanoi, Vietnam",
    "abstract": "2026-10-01",
    "deadline": "2026-10-08",
    "rebuttal": "2026-11-24",
    "notify": "2026-12-21",
    "tz": "AoE",
    "note": "Main track. AAAI fast track deadline 11 Dec 2026, notice 1 Feb 2027."
  },
  {
    "id": "icra",
    "cats": [
      "ai"
    ],
    "abbr": "ICRA",
    "name": "International Conference on Robotics and Automation",
    "url": "https://2027.ieee-icra.org/",
    "when": "24–28 May 2027",
    "place": "COEX, Seoul, South Korea",
    "deadline": "2026-09-16",
    "notify": "2027-02-01",
    "tz": "UTC−8",
    "deadlineLabel": "Extended",
    "note": "Extended deadline. Time zone is UTC−8, not AoE."
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
    "id": "rss",
    "cats": [
      "ai"
    ],
    "abbr": "RSS",
    "name": "Robotics: Science and Systems",
    "url": "https://roboticsconference.org/",
    "when": "6–11 Jul 2027",
    "place": "Athens, Greece",
    "deadline": "2026-12-04",
    "rebuttal": "2027-02-12",
    "notify": "2027-04-30",
    "tz": "AoE",
    "deadlineLabel": "Stage 1 abstract",
    "note": "Stage 1 is a 6-page extended abstract."
  },
  {
    "id": "cvpr",
    "cats": [
      "cv"
    ],
    "abbr": "CVPR",
    "name": "Conference on Computer Vision and Pattern Recognition",
    "url": "https://cvpr.thecvf.com/Conferences/2027",
    "when": "20–21 Jun workshops, 22–24 Jun main 2027",
    "place": "Seattle, WA, USA",
    "abstract": "2026-11-10",
    "deadline": "2026-11-16",
    "rebuttal": "2027-02-01",
    "notify": "2027-02-25",
    "tz": "AoE",
    "note": "Deadlines will not be extended. Supplementary material 23 Nov."
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
    "id": "wacv",
    "cats": [
      "cv"
    ],
    "abbr": "WACV",
    "name": "Winter Conference on Applications of Computer Vision",
    "url": "https://wacv.thecvf.com/",
    "when": "6–8 Jan 2027",
    "place": "Disney Springs, Buena Vista, FL, USA",
    "deadline": "2026-08-28",
    "notify": "2026-10-14",
    "tz": "AoE",
    "deadlineLabel": "Round 2",
    "note": "Round 1 paper deadline was 26 Jun 2026."
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
    "id": "icme",
    "cats": [
      "cv"
    ],
    "abbr": "ICME",
    "name": "IEEE International Conference on Multimedia and Expo",
    "url": "https://2027.ieeeicme.org/",
    "when": "13–17 Jul 2027",
    "place": "Xiamen, China",
    "deadline": "2026-12-30",
    "rebuttal": "2027-03-04",
    "notify": "2027-03-24",
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
    "id": "mmm",
    "cats": [
      "cv"
    ],
    "abbr": "MMM",
    "name": "International Conference on Multimedia Modeling",
    "url": "https://www.mmm2027.net/",
    "when": "5–8 Jan 2027",
    "place": "Siem Reap, Cambodia",
    "deadline": "2026-08-30",
    "notify": "2026-10-19",
    "tz": "AoE",
    "deadlineLabel": "Extended"
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
    "id": "fg",
    "cats": [
      "cv"
    ],
    "abbr": "FG",
    "name": "International Conference on Automatic Face and Gesture Recognition",
    "url": "https://fg2027.ieee-biometrics.org/",
    "when": "27–29 Apr 2027",
    "place": "Marrakesh, Morocco",
    "abstract": "2026-10-23",
    "deadline": "2026-10-30",
    "notify": "2026-12-20",
    "tz": "AoE"
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
    "id": "3dv",
    "cats": [
      "cv"
    ],
    "abbr": "3DV",
    "name": "International Conference on 3D Vision",
    "url": "https://3dvconf.github.io/2027/",
    "when": "6–9 Apr 2027",
    "place": "Thessaloniki Concert Hall, Greece",
    "abstract": "2026-08-28",
    "deadline": "2026-08-28",
    "notify": "2026-12-02",
    "tz": "AoE"
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
    "cats": [
      "nlp"
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
      "nlp"
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
    "id": "naacl",
    "cats": [
      "nlp"
    ],
    "abbr": "NAACL",
    "name": "North American Chapter of the ACL",
    "url": "https://2027.naacl.org/",
    "when": "1–5 Jun 2027",
    "place": "San Francisco, California, USA",
    "deadline": "2026-12-23",
    "notify": "2027-02-10",
    "tz": "AoE",
    "deadlineLabel": "Commitment",
    "extras": [
      {
        "date": "2026-11-30",
        "label": "ARR rebuttal"
      }
    ],
    "note": "ARR papers closed 12 Oct 2026. This date is the commitment deadline."
  },
  {
    "id": "eacl",
    "cats": [
      "nlp"
    ],
    "abbr": "EACL",
    "name": "European Chapter of the ACL",
    "url": "https://2027.eacl.org/",
    "when": "9–14 Mar 2027",
    "place": "Athens, Greece",
    "deadline": "2026-10-11",
    "notify": "2026-11-12",
    "tz": "AoE",
    "deadlineLabel": "Commitment",
    "note": "ARR closed 3 Aug 2026. This date is the commitment deadline."
  },
  {
    "id": "aacl",
    "cats": [
      "nlp"
    ],
    "abbr": "AACL",
    "name": "Asia-Pacific Chapter of the ACL",
    "url": "https://www.aaclnet.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null,
    "note": "2026 was joint with IJCNLP. A 2027 meeting is not announced."
  },
  {
    "id": "coling",
    "cats": [
      "nlp"
    ],
    "abbr": "COLING",
    "name": "International Conference on Computational Linguistics",
    "url": "https://2027.coling-iccl.org/",
    "when": "6–7 May online, 9–14 May on site, 2027",
    "place": "Macau SAR, China / Online",
    "deadline": "2026-12-23",
    "notify": "2027-02-10",
    "tz": "AoE",
    "deadlineLabel": "Commitment",
    "extras": [
      {
        "date": "2026-11-30",
        "label": "Round 1 rebuttal"
      }
    ],
    "note": "ARR papers closed 12 Oct 2026. This date is the long-paper commitment."
  },
  {
    "id": "colm",
    "cats": [
      "nlp"
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
      "nlp"
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
      "nlp"
    ],
    "abbr": "IJCNLP",
    "name": "International Joint Conference on Natural Language Processing",
    "url": "https://www.aaclnet.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null,
    "note": "2026 was joint with AACL. 2027 is not announced."
  },
  {
    "id": "conll",
    "cats": [
      "nlp"
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
      "nlp"
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
      "nlp"
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
      "nlp"
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
      "nlp"
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
      "nlp"
    ],
    "abbr": "AIIDE",
    "name": "Artificial Intelligence and Interactive Digital Entertainment",
    "url": "https://aiide.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "cogames",
    "cats": [
      "nlp"
    ],
    "abbr": "CoG",
    "name": "IEEE Conference on Games",
    "url": "https://ieee-cog.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "fdg",
    "cats": [
      "nlp"
    ],
    "abbr": "FDG",
    "name": "Foundations of Digital Games",
    "url": "https://foundationofdigitalgames.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "agi",
    "cats": [
      "nlp"
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
    "cats": [
      "nlp"
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
    "note": "Rounds 1 and 2 are closed. Conference dates are TBD."
  },
  {
    "id": "www",
    "cats": [
      "nlp"
    ],
    "abbr": "WWW",
    "name": "The Web Conference",
    "url": "https://www2027.thewebconf.org/",
    "when": "10–14 May 2027",
    "place": "Dublin, Ireland",
    "abstract": "2026-10-18",
    "deadline": "2026-10-25",
    "rebuttal": "2026-12-20",
    "notify": "2027-01-04",
    "tz": "AoE"
  },
  {
    "id": "sigir",
    "cats": [
      "nlp"
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
    "id": "ecir",
    "cats": [
      "nlp"
    ],
    "abbr": "ECIR",
    "name": "European Conference on Information Retrieval",
    "url": "https://www.ecir2027.co.uk/",
    "when": "22–24 Mar 2027",
    "place": "Southampton, UK",
    "abstract": "2026-09-22",
    "deadline": "2026-10-06",
    "notify": "2026-12-08",
    "note": "Main track. Other tracks use different dates. Times are UTC."
  },
  {
    "id": "wsdm",
    "cats": [
      "nlp"
    ],
    "abbr": "WSDM",
    "name": "Web Search and Data Mining",
    "url": "https://www.wsdm-conference.org/2027/",
    "when": "16–18 Feb 2027",
    "place": "Cordis, Hong Kong SAR, China",
    "deadline": "2026-11-17",
    "notify": "2026-12-18",
    "tz": "AoE",
    "deadlineLabel": "Short paper",
    "note": "Full papers closed 24 Aug 2026. This row is the short-paper track."
  },
  {
    "id": "cikm",
    "cats": [
      "nlp"
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
    "note": "Window opens 20 Nov 2026. Deadline is midnight UTC−11. Camera-ready 7 May."
  },
  {
    "id": "ccn",
    "cats": [
      "cog"
    ],
    "abbr": "CCN",
    "name": "Cognitive Computational Neuroscience",
    "url": "https://www.ccneuro.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
  },
  {
    "id": "esann",
    "cats": [
      "cog"
    ],
    "abbr": "ESANN",
    "name": "European Symposium on Artificial Neural Networks, Computational Intelligence and Machine Learning",
    "url": "https://www.esann.org/",
    "when": "21–23 Apr 2027",
    "place": "Bruges, Belgium / Online",
    "deadline": "2026-11-26",
    "notify": "2027-01-23",
    "note": "Confirm the clock time on the official site."
  },
  {
    "id": "escop",
    "cats": [
      "cog"
    ],
    "abbr": "ESCoP",
    "name": "European Society for Cognitive Psychology Conference",
    "url": "https://www.escop.eu/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null,
    "abstractOnly": true,
    "note": "Abstracts only."
  },
  {
    "id": "vss",
    "cats": [
      "cog"
    ],
    "abbr": "VSS",
    "name": "Vision Sciences Society Annual Meeting",
    "url": "https://www.visionsciences.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null,
    "abstractOnly": true,
    "note": "Abstracts only."
  },
  {
    "id": "ecvp",
    "cats": [
      "cog"
    ],
    "abbr": "ECVP",
    "name": "European Conference on Visual Perception",
    "url": "https://ecvp.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null,
    "abstractOnly": true,
    "note": "Abstracts only."
  },
  {
    "id": "cosyne",
    "cats": [
      "cog"
    ],
    "abbr": "COSYNE",
    "name": "Computational and Systems Neuroscience",
    "url": "https://www.cosyne.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null,
    "abstractOnly": true,
    "note": "The short name is COSYNE, not CVSS. Abstracts only."
  },
  {
    "id": "cns",
    "cats": [
      "cog"
    ],
    "abbr": "CNS",
    "name": "Annual Computational Neuroscience Meeting",
    "url": "https://www.cnsorg.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null,
    "abstractOnly": true,
    "note": "Abstracts only."
  },
  {
    "id": "sfn",
    "cats": [
      "cog"
    ],
    "abbr": "SfN",
    "name": "Society for Neuroscience Annual Meeting",
    "url": "https://www.sfn.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null,
    "abstractOnly": true,
    "note": "Abstracts only."
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
    "cats": [
      "cog"
    ],
    "abbr": "ETRA",
    "name": "ACM Symposium on Eye Tracking Research & Applications",
    "url": "https://etra.acm.org/",
    "when": null,
    "place": null,
    "deadline": null,
    "notify": null
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
    "id": "eurographics",
    "cats": [
      "art"
    ],
    "abbr": "Eurographics",
    "name": "Annual Conference of the European Association for Computer Graphics",
    "url": "https://eg2027.isti.cnr.it/",
    "when": "10–14 May 2027",
    "place": "IMT Campus, Lucca, Italy",
    "abstract": "2026-09-26",
    "deadline": "2026-10-02",
    "rebuttal": "2026-12-01",
    "notify": "2027-02-10",
    "note": "Times are UTC, not AoE."
  },
  {
    "id": "chi",
    "cats": [
      "art"
    ],
    "abbr": "CHI",
    "name": "Conference on Human Factors in Computing Systems",
    "url": "https://chi2027.acm.org/",
    "when": "10–14 May 2027",
    "place": "David L. Lawrence Convention Center, Pittsburgh, USA",
    "deadline": "2026-09-10",
    "rebuttal": "2026-12-03",
    "notify": "2026-12-17",
    "tz": "AoE",
    "note": "No separate abstract deadline."
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
    "id": "iui",
    "cats": [
      "art"
    ],
    "abbr": "IUI",
    "name": "Intelligent User Interfaces",
    "url": "https://iui.hosting.acm.org/2027/",
    "when": "8–11 Feb 2027",
    "place": "Helsinki, Finland",
    "abstract": "2026-08-13",
    "deadline": "2026-08-20",
    "rebuttal": "2026-11-05",
    "notify": "2026-11-23",
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
    "id": "tei",
    "cats": [
      "art"
    ],
    "abbr": "TEI",
    "name": "Tangible, Embedded and Embodied Interaction",
    "url": "https://tei.acm.org/2027/",
    "when": "24–27 Jan 2027",
    "place": "Centro Cultural de Belém, Lisbon, Portugal",
    "deadline": "2026-08-06",
    "notify": "2026-11-13",
    "tz": "AoE",
    "note": "Conditional acceptance 22 Oct. Final notice 13 Nov."
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
    "id": "hri",
    "cats": [
      "art"
    ],
    "abbr": "HRI",
    "name": "ACM/IEEE International Conference on Human-Robot Interaction",
    "url": "https://humanrobotinteraction.org/2027/",
    "when": "8–12 Mar 2027",
    "place": "Santa Clara, CA, USA",
    "abstract": "2026-09-11",
    "deadline": "2026-09-18",
    "notify": "2026-11-30",
    "tz": "AoE",
    "note": "Full papers. Short papers closed 1 Oct, notice 2 Dec."
  },
  {
    "id": "ieeevr",
    "cats": [
      "art"
    ],
    "abbr": "IEEE VR",
    "name": "IEEE Conference on Virtual Reality and 3D User Interfaces",
    "url": "https://ieeevr.org/2027/",
    "when": "27 Feb – 3 Mar 2027",
    "place": "Melbourne, Australia",
    "abstract": "2026-08-24",
    "deadline": "2026-08-31",
    "notify": "2027-01-07",
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
    "id": "evomusart",
    "cats": [
      "art"
    ],
    "abbr": "EvoMUSART",
    "name": "International Conference on Artificial Intelligence in Music, Sound, Art and Design",
    "url": "https://www.evostar.org/2027/",
    "when": "31 Mar – 2 Apr 2027",
    "place": "Mainz, Germany",
    "deadline": "2026-11-16",
    "notify": "2027-01-10",
    "deadlineLabel": "Extended",
    "note": "Part of EvoStar. Deadline extended from 1 Nov to 16 Nov."
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
