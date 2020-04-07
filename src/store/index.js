import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import imp_apps from "../assets/state_data/apps.json";
//import imp_data_apps from "../assets/state_data/data_apps__test_jacqueline.json";
import imp_data_apps from "../assets/state_data/data_apps__demo_muster.json";

import imp_chart_bdi from "../assets/chart_config/bdi.json";
import imp_chart_bscl from "../assets/chart_config/bscl.json";

export default new Vuex.Store({
  state: {
    bscl_chart: imp_chart_bscl,
    bdi_chart: imp_chart_bdi,
    apps: imp_apps,
    table_of_contents: [
      {
        title: "Dokumentation",
        subtitle: "Readme",
        id: "id_readme"
      },
      {
        title: "Allgemeine",
        subtitle: "Druckvorlagen (PDF)",
        id: "pdf_allgemeine_druckvorlagen"
      },
      {
        title: "Gesamtauswertung",
        subtitle: "Fallkonferenz (UNDER CONSTRUCTION!)",
        id: "pdf_gesamtauswertung"
      },
      {
        title: "Spezifische Applikationen",
        subtitle: "Druckvorlagen (PDF)",
        id: "pdf_apps_druckvorlagen"
      }
    ],
    current_app: {
      module: {
        hash: "bbf2d1624223093200dd4021c9f0d88155b978d9",
        calculations: [],
        readme: {
          text:
            "### Entwickler\r\nThis patient-app is currently HOTLOADED!\r\n\r\n\r\n\r\n",
          parents: [],
          html:
            "<h3>Entwickler</h3><p>This patient-app is currently HOTLOADED!</p>"
        },
        surveys: [],
        templates: [
          {
            height: 4,
            width: 6,
            name: "PDF"
          }
        ],
        identifier: "com.optinomic.apps.pdf.patient.allgemein",
        pdf_templates: [],
        data_source_queries: [],
        original_name: "Druckvorlagen (PDF)",
        dependencies: [],
        name: "Druckvorlagen (PDF)",
        events: [],
        version: "1.0",
        type: "patient",
        short_description: "(Patienten-)Druckvorlagen (PDF).",
        database_schema_name: "com_optinomic_apps_pdf_patient_allgemein",
        database_user_name: "com_optinomic_apps_pdf_patient_allgemein",
        description:
          "Allgemeine und spezifische Patienten-Druckvorlagen im PDF Format.\r\n\r\n\r\n",
        developer: {
          email: "beat@optinomic.com",
          phone: "+41 (0)44 508 26 76",
          first_name: "Beat",
          website: "https://www.optinomic.com/",
          company: "Optinomic Gmbh",
          last_name: "Ottiger",
          github_user: "ottigerb"
        }
      },
      module_activation: {
        data: {
          hash: "bbf2d1624223093200dd4021c9f0d88155b978d9",
          name_overwrite: null,
          overwritten: true,
          last_update: "2020-04-03T12:09:05Z",
          version: "1.0",
          module: "com.optinomic.apps.pdf.patient.allgemein"
        },
        id: 264
      },
      first_template: {
        found: true,
        name: "PDF"
      },
      identifier: "com.optinomic.apps.pdf.patient.allgemein"
    },
    user: {
      id: 2,
      date: "2020-04-03T12:09:08.509Z",
      data: {
        email: "beat@optinomic.com",
        phone: "+41 (0)44 508 26 76",
        first_name: "Beat",
        locked: false,
        birthday: "1973-05-21T00:00:00Z",
        role: "Admin",
        gender: "male",
        ou: "3038",
        last_name: "Ottiger",
        initials: "BO",
        title: null,
        cis_uid: 121,
        description: "Administrator",
        id: 2,
        uid: 2,
        isAdmin: true
      }
    },
    patient: {
      date: "2020-04-03T12:09:08.148Z",
      data: {
        address2: null,
        cis_lead_doctor: null,
        email: "noemail@cis.imported",
        deceased: false,
        first_name: "Dominique",
        four_letter_code: "MEUE",
        stay_id: null,
        country: "CH",
        phone_mobile: null,
        phone_home: null,
        gender: "male",
        city: "Olten",
        ahv: "756.5170.2886.63",
        lead_therapist: null,
        address1: "Aarburgerstrasse 96",
        last_name: "Breitenmoser",
        language: "de",
        birth_name: null,
        title: "Herrn",
        notes: "",
        cis_pid: 13012,
        zip_code: "4600",
        birthdate: "1968-10-22T00:00:00Z",
        id: 3868,
        pid: 3868,
        extras: {
          age: 51,
          birthday: "22.10.1968",
          birthday_age: "22.10.1968 | 51",
          name: "Breitenmoser Dominique",
          birth_year: 1968,
          secure: "Br. D. (1968)",
          ansprache: "Herr",
          anrede: "Herr Breitenmoser",
          full_name: "Herr Breitenmoser Dominique (22.10.1968 | 51)",
          full_address: "Aarburgerstrasse 96, 4600 Olten",
          phone: "",
          infoline: "Aarburgerstrasse 96, 4600 Olten",
          color_main: "#3F51B5",
          color_accent: "#E91E63"
        }
      }
    },
    stays: {
      all: [
        {
          data: {
            photo: "",
            cis_lead_doctor: null,
            status: "",
            phase: "complete",
            frozen: true,
            first_contact: null,
            lead_therapist_id: 66,
            start: "2018-11-20T12:45:00Z",
            stop_status: null,
            insurance_number: "",
            patient_id: 3868,
            insurance_provider: "PTS",
            cis_fid: 1301203,
            stop: "2019-02-12T12:30:00Z",
            deputy_lead_therapist_id: null,
            notes: "",
            service_provider: "",
            class: "S",
            lead_therapist_id_overwrite: null,
            extras: {
              in_stay: false,
              duration: 84,
              phase_de: "Die Behandlung wurde vor mehr als 14 Tage beendet",
              phase_en: "the stay ended more than 14 days ago",
              beginn: "20.11.2018",
              from_to: "20.11.2018 - 12.2.2019",
              ende: "12.2.2019"
            },
            id: 5992,
            fid: 5992
          },
          id: 5992
        },
        {
          data: {
            photo: "",
            cis_lead_doctor: null,
            status: "",
            phase: "complete",
            frozen: true,
            first_contact: null,
            lead_therapist_id: 66,
            start: "2018-11-20T07:00:00Z",
            stop_status: null,
            insurance_number: "",
            patient_id: 3868,
            insurance_provider: "",
            cis_fid: 130120300,
            stop: "2019-02-12T19:00:00Z",
            deputy_lead_therapist_id: null,
            notes: "",
            service_provider: "",
            class: "S3",
            lead_therapist_id_overwrite: null,
            extras: {
              in_stay: false,
              duration: 85,
              phase_de: "Die Behandlung wurde vor mehr als 14 Tage beendet",
              phase_en: "the stay ended more than 14 days ago",
              beginn: "20.11.2018",
              from_to: "20.11.2018 - 12.2.2019",
              ende: "12.2.2019"
            },
            id: 6721,
            fid: 6721
          },
          id: 6721
        },
        {
          data: {
            photo: "",
            cis_lead_doctor: null,
            status: "",
            phase: "complete",
            frozen: true,
            first_contact: null,
            lead_therapist_id: 66,
            start: "2018-06-11T10:15:00Z",
            stop_status: null,
            insurance_number: "",
            patient_id: 3868,
            insurance_provider: "QUEA",
            cis_fid: 1301202,
            stop: "2018-07-14T10:00:00Z",
            deputy_lead_therapist_id: null,
            notes: "",
            service_provider: "",
            class: "S",
            lead_therapist_id_overwrite: null,
            extras: {
              in_stay: false,
              duration: 33,
              phase_de: "Die Behandlung wurde vor mehr als 14 Tage beendet",
              phase_en: "the stay ended more than 14 days ago",
              beginn: "11.6.2018",
              from_to: "11.6.2018 - 14.7.2018",
              ende: "14.7.2018"
            },
            id: 5727,
            fid: 5727
          },
          id: 5727
        }
      ],
      current: {
        id: 5992,
        data: {
          photo: "",
          cis_lead_doctor: null,
          status: "",
          phase: "complete",
          frozen: true,
          first_contact: null,
          lead_therapist_id: 66,
          start: "2018-11-20T12:45:00Z",
          stop_status: null,
          insurance_number: "",
          patient_id: 3868,
          insurance_provider: "PTS",
          cis_fid: 1301203,
          stop: "2019-02-12T12:30:00Z",
          deputy_lead_therapist_id: null,
          notes: "",
          service_provider: "",
          class: "S",
          lead_therapist_id_overwrite: null,
          extras: {
            in_stay: false,
            duration: 84,
            phase_de: "Die Behandlung wurde vor mehr als 14 Tage beendet",
            phase_en: "the stay ended more than 14 days ago",
            beginn: "20.11.2018",
            from_to: "20.11.2018 - 12.2.2019",
            ende: "12.2.2019"
          },
          id: 5992,
          fid: 5992
        },
        found: true
      }
    },
    clinic: {
      date: "2020-04-03T12:09:08.156Z",
      data: {
        admin_email: "Nora.Schoenenberger@suedhang.ch",
        admin_name: "Nora Schoenenberger",
        admin_phone: "+41 (0)31 828 14 14",
        clinic_address: "Südhang 1, CH-3038 Kirchlindach",
        clinic_email: "info@suedhang.ch",
        clinic_logo:
          "http://suedhang.ch/images/content/Logo_Suedhang_Retina.png",
        clinic_name: "Klinik Südhang",
        clinic_phone: "+41 (0)31 828 14 14",
        clinic_slogan: "Kompetenzzentrum für Mensch und Sucht",
        clinic_www: "http://suedhang.ch/de/",
        array: [
          ["admin_email", "Nora.Schoenenberger@suedhang.ch"],
          ["admin_name", "Nora Schoenenberger"],
          ["admin_phone", "+41 (0)31 828 14 14"],
          ["clinic_address", "Südhang 1, CH-3038 Kirchlindach"],
          ["clinic_email", "info@suedhang.ch"],
          [
            "clinic_logo",
            "http://suedhang.ch/images/content/Logo_Suedhang_Retina.png"
          ],
          ["clinic_name", "Klinik Südhang"],
          ["clinic_phone", "+41 (0)31 828 14 14"],
          ["clinic_slogan", "Kompetenzzentrum für Mensch und Sucht"],
          ["clinic_www", "http://suedhang.ch/de/"]
        ]
      }
    },
    data_apps: imp_data_apps
  },
  mutations: {},
  actions: {},
  modules: {}
});
