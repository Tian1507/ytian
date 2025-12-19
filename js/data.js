// ============ PATH CONFIG ============
// If your current HTML uses "../wavs/...", keep "../wavs".
// If index.html is in project root and wavs is also in root, use "./wavs".
const BASE_PATH = "./wavs";

// Methods (columns) - keep consistent across all sections
const METHODS = [
  { key: "Narrowband", label: "Narrowband" },
  { key: "Wideband",  label: "Wideband"  },
  { key: "DMSBWE(Explicit)",  label: "DMSBWE(Explicit)"      },
  { key: "DMSBWE(Implicit)",  label: "DMSBWE(Implicit)"  },
  { key: "DMSBWE(Absent)",   label: "DMSBWE(Absent)DMSBWE(Absent)"   },
  { key: "UDM+", label: "UDM+" },
  { key: "NVSR",      label: "NVSR"      },
  { key: "AP-BWE",    label: "AP-BWE"    },
];

// Sections + sample keys (file stem without extension)
const SECTIONS = [
  {
    id: "4kto48k",
    title: "I. 4 kHz to 48 kHz",
    dir: "4kto48k",
    samples: ["07me_trim_023_xaud", "34fe_trim_009_xaud", "35fs_trim_005_xaud", "49fe_trim_023_xaud", "66fs_trim_005_xaud"],
  },
  {
    id: "8kto48k",
    title: "II. 8 kHz to 48 kHz",
    dir: "8kto48k",
    samples: ["04me_trim_022_xaud", "11fe_trim_023_xaud", "14fe_trim_018_xaud", "15fe_trim_023_xaud", "26fs_trim_015_xaud"],
  },
  {
    id: "12kto48k",
    title: "III. 12 kHz to 48 kHz",
    dir: "12kto48k",
    samples: ["06fe_trim_026_xaud", "09fe_trim_011_xaud", "14fe_trim_012_xaud", "32fe_trim_008_xaud", "67fe_trim_011_xaud"],
  },
];
