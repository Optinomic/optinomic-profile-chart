import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    "bscl_chart": {
      "options": {
          "min": -2,
          "max": 14,
          "item_height": 58,
          "item_text_left": 100,
          "item_text_right": 370,
          "color_grid": "#9E9E9E",
          "color_clinic_sample": "#888888",
          "color_skin": "grey_dark_to_light",
          "show_baseline": false,
          "show_ranges_overview": false,
          "show_scale_text": true,
          "show_score_vertical_line": false,
          "show_score_profile_line": false,
          "show_score_circles": true,
          "show_settings_block": false,
          "show_range_text": true,
          "allow_toggle_settings_block": true,
          "topnumber_hide_first_last": false,
          "range_alpha": 0.09,
          "vertical_grid_every_x": 2,
          "response_title_path": "calculation.scores_calculation.info.mz.mz_typ",
          "response_date_path": "calculation.scores_calculation.info.mz.mz_date",
          "norm_sample": "Gesunde Normstichprobe (N=300)",
          "dropout": "calculation.scores_calculation.info.mz.dropout",
          "dropout_reason": "calculation.scores_calculation.info.mz.dropout_reason"
      },
      "scales": [{
          "left_title": "Somatisierung",
          "left_text": "",
          "right_title": "",
          "right_text": "Kopfschmerzen, Herzbeschwerden, Atemprobleme, Magenbeschwerden, Muskelschmerzen, Schwächegefühl, Schweregefühl, Unwohlsein usw.",
          "m_norm": [0.23, 0.32],
          "sd_norm": [0.31, 0.33],
          "score_path": "calculation.scores_calculation.all_results.somatisierung_z_score",
          "clinic_sample_var": "somatisierung_z_score",
          "items": 7
      }, {
          "left_title": "Zwanghaftigkeit",
          "left_text": "",
          "right_title": "",
          "right_text": "Gedanken, Impulse und Handlungen, die konstant vorhanden und nicht änderbar und ich-fremd oder ungewollt erlebt werden, Kognitive Leistungsstörungen.",
          "m_norm": [0.50, 0.54],
          "sd_norm": [0.46, 0.43],
          "score_path": "calculation.scores_calculation.all_results.zwanghaftigkeit_z_score",
          "clinic_sample_var": "zwanghaftigkeit_z_score",
          "items": 6
      }, {
          "left_title": "Unsicherheit im Sozialkontakt",
          "left_text": "",
          "right_title": "",
          "right_text": "Minderwertigkeitsgefühle, Selbstabwertungen, Selbstzweifel, Selbstunsicherheit und negative Erwartungen bzgl. dem eigenen zwischenmenschlichen Verhalten.",
          "m_norm": [0.35, 0.49],
          "sd_norm": [0.40, 0.45],
          "score_path": "calculation.scores_calculation.all_results.unsicherheit_im_sozialkontakt_z_score",
          "clinic_sample_var": "unsicherheit_im_sozialkontakt_z_score",
          "items": 4
      }, {
          "left_title": "Depressivität",
          "left_text": "",
          "right_title": "",
          "right_text": "Gedrückte Stimmung, Gesunkenes Interesse am Leben, Verringerte Motivation und Energie, Hoffnungslosigkeit, bis hin zu Suizidgedanken.",
          "m_norm": [0.24, 0.33],
          "sd_norm": [0.32, 0.40],
          "score_path": "calculation.scores_calculation.all_results.depressivit__t_z_score",
          "clinic_sample_var": "depressivit__t_z_score",
          "items": 6
      }, {
          "left_title": "Ängstlichkeit",
          "left_text": "",
          "right_title": "",
          "right_text": "Angst mit Nervosität, Spannungen und Zittern, Panikattacken und Schreckgefühlen, Gefühle von Besorgnis und Furcht.",
          "m_norm": [0.29, 0.39],
          "sd_norm": [0.31, 0.36],
          "score_path": "calculation.scores_calculation.all_results.__ngstlichkeit_z_score",
          "clinic_sample_var": "__ngstlichkeit_z_score",
          "items": 6
      }, {
          "left_title": "Aggressivität / Feindseligkeit",
          "left_text": "",
          "right_title": "",
          "right_text": "Reizbarkeit und Unausgeglichenheit bis hin zu starker Aggressivität. Ärger, Aggression, Irritierbarkeit, Zorn und Verstimmung.",
          "m_norm": [0.29, 0.37],
          "sd_norm": [0.35, 0.33],
          "score_path": "calculation.scores_calculation.all_results.aggressivit__t___feindseligkeit_z_score",
          "clinic_sample_var": "aggressivit__t___feindseligkeit_z_score",
          "items": 5
      }, {
          "left_title": "Phobische Angst",
          "left_text": "",
          "right_title": "",
          "right_text": "Andauernde und unangemessene Furcht als Reaktion auf eine bestimmte Person, einen Platz, ein Objekt oder eine charakteristische Situation, die zu Vermeidungs- oder Fluchtverhalten führt.",
          "m_norm": [0.14, 0.16],
          "sd_norm": [0.23, 0.25],
          "score_path": "calculation.scores_calculation.all_results.phobische_angst_z_score",
          "clinic_sample_var": "phobische_angst_z_score",
          "items": 5
      }, {
          "left_title": "Paranoides Denken",
          "left_text": "",
          "right_title": "",
          "right_text": "Misstrauen, Minderwertigkeitsgefühle, paranoides Denken: Gedankenprojektion, Feindseligkeit, Argwohn, Grandiosität, Einengung, Angst vor Autonomieverlust und wahnhafte Täuschung.",
          "m_norm": [0.33, 0.34],
          "sd_norm": [0.40, 0.38],
          "score_path": "calculation.scores_calculation.all_results.paranoides_denken_z_score",
          "clinic_sample_var": "paranoides_denken_z_score",
          "items": 5
      }, {
          "left_title": "Psychotizismus",
          "left_text": "",
          "right_title": "",
          "right_text": "Gefühl der Isolation und zwischenmenschlichen Entfremdung. Verzerrter, isolierter Lebensstil bis zu Halluzination und Gedankenzerfall.",
          "m_norm": [0.19, 0.19],
          "sd_norm": [0.28, 0.27],
          "score_path": "calculation.scores_calculation.all_results.psychotizismus_z_score",
          "clinic_sample_var": "psychotizismus_z_score",
          "items": 5
      }, {
          "left_title": "GSI",
          "left_text": "Global Severity Index",
          "right_title": "GSI",
          "right_text": "Durchschnittliche Belastung in allen Bereichen",
          "m_norm": [0.28, 0.35],
          "sd_norm": [0.23, 0.23],
          "score_path": "calculation.scores_calculation.all_results.gsi_global_severity_index_z_score",
          "clinic_sample_var": "gsi_global_severity_index_z_score",
          "items": 53
      }],
      "ranges": [{
          "range_start": -999,
          "range_stop": 1,
          "text": "Gesunde Ausprägung",
          "color": "#2E7D32"
      }, {
          "range_start": 1,
          "range_stop": 2,
          "text": "Normale Ausprägung",
          "color": "#FFFFFF"
      }, {
          "range_start": 2,
          "range_stop": 999,
          "text": "Starke Ausprägung",
          "color": "#C62828"
      }]
    },
    "bdi_chart": {
      "options": {
          //"min": -1.5,
          //"max": 64.5,
          "min": 0,
          "max": 63,
          "item_height": 50,
          "item_text_left": 130,
          "item_text_right": 130,
          "color_grid": "#9E9E9E",
          "color_clinic_sample": "#888888",
          "color_skin": "grey_dark_to_light",
          "show_baseline": false,
          "show_ranges_overview": false,
          "show_scale_text": false,
          "show_score_vertical_line": true,
          "show_score_profile_line": false,
          "show_score_circles": true,
          "show_settings_block": false,
          "allow_toggle_settings_block": false,
          "topnumber_hide_first_last": true,
          "range_alpha": 0.2,
          "vertical_grid_every_x": 3,
          "response_title_path": "calculation.bdi_score.score.current_range.interpretation_de",
          "response_date_path": "date"
      },
      "scales": [{
          "left_title": "Keine Depression",
          "left_text": "",
          "right_title": "Verdacht auf eine schwere Depression",
          "right_text": "",
          "score_path": "calculation.bdi_score.score.score",
          "clinic_sample_var": null
      }],
      "ranges": [{
        "range_start": 0,
        "range_stop": 8.5,
        "text": "Keine Depression",
        "color": "#2E7D32"
    }, {
        "range_start": 8.5,
        "range_stop": 13.5,
        "text": "V.a. eine minimale Depression",
        "color": "#FBB100"
    }, {
        "range_start": 13.5,
        "range_stop": 19.5,
        "text": "V.a. eine leichte Depression",
        "color": "#FFA000"
    }, {
        "range_start": 19.5,
        "range_stop": 28.5,
        "text": "V.a. eine mittelschwere Depression",
        "color": "#FB7200"
    }, {
        "range_start": 28.5,
        "range_stop": 63,
        "text": "V.a. eine schwere Depression",
        "color": "#C62828"
      }]
    },
    "apps": {
      "data": {
        "patient_modules": [
          {
            "module": {
              "hash": "44ad53238cafb5738fb052271ccbdc6531227a0c",
              "calculations": [
                "another_calculation"
              ],
              "readme": {
                "text": "## AASE-G (Versuchung) \n\n### Zusammenfassung\nEinschätzung von 20 Situationen auf ihre Versuchung, die Hauptproblemsubstanz zu konsumieren. Die Skala wurde ursprünglich für Alkoholabhängige konzipiert.\n\n#### Auswertung / Ergebnisse\n0 Punkte entsprechen keiner Versuchung, eine maximale Versuchung liegt bei 80 (allgemeiner Summenwert) respektive 4 (Subskalen) Punkten vor.\n\n\n",
                "parents": [
                  {
                    "text": "## AASE-G (Versuchung) \n\n### Zusammenfassung\nEinschätzung von 20 Situationen auf ihre Versuchung, die Hauptproblemsubstanz zu konsumieren. Die Skala wurde ursprünglich für Alkoholabhängige konzipiert.\n\n#### Auswertung / Ergebnisse\n0 Punkte entsprechen keiner Versuchung, eine maximale Versuchung liegt bei 80 (allgemeiner Summenwert) respektive 4 (Subskalen) Punkten vor.\n\n\n",
                    "identifier": "ch.suedhang.apps.aase-g",
                    "html": "<h2>AASE-G (Versuchung)</h2><h3>Zusammenfassung</h3><p>Einschätzung von 20 Situationen auf ihre Versuchung, die Hauptproblemsubstanz zu konsumieren. Die Skala wurde ursprünglich für Alkoholabhängige konzipiert.</p><h4>Auswertung / Ergebnisse</h4><p>0 Punkte entsprechen keiner Versuchung, eine maximale Versuchung liegt bei 80 (allgemeiner Summenwert) respektive 4 (Subskalen) Punkten vor.</p>"
                  }
                ],
                "html": "<h2>AASE-G (Versuchung)</h2><h3>Zusammenfassung</h3><p>Einschätzung von 20 Situationen auf ihre Versuchung, die Hauptproblemsubstanz zu konsumieren. Die Skala wurde ursprünglich für Alkoholabhängige konzipiert.</p><h4>Auswertung / Ergebnisse</h4><p>0 Punkte entsprechen keiner Versuchung, eine maximale Versuchung liegt bei 80 (allgemeiner Summenwert) respektive 4 (Subskalen) Punkten vor.</p>"
              },
              "surveys": [
                {
                  "identifier": "aase",
                  "name": "AASE-G"
                }
              ],
              "templates": [
                {
                  "height": 12,
                  "width": 6,
                  "name": "AASE"
                }
              ],
              "identifier": "ch.suedhang.apps.aase-g.production",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "AASE-G",
              "dependencies": [],
              "name": "AASE-G",
              "events": [
                {
                  "due_after": 259200,
                  "survey": "aase",
                  "name": "activation",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "Eintritt: Abstinenzselbstwirksamkeit - Versuchung durch Substanz"
                },
                {
                  "due_after": 259200,
                  "survey": "aase",
                  "name": "exit",
                  "time_spec": {
                    "days": 10,
                    "time": "08:00:00",
                    "type": "before_exit"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "Austritt: Abstinenzselbstwirksamkeit - Versuchung durch Substanz"
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Versuchung in spezifischen Situationen",
              "database_schema_name": "ch_suedhang_apps_aase_g_production",
              "database_user_name": "ch_suedhang_apps_aase_g_production",
              "description": "",
              "developer": {
                "email": "nora.schoenenberger@suedhang.ch",
                "phone": "+41 (0)31 828 14 92",
                "first_name": "Nora",
                "website": "http://suedhang.ch/de/Forschung",
                "company": "Suedhang",
                "last_name": "Schönenberger",
                "github_user": "schoenenb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "44ad53238cafb5738fb052271ccbdc6531227a0c",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2020-02-11T14:45:38Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.aase-g.production"
              },
              "id": 149
            },
            "first_template": {
              "found": true,
              "name": "AASE"
            },
            "identifier": "ch.suedhang.apps.aase-g.production"
          },
          {
            "module": {
              "hash": "7a1181770798ea058e03ce50682928979f989099",
              "calculations": [
                "another_calculation"
              ],
              "readme": {
                "text": "## act-info :: Austrittsbefragung\n\n### Zusammenfassung\nact-info (addiction, care and therapy information) ist ein einheitliches, gesamtschweizerisches Klientenmonitoringsystem für den Bereich der Suchthilfe      \n\n### Themenbereiche\nBehandlung/Nachsorge, soziodemografische Angaben, Problemsubstanzen, Psychisches Befinden     \n\n#### Auswertung / Ergebnisse\n- Fagerström-Summenwert (Ausprägung der Nikotinabhängigkeit)\n- Konsumverhalten während des Aufenthaltes (Rückfälle und Rückfallsubstanzen)\n\n",
                "parents": [
                  {
                    "text": "## act-info :: Austrittsbefragung\n\n### Zusammenfassung\nact-info (addiction, care and therapy information) ist ein einheitliches, gesamtschweizerisches Klientenmonitoringsystem für den Bereich der Suchthilfe      \n\n### Themenbereiche\nBehandlung/Nachsorge, soziodemografische Angaben, Problemsubstanzen, Psychisches Befinden     \n\n#### Auswertung / Ergebnisse\n- Fagerström-Summenwert (Ausprägung der Nikotinabhängigkeit)\n- Konsumverhalten während des Aufenthaltes (Rückfälle und Rückfallsubstanzen)\n\n",
                    "identifier": "ch.suedhang.apps.actinfo_aus",
                    "html": "<h2>act-info :: Austrittsbefragung</h2><h3>Zusammenfassung</h3><p>act-info (addiction, care and therapy information) ist ein einheitliches, gesamtschweizerisches Klientenmonitoringsystem für den Bereich der Suchthilfe</p><h3>Themenbereiche</h3><p>Behandlung/Nachsorge, soziodemografische Angaben, Problemsubstanzen, Psychisches Befinden</p><h4>Auswertung / Ergebnisse</h4><ul><li>Fagerström-Summenwert (Ausprägung der Nikotinabhängigkeit)</li><li>Konsumverhalten während des Aufenthaltes (Rückfälle und Rückfallsubstanzen)</li></ul>"
                  }
                ],
                "html": "<h2>act-info :: Austrittsbefragung</h2><h3>Zusammenfassung</h3><p>act-info (addiction, care and therapy information) ist ein einheitliches, gesamtschweizerisches Klientenmonitoringsystem für den Bereich der Suchthilfe</p><h3>Themenbereiche</h3><p>Behandlung/Nachsorge, soziodemografische Angaben, Problemsubstanzen, Psychisches Befinden</p><h4>Auswertung / Ergebnisse</h4><ul><li>Fagerström-Summenwert (Ausprägung der Nikotinabhängigkeit)</li><li>Konsumverhalten während des Aufenthaltes (Rückfälle und Rückfallsubstanzen)</li></ul>"
              },
              "surveys": [
                {
                  "identifier": "actinfo_austritt",
                  "name": "actInfo - Austritt"
                }
              ],
              "templates": [
                {
                  "height": 35,
                  "width": 6,
                  "name": "ActInfo"
                }
              ],
              "identifier": "ch.suedhang.apps.actinfo_aus.production",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "ActInfo | Austritt",
              "dependencies": [],
              "name": "ActInfo | Austritt",
              "events": [
                {
                  "due_after": 864000,
                  "survey": "actinfo_austritt",
                  "name": "exit",
                  "time_spec": {
                    "days": 10,
                    "time": "08:00:00",
                    "type": "before_exit"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "actInfo - Austritt"
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Sonderversion für den stationären Alkohol- und Medikamentenbereich.",
              "database_schema_name": "ch_suedhang_apps_actinfo_aus_production",
              "database_user_name": "ch_suedhang_apps_actinfo_aus_production",
              "description": "",
              "developer": {
                "email": "nora.schoenenberger@suedhang.ch",
                "phone": "+41 (0)31 828 14 92",
                "first_name": "Nora",
                "website": "http://suedhang.ch/",
                "company": "Suedhang",
                "last_name": "Schönenberger",
                "github_user": "schoenenb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "7a1181770798ea058e03ce50682928979f989099",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2019-01-11T13:28:13Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.actinfo_aus.production"
              },
              "id": 118
            },
            "first_template": {
              "found": true,
              "name": "ActInfo"
            },
            "identifier": "ch.suedhang.apps.actinfo_aus.production"
          },
          {
            "module": {
              "hash": "82fa76e6547fd5583194d1ec269e50aec96dd230",
              "calculations": [
                "actinfo_ein"
              ],
              "readme": {
                "text": "## act-info :: Eintrittsbefragung\n\n### Zusammenfassung\nact-info (addiction, care and therapy information) ist ein einheitliches, gesamtschweizerisches Klientenmonitoringsystem für den Bereich der Suchthilfe.\n\nErfassung der vier Bereiche Behandlungsgrundlagen, soziodemografische Angaben, Substanzkonsum und Gesundheit (ausserhalb Substanzproblematik)\n\n### Hintergrund\nDas nationale Dokumentationssystem umfasst Angebote der ambulanten und stationären Behandlung von Problemen mit legalen und illegalen Substanzen sowie von nicht-substanzgebundener Abhängigkeit. act-info ist das Resultat der Harmonisierung der bestehenden Suchthilfestatistiken.\n\nDie beteiligten Forschungsinstitute (Sucht Schweiz Lausanne, ISGF Zürich) sind für die Datenerhebung und die Auswertungen in den einzelnen Behandlungssektoren verantwortlich.\n\nact-info wird durch das Bundesamt für Gesundheit BAG finanziert und koordiniert. Die Verantwortung für das Gesamtprojekt act-info liegt beim BAG.\n\n#### Auswertung / Ergebnisse\n- Substanzkonsum vor Eintritt (Substanz + Häufigkeit)\n- Zusatzangaben vor Eintritt (Hauptproblemsubstanz)\n- AUDIT-Summenwert (Verdacht auf Alkoholabhängigkeit)\n- Fagerström-Summenwert (Ausprägung der Nikotinabhängigkeit)\n\n\n",
                "parents": [
                  {
                    "text": "## act-info :: Eintrittsbefragung\n\n### Zusammenfassung\nact-info (addiction, care and therapy information) ist ein einheitliches, gesamtschweizerisches Klientenmonitoringsystem für den Bereich der Suchthilfe.\n\nErfassung der vier Bereiche Behandlungsgrundlagen, soziodemografische Angaben, Substanzkonsum und Gesundheit (ausserhalb Substanzproblematik)\n\n### Hintergrund\nDas nationale Dokumentationssystem umfasst Angebote der ambulanten und stationären Behandlung von Problemen mit legalen und illegalen Substanzen sowie von nicht-substanzgebundener Abhängigkeit. act-info ist das Resultat der Harmonisierung der bestehenden Suchthilfestatistiken.\n\nDie beteiligten Forschungsinstitute (Sucht Schweiz Lausanne, ISGF Zürich) sind für die Datenerhebung und die Auswertungen in den einzelnen Behandlungssektoren verantwortlich.\n\nact-info wird durch das Bundesamt für Gesundheit BAG finanziert und koordiniert. Die Verantwortung für das Gesamtprojekt act-info liegt beim BAG.\n\n#### Auswertung / Ergebnisse\n- Substanzkonsum vor Eintritt (Substanz + Häufigkeit)\n- Zusatzangaben vor Eintritt (Hauptproblemsubstanz)\n- AUDIT-Summenwert (Verdacht auf Alkoholabhängigkeit)\n- Fagerström-Summenwert (Ausprägung der Nikotinabhängigkeit)\n\n",
                    "identifier": "ch.suedhang.apps.actinfo_ein",
                    "html": "<h2>act-info :: Eintrittsbefragung</h2><h3>Zusammenfassung</h3><p>act-info (addiction, care and therapy information) ist ein einheitliches, gesamtschweizerisches Klientenmonitoringsystem für den Bereich der Suchthilfe.</p><p>Erfassung der vier Bereiche Behandlungsgrundlagen, soziodemografische Angaben, Substanzkonsum und Gesundheit (ausserhalb Substanzproblematik)</p><h3>Hintergrund</h3><p>Das nationale Dokumentationssystem umfasst Angebote der ambulanten und stationären Behandlung von Problemen mit legalen und illegalen Substanzen sowie von nicht-substanzgebundener Abhängigkeit. act-info ist das Resultat der Harmonisierung der bestehenden Suchthilfestatistiken.</p><p>Die beteiligten Forschungsinstitute (Sucht Schweiz Lausanne, ISGF Zürich) sind für die Datenerhebung und die Auswertungen in den einzelnen Behandlungssektoren verantwortlich.</p><p>act-info wird durch das Bundesamt für Gesundheit BAG finanziert und koordiniert. Die Verantwortung für das Gesamtprojekt act-info liegt beim BAG.</p><h4>Auswertung / Ergebnisse</h4><ul><li>Substanzkonsum vor Eintritt (Substanz + Häufigkeit)</li><li>Zusatzangaben vor Eintritt (Hauptproblemsubstanz)</li><li>AUDIT-Summenwert (Verdacht auf Alkoholabhängigkeit)</li><li>Fagerström-Summenwert (Ausprägung der Nikotinabhängigkeit)</li></ul>"
                  }
                ],
                "html": "<h2>act-info :: Eintrittsbefragung</h2><h3>Zusammenfassung</h3><p>act-info (addiction, care and therapy information) ist ein einheitliches, gesamtschweizerisches Klientenmonitoringsystem für den Bereich der Suchthilfe.</p><p>Erfassung der vier Bereiche Behandlungsgrundlagen, soziodemografische Angaben, Substanzkonsum und Gesundheit (ausserhalb Substanzproblematik)</p><h3>Hintergrund</h3><p>Das nationale Dokumentationssystem umfasst Angebote der ambulanten und stationären Behandlung von Problemen mit legalen und illegalen Substanzen sowie von nicht-substanzgebundener Abhängigkeit. act-info ist das Resultat der Harmonisierung der bestehenden Suchthilfestatistiken.</p><p>Die beteiligten Forschungsinstitute (Sucht Schweiz Lausanne, ISGF Zürich) sind für die Datenerhebung und die Auswertungen in den einzelnen Behandlungssektoren verantwortlich.</p><p>act-info wird durch das Bundesamt für Gesundheit BAG finanziert und koordiniert. Die Verantwortung für das Gesamtprojekt act-info liegt beim BAG.</p><h4>Auswertung / Ergebnisse</h4><ul><li>Substanzkonsum vor Eintritt (Substanz + Häufigkeit)</li><li>Zusatzangaben vor Eintritt (Hauptproblemsubstanz)</li><li>AUDIT-Summenwert (Verdacht auf Alkoholabhängigkeit)</li><li>Fagerström-Summenwert (Ausprägung der Nikotinabhängigkeit)</li></ul>"
              },
              "surveys": [
                {
                  "identifier": "actinfo_eintritt",
                  "name": "actInfo - Eintritt"
                }
              ],
              "templates": [
                {
                  "height": 35,
                  "width": 6,
                  "name": "ActInfo"
                }
              ],
              "identifier": "ch.suedhang.apps.actinfo_ein.production",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "ActInfo | Eintritt",
              "dependencies": [],
              "name": "ActInfo | Eintritt",
              "events": [
                {
                  "due_after": 259200,
                  "survey": "actinfo_eintritt",
                  "name": "activation",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "actInfo - Eintritt"
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Sonderversion für den stationären Alkohol- und Medikamentenbereich.",
              "database_schema_name": "ch_suedhang_apps_actinfo_ein_production",
              "database_user_name": "ch_suedhang_apps_actinfo_ein_production",
              "description": "",
              "developer": {
                "email": "nora.schoenenberger@suedhang.ch",
                "phone": "+41 (0)31 828 14 92",
                "first_name": "Nora",
                "website": "http://suedhang.ch/",
                "company": "Suedhang",
                "last_name": "Schönenberger",
                "github_user": "schoenenb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "82fa76e6547fd5583194d1ec269e50aec96dd230",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2018-11-20T10:36:56Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.actinfo_ein.production"
              },
              "id": 116
            },
            "first_template": {
              "found": true,
              "name": "ActInfo"
            },
            "identifier": "ch.suedhang.apps.actinfo_ein.production"
          },
          {
            "module": {
              "hash": "61c0b01c3f15210388d580fa755a7c651807fe27",
              "calculations": [
                "asrs_score"
              ],
              "readme": {
                "text": "## ASRS (ADHS Screening für Erwachsene) \n\n### Zusammenfassung\nDer ASRS-Fragebogen kann als Ausgangspunkt zur Erkennung der Anzeichen/Symptome der Erwachsenen-ADHS verwendet werden, soll jedoch nicht eine Beratung bei einer geschulten medizinischen Fachkraft ersetzen. \n\n",
                "parents": [
                  {
                    "text": "## ASRS (ADHS Screening für Erwachsene) \n\n### Zusammenfassung\nDer ASRS-Fragebogen kann als Ausgangspunkt zur Erkennung der Anzeichen/Symptome der Erwachsenen-ADHS verwendet werden, soll jedoch nicht eine Beratung bei einer geschulten medizinischen Fachkraft ersetzen. \n\n",
                    "identifier": "ch.suedhang.apps.asrs",
                    "html": "<h2>ASRS (ADHS Screening für Erwachsene)</h2><h3>Zusammenfassung</h3><p>Der ASRS-Fragebogen kann als Ausgangspunkt zur Erkennung der Anzeichen/Symptome der Erwachsenen-ADHS verwendet werden, soll jedoch nicht eine Beratung bei einer geschulten medizinischen Fachkraft ersetzen.</p>"
                  }
                ],
                "html": "<h2>ASRS (ADHS Screening für Erwachsene)</h2><h3>Zusammenfassung</h3><p>Der ASRS-Fragebogen kann als Ausgangspunkt zur Erkennung der Anzeichen/Symptome der Erwachsenen-ADHS verwendet werden, soll jedoch nicht eine Beratung bei einer geschulten medizinischen Fachkraft ersetzen.</p>"
              },
              "surveys": [
                {
                  "identifier": "asrs_ng",
                  "name": "ASRS"
                }
              ],
              "templates": [
                {
                  "height": 12,
                  "width": 6,
                  "name": "ASRS"
                }
              ],
              "identifier": "ch.suedhang.apps.asrs.production",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "ADHS-Screening (ASRS)",
              "dependencies": [],
              "name": "ADHS-Screening (ASRS)",
              "events": [
                {
                  "due_after": 259200,
                  "survey": "asrs_ng",
                  "name": "activation",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "ASRS-Erhebung"
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Screening-Test mit Selbstbeurteilungs-Skala für Erwachsene",
              "database_schema_name": "ch_suedhang_apps_asrs_production",
              "database_user_name": "ch_suedhang_apps_asrs_production",
              "description": "",
              "developer": {
                "email": "nora.schoenenberger@suedhang.ch",
                "phone": "+41 (0)31 828 14 92",
                "first_name": "Nora",
                "website": "http://suedhang.ch/de/",
                "company": "Suedhang",
                "last_name": "Schönenberger",
                "github_user": "schoenenb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "61c0b01c3f15210388d580fa755a7c651807fe27",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2020-02-14T15:04:46Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.asrs.production"
              },
              "id": 151
            },
            "first_template": {
              "found": true,
              "name": "ASRS"
            },
            "identifier": "ch.suedhang.apps.asrs.production"
          },
          {
            "module": {
              "hash": "8a1e482022720675384203392c7b4afb6a109db8",
              "calculations": [
                "bdi_score"
              ],
              "readme": {
                "text": "## BDI-II (Beck Depressions-Inventar)\n\n### Zusammenfassung\nDer Summenwert aus den 21 Fragebereichen des Beck Depressions-Inventar liefert einen Hinweis auf den Schweregrad einer möglichen depressiven Symptomatik.\n\n",
                "parents": [
                  {
                    "text": "## BDI-II (Beck Depressions-Inventar)\n\n### Zusammenfassung\nDer Summenwert aus den 21 Fragebereichen des Beck Depressions-Inventar liefert einen Hinweis auf den Schweregrad einer möglichen depressiven Symptomatik.\n\n",
                    "identifier": "ch.suedhang.apps.bdi",
                    "html": "<h2>BDI-II (Beck Depressions-Inventar)</h2><h3>Zusammenfassung</h3><p>Der Summenwert aus den 21 Fragebereichen des Beck Depressions-Inventar liefert einen Hinweis auf den Schweregrad einer möglichen depressiven Symptomatik.</p>"
                  }
                ],
                "html": "<h2>BDI-II (Beck Depressions-Inventar)</h2><h3>Zusammenfassung</h3><p>Der Summenwert aus den 21 Fragebereichen des Beck Depressions-Inventar liefert einen Hinweis auf den Schweregrad einer möglichen depressiven Symptomatik.</p>"
              },
              "surveys": [
                {
                  "identifier": "bdi2",
                  "name": "BDI II"
                }
              ],
              "templates": [
                {
                  "height": 6,
                  "width": 6,
                  "name": "BDI_simple_score"
                },
                {
                  "height": 12,
                  "width": 6,
                  "name": "BDI"
                }
              ],
              "identifier": "ch.suedhang.apps.bdi.production",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Beck-Depressions-Inventar (BDI-II)",
              "dependencies": [],
              "name": "Beck-Depressions-Inventar (BDI-II)",
              "events": [
                {
                  "due_after": 259200,
                  "survey": "bdi2",
                  "name": "activation",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "Schweregrad depressiver Symptomatik im klinischen Bereich, 21 Aussagen"
                },
                {
                  "due_after": 259200,
                  "survey": "bdi2",
                  "name": "exit",
                  "time_spec": {
                    "days": 10,
                    "time": "08:00:00",
                    "type": "before_exit"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "Schweregrad depressiver Symptomatik im klinischen Bereich, 21 Aussagen"
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Schweregrad depressiver Symptomatik im klinischen Bereich",
              "database_schema_name": "ch_suedhang_apps_bdi_production",
              "database_user_name": "ch_suedhang_apps_bdi_production",
              "description": "",
              "developer": {
                "email": "nora.schoenenberger@suedhang.ch",
                "phone": "+41 (0)31 828 14 92",
                "first_name": "Nora",
                "website": "http://suedhang.ch/de/",
                "company": "Suedhang",
                "last_name": "Schönenberger",
                "github_user": "schoenenb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "8a1e482022720675384203392c7b4afb6a109db8",
                "name_overwrite": "Beck-Depressions-Inventar (BDI-II)",
                "overwritten": false,
                "last_update": "2018-06-10T08:24:26Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.bdi.production"
              },
              "id": 53
            },
            "first_template": {
              "found": true,
              "name": "BDI_simple_score"
            },
            "identifier": "ch.suedhang.apps.bdi.production"
          },
          {
            "module": {
              "hash": "b78eb617b91f59612bdaeeff497fbe689c9d5ee6",
              "calculations": [],
              "readme": {
                "text": "## Polypoint Lookup\n\nLiest die aktuellen Belegungsdaten aus Polypoint und zeigt diese an.\n(8-ung: Südhang only)\n\n\n###Anschrift\n*Optinomic GmbH*   \n*Haldenstrasse 7*     \n*CH - 8942 Oberrieden*     \n*+41(0)44 508 26 76*    \n*info@optinomic.com*   \n*[www.optinomic.com](http://www.optinomic.com)*   \n\n\n\n\n",
                "parents": [],
                "html": "<h2>Polypoint Lookup</h2><p>Liest die aktuellen Belegungsdaten aus Polypoint und zeigt diese an.\n(8-ung: Südhang only)</p><h3>Anschrift</h3><p><i>Optinomic GmbH</i><br><i>Haldenstrasse 7</i><br><i>CH - 8942 Oberrieden</i><br><i>+41(0)44 508 26 76</i><br><i>info@optinomic.com</i><br><i><a href=\"http://www.optinomic.com\">www.optinomic.com</a></i></p>"
              },
              "surveys": [],
              "templates": [
                {
                  "height": 9,
                  "width": 6,
                  "name": "init"
                },
                {
                  "height": 6,
                  "width": 6,
                  "name": "Belegung_report_only"
                }
              ],
              "identifier": "com.optinomic.init.poly_stay",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Belegung (Fall)",
              "dependencies": [],
              "name": "Belegung (Fall)",
              "events": [],
              "version": "1.0",
              "type": "patient",
              "short_description": "Informationen zur aktuellen Belegung.",
              "database_schema_name": "com_optinomic_init_poly_stay",
              "database_user_name": "com_optinomic_init_poly_stay",
              "description": "Aktuelle Belegungsdetails des Patienten anzuzeigen.\n\n\n",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "b78eb617b91f59612bdaeeff497fbe689c9d5ee6",
                "name_overwrite": "Belegung (Fall)",
                "overwritten": false,
                "last_update": "2018-06-10T08:25:40Z",
                "version": "1.0",
                "module": "com.optinomic.init.poly_stay"
              },
              "id": 57
            },
            "first_template": {
              "found": true,
              "name": "init"
            },
            "identifier": "com.optinomic.init.poly_stay"
          },
          {
            "module": {
              "hash": "f60e26bd052fa3ab0e2360692c3d949511e809a0",
              "calculations": [
                "scores_calculation"
              ],
              "readme": {
                "text": "## BSCL (Brief Symptom Checklist)\n\n\n### Zusammenfassung\nDie „Brief Symptom Checklist“ (BSCL) ist die Kurzform der SCL-90. Es handelt sich bei der BSCL um eine deutschsprachige Übersetzung von G.H. Franke, deren Ursprung in dem amerikanischen „Brief Symptom Inventory“ (BSI) von L.R. Derogatis (1975) zu finden ist.\n\nEs handelt sich bei den 53 Items der BSCL um die fünf bis sechs ladungsstärksten Items pro Skala aus der 90 Items umfassenden SCL-90. Die Urheber- und Markenrechte an der BSCL liegen beim Hogrefe Verlag.\n\n#### Auswertung / Interpretation\nAusgabe der Subskalen in z-Werten auf der Normstichprobe von Franke (2000) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Geschlecht, den Messzeitpunkt und die Behandlungsart (EAS / EP).\n\n",
                "parents": [
                  {
                    "text": "## BSCL (Brief Symptom Checklist)\n\n\n### Zusammenfassung\nDie „Brief Symptom Checklist“ (BSCL) ist die Kurzform der SCL-90. Es handelt sich bei der BSCL um eine deutschsprachige Übersetzung von G.H. Franke, deren Ursprung in dem amerikanischen „Brief Symptom Inventory“ (BSI) von L.R. Derogatis (1975) zu finden ist.\n\nEs handelt sich bei den 53 Items der BSCL um die fünf bis sechs ladungsstärksten Items pro Skala aus der 90 Items umfassenden SCL-90. Die Urheber- und Markenrechte an der BSCL liegen beim Hogrefe Verlag.\n\n#### Auswertung / Interpretation\nAusgabe der Subskalen in z-Werten auf der Normstichprobe von Franke (2000) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Geschlecht, den Messzeitpunkt und die Behandlungsart (EAS / EP).\n\n\n",
                    "identifier": "ch.suedhang.apps.bscl_anq",
                    "html": "<h2>BSCL (Brief Symptom Checklist)</h2><h3>Zusammenfassung</h3><p>Die „Brief Symptom Checklist“ (BSCL) ist die Kurzform der SCL-90. Es handelt sich bei der BSCL um eine deutschsprachige Übersetzung von G.H. Franke, deren Ursprung in dem amerikanischen „Brief Symptom Inventory“ (BSI) von L.R. Derogatis (1975) zu finden ist.</p><p>Es handelt sich bei den 53 Items der BSCL um die fünf bis sechs ladungsstärksten Items pro Skala aus der 90 Items umfassenden SCL-90. Die Urheber- und Markenrechte an der BSCL liegen beim Hogrefe Verlag.</p><h4>Auswertung / Interpretation</h4><p>Ausgabe der Subskalen in z-Werten auf der Normstichprobe von Franke (2000) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Geschlecht, den Messzeitpunkt und die Behandlungsart (EAS / EP).</p>"
                  }
                ],
                "html": "<h2>BSCL (Brief Symptom Checklist)</h2><h3>Zusammenfassung</h3><p>Die „Brief Symptom Checklist“ (BSCL) ist die Kurzform der SCL-90. Es handelt sich bei der BSCL um eine deutschsprachige Übersetzung von G.H. Franke, deren Ursprung in dem amerikanischen „Brief Symptom Inventory“ (BSI) von L.R. Derogatis (1975) zu finden ist.</p><p>Es handelt sich bei den 53 Items der BSCL um die fünf bis sechs ladungsstärksten Items pro Skala aus der 90 Items umfassenden SCL-90. Die Urheber- und Markenrechte an der BSCL liegen beim Hogrefe Verlag.</p><h4>Auswertung / Interpretation</h4><p>Ausgabe der Subskalen in z-Werten auf der Normstichprobe von Franke (2000) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Geschlecht, den Messzeitpunkt und die Behandlungsart (EAS / EP).</p>"
              },
              "surveys": [
                {
                  "identifier": "bscl_anq",
                  "name": "BSCL"
                },
                {
                  "identifier": "bscl_admin",
                  "name": "BSCL - Admin"
                }
              ],
              "templates": [
                {
                  "height": 12,
                  "width": 6,
                  "name": "BSCL"
                }
              ],
              "identifier": "ch.suedhang.apps.bscl_anq.production",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "BSCL (ANQ)",
              "dependencies": [],
              "name": "BSCL (ANQ)",
              "events": [
                {
                  "due_after": 259200,
                  "survey": "bscl_anq",
                  "name": "activation",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "BSCL - Eintritt"
                },
                {
                  "due_after": 259200,
                  "survey": "bscl_anq",
                  "name": "exit",
                  "time_spec": {
                    "days": 10,
                    "time": "08:00:00",
                    "type": "before_exit"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "BSCL - Austritt"
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Erfassung subjektiver Beeinträchtigung durch körperliche und psychische Symptome.",
              "database_schema_name": "ch_suedhang_apps_bscl_anq_production",
              "database_user_name": "ch_suedhang_apps_bscl_anq_production",
              "description": "",
              "developer": {
                "email": "nora.schoenenberger@suedhang.ch",
                "phone": "+41 (0)31 828 14 92",
                "first_name": "Nora",
                "website": "http://suedhang.ch/de/",
                "company": "Suedhang",
                "last_name": "Schönenberger",
                "github_user": "schoenenb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "f60e26bd052fa3ab0e2360692c3d949511e809a0",
                "name_overwrite": "BSCL (ANQ)",
                "overwritten": false,
                "last_update": "2018-06-10T08:31:31Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.bscl_anq.production"
              },
              "id": 63
            },
            "first_template": {
              "found": true,
              "name": "BSCL"
            },
            "identifier": "ch.suedhang.apps.bscl_anq.production"
          },
          {
            "module": {
              "hash": "408f32067d235e54842e97ab61d4c9be271ec4ed",
              "calculations": [
                "another_calculation"
              ],
              "readme": {
                "text": "## CASE (Checkliste zur Abschätzung der Schwere einer Alkoholabhängigkeit) \n\n### Zusammenfassung\nCheckliste zur Abschätzung der Schwere einer Alkoholabhängigkeit mit Behandlungsindikation.\n\n#### Auswertung / Interpretation\nGesamtscore - ab 15 Punkten ist eine stationäre Therapie indiziert.\n\n",
                "parents": [
                  {
                    "text": "## CASE (Checkliste zur Abschätzung der Schwere einer Alkoholabhängigkeit) \n\n### Zusammenfassung\nCheckliste zur Abschätzung der Schwere einer Alkoholabhängigkeit mit Behandlungsindikation.\n\n#### Auswertung / Interpretation\nGesamtscore - ab 15 Punkten ist eine stationäre Therapie indiziert.\n\n",
                    "identifier": "ch.suedhang.apps.case",
                    "html": "<h2>CASE (Checkliste zur Abschätzung der Schwere einer Alkoholabhängigkeit)</h2><h3>Zusammenfassung</h3><p>Checkliste zur Abschätzung der Schwere einer Alkoholabhängigkeit mit Behandlungsindikation.</p><h4>Auswertung / Interpretation</h4><p>Gesamtscore - ab 15 Punkten ist eine stationäre Therapie indiziert.</p>"
                  }
                ],
                "html": "<h2>CASE (Checkliste zur Abschätzung der Schwere einer Alkoholabhängigkeit)</h2><h3>Zusammenfassung</h3><p>Checkliste zur Abschätzung der Schwere einer Alkoholabhängigkeit mit Behandlungsindikation.</p><h4>Auswertung / Interpretation</h4><p>Gesamtscore - ab 15 Punkten ist eine stationäre Therapie indiziert.</p>"
              },
              "surveys": [
                {
                  "identifier": "CASE",
                  "name": "CASE"
                }
              ],
              "templates": [
                {
                  "height": 4,
                  "width": 4,
                  "name": "simple_score"
                }
              ],
              "identifier": "ch.suedhang.apps.case.production",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "CASE",
              "dependencies": [],
              "name": "CASE",
              "events": [
                {
                  "due_after": 345600,
                  "survey": "CASE",
                  "name": "daily",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "Alkoholabhängigkeit (CASE) und Behandlungsindikation."
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Checkliste zur Abschätzung der Schwere einer Alkoholabhängigkeit (CASE) und Behandlungsindikation",
              "database_schema_name": "ch_suedhang_apps_case_production",
              "database_user_name": "ch_suedhang_apps_case_production",
              "description": "Checkliste zur Abschätzung der Schwere einer Alkoholabhängigkeit (CASE) und Behandlungsindikation. Ab 15 Punkten ist eine stationäre Therapie indiziert.\n\n",
              "developer": {
                "email": "nora.schoenenberger@suedhang.ch",
                "phone": "+41 (0)31 828 14 92",
                "first_name": "Nora",
                "website": "http://suedhang.ch/de/",
                "company": "Suedhang",
                "last_name": "Schönenberger",
                "github_user": "schoenenb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "408f32067d235e54842e97ab61d4c9be271ec4ed",
                "name_overwrite": "CASE",
                "overwritten": false,
                "last_update": "2018-06-10T08:49:36Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.case.production"
              },
              "id": 92
            },
            "first_template": {
              "found": true,
              "name": "simple_score"
            },
            "identifier": "ch.suedhang.apps.case.production"
          },
          {
            "module": {
              "hash": "bbf2d1624223093200dd4021c9f0d88155b978d9",
              "calculations": [],
              "readme": {
                "text": "### Entwickler\r\nThis patient-app is currently HOTLOADED!\r\n\r\n\r\n\r\n",
                "parents": [],
                "html": "<h3>Entwickler</h3><p>This patient-app is currently HOTLOADED!</p>"
              },
              "surveys": [],
              "templates": [
                {
                  "height": 4,
                  "width": 6,
                  "name": "PDF"
                }
              ],
              "identifier": "com.optinomic.apps.pdf.patient.allgemein",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Druckvorlagen (PDF)",
              "dependencies": [],
              "name": "Druckvorlagen (PDF)",
              "events": [],
              "version": "1.0",
              "type": "patient",
              "short_description": "(Patienten-)Druckvorlagen (PDF).",
              "database_schema_name": "com_optinomic_apps_pdf_patient_allgemein",
              "database_user_name": "com_optinomic_apps_pdf_patient_allgemein",
              "description": "Allgemeine und spezifische Patienten-Druckvorlagen im PDF Format.\r\n\r\n\r\n",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "https://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "bbf2d1624223093200dd4021c9f0d88155b978d9",
                "name_overwrite": null,
                "overwritten": true,
                "last_update": "2020-04-03T12:09:05Z",
                "version": "1.0",
                "module": "com.optinomic.apps.pdf.patient.allgemein"
              },
              "id": 264
            },
            "first_template": {
              "found": true,
              "name": "PDF"
            },
            "identifier": "com.optinomic.apps.pdf.patient.allgemein"
          },
          {
            "module": {
              "hash": "6f5de295b46164bbae28ea9608b74d88e1ccfe8c",
              "calculations": [],
              "readme": {
                "text": "## Übersicht | Fallkonferenz     \n\n### Zusammenfassung\nEine schnelle Übersicht über die wichtigsten Ergebnisse der während der Behandlung erhobenen Fragebögen.\n\n",
                "parents": [
                  {
                    "text": "## Übersicht | Fallkonferenz     \n\n### Zusammenfassung\nEine schnelle Übersicht über die wichtigsten Ergebnisse der während der Behandlung erhobenen Fragebögen.\n\n",
                    "identifier": "ch.suedhang.apps.fallkonferenz",
                    "html": "<h2>Übersicht | Fallkonferenz</h2><h3>Zusammenfassung</h3><p>Eine schnelle Übersicht über die wichtigsten Ergebnisse der während der Behandlung erhobenen Fragebögen.</p>"
                  }
                ],
                "html": "<h2>Übersicht | Fallkonferenz</h2><h3>Zusammenfassung</h3><p>Eine schnelle Übersicht über die wichtigsten Ergebnisse der während der Behandlung erhobenen Fragebögen.</p>"
              },
              "surveys": [],
              "templates": [
                {
                  "height": 7,
                  "width": 6,
                  "name": "overview"
                }
              ],
              "identifier": "ch.suedhang.apps.fallkonferenz.production",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Fallkonferenz",
              "dependencies": [],
              "name": "Fallkonferenz",
              "events": [],
              "version": "1.0",
              "type": "patient",
              "short_description": "Diese Applikation dient zur schnellen Übersicht z.B. für die Fallkonferenz.",
              "database_schema_name": "ch_suedhang_apps_fallkonferenz_production",
              "database_user_name": "ch_suedhang_apps_fallkonferenz_production",
              "description": "Übersicht der wichtigsten Ergebnisse zu Suchtmittelkonsum (actInfo); Visuellem Scannen, psychomotorischer Geschwindigkeit und Leistung der exekutiven Funktionen (TMT); ADHS-Screening (ASRS); Suchtdruck (AASE-G); Symptomcheckliste (BSCL); Depressions-Inventar (BDI), Inventar Sozialer Kompetenzen (ISK), Stress-Coping-Inventar (SCI) und der Lebensqualität (WHQOL).\n\nHinweis: Wenn Sie sich nicht im \"client.new\" befinden, öffnen Sie diese App über das Icon [öffnen] oder [frame].\n\n\n",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "6f5de295b46164bbae28ea9608b74d88e1ccfe8c",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2019-11-11T10:47:37Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.fallkonferenz.production"
              },
              "id": 132
            },
            "first_template": {
              "found": true,
              "name": "overview"
            },
            "identifier": "ch.suedhang.apps.fallkonferenz.production"
          },
          {
            "module": {
              "hash": "78abba8a8d3973272019d6cfaa661a627aa7595a",
              "calculations": [
                "honos_calculation"
              ],
              "readme": {
                "text": "## HoNOS (Health of the Nations Outcome Scale)\n\n### Zusammenfassung\n\nFremdeinschätzung von Gesundheit und sozialer Funktionsfähigkeit mittels 12 Items durch eine therapeutische Fachperson.\n\n### Administrator\n\n#### Schnittstelle\n\nDie Schnittstelle wurde am 1. Juni 2019 auf Navision angepasst. Das Ausgabeverzeichnis lautet `/media/hl7_files/PROD/FROM_OPTINOMIC/`.\n\n#### Komplettexport\n\nIn der SQL-Toolbox kann die [navision_interface.sql](https://github.com/Optinomic/ch.suedhang.apps.honos.production/blob/master/includes/navision_interface.sql#L105) Abfrage ausgeführt werden.\n\nLediglich [diese Zeile](https://github.com/Optinomic/ch.suedhang.apps.honos.production/blob/master/includes/navision_interface.sql#L105) gilt es auszuklammern. [Diese Zeile](https://github.com/Optinomic/ch.suedhang.apps.honos.production/blob/master/includes/navision_interface.sql#L105) stellt sicher, dass nur Exporte vom aktuellen Tag erfolgen.  \n\nDie Abfrage soll mit folgenden Parametern gespeichert werden:\n\n`{ direct: \"True\", format: \"csv\", delimiter: \",\", crlf: \"True\" }`.\n\nhttps://github.com/Optinomic/ch.suedhang.apps.honos.production/blob/master/includes/navision_interface.sql#L105\n\n",
                "parents": [
                  {
                    "text": "## HoNOS (Health of the Nations Outcome Scale)\n\n### Zusammenfassung\nFremdeinschätzung von Gesundheit und sozialer Funktionsfähigkeit mittels 12 Items durch eine therapeutische Fachperson.\n\n",
                    "identifier": "ch.suedhang.apps.honos",
                    "html": "<h2>HoNOS (Health of the Nations Outcome Scale)</h2><h3>Zusammenfassung</h3><p>Fremdeinschätzung von Gesundheit und sozialer Funktionsfähigkeit mittels 12 Items durch eine therapeutische Fachperson.</p>"
                  }
                ],
                "html": "<h2>HoNOS (Health of the Nations Outcome Scale)</h2><h3>Zusammenfassung</h3><p>Fremdeinschätzung von Gesundheit und sozialer Funktionsfähigkeit mittels 12 Items durch eine therapeutische Fachperson.</p><h3>Administrator</h3><h4>Schnittstelle</h4><p>Die Schnittstelle wurde am 1. Juni 2019 auf Navision angepasst. Das Ausgabeverzeichnis lautet <code>/media/hl7_files/PROD/FROM_OPTINOMIC/</code>.</p><h4>Komplettexport</h4><p>In der SQL-Toolbox kann die <a href=\"https://github.com/Optinomic/ch.suedhang.apps.honos.production/blob/master/includes/navision_interface.sql#L105\">navision_interface.sql</a> Abfrage ausgeführt werden.</p><p>Lediglich <a href=\"https://github.com/Optinomic/ch.suedhang.apps.honos.production/blob/master/includes/navision_interface.sql#L105\">diese Zeile</a> gilt es auszuklammern. <a href=\"https://github.com/Optinomic/ch.suedhang.apps.honos.production/blob/master/includes/navision_interface.sql#L105\">Diese Zeile</a> stellt sicher, dass nur Exporte vom aktuellen Tag erfolgen.</p><p>Die Abfrage soll mit folgenden Parametern gespeichert werden:</p><p><code>{ direct: &quot;True&quot;, format: &quot;csv&quot;, delimiter: &quot;,&quot;, crlf: &quot;True&quot; }</code>.</p><p>https://github.com/Optinomic/ch.suedhang.apps.honos.production/blob/master/includes/navision_interface.sql#L105</p>"
              },
              "surveys": [
                {
                  "identifier": "HoNOS",
                  "name": "HoNOS"
                }
              ],
              "templates": [
                {
                  "height": 6,
                  "width": 6,
                  "name": "scores_table"
                }
              ],
              "identifier": "ch.suedhang.apps.honos.production",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "HoNOS",
              "dependencies": [],
              "name": "HoNOS",
              "events": [
                {
                  "due_after": 259200,
                  "survey": "HoNOS",
                  "name": "activation",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "send_reminder_once"
                  },
                  "description": "HoNOS Eintritt"
                },
                {
                  "due_after": 345600,
                  "survey": "HoNOS",
                  "name": "before_exit",
                  "time_spec": {
                    "days": 3,
                    "time": "00:00:00",
                    "type": "before_exit"
                  },
                  "overdue": {
                    "type": "send_reminder_once"
                  },
                  "description": "HoNOS Austritt"
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Health of the nation outcomes scales (HoNOS).",
              "database_schema_name": "ch_suedhang_apps_honos_production",
              "database_user_name": "ch_suedhang_apps_honos_production",
              "description": "Gesundheit und soziale Funktionsfähigkeit, 12 Items.\n\n\n",
              "developer": {
                "email": "nora.schoenenberger@suedhang.ch",
                "phone": "+41 (0)31 828 14 92",
                "first_name": "Nora",
                "website": "http://suedhang.ch/de/Forschung",
                "company": "Suedhang",
                "last_name": "Schönenberger",
                "github_user": "schoenenb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "78abba8a8d3973272019d6cfaa661a627aa7595a",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2019-07-12T07:02:37Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.honos.production"
              },
              "id": 124
            },
            "first_template": {
              "found": true,
              "name": "scores_table"
            },
            "identifier": "ch.suedhang.apps.honos.production"
          },
          {
            "module": {
              "hash": "7e0d0569a23dfa1c6f12dbaea5c8a874bac1b644",
              "calculations": [
                "honos_calculation"
              ],
              "readme": {
                "text": "## HoNOS (Health of the Nations Outcome Scale)\n\n### Zusammenfassung\nFremdeinschätzung von Gesundheit und sozialer Funktionsfähigkeit mittels 12 Items durch eine therapeutische Fachperson.\n\n",
                "parents": [],
                "html": "<h2>HoNOS (Health of the Nations Outcome Scale)</h2><h3>Zusammenfassung</h3><p>Fremdeinschätzung von Gesundheit und sozialer Funktionsfähigkeit mittels 12 Items durch eine therapeutische Fachperson.</p>"
              },
              "surveys": [
                {
                  "identifier": "HoNOS",
                  "name": "HoNOS"
                }
              ],
              "templates": [
                {
                  "height": 6,
                  "width": 6,
                  "name": "scores_table"
                }
              ],
              "identifier": "ch.suedhang.apps.honos",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "HoNOS",
              "dependencies": [],
              "name": "HoNOS",
              "events": [
                {
                  "due_after": 259200,
                  "survey": "HoNOS",
                  "name": "activation",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "send_reminder_once"
                  },
                  "description": "HoNOS Eintritt"
                },
                {
                  "due_after": 259200,
                  "survey": "HoNOS",
                  "name": "before_exit",
                  "time_spec": {
                    "days": 3,
                    "time": "00:00:00",
                    "type": "before_exit"
                  },
                  "overdue": {
                    "type": "send_reminder_once"
                  },
                  "description": "HoNOS Austritt"
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Health of the nation outcomes scales (HoNOS).",
              "database_schema_name": "ch_suedhang_apps_honos",
              "database_user_name": "ch_suedhang_apps_honos",
              "description": "Gesundheit und soziale Funktionsfähigkeit, 12 Items.\n\n",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "7e0d0569a23dfa1c6f12dbaea5c8a874bac1b644",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2020-03-22T00:17:48Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.honos"
              },
              "id": 91
            },
            "first_template": {
              "found": true,
              "name": "scores_table"
            },
            "identifier": "ch.suedhang.apps.honos"
          },
          {
            "module": {
              "hash": "1f7be4957a718d6705735152a857c38cfcfa978a",
              "calculations": [
                "scores_calculation"
              ],
              "readme": {
                "text": "## ISK-K (Inventar Sozialer Kompetenzen - Kurzversion)\n\n### Zusammenfassung\nDas Inventar Sozialer Kompetenzen (Kurzversion) erfasst in 33 Aussagen persönliche Verhaltensweisen und Gewohnheiten zu den vier Bereichen: Soziale Orientierung, Offensivität, Selbststeuerung und Reflexibilität. Soziale Kompetenzen sind für unser Funktionieren in der Gesellschaft notwendig. Sind sie zu sehr auf einen selber oder zu sehr auf die Gesellschaft ausgerichtet, dann funktioniert das Zusammenspiel nicht. Mittlere Ausprägungen, welche beide Aspekte berücksichtigen sind daher am günstigsten.\n\n#### Auswertung / Interpretation\nAusgabe der Subskalen in z-Werten auf der Normstichprobe von Kanning (2009) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Geschlecht.\n\n",
                "parents": [
                  {
                    "text": "## ISK-K (Inventar Sozialer Kompetenzen - Kurzversion)\n\n### Zusammenfassung\nDas Inventar Sozialer Kompetenzen (Kurzversion) erfasst in 33 Aussagen persönliche Verhaltensweisen und Gewohnheiten zu den vier Bereichen: Soziale Orientierung, Offensivität, Selbststeuerung und Reflexibilität. Soziale Kompetenzen sind für unser Funktionieren in der Gesellschaft notwendig. Sind sie zu sehr auf einen selber oder zu sehr auf die Gesellschaft ausgerichtet, dann funktioniert das Zusammenspiel nicht. Mittlere Ausprägungen, welche beide Aspekte berücksichtigen sind daher am günstigsten.\n\n#### Auswertung / Interpretation\nAusgabe der Subskalen in z-Werten auf der Normstichprobe von Kanning (2009) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Geschlecht.\n\n",
                    "identifier": "ch.suedhang.apps.isk",
                    "html": "<h2>ISK-K (Inventar Sozialer Kompetenzen - Kurzversion)</h2><h3>Zusammenfassung</h3><p>Das Inventar Sozialer Kompetenzen (Kurzversion) erfasst in 33 Aussagen persönliche Verhaltensweisen und Gewohnheiten zu den vier Bereichen: Soziale Orientierung, Offensivität, Selbststeuerung und Reflexibilität. Soziale Kompetenzen sind für unser Funktionieren in der Gesellschaft notwendig. Sind sie zu sehr auf einen selber oder zu sehr auf die Gesellschaft ausgerichtet, dann funktioniert das Zusammenspiel nicht. Mittlere Ausprägungen, welche beide Aspekte berücksichtigen sind daher am günstigsten.</p><h4>Auswertung / Interpretation</h4><p>Ausgabe der Subskalen in z-Werten auf der Normstichprobe von Kanning (2009) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Geschlecht.</p>"
                  }
                ],
                "html": "<h2>ISK-K (Inventar Sozialer Kompetenzen - Kurzversion)</h2><h3>Zusammenfassung</h3><p>Das Inventar Sozialer Kompetenzen (Kurzversion) erfasst in 33 Aussagen persönliche Verhaltensweisen und Gewohnheiten zu den vier Bereichen: Soziale Orientierung, Offensivität, Selbststeuerung und Reflexibilität. Soziale Kompetenzen sind für unser Funktionieren in der Gesellschaft notwendig. Sind sie zu sehr auf einen selber oder zu sehr auf die Gesellschaft ausgerichtet, dann funktioniert das Zusammenspiel nicht. Mittlere Ausprägungen, welche beide Aspekte berücksichtigen sind daher am günstigsten.</p><h4>Auswertung / Interpretation</h4><p>Ausgabe der Subskalen in z-Werten auf der Normstichprobe von Kanning (2009) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Geschlecht.</p>"
              },
              "surveys": [
                {
                  "identifier": "isk",
                  "name": "ISK-K"
                }
              ],
              "templates": [
                {
                  "height": 12,
                  "width": 6,
                  "name": "ISK-K"
                }
              ],
              "identifier": "ch.suedhang.apps.isk.production",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "ISK-K",
              "dependencies": [],
              "name": "ISK-K",
              "events": [
                {
                  "due_after": 259200,
                  "survey": "isk",
                  "name": "activation",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "Eintritt: Inventar Sozialer Kompetenzen (ISK)"
                },
                {
                  "due_after": 259200,
                  "survey": "isk",
                  "name": "exit",
                  "time_spec": {
                    "days": 10,
                    "time": "08:00:00",
                    "type": "before_exit"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "Austritt: Inventar Sozialer Kompetenzen (ISK)"
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Persönliche Verhaltensweisen und Gewohnheiten zu den vier Bereichen: Soziale Orientierung, Offensivität, Selbststeuerung und Reflexibilität.",
              "database_schema_name": "ch_suedhang_apps_isk_production",
              "database_user_name": "ch_suedhang_apps_isk_production",
              "description": "",
              "developer": {
                "email": "nora.schoenenberger@suedhang.ch",
                "phone": "+41 (0)31 828 14 92",
                "first_name": "Nora",
                "website": "http://suedhang.ch/de/Forschung",
                "company": "Suedhang",
                "last_name": "Schönenberger",
                "github_user": "schoenenb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "1f7be4957a718d6705735152a857c38cfcfa978a",
                "name_overwrite": "ISK-K",
                "overwritten": false,
                "last_update": "2018-06-10T08:33:12Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.isk.production"
              },
              "id": 66
            },
            "first_template": {
              "found": true,
              "name": "ISK-K"
            },
            "identifier": "ch.suedhang.apps.isk.production"
          },
          {
            "module": {
              "hash": "543cdd603c0be7a4d8c504e12c354f38530fb330",
              "calculations": [
                "another_calculation"
              ],
              "readme": {
                "text": "## Einzelassessment\n\n### Zusammenfassung\nAngaben aus dem Einzelassessment - Substanzkonsum, Neuroanamnese, Konsumziel bei Austritt\n\n#### Auswertung / Interpretation\nAusgabe der einzelnen Items aus dem Bereich Neuroanamnese, welche die Bearbeitung des TMT beeinflussen könnten.\n\n",
                "parents": [
                  {
                    "text": "## Einzelassessment\n\n### Zusammenfassung\nAngaben aus dem Einzelassessment - Substanzkonsum, Neuroanamnese, Konsumziel bei Austritt\n\n#### Auswertung / Interpretation\nAusgabe der einzelnen Items aus dem Bereich Neuroanamnese, welche die Bearbeitung des TMT beeinflussen könnten.\n\n",
                    "identifier": "ch.suedhang.apps.neuroanamnese",
                    "html": "<h2>Einzelassessment</h2><h3>Zusammenfassung</h3><p>Angaben aus dem Einzelassessment - Substanzkonsum, Neuroanamnese, Konsumziel bei Austritt</p><h4>Auswertung / Interpretation</h4><p>Ausgabe der einzelnen Items aus dem Bereich Neuroanamnese, welche die Bearbeitung des TMT beeinflussen könnten.</p>"
                  }
                ],
                "html": "<h2>Einzelassessment</h2><h3>Zusammenfassung</h3><p>Angaben aus dem Einzelassessment - Substanzkonsum, Neuroanamnese, Konsumziel bei Austritt</p><h4>Auswertung / Interpretation</h4><p>Ausgabe der einzelnen Items aus dem Bereich Neuroanamnese, welche die Bearbeitung des TMT beeinflussen könnten.</p>"
              },
              "surveys": [
                {
                  "identifier": "assessment",
                  "name": "Neuroanamnese"
                }
              ],
              "templates": [
                {
                  "height": 4,
                  "width": 4,
                  "name": "simple_score"
                }
              ],
              "identifier": "ch.suedhang.apps.neuroanamnese.production",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Neuroanamnese Einzelassessment",
              "dependencies": [],
              "name": "Neuroanamnese Einzelassessment",
              "events": [
                {
                  "due_after": 345600,
                  "survey": "assessment",
                  "name": "activation",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "Neuroanamnese zum TMT"
                },
                {
                  "due_after": 345600,
                  "survey": "assessment",
                  "name": "exit",
                  "time_spec": {
                    "days": 5,
                    "time": "08:00:00",
                    "type": "before_exit"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "Neuroanamnese zum TMT"
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Erhebung relevanter Faktoren für die Normierung der TMT-Referenzstichprobe bei Alkoholabhängigen",
              "database_schema_name": "ch_suedhang_apps_neuroanamnese_production",
              "database_user_name": "ch_suedhang_apps_neuroanamnese_production",
              "description": "Da die Leistung im TMT durch diverse Einflüsse verändert oder gar vermindert sein kann, werden diese Einflüsse hier abgefragt. Dazu wird eine zusätzliche Erhebung zu Konsum, -dauer & -menge jeglicher psychotroper Substanzen in den vergangenen 30 Tagen bzw. während des stationären Aufenthaltes, zur Medikation, klinischen Befunden und einer medizinischen Anamnese durchgeführt.\n\n",
              "developer": {
                "email": "nora.schoenenberger@suedhang.ch",
                "phone": "+41 (0)31 828 14 92",
                "first_name": "Nora",
                "website": "http://suedhang.ch/de/",
                "company": "Suedhang",
                "last_name": "Schönenberger",
                "github_user": "schoenenb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "543cdd603c0be7a4d8c504e12c354f38530fb330",
                "name_overwrite": "Neuroanamnese Einzelassessment",
                "overwritten": false,
                "last_update": "2018-06-10T08:48:21Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.neuroanamnese.production"
              },
              "id": 88
            },
            "first_template": {
              "found": true,
              "name": "simple_score"
            },
            "identifier": "ch.suedhang.apps.neuroanamnese.production"
          },
          {
            "module": {
              "hash": "1b29db072835772f0980f4a113e2d51ff9ad2c11",
              "calculations": [
                "another_calculation"
              ],
              "readme": {
                "text": "## ZüPaZ (Zürcher Fragebogen zur Patientenzufriedenheit in der Psychiatrie)\n\n### Zusammenfassung\nSüdhang-Version: Erfassung der Patientenzufriedenheit in den Bereichen Behandlung, Hotellerie, Mitspracherecht.\n\n",
                "parents": [
                  {
                    "text": "## ZüPaZ (Zürcher Fragebogen zur Patientenzufriedenheit in der Psychiatrie)\n\n### Zusammenfassung\nSüdhang-Version: Erfassung der Patientenzufriedenheit in den Bereichen Behandlung, Hotellerie, Mitspracherecht.\n\n",
                    "identifier": "ch.suedhang.apps.zuepaz",
                    "html": "<h2>ZüPaZ (Zürcher Fragebogen zur Patientenzufriedenheit in der Psychiatrie)</h2><h3>Zusammenfassung</h3><p>Südhang-Version: Erfassung der Patientenzufriedenheit in den Bereichen Behandlung, Hotellerie, Mitspracherecht.</p>"
                  }
                ],
                "html": "<h2>ZüPaZ (Zürcher Fragebogen zur Patientenzufriedenheit in der Psychiatrie)</h2><h3>Zusammenfassung</h3><p>Südhang-Version: Erfassung der Patientenzufriedenheit in den Bereichen Behandlung, Hotellerie, Mitspracherecht.</p>"
              },
              "surveys": [
                {
                  "identifier": "ZuePaZ_Suedhang",
                  "name": "Zuepaz"
                }
              ],
              "templates": [
                {
                  "height": 14,
                  "width": 6,
                  "name": "ZuePaZ"
                }
              ],
              "identifier": "ch.suedhang.apps.zuepaz.production",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Patientenzufriedenheit (ZüPaZ)",
              "dependencies": [],
              "name": "Patientenzufriedenheit (ZüPaZ)",
              "events": [
                {
                  "due_after": 259200,
                  "survey": "ZuePaZ_Suedhang",
                  "name": "exit",
                  "time_spec": {
                    "days": 10,
                    "time": "08:00:00",
                    "type": "before_exit"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "Erfassung der Patientenzufriedenheit"
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Zürcher Patientenzufriedenheit Fragebogen mit spezifischen Anpassungen für die Klinik Südhang",
              "database_schema_name": "ch_suedhang_apps_zuepaz_production",
              "database_user_name": "ch_suedhang_apps_zuepaz_production",
              "description": "Es wird die allgemeine Zufriedenheit der Patienten mit der Klinik Südhang erfragt - vom Eintritt bis zum Austritt, in den Bereichen Hotellerie, Informationsfluss, Therapieangebote und Behandlung durch das (therapeutische) Personal.\n\n",
              "developer": {
                "email": "nora.schoenenberger@suedhang.ch",
                "phone": "+41 (0)31 828 14 51",
                "first_name": "Nora",
                "website": "http://www.optinomic.com/",
                "company": "Suedhang",
                "last_name": "Schönenberger",
                "github_user": "schoenenb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "1b29db072835772f0980f4a113e2d51ff9ad2c11",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2018-11-20T10:36:56Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.zuepaz.production"
              },
              "id": 117
            },
            "first_template": {
              "found": true,
              "name": "ZuePaZ"
            },
            "identifier": "ch.suedhang.apps.zuepaz.production"
          },
          {
            "module": {
              "hash": "e1dedd7943c5333891f2163d59d42557f2161bfd",
              "calculations": [
                "rs13_score"
              ],
              "readme": {
                "text": "## Resilienzfragebogen (RS-13)\n\n### Zusammenfassung\nMit dem Resilienzfragebogen (RS-13) wird die die psychische Widerstandskraft; die Fähigkeit, schwierige Lebenssituationen ohne anhaltende Beeinträchtigung zu überstehen erfasst.\n\n#### Auswertung / Interpretation\nDie Auswertung erfolgt über eine Addition der Punktwerte. Für die Interpretation der Merkmalausprägung für Resilienz empfiehlt sich folgendes Schema:\n\n13 - 66  =  Niedrig\n\n67 - 72  =  Moderat\n\n73 - 91  =  Hoch\n\n\n",
                "parents": [],
                "html": "<h2>Resilienzfragebogen (RS-13)</h2><h3>Zusammenfassung</h3><p>Mit dem Resilienzfragebogen (RS-13) wird die die psychische Widerstandskraft; die Fähigkeit, schwierige Lebenssituationen ohne anhaltende Beeinträchtigung zu überstehen erfasst.</p><h4>Auswertung / Interpretation</h4><p>Die Auswertung erfolgt über eine Addition der Punktwerte. Für die Interpretation der Merkmalausprägung für Resilienz empfiehlt sich folgendes Schema:</p><p>13 - 66  =  Niedrig</p><p>67 - 72  =  Moderat</p><p>73 - 91  =  Hoch</p>"
              },
              "surveys": [
                {
                  "identifier": "rs13_ng",
                  "name": "Resilienzfragebogen (RS-13)"
                }
              ],
              "templates": [
                {
                  "height": 12,
                  "width": 6,
                  "name": "Resilienz"
                }
              ],
              "identifier": "org.optinomic.template.test",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Resilienzfragebogen (RS-13)",
              "dependencies": [],
              "name": "Resilienzfragebogen (RS-13)",
              "events": [],
              "version": "1.0",
              "type": "patient",
              "short_description": "Psychische Widerstandskraft",
              "database_schema_name": "org_optinomic_template_test",
              "database_user_name": "org_optinomic_template_test",
              "description": "Mit dem Resilienzfragebogen (RS-13) wird die die psychische Widerstandskraft; die Fähigkeit, schwierige Lebenssituationen ohne anhaltende Beeinträchtigung zu überstehen erfasst.\n\n",
              "developer": {
                "email": "nora.schoenenberger@suedhang.ch",
                "phone": "+41 (0)31 828 14 92",
                "first_name": "Nora",
                "website": "http://suedhang.ch/de/Forschung",
                "company": "Suedhang",
                "last_name": "Schönenberger",
                "github_user": "schoenenb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "e1dedd7943c5333891f2163d59d42557f2161bfd",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2020-03-27T15:50:01Z",
                "version": "1.0",
                "module": "org.optinomic.template.test"
              },
              "id": 155
            },
            "first_template": {
              "found": true,
              "name": "Resilienz"
            },
            "identifier": "org.optinomic.template.test"
          },
          {
            "module": {
              "hash": "4165da00fa2c584cfc849aa6677c0d1c36fa50f7",
              "calculations": [
                "resilienz_score"
              ],
              "readme": {
                "text": "## Resilienzfragebogen (RS-13)\n\n### Zusammenfassung\nMit dem Resilienzfragebogen (RS-13) wird die die psychische Widerstandskraft; die Fähigkeit, schwierige Lebenssituationen ohne anhaltende Beeinträchtigung zu überstehen erfasst.\n\n#### Auswertung / Interpretation\nDie Auswertung erfolgt über eine Addition der Punktwerte. Für die Interpretation der Merkmalausprägung für Resilienz empfiehlt sich folgendes Schema:\n\n13 - 66  =  Niedrig    \n67 - 72  =  Moderat    \n73 - 91  =  Hoch    \n\n\n\n",
                "parents": [
                  {
                    "text": "## Resilienzfragebogen (RS-13)\n\n### Zusammenfassung\nMit dem Resilienzfragebogen (RS-13) wird die die psychische Widerstandskraft; die Fähigkeit, schwierige Lebenssituationen ohne anhaltende Beeinträchtigung zu überstehen erfasst.\n\n#### Auswertung / Interpretation\nDie Auswertung erfolgt über eine Addition der Punktwerte. Für die Interpretation der Merkmalausprägung für Resilienz empfiehlt sich folgendes Schema:\n\n13 - 66  =  Niedrig\n\n67 - 72  =  Moderat\n\n73 - 91  =  Hoch\n\n\n\n",
                    "identifier": "ch.suedhang.apps.rs13",
                    "html": "<h2>Resilienzfragebogen (RS-13)</h2><h3>Zusammenfassung</h3><p>Mit dem Resilienzfragebogen (RS-13) wird die die psychische Widerstandskraft; die Fähigkeit, schwierige Lebenssituationen ohne anhaltende Beeinträchtigung zu überstehen erfasst.</p><h4>Auswertung / Interpretation</h4><p>Die Auswertung erfolgt über eine Addition der Punktwerte. Für die Interpretation der Merkmalausprägung für Resilienz empfiehlt sich folgendes Schema:</p><p>13 - 66  =  Niedrig</p><p>67 - 72  =  Moderat</p><p>73 - 91  =  Hoch</p>"
                  }
                ],
                "html": "<h2>Resilienzfragebogen (RS-13)</h2><h3>Zusammenfassung</h3><p>Mit dem Resilienzfragebogen (RS-13) wird die die psychische Widerstandskraft; die Fähigkeit, schwierige Lebenssituationen ohne anhaltende Beeinträchtigung zu überstehen erfasst.</p><h4>Auswertung / Interpretation</h4><p>Die Auswertung erfolgt über eine Addition der Punktwerte. Für die Interpretation der Merkmalausprägung für Resilienz empfiehlt sich folgendes Schema:</p><p>13 - 66  =  Niedrig<br>67 - 72  =  Moderat<br>73 - 91  =  Hoch</p>"
              },
              "surveys": [
                {
                  "identifier": "rs13_ng",
                  "name": "Resilienzfragebogen (RS-13)"
                }
              ],
              "templates": [
                {
                  "height": 6,
                  "width": 6,
                  "name": "Resilienz"
                }
              ],
              "identifier": "ch.suedhang.apps.rs13.production",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Resilienzfragebogen (RS-13)",
              "dependencies": [],
              "name": "Resilienzfragebogen (RS-13)",
              "events": [
                {
                  "due_after": 259200,
                  "survey": "rs13_ng",
                  "name": "activation",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "RS-13 Eintritt"
                },
                {
                  "due_after": 259200,
                  "survey": "rs13_ng",
                  "name": "exit",
                  "time_spec": {
                    "days": 10,
                    "time": "08:00:00",
                    "type": "before_exit"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "RS-13 Austritt"
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Psychische Widerstandskraft",
              "database_schema_name": "ch_suedhang_apps_rs13_production",
              "database_user_name": "ch_suedhang_apps_rs13_production",
              "description": "Mit dem Resilienzfragebogen (RS-13) wird die die psychische Widerstandskraft; die Fähigkeit, schwierige Lebenssituationen ohne anhaltende Beeinträchtigung zu überstehen erfasst.\n\n",
              "developer": {
                "email": "nora.schoenenberger@suedhang.ch",
                "phone": "+41 (0)31 828 14 92",
                "first_name": "Nora",
                "website": "http://suedhang.ch/de/Forschung",
                "company": "Suedhang",
                "last_name": "Schönenberger",
                "github_user": "schoenenb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "4165da00fa2c584cfc849aa6677c0d1c36fa50f7",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2020-03-29T15:03:54Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.rs13.production"
              },
              "id": 249
            },
            "first_template": {
              "found": true,
              "name": "Resilienz"
            },
            "identifier": "ch.suedhang.apps.rs13.production"
          },
          {
            "module": {
              "hash": "732367e4bde83292072e3a97ca493473d4d7d7ec",
              "calculations": [
                "scores"
              ],
              "readme": {
                "text": "## SCI (Stress-Coping-Inventar)\n\n### Zusammenfassung\nDas SCI ist ein wissenschaftliches Fragebogen-Instrument zur zuverlässigen Messung von Stressbelastung, Stresssymptomen und Stressbewältigungs-Strategien (Coping).\n\n#### Skalen\nAlle Skalen erreichen überzeugende psychometrische Kennwerte. Eine detaillierte Faktorenanalyse konnte zudem die Annahme von fünf unterschiedlichen Coping-Strategien bestätigen. Weitere Untersuchungen lieferten überzeugende Belege für die Aussagekraft der Skalen. So zeigte sich, dass Personen, die unter viel Stress leiden aber trotzdem nur wenige Folgesymptome aufweisen, mehr adaptive Coping-Strategien einsetzen.\n\n#### Weiterführende Links\n- [Stress- und Coping-Inventar (SCI)](http://www.drsatow.de/tests/stress-und-coping-inventar.html)\n\n",
                "parents": [
                  {
                    "text": "## SCI (Stress-Coping-Inventar)\n\n### Zusammenfassung\nDas SCI ist ein wissenschaftliches Fragebogen-Instrument zur zuverlässigen Messung von Stressbelastung, Stresssymptomen und Stressbewältigungs-Strategien (Coping).\n\n#### Skalen\nAlle Skalen erreichen überzeugende psychometrische Kennwerte. Eine detaillierte Faktorenanalyse konnte zudem die Annahme von fünf unterschiedlichen Coping-Strategien bestätigen. Weitere Untersuchungen lieferten überzeugende Belege für die Aussagekraft der Skalen. So zeigte sich, dass Personen, die unter viel Stress leiden aber trotzdem nur wenige Folgesymptome aufweisen, mehr adaptive Coping-Strategien einsetzen.\n\n#### Weiterführende Links\n- [Stress- und Coping-Inventar (SCI)](http://www.drsatow.de/tests/stress-und-coping-inventar.html)\n\n",
                    "identifier": "ch.suedhang.apps.sci",
                    "html": "<h2>SCI (Stress-Coping-Inventar)</h2><h3>Zusammenfassung</h3><p>Das SCI ist ein wissenschaftliches Fragebogen-Instrument zur zuverlässigen Messung von Stressbelastung, Stresssymptomen und Stressbewältigungs-Strategien (Coping).</p><h4>Skalen</h4><p>Alle Skalen erreichen überzeugende psychometrische Kennwerte. Eine detaillierte Faktorenanalyse konnte zudem die Annahme von fünf unterschiedlichen Coping-Strategien bestätigen. Weitere Untersuchungen lieferten überzeugende Belege für die Aussagekraft der Skalen. So zeigte sich, dass Personen, die unter viel Stress leiden aber trotzdem nur wenige Folgesymptome aufweisen, mehr adaptive Coping-Strategien einsetzen.</p><h4>Weiterführende Links</h4><ul><li><p><a href=\"http://www.drsatow.de/tests/stress-und-coping-inventar.html\">Stress- und Coping-Inventar (SCI)</a></p></li></ul>"
                  }
                ],
                "html": "<h2>SCI (Stress-Coping-Inventar)</h2><h3>Zusammenfassung</h3><p>Das SCI ist ein wissenschaftliches Fragebogen-Instrument zur zuverlässigen Messung von Stressbelastung, Stresssymptomen und Stressbewältigungs-Strategien (Coping).</p><h4>Skalen</h4><p>Alle Skalen erreichen überzeugende psychometrische Kennwerte. Eine detaillierte Faktorenanalyse konnte zudem die Annahme von fünf unterschiedlichen Coping-Strategien bestätigen. Weitere Untersuchungen lieferten überzeugende Belege für die Aussagekraft der Skalen. So zeigte sich, dass Personen, die unter viel Stress leiden aber trotzdem nur wenige Folgesymptome aufweisen, mehr adaptive Coping-Strategien einsetzen.</p><h4>Weiterführende Links</h4><ul><li><p><a href=\"http://www.drsatow.de/tests/stress-und-coping-inventar.html\">Stress- und Coping-Inventar (SCI)</a></p></li></ul>"
              },
              "surveys": [
                {
                  "identifier": "SCI",
                  "name": "SCI"
                }
              ],
              "templates": [
                {
                  "height": 12,
                  "width": 6,
                  "name": "SCI"
                }
              ],
              "identifier": "ch.suedhang.apps.sci.production",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Stress-Coping-Inventar (SCI)",
              "dependencies": [],
              "name": "Stress-Coping-Inventar (SCI)",
              "events": [
                {
                  "due_after": 259200,
                  "survey": "SCI",
                  "name": "activation",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "Eintritt: Stress-Coping-Inventar (SCI)"
                },
                {
                  "due_after": 259200,
                  "survey": "SCI",
                  "name": "exit",
                  "time_spec": {
                    "days": 10,
                    "time": "08:00:00",
                    "type": "before_exit"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "Austritt: Stress-Coping-Inventar (SCI)"
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Messung von Stressbelastung, Stresssymptomen und Stressbewältigungs-Strategien (Coping)",
              "database_schema_name": "ch_suedhang_apps_sci_production",
              "database_user_name": "ch_suedhang_apps_sci_production",
              "description": "",
              "developer": {
                "email": "nora.schoenenberger@suedhang.ch",
                "phone": "+41 (0)31 828 14 92",
                "first_name": "Nora",
                "website": "http://suedhang.ch/de/Forschung",
                "company": "Suedhang",
                "last_name": "Schönenberger",
                "github_user": "schoenenb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "732367e4bde83292072e3a97ca493473d4d7d7ec",
                "name_overwrite": "Stress-Coping-Inventar (SCI)",
                "overwritten": false,
                "last_update": "2018-06-10T08:47:18Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.sci.production"
              },
              "id": 86
            },
            "first_template": {
              "found": true,
              "name": "SCI"
            },
            "identifier": "ch.suedhang.apps.sci.production"
          },
          {
            "module": {
              "hash": "d274033371ee86a51ec88f3bd5feb803d57006ed",
              "calculations": [
                "tmt_score"
              ],
              "readme": {
                "text": "## TMT (Trail Making Test)\n\n### Zusammenfassung\nMit dem TMT wird die Fähigkeit zum visuellen Scannen, die psychomotorische Geschwindigkeit (TMT A) sowie die Leistungen der exekutiven Funktionen, insbesondere kognitive Flexibilität und Switching (TMT B) erfasst.\n\n#### Auswertung / Interpretation\nAusgabe der Subskalen in z-Werten auf der Normstichprobe von Tombaugh (2004) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Alter und den Ausbildungsgrad (bis 12 Jahre vs. mehr als 12 Jahre).\n\n##### Quotient B/A\nDer Quotient B/A stellt das 'reine' Maß der im Trail Making Test B erhobenen exekutiven Funktionen dar und ist unabhängig von einer evtl. vorliegenden Verlangsamung. Normwerte sind für letzteren Kennwert nur für Personen ≥ 50-jährig verfügbar.  Faustregel: ein  B/A-Quotient > 2.5 gilt als Hinweis für eine auffällige Testleistung.\n\n",
                "parents": [
                  {
                    "text": "## TMT (Trail Making Test)\n\n### Zusammenfassung\nMit dem TMT wird die Fähigkeit zum visuellen Scannen, die psychomotorische Geschwindigkeit (TMT A) sowie die Leistungen der exekutiven Funktionen, insbesondere kognitive Flexibilität und Switching (TMT B) erfasst.\n\n#### Auswertung / Interpretation\nAusgabe der Subskalen in z-Werten auf der Normstichprobe von Tombaugh (2004) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Alter und den Ausbildungsgrad (bis 12 Jahre vs. mehr als 12 Jahre).\n\n##### Quotient B/A\nDer Quotient B/A stellt das 'reine' Maß der im Trail Making Test B erhobenen exekutiven Funktionen dar und ist unabhängig von einer evtl. vorliegenden Verlangsamung. Normwerte sind für letzteren Kennwert nur für Personen ≥ 50-jährig verfügbar.  Faustregel: ein  B/A-Quotient > 2.5 gilt als Hinweis für eine auffällige Testleistung.\n\n",
                    "identifier": "ch.suedhang.apps.tmt_V3",
                    "html": "<h2>TMT (Trail Making Test)</h2><h3>Zusammenfassung</h3><p>Mit dem TMT wird die Fähigkeit zum visuellen Scannen, die psychomotorische Geschwindigkeit (TMT A) sowie die Leistungen der exekutiven Funktionen, insbesondere kognitive Flexibilität und Switching (TMT B) erfasst.</p><h4>Auswertung / Interpretation</h4><p>Ausgabe der Subskalen in z-Werten auf der Normstichprobe von Tombaugh (2004) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Alter und den Ausbildungsgrad (bis 12 Jahre vs. mehr als 12 Jahre).</p><h5>Quotient B/A</h5><p>Der Quotient B/A stellt das 'reine' Maß der im Trail Making Test B erhobenen exekutiven Funktionen dar und ist unabhängig von einer evtl. vorliegenden Verlangsamung. Normwerte sind für letzteren Kennwert nur für Personen ≥ 50-jährig verfügbar.  Faustregel: ein  B/A-Quotient &gt; 2.5 gilt als Hinweis für eine auffällige Testleistung.</p>"
                  }
                ],
                "html": "<h2>TMT (Trail Making Test)</h2><h3>Zusammenfassung</h3><p>Mit dem TMT wird die Fähigkeit zum visuellen Scannen, die psychomotorische Geschwindigkeit (TMT A) sowie die Leistungen der exekutiven Funktionen, insbesondere kognitive Flexibilität und Switching (TMT B) erfasst.</p><h4>Auswertung / Interpretation</h4><p>Ausgabe der Subskalen in z-Werten auf der Normstichprobe von Tombaugh (2004) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Alter und den Ausbildungsgrad (bis 12 Jahre vs. mehr als 12 Jahre).</p><h5>Quotient B/A</h5><p>Der Quotient B/A stellt das 'reine' Maß der im Trail Making Test B erhobenen exekutiven Funktionen dar und ist unabhängig von einer evtl. vorliegenden Verlangsamung. Normwerte sind für letzteren Kennwert nur für Personen ≥ 50-jährig verfügbar.  Faustregel: ein  B/A-Quotient &gt; 2.5 gilt als Hinweis für eine auffällige Testleistung.</p>"
              },
              "surveys": [
                {
                  "identifier": "tmt_ng",
                  "name": "Trail Making Test (TMT)"
                }
              ],
              "templates": [
                {
                  "height": 12,
                  "width": 6,
                  "name": "TMT"
                }
              ],
              "identifier": "ch.suedhang.apps.tmt.production",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Trail Making Test (TMT)",
              "dependencies": [],
              "name": "Trail Making Test (TMT)",
              "events": [
                {
                  "due_after": 259200,
                  "survey": "tmt_ng",
                  "name": "activation",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "TMT-Erfassung Eintritt"
                },
                {
                  "due_after": 259200,
                  "survey": "tmt_ng",
                  "name": "exit",
                  "time_spec": {
                    "days": 5,
                    "time": "08:00:00",
                    "type": "before_exit"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "TMT-Erfassung Austritt"
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Die psychomotorische Geschwindigkeit (TMT A) und kognitive Flexibilität (TMT B) werden erfasst.",
              "database_schema_name": "ch_suedhang_apps_tmt_production",
              "database_user_name": "ch_suedhang_apps_tmt_production",
              "description": "",
              "developer": {
                "email": "nora.schoenenberger@suedhang.ch",
                "phone": "+41 (0)31 828 14 92",
                "first_name": "Nora",
                "website": "http://suedhang.ch/de/Forschung",
                "company": "Suedhang",
                "last_name": "Schönenberger",
                "github_user": "schoenenb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "d274033371ee86a51ec88f3bd5feb803d57006ed",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2019-10-04T11:09:35Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.tmt.production"
              },
              "id": 129
            },
            "first_template": {
              "found": true,
              "name": "TMT"
            },
            "identifier": "ch.suedhang.apps.tmt.production"
          },
          {
            "module": {
              "hash": "5bc927ee264a7b7b15727eb27225a8c86104dc06",
              "calculations": [
                "phys_psych_calculation"
              ],
              "readme": {
                "text": "## WHOQOL-BREF (WHO Quality of Life - Kurzversion)\n\n### Zusammenfassung\nBeurteilung der Dimensionen - Physischen und Psychischen Lebensqualität.\n\n",
                "parents": [
                  {
                    "text": "## WHOQOL-BREF (WHO Quality of Life - Kurzversion)\n\n### Zusammenfassung\nBeurteilung der Dimensionen - Physischen und Psychischen Lebensqualität.\n\n",
                    "identifier": "com.optinomic.apps.whoqol",
                    "html": "<h2>WHOQOL-BREF (WHO Quality of Life - Kurzversion)</h2><h3>Zusammenfassung</h3><p>Beurteilung der Dimensionen - Physischen und Psychischen Lebensqualität.</p>"
                  }
                ],
                "html": "<h2>WHOQOL-BREF (WHO Quality of Life - Kurzversion)</h2><h3>Zusammenfassung</h3><p>Beurteilung der Dimensionen - Physischen und Psychischen Lebensqualität.</p>"
              },
              "surveys": [
                {
                  "identifier": "WHOQOL",
                  "name": "WHOQOL"
                }
              ],
              "templates": [
                {
                  "height": 12,
                  "width": 6,
                  "name": "WHOQOL"
                }
              ],
              "identifier": "ch.suedhang.apps.whoqol.production",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "WHOQOL-BREF",
              "dependencies": [],
              "name": "WHOQOL-BREF",
              "events": [
                {
                  "due_after": 259200,
                  "survey": "WHOQOL",
                  "name": "activation",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "Eintritt - Lebensqualität (WHOQOL)"
                },
                {
                  "due_after": 864000,
                  "survey": "WHOQOL",
                  "name": "exit",
                  "time_spec": {
                    "days": 10,
                    "time": "08:00:00",
                    "type": "before_exit"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "Austritt - Lebensqualität (WHOQOL)"
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Beurteilung der Physischen und Psychischen Lebensqualität.",
              "database_schema_name": "ch_suedhang_apps_whoqol_production",
              "database_user_name": "ch_suedhang_apps_whoqol_production",
              "description": "",
              "developer": {
                "email": "nora.schoenenberger@suedhang.ch",
                "phone": "+41 (0)31 828 14 92",
                "first_name": "Nora",
                "website": "http://suedhang.ch/de/Forschung",
                "company": "Suedhang",
                "last_name": "Schönenberger",
                "github_user": "schoenenb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "5bc927ee264a7b7b15727eb27225a8c86104dc06",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2019-05-23T16:03:00Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.whoqol.production"
              },
              "id": 121
            },
            "first_template": {
              "found": true,
              "name": "WHOQOL"
            },
            "identifier": "ch.suedhang.apps.whoqol.production"
          },
          {
            "module": {
              "hash": "aae559c382dcf46cf08cbb3c35a7a6963f48a41f",
              "calculations": [],
              "readme": {
                "text": "# Optinomic Chat-Engine.\n\nCore messaging features.\n\n\n## ToDo\n- Desktop-Notifications not working - until HTTPS!!!\n- FIX: History-Messages - Emoji not rendered.\n\n## Implemented Features\n- User Online/Offline Status\n- Typing Indicators\n- Unread Message Counts\n- Emoji-Support: Just type `:pizza:`  or check the supported emoticons here: [EMOJI CHEAT SHEET](https://www.webpagefx.com/tools/emoji-cheat-sheet/) \n\n## Enterprise-Grade Security\n- TLS and AES256 Encryption\n- SOC 2 Type II Compliant\n- HIPAA Compliant\n- EU GDPR Compliant\n- EU-US Privacy Shield Certiﬁed\n- EU Data Storage\n\n\n## RAW Source\nhttps://raw.githubusercontent.com/Optinomic/apps/master/org.optinomic.chat.suedhang-1.0.opapp\n\n\n# Contact\n\n![image](http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png)     \n\n*Optinomic GmbH*   \n*Haldenstrasse 7*     \n*CH - 8942 Oberrieden*     \n*+41(0)44 508 26 76*    \n*info@optinomic.com*   \n*[www.optinomic.com](http://www.optinomic.com)*   \n\n\n\n",
                "parents": [],
                "html": "<h1>Optinomic Chat-Engine.</h1><p>Core messaging features.</p><h2>ToDo</h2><ul><li>Desktop-Notifications not working - until HTTPS!!!</li><li>FIX: History-Messages - Emoji not rendered.</li></ul><h2>Implemented Features</h2><ul><li>User Online/Offline Status</li><li>Typing Indicators</li><li>Unread Message Counts</li><li>Emoji-Support: Just type <code>:pizza:</code>  or check the supported emoticons here: <a href=\"https://www.webpagefx.com/tools/emoji-cheat-sheet/\">EMOJI CHEAT SHEET</a></li></ul><h2>Enterprise-Grade Security</h2><ul><li>TLS and AES256 Encryption</li><li>SOC 2 Type II Compliant</li><li>HIPAA Compliant</li><li>EU GDPR Compliant</li><li>EU-US Privacy Shield Certiﬁed</li><li>EU Data Storage</li></ul><h2>RAW Source</h2><p>https://raw.githubusercontent.com/Optinomic/apps/master/org.optinomic.chat.suedhang-1.0.opapp</p><h1>Contact</h1><p><img src=\"http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png\" alt=\"image\"></p><p><i>Optinomic GmbH</i><br><i>Haldenstrasse 7</i><br><i>CH - 8942 Oberrieden</i><br><i>+41(0)44 508 26 76</i><br><i>info@optinomic.com</i><br><i><a href=\"http://www.optinomic.com\">www.optinomic.com</a></i></p>"
              },
              "surveys": [],
              "templates": [
                {
                  "height": 7,
                  "width": 6,
                  "name": "chat"
                }
              ],
              "identifier": "org.optinomic.chat.suedhang",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "_Chat (DEVELOPMENT)",
              "dependencies": [],
              "name": "_Chat (DEVELOPMENT)",
              "events": [],
              "version": "1.0",
              "type": "patient",
              "short_description": "Chat (Beta-Channel)",
              "database_schema_name": "org_optinomic_chat_suedhang",
              "database_user_name": "org_optinomic_chat_suedhang",
              "description": "Chat-Engine\n\n",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "aae559c382dcf46cf08cbb3c35a7a6963f48a41f",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2018-06-09T08:25:44Z",
                "version": "1.0",
                "module": "org.optinomic.chat.suedhang"
              },
              "id": 35
            },
            "first_template": {
              "found": true,
              "name": "chat"
            },
            "identifier": "org.optinomic.chat.suedhang"
          },
          {
            "module": {
              "hash": "d9854d1873ac4f9016abc22768b2bf325ccb23ad",
              "calculations": [],
              "readme": {
                "text": "![image](http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png)\n## Druckvorlagen\n\n\nQuelle von [pdfmake](https://github.com/bpampuch/pdfmake/tree/master/build) \n\n\n###### Weiterführende Links\n- [pdfmake](http://pdfmake.org/#/)\n\n\n\n\n\n###Anschrift\n*Optinomic GmbH*   \n*Haldenstrasse 7*     \n*CH - 8942 Oberrieden*     \n*+41(0)44 508 26 76*    \n*info@optinomic.com*   \n*[www.optinomic.com](http://www.optinomic.com)*   \n\n\n\n",
                "parents": [],
                "html": "<p><img src=\"http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png\" alt=\"image\">\n## Druckvorlagen</p><p>Quelle von <a href=\"https://github.com/bpampuch/pdfmake/tree/master/build\">pdfmake</a></p><h6>Weiterführende Links</h6><ul><li><p><a href=\"http://pdfmake.org/#/\">pdfmake</a></p></li></ul><h3>Anschrift</h3><p><i>Optinomic GmbH</i><br><i>Haldenstrasse 7</i><br><i>CH - 8942 Oberrieden</i><br><i>+41(0)44 508 26 76</i><br><i>info@optinomic.com</i><br><i><a href=\"http://www.optinomic.com\">www.optinomic.com</a></i></p>"
              },
              "surveys": [],
              "templates": [
                {
                  "height": 9,
                  "width": 6,
                  "name": "pdf"
                },
                {
                  "height": 9,
                  "width": 6,
                  "name": "assessment_report_only"
                }
              ],
              "identifier": "ch.suedhang.apps.pdf_druckvorlagen",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "_Druckvorlagen (PDF)",
              "dependencies": [],
              "name": "_Druckvorlagen (PDF)",
              "events": [],
              "version": "1.0",
              "type": "patient",
              "short_description": "Druckvorlagen als PDF-Files öffnen und herunterladen.",
              "database_schema_name": "ch_suedhang_apps_pdf_druckvorlagen",
              "database_user_name": "ch_suedhang_apps_pdf_druckvorlagen",
              "description": "",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "d9854d1873ac4f9016abc22768b2bf325ccb23ad",
                "name_overwrite": "_Druckvorlagen (PDF)",
                "overwritten": false,
                "last_update": "2019-10-29T14:03:36Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.pdf_druckvorlagen"
              },
              "id": 130
            },
            "first_template": {
              "found": true,
              "name": "pdf"
            },
            "identifier": "ch.suedhang.apps.pdf_druckvorlagen"
          },
          {
            "module": {
              "hash": "9a4828fb5379f7fa58c34f135d42c3cde2f1025d",
              "calculations": [
                "another_calculation"
              ],
              "readme": {
                "text": "## AASE-G (Versuchung) \n\n### Zusammenfassung\nEinschätzung von 20 Situationen auf ihre Versuchung, die Hauptproblemsubstanz zu konsumieren. Die Skala wurde ursprünglich für Alkoholabhängige konzipiert.\n\n#### Auswertung / Ergebnisse\n0 Punkte entsprechen keiner Versuchung, eine maximale Versuchung liegt bei 80 (allgemeiner Summenwert) respektive 4 (Subskalen) Punkten vor.\n\n\n",
                "parents": [],
                "html": "<h2>AASE-G (Versuchung)</h2><h3>Zusammenfassung</h3><p>Einschätzung von 20 Situationen auf ihre Versuchung, die Hauptproblemsubstanz zu konsumieren. Die Skala wurde ursprünglich für Alkoholabhängige konzipiert.</p><h4>Auswertung / Ergebnisse</h4><p>0 Punkte entsprechen keiner Versuchung, eine maximale Versuchung liegt bei 80 (allgemeiner Summenwert) respektive 4 (Subskalen) Punkten vor.</p>"
              },
              "surveys": [
                {
                  "identifier": "aase",
                  "name": "Alcohol Abstinence Self-Efficacy Scale (AASE)"
                }
              ],
              "templates": [
                {
                  "height": 12,
                  "width": 6,
                  "name": "AASE"
                }
              ],
              "identifier": "ch.suedhang.apps.aase-g",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "AASE-G",
              "dependencies": [],
              "name": "__dependency: AASE-G",
              "events": [
                {
                  "due_after": 86400,
                  "survey": "aase",
                  "name": "activation",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "AASE-G ausfüllen."
                },
                {
                  "due_after": 86400,
                  "survey": "aase",
                  "name": "exit",
                  "time_spec": {
                    "days": 7,
                    "time": "08:00:00",
                    "type": "before_exit"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "AASE-G ausfüllen."
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Versuchung in spezifischen Situationen",
              "database_schema_name": "ch_suedhang_apps_aase_g",
              "database_user_name": "ch_suedhang_apps_aase_g",
              "description": "",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "9a4828fb5379f7fa58c34f135d42c3cde2f1025d",
                "name_overwrite": "__dependency: AASE-G",
                "overwritten": false,
                "last_update": "2020-02-11T14:45:16Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.aase-g"
              },
              "id": 148
            },
            "first_template": {
              "found": true,
              "name": "AASE"
            },
            "identifier": "ch.suedhang.apps.aase-g"
          },
          {
            "module": {
              "hash": "6c773640b1bbe60992cbc802b9d1985c9cc9607f",
              "calculations": [
                "another_calculation"
              ],
              "readme": {
                "text": "## act-info :: Austrittsbefragung\n\n### Zusammenfassung\nact-info (addiction, care and therapy information) ist ein einheitliches, gesamtschweizerisches Klientenmonitoringsystem für den Bereich der Suchthilfe      \n\n### Themenbereiche\nBehandlung/Nachsorge, soziodemografische Angaben, Problemsubstanzen, Psychisches Befinden     \n\n#### Auswertung / Ergebnisse\n- Fagerström-Summenwert (Ausprägung der Nikotinabhängigkeit)\n- Konsumverhalten während des Aufenthaltes (Rückfälle und Rückfallsubstanzen)\n\n",
                "parents": [],
                "html": "<h2>act-info :: Austrittsbefragung</h2><h3>Zusammenfassung</h3><p>act-info (addiction, care and therapy information) ist ein einheitliches, gesamtschweizerisches Klientenmonitoringsystem für den Bereich der Suchthilfe</p><h3>Themenbereiche</h3><p>Behandlung/Nachsorge, soziodemografische Angaben, Problemsubstanzen, Psychisches Befinden</p><h4>Auswertung / Ergebnisse</h4><ul><li>Fagerström-Summenwert (Ausprägung der Nikotinabhängigkeit)</li><li>Konsumverhalten während des Aufenthaltes (Rückfälle und Rückfallsubstanzen)</li></ul>"
              },
              "surveys": [
                {
                  "identifier": "actinfo_austritt",
                  "name": "actInfo - Austritt"
                }
              ],
              "templates": [
                {
                  "height": 35,
                  "width": 6,
                  "name": "ActInfo"
                }
              ],
              "identifier": "ch.suedhang.apps.actinfo_aus",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "ActInfo | Austritt",
              "dependencies": [],
              "name": "__dependency: ActInfo | Austritt",
              "events": [
                {
                  "due_after": 129200,
                  "survey": "actinfo_austritt",
                  "name": "exit",
                  "time_spec": {
                    "days": 8,
                    "time": "08:00:00",
                    "type": "before_exit"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "actInfo - Austritt"
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Sonderversion für den stationären Alkohol- und Medikamentenbereich.",
              "database_schema_name": "ch_suedhang_apps_actinfo_aus",
              "database_user_name": "ch_suedhang_apps_actinfo_aus",
              "description": "",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "6c773640b1bbe60992cbc802b9d1985c9cc9607f",
                "name_overwrite": "__dependency: ActInfo | Austritt",
                "overwritten": false,
                "last_update": "2018-06-10T08:52:21Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.actinfo_aus"
              },
              "id": 97
            },
            "first_template": {
              "found": true,
              "name": "ActInfo"
            },
            "identifier": "ch.suedhang.apps.actinfo_aus"
          },
          {
            "module": {
              "hash": "224b9afc63a6e157c6a6e62b41e58c61a7d095ea",
              "calculations": [
                "actinfo_ein"
              ],
              "readme": {
                "text": "## act-info :: Eintrittsbefragung\n\n### Zusammenfassung\nact-info (addiction, care and therapy information) ist ein einheitliches, gesamtschweizerisches Klientenmonitoringsystem für den Bereich der Suchthilfe.\n\nErfassung der vier Bereiche Behandlungsgrundlagen, soziodemografische Angaben, Substanzkonsum und Gesundheit (ausserhalb Substanzproblematik)\n\n### Hintergrund\nDas nationale Dokumentationssystem umfasst Angebote der ambulanten und stationären Behandlung von Problemen mit legalen und illegalen Substanzen sowie von nicht-substanzgebundener Abhängigkeit. act-info ist das Resultat der Harmonisierung der bestehenden Suchthilfestatistiken.\n\nDie beteiligten Forschungsinstitute (Sucht Schweiz Lausanne, ISGF Zürich) sind für die Datenerhebung und die Auswertungen in den einzelnen Behandlungssektoren verantwortlich.\n\nact-info wird durch das Bundesamt für Gesundheit BAG finanziert und koordiniert. Die Verantwortung für das Gesamtprojekt act-info liegt beim BAG.\n\n#### Auswertung / Ergebnisse\n- Substanzkonsum vor Eintritt (Substanz + Häufigkeit)\n- Zusatzangaben vor Eintritt (Hauptproblemsubstanz)\n- AUDIT-Summenwert (Verdacht auf Alkoholabhängigkeit)\n- Fagerström-Summenwert (Ausprägung der Nikotinabhängigkeit)\n\n",
                "parents": [],
                "html": "<h2>act-info :: Eintrittsbefragung</h2><h3>Zusammenfassung</h3><p>act-info (addiction, care and therapy information) ist ein einheitliches, gesamtschweizerisches Klientenmonitoringsystem für den Bereich der Suchthilfe.</p><p>Erfassung der vier Bereiche Behandlungsgrundlagen, soziodemografische Angaben, Substanzkonsum und Gesundheit (ausserhalb Substanzproblematik)</p><h3>Hintergrund</h3><p>Das nationale Dokumentationssystem umfasst Angebote der ambulanten und stationären Behandlung von Problemen mit legalen und illegalen Substanzen sowie von nicht-substanzgebundener Abhängigkeit. act-info ist das Resultat der Harmonisierung der bestehenden Suchthilfestatistiken.</p><p>Die beteiligten Forschungsinstitute (Sucht Schweiz Lausanne, ISGF Zürich) sind für die Datenerhebung und die Auswertungen in den einzelnen Behandlungssektoren verantwortlich.</p><p>act-info wird durch das Bundesamt für Gesundheit BAG finanziert und koordiniert. Die Verantwortung für das Gesamtprojekt act-info liegt beim BAG.</p><h4>Auswertung / Ergebnisse</h4><ul><li>Substanzkonsum vor Eintritt (Substanz + Häufigkeit)</li><li>Zusatzangaben vor Eintritt (Hauptproblemsubstanz)</li><li>AUDIT-Summenwert (Verdacht auf Alkoholabhängigkeit)</li><li>Fagerström-Summenwert (Ausprägung der Nikotinabhängigkeit)</li></ul>"
              },
              "surveys": [
                {
                  "identifier": "actinfo_eintritt",
                  "name": "actInfo - Eintritt"
                }
              ],
              "templates": [
                {
                  "height": 35,
                  "width": 6,
                  "name": "ActInfo"
                }
              ],
              "identifier": "ch.suedhang.apps.actinfo_ein",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "ActInfo | Eintritt",
              "dependencies": [],
              "name": "__dependency: ActInfo | Eintritt",
              "events": [
                {
                  "due_after": 259200,
                  "survey": "actinfo_eintritt",
                  "name": "activation",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "actInfo - Eintritt"
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Sonderversion für den stationären Alkohol- und Medikamentenbereich.",
              "database_schema_name": "ch_suedhang_apps_actinfo_ein",
              "database_user_name": "ch_suedhang_apps_actinfo_ein",
              "description": "",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "224b9afc63a6e157c6a6e62b41e58c61a7d095ea",
                "name_overwrite": "__dependency: ActInfo | Eintritt",
                "overwritten": false,
                "last_update": "2018-06-10T08:52:32Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.actinfo_ein"
              },
              "id": 95
            },
            "first_template": {
              "found": true,
              "name": "ActInfo"
            },
            "identifier": "ch.suedhang.apps.actinfo_ein"
          },
          {
            "module": {
              "hash": "8ff75c16e439b14d3941dbd7849e42d5b3255a82",
              "calculations": [
                "asrs_score"
              ],
              "readme": {
                "text": "## ASRS (ADHS Screening für Erwachsene) \n\n### Zusammenfassung\nDer ASRS-Fragebogen kann als Ausgangspunkt zur Erkennung der Anzeichen/Symptome der Erwachsenen-ADHS verwendet werden, soll jedoch nicht eine Beratung bei einer geschulten medizinischen Fachkraft ersetzen. \n\n",
                "parents": [],
                "html": "<h2>ASRS (ADHS Screening für Erwachsene)</h2><h3>Zusammenfassung</h3><p>Der ASRS-Fragebogen kann als Ausgangspunkt zur Erkennung der Anzeichen/Symptome der Erwachsenen-ADHS verwendet werden, soll jedoch nicht eine Beratung bei einer geschulten medizinischen Fachkraft ersetzen.</p>"
              },
              "surveys": [
                {
                  "identifier": "asrs_ng",
                  "name": "ASRS"
                }
              ],
              "templates": [
                {
                  "height": 12,
                  "width": 6,
                  "name": "ASRS"
                }
              ],
              "identifier": "ch.suedhang.apps.asrs",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "ADHS-Screening (ASRS)",
              "dependencies": [],
              "name": "__dependency: ADHS-Screening (ASRS)",
              "events": [
                {
                  "due_after": 259200,
                  "survey": "asrs_ng",
                  "name": "activation",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "ASRS-Erhebung"
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Screening-Test mit Selbstbeurteilungs-Skala für Erwachsene",
              "database_schema_name": "ch_suedhang_apps_asrs",
              "database_user_name": "ch_suedhang_apps_asrs",
              "description": "",
              "developer": {
                "email": "nora.schoenenberger@suedhang.ch",
                "phone": "+41 (0)31 828 14 92",
                "first_name": "Nora",
                "website": "http://suedhang.ch/de/",
                "company": "Suedhang",
                "last_name": "Schönenberger",
                "github_user": "schoenenb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "8ff75c16e439b14d3941dbd7849e42d5b3255a82",
                "name_overwrite": "__dependency: ADHS-Screening (ASRS)",
                "overwritten": false,
                "last_update": "2020-02-11T15:07:17Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.asrs"
              },
              "id": 150
            },
            "first_template": {
              "found": true,
              "name": "ASRS"
            },
            "identifier": "ch.suedhang.apps.asrs"
          },
          {
            "module": {
              "hash": "11bb0f153f4b1535252ce87464981b0e75014dd6",
              "calculations": [
                "bdi_score"
              ],
              "readme": {
                "text": "## BDI-II (Beck Depressions-Inventar)\n\n### Zusammenfassung\nDer Summenwert aus den 21 Fragebereichen des Beck Depressions-Inventar liefert einen Hinweis auf den Schweregrad einer möglichen depressiven Symptomatik.\n\n",
                "parents": [],
                "html": "<h2>BDI-II (Beck Depressions-Inventar)</h2><h3>Zusammenfassung</h3><p>Der Summenwert aus den 21 Fragebereichen des Beck Depressions-Inventar liefert einen Hinweis auf den Schweregrad einer möglichen depressiven Symptomatik.</p>"
              },
              "surveys": [
                {
                  "identifier": "bdi2",
                  "name": "Beck-Depressions-Inventar (BDI-II)"
                }
              ],
              "templates": [
                {
                  "height": 12,
                  "width": 6,
                  "name": "BDI"
                },
                {
                  "height": 6,
                  "width": 6,
                  "name": "BDI_simple_score"
                }
              ],
              "identifier": "ch.suedhang.apps.bdi",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Beck-Depressions-Inventar (BDI-II)",
              "dependencies": [],
              "name": "__dependency: Beck-Depressions-Inventar (BDI-II)",
              "events": [
                {
                  "due_after": 259200,
                  "survey": "bdi2",
                  "name": "activation",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "Schweregrad depressiver Symptomatik im klinischen Bereich, 21 Aussagen"
                },
                {
                  "due_after": 259200,
                  "survey": "bdi2",
                  "name": "exit",
                  "time_spec": {
                    "days": 7,
                    "time": "08:00:00",
                    "type": "before_exit"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "Schweregrad depressiver Symptomatik im klinischen Bereich, 21 Aussagen"
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Schweregrad depressiver Symptomatik im klinischen Bereich",
              "database_schema_name": "ch_suedhang_apps_bdi",
              "database_user_name": "ch_suedhang_apps_bdi",
              "description": "Schweregrad depressiver Symptomatik im klinischen Bereich.\n\n",
              "developer": {
                "email": "Nora.Schoenenberger@suedhang.ch",
                "phone": "+41 (0)31 828 14 14",
                "first_name": "Nora",
                "website": "http://suedhang.ch/de/",
                "company": "Klinik Südhang",
                "last_name": "Schoenenberger",
                "github_user": "schoenenb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "11bb0f153f4b1535252ce87464981b0e75014dd6",
                "name_overwrite": "__dependency: Beck-Depressions-Inventar (BDI-II)",
                "overwritten": false,
                "last_update": "2018-06-10T08:52:55Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.bdi"
              },
              "id": 54
            },
            "first_template": {
              "found": true,
              "name": "BDI"
            },
            "identifier": "ch.suedhang.apps.bdi"
          },
          {
            "module": {
              "hash": "83011b51906a669b78d97ae7bc4bfdc8a7341b6e",
              "calculations": [
                "scores_calculation"
              ],
              "readme": {
                "text": "## BSCL (Brief Symptom Checklist)\n\n\n### Zusammenfassung\nDie „Brief Symptom Checklist“ (BSCL) ist die Kurzform der SCL-90. Es handelt sich bei der BSCL um eine deutschsprachige Übersetzung von G.H. Franke, deren Ursprung in dem amerikanischen „Brief Symptom Inventory“ (BSI) von L.R. Derogatis (1975) zu finden ist.\n\nEs handelt sich bei den 53 Items der BSCL um die fünf bis sechs ladungsstärksten Items pro Skala aus der 90 Items umfassenden SCL-90. Die Urheber- und Markenrechte an der BSCL liegen beim Hogrefe Verlag.\n\n#### Auswertung / Interpretation\nAusgabe der Subskalen in z-Werten auf der Normstichprobe von Franke (2000) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Geschlecht, den Messzeitpunkt und die Behandlungsart (EAS / EP).\n\n\n",
                "parents": [],
                "html": "<h2>BSCL (Brief Symptom Checklist)</h2><h3>Zusammenfassung</h3><p>Die „Brief Symptom Checklist“ (BSCL) ist die Kurzform der SCL-90. Es handelt sich bei der BSCL um eine deutschsprachige Übersetzung von G.H. Franke, deren Ursprung in dem amerikanischen „Brief Symptom Inventory“ (BSI) von L.R. Derogatis (1975) zu finden ist.</p><p>Es handelt sich bei den 53 Items der BSCL um die fünf bis sechs ladungsstärksten Items pro Skala aus der 90 Items umfassenden SCL-90. Die Urheber- und Markenrechte an der BSCL liegen beim Hogrefe Verlag.</p><h4>Auswertung / Interpretation</h4><p>Ausgabe der Subskalen in z-Werten auf der Normstichprobe von Franke (2000) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Geschlecht, den Messzeitpunkt und die Behandlungsart (EAS / EP).</p>"
              },
              "surveys": [
                {
                  "identifier": "bscl_anq",
                  "name": "BSCL - ANQ"
                }
              ],
              "templates": [
                {
                  "height": 12,
                  "width": 6,
                  "name": "BSCL"
                }
              ],
              "identifier": "ch.suedhang.apps.bscl_anq",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "BSCL (ANQ)",
              "dependencies": [],
              "name": "__dependency: BSCL (ANQ)",
              "events": [
                {
                  "due_after": 86400,
                  "survey": "bscl_anq",
                  "name": "activation",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "BSCL - ANQ"
                },
                {
                  "due_after": 86400,
                  "survey": "bscl_anq",
                  "name": "exit",
                  "time_spec": {
                    "days": 7,
                    "time": "08:00:00",
                    "type": "before_exit"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "BSCL - ANQ"
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Erfassung subjektiver Beeinträchtigung durch körperliche und psychische Symptome.",
              "database_schema_name": "ch_suedhang_apps_bscl_anq",
              "database_user_name": "ch_suedhang_apps_bscl_anq",
              "description": "Erfassung subjektiver Beeinträchtigung durch körperliche und psychische Symptome.\n\n",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "83011b51906a669b78d97ae7bc4bfdc8a7341b6e",
                "name_overwrite": "__dependency: BSCL (ANQ)",
                "overwritten": false,
                "last_update": "2018-06-10T08:53:08Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.bscl_anq"
              },
              "id": 64
            },
            "first_template": {
              "found": true,
              "name": "BSCL"
            },
            "identifier": "ch.suedhang.apps.bscl_anq"
          },
          {
            "module": {
              "hash": "2ce8262e4790ec44f813bb8efa5ac0749d7de444",
              "calculations": [
                "another_calculation"
              ],
              "readme": {
                "text": "## CASE (Checkliste zur Abschätzung der Schwere einer Alkoholabhängigkeit) \n\n### Zusammenfassung\nCheckliste zur Abschätzung der Schwere einer Alkoholabhängigkeit mit Behandlungsindikation.\n\n#### Auswertung / Interpretation\nGesamtscore - ab 15 Punkten ist eine stationäre Therapie indiziert.\n\n",
                "parents": [],
                "html": "<h2>CASE (Checkliste zur Abschätzung der Schwere einer Alkoholabhängigkeit)</h2><h3>Zusammenfassung</h3><p>Checkliste zur Abschätzung der Schwere einer Alkoholabhängigkeit mit Behandlungsindikation.</p><h4>Auswertung / Interpretation</h4><p>Gesamtscore - ab 15 Punkten ist eine stationäre Therapie indiziert.</p>"
              },
              "surveys": [
                {
                  "identifier": "CASE",
                  "name": "CASE"
                }
              ],
              "templates": [
                {
                  "height": 4,
                  "width": 4,
                  "name": "simple_score"
                }
              ],
              "identifier": "ch.suedhang.apps.case",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "CASE",
              "dependencies": [],
              "name": "__dependency: CASE",
              "events": [
                {
                  "due_after": 345600,
                  "survey": "CASE",
                  "name": "daily",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "Alkoholabhängigkeit (CASE) und Behandlungsindikation."
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Checkliste zur Abschätzung der Schwere einer Alkoholabhängigkeit (CASE) und Behandlungsindikation",
              "database_schema_name": "ch_suedhang_apps_case",
              "database_user_name": "ch_suedhang_apps_case",
              "description": "Checkliste zur Abschätzung der Schwere einer Alkoholabhängigkeit (CASE) und Behandlungsindikation. Ab 15 Punkten ist eine stationäre Therapie indiziert.\n\n",
              "developer": {
                "email": "nora.schoenenberger@suedhang.ch",
                "phone": "+41 (0)31 828 14 92",
                "first_name": "Nora",
                "website": "http://www.optinomic.com/",
                "company": "Suedhang",
                "last_name": "Schönenberger",
                "github_user": "schoenenb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "2ce8262e4790ec44f813bb8efa5ac0749d7de444",
                "name_overwrite": "__dependency: CASE",
                "overwritten": false,
                "last_update": "2018-06-10T08:53:19Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.case"
              },
              "id": 93
            },
            "first_template": {
              "found": true,
              "name": "simple_score"
            },
            "identifier": "ch.suedhang.apps.case"
          },
          {
            "module": {
              "hash": "d39776681d52c3c0e2e61e98ba52d92c56d0a6de",
              "calculations": [],
              "readme": {
                "text": "## Übersicht | Fallkonferenz     \n\n### Zusammenfassung\nEine schnelle Übersicht über die wichtigsten Ergebnisse der während der Behandlung erhobenen Fragebögen.\n\n",
                "parents": [],
                "html": "<h2>Übersicht | Fallkonferenz</h2><h3>Zusammenfassung</h3><p>Eine schnelle Übersicht über die wichtigsten Ergebnisse der während der Behandlung erhobenen Fragebögen.</p>"
              },
              "surveys": [],
              "templates": [
                {
                  "height": 35,
                  "width": 6,
                  "name": "overview"
                }
              ],
              "identifier": "ch.suedhang.apps.fallkonferenz",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Fallkonferenz",
              "dependencies": [],
              "name": "__dependency: Fallkonferenz",
              "events": [],
              "version": "1.0",
              "type": "patient",
              "short_description": "Diese Applikation dient zur schnellen Ergebnis-Übersicht (z.B. für die Fallkonferenz).",
              "database_schema_name": "ch_suedhang_apps_fallkonferenz",
              "database_user_name": "ch_suedhang_apps_fallkonferenz",
              "description": "Übersicht der wichtigsten Ergebnisse zu Suchtmittelkonsum (actInfo); Visuellem Scannen, psychomotorischer Geschwindigkeit und Leistung der exekutiven Funktionen (TMT); ADHS-Screening (ASRS); Suchtdruck (AASE-G); Symptomcheckliste (BSCL); Depressions-Inventar (BDI), Inventar Sozialer Kompetenzen (ISK), Stress-Coping-Inventar (SCI) und der Lebensqualität (WHQOL).\n\nHinweis: Wenn Sie sich nicht im \"client.new\" befinden, öffnen Sie diese App über das Icon [öffnen] oder [frame].\n\n\n",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "d39776681d52c3c0e2e61e98ba52d92c56d0a6de",
                "name_overwrite": "__dependency: Fallkonferenz",
                "overwritten": false,
                "last_update": "2018-06-11T09:55:06Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.fallkonferenz"
              },
              "id": 109
            },
            "first_template": {
              "found": true,
              "name": "overview"
            },
            "identifier": "ch.suedhang.apps.fallkonferenz"
          },
          {
            "module": {
              "hash": "a3be1c97156cb45d02aad64bce67bdf0c937a1ff",
              "calculations": [
                "scores_calculation"
              ],
              "readme": {
                "text": "## ISK-K (Inventar Sozialer Kompetenzen - Kurzversion)\n\n### Zusammenfassung\nDas Inventar Sozialer Kompetenzen (Kurzversion) erfasst in 33 Aussagen persönliche Verhaltensweisen und Gewohnheiten zu den vier Bereichen: Soziale Orientierung, Offensivität, Selbststeuerung und Reflexibilität. Soziale Kompetenzen sind für unser Funktionieren in der Gesellschaft notwendig. Sind sie zu sehr auf einen selber oder zu sehr auf die Gesellschaft ausgerichtet, dann funktioniert das Zusammenspiel nicht. Mittlere Ausprägungen, welche beide Aspekte berücksichtigen sind daher am günstigsten.\n\n#### Auswertung / Interpretation\nAusgabe der Subskalen in z-Werten auf der Normstichprobe von Kanning (2009) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Geschlecht.\n\n",
                "parents": [],
                "html": "<h2>ISK-K (Inventar Sozialer Kompetenzen - Kurzversion)</h2><h3>Zusammenfassung</h3><p>Das Inventar Sozialer Kompetenzen (Kurzversion) erfasst in 33 Aussagen persönliche Verhaltensweisen und Gewohnheiten zu den vier Bereichen: Soziale Orientierung, Offensivität, Selbststeuerung und Reflexibilität. Soziale Kompetenzen sind für unser Funktionieren in der Gesellschaft notwendig. Sind sie zu sehr auf einen selber oder zu sehr auf die Gesellschaft ausgerichtet, dann funktioniert das Zusammenspiel nicht. Mittlere Ausprägungen, welche beide Aspekte berücksichtigen sind daher am günstigsten.</p><h4>Auswertung / Interpretation</h4><p>Ausgabe der Subskalen in z-Werten auf der Normstichprobe von Kanning (2009) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Geschlecht.</p>"
              },
              "surveys": [
                {
                  "identifier": "isk",
                  "name": "Inventar Sozialer Kompetenzen"
                }
              ],
              "templates": [
                {
                  "height": 12,
                  "width": 6,
                  "name": "ISK-K"
                }
              ],
              "identifier": "ch.suedhang.apps.isk",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "ISK-K",
              "dependencies": [],
              "name": "__dependency: ISK-K",
              "events": [
                {
                  "due_after": 86400,
                  "survey": "isk",
                  "name": "activation",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "Schätzen Sie Ihre persönlichen Verhaltensweisen und Gewohnheiten im Umgang mit anderen Personen ein."
                },
                {
                  "due_after": 86400,
                  "survey": "isk",
                  "name": "exit",
                  "time_spec": {
                    "days": 7,
                    "time": "08:00:00",
                    "type": "before_exit"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "Schätzen Sie Ihre persönlichen Verhaltensweisen und Gewohnheiten im Umgang mit anderen Personen ein."
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Persönliche Verhaltensweisen und Gewohnheiten zu den vier Bereichen: Soziale Orientierung, Offensivität, Selbststeuerung und Reflexibilität.",
              "database_schema_name": "ch_suedhang_apps_isk",
              "database_user_name": "ch_suedhang_apps_isk",
              "description": "",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "a3be1c97156cb45d02aad64bce67bdf0c937a1ff",
                "name_overwrite": "__dependency: ISK-K",
                "overwritten": false,
                "last_update": "2018-06-10T08:53:59Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.isk"
              },
              "id": 67
            },
            "first_template": {
              "found": true,
              "name": "ISK-K"
            },
            "identifier": "ch.suedhang.apps.isk"
          },
          {
            "module": {
              "hash": "d129cd533199ebac8d7769b0074a71ef4fa7bed3",
              "calculations": [
                "another_calculation"
              ],
              "readme": {
                "text": "## Einzelassessment\n\n### Zusammenfassung\nAngaben aus dem Einzelassessment - Substanzkonsum, Neuroanamnese, Konsumziel bei Austritt\n\n#### Auswertung / Interpretation\nAusgabe der einzelnen Items aus dem Bereich Neuroanamnese, welche die Bearbeitung des TMT beeinflussen könnten.\n\n",
                "parents": [],
                "html": "<h2>Einzelassessment</h2><h3>Zusammenfassung</h3><p>Angaben aus dem Einzelassessment - Substanzkonsum, Neuroanamnese, Konsumziel bei Austritt</p><h4>Auswertung / Interpretation</h4><p>Ausgabe der einzelnen Items aus dem Bereich Neuroanamnese, welche die Bearbeitung des TMT beeinflussen könnten.</p>"
              },
              "surveys": [
                {
                  "identifier": "assessment",
                  "name": "Neuroanamnese"
                }
              ],
              "templates": [
                {
                  "height": 4,
                  "width": 4,
                  "name": "simple_score"
                }
              ],
              "identifier": "ch.suedhang.apps.neuroanamnese",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Neuroanamnese Einzelassessment",
              "dependencies": [],
              "name": "__dependency: Neuroanamnese Einzelassessment",
              "events": [
                {
                  "due_after": 345600,
                  "survey": "assessment",
                  "name": "activation",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "Neuroanamnese zum TMT"
                },
                {
                  "due_after": 345600,
                  "survey": "assessment",
                  "name": "exit",
                  "time_spec": {
                    "days": 5,
                    "time": "08:00:00",
                    "type": "before_exit"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "Neuroanamnese zum TMT"
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Erhebung relevanter Faktoren für die Normierung der TMT-Referenzstichprobe bei Alkoholabhängigen",
              "database_schema_name": "ch_suedhang_apps_neuroanamnese",
              "database_user_name": "ch_suedhang_apps_neuroanamnese",
              "description": "Da die Leistung im TMT durch diverse Einflüsse verändert oder gar vermindert sein kann, werden diese Einflüsse hier abgefragt. Dazu wird eine zusätzliche Erhebung zu Konsum, -dauer & -menge jeglicher psychotroper Substanzen in den vergangenen 30 Tagen bzw. während des stationären Aufenthaltes, zur Medikation, klinischen Befunden und einer medizinischen Anamnese durchgeführt.\n\n",
              "developer": {
                "email": "nora.schoenenberger@suedhang.ch",
                "phone": "+41 (0)31 828 14 92",
                "first_name": "Nora",
                "website": "http://www.optinomic.com/",
                "company": "Suedhang",
                "last_name": "Schönenberger",
                "github_user": "schoenenb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "d129cd533199ebac8d7769b0074a71ef4fa7bed3",
                "name_overwrite": "__dependency: Neuroanamnese Einzelassessment",
                "overwritten": false,
                "last_update": "2018-06-10T08:54:16Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.neuroanamnese"
              },
              "id": 89
            },
            "first_template": {
              "found": true,
              "name": "simple_score"
            },
            "identifier": "ch.suedhang.apps.neuroanamnese"
          },
          {
            "module": {
              "hash": "5b395b1aff85fe1d506c613695ade529f18e8cca",
              "calculations": [
                "resilienz_score"
              ],
              "readme": {
                "text": "## Resilienzfragebogen (RS-13)\n\n### Zusammenfassung\nMit dem Resilienzfragebogen (RS-13) wird die die psychische Widerstandskraft; die Fähigkeit, schwierige Lebenssituationen ohne anhaltende Beeinträchtigung zu überstehen erfasst.\n\n#### Auswertung / Interpretation\nDie Auswertung erfolgt über eine Addition der Punktwerte. Für die Interpretation der Merkmalausprägung für Resilienz empfiehlt sich folgendes Schema:\n\n13 - 66  =  Niedrig\n\n67 - 72  =  Moderat\n\n73 - 91  =  Hoch\n\n\n\n",
                "parents": [],
                "html": "<h2>Resilienzfragebogen (RS-13)</h2><h3>Zusammenfassung</h3><p>Mit dem Resilienzfragebogen (RS-13) wird die die psychische Widerstandskraft; die Fähigkeit, schwierige Lebenssituationen ohne anhaltende Beeinträchtigung zu überstehen erfasst.</p><h4>Auswertung / Interpretation</h4><p>Die Auswertung erfolgt über eine Addition der Punktwerte. Für die Interpretation der Merkmalausprägung für Resilienz empfiehlt sich folgendes Schema:</p><p>13 - 66  =  Niedrig</p><p>67 - 72  =  Moderat</p><p>73 - 91  =  Hoch</p>"
              },
              "surveys": [
                {
                  "identifier": "rs13_ng",
                  "name": "Resilienzfragebogen (RS-13)"
                }
              ],
              "templates": [
                {
                  "height": 6,
                  "width": 6,
                  "name": "Resilienz"
                }
              ],
              "identifier": "ch.suedhang.apps.rs13",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Resilienzfragebogen (RS-13)",
              "dependencies": [],
              "name": "__dependency: Resilienzfragebogen (RS-13)",
              "events": [],
              "version": "1.0",
              "type": "patient",
              "short_description": "Psychische Widerstandskraft",
              "database_schema_name": "ch_suedhang_apps_rs13",
              "database_user_name": "ch_suedhang_apps_rs13",
              "description": "Mit dem Resilienzfragebogen (RS-13) wird die die psychische Widerstandskraft; die Fähigkeit, schwierige Lebenssituationen ohne anhaltende Beeinträchtigung zu überstehen erfasst.\n\n",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "5b395b1aff85fe1d506c613695ade529f18e8cca",
                "name_overwrite": "__dependency: Resilienzfragebogen (RS-13)",
                "overwritten": false,
                "last_update": "2020-03-31T12:08:31Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.rs13"
              },
              "id": 265
            },
            "first_template": {
              "found": true,
              "name": "Resilienz"
            },
            "identifier": "ch.suedhang.apps.rs13"
          },
          {
            "module": {
              "hash": "fdc4279f12ea697543995786d7321300a239328f",
              "calculations": [
                "scores"
              ],
              "readme": {
                "text": "## SCI (Stress-Coping-Inventar)\n\n### Zusammenfassung\nDas SCI ist ein wissenschaftliches Fragebogen-Instrument zur zuverlässigen Messung von Stressbelastung, Stresssymptomen und Stressbewältigungs-Strategien (Coping).\n\n#### Skalen\nAlle Skalen erreichen überzeugende psychometrische Kennwerte. Eine detaillierte Faktorenanalyse konnte zudem die Annahme von fünf unterschiedlichen Coping-Strategien bestätigen. Weitere Untersuchungen lieferten überzeugende Belege für die Aussagekraft der Skalen. So zeigte sich, dass Personen, die unter viel Stress leiden aber trotzdem nur wenige Folgesymptome aufweisen, mehr adaptive Coping-Strategien einsetzen.\n\n#### Weiterführende Links\n- [Stress- und Coping-Inventar (SCI)](http://www.drsatow.de/tests/stress-und-coping-inventar.html)\n\n",
                "parents": [],
                "html": "<h2>SCI (Stress-Coping-Inventar)</h2><h3>Zusammenfassung</h3><p>Das SCI ist ein wissenschaftliches Fragebogen-Instrument zur zuverlässigen Messung von Stressbelastung, Stresssymptomen und Stressbewältigungs-Strategien (Coping).</p><h4>Skalen</h4><p>Alle Skalen erreichen überzeugende psychometrische Kennwerte. Eine detaillierte Faktorenanalyse konnte zudem die Annahme von fünf unterschiedlichen Coping-Strategien bestätigen. Weitere Untersuchungen lieferten überzeugende Belege für die Aussagekraft der Skalen. So zeigte sich, dass Personen, die unter viel Stress leiden aber trotzdem nur wenige Folgesymptome aufweisen, mehr adaptive Coping-Strategien einsetzen.</p><h4>Weiterführende Links</h4><ul><li><p><a href=\"http://www.drsatow.de/tests/stress-und-coping-inventar.html\">Stress- und Coping-Inventar (SCI)</a></p></li></ul>"
              },
              "surveys": [
                {
                  "identifier": "SCI",
                  "name": "Stress- & Coping-Inventar"
                }
              ],
              "templates": [
                {
                  "height": 12,
                  "width": 6,
                  "name": "SCI"
                }
              ],
              "identifier": "ch.suedhang.apps.sci",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Stress-Coping-Inventar (SCI)",
              "dependencies": [],
              "name": "__dependency: Stress-Coping-Inventar (SCI)",
              "events": [
                {
                  "due_after": 259200,
                  "survey": "SCI",
                  "name": "activation",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "Messung von Stressbelastung, Stresssymptomen und Stressbewältigungs-Strategien (Coping) bei Klinik Ein- und Austritt."
                },
                {
                  "due_after": 259200,
                  "survey": "SCI",
                  "name": "exit",
                  "time_spec": {
                    "days": 7,
                    "time": "08:00:00",
                    "type": "before_exit"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "Messung von Stressbelastung, Stresssymptomen und Stressbewältigungs-Strategien (Coping) bei Klinik Ein- und Austritt."
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Messung von Stressbelastung, Stresssymptomen und Stressbewältigungs-Strategien (Coping)",
              "database_schema_name": "ch_suedhang_apps_sci",
              "database_user_name": "ch_suedhang_apps_sci",
              "description": "",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "fdc4279f12ea697543995786d7321300a239328f",
                "name_overwrite": "__dependency: Stress-Coping-Inventar (SCI)",
                "overwritten": false,
                "last_update": "2018-06-10T08:54:39Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.sci"
              },
              "id": 87
            },
            "first_template": {
              "found": true,
              "name": "SCI"
            },
            "identifier": "ch.suedhang.apps.sci"
          },
          {
            "module": {
              "hash": "024073676d88eebe8b649d37fb058a58faaae45e",
              "calculations": [
                "tmt_score"
              ],
              "readme": {
                "text": "## TMT (Trail Making Test)\n\n### Zusammenfassung\nMit dem TMT wird die Fähigkeit zum visuellen Scannen, die psychomotorische Geschwindigkeit (TMT A) sowie die Leistungen der exekutiven Funktionen, insbesondere kognitive Flexibilität und Switching (TMT B) erfasst.\n\n#### Auswertung / Interpretation\nAusgabe der Subskalen in z-Werten auf der Normstichprobe von Tombaugh (2004) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Alter und den Ausbildungsgrad (bis 12 Jahre vs. mehr als 12 Jahre).\n\n##### Quotient B/A\nDer Quotient B/A stellt das 'reine' Maß der im Trail Making Test B erhobenen exekutiven Funktionen dar und ist unabhängig von einer evtl. vorliegenden Verlangsamung. Normwerte sind für letzteren Kennwert nur für Personen ≥ 50-jährig verfügbar.  Faustregel: ein  B/A-Quotient > 2.5 gilt als Hinweis für eine auffällige Testleistung.\n\n",
                "parents": [],
                "html": "<h2>TMT (Trail Making Test)</h2><h3>Zusammenfassung</h3><p>Mit dem TMT wird die Fähigkeit zum visuellen Scannen, die psychomotorische Geschwindigkeit (TMT A) sowie die Leistungen der exekutiven Funktionen, insbesondere kognitive Flexibilität und Switching (TMT B) erfasst.</p><h4>Auswertung / Interpretation</h4><p>Ausgabe der Subskalen in z-Werten auf der Normstichprobe von Tombaugh (2004) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Alter und den Ausbildungsgrad (bis 12 Jahre vs. mehr als 12 Jahre).</p><h5>Quotient B/A</h5><p>Der Quotient B/A stellt das 'reine' Maß der im Trail Making Test B erhobenen exekutiven Funktionen dar und ist unabhängig von einer evtl. vorliegenden Verlangsamung. Normwerte sind für letzteren Kennwert nur für Personen ≥ 50-jährig verfügbar.  Faustregel: ein  B/A-Quotient &gt; 2.5 gilt als Hinweis für eine auffällige Testleistung.</p>"
              },
              "surveys": [
                {
                  "identifier": "tmt_ng",
                  "name": "Trail Making Test (TMT)"
                }
              ],
              "templates": [
                {
                  "height": 12,
                  "width": 6,
                  "name": "TMT"
                }
              ],
              "identifier": "ch.suedhang.apps.tmt_V3",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Trail Making Test (TMT)",
              "dependencies": [],
              "name": "__dependency: Trail Making Test (TMT)",
              "events": [
                {
                  "due_after": 259200,
                  "survey": "tmt_ng",
                  "name": "activation",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "TMT-Erfassung Eintritt"
                },
                {
                  "due_after": 259200,
                  "survey": "tmt_ng",
                  "name": "exit",
                  "time_spec": {
                    "days": 5,
                    "time": "08:00:00",
                    "type": "before_exit"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "TMT-Erfassung Austritt"
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Die psychomotorische Geschwindigkeit (TMT A) und kognitive Flexibilität (TMT B) werden erfasst.",
              "database_schema_name": "ch_suedhang_apps_tmt_v3",
              "database_user_name": "ch_suedhang_apps_tmt_v3",
              "description": "",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "024073676d88eebe8b649d37fb058a58faaae45e",
                "name_overwrite": "__dependency: Trail Making Test (TMT)",
                "overwritten": false,
                "last_update": "2019-10-04T11:04:39Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.tmt_V3"
              },
              "id": 128
            },
            "first_template": {
              "found": true,
              "name": "TMT"
            },
            "identifier": "ch.suedhang.apps.tmt_V3"
          },
          {
            "module": {
              "hash": "1c7c1e11f7b675587da9b9c999da8e1345e65ad3",
              "calculations": [
                "phys_psych_calculation"
              ],
              "readme": {
                "text": "## WHOQOL-BREF (WHO Quality of Life - Kurzversion)\n\n### Zusammenfassung\nBeurteilung der Dimensionen - Physischen und Psychischen Lebensqualität.\n\n",
                "parents": [],
                "html": "<h2>WHOQOL-BREF (WHO Quality of Life - Kurzversion)</h2><h3>Zusammenfassung</h3><p>Beurteilung der Dimensionen - Physischen und Psychischen Lebensqualität.</p>"
              },
              "surveys": [
                {
                  "identifier": "WHOQOL",
                  "name": "WHOQOL"
                }
              ],
              "templates": [
                {
                  "height": 12,
                  "width": 6,
                  "name": "WHOQOL"
                }
              ],
              "identifier": "com.optinomic.apps.whoqol",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "WHOQOL - Phys. / Psych.",
              "dependencies": [],
              "name": "__dependency: WHOQOL - Phys. / Psych.",
              "events": [
                {
                  "due_after": 86400,
                  "survey": "WHOQOL",
                  "name": "activation",
                  "time_spec": {
                    "type": "on_activation"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "WHOQOL ausfüllen."
                },
                {
                  "due_after": 86400,
                  "survey": "WHOQOL",
                  "name": "exit",
                  "time_spec": {
                    "days": 7,
                    "time": "08:00:00",
                    "type": "before_exit"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "WHOQOL ausfüllen."
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Beurteilung der Physischen und Psychischen Lebensqualität.",
              "database_schema_name": "com_optinomic_apps_whoqol",
              "database_user_name": "com_optinomic_apps_whoqol",
              "description": "",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "1c7c1e11f7b675587da9b9c999da8e1345e65ad3",
                "name_overwrite": "__dependency: WHOQOL - Phys. / Psych.",
                "overwritten": false,
                "last_update": "2018-06-10T08:55:06Z",
                "version": "1.0",
                "module": "com.optinomic.apps.whoqol"
              },
              "id": 78
            },
            "first_template": {
              "found": true,
              "name": "WHOQOL"
            },
            "identifier": "com.optinomic.apps.whoqol"
          },
          {
            "module": {
              "hash": "c2d5710c16028733bce1c7ed399c735961087e02",
              "calculations": [
                "another_calculation"
              ],
              "readme": {
                "text": "## ZüPaZ (Zürcher Fragebogen zur Patientenzufriedenheit in der Psychiatrie)\n\n### Zusammenfassung\nSüdhang-Version: Erfassung der Patientenzufriedenheit in den Bereichen Behandlung, Hotellerie, Mitspracherecht.\n\n",
                "parents": [],
                "html": "<h2>ZüPaZ (Zürcher Fragebogen zur Patientenzufriedenheit in der Psychiatrie)</h2><h3>Zusammenfassung</h3><p>Südhang-Version: Erfassung der Patientenzufriedenheit in den Bereichen Behandlung, Hotellerie, Mitspracherecht.</p>"
              },
              "surveys": [
                {
                  "identifier": "ZuePaZ_Suedhang",
                  "name": "Zuepaz"
                }
              ],
              "templates": [
                {
                  "height": 14,
                  "width": 6,
                  "name": "ZuePaZ"
                }
              ],
              "identifier": "ch.suedhang.apps.zuepaz",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "ZüPaZ - Version Südhang",
              "dependencies": [],
              "name": "__dependency: ZüPaZ - Version Südhang",
              "events": [
                {
                  "due_after": 604800,
                  "survey": "ZuePaZ_Suedhang",
                  "name": "exit",
                  "time_spec": {
                    "days": 7,
                    "time": "07:00:00",
                    "type": "before_exit"
                  },
                  "overdue": {
                    "type": "ignore"
                  },
                  "description": "Erfassung der Patientenzufriedenheit"
                }
              ],
              "version": "1.0",
              "type": "patient",
              "short_description": "Zürcher Patientenzufriedenheit Fragebogen mit spezifischen Anpassungen für die Klinik Südhang",
              "database_schema_name": "ch_suedhang_apps_zuepaz",
              "database_user_name": "ch_suedhang_apps_zuepaz",
              "description": "Es wird die allgemeine Zufriedenheit der Patienten mit der Klinik Südhang erfragt - vom Eintritt bis zum Austritt, in den Bereichen Hotellerie, Informationsfluss, Therapieangebote und Behandlung durch das (therapeutische) Personal.\n\n",
              "developer": {
                "email": "nora.schoenenberger@suedhang.ch",
                "phone": "+41 (0)31 828 14 51",
                "first_name": "Nora",
                "website": "http://www.optinomic.com/",
                "company": "Suedhang",
                "last_name": "Schönenberger",
                "github_user": "schoenenb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "c2d5710c16028733bce1c7ed399c735961087e02",
                "name_overwrite": "__dependency: ZüPaZ - Version Südhang",
                "overwritten": false,
                "last_update": "2018-06-10T08:55:51Z",
                "version": "1.0",
                "module": "ch.suedhang.apps.zuepaz"
              },
              "id": 84
            },
            "first_template": {
              "found": true,
              "name": "ZuePaZ"
            },
            "identifier": "ch.suedhang.apps.zuepaz"
          }
        ],
        "user_modules": [
          {
            "module": {
              "hash": "7d064f88e4a7a21a7dfef68280963da20d98eaf3",
              "calculations": [],
              "readme": {
                "text": "",
                "parents": [],
                "html": ""
              },
              "surveys": [],
              "templates": [
                {
                  "height": 8,
                  "width": 6,
                  "name": "fulfillment"
                }
              ],
              "identifier": "com.optinomic.user.apps.fulfillment",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Erfüllungsgrad | Liste",
              "dependencies": [],
              "name": "Erfüllungsgrad | Liste",
              "events": [],
              "version": "1.0",
              "type": "user",
              "short_description": "Erfasste Fragebögen mit Angaben zu Patient, Aufenthalt und zugrundeliegendem Ereignis.",
              "database_schema_name": "com_optinomic_user_apps_fulfillment",
              "database_user_name": "com_optinomic_user_apps_fulfillment",
              "description": "Diese Userapp ermöglicht einem Datenverantwortlichen / Administrator den Erfüllungsgrad einelner Applikationen im Auge zu behalten. Dies Applikation listet sämtliche erfasste Fragebögen mit Angaben zu Patient, Aufenthalt und zugrundeliegendem Ereignis auf.\n\n\n",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "7d064f88e4a7a21a7dfef68280963da20d98eaf3",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2019-12-23T09:09:57Z",
                "version": "1.0",
                "module": "com.optinomic.user.apps.fulfillment"
              },
              "id": 136
            },
            "first_template": {
              "found": true,
              "name": "fulfillment"
            },
            "identifier": "com.optinomic.user.apps.fulfillment"
          },
          {
            "module": {
              "hash": "5e4565f718d45ff6c156bc3c06985f3dfbc2e90d",
              "calculations": [
                "aase_new",
                "actinfo_aus",
                "actinfo_ein_new",
                "asrs",
                "bdi",
                "case",
                "einzelassessment",
                "isk",
                "sci",
                "tmt",
                "whoqol",
                "zuepaz",
                "honos"
              ],
              "readme": {
                "text": "# Optinomic Export-Toolbox.\n\nEasy export of survey responses with calculation values.\n\n\n# Anschrift\n\n![image](http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png)     \n\n*Optinomic GmbH*   \n*Haldenstrasse 7*     \n*CH - 8942 Oberrieden*     \n*+41(0)44 508 26 76*    \n*info@optinomic.com*   \n*[www.optinomic.com](http://www.optinomic.com)*   \n\n\n\n\n",
                "parents": [],
                "html": "<h1>Optinomic Export-Toolbox.</h1><p>Easy export of survey responses with calculation values.</p><h1>Anschrift</h1><p><img src=\"http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png\" alt=\"image\"></p><p><i>Optinomic GmbH</i><br><i>Haldenstrasse 7</i><br><i>CH - 8942 Oberrieden</i><br><i>+41(0)44 508 26 76</i><br><i>info@optinomic.com</i><br><i><a href=\"http://www.optinomic.com\">www.optinomic.com</a></i></p>"
              },
              "surveys": [],
              "templates": [
                {
                  "height": 7,
                  "width": 6,
                  "name": "export"
                },
                {
                  "height": 7,
                  "width": 6,
                  "name": "create"
                }
              ],
              "identifier": "org.optinomic.export.toolbox.suedhang",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Export-Toolbox",
              "dependencies": [],
              "name": "Export-Toolbox",
              "events": [],
              "version": "1.0",
              "type": "user",
              "short_description": "Export-Toolbox",
              "database_schema_name": "org_optinomic_export_toolbox_suedhang",
              "database_user_name": "org_optinomic_export_toolbox_suedhang",
              "description": "Export Survey Responses\n\n",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "5e4565f718d45ff6c156bc3c06985f3dfbc2e90d",
                "name_overwrite": "Export-Toolbox",
                "overwritten": false,
                "last_update": "2019-12-13T08:31:31Z",
                "version": "1.0",
                "module": "org.optinomic.export.toolbox.suedhang"
              },
              "id": 133
            },
            "first_template": {
              "found": true,
              "name": "export"
            },
            "identifier": "org.optinomic.export.toolbox.suedhang"
          },
          {
            "module": {
              "hash": "e1e8e258bc4c2f1123d11e5f53a2306eae167a1c",
              "calculations": [
                "honos_ua_calc",
                "bscl_ua_calc"
              ],
              "readme": {
                "text": "# Optinomic Export-Toolbox.\n\nEasy export of survey responses with calculation values.\n\n\n![bildschirmfoto 2017-11-11 um 13 10 28](https://user-images.githubusercontent.com/2470873/32689283-e595bace-c6e1-11e7-96a9-0a79d4ce1b7a.png)\n\n\nImplementierte Features:    \n\n- [x] Filter   \n- [x] Einstellungen (Delimiter, Inhaltsblöcke) global übersteuern    \n- [x] Run über den Button [ +  HINZUFÜGEN (LIVE-RUN) ]   \n\n\n=> Falls Filter aktiv sind und die Optionen übersteuert werden, muss allenfalls erneut der Filter [ANWENDEN] erneut gedrückt werden, damit diese Optionen übersteuert werden. \n\n\n### Export-Toolbox | CREATE\nDie Export-Toolbox verfügt über einen CREATE-Prozess:    \n1. Datenquelle selektieren      \n2. Datenfelder benennen und sortieren     \n3. Optionen festlegen      \n4. Export-Definition JSON-File herunterladen.     \n\nDas so erzeugte JSON-File, kann direkt unter  [ +  HINZUFÜGEN (LIVE-RUN) ] ausgeführt, getestet und modifiziert werden.\n\n![bildschirmfoto 2017-11-11 um 13 10 58](https://user-images.githubusercontent.com/2470873/32689285-ef12dbd6-c6e1-11e7-9bf0-fc94aed048c3.png)\n\n\n\n### Entwickler-Info\nWeitere Details für Entwickler sind hier dokumentiert:\nhttps://github.com/Optinomic/apps/blob/master/org.optinomic.export.toolbox/readme_dev.md\n\n\n# Anschrift\n\n![image](http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png)     \n\n*Optinomic GmbH*   \n*Haldenstrasse 7*     \n*CH - 8942 Oberrieden*     \n*+41(0)44 508 26 76*    \n*info@optinomic.com*   \n*[www.optinomic.com](http://www.optinomic.com)*   \n\n\n",
                "parents": [],
                "html": "<h1>Optinomic Export-Toolbox.</h1><p>Easy export of survey responses with calculation values.</p><p><img src=\"https://user-images.githubusercontent.com/2470873/32689283-e595bace-c6e1-11e7-96a9-0a79d4ce1b7a.png\" alt=\"bildschirmfoto 2017-11-11 um 13 10 28\"></p><p>Implementierte Features:</p><ul><li>[x] Filter</li><li>[x] Einstellungen (Delimiter, Inhaltsblöcke) global übersteuern</li><li>[x] Run über den Button [ +  HINZUFÜGEN (LIVE-RUN) ]</li></ul><p>=&gt; Falls Filter aktiv sind und die Optionen übersteuert werden, muss allenfalls erneut der Filter [ANWENDEN] erneut gedrückt werden, damit diese Optionen übersteuert werden.</p><h3>Export-Toolbox | CREATE</h3><p>Die Export-Toolbox verfügt über einen CREATE-Prozess:<br>1. Datenquelle selektieren<br>2. Datenfelder benennen und sortieren<br>3. Optionen festlegen<br>4. Export-Definition JSON-File herunterladen.</p><p>Das so erzeugte JSON-File, kann direkt unter  [ +  HINZUFÜGEN (LIVE-RUN) ] ausgeführt, getestet und modifiziert werden.</p><p><img src=\"https://user-images.githubusercontent.com/2470873/32689285-ef12dbd6-c6e1-11e7-9bf0-fc94aed048c3.png\" alt=\"bildschirmfoto 2017-11-11 um 13 10 58\"></p><h3>Entwickler-Info</h3><p>Weitere Details für Entwickler sind hier dokumentiert:\nhttps://github.com/Optinomic/apps/blob/master/org.optinomic.export.toolbox/readme_dev.md</p><h1>Anschrift</h1><p><img src=\"http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png\" alt=\"image\"></p><p><i>Optinomic GmbH</i><br><i>Haldenstrasse 7</i><br><i>CH - 8942 Oberrieden</i><br><i>+41(0)44 508 26 76</i><br><i>info@optinomic.com</i><br><i><a href=\"http://www.optinomic.com\">www.optinomic.com</a></i></p>"
              },
              "surveys": [],
              "templates": [
                {
                  "height": 7,
                  "width": 6,
                  "name": "export"
                }
              ],
              "identifier": "org.optinomic.export.toolbox.v2.suedhang",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Export-Toolbox (V2)",
              "dependencies": [],
              "name": "Export-Toolbox (V2)",
              "events": [],
              "version": "1.0",
              "type": "user",
              "short_description": "Export-Toolbox (Beta-Channel)",
              "database_schema_name": "org_optinomic_export_toolbox_v2_suedhang",
              "database_user_name": "org_optinomic_export_toolbox_v2_suedhang",
              "description": "Export Survey Responses :: This is the Beta-Channel from org.optinomic.export.toolbox (as soon as stable).\n\n",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "e1e8e258bc4c2f1123d11e5f53a2306eae167a1c",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2019-12-13T09:11:48Z",
                "version": "1.0",
                "module": "org.optinomic.export.toolbox.v2.suedhang"
              },
              "id": 135
            },
            "first_template": {
              "found": true,
              "name": "export"
            },
            "identifier": "org.optinomic.export.toolbox.v2.suedhang"
          },
          {
            "module": {
              "hash": "908839d3ca21b91761854d1c70cad2f908767e10",
              "calculations": [
                "bscl_klinikstichprobe_new"
              ],
              "readme": {
                "text": "![image](http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png)\n## Optinomic-App \n\n\n\n#### Beschreibung\n- Beschreiben Sie die Funktionalität Ihrer Applikation hier. Mit Apps werden Computerprogramme bezeichnet, die genutzt werden, um eine nützliche oder gewünschte nicht systemtechnische Funktionalität zu bearbeiten oder zu unterstützen, das heißt sie dienen der „Lösung von Benutzerproblemen“.\n\n#### Auswertung / Ergebnisse\n- Beschreiben Sie die Auswertungen / Ergebnisse Ihrer Applikation hier.\n\n\n\n\n\n###Contact\n*Optinomic GmbH*   \n*Haldenstrasse 7*     \n*CH - 8942 Oberrieden*     \n*+41(0)44 508 26 76*    \n*info@optinomic.com*   \n*[www.optinomic.com](http://www.optinomic.com)*   \n\n\n\n",
                "parents": [],
                "html": "<p><img src=\"http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png\" alt=\"image\">\n## Optinomic-App</p><h4>Beschreibung</h4><ul><li><p>Beschreiben Sie die Funktionalität Ihrer Applikation hier. Mit Apps werden Computerprogramme bezeichnet, die genutzt werden, um eine nützliche oder gewünschte nicht systemtechnische Funktionalität zu bearbeiten oder zu unterstützen, das heißt sie dienen der „Lösung von Benutzerproblemen“.</p></li></ul><h4>Auswertung / Ergebnisse</h4><ul><li><p>Beschreiben Sie die Auswertungen / Ergebnisse Ihrer Applikation hier.</p></li></ul><h3>Contact</h3><p><i>Optinomic GmbH</i><br><i>Haldenstrasse 7</i><br><i>CH - 8942 Oberrieden</i><br><i>+41(0)44 508 26 76</i><br><i>info@optinomic.com</i><br><i><a href=\"http://www.optinomic.com\">www.optinomic.com</a></i></p>"
              },
              "surveys": [],
              "templates": [
                {
                  "height": 4,
                  "width": 4,
                  "name": "score_overview"
                }
              ],
              "identifier": "ch.suedhang.user.apps.ks_bscl",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Klinische Stichprobe | BSCL",
              "dependencies": [
                {
                  "module": "ch.suedhang.apps.bscl_anq.production",
                  "constraint": {
                    "gt": "1.0"
                  }
                }
              ],
              "name": "Klinische Stichprobe | BSCL",
              "events": [],
              "version": "1.0",
              "type": "user",
              "short_description": "Klinische Stichproben | BSCL (ANQ)",
              "database_schema_name": "ch_suedhang_user_apps_ks_bscl",
              "database_user_name": "ch_suedhang_user_apps_ks_bscl",
              "description": "Erstellen der klinischen Stichprobe des BSCL. Die „Brief Symptom Checklist“ (BSCL) ist die Kurzform der SCL-90. Es handelt sich bei der BSCL um eine deutschsprachige Übersetzung von G.H. Franke, deren Ursprung in dem amerikanischen „Brief Symptom Inventory“ (BSI) von L.R. Derogatis (1975) zu finden ist. Es handelt sich bei den 53 Items der BSCL um die fünf bis sechs ladungsstärksten Items pro Skala aus der 90 Items umfassenden SCL-90. Die Urheber- und Markenrechte an der BSCL liegen beim Hogrefe Verlag.\n\n\n",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "908839d3ca21b91761854d1c70cad2f908767e10",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2019-12-23T09:10:10Z",
                "version": "1.0",
                "module": "ch.suedhang.user.apps.ks_bscl"
              },
              "id": 137
            },
            "first_template": {
              "found": true,
              "name": "score_overview"
            },
            "identifier": "ch.suedhang.user.apps.ks_bscl"
          },
          {
            "module": {
              "hash": "25cbf9c80a17c6f4e20c3105574b085de3679cac",
              "calculations": [
                "isk_klinikstichprobe_new"
              ],
              "readme": {
                "text": "![image](http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png)\n## Optinomic-App \n\n\n\n#### Beschreibung\n- Beschreiben Sie die Funktionalität Ihrer Applikation hier. Mit Apps werden Computerprogramme bezeichnet, die genutzt werden, um eine nützliche oder gewünschte nicht systemtechnische Funktionalität zu bearbeiten oder zu unterstützen, das heißt sie dienen der „Lösung von Benutzerproblemen“.\n\n#### Auswertung / Ergebnisse\n- Beschreiben Sie die Auswertungen / Ergebnisse Ihrer Applikation hier.\n\n\n\n\n\n###Contact\n*Optinomic GmbH*   \n*Haldenstrasse 7*     \n*CH - 8942 Oberrieden*     \n*+41(0)44 508 26 76*    \n*info@optinomic.com*   \n*[www.optinomic.com](http://www.optinomic.com)*   \n\n\n\n",
                "parents": [],
                "html": "<p><img src=\"http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png\" alt=\"image\">\n## Optinomic-App</p><h4>Beschreibung</h4><ul><li><p>Beschreiben Sie die Funktionalität Ihrer Applikation hier. Mit Apps werden Computerprogramme bezeichnet, die genutzt werden, um eine nützliche oder gewünschte nicht systemtechnische Funktionalität zu bearbeiten oder zu unterstützen, das heißt sie dienen der „Lösung von Benutzerproblemen“.</p></li></ul><h4>Auswertung / Ergebnisse</h4><ul><li><p>Beschreiben Sie die Auswertungen / Ergebnisse Ihrer Applikation hier.</p></li></ul><h3>Contact</h3><p><i>Optinomic GmbH</i><br><i>Haldenstrasse 7</i><br><i>CH - 8942 Oberrieden</i><br><i>+41(0)44 508 26 76</i><br><i>info@optinomic.com</i><br><i><a href=\"http://www.optinomic.com\">www.optinomic.com</a></i></p>"
              },
              "surveys": [],
              "templates": [
                {
                  "height": 4,
                  "width": 4,
                  "name": "score_overview"
                }
              ],
              "identifier": "ch.suedhang.user.apps.ks_isk",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Klinische Stichprobe | ISK",
              "dependencies": [
                {
                  "module": "ch.suedhang.apps.isk.production",
                  "constraint": {
                    "gt": "1.0"
                  }
                }
              ],
              "name": "Klinische Stichprobe | ISK",
              "events": [],
              "version": "1.0",
              "type": "user",
              "short_description": "Klinische Stichproben | Inventar Sozialer Kompetenzen - Kurzform",
              "database_schema_name": "ch_suedhang_user_apps_ks_isk",
              "database_user_name": "ch_suedhang_user_apps_ks_isk",
              "description": "Erstellen der klinischen Stichprobe des ISK. Das Inventar Sozialer Kompetenzen (Kurzversion) erfasst in 33 Aussagen persönliche Verhaltensweisen und Gewohnheiten zu den vier Bereichen: Soziale Orientierung, Offensivität, Selbststeuerung und Reflexibilität. Soziale Kompetenzen sind für unser Funktionieren in der Gesellschaft notwendig. Sind sie zu sehr auf einen selber oder zu sehr auf die Gesellschaft ausgerichtet, dann funktioniert das Zusammenspiel nicht. Mittlere Ausprägungen, welche beide Aspekte berücksichtigen sind daher am günstigsten.\n\n\n",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "25cbf9c80a17c6f4e20c3105574b085de3679cac",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2019-12-23T09:10:30Z",
                "version": "1.0",
                "module": "ch.suedhang.user.apps.ks_isk"
              },
              "id": 139
            },
            "first_template": {
              "found": true,
              "name": "score_overview"
            },
            "identifier": "ch.suedhang.user.apps.ks_isk"
          },
          {
            "module": {
              "hash": "49a0e1dc4f162172518cd9f711fabbd23b325f72",
              "calculations": [
                "tmt_klinikstichprobe_new"
              ],
              "readme": {
                "text": "![image](http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png)\n## Optinomic-App \n\n\n\n#### Beschreibung\n- Beschreiben Sie die Funktionalität Ihrer Applikation hier. Mit Apps werden Computerprogramme bezeichnet, die genutzt werden, um eine nützliche oder gewünschte nicht systemtechnische Funktionalität zu bearbeiten oder zu unterstützen, das heißt sie dienen der „Lösung von Benutzerproblemen“.\n\n#### Auswertung / Ergebnisse\n- Beschreiben Sie die Auswertungen / Ergebnisse Ihrer Applikation hier.\n\n\n\n\n\n###Contact\n*Optinomic GmbH*   \n*Haldenstrasse 7*     \n*CH - 8942 Oberrieden*     \n*+41(0)44 508 26 76*    \n*info@optinomic.com*   \n*[www.optinomic.com](http://www.optinomic.com)*   \n\n\n\n",
                "parents": [],
                "html": "<p><img src=\"http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png\" alt=\"image\">\n## Optinomic-App</p><h4>Beschreibung</h4><ul><li><p>Beschreiben Sie die Funktionalität Ihrer Applikation hier. Mit Apps werden Computerprogramme bezeichnet, die genutzt werden, um eine nützliche oder gewünschte nicht systemtechnische Funktionalität zu bearbeiten oder zu unterstützen, das heißt sie dienen der „Lösung von Benutzerproblemen“.</p></li></ul><h4>Auswertung / Ergebnisse</h4><ul><li><p>Beschreiben Sie die Auswertungen / Ergebnisse Ihrer Applikation hier.</p></li></ul><h3>Contact</h3><p><i>Optinomic GmbH</i><br><i>Haldenstrasse 7</i><br><i>CH - 8942 Oberrieden</i><br><i>+41(0)44 508 26 76</i><br><i>info@optinomic.com</i><br><i><a href=\"http://www.optinomic.com\">www.optinomic.com</a></i></p>"
              },
              "surveys": [],
              "templates": [
                {
                  "height": 4,
                  "width": 4,
                  "name": "score_overview"
                }
              ],
              "identifier": "ch.suedhang.user.apps.ks_tmt",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Klinische Stichprobe | TMT",
              "dependencies": [
                {
                  "module": "ch.suedhang.apps.tmt.production",
                  "constraint": {
                    "gt": "1.0"
                  }
                }
              ],
              "name": "Klinische Stichprobe | TMT",
              "events": [],
              "version": "1.0",
              "type": "user",
              "short_description": "Klinische Stichproben des Trail Making Test (TMT)",
              "database_schema_name": "ch_suedhang_user_apps_ks_tmt",
              "database_user_name": "ch_suedhang_user_apps_ks_tmt",
              "description": "Erstellen der klinischen Stichprobe des TMT. Mit dem TMT wird die Fähigkeit zum visuellen Scannen erfasst, sowie die psychomotorische Geschwindigkeit (Trail Making Test A) und Leistungen der exekutiven Funktionen (insbesondere kognitive Flexibilität und Switching, Trail Making Test B). Der Quotient B /A stellt das 'reine' Maß der im Trail Making Test B erhobenen exekutiven Funktionen dar und ist unabhängig von einer evtl. vorliegenden Verlangsamung. Normwerte sind für letzteren Kennwert nur für Personen ≥ 50-jährig verfügbar.  Faustregel: ein  B/A-Quotient > 2.5 gilt als Hinweis für eine auffällige Testleistung.\n\n\n",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "49a0e1dc4f162172518cd9f711fabbd23b325f72",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2019-12-23T09:10:19Z",
                "version": "1.0",
                "module": "ch.suedhang.user.apps.ks_tmt"
              },
              "id": 138
            },
            "first_template": {
              "found": true,
              "name": "score_overview"
            },
            "identifier": "ch.suedhang.user.apps.ks_tmt"
          },
          {
            "module": {
              "hash": "453dc4d301343a2dffbdad18a2cd348a8961961a",
              "calculations": [
                "whoqolbref_klinikstichprobe"
              ],
              "readme": {
                "text": "![image](http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png)\n## Optinomic-App \n\n\n\n#### Beschreibung\n- Beschreiben Sie die Funktionalität Ihrer Applikation hier. Mit Apps werden Computerprogramme bezeichnet, die genutzt werden, um eine nützliche oder gewünschte nicht systemtechnische Funktionalität zu bearbeiten oder zu unterstützen, das heißt sie dienen der „Lösung von Benutzerproblemen“.\n\n#### Auswertung / Ergebnisse\n- Beschreiben Sie die Auswertungen / Ergebnisse Ihrer Applikation hier.\n\n\n\n\n\n###Contact\n*Optinomic GmbH*   \n*Haldenstrasse 7*     \n*CH - 8942 Oberrieden*     \n*+41(0)44 508 26 76*    \n*info@optinomic.com*   \n*[www.optinomic.com](http://www.optinomic.com)*   \n\n\n\n",
                "parents": [],
                "html": "<p><img src=\"http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png\" alt=\"image\">\n## Optinomic-App</p><h4>Beschreibung</h4><ul><li><p>Beschreiben Sie die Funktionalität Ihrer Applikation hier. Mit Apps werden Computerprogramme bezeichnet, die genutzt werden, um eine nützliche oder gewünschte nicht systemtechnische Funktionalität zu bearbeiten oder zu unterstützen, das heißt sie dienen der „Lösung von Benutzerproblemen“.</p></li></ul><h4>Auswertung / Ergebnisse</h4><ul><li><p>Beschreiben Sie die Auswertungen / Ergebnisse Ihrer Applikation hier.</p></li></ul><h3>Contact</h3><p><i>Optinomic GmbH</i><br><i>Haldenstrasse 7</i><br><i>CH - 8942 Oberrieden</i><br><i>+41(0)44 508 26 76</i><br><i>info@optinomic.com</i><br><i><a href=\"http://www.optinomic.com\">www.optinomic.com</a></i></p>"
              },
              "surveys": [],
              "templates": [
                {
                  "height": 4,
                  "width": 4,
                  "name": "score_overview"
                }
              ],
              "identifier": "ch.suedhang.user.apps.ks_whoqol",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Klinische Stichprobe | WHOQOL-BREF",
              "dependencies": [],
              "name": "Klinische Stichprobe | WHOQOL-BREF",
              "events": [],
              "version": "1.0",
              "type": "user",
              "short_description": "Klinische Stichproben | WHOQOL-BREF",
              "database_schema_name": "ch_suedhang_user_apps_ks_whoqol",
              "database_user_name": "ch_suedhang_user_apps_ks_whoqol",
              "description": "Erstellen der klinischen Stichprobe des WHOQOL-BREF (The World Health Organization Quality of Life). Beurteilung der Physischen und Psychischen Lebensqualität.\n\n\n",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "453dc4d301343a2dffbdad18a2cd348a8961961a",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2019-12-23T09:11:07Z",
                "version": "1.0",
                "module": "ch.suedhang.user.apps.ks_whoqol"
              },
              "id": 140
            },
            "first_template": {
              "found": true,
              "name": "score_overview"
            },
            "identifier": "ch.suedhang.user.apps.ks_whoqol"
          },
          {
            "module": {
              "hash": "4b1c794c041065b756147f95b95f9ee602dd7d03",
              "calculations": [],
              "readme": {
                "text": "![image](http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png)\n## Optinomic-App \n\n\n\n#### Beschreibung\n- Beschreiben Sie die Funktionalität Ihrer Applikation hier. Mit Apps werden Computerprogramme bezeichnet, die genutzt werden, um eine nützliche oder gewünschte nicht systemtechnische Funktionalität zu bearbeiten oder zu unterstützen, das heißt sie dienen der „Lösung von Benutzerproblemen“.\n\n#### Auswertung / Ergebnisse\n- Beschreiben Sie die Auswertungen / Ergebnisse Ihrer Applikation hier.\n\n\n\n\n\n###Contact\n*Optinomic GmbH*   \n*Haldenstrasse 7*     \n*CH - 8942 Oberrieden*     \n*+41(0)44 508 26 76*    \n*info@optinomic.com*   \n*[www.optinomic.com](http://www.optinomic.com)*   \n\n\n\n",
                "parents": [],
                "html": "<p><img src=\"http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png\" alt=\"image\">\n## Optinomic-App</p><h4>Beschreibung</h4><ul><li><p>Beschreiben Sie die Funktionalität Ihrer Applikation hier. Mit Apps werden Computerprogramme bezeichnet, die genutzt werden, um eine nützliche oder gewünschte nicht systemtechnische Funktionalität zu bearbeiten oder zu unterstützen, das heißt sie dienen der „Lösung von Benutzerproblemen“.</p></li></ul><h4>Auswertung / Ergebnisse</h4><ul><li><p>Beschreiben Sie die Auswertungen / Ergebnisse Ihrer Applikation hier.</p></li></ul><h3>Contact</h3><p><i>Optinomic GmbH</i><br><i>Haldenstrasse 7</i><br><i>CH - 8942 Oberrieden</i><br><i>+41(0)44 508 26 76</i><br><i>info@optinomic.com</i><br><i><a href=\"http://www.optinomic.com\">www.optinomic.com</a></i></p>"
              },
              "surveys": [],
              "templates": [
                {
                  "height": 12,
                  "width": 6,
                  "name": "klinikstichproben"
                },
                {
                  "height": 10,
                  "width": 6,
                  "name": "pg_dimensions"
                }
              ],
              "identifier": "com.optinomic.user.apps.klinikstichproben",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Klinische Stichproben",
              "dependencies": [
                {
                  "module": "ch.suedhang.apps.tmt_V3",
                  "constraint": {
                    "gt": "1.0"
                  }
                }
              ],
              "name": "Klinische Stichproben",
              "events": [],
              "version": "1.0",
              "type": "user",
              "short_description": "Klinikstichproben erstellen und verwalten",
              "database_schema_name": "com_optinomic_user_apps_klinikstichproben",
              "database_user_name": "com_optinomic_user_apps_klinikstichproben",
              "description": "Under Development! Erstellen von klinischen Stichproben auf Basis von N-Dimensianalen Arrays aus Patient-Calculations sowie Patientengruppen - Dimensionen. Ziel dieser Applikation ist, klinische Stichproben einfach für jegliche Optinomic-App zur Verfügung zu stellen.\n\n\n",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "4b1c794c041065b756147f95b95f9ee602dd7d03",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2019-12-23T09:11:18Z",
                "version": "1.0",
                "module": "com.optinomic.user.apps.klinikstichproben"
              },
              "id": 141
            },
            "first_template": {
              "found": true,
              "name": "klinikstichproben"
            },
            "identifier": "com.optinomic.user.apps.klinikstichproben"
          },
          {
            "module": {
              "hash": "1a2dc0d755a3d6dd39a69dc971ea96d8afe0b882",
              "calculations": [],
              "readme": {
                "text": "![image](http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png)\n## PABS Lookup\n\n\n8-ung!   Südhang only!\n\n\n###Anschrift\n*Optinomic GmbH*   \n*Haldenstrasse 7*     \n*CH - 8942 Oberrieden*     \n*+41(0)44 508 26 76*    \n*info@optinomic.com*   \n*[www.optinomic.com](http://www.optinomic.com)*   \n\n\n\n",
                "parents": [],
                "html": "<p><img src=\"http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png\" alt=\"image\">\n## PABS Lookup</p><p>8-ung!   Südhang only!</p><h3>Anschrift</h3><p><i>Optinomic GmbH</i><br><i>Haldenstrasse 7</i><br><i>CH - 8942 Oberrieden</i><br><i>+41(0)44 508 26 76</i><br><i>info@optinomic.com</i><br><i><a href=\"http://www.optinomic.com\">www.optinomic.com</a></i></p>"
              },
              "surveys": [],
              "templates": [
                {
                  "height": 7,
                  "width": 6,
                  "name": "Tables"
                }
              ],
              "identifier": "ch.suedhang.bot.pabs.odbc",
              "pdf_templates": [],
              "data_source_queries": [
                {
                  "data_source": "PABS",
                  "identifier": "pabs_patients",
                  "time_spec": "0 */12 *",
                  "table_name": "ch_suedhang_bot_pabs_odbc_pabs_patients"
                },
                {
                  "data_source": "PABS",
                  "identifier": "pabs_stays",
                  "time_spec": "0 */12 *",
                  "table_name": "ch_suedhang_bot_pabs_odbc_pabs_stays"
                },
                {
                  "data_source": "PABS",
                  "identifier": "pabs_history",
                  "time_spec": "0 */12 *",
                  "table_name": "ch_suedhang_bot_pabs_odbc_pabs_history"
                }
              ],
              "original_name": "PABS - Connector (BOT)",
              "dependencies": [],
              "name": "PABS - Connector (BOT)",
              "events": [],
              "version": "1.0",
              "type": "user",
              "short_description": "ODBC-Connector: GET PABS-Data.",
              "database_schema_name": "ch_suedhang_bot_pabs_odbc",
              "database_user_name": "ch_suedhang_bot_pabs_odbc",
              "description": "Diese Applikation dient zur Sammlung von PABS-Daten. Die Daten werden anhand einem PABS-Lookup via ODBC (pabsodbc) gewonnen und als data_source_query gespeichert.\n\n\n",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "1a2dc0d755a3d6dd39a69dc971ea96d8afe0b882",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2018-08-20T14:29:55Z",
                "version": "1.0",
                "module": "ch.suedhang.bot.pabs.odbc"
              },
              "id": 111
            },
            "first_template": {
              "found": true,
              "name": "Tables"
            },
            "identifier": "ch.suedhang.bot.pabs.odbc"
          },
          {
            "module": {
              "hash": "967963dbadd6dab61ab50a925ff4edda0b841345",
              "calculations": [],
              "readme": {
                "text": "![image](http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png)\n## Optinomic-App \n\n\n\n#### Beschreibung\n- Beschreiben Sie die Funktionalität Ihrer Applikation hier. Mit Apps werden Computerprogramme bezeichnet, die genutzt werden, um eine nützliche oder gewünschte nicht systemtechnische Funktionalität zu bearbeiten oder zu unterstützen, das heißt sie dienen der „Lösung von Benutzerproblemen“.\n\n#### Auswertung / Ergebnisse\n- Beschreiben Sie die Auswertungen / Ergebnisse Ihrer Applikation hier.\n\n\n\n\n\n###Contact\n*Optinomic GmbH*   \n*Haldenstrasse 7*     \n*CH - 8942 Oberrieden*     \n*+41(0)44 508 26 76*    \n*info@optinomic.com*   \n*[www.optinomic.com](http://www.optinomic.com)*   \n\n\n\n",
                "parents": [],
                "html": "<p><img src=\"http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png\" alt=\"image\">\n## Optinomic-App</p><h4>Beschreibung</h4><ul><li><p>Beschreiben Sie die Funktionalität Ihrer Applikation hier. Mit Apps werden Computerprogramme bezeichnet, die genutzt werden, um eine nützliche oder gewünschte nicht systemtechnische Funktionalität zu bearbeiten oder zu unterstützen, das heißt sie dienen der „Lösung von Benutzerproblemen“.</p></li></ul><h4>Auswertung / Ergebnisse</h4><ul><li><p>Beschreiben Sie die Auswertungen / Ergebnisse Ihrer Applikation hier.</p></li></ul><h3>Contact</h3><p><i>Optinomic GmbH</i><br><i>Haldenstrasse 7</i><br><i>CH - 8942 Oberrieden</i><br><i>+41(0)44 508 26 76</i><br><i>info@optinomic.com</i><br><i><a href=\"http://www.optinomic.com\">www.optinomic.com</a></i></p>"
              },
              "surveys": [],
              "templates": [
                {
                  "height": 12,
                  "width": 6,
                  "name": "print_access"
                }
              ],
              "identifier": "com.optinomic.user.apps.assessment",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Patienten-Assessment (Einladung)",
              "dependencies": [],
              "name": "Patienten-Assessment (Einladung)",
              "events": [],
              "version": "1.0",
              "type": "user",
              "short_description": "Zugangsdaten und Beschreibung drucken",
              "database_schema_name": "com_optinomic_user_apps_assessment",
              "database_user_name": "com_optinomic_user_apps_assessment",
              "description": "Diese Applikation ermöglicht das Drucken der Zugangsdaten sowie einer Kurzeinführung für das Optinomic Patienten-Assessment.\n\n\n",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "967963dbadd6dab61ab50a925ff4edda0b841345",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2020-01-07T09:42:43Z",
                "version": "1.0",
                "module": "com.optinomic.user.apps.assessment"
              },
              "id": 147
            },
            "first_template": {
              "found": true,
              "name": "print_access"
            },
            "identifier": "com.optinomic.user.apps.assessment"
          },
          {
            "module": {
              "hash": "14ff1b63fed505f168b1faf7003575cddc70ec2a",
              "calculations": [],
              "readme": {
                "text": "# Optinomic API-Runner.\n\nRun [API-Commands](https://doc.optinomic.org/V2/Developers/api.html)\n\n# Example Commands\n\nWorking:\nGET  /patients/1/calculations/ch.suedhang.apps.actinfo_ein/actinfo_ein\n\nNOT YET Working:\nPOST  /calculations/com.optinomic.apps.whoqol/phys_psych_calculation/recompute\nPOST  /patients/1/calculations/ch.suedhang.apps.actinfo_ein/actinfo_ein/recompute\n\n# Anschrift\n\n![image](http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png)     \n\n*Optinomic GmbH*   \n*Haldenstrasse 7*     \n*CH - 8942 Oberrieden*     \n*+41(0)44 508 26 76*    \n*info@optinomic.com*   \n*[www.optinomic.com](http://www.optinomic.com)*   \n\n\n",
                "parents": [],
                "html": "<h1>Optinomic API-Runner.</h1><p>Run <a href=\"https://doc.optinomic.org/V2/Developers/api.html\">API-Commands</a></p><h1>Example Commands</h1><p>Working:\nGET  /patients/1/calculations/ch.suedhang.apps.actinfo<i>ein/actinfo</i>ein</p><p>NOT YET Working:\nPOST  /calculations/com.optinomic.apps.whoqol/phys<i>psych</i>calculation/recompute\nPOST  /patients/1/calculations/ch.suedhang.apps.actinfo<i>ein/actinfo</i>ein/recompute</p><h1>Anschrift</h1><p><img src=\"http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png\" alt=\"image\"></p><p><i>Optinomic GmbH</i><br><i>Haldenstrasse 7</i><br><i>CH - 8942 Oberrieden</i><br><i>+41(0)44 508 26 76</i><br><i>info@optinomic.com</i><br><i><a href=\"http://www.optinomic.com\">www.optinomic.com</a></i></p>"
              },
              "surveys": [],
              "templates": [
                {
                  "height": 7,
                  "width": 6,
                  "name": "postman"
                }
              ],
              "identifier": "org.optinomic.api.runner",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Postman",
              "dependencies": [],
              "name": "Postman",
              "events": [],
              "version": "1.0",
              "type": "user",
              "short_description": "Run Optinomic API-Calls.",
              "database_schema_name": "org_optinomic_api_runner",
              "database_user_name": "org_optinomic_api_runner",
              "description": "Run Optinomic API-Calls (like Postman)\n\n",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "14ff1b63fed505f168b1faf7003575cddc70ec2a",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2019-12-23T09:11:45Z",
                "version": "1.0",
                "module": "org.optinomic.api.runner"
              },
              "id": 142
            },
            "first_template": {
              "found": true,
              "name": "postman"
            },
            "identifier": "org.optinomic.api.runner"
          },
          {
            "module": {
              "hash": "64b60d7da5fb54e7114a02300cc71e5f32e00960",
              "calculations": [],
              "readme": {
                "text": "# Optinomic RARMED-BROWSER.\n\nDie Änderungen der Tarifstruktur folgen den Vorgaben der Verordnung des Bunderates über die Anpassung von Tarifstrukturen in der Krankenversicherung vom 18. Oktober 2017. Detaillierte Informationen finden Sie im Begleittext zur Verordnung sowie auf der Internetseite der FMH: https://www.fmh.ch/ambulante_tarife/tarmed-tarif/tarmed-aenderungen-ab-1-1-2018.html  \n\nDie Unfallversicherer, die Invalidenversicherung und die Militärversicherung schliessen sich dieser Lösung nicht an. Bis zum 31. März 2018 ist für die Bereiche UV, IV und MV weiterhin die Tarifversion 01.08.00_BR_UVG/IVG/MVG gültig.\n\n# Anschrift\n\n![image](http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png)     \n\n*Optinomic GmbH*   \n*Haldenstrasse 7*     \n*CH - 8942 Oberrieden*     \n*+41(0)44 508 26 76*    \n*info@optinomic.com*   \n*[www.optinomic.com](http://www.optinomic.com)*   \n\n\n",
                "parents": [],
                "html": "<h1>Optinomic RARMED-BROWSER.</h1><p>Die Änderungen der Tarifstruktur folgen den Vorgaben der Verordnung des Bunderates über die Anpassung von Tarifstrukturen in der Krankenversicherung vom 18. Oktober 2017. Detaillierte Informationen finden Sie im Begleittext zur Verordnung sowie auf der Internetseite der FMH: https://www.fmh.ch/ambulante_tarife/tarmed-tarif/tarmed-aenderungen-ab-1-1-2018.html</p><p>Die Unfallversicherer, die Invalidenversicherung und die Militärversicherung schliessen sich dieser Lösung nicht an. Bis zum 31. März 2018 ist für die Bereiche UV, IV und MV weiterhin die Tarifversion 01.08.00<i>BR</i>UVG/IVG/MVG gültig.</p><h1>Anschrift</h1><p><img src=\"http://www.ottiger.org/optinomic_logo/optinomic_logo_small.png\" alt=\"image\"></p><p><i>Optinomic GmbH</i><br><i>Haldenstrasse 7</i><br><i>CH - 8942 Oberrieden</i><br><i>+41(0)44 508 26 76</i><br><i>info@optinomic.com</i><br><i><a href=\"http://www.optinomic.com\">www.optinomic.com</a></i></p>"
              },
              "surveys": [],
              "templates": [
                {
                  "height": 7,
                  "width": 6,
                  "name": "tarmed"
                }
              ],
              "identifier": "org.optinomic.tarmed.browser",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "TARMED - Browser",
              "dependencies": [],
              "name": "TARMED - Browser",
              "events": [],
              "version": "1.0",
              "type": "user",
              "short_description": "TARMED - Tarifstruktur - V35 | 01.09",
              "database_schema_name": "org_optinomic_tarmed_browser",
              "database_user_name": "org_optinomic_tarmed_browser",
              "description": "TARMED Tarifstruktur Browser. Die Änderungen der Tarifstruktur folgen den Vorgaben der Verordnung des Bunderates über die Anpassung von Tarifstrukturen in der Krankenversicherung vom 18.\n\n",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "64b60d7da5fb54e7114a02300cc71e5f32e00960",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2019-12-23T09:11:59Z",
                "version": "1.0",
                "module": "org.optinomic.tarmed.browser"
              },
              "id": 143
            },
            "first_template": {
              "found": true,
              "name": "tarmed"
            },
            "identifier": "org.optinomic.tarmed.browser"
          },
          {
            "module": {
              "hash": "40d50acc429426d78dc07ba6a08dd3f57ffe04c1",
              "calculations": [],
              "readme": {
                "text": "",
                "parents": [],
                "html": ""
              },
              "surveys": [],
              "templates": [
                {
                  "height": 10,
                  "width": 6,
                  "name": "tetris"
                }
              ],
              "identifier": "com.optinomic.user.game.tetris",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Tetris",
              "dependencies": [],
              "name": "Tetris",
              "events": [],
              "version": "1.0",
              "type": "user",
              "short_description": "«Kognitive Umstellfähigkeit» oder «Puzzleartiges Computerspiel»?",
              "database_schema_name": "com_optinomic_user_game_tetris",
              "database_user_name": "com_optinomic_user_game_tetris",
              "description": "Tetris ist ein puzzleartiges Computerspiel des russischen Programmierers Alexei Paschitnow, der die erste spielbare Version am 6. Juni 1984 auf einem Elektronika-60-Rechner fertigstellte. Ziel dieser Optinomic-App ist die kognitive Umstellfähigkeit des Personals zu fördern. Weil's Spass macht!  ;-)\n\n",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "http://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "40d50acc429426d78dc07ba6a08dd3f57ffe04c1",
                "name_overwrite": null,
                "overwritten": false,
                "last_update": "2019-12-23T09:12:08Z",
                "version": "1.0",
                "module": "com.optinomic.user.game.tetris"
              },
              "id": 144
            },
            "first_template": {
              "found": true,
              "name": "tetris"
            },
            "identifier": "com.optinomic.user.game.tetris"
          }
        ],
        "errors": [],
        "hotloaded": [
          {
            "module": {
              "hash": "bbf2d1624223093200dd4021c9f0d88155b978d9",
              "calculations": [],
              "readme": {
                "text": "### Entwickler\r\nThis patient-app is currently HOTLOADED!\r\n\r\n\r\n\r\n",
                "parents": [],
                "html": "<h3>Entwickler</h3><p>This patient-app is currently HOTLOADED!</p>"
              },
              "surveys": [],
              "templates": [
                {
                  "height": 4,
                  "width": 6,
                  "name": "PDF"
                }
              ],
              "identifier": "com.optinomic.apps.pdf.patient.allgemein",
              "pdf_templates": [],
              "data_source_queries": [],
              "original_name": "Druckvorlagen (PDF)",
              "dependencies": [],
              "name": "Druckvorlagen (PDF)",
              "events": [],
              "version": "1.0",
              "type": "patient",
              "short_description": "(Patienten-)Druckvorlagen (PDF).",
              "database_schema_name": "com_optinomic_apps_pdf_patient_allgemein",
              "database_user_name": "com_optinomic_apps_pdf_patient_allgemein",
              "description": "Allgemeine und spezifische Patienten-Druckvorlagen im PDF Format.\r\n\r\n\r\n",
              "developer": {
                "email": "beat@optinomic.com",
                "phone": "+41 (0)44 508 26 76",
                "first_name": "Beat",
                "website": "https://www.optinomic.com/",
                "company": "Optinomic Gmbh",
                "last_name": "Ottiger",
                "github_user": "ottigerb"
              }
            },
            "module_activation": {
              "data": {
                "hash": "bbf2d1624223093200dd4021c9f0d88155b978d9",
                "name_overwrite": null,
                "overwritten": true,
                "last_update": "2020-04-03T12:09:05Z",
                "version": "1.0",
                "module": "com.optinomic.apps.pdf.patient.allgemein"
              },
              "id": 264
            },
            "first_template": {
              "found": true,
              "name": "PDF"
            },
            "identifier": "com.optinomic.apps.pdf.patient.allgemein"
          }
        ]
      },
      "api_timestamp": "2020-04-03T12:09:08.483Z",
      "api_url": "module_activations"
    },
    "table_of_contents": [
      {
        "title": "Dokumentation",
        "subtitle": "Readme",
        "id": "id_readme"
      },
      {
        "title": "Allgemeine",
        "subtitle": "Druckvorlagen (PDF)",
        "id": "pdf_allgemeine_druckvorlagen"
      },
      {
        "title": "Gesamtauswertung",
        "subtitle": "Fallkonferenz (UNDER CONSTRUCTION!)",
        "id": "pdf_gesamtauswertung"
      },
      {
        "title": "Spezifische Applikationen",
        "subtitle": "Druckvorlagen (PDF)",
        "id": "pdf_apps_druckvorlagen"
      }
    ],
    "current_app": {
      "module": {
        "hash": "bbf2d1624223093200dd4021c9f0d88155b978d9",
        "calculations": [],
        "readme": {
          "text": "### Entwickler\r\nThis patient-app is currently HOTLOADED!\r\n\r\n\r\n\r\n",
          "parents": [],
          "html": "<h3>Entwickler</h3><p>This patient-app is currently HOTLOADED!</p>"
        },
        "surveys": [],
        "templates": [
          {
            "height": 4,
            "width": 6,
            "name": "PDF"
          }
        ],
        "identifier": "com.optinomic.apps.pdf.patient.allgemein",
        "pdf_templates": [],
        "data_source_queries": [],
        "original_name": "Druckvorlagen (PDF)",
        "dependencies": [],
        "name": "Druckvorlagen (PDF)",
        "events": [],
        "version": "1.0",
        "type": "patient",
        "short_description": "(Patienten-)Druckvorlagen (PDF).",
        "database_schema_name": "com_optinomic_apps_pdf_patient_allgemein",
        "database_user_name": "com_optinomic_apps_pdf_patient_allgemein",
        "description": "Allgemeine und spezifische Patienten-Druckvorlagen im PDF Format.\r\n\r\n\r\n",
        "developer": {
          "email": "beat@optinomic.com",
          "phone": "+41 (0)44 508 26 76",
          "first_name": "Beat",
          "website": "https://www.optinomic.com/",
          "company": "Optinomic Gmbh",
          "last_name": "Ottiger",
          "github_user": "ottigerb"
        }
      },
      "module_activation": {
        "data": {
          "hash": "bbf2d1624223093200dd4021c9f0d88155b978d9",
          "name_overwrite": null,
          "overwritten": true,
          "last_update": "2020-04-03T12:09:05Z",
          "version": "1.0",
          "module": "com.optinomic.apps.pdf.patient.allgemein"
        },
        "id": 264
      },
      "first_template": {
        "found": true,
        "name": "PDF"
      },
      "identifier": "com.optinomic.apps.pdf.patient.allgemein"
    },
    "user": {
      "id": 2,
      "date": "2020-04-03T12:09:08.509Z",
      "data": {
        "email": "beat@optinomic.com",
        "phone": "+41 (0)44 508 26 76",
        "first_name": "Beat",
        "locked": false,
        "birthday": "1973-05-21T00:00:00Z",
        "role": "Admin",
        "gender": "male",
        "ou": "3038",
        "last_name": "Ottiger",
        "initials": "BO",
        "title": null,
        "cis_uid": 121,
        "description": "Administrator",
        "id": 2,
        "uid": 2,
        "isAdmin": true
      }
    },
    "patient": {
      "date": "2020-04-03T12:09:08.148Z",
      "data": {
        "address2": null,
        "cis_lead_doctor": null,
        "email": "noemail@cis.imported",
        "deceased": false,
        "first_name": "Dominique",
        "four_letter_code": "MEUE",
        "stay_id": null,
        "country": "CH",
        "phone_mobile": null,
        "phone_home": null,
        "gender": "male",
        "city": "Olten",
        "ahv": "756.5170.2886.63",
        "lead_therapist": null,
        "address1": "Aarburgerstrasse 96",
        "last_name": "Breitenmoser",
        "language": "de",
        "birth_name": null,
        "title": "Herrn",
        "notes": "",
        "cis_pid": 13012,
        "zip_code": "4600",
        "birthdate": "1968-10-22T00:00:00Z",
        "id": 3868,
        "pid": 3868,
        "extras": {
          "age": 51,
          "birthday": "22.10.1968",
          "birthday_age": "22.10.1968 | 51",
          "name": "Breitenmoser Dominique",
          "birth_year": 1968,
          "secure": "Br. D. (1968)",
          "ansprache": "Herr",
          "anrede": "Herr Breitenmoser",
          "full_name": "Herr Breitenmoser Dominique (22.10.1968 | 51)",
          "full_address": "Aarburgerstrasse 96, 4600 Olten",
          "phone": "",
          "infoline": "Aarburgerstrasse 96, 4600 Olten",
          "color_main": "#3F51B5",
          "color_accent": "#E91E63"
        }
      }
    },
    "stays": {
      "all": [
        {
          "data": {
            "photo": "",
            "cis_lead_doctor": null,
            "status": "",
            "phase": "complete",
            "frozen": true,
            "first_contact": null,
            "lead_therapist_id": 66,
            "start": "2018-11-20T12:45:00Z",
            "stop_status": null,
            "insurance_number": "",
            "patient_id": 3868,
            "insurance_provider": "PTS",
            "cis_fid": 1301203,
            "stop": "2019-02-12T12:30:00Z",
            "deputy_lead_therapist_id": null,
            "notes": "",
            "service_provider": "",
            "class": "S",
            "lead_therapist_id_overwrite": null,
            "extras": {
              "in_stay": false,
              "duration": 84,
              "phase_de": "Die Behandlung wurde vor mehr als 14 Tage beendet",
              "phase_en": "the stay ended more than 14 days ago",
              "beginn": "20.11.2018",
              "from_to": "20.11.2018 - 12.2.2019",
              "ende": "12.2.2019"
            },
            "id": 5992,
            "fid": 5992
          },
          "id": 5992
        },
        {
          "data": {
            "photo": "",
            "cis_lead_doctor": null,
            "status": "",
            "phase": "complete",
            "frozen": true,
            "first_contact": null,
            "lead_therapist_id": 66,
            "start": "2018-11-20T07:00:00Z",
            "stop_status": null,
            "insurance_number": "",
            "patient_id": 3868,
            "insurance_provider": "",
            "cis_fid": 130120300,
            "stop": "2019-02-12T19:00:00Z",
            "deputy_lead_therapist_id": null,
            "notes": "",
            "service_provider": "",
            "class": "S3",
            "lead_therapist_id_overwrite": null,
            "extras": {
              "in_stay": false,
              "duration": 85,
              "phase_de": "Die Behandlung wurde vor mehr als 14 Tage beendet",
              "phase_en": "the stay ended more than 14 days ago",
              "beginn": "20.11.2018",
              "from_to": "20.11.2018 - 12.2.2019",
              "ende": "12.2.2019"
            },
            "id": 6721,
            "fid": 6721
          },
          "id": 6721
        },
        {
          "data": {
            "photo": "",
            "cis_lead_doctor": null,
            "status": "",
            "phase": "complete",
            "frozen": true,
            "first_contact": null,
            "lead_therapist_id": 66,
            "start": "2018-06-11T10:15:00Z",
            "stop_status": null,
            "insurance_number": "",
            "patient_id": 3868,
            "insurance_provider": "QUEA",
            "cis_fid": 1301202,
            "stop": "2018-07-14T10:00:00Z",
            "deputy_lead_therapist_id": null,
            "notes": "",
            "service_provider": "",
            "class": "S",
            "lead_therapist_id_overwrite": null,
            "extras": {
              "in_stay": false,
              "duration": 33,
              "phase_de": "Die Behandlung wurde vor mehr als 14 Tage beendet",
              "phase_en": "the stay ended more than 14 days ago",
              "beginn": "11.6.2018",
              "from_to": "11.6.2018 - 14.7.2018",
              "ende": "14.7.2018"
            },
            "id": 5727,
            "fid": 5727
          },
          "id": 5727
        }
      ],
      "current": {
        "id": 5992,
        "data": {
          "photo": "",
          "cis_lead_doctor": null,
          "status": "",
          "phase": "complete",
          "frozen": true,
          "first_contact": null,
          "lead_therapist_id": 66,
          "start": "2018-11-20T12:45:00Z",
          "stop_status": null,
          "insurance_number": "",
          "patient_id": 3868,
          "insurance_provider": "PTS",
          "cis_fid": 1301203,
          "stop": "2019-02-12T12:30:00Z",
          "deputy_lead_therapist_id": null,
          "notes": "",
          "service_provider": "",
          "class": "S",
          "lead_therapist_id_overwrite": null,
          "extras": {
            "in_stay": false,
            "duration": 84,
            "phase_de": "Die Behandlung wurde vor mehr als 14 Tage beendet",
            "phase_en": "the stay ended more than 14 days ago",
            "beginn": "20.11.2018",
            "from_to": "20.11.2018 - 12.2.2019",
            "ende": "12.2.2019"
          },
          "id": 5992,
          "fid": 5992
        },
        "found": true
      }
    },
    "clinic": {
      "date": "2020-04-03T12:09:08.156Z",
      "data": {
        "admin_email": "Nora.Schoenenberger@suedhang.ch",
        "admin_name": "Nora Schoenenberger",
        "admin_phone": "+41 (0)31 828 14 14",
        "clinic_address": "Südhang 1, CH-3038 Kirchlindach",
        "clinic_email": "info@suedhang.ch",
        "clinic_logo": "http://suedhang.ch/images/content/Logo_Suedhang_Retina.png",
        "clinic_name": "Klinik Südhang",
        "clinic_phone": "+41 (0)31 828 14 14",
        "clinic_slogan": "Kompetenzzentrum für Mensch und Sucht",
        "clinic_www": "http://suedhang.ch/de/",
        "array": [
          [
            "admin_email",
            "Nora.Schoenenberger@suedhang.ch"
          ],
          [
            "admin_name",
            "Nora Schoenenberger"
          ],
          [
            "admin_phone",
            "+41 (0)31 828 14 14"
          ],
          [
            "clinic_address",
            "Südhang 1, CH-3038 Kirchlindach"
          ],
          [
            "clinic_email",
            "info@suedhang.ch"
          ],
          [
            "clinic_logo",
            "http://suedhang.ch/images/content/Logo_Suedhang_Retina.png"
          ],
          [
            "clinic_name",
            "Klinik Südhang"
          ],
          [
            "clinic_phone",
            "+41 (0)31 828 14 14"
          ],
          [
            "clinic_slogan",
            "Kompetenzzentrum für Mensch und Sucht"
          ],
          [
            "clinic_www",
            "http://suedhang.ch/de/"
          ]
        ]
      }
    },
    "data_apps": {
      "count": 13,
      "init_array": [
        "com.optinomic.apps.pdf.patient.allgemein",
        "ch.suedhang.apps.rs13.production",
        "ch.suedhang.apps.actinfo_ein.production",
        "ch.suedhang.apps.actinfo_aus.production",
        "ch.suedhang.apps.tmt.production",
        "ch.suedhang.apps.bdi.production",
        "ch.suedhang.apps.asrs.production",
        "ch.suedhang.apps.aase-g.production",
        "ch.suedhang.apps.bscl_anq.production",
        "ch.suedhang.apps.isk.production",
        "ch.suedhang.apps.whoqol.production",
        "ch.suedhang.apps.sci.production",
        "ch.suedhang.apps.rs13.production"
      ],
      "loaded_array": [
        "com.optinomic.apps.pdf.patient.allgemein",
        "ch.suedhang.apps.rs13.production",
        "ch.suedhang.apps.tmt.production",
        "ch.suedhang.apps.actinfo_ein.production",
        "ch.suedhang.apps.asrs.production",
        "ch.suedhang.apps.aase-g.production",
        "ch.suedhang.apps.isk.production",
        "ch.suedhang.apps.bdi.production",
        "ch.suedhang.apps.rs13.production",
        "ch.suedhang.apps.whoqol.production",
        "ch.suedhang.apps.actinfo_aus.production",
        "ch.suedhang.apps.bscl_anq.production",
        "ch.suedhang.apps.sci.production"
      ],
      "data_object": {
        "com.optinomic.apps.pdf.patient.allgemein": {
          "date": "2020-04-03T12:09:08.168Z",
          "data": [],
          "calculations_all": [],
          "have_data": false,
          "loaded": true,
          "possible_data": true,
          "request": "stay",
          "pid": 3868,
          "fid": 5992,
          "app_id": "com.optinomic.apps.pdf.patient.allgemein",
          "params": {
            "identifier": "com.optinomic.apps.pdf.patient.allgemein",
            "title": "Druckvorlagen (PDF)",
            "subtitle": "Allgeime (Patienten-)Druckvorlagen"
          }
        },
        "ch.suedhang.apps.rs13.production": {
          "date": "2020-04-03T12:09:08.823Z",
          "data": [],
          "calculations_all": [],
          "have_data": false,
          "loaded": true,
          "possible_data": true,
          "request": "stay",
          "pid": 3868,
          "fid": 5992,
          "app_id": "com.optinomic.apps.pdf.patient.allgemein",
          "params": {
            "name": "rs13",
            "title": "RS-13",
            "subtitle": "Resilienzfragebogen",
            "identifier": "ch.suedhang.apps.rs13.production"
          },
          "module": {
            "hash": "4165da00fa2c584cfc849aa6677c0d1c36fa50f7",
            "calculations": [
              "resilienz_score"
            ],
            "readme": {
              "text": "## Resilienzfragebogen (RS-13)\n\n### Zusammenfassung\nMit dem Resilienzfragebogen (RS-13) wird die die psychische Widerstandskraft; die Fähigkeit, schwierige Lebenssituationen ohne anhaltende Beeinträchtigung zu überstehen erfasst.\n\n#### Auswertung / Interpretation\nDie Auswertung erfolgt über eine Addition der Punktwerte. Für die Interpretation der Merkmalausprägung für Resilienz empfiehlt sich folgendes Schema:\n\n13 - 66  =  Niedrig    \n67 - 72  =  Moderat    \n73 - 91  =  Hoch    \n\n\n\n",
              "parents": [
                {
                  "text": "## Resilienzfragebogen (RS-13)\n\n### Zusammenfassung\nMit dem Resilienzfragebogen (RS-13) wird die die psychische Widerstandskraft; die Fähigkeit, schwierige Lebenssituationen ohne anhaltende Beeinträchtigung zu überstehen erfasst.\n\n#### Auswertung / Interpretation\nDie Auswertung erfolgt über eine Addition der Punktwerte. Für die Interpretation der Merkmalausprägung für Resilienz empfiehlt sich folgendes Schema:\n\n13 - 66  =  Niedrig\n\n67 - 72  =  Moderat\n\n73 - 91  =  Hoch\n\n\n\n",
                  "identifier": "ch.suedhang.apps.rs13",
                  "html": "<h2>Resilienzfragebogen (RS-13)</h2><h3>Zusammenfassung</h3><p>Mit dem Resilienzfragebogen (RS-13) wird die die psychische Widerstandskraft; die Fähigkeit, schwierige Lebenssituationen ohne anhaltende Beeinträchtigung zu überstehen erfasst.</p><h4>Auswertung / Interpretation</h4><p>Die Auswertung erfolgt über eine Addition der Punktwerte. Für die Interpretation der Merkmalausprägung für Resilienz empfiehlt sich folgendes Schema:</p><p>13 - 66  =  Niedrig</p><p>67 - 72  =  Moderat</p><p>73 - 91  =  Hoch</p>"
                }
              ],
              "html": "<h2>Resilienzfragebogen (RS-13)</h2><h3>Zusammenfassung</h3><p>Mit dem Resilienzfragebogen (RS-13) wird die die psychische Widerstandskraft; die Fähigkeit, schwierige Lebenssituationen ohne anhaltende Beeinträchtigung zu überstehen erfasst.</p><h4>Auswertung / Interpretation</h4><p>Die Auswertung erfolgt über eine Addition der Punktwerte. Für die Interpretation der Merkmalausprägung für Resilienz empfiehlt sich folgendes Schema:</p><p>13 - 66  =  Niedrig<br>67 - 72  =  Moderat<br>73 - 91  =  Hoch</p>"
            },
            "surveys": [
              {
                "identifier": "rs13_ng",
                "name": "Resilienzfragebogen (RS-13)"
              }
            ],
            "templates": [
              {
                "height": 6,
                "width": 6,
                "name": "Resilienz"
              }
            ],
            "identifier": "ch.suedhang.apps.rs13.production",
            "pdf_templates": [],
            "data_source_queries": [],
            "original_name": "Resilienzfragebogen (RS-13)",
            "dependencies": [],
            "name": "Resilienzfragebogen (RS-13)",
            "events": [
              {
                "due_after": 259200,
                "survey": "rs13_ng",
                "name": "activation",
                "time_spec": {
                  "type": "on_activation"
                },
                "overdue": {
                  "type": "ignore"
                },
                "description": "RS-13 Eintritt"
              },
              {
                "due_after": 259200,
                "survey": "rs13_ng",
                "name": "exit",
                "time_spec": {
                  "days": 10,
                  "time": "08:00:00",
                  "type": "before_exit"
                },
                "overdue": {
                  "type": "ignore"
                },
                "description": "RS-13 Austritt"
              }
            ],
            "version": "1.0",
            "type": "patient",
            "short_description": "Psychische Widerstandskraft",
            "database_schema_name": "ch_suedhang_apps_rs13_production",
            "database_user_name": "ch_suedhang_apps_rs13_production",
            "description": "Mit dem Resilienzfragebogen (RS-13) wird die die psychische Widerstandskraft; die Fähigkeit, schwierige Lebenssituationen ohne anhaltende Beeinträchtigung zu überstehen erfasst.\n\n",
            "developer": {
              "email": "nora.schoenenberger@suedhang.ch",
              "phone": "+41 (0)31 828 14 92",
              "first_name": "Nora",
              "website": "http://suedhang.ch/de/Forschung",
              "company": "Suedhang",
              "last_name": "Schönenberger",
              "github_user": "schoenenb"
            }
          }
        },
        "ch.suedhang.apps.tmt.production": {
          "date": "2020-04-03T12:09:08.739Z",
          "data": [
            {
              "all_found": true,
              "app_id": "ch.suedhang.apps.tmt.production",
              "date": "2018-11-28T07:08:54Z",
              "response_id": 24120,
              "response": {
                "TMTAError": 0,
                "Ausbildungsjahre": "9",
                "TMTBError": 0,
                "survey_version": "ng_survey_v2",
                "Erhebungsdatum": "2018-11-26T23:00:00.000Z",
                "TMTATime": 30,
                "TMTBTime": 115,
                "Messzeitpunkt": "1"
              },
              "event": {
                "status": "done",
                "due": "2018-12-12T07:08:21Z",
                "url": "http://survey.demo.optinomic.org//surveys/bfd294e3-5bd6-4aeb-a7c1-4c338d9841c6",
                "patient_uses_module_id": 25436,
                "random_hash": "bfd294e3-5bd6-4aeb-a7c1-4c338d9841c6",
                "survey_name": "Trail Making Test (TMT)",
                "patient_id": 3868,
                "responsibility": {
                  "role": "Admin",
                  "type": "role"
                },
                "module": "ch.suedhang.apps.tmt.production",
                "overdue": {
                  "type": "ignore"
                },
                "created_at": "2018-11-28T07:08:21Z",
                "description": "Survey scheduled manually.",
                "id": 39277,
                "extras": {
                  "created_at": "28.11.2018",
                  "due": "12.12.2018",
                  "status": "Done",
                  "status_de": "Erledigt",
                  "show_do_it_now": false
                }
              },
              "event_found": true,
              "event_id": 39277,
              "patient": {
                "age": 51,
                "birthday": "22.10.1968",
                "birthday_age": "22.10.1968 | 51",
                "name": "Breitenmoser Dominique",
                "birth_year": 1968,
                "secure": "Br. D. (1968)",
                "ansprache": "Herr",
                "anrede": "Herr Breitenmoser",
                "full_name": "Herr Breitenmoser Dominique (22.10.1968 | 51)",
                "full_address": "Aarburgerstrasse 96, 4600 Olten",
                "phone": "",
                "infoline": "Aarburgerstrasse 96, 4600 Olten",
                "color_main": "#3F51B5",
                "color_accent": "#E91E63"
              },
              "patient_found": true,
              "patient_id": 3868,
              "stay": {
                "photo": "",
                "cis_lead_doctor": null,
                "status": "",
                "phase": "complete",
                "frozen": true,
                "first_contact": null,
                "lead_therapist_id": 66,
                "start": "2018-11-20T12:45:00Z",
                "stop_status": null,
                "insurance_number": "",
                "patient_id": 3868,
                "insurance_provider": "PTS",
                "cis_fid": 1301203,
                "stop": "2019-02-12T12:30:00Z",
                "deputy_lead_therapist_id": null,
                "notes": "",
                "service_provider": "",
                "class": "S",
                "lead_therapist_id_overwrite": null,
                "id": 5992,
                "fid": 5992,
                "extras": {
                  "in_stay": false,
                  "duration": 84,
                  "phase_de": "Die Behandlung wurde vor mehr als 14 Tage beendet",
                  "phase_en": "the stay ended more than 14 days ago",
                  "beginn": "20.11.2018",
                  "from_to": "20.11.2018 - 12.2.2019",
                  "ende": "12.2.2019"
                }
              },
              "stay_found": true,
              "stay_id": 5992,
              "patient_uses_module": {
                "settings": {},
                "stay_id": 5992,
                "patient_id": 3868,
                "responsibility": null,
                "deactivated": false,
                "module": "ch.suedhang.apps.tmt.production",
                "overdue": null,
                "last_event_generation": "2020-04-03T12:04:13.299186Z",
                "activated_on": "2018-11-21T14:01:51Z",
                "id": 25436
              },
              "patient_uses_module_found": true,
              "patient_uses_module_id": 25436,
              "calculation": {
                "tmt_score": {
                  "TMTAError": 0,
                  "TMTBError": 0,
                  "edu_years": 9,
                  "response": {
                    "data": {
                      "response": {
                        "TMTAError": 0,
                        "Ausbildungsjahre": "9",
                        "tmt_b_error": 0,
                        "TMTBError": 0,
                        "edu_years": "9",
                        "survey_version": "ng_survey_v2",
                        "Erhebungsdatum": "2018-11-26T23:00:00.000Z",
                        "TMTATime": 30,
                        "tmt_a_error": 0,
                        "mz": "1",
                        "tmt_b_time": 115,
                        "TMTBTime": 115,
                        "Messzeitpunkt": "1",
                        "tmt_a_time": 30
                      },
                      "event_id": 39277,
                      "filled": "2018-11-28T07:08:54Z"
                    },
                    "id": 24120
                  },
                  "TMTATime": 30,
                  "quotient": 3.8333333333333335,
                  "date": "2018-11-26T23:00:00.000Z",
                  "mz": 1,
                  "version": "19. Oktober 2016",
                  "TMTBTime": 115,
                  "quotient_rounded": 3.83,
                  "percentile": {
                    "education": 0,
                    "time_error": {
                      "TMTAError": 0,
                      "TMTBError": 0,
                      "TMTATime": 30,
                      "TMTBTime": 115
                    },
                    "age_perz": {
                      "perz90": [
                        19,
                        42
                      ],
                      "tmtB_norm_m": 63.76,
                      "tmtA_norm_m": 31.78,
                      "education": 99,
                      "perz50": [
                        31,
                        64
                      ],
                      "altersgruppe": 3,
                      "perz60": [
                        29,
                        62
                      ],
                      "n": 41,
                      "perz10": [
                        50,
                        84
                      ],
                      "perz20": [
                        38,
                        75
                      ],
                      "perz70": [
                        27,
                        59
                      ],
                      "altersgruppe_text": "Altersgruppe 45 – 54",
                      "perz80": [
                        23,
                        50
                      ],
                      "tmtA_norm_sd": 9.93,
                      "education_high": false,
                      "perz30": [
                        34,
                        72
                      ],
                      "tmtB_norm_sd": 14.42,
                      "altersgruppe_found": true,
                      "perz40": [
                        33,
                        68
                      ]
                    },
                    "result": {
                      "calculated": true,
                      "A": 60,
                      "B": 10
                    },
                    "vars": {
                      "edu_years": 9,
                      "d": {
                        "TMTAError": 0,
                        "Ausbildungsjahre": "9",
                        "tmt_b_error": 0,
                        "TMTBError": 0,
                        "edu_years": "9",
                        "survey_version": "ng_survey_v2",
                        "Erhebungsdatum": "2018-11-26T23:00:00.000Z",
                        "TMTATime": 30,
                        "tmt_a_error": 0,
                        "mz": "1",
                        "tmt_b_time": 115,
                        "TMTBTime": 115,
                        "Messzeitpunkt": "1",
                        "tmt_a_time": 30
                      },
                      "set_age": 50
                    },
                    "z_scores": {
                      "tmtB_z_neu_rounded": 3.55,
                      "tmtB_z_zeitabbruch": -16.382801664355064,
                      "tmtA_z_zeitabbruch_rounded": -14.93,
                      "calculated": true,
                      "tmtA_z_neu": -0.17925478348439086,
                      "tmtB_z_zeitabbruch_rounded": -16.38,
                      "tmtA_z": 0.17925478348439086,
                      "quotient": 3.8333333333333335,
                      "tmtA_z_neu_rounded": -0.18,
                      "tmtB_z": -3.5533980582524274,
                      "tmtA_z_rounded": 0.18,
                      "quotient_rounded": 3.83,
                      "tmtB_z_neu": 3.5533980582524274,
                      "tmtB_z_rounded": -3.55,
                      "tmtA_z_zeitabbruch": -14.926485397784491
                    }
                  },
                  "Messzeitpunkt": {
                    "Messzeitpunkt_Text_Quotient": "Eintritt (B/A: 3.83)",
                    "Messzeitpunkt_Text": "Eintritt",
                    "Messzeitpunkt": 1
                  },
                  "set_age": 50,
                  "birthdate": "1968-10-22T00:00:00Z"
                }
              },
              "calculation_found": true,
              "calculation_found_method": "variant_response_tmt"
            },
            {
              "all_found": true,
              "app_id": "ch.suedhang.apps.tmt.production",
              "date": "2019-02-04T09:31:39Z",
              "response_id": 25266,
              "response": {
                "TMTAError": 0,
                "Ausbildungsjahre": 9,
                "TMTBError": 1,
                "survey_version": "ng_survey_v2",
                "Erhebungsdatum": "2019-02-03T23:00:00.000Z",
                "TMTATime": 29,
                "TMTBTime": 80,
                "Messzeitpunkt": "2"
              },
              "event": {
                "status": "done",
                "due": "2019-02-18T09:31:15Z",
                "url": "http://survey.demo.optinomic.org//surveys/6ec96a2c-3c18-42e0-9505-8462cf2dbc80",
                "patient_uses_module_id": 25436,
                "random_hash": "6ec96a2c-3c18-42e0-9505-8462cf2dbc80",
                "survey_name": "Trail Making Test (TMT)",
                "patient_id": 3868,
                "responsibility": {
                  "role": "Admin",
                  "type": "role"
                },
                "module": "ch.suedhang.apps.tmt.production",
                "overdue": {
                  "type": "ignore"
                },
                "created_at": "2019-02-04T09:31:15Z",
                "description": "Survey scheduled manually.",
                "id": 40838,
                "extras": {
                  "created_at": "4.2.2019",
                  "due": "18.2.2019",
                  "status": "Done",
                  "status_de": "Erledigt",
                  "show_do_it_now": false
                }
              },
              "event_found": true,
              "event_id": 40838,
              "patient": {
                "age": 51,
                "birthday": "22.10.1968",
                "birthday_age": "22.10.1968 | 51",
                "name": "Breitenmoser Dominique",
                "birth_year": 1968,
                "secure": "Br. D. (1968)",
                "ansprache": "Herr",
                "anrede": "Herr Breitenmoser",
                "full_name": "Herr Breitenmoser Dominique (22.10.1968 | 51)",
                "full_address": "Aarburgerstrasse 96, 4600 Olten",
                "phone": "",
                "infoline": "Aarburgerstrasse 96, 4600 Olten",
                "color_main": "#3F51B5",
                "color_accent": "#E91E63"
              },
              "patient_found": true,
              "patient_id": 3868,
              "stay": {
                "photo": "",
                "cis_lead_doctor": null,
                "status": "",
                "phase": "complete",
                "frozen": true,
                "first_contact": null,
                "lead_therapist_id": 66,
                "start": "2018-11-20T12:45:00Z",
                "stop_status": null,
                "insurance_number": "",
                "patient_id": 3868,
                "insurance_provider": "PTS",
                "cis_fid": 1301203,
                "stop": "2019-02-12T12:30:00Z",
                "deputy_lead_therapist_id": null,
                "notes": "",
                "service_provider": "",
                "class": "S",
                "lead_therapist_id_overwrite": null,
                "id": 5992,
                "fid": 5992,
                "extras": {
                  "in_stay": false,
                  "duration": 84,
                  "phase_de": "Die Behandlung wurde vor mehr als 14 Tage beendet",
                  "phase_en": "the stay ended more than 14 days ago",
                  "beginn": "20.11.2018",
                  "from_to": "20.11.2018 - 12.2.2019",
                  "ende": "12.2.2019"
                }
              },
              "stay_found": true,
              "stay_id": 5992,
              "patient_uses_module": {
                "settings": {},
                "stay_id": 5992,
                "patient_id": 3868,
                "responsibility": null,
                "deactivated": false,
                "module": "ch.suedhang.apps.tmt.production",
                "overdue": null,
                "last_event_generation": "2020-04-03T12:04:13.299186Z",
                "activated_on": "2018-11-21T14:01:51Z",
                "id": 25436
              },
              "patient_uses_module_found": true,
              "patient_uses_module_id": 25436,
              "calculation": {
                "tmt_score": {
                  "TMTAError": 0,
                  "TMTBError": 1,
                  "edu_years": 9,
                  "response": {
                    "data": {
                      "response": {
                        "TMTAError": 0,
                        "Ausbildungsjahre": 9,
                        "tmt_b_error": 1,
                        "TMTBError": 1,
                        "edu_years": 9,
                        "survey_version": "ng_survey_v2",
                        "Erhebungsdatum": "2019-02-03T23:00:00.000Z",
                        "TMTATime": 29,
                        "tmt_a_error": 0,
                        "mz": "2",
                        "tmt_b_time": 80,
                        "TMTBTime": 80,
                        "Messzeitpunkt": "2",
                        "tmt_a_time": 29
                      },
                      "event_id": 40838,
                      "filled": "2019-02-04T09:31:39Z"
                    },
                    "id": 25266
                  },
                  "TMTATime": 29,
                  "quotient": 2.7586206896551726,
                  "date": "2019-02-03T23:00:00.000Z",
                  "mz": 2,
                  "version": "19. Oktober 2016",
                  "TMTBTime": 80,
                  "quotient_rounded": 2.76,
                  "percentile": {
                    "education": 0,
                    "time_error": {
                      "TMTAError": 0,
                      "TMTBError": 1,
                      "TMTATime": 29,
                      "TMTBTime": 80
                    },
                    "age_perz": {
                      "perz90": [
                        19,
                        42
                      ],
                      "tmtB_norm_m": 63.76,
                      "tmtA_norm_m": 31.78,
                      "education": 99,
                      "perz50": [
                        31,
                        64
                      ],
                      "altersgruppe": 3,
                      "perz60": [
                        29,
                        62
                      ],
                      "n": 41,
                      "perz10": [
                        50,
                        84
                      ],
                      "perz20": [
                        38,
                        75
                      ],
                      "perz70": [
                        27,
                        59
                      ],
                      "altersgruppe_text": "Altersgruppe 45 – 54",
                      "perz80": [
                        23,
                        50
                      ],
                      "tmtA_norm_sd": 9.93,
                      "education_high": false,
                      "perz30": [
                        34,
                        72
                      ],
                      "tmtB_norm_sd": 14.42,
                      "altersgruppe_found": true,
                      "perz40": [
                        33,
                        68
                      ]
                    },
                    "result": {
                      "calculated": true,
                      "A": 60,
                      "B": 20
                    },
                    "vars": {
                      "edu_years": 9,
                      "d": {
                        "TMTAError": 0,
                        "Ausbildungsjahre": 9,
                        "tmt_b_error": 1,
                        "TMTBError": 1,
                        "edu_years": 9,
                        "survey_version": "ng_survey_v2",
                        "Erhebungsdatum": "2019-02-03T23:00:00.000Z",
                        "TMTATime": 29,
                        "tmt_a_error": 0,
                        "mz": "2",
                        "tmt_b_time": 80,
                        "TMTBTime": 80,
                        "Messzeitpunkt": "2",
                        "tmt_a_time": 29
                      },
                      "set_age": 50
                    },
                    "z_scores": {
                      "tmtB_z_neu_rounded": 1.13,
                      "tmtB_z_zeitabbruch": -16.382801664355064,
                      "tmtA_z_zeitabbruch_rounded": -14.93,
                      "calculated": true,
                      "tmtA_z_neu": -0.2799597180261834,
                      "tmtB_z_zeitabbruch_rounded": -16.38,
                      "tmtA_z": 0.2799597180261834,
                      "quotient": 2.7586206896551726,
                      "tmtA_z_neu_rounded": -0.28,
                      "tmtB_z": -1.1262135922330099,
                      "tmtA_z_rounded": 0.28,
                      "quotient_rounded": 2.76,
                      "tmtB_z_neu": 1.1262135922330099,
                      "tmtB_z_rounded": -1.13,
                      "tmtA_z_zeitabbruch": -14.926485397784491
                    }
                  },
                  "Messzeitpunkt": {
                    "Messzeitpunkt_Text_Quotient": "Austritt",
                    "Messzeitpunkt_Text": "Austritt",
                    "Messzeitpunkt": 2
                  },
                  "set_age": 50,
                  "birthdate": "1968-10-22T00:00:00Z"
                }
              },
              "calculation_found": true,
              "calculation_found_method": "variant_response_tmt"
            }
          ],
          "calculations_all": [
            {
              "result": [
                {
                  "TMTAError": 0,
                  "TMTBError": 1,
                  "edu_years": 9,
                  "response": {
                    "data": {
                      "response": {
                        "TMTAError": 0,
                        "Ausbildungsjahre": 9,
                        "tmt_b_error": 1,
                        "TMTBError": 1,
                        "edu_years": 9,
                        "survey_version": "ng_survey_v2",
                        "Erhebungsdatum": "2019-02-03T23:00:00.000Z",
                        "TMTATime": 29,
                        "tmt_a_error": 0,
                        "mz": "2",
                        "tmt_b_time": 80,
                        "TMTBTime": 80,
                        "Messzeitpunkt": "2",
                        "tmt_a_time": 29
                      },
                      "event_id": 40838,
                      "filled": "2019-02-04T09:31:39Z"
                    },
                    "id": 25266
                  },
                  "TMTATime": 29,
                  "quotient": 2.7586206896551726,
                  "date": "2019-02-03T23:00:00.000Z",
                  "mz": 2,
                  "version": "19. Oktober 2016",
                  "TMTBTime": 80,
                  "quotient_rounded": 2.76,
                  "percentile": {
                    "education": 0,
                    "time_error": {
                      "TMTAError": 0,
                      "TMTBError": 1,
                      "TMTATime": 29,
                      "TMTBTime": 80
                    },
                    "age_perz": {
                      "perz90": [
                        19,
                        42
                      ],
                      "tmtB_norm_m": 63.76,
                      "tmtA_norm_m": 31.78,
                      "education": 99,
                      "perz50": [
                        31,
                        64
                      ],
                      "altersgruppe": 3,
                      "perz60": [
                        29,
                        62
                      ],
                      "n": 41,
                      "perz10": [
                        50,
                        84
                      ],
                      "perz20": [
                        38,
                        75
                      ],
                      "perz70": [
                        27,
                        59
                      ],
                      "altersgruppe_text": "Altersgruppe 45 – 54",
                      "perz80": [
                        23,
                        50
                      ],
                      "tmtA_norm_sd": 9.93,
                      "education_high": false,
                      "perz30": [
                        34,
                        72
                      ],
                      "tmtB_norm_sd": 14.42,
                      "altersgruppe_found": true,
                      "perz40": [
                        33,
                        68
                      ]
                    },
                    "result": {
                      "calculated": true,
                      "A": 60,
                      "B": 20
                    },
                    "vars": {
                      "edu_years": 9,
                      "d": {
                        "TMTAError": 0,
                        "Ausbildungsjahre": 9,
                        "tmt_b_error": 1,
                        "TMTBError": 1,
                        "edu_years": 9,
                        "survey_version": "ng_survey_v2",
                        "Erhebungsdatum": "2019-02-03T23:00:00.000Z",
                        "TMTATime": 29,
                        "tmt_a_error": 0,
                        "mz": "2",
                        "tmt_b_time": 80,
                        "TMTBTime": 80,
                        "Messzeitpunkt": "2",
                        "tmt_a_time": 29
                      },
                      "set_age": 50
                    },
                    "z_scores": {
                      "tmtB_z_neu_rounded": 1.13,
                      "tmtB_z_zeitabbruch": -16.382801664355064,
                      "tmtA_z_zeitabbruch_rounded": -14.93,
                      "calculated": true,
                      "tmtA_z_neu": -0.2799597180261834,
                      "tmtB_z_zeitabbruch_rounded": -16.38,
                      "tmtA_z": 0.2799597180261834,
                      "quotient": 2.7586206896551726,
                      "tmtA_z_neu_rounded": -0.28,
                      "tmtB_z": -1.1262135922330099,
                      "tmtA_z_rounded": 0.28,
                      "quotient_rounded": 2.76,
                      "tmtB_z_neu": 1.1262135922330099,
                      "tmtB_z_rounded": -1.13,
                      "tmtA_z_zeitabbruch": -14.926485397784491
                    }
                  },
                  "Messzeitpunkt": {
                    "Messzeitpunkt_Text_Quotient": "Austritt",
                    "Messzeitpunkt_Text": "Austritt",
                    "Messzeitpunkt": 2
                  },
                  "set_age": 50,
                  "birthdate": "1968-10-22T00:00:00Z"
                },
                {
                  "TMTAError": 0,
                  "TMTBError": 0,
                  "edu_years": 9,
                  "response": {
                    "data": {
                      "response": {
                        "TMTAError": 0,
                        "Ausbildungsjahre": "9",
                        "tmt_b_error": 0,
                        "TMTBError": 0,
                        "edu_years": "9",
                        "survey_version": "ng_survey_v2",
                        "Erhebungsdatum": "2018-11-26T23:00:00.000Z",
                        "TMTATime": 30,
                        "tmt_a_error": 0,
                        "mz": "1",
                        "tmt_b_time": 115,
                        "TMTBTime": 115,
                        "Messzeitpunkt": "1",
                        "tmt_a_time": 30
                      },
                      "event_id": 39277,
                      "filled": "2018-11-28T07:08:54Z"
                    },
                    "id": 24120
                  },
                  "TMTATime": 30,
                  "quotient": 3.8333333333333335,
                  "date": "2018-11-26T23:00:00.000Z",
                  "mz": 1,
                  "version": "19. Oktober 2016",
                  "TMTBTime": 115,
                  "quotient_rounded": 3.83,
                  "percentile": {
                    "education": 0,
                    "time_error": {
                      "TMTAError": 0,
                      "TMTBError": 0,
                      "TMTATime": 30,
                      "TMTBTime": 115
                    },
                    "age_perz": {
                      "perz90": [
                        19,
                        42
                      ],
                      "tmtB_norm_m": 63.76,
                      "tmtA_norm_m": 31.78,
                      "education": 99,
                      "perz50": [
                        31,
                        64
                      ],
                      "altersgruppe": 3,
                      "perz60": [
                        29,
                        62
                      ],
                      "n": 41,
                      "perz10": [
                        50,
                        84
                      ],
                      "perz20": [
                        38,
                        75
                      ],
                      "perz70": [
                        27,
                        59
                      ],
                      "altersgruppe_text": "Altersgruppe 45 – 54",
                      "perz80": [
                        23,
                        50
                      ],
                      "tmtA_norm_sd": 9.93,
                      "education_high": false,
                      "perz30": [
                        34,
                        72
                      ],
                      "tmtB_norm_sd": 14.42,
                      "altersgruppe_found": true,
                      "perz40": [
                        33,
                        68
                      ]
                    },
                    "result": {
                      "calculated": true,
                      "A": 60,
                      "B": 10
                    },
                    "vars": {
                      "edu_years": 9,
                      "d": {
                        "TMTAError": 0,
                        "Ausbildungsjahre": "9",
                        "tmt_b_error": 0,
                        "TMTBError": 0,
                        "edu_years": "9",
                        "survey_version": "ng_survey_v2",
                        "Erhebungsdatum": "2018-11-26T23:00:00.000Z",
                        "TMTATime": 30,
                        "tmt_a_error": 0,
                        "mz": "1",
                        "tmt_b_time": 115,
                        "TMTBTime": 115,
                        "Messzeitpunkt": "1",
                        "tmt_a_time": 30
                      },
                      "set_age": 50
                    },
                    "z_scores": {
                      "tmtB_z_neu_rounded": 3.55,
                      "tmtB_z_zeitabbruch": -16.382801664355064,
                      "tmtA_z_zeitabbruch_rounded": -14.93,
                      "calculated": true,
                      "tmtA_z_neu": -0.17925478348439086,
                      "tmtB_z_zeitabbruch_rounded": -16.38,
                      "tmtA_z": 0.17925478348439086,
                      "quotient": 3.8333333333333335,
                      "tmtA_z_neu_rounded": -0.18,
                      "tmtB_z": -3.5533980582524274,
                      "tmtA_z_rounded": 0.18,
                      "quotient_rounded": 3.83,
                      "tmtB_z_neu": 3.5533980582524274,
                      "tmtB_z_rounded": -3.55,
                      "tmtA_z_zeitabbruch": -14.926485397784491
                    }
                  },
                  "Messzeitpunkt": {
                    "Messzeitpunkt_Text_Quotient": "Eintritt (B/A: 3.83)",
                    "Messzeitpunkt_Text": "Eintritt",
                    "Messzeitpunkt": 1
                  },
                  "set_age": 50,
                  "birthdate": "1968-10-22T00:00:00Z"
                }
              ],
              "name": "tmt_score"
            }
          ],
          "have_data": true,
          "loaded": true,
          "possible_data": true,
          "request": "stay",
          "pid": 3868,
          "fid": 5992,
          "app_id": "ch.suedhang.apps.tmt.production",
          "params": {
            "name": "tmt",
            "title": "TMT",
            "subtitle": "Trail Making Test",
            "identifier": "ch.suedhang.apps.tmt.production"
          },
          "module": {
            "hash": "d274033371ee86a51ec88f3bd5feb803d57006ed",
            "calculations": [
              "tmt_score"
            ],
            "readme": {
              "text": "## TMT (Trail Making Test)\n\n### Zusammenfassung\nMit dem TMT wird die Fähigkeit zum visuellen Scannen, die psychomotorische Geschwindigkeit (TMT A) sowie die Leistungen der exekutiven Funktionen, insbesondere kognitive Flexibilität und Switching (TMT B) erfasst.\n\n#### Auswertung / Interpretation\nAusgabe der Subskalen in z-Werten auf der Normstichprobe von Tombaugh (2004) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Alter und den Ausbildungsgrad (bis 12 Jahre vs. mehr als 12 Jahre).\n\n##### Quotient B/A\nDer Quotient B/A stellt das 'reine' Maß der im Trail Making Test B erhobenen exekutiven Funktionen dar und ist unabhängig von einer evtl. vorliegenden Verlangsamung. Normwerte sind für letzteren Kennwert nur für Personen ≥ 50-jährig verfügbar.  Faustregel: ein  B/A-Quotient > 2.5 gilt als Hinweis für eine auffällige Testleistung.\n\n",
              "parents": [
                {
                  "text": "## TMT (Trail Making Test)\n\n### Zusammenfassung\nMit dem TMT wird die Fähigkeit zum visuellen Scannen, die psychomotorische Geschwindigkeit (TMT A) sowie die Leistungen der exekutiven Funktionen, insbesondere kognitive Flexibilität und Switching (TMT B) erfasst.\n\n#### Auswertung / Interpretation\nAusgabe der Subskalen in z-Werten auf der Normstichprobe von Tombaugh (2004) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Alter und den Ausbildungsgrad (bis 12 Jahre vs. mehr als 12 Jahre).\n\n##### Quotient B/A\nDer Quotient B/A stellt das 'reine' Maß der im Trail Making Test B erhobenen exekutiven Funktionen dar und ist unabhängig von einer evtl. vorliegenden Verlangsamung. Normwerte sind für letzteren Kennwert nur für Personen ≥ 50-jährig verfügbar.  Faustregel: ein  B/A-Quotient > 2.5 gilt als Hinweis für eine auffällige Testleistung.\n\n",
                  "identifier": "ch.suedhang.apps.tmt_V3",
                  "html": "<h2>TMT (Trail Making Test)</h2><h3>Zusammenfassung</h3><p>Mit dem TMT wird die Fähigkeit zum visuellen Scannen, die psychomotorische Geschwindigkeit (TMT A) sowie die Leistungen der exekutiven Funktionen, insbesondere kognitive Flexibilität und Switching (TMT B) erfasst.</p><h4>Auswertung / Interpretation</h4><p>Ausgabe der Subskalen in z-Werten auf der Normstichprobe von Tombaugh (2004) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Alter und den Ausbildungsgrad (bis 12 Jahre vs. mehr als 12 Jahre).</p><h5>Quotient B/A</h5><p>Der Quotient B/A stellt das 'reine' Maß der im Trail Making Test B erhobenen exekutiven Funktionen dar und ist unabhängig von einer evtl. vorliegenden Verlangsamung. Normwerte sind für letzteren Kennwert nur für Personen ≥ 50-jährig verfügbar.  Faustregel: ein  B/A-Quotient &gt; 2.5 gilt als Hinweis für eine auffällige Testleistung.</p>"
                }
              ],
              "html": "<h2>TMT (Trail Making Test)</h2><h3>Zusammenfassung</h3><p>Mit dem TMT wird die Fähigkeit zum visuellen Scannen, die psychomotorische Geschwindigkeit (TMT A) sowie die Leistungen der exekutiven Funktionen, insbesondere kognitive Flexibilität und Switching (TMT B) erfasst.</p><h4>Auswertung / Interpretation</h4><p>Ausgabe der Subskalen in z-Werten auf der Normstichprobe von Tombaugh (2004) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Alter und den Ausbildungsgrad (bis 12 Jahre vs. mehr als 12 Jahre).</p><h5>Quotient B/A</h5><p>Der Quotient B/A stellt das 'reine' Maß der im Trail Making Test B erhobenen exekutiven Funktionen dar und ist unabhängig von einer evtl. vorliegenden Verlangsamung. Normwerte sind für letzteren Kennwert nur für Personen ≥ 50-jährig verfügbar.  Faustregel: ein  B/A-Quotient &gt; 2.5 gilt als Hinweis für eine auffällige Testleistung.</p>"
            },
            "surveys": [
              {
                "identifier": "tmt_ng",
                "name": "Trail Making Test (TMT)"
              }
            ],
            "templates": [
              {
                "height": 12,
                "width": 6,
                "name": "TMT"
              }
            ],
            "identifier": "ch.suedhang.apps.tmt.production",
            "pdf_templates": [],
            "data_source_queries": [],
            "original_name": "Trail Making Test (TMT)",
            "dependencies": [],
            "name": "Trail Making Test (TMT)",
            "events": [
              {
                "due_after": 259200,
                "survey": "tmt_ng",
                "name": "activation",
                "time_spec": {
                  "type": "on_activation"
                },
                "overdue": {
                  "type": "ignore"
                },
                "description": "TMT-Erfassung Eintritt"
              },
              {
                "due_after": 259200,
                "survey": "tmt_ng",
                "name": "exit",
                "time_spec": {
                  "days": 5,
                  "time": "08:00:00",
                  "type": "before_exit"
                },
                "overdue": {
                  "type": "ignore"
                },
                "description": "TMT-Erfassung Austritt"
              }
            ],
            "version": "1.0",
            "type": "patient",
            "short_description": "Die psychomotorische Geschwindigkeit (TMT A) und kognitive Flexibilität (TMT B) werden erfasst.",
            "database_schema_name": "ch_suedhang_apps_tmt_production",
            "database_user_name": "ch_suedhang_apps_tmt_production",
            "description": "",
            "developer": {
              "email": "nora.schoenenberger@suedhang.ch",
              "phone": "+41 (0)31 828 14 92",
              "first_name": "Nora",
              "website": "http://suedhang.ch/de/Forschung",
              "company": "Suedhang",
              "last_name": "Schönenberger",
              "github_user": "schoenenb"
            }
          }
        },
        "ch.suedhang.apps.actinfo_ein.production": {
          "date": "2020-04-03T12:09:08.769Z",
          "data": [
            {
              "all_found": true,
              "app_id": "ch.suedhang.apps.actinfo_ein.production",
              "date": "2018-11-22T13:30:33Z",
              "response_id": 24058,
              "response": {
                "VZEA136": "1",
                "QNEC050[VNEC050ro]": "",
                "QZEK010[VZEK010m]": "",
                "QNEC050[VNEC050gb]": "",
                "QNEC050[VNEC050mx]": "",
                "QNEC050[VNEC050hu]": "",
                "VNED073a": "1",
                "Institution": "03",
                "QNED0704[VNED070de]": "",
                "VNED094": "",
                "QNED0702[VNED070be]": "",
                "VNEB050[VNEB050b]": "",
                "VNED073cb": "",
                "VNEB060[VNEB060b]": "",
                "VNED073ed": "",
                "QNEC050[VNEC050at]": "",
                "QNED0707[VNED070j]": "",
                "QNEC050[VNEC050gr]": "",
                "VNEB065": "1",
                "QNEC050[VNEC050es]": "",
                "VNEB060[VNEB060a]": "",
                "QNEC050[VNEC050cu]": "",
                "VYEK060": "1",
                "VNED073ka": "",
                "datestamp": "2018-11-22 13:30:33",
                "VZEO010": "5",
                "QNEC050[VNEC050ec]": "",
                "VNEC067": "1",
                "QNEC050[VNEC050se]": "",
                "VNEB050[VNEB050a]": "Y",
                "VNEB080": "4",
                "QNEC050[VNEC050mk]": "",
                "QNEC070QNEC075[VNEC075]": "1",
                "VNED073j": "",
                "VMEC030a": "3380",
                "QNEC050[VNEC050us]": "",
                "VZEF011": "",
                "QNED0707[VNED070i]": "Y",
                "QZEK010[VZEK010n]": "",
                "QNEC050[VNEC050dz]": "",
                "QNED0704[VNED070dc]": "",
                "VMED055": "",
                "QZES060QZES070[VZES070]": "999",
                "QNEC050[VNEC050za]": "",
                "VMEC061": "",
                "VNED073eb": "",
                "VZEU071": "",
                "QNEC050[VNEC050do]": "",
                "QYEP010[VYEP010k]": "",
                "QNED0702[VNeD070bc]": "",
                "VNEB050[VNEB050d]": "",
                "QNEC070QNEC075[VNEC070]": "2",
                "VZEA130": "2",
                "QYEP012[VYEP012k]": "",
                "QNEC050[VNEC050pk]": "",
                "QNEC050[VNEC050ar]": "",
                "VYEP011": "",
                "QNED0706[VNED070fc]": "",
                "QZEK010[VZEK010k]": "",
                "FNr": "130120300",
                "VNED073g": "",
                "VNEB060[VNEB060d]": "Y",
                "VNED092": "",
                "VYEF010": "7",
                "QNEC050[VNEC050fr]": "",
                "VNED095": "",
                "QNEC050[VNEC050pt]": "",
                "QZES080[VZES080d]": "",
                "VMEC101": "",
                "QZEK010[VZEK010t]": "",
                "VMEB081": "",
                "VNED073cc": "",
                "QYED075[VYED075d]": "999",
                "QNEC050[VNEC050co]": "",
                "VMEC091": "",
                "QZEU025[VZEU025d]": "",
                "QYEP012[VYEP012d]": "",
                "VMEC066": "",
                "optinomixHASH": "00c30f68-5dfe-455b-8f99-2796aedbab25",
                "QYEE020[VYEE020d]": "",
                "QNEC050[VNEC050so]": "",
                "VNED026": "",
                "QNEC120[VNEC120d]": "",
                "VZEA050": "4",
                "QNEC050[VNEC050ie]": "",
                "VMEB010": "DB",
                "QNED0705[VNED070ed]": "",
                "QZEA120[VZEA120d]": "0",
                "VZEU010": "",
                "QNEC050[VNEC050ma]": "",
                "QYEP010[VYEP010d]": "",
                "QZEU070[VZEU070d]": "",
                "QNED016[VNED016d]": "",
                "QZEK010[VZEK010d]": "",
                "VZEU040": "",
                "VZES020": "6",
                "VNED010": "1",
                "QYED075[VYED075a]": "5",
                "VYEF040": "4",
                "QZEU025[VZEU025a]": "",
                "QZEK010[VZEK010q]": "",
                "QNEC050[VNEC050de]": "",
                "QZES080[VZES080a]": "Y",
                "VNED098": "",
                "QNEC050[VNEC050mt]": "",
                "VNED071be": "",
                "QYEP010[VYEP010a]": "Y",
                "QZEU070[VZEU070a]": "",
                "submitdate": "2018-11-22 13:30:33",
                "QNEC120[VNEC120a]": "Y",
                "QYEP012[VYEP012a]": "Y",
                "QYEE020[VYEE020a]": "Y",
                "VNED073fc": "",
                "QNED0705[VNED070ea]": "",
                "VZET050": "0",
                "QZEA120[VZEA120a]": "85",
                "VNED073da": "",
                "QNEC080QNEC090[VNEC090]": "1",
                "QZEK010[VZEK010a]": "",
                "QNED016[VNED016a]": "",
                "VNED071kd": "",
                "QNEC050[VNEC050rs]": "",
                "VMED046": "",
                "QNEC050[VNEC050cz]": "",
                "QNEC050[VNEC050no]": "",
                "QNED0708[VNED070kb]": "",
                "QNED0703[VNED070ca]": "",
                "QZEU011": "",
                "QNED016[VNED016b]": "",
                "QZEK010[VZEK010b]": "",
                "QZES080[VZES080b]": "",
                "QZEK010[VZEK010r]": "",
                "QNEC050[VNEC050si]": "",
                "QNED0708[VNED070ka]": "",
                "QNED0703[VNED070cb]": "",
                "VZEA030": "4",
                "QYEP012[VYEP012b]": "Y",
                "QYEE020[VYEE020b]": "",
                "QZEA120[VZEA120b]": "0",
                "QNED0705[VNED070eb]": "",
                "QZES060QZES070[VZES060]": "6",
                "VNEC050x": "",
                "QZEU025[VZEU025b]": "",
                "VZES081": "",
                "QNEC050[VNEC050is]": "",
                "VNED093": "",
                "VZET060": "0",
                "QNEC050[VNEC050cy]": "",
                "QNEC050[VNEC050nl]": "",
                "QYEP010[VYEP010b]": "Y",
                "QZEU070[VZEU070b]": "",
                "VYEE040": "1",
                "QNEC120[VNEC120b]": "",
                "QYED075[VYED075b]": "999",
                "VNED073ec": "",
                "VZES010": "4",
                "QNEC050[VNEC050cd]": "",
                "VZES015": "2",
                "VNEB067": "",
                "VNED071ed": "",
                "VNED025": "1",
                "QNEC050[VNEC050fi]": "",
                "QNEC050[VNEC050in]": "",
                "VNED070x": "1",
                "QNED0707[VNED070h]": "",
                "QNEC060QNEC065[VNEC065]": "3",
                "QZEK010[VZEK010o]": "",
                "QNEC050[VNEC050dk]": "",
                "VZEU031": "",
                "QNEC050[VNEC050ph]": "",
                "QZEA120[VZEA120h]": "0",
                "VZEA090": "0",
                "QYEP010[VYEP010h]": "",
                "QNEC050[VNEC050ee]": "",
                "VNED073fb": "",
                "QYEP012[VYEP012h]": "",
                "VNEB060[VNEB060g]": "Y",
                "QNEC120[VNEC120h]": "",
                "VMED065": "",
                "QZEU025[VZEU025x]": "",
                "QNEC080QNEC090[VNEC080]": "1",
                "QYED075[VYED075h]": "999",
                "QNED016[VNED016h]": "",
                "QZES080[VZES080x]": "",
                "QZEK010[VZEK010h]": "",
                "VZEU041": "",
                "QNEC120[VNEC120x]": "",
                "QNEC050[VNEC050vn]": "",
                "VMEB040a": "2018-11-20 00:00:00",
                "QZEU070[VZEU070x]": "",
                "QYEP010[VYEP010x]": "",
                "QNEC050[VNEC050lt]": "",
                "QYEE020[VYEE020x]": "",
                "VMEB005": "71286515",
                "VZEA100": "2",
                "QYEP012[VYEP012x]": "",
                "QNED016[VNED016x]": "",
                "QZEK010[VZEK010x]": "",
                "VZEE041": "",
                "QNEC050[VNEC050yy]": "",
                "VZEF030": "4",
                "VNeD073bc": "",
                "VMEC010": "",
                "QZEE025": "",
                "QYEP012[VYEP012e]": "",
                "QNEC050[VNEC050li]": "",
                "VMEC081": "",
                "startdate": "2018-11-22 12:53:25",
                "QNEC050[VNEC050al]": "",
                "QNEC050[VNEC050pe]": "",
                "VZET010": "6",
                "QZEA120[VZEA120e]": "0",
                "QNEC050[VNEC050it]": "",
                "VNED073de": "",
                "VYEK041": "2",
                "QZEU070[VZEU070e]": "",
                "VNED073kb": "",
                "QYEP010[VYEP010e]": "",
                "VMED060": "16",
                "VMEC111": "",
                "QNEC050[VNEC050bg]": "",
                "QNEC120[VNEC120e]": "",
                "QYED075[VYED075e]": "999",
                "QNED016[VNED016e]": "",
                "VZEX005": "1301203",
                "QZEK010[VZEK010e]": "",
                "VMED097": "",
                "QZEK010[VZEK010u]": "",
                "VMEB040d": "",
                "VNED073i": "1",
                "QNEC050[VNEC050sn]": "",
                "VZEA040": "4",
                "VZET020": "2",
                "QZEK010[VZEK010v]": "",
                "VNEB050[VNEB050y]": "",
                "QYEP010[VYEP010f]": "",
                "QZEU070[VZEU070f]": "",
                "QNEC120[VNEC120f]": "",
                "VNED071cc": "",
                "VMED050": "16",
                "VNED073ca": "",
                "QYEP012[VYEP012f]": "",
                "QNEC050[VNEC050ao]": "",
                "QZEA120[VZEA120f]": "0",
                "VZES050": "1",
                "VZEU030": "",
                "QNED016[VNED016f]": "",
                "QZEK010[VZEK010f]": "",
                "VNEB066": "",
                "QNEC050[VNEC050tr]": "",
                "VNEB060[VNEB060i]": "",
                "VZEA070": "0",
                "VZEA135": "7",
                "QNEC050[VNEC050ke]": "",
                "QYED075[VYED075f]": "999",
                "VMEC020": "",
                "startlanguage": "de",
                "QZES080[VZES080c]": "",
                "QZEK010[VZEK010s]": "",
                "VZEA020": "4",
                "QNED0705[VNED070ec]": "",
                "QZEA120[VZEA120c]": "0",
                "QYEP010[VYEP010c]": "Y",
                "QZEU070[VZEU070c]": "",
                "QZEU025[VZEU025c]": "",
                "QNEC050[VNEC050ir]": "",
                "QYEE020[VYEE020c]": "",
                "QYEP012[VYEP012c]": "Y",
                "VZET070": "1",
                "QNEC050[VNEC050xk]": "",
                "QNEC050[VNEC050ba]": "",
                "QNEC120[VNEC120c]": "",
                "VNED073be": "",
                "QYED075[VYED075c]": "999",
                "QNEC050[VNEC050ch]": "Y",
                "QNED0703[VNED070cc]": "",
                "VZEK011": "",
                "VNED071fc": "",
                "QNED016[VNED016c]": "",
                "QZEK010[VZEK010c]": "",
                "VNED073fa": "",
                "VNED073dc": "",
                "QNEC050[VNEC050ve]": "",
                "VNED030": "3",
                "VNED073kd": "",
                "VMED066": "",
                "QNEC050[VNEC050pl]": "",
                "PID": "13012",
                "VNED073kc": "",
                "QYEP010[VYEP010l]": "",
                "VNEB050[VNEB050c]": "",
                "QZEK010[VZEK010l]": "",
                "VNEB060[VNEB060c]": "Y",
                "VNED015": "2",
                "VMED096": "",
                "QNEC050[VNEC050ua]": "",
                "VNED071j": "",
                "QNED0704[VNED070dd]": "",
                "VZEA140": "1",
                "id": "678",
                "VNED073h": "",
                "QNED0702[VNED070bd]": "",
                "VMEB001": "2018-11-22 00:00:00",
                "QNEC050[VNEC050cg]": "",
                "VNED073bb": "",
                "QNEC050[VNEC050th]": "",
                "QYEP012[VYEP012l]": "",
                "VNED073dd": "",
                "VYEK040": "1",
                "VZEA080": "1",
                "QYEP010[VYEP010i]": "Y",
                "QNED016[VNED016i]": "",
                "QZES080[VZES080y]": "",
                "QZEK010[VZEK010i]": "",
                "QNEC120[VNEC120y]": "",
                "VNEB060[VNEB060f]": "Y",
                "QNEC050[VNEC050ng]": "",
                "QNED0706[VNED070fa]": "",
                "QYEP012[VYEP012y]": "",
                "QNEC050[VNEC050lu]": "",
                "QNED0704[VNED070da]": "",
                "QNED0702[VNED070ba]": "",
                "QNEC100QNEC110[VNEC100]": "1",
                "QZEK010[VZEK010y]": "Y",
                "QYED075[VYED075i]": "4",
                "VNEC068": "",
                "VYEP013": "",
                "QYEP012[VYEP012i]": "Y",
                "QYEP010[VYEP010y]": "",
                "QZEU070[VZEU070y]": "",
                "VNED090": "2",
                "QZEA120[VZEA120i]": "0",
                "VNEB050[VNEB050e]": "",
                "QYEP010[VYEP010j]": "Y",
                "VNED073bd": "",
                "QNEC050[VNEC050ge]": "",
                "QNED0706[VNED070fb]": "",
                "QNEC060QNEC065[VNEC060]": "3",
                "VNED073db": "",
                "QNED016[VNED016j]": "",
                "QZEK010[VZEK010j]": "",
                "VNED031": "",
                "QNED0702[VNED070bb]": "",
                "QNEC050[VNEC050hr]": "",
                "QNEC050[VNEC050ca]": "",
                "VMED045": "",
                "QNEC050[VNEC050lv]": "",
                "QNED0704[VNED070db]": "",
                "QYEP012[VYEP012j]": "",
                "VMEB061": "",
                "QZEA120[VZEA120j]": "0",
                "QNEC050[VNEC050eg]": "",
                "QNEC050[VNEC050tn]": "",
                "VNEB060[VNEB060e]": "Y",
                "QNEC120[VNEC120g]": "",
                "QNEC050[VNEC050be]": "",
                "QZEA120[VZEA120g]": "0",
                "VZEA060": "3",
                "QZEU070[VZEU070g]": "",
                "QYEP010[VYEP010g]": "",
                "VNED073ba": "",
                "QNED016[VNED016g]": "",
                "QZEK010[VZEK010g]": "",
                "VZET030": "3",
                "VNEB060[VNEB060h]": "Y",
                "QNEC050[VNEC050ru]": "",
                "VNED071de": "",
                "VYEK061": "2",
                "VYEE010": "6",
                "QYED075[VYED075g]": "999",
                "VMED040": "12",
                "VNEB060[VNEB060x]": "",
                "QNEC050[VNEC050cl]": "",
                "QNED0708[VNED070kd]": "",
                "VZEO011": "",
                "QNEC050[VNEC050lk]": "",
                "VZEU020": "",
                "QYEP012[VYEP012g]": "",
                "VNEB050[VNEB050x]": "",
                "VZEE050": "3",
                "VZEA010": "4",
                "QNED0701[VNED070a]": "Y",
                "QNED0708[VNED070kc]": "",
                "VZET040": "1",
                "QNEC050[VNEC050br]": "",
                "QNEC050[VNEC050sk]": "",
                "VMED056": "",
                "QZEK010[VZEK010p]": "",
                "VMEC040": "1",
                "QNEC050[VNEC050me]": "",
                "VNED073ea": "",
                "cgiSG": "",
                "QNEC100QNEC110[VNEC110]": "1",
                "QNEC050[VNEC050iq]": "",
                "lastpage": "5",
                "QNED0707[VNED070g]": ""
              },
              "event": {
                "status": "done",
                "due": "2018-11-24T14:01:35Z",
                "url": "http://optinomic.suedhang.ch:8000/limesurvey_v2/index.php/survey/index/sid/275667/newtest/Y/lang/de?&275667X74X1754=00c30f68-5dfe-455b-8f99-2796aedbab25&275667X74X1748=13012&275667X74X1747=130120300",
                "patient_uses_module_id": 25424,
                "random_hash": "00c30f68-5dfe-455b-8f99-2796aedbab25",
                "survey_name": "actInfo - Eintritt",
                "patient_id": 3868,
                "responsibility": {
                  "role": "Admin",
                  "type": "role"
                },
                "module": "ch.suedhang.apps.actinfo_ein.production",
                "overdue": {
                  "type": "ignore"
                },
                "created_at": "2018-11-21T14:01:35Z",
                "description": "actInfo - Eintritt",
                "id": 39087,
                "extras": {
                  "created_at": "21.11.2018",
                  "due": "24.11.2018",
                  "status": "Done",
                  "status_de": "Erledigt",
                  "show_do_it_now": false
                }
              },
              "event_found": true,
              "event_id": 39087,
              "patient": {
                "age": 51,
                "birthday": "22.10.1968",
                "birthday_age": "22.10.1968 | 51",
                "name": "Breitenmoser Dominique",
                "birth_year": 1968,
                "secure": "Br. D. (1968)",
                "ansprache": "Herr",
                "anrede": "Herr Breitenmoser",
                "full_name": "Herr Breitenmoser Dominique (22.10.1968 | 51)",
                "full_address": "Aarburgerstrasse 96, 4600 Olten",
                "phone": "",
                "infoline": "Aarburgerstrasse 96, 4600 Olten",
                "color_main": "#3F51B5",
                "color_accent": "#E91E63"
              },
              "patient_found": true,
              "patient_id": 3868,
              "stay": {
                "photo": "",
                "cis_lead_doctor": null,
                "status": "",
                "phase": "complete",
                "frozen": true,
                "first_contact": null,
                "lead_therapist_id": 66,
                "start": "2018-11-20T12:45:00Z",
                "stop_status": null,
                "insurance_number": "",
                "patient_id": 3868,
                "insurance_provider": "PTS",
                "cis_fid": 1301203,
                "stop": "2019-02-12T12:30:00Z",
                "deputy_lead_therapist_id": null,
                "notes": "",
                "service_provider": "",
                "class": "S",
                "lead_therapist_id_overwrite": null,
                "id": 5992,
                "fid": 5992,
                "extras": {
                  "in_stay": false,
                  "duration": 84,
                  "phase_de": "Die Behandlung wurde vor mehr als 14 Tage beendet",
                  "phase_en": "the stay ended more than 14 days ago",
                  "beginn": "20.11.2018",
                  "from_to": "20.11.2018 - 12.2.2019",
                  "ende": "12.2.2019"
                }
              },
              "stay_found": true,
              "stay_id": 5992,
              "patient_uses_module": {
                "settings": {},
                "stay_id": 5992,
                "patient_id": 3868,
                "responsibility": null,
                "deactivated": false,
                "module": "ch.suedhang.apps.actinfo_ein.production",
                "overdue": null,
                "last_event_generation": "2020-04-03T12:06:18.394051Z",
                "activated_on": "2018-11-21T14:01:35Z",
                "id": 25424
              },
              "patient_uses_module_found": true,
              "patient_uses_module_id": 25424,
              "calculation": {
                "actinfo_ein": {
                  "hash": "00c30f68-5dfe-455b-8f99-2796aedbab25",
                  "AUDIT": {
                    "interpretation": {
                      "to": 40,
                      "result_color": "#F44336",
                      "from": 16,
                      "result": "eine hohe Wahrscheinlichkeit einer Alkoholabhängigkeit"
                    },
                    "AUDIT_Score": 26,
                    "valid_scores": 10,
                    "ranges": {
                      "ranges": [
                        {
                          "to": 7,
                          "result_color": "#4CAF50",
                          "from": 0,
                          "result": "ein risikoarmer Alkoholkonsum"
                        },
                        {
                          "to": 15,
                          "result_color": "#FF9800",
                          "from": 8,
                          "result": "ein Verdacht auf eine alkoholbezogene Störung"
                        },
                        {
                          "to": 40,
                          "result_color": "#F44336",
                          "from": 16,
                          "result": "eine hohe Wahrscheinlichkeit einer Alkoholabhängigkeit"
                        }
                      ]
                    },
                    "gender": "male",
                    "AUDIT_Score_Mean": 2.6
                  },
                  "pdfmake": {
                    "problemsubstanzen_text": {
                      "stack": [
                        {
                          "style": "h2",
                          "text": "Problemsubstanzen"
                        },
                        {
                          "text": [
                            {
                              "style": "p",
                              "text": "Folgende Substanzen konsumierte Herr Breitenmoser vor dem aktuellen Entzug in der angegebenen Häufigkeit: "
                            },
                            "",
                            {
                              "text": "Alkohol: ",
                              "bold": true
                            },
                            {
                              "text": "Täglich, jeweils 34g (ausschliesslich Bier).",
                              "bold": false
                            },
                            "; ",
                            {
                              "text": "Tabak (Nikotin): ",
                              "bold": true
                            },
                            {
                              "text": "Mehrmals täglich (21-30 Zigaretten pro Tag).",
                              "bold": false
                            }
                          ]
                        }
                      ]
                    },
                    "problemsubstanzen_ol": {
                      "stack": [
                        {
                          "style": "h2",
                          "text": "Problemsubstanzen"
                        },
                        {
                          "style": "p",
                          "text": "Folgende Substanzen konsumierte Herr Breitenmoser vor dem aktuellen Entzug in der angegebenen Häufigkeit: "
                        },
                        {
                          "ol": [
                            {
                              "style": "p",
                              "text": [
                                {
                                  "text": "Alkohol: ",
                                  "bold": true
                                },
                                {
                                  "text": "Täglich, jeweils 34g (ausschliesslich Bier).",
                                  "bold": false
                                }
                              ],
                              "margin": [
                                0,
                                6,
                                0,
                                0
                              ]
                            },
                            {
                              "style": "p",
                              "text": [
                                {
                                  "text": "Tabak (Nikotin): ",
                                  "bold": true
                                },
                                {
                                  "text": "Mehrmals täglich (21-30 Zigaretten pro Tag).",
                                  "bold": false
                                }
                              ],
                              "margin": [
                                0,
                                6,
                                0,
                                0
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    "zusatzangaben_text": {
                      "stack": [
                        {
                          "style": "p",
                          "text": "Zusatzinformationen: Seit dem Alter von 16 Jahren wurde die Hauptproblemsubstanz «Alkohol» regelmässig konsumiert. Ein problematischer Konsum besteht seit dem Alter von 16 Jahren. Vor dem aktuellen Entzug wurden fünf oder mehr professionell begleitete Entzugsbehandlungen durchgeführt."
                        }
                      ]
                    }
                  },
                  "response": {
                    "data": {
                      "response": {
                        "VZEA136": "1",
                        "QNEC050[VNEC050ro]": "",
                        "QZEK010[VZEK010m]": "",
                        "QNEC050[VNEC050gb]": "",
                        "QNEC050[VNEC050mx]": "",
                        "QNEC050[VNEC050hu]": "",
                        "VNED073a": "1",
                        "Institution": "03",
                        "QNED0704[VNED070de]": "",
                        "VNED094": "",
                        "QNED0702[VNED070be]": "",
                        "VNEB050[VNEB050b]": "",
                        "VNED073cb": "",
                        "VNEB060[VNEB060b]": "",
                        "VNED073ed": "",
                        "QNEC050[VNEC050at]": "",
                        "QNED0707[VNED070j]": "",
                        "QNEC050[VNEC050gr]": "",
                        "VNEB065": "1",
                        "QNEC050[VNEC050es]": "",
                        "VNEB060[VNEB060a]": "",
                        "QNEC050[VNEC050cu]": "",
                        "VYEK060": "1",
                        "VNED073ka": "",
                        "datestamp": "2018-11-22 13:30:33",
                        "VZEO010": "5",
                        "QNEC050[VNEC050ec]": "",
                        "VNEC067": "1",
                        "QNEC050[VNEC050se]": "",
                        "VNEB050[VNEB050a]": "Y",
                        "VNEB080": "4",
                        "QNEC050[VNEC050mk]": "",
                        "QNEC070QNEC075[VNEC075]": "1",
                        "VNED073j": "",
                        "VMEC030a": "3380",
                        "QNEC050[VNEC050us]": "",
                        "VZEF011": "",
                        "QNED0707[VNED070i]": "Y",
                        "QZEK010[VZEK010n]": "",
                        "QNEC050[VNEC050dz]": "",
                        "QNED0704[VNED070dc]": "",
                        "VMED055": "",
                        "QZES060QZES070[VZES070]": "999",
                        "QNEC050[VNEC050za]": "",
                        "VMEC061": "",
                        "VNED073eb": "",
                        "VZEU071": "",
                        "QNEC050[VNEC050do]": "",
                        "QYEP010[VYEP010k]": "",
                        "QNED0702[VNeD070bc]": "",
                        "VNEB050[VNEB050d]": "",
                        "QNEC070QNEC075[VNEC070]": "2",
                        "VZEA130": "2",
                        "QYEP012[VYEP012k]": "",
                        "QNEC050[VNEC050pk]": "",
                        "QNEC050[VNEC050ar]": "",
                        "VYEP011": "",
                        "QNED0706[VNED070fc]": "",
                        "QZEK010[VZEK010k]": "",
                        "FNr": "130120300",
                        "VNED073g": "",
                        "VNEB060[VNEB060d]": "Y",
                        "VNED092": "",
                        "VYEF010": "7",
                        "QNEC050[VNEC050fr]": "",
                        "VNED095": "",
                        "QNEC050[VNEC050pt]": "",
                        "QZES080[VZES080d]": "",
                        "VMEC101": "",
                        "QZEK010[VZEK010t]": "",
                        "VMEB081": "",
                        "VNED073cc": "",
                        "QYED075[VYED075d]": "999",
                        "QNEC050[VNEC050co]": "",
                        "VMEC091": "",
                        "QZEU025[VZEU025d]": "",
                        "QYEP012[VYEP012d]": "",
                        "VMEC066": "",
                        "optinomixHASH": "00c30f68-5dfe-455b-8f99-2796aedbab25",
                        "QYEE020[VYEE020d]": "",
                        "QNEC050[VNEC050so]": "",
                        "VNED026": "",
                        "QNEC120[VNEC120d]": "",
                        "VZEA050": "4",
                        "QNEC050[VNEC050ie]": "",
                        "VMEB010": "DB",
                        "QNED0705[VNED070ed]": "",
                        "QZEA120[VZEA120d]": "0",
                        "VZEU010": "",
                        "QNEC050[VNEC050ma]": "",
                        "QYEP010[VYEP010d]": "",
                        "QZEU070[VZEU070d]": "",
                        "QNED016[VNED016d]": "",
                        "QZEK010[VZEK010d]": "",
                        "VZEU040": "",
                        "VZES020": "6",
                        "VNED010": "1",
                        "QYED075[VYED075a]": "5",
                        "VYEF040": "4",
                        "QZEU025[VZEU025a]": "",
                        "QZEK010[VZEK010q]": "",
                        "QNEC050[VNEC050de]": "",
                        "QZES080[VZES080a]": "Y",
                        "VNED098": "",
                        "QNEC050[VNEC050mt]": "",
                        "VNED071be": "",
                        "QYEP010[VYEP010a]": "Y",
                        "QZEU070[VZEU070a]": "",
                        "submitdate": "2018-11-22 13:30:33",
                        "QNEC120[VNEC120a]": "Y",
                        "QYEP012[VYEP012a]": "Y",
                        "QYEE020[VYEE020a]": "Y",
                        "VNED073fc": "",
                        "QNED0705[VNED070ea]": "",
                        "VZET050": "0",
                        "QZEA120[VZEA120a]": "85",
                        "VNED073da": "",
                        "QNEC080QNEC090[VNEC090]": "1",
                        "QZEK010[VZEK010a]": "",
                        "QNED016[VNED016a]": "",
                        "VNED071kd": "",
                        "QNEC050[VNEC050rs]": "",
                        "VMED046": "",
                        "QNEC050[VNEC050cz]": "",
                        "QNEC050[VNEC050no]": "",
                        "QNED0708[VNED070kb]": "",
                        "QNED0703[VNED070ca]": "",
                        "QZEU011": "",
                        "QNED016[VNED016b]": "",
                        "QZEK010[VZEK010b]": "",
                        "QZES080[VZES080b]": "",
                        "QZEK010[VZEK010r]": "",
                        "QNEC050[VNEC050si]": "",
                        "QNED0708[VNED070ka]": "",
                        "QNED0703[VNED070cb]": "",
                        "VZEA030": "4",
                        "QYEP012[VYEP012b]": "Y",
                        "QYEE020[VYEE020b]": "",
                        "QZEA120[VZEA120b]": "0",
                        "QNED0705[VNED070eb]": "",
                        "QZES060QZES070[VZES060]": "6",
                        "VNEC050x": "",
                        "QZEU025[VZEU025b]": "",
                        "VZES081": "",
                        "QNEC050[VNEC050is]": "",
                        "VNED093": "",
                        "VZET060": "0",
                        "QNEC050[VNEC050cy]": "",
                        "QNEC050[VNEC050nl]": "",
                        "QYEP010[VYEP010b]": "Y",
                        "QZEU070[VZEU070b]": "",
                        "VYEE040": "1",
                        "QNEC120[VNEC120b]": "",
                        "QYED075[VYED075b]": "999",
                        "VNED073ec": "",
                        "VZES010": "4",
                        "QNEC050[VNEC050cd]": "",
                        "VZES015": "2",
                        "VNEB067": "",
                        "VNED071ed": "",
                        "VNED025": "1",
                        "QNEC050[VNEC050fi]": "",
                        "QNEC050[VNEC050in]": "",
                        "VNED070x": "1",
                        "QNED0707[VNED070h]": "",
                        "QNEC060QNEC065[VNEC065]": "3",
                        "QZEK010[VZEK010o]": "",
                        "QNEC050[VNEC050dk]": "",
                        "VZEU031": "",
                        "QNEC050[VNEC050ph]": "",
                        "QZEA120[VZEA120h]": "0",
                        "VZEA090": "0",
                        "QYEP010[VYEP010h]": "",
                        "QNEC050[VNEC050ee]": "",
                        "VNED073fb": "",
                        "QYEP012[VYEP012h]": "",
                        "VNEB060[VNEB060g]": "Y",
                        "QNEC120[VNEC120h]": "",
                        "VMED065": "",
                        "QZEU025[VZEU025x]": "",
                        "QNEC080QNEC090[VNEC080]": "1",
                        "QYED075[VYED075h]": "999",
                        "QNED016[VNED016h]": "",
                        "QZES080[VZES080x]": "",
                        "QZEK010[VZEK010h]": "",
                        "VZEU041": "",
                        "QNEC120[VNEC120x]": "",
                        "QNEC050[VNEC050vn]": "",
                        "VMEB040a": "2018-11-20 00:00:00",
                        "QZEU070[VZEU070x]": "",
                        "QYEP010[VYEP010x]": "",
                        "QNEC050[VNEC050lt]": "",
                        "QYEE020[VYEE020x]": "",
                        "VMEB005": "71286515",
                        "VZEA100": "2",
                        "QYEP012[VYEP012x]": "",
                        "QNED016[VNED016x]": "",
                        "QZEK010[VZEK010x]": "",
                        "VZEE041": "",
                        "QNEC050[VNEC050yy]": "",
                        "VZEF030": "4",
                        "VNeD073bc": "",
                        "VMEC010": "",
                        "QZEE025": "",
                        "QYEP012[VYEP012e]": "",
                        "QNEC050[VNEC050li]": "",
                        "VMEC081": "",
                        "startdate": "2018-11-22 12:53:25",
                        "QNEC050[VNEC050al]": "",
                        "QNEC050[VNEC050pe]": "",
                        "VZET010": "6",
                        "QZEA120[VZEA120e]": "0",
                        "QNEC050[VNEC050it]": "",
                        "VNED073de": "",
                        "VYEK041": "2",
                        "QZEU070[VZEU070e]": "",
                        "VNED073kb": "",
                        "QYEP010[VYEP010e]": "",
                        "VMED060": "16",
                        "VMEC111": "",
                        "QNEC050[VNEC050bg]": "",
                        "QNEC120[VNEC120e]": "",
                        "QYED075[VYED075e]": "999",
                        "QNED016[VNED016e]": "",
                        "VZEX005": "1301203",
                        "QZEK010[VZEK010e]": "",
                        "VMED097": "",
                        "QZEK010[VZEK010u]": "",
                        "VMEB040d": "",
                        "VNED073i": "1",
                        "QNEC050[VNEC050sn]": "",
                        "VZEA040": "4",
                        "VZET020": "2",
                        "QZEK010[VZEK010v]": "",
                        "VNEB050[VNEB050y]": "",
                        "QYEP010[VYEP010f]": "",
                        "QZEU070[VZEU070f]": "",
                        "QNEC120[VNEC120f]": "",
                        "VNED071cc": "",
                        "VMED050": "16",
                        "VNED073ca": "",
                        "QYEP012[VYEP012f]": "",
                        "QNEC050[VNEC050ao]": "",
                        "QZEA120[VZEA120f]": "0",
                        "VZES050": "1",
                        "VZEU030": "",
                        "QNED016[VNED016f]": "",
                        "QZEK010[VZEK010f]": "",
                        "VNEB066": "",
                        "QNEC050[VNEC050tr]": "",
                        "VNEB060[VNEB060i]": "",
                        "VZEA070": "0",
                        "VZEA135": "7",
                        "QNEC050[VNEC050ke]": "",
                        "QYED075[VYED075f]": "999",
                        "VMEC020": "",
                        "startlanguage": "de",
                        "QZES080[VZES080c]": "",
                        "QZEK010[VZEK010s]": "",
                        "VZEA020": "4",
                        "QNED0705[VNED070ec]": "",
                        "QZEA120[VZEA120c]": "0",
                        "QYEP010[VYEP010c]": "Y",
                        "QZEU070[VZEU070c]": "",
                        "QZEU025[VZEU025c]": "",
                        "QNEC050[VNEC050ir]": "",
                        "QYEE020[VYEE020c]": "",
                        "QYEP012[VYEP012c]": "Y",
                        "VZET070": "1",
                        "QNEC050[VNEC050xk]": "",
                        "QNEC050[VNEC050ba]": "",
                        "QNEC120[VNEC120c]": "",
                        "VNED073be": "",
                        "QYED075[VYED075c]": "999",
                        "QNEC050[VNEC050ch]": "Y",
                        "QNED0703[VNED070cc]": "",
                        "VZEK011": "",
                        "VNED071fc": "",
                        "QNED016[VNED016c]": "",
                        "QZEK010[VZEK010c]": "",
                        "VNED073fa": "",
                        "VNED073dc": "",
                        "QNEC050[VNEC050ve]": "",
                        "VNED030": "3",
                        "VNED073kd": "",
                        "VMED066": "",
                        "QNEC050[VNEC050pl]": "",
                        "PID": "13012",
                        "VNED073kc": "",
                        "QYEP010[VYEP010l]": "",
                        "VNEB050[VNEB050c]": "",
                        "QZEK010[VZEK010l]": "",
                        "VNEB060[VNEB060c]": "Y",
                        "VNED015": "2",
                        "VMED096": "",
                        "QNEC050[VNEC050ua]": "",
                        "VNED071j": "",
                        "QNED0704[VNED070dd]": "",
                        "VZEA140": "1",
                        "id": "678",
                        "VNED073h": "",
                        "QNED0702[VNED070bd]": "",
                        "VMEB001": "2018-11-22 00:00:00",
                        "QNEC050[VNEC050cg]": "",
                        "VNED073bb": "",
                        "QNEC050[VNEC050th]": "",
                        "QYEP012[VYEP012l]": "",
                        "VNED073dd": "",
                        "VYEK040": "1",
                        "VZEA080": "1",
                        "QYEP010[VYEP010i]": "Y",
                        "QNED016[VNED016i]": "",
                        "QZES080[VZES080y]": "",
                        "QZEK010[VZEK010i]": "",
                        "QNEC120[VNEC120y]": "",
                        "VNEB060[VNEB060f]": "Y",
                        "QNEC050[VNEC050ng]": "",
                        "QNED0706[VNED070fa]": "",
                        "QYEP012[VYEP012y]": "",
                        "QNEC050[VNEC050lu]": "",
                        "QNED0704[VNED070da]": "",
                        "QNED0702[VNED070ba]": "",
                        "QNEC100QNEC110[VNEC100]": "1",
                        "QZEK010[VZEK010y]": "Y",
                        "QYED075[VYED075i]": "4",
                        "VNEC068": "",
                        "VYEP013": "",
                        "QYEP012[VYEP012i]": "Y",
                        "QYEP010[VYEP010y]": "",
                        "QZEU070[VZEU070y]": "",
                        "VNED090": "2",
                        "QZEA120[VZEA120i]": "0",
                        "VNEB050[VNEB050e]": "",
                        "QYEP010[VYEP010j]": "Y",
                        "VNED073bd": "",
                        "QNEC050[VNEC050ge]": "",
                        "QNED0706[VNED070fb]": "",
                        "QNEC060QNEC065[VNEC060]": "3",
                        "VNED073db": "",
                        "QNED016[VNED016j]": "",
                        "QZEK010[VZEK010j]": "",
                        "VNED031": "",
                        "QNED0702[VNED070bb]": "",
                        "QNEC050[VNEC050hr]": "",
                        "QNEC050[VNEC050ca]": "",
                        "VMED045": "",
                        "QNEC050[VNEC050lv]": "",
                        "QNED0704[VNED070db]": "",
                        "QYEP012[VYEP012j]": "",
                        "VMEB061": "",
                        "QZEA120[VZEA120j]": "0",
                        "QNEC050[VNEC050eg]": "",
                        "QNEC050[VNEC050tn]": "",
                        "VNEB060[VNEB060e]": "Y",
                        "QNEC120[VNEC120g]": "",
                        "QNEC050[VNEC050be]": "",
                        "QZEA120[VZEA120g]": "0",
                        "VZEA060": "3",
                        "QZEU070[VZEU070g]": "",
                        "QYEP010[VYEP010g]": "",
                        "VNED073ba": "",
                        "QNED016[VNED016g]": "",
                        "QZEK010[VZEK010g]": "",
                        "VZET030": "3",
                        "VNEB060[VNEB060h]": "Y",
                        "QNEC050[VNEC050ru]": "",
                        "VNED071de": "",
                        "VYEK061": "2",
                        "VYEE010": "6",
                        "QYED075[VYED075g]": "999",
                        "VMED040": "12",
                        "VNEB060[VNEB060x]": "",
                        "QNEC050[VNEC050cl]": "",
                        "QNED0708[VNED070kd]": "",
                        "VZEO011": "",
                        "QNEC050[VNEC050lk]": "",
                        "VZEU020": "",
                        "QYEP012[VYEP012g]": "",
                        "VNEB050[VNEB050x]": "",
                        "VZEE050": "3",
                        "VZEA010": "4",
                        "QNED0701[VNED070a]": "Y",
                        "QNED0708[VNED070kc]": "",
                        "VZET040": "1",
                        "QNEC050[VNEC050br]": "",
                        "QNEC050[VNEC050sk]": "",
                        "VMED056": "",
                        "QZEK010[VZEK010p]": "",
                        "VMEC040": "1",
                        "QNEC050[VNEC050me]": "",
                        "VNED073ea": "",
                        "cgiSG": "",
                        "QNEC100QNEC110[VNEC110]": "1",
                        "QNEC050[VNEC050iq]": "",
                        "lastpage": "5",
                        "QNED0707[VNED070g]": ""
                      },
                      "event_id": 39087,
                      "filled": "2018-11-22T13:30:33Z"
                    },
                    "id": 24058
                  },
                  "problemsubstanzen": {
                    "substanzen": [
                      {
                        "audit": "Bei Eintritt bestand eine hohe Wahrscheinlichkeit einer Alkoholabhängigkeit (∑=26).",
                        "substanz": "Alkohol",
                        "label": "Täglich, jeweils 34g (ausschliesslich Bier).",
                        "drinks": {
                          "drinks_summary": "ausschliesslich Bier",
                          "gramm_total": 34,
                          "drinks": [
                            {
                              "gramm": 34,
                              "drink": "Bier",
                              "volumenprozent ": 5
                            }
                          ]
                        }
                      },
                      {
                        "substanz": "Tabak (Nikotin)",
                        "fagerstroem": "Bei Eintritt bestand eine sehr stark ausgeprägte körperliche Nikotinabhängigkeit. (∑=7).",
                        "label": "Mehrmals täglich (21-30 Zigaretten pro Tag)."
                      }
                    ],
                    "description": "Folgende Substanzen konsumierte Herr Breitenmoser vor dem aktuellen Entzug in der angegebenen Häufigkeit:"
                  },
                  "FAGERSTROEM": {
                    "answers": 6,
                    "interpretation": {
                      "to": 10,
                      "logo_speed": 55,
                      "result_color": "#F44336",
                      "from": 7,
                      "result": "sehr stark ausgeprägte körperliche Nikotinabhängigkeit."
                    },
                    "valid_scores": 10,
                    "ranges": {
                      "ranges": [
                        {
                          "to": 2,
                          "logo_speed": 10,
                          "result_color": "#4CAF50",
                          "from": 0,
                          "result": "gering ausgeprägte körperliche Nikotinabhängigkeit."
                        },
                        {
                          "to": 4,
                          "logo_speed": 25,
                          "result_color": "#FF9800",
                          "from": 3,
                          "result": "mittelstark ausgeprägte körperliche Nikotinabhängigkeit."
                        },
                        {
                          "to": 6,
                          "logo_speed": 50,
                          "result_color": "#F44336",
                          "from": 5,
                          "result": "stark ausgeprägte körperliche Nikotinabhängigkeit."
                        },
                        {
                          "to": 10,
                          "logo_speed": 55,
                          "result_color": "#F44336",
                          "from": 7,
                          "result": "sehr stark ausgeprägte körperliche Nikotinabhängigkeit."
                        }
                      ]
                    },
                    "FAGERSTROEM_Score": 7,
                    "Fagerstroem_Mean": 0.7,
                    "smoker": {
                      "summyary": "Bei Eintritt bestand eine sehr stark ausgeprägte körperliche Nikotinabhängigkeit. (∑=7).",
                      "date": "2018-11-22 00:00:00",
                      "smoker": true,
                      "datum": "22.11.2018"
                    }
                  },
                  "zusatzangaben": {
                    "konsumalter_regelmaessig_angabe": 16,
                    "hauptproblem_substanz_angabe": 1,
                    "kunsumalter_text": "Seit dem Alter von 16 Jahren wurde die Hauptproblemsubstanz «Alkohol» regelmässig konsumiert. Ein problematischer Konsum besteht seit dem Alter von 16 Jahren.",
                    "entzuege_text": "Vor dem aktuellen Entzug wurden fünf oder mehr professionell begleitete Entzugsbehandlungen durchgeführt.",
                    "hauptproblem_substanz_text": "Alkohol",
                    "konsumalter_done": true,
                    "hauptproblem_substanz_found": false,
                    "konsumalter_probplematisch_angabe": 16,
                    "entzuege_angabe": 6
                  },
                  "messzeitpunkt": {
                    "mz_date": "2018-11-22 00:00:00",
                    "mz_id": 1,
                    "mz_datum": "22.11.2018",
                    "mz_text": "Eintritt"
                  }
                }
              },
              "calculation_found": true,
              "calculation_found_method": "variant_response",
              "app_name": "Eintritt",
              "actinfo_ein_data": true,
              "actinfo_aus_data": false,
              "FAGERSTROEM": {
                "answers": 6,
                "interpretation": {
                  "to": 10,
                  "logo_speed": 55,
                  "result_color": "#F44336",
                  "from": 7,
                  "result": "sehr stark ausgeprägte körperliche Nikotinabhängigkeit."
                },
                "valid_scores": 10,
                "ranges": {
                  "ranges": [
                    {
                      "to": 2,
                      "logo_speed": 10,
                      "result_color": "#4CAF50",
                      "from": 0,
                      "result": "gering ausgeprägte körperliche Nikotinabhängigkeit."
                    },
                    {
                      "to": 4,
                      "logo_speed": 25,
                      "result_color": "#FF9800",
                      "from": 3,
                      "result": "mittelstark ausgeprägte körperliche Nikotinabhängigkeit."
                    },
                    {
                      "to": 6,
                      "logo_speed": 50,
                      "result_color": "#F44336",
                      "from": 5,
                      "result": "stark ausgeprägte körperliche Nikotinabhängigkeit."
                    },
                    {
                      "to": 10,
                      "logo_speed": 55,
                      "result_color": "#F44336",
                      "from": 7,
                      "result": "sehr stark ausgeprägte körperliche Nikotinabhängigkeit."
                    }
                  ]
                },
                "FAGERSTROEM_Score": 7,
                "Fagerstroem_Mean": 0.7,
                "smoker": {
                  "summyary": "Bei Eintritt bestand eine sehr stark ausgeprägte körperliche Nikotinabhängigkeit. (∑=7).",
                  "date": "2018-11-22 00:00:00",
                  "smoker": true,
                  "datum": "22.11.2018"
                }
              },
              "info": "Eintritt: sehr stark ausgeprägte körperliche Nikotinabhängigkeit."
            }
          ],
          "calculations_all": [
            {
              "result": [
                {
                  "hash": "00c30f68-5dfe-455b-8f99-2796aedbab25",
                  "AUDIT": {
                    "interpretation": {
                      "to": 40,
                      "result_color": "#F44336",
                      "from": 16,
                      "result": "eine hohe Wahrscheinlichkeit einer Alkoholabhängigkeit"
                    },
                    "AUDIT_Score": 26,
                    "valid_scores": 10,
                    "ranges": {
                      "ranges": [
                        {
                          "to": 7,
                          "result_color": "#4CAF50",
                          "from": 0,
                          "result": "ein risikoarmer Alkoholkonsum"
                        },
                        {
                          "to": 15,
                          "result_color": "#FF9800",
                          "from": 8,
                          "result": "ein Verdacht auf eine alkoholbezogene Störung"
                        },
                        {
                          "to": 40,
                          "result_color": "#F44336",
                          "from": 16,
                          "result": "eine hohe Wahrscheinlichkeit einer Alkoholabhängigkeit"
                        }
                      ]
                    },
                    "gender": "male",
                    "AUDIT_Score_Mean": 2.6
                  },
                  "pdfmake": {
                    "problemsubstanzen_text": {
                      "stack": [
                        {
                          "style": "h2",
                          "text": "Problemsubstanzen"
                        },
                        {
                          "text": [
                            {
                              "style": "p",
                              "text": "Folgende Substanzen konsumierte Herr Breitenmoser vor dem aktuellen Entzug in der angegebenen Häufigkeit: "
                            },
                            "",
                            {
                              "text": "Alkohol: ",
                              "bold": true
                            },
                            {
                              "text": "Täglich, jeweils 34g (ausschliesslich Bier).",
                              "bold": false
                            },
                            "; ",
                            {
                              "text": "Tabak (Nikotin): ",
                              "bold": true
                            },
                            {
                              "text": "Mehrmals täglich (21-30 Zigaretten pro Tag).",
                              "bold": false
                            }
                          ]
                        }
                      ]
                    },
                    "problemsubstanzen_ol": {
                      "stack": [
                        {
                          "style": "h2",
                          "text": "Problemsubstanzen"
                        },
                        {
                          "style": "p",
                          "text": "Folgende Substanzen konsumierte Herr Breitenmoser vor dem aktuellen Entzug in der angegebenen Häufigkeit: "
                        },
                        {
                          "ol": [
                            {
                              "style": "p",
                              "text": [
                                {
                                  "text": "Alkohol: ",
                                  "bold": true
                                },
                                {
                                  "text": "Täglich, jeweils 34g (ausschliesslich Bier).",
                                  "bold": false
                                }
                              ],
                              "margin": [
                                0,
                                6,
                                0,
                                0
                              ]
                            },
                            {
                              "style": "p",
                              "text": [
                                {
                                  "text": "Tabak (Nikotin): ",
                                  "bold": true
                                },
                                {
                                  "text": "Mehrmals täglich (21-30 Zigaretten pro Tag).",
                                  "bold": false
                                }
                              ],
                              "margin": [
                                0,
                                6,
                                0,
                                0
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    "zusatzangaben_text": {
                      "stack": [
                        {
                          "style": "p",
                          "text": "Zusatzinformationen: Seit dem Alter von 16 Jahren wurde die Hauptproblemsubstanz «Alkohol» regelmässig konsumiert. Ein problematischer Konsum besteht seit dem Alter von 16 Jahren. Vor dem aktuellen Entzug wurden fünf oder mehr professionell begleitete Entzugsbehandlungen durchgeführt."
                        }
                      ]
                    }
                  },
                  "response": {
                    "data": {
                      "response": {
                        "VZEA136": "1",
                        "QNEC050[VNEC050ro]": "",
                        "QZEK010[VZEK010m]": "",
                        "QNEC050[VNEC050gb]": "",
                        "QNEC050[VNEC050mx]": "",
                        "QNEC050[VNEC050hu]": "",
                        "VNED073a": "1",
                        "Institution": "03",
                        "QNED0704[VNED070de]": "",
                        "VNED094": "",
                        "QNED0702[VNED070be]": "",
                        "VNEB050[VNEB050b]": "",
                        "VNED073cb": "",
                        "VNEB060[VNEB060b]": "",
                        "VNED073ed": "",
                        "QNEC050[VNEC050at]": "",
                        "QNED0707[VNED070j]": "",
                        "QNEC050[VNEC050gr]": "",
                        "VNEB065": "1",
                        "QNEC050[VNEC050es]": "",
                        "VNEB060[VNEB060a]": "",
                        "QNEC050[VNEC050cu]": "",
                        "VYEK060": "1",
                        "VNED073ka": "",
                        "datestamp": "2018-11-22 13:30:33",
                        "VZEO010": "5",
                        "QNEC050[VNEC050ec]": "",
                        "VNEC067": "1",
                        "QNEC050[VNEC050se]": "",
                        "VNEB050[VNEB050a]": "Y",
                        "VNEB080": "4",
                        "QNEC050[VNEC050mk]": "",
                        "QNEC070QNEC075[VNEC075]": "1",
                        "VNED073j": "",
                        "VMEC030a": "3380",
                        "QNEC050[VNEC050us]": "",
                        "VZEF011": "",
                        "QNED0707[VNED070i]": "Y",
                        "QZEK010[VZEK010n]": "",
                        "QNEC050[VNEC050dz]": "",
                        "QNED0704[VNED070dc]": "",
                        "VMED055": "",
                        "QZES060QZES070[VZES070]": "999",
                        "QNEC050[VNEC050za]": "",
                        "VMEC061": "",
                        "VNED073eb": "",
                        "VZEU071": "",
                        "QNEC050[VNEC050do]": "",
                        "QYEP010[VYEP010k]": "",
                        "QNED0702[VNeD070bc]": "",
                        "VNEB050[VNEB050d]": "",
                        "QNEC070QNEC075[VNEC070]": "2",
                        "VZEA130": "2",
                        "QYEP012[VYEP012k]": "",
                        "QNEC050[VNEC050pk]": "",
                        "QNEC050[VNEC050ar]": "",
                        "VYEP011": "",
                        "QNED0706[VNED070fc]": "",
                        "QZEK010[VZEK010k]": "",
                        "FNr": "130120300",
                        "VNED073g": "",
                        "VNEB060[VNEB060d]": "Y",
                        "VNED092": "",
                        "VYEF010": "7",
                        "QNEC050[VNEC050fr]": "",
                        "VNED095": "",
                        "QNEC050[VNEC050pt]": "",
                        "QZES080[VZES080d]": "",
                        "VMEC101": "",
                        "QZEK010[VZEK010t]": "",
                        "VMEB081": "",
                        "VNED073cc": "",
                        "QYED075[VYED075d]": "999",
                        "QNEC050[VNEC050co]": "",
                        "VMEC091": "",
                        "QZEU025[VZEU025d]": "",
                        "QYEP012[VYEP012d]": "",
                        "VMEC066": "",
                        "optinomixHASH": "00c30f68-5dfe-455b-8f99-2796aedbab25",
                        "QYEE020[VYEE020d]": "",
                        "QNEC050[VNEC050so]": "",
                        "VNED026": "",
                        "QNEC120[VNEC120d]": "",
                        "VZEA050": "4",
                        "QNEC050[VNEC050ie]": "",
                        "VMEB010": "DB",
                        "QNED0705[VNED070ed]": "",
                        "QZEA120[VZEA120d]": "0",
                        "VZEU010": "",
                        "QNEC050[VNEC050ma]": "",
                        "QYEP010[VYEP010d]": "",
                        "QZEU070[VZEU070d]": "",
                        "QNED016[VNED016d]": "",
                        "QZEK010[VZEK010d]": "",
                        "VZEU040": "",
                        "VZES020": "6",
                        "VNED010": "1",
                        "QYED075[VYED075a]": "5",
                        "VYEF040": "4",
                        "QZEU025[VZEU025a]": "",
                        "QZEK010[VZEK010q]": "",
                        "QNEC050[VNEC050de]": "",
                        "QZES080[VZES080a]": "Y",
                        "VNED098": "",
                        "QNEC050[VNEC050mt]": "",
                        "VNED071be": "",
                        "QYEP010[VYEP010a]": "Y",
                        "QZEU070[VZEU070a]": "",
                        "submitdate": "2018-11-22 13:30:33",
                        "QNEC120[VNEC120a]": "Y",
                        "QYEP012[VYEP012a]": "Y",
                        "QYEE020[VYEE020a]": "Y",
                        "VNED073fc": "",
                        "QNED0705[VNED070ea]": "",
                        "VZET050": "0",
                        "QZEA120[VZEA120a]": "85",
                        "VNED073da": "",
                        "QNEC080QNEC090[VNEC090]": "1",
                        "QZEK010[VZEK010a]": "",
                        "QNED016[VNED016a]": "",
                        "VNED071kd": "",
                        "QNEC050[VNEC050rs]": "",
                        "VMED046": "",
                        "QNEC050[VNEC050cz]": "",
                        "QNEC050[VNEC050no]": "",
                        "QNED0708[VNED070kb]": "",
                        "QNED0703[VNED070ca]": "",
                        "QZEU011": "",
                        "QNED016[VNED016b]": "",
                        "QZEK010[VZEK010b]": "",
                        "QZES080[VZES080b]": "",
                        "QZEK010[VZEK010r]": "",
                        "QNEC050[VNEC050si]": "",
                        "QNED0708[VNED070ka]": "",
                        "QNED0703[VNED070cb]": "",
                        "VZEA030": "4",
                        "QYEP012[VYEP012b]": "Y",
                        "QYEE020[VYEE020b]": "",
                        "QZEA120[VZEA120b]": "0",
                        "QNED0705[VNED070eb]": "",
                        "QZES060QZES070[VZES060]": "6",
                        "VNEC050x": "",
                        "QZEU025[VZEU025b]": "",
                        "VZES081": "",
                        "QNEC050[VNEC050is]": "",
                        "VNED093": "",
                        "VZET060": "0",
                        "QNEC050[VNEC050cy]": "",
                        "QNEC050[VNEC050nl]": "",
                        "QYEP010[VYEP010b]": "Y",
                        "QZEU070[VZEU070b]": "",
                        "VYEE040": "1",
                        "QNEC120[VNEC120b]": "",
                        "QYED075[VYED075b]": "999",
                        "VNED073ec": "",
                        "VZES010": "4",
                        "QNEC050[VNEC050cd]": "",
                        "VZES015": "2",
                        "VNEB067": "",
                        "VNED071ed": "",
                        "VNED025": "1",
                        "QNEC050[VNEC050fi]": "",
                        "QNEC050[VNEC050in]": "",
                        "VNED070x": "1",
                        "QNED0707[VNED070h]": "",
                        "QNEC060QNEC065[VNEC065]": "3",
                        "QZEK010[VZEK010o]": "",
                        "QNEC050[VNEC050dk]": "",
                        "VZEU031": "",
                        "QNEC050[VNEC050ph]": "",
                        "QZEA120[VZEA120h]": "0",
                        "VZEA090": "0",
                        "QYEP010[VYEP010h]": "",
                        "QNEC050[VNEC050ee]": "",
                        "VNED073fb": "",
                        "QYEP012[VYEP012h]": "",
                        "VNEB060[VNEB060g]": "Y",
                        "QNEC120[VNEC120h]": "",
                        "VMED065": "",
                        "QZEU025[VZEU025x]": "",
                        "QNEC080QNEC090[VNEC080]": "1",
                        "QYED075[VYED075h]": "999",
                        "QNED016[VNED016h]": "",
                        "QZES080[VZES080x]": "",
                        "QZEK010[VZEK010h]": "",
                        "VZEU041": "",
                        "QNEC120[VNEC120x]": "",
                        "QNEC050[VNEC050vn]": "",
                        "VMEB040a": "2018-11-20 00:00:00",
                        "QZEU070[VZEU070x]": "",
                        "QYEP010[VYEP010x]": "",
                        "QNEC050[VNEC050lt]": "",
                        "QYEE020[VYEE020x]": "",
                        "VMEB005": "71286515",
                        "VZEA100": "2",
                        "QYEP012[VYEP012x]": "",
                        "QNED016[VNED016x]": "",
                        "QZEK010[VZEK010x]": "",
                        "VZEE041": "",
                        "QNEC050[VNEC050yy]": "",
                        "VZEF030": "4",
                        "VNeD073bc": "",
                        "VMEC010": "",
                        "QZEE025": "",
                        "QYEP012[VYEP012e]": "",
                        "QNEC050[VNEC050li]": "",
                        "VMEC081": "",
                        "startdate": "2018-11-22 12:53:25",
                        "QNEC050[VNEC050al]": "",
                        "QNEC050[VNEC050pe]": "",
                        "VZET010": "6",
                        "QZEA120[VZEA120e]": "0",
                        "QNEC050[VNEC050it]": "",
                        "VNED073de": "",
                        "VYEK041": "2",
                        "QZEU070[VZEU070e]": "",
                        "VNED073kb": "",
                        "QYEP010[VYEP010e]": "",
                        "VMED060": "16",
                        "VMEC111": "",
                        "QNEC050[VNEC050bg]": "",
                        "QNEC120[VNEC120e]": "",
                        "QYED075[VYED075e]": "999",
                        "QNED016[VNED016e]": "",
                        "VZEX005": "1301203",
                        "QZEK010[VZEK010e]": "",
                        "VMED097": "",
                        "QZEK010[VZEK010u]": "",
                        "VMEB040d": "",
                        "VNED073i": "1",
                        "QNEC050[VNEC050sn]": "",
                        "VZEA040": "4",
                        "VZET020": "2",
                        "QZEK010[VZEK010v]": "",
                        "VNEB050[VNEB050y]": "",
                        "QYEP010[VYEP010f]": "",
                        "QZEU070[VZEU070f]": "",
                        "QNEC120[VNEC120f]": "",
                        "VNED071cc": "",
                        "VMED050": "16",
                        "VNED073ca": "",
                        "QYEP012[VYEP012f]": "",
                        "QNEC050[VNEC050ao]": "",
                        "QZEA120[VZEA120f]": "0",
                        "VZES050": "1",
                        "VZEU030": "",
                        "QNED016[VNED016f]": "",
                        "QZEK010[VZEK010f]": "",
                        "VNEB066": "",
                        "QNEC050[VNEC050tr]": "",
                        "VNEB060[VNEB060i]": "",
                        "VZEA070": "0",
                        "VZEA135": "7",
                        "QNEC050[VNEC050ke]": "",
                        "QYED075[VYED075f]": "999",
                        "VMEC020": "",
                        "startlanguage": "de",
                        "QZES080[VZES080c]": "",
                        "QZEK010[VZEK010s]": "",
                        "VZEA020": "4",
                        "QNED0705[VNED070ec]": "",
                        "QZEA120[VZEA120c]": "0",
                        "QYEP010[VYEP010c]": "Y",
                        "QZEU070[VZEU070c]": "",
                        "QZEU025[VZEU025c]": "",
                        "QNEC050[VNEC050ir]": "",
                        "QYEE020[VYEE020c]": "",
                        "QYEP012[VYEP012c]": "Y",
                        "VZET070": "1",
                        "QNEC050[VNEC050xk]": "",
                        "QNEC050[VNEC050ba]": "",
                        "QNEC120[VNEC120c]": "",
                        "VNED073be": "",
                        "QYED075[VYED075c]": "999",
                        "QNEC050[VNEC050ch]": "Y",
                        "QNED0703[VNED070cc]": "",
                        "VZEK011": "",
                        "VNED071fc": "",
                        "QNED016[VNED016c]": "",
                        "QZEK010[VZEK010c]": "",
                        "VNED073fa": "",
                        "VNED073dc": "",
                        "QNEC050[VNEC050ve]": "",
                        "VNED030": "3",
                        "VNED073kd": "",
                        "VMED066": "",
                        "QNEC050[VNEC050pl]": "",
                        "PID": "13012",
                        "VNED073kc": "",
                        "QYEP010[VYEP010l]": "",
                        "VNEB050[VNEB050c]": "",
                        "QZEK010[VZEK010l]": "",
                        "VNEB060[VNEB060c]": "Y",
                        "VNED015": "2",
                        "VMED096": "",
                        "QNEC050[VNEC050ua]": "",
                        "VNED071j": "",
                        "QNED0704[VNED070dd]": "",
                        "VZEA140": "1",
                        "id": "678",
                        "VNED073h": "",
                        "QNED0702[VNED070bd]": "",
                        "VMEB001": "2018-11-22 00:00:00",
                        "QNEC050[VNEC050cg]": "",
                        "VNED073bb": "",
                        "QNEC050[VNEC050th]": "",
                        "QYEP012[VYEP012l]": "",
                        "VNED073dd": "",
                        "VYEK040": "1",
                        "VZEA080": "1",
                        "QYEP010[VYEP010i]": "Y",
                        "QNED016[VNED016i]": "",
                        "QZES080[VZES080y]": "",
                        "QZEK010[VZEK010i]": "",
                        "QNEC120[VNEC120y]": "",
                        "VNEB060[VNEB060f]": "Y",
                        "QNEC050[VNEC050ng]": "",
                        "QNED0706[VNED070fa]": "",
                        "QYEP012[VYEP012y]": "",
                        "QNEC050[VNEC050lu]": "",
                        "QNED0704[VNED070da]": "",
                        "QNED0702[VNED070ba]": "",
                        "QNEC100QNEC110[VNEC100]": "1",
                        "QZEK010[VZEK010y]": "Y",
                        "QYED075[VYED075i]": "4",
                        "VNEC068": "",
                        "VYEP013": "",
                        "QYEP012[VYEP012i]": "Y",
                        "QYEP010[VYEP010y]": "",
                        "QZEU070[VZEU070y]": "",
                        "VNED090": "2",
                        "QZEA120[VZEA120i]": "0",
                        "VNEB050[VNEB050e]": "",
                        "QYEP010[VYEP010j]": "Y",
                        "VNED073bd": "",
                        "QNEC050[VNEC050ge]": "",
                        "QNED0706[VNED070fb]": "",
                        "QNEC060QNEC065[VNEC060]": "3",
                        "VNED073db": "",
                        "QNED016[VNED016j]": "",
                        "QZEK010[VZEK010j]": "",
                        "VNED031": "",
                        "QNED0702[VNED070bb]": "",
                        "QNEC050[VNEC050hr]": "",
                        "QNEC050[VNEC050ca]": "",
                        "VMED045": "",
                        "QNEC050[VNEC050lv]": "",
                        "QNED0704[VNED070db]": "",
                        "QYEP012[VYEP012j]": "",
                        "VMEB061": "",
                        "QZEA120[VZEA120j]": "0",
                        "QNEC050[VNEC050eg]": "",
                        "QNEC050[VNEC050tn]": "",
                        "VNEB060[VNEB060e]": "Y",
                        "QNEC120[VNEC120g]": "",
                        "QNEC050[VNEC050be]": "",
                        "QZEA120[VZEA120g]": "0",
                        "VZEA060": "3",
                        "QZEU070[VZEU070g]": "",
                        "QYEP010[VYEP010g]": "",
                        "VNED073ba": "",
                        "QNED016[VNED016g]": "",
                        "QZEK010[VZEK010g]": "",
                        "VZET030": "3",
                        "VNEB060[VNEB060h]": "Y",
                        "QNEC050[VNEC050ru]": "",
                        "VNED071de": "",
                        "VYEK061": "2",
                        "VYEE010": "6",
                        "QYED075[VYED075g]": "999",
                        "VMED040": "12",
                        "VNEB060[VNEB060x]": "",
                        "QNEC050[VNEC050cl]": "",
                        "QNED0708[VNED070kd]": "",
                        "VZEO011": "",
                        "QNEC050[VNEC050lk]": "",
                        "VZEU020": "",
                        "QYEP012[VYEP012g]": "",
                        "VNEB050[VNEB050x]": "",
                        "VZEE050": "3",
                        "VZEA010": "4",
                        "QNED0701[VNED070a]": "Y",
                        "QNED0708[VNED070kc]": "",
                        "VZET040": "1",
                        "QNEC050[VNEC050br]": "",
                        "QNEC050[VNEC050sk]": "",
                        "VMED056": "",
                        "QZEK010[VZEK010p]": "",
                        "VMEC040": "1",
                        "QNEC050[VNEC050me]": "",
                        "VNED073ea": "",
                        "cgiSG": "",
                        "QNEC100QNEC110[VNEC110]": "1",
                        "QNEC050[VNEC050iq]": "",
                        "lastpage": "5",
                        "QNED0707[VNED070g]": ""
                      },
                      "event_id": 39087,
                      "filled": "2018-11-22T13:30:33Z"
                    },
                    "id": 24058
                  },
                  "problemsubstanzen": {
                    "substanzen": [
                      {
                        "audit": "Bei Eintritt bestand eine hohe Wahrscheinlichkeit einer Alkoholabhängigkeit (∑=26).",
                        "substanz": "Alkohol",
                        "label": "Täglich, jeweils 34g (ausschliesslich Bier).",
                        "drinks": {
                          "drinks_summary": "ausschliesslich Bier",
                          "gramm_total": 34,
                          "drinks": [
                            {
                              "gramm": 34,
                              "drink": "Bier",
                              "volumenprozent ": 5
                            }
                          ]
                        }
                      },
                      {
                        "substanz": "Tabak (Nikotin)",
                        "fagerstroem": "Bei Eintritt bestand eine sehr stark ausgeprägte körperliche Nikotinabhängigkeit. (∑=7).",
                        "label": "Mehrmals täglich (21-30 Zigaretten pro Tag)."
                      }
                    ],
                    "description": "Folgende Substanzen konsumierte Herr Breitenmoser vor dem aktuellen Entzug in der angegebenen Häufigkeit:"
                  },
                  "FAGERSTROEM": {
                    "answers": 6,
                    "interpretation": {
                      "to": 10,
                      "logo_speed": 55,
                      "result_color": "#F44336",
                      "from": 7,
                      "result": "sehr stark ausgeprägte körperliche Nikotinabhängigkeit."
                    },
                    "valid_scores": 10,
                    "ranges": {
                      "ranges": [
                        {
                          "to": 2,
                          "logo_speed": 10,
                          "result_color": "#4CAF50",
                          "from": 0,
                          "result": "gering ausgeprägte körperliche Nikotinabhängigkeit."
                        },
                        {
                          "to": 4,
                          "logo_speed": 25,
                          "result_color": "#FF9800",
                          "from": 3,
                          "result": "mittelstark ausgeprägte körperliche Nikotinabhängigkeit."
                        },
                        {
                          "to": 6,
                          "logo_speed": 50,
                          "result_color": "#F44336",
                          "from": 5,
                          "result": "stark ausgeprägte körperliche Nikotinabhängigkeit."
                        },
                        {
                          "to": 10,
                          "logo_speed": 55,
                          "result_color": "#F44336",
                          "from": 7,
                          "result": "sehr stark ausgeprägte körperliche Nikotinabhängigkeit."
                        }
                      ]
                    },
                    "FAGERSTROEM_Score": 7,
                    "Fagerstroem_Mean": 0.7,
                    "smoker": {
                      "summyary": "Bei Eintritt bestand eine sehr stark ausgeprägte körperliche Nikotinabhängigkeit. (∑=7).",
                      "date": "2018-11-22 00:00:00",
                      "smoker": true,
                      "datum": "22.11.2018"
                    }
                  },
                  "zusatzangaben": {
                    "konsumalter_regelmaessig_angabe": 16,
                    "hauptproblem_substanz_angabe": 1,
                    "kunsumalter_text": "Seit dem Alter von 16 Jahren wurde die Hauptproblemsubstanz «Alkohol» regelmässig konsumiert. Ein problematischer Konsum besteht seit dem Alter von 16 Jahren.",
                    "entzuege_text": "Vor dem aktuellen Entzug wurden fünf oder mehr professionell begleitete Entzugsbehandlungen durchgeführt.",
                    "hauptproblem_substanz_text": "Alkohol",
                    "konsumalter_done": true,
                    "hauptproblem_substanz_found": false,
                    "konsumalter_probplematisch_angabe": 16,
                    "entzuege_angabe": 6
                  },
                  "messzeitpunkt": {
                    "mz_date": "2018-11-22 00:00:00",
                    "mz_id": 1,
                    "mz_datum": "22.11.2018",
                    "mz_text": "Eintritt"
                  }
                }
              ],
              "name": "actinfo_ein"
            }
          ],
          "have_data": true,
          "loaded": true,
          "possible_data": true,
          "request": "stay",
          "pid": 3868,
          "fid": 5992,
          "app_id": "ch.suedhang.apps.actinfo_ein.production",
          "params": {
            "name": "actinfo_ein",
            "title": "ActInfo",
            "subtitle": "Information network on addiction care and therapy",
            "identifier": "ch.suedhang.apps.actinfo_ein.production"
          },
          "module": {
            "hash": "82fa76e6547fd5583194d1ec269e50aec96dd230",
            "calculations": [
              "actinfo_ein"
            ],
            "readme": {
              "text": "## act-info :: Eintrittsbefragung\n\n### Zusammenfassung\nact-info (addiction, care and therapy information) ist ein einheitliches, gesamtschweizerisches Klientenmonitoringsystem für den Bereich der Suchthilfe.\n\nErfassung der vier Bereiche Behandlungsgrundlagen, soziodemografische Angaben, Substanzkonsum und Gesundheit (ausserhalb Substanzproblematik)\n\n### Hintergrund\nDas nationale Dokumentationssystem umfasst Angebote der ambulanten und stationären Behandlung von Problemen mit legalen und illegalen Substanzen sowie von nicht-substanzgebundener Abhängigkeit. act-info ist das Resultat der Harmonisierung der bestehenden Suchthilfestatistiken.\n\nDie beteiligten Forschungsinstitute (Sucht Schweiz Lausanne, ISGF Zürich) sind für die Datenerhebung und die Auswertungen in den einzelnen Behandlungssektoren verantwortlich.\n\nact-info wird durch das Bundesamt für Gesundheit BAG finanziert und koordiniert. Die Verantwortung für das Gesamtprojekt act-info liegt beim BAG.\n\n#### Auswertung / Ergebnisse\n- Substanzkonsum vor Eintritt (Substanz + Häufigkeit)\n- Zusatzangaben vor Eintritt (Hauptproblemsubstanz)\n- AUDIT-Summenwert (Verdacht auf Alkoholabhängigkeit)\n- Fagerström-Summenwert (Ausprägung der Nikotinabhängigkeit)\n\n\n",
              "parents": [
                {
                  "text": "## act-info :: Eintrittsbefragung\n\n### Zusammenfassung\nact-info (addiction, care and therapy information) ist ein einheitliches, gesamtschweizerisches Klientenmonitoringsystem für den Bereich der Suchthilfe.\n\nErfassung der vier Bereiche Behandlungsgrundlagen, soziodemografische Angaben, Substanzkonsum und Gesundheit (ausserhalb Substanzproblematik)\n\n### Hintergrund\nDas nationale Dokumentationssystem umfasst Angebote der ambulanten und stationären Behandlung von Problemen mit legalen und illegalen Substanzen sowie von nicht-substanzgebundener Abhängigkeit. act-info ist das Resultat der Harmonisierung der bestehenden Suchthilfestatistiken.\n\nDie beteiligten Forschungsinstitute (Sucht Schweiz Lausanne, ISGF Zürich) sind für die Datenerhebung und die Auswertungen in den einzelnen Behandlungssektoren verantwortlich.\n\nact-info wird durch das Bundesamt für Gesundheit BAG finanziert und koordiniert. Die Verantwortung für das Gesamtprojekt act-info liegt beim BAG.\n\n#### Auswertung / Ergebnisse\n- Substanzkonsum vor Eintritt (Substanz + Häufigkeit)\n- Zusatzangaben vor Eintritt (Hauptproblemsubstanz)\n- AUDIT-Summenwert (Verdacht auf Alkoholabhängigkeit)\n- Fagerström-Summenwert (Ausprägung der Nikotinabhängigkeit)\n\n",
                  "identifier": "ch.suedhang.apps.actinfo_ein",
                  "html": "<h2>act-info :: Eintrittsbefragung</h2><h3>Zusammenfassung</h3><p>act-info (addiction, care and therapy information) ist ein einheitliches, gesamtschweizerisches Klientenmonitoringsystem für den Bereich der Suchthilfe.</p><p>Erfassung der vier Bereiche Behandlungsgrundlagen, soziodemografische Angaben, Substanzkonsum und Gesundheit (ausserhalb Substanzproblematik)</p><h3>Hintergrund</h3><p>Das nationale Dokumentationssystem umfasst Angebote der ambulanten und stationären Behandlung von Problemen mit legalen und illegalen Substanzen sowie von nicht-substanzgebundener Abhängigkeit. act-info ist das Resultat der Harmonisierung der bestehenden Suchthilfestatistiken.</p><p>Die beteiligten Forschungsinstitute (Sucht Schweiz Lausanne, ISGF Zürich) sind für die Datenerhebung und die Auswertungen in den einzelnen Behandlungssektoren verantwortlich.</p><p>act-info wird durch das Bundesamt für Gesundheit BAG finanziert und koordiniert. Die Verantwortung für das Gesamtprojekt act-info liegt beim BAG.</p><h4>Auswertung / Ergebnisse</h4><ul><li>Substanzkonsum vor Eintritt (Substanz + Häufigkeit)</li><li>Zusatzangaben vor Eintritt (Hauptproblemsubstanz)</li><li>AUDIT-Summenwert (Verdacht auf Alkoholabhängigkeit)</li><li>Fagerström-Summenwert (Ausprägung der Nikotinabhängigkeit)</li></ul>"
                }
              ],
              "html": "<h2>act-info :: Eintrittsbefragung</h2><h3>Zusammenfassung</h3><p>act-info (addiction, care and therapy information) ist ein einheitliches, gesamtschweizerisches Klientenmonitoringsystem für den Bereich der Suchthilfe.</p><p>Erfassung der vier Bereiche Behandlungsgrundlagen, soziodemografische Angaben, Substanzkonsum und Gesundheit (ausserhalb Substanzproblematik)</p><h3>Hintergrund</h3><p>Das nationale Dokumentationssystem umfasst Angebote der ambulanten und stationären Behandlung von Problemen mit legalen und illegalen Substanzen sowie von nicht-substanzgebundener Abhängigkeit. act-info ist das Resultat der Harmonisierung der bestehenden Suchthilfestatistiken.</p><p>Die beteiligten Forschungsinstitute (Sucht Schweiz Lausanne, ISGF Zürich) sind für die Datenerhebung und die Auswertungen in den einzelnen Behandlungssektoren verantwortlich.</p><p>act-info wird durch das Bundesamt für Gesundheit BAG finanziert und koordiniert. Die Verantwortung für das Gesamtprojekt act-info liegt beim BAG.</p><h4>Auswertung / Ergebnisse</h4><ul><li>Substanzkonsum vor Eintritt (Substanz + Häufigkeit)</li><li>Zusatzangaben vor Eintritt (Hauptproblemsubstanz)</li><li>AUDIT-Summenwert (Verdacht auf Alkoholabhängigkeit)</li><li>Fagerström-Summenwert (Ausprägung der Nikotinabhängigkeit)</li></ul>"
            },
            "surveys": [
              {
                "identifier": "actinfo_eintritt",
                "name": "actInfo - Eintritt"
              }
            ],
            "templates": [
              {
                "height": 35,
                "width": 6,
                "name": "ActInfo"
              }
            ],
            "identifier": "ch.suedhang.apps.actinfo_ein.production",
            "pdf_templates": [],
            "data_source_queries": [],
            "original_name": "ActInfo | Eintritt",
            "dependencies": [],
            "name": "ActInfo | Eintritt",
            "events": [
              {
                "due_after": 259200,
                "survey": "actinfo_eintritt",
                "name": "activation",
                "time_spec": {
                  "type": "on_activation"
                },
                "overdue": {
                  "type": "ignore"
                },
                "description": "actInfo - Eintritt"
              }
            ],
            "version": "1.0",
            "type": "patient",
            "short_description": "Sonderversion für den stationären Alkohol- und Medikamentenbereich.",
            "database_schema_name": "ch_suedhang_apps_actinfo_ein_production",
            "database_user_name": "ch_suedhang_apps_actinfo_ein_production",
            "description": "",
            "developer": {
              "email": "nora.schoenenberger@suedhang.ch",
              "phone": "+41 (0)31 828 14 92",
              "first_name": "Nora",
              "website": "http://suedhang.ch/",
              "company": "Suedhang",
              "last_name": "Schönenberger",
              "github_user": "schoenenb"
            }
          }
        },
        "ch.suedhang.apps.asrs.production": {
          "date": "2020-04-03T12:09:08.777Z",
          "data": [
            {
              "all_found": true,
              "app_id": "ch.suedhang.apps.asrs.production",
              "date": "2018-11-21T14:46:10Z",
              "response_id": 24017,
              "response": {
                "ASRS_6": "1",
                "ASRS_1": "1",
                "survey_version": "ng_survey_v1",
                "ASRS_2": "1",
                "ASRS_3": "1",
                "ASRS_4": "3",
                "ASRS_5": "3"
              },
              "event": {
                "status": "done",
                "due": "2018-11-24T14:01:37Z",
                "url": "http://survey.demo.optinomic.org//surveys/80980f46-4a53-4da5-95f7-3e569694f70a",
                "patient_uses_module_id": 25426,
                "random_hash": "80980f46-4a53-4da5-95f7-3e569694f70a",
                "survey_name": "ASRS",
                "patient_id": 3868,
                "responsibility": {
                  "type": "patient_via_assessment"
                },
                "module": "ch.suedhang.apps.asrs.production",
                "overdue": {
                  "type": "ignore"
                },
                "created_at": "2018-11-21T14:01:37Z",
                "description": "ASRS-Erhebung",
                "id": 39088,
                "extras": {
                  "created_at": "21.11.2018",
                  "due": "24.11.2018",
                  "status": "Done",
                  "status_de": "Erledigt",
                  "show_do_it_now": false
                }
              },
              "event_found": true,
              "event_id": 39088,
              "patient": {
                "age": 51,
                "birthday": "22.10.1968",
                "birthday_age": "22.10.1968 | 51",
                "name": "Breitenmoser Dominique",
                "birth_year": 1968,
                "secure": "Br. D. (1968)",
                "ansprache": "Herr",
                "anrede": "Herr Breitenmoser",
                "full_name": "Herr Breitenmoser Dominique (22.10.1968 | 51)",
                "full_address": "Aarburgerstrasse 96, 4600 Olten",
                "phone": "",
                "infoline": "Aarburgerstrasse 96, 4600 Olten",
                "color_main": "#3F51B5",
                "color_accent": "#E91E63"
              },
              "patient_found": true,
              "patient_id": 3868,
              "stay": {
                "photo": "",
                "cis_lead_doctor": null,
                "status": "",
                "phase": "complete",
                "frozen": true,
                "first_contact": null,
                "lead_therapist_id": 66,
                "start": "2018-11-20T12:45:00Z",
                "stop_status": null,
                "insurance_number": "",
                "patient_id": 3868,
                "insurance_provider": "PTS",
                "cis_fid": 1301203,
                "stop": "2019-02-12T12:30:00Z",
                "deputy_lead_therapist_id": null,
                "notes": "",
                "service_provider": "",
                "class": "S",
                "lead_therapist_id_overwrite": null,
                "id": 5992,
                "fid": 5992,
                "extras": {
                  "in_stay": false,
                  "duration": 84,
                  "phase_de": "Die Behandlung wurde vor mehr als 14 Tage beendet",
                  "phase_en": "the stay ended more than 14 days ago",
                  "beginn": "20.11.2018",
                  "from_to": "20.11.2018 - 12.2.2019",
                  "ende": "12.2.2019"
                }
              },
              "stay_found": true,
              "stay_id": 5992,
              "patient_uses_module": {
                "settings": {},
                "stay_id": 5992,
                "patient_id": 3868,
                "responsibility": null,
                "deactivated": false,
                "module": "ch.suedhang.apps.asrs.production",
                "overdue": null,
                "last_event_generation": "2020-04-03T12:03:32.49705Z",
                "activated_on": "2018-11-21T14:01:37Z",
                "id": 25426
              },
              "patient_uses_module_found": true,
              "patient_uses_module_id": 25426,
              "calculation": {
                "asrs_score": {
                  "score": {
                    "score": 2,
                    "ranges": [
                      {
                        "interpretation": "Keine Hinweise auf ADHS vorhanden",
                        "text": "Zwei der sechs Screeningfragen lagen am 21.11.2018 im auffälligen Bereich (10 von 24 Punkten).",
                        "to": 3,
                        "result_color": "#2E7D32",
                        "from": 0
                      },
                      {
                        "interpretation": "Hinweise auf ADHS vorhanden",
                        "to": 6,
                        "result_color": "#C62828",
                        "from": 4
                      }
                    ],
                    "sum": 10,
                    "current_range": {
                      "interpretation": "Keine Hinweise auf ADHS vorhanden",
                      "text": "Zwei der sechs Screeningfragen lagen am 21.11.2018 im auffälligen Bereich (10 von 24 Punkten).",
                      "to": 3,
                      "result_color": "#2E7D32",
                      "from": 0
                    }
                  },
                  "response": {
                    "data": {
                      "response": {
                        "ASRS_6": "1",
                        "ASRS_1": "1",
                        "survey_version": "ng_survey_v1",
                        "ASRS_2": "1",
                        "ASRS_3": "1",
                        "ASRS_4": "3",
                        "ASRS_5": "3"
                      },
                      "event_id": 39088,
                      "filled": "2018-11-21T14:46:10Z"
                    },
                    "id": 24017
                  },
                  "messzeitpunkt": {
                    "mz_date": "2018-11-21T14:46:10Z",
                    "mz_datum": "21.11.2018"
                  },
                  "adhs_references": false
                }
              },
              "calculation_found": true,
              "calculation_found_method": "variant_response"
            }
          ],
          "calculations_all": [
            {
              "result": [
                {
                  "score": {
                    "score": 2,
                    "ranges": [
                      {
                        "interpretation": "Keine Hinweise auf ADHS vorhanden",
                        "text": "Zwei der sechs Screeningfragen lagen am 21.11.2018 im auffälligen Bereich (10 von 24 Punkten).",
                        "to": 3,
                        "result_color": "#2E7D32",
                        "from": 0
                      },
                      {
                        "interpretation": "Hinweise auf ADHS vorhanden",
                        "to": 6,
                        "result_color": "#C62828",
                        "from": 4
                      }
                    ],
                    "sum": 10,
                    "current_range": {
                      "interpretation": "Keine Hinweise auf ADHS vorhanden",
                      "text": "Zwei der sechs Screeningfragen lagen am 21.11.2018 im auffälligen Bereich (10 von 24 Punkten).",
                      "to": 3,
                      "result_color": "#2E7D32",
                      "from": 0
                    }
                  },
                  "response": {
                    "data": {
                      "response": {
                        "ASRS_6": "1",
                        "ASRS_1": "1",
                        "survey_version": "ng_survey_v1",
                        "ASRS_2": "1",
                        "ASRS_3": "1",
                        "ASRS_4": "3",
                        "ASRS_5": "3"
                      },
                      "event_id": 39088,
                      "filled": "2018-11-21T14:46:10Z"
                    },
                    "id": 24017
                  },
                  "messzeitpunkt": {
                    "mz_date": "2018-11-21T14:46:10Z",
                    "mz_datum": "21.11.2018"
                  },
                  "adhs_references": false
                }
              ],
              "name": "asrs_score"
            }
          ],
          "have_data": true,
          "loaded": true,
          "possible_data": true,
          "request": "stay",
          "pid": 3868,
          "fid": 5992,
          "app_id": "ch.suedhang.apps.asrs.production",
          "params": {
            "name": "asrs",
            "title": "",
            "subtitle": "",
            "identifier": "ch.suedhang.apps.asrs.production"
          }
        },
        "ch.suedhang.apps.aase-g.production": {
          "date": "2020-04-03T12:09:08.790Z",
          "data": [
            {
              "all_found": true,
              "app_id": "ch.suedhang.apps.aase-g.production",
              "date": "2018-11-21T15:42:10Z",
              "response_id": 24008,
              "response": {
                "AASEandere[AASE12]": "",
                "AASE[AASE20]": "0",
                "AASE[AASE9]": "1",
                "datestamp": "2018-11-21 15:42:10",
                "AASEandere[AASE11]": "",
                "AASEandere[AASE8]": "",
                "AASE[AASE18]": "1",
                "AASEandere[AASE14]": "",
                "AASEandere[AASE20]": "",
                "AASE[AASE3]": "2",
                "andererZeitpunkt": "",
                "optinomixHASH": "1b4c9237-a1d6-4888-b79f-11fd3fb7426e",
                "AASE[AASE12]": "0",
                "AASEandere[AASE2]": "",
                "AASE[AASE6]": "2",
                "AASEandere[AASE7]": "",
                "submitdate": "2018-11-21 15:42:10",
                "AASE[AASE17]": "0",
                "AASE[AASE5]": "0",
                "AASEandere[AASE4]": "",
                "AASE[AASE14]": "1",
                "AASE[AASE8]": "0",
                "AASEandere[AASE9]": "",
                "AASE[AASE19]": "1",
                "AASEandere[AASE10]": "",
                "Substanz": "1",
                "AASEandere[AASE17]": "",
                "AASE[AASE2]": "1",
                "startdate": "2018-11-21 15:37:01",
                "AASEandere[AASE3]": "",
                "AASE[AASE13]": "2",
                "AASE[AASE10]": "0",
                "AASE[AASE1]": "0",
                "AASEandere[AASE19]": "",
                "startlanguage": "de",
                "AASEandere[AASE5]": "",
                "SubstAndere": "",
                "AASE[AASE15]": "0",
                "AASE[AASE4]": "2",
                "PID": "13012",
                "id": "1022",
                "AASEandere[AASE13]": "",
                "AASEandere[AASE16]": "",
                "AASEandere[AASE15]": "",
                "FID": "130120300",
                "AASE[AASE11]": "1",
                "AASEandere[AASE1]": "",
                "AASEandere[AASE18]": "",
                "AASE[AASE16]": "2",
                "Erhebungszeitpunkt": "1",
                "AASE[AASE7]": "0",
                "AASEandere[AASE6]": "",
                "Datum": "2018-11-21 00:00:00",
                "lastpage": "3"
              },
              "event": {
                "status": "done",
                "due": "2018-11-24T14:01:34Z",
                "url": "http://optinomic.suedhang.ch:8000/limesurvey_v2/index.php/survey/index/sid/526942/newtest/Y/lang/de?&526942X68X1538=1b4c9237-a1d6-4888-b79f-11fd3fb7426e&526942X68X1539=13012&526942X68X1540=130120300",
                "patient_uses_module_id": 25423,
                "random_hash": "1b4c9237-a1d6-4888-b79f-11fd3fb7426e",
                "survey_name": "AASE-G",
                "patient_id": 3868,
                "responsibility": {
                  "type": "patient_via_assessment"
                },
                "module": "ch.suedhang.apps.aase-g.production",
                "overdue": {
                  "type": "ignore"
                },
                "created_at": "2018-11-21T14:01:34Z",
                "description": "Eintritt: Abstinenzselbstwirksamkeit - Versuchung durch Substanz",
                "id": 39086,
                "extras": {
                  "created_at": "21.11.2018",
                  "due": "24.11.2018",
                  "status": "Done",
                  "status_de": "Erledigt",
                  "show_do_it_now": false
                }
              },
              "event_found": true,
              "event_id": 39086,
              "patient": {
                "age": 51,
                "birthday": "22.10.1968",
                "birthday_age": "22.10.1968 | 51",
                "name": "Breitenmoser Dominique",
                "birth_year": 1968,
                "secure": "Br. D. (1968)",
                "ansprache": "Herr",
                "anrede": "Herr Breitenmoser",
                "full_name": "Herr Breitenmoser Dominique (22.10.1968 | 51)",
                "full_address": "Aarburgerstrasse 96, 4600 Olten",
                "phone": "",
                "infoline": "Aarburgerstrasse 96, 4600 Olten",
                "color_main": "#3F51B5",
                "color_accent": "#E91E63"
              },
              "patient_found": true,
              "patient_id": 3868,
              "stay": {
                "photo": "",
                "cis_lead_doctor": null,
                "status": "",
                "phase": "complete",
                "frozen": true,
                "first_contact": null,
                "lead_therapist_id": 66,
                "start": "2018-11-20T12:45:00Z",
                "stop_status": null,
                "insurance_number": "",
                "patient_id": 3868,
                "insurance_provider": "PTS",
                "cis_fid": 1301203,
                "stop": "2019-02-12T12:30:00Z",
                "deputy_lead_therapist_id": null,
                "notes": "",
                "service_provider": "",
                "class": "S",
                "lead_therapist_id_overwrite": null,
                "id": 5992,
                "fid": 5992,
                "extras": {
                  "in_stay": false,
                  "duration": 84,
                  "phase_de": "Die Behandlung wurde vor mehr als 14 Tage beendet",
                  "phase_en": "the stay ended more than 14 days ago",
                  "beginn": "20.11.2018",
                  "from_to": "20.11.2018 - 12.2.2019",
                  "ende": "12.2.2019"
                }
              },
              "stay_found": true,
              "stay_id": 5992,
              "patient_uses_module": {
                "settings": {},
                "stay_id": 5992,
                "patient_id": 3868,
                "responsibility": null,
                "deactivated": false,
                "module": "ch.suedhang.apps.aase-g.production",
                "overdue": null,
                "last_event_generation": "2020-04-03T12:07:52.749249Z",
                "activated_on": "2018-11-21T14:01:34Z",
                "id": 25423
              },
              "patient_uses_module_found": true,
              "patient_uses_module_id": 25423,
              "calculation": {
                "another_calculation": {
                  "hash": "1b4c9237-a1d6-4888-b79f-11fd3fb7426e",
                  "mean_somatisches_unwohlsein": 1,
                  "score_soziale_situationen": 2,
                  "mean_soziale_situationen": 0.4,
                  "mean_negativer_affekt": 1.3,
                  "score": 16,
                  "response": {
                    "data": {
                      "response": {
                        "AASEandere[AASE12]": "",
                        "AASE[AASE20]": "0",
                        "AASE[AASE9]": "1",
                        "datestamp": "2018-11-21 15:42:10",
                        "AASEandere[AASE11]": "",
                        "AASEandere[AASE8]": "",
                        "AASE[AASE18]": "1",
                        "AASEandere[AASE14]": "",
                        "AASEandere[AASE20]": "",
                        "AASE[AASE3]": "2",
                        "andererZeitpunkt": "",
                        "optinomixHASH": "1b4c9237-a1d6-4888-b79f-11fd3fb7426e",
                        "AASE[AASE12]": "0",
                        "AASEandere[AASE2]": "",
                        "AASE[AASE6]": "2",
                        "AASEandere[AASE7]": "",
                        "submitdate": "2018-11-21 15:42:10",
                        "AASE[AASE17]": "0",
                        "AASE[AASE5]": "0",
                        "AASEandere[AASE4]": "",
                        "AASE[AASE14]": "1",
                        "AASE[AASE8]": "0",
                        "AASEandere[AASE9]": "",
                        "AASE[AASE19]": "1",
                        "AASEandere[AASE10]": "",
                        "Substanz": "1",
                        "AASEandere[AASE17]": "",
                        "AASE[AASE2]": "1",
                        "startdate": "2018-11-21 15:37:01",
                        "AASEandere[AASE3]": "",
                        "AASE[AASE13]": "2",
                        "AASE[AASE10]": "0",
                        "AASE[AASE1]": "0",
                        "AASEandere[AASE19]": "",
                        "startlanguage": "de",
                        "AASEandere[AASE5]": "",
                        "SubstAndere": "",
                        "AASE[AASE15]": "0",
                        "AASE[AASE4]": "2",
                        "PID": "13012",
                        "id": "1022",
                        "AASEandere[AASE13]": "",
                        "AASEandere[AASE16]": "",
                        "AASEandere[AASE15]": "",
                        "FID": "130120300",
                        "AASE[AASE11]": "1",
                        "AASEandere[AASE1]": "",
                        "AASEandere[AASE18]": "",
                        "AASE[AASE16]": "2",
                        "Erhebungszeitpunkt": "1",
                        "AASE[AASE7]": "0",
                        "AASEandere[AASE6]": "",
                        "Datum": "2018-11-21 00:00:00",
                        "lastpage": "3"
                      },
                      "event_id": 39086,
                      "filled": "2018-11-21T15:42:10Z"
                    },
                    "id": 24008
                  },
                  "mean_entzugserscheinungen": 0.5,
                  "score_entzugserscheinungen": 3,
                  "score_negativer_affekt": 8,
                  "score_somatisches_unwohlsein": 3,
                  "score_mean": 0.8,
                  "messzeitpunkt": {
                    "mz_text_substanz": "Eintritt | Alkohol",
                    "mz_date": "2018-11-21 00:00:00",
                    "mz_id": 1,
                    "substanz": "Alkohol",
                    "mz_datum": "21.11.2018",
                    "mz_text": "Eintritt",
                    "full_text": "Am 21.11.2018 (Eintritt) wurde der AASE-G in Bezug auf «Alkohol» ausgefüllt."
                  }
                }
              },
              "calculation_found": true,
              "calculation_found_method": "variant_response"
            },
            {
              "all_found": true,
              "app_id": "ch.suedhang.apps.aase-g.production",
              "date": "2019-02-04T14:10:44Z",
              "response_id": 25307,
              "response": {
                "AASEandere[AASE12]": "",
                "AASE[AASE20]": "2",
                "AASE[AASE9]": "1",
                "datestamp": "2019-02-04 14:10:44",
                "AASEandere[AASE11]": "",
                "AASEandere[AASE8]": "",
                "AASE[AASE18]": "2",
                "AASEandere[AASE14]": "",
                "AASEandere[AASE20]": "",
                "AASE[AASE3]": "2",
                "andererZeitpunkt": "",
                "optinomixHASH": "58ea3a57-d7c8-4699-8a0d-72566d5110b50",
                "AASE[AASE12]": "0",
                "AASEandere[AASE2]": "",
                "AASE[AASE6]": "3",
                "AASEandere[AASE7]": "",
                "submitdate": "2019-02-04 14:10:44",
                "AASE[AASE17]": "0",
                "AASE[AASE5]": "1",
                "AASEandere[AASE4]": "",
                "AASE[AASE14]": "2",
                "AASE[AASE8]": "0",
                "AASEandere[AASE9]": "",
                "AASE[AASE19]": "2",
                "AASEandere[AASE10]": "",
                "Substanz": "1",
                "AASEandere[AASE17]": "",
                "AASE[AASE2]": "1",
                "startdate": "2019-02-04 14:05:11",
                "AASEandere[AASE3]": "",
                "AASE[AASE13]": "2",
                "AASE[AASE10]": "0",
                "AASE[AASE1]": "1",
                "AASEandere[AASE19]": "",
                "startlanguage": "de",
                "AASEandere[AASE5]": "",
                "SubstAndere": "",
                "AASE[AASE15]": "0",
                "AASE[AASE4]": "3",
                "PID": "13012",
                "id": "1127",
                "AASEandere[AASE13]": "",
                "AASEandere[AASE16]": "",
                "AASEandere[AASE15]": "",
                "FID": "130120300",
                "AASE[AASE11]": "0",
                "AASEandere[AASE1]": "",
                "AASEandere[AASE18]": "",
                "AASE[AASE16]": "2",
                "Erhebungszeitpunkt": "2",
                "AASE[AASE7]": "1",
                "AASEandere[AASE6]": "",
                "Datum": "2019-02-04 00:00:00",
                "lastpage": "3"
              },
              "event": {
                "status": "done",
                "due": "2019-02-05T07:00:00Z",
                "url": "http://optinomic.suedhang.ch:8000/limesurvey_v2/index.php/survey/index/sid/526942/newtest/Y/lang/de?&526942X68X1538=58ea3a57-d7c8-4699-8a0d-72566d5110b50&526942X68X1539=13012&526942X68X1540=130120300",
                "patient_uses_module_id": 25423,
                "random_hash": "58ea3a57-d7c8-4699-8a0d-72566d5110b50",
                "survey_name": "AASE-G",
                "patient_id": 3868,
                "responsibility": {
                  "type": "patient_via_assessment"
                },
                "module": "ch.suedhang.apps.aase-g.production",
                "overdue": {
                  "type": "ignore"
                },
                "created_at": "2019-02-02T07:00:00Z",
                "description": "Austritt: Abstinenzselbstwirksamkeit - Versuchung durch Substanz",
                "id": 40820,
                "extras": {
                  "created_at": "2.2.2019",
                  "due": "5.2.2019",
                  "status": "Done",
                  "status_de": "Erledigt",
                  "show_do_it_now": false
                }
              },
              "event_found": true,
              "event_id": 40820,
              "patient": {
                "age": 51,
                "birthday": "22.10.1968",
                "birthday_age": "22.10.1968 | 51",
                "name": "Breitenmoser Dominique",
                "birth_year": 1968,
                "secure": "Br. D. (1968)",
                "ansprache": "Herr",
                "anrede": "Herr Breitenmoser",
                "full_name": "Herr Breitenmoser Dominique (22.10.1968 | 51)",
                "full_address": "Aarburgerstrasse 96, 4600 Olten",
                "phone": "",
                "infoline": "Aarburgerstrasse 96, 4600 Olten",
                "color_main": "#3F51B5",
                "color_accent": "#E91E63"
              },
              "patient_found": true,
              "patient_id": 3868,
              "stay": {
                "photo": "",
                "cis_lead_doctor": null,
                "status": "",
                "phase": "complete",
                "frozen": true,
                "first_contact": null,
                "lead_therapist_id": 66,
                "start": "2018-11-20T12:45:00Z",
                "stop_status": null,
                "insurance_number": "",
                "patient_id": 3868,
                "insurance_provider": "PTS",
                "cis_fid": 1301203,
                "stop": "2019-02-12T12:30:00Z",
                "deputy_lead_therapist_id": null,
                "notes": "",
                "service_provider": "",
                "class": "S",
                "lead_therapist_id_overwrite": null,
                "id": 5992,
                "fid": 5992,
                "extras": {
                  "in_stay": false,
                  "duration": 84,
                  "phase_de": "Die Behandlung wurde vor mehr als 14 Tage beendet",
                  "phase_en": "the stay ended more than 14 days ago",
                  "beginn": "20.11.2018",
                  "from_to": "20.11.2018 - 12.2.2019",
                  "ende": "12.2.2019"
                }
              },
              "stay_found": true,
              "stay_id": 5992,
              "patient_uses_module": {
                "settings": {},
                "stay_id": 5992,
                "patient_id": 3868,
                "responsibility": null,
                "deactivated": false,
                "module": "ch.suedhang.apps.aase-g.production",
                "overdue": null,
                "last_event_generation": "2020-04-03T12:07:52.749249Z",
                "activated_on": "2018-11-21T14:01:34Z",
                "id": 25423
              },
              "patient_uses_module_found": true,
              "patient_uses_module_id": 25423,
              "calculation": {
                "another_calculation": {
                  "hash": "58ea3a57-d7c8-4699-8a0d-72566d5110b50",
                  "mean_somatisches_unwohlsein": 1,
                  "score_soziale_situationen": 5,
                  "mean_soziale_situationen": 1,
                  "mean_negativer_affekt": 2,
                  "score": 25,
                  "response": {
                    "data": {
                      "response": {
                        "AASEandere[AASE12]": "",
                        "AASE[AASE20]": "2",
                        "AASE[AASE9]": "1",
                        "datestamp": "2019-02-04 14:10:44",
                        "AASEandere[AASE11]": "",
                        "AASEandere[AASE8]": "",
                        "AASE[AASE18]": "2",
                        "AASEandere[AASE14]": "",
                        "AASEandere[AASE20]": "",
                        "AASE[AASE3]": "2",
                        "andererZeitpunkt": "",
                        "optinomixHASH": "58ea3a57-d7c8-4699-8a0d-72566d5110b50",
                        "AASE[AASE12]": "0",
                        "AASEandere[AASE2]": "",
                        "AASE[AASE6]": "3",
                        "AASEandere[AASE7]": "",
                        "submitdate": "2019-02-04 14:10:44",
                        "AASE[AASE17]": "0",
                        "AASE[AASE5]": "1",
                        "AASEandere[AASE4]": "",
                        "AASE[AASE14]": "2",
                        "AASE[AASE8]": "0",
                        "AASEandere[AASE9]": "",
                        "AASE[AASE19]": "2",
                        "AASEandere[AASE10]": "",
                        "Substanz": "1",
                        "AASEandere[AASE17]": "",
                        "AASE[AASE2]": "1",
                        "startdate": "2019-02-04 14:05:11",
                        "AASEandere[AASE3]": "",
                        "AASE[AASE13]": "2",
                        "AASE[AASE10]": "0",
                        "AASE[AASE1]": "1",
                        "AASEandere[AASE19]": "",
                        "startlanguage": "de",
                        "AASEandere[AASE5]": "",
                        "SubstAndere": "",
                        "AASE[AASE15]": "0",
                        "AASE[AASE4]": "3",
                        "PID": "13012",
                        "id": "1127",
                        "AASEandere[AASE13]": "",
                        "AASEandere[AASE16]": "",
                        "AASEandere[AASE15]": "",
                        "FID": "130120300",
                        "AASE[AASE11]": "0",
                        "AASEandere[AASE1]": "",
                        "AASEandere[AASE18]": "",
                        "AASE[AASE16]": "2",
                        "Erhebungszeitpunkt": "2",
                        "AASE[AASE7]": "1",
                        "AASEandere[AASE6]": "",
                        "Datum": "2019-02-04 00:00:00",
                        "lastpage": "3"
                      },
                      "event_id": 40820,
                      "filled": "2019-02-04T14:10:44Z"
                    },
                    "id": 25307
                  },
                  "mean_entzugserscheinungen": 0.8,
                  "score_entzugserscheinungen": 5,
                  "score_negativer_affekt": 12,
                  "score_somatisches_unwohlsein": 3,
                  "score_mean": 1.3,
                  "messzeitpunkt": {
                    "mz_text_substanz": "Austritt | Alkohol",
                    "mz_date": "2019-02-04 00:00:00",
                    "mz_id": 2,
                    "substanz": "Alkohol",
                    "mz_datum": "4.2.2019",
                    "mz_text": "Austritt",
                    "full_text": "Am 4.2.2019 (Austritt) wurde der AASE-G in Bezug auf «Alkohol» ausgefüllt."
                  }
                }
              },
              "calculation_found": true,
              "calculation_found_method": "variant_response"
            }
          ],
          "calculations_all": [
            {
              "result": [
                {
                  "hash": "58ea3a57-d7c8-4699-8a0d-72566d5110b50",
                  "mean_somatisches_unwohlsein": 1,
                  "score_soziale_situationen": 5,
                  "mean_soziale_situationen": 1,
                  "mean_negativer_affekt": 2,
                  "score": 25,
                  "response": {
                    "data": {
                      "response": {
                        "AASEandere[AASE12]": "",
                        "AASE[AASE20]": "2",
                        "AASE[AASE9]": "1",
                        "datestamp": "2019-02-04 14:10:44",
                        "AASEandere[AASE11]": "",
                        "AASEandere[AASE8]": "",
                        "AASE[AASE18]": "2",
                        "AASEandere[AASE14]": "",
                        "AASEandere[AASE20]": "",
                        "AASE[AASE3]": "2",
                        "andererZeitpunkt": "",
                        "optinomixHASH": "58ea3a57-d7c8-4699-8a0d-72566d5110b50",
                        "AASE[AASE12]": "0",
                        "AASEandere[AASE2]": "",
                        "AASE[AASE6]": "3",
                        "AASEandere[AASE7]": "",
                        "submitdate": "2019-02-04 14:10:44",
                        "AASE[AASE17]": "0",
                        "AASE[AASE5]": "1",
                        "AASEandere[AASE4]": "",
                        "AASE[AASE14]": "2",
                        "AASE[AASE8]": "0",
                        "AASEandere[AASE9]": "",
                        "AASE[AASE19]": "2",
                        "AASEandere[AASE10]": "",
                        "Substanz": "1",
                        "AASEandere[AASE17]": "",
                        "AASE[AASE2]": "1",
                        "startdate": "2019-02-04 14:05:11",
                        "AASEandere[AASE3]": "",
                        "AASE[AASE13]": "2",
                        "AASE[AASE10]": "0",
                        "AASE[AASE1]": "1",
                        "AASEandere[AASE19]": "",
                        "startlanguage": "de",
                        "AASEandere[AASE5]": "",
                        "SubstAndere": "",
                        "AASE[AASE15]": "0",
                        "AASE[AASE4]": "3",
                        "PID": "13012",
                        "id": "1127",
                        "AASEandere[AASE13]": "",
                        "AASEandere[AASE16]": "",
                        "AASEandere[AASE15]": "",
                        "FID": "130120300",
                        "AASE[AASE11]": "0",
                        "AASEandere[AASE1]": "",
                        "AASEandere[AASE18]": "",
                        "AASE[AASE16]": "2",
                        "Erhebungszeitpunkt": "2",
                        "AASE[AASE7]": "1",
                        "AASEandere[AASE6]": "",
                        "Datum": "2019-02-04 00:00:00",
                        "lastpage": "3"
                      },
                      "event_id": 40820,
                      "filled": "2019-02-04T14:10:44Z"
                    },
                    "id": 25307
                  },
                  "mean_entzugserscheinungen": 0.8,
                  "score_entzugserscheinungen": 5,
                  "score_negativer_affekt": 12,
                  "score_somatisches_unwohlsein": 3,
                  "score_mean": 1.3,
                  "messzeitpunkt": {
                    "mz_text_substanz": "Austritt | Alkohol",
                    "mz_date": "2019-02-04 00:00:00",
                    "mz_id": 2,
                    "substanz": "Alkohol",
                    "mz_datum": "4.2.2019",
                    "mz_text": "Austritt",
                    "full_text": "Am 4.2.2019 (Austritt) wurde der AASE-G in Bezug auf «Alkohol» ausgefüllt."
                  }
                },
                {
                  "hash": "1b4c9237-a1d6-4888-b79f-11fd3fb7426e",
                  "mean_somatisches_unwohlsein": 1,
                  "score_soziale_situationen": 2,
                  "mean_soziale_situationen": 0.4,
                  "mean_negativer_affekt": 1.3,
                  "score": 16,
                  "response": {
                    "data": {
                      "response": {
                        "AASEandere[AASE12]": "",
                        "AASE[AASE20]": "0",
                        "AASE[AASE9]": "1",
                        "datestamp": "2018-11-21 15:42:10",
                        "AASEandere[AASE11]": "",
                        "AASEandere[AASE8]": "",
                        "AASE[AASE18]": "1",
                        "AASEandere[AASE14]": "",
                        "AASEandere[AASE20]": "",
                        "AASE[AASE3]": "2",
                        "andererZeitpunkt": "",
                        "optinomixHASH": "1b4c9237-a1d6-4888-b79f-11fd3fb7426e",
                        "AASE[AASE12]": "0",
                        "AASEandere[AASE2]": "",
                        "AASE[AASE6]": "2",
                        "AASEandere[AASE7]": "",
                        "submitdate": "2018-11-21 15:42:10",
                        "AASE[AASE17]": "0",
                        "AASE[AASE5]": "0",
                        "AASEandere[AASE4]": "",
                        "AASE[AASE14]": "1",
                        "AASE[AASE8]": "0",
                        "AASEandere[AASE9]": "",
                        "AASE[AASE19]": "1",
                        "AASEandere[AASE10]": "",
                        "Substanz": "1",
                        "AASEandere[AASE17]": "",
                        "AASE[AASE2]": "1",
                        "startdate": "2018-11-21 15:37:01",
                        "AASEandere[AASE3]": "",
                        "AASE[AASE13]": "2",
                        "AASE[AASE10]": "0",
                        "AASE[AASE1]": "0",
                        "AASEandere[AASE19]": "",
                        "startlanguage": "de",
                        "AASEandere[AASE5]": "",
                        "SubstAndere": "",
                        "AASE[AASE15]": "0",
                        "AASE[AASE4]": "2",
                        "PID": "13012",
                        "id": "1022",
                        "AASEandere[AASE13]": "",
                        "AASEandere[AASE16]": "",
                        "AASEandere[AASE15]": "",
                        "FID": "130120300",
                        "AASE[AASE11]": "1",
                        "AASEandere[AASE1]": "",
                        "AASEandere[AASE18]": "",
                        "AASE[AASE16]": "2",
                        "Erhebungszeitpunkt": "1",
                        "AASE[AASE7]": "0",
                        "AASEandere[AASE6]": "",
                        "Datum": "2018-11-21 00:00:00",
                        "lastpage": "3"
                      },
                      "event_id": 39086,
                      "filled": "2018-11-21T15:42:10Z"
                    },
                    "id": 24008
                  },
                  "mean_entzugserscheinungen": 0.5,
                  "score_entzugserscheinungen": 3,
                  "score_negativer_affekt": 8,
                  "score_somatisches_unwohlsein": 3,
                  "score_mean": 0.8,
                  "messzeitpunkt": {
                    "mz_text_substanz": "Eintritt | Alkohol",
                    "mz_date": "2018-11-21 00:00:00",
                    "mz_id": 1,
                    "substanz": "Alkohol",
                    "mz_datum": "21.11.2018",
                    "mz_text": "Eintritt",
                    "full_text": "Am 21.11.2018 (Eintritt) wurde der AASE-G in Bezug auf «Alkohol» ausgefüllt."
                  }
                }
              ],
              "name": "another_calculation"
            }
          ],
          "have_data": true,
          "loaded": true,
          "possible_data": true,
          "request": "stay",
          "pid": 3868,
          "fid": 5992,
          "app_id": "ch.suedhang.apps.aase-g.production",
          "params": {
            "name": "aase",
            "title": "AASE-G",
            "subtitle": "Alcohol Abstinence Self-Effcacy | Skala Versuchung",
            "identifier": "ch.suedhang.apps.aase-g.production"
          },
          "module": {
            "hash": "44ad53238cafb5738fb052271ccbdc6531227a0c",
            "calculations": [
              "another_calculation"
            ],
            "readme": {
              "text": "## AASE-G (Versuchung) \n\n### Zusammenfassung\nEinschätzung von 20 Situationen auf ihre Versuchung, die Hauptproblemsubstanz zu konsumieren. Die Skala wurde ursprünglich für Alkoholabhängige konzipiert.\n\n#### Auswertung / Ergebnisse\n0 Punkte entsprechen keiner Versuchung, eine maximale Versuchung liegt bei 80 (allgemeiner Summenwert) respektive 4 (Subskalen) Punkten vor.\n\n\n",
              "parents": [
                {
                  "text": "## AASE-G (Versuchung) \n\n### Zusammenfassung\nEinschätzung von 20 Situationen auf ihre Versuchung, die Hauptproblemsubstanz zu konsumieren. Die Skala wurde ursprünglich für Alkoholabhängige konzipiert.\n\n#### Auswertung / Ergebnisse\n0 Punkte entsprechen keiner Versuchung, eine maximale Versuchung liegt bei 80 (allgemeiner Summenwert) respektive 4 (Subskalen) Punkten vor.\n\n\n",
                  "identifier": "ch.suedhang.apps.aase-g",
                  "html": "<h2>AASE-G (Versuchung)</h2><h3>Zusammenfassung</h3><p>Einschätzung von 20 Situationen auf ihre Versuchung, die Hauptproblemsubstanz zu konsumieren. Die Skala wurde ursprünglich für Alkoholabhängige konzipiert.</p><h4>Auswertung / Ergebnisse</h4><p>0 Punkte entsprechen keiner Versuchung, eine maximale Versuchung liegt bei 80 (allgemeiner Summenwert) respektive 4 (Subskalen) Punkten vor.</p>"
                }
              ],
              "html": "<h2>AASE-G (Versuchung)</h2><h3>Zusammenfassung</h3><p>Einschätzung von 20 Situationen auf ihre Versuchung, die Hauptproblemsubstanz zu konsumieren. Die Skala wurde ursprünglich für Alkoholabhängige konzipiert.</p><h4>Auswertung / Ergebnisse</h4><p>0 Punkte entsprechen keiner Versuchung, eine maximale Versuchung liegt bei 80 (allgemeiner Summenwert) respektive 4 (Subskalen) Punkten vor.</p>"
            },
            "surveys": [
              {
                "identifier": "aase",
                "name": "AASE-G"
              }
            ],
            "templates": [
              {
                "height": 12,
                "width": 6,
                "name": "AASE"
              }
            ],
            "identifier": "ch.suedhang.apps.aase-g.production",
            "pdf_templates": [],
            "data_source_queries": [],
            "original_name": "AASE-G",
            "dependencies": [],
            "name": "AASE-G",
            "events": [
              {
                "due_after": 259200,
                "survey": "aase",
                "name": "activation",
                "time_spec": {
                  "type": "on_activation"
                },
                "overdue": {
                  "type": "ignore"
                },
                "description": "Eintritt: Abstinenzselbstwirksamkeit - Versuchung durch Substanz"
              },
              {
                "due_after": 259200,
                "survey": "aase",
                "name": "exit",
                "time_spec": {
                  "days": 10,
                  "time": "08:00:00",
                  "type": "before_exit"
                },
                "overdue": {
                  "type": "ignore"
                },
                "description": "Austritt: Abstinenzselbstwirksamkeit - Versuchung durch Substanz"
              }
            ],
            "version": "1.0",
            "type": "patient",
            "short_description": "Versuchung in spezifischen Situationen",
            "database_schema_name": "ch_suedhang_apps_aase_g_production",
            "database_user_name": "ch_suedhang_apps_aase_g_production",
            "description": "",
            "developer": {
              "email": "nora.schoenenberger@suedhang.ch",
              "phone": "+41 (0)31 828 14 92",
              "first_name": "Nora",
              "website": "http://suedhang.ch/de/Forschung",
              "company": "Suedhang",
              "last_name": "Schönenberger",
              "github_user": "schoenenb"
            }
          }
        },
        "ch.suedhang.apps.isk.production": {
          "date": "2020-04-03T12:09:08.800Z",
          "data": [
            {
              "all_found": true,
              "app_id": "ch.suedhang.apps.isk.production",
              "date": "2018-11-21T16:15:07Z",
              "response_id": 24045,
              "response": {
                "AISK[AIS10]": "3",
                "AISK[AIS32]": "3",
                "datestamp": "2018-11-21 16:15:07",
                "AISK[AIS28]": "2",
                "AISK[AISK9]": "1",
                "AISK[AIS31]": "3",
                "AISK[AIS13]": "3",
                "AISK[AIS16]": "2",
                "AISK[AIS22]": "2",
                "andererZeitpunkt": "",
                "AISK[AISK3]": "2",
                "optinomixHASH": "c603b640-d603-4364-8fed-b577c3b6e935",
                "AISK[AIS19]": "2",
                "AISK[AIS27]": "2",
                "submitdate": "2018-11-21 16:15:07",
                "AISK[AISK6]": "2",
                "AISK[AISK5]": "1",
                "AISK[AIS24]": "2",
                "AISK[AISK8]": "3",
                "AISK[AIS29]": "2",
                "AISK[AIS30]": "2",
                "AISK[AIS12]": "3",
                "AISK[AIS15]": "2",
                "AISK[AISK2]": "2",
                "startdate": "2018-11-21 16:01:37",
                "AISK[AIS23]": "2",
                "AISK[AIS18]": "1",
                "AISK[AISK1]": "3",
                "AISK[AIS20]": "2",
                "startlanguage": "de",
                "AISK[AISK4]": "2",
                "AISK[AIS25]": "2",
                "PID": "13012",
                "AISK[AIS11]": "3",
                "AISK[AIS33]": "2",
                "id": "976",
                "AISK[AIS14]": "3",
                "AISK[AIS17]": "2",
                "FID": "130120300",
                "AISK[AIS21]": "2",
                "AISK[AIS26]": "3",
                "Erhebungszeitpunkt": "1",
                "Datum": "2018-11-21 00:00:00",
                "AISK[AISK7]": "3",
                "lastpage": "3"
              },
              "event": {
                "status": "done",
                "due": "2018-11-24T14:01:44Z",
                "url": "http://optinomic.suedhang.ch:8000/limesurvey_v2/index.php/survey/index/sid/824558/newtest/Y/lang/de?&824558X45X1292=c603b640-d603-4364-8fed-b577c3b6e935&824558X45X1293=13012&824558X45X1294=130120300",
                "patient_uses_module_id": 25432,
                "random_hash": "c603b640-d603-4364-8fed-b577c3b6e935",
                "survey_name": "ISK-K",
                "patient_id": 3868,
                "responsibility": {
                  "type": "patient_via_assessment"
                },
                "module": "ch.suedhang.apps.isk.production",
                "overdue": {
                  "type": "ignore"
                },
                "created_at": "2018-11-21T14:01:44Z",
                "description": "Eintritt: Inventar Sozialer Kompetenzen (ISK)",
                "id": 39092,
                "extras": {
                  "created_at": "21.11.2018",
                  "due": "24.11.2018",
                  "status": "Done",
                  "status_de": "Erledigt",
                  "show_do_it_now": false
                }
              },
              "event_found": true,
              "event_id": 39092,
              "patient": {
                "age": 51,
                "birthday": "22.10.1968",
                "birthday_age": "22.10.1968 | 51",
                "name": "Breitenmoser Dominique",
                "birth_year": 1968,
                "secure": "Br. D. (1968)",
                "ansprache": "Herr",
                "anrede": "Herr Breitenmoser",
                "full_name": "Herr Breitenmoser Dominique (22.10.1968 | 51)",
                "full_address": "Aarburgerstrasse 96, 4600 Olten",
                "phone": "",
                "infoline": "Aarburgerstrasse 96, 4600 Olten",
                "color_main": "#3F51B5",
                "color_accent": "#E91E63"
              },
              "patient_found": true,
              "patient_id": 3868,
              "stay": {
                "photo": "",
                "cis_lead_doctor": null,
                "status": "",
                "phase": "complete",
                "frozen": true,
                "first_contact": null,
                "lead_therapist_id": 66,
                "start": "2018-11-20T12:45:00Z",
                "stop_status": null,
                "insurance_number": "",
                "patient_id": 3868,
                "insurance_provider": "PTS",
                "cis_fid": 1301203,
                "stop": "2019-02-12T12:30:00Z",
                "deputy_lead_therapist_id": null,
                "notes": "",
                "service_provider": "",
                "class": "S",
                "lead_therapist_id_overwrite": null,
                "id": 5992,
                "fid": 5992,
                "extras": {
                  "in_stay": false,
                  "duration": 84,
                  "phase_de": "Die Behandlung wurde vor mehr als 14 Tage beendet",
                  "phase_en": "the stay ended more than 14 days ago",
                  "beginn": "20.11.2018",
                  "from_to": "20.11.2018 - 12.2.2019",
                  "ende": "12.2.2019"
                }
              },
              "stay_found": true,
              "stay_id": 5992,
              "patient_uses_module": {
                "settings": {},
                "stay_id": 5992,
                "patient_id": 3868,
                "responsibility": null,
                "deactivated": false,
                "module": "ch.suedhang.apps.isk.production",
                "overdue": null,
                "last_event_generation": "2020-04-03T12:08:57.32371Z",
                "activated_on": "2018-11-21T14:01:44Z",
                "id": 25432
              },
              "patient_uses_module_found": true,
              "patient_uses_module_id": 25432,
              "calculation": {
                "scores_calculation": {
                  "all_results": {
                    "reflexibilit__t_scale_score": 2.57,
                    "offensivit__t_sum_score": 16,
                    "reflexibilit__t_z_score": -0.77,
                    "selbststeuerung_sum_score": 20,
                    "soziale_orientierung_z_score": -2.23,
                    "soziale_orientierung_scale_score": 2.1,
                    "reflexibilit__t_sum_score": 18,
                    "soziale_orientierung_sum_score": 21,
                    "offensivit__t_z_score": -1.47,
                    "selbststeuerung_scale_score": 2.5,
                    "offensivit__t_scale_score": 2,
                    "selbststeuerung_z_score": -0.33
                  },
                  "result_array": [
                    {
                      "items": 10,
                      "result": {
                        "scale_score": 2.1,
                        "z_score": -2.23,
                        "sum_score": 21
                      },
                      "m_norm": 29.5,
                      "id": 0,
                      "sub_left": "Auf den eigenen Vorteil bedacht sein, sich nicht für andere interessieren und deren Meinung ignorieren oder gering schätzen",
                      "short_description": "soziale_orientierung",
                      "sub_right": "Überinvolviert, zu schnelle Kompromissbereitschaft",
                      "full": "Sich für andere Menschen einsetzen, aufmerksam und hilfsbereit sein, andere Meinungen tolerieren und Kompromisse anstreben.",
                      "sd_norm": 3.82,
                      "description": "Soziale Orientierung"
                    },
                    {
                      "items": 8,
                      "result": {
                        "scale_score": 2,
                        "z_score": -1.47,
                        "sum_score": 16
                      },
                      "m_norm": 21.15,
                      "id": 1,
                      "sub_left": "Sich sozial isolieren, Konflikten aus dem Weg gehen, sich unterordnen, Entscheidungen vor sich her schieben",
                      "short_description": "offensivit__t",
                      "sub_right": "Streitlustig, unüberlegte Entscheidungen",
                      "full": "Auf andere Menschen zugehen und dabei Konflikte nicht scheuen, Entscheidungen treffen, eigene Interessen tatkräftig verwirklichen.",
                      "sd_norm": 3.5,
                      "description": "Offensivität"
                    },
                    {
                      "items": 8,
                      "result": {
                        "scale_score": 2.5,
                        "z_score": -0.33,
                        "sum_score": 20
                      },
                      "m_norm": 21.3,
                      "id": 2,
                      "sub_left": "Sich treiben lassen, in seinem Handeln von ggf. stark schwankenden Emotionen bestimmt sein und die Verantwortung für das eigene Leben in der Umwelt ansiedeln",
                      "short_description": "selbststeuerung",
                      "sub_right": "Zwanghafte Selbstkontrolle",
                      "full": "Rational handeln, sich nicht von Emotionen bestimmen lassen, die Verantwortung für das Leben bei sich selbst sehen.",
                      "sd_norm": 3.92,
                      "description": "Selbststeuerung"
                    },
                    {
                      "items": 7,
                      "result": {
                        "scale_score": 2.57,
                        "z_score": -0.77,
                        "sum_score": 18
                      },
                      "m_norm": 20.25,
                      "id": 3,
                      "sub_left": "Sich nicht mit seinem Verhalten auseinandersetzten, gleichgültig gegenüber dem Verhalten und Erleben anderer Menschen",
                      "short_description": "reflexibilit__t",
                      "sub_right": "Zwanghafte Selbstdarstellung, Rigidität",
                      "full": "Das eigene Verhalten und die Wirkung auf andere reflektieren und gegebenenfalls gezielt steuern, sich für andere Menschen interessieren.",
                      "sd_norm": 2.94,
                      "description": "Reflexibilität"
                    }
                  ],
                  "info": {
                    "hash": "c603b640-d603-4364-8fed-b577c3b6e935",
                    "response": {
                      "AISK[AIS10]": "3",
                      "AISK[AIS32]": "3",
                      "datestamp": "2018-11-21 16:15:07",
                      "AISK[AIS28]": "2",
                      "AISK[AISK9]": "1",
                      "AISK[AIS31]": "3",
                      "AISK[AIS13]": "3",
                      "AISK[AIS16]": "2",
                      "AISK[AIS22]": "2",
                      "andererZeitpunkt": "",
                      "AISK[AISK3]": "2",
                      "optinomixHASH": "c603b640-d603-4364-8fed-b577c3b6e935",
                      "AISK[AIS19]": "2",
                      "AISK[AIS27]": "2",
                      "submitdate": "2018-11-21 16:15:07",
                      "AISK[AISK6]": "2",
                      "AISK[AISK5]": "1",
                      "AISK[AIS24]": "2",
                      "AISK[AISK8]": "3",
                      "AISK[AIS29]": "2",
                      "AISK[AIS30]": "2",
                      "AISK[AIS12]": "3",
                      "AISK[AIS15]": "2",
                      "AISK[AISK2]": "2",
                      "startdate": "2018-11-21 16:01:37",
                      "AISK[AIS23]": "2",
                      "AISK[AIS18]": "1",
                      "AISK[AISK1]": "3",
                      "AISK[AIS20]": "2",
                      "startlanguage": "de",
                      "AISK[AISK4]": "2",
                      "AISK[AIS25]": "2",
                      "PID": "13012",
                      "AISK[AIS11]": "3",
                      "AISK[AIS33]": "2",
                      "id": "976",
                      "AISK[AIS14]": "3",
                      "AISK[AIS17]": "2",
                      "FID": "130120300",
                      "AISK[AIS21]": "2",
                      "AISK[AIS26]": "3",
                      "Erhebungszeitpunkt": "1",
                      "Datum": "2018-11-21 00:00:00",
                      "AISK[AISK7]": "3",
                      "lastpage": "3"
                    },
                    "mz": {
                      "mz_typ": "Eintritt",
                      "mz_id": 1,
                      "mz_text": "Eintritt - Entwöhnungstherapie"
                    },
                    "event_id": 39092,
                    "filled": "2018-11-21T16:15:07Z",
                    "response_id": 24045
                  },
                  "definitions": {
                    "result_array": [
                      {
                        "items": 10,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": 29.5,
                        "id": 0,
                        "sub_left": "Auf den eigenen Vorteil bedacht sein, sich nicht für andere interessieren und deren Meinung ignorieren oder gering schätzen",
                        "short_description": "soziale_orientierung",
                        "sub_right": "Überinvolviert, zu schnelle Kompromissbereitschaft",
                        "full": "Sich für andere Menschen einsetzen, aufmerksam und hilfsbereit sein, andere Meinungen tolerieren und Kompromisse anstreben.",
                        "sd_norm": 3.82,
                        "description": "Soziale Orientierung"
                      },
                      {
                        "items": 8,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": 21.15,
                        "id": 1,
                        "sub_left": "Sich sozial isolieren, Konflikten aus dem Weg gehen, sich unterordnen, Entscheidungen vor sich her schieben",
                        "short_description": "offensivit__t",
                        "sub_right": "Streitlustig, unüberlegte Entscheidungen",
                        "full": "Auf andere Menschen zugehen und dabei Konflikte nicht scheuen, Entscheidungen treffen, eigene Interessen tatkräftig verwirklichen.",
                        "sd_norm": 3.5,
                        "description": "Offensivität"
                      },
                      {
                        "items": 8,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": 21.3,
                        "id": 2,
                        "sub_left": "Sich treiben lassen, in seinem Handeln von ggf. stark schwankenden Emotionen bestimmt sein und die Verantwortung für das eigene Leben in der Umwelt ansiedeln",
                        "short_description": "selbststeuerung",
                        "sub_right": "Zwanghafte Selbstkontrolle",
                        "full": "Rational handeln, sich nicht von Emotionen bestimmen lassen, die Verantwortung für das Leben bei sich selbst sehen.",
                        "sd_norm": 3.92,
                        "description": "Selbststeuerung"
                      },
                      {
                        "items": 7,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": 20.25,
                        "id": 3,
                        "sub_left": "Sich nicht mit seinem Verhalten auseinandersetzten, gleichgültig gegenüber dem Verhalten und Erleben anderer Menschen",
                        "short_description": "reflexibilit__t",
                        "sub_right": "Zwanghafte Selbstdarstellung, Rigidität",
                        "full": "Das eigene Verhalten und die Wirkung auf andere reflektieren und gegebenenfalls gezielt steuern, sich für andere Menschen interessieren.",
                        "sd_norm": 2.94,
                        "description": "Reflexibilität"
                      }
                    ],
                    "variables": [
                      "sum_score",
                      "scale_score",
                      "z_score"
                    ],
                    "all_results_variables": [
                      "soziale_orientierung_sum_score",
                      "soziale_orientierung_scale_score",
                      "soziale_orientierung_z_score",
                      "offensivit__t_sum_score",
                      "offensivit__t_scale_score",
                      "offensivit__t_z_score",
                      "selbststeuerung_sum_score",
                      "selbststeuerung_scale_score",
                      "selbststeuerung_z_score",
                      "reflexibilit__t_sum_score",
                      "reflexibilit__t_scale_score",
                      "reflexibilit__t_z_score"
                    ]
                  }
                }
              },
              "calculation_found": true,
              "calculation_found_method": "variant_info"
            },
            {
              "all_found": true,
              "app_id": "ch.suedhang.apps.isk.production",
              "date": "2019-02-04T13:36:50Z",
              "response_id": 25275,
              "response": {
                "AISK[AIS10]": "2",
                "AISK[AIS32]": "3",
                "datestamp": "2019-02-04 13:36:50",
                "AISK[AIS28]": "3",
                "AISK[AISK9]": "2",
                "AISK[AIS31]": "3",
                "AISK[AIS13]": "3",
                "AISK[AIS16]": "2",
                "AISK[AIS22]": "3",
                "andererZeitpunkt": "",
                "AISK[AISK3]": "2",
                "optinomixHASH": "66611895-d8c5-434d-b5bc-c627daae76de0",
                "AISK[AIS19]": "2",
                "AISK[AIS27]": "2",
                "submitdate": "2019-02-04 13:36:50",
                "AISK[AISK6]": "2",
                "AISK[AISK5]": "3",
                "AISK[AIS24]": "2",
                "AISK[AISK8]": "3",
                "AISK[AIS29]": "2",
                "AISK[AIS30]": "3",
                "AISK[AIS12]": "2",
                "AISK[AIS15]": "2",
                "AISK[AISK2]": "2",
                "startdate": "2019-02-04 13:28:07",
                "AISK[AIS23]": "2",
                "AISK[AIS18]": "1",
                "AISK[AISK1]": "3",
                "AISK[AIS20]": "2",
                "startlanguage": "de",
                "AISK[AISK4]": "3",
                "AISK[AIS25]": "3",
                "PID": "13012",
                "AISK[AIS11]": "3",
                "AISK[AIS33]": "2",
                "id": "1070",
                "AISK[AIS14]": "2",
                "AISK[AIS17]": "1",
                "FID": "130120300",
                "AISK[AIS21]": "3",
                "AISK[AIS26]": "2",
                "Erhebungszeitpunkt": "2",
                "Datum": "2019-02-04 00:00:00",
                "AISK[AISK7]": "3",
                "lastpage": "3"
              },
              "event": {
                "status": "done",
                "due": "2019-02-05T07:00:00Z",
                "url": "http://optinomic.suedhang.ch:8000/limesurvey_v2/index.php/survey/index/sid/824558/newtest/Y/lang/de?&824558X45X1292=66611895-d8c5-434d-b5bc-c627daae76de0&824558X45X1293=13012&824558X45X1294=130120300",
                "patient_uses_module_id": 25432,
                "random_hash": "66611895-d8c5-434d-b5bc-c627daae76de0",
                "survey_name": "ISK-K",
                "patient_id": 3868,
                "responsibility": {
                  "type": "patient_via_assessment"
                },
                "module": "ch.suedhang.apps.isk.production",
                "overdue": {
                  "type": "ignore"
                },
                "created_at": "2019-02-02T07:00:00Z",
                "description": "Austritt: Inventar Sozialer Kompetenzen (ISK)",
                "id": 40804,
                "extras": {
                  "created_at": "2.2.2019",
                  "due": "5.2.2019",
                  "status": "Done",
                  "status_de": "Erledigt",
                  "show_do_it_now": false
                }
              },
              "event_found": true,
              "event_id": 40804,
              "patient": {
                "age": 51,
                "birthday": "22.10.1968",
                "birthday_age": "22.10.1968 | 51",
                "name": "Breitenmoser Dominique",
                "birth_year": 1968,
                "secure": "Br. D. (1968)",
                "ansprache": "Herr",
                "anrede": "Herr Breitenmoser",
                "full_name": "Herr Breitenmoser Dominique (22.10.1968 | 51)",
                "full_address": "Aarburgerstrasse 96, 4600 Olten",
                "phone": "",
                "infoline": "Aarburgerstrasse 96, 4600 Olten",
                "color_main": "#3F51B5",
                "color_accent": "#E91E63"
              },
              "patient_found": true,
              "patient_id": 3868,
              "stay": {
                "photo": "",
                "cis_lead_doctor": null,
                "status": "",
                "phase": "complete",
                "frozen": true,
                "first_contact": null,
                "lead_therapist_id": 66,
                "start": "2018-11-20T12:45:00Z",
                "stop_status": null,
                "insurance_number": "",
                "patient_id": 3868,
                "insurance_provider": "PTS",
                "cis_fid": 1301203,
                "stop": "2019-02-12T12:30:00Z",
                "deputy_lead_therapist_id": null,
                "notes": "",
                "service_provider": "",
                "class": "S",
                "lead_therapist_id_overwrite": null,
                "id": 5992,
                "fid": 5992,
                "extras": {
                  "in_stay": false,
                  "duration": 84,
                  "phase_de": "Die Behandlung wurde vor mehr als 14 Tage beendet",
                  "phase_en": "the stay ended more than 14 days ago",
                  "beginn": "20.11.2018",
                  "from_to": "20.11.2018 - 12.2.2019",
                  "ende": "12.2.2019"
                }
              },
              "stay_found": true,
              "stay_id": 5992,
              "patient_uses_module": {
                "settings": {},
                "stay_id": 5992,
                "patient_id": 3868,
                "responsibility": null,
                "deactivated": false,
                "module": "ch.suedhang.apps.isk.production",
                "overdue": null,
                "last_event_generation": "2020-04-03T12:08:57.32371Z",
                "activated_on": "2018-11-21T14:01:44Z",
                "id": 25432
              },
              "patient_uses_module_found": true,
              "patient_uses_module_id": 25432,
              "calculation": {
                "scores_calculation": {
                  "all_results": {
                    "reflexibilit__t_scale_score": 3,
                    "offensivit__t_sum_score": 18,
                    "reflexibilit__t_z_score": 0.26,
                    "selbststeuerung_sum_score": 20,
                    "soziale_orientierung_z_score": -1.44,
                    "soziale_orientierung_scale_score": 2.4,
                    "reflexibilit__t_sum_score": 21,
                    "soziale_orientierung_sum_score": 24,
                    "offensivit__t_z_score": -0.9,
                    "selbststeuerung_scale_score": 2.5,
                    "offensivit__t_scale_score": 2.25,
                    "selbststeuerung_z_score": -0.33
                  },
                  "result_array": [
                    {
                      "items": 10,
                      "result": {
                        "scale_score": 2.4,
                        "z_score": -1.44,
                        "sum_score": 24
                      },
                      "m_norm": 29.5,
                      "id": 0,
                      "sub_left": "Auf den eigenen Vorteil bedacht sein, sich nicht für andere interessieren und deren Meinung ignorieren oder gering schätzen",
                      "short_description": "soziale_orientierung",
                      "sub_right": "Überinvolviert, zu schnelle Kompromissbereitschaft",
                      "full": "Sich für andere Menschen einsetzen, aufmerksam und hilfsbereit sein, andere Meinungen tolerieren und Kompromisse anstreben.",
                      "sd_norm": 3.82,
                      "description": "Soziale Orientierung"
                    },
                    {
                      "items": 8,
                      "result": {
                        "scale_score": 2.25,
                        "z_score": -0.9,
                        "sum_score": 18
                      },
                      "m_norm": 21.15,
                      "id": 1,
                      "sub_left": "Sich sozial isolieren, Konflikten aus dem Weg gehen, sich unterordnen, Entscheidungen vor sich her schieben",
                      "short_description": "offensivit__t",
                      "sub_right": "Streitlustig, unüberlegte Entscheidungen",
                      "full": "Auf andere Menschen zugehen und dabei Konflikte nicht scheuen, Entscheidungen treffen, eigene Interessen tatkräftig verwirklichen.",
                      "sd_norm": 3.5,
                      "description": "Offensivität"
                    },
                    {
                      "items": 8,
                      "result": {
                        "scale_score": 2.5,
                        "z_score": -0.33,
                        "sum_score": 20
                      },
                      "m_norm": 21.3,
                      "id": 2,
                      "sub_left": "Sich treiben lassen, in seinem Handeln von ggf. stark schwankenden Emotionen bestimmt sein und die Verantwortung für das eigene Leben in der Umwelt ansiedeln",
                      "short_description": "selbststeuerung",
                      "sub_right": "Zwanghafte Selbstkontrolle",
                      "full": "Rational handeln, sich nicht von Emotionen bestimmen lassen, die Verantwortung für das Leben bei sich selbst sehen.",
                      "sd_norm": 3.92,
                      "description": "Selbststeuerung"
                    },
                    {
                      "items": 7,
                      "result": {
                        "scale_score": 3,
                        "z_score": 0.26,
                        "sum_score": 21
                      },
                      "m_norm": 20.25,
                      "id": 3,
                      "sub_left": "Sich nicht mit seinem Verhalten auseinandersetzten, gleichgültig gegenüber dem Verhalten und Erleben anderer Menschen",
                      "short_description": "reflexibilit__t",
                      "sub_right": "Zwanghafte Selbstdarstellung, Rigidität",
                      "full": "Das eigene Verhalten und die Wirkung auf andere reflektieren und gegebenenfalls gezielt steuern, sich für andere Menschen interessieren.",
                      "sd_norm": 2.94,
                      "description": "Reflexibilität"
                    }
                  ],
                  "info": {
                    "hash": "66611895-d8c5-434d-b5bc-c627daae76de0",
                    "response": {
                      "AISK[AIS10]": "2",
                      "AISK[AIS32]": "3",
                      "datestamp": "2019-02-04 13:36:50",
                      "AISK[AIS28]": "3",
                      "AISK[AISK9]": "2",
                      "AISK[AIS31]": "3",
                      "AISK[AIS13]": "3",
                      "AISK[AIS16]": "2",
                      "AISK[AIS22]": "3",
                      "andererZeitpunkt": "",
                      "AISK[AISK3]": "2",
                      "optinomixHASH": "66611895-d8c5-434d-b5bc-c627daae76de0",
                      "AISK[AIS19]": "2",
                      "AISK[AIS27]": "2",
                      "submitdate": "2019-02-04 13:36:50",
                      "AISK[AISK6]": "2",
                      "AISK[AISK5]": "3",
                      "AISK[AIS24]": "2",
                      "AISK[AISK8]": "3",
                      "AISK[AIS29]": "2",
                      "AISK[AIS30]": "3",
                      "AISK[AIS12]": "2",
                      "AISK[AIS15]": "2",
                      "AISK[AISK2]": "2",
                      "startdate": "2019-02-04 13:28:07",
                      "AISK[AIS23]": "2",
                      "AISK[AIS18]": "1",
                      "AISK[AISK1]": "3",
                      "AISK[AIS20]": "2",
                      "startlanguage": "de",
                      "AISK[AISK4]": "3",
                      "AISK[AIS25]": "3",
                      "PID": "13012",
                      "AISK[AIS11]": "3",
                      "AISK[AIS33]": "2",
                      "id": "1070",
                      "AISK[AIS14]": "2",
                      "AISK[AIS17]": "1",
                      "FID": "130120300",
                      "AISK[AIS21]": "3",
                      "AISK[AIS26]": "2",
                      "Erhebungszeitpunkt": "2",
                      "Datum": "2019-02-04 00:00:00",
                      "AISK[AISK7]": "3",
                      "lastpage": "3"
                    },
                    "mz": {
                      "mz_typ": "Austritt",
                      "mz_id": 2,
                      "mz_text": "Austritt - Entwöhnungstherapie"
                    },
                    "event_id": 40804,
                    "filled": "2019-02-04T13:36:50Z",
                    "response_id": 25275
                  },
                  "definitions": {
                    "result_array": [
                      {
                        "items": 10,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": 29.5,
                        "id": 0,
                        "sub_left": "Auf den eigenen Vorteil bedacht sein, sich nicht für andere interessieren und deren Meinung ignorieren oder gering schätzen",
                        "short_description": "soziale_orientierung",
                        "sub_right": "Überinvolviert, zu schnelle Kompromissbereitschaft",
                        "full": "Sich für andere Menschen einsetzen, aufmerksam und hilfsbereit sein, andere Meinungen tolerieren und Kompromisse anstreben.",
                        "sd_norm": 3.82,
                        "description": "Soziale Orientierung"
                      },
                      {
                        "items": 8,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": 21.15,
                        "id": 1,
                        "sub_left": "Sich sozial isolieren, Konflikten aus dem Weg gehen, sich unterordnen, Entscheidungen vor sich her schieben",
                        "short_description": "offensivit__t",
                        "sub_right": "Streitlustig, unüberlegte Entscheidungen",
                        "full": "Auf andere Menschen zugehen und dabei Konflikte nicht scheuen, Entscheidungen treffen, eigene Interessen tatkräftig verwirklichen.",
                        "sd_norm": 3.5,
                        "description": "Offensivität"
                      },
                      {
                        "items": 8,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": 21.3,
                        "id": 2,
                        "sub_left": "Sich treiben lassen, in seinem Handeln von ggf. stark schwankenden Emotionen bestimmt sein und die Verantwortung für das eigene Leben in der Umwelt ansiedeln",
                        "short_description": "selbststeuerung",
                        "sub_right": "Zwanghafte Selbstkontrolle",
                        "full": "Rational handeln, sich nicht von Emotionen bestimmen lassen, die Verantwortung für das Leben bei sich selbst sehen.",
                        "sd_norm": 3.92,
                        "description": "Selbststeuerung"
                      },
                      {
                        "items": 7,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": 20.25,
                        "id": 3,
                        "sub_left": "Sich nicht mit seinem Verhalten auseinandersetzten, gleichgültig gegenüber dem Verhalten und Erleben anderer Menschen",
                        "short_description": "reflexibilit__t",
                        "sub_right": "Zwanghafte Selbstdarstellung, Rigidität",
                        "full": "Das eigene Verhalten und die Wirkung auf andere reflektieren und gegebenenfalls gezielt steuern, sich für andere Menschen interessieren.",
                        "sd_norm": 2.94,
                        "description": "Reflexibilität"
                      }
                    ],
                    "variables": [
                      "sum_score",
                      "scale_score",
                      "z_score"
                    ],
                    "all_results_variables": [
                      "soziale_orientierung_sum_score",
                      "soziale_orientierung_scale_score",
                      "soziale_orientierung_z_score",
                      "offensivit__t_sum_score",
                      "offensivit__t_scale_score",
                      "offensivit__t_z_score",
                      "selbststeuerung_sum_score",
                      "selbststeuerung_scale_score",
                      "selbststeuerung_z_score",
                      "reflexibilit__t_sum_score",
                      "reflexibilit__t_scale_score",
                      "reflexibilit__t_z_score"
                    ]
                  }
                }
              },
              "calculation_found": true,
              "calculation_found_method": "variant_info"
            }
          ],
          "calculations_all": [
            {
              "result": [
                {
                  "all_results": {
                    "reflexibilit__t_scale_score": 3,
                    "offensivit__t_sum_score": 18,
                    "reflexibilit__t_z_score": 0.26,
                    "selbststeuerung_sum_score": 20,
                    "soziale_orientierung_z_score": -1.44,
                    "soziale_orientierung_scale_score": 2.4,
                    "reflexibilit__t_sum_score": 21,
                    "soziale_orientierung_sum_score": 24,
                    "offensivit__t_z_score": -0.9,
                    "selbststeuerung_scale_score": 2.5,
                    "offensivit__t_scale_score": 2.25,
                    "selbststeuerung_z_score": -0.33
                  },
                  "result_array": [
                    {
                      "items": 10,
                      "result": {
                        "scale_score": 2.4,
                        "z_score": -1.44,
                        "sum_score": 24
                      },
                      "m_norm": 29.5,
                      "id": 0,
                      "sub_left": "Auf den eigenen Vorteil bedacht sein, sich nicht für andere interessieren und deren Meinung ignorieren oder gering schätzen",
                      "short_description": "soziale_orientierung",
                      "sub_right": "Überinvolviert, zu schnelle Kompromissbereitschaft",
                      "full": "Sich für andere Menschen einsetzen, aufmerksam und hilfsbereit sein, andere Meinungen tolerieren und Kompromisse anstreben.",
                      "sd_norm": 3.82,
                      "description": "Soziale Orientierung"
                    },
                    {
                      "items": 8,
                      "result": {
                        "scale_score": 2.25,
                        "z_score": -0.9,
                        "sum_score": 18
                      },
                      "m_norm": 21.15,
                      "id": 1,
                      "sub_left": "Sich sozial isolieren, Konflikten aus dem Weg gehen, sich unterordnen, Entscheidungen vor sich her schieben",
                      "short_description": "offensivit__t",
                      "sub_right": "Streitlustig, unüberlegte Entscheidungen",
                      "full": "Auf andere Menschen zugehen und dabei Konflikte nicht scheuen, Entscheidungen treffen, eigene Interessen tatkräftig verwirklichen.",
                      "sd_norm": 3.5,
                      "description": "Offensivität"
                    },
                    {
                      "items": 8,
                      "result": {
                        "scale_score": 2.5,
                        "z_score": -0.33,
                        "sum_score": 20
                      },
                      "m_norm": 21.3,
                      "id": 2,
                      "sub_left": "Sich treiben lassen, in seinem Handeln von ggf. stark schwankenden Emotionen bestimmt sein und die Verantwortung für das eigene Leben in der Umwelt ansiedeln",
                      "short_description": "selbststeuerung",
                      "sub_right": "Zwanghafte Selbstkontrolle",
                      "full": "Rational handeln, sich nicht von Emotionen bestimmen lassen, die Verantwortung für das Leben bei sich selbst sehen.",
                      "sd_norm": 3.92,
                      "description": "Selbststeuerung"
                    },
                    {
                      "items": 7,
                      "result": {
                        "scale_score": 3,
                        "z_score": 0.26,
                        "sum_score": 21
                      },
                      "m_norm": 20.25,
                      "id": 3,
                      "sub_left": "Sich nicht mit seinem Verhalten auseinandersetzten, gleichgültig gegenüber dem Verhalten und Erleben anderer Menschen",
                      "short_description": "reflexibilit__t",
                      "sub_right": "Zwanghafte Selbstdarstellung, Rigidität",
                      "full": "Das eigene Verhalten und die Wirkung auf andere reflektieren und gegebenenfalls gezielt steuern, sich für andere Menschen interessieren.",
                      "sd_norm": 2.94,
                      "description": "Reflexibilität"
                    }
                  ],
                  "info": {
                    "hash": "66611895-d8c5-434d-b5bc-c627daae76de0",
                    "response": {
                      "AISK[AIS10]": "2",
                      "AISK[AIS32]": "3",
                      "datestamp": "2019-02-04 13:36:50",
                      "AISK[AIS28]": "3",
                      "AISK[AISK9]": "2",
                      "AISK[AIS31]": "3",
                      "AISK[AIS13]": "3",
                      "AISK[AIS16]": "2",
                      "AISK[AIS22]": "3",
                      "andererZeitpunkt": "",
                      "AISK[AISK3]": "2",
                      "optinomixHASH": "66611895-d8c5-434d-b5bc-c627daae76de0",
                      "AISK[AIS19]": "2",
                      "AISK[AIS27]": "2",
                      "submitdate": "2019-02-04 13:36:50",
                      "AISK[AISK6]": "2",
                      "AISK[AISK5]": "3",
                      "AISK[AIS24]": "2",
                      "AISK[AISK8]": "3",
                      "AISK[AIS29]": "2",
                      "AISK[AIS30]": "3",
                      "AISK[AIS12]": "2",
                      "AISK[AIS15]": "2",
                      "AISK[AISK2]": "2",
                      "startdate": "2019-02-04 13:28:07",
                      "AISK[AIS23]": "2",
                      "AISK[AIS18]": "1",
                      "AISK[AISK1]": "3",
                      "AISK[AIS20]": "2",
                      "startlanguage": "de",
                      "AISK[AISK4]": "3",
                      "AISK[AIS25]": "3",
                      "PID": "13012",
                      "AISK[AIS11]": "3",
                      "AISK[AIS33]": "2",
                      "id": "1070",
                      "AISK[AIS14]": "2",
                      "AISK[AIS17]": "1",
                      "FID": "130120300",
                      "AISK[AIS21]": "3",
                      "AISK[AIS26]": "2",
                      "Erhebungszeitpunkt": "2",
                      "Datum": "2019-02-04 00:00:00",
                      "AISK[AISK7]": "3",
                      "lastpage": "3"
                    },
                    "mz": {
                      "mz_typ": "Austritt",
                      "mz_id": 2,
                      "mz_text": "Austritt - Entwöhnungstherapie"
                    },
                    "event_id": 40804,
                    "filled": "2019-02-04T13:36:50Z",
                    "response_id": 25275
                  },
                  "definitions": {
                    "result_array": [
                      {
                        "items": 10,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": 29.5,
                        "id": 0,
                        "sub_left": "Auf den eigenen Vorteil bedacht sein, sich nicht für andere interessieren und deren Meinung ignorieren oder gering schätzen",
                        "short_description": "soziale_orientierung",
                        "sub_right": "Überinvolviert, zu schnelle Kompromissbereitschaft",
                        "full": "Sich für andere Menschen einsetzen, aufmerksam und hilfsbereit sein, andere Meinungen tolerieren und Kompromisse anstreben.",
                        "sd_norm": 3.82,
                        "description": "Soziale Orientierung"
                      },
                      {
                        "items": 8,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": 21.15,
                        "id": 1,
                        "sub_left": "Sich sozial isolieren, Konflikten aus dem Weg gehen, sich unterordnen, Entscheidungen vor sich her schieben",
                        "short_description": "offensivit__t",
                        "sub_right": "Streitlustig, unüberlegte Entscheidungen",
                        "full": "Auf andere Menschen zugehen und dabei Konflikte nicht scheuen, Entscheidungen treffen, eigene Interessen tatkräftig verwirklichen.",
                        "sd_norm": 3.5,
                        "description": "Offensivität"
                      },
                      {
                        "items": 8,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": 21.3,
                        "id": 2,
                        "sub_left": "Sich treiben lassen, in seinem Handeln von ggf. stark schwankenden Emotionen bestimmt sein und die Verantwortung für das eigene Leben in der Umwelt ansiedeln",
                        "short_description": "selbststeuerung",
                        "sub_right": "Zwanghafte Selbstkontrolle",
                        "full": "Rational handeln, sich nicht von Emotionen bestimmen lassen, die Verantwortung für das Leben bei sich selbst sehen.",
                        "sd_norm": 3.92,
                        "description": "Selbststeuerung"
                      },
                      {
                        "items": 7,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": 20.25,
                        "id": 3,
                        "sub_left": "Sich nicht mit seinem Verhalten auseinandersetzten, gleichgültig gegenüber dem Verhalten und Erleben anderer Menschen",
                        "short_description": "reflexibilit__t",
                        "sub_right": "Zwanghafte Selbstdarstellung, Rigidität",
                        "full": "Das eigene Verhalten und die Wirkung auf andere reflektieren und gegebenenfalls gezielt steuern, sich für andere Menschen interessieren.",
                        "sd_norm": 2.94,
                        "description": "Reflexibilität"
                      }
                    ],
                    "variables": [
                      "sum_score",
                      "scale_score",
                      "z_score"
                    ],
                    "all_results_variables": [
                      "soziale_orientierung_sum_score",
                      "soziale_orientierung_scale_score",
                      "soziale_orientierung_z_score",
                      "offensivit__t_sum_score",
                      "offensivit__t_scale_score",
                      "offensivit__t_z_score",
                      "selbststeuerung_sum_score",
                      "selbststeuerung_scale_score",
                      "selbststeuerung_z_score",
                      "reflexibilit__t_sum_score",
                      "reflexibilit__t_scale_score",
                      "reflexibilit__t_z_score"
                    ]
                  }
                },
                {
                  "all_results": {
                    "reflexibilit__t_scale_score": 2.57,
                    "offensivit__t_sum_score": 16,
                    "reflexibilit__t_z_score": -0.77,
                    "selbststeuerung_sum_score": 20,
                    "soziale_orientierung_z_score": -2.23,
                    "soziale_orientierung_scale_score": 2.1,
                    "reflexibilit__t_sum_score": 18,
                    "soziale_orientierung_sum_score": 21,
                    "offensivit__t_z_score": -1.47,
                    "selbststeuerung_scale_score": 2.5,
                    "offensivit__t_scale_score": 2,
                    "selbststeuerung_z_score": -0.33
                  },
                  "result_array": [
                    {
                      "items": 10,
                      "result": {
                        "scale_score": 2.1,
                        "z_score": -2.23,
                        "sum_score": 21
                      },
                      "m_norm": 29.5,
                      "id": 0,
                      "sub_left": "Auf den eigenen Vorteil bedacht sein, sich nicht für andere interessieren und deren Meinung ignorieren oder gering schätzen",
                      "short_description": "soziale_orientierung",
                      "sub_right": "Überinvolviert, zu schnelle Kompromissbereitschaft",
                      "full": "Sich für andere Menschen einsetzen, aufmerksam und hilfsbereit sein, andere Meinungen tolerieren und Kompromisse anstreben.",
                      "sd_norm": 3.82,
                      "description": "Soziale Orientierung"
                    },
                    {
                      "items": 8,
                      "result": {
                        "scale_score": 2,
                        "z_score": -1.47,
                        "sum_score": 16
                      },
                      "m_norm": 21.15,
                      "id": 1,
                      "sub_left": "Sich sozial isolieren, Konflikten aus dem Weg gehen, sich unterordnen, Entscheidungen vor sich her schieben",
                      "short_description": "offensivit__t",
                      "sub_right": "Streitlustig, unüberlegte Entscheidungen",
                      "full": "Auf andere Menschen zugehen und dabei Konflikte nicht scheuen, Entscheidungen treffen, eigene Interessen tatkräftig verwirklichen.",
                      "sd_norm": 3.5,
                      "description": "Offensivität"
                    },
                    {
                      "items": 8,
                      "result": {
                        "scale_score": 2.5,
                        "z_score": -0.33,
                        "sum_score": 20
                      },
                      "m_norm": 21.3,
                      "id": 2,
                      "sub_left": "Sich treiben lassen, in seinem Handeln von ggf. stark schwankenden Emotionen bestimmt sein und die Verantwortung für das eigene Leben in der Umwelt ansiedeln",
                      "short_description": "selbststeuerung",
                      "sub_right": "Zwanghafte Selbstkontrolle",
                      "full": "Rational handeln, sich nicht von Emotionen bestimmen lassen, die Verantwortung für das Leben bei sich selbst sehen.",
                      "sd_norm": 3.92,
                      "description": "Selbststeuerung"
                    },
                    {
                      "items": 7,
                      "result": {
                        "scale_score": 2.57,
                        "z_score": -0.77,
                        "sum_score": 18
                      },
                      "m_norm": 20.25,
                      "id": 3,
                      "sub_left": "Sich nicht mit seinem Verhalten auseinandersetzten, gleichgültig gegenüber dem Verhalten und Erleben anderer Menschen",
                      "short_description": "reflexibilit__t",
                      "sub_right": "Zwanghafte Selbstdarstellung, Rigidität",
                      "full": "Das eigene Verhalten und die Wirkung auf andere reflektieren und gegebenenfalls gezielt steuern, sich für andere Menschen interessieren.",
                      "sd_norm": 2.94,
                      "description": "Reflexibilität"
                    }
                  ],
                  "info": {
                    "hash": "c603b640-d603-4364-8fed-b577c3b6e935",
                    "response": {
                      "AISK[AIS10]": "3",
                      "AISK[AIS32]": "3",
                      "datestamp": "2018-11-21 16:15:07",
                      "AISK[AIS28]": "2",
                      "AISK[AISK9]": "1",
                      "AISK[AIS31]": "3",
                      "AISK[AIS13]": "3",
                      "AISK[AIS16]": "2",
                      "AISK[AIS22]": "2",
                      "andererZeitpunkt": "",
                      "AISK[AISK3]": "2",
                      "optinomixHASH": "c603b640-d603-4364-8fed-b577c3b6e935",
                      "AISK[AIS19]": "2",
                      "AISK[AIS27]": "2",
                      "submitdate": "2018-11-21 16:15:07",
                      "AISK[AISK6]": "2",
                      "AISK[AISK5]": "1",
                      "AISK[AIS24]": "2",
                      "AISK[AISK8]": "3",
                      "AISK[AIS29]": "2",
                      "AISK[AIS30]": "2",
                      "AISK[AIS12]": "3",
                      "AISK[AIS15]": "2",
                      "AISK[AISK2]": "2",
                      "startdate": "2018-11-21 16:01:37",
                      "AISK[AIS23]": "2",
                      "AISK[AIS18]": "1",
                      "AISK[AISK1]": "3",
                      "AISK[AIS20]": "2",
                      "startlanguage": "de",
                      "AISK[AISK4]": "2",
                      "AISK[AIS25]": "2",
                      "PID": "13012",
                      "AISK[AIS11]": "3",
                      "AISK[AIS33]": "2",
                      "id": "976",
                      "AISK[AIS14]": "3",
                      "AISK[AIS17]": "2",
                      "FID": "130120300",
                      "AISK[AIS21]": "2",
                      "AISK[AIS26]": "3",
                      "Erhebungszeitpunkt": "1",
                      "Datum": "2018-11-21 00:00:00",
                      "AISK[AISK7]": "3",
                      "lastpage": "3"
                    },
                    "mz": {
                      "mz_typ": "Eintritt",
                      "mz_id": 1,
                      "mz_text": "Eintritt - Entwöhnungstherapie"
                    },
                    "event_id": 39092,
                    "filled": "2018-11-21T16:15:07Z",
                    "response_id": 24045
                  },
                  "definitions": {
                    "result_array": [
                      {
                        "items": 10,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": 29.5,
                        "id": 0,
                        "sub_left": "Auf den eigenen Vorteil bedacht sein, sich nicht für andere interessieren und deren Meinung ignorieren oder gering schätzen",
                        "short_description": "soziale_orientierung",
                        "sub_right": "Überinvolviert, zu schnelle Kompromissbereitschaft",
                        "full": "Sich für andere Menschen einsetzen, aufmerksam und hilfsbereit sein, andere Meinungen tolerieren und Kompromisse anstreben.",
                        "sd_norm": 3.82,
                        "description": "Soziale Orientierung"
                      },
                      {
                        "items": 8,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": 21.15,
                        "id": 1,
                        "sub_left": "Sich sozial isolieren, Konflikten aus dem Weg gehen, sich unterordnen, Entscheidungen vor sich her schieben",
                        "short_description": "offensivit__t",
                        "sub_right": "Streitlustig, unüberlegte Entscheidungen",
                        "full": "Auf andere Menschen zugehen und dabei Konflikte nicht scheuen, Entscheidungen treffen, eigene Interessen tatkräftig verwirklichen.",
                        "sd_norm": 3.5,
                        "description": "Offensivität"
                      },
                      {
                        "items": 8,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": 21.3,
                        "id": 2,
                        "sub_left": "Sich treiben lassen, in seinem Handeln von ggf. stark schwankenden Emotionen bestimmt sein und die Verantwortung für das eigene Leben in der Umwelt ansiedeln",
                        "short_description": "selbststeuerung",
                        "sub_right": "Zwanghafte Selbstkontrolle",
                        "full": "Rational handeln, sich nicht von Emotionen bestimmen lassen, die Verantwortung für das Leben bei sich selbst sehen.",
                        "sd_norm": 3.92,
                        "description": "Selbststeuerung"
                      },
                      {
                        "items": 7,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": 20.25,
                        "id": 3,
                        "sub_left": "Sich nicht mit seinem Verhalten auseinandersetzten, gleichgültig gegenüber dem Verhalten und Erleben anderer Menschen",
                        "short_description": "reflexibilit__t",
                        "sub_right": "Zwanghafte Selbstdarstellung, Rigidität",
                        "full": "Das eigene Verhalten und die Wirkung auf andere reflektieren und gegebenenfalls gezielt steuern, sich für andere Menschen interessieren.",
                        "sd_norm": 2.94,
                        "description": "Reflexibilität"
                      }
                    ],
                    "variables": [
                      "sum_score",
                      "scale_score",
                      "z_score"
                    ],
                    "all_results_variables": [
                      "soziale_orientierung_sum_score",
                      "soziale_orientierung_scale_score",
                      "soziale_orientierung_z_score",
                      "offensivit__t_sum_score",
                      "offensivit__t_scale_score",
                      "offensivit__t_z_score",
                      "selbststeuerung_sum_score",
                      "selbststeuerung_scale_score",
                      "selbststeuerung_z_score",
                      "reflexibilit__t_sum_score",
                      "reflexibilit__t_scale_score",
                      "reflexibilit__t_z_score"
                    ]
                  }
                }
              ],
              "name": "scores_calculation"
            }
          ],
          "have_data": true,
          "loaded": true,
          "possible_data": true,
          "request": "stay",
          "pid": 3868,
          "fid": 5992,
          "app_id": "ch.suedhang.apps.isk.production",
          "params": {
            "name": "isk",
            "title": "ISK-K",
            "subtitle": "Inventar Sozialer Kompetenzen - Kurzform",
            "identifier": "ch.suedhang.apps.isk.production"
          },
          "module": {
            "hash": "1f7be4957a718d6705735152a857c38cfcfa978a",
            "calculations": [
              "scores_calculation"
            ],
            "readme": {
              "text": "## ISK-K (Inventar Sozialer Kompetenzen - Kurzversion)\n\n### Zusammenfassung\nDas Inventar Sozialer Kompetenzen (Kurzversion) erfasst in 33 Aussagen persönliche Verhaltensweisen und Gewohnheiten zu den vier Bereichen: Soziale Orientierung, Offensivität, Selbststeuerung und Reflexibilität. Soziale Kompetenzen sind für unser Funktionieren in der Gesellschaft notwendig. Sind sie zu sehr auf einen selber oder zu sehr auf die Gesellschaft ausgerichtet, dann funktioniert das Zusammenspiel nicht. Mittlere Ausprägungen, welche beide Aspekte berücksichtigen sind daher am günstigsten.\n\n#### Auswertung / Interpretation\nAusgabe der Subskalen in z-Werten auf der Normstichprobe von Kanning (2009) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Geschlecht.\n\n",
              "parents": [
                {
                  "text": "## ISK-K (Inventar Sozialer Kompetenzen - Kurzversion)\n\n### Zusammenfassung\nDas Inventar Sozialer Kompetenzen (Kurzversion) erfasst in 33 Aussagen persönliche Verhaltensweisen und Gewohnheiten zu den vier Bereichen: Soziale Orientierung, Offensivität, Selbststeuerung und Reflexibilität. Soziale Kompetenzen sind für unser Funktionieren in der Gesellschaft notwendig. Sind sie zu sehr auf einen selber oder zu sehr auf die Gesellschaft ausgerichtet, dann funktioniert das Zusammenspiel nicht. Mittlere Ausprägungen, welche beide Aspekte berücksichtigen sind daher am günstigsten.\n\n#### Auswertung / Interpretation\nAusgabe der Subskalen in z-Werten auf der Normstichprobe von Kanning (2009) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Geschlecht.\n\n",
                  "identifier": "ch.suedhang.apps.isk",
                  "html": "<h2>ISK-K (Inventar Sozialer Kompetenzen - Kurzversion)</h2><h3>Zusammenfassung</h3><p>Das Inventar Sozialer Kompetenzen (Kurzversion) erfasst in 33 Aussagen persönliche Verhaltensweisen und Gewohnheiten zu den vier Bereichen: Soziale Orientierung, Offensivität, Selbststeuerung und Reflexibilität. Soziale Kompetenzen sind für unser Funktionieren in der Gesellschaft notwendig. Sind sie zu sehr auf einen selber oder zu sehr auf die Gesellschaft ausgerichtet, dann funktioniert das Zusammenspiel nicht. Mittlere Ausprägungen, welche beide Aspekte berücksichtigen sind daher am günstigsten.</p><h4>Auswertung / Interpretation</h4><p>Ausgabe der Subskalen in z-Werten auf der Normstichprobe von Kanning (2009) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Geschlecht.</p>"
                }
              ],
              "html": "<h2>ISK-K (Inventar Sozialer Kompetenzen - Kurzversion)</h2><h3>Zusammenfassung</h3><p>Das Inventar Sozialer Kompetenzen (Kurzversion) erfasst in 33 Aussagen persönliche Verhaltensweisen und Gewohnheiten zu den vier Bereichen: Soziale Orientierung, Offensivität, Selbststeuerung und Reflexibilität. Soziale Kompetenzen sind für unser Funktionieren in der Gesellschaft notwendig. Sind sie zu sehr auf einen selber oder zu sehr auf die Gesellschaft ausgerichtet, dann funktioniert das Zusammenspiel nicht. Mittlere Ausprägungen, welche beide Aspekte berücksichtigen sind daher am günstigsten.</p><h4>Auswertung / Interpretation</h4><p>Ausgabe der Subskalen in z-Werten auf der Normstichprobe von Kanning (2009) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Geschlecht.</p>"
            },
            "surveys": [
              {
                "identifier": "isk",
                "name": "ISK-K"
              }
            ],
            "templates": [
              {
                "height": 12,
                "width": 6,
                "name": "ISK-K"
              }
            ],
            "identifier": "ch.suedhang.apps.isk.production",
            "pdf_templates": [],
            "data_source_queries": [],
            "original_name": "ISK-K",
            "dependencies": [],
            "name": "ISK-K",
            "events": [
              {
                "due_after": 259200,
                "survey": "isk",
                "name": "activation",
                "time_spec": {
                  "type": "on_activation"
                },
                "overdue": {
                  "type": "ignore"
                },
                "description": "Eintritt: Inventar Sozialer Kompetenzen (ISK)"
              },
              {
                "due_after": 259200,
                "survey": "isk",
                "name": "exit",
                "time_spec": {
                  "days": 10,
                  "time": "08:00:00",
                  "type": "before_exit"
                },
                "overdue": {
                  "type": "ignore"
                },
                "description": "Austritt: Inventar Sozialer Kompetenzen (ISK)"
              }
            ],
            "version": "1.0",
            "type": "patient",
            "short_description": "Persönliche Verhaltensweisen und Gewohnheiten zu den vier Bereichen: Soziale Orientierung, Offensivität, Selbststeuerung und Reflexibilität.",
            "database_schema_name": "ch_suedhang_apps_isk_production",
            "database_user_name": "ch_suedhang_apps_isk_production",
            "description": "",
            "developer": {
              "email": "nora.schoenenberger@suedhang.ch",
              "phone": "+41 (0)31 828 14 92",
              "first_name": "Nora",
              "website": "http://suedhang.ch/de/Forschung",
              "company": "Suedhang",
              "last_name": "Schönenberger",
              "github_user": "schoenenb"
            }
          }
        },
        "ch.suedhang.apps.bdi.production": {
          "date": "2020-04-03T12:09:08.814Z",
          "data": [
            {
              "all_found": true,
              "app_id": "ch.suedhang.apps.bdi.production",
              "date": "2018-11-21T15:52:55Z",
              "response_id": 24024,
              "response": {
                "BDI21": "1",
                "datestamp": "2018-11-21 15:52:55",
                "BDI11": "1",
                "andererZeitpunkt": "",
                "BDI20": "1",
                "optinomixHASH": "ad232f07-3b16-47c1-852c-fb621e5402b8",
                "BDI16": "1a",
                "submitdate": "2018-11-21 15:52:55",
                "BDI7": "1",
                "BDI18": "1b",
                "BDI9": "1",
                "BDI6": "0",
                "BDI17": "0",
                "BDI3": "1",
                "startdate": "2018-11-21 15:46:17",
                "BDI12": "1",
                "BDI8": "0",
                "BDI19": "2",
                "startlanguage": "de",
                "BDI14": "1",
                "BDI5": "0",
                "PID": "13012",
                "BDI13": "2",
                "id": "1201",
                "BDI2": "1",
                "BDI4": "1",
                "FID": "130120300",
                "BDI15": "2",
                "BDI1": "1",
                "BDI10": "0",
                "Erhebungszeitpunkt": "1",
                "Datum": "2018-11-21 00:00:00",
                "lastpage": "3"
              },
              "event": {
                "status": "done",
                "due": "2018-11-24T14:01:38Z",
                "url": "http://optinomic.suedhang.ch:8000/limesurvey_v2/index.php/survey/index/sid/786887/newtest/Y/lang/de?&786887X33X1162=ad232f07-3b16-47c1-852c-fb621e5402b8&786887X33X1163=13012&786887X33X1164=130120300",
                "patient_uses_module_id": 25427,
                "random_hash": "ad232f07-3b16-47c1-852c-fb621e5402b8",
                "survey_name": "BDI II",
                "patient_id": 3868,
                "responsibility": {
                  "type": "patient_via_assessment"
                },
                "module": "ch.suedhang.apps.bdi.production",
                "overdue": {
                  "type": "ignore"
                },
                "created_at": "2018-11-21T14:01:38Z",
                "description": "Schweregrad depressiver Symptomatik im klinischen Bereich, 21 Aussagen",
                "id": 39089,
                "extras": {
                  "created_at": "21.11.2018",
                  "due": "24.11.2018",
                  "status": "Done",
                  "status_de": "Erledigt",
                  "show_do_it_now": false
                }
              },
              "event_found": true,
              "event_id": 39089,
              "patient": {
                "age": 51,
                "birthday": "22.10.1968",
                "birthday_age": "22.10.1968 | 51",
                "name": "Breitenmoser Dominique",
                "birth_year": 1968,
                "secure": "Br. D. (1968)",
                "ansprache": "Herr",
                "anrede": "Herr Breitenmoser",
                "full_name": "Herr Breitenmoser Dominique (22.10.1968 | 51)",
                "full_address": "Aarburgerstrasse 96, 4600 Olten",
                "phone": "",
                "infoline": "Aarburgerstrasse 96, 4600 Olten",
                "color_main": "#3F51B5",
                "color_accent": "#E91E63"
              },
              "patient_found": true,
              "patient_id": 3868,
              "stay": {
                "photo": "",
                "cis_lead_doctor": null,
                "status": "",
                "phase": "complete",
                "frozen": true,
                "first_contact": null,
                "lead_therapist_id": 66,
                "start": "2018-11-20T12:45:00Z",
                "stop_status": null,
                "insurance_number": "",
                "patient_id": 3868,
                "insurance_provider": "PTS",
                "cis_fid": 1301203,
                "stop": "2019-02-12T12:30:00Z",
                "deputy_lead_therapist_id": null,
                "notes": "",
                "service_provider": "",
                "class": "S",
                "lead_therapist_id_overwrite": null,
                "id": 5992,
                "fid": 5992,
                "extras": {
                  "in_stay": false,
                  "duration": 84,
                  "phase_de": "Die Behandlung wurde vor mehr als 14 Tage beendet",
                  "phase_en": "the stay ended more than 14 days ago",
                  "beginn": "20.11.2018",
                  "from_to": "20.11.2018 - 12.2.2019",
                  "ende": "12.2.2019"
                }
              },
              "stay_found": true,
              "stay_id": 5992,
              "patient_uses_module": {
                "settings": {},
                "stay_id": 5992,
                "patient_id": 3868,
                "responsibility": null,
                "deactivated": false,
                "module": "ch.suedhang.apps.bdi.production",
                "overdue": null,
                "last_event_generation": "2020-04-03T12:07:10.045534Z",
                "activated_on": "2018-11-21T14:01:38Z",
                "id": 25427
              },
              "patient_uses_module_found": true,
              "patient_uses_module_id": 25427,
              "calculation": {
                "bdi_score": {
                  "hash": "ad232f07-3b16-47c1-852c-fb621e5402b8",
                  "score": {
                    "score": 19,
                    "ranges": [
                      {
                        "to": 8,
                        "result_color": "#4CAF50",
                        "from": 0,
                        "interpretation_de": "Kein Verdacht auf eine Depression",
                        "interpretation_en": "No Depression"
                      },
                      {
                        "to": 13,
                        "result_color": "#4CAF50",
                        "from": 9,
                        "interpretation_de": "Verdacht auf eine minimale Depression",
                        "interpretation_en": "Minimum Depression"
                      },
                      {
                        "to": 19,
                        "result_color": "#FF5722",
                        "from": 14,
                        "interpretation_de": "Verdacht auf eine leichte Depression",
                        "interpretation_en": "Light Depression"
                      },
                      {
                        "to": 28,
                        "result_color": "#FF5722",
                        "from": 20,
                        "interpretation_de": "Verdacht auf eine mittelschwere Depression",
                        "interpretation_en": "Moderate Depression"
                      },
                      {
                        "to": 63,
                        "result_color": "#F44336",
                        "from": 29,
                        "interpretation_de": "Verdacht auf eine schwere Depression",
                        "interpretation_en": "Major Depression"
                      }
                    ],
                    "current_range": {
                      "to": 19,
                      "result_color": "#FF5722",
                      "from": 14,
                      "interpretation_de": "Verdacht auf eine leichte Depression",
                      "interpretation_en": "Light Depression"
                    }
                  },
                  "response": {
                    "data": {
                      "response": {
                        "BDI21": "1",
                        "datestamp": "2018-11-21 15:52:55",
                        "BDI11": "1",
                        "andererZeitpunkt": "",
                        "BDI20": "1",
                        "optinomixHASH": "ad232f07-3b16-47c1-852c-fb621e5402b8",
                        "BDI16": "1a",
                        "submitdate": "2018-11-21 15:52:55",
                        "BDI7": "1",
                        "BDI18": "1b",
                        "BDI9": "1",
                        "BDI6": "0",
                        "BDI17": "0",
                        "BDI3": "1",
                        "startdate": "2018-11-21 15:46:17",
                        "BDI12": "1",
                        "BDI8": "0",
                        "BDI19": "2",
                        "startlanguage": "de",
                        "BDI14": "1",
                        "BDI5": "0",
                        "PID": "13012",
                        "BDI13": "2",
                        "id": "1201",
                        "BDI2": "1",
                        "BDI4": "1",
                        "FID": "130120300",
                        "BDI15": "2",
                        "BDI1": "1",
                        "BDI10": "0",
                        "Erhebungszeitpunkt": "1",
                        "Datum": "2018-11-21 00:00:00",
                        "lastpage": "3"
                      },
                      "event_id": 39089,
                      "filled": "2018-11-21T15:52:55Z"
                    },
                    "id": 24024
                  }
                }
              },
              "calculation_found": true,
              "calculation_found_method": "variant_response"
            },
            {
              "all_found": true,
              "app_id": "ch.suedhang.apps.bdi.production",
              "date": "2019-02-04T14:05:06Z",
              "response_id": 25299,
              "response": {
                "BDI21": "0",
                "datestamp": "2019-02-04 14:05:06",
                "BDI11": "0",
                "andererZeitpunkt": "",
                "BDI20": "1",
                "optinomixHASH": "c531a582-0405-483e-9f92-70138a74db680",
                "BDI16": "1a",
                "submitdate": "2019-02-04 14:05:06",
                "BDI7": "0",
                "BDI18": "0",
                "BDI9": "0",
                "BDI6": "0",
                "BDI17": "0",
                "BDI3": "0",
                "startdate": "2019-02-04 14:01:25",
                "BDI12": "0",
                "BDI8": "0",
                "BDI19": "0",
                "startlanguage": "de",
                "BDI14": "0",
                "BDI5": "0",
                "PID": "13012",
                "BDI13": "0",
                "id": "1314",
                "BDI2": "0",
                "BDI4": "1",
                "FID": "130120300",
                "BDI15": "0",
                "BDI1": "0",
                "BDI10": "0",
                "Erhebungszeitpunkt": "2",
                "Datum": "2019-02-04 00:00:00",
                "lastpage": "3"
              },
              "event": {
                "status": "done",
                "due": "2019-02-05T07:00:00Z",
                "url": "http://optinomic.suedhang.ch:8000/limesurvey_v2/index.php/survey/index/sid/786887/newtest/Y/lang/de?&786887X33X1162=c531a582-0405-483e-9f92-70138a74db680&786887X33X1163=13012&786887X33X1164=130120300",
                "patient_uses_module_id": 25427,
                "random_hash": "c531a582-0405-483e-9f92-70138a74db680",
                "survey_name": "BDI II",
                "patient_id": 3868,
                "responsibility": {
                  "type": "patient_via_assessment"
                },
                "module": "ch.suedhang.apps.bdi.production",
                "overdue": {
                  "type": "ignore"
                },
                "created_at": "2019-02-02T07:00:00Z",
                "description": "Schweregrad depressiver Symptomatik im klinischen Bereich, 21 Aussagen",
                "id": 40815,
                "extras": {
                  "created_at": "2.2.2019",
                  "due": "5.2.2019",
                  "status": "Done",
                  "status_de": "Erledigt",
                  "show_do_it_now": false
                }
              },
              "event_found": true,
              "event_id": 40815,
              "patient": {
                "age": 51,
                "birthday": "22.10.1968",
                "birthday_age": "22.10.1968 | 51",
                "name": "Breitenmoser Dominique",
                "birth_year": 1968,
                "secure": "Br. D. (1968)",
                "ansprache": "Herr",
                "anrede": "Herr Breitenmoser",
                "full_name": "Herr Breitenmoser Dominique (22.10.1968 | 51)",
                "full_address": "Aarburgerstrasse 96, 4600 Olten",
                "phone": "",
                "infoline": "Aarburgerstrasse 96, 4600 Olten",
                "color_main": "#3F51B5",
                "color_accent": "#E91E63"
              },
              "patient_found": true,
              "patient_id": 3868,
              "stay": {
                "photo": "",
                "cis_lead_doctor": null,
                "status": "",
                "phase": "complete",
                "frozen": true,
                "first_contact": null,
                "lead_therapist_id": 66,
                "start": "2018-11-20T12:45:00Z",
                "stop_status": null,
                "insurance_number": "",
                "patient_id": 3868,
                "insurance_provider": "PTS",
                "cis_fid": 1301203,
                "stop": "2019-02-12T12:30:00Z",
                "deputy_lead_therapist_id": null,
                "notes": "",
                "service_provider": "",
                "class": "S",
                "lead_therapist_id_overwrite": null,
                "id": 5992,
                "fid": 5992,
                "extras": {
                  "in_stay": false,
                  "duration": 84,
                  "phase_de": "Die Behandlung wurde vor mehr als 14 Tage beendet",
                  "phase_en": "the stay ended more than 14 days ago",
                  "beginn": "20.11.2018",
                  "from_to": "20.11.2018 - 12.2.2019",
                  "ende": "12.2.2019"
                }
              },
              "stay_found": true,
              "stay_id": 5992,
              "patient_uses_module": {
                "settings": {},
                "stay_id": 5992,
                "patient_id": 3868,
                "responsibility": null,
                "deactivated": false,
                "module": "ch.suedhang.apps.bdi.production",
                "overdue": null,
                "last_event_generation": "2020-04-03T12:07:10.045534Z",
                "activated_on": "2018-11-21T14:01:38Z",
                "id": 25427
              },
              "patient_uses_module_found": true,
              "patient_uses_module_id": 25427,
              "calculation": {
                "bdi_score": {
                  "hash": "c531a582-0405-483e-9f92-70138a74db680",
                  "score": {
                    "score": 3,
                    "ranges": [
                      {
                        "to": 8,
                        "result_color": "#4CAF50",
                        "from": 0,
                        "interpretation_de": "Kein Verdacht auf eine Depression",
                        "interpretation_en": "No Depression"
                      },
                      {
                        "to": 13,
                        "result_color": "#4CAF50",
                        "from": 9,
                        "interpretation_de": "Verdacht auf eine minimale Depression",
                        "interpretation_en": "Minimum Depression"
                      },
                      {
                        "to": 19,
                        "result_color": "#FF5722",
                        "from": 14,
                        "interpretation_de": "Verdacht auf eine leichte Depression",
                        "interpretation_en": "Light Depression"
                      },
                      {
                        "to": 28,
                        "result_color": "#FF5722",
                        "from": 20,
                        "interpretation_de": "Verdacht auf eine mittelschwere Depression",
                        "interpretation_en": "Moderate Depression"
                      },
                      {
                        "to": 63,
                        "result_color": "#F44336",
                        "from": 29,
                        "interpretation_de": "Verdacht auf eine schwere Depression",
                        "interpretation_en": "Major Depression"
                      }
                    ],
                    "current_range": {
                      "to": 8,
                      "result_color": "#4CAF50",
                      "from": 0,
                      "interpretation_de": "Kein Verdacht auf eine Depression",
                      "interpretation_en": "No Depression"
                    }
                  },
                  "response": {
                    "data": {
                      "response": {
                        "BDI21": "0",
                        "datestamp": "2019-02-04 14:05:06",
                        "BDI11": "0",
                        "andererZeitpunkt": "",
                        "BDI20": "1",
                        "optinomixHASH": "c531a582-0405-483e-9f92-70138a74db680",
                        "BDI16": "1a",
                        "submitdate": "2019-02-04 14:05:06",
                        "BDI7": "0",
                        "BDI18": "0",
                        "BDI9": "0",
                        "BDI6": "0",
                        "BDI17": "0",
                        "BDI3": "0",
                        "startdate": "2019-02-04 14:01:25",
                        "BDI12": "0",
                        "BDI8": "0",
                        "BDI19": "0",
                        "startlanguage": "de",
                        "BDI14": "0",
                        "BDI5": "0",
                        "PID": "13012",
                        "BDI13": "0",
                        "id": "1314",
                        "BDI2": "0",
                        "BDI4": "1",
                        "FID": "130120300",
                        "BDI15": "0",
                        "BDI1": "0",
                        "BDI10": "0",
                        "Erhebungszeitpunkt": "2",
                        "Datum": "2019-02-04 00:00:00",
                        "lastpage": "3"
                      },
                      "event_id": 40815,
                      "filled": "2019-02-04T14:05:06Z"
                    },
                    "id": 25299
                  }
                }
              },
              "calculation_found": true,
              "calculation_found_method": "variant_response"
            }
          ],
          "calculations_all": [
            {
              "result": [
                {
                  "hash": "c531a582-0405-483e-9f92-70138a74db680",
                  "score": {
                    "score": 3,
                    "ranges": [
                      {
                        "to": 8,
                        "result_color": "#4CAF50",
                        "from": 0,
                        "interpretation_de": "Kein Verdacht auf eine Depression",
                        "interpretation_en": "No Depression"
                      },
                      {
                        "to": 13,
                        "result_color": "#4CAF50",
                        "from": 9,
                        "interpretation_de": "Verdacht auf eine minimale Depression",
                        "interpretation_en": "Minimum Depression"
                      },
                      {
                        "to": 19,
                        "result_color": "#FF5722",
                        "from": 14,
                        "interpretation_de": "Verdacht auf eine leichte Depression",
                        "interpretation_en": "Light Depression"
                      },
                      {
                        "to": 28,
                        "result_color": "#FF5722",
                        "from": 20,
                        "interpretation_de": "Verdacht auf eine mittelschwere Depression",
                        "interpretation_en": "Moderate Depression"
                      },
                      {
                        "to": 63,
                        "result_color": "#F44336",
                        "from": 29,
                        "interpretation_de": "Verdacht auf eine schwere Depression",
                        "interpretation_en": "Major Depression"
                      }
                    ],
                    "current_range": {
                      "to": 8,
                      "result_color": "#4CAF50",
                      "from": 0,
                      "interpretation_de": "Kein Verdacht auf eine Depression",
                      "interpretation_en": "No Depression"
                    }
                  },
                  "response": {
                    "data": {
                      "response": {
                        "BDI21": "0",
                        "datestamp": "2019-02-04 14:05:06",
                        "BDI11": "0",
                        "andererZeitpunkt": "",
                        "BDI20": "1",
                        "optinomixHASH": "c531a582-0405-483e-9f92-70138a74db680",
                        "BDI16": "1a",
                        "submitdate": "2019-02-04 14:05:06",
                        "BDI7": "0",
                        "BDI18": "0",
                        "BDI9": "0",
                        "BDI6": "0",
                        "BDI17": "0",
                        "BDI3": "0",
                        "startdate": "2019-02-04 14:01:25",
                        "BDI12": "0",
                        "BDI8": "0",
                        "BDI19": "0",
                        "startlanguage": "de",
                        "BDI14": "0",
                        "BDI5": "0",
                        "PID": "13012",
                        "BDI13": "0",
                        "id": "1314",
                        "BDI2": "0",
                        "BDI4": "1",
                        "FID": "130120300",
                        "BDI15": "0",
                        "BDI1": "0",
                        "BDI10": "0",
                        "Erhebungszeitpunkt": "2",
                        "Datum": "2019-02-04 00:00:00",
                        "lastpage": "3"
                      },
                      "event_id": 40815,
                      "filled": "2019-02-04T14:05:06Z"
                    },
                    "id": 25299
                  }
                },
                {
                  "hash": "ad232f07-3b16-47c1-852c-fb621e5402b8",
                  "score": {
                    "score": 19,
                    "ranges": [
                      {
                        "to": 8,
                        "result_color": "#4CAF50",
                        "from": 0,
                        "interpretation_de": "Kein Verdacht auf eine Depression",
                        "interpretation_en": "No Depression"
                      },
                      {
                        "to": 13,
                        "result_color": "#4CAF50",
                        "from": 9,
                        "interpretation_de": "Verdacht auf eine minimale Depression",
                        "interpretation_en": "Minimum Depression"
                      },
                      {
                        "to": 19,
                        "result_color": "#FF5722",
                        "from": 14,
                        "interpretation_de": "Verdacht auf eine leichte Depression",
                        "interpretation_en": "Light Depression"
                      },
                      {
                        "to": 28,
                        "result_color": "#FF5722",
                        "from": 20,
                        "interpretation_de": "Verdacht auf eine mittelschwere Depression",
                        "interpretation_en": "Moderate Depression"
                      },
                      {
                        "to": 63,
                        "result_color": "#F44336",
                        "from": 29,
                        "interpretation_de": "Verdacht auf eine schwere Depression",
                        "interpretation_en": "Major Depression"
                      }
                    ],
                    "current_range": {
                      "to": 19,
                      "result_color": "#FF5722",
                      "from": 14,
                      "interpretation_de": "Verdacht auf eine leichte Depression",
                      "interpretation_en": "Light Depression"
                    }
                  },
                  "response": {
                    "data": {
                      "response": {
                        "BDI21": "1",
                        "datestamp": "2018-11-21 15:52:55",
                        "BDI11": "1",
                        "andererZeitpunkt": "",
                        "BDI20": "1",
                        "optinomixHASH": "ad232f07-3b16-47c1-852c-fb621e5402b8",
                        "BDI16": "1a",
                        "submitdate": "2018-11-21 15:52:55",
                        "BDI7": "1",
                        "BDI18": "1b",
                        "BDI9": "1",
                        "BDI6": "0",
                        "BDI17": "0",
                        "BDI3": "1",
                        "startdate": "2018-11-21 15:46:17",
                        "BDI12": "1",
                        "BDI8": "0",
                        "BDI19": "2",
                        "startlanguage": "de",
                        "BDI14": "1",
                        "BDI5": "0",
                        "PID": "13012",
                        "BDI13": "2",
                        "id": "1201",
                        "BDI2": "1",
                        "BDI4": "1",
                        "FID": "130120300",
                        "BDI15": "2",
                        "BDI1": "1",
                        "BDI10": "0",
                        "Erhebungszeitpunkt": "1",
                        "Datum": "2018-11-21 00:00:00",
                        "lastpage": "3"
                      },
                      "event_id": 39089,
                      "filled": "2018-11-21T15:52:55Z"
                    },
                    "id": 24024
                  }
                }
              ],
              "name": "bdi_score"
            }
          ],
          "have_data": true,
          "loaded": true,
          "possible_data": true,
          "request": "stay",
          "pid": 3868,
          "fid": 5992,
          "app_id": "ch.suedhang.apps.bdi.production",
          "params": {
            "name": "bdi",
            "title": "BDI-II",
            "subtitle": "Beck Depressions-Inventar",
            "identifier": "ch.suedhang.apps.bdi.production"
          },
          "module": {
            "hash": "8a1e482022720675384203392c7b4afb6a109db8",
            "calculations": [
              "bdi_score"
            ],
            "readme": {
              "text": "## BDI-II (Beck Depressions-Inventar)\n\n### Zusammenfassung\nDer Summenwert aus den 21 Fragebereichen des Beck Depressions-Inventar liefert einen Hinweis auf den Schweregrad einer möglichen depressiven Symptomatik.\n\n",
              "parents": [
                {
                  "text": "## BDI-II (Beck Depressions-Inventar)\n\n### Zusammenfassung\nDer Summenwert aus den 21 Fragebereichen des Beck Depressions-Inventar liefert einen Hinweis auf den Schweregrad einer möglichen depressiven Symptomatik.\n\n",
                  "identifier": "ch.suedhang.apps.bdi",
                  "html": "<h2>BDI-II (Beck Depressions-Inventar)</h2><h3>Zusammenfassung</h3><p>Der Summenwert aus den 21 Fragebereichen des Beck Depressions-Inventar liefert einen Hinweis auf den Schweregrad einer möglichen depressiven Symptomatik.</p>"
                }
              ],
              "html": "<h2>BDI-II (Beck Depressions-Inventar)</h2><h3>Zusammenfassung</h3><p>Der Summenwert aus den 21 Fragebereichen des Beck Depressions-Inventar liefert einen Hinweis auf den Schweregrad einer möglichen depressiven Symptomatik.</p>"
            },
            "surveys": [
              {
                "identifier": "bdi2",
                "name": "BDI II"
              }
            ],
            "templates": [
              {
                "height": 6,
                "width": 6,
                "name": "BDI_simple_score"
              },
              {
                "height": 12,
                "width": 6,
                "name": "BDI"
              }
            ],
            "identifier": "ch.suedhang.apps.bdi.production",
            "pdf_templates": [],
            "data_source_queries": [],
            "original_name": "Beck-Depressions-Inventar (BDI-II)",
            "dependencies": [],
            "name": "Beck-Depressions-Inventar (BDI-II)",
            "events": [
              {
                "due_after": 259200,
                "survey": "bdi2",
                "name": "activation",
                "time_spec": {
                  "type": "on_activation"
                },
                "overdue": {
                  "type": "ignore"
                },
                "description": "Schweregrad depressiver Symptomatik im klinischen Bereich, 21 Aussagen"
              },
              {
                "due_after": 259200,
                "survey": "bdi2",
                "name": "exit",
                "time_spec": {
                  "days": 10,
                  "time": "08:00:00",
                  "type": "before_exit"
                },
                "overdue": {
                  "type": "ignore"
                },
                "description": "Schweregrad depressiver Symptomatik im klinischen Bereich, 21 Aussagen"
              }
            ],
            "version": "1.0",
            "type": "patient",
            "short_description": "Schweregrad depressiver Symptomatik im klinischen Bereich",
            "database_schema_name": "ch_suedhang_apps_bdi_production",
            "database_user_name": "ch_suedhang_apps_bdi_production",
            "description": "",
            "developer": {
              "email": "nora.schoenenberger@suedhang.ch",
              "phone": "+41 (0)31 828 14 92",
              "first_name": "Nora",
              "website": "http://suedhang.ch/de/",
              "company": "Suedhang",
              "last_name": "Schönenberger",
              "github_user": "schoenenb"
            }
          }
        },
        "ch.suedhang.apps.whoqol.production": {
          "date": "2020-04-03T12:09:08.830Z",
          "data": [
            {
              "all_found": true,
              "app_id": "ch.suedhang.apps.whoqol.production",
              "date": "2018-11-21T16:33:55Z",
              "response_id": 24049,
              "response": {
                "datestamp": "2018-11-21 16:33:55",
                "EWHOQOL39[EWHOQOL3]": "2",
                "EWHOQOL1625[EWHOQOL18]": "3",
                "EWHOQOL39[EWHOQOL6]": "3",
                "EWHOQOL1014[EWHOQOL11]": "4",
                "andererZeitpunkt": "",
                "optinomixHASH": "379e2409-7ceb-423a-b547-254f86ffae57",
                "submitdate": "2018-11-21 16:33:55",
                "EWHOQOL1625[EWHOQOL17]": "4",
                "EWHOQOL26": "3",
                "EWHOQOL1625[EWHOQOL19]": "3",
                "EWHOQOL39[EWHOQOL5]": "2",
                "startdate": "2018-11-21 16:30:06",
                "startlanguage": "de",
                "PID": "13012",
                "EWHOQOL2": "3",
                "id": "970",
                "EWHOQOL39[EWHOQOL4]": "3",
                "EWHOQOL1014[EWHOQOL10]": "3",
                "EWHOQOL39[EWHOQOL7]": "2",
                "EWHOQOL15": "3",
                "FID": "130120300",
                "EWHOQOL1": "3",
                "EWHOQOL1625[EWHOQOL16]": "4",
                "Erhebungszeitpunkt": "1",
                "Datum": "2018-11-21 00:00:00",
                "lastpage": "3"
              },
              "event": {
                "status": "done",
                "due": "2018-11-24T14:01:52Z",
                "url": "http://optinomic.suedhang.ch:8000/limesurvey_v2/index.php/survey/index/sid/663948/newtest/Y/lang/de?&663948X60X1485=379e2409-7ceb-423a-b547-254f86ffae57&663948X60X1486=13012&663948X60X1487=130120300",
                "patient_uses_module_id": 25437,
                "random_hash": "379e2409-7ceb-423a-b547-254f86ffae57",
                "survey_name": "WHOQOL",
                "patient_id": 3868,
                "responsibility": {
                  "type": "patient_via_assessment"
                },
                "module": "ch.suedhang.apps.whoqol.production",
                "overdue": {
                  "type": "ignore"
                },
                "created_at": "2018-11-21T14:01:52Z",
                "description": "Eintritt - Lebensqualität (WHOQOL)",
                "id": 39096,
                "extras": {
                  "created_at": "21.11.2018",
                  "due": "24.11.2018",
                  "status": "Done",
                  "status_de": "Erledigt",
                  "show_do_it_now": false
                }
              },
              "event_found": true,
              "event_id": 39096,
              "patient": {
                "age": 51,
                "birthday": "22.10.1968",
                "birthday_age": "22.10.1968 | 51",
                "name": "Breitenmoser Dominique",
                "birth_year": 1968,
                "secure": "Br. D. (1968)",
                "ansprache": "Herr",
                "anrede": "Herr Breitenmoser",
                "full_name": "Herr Breitenmoser Dominique (22.10.1968 | 51)",
                "full_address": "Aarburgerstrasse 96, 4600 Olten",
                "phone": "",
                "infoline": "Aarburgerstrasse 96, 4600 Olten",
                "color_main": "#3F51B5",
                "color_accent": "#E91E63"
              },
              "patient_found": true,
              "patient_id": 3868,
              "stay": {
                "photo": "",
                "cis_lead_doctor": null,
                "status": "",
                "phase": "complete",
                "frozen": true,
                "first_contact": null,
                "lead_therapist_id": 66,
                "start": "2018-11-20T12:45:00Z",
                "stop_status": null,
                "insurance_number": "",
                "patient_id": 3868,
                "insurance_provider": "PTS",
                "cis_fid": 1301203,
                "stop": "2019-02-12T12:30:00Z",
                "deputy_lead_therapist_id": null,
                "notes": "",
                "service_provider": "",
                "class": "S",
                "lead_therapist_id_overwrite": null,
                "id": 5992,
                "fid": 5992,
                "extras": {
                  "in_stay": false,
                  "duration": 84,
                  "phase_de": "Die Behandlung wurde vor mehr als 14 Tage beendet",
                  "phase_en": "the stay ended more than 14 days ago",
                  "beginn": "20.11.2018",
                  "from_to": "20.11.2018 - 12.2.2019",
                  "ende": "12.2.2019"
                }
              },
              "stay_found": true,
              "stay_id": 5992,
              "patient_uses_module": {
                "settings": {},
                "stay_id": 5992,
                "patient_id": 3868,
                "responsibility": null,
                "deactivated": false,
                "module": "ch.suedhang.apps.whoqol.production",
                "overdue": null,
                "last_event_generation": "2020-04-03T12:08:44.454793Z",
                "activated_on": "2018-11-21T14:01:52Z",
                "id": 25437
              },
              "patient_uses_module_found": true,
              "patient_uses_module_id": 25437,
              "calculation": {
                "phys_psych_calculation": {
                  "all_results": {
                    "koerperliche_lebensqualitaet_sum_score": 24,
                    "psychische_lebensqualitaet_z_score": -1.8,
                    "psychische_lebensqualitaet_scale_score": 45.8,
                    "psychische_lebensqualitaet_sum_score": 17,
                    "koerperliche_lebensqualitaet_z_score_inverted": 0.9,
                    "koerperliche_lebensqualitaet_scale_score": 60.7,
                    "koerperliche_lebensqualitaet_z_score": -0.9,
                    "psychische_lebensqualitaet_z_score_inverted": 1.8
                  },
                  "result_array": [
                    {
                      "items": 7,
                      "result": {
                        "scale_score": 60.7,
                        "z_score": -0.9,
                        "sum_score": 24,
                        "z_score_inverted": 0.9
                      },
                      "short": "PHYS",
                      "id": 0,
                      "short_description": "koerperliche_lebensqualitaet",
                      "description": "Koerperliche Lebensqualitaet"
                    },
                    {
                      "items": 6,
                      "result": {
                        "scale_score": 45.8,
                        "z_score": -1.8,
                        "sum_score": 17,
                        "z_score_inverted": 1.8
                      },
                      "short": "PSYCH",
                      "id": 1,
                      "short_description": "psychische_lebensqualitaet",
                      "description": "Psychische Lebensqualitaet"
                    }
                  ],
                  "PHYS_avg": 60.7,
                  "PHYS_sum": 24,
                  "PSYCH_sum": 17,
                  "PSYCH_avg": 45.8,
                  "info": {
                    "hash": "379e2409-7ceb-423a-b547-254f86ffae57",
                    "response": {
                      "datestamp": "2018-11-21 16:33:55",
                      "EWHOQOL39[EWHOQOL3]": "2",
                      "EWHOQOL1625[EWHOQOL18]": "3",
                      "EWHOQOL39[EWHOQOL6]": "3",
                      "EWHOQOL1014[EWHOQOL11]": "4",
                      "andererZeitpunkt": "",
                      "optinomixHASH": "379e2409-7ceb-423a-b547-254f86ffae57",
                      "submitdate": "2018-11-21 16:33:55",
                      "EWHOQOL1625[EWHOQOL17]": "4",
                      "EWHOQOL26": "3",
                      "EWHOQOL1625[EWHOQOL19]": "3",
                      "EWHOQOL39[EWHOQOL5]": "2",
                      "startdate": "2018-11-21 16:30:06",
                      "startlanguage": "de",
                      "PID": "13012",
                      "EWHOQOL2": "3",
                      "id": "970",
                      "EWHOQOL39[EWHOQOL4]": "3",
                      "EWHOQOL1014[EWHOQOL10]": "3",
                      "EWHOQOL39[EWHOQOL7]": "2",
                      "EWHOQOL15": "3",
                      "FID": "130120300",
                      "EWHOQOL1": "3",
                      "EWHOQOL1625[EWHOQOL16]": "4",
                      "Erhebungszeitpunkt": "1",
                      "Datum": "2018-11-21 00:00:00",
                      "lastpage": "3"
                    },
                    "mz": {
                      "mz_typ": "Eintritt",
                      "mz_id": 1,
                      "mz_text": "Eintritt - Entwöhnungstherapie"
                    },
                    "age_norm": {
                      "age_filled": 50,
                      "altersgruppe": 3,
                      "n": 125,
                      "phys_norm_m": 76.52,
                      "m_norm": [
                        76.52,
                        74.69
                      ],
                      "gender": "male",
                      "altersgruppe_text": "Männer, 46 - 55",
                      "psych_norm_m": 74.69,
                      "psych_norm_sd": 15.67,
                      "phys_norm_sd": 17.71,
                      "sd_norm": [
                        17.71,
                        15.67
                      ],
                      "altersgruppe_found": true
                    },
                    "event_id": 39096,
                    "filled": "2018-11-21T16:33:55Z",
                    "response_id": 24049
                  },
                  "definitions": {
                    "result_array": [
                      {
                        "items": 7,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null,
                          "z_score_inverted": null
                        },
                        "short": "PHYS",
                        "id": 0,
                        "short_description": "koerperliche_lebensqualitaet",
                        "description": "Koerperliche Lebensqualitaet"
                      },
                      {
                        "items": 6,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null,
                          "z_score_inverted": null
                        },
                        "short": "PSYCH",
                        "id": 1,
                        "short_description": "psychische_lebensqualitaet",
                        "description": "Psychische Lebensqualitaet"
                      }
                    ],
                    "variables": [
                      "sum_score",
                      "scale_score",
                      "z_score",
                      "z_score_inverted"
                    ],
                    "all_results_variables": [
                      "koerperliche_lebensqualitaet_sum_score",
                      "koerperliche_lebensqualitaet_scale_score",
                      "koerperliche_lebensqualitaet_z_score",
                      "koerperliche_lebensqualitaet_z_score_inverted",
                      "psychische_lebensqualitaet_sum_score",
                      "psychische_lebensqualitaet_scale_score",
                      "psychische_lebensqualitaet_z_score",
                      "psychische_lebensqualitaet_z_score_inverted"
                    ]
                  }
                }
              },
              "calculation_found": true,
              "calculation_found_method": "variant_info"
            },
            {
              "all_found": true,
              "app_id": "ch.suedhang.apps.whoqol.production",
              "date": "2019-02-04T14:15:09Z",
              "response_id": 25308,
              "response": {
                "datestamp": "2019-02-04 14:15:09",
                "EWHOQOL39[EWHOQOL3]": "2",
                "EWHOQOL1625[EWHOQOL18]": "3",
                "EWHOQOL39[EWHOQOL6]": "4",
                "EWHOQOL1014[EWHOQOL11]": "4",
                "andererZeitpunkt": "",
                "optinomixHASH": "817e4292-3d87-4202-abda-261568bd2ce40",
                "submitdate": "2019-02-04 14:15:09",
                "EWHOQOL1625[EWHOQOL17]": "4",
                "EWHOQOL26": "2",
                "EWHOQOL1625[EWHOQOL19]": "4",
                "EWHOQOL39[EWHOQOL5]": "4",
                "startdate": "2019-02-04 14:10:55",
                "startlanguage": "de",
                "PID": "13012",
                "EWHOQOL2": "4",
                "id": "1067",
                "EWHOQOL39[EWHOQOL4]": "2",
                "EWHOQOL1014[EWHOQOL10]": "4",
                "EWHOQOL39[EWHOQOL7]": "3",
                "EWHOQOL15": "4",
                "FID": "130120300",
                "EWHOQOL1": "4",
                "EWHOQOL1625[EWHOQOL16]": "4",
                "Erhebungszeitpunkt": "2",
                "Datum": "2019-02-04 00:00:00",
                "lastpage": "3"
              },
              "event": {
                "status": "done",
                "due": "2019-02-05T07:00:00Z",
                "url": "http://optinomic.suedhang.ch:8000/limesurvey_v2/index.php/survey/index/sid/663948/newtest/Y/lang/de?&663948X60X1485=817e4292-3d87-4202-abda-261568bd2ce40&663948X60X1486=13012&663948X60X1487=130120300",
                "patient_uses_module_id": 25437,
                "random_hash": "817e4292-3d87-4202-abda-261568bd2ce40",
                "survey_name": "WHOQOL",
                "patient_id": 3868,
                "responsibility": {
                  "type": "patient_via_assessment"
                },
                "module": "ch.suedhang.apps.whoqol.production",
                "overdue": {
                  "type": "ignore"
                },
                "created_at": "2019-02-02T07:00:00Z",
                "description": "Austritt - Lebensqualität (WHOQOL)",
                "id": 40822,
                "extras": {
                  "created_at": "2.2.2019",
                  "due": "5.2.2019",
                  "status": "Done",
                  "status_de": "Erledigt",
                  "show_do_it_now": false
                }
              },
              "event_found": true,
              "event_id": 40822,
              "patient": {
                "age": 51,
                "birthday": "22.10.1968",
                "birthday_age": "22.10.1968 | 51",
                "name": "Breitenmoser Dominique",
                "birth_year": 1968,
                "secure": "Br. D. (1968)",
                "ansprache": "Herr",
                "anrede": "Herr Breitenmoser",
                "full_name": "Herr Breitenmoser Dominique (22.10.1968 | 51)",
                "full_address": "Aarburgerstrasse 96, 4600 Olten",
                "phone": "",
                "infoline": "Aarburgerstrasse 96, 4600 Olten",
                "color_main": "#3F51B5",
                "color_accent": "#E91E63"
              },
              "patient_found": true,
              "patient_id": 3868,
              "stay": {
                "photo": "",
                "cis_lead_doctor": null,
                "status": "",
                "phase": "complete",
                "frozen": true,
                "first_contact": null,
                "lead_therapist_id": 66,
                "start": "2018-11-20T12:45:00Z",
                "stop_status": null,
                "insurance_number": "",
                "patient_id": 3868,
                "insurance_provider": "PTS",
                "cis_fid": 1301203,
                "stop": "2019-02-12T12:30:00Z",
                "deputy_lead_therapist_id": null,
                "notes": "",
                "service_provider": "",
                "class": "S",
                "lead_therapist_id_overwrite": null,
                "id": 5992,
                "fid": 5992,
                "extras": {
                  "in_stay": false,
                  "duration": 84,
                  "phase_de": "Die Behandlung wurde vor mehr als 14 Tage beendet",
                  "phase_en": "the stay ended more than 14 days ago",
                  "beginn": "20.11.2018",
                  "from_to": "20.11.2018 - 12.2.2019",
                  "ende": "12.2.2019"
                }
              },
              "stay_found": true,
              "stay_id": 5992,
              "patient_uses_module": {
                "settings": {},
                "stay_id": 5992,
                "patient_id": 3868,
                "responsibility": null,
                "deactivated": false,
                "module": "ch.suedhang.apps.whoqol.production",
                "overdue": null,
                "last_event_generation": "2020-04-03T12:08:44.454793Z",
                "activated_on": "2018-11-21T14:01:52Z",
                "id": 25437
              },
              "patient_uses_module_found": true,
              "patient_uses_module_id": 25437,
              "calculation": {
                "phys_psych_calculation": {
                  "all_results": {
                    "koerperliche_lebensqualitaet_sum_score": 27,
                    "psychische_lebensqualitaet_z_score": -0.2,
                    "psychische_lebensqualitaet_scale_score": 70.8,
                    "psychische_lebensqualitaet_sum_score": 23,
                    "koerperliche_lebensqualitaet_z_score_inverted": 0.3,
                    "koerperliche_lebensqualitaet_scale_score": 71.4,
                    "koerperliche_lebensqualitaet_z_score": -0.3,
                    "psychische_lebensqualitaet_z_score_inverted": 0.2
                  },
                  "result_array": [
                    {
                      "items": 7,
                      "result": {
                        "scale_score": 71.4,
                        "z_score": -0.3,
                        "sum_score": 27,
                        "z_score_inverted": 0.3
                      },
                      "short": "PHYS",
                      "id": 0,
                      "short_description": "koerperliche_lebensqualitaet",
                      "description": "Koerperliche Lebensqualitaet"
                    },
                    {
                      "items": 6,
                      "result": {
                        "scale_score": 70.8,
                        "z_score": -0.2,
                        "sum_score": 23,
                        "z_score_inverted": 0.2
                      },
                      "short": "PSYCH",
                      "id": 1,
                      "short_description": "psychische_lebensqualitaet",
                      "description": "Psychische Lebensqualitaet"
                    }
                  ],
                  "PHYS_avg": 71.4,
                  "PHYS_sum": 27,
                  "PSYCH_sum": 23,
                  "PSYCH_avg": 70.8,
                  "info": {
                    "hash": "817e4292-3d87-4202-abda-261568bd2ce40",
                    "response": {
                      "datestamp": "2019-02-04 14:15:09",
                      "EWHOQOL39[EWHOQOL3]": "2",
                      "EWHOQOL1625[EWHOQOL18]": "3",
                      "EWHOQOL39[EWHOQOL6]": "4",
                      "EWHOQOL1014[EWHOQOL11]": "4",
                      "andererZeitpunkt": "",
                      "optinomixHASH": "817e4292-3d87-4202-abda-261568bd2ce40",
                      "submitdate": "2019-02-04 14:15:09",
                      "EWHOQOL1625[EWHOQOL17]": "4",
                      "EWHOQOL26": "2",
                      "EWHOQOL1625[EWHOQOL19]": "4",
                      "EWHOQOL39[EWHOQOL5]": "4",
                      "startdate": "2019-02-04 14:10:55",
                      "startlanguage": "de",
                      "PID": "13012",
                      "EWHOQOL2": "4",
                      "id": "1067",
                      "EWHOQOL39[EWHOQOL4]": "2",
                      "EWHOQOL1014[EWHOQOL10]": "4",
                      "EWHOQOL39[EWHOQOL7]": "3",
                      "EWHOQOL15": "4",
                      "FID": "130120300",
                      "EWHOQOL1": "4",
                      "EWHOQOL1625[EWHOQOL16]": "4",
                      "Erhebungszeitpunkt": "2",
                      "Datum": "2019-02-04 00:00:00",
                      "lastpage": "3"
                    },
                    "mz": {
                      "mz_typ": "Austritt",
                      "mz_id": 2,
                      "mz_text": "Austritt - Entwöhnungstherapie"
                    },
                    "age_norm": {
                      "age_filled": 50,
                      "altersgruppe": 3,
                      "n": 125,
                      "phys_norm_m": 76.52,
                      "m_norm": [
                        76.52,
                        74.69
                      ],
                      "gender": "male",
                      "altersgruppe_text": "Männer, 46 - 55",
                      "psych_norm_m": 74.69,
                      "psych_norm_sd": 15.67,
                      "phys_norm_sd": 17.71,
                      "sd_norm": [
                        17.71,
                        15.67
                      ],
                      "altersgruppe_found": true
                    },
                    "event_id": 40822,
                    "filled": "2019-02-04T14:15:09Z",
                    "response_id": 25308
                  },
                  "definitions": {
                    "result_array": [
                      {
                        "items": 7,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null,
                          "z_score_inverted": null
                        },
                        "short": "PHYS",
                        "id": 0,
                        "short_description": "koerperliche_lebensqualitaet",
                        "description": "Koerperliche Lebensqualitaet"
                      },
                      {
                        "items": 6,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null,
                          "z_score_inverted": null
                        },
                        "short": "PSYCH",
                        "id": 1,
                        "short_description": "psychische_lebensqualitaet",
                        "description": "Psychische Lebensqualitaet"
                      }
                    ],
                    "variables": [
                      "sum_score",
                      "scale_score",
                      "z_score",
                      "z_score_inverted"
                    ],
                    "all_results_variables": [
                      "koerperliche_lebensqualitaet_sum_score",
                      "koerperliche_lebensqualitaet_scale_score",
                      "koerperliche_lebensqualitaet_z_score",
                      "koerperliche_lebensqualitaet_z_score_inverted",
                      "psychische_lebensqualitaet_sum_score",
                      "psychische_lebensqualitaet_scale_score",
                      "psychische_lebensqualitaet_z_score",
                      "psychische_lebensqualitaet_z_score_inverted"
                    ]
                  }
                }
              },
              "calculation_found": true,
              "calculation_found_method": "variant_info"
            }
          ],
          "calculations_all": [
            {
              "result": [
                {
                  "all_results": {
                    "koerperliche_lebensqualitaet_sum_score": 27,
                    "psychische_lebensqualitaet_z_score": -0.2,
                    "psychische_lebensqualitaet_scale_score": 70.8,
                    "psychische_lebensqualitaet_sum_score": 23,
                    "koerperliche_lebensqualitaet_z_score_inverted": 0.3,
                    "koerperliche_lebensqualitaet_scale_score": 71.4,
                    "koerperliche_lebensqualitaet_z_score": -0.3,
                    "psychische_lebensqualitaet_z_score_inverted": 0.2
                  },
                  "result_array": [
                    {
                      "items": 7,
                      "result": {
                        "scale_score": 71.4,
                        "z_score": -0.3,
                        "sum_score": 27,
                        "z_score_inverted": 0.3
                      },
                      "short": "PHYS",
                      "id": 0,
                      "short_description": "koerperliche_lebensqualitaet",
                      "description": "Koerperliche Lebensqualitaet"
                    },
                    {
                      "items": 6,
                      "result": {
                        "scale_score": 70.8,
                        "z_score": -0.2,
                        "sum_score": 23,
                        "z_score_inverted": 0.2
                      },
                      "short": "PSYCH",
                      "id": 1,
                      "short_description": "psychische_lebensqualitaet",
                      "description": "Psychische Lebensqualitaet"
                    }
                  ],
                  "PHYS_avg": 71.4,
                  "PHYS_sum": 27,
                  "PSYCH_sum": 23,
                  "PSYCH_avg": 70.8,
                  "info": {
                    "hash": "817e4292-3d87-4202-abda-261568bd2ce40",
                    "response": {
                      "datestamp": "2019-02-04 14:15:09",
                      "EWHOQOL39[EWHOQOL3]": "2",
                      "EWHOQOL1625[EWHOQOL18]": "3",
                      "EWHOQOL39[EWHOQOL6]": "4",
                      "EWHOQOL1014[EWHOQOL11]": "4",
                      "andererZeitpunkt": "",
                      "optinomixHASH": "817e4292-3d87-4202-abda-261568bd2ce40",
                      "submitdate": "2019-02-04 14:15:09",
                      "EWHOQOL1625[EWHOQOL17]": "4",
                      "EWHOQOL26": "2",
                      "EWHOQOL1625[EWHOQOL19]": "4",
                      "EWHOQOL39[EWHOQOL5]": "4",
                      "startdate": "2019-02-04 14:10:55",
                      "startlanguage": "de",
                      "PID": "13012",
                      "EWHOQOL2": "4",
                      "id": "1067",
                      "EWHOQOL39[EWHOQOL4]": "2",
                      "EWHOQOL1014[EWHOQOL10]": "4",
                      "EWHOQOL39[EWHOQOL7]": "3",
                      "EWHOQOL15": "4",
                      "FID": "130120300",
                      "EWHOQOL1": "4",
                      "EWHOQOL1625[EWHOQOL16]": "4",
                      "Erhebungszeitpunkt": "2",
                      "Datum": "2019-02-04 00:00:00",
                      "lastpage": "3"
                    },
                    "mz": {
                      "mz_typ": "Austritt",
                      "mz_id": 2,
                      "mz_text": "Austritt - Entwöhnungstherapie"
                    },
                    "age_norm": {
                      "age_filled": 50,
                      "altersgruppe": 3,
                      "n": 125,
                      "phys_norm_m": 76.52,
                      "m_norm": [
                        76.52,
                        74.69
                      ],
                      "gender": "male",
                      "altersgruppe_text": "Männer, 46 - 55",
                      "psych_norm_m": 74.69,
                      "psych_norm_sd": 15.67,
                      "phys_norm_sd": 17.71,
                      "sd_norm": [
                        17.71,
                        15.67
                      ],
                      "altersgruppe_found": true
                    },
                    "event_id": 40822,
                    "filled": "2019-02-04T14:15:09Z",
                    "response_id": 25308
                  },
                  "definitions": {
                    "result_array": [
                      {
                        "items": 7,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null,
                          "z_score_inverted": null
                        },
                        "short": "PHYS",
                        "id": 0,
                        "short_description": "koerperliche_lebensqualitaet",
                        "description": "Koerperliche Lebensqualitaet"
                      },
                      {
                        "items": 6,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null,
                          "z_score_inverted": null
                        },
                        "short": "PSYCH",
                        "id": 1,
                        "short_description": "psychische_lebensqualitaet",
                        "description": "Psychische Lebensqualitaet"
                      }
                    ],
                    "variables": [
                      "sum_score",
                      "scale_score",
                      "z_score",
                      "z_score_inverted"
                    ],
                    "all_results_variables": [
                      "koerperliche_lebensqualitaet_sum_score",
                      "koerperliche_lebensqualitaet_scale_score",
                      "koerperliche_lebensqualitaet_z_score",
                      "koerperliche_lebensqualitaet_z_score_inverted",
                      "psychische_lebensqualitaet_sum_score",
                      "psychische_lebensqualitaet_scale_score",
                      "psychische_lebensqualitaet_z_score",
                      "psychische_lebensqualitaet_z_score_inverted"
                    ]
                  }
                },
                {
                  "all_results": {
                    "koerperliche_lebensqualitaet_sum_score": 24,
                    "psychische_lebensqualitaet_z_score": -1.8,
                    "psychische_lebensqualitaet_scale_score": 45.8,
                    "psychische_lebensqualitaet_sum_score": 17,
                    "koerperliche_lebensqualitaet_z_score_inverted": 0.9,
                    "koerperliche_lebensqualitaet_scale_score": 60.7,
                    "koerperliche_lebensqualitaet_z_score": -0.9,
                    "psychische_lebensqualitaet_z_score_inverted": 1.8
                  },
                  "result_array": [
                    {
                      "items": 7,
                      "result": {
                        "scale_score": 60.7,
                        "z_score": -0.9,
                        "sum_score": 24,
                        "z_score_inverted": 0.9
                      },
                      "short": "PHYS",
                      "id": 0,
                      "short_description": "koerperliche_lebensqualitaet",
                      "description": "Koerperliche Lebensqualitaet"
                    },
                    {
                      "items": 6,
                      "result": {
                        "scale_score": 45.8,
                        "z_score": -1.8,
                        "sum_score": 17,
                        "z_score_inverted": 1.8
                      },
                      "short": "PSYCH",
                      "id": 1,
                      "short_description": "psychische_lebensqualitaet",
                      "description": "Psychische Lebensqualitaet"
                    }
                  ],
                  "PHYS_avg": 60.7,
                  "PHYS_sum": 24,
                  "PSYCH_sum": 17,
                  "PSYCH_avg": 45.8,
                  "info": {
                    "hash": "379e2409-7ceb-423a-b547-254f86ffae57",
                    "response": {
                      "datestamp": "2018-11-21 16:33:55",
                      "EWHOQOL39[EWHOQOL3]": "2",
                      "EWHOQOL1625[EWHOQOL18]": "3",
                      "EWHOQOL39[EWHOQOL6]": "3",
                      "EWHOQOL1014[EWHOQOL11]": "4",
                      "andererZeitpunkt": "",
                      "optinomixHASH": "379e2409-7ceb-423a-b547-254f86ffae57",
                      "submitdate": "2018-11-21 16:33:55",
                      "EWHOQOL1625[EWHOQOL17]": "4",
                      "EWHOQOL26": "3",
                      "EWHOQOL1625[EWHOQOL19]": "3",
                      "EWHOQOL39[EWHOQOL5]": "2",
                      "startdate": "2018-11-21 16:30:06",
                      "startlanguage": "de",
                      "PID": "13012",
                      "EWHOQOL2": "3",
                      "id": "970",
                      "EWHOQOL39[EWHOQOL4]": "3",
                      "EWHOQOL1014[EWHOQOL10]": "3",
                      "EWHOQOL39[EWHOQOL7]": "2",
                      "EWHOQOL15": "3",
                      "FID": "130120300",
                      "EWHOQOL1": "3",
                      "EWHOQOL1625[EWHOQOL16]": "4",
                      "Erhebungszeitpunkt": "1",
                      "Datum": "2018-11-21 00:00:00",
                      "lastpage": "3"
                    },
                    "mz": {
                      "mz_typ": "Eintritt",
                      "mz_id": 1,
                      "mz_text": "Eintritt - Entwöhnungstherapie"
                    },
                    "age_norm": {
                      "age_filled": 50,
                      "altersgruppe": 3,
                      "n": 125,
                      "phys_norm_m": 76.52,
                      "m_norm": [
                        76.52,
                        74.69
                      ],
                      "gender": "male",
                      "altersgruppe_text": "Männer, 46 - 55",
                      "psych_norm_m": 74.69,
                      "psych_norm_sd": 15.67,
                      "phys_norm_sd": 17.71,
                      "sd_norm": [
                        17.71,
                        15.67
                      ],
                      "altersgruppe_found": true
                    },
                    "event_id": 39096,
                    "filled": "2018-11-21T16:33:55Z",
                    "response_id": 24049
                  },
                  "definitions": {
                    "result_array": [
                      {
                        "items": 7,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null,
                          "z_score_inverted": null
                        },
                        "short": "PHYS",
                        "id": 0,
                        "short_description": "koerperliche_lebensqualitaet",
                        "description": "Koerperliche Lebensqualitaet"
                      },
                      {
                        "items": 6,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null,
                          "z_score_inverted": null
                        },
                        "short": "PSYCH",
                        "id": 1,
                        "short_description": "psychische_lebensqualitaet",
                        "description": "Psychische Lebensqualitaet"
                      }
                    ],
                    "variables": [
                      "sum_score",
                      "scale_score",
                      "z_score",
                      "z_score_inverted"
                    ],
                    "all_results_variables": [
                      "koerperliche_lebensqualitaet_sum_score",
                      "koerperliche_lebensqualitaet_scale_score",
                      "koerperliche_lebensqualitaet_z_score",
                      "koerperliche_lebensqualitaet_z_score_inverted",
                      "psychische_lebensqualitaet_sum_score",
                      "psychische_lebensqualitaet_scale_score",
                      "psychische_lebensqualitaet_z_score",
                      "psychische_lebensqualitaet_z_score_inverted"
                    ]
                  }
                }
              ],
              "name": "phys_psych_calculation"
            }
          ],
          "have_data": true,
          "loaded": true,
          "possible_data": true,
          "request": "stay",
          "pid": 3868,
          "fid": 5992,
          "app_id": "ch.suedhang.apps.whoqol.production",
          "params": {
            "name": "whoqol",
            "title": "WHOQOL-BREF",
            "subtitle": "WHO Quality of Life - Kurzform",
            "identifier": "ch.suedhang.apps.whoqol.production"
          },
          "module": {
            "hash": "5bc927ee264a7b7b15727eb27225a8c86104dc06",
            "calculations": [
              "phys_psych_calculation"
            ],
            "readme": {
              "text": "## WHOQOL-BREF (WHO Quality of Life - Kurzversion)\n\n### Zusammenfassung\nBeurteilung der Dimensionen - Physischen und Psychischen Lebensqualität.\n\n",
              "parents": [
                {
                  "text": "## WHOQOL-BREF (WHO Quality of Life - Kurzversion)\n\n### Zusammenfassung\nBeurteilung der Dimensionen - Physischen und Psychischen Lebensqualität.\n\n",
                  "identifier": "com.optinomic.apps.whoqol",
                  "html": "<h2>WHOQOL-BREF (WHO Quality of Life - Kurzversion)</h2><h3>Zusammenfassung</h3><p>Beurteilung der Dimensionen - Physischen und Psychischen Lebensqualität.</p>"
                }
              ],
              "html": "<h2>WHOQOL-BREF (WHO Quality of Life - Kurzversion)</h2><h3>Zusammenfassung</h3><p>Beurteilung der Dimensionen - Physischen und Psychischen Lebensqualität.</p>"
            },
            "surveys": [
              {
                "identifier": "WHOQOL",
                "name": "WHOQOL"
              }
            ],
            "templates": [
              {
                "height": 12,
                "width": 6,
                "name": "WHOQOL"
              }
            ],
            "identifier": "ch.suedhang.apps.whoqol.production",
            "pdf_templates": [],
            "data_source_queries": [],
            "original_name": "WHOQOL-BREF",
            "dependencies": [],
            "name": "WHOQOL-BREF",
            "events": [
              {
                "due_after": 259200,
                "survey": "WHOQOL",
                "name": "activation",
                "time_spec": {
                  "type": "on_activation"
                },
                "overdue": {
                  "type": "ignore"
                },
                "description": "Eintritt - Lebensqualität (WHOQOL)"
              },
              {
                "due_after": 864000,
                "survey": "WHOQOL",
                "name": "exit",
                "time_spec": {
                  "days": 10,
                  "time": "08:00:00",
                  "type": "before_exit"
                },
                "overdue": {
                  "type": "ignore"
                },
                "description": "Austritt - Lebensqualität (WHOQOL)"
              }
            ],
            "version": "1.0",
            "type": "patient",
            "short_description": "Beurteilung der Physischen und Psychischen Lebensqualität.",
            "database_schema_name": "ch_suedhang_apps_whoqol_production",
            "database_user_name": "ch_suedhang_apps_whoqol_production",
            "description": "",
            "developer": {
              "email": "nora.schoenenberger@suedhang.ch",
              "phone": "+41 (0)31 828 14 92",
              "first_name": "Nora",
              "website": "http://suedhang.ch/de/Forschung",
              "company": "Suedhang",
              "last_name": "Schönenberger",
              "github_user": "schoenenb"
            }
          }
        },
        "ch.suedhang.apps.actinfo_aus.production": {
          "date": "2020-04-03T12:09:08.838Z",
          "data": [
            {
              "all_found": true,
              "app_id": "ch.suedhang.apps.actinfo_aus.production",
              "date": "2019-02-05T14:11:07Z",
              "response_id": 25320,
              "response": {
                "QNAD0102[VNAD010be]": "",
                "VZAU051": "",
                "VNAD010x": "0",
                "Institution": "03",
                "VMAC005": "",
                "QNAD0104[VNAD010de]": "",
                "VZAR021": "",
                "QYAZ020[VYAZ020m]": "",
                "VNAD011ed": "",
                "QNAD0107[VNAD010j]": "",
                "VYAP090x": "0",
                "VNAD015bd": "",
                "datestamp": "2019-02-05 14:11:07",
                "VNAD011j": "",
                "QNAD0107[VNAD010i]": "Y",
                "QYAZ020[VYAZ020n]": "",
                "VZAR011": "",
                "VZAP031": "",
                "VNAD015db": "",
                "QNAD0102[VNAD010bc]": "",
                "VZAU031": "",
                "QNAD0104[VNAD010dc]": "",
                "QYAZ020[VYAZ020k]": "",
                "QYAP010[VYAP010k]": "",
                "QNAD0106[VNAD010fc]": "",
                "QYAR010[VYAR010d]": "",
                "QYAR030[VYAR030d]": "",
                "QYAZ020[VYAZ020d]": "",
                "QYAP010[VYAP010d]": "",
                "QZAJ015[VZAJ015d]": "Y",
                "VNAD015ea": "",
                "VZAT040": "0",
                "QZAU050[VZAU050d]": "",
                "VMAB050": "1",
                "VYAZ021j": "",
                "QNAD0105[VNAD010ed]": "",
                "optinomixHASH": "2a454360-a25a-4b16-bcd7-ab1a79ff044f0",
                "QYAR020[VYAR020d]": "",
                "VNAD011cc": "",
                "QNAC070[VNAC070d]": "",
                "VNAD010y": "0",
                "VYAR009": "1",
                "QYAP090[VYAP090a]": "M17.1",
                "QZAJ015[VZAJ015a]": "",
                "QYAP080[VYAP080a]": "",
                "VNAD015kb": "",
                "VNAD015i": "1",
                "VZAX005": "130120300",
                "QNAD0108[VNAD010kb]": "",
                "QYAR020[VYAR020a]": "",
                "VNAD015de": "",
                "VMAB044": "",
                "submitdate": "2019-02-05 14:11:07",
                "VZAT010": "6",
                "QNAD0105[VNAD010ea]": "",
                "QYAP010[VYAP010a]": "",
                "QYAR010[VYAR010a]": "",
                "QYAR030[VYAR030a]": "",
                "QYAZ020[VYAZ020a]": "",
                "VNAD015bc": "",
                "QNAD0103[VNAD010ca]": "",
                "QNAC070[VNAC070a]": "Y",
                "VNAD011fc": "",
                "QZAU050[VZAU050a]": "",
                "QNAD0103[VNAD010cb]": "",
                "VNAD015ca": "",
                "QNAD0108[VNAD010ka]": "",
                "QYAR020[VYAR020b]": "",
                "QZAU050[VZAU050b]": "",
                "QYAP090[VYAP090b]": "",
                "QZAJ015[VZAJ015b]": "",
                "QNAD0105[VNAD010eb]": "",
                "VZAT020": "1",
                "Fallnummer": "",
                "VYAF030": "5",
                "VMAC020": "1",
                "QNAC070[VNAC070b]": "",
                "VZAU030": "",
                "QYAP080[VYAP080b]": "",
                "QYAR010[VYAR010b]": "",
                "QYAR030[VYAR030b]": "",
                "QYAZ020[VYAZ020b]": "",
                "QYAP010[VYAP010b]": "",
                "VNAD015g": "",
                "VMAC061": "",
                "QNAD0107[VNAD010h]": "",
                "VZAJ010": "2",
                "VNAB041": "2",
                "cgiZA": "",
                "VNAD015eb": "",
                "VZAP021": "",
                "QYAR030[VYAR030x]": "",
                "VNAD015dd": "",
                "QYAZ020[VYAZ020x]": "",
                "QYAP010[VYAP010x]": "",
                "VMAB045": "",
                "QYAR010[VYAR010x]": "",
                "QYAR020[VYAR020x]": "",
                "QNAC070[VNAC070x]": "",
                "VMAB001": "2019-02-05 00:00:00",
                "VMAC010a": "4600",
                "QZAJ015[VZAJ015x]": "",
                "QZAU050[VZAU050x]": "",
                "QYAR030[VYAR030h]": "",
                "VYAS015": "2",
                "QYAZ020[VYAZ020h]": "",
                "QYAP010[VYAP010h]": "",
                "VNAD015bb": "",
                "QYAR010[VYAR010h]": "",
                "QNAC070[VNAC070h]": "",
                "VNAD015kc": "",
                "QYAR020[VYAR020h]": "",
                "VNAD015h": "",
                "VYAN010": "1",
                "QZAJ015[VZAJ015h]": "",
                "QZAU050[VZAU050e]": "",
                "QZAJ015[VZAJ015e]": "",
                "VYAR019": "1",
                "VMAB040": "2",
                "VNAD015da": "",
                "startdate": "2019-02-05 13:58:36",
                "VNAC060": "1",
                "VNAD015fc": "",
                "VNAD011de": "",
                "QNAC070[VNAC070e]": "",
                "VZAS020": "2",
                "VZAT050": "0",
                "QYAZ020[VYAZ020e]": "",
                "QYAP010[VYAP010e]": "",
                "QYAR010[VYAR010e]": "",
                "QYAR030[VYAR030e]": "",
                "QYAR020[VYAR020e]": "",
                "VYAR029": "1",
                "VNAC050": "11",
                "QYAR020[VYAR020f]": "",
                "VNAD015ec": "",
                "VZAS010": "3",
                "VZAP020": "10.2",
                "VZAT060": "0",
                "QYAP010[VYAP010f]": "",
                "QYAR010[VYAR010f]": "",
                "QYAR030[VYAR030f]": "",
                "QYAZ020[VYAZ020f]": "",
                "QNAC070[VNAC070f]": "",
                "QZAU050[VZAU050f]": "",
                "QZAJ015[VZAJ015f]": "",
                "VZAF010": "1",
                "startlanguage": "de",
                "VZAO011": "",
                "VZAU020": "",
                "VNAD011kd": "",
                "QNAD0105[VNAD010ec]": "",
                "QYAR010[VYAR010c]": "",
                "QYAR030[VYAR030c]": "",
                "QYAZ020[VYAZ020c]": "",
                "QYAP010[VYAP010c]": "",
                "QNAC070[VNAC070c]": "",
                "VMAB046": "",
                "QZAU050[VZAU050c]": "",
                "QNAD0103[VNAD010cc]": "",
                "VZAT030": "3",
                "QYAP080[VYAP080c]": "",
                "VMAB020": "2019-02-12 00:00:00",
                "QYAR020[VYAR020c]": "",
                "VNAD011be": "",
                "VNAD015ba": "",
                "QYAP090[VYAP090c]": "",
                "QZAJ015[VZAJ015c]": "",
                "PID": "13012",
                "VZAP011": "",
                "QNAD0104[VNAD010dd]": "",
                "VZAR031": "",
                "QYAZ020[VYAZ020l]": "",
                "QYAP010[VYAP010l]": "",
                "id": "685",
                "QNAD0102[VNAD010bd]": "",
                "VYAZ010": "1",
                "VMAC051": "",
                "VMAB005": "71286515",
                "VNAD015fb": "",
                "VMAB055": "",
                "QNAD0104[VNAD010da]": "",
                "QNAD0106[VNAD010fa]": "",
                "QZAU050[VZAU050y]": "",
                "QYAP010[VYAP010i]": "Y",
                "VNAD015cb": "",
                "QYAR010[VYAR010i]": "",
                "QYAZ020[VYAZ020i]": "",
                "QZAJ015[VZAJ015i]": "",
                "QNAD0102[VNAD010ba]": "",
                "VZAU011": "",
                "VZAT100": "2",
                "VZAP041": "",
                "QNAC070[VNAC070y]": "",
                "VNAD015a": "5",
                "QYAR020[VYAR020i]": "",
                "VMAC001": "",
                "VZAJ016": "",
                "QYAP010[VYAP010y]": "",
                "VNAD015ed": "",
                "QNAD0104[VNAD010db]": "",
                "QNAD0102[VNAD010bb]": "",
                "QYAZ020[VYAZ020j]": "",
                "QYAP010[VYAP010j]": "",
                "QNAD0106[VNAD010fb]": "",
                "QYAR020[VYAR020j]": "",
                "VZAF011": "",
                "QZAJ015[VZAJ015j]": "",
                "VZAO010": "3",
                "VZAU021": "",
                "VNAD015ka": "",
                "VMAC031": "",
                "VNAD015j": "",
                "QNAC070[VNAC070g]": "",
                "VZAT070": "1",
                "VMAB042": "",
                "VZAP030": "17.2",
                "VNAD015dc": "",
                "VMAB060": "1",
                "VNAC040": "1",
                "QYAZ020[VYAZ020g]": "",
                "VNAD015fa": "",
                "QYAP010[VYAP010g]": "",
                "QYAR010[VYAR010g]": "",
                "QYAR030[VYAR030g]": "",
                "QZAJ015[VZAJ015g]": "",
                "VNAD015be": "",
                "QZAU050[VZAU050g]": "",
                "QNAD0108[VNAD010kd]": "",
                "QYAR020[VYAR020g]": "",
                "VNAD015kd": "",
                "VYAP080x": "1",
                "QNAD0107[VNAD010g]": "",
                "VZAU010": "",
                "VZAP040": "33.1",
                "VMAB010": "",
                "VNAC030": "1",
                "QNAD0108[VNAD010kc]": "",
                "VYAZ021n": "",
                "lastpage": "5",
                "VNAD015cc": "",
                "QNAD0101[VNAD010a]": "Y"
              },
              "event": {
                "status": "done",
                "due": "2019-02-12T07:00:00Z",
                "url": "http://optinomic.suedhang.ch:8000/limesurvey_v2/index.php/survey/index/sid/116413/newtest/Y/lang/de?&116413X19X703=2a454360-a25a-4b16-bcd7-ab1a79ff044f0&116413X19X645=13012&116413X19X578=130120300",
                "patient_uses_module_id": 25425,
                "random_hash": "2a454360-a25a-4b16-bcd7-ab1a79ff044f0",
                "survey_name": "actInfo - Austritt",
                "patient_id": 3868,
                "responsibility": {
                  "role": "Admin",
                  "type": "role"
                },
                "module": "ch.suedhang.apps.actinfo_aus.production",
                "overdue": {
                  "type": "ignore"
                },
                "created_at": "2019-02-02T07:00:00Z",
                "description": "actInfo - Austritt",
                "id": 40825,
                "extras": {
                  "created_at": "2.2.2019",
                  "due": "12.2.2019",
                  "status": "Done",
                  "status_de": "Erledigt",
                  "show_do_it_now": false
                }
              },
              "event_found": true,
              "event_id": 40825,
              "patient": {
                "age": 51,
                "birthday": "22.10.1968",
                "birthday_age": "22.10.1968 | 51",
                "name": "Breitenmoser Dominique",
                "birth_year": 1968,
                "secure": "Br. D. (1968)",
                "ansprache": "Herr",
                "anrede": "Herr Breitenmoser",
                "full_name": "Herr Breitenmoser Dominique (22.10.1968 | 51)",
                "full_address": "Aarburgerstrasse 96, 4600 Olten",
                "phone": "",
                "infoline": "Aarburgerstrasse 96, 4600 Olten",
                "color_main": "#3F51B5",
                "color_accent": "#E91E63"
              },
              "patient_found": true,
              "patient_id": 3868,
              "stay": {
                "photo": "",
                "cis_lead_doctor": null,
                "status": "",
                "phase": "complete",
                "frozen": true,
                "first_contact": null,
                "lead_therapist_id": 66,
                "start": "2018-11-20T12:45:00Z",
                "stop_status": null,
                "insurance_number": "",
                "patient_id": 3868,
                "insurance_provider": "PTS",
                "cis_fid": 1301203,
                "stop": "2019-02-12T12:30:00Z",
                "deputy_lead_therapist_id": null,
                "notes": "",
                "service_provider": "",
                "class": "S",
                "lead_therapist_id_overwrite": null,
                "id": 5992,
                "fid": 5992,
                "extras": {
                  "in_stay": false,
                  "duration": 84,
                  "phase_de": "Die Behandlung wurde vor mehr als 14 Tage beendet",
                  "phase_en": "the stay ended more than 14 days ago",
                  "beginn": "20.11.2018",
                  "from_to": "20.11.2018 - 12.2.2019",
                  "ende": "12.2.2019"
                }
              },
              "stay_found": true,
              "stay_id": 5992,
              "patient_uses_module": {
                "settings": {},
                "stay_id": 5992,
                "patient_id": 3868,
                "responsibility": null,
                "deactivated": false,
                "module": "ch.suedhang.apps.actinfo_aus.production",
                "overdue": null,
                "last_event_generation": "2020-04-03T12:05:48.023614Z",
                "activated_on": "2018-11-21T14:01:36Z",
                "id": 25425
              },
              "patient_uses_module_found": true,
              "patient_uses_module_id": 25425,
              "calculation": {
                "another_calculation": {
                  "hash": "2a454360-a25a-4b16-bcd7-ab1a79ff044f0",
                  "response": {
                    "data": {
                      "response": {
                        "QNAD0102[VNAD010be]": "",
                        "VZAU051": "",
                        "VNAD010x": "0",
                        "Institution": "03",
                        "VMAC005": "",
                        "QNAD0104[VNAD010de]": "",
                        "VZAR021": "",
                        "QYAZ020[VYAZ020m]": "",
                        "VNAD011ed": "",
                        "QNAD0107[VNAD010j]": "",
                        "VYAP090x": "0",
                        "VNAD015bd": "",
                        "datestamp": "2019-02-05 14:11:07",
                        "VNAD011j": "",
                        "QNAD0107[VNAD010i]": "Y",
                        "QYAZ020[VYAZ020n]": "",
                        "VZAR011": "",
                        "VZAP031": "",
                        "VNAD015db": "",
                        "QNAD0102[VNAD010bc]": "",
                        "VZAU031": "",
                        "QNAD0104[VNAD010dc]": "",
                        "QYAZ020[VYAZ020k]": "",
                        "QYAP010[VYAP010k]": "",
                        "QNAD0106[VNAD010fc]": "",
                        "QYAR010[VYAR010d]": "",
                        "QYAR030[VYAR030d]": "",
                        "QYAZ020[VYAZ020d]": "",
                        "QYAP010[VYAP010d]": "",
                        "QZAJ015[VZAJ015d]": "Y",
                        "VNAD015ea": "",
                        "VZAT040": "0",
                        "QZAU050[VZAU050d]": "",
                        "VMAB050": "1",
                        "VYAZ021j": "",
                        "QNAD0105[VNAD010ed]": "",
                        "optinomixHASH": "2a454360-a25a-4b16-bcd7-ab1a79ff044f0",
                        "QYAR020[VYAR020d]": "",
                        "VNAD011cc": "",
                        "QNAC070[VNAC070d]": "",
                        "VNAD010y": "0",
                        "VYAR009": "1",
                        "QYAP090[VYAP090a]": "M17.1",
                        "QZAJ015[VZAJ015a]": "",
                        "QYAP080[VYAP080a]": "",
                        "VNAD015kb": "",
                        "VNAD015i": "1",
                        "VZAX005": "130120300",
                        "QNAD0108[VNAD010kb]": "",
                        "QYAR020[VYAR020a]": "",
                        "VNAD015de": "",
                        "VMAB044": "",
                        "submitdate": "2019-02-05 14:11:07",
                        "VZAT010": "6",
                        "QNAD0105[VNAD010ea]": "",
                        "QYAP010[VYAP010a]": "",
                        "QYAR010[VYAR010a]": "",
                        "QYAR030[VYAR030a]": "",
                        "QYAZ020[VYAZ020a]": "",
                        "VNAD015bc": "",
                        "QNAD0103[VNAD010ca]": "",
                        "QNAC070[VNAC070a]": "Y",
                        "VNAD011fc": "",
                        "QZAU050[VZAU050a]": "",
                        "QNAD0103[VNAD010cb]": "",
                        "VNAD015ca": "",
                        "QNAD0108[VNAD010ka]": "",
                        "QYAR020[VYAR020b]": "",
                        "QZAU050[VZAU050b]": "",
                        "QYAP090[VYAP090b]": "",
                        "QZAJ015[VZAJ015b]": "",
                        "QNAD0105[VNAD010eb]": "",
                        "VZAT020": "1",
                        "Fallnummer": "",
                        "VYAF030": "5",
                        "VMAC020": "1",
                        "QNAC070[VNAC070b]": "",
                        "VZAU030": "",
                        "QYAP080[VYAP080b]": "",
                        "QYAR010[VYAR010b]": "",
                        "QYAR030[VYAR030b]": "",
                        "QYAZ020[VYAZ020b]": "",
                        "QYAP010[VYAP010b]": "",
                        "VNAD015g": "",
                        "VMAC061": "",
                        "QNAD0107[VNAD010h]": "",
                        "VZAJ010": "2",
                        "VNAB041": "2",
                        "cgiZA": "",
                        "VNAD015eb": "",
                        "VZAP021": "",
                        "QYAR030[VYAR030x]": "",
                        "VNAD015dd": "",
                        "QYAZ020[VYAZ020x]": "",
                        "QYAP010[VYAP010x]": "",
                        "VMAB045": "",
                        "QYAR010[VYAR010x]": "",
                        "QYAR020[VYAR020x]": "",
                        "QNAC070[VNAC070x]": "",
                        "VMAB001": "2019-02-05 00:00:00",
                        "VMAC010a": "4600",
                        "QZAJ015[VZAJ015x]": "",
                        "QZAU050[VZAU050x]": "",
                        "QYAR030[VYAR030h]": "",
                        "VYAS015": "2",
                        "QYAZ020[VYAZ020h]": "",
                        "QYAP010[VYAP010h]": "",
                        "VNAD015bb": "",
                        "QYAR010[VYAR010h]": "",
                        "QNAC070[VNAC070h]": "",
                        "VNAD015kc": "",
                        "QYAR020[VYAR020h]": "",
                        "VNAD015h": "",
                        "VYAN010": "1",
                        "QZAJ015[VZAJ015h]": "",
                        "QZAU050[VZAU050e]": "",
                        "QZAJ015[VZAJ015e]": "",
                        "VYAR019": "1",
                        "VMAB040": "2",
                        "VNAD015da": "",
                        "startdate": "2019-02-05 13:58:36",
                        "VNAC060": "1",
                        "VNAD015fc": "",
                        "VNAD011de": "",
                        "QNAC070[VNAC070e]": "",
                        "VZAS020": "2",
                        "VZAT050": "0",
                        "QYAZ020[VYAZ020e]": "",
                        "QYAP010[VYAP010e]": "",
                        "QYAR010[VYAR010e]": "",
                        "QYAR030[VYAR030e]": "",
                        "QYAR020[VYAR020e]": "",
                        "VYAR029": "1",
                        "VNAC050": "11",
                        "QYAR020[VYAR020f]": "",
                        "VNAD015ec": "",
                        "VZAS010": "3",
                        "VZAP020": "10.2",
                        "VZAT060": "0",
                        "QYAP010[VYAP010f]": "",
                        "QYAR010[VYAR010f]": "",
                        "QYAR030[VYAR030f]": "",
                        "QYAZ020[VYAZ020f]": "",
                        "QNAC070[VNAC070f]": "",
                        "QZAU050[VZAU050f]": "",
                        "QZAJ015[VZAJ015f]": "",
                        "VZAF010": "1",
                        "startlanguage": "de",
                        "VZAO011": "",
                        "VZAU020": "",
                        "VNAD011kd": "",
                        "QNAD0105[VNAD010ec]": "",
                        "QYAR010[VYAR010c]": "",
                        "QYAR030[VYAR030c]": "",
                        "QYAZ020[VYAZ020c]": "",
                        "QYAP010[VYAP010c]": "",
                        "QNAC070[VNAC070c]": "",
                        "VMAB046": "",
                        "QZAU050[VZAU050c]": "",
                        "QNAD0103[VNAD010cc]": "",
                        "VZAT030": "3",
                        "QYAP080[VYAP080c]": "",
                        "VMAB020": "2019-02-12 00:00:00",
                        "QYAR020[VYAR020c]": "",
                        "VNAD011be": "",
                        "VNAD015ba": "",
                        "QYAP090[VYAP090c]": "",
                        "QZAJ015[VZAJ015c]": "",
                        "PID": "13012",
                        "VZAP011": "",
                        "QNAD0104[VNAD010dd]": "",
                        "VZAR031": "",
                        "QYAZ020[VYAZ020l]": "",
                        "QYAP010[VYAP010l]": "",
                        "id": "685",
                        "QNAD0102[VNAD010bd]": "",
                        "VYAZ010": "1",
                        "VMAC051": "",
                        "VMAB005": "71286515",
                        "VNAD015fb": "",
                        "VMAB055": "",
                        "QNAD0104[VNAD010da]": "",
                        "QNAD0106[VNAD010fa]": "",
                        "QZAU050[VZAU050y]": "",
                        "QYAP010[VYAP010i]": "Y",
                        "VNAD015cb": "",
                        "QYAR010[VYAR010i]": "",
                        "QYAZ020[VYAZ020i]": "",
                        "QZAJ015[VZAJ015i]": "",
                        "QNAD0102[VNAD010ba]": "",
                        "VZAU011": "",
                        "VZAT100": "2",
                        "VZAP041": "",
                        "QNAC070[VNAC070y]": "",
                        "VNAD015a": "5",
                        "QYAR020[VYAR020i]": "",
                        "VMAC001": "",
                        "VZAJ016": "",
                        "QYAP010[VYAP010y]": "",
                        "VNAD015ed": "",
                        "QNAD0104[VNAD010db]": "",
                        "QNAD0102[VNAD010bb]": "",
                        "QYAZ020[VYAZ020j]": "",
                        "QYAP010[VYAP010j]": "",
                        "QNAD0106[VNAD010fb]": "",
                        "QYAR020[VYAR020j]": "",
                        "VZAF011": "",
                        "QZAJ015[VZAJ015j]": "",
                        "VZAO010": "3",
                        "VZAU021": "",
                        "VNAD015ka": "",
                        "VMAC031": "",
                        "VNAD015j": "",
                        "QNAC070[VNAC070g]": "",
                        "VZAT070": "1",
                        "VMAB042": "",
                        "VZAP030": "17.2",
                        "VNAD015dc": "",
                        "VMAB060": "1",
                        "VNAC040": "1",
                        "QYAZ020[VYAZ020g]": "",
                        "VNAD015fa": "",
                        "QYAP010[VYAP010g]": "",
                        "QYAR010[VYAR010g]": "",
                        "QYAR030[VYAR030g]": "",
                        "QZAJ015[VZAJ015g]": "",
                        "VNAD015be": "",
                        "QZAU050[VZAU050g]": "",
                        "QNAD0108[VNAD010kd]": "",
                        "QYAR020[VYAR020g]": "",
                        "VNAD015kd": "",
                        "VYAP080x": "1",
                        "QNAD0107[VNAD010g]": "",
                        "VZAU010": "",
                        "VZAP040": "33.1",
                        "VMAB010": "",
                        "VNAC030": "1",
                        "QNAD0108[VNAD010kc]": "",
                        "VYAZ021n": "",
                        "lastpage": "5",
                        "VNAD015cc": "",
                        "QNAD0101[VNAD010a]": "Y"
                      },
                      "event_id": 40825,
                      "filled": "2019-02-05T14:11:07Z"
                    },
                    "id": 25320
                  },
                  "FAGERSTROEM": {
                    "answers": 6,
                    "interpretation": {
                      "to": 6,
                      "logo_speed": 50,
                      "result_color": "#F44336",
                      "from": 5,
                      "result": "stark ausgeprägte körperliche Nikotinabhängigkeit."
                    },
                    "valid_scores": 10,
                    "ranges": {
                      "ranges": [
                        {
                          "to": 2,
                          "logo_speed": 10,
                          "result_color": "#4CAF50",
                          "from": 0,
                          "result": "gering ausgeprägte körperliche Nikotinabhängigkeit."
                        },
                        {
                          "to": 4,
                          "logo_speed": 25,
                          "result_color": "#FF9800",
                          "from": 3,
                          "result": "mittelstark ausgeprägte körperliche Nikotinabhängigkeit."
                        },
                        {
                          "to": 6,
                          "logo_speed": 50,
                          "result_color": "#F44336",
                          "from": 5,
                          "result": "stark ausgeprägte körperliche Nikotinabhängigkeit."
                        },
                        {
                          "to": 10,
                          "logo_speed": 55,
                          "result_color": "#F44336",
                          "from": 7,
                          "result": "sehr stark ausgeprägte körperliche Nikotinabhängigkeit."
                        }
                      ]
                    },
                    "FAGERSTROEM_Score": 5,
                    "Fagerstroem_Mean": 0.5,
                    "smoker": {
                      "motivation_full_text": "Bei Austritt wurde folgende Abstinenzmotivation angegeben: Aktuell keine Motivation zum Rauchstop vorhanden.",
                      "summyary": "Bei Austritt bestand eine stark ausgeprägte körperliche Nikotinabhängigkeit. (∑=5).",
                      "motivation_data": true,
                      "date": "2019-02-05 00:00:00",
                      "motivation": "Aktuell keine Motivation zum Rauchstop vorhanden.",
                      "smoker": true,
                      "datum": "5.2.2019"
                    }
                  }
                }
              },
              "calculation_found": true,
              "calculation_found_method": "variant_response",
              "app_name": "Austritt",
              "actinfo_ein_data": false,
              "actinfo_aus_data": true,
              "FAGERSTROEM": {
                "answers": 6,
                "interpretation": {
                  "to": 6,
                  "logo_speed": 50,
                  "result_color": "#F44336",
                  "from": 5,
                  "result": "stark ausgeprägte körperliche Nikotinabhängigkeit."
                },
                "valid_scores": 10,
                "ranges": {
                  "ranges": [
                    {
                      "to": 2,
                      "logo_speed": 10,
                      "result_color": "#4CAF50",
                      "from": 0,
                      "result": "gering ausgeprägte körperliche Nikotinabhängigkeit."
                    },
                    {
                      "to": 4,
                      "logo_speed": 25,
                      "result_color": "#FF9800",
                      "from": 3,
                      "result": "mittelstark ausgeprägte körperliche Nikotinabhängigkeit."
                    },
                    {
                      "to": 6,
                      "logo_speed": 50,
                      "result_color": "#F44336",
                      "from": 5,
                      "result": "stark ausgeprägte körperliche Nikotinabhängigkeit."
                    },
                    {
                      "to": 10,
                      "logo_speed": 55,
                      "result_color": "#F44336",
                      "from": 7,
                      "result": "sehr stark ausgeprägte körperliche Nikotinabhängigkeit."
                    }
                  ]
                },
                "FAGERSTROEM_Score": 5,
                "Fagerstroem_Mean": 0.5,
                "smoker": {
                  "motivation_full_text": "Bei Austritt wurde folgende Abstinenzmotivation angegeben: Aktuell keine Motivation zum Rauchstop vorhanden.",
                  "summyary": "Bei Austritt bestand eine stark ausgeprägte körperliche Nikotinabhängigkeit. (∑=5).",
                  "motivation_data": true,
                  "date": "2019-02-05 00:00:00",
                  "motivation": "Aktuell keine Motivation zum Rauchstop vorhanden.",
                  "smoker": true,
                  "datum": "5.2.2019"
                }
              },
              "info": "Austritt: stark ausgeprägte körperliche Nikotinabhängigkeit."
            }
          ],
          "calculations_all": [
            {
              "result": [
                {
                  "hash": "2a454360-a25a-4b16-bcd7-ab1a79ff044f0",
                  "response": {
                    "data": {
                      "response": {
                        "QNAD0102[VNAD010be]": "",
                        "VZAU051": "",
                        "VNAD010x": "0",
                        "Institution": "03",
                        "VMAC005": "",
                        "QNAD0104[VNAD010de]": "",
                        "VZAR021": "",
                        "QYAZ020[VYAZ020m]": "",
                        "VNAD011ed": "",
                        "QNAD0107[VNAD010j]": "",
                        "VYAP090x": "0",
                        "VNAD015bd": "",
                        "datestamp": "2019-02-05 14:11:07",
                        "VNAD011j": "",
                        "QNAD0107[VNAD010i]": "Y",
                        "QYAZ020[VYAZ020n]": "",
                        "VZAR011": "",
                        "VZAP031": "",
                        "VNAD015db": "",
                        "QNAD0102[VNAD010bc]": "",
                        "VZAU031": "",
                        "QNAD0104[VNAD010dc]": "",
                        "QYAZ020[VYAZ020k]": "",
                        "QYAP010[VYAP010k]": "",
                        "QNAD0106[VNAD010fc]": "",
                        "QYAR010[VYAR010d]": "",
                        "QYAR030[VYAR030d]": "",
                        "QYAZ020[VYAZ020d]": "",
                        "QYAP010[VYAP010d]": "",
                        "QZAJ015[VZAJ015d]": "Y",
                        "VNAD015ea": "",
                        "VZAT040": "0",
                        "QZAU050[VZAU050d]": "",
                        "VMAB050": "1",
                        "VYAZ021j": "",
                        "QNAD0105[VNAD010ed]": "",
                        "optinomixHASH": "2a454360-a25a-4b16-bcd7-ab1a79ff044f0",
                        "QYAR020[VYAR020d]": "",
                        "VNAD011cc": "",
                        "QNAC070[VNAC070d]": "",
                        "VNAD010y": "0",
                        "VYAR009": "1",
                        "QYAP090[VYAP090a]": "M17.1",
                        "QZAJ015[VZAJ015a]": "",
                        "QYAP080[VYAP080a]": "",
                        "VNAD015kb": "",
                        "VNAD015i": "1",
                        "VZAX005": "130120300",
                        "QNAD0108[VNAD010kb]": "",
                        "QYAR020[VYAR020a]": "",
                        "VNAD015de": "",
                        "VMAB044": "",
                        "submitdate": "2019-02-05 14:11:07",
                        "VZAT010": "6",
                        "QNAD0105[VNAD010ea]": "",
                        "QYAP010[VYAP010a]": "",
                        "QYAR010[VYAR010a]": "",
                        "QYAR030[VYAR030a]": "",
                        "QYAZ020[VYAZ020a]": "",
                        "VNAD015bc": "",
                        "QNAD0103[VNAD010ca]": "",
                        "QNAC070[VNAC070a]": "Y",
                        "VNAD011fc": "",
                        "QZAU050[VZAU050a]": "",
                        "QNAD0103[VNAD010cb]": "",
                        "VNAD015ca": "",
                        "QNAD0108[VNAD010ka]": "",
                        "QYAR020[VYAR020b]": "",
                        "QZAU050[VZAU050b]": "",
                        "QYAP090[VYAP090b]": "",
                        "QZAJ015[VZAJ015b]": "",
                        "QNAD0105[VNAD010eb]": "",
                        "VZAT020": "1",
                        "Fallnummer": "",
                        "VYAF030": "5",
                        "VMAC020": "1",
                        "QNAC070[VNAC070b]": "",
                        "VZAU030": "",
                        "QYAP080[VYAP080b]": "",
                        "QYAR010[VYAR010b]": "",
                        "QYAR030[VYAR030b]": "",
                        "QYAZ020[VYAZ020b]": "",
                        "QYAP010[VYAP010b]": "",
                        "VNAD015g": "",
                        "VMAC061": "",
                        "QNAD0107[VNAD010h]": "",
                        "VZAJ010": "2",
                        "VNAB041": "2",
                        "cgiZA": "",
                        "VNAD015eb": "",
                        "VZAP021": "",
                        "QYAR030[VYAR030x]": "",
                        "VNAD015dd": "",
                        "QYAZ020[VYAZ020x]": "",
                        "QYAP010[VYAP010x]": "",
                        "VMAB045": "",
                        "QYAR010[VYAR010x]": "",
                        "QYAR020[VYAR020x]": "",
                        "QNAC070[VNAC070x]": "",
                        "VMAB001": "2019-02-05 00:00:00",
                        "VMAC010a": "4600",
                        "QZAJ015[VZAJ015x]": "",
                        "QZAU050[VZAU050x]": "",
                        "QYAR030[VYAR030h]": "",
                        "VYAS015": "2",
                        "QYAZ020[VYAZ020h]": "",
                        "QYAP010[VYAP010h]": "",
                        "VNAD015bb": "",
                        "QYAR010[VYAR010h]": "",
                        "QNAC070[VNAC070h]": "",
                        "VNAD015kc": "",
                        "QYAR020[VYAR020h]": "",
                        "VNAD015h": "",
                        "VYAN010": "1",
                        "QZAJ015[VZAJ015h]": "",
                        "QZAU050[VZAU050e]": "",
                        "QZAJ015[VZAJ015e]": "",
                        "VYAR019": "1",
                        "VMAB040": "2",
                        "VNAD015da": "",
                        "startdate": "2019-02-05 13:58:36",
                        "VNAC060": "1",
                        "VNAD015fc": "",
                        "VNAD011de": "",
                        "QNAC070[VNAC070e]": "",
                        "VZAS020": "2",
                        "VZAT050": "0",
                        "QYAZ020[VYAZ020e]": "",
                        "QYAP010[VYAP010e]": "",
                        "QYAR010[VYAR010e]": "",
                        "QYAR030[VYAR030e]": "",
                        "QYAR020[VYAR020e]": "",
                        "VYAR029": "1",
                        "VNAC050": "11",
                        "QYAR020[VYAR020f]": "",
                        "VNAD015ec": "",
                        "VZAS010": "3",
                        "VZAP020": "10.2",
                        "VZAT060": "0",
                        "QYAP010[VYAP010f]": "",
                        "QYAR010[VYAR010f]": "",
                        "QYAR030[VYAR030f]": "",
                        "QYAZ020[VYAZ020f]": "",
                        "QNAC070[VNAC070f]": "",
                        "QZAU050[VZAU050f]": "",
                        "QZAJ015[VZAJ015f]": "",
                        "VZAF010": "1",
                        "startlanguage": "de",
                        "VZAO011": "",
                        "VZAU020": "",
                        "VNAD011kd": "",
                        "QNAD0105[VNAD010ec]": "",
                        "QYAR010[VYAR010c]": "",
                        "QYAR030[VYAR030c]": "",
                        "QYAZ020[VYAZ020c]": "",
                        "QYAP010[VYAP010c]": "",
                        "QNAC070[VNAC070c]": "",
                        "VMAB046": "",
                        "QZAU050[VZAU050c]": "",
                        "QNAD0103[VNAD010cc]": "",
                        "VZAT030": "3",
                        "QYAP080[VYAP080c]": "",
                        "VMAB020": "2019-02-12 00:00:00",
                        "QYAR020[VYAR020c]": "",
                        "VNAD011be": "",
                        "VNAD015ba": "",
                        "QYAP090[VYAP090c]": "",
                        "QZAJ015[VZAJ015c]": "",
                        "PID": "13012",
                        "VZAP011": "",
                        "QNAD0104[VNAD010dd]": "",
                        "VZAR031": "",
                        "QYAZ020[VYAZ020l]": "",
                        "QYAP010[VYAP010l]": "",
                        "id": "685",
                        "QNAD0102[VNAD010bd]": "",
                        "VYAZ010": "1",
                        "VMAC051": "",
                        "VMAB005": "71286515",
                        "VNAD015fb": "",
                        "VMAB055": "",
                        "QNAD0104[VNAD010da]": "",
                        "QNAD0106[VNAD010fa]": "",
                        "QZAU050[VZAU050y]": "",
                        "QYAP010[VYAP010i]": "Y",
                        "VNAD015cb": "",
                        "QYAR010[VYAR010i]": "",
                        "QYAZ020[VYAZ020i]": "",
                        "QZAJ015[VZAJ015i]": "",
                        "QNAD0102[VNAD010ba]": "",
                        "VZAU011": "",
                        "VZAT100": "2",
                        "VZAP041": "",
                        "QNAC070[VNAC070y]": "",
                        "VNAD015a": "5",
                        "QYAR020[VYAR020i]": "",
                        "VMAC001": "",
                        "VZAJ016": "",
                        "QYAP010[VYAP010y]": "",
                        "VNAD015ed": "",
                        "QNAD0104[VNAD010db]": "",
                        "QNAD0102[VNAD010bb]": "",
                        "QYAZ020[VYAZ020j]": "",
                        "QYAP010[VYAP010j]": "",
                        "QNAD0106[VNAD010fb]": "",
                        "QYAR020[VYAR020j]": "",
                        "VZAF011": "",
                        "QZAJ015[VZAJ015j]": "",
                        "VZAO010": "3",
                        "VZAU021": "",
                        "VNAD015ka": "",
                        "VMAC031": "",
                        "VNAD015j": "",
                        "QNAC070[VNAC070g]": "",
                        "VZAT070": "1",
                        "VMAB042": "",
                        "VZAP030": "17.2",
                        "VNAD015dc": "",
                        "VMAB060": "1",
                        "VNAC040": "1",
                        "QYAZ020[VYAZ020g]": "",
                        "VNAD015fa": "",
                        "QYAP010[VYAP010g]": "",
                        "QYAR010[VYAR010g]": "",
                        "QYAR030[VYAR030g]": "",
                        "QZAJ015[VZAJ015g]": "",
                        "VNAD015be": "",
                        "QZAU050[VZAU050g]": "",
                        "QNAD0108[VNAD010kd]": "",
                        "QYAR020[VYAR020g]": "",
                        "VNAD015kd": "",
                        "VYAP080x": "1",
                        "QNAD0107[VNAD010g]": "",
                        "VZAU010": "",
                        "VZAP040": "33.1",
                        "VMAB010": "",
                        "VNAC030": "1",
                        "QNAD0108[VNAD010kc]": "",
                        "VYAZ021n": "",
                        "lastpage": "5",
                        "VNAD015cc": "",
                        "QNAD0101[VNAD010a]": "Y"
                      },
                      "event_id": 40825,
                      "filled": "2019-02-05T14:11:07Z"
                    },
                    "id": 25320
                  },
                  "FAGERSTROEM": {
                    "answers": 6,
                    "interpretation": {
                      "to": 6,
                      "logo_speed": 50,
                      "result_color": "#F44336",
                      "from": 5,
                      "result": "stark ausgeprägte körperliche Nikotinabhängigkeit."
                    },
                    "valid_scores": 10,
                    "ranges": {
                      "ranges": [
                        {
                          "to": 2,
                          "logo_speed": 10,
                          "result_color": "#4CAF50",
                          "from": 0,
                          "result": "gering ausgeprägte körperliche Nikotinabhängigkeit."
                        },
                        {
                          "to": 4,
                          "logo_speed": 25,
                          "result_color": "#FF9800",
                          "from": 3,
                          "result": "mittelstark ausgeprägte körperliche Nikotinabhängigkeit."
                        },
                        {
                          "to": 6,
                          "logo_speed": 50,
                          "result_color": "#F44336",
                          "from": 5,
                          "result": "stark ausgeprägte körperliche Nikotinabhängigkeit."
                        },
                        {
                          "to": 10,
                          "logo_speed": 55,
                          "result_color": "#F44336",
                          "from": 7,
                          "result": "sehr stark ausgeprägte körperliche Nikotinabhängigkeit."
                        }
                      ]
                    },
                    "FAGERSTROEM_Score": 5,
                    "Fagerstroem_Mean": 0.5,
                    "smoker": {
                      "motivation_full_text": "Bei Austritt wurde folgende Abstinenzmotivation angegeben: Aktuell keine Motivation zum Rauchstop vorhanden.",
                      "summyary": "Bei Austritt bestand eine stark ausgeprägte körperliche Nikotinabhängigkeit. (∑=5).",
                      "motivation_data": true,
                      "date": "2019-02-05 00:00:00",
                      "motivation": "Aktuell keine Motivation zum Rauchstop vorhanden.",
                      "smoker": true,
                      "datum": "5.2.2019"
                    }
                  }
                }
              ],
              "name": "another_calculation"
            }
          ],
          "have_data": true,
          "loaded": true,
          "possible_data": true,
          "request": "stay",
          "pid": 3868,
          "fid": 5992,
          "app_id": "ch.suedhang.apps.actinfo_aus.production",
          "params": {
            "name": "actinfo_aus",
            "title": "ActInfo",
            "subtitle": "Information network on addiction care and therapy",
            "identifier": "ch.suedhang.apps.actinfo_aus.production"
          }
        },
        "ch.suedhang.apps.bscl_anq.production": {
          "date": "2020-04-03T12:09:08.870Z",
          "data": [
            {
              "all_found": true,
              "app_id": "ch.suedhang.apps.bscl_anq.production",
              "date": "2018-11-21T16:01:27Z",
              "response_id": 24038,
              "response": {
                "BSCL[sq504V23]": "0",
                "BSCL[sq504V45]": "0",
                "BSCL[sq504V18]": "2",
                "BSCL[sq504V01]": "2",
                "BSCL[sq504V20]": "2",
                "q501V04": "1",
                "datestamp": "2018-11-21 16:01:27",
                "BSCL[sq504V02]": "0",
                "BSCL[sq504V39]": "0",
                "Eintrittsort": "2",
                "BSCL[sq504V46]": "0",
                "BSCL[sq504V07]": "0",
                "Austrittsort": "",
                "BSCL[sq504V43]": "1",
                "BSCL[sq504V25]": "0",
                "BSCL[sq504V33]": "0",
                "optinomixHASH": "a5a0970c-72e7-4743-ad19-f216d748f65b",
                "BSCL[sq504V08]": "0",
                "BSCL[sq504V11]": "0",
                "BSCL[sq504V50]": "1",
                "submitdate": "2018-11-21 16:01:27",
                "BSCL[sq504V36]": "2",
                "BSCL[sq504V49]": "0",
                "BSCL[sq504V14]": "0",
                "BSCL[sq504V17]": "0",
                "BSCL[sq504V53]": "1",
                "BSCL[sq504V35]": "2",
                "BSCL[sq504V03]": "0",
                "q504V00": "2018-11-21 00:00:00",
                "BSCL[sq504V21]": "0",
                "BSCL[sq504V38]": "1",
                "BSCL[sq504V47]": "0",
                "BSCL[sq504V26]": "0",
                "BSCL[sq504V40]": "0",
                "BSCL[sq504V04]": "0",
                "startdate": "2018-11-21 15:53:02",
                "BSCL[sq504V32]": "1",
                "BSCL[sq504V10]": "0",
                "BSCL[sq504V09]": "1",
                "BSCL[sq504V31]": "1",
                "BSCL[sq504V13]": "0",
                "BSCL[sq504V28]": "0",
                "startlanguage": "de",
                "BSCL[sq504V34]": "0",
                "BSCL[sq504V52]": "1",
                "BSCL[sq504V16]": "0",
                "BSCL[sq504V22]": "2",
                "PID": "13012",
                "BSCL[sq504V19]": "1",
                "BSCL[sq504V44]": "1",
                "id": "1049",
                "q501V06": "",
                "BSCL[sq504V41]": "0",
                "BSCL[sq504V05]": "2",
                "BSCL[sq504V27]": "2",
                "BSCL[sq504V42]": "0",
                "BSCL[sq504V06]": "1",
                "FID": "130120300",
                "BSCL[sq504V24]": "0",
                "BSCL[sq504V29]": "0",
                "BSCL[sq504V12]": "0",
                "BSCL[sq504V30]": "0",
                "q501V05": "0",
                "BSCL[sq504V51]": "1",
                "BSCL[sq504V15]": "2",
                "BSCL[sq504V48]": "0",
                "lastpage": "2",
                "BSCL[sq504V37]": "0"
              },
              "event": {
                "status": "done",
                "due": "2018-11-24T14:01:40Z",
                "url": "http://optinomic.suedhang.ch:8000/limesurvey_v2/index.php/survey/index/sid/366636/newtest/Y/lang/de?&366636X36X1188=a5a0970c-72e7-4743-ad19-f216d748f65b&366636X36X1183=13012&366636X36X1187=130120300",
                "patient_uses_module_id": 25428,
                "random_hash": "a5a0970c-72e7-4743-ad19-f216d748f65b",
                "survey_name": "BSCL",
                "patient_id": 3868,
                "responsibility": {
                  "type": "patient_via_assessment"
                },
                "module": "ch.suedhang.apps.bscl_anq.production",
                "overdue": {
                  "type": "ignore"
                },
                "created_at": "2018-11-21T14:01:40Z",
                "description": "BSCL - Eintritt",
                "id": 39090,
                "extras": {
                  "created_at": "21.11.2018",
                  "due": "24.11.2018",
                  "status": "Done",
                  "status_de": "Erledigt",
                  "show_do_it_now": false
                }
              },
              "event_found": true,
              "event_id": 39090,
              "patient": {
                "age": 51,
                "birthday": "22.10.1968",
                "birthday_age": "22.10.1968 | 51",
                "name": "Breitenmoser Dominique",
                "birth_year": 1968,
                "secure": "Br. D. (1968)",
                "ansprache": "Herr",
                "anrede": "Herr Breitenmoser",
                "full_name": "Herr Breitenmoser Dominique (22.10.1968 | 51)",
                "full_address": "Aarburgerstrasse 96, 4600 Olten",
                "phone": "",
                "infoline": "Aarburgerstrasse 96, 4600 Olten",
                "color_main": "#3F51B5",
                "color_accent": "#E91E63"
              },
              "patient_found": true,
              "patient_id": 3868,
              "stay": {
                "photo": "",
                "cis_lead_doctor": null,
                "status": "",
                "phase": "complete",
                "frozen": true,
                "first_contact": null,
                "lead_therapist_id": 66,
                "start": "2018-11-20T12:45:00Z",
                "stop_status": null,
                "insurance_number": "",
                "patient_id": 3868,
                "insurance_provider": "PTS",
                "cis_fid": 1301203,
                "stop": "2019-02-12T12:30:00Z",
                "deputy_lead_therapist_id": null,
                "notes": "",
                "service_provider": "",
                "class": "S",
                "lead_therapist_id_overwrite": null,
                "id": 5992,
                "fid": 5992,
                "extras": {
                  "in_stay": false,
                  "duration": 84,
                  "phase_de": "Die Behandlung wurde vor mehr als 14 Tage beendet",
                  "phase_en": "the stay ended more than 14 days ago",
                  "beginn": "20.11.2018",
                  "from_to": "20.11.2018 - 12.2.2019",
                  "ende": "12.2.2019"
                }
              },
              "stay_found": true,
              "stay_id": 5992,
              "patient_uses_module": {
                "settings": {},
                "stay_id": 5992,
                "patient_id": 3868,
                "responsibility": null,
                "deactivated": false,
                "module": "ch.suedhang.apps.bscl_anq.production",
                "overdue": null,
                "last_event_generation": "2020-04-03T12:08:39.708986Z",
                "activated_on": "2018-11-21T14:01:40Z",
                "id": 25428
              },
              "patient_uses_module_found": true,
              "patient_uses_module_id": 25428,
              "calculation": {
                "scores_calculation": {
                  "all_results": {
                    "somatisierung_scale_score": 0,
                    "gsi_global_severity_index_scale_score": 0.57,
                    "zusatzitems_z_score": null,
                    "aggressivit__t___feindseligkeit_z_score": -0.26,
                    "phobische_angst_sum_score": 2,
                    "psychotizismus_z_score": 0.75,
                    "paranoides_denken_z_score": -0.32,
                    "zusatzitems_scale_score": 0.25,
                    "paranoides_denken_scale_score": 0.2,
                    "zwanghaftigkeit_sum_score": 9,
                    "aggressivit__t___feindseligkeit_scale_score": 0.2,
                    "psychotizismus_scale_score": 0.4,
                    "__ngstlichkeit_scale_score": 0.67,
                    "depressivit__t_sum_score": 6,
                    "unsicherheit_im_sozialkontakt_scale_score": 1,
                    "zusatzitems_sum_score": 1,
                    "unsicherheit_im_sozialkontakt_z_score": 1.63,
                    "__ngstlichkeit_z_score": 1.23,
                    "gsi_global_severity_index_sum_score": 30,
                    "somatisierung_sum_score": 0,
                    "depressivit__t_z_score": 2.38,
                    "depressivit__t_scale_score": 1,
                    "__ngstlichkeit_sum_score": 4,
                    "unsicherheit_im_sozialkontakt_sum_score": 4,
                    "phobische_angst_z_score": 1.13,
                    "zwanghaftigkeit_scale_score": 1.5,
                    "paranoides_denken_sum_score": 1,
                    "aggressivit__t___feindseligkeit_sum_score": 1,
                    "psychotizismus_sum_score": 2,
                    "somatisierung_z_score": -0.74,
                    "gsi_global_severity_index_z_score": 1.26,
                    "phobische_angst_scale_score": 0.4,
                    "zwanghaftigkeit_z_score": 2.17
                  },
                  "result_array": [
                    {
                      "items": 53,
                      "result": {
                        "scale_score": 0.57,
                        "z_score": 1.26,
                        "sum_score": 30
                      },
                      "m_norm": [
                        0.28,
                        0.35
                      ],
                      "id": 0,
                      "sub_left": "GSI (Global Severity Index)",
                      "short_description": "gsi_global_severity_index",
                      "sub_right": "Durchschnittliche Belastung in allen Bereichen",
                      "sd_norm": [
                        0.23,
                        0.23
                      ],
                      "description": "GSI (Global Severity Index)"
                    },
                    {
                      "items": 5,
                      "result": {
                        "scale_score": 0.4,
                        "z_score": 0.75,
                        "sum_score": 2
                      },
                      "m_norm": [
                        0.19,
                        0.19
                      ],
                      "id": 1,
                      "sub_left": "Psychotizismus",
                      "short_description": "psychotizismus",
                      "sub_right": "Gefühl der Isolation und zwischenmenschlichen Entfremdung. Verzerrter, isolierter Lebensstil bis zu Halluzination und Gedankenzerfall.",
                      "sd_norm": [
                        0.28,
                        0.27
                      ],
                      "description": "Psychotizismus"
                    },
                    {
                      "items": 5,
                      "result": {
                        "scale_score": 0.2,
                        "z_score": -0.32,
                        "sum_score": 1
                      },
                      "m_norm": [
                        0.33,
                        0.34
                      ],
                      "id": 2,
                      "sub_left": "Paranoides Denken",
                      "short_description": "paranoides_denken",
                      "sub_right": "Misstrauen, Minderwertigkeitsgefühle, paranoides Denken: Gedankenprojektion, Feindseligkeit, Argwohn, Grandiosität, Einengung, Angst vor Autonomieverlust und wahnhafte Täuschung.",
                      "sd_norm": [
                        0.4,
                        0.38
                      ],
                      "description": "Paranoides Denken"
                    },
                    {
                      "items": 5,
                      "result": {
                        "scale_score": 0.4,
                        "z_score": 1.13,
                        "sum_score": 2
                      },
                      "m_norm": [
                        0.14,
                        0.16
                      ],
                      "id": 3,
                      "sub_left": "Phobische Angst",
                      "short_description": "phobische_angst",
                      "sub_right": "Andauernde und unangemessene Furcht als Reaktion auf eine bestimmte Person, einen Platz, ein Objekt oder eine charakteristische Situation, die zu Vermeidungs- oder Fluchtverhalten führt.",
                      "sd_norm": [
                        0.23,
                        0.25
                      ],
                      "description": "Phobische Angst"
                    },
                    {
                      "items": 5,
                      "result": {
                        "scale_score": 0.2,
                        "z_score": -0.26,
                        "sum_score": 1
                      },
                      "m_norm": [
                        0.29,
                        0.37
                      ],
                      "id": 4,
                      "sub_left": "Aggressivität / Feindseligkeit",
                      "short_description": "aggressivit__t___feindseligkeit",
                      "sub_right": "Reizbarkeit und Unausgeglichenheit bis hin zu starker Aggressivität. Ärger, Aggression, Irritierbarkeit, Zorn und Verstimmung.",
                      "sd_norm": [
                        0.35,
                        0.33
                      ],
                      "description": "Aggressivität / Feindseligkeit"
                    },
                    {
                      "items": 6,
                      "result": {
                        "scale_score": 0.67,
                        "z_score": 1.23,
                        "sum_score": 4
                      },
                      "m_norm": [
                        0.29,
                        0.39
                      ],
                      "id": 5,
                      "sub_left": "Ängstlichkeit",
                      "short_description": "__ngstlichkeit",
                      "sub_right": "Angst mit Nervosität, Spannungen und Zittern, Panikattacken und Schreckgefühlen, Gefühle von Besorgnis und Furcht.",
                      "sd_norm": [
                        0.31,
                        0.36
                      ],
                      "description": "Ängstlichkeit"
                    },
                    {
                      "items": 6,
                      "result": {
                        "scale_score": 1,
                        "z_score": 2.38,
                        "sum_score": 6
                      },
                      "m_norm": [
                        0.24,
                        0.33
                      ],
                      "id": 6,
                      "sub_left": "Depressivität",
                      "short_description": "depressivit__t",
                      "sub_right": "Gedrückte Stimmung, Gesunkenes Interesse am Leben, Verringerte Motivation und Energie, Hoffnungslosigkeit, bis hin zu Suizidgedanken.",
                      "sd_norm": [
                        0.32,
                        0.4
                      ],
                      "description": "Depressivität"
                    },
                    {
                      "items": 4,
                      "result": {
                        "scale_score": 1,
                        "z_score": 1.63,
                        "sum_score": 4
                      },
                      "m_norm": [
                        0.35,
                        0.49
                      ],
                      "id": 7,
                      "sub_left": "Unsicherheit im Sozialkontakt",
                      "short_description": "unsicherheit_im_sozialkontakt",
                      "sub_right": "Unzulänglichkeits- und Minderwertigkeitsgefühle, Selbstabwertungen im sozialen Kontakt, Selbstzweifel, Selbstunsicherheit und negative Erwartungen bzgl. dem eigenen zwischenmenschlichen Verhalten.",
                      "sd_norm": [
                        0.4,
                        0.45
                      ],
                      "description": "Unsicherheit im Sozialkontakt"
                    },
                    {
                      "items": 6,
                      "result": {
                        "scale_score": 1.5,
                        "z_score": 2.17,
                        "sum_score": 9
                      },
                      "m_norm": [
                        0.5,
                        0.54
                      ],
                      "id": 8,
                      "sub_left": "Zwanghaftigkeit",
                      "short_description": "zwanghaftigkeit",
                      "sub_right": "Gedanken, Impulse und Handlungen, die konstant vorhanden und nicht änderbar und ich-fremd oder ungewollt erlebt werden, Kognitive Leistungsstörungen.",
                      "sd_norm": [
                        0.46,
                        0.43
                      ],
                      "description": "Zwanghaftigkeit"
                    },
                    {
                      "items": 7,
                      "result": {
                        "scale_score": 0,
                        "z_score": -0.74,
                        "sum_score": 0
                      },
                      "m_norm": [
                        0.23,
                        0.32
                      ],
                      "id": 9,
                      "sub_left": "Somatisierung",
                      "short_description": "somatisierung",
                      "sub_right": "Kopfschmerzen, Herzbeschwerden, Atemprobleme, Magenbeschwerden, Muskelschmerzen, Schwächegefühl, Schweregefühl, Unwohlsein usw.",
                      "sd_norm": [
                        0.31,
                        0.33
                      ],
                      "description": "Somatisierung"
                    },
                    {
                      "items": 4,
                      "result": {
                        "scale_score": 0.25,
                        "z_score": null,
                        "sum_score": 1
                      },
                      "m_norm": [
                        null,
                        null
                      ],
                      "id": 10,
                      "sub_left": "Zusatzitems",
                      "short_description": "zusatzitems",
                      "sub_right": "Zusatzitems",
                      "sd_norm": [
                        null,
                        null
                      ],
                      "description": "Zusatzitems"
                    }
                  ],
                  "zusatzitem": {
                    "mz_date": "2018-11-21 00:00:00",
                    "dropout_reason": null,
                    "mz_typ": "Eintritt EP",
                    "dropout_code": 0,
                    "mz_id": 4,
                    "items": [
                      {
                        "field": 0,
                        "result": "überhaupt nicht",
                        "name": "Schlechter Appetit",
                        "id": 0
                      },
                      {
                        "field": 0,
                        "result": "überhaupt nicht",
                        "name": "Einschlafschwierigkeiten",
                        "id": 1
                      },
                      {
                        "field": 0,
                        "result": "überhaupt nicht",
                        "name": "Gedanken an den Tod und ans Sterben",
                        "id": 2
                      },
                      {
                        "field": 1,
                        "result": "ein wenig",
                        "name": "Schuldgefühle",
                        "id": 3
                      }
                    ],
                    "mz_datum": "21.11.2018",
                    "dropout": false,
                    "mz_text": "Eintritt - EP",
                    "id": 1049,
                    "0__name": "Schlechter Appetit",
                    "0__result": "überhaupt nicht",
                    "0__field": 0,
                    "1__name": "Einschlafschwierigkeiten",
                    "1__result": "überhaupt nicht",
                    "1__field": 0,
                    "2__name": "Gedanken an den Tod und ans Sterben",
                    "2__result": "überhaupt nicht",
                    "2__field": 0,
                    "3__name": "Schuldgefühle",
                    "3__result": "ein wenig",
                    "3__field": 1
                  },
                  "info": {
                    "hash": "a5a0970c-72e7-4743-ad19-f216d748f65b",
                    "response": {
                      "BSCL[sq504V23]": "0",
                      "BSCL[sq504V45]": "0",
                      "BSCL[sq504V18]": "2",
                      "BSCL[sq504V01]": "2",
                      "BSCL[sq504V20]": "2",
                      "q501V04": "1",
                      "datestamp": "2018-11-21 16:01:27",
                      "BSCL[sq504V02]": "0",
                      "BSCL[sq504V39]": "0",
                      "Eintrittsort": "2",
                      "BSCL[sq504V46]": "0",
                      "BSCL[sq504V07]": "0",
                      "Austrittsort": "",
                      "BSCL[sq504V43]": "1",
                      "BSCL[sq504V25]": "0",
                      "BSCL[sq504V33]": "0",
                      "optinomixHASH": "a5a0970c-72e7-4743-ad19-f216d748f65b",
                      "BSCL[sq504V08]": "0",
                      "BSCL[sq504V11]": "0",
                      "BSCL[sq504V50]": "1",
                      "submitdate": "2018-11-21 16:01:27",
                      "BSCL[sq504V36]": "2",
                      "BSCL[sq504V49]": "0",
                      "BSCL[sq504V14]": "0",
                      "BSCL[sq504V17]": "0",
                      "BSCL[sq504V53]": "1",
                      "BSCL[sq504V35]": "2",
                      "BSCL[sq504V03]": "0",
                      "q504V00": "2018-11-21 00:00:00",
                      "BSCL[sq504V21]": "0",
                      "BSCL[sq504V38]": "1",
                      "BSCL[sq504V47]": "0",
                      "BSCL[sq504V26]": "0",
                      "BSCL[sq504V40]": "0",
                      "BSCL[sq504V04]": "0",
                      "startdate": "2018-11-21 15:53:02",
                      "BSCL[sq504V32]": "1",
                      "BSCL[sq504V10]": "0",
                      "BSCL[sq504V09]": "1",
                      "BSCL[sq504V31]": "1",
                      "BSCL[sq504V13]": "0",
                      "BSCL[sq504V28]": "0",
                      "startlanguage": "de",
                      "BSCL[sq504V34]": "0",
                      "BSCL[sq504V52]": "1",
                      "BSCL[sq504V16]": "0",
                      "BSCL[sq504V22]": "2",
                      "PID": "13012",
                      "BSCL[sq504V19]": "1",
                      "BSCL[sq504V44]": "1",
                      "id": "1049",
                      "q501V06": "",
                      "BSCL[sq504V41]": "0",
                      "BSCL[sq504V05]": "2",
                      "BSCL[sq504V27]": "2",
                      "BSCL[sq504V42]": "0",
                      "BSCL[sq504V06]": "1",
                      "FID": "130120300",
                      "BSCL[sq504V24]": "0",
                      "BSCL[sq504V29]": "0",
                      "BSCL[sq504V12]": "0",
                      "BSCL[sq504V30]": "0",
                      "q501V05": "0",
                      "BSCL[sq504V51]": "1",
                      "BSCL[sq504V15]": "2",
                      "BSCL[sq504V48]": "0",
                      "lastpage": "2",
                      "BSCL[sq504V37]": "0"
                    },
                    "mz": {
                      "mz_date": "2018-11-21 00:00:00",
                      "dropout_reason": null,
                      "mz_typ": "Eintritt EP",
                      "dropout_code": 0,
                      "mz_id": 4,
                      "mz_datum": "21.11.2018",
                      "dropout": false,
                      "mz_text": "Eintritt - EP"
                    },
                    "event_id": 39090,
                    "filled": "2018-11-21T16:01:27Z",
                    "response_id": 24038
                  },
                  "definitions": {
                    "result_array": [
                      {
                        "items": 53,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.28,
                          0.35
                        ],
                        "id": 0,
                        "sub_left": "GSI (Global Severity Index)",
                        "short_description": "gsi_global_severity_index",
                        "sub_right": "Durchschnittliche Belastung in allen Bereichen",
                        "sd_norm": [
                          0.23,
                          0.23
                        ],
                        "description": "GSI (Global Severity Index)"
                      },
                      {
                        "items": 5,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.19,
                          0.19
                        ],
                        "id": 1,
                        "sub_left": "Psychotizismus",
                        "short_description": "psychotizismus",
                        "sub_right": "Gefühl der Isolation und zwischenmenschlichen Entfremdung. Verzerrter, isolierter Lebensstil bis zu Halluzination und Gedankenzerfall.",
                        "sd_norm": [
                          0.28,
                          0.27
                        ],
                        "description": "Psychotizismus"
                      },
                      {
                        "items": 5,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.33,
                          0.34
                        ],
                        "id": 2,
                        "sub_left": "Paranoides Denken",
                        "short_description": "paranoides_denken",
                        "sub_right": "Misstrauen, Minderwertigkeitsgefühle, paranoides Denken: Gedankenprojektion, Feindseligkeit, Argwohn, Grandiosität, Einengung, Angst vor Autonomieverlust und wahnhafte Täuschung.",
                        "sd_norm": [
                          0.4,
                          0.38
                        ],
                        "description": "Paranoides Denken"
                      },
                      {
                        "items": 5,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.14,
                          0.16
                        ],
                        "id": 3,
                        "sub_left": "Phobische Angst",
                        "short_description": "phobische_angst",
                        "sub_right": "Andauernde und unangemessene Furcht als Reaktion auf eine bestimmte Person, einen Platz, ein Objekt oder eine charakteristische Situation, die zu Vermeidungs- oder Fluchtverhalten führt.",
                        "sd_norm": [
                          0.23,
                          0.25
                        ],
                        "description": "Phobische Angst"
                      },
                      {
                        "items": 5,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.29,
                          0.37
                        ],
                        "id": 4,
                        "sub_left": "Aggressivität / Feindseligkeit",
                        "short_description": "aggressivit__t___feindseligkeit",
                        "sub_right": "Reizbarkeit und Unausgeglichenheit bis hin zu starker Aggressivität. Ärger, Aggression, Irritierbarkeit, Zorn und Verstimmung.",
                        "sd_norm": [
                          0.35,
                          0.33
                        ],
                        "description": "Aggressivität / Feindseligkeit"
                      },
                      {
                        "items": 6,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.29,
                          0.39
                        ],
                        "id": 5,
                        "sub_left": "Ängstlichkeit",
                        "short_description": "__ngstlichkeit",
                        "sub_right": "Angst mit Nervosität, Spannungen und Zittern, Panikattacken und Schreckgefühlen, Gefühle von Besorgnis und Furcht.",
                        "sd_norm": [
                          0.31,
                          0.36
                        ],
                        "description": "Ängstlichkeit"
                      },
                      {
                        "items": 6,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.24,
                          0.33
                        ],
                        "id": 6,
                        "sub_left": "Depressivität",
                        "short_description": "depressivit__t",
                        "sub_right": "Gedrückte Stimmung, Gesunkenes Interesse am Leben, Verringerte Motivation und Energie, Hoffnungslosigkeit, bis hin zu Suizidgedanken.",
                        "sd_norm": [
                          0.32,
                          0.4
                        ],
                        "description": "Depressivität"
                      },
                      {
                        "items": 4,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.35,
                          0.49
                        ],
                        "id": 7,
                        "sub_left": "Unsicherheit im Sozialkontakt",
                        "short_description": "unsicherheit_im_sozialkontakt",
                        "sub_right": "Unzulänglichkeits- und Minderwertigkeitsgefühle, Selbstabwertungen im sozialen Kontakt, Selbstzweifel, Selbstunsicherheit und negative Erwartungen bzgl. dem eigenen zwischenmenschlichen Verhalten.",
                        "sd_norm": [
                          0.4,
                          0.45
                        ],
                        "description": "Unsicherheit im Sozialkontakt"
                      },
                      {
                        "items": 6,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.5,
                          0.54
                        ],
                        "id": 8,
                        "sub_left": "Zwanghaftigkeit",
                        "short_description": "zwanghaftigkeit",
                        "sub_right": "Gedanken, Impulse und Handlungen, die konstant vorhanden und nicht änderbar und ich-fremd oder ungewollt erlebt werden, Kognitive Leistungsstörungen.",
                        "sd_norm": [
                          0.46,
                          0.43
                        ],
                        "description": "Zwanghaftigkeit"
                      },
                      {
                        "items": 7,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.23,
                          0.32
                        ],
                        "id": 9,
                        "sub_left": "Somatisierung",
                        "short_description": "somatisierung",
                        "sub_right": "Kopfschmerzen, Herzbeschwerden, Atemprobleme, Magenbeschwerden, Muskelschmerzen, Schwächegefühl, Schweregefühl, Unwohlsein usw.",
                        "sd_norm": [
                          0.31,
                          0.33
                        ],
                        "description": "Somatisierung"
                      },
                      {
                        "items": 4,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          null,
                          null
                        ],
                        "id": 10,
                        "sub_left": "Zusatzitems",
                        "short_description": "zusatzitems",
                        "sub_right": "Zusatzitems",
                        "sd_norm": [
                          null,
                          null
                        ],
                        "description": "Zusatzitems"
                      }
                    ],
                    "variables": [
                      "sum_score",
                      "scale_score",
                      "z_score"
                    ],
                    "all_results_variables": [
                      "gsi_global_severity_index_sum_score",
                      "gsi_global_severity_index_scale_score",
                      "gsi_global_severity_index_z_score",
                      "psychotizismus_sum_score",
                      "psychotizismus_scale_score",
                      "psychotizismus_z_score",
                      "paranoides_denken_sum_score",
                      "paranoides_denken_scale_score",
                      "paranoides_denken_z_score",
                      "phobische_angst_sum_score",
                      "phobische_angst_scale_score",
                      "phobische_angst_z_score",
                      "aggressivit__t___feindseligkeit_sum_score",
                      "aggressivit__t___feindseligkeit_scale_score",
                      "aggressivit__t___feindseligkeit_z_score",
                      "__ngstlichkeit_sum_score",
                      "__ngstlichkeit_scale_score",
                      "__ngstlichkeit_z_score",
                      "depressivit__t_sum_score",
                      "depressivit__t_scale_score",
                      "depressivit__t_z_score",
                      "unsicherheit_im_sozialkontakt_sum_score",
                      "unsicherheit_im_sozialkontakt_scale_score",
                      "unsicherheit_im_sozialkontakt_z_score",
                      "zwanghaftigkeit_sum_score",
                      "zwanghaftigkeit_scale_score",
                      "zwanghaftigkeit_z_score",
                      "somatisierung_sum_score",
                      "somatisierung_scale_score",
                      "somatisierung_z_score",
                      "zusatzitems_sum_score",
                      "zusatzitems_scale_score",
                      "zusatzitems_z_score"
                    ]
                  }
                }
              },
              "calculation_found": true,
              "calculation_found_method": "variant_info"
            },
            {
              "all_found": true,
              "app_id": "ch.suedhang.apps.bscl_anq.production",
              "date": "2019-02-04T13:52:40Z",
              "response_id": 25294,
              "response": {
                "BSCL[sq504V23]": "0",
                "BSCL[sq504V45]": "0",
                "BSCL[sq504V18]": "1",
                "BSCL[sq504V01]": "1",
                "BSCL[sq504V20]": "1",
                "q501V04": "2",
                "datestamp": "2019-02-04 13:52:40",
                "BSCL[sq504V02]": "0",
                "BSCL[sq504V39]": "0",
                "Eintrittsort": "",
                "BSCL[sq504V46]": "0",
                "BSCL[sq504V07]": "0",
                "Austrittsort": "2",
                "BSCL[sq504V43]": "2",
                "BSCL[sq504V25]": "1",
                "BSCL[sq504V33]": "0",
                "optinomixHASH": "d9855b29-ac89-4d86-a2b0-4c55ea4d53ae0",
                "BSCL[sq504V08]": "0",
                "BSCL[sq504V11]": "0",
                "BSCL[sq504V50]": "1",
                "submitdate": "2019-02-04 13:52:40",
                "BSCL[sq504V36]": "1",
                "BSCL[sq504V49]": "0",
                "BSCL[sq504V14]": "0",
                "BSCL[sq504V17]": "0",
                "BSCL[sq504V53]": "0",
                "BSCL[sq504V35]": "1",
                "BSCL[sq504V03]": "0",
                "q504V00": "2019-02-04 00:00:00",
                "BSCL[sq504V21]": "0",
                "BSCL[sq504V38]": "1",
                "BSCL[sq504V47]": "0",
                "BSCL[sq504V26]": "0",
                "BSCL[sq504V40]": "0",
                "BSCL[sq504V04]": "0",
                "startdate": "2019-02-04 13:46:11",
                "BSCL[sq504V32]": "0",
                "BSCL[sq504V10]": "0",
                "BSCL[sq504V09]": "1",
                "BSCL[sq504V31]": "0",
                "BSCL[sq504V13]": "1",
                "BSCL[sq504V28]": "0",
                "startlanguage": "de",
                "BSCL[sq504V34]": "0",
                "BSCL[sq504V52]": "1",
                "BSCL[sq504V16]": "0",
                "BSCL[sq504V22]": "1",
                "PID": "13012",
                "BSCL[sq504V19]": "1",
                "BSCL[sq504V44]": "2",
                "id": "1159",
                "q501V06": "",
                "BSCL[sq504V41]": "0",
                "BSCL[sq504V05]": "2",
                "BSCL[sq504V27]": "0",
                "BSCL[sq504V42]": "0",
                "BSCL[sq504V06]": "1",
                "FID": "130120300",
                "BSCL[sq504V24]": "0",
                "BSCL[sq504V29]": "0",
                "BSCL[sq504V12]": "0",
                "BSCL[sq504V30]": "0",
                "q501V05": "0",
                "BSCL[sq504V51]": "1",
                "BSCL[sq504V15]": "1",
                "BSCL[sq504V48]": "1",
                "lastpage": "2",
                "BSCL[sq504V37]": "0"
              },
              "event": {
                "status": "done",
                "due": "2019-02-05T07:00:00Z",
                "url": "http://optinomic.suedhang.ch:8000/limesurvey_v2/index.php/survey/index/sid/366636/newtest/Y/lang/de?&366636X36X1188=d9855b29-ac89-4d86-a2b0-4c55ea4d53ae0&366636X36X1183=13012&366636X36X1187=130120300",
                "patient_uses_module_id": 25428,
                "random_hash": "d9855b29-ac89-4d86-a2b0-4c55ea4d53ae0",
                "survey_name": "BSCL",
                "patient_id": 3868,
                "responsibility": {
                  "type": "patient_via_assessment"
                },
                "module": "ch.suedhang.apps.bscl_anq.production",
                "overdue": {
                  "type": "ignore"
                },
                "created_at": "2019-02-02T07:00:00Z",
                "description": "BSCL - Austritt",
                "id": 40828,
                "extras": {
                  "created_at": "2.2.2019",
                  "due": "5.2.2019",
                  "status": "Done",
                  "status_de": "Erledigt",
                  "show_do_it_now": false
                }
              },
              "event_found": true,
              "event_id": 40828,
              "patient": {
                "age": 51,
                "birthday": "22.10.1968",
                "birthday_age": "22.10.1968 | 51",
                "name": "Breitenmoser Dominique",
                "birth_year": 1968,
                "secure": "Br. D. (1968)",
                "ansprache": "Herr",
                "anrede": "Herr Breitenmoser",
                "full_name": "Herr Breitenmoser Dominique (22.10.1968 | 51)",
                "full_address": "Aarburgerstrasse 96, 4600 Olten",
                "phone": "",
                "infoline": "Aarburgerstrasse 96, 4600 Olten",
                "color_main": "#3F51B5",
                "color_accent": "#E91E63"
              },
              "patient_found": true,
              "patient_id": 3868,
              "stay": {
                "photo": "",
                "cis_lead_doctor": null,
                "status": "",
                "phase": "complete",
                "frozen": true,
                "first_contact": null,
                "lead_therapist_id": 66,
                "start": "2018-11-20T12:45:00Z",
                "stop_status": null,
                "insurance_number": "",
                "patient_id": 3868,
                "insurance_provider": "PTS",
                "cis_fid": 1301203,
                "stop": "2019-02-12T12:30:00Z",
                "deputy_lead_therapist_id": null,
                "notes": "",
                "service_provider": "",
                "class": "S",
                "lead_therapist_id_overwrite": null,
                "id": 5992,
                "fid": 5992,
                "extras": {
                  "in_stay": false,
                  "duration": 84,
                  "phase_de": "Die Behandlung wurde vor mehr als 14 Tage beendet",
                  "phase_en": "the stay ended more than 14 days ago",
                  "beginn": "20.11.2018",
                  "from_to": "20.11.2018 - 12.2.2019",
                  "ende": "12.2.2019"
                }
              },
              "stay_found": true,
              "stay_id": 5992,
              "patient_uses_module": {
                "settings": {},
                "stay_id": 5992,
                "patient_id": 3868,
                "responsibility": null,
                "deactivated": false,
                "module": "ch.suedhang.apps.bscl_anq.production",
                "overdue": null,
                "last_event_generation": "2020-04-03T12:08:39.708986Z",
                "activated_on": "2018-11-21T14:01:40Z",
                "id": 25428
              },
              "patient_uses_module_found": true,
              "patient_uses_module_id": 25428,
              "calculation": {
                "scores_calculation": {
                  "all_results": {
                    "somatisierung_scale_score": 0,
                    "gsi_global_severity_index_scale_score": 0.43,
                    "zusatzitems_z_score": null,
                    "aggressivit__t___feindseligkeit_z_score": 0.31,
                    "phobische_angst_sum_score": 2,
                    "psychotizismus_z_score": 0.75,
                    "paranoides_denken_z_score": 0.18,
                    "zusatzitems_scale_score": 0.5,
                    "paranoides_denken_scale_score": 0.4,
                    "zwanghaftigkeit_sum_score": 4,
                    "aggressivit__t___feindseligkeit_scale_score": 0.4,
                    "psychotizismus_scale_score": 0.4,
                    "__ngstlichkeit_scale_score": 0.5,
                    "depressivit__t_sum_score": 4,
                    "unsicherheit_im_sozialkontakt_scale_score": 0.5,
                    "zusatzitems_sum_score": 2,
                    "unsicherheit_im_sozialkontakt_z_score": 0.38,
                    "__ngstlichkeit_z_score": 0.68,
                    "gsi_global_severity_index_sum_score": 23,
                    "somatisierung_sum_score": 0,
                    "depressivit__t_z_score": 1.34,
                    "depressivit__t_scale_score": 0.67,
                    "__ngstlichkeit_sum_score": 3,
                    "unsicherheit_im_sozialkontakt_sum_score": 2,
                    "phobische_angst_z_score": 1.13,
                    "zwanghaftigkeit_scale_score": 0.67,
                    "paranoides_denken_sum_score": 2,
                    "aggressivit__t___feindseligkeit_sum_score": 2,
                    "psychotizismus_sum_score": 2,
                    "somatisierung_z_score": -0.74,
                    "gsi_global_severity_index_z_score": 0.65,
                    "phobische_angst_scale_score": 0.4,
                    "zwanghaftigkeit_z_score": 0.37
                  },
                  "result_array": [
                    {
                      "items": 53,
                      "result": {
                        "scale_score": 0.43,
                        "z_score": 0.65,
                        "sum_score": 23
                      },
                      "m_norm": [
                        0.28,
                        0.35
                      ],
                      "id": 0,
                      "sub_left": "GSI (Global Severity Index)",
                      "short_description": "gsi_global_severity_index",
                      "sub_right": "Durchschnittliche Belastung in allen Bereichen",
                      "sd_norm": [
                        0.23,
                        0.23
                      ],
                      "description": "GSI (Global Severity Index)"
                    },
                    {
                      "items": 5,
                      "result": {
                        "scale_score": 0.4,
                        "z_score": 0.75,
                        "sum_score": 2
                      },
                      "m_norm": [
                        0.19,
                        0.19
                      ],
                      "id": 1,
                      "sub_left": "Psychotizismus",
                      "short_description": "psychotizismus",
                      "sub_right": "Gefühl der Isolation und zwischenmenschlichen Entfremdung. Verzerrter, isolierter Lebensstil bis zu Halluzination und Gedankenzerfall.",
                      "sd_norm": [
                        0.28,
                        0.27
                      ],
                      "description": "Psychotizismus"
                    },
                    {
                      "items": 5,
                      "result": {
                        "scale_score": 0.4,
                        "z_score": 0.18,
                        "sum_score": 2
                      },
                      "m_norm": [
                        0.33,
                        0.34
                      ],
                      "id": 2,
                      "sub_left": "Paranoides Denken",
                      "short_description": "paranoides_denken",
                      "sub_right": "Misstrauen, Minderwertigkeitsgefühle, paranoides Denken: Gedankenprojektion, Feindseligkeit, Argwohn, Grandiosität, Einengung, Angst vor Autonomieverlust und wahnhafte Täuschung.",
                      "sd_norm": [
                        0.4,
                        0.38
                      ],
                      "description": "Paranoides Denken"
                    },
                    {
                      "items": 5,
                      "result": {
                        "scale_score": 0.4,
                        "z_score": 1.13,
                        "sum_score": 2
                      },
                      "m_norm": [
                        0.14,
                        0.16
                      ],
                      "id": 3,
                      "sub_left": "Phobische Angst",
                      "short_description": "phobische_angst",
                      "sub_right": "Andauernde und unangemessene Furcht als Reaktion auf eine bestimmte Person, einen Platz, ein Objekt oder eine charakteristische Situation, die zu Vermeidungs- oder Fluchtverhalten führt.",
                      "sd_norm": [
                        0.23,
                        0.25
                      ],
                      "description": "Phobische Angst"
                    },
                    {
                      "items": 5,
                      "result": {
                        "scale_score": 0.4,
                        "z_score": 0.31,
                        "sum_score": 2
                      },
                      "m_norm": [
                        0.29,
                        0.37
                      ],
                      "id": 4,
                      "sub_left": "Aggressivität / Feindseligkeit",
                      "short_description": "aggressivit__t___feindseligkeit",
                      "sub_right": "Reizbarkeit und Unausgeglichenheit bis hin zu starker Aggressivität. Ärger, Aggression, Irritierbarkeit, Zorn und Verstimmung.",
                      "sd_norm": [
                        0.35,
                        0.33
                      ],
                      "description": "Aggressivität / Feindseligkeit"
                    },
                    {
                      "items": 6,
                      "result": {
                        "scale_score": 0.5,
                        "z_score": 0.68,
                        "sum_score": 3
                      },
                      "m_norm": [
                        0.29,
                        0.39
                      ],
                      "id": 5,
                      "sub_left": "Ängstlichkeit",
                      "short_description": "__ngstlichkeit",
                      "sub_right": "Angst mit Nervosität, Spannungen und Zittern, Panikattacken und Schreckgefühlen, Gefühle von Besorgnis und Furcht.",
                      "sd_norm": [
                        0.31,
                        0.36
                      ],
                      "description": "Ängstlichkeit"
                    },
                    {
                      "items": 6,
                      "result": {
                        "scale_score": 0.67,
                        "z_score": 1.34,
                        "sum_score": 4
                      },
                      "m_norm": [
                        0.24,
                        0.33
                      ],
                      "id": 6,
                      "sub_left": "Depressivität",
                      "short_description": "depressivit__t",
                      "sub_right": "Gedrückte Stimmung, Gesunkenes Interesse am Leben, Verringerte Motivation und Energie, Hoffnungslosigkeit, bis hin zu Suizidgedanken.",
                      "sd_norm": [
                        0.32,
                        0.4
                      ],
                      "description": "Depressivität"
                    },
                    {
                      "items": 4,
                      "result": {
                        "scale_score": 0.5,
                        "z_score": 0.38,
                        "sum_score": 2
                      },
                      "m_norm": [
                        0.35,
                        0.49
                      ],
                      "id": 7,
                      "sub_left": "Unsicherheit im Sozialkontakt",
                      "short_description": "unsicherheit_im_sozialkontakt",
                      "sub_right": "Unzulänglichkeits- und Minderwertigkeitsgefühle, Selbstabwertungen im sozialen Kontakt, Selbstzweifel, Selbstunsicherheit und negative Erwartungen bzgl. dem eigenen zwischenmenschlichen Verhalten.",
                      "sd_norm": [
                        0.4,
                        0.45
                      ],
                      "description": "Unsicherheit im Sozialkontakt"
                    },
                    {
                      "items": 6,
                      "result": {
                        "scale_score": 0.67,
                        "z_score": 0.37,
                        "sum_score": 4
                      },
                      "m_norm": [
                        0.5,
                        0.54
                      ],
                      "id": 8,
                      "sub_left": "Zwanghaftigkeit",
                      "short_description": "zwanghaftigkeit",
                      "sub_right": "Gedanken, Impulse und Handlungen, die konstant vorhanden und nicht änderbar und ich-fremd oder ungewollt erlebt werden, Kognitive Leistungsstörungen.",
                      "sd_norm": [
                        0.46,
                        0.43
                      ],
                      "description": "Zwanghaftigkeit"
                    },
                    {
                      "items": 7,
                      "result": {
                        "scale_score": 0,
                        "z_score": -0.74,
                        "sum_score": 0
                      },
                      "m_norm": [
                        0.23,
                        0.32
                      ],
                      "id": 9,
                      "sub_left": "Somatisierung",
                      "short_description": "somatisierung",
                      "sub_right": "Kopfschmerzen, Herzbeschwerden, Atemprobleme, Magenbeschwerden, Muskelschmerzen, Schwächegefühl, Schweregefühl, Unwohlsein usw.",
                      "sd_norm": [
                        0.31,
                        0.33
                      ],
                      "description": "Somatisierung"
                    },
                    {
                      "items": 4,
                      "result": {
                        "scale_score": 0.5,
                        "z_score": null,
                        "sum_score": 2
                      },
                      "m_norm": [
                        null,
                        null
                      ],
                      "id": 10,
                      "sub_left": "Zusatzitems",
                      "short_description": "zusatzitems",
                      "sub_right": "Zusatzitems",
                      "sd_norm": [
                        null,
                        null
                      ],
                      "description": "Zusatzitems"
                    }
                  ],
                  "zusatzitem": {
                    "mz_date": "2019-02-04 00:00:00",
                    "dropout_reason": null,
                    "mz_typ": "Austritt EP",
                    "dropout_code": 0,
                    "mz_id": 1,
                    "items": [
                      {
                        "field": 0,
                        "result": "überhaupt nicht",
                        "name": "Schlechter Appetit",
                        "id": 0
                      },
                      {
                        "field": 1,
                        "result": "ein wenig",
                        "name": "Einschlafschwierigkeiten",
                        "id": 1
                      },
                      {
                        "field": 0,
                        "result": "überhaupt nicht",
                        "name": "Gedanken an den Tod und ans Sterben",
                        "id": 2
                      },
                      {
                        "field": 1,
                        "result": "ein wenig",
                        "name": "Schuldgefühle",
                        "id": 3
                      }
                    ],
                    "mz_datum": "4.2.2019",
                    "dropout": false,
                    "mz_text": "Austritt - EP",
                    "id": 1159,
                    "0__name": "Schlechter Appetit",
                    "0__result": "überhaupt nicht",
                    "0__field": 0,
                    "1__name": "Einschlafschwierigkeiten",
                    "1__result": "ein wenig",
                    "1__field": 1,
                    "2__name": "Gedanken an den Tod und ans Sterben",
                    "2__result": "überhaupt nicht",
                    "2__field": 0,
                    "3__name": "Schuldgefühle",
                    "3__result": "ein wenig",
                    "3__field": 1
                  },
                  "info": {
                    "hash": "d9855b29-ac89-4d86-a2b0-4c55ea4d53ae0",
                    "response": {
                      "BSCL[sq504V23]": "0",
                      "BSCL[sq504V45]": "0",
                      "BSCL[sq504V18]": "1",
                      "BSCL[sq504V01]": "1",
                      "BSCL[sq504V20]": "1",
                      "q501V04": "2",
                      "datestamp": "2019-02-04 13:52:40",
                      "BSCL[sq504V02]": "0",
                      "BSCL[sq504V39]": "0",
                      "Eintrittsort": "",
                      "BSCL[sq504V46]": "0",
                      "BSCL[sq504V07]": "0",
                      "Austrittsort": "2",
                      "BSCL[sq504V43]": "2",
                      "BSCL[sq504V25]": "1",
                      "BSCL[sq504V33]": "0",
                      "optinomixHASH": "d9855b29-ac89-4d86-a2b0-4c55ea4d53ae0",
                      "BSCL[sq504V08]": "0",
                      "BSCL[sq504V11]": "0",
                      "BSCL[sq504V50]": "1",
                      "submitdate": "2019-02-04 13:52:40",
                      "BSCL[sq504V36]": "1",
                      "BSCL[sq504V49]": "0",
                      "BSCL[sq504V14]": "0",
                      "BSCL[sq504V17]": "0",
                      "BSCL[sq504V53]": "0",
                      "BSCL[sq504V35]": "1",
                      "BSCL[sq504V03]": "0",
                      "q504V00": "2019-02-04 00:00:00",
                      "BSCL[sq504V21]": "0",
                      "BSCL[sq504V38]": "1",
                      "BSCL[sq504V47]": "0",
                      "BSCL[sq504V26]": "0",
                      "BSCL[sq504V40]": "0",
                      "BSCL[sq504V04]": "0",
                      "startdate": "2019-02-04 13:46:11",
                      "BSCL[sq504V32]": "0",
                      "BSCL[sq504V10]": "0",
                      "BSCL[sq504V09]": "1",
                      "BSCL[sq504V31]": "0",
                      "BSCL[sq504V13]": "1",
                      "BSCL[sq504V28]": "0",
                      "startlanguage": "de",
                      "BSCL[sq504V34]": "0",
                      "BSCL[sq504V52]": "1",
                      "BSCL[sq504V16]": "0",
                      "BSCL[sq504V22]": "1",
                      "PID": "13012",
                      "BSCL[sq504V19]": "1",
                      "BSCL[sq504V44]": "2",
                      "id": "1159",
                      "q501V06": "",
                      "BSCL[sq504V41]": "0",
                      "BSCL[sq504V05]": "2",
                      "BSCL[sq504V27]": "0",
                      "BSCL[sq504V42]": "0",
                      "BSCL[sq504V06]": "1",
                      "FID": "130120300",
                      "BSCL[sq504V24]": "0",
                      "BSCL[sq504V29]": "0",
                      "BSCL[sq504V12]": "0",
                      "BSCL[sq504V30]": "0",
                      "q501V05": "0",
                      "BSCL[sq504V51]": "1",
                      "BSCL[sq504V15]": "1",
                      "BSCL[sq504V48]": "1",
                      "lastpage": "2",
                      "BSCL[sq504V37]": "0"
                    },
                    "mz": {
                      "mz_date": "2019-02-04 00:00:00",
                      "dropout_reason": null,
                      "mz_typ": "Austritt EP",
                      "dropout_code": 0,
                      "mz_id": 1,
                      "mz_datum": "4.2.2019",
                      "dropout": false,
                      "mz_text": "Austritt - EP"
                    },
                    "event_id": 40828,
                    "filled": "2019-02-04T13:52:40Z",
                    "response_id": 25294
                  },
                  "definitions": {
                    "result_array": [
                      {
                        "items": 53,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.28,
                          0.35
                        ],
                        "id": 0,
                        "sub_left": "GSI (Global Severity Index)",
                        "short_description": "gsi_global_severity_index",
                        "sub_right": "Durchschnittliche Belastung in allen Bereichen",
                        "sd_norm": [
                          0.23,
                          0.23
                        ],
                        "description": "GSI (Global Severity Index)"
                      },
                      {
                        "items": 5,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.19,
                          0.19
                        ],
                        "id": 1,
                        "sub_left": "Psychotizismus",
                        "short_description": "psychotizismus",
                        "sub_right": "Gefühl der Isolation und zwischenmenschlichen Entfremdung. Verzerrter, isolierter Lebensstil bis zu Halluzination und Gedankenzerfall.",
                        "sd_norm": [
                          0.28,
                          0.27
                        ],
                        "description": "Psychotizismus"
                      },
                      {
                        "items": 5,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.33,
                          0.34
                        ],
                        "id": 2,
                        "sub_left": "Paranoides Denken",
                        "short_description": "paranoides_denken",
                        "sub_right": "Misstrauen, Minderwertigkeitsgefühle, paranoides Denken: Gedankenprojektion, Feindseligkeit, Argwohn, Grandiosität, Einengung, Angst vor Autonomieverlust und wahnhafte Täuschung.",
                        "sd_norm": [
                          0.4,
                          0.38
                        ],
                        "description": "Paranoides Denken"
                      },
                      {
                        "items": 5,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.14,
                          0.16
                        ],
                        "id": 3,
                        "sub_left": "Phobische Angst",
                        "short_description": "phobische_angst",
                        "sub_right": "Andauernde und unangemessene Furcht als Reaktion auf eine bestimmte Person, einen Platz, ein Objekt oder eine charakteristische Situation, die zu Vermeidungs- oder Fluchtverhalten führt.",
                        "sd_norm": [
                          0.23,
                          0.25
                        ],
                        "description": "Phobische Angst"
                      },
                      {
                        "items": 5,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.29,
                          0.37
                        ],
                        "id": 4,
                        "sub_left": "Aggressivität / Feindseligkeit",
                        "short_description": "aggressivit__t___feindseligkeit",
                        "sub_right": "Reizbarkeit und Unausgeglichenheit bis hin zu starker Aggressivität. Ärger, Aggression, Irritierbarkeit, Zorn und Verstimmung.",
                        "sd_norm": [
                          0.35,
                          0.33
                        ],
                        "description": "Aggressivität / Feindseligkeit"
                      },
                      {
                        "items": 6,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.29,
                          0.39
                        ],
                        "id": 5,
                        "sub_left": "Ängstlichkeit",
                        "short_description": "__ngstlichkeit",
                        "sub_right": "Angst mit Nervosität, Spannungen und Zittern, Panikattacken und Schreckgefühlen, Gefühle von Besorgnis und Furcht.",
                        "sd_norm": [
                          0.31,
                          0.36
                        ],
                        "description": "Ängstlichkeit"
                      },
                      {
                        "items": 6,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.24,
                          0.33
                        ],
                        "id": 6,
                        "sub_left": "Depressivität",
                        "short_description": "depressivit__t",
                        "sub_right": "Gedrückte Stimmung, Gesunkenes Interesse am Leben, Verringerte Motivation und Energie, Hoffnungslosigkeit, bis hin zu Suizidgedanken.",
                        "sd_norm": [
                          0.32,
                          0.4
                        ],
                        "description": "Depressivität"
                      },
                      {
                        "items": 4,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.35,
                          0.49
                        ],
                        "id": 7,
                        "sub_left": "Unsicherheit im Sozialkontakt",
                        "short_description": "unsicherheit_im_sozialkontakt",
                        "sub_right": "Unzulänglichkeits- und Minderwertigkeitsgefühle, Selbstabwertungen im sozialen Kontakt, Selbstzweifel, Selbstunsicherheit und negative Erwartungen bzgl. dem eigenen zwischenmenschlichen Verhalten.",
                        "sd_norm": [
                          0.4,
                          0.45
                        ],
                        "description": "Unsicherheit im Sozialkontakt"
                      },
                      {
                        "items": 6,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.5,
                          0.54
                        ],
                        "id": 8,
                        "sub_left": "Zwanghaftigkeit",
                        "short_description": "zwanghaftigkeit",
                        "sub_right": "Gedanken, Impulse und Handlungen, die konstant vorhanden und nicht änderbar und ich-fremd oder ungewollt erlebt werden, Kognitive Leistungsstörungen.",
                        "sd_norm": [
                          0.46,
                          0.43
                        ],
                        "description": "Zwanghaftigkeit"
                      },
                      {
                        "items": 7,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.23,
                          0.32
                        ],
                        "id": 9,
                        "sub_left": "Somatisierung",
                        "short_description": "somatisierung",
                        "sub_right": "Kopfschmerzen, Herzbeschwerden, Atemprobleme, Magenbeschwerden, Muskelschmerzen, Schwächegefühl, Schweregefühl, Unwohlsein usw.",
                        "sd_norm": [
                          0.31,
                          0.33
                        ],
                        "description": "Somatisierung"
                      },
                      {
                        "items": 4,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          null,
                          null
                        ],
                        "id": 10,
                        "sub_left": "Zusatzitems",
                        "short_description": "zusatzitems",
                        "sub_right": "Zusatzitems",
                        "sd_norm": [
                          null,
                          null
                        ],
                        "description": "Zusatzitems"
                      }
                    ],
                    "variables": [
                      "sum_score",
                      "scale_score",
                      "z_score"
                    ],
                    "all_results_variables": [
                      "gsi_global_severity_index_sum_score",
                      "gsi_global_severity_index_scale_score",
                      "gsi_global_severity_index_z_score",
                      "psychotizismus_sum_score",
                      "psychotizismus_scale_score",
                      "psychotizismus_z_score",
                      "paranoides_denken_sum_score",
                      "paranoides_denken_scale_score",
                      "paranoides_denken_z_score",
                      "phobische_angst_sum_score",
                      "phobische_angst_scale_score",
                      "phobische_angst_z_score",
                      "aggressivit__t___feindseligkeit_sum_score",
                      "aggressivit__t___feindseligkeit_scale_score",
                      "aggressivit__t___feindseligkeit_z_score",
                      "__ngstlichkeit_sum_score",
                      "__ngstlichkeit_scale_score",
                      "__ngstlichkeit_z_score",
                      "depressivit__t_sum_score",
                      "depressivit__t_scale_score",
                      "depressivit__t_z_score",
                      "unsicherheit_im_sozialkontakt_sum_score",
                      "unsicherheit_im_sozialkontakt_scale_score",
                      "unsicherheit_im_sozialkontakt_z_score",
                      "zwanghaftigkeit_sum_score",
                      "zwanghaftigkeit_scale_score",
                      "zwanghaftigkeit_z_score",
                      "somatisierung_sum_score",
                      "somatisierung_scale_score",
                      "somatisierung_z_score",
                      "zusatzitems_sum_score",
                      "zusatzitems_scale_score",
                      "zusatzitems_z_score"
                    ]
                  }
                }
              },
              "calculation_found": true,
              "calculation_found_method": "variant_info"
            }
          ],
          "calculations_all": [
            {
              "result": [
                {
                  "all_results": {
                    "somatisierung_scale_score": 0,
                    "gsi_global_severity_index_scale_score": 0.43,
                    "zusatzitems_z_score": null,
                    "aggressivit__t___feindseligkeit_z_score": 0.31,
                    "phobische_angst_sum_score": 2,
                    "psychotizismus_z_score": 0.75,
                    "paranoides_denken_z_score": 0.18,
                    "zusatzitems_scale_score": 0.5,
                    "paranoides_denken_scale_score": 0.4,
                    "zwanghaftigkeit_sum_score": 4,
                    "aggressivit__t___feindseligkeit_scale_score": 0.4,
                    "psychotizismus_scale_score": 0.4,
                    "__ngstlichkeit_scale_score": 0.5,
                    "depressivit__t_sum_score": 4,
                    "unsicherheit_im_sozialkontakt_scale_score": 0.5,
                    "zusatzitems_sum_score": 2,
                    "unsicherheit_im_sozialkontakt_z_score": 0.38,
                    "__ngstlichkeit_z_score": 0.68,
                    "gsi_global_severity_index_sum_score": 23,
                    "somatisierung_sum_score": 0,
                    "depressivit__t_z_score": 1.34,
                    "depressivit__t_scale_score": 0.67,
                    "__ngstlichkeit_sum_score": 3,
                    "unsicherheit_im_sozialkontakt_sum_score": 2,
                    "phobische_angst_z_score": 1.13,
                    "zwanghaftigkeit_scale_score": 0.67,
                    "paranoides_denken_sum_score": 2,
                    "aggressivit__t___feindseligkeit_sum_score": 2,
                    "psychotizismus_sum_score": 2,
                    "somatisierung_z_score": -0.74,
                    "gsi_global_severity_index_z_score": 0.65,
                    "phobische_angst_scale_score": 0.4,
                    "zwanghaftigkeit_z_score": 0.37
                  },
                  "result_array": [
                    {
                      "items": 53,
                      "result": {
                        "scale_score": 0.43,
                        "z_score": 0.65,
                        "sum_score": 23
                      },
                      "m_norm": [
                        0.28,
                        0.35
                      ],
                      "id": 0,
                      "sub_left": "GSI (Global Severity Index)",
                      "short_description": "gsi_global_severity_index",
                      "sub_right": "Durchschnittliche Belastung in allen Bereichen",
                      "sd_norm": [
                        0.23,
                        0.23
                      ],
                      "description": "GSI (Global Severity Index)"
                    },
                    {
                      "items": 5,
                      "result": {
                        "scale_score": 0.4,
                        "z_score": 0.75,
                        "sum_score": 2
                      },
                      "m_norm": [
                        0.19,
                        0.19
                      ],
                      "id": 1,
                      "sub_left": "Psychotizismus",
                      "short_description": "psychotizismus",
                      "sub_right": "Gefühl der Isolation und zwischenmenschlichen Entfremdung. Verzerrter, isolierter Lebensstil bis zu Halluzination und Gedankenzerfall.",
                      "sd_norm": [
                        0.28,
                        0.27
                      ],
                      "description": "Psychotizismus"
                    },
                    {
                      "items": 5,
                      "result": {
                        "scale_score": 0.4,
                        "z_score": 0.18,
                        "sum_score": 2
                      },
                      "m_norm": [
                        0.33,
                        0.34
                      ],
                      "id": 2,
                      "sub_left": "Paranoides Denken",
                      "short_description": "paranoides_denken",
                      "sub_right": "Misstrauen, Minderwertigkeitsgefühle, paranoides Denken: Gedankenprojektion, Feindseligkeit, Argwohn, Grandiosität, Einengung, Angst vor Autonomieverlust und wahnhafte Täuschung.",
                      "sd_norm": [
                        0.4,
                        0.38
                      ],
                      "description": "Paranoides Denken"
                    },
                    {
                      "items": 5,
                      "result": {
                        "scale_score": 0.4,
                        "z_score": 1.13,
                        "sum_score": 2
                      },
                      "m_norm": [
                        0.14,
                        0.16
                      ],
                      "id": 3,
                      "sub_left": "Phobische Angst",
                      "short_description": "phobische_angst",
                      "sub_right": "Andauernde und unangemessene Furcht als Reaktion auf eine bestimmte Person, einen Platz, ein Objekt oder eine charakteristische Situation, die zu Vermeidungs- oder Fluchtverhalten führt.",
                      "sd_norm": [
                        0.23,
                        0.25
                      ],
                      "description": "Phobische Angst"
                    },
                    {
                      "items": 5,
                      "result": {
                        "scale_score": 0.4,
                        "z_score": 0.31,
                        "sum_score": 2
                      },
                      "m_norm": [
                        0.29,
                        0.37
                      ],
                      "id": 4,
                      "sub_left": "Aggressivität / Feindseligkeit",
                      "short_description": "aggressivit__t___feindseligkeit",
                      "sub_right": "Reizbarkeit und Unausgeglichenheit bis hin zu starker Aggressivität. Ärger, Aggression, Irritierbarkeit, Zorn und Verstimmung.",
                      "sd_norm": [
                        0.35,
                        0.33
                      ],
                      "description": "Aggressivität / Feindseligkeit"
                    },
                    {
                      "items": 6,
                      "result": {
                        "scale_score": 0.5,
                        "z_score": 0.68,
                        "sum_score": 3
                      },
                      "m_norm": [
                        0.29,
                        0.39
                      ],
                      "id": 5,
                      "sub_left": "Ängstlichkeit",
                      "short_description": "__ngstlichkeit",
                      "sub_right": "Angst mit Nervosität, Spannungen und Zittern, Panikattacken und Schreckgefühlen, Gefühle von Besorgnis und Furcht.",
                      "sd_norm": [
                        0.31,
                        0.36
                      ],
                      "description": "Ängstlichkeit"
                    },
                    {
                      "items": 6,
                      "result": {
                        "scale_score": 0.67,
                        "z_score": 1.34,
                        "sum_score": 4
                      },
                      "m_norm": [
                        0.24,
                        0.33
                      ],
                      "id": 6,
                      "sub_left": "Depressivität",
                      "short_description": "depressivit__t",
                      "sub_right": "Gedrückte Stimmung, Gesunkenes Interesse am Leben, Verringerte Motivation und Energie, Hoffnungslosigkeit, bis hin zu Suizidgedanken.",
                      "sd_norm": [
                        0.32,
                        0.4
                      ],
                      "description": "Depressivität"
                    },
                    {
                      "items": 4,
                      "result": {
                        "scale_score": 0.5,
                        "z_score": 0.38,
                        "sum_score": 2
                      },
                      "m_norm": [
                        0.35,
                        0.49
                      ],
                      "id": 7,
                      "sub_left": "Unsicherheit im Sozialkontakt",
                      "short_description": "unsicherheit_im_sozialkontakt",
                      "sub_right": "Unzulänglichkeits- und Minderwertigkeitsgefühle, Selbstabwertungen im sozialen Kontakt, Selbstzweifel, Selbstunsicherheit und negative Erwartungen bzgl. dem eigenen zwischenmenschlichen Verhalten.",
                      "sd_norm": [
                        0.4,
                        0.45
                      ],
                      "description": "Unsicherheit im Sozialkontakt"
                    },
                    {
                      "items": 6,
                      "result": {
                        "scale_score": 0.67,
                        "z_score": 0.37,
                        "sum_score": 4
                      },
                      "m_norm": [
                        0.5,
                        0.54
                      ],
                      "id": 8,
                      "sub_left": "Zwanghaftigkeit",
                      "short_description": "zwanghaftigkeit",
                      "sub_right": "Gedanken, Impulse und Handlungen, die konstant vorhanden und nicht änderbar und ich-fremd oder ungewollt erlebt werden, Kognitive Leistungsstörungen.",
                      "sd_norm": [
                        0.46,
                        0.43
                      ],
                      "description": "Zwanghaftigkeit"
                    },
                    {
                      "items": 7,
                      "result": {
                        "scale_score": 0,
                        "z_score": -0.74,
                        "sum_score": 0
                      },
                      "m_norm": [
                        0.23,
                        0.32
                      ],
                      "id": 9,
                      "sub_left": "Somatisierung",
                      "short_description": "somatisierung",
                      "sub_right": "Kopfschmerzen, Herzbeschwerden, Atemprobleme, Magenbeschwerden, Muskelschmerzen, Schwächegefühl, Schweregefühl, Unwohlsein usw.",
                      "sd_norm": [
                        0.31,
                        0.33
                      ],
                      "description": "Somatisierung"
                    },
                    {
                      "items": 4,
                      "result": {
                        "scale_score": 0.5,
                        "z_score": null,
                        "sum_score": 2
                      },
                      "m_norm": [
                        null,
                        null
                      ],
                      "id": 10,
                      "sub_left": "Zusatzitems",
                      "short_description": "zusatzitems",
                      "sub_right": "Zusatzitems",
                      "sd_norm": [
                        null,
                        null
                      ],
                      "description": "Zusatzitems"
                    }
                  ],
                  "zusatzitem": {
                    "mz_date": "2019-02-04 00:00:00",
                    "dropout_reason": null,
                    "mz_typ": "Austritt EP",
                    "dropout_code": 0,
                    "mz_id": 1,
                    "items": [
                      {
                        "field": 0,
                        "result": "überhaupt nicht",
                        "name": "Schlechter Appetit",
                        "id": 0
                      },
                      {
                        "field": 1,
                        "result": "ein wenig",
                        "name": "Einschlafschwierigkeiten",
                        "id": 1
                      },
                      {
                        "field": 0,
                        "result": "überhaupt nicht",
                        "name": "Gedanken an den Tod und ans Sterben",
                        "id": 2
                      },
                      {
                        "field": 1,
                        "result": "ein wenig",
                        "name": "Schuldgefühle",
                        "id": 3
                      }
                    ],
                    "mz_datum": "4.2.2019",
                    "dropout": false,
                    "mz_text": "Austritt - EP",
                    "id": 1159,
                    "0__name": "Schlechter Appetit",
                    "0__result": "überhaupt nicht",
                    "0__field": 0,
                    "1__name": "Einschlafschwierigkeiten",
                    "1__result": "ein wenig",
                    "1__field": 1,
                    "2__name": "Gedanken an den Tod und ans Sterben",
                    "2__result": "überhaupt nicht",
                    "2__field": 0,
                    "3__name": "Schuldgefühle",
                    "3__result": "ein wenig",
                    "3__field": 1
                  },
                  "info": {
                    "hash": "d9855b29-ac89-4d86-a2b0-4c55ea4d53ae0",
                    "response": {
                      "BSCL[sq504V23]": "0",
                      "BSCL[sq504V45]": "0",
                      "BSCL[sq504V18]": "1",
                      "BSCL[sq504V01]": "1",
                      "BSCL[sq504V20]": "1",
                      "q501V04": "2",
                      "datestamp": "2019-02-04 13:52:40",
                      "BSCL[sq504V02]": "0",
                      "BSCL[sq504V39]": "0",
                      "Eintrittsort": "",
                      "BSCL[sq504V46]": "0",
                      "BSCL[sq504V07]": "0",
                      "Austrittsort": "2",
                      "BSCL[sq504V43]": "2",
                      "BSCL[sq504V25]": "1",
                      "BSCL[sq504V33]": "0",
                      "optinomixHASH": "d9855b29-ac89-4d86-a2b0-4c55ea4d53ae0",
                      "BSCL[sq504V08]": "0",
                      "BSCL[sq504V11]": "0",
                      "BSCL[sq504V50]": "1",
                      "submitdate": "2019-02-04 13:52:40",
                      "BSCL[sq504V36]": "1",
                      "BSCL[sq504V49]": "0",
                      "BSCL[sq504V14]": "0",
                      "BSCL[sq504V17]": "0",
                      "BSCL[sq504V53]": "0",
                      "BSCL[sq504V35]": "1",
                      "BSCL[sq504V03]": "0",
                      "q504V00": "2019-02-04 00:00:00",
                      "BSCL[sq504V21]": "0",
                      "BSCL[sq504V38]": "1",
                      "BSCL[sq504V47]": "0",
                      "BSCL[sq504V26]": "0",
                      "BSCL[sq504V40]": "0",
                      "BSCL[sq504V04]": "0",
                      "startdate": "2019-02-04 13:46:11",
                      "BSCL[sq504V32]": "0",
                      "BSCL[sq504V10]": "0",
                      "BSCL[sq504V09]": "1",
                      "BSCL[sq504V31]": "0",
                      "BSCL[sq504V13]": "1",
                      "BSCL[sq504V28]": "0",
                      "startlanguage": "de",
                      "BSCL[sq504V34]": "0",
                      "BSCL[sq504V52]": "1",
                      "BSCL[sq504V16]": "0",
                      "BSCL[sq504V22]": "1",
                      "PID": "13012",
                      "BSCL[sq504V19]": "1",
                      "BSCL[sq504V44]": "2",
                      "id": "1159",
                      "q501V06": "",
                      "BSCL[sq504V41]": "0",
                      "BSCL[sq504V05]": "2",
                      "BSCL[sq504V27]": "0",
                      "BSCL[sq504V42]": "0",
                      "BSCL[sq504V06]": "1",
                      "FID": "130120300",
                      "BSCL[sq504V24]": "0",
                      "BSCL[sq504V29]": "0",
                      "BSCL[sq504V12]": "0",
                      "BSCL[sq504V30]": "0",
                      "q501V05": "0",
                      "BSCL[sq504V51]": "1",
                      "BSCL[sq504V15]": "1",
                      "BSCL[sq504V48]": "1",
                      "lastpage": "2",
                      "BSCL[sq504V37]": "0"
                    },
                    "mz": {
                      "mz_date": "2019-02-04 00:00:00",
                      "dropout_reason": null,
                      "mz_typ": "Austritt EP",
                      "dropout_code": 0,
                      "mz_id": 1,
                      "mz_datum": "4.2.2019",
                      "dropout": false,
                      "mz_text": "Austritt - EP"
                    },
                    "event_id": 40828,
                    "filled": "2019-02-04T13:52:40Z",
                    "response_id": 25294
                  },
                  "definitions": {
                    "result_array": [
                      {
                        "items": 53,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.28,
                          0.35
                        ],
                        "id": 0,
                        "sub_left": "GSI (Global Severity Index)",
                        "short_description": "gsi_global_severity_index",
                        "sub_right": "Durchschnittliche Belastung in allen Bereichen",
                        "sd_norm": [
                          0.23,
                          0.23
                        ],
                        "description": "GSI (Global Severity Index)"
                      },
                      {
                        "items": 5,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.19,
                          0.19
                        ],
                        "id": 1,
                        "sub_left": "Psychotizismus",
                        "short_description": "psychotizismus",
                        "sub_right": "Gefühl der Isolation und zwischenmenschlichen Entfremdung. Verzerrter, isolierter Lebensstil bis zu Halluzination und Gedankenzerfall.",
                        "sd_norm": [
                          0.28,
                          0.27
                        ],
                        "description": "Psychotizismus"
                      },
                      {
                        "items": 5,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.33,
                          0.34
                        ],
                        "id": 2,
                        "sub_left": "Paranoides Denken",
                        "short_description": "paranoides_denken",
                        "sub_right": "Misstrauen, Minderwertigkeitsgefühle, paranoides Denken: Gedankenprojektion, Feindseligkeit, Argwohn, Grandiosität, Einengung, Angst vor Autonomieverlust und wahnhafte Täuschung.",
                        "sd_norm": [
                          0.4,
                          0.38
                        ],
                        "description": "Paranoides Denken"
                      },
                      {
                        "items": 5,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.14,
                          0.16
                        ],
                        "id": 3,
                        "sub_left": "Phobische Angst",
                        "short_description": "phobische_angst",
                        "sub_right": "Andauernde und unangemessene Furcht als Reaktion auf eine bestimmte Person, einen Platz, ein Objekt oder eine charakteristische Situation, die zu Vermeidungs- oder Fluchtverhalten führt.",
                        "sd_norm": [
                          0.23,
                          0.25
                        ],
                        "description": "Phobische Angst"
                      },
                      {
                        "items": 5,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.29,
                          0.37
                        ],
                        "id": 4,
                        "sub_left": "Aggressivität / Feindseligkeit",
                        "short_description": "aggressivit__t___feindseligkeit",
                        "sub_right": "Reizbarkeit und Unausgeglichenheit bis hin zu starker Aggressivität. Ärger, Aggression, Irritierbarkeit, Zorn und Verstimmung.",
                        "sd_norm": [
                          0.35,
                          0.33
                        ],
                        "description": "Aggressivität / Feindseligkeit"
                      },
                      {
                        "items": 6,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.29,
                          0.39
                        ],
                        "id": 5,
                        "sub_left": "Ängstlichkeit",
                        "short_description": "__ngstlichkeit",
                        "sub_right": "Angst mit Nervosität, Spannungen und Zittern, Panikattacken und Schreckgefühlen, Gefühle von Besorgnis und Furcht.",
                        "sd_norm": [
                          0.31,
                          0.36
                        ],
                        "description": "Ängstlichkeit"
                      },
                      {
                        "items": 6,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.24,
                          0.33
                        ],
                        "id": 6,
                        "sub_left": "Depressivität",
                        "short_description": "depressivit__t",
                        "sub_right": "Gedrückte Stimmung, Gesunkenes Interesse am Leben, Verringerte Motivation und Energie, Hoffnungslosigkeit, bis hin zu Suizidgedanken.",
                        "sd_norm": [
                          0.32,
                          0.4
                        ],
                        "description": "Depressivität"
                      },
                      {
                        "items": 4,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.35,
                          0.49
                        ],
                        "id": 7,
                        "sub_left": "Unsicherheit im Sozialkontakt",
                        "short_description": "unsicherheit_im_sozialkontakt",
                        "sub_right": "Unzulänglichkeits- und Minderwertigkeitsgefühle, Selbstabwertungen im sozialen Kontakt, Selbstzweifel, Selbstunsicherheit und negative Erwartungen bzgl. dem eigenen zwischenmenschlichen Verhalten.",
                        "sd_norm": [
                          0.4,
                          0.45
                        ],
                        "description": "Unsicherheit im Sozialkontakt"
                      },
                      {
                        "items": 6,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.5,
                          0.54
                        ],
                        "id": 8,
                        "sub_left": "Zwanghaftigkeit",
                        "short_description": "zwanghaftigkeit",
                        "sub_right": "Gedanken, Impulse und Handlungen, die konstant vorhanden und nicht änderbar und ich-fremd oder ungewollt erlebt werden, Kognitive Leistungsstörungen.",
                        "sd_norm": [
                          0.46,
                          0.43
                        ],
                        "description": "Zwanghaftigkeit"
                      },
                      {
                        "items": 7,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.23,
                          0.32
                        ],
                        "id": 9,
                        "sub_left": "Somatisierung",
                        "short_description": "somatisierung",
                        "sub_right": "Kopfschmerzen, Herzbeschwerden, Atemprobleme, Magenbeschwerden, Muskelschmerzen, Schwächegefühl, Schweregefühl, Unwohlsein usw.",
                        "sd_norm": [
                          0.31,
                          0.33
                        ],
                        "description": "Somatisierung"
                      },
                      {
                        "items": 4,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          null,
                          null
                        ],
                        "id": 10,
                        "sub_left": "Zusatzitems",
                        "short_description": "zusatzitems",
                        "sub_right": "Zusatzitems",
                        "sd_norm": [
                          null,
                          null
                        ],
                        "description": "Zusatzitems"
                      }
                    ],
                    "variables": [
                      "sum_score",
                      "scale_score",
                      "z_score"
                    ],
                    "all_results_variables": [
                      "gsi_global_severity_index_sum_score",
                      "gsi_global_severity_index_scale_score",
                      "gsi_global_severity_index_z_score",
                      "psychotizismus_sum_score",
                      "psychotizismus_scale_score",
                      "psychotizismus_z_score",
                      "paranoides_denken_sum_score",
                      "paranoides_denken_scale_score",
                      "paranoides_denken_z_score",
                      "phobische_angst_sum_score",
                      "phobische_angst_scale_score",
                      "phobische_angst_z_score",
                      "aggressivit__t___feindseligkeit_sum_score",
                      "aggressivit__t___feindseligkeit_scale_score",
                      "aggressivit__t___feindseligkeit_z_score",
                      "__ngstlichkeit_sum_score",
                      "__ngstlichkeit_scale_score",
                      "__ngstlichkeit_z_score",
                      "depressivit__t_sum_score",
                      "depressivit__t_scale_score",
                      "depressivit__t_z_score",
                      "unsicherheit_im_sozialkontakt_sum_score",
                      "unsicherheit_im_sozialkontakt_scale_score",
                      "unsicherheit_im_sozialkontakt_z_score",
                      "zwanghaftigkeit_sum_score",
                      "zwanghaftigkeit_scale_score",
                      "zwanghaftigkeit_z_score",
                      "somatisierung_sum_score",
                      "somatisierung_scale_score",
                      "somatisierung_z_score",
                      "zusatzitems_sum_score",
                      "zusatzitems_scale_score",
                      "zusatzitems_z_score"
                    ]
                  }
                },
                {
                  "all_results": {
                    "somatisierung_scale_score": 0,
                    "gsi_global_severity_index_scale_score": 0.57,
                    "zusatzitems_z_score": null,
                    "aggressivit__t___feindseligkeit_z_score": -0.26,
                    "phobische_angst_sum_score": 2,
                    "psychotizismus_z_score": 0.75,
                    "paranoides_denken_z_score": -0.32,
                    "zusatzitems_scale_score": 0.25,
                    "paranoides_denken_scale_score": 0.2,
                    "zwanghaftigkeit_sum_score": 9,
                    "aggressivit__t___feindseligkeit_scale_score": 0.2,
                    "psychotizismus_scale_score": 0.4,
                    "__ngstlichkeit_scale_score": 0.67,
                    "depressivit__t_sum_score": 6,
                    "unsicherheit_im_sozialkontakt_scale_score": 1,
                    "zusatzitems_sum_score": 1,
                    "unsicherheit_im_sozialkontakt_z_score": 1.63,
                    "__ngstlichkeit_z_score": 1.23,
                    "gsi_global_severity_index_sum_score": 30,
                    "somatisierung_sum_score": 0,
                    "depressivit__t_z_score": 2.38,
                    "depressivit__t_scale_score": 1,
                    "__ngstlichkeit_sum_score": 4,
                    "unsicherheit_im_sozialkontakt_sum_score": 4,
                    "phobische_angst_z_score": 1.13,
                    "zwanghaftigkeit_scale_score": 1.5,
                    "paranoides_denken_sum_score": 1,
                    "aggressivit__t___feindseligkeit_sum_score": 1,
                    "psychotizismus_sum_score": 2,
                    "somatisierung_z_score": -0.74,
                    "gsi_global_severity_index_z_score": 1.26,
                    "phobische_angst_scale_score": 0.4,
                    "zwanghaftigkeit_z_score": 2.17
                  },
                  "result_array": [
                    {
                      "items": 53,
                      "result": {
                        "scale_score": 0.57,
                        "z_score": 1.26,
                        "sum_score": 30
                      },
                      "m_norm": [
                        0.28,
                        0.35
                      ],
                      "id": 0,
                      "sub_left": "GSI (Global Severity Index)",
                      "short_description": "gsi_global_severity_index",
                      "sub_right": "Durchschnittliche Belastung in allen Bereichen",
                      "sd_norm": [
                        0.23,
                        0.23
                      ],
                      "description": "GSI (Global Severity Index)"
                    },
                    {
                      "items": 5,
                      "result": {
                        "scale_score": 0.4,
                        "z_score": 0.75,
                        "sum_score": 2
                      },
                      "m_norm": [
                        0.19,
                        0.19
                      ],
                      "id": 1,
                      "sub_left": "Psychotizismus",
                      "short_description": "psychotizismus",
                      "sub_right": "Gefühl der Isolation und zwischenmenschlichen Entfremdung. Verzerrter, isolierter Lebensstil bis zu Halluzination und Gedankenzerfall.",
                      "sd_norm": [
                        0.28,
                        0.27
                      ],
                      "description": "Psychotizismus"
                    },
                    {
                      "items": 5,
                      "result": {
                        "scale_score": 0.2,
                        "z_score": -0.32,
                        "sum_score": 1
                      },
                      "m_norm": [
                        0.33,
                        0.34
                      ],
                      "id": 2,
                      "sub_left": "Paranoides Denken",
                      "short_description": "paranoides_denken",
                      "sub_right": "Misstrauen, Minderwertigkeitsgefühle, paranoides Denken: Gedankenprojektion, Feindseligkeit, Argwohn, Grandiosität, Einengung, Angst vor Autonomieverlust und wahnhafte Täuschung.",
                      "sd_norm": [
                        0.4,
                        0.38
                      ],
                      "description": "Paranoides Denken"
                    },
                    {
                      "items": 5,
                      "result": {
                        "scale_score": 0.4,
                        "z_score": 1.13,
                        "sum_score": 2
                      },
                      "m_norm": [
                        0.14,
                        0.16
                      ],
                      "id": 3,
                      "sub_left": "Phobische Angst",
                      "short_description": "phobische_angst",
                      "sub_right": "Andauernde und unangemessene Furcht als Reaktion auf eine bestimmte Person, einen Platz, ein Objekt oder eine charakteristische Situation, die zu Vermeidungs- oder Fluchtverhalten führt.",
                      "sd_norm": [
                        0.23,
                        0.25
                      ],
                      "description": "Phobische Angst"
                    },
                    {
                      "items": 5,
                      "result": {
                        "scale_score": 0.2,
                        "z_score": -0.26,
                        "sum_score": 1
                      },
                      "m_norm": [
                        0.29,
                        0.37
                      ],
                      "id": 4,
                      "sub_left": "Aggressivität / Feindseligkeit",
                      "short_description": "aggressivit__t___feindseligkeit",
                      "sub_right": "Reizbarkeit und Unausgeglichenheit bis hin zu starker Aggressivität. Ärger, Aggression, Irritierbarkeit, Zorn und Verstimmung.",
                      "sd_norm": [
                        0.35,
                        0.33
                      ],
                      "description": "Aggressivität / Feindseligkeit"
                    },
                    {
                      "items": 6,
                      "result": {
                        "scale_score": 0.67,
                        "z_score": 1.23,
                        "sum_score": 4
                      },
                      "m_norm": [
                        0.29,
                        0.39
                      ],
                      "id": 5,
                      "sub_left": "Ängstlichkeit",
                      "short_description": "__ngstlichkeit",
                      "sub_right": "Angst mit Nervosität, Spannungen und Zittern, Panikattacken und Schreckgefühlen, Gefühle von Besorgnis und Furcht.",
                      "sd_norm": [
                        0.31,
                        0.36
                      ],
                      "description": "Ängstlichkeit"
                    },
                    {
                      "items": 6,
                      "result": {
                        "scale_score": 1,
                        "z_score": 2.38,
                        "sum_score": 6
                      },
                      "m_norm": [
                        0.24,
                        0.33
                      ],
                      "id": 6,
                      "sub_left": "Depressivität",
                      "short_description": "depressivit__t",
                      "sub_right": "Gedrückte Stimmung, Gesunkenes Interesse am Leben, Verringerte Motivation und Energie, Hoffnungslosigkeit, bis hin zu Suizidgedanken.",
                      "sd_norm": [
                        0.32,
                        0.4
                      ],
                      "description": "Depressivität"
                    },
                    {
                      "items": 4,
                      "result": {
                        "scale_score": 1,
                        "z_score": 1.63,
                        "sum_score": 4
                      },
                      "m_norm": [
                        0.35,
                        0.49
                      ],
                      "id": 7,
                      "sub_left": "Unsicherheit im Sozialkontakt",
                      "short_description": "unsicherheit_im_sozialkontakt",
                      "sub_right": "Unzulänglichkeits- und Minderwertigkeitsgefühle, Selbstabwertungen im sozialen Kontakt, Selbstzweifel, Selbstunsicherheit und negative Erwartungen bzgl. dem eigenen zwischenmenschlichen Verhalten.",
                      "sd_norm": [
                        0.4,
                        0.45
                      ],
                      "description": "Unsicherheit im Sozialkontakt"
                    },
                    {
                      "items": 6,
                      "result": {
                        "scale_score": 1.5,
                        "z_score": 2.17,
                        "sum_score": 9
                      },
                      "m_norm": [
                        0.5,
                        0.54
                      ],
                      "id": 8,
                      "sub_left": "Zwanghaftigkeit",
                      "short_description": "zwanghaftigkeit",
                      "sub_right": "Gedanken, Impulse und Handlungen, die konstant vorhanden und nicht änderbar und ich-fremd oder ungewollt erlebt werden, Kognitive Leistungsstörungen.",
                      "sd_norm": [
                        0.46,
                        0.43
                      ],
                      "description": "Zwanghaftigkeit"
                    },
                    {
                      "items": 7,
                      "result": {
                        "scale_score": 0,
                        "z_score": -0.74,
                        "sum_score": 0
                      },
                      "m_norm": [
                        0.23,
                        0.32
                      ],
                      "id": 9,
                      "sub_left": "Somatisierung",
                      "short_description": "somatisierung",
                      "sub_right": "Kopfschmerzen, Herzbeschwerden, Atemprobleme, Magenbeschwerden, Muskelschmerzen, Schwächegefühl, Schweregefühl, Unwohlsein usw.",
                      "sd_norm": [
                        0.31,
                        0.33
                      ],
                      "description": "Somatisierung"
                    },
                    {
                      "items": 4,
                      "result": {
                        "scale_score": 0.25,
                        "z_score": null,
                        "sum_score": 1
                      },
                      "m_norm": [
                        null,
                        null
                      ],
                      "id": 10,
                      "sub_left": "Zusatzitems",
                      "short_description": "zusatzitems",
                      "sub_right": "Zusatzitems",
                      "sd_norm": [
                        null,
                        null
                      ],
                      "description": "Zusatzitems"
                    }
                  ],
                  "zusatzitem": {
                    "mz_date": "2018-11-21 00:00:00",
                    "dropout_reason": null,
                    "mz_typ": "Eintritt EP",
                    "dropout_code": 0,
                    "mz_id": 4,
                    "items": [
                      {
                        "field": 0,
                        "result": "überhaupt nicht",
                        "name": "Schlechter Appetit",
                        "id": 0
                      },
                      {
                        "field": 0,
                        "result": "überhaupt nicht",
                        "name": "Einschlafschwierigkeiten",
                        "id": 1
                      },
                      {
                        "field": 0,
                        "result": "überhaupt nicht",
                        "name": "Gedanken an den Tod und ans Sterben",
                        "id": 2
                      },
                      {
                        "field": 1,
                        "result": "ein wenig",
                        "name": "Schuldgefühle",
                        "id": 3
                      }
                    ],
                    "mz_datum": "21.11.2018",
                    "dropout": false,
                    "mz_text": "Eintritt - EP",
                    "id": 1049,
                    "0__name": "Schlechter Appetit",
                    "0__result": "überhaupt nicht",
                    "0__field": 0,
                    "1__name": "Einschlafschwierigkeiten",
                    "1__result": "überhaupt nicht",
                    "1__field": 0,
                    "2__name": "Gedanken an den Tod und ans Sterben",
                    "2__result": "überhaupt nicht",
                    "2__field": 0,
                    "3__name": "Schuldgefühle",
                    "3__result": "ein wenig",
                    "3__field": 1
                  },
                  "info": {
                    "hash": "a5a0970c-72e7-4743-ad19-f216d748f65b",
                    "response": {
                      "BSCL[sq504V23]": "0",
                      "BSCL[sq504V45]": "0",
                      "BSCL[sq504V18]": "2",
                      "BSCL[sq504V01]": "2",
                      "BSCL[sq504V20]": "2",
                      "q501V04": "1",
                      "datestamp": "2018-11-21 16:01:27",
                      "BSCL[sq504V02]": "0",
                      "BSCL[sq504V39]": "0",
                      "Eintrittsort": "2",
                      "BSCL[sq504V46]": "0",
                      "BSCL[sq504V07]": "0",
                      "Austrittsort": "",
                      "BSCL[sq504V43]": "1",
                      "BSCL[sq504V25]": "0",
                      "BSCL[sq504V33]": "0",
                      "optinomixHASH": "a5a0970c-72e7-4743-ad19-f216d748f65b",
                      "BSCL[sq504V08]": "0",
                      "BSCL[sq504V11]": "0",
                      "BSCL[sq504V50]": "1",
                      "submitdate": "2018-11-21 16:01:27",
                      "BSCL[sq504V36]": "2",
                      "BSCL[sq504V49]": "0",
                      "BSCL[sq504V14]": "0",
                      "BSCL[sq504V17]": "0",
                      "BSCL[sq504V53]": "1",
                      "BSCL[sq504V35]": "2",
                      "BSCL[sq504V03]": "0",
                      "q504V00": "2018-11-21 00:00:00",
                      "BSCL[sq504V21]": "0",
                      "BSCL[sq504V38]": "1",
                      "BSCL[sq504V47]": "0",
                      "BSCL[sq504V26]": "0",
                      "BSCL[sq504V40]": "0",
                      "BSCL[sq504V04]": "0",
                      "startdate": "2018-11-21 15:53:02",
                      "BSCL[sq504V32]": "1",
                      "BSCL[sq504V10]": "0",
                      "BSCL[sq504V09]": "1",
                      "BSCL[sq504V31]": "1",
                      "BSCL[sq504V13]": "0",
                      "BSCL[sq504V28]": "0",
                      "startlanguage": "de",
                      "BSCL[sq504V34]": "0",
                      "BSCL[sq504V52]": "1",
                      "BSCL[sq504V16]": "0",
                      "BSCL[sq504V22]": "2",
                      "PID": "13012",
                      "BSCL[sq504V19]": "1",
                      "BSCL[sq504V44]": "1",
                      "id": "1049",
                      "q501V06": "",
                      "BSCL[sq504V41]": "0",
                      "BSCL[sq504V05]": "2",
                      "BSCL[sq504V27]": "2",
                      "BSCL[sq504V42]": "0",
                      "BSCL[sq504V06]": "1",
                      "FID": "130120300",
                      "BSCL[sq504V24]": "0",
                      "BSCL[sq504V29]": "0",
                      "BSCL[sq504V12]": "0",
                      "BSCL[sq504V30]": "0",
                      "q501V05": "0",
                      "BSCL[sq504V51]": "1",
                      "BSCL[sq504V15]": "2",
                      "BSCL[sq504V48]": "0",
                      "lastpage": "2",
                      "BSCL[sq504V37]": "0"
                    },
                    "mz": {
                      "mz_date": "2018-11-21 00:00:00",
                      "dropout_reason": null,
                      "mz_typ": "Eintritt EP",
                      "dropout_code": 0,
                      "mz_id": 4,
                      "mz_datum": "21.11.2018",
                      "dropout": false,
                      "mz_text": "Eintritt - EP"
                    },
                    "event_id": 39090,
                    "filled": "2018-11-21T16:01:27Z",
                    "response_id": 24038
                  },
                  "definitions": {
                    "result_array": [
                      {
                        "items": 53,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.28,
                          0.35
                        ],
                        "id": 0,
                        "sub_left": "GSI (Global Severity Index)",
                        "short_description": "gsi_global_severity_index",
                        "sub_right": "Durchschnittliche Belastung in allen Bereichen",
                        "sd_norm": [
                          0.23,
                          0.23
                        ],
                        "description": "GSI (Global Severity Index)"
                      },
                      {
                        "items": 5,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.19,
                          0.19
                        ],
                        "id": 1,
                        "sub_left": "Psychotizismus",
                        "short_description": "psychotizismus",
                        "sub_right": "Gefühl der Isolation und zwischenmenschlichen Entfremdung. Verzerrter, isolierter Lebensstil bis zu Halluzination und Gedankenzerfall.",
                        "sd_norm": [
                          0.28,
                          0.27
                        ],
                        "description": "Psychotizismus"
                      },
                      {
                        "items": 5,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.33,
                          0.34
                        ],
                        "id": 2,
                        "sub_left": "Paranoides Denken",
                        "short_description": "paranoides_denken",
                        "sub_right": "Misstrauen, Minderwertigkeitsgefühle, paranoides Denken: Gedankenprojektion, Feindseligkeit, Argwohn, Grandiosität, Einengung, Angst vor Autonomieverlust und wahnhafte Täuschung.",
                        "sd_norm": [
                          0.4,
                          0.38
                        ],
                        "description": "Paranoides Denken"
                      },
                      {
                        "items": 5,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.14,
                          0.16
                        ],
                        "id": 3,
                        "sub_left": "Phobische Angst",
                        "short_description": "phobische_angst",
                        "sub_right": "Andauernde und unangemessene Furcht als Reaktion auf eine bestimmte Person, einen Platz, ein Objekt oder eine charakteristische Situation, die zu Vermeidungs- oder Fluchtverhalten führt.",
                        "sd_norm": [
                          0.23,
                          0.25
                        ],
                        "description": "Phobische Angst"
                      },
                      {
                        "items": 5,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.29,
                          0.37
                        ],
                        "id": 4,
                        "sub_left": "Aggressivität / Feindseligkeit",
                        "short_description": "aggressivit__t___feindseligkeit",
                        "sub_right": "Reizbarkeit und Unausgeglichenheit bis hin zu starker Aggressivität. Ärger, Aggression, Irritierbarkeit, Zorn und Verstimmung.",
                        "sd_norm": [
                          0.35,
                          0.33
                        ],
                        "description": "Aggressivität / Feindseligkeit"
                      },
                      {
                        "items": 6,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.29,
                          0.39
                        ],
                        "id": 5,
                        "sub_left": "Ängstlichkeit",
                        "short_description": "__ngstlichkeit",
                        "sub_right": "Angst mit Nervosität, Spannungen und Zittern, Panikattacken und Schreckgefühlen, Gefühle von Besorgnis und Furcht.",
                        "sd_norm": [
                          0.31,
                          0.36
                        ],
                        "description": "Ängstlichkeit"
                      },
                      {
                        "items": 6,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.24,
                          0.33
                        ],
                        "id": 6,
                        "sub_left": "Depressivität",
                        "short_description": "depressivit__t",
                        "sub_right": "Gedrückte Stimmung, Gesunkenes Interesse am Leben, Verringerte Motivation und Energie, Hoffnungslosigkeit, bis hin zu Suizidgedanken.",
                        "sd_norm": [
                          0.32,
                          0.4
                        ],
                        "description": "Depressivität"
                      },
                      {
                        "items": 4,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.35,
                          0.49
                        ],
                        "id": 7,
                        "sub_left": "Unsicherheit im Sozialkontakt",
                        "short_description": "unsicherheit_im_sozialkontakt",
                        "sub_right": "Unzulänglichkeits- und Minderwertigkeitsgefühle, Selbstabwertungen im sozialen Kontakt, Selbstzweifel, Selbstunsicherheit und negative Erwartungen bzgl. dem eigenen zwischenmenschlichen Verhalten.",
                        "sd_norm": [
                          0.4,
                          0.45
                        ],
                        "description": "Unsicherheit im Sozialkontakt"
                      },
                      {
                        "items": 6,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.5,
                          0.54
                        ],
                        "id": 8,
                        "sub_left": "Zwanghaftigkeit",
                        "short_description": "zwanghaftigkeit",
                        "sub_right": "Gedanken, Impulse und Handlungen, die konstant vorhanden und nicht änderbar und ich-fremd oder ungewollt erlebt werden, Kognitive Leistungsstörungen.",
                        "sd_norm": [
                          0.46,
                          0.43
                        ],
                        "description": "Zwanghaftigkeit"
                      },
                      {
                        "items": 7,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.23,
                          0.32
                        ],
                        "id": 9,
                        "sub_left": "Somatisierung",
                        "short_description": "somatisierung",
                        "sub_right": "Kopfschmerzen, Herzbeschwerden, Atemprobleme, Magenbeschwerden, Muskelschmerzen, Schwächegefühl, Schweregefühl, Unwohlsein usw.",
                        "sd_norm": [
                          0.31,
                          0.33
                        ],
                        "description": "Somatisierung"
                      },
                      {
                        "items": 4,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          null,
                          null
                        ],
                        "id": 10,
                        "sub_left": "Zusatzitems",
                        "short_description": "zusatzitems",
                        "sub_right": "Zusatzitems",
                        "sd_norm": [
                          null,
                          null
                        ],
                        "description": "Zusatzitems"
                      }
                    ],
                    "variables": [
                      "sum_score",
                      "scale_score",
                      "z_score"
                    ],
                    "all_results_variables": [
                      "gsi_global_severity_index_sum_score",
                      "gsi_global_severity_index_scale_score",
                      "gsi_global_severity_index_z_score",
                      "psychotizismus_sum_score",
                      "psychotizismus_scale_score",
                      "psychotizismus_z_score",
                      "paranoides_denken_sum_score",
                      "paranoides_denken_scale_score",
                      "paranoides_denken_z_score",
                      "phobische_angst_sum_score",
                      "phobische_angst_scale_score",
                      "phobische_angst_z_score",
                      "aggressivit__t___feindseligkeit_sum_score",
                      "aggressivit__t___feindseligkeit_scale_score",
                      "aggressivit__t___feindseligkeit_z_score",
                      "__ngstlichkeit_sum_score",
                      "__ngstlichkeit_scale_score",
                      "__ngstlichkeit_z_score",
                      "depressivit__t_sum_score",
                      "depressivit__t_scale_score",
                      "depressivit__t_z_score",
                      "unsicherheit_im_sozialkontakt_sum_score",
                      "unsicherheit_im_sozialkontakt_scale_score",
                      "unsicherheit_im_sozialkontakt_z_score",
                      "zwanghaftigkeit_sum_score",
                      "zwanghaftigkeit_scale_score",
                      "zwanghaftigkeit_z_score",
                      "somatisierung_sum_score",
                      "somatisierung_scale_score",
                      "somatisierung_z_score",
                      "zusatzitems_sum_score",
                      "zusatzitems_scale_score",
                      "zusatzitems_z_score"
                    ]
                  }
                },
                {
                  "all_results": {
                    "somatisierung_scale_score": 0.14,
                    "gsi_global_severity_index_scale_score": 0.47,
                    "zusatzitems_z_score": null,
                    "aggressivit__t___feindseligkeit_z_score": 0.89,
                    "phobische_angst_sum_score": 2,
                    "psychotizismus_z_score": 0.75,
                    "paranoides_denken_z_score": -0.82,
                    "zusatzitems_scale_score": 0.5,
                    "paranoides_denken_scale_score": 0,
                    "zwanghaftigkeit_sum_score": 5,
                    "aggressivit__t___feindseligkeit_scale_score": 0.6,
                    "psychotizismus_scale_score": 0.4,
                    "__ngstlichkeit_scale_score": 0.5,
                    "depressivit__t_sum_score": 5,
                    "unsicherheit_im_sozialkontakt_scale_score": 0.5,
                    "zusatzitems_sum_score": 2,
                    "unsicherheit_im_sozialkontakt_z_score": 0.38,
                    "__ngstlichkeit_z_score": 0.68,
                    "gsi_global_severity_index_sum_score": 25,
                    "somatisierung_sum_score": 1,
                    "depressivit__t_z_score": 1.84,
                    "depressivit__t_scale_score": 0.83,
                    "__ngstlichkeit_sum_score": 3,
                    "unsicherheit_im_sozialkontakt_sum_score": 2,
                    "phobische_angst_z_score": 1.13,
                    "zwanghaftigkeit_scale_score": 0.83,
                    "paranoides_denken_sum_score": 0,
                    "aggressivit__t___feindseligkeit_sum_score": 3,
                    "psychotizismus_sum_score": 2,
                    "somatisierung_z_score": -0.29,
                    "gsi_global_severity_index_z_score": 0.83,
                    "phobische_angst_scale_score": 0.4,
                    "zwanghaftigkeit_z_score": 0.72
                  },
                  "result_array": [
                    {
                      "items": 53,
                      "result": {
                        "scale_score": 0.47,
                        "z_score": 0.83,
                        "sum_score": 25
                      },
                      "m_norm": [
                        0.28,
                        0.35
                      ],
                      "id": 0,
                      "sub_left": "GSI (Global Severity Index)",
                      "short_description": "gsi_global_severity_index",
                      "sub_right": "Durchschnittliche Belastung in allen Bereichen",
                      "sd_norm": [
                        0.23,
                        0.23
                      ],
                      "description": "GSI (Global Severity Index)"
                    },
                    {
                      "items": 5,
                      "result": {
                        "scale_score": 0.4,
                        "z_score": 0.75,
                        "sum_score": 2
                      },
                      "m_norm": [
                        0.19,
                        0.19
                      ],
                      "id": 1,
                      "sub_left": "Psychotizismus",
                      "short_description": "psychotizismus",
                      "sub_right": "Gefühl der Isolation und zwischenmenschlichen Entfremdung. Verzerrter, isolierter Lebensstil bis zu Halluzination und Gedankenzerfall.",
                      "sd_norm": [
                        0.28,
                        0.27
                      ],
                      "description": "Psychotizismus"
                    },
                    {
                      "items": 5,
                      "result": {
                        "scale_score": 0,
                        "z_score": -0.82,
                        "sum_score": 0
                      },
                      "m_norm": [
                        0.33,
                        0.34
                      ],
                      "id": 2,
                      "sub_left": "Paranoides Denken",
                      "short_description": "paranoides_denken",
                      "sub_right": "Misstrauen, Minderwertigkeitsgefühle, paranoides Denken: Gedankenprojektion, Feindseligkeit, Argwohn, Grandiosität, Einengung, Angst vor Autonomieverlust und wahnhafte Täuschung.",
                      "sd_norm": [
                        0.4,
                        0.38
                      ],
                      "description": "Paranoides Denken"
                    },
                    {
                      "items": 5,
                      "result": {
                        "scale_score": 0.4,
                        "z_score": 1.13,
                        "sum_score": 2
                      },
                      "m_norm": [
                        0.14,
                        0.16
                      ],
                      "id": 3,
                      "sub_left": "Phobische Angst",
                      "short_description": "phobische_angst",
                      "sub_right": "Andauernde und unangemessene Furcht als Reaktion auf eine bestimmte Person, einen Platz, ein Objekt oder eine charakteristische Situation, die zu Vermeidungs- oder Fluchtverhalten führt.",
                      "sd_norm": [
                        0.23,
                        0.25
                      ],
                      "description": "Phobische Angst"
                    },
                    {
                      "items": 5,
                      "result": {
                        "scale_score": 0.6,
                        "z_score": 0.89,
                        "sum_score": 3
                      },
                      "m_norm": [
                        0.29,
                        0.37
                      ],
                      "id": 4,
                      "sub_left": "Aggressivität / Feindseligkeit",
                      "short_description": "aggressivit__t___feindseligkeit",
                      "sub_right": "Reizbarkeit und Unausgeglichenheit bis hin zu starker Aggressivität. Ärger, Aggression, Irritierbarkeit, Zorn und Verstimmung.",
                      "sd_norm": [
                        0.35,
                        0.33
                      ],
                      "description": "Aggressivität / Feindseligkeit"
                    },
                    {
                      "items": 6,
                      "result": {
                        "scale_score": 0.5,
                        "z_score": 0.68,
                        "sum_score": 3
                      },
                      "m_norm": [
                        0.29,
                        0.39
                      ],
                      "id": 5,
                      "sub_left": "Ängstlichkeit",
                      "short_description": "__ngstlichkeit",
                      "sub_right": "Angst mit Nervosität, Spannungen und Zittern, Panikattacken und Schreckgefühlen, Gefühle von Besorgnis und Furcht.",
                      "sd_norm": [
                        0.31,
                        0.36
                      ],
                      "description": "Ängstlichkeit"
                    },
                    {
                      "items": 6,
                      "result": {
                        "scale_score": 0.83,
                        "z_score": 1.84,
                        "sum_score": 5
                      },
                      "m_norm": [
                        0.24,
                        0.33
                      ],
                      "id": 6,
                      "sub_left": "Depressivität",
                      "short_description": "depressivit__t",
                      "sub_right": "Gedrückte Stimmung, Gesunkenes Interesse am Leben, Verringerte Motivation und Energie, Hoffnungslosigkeit, bis hin zu Suizidgedanken.",
                      "sd_norm": [
                        0.32,
                        0.4
                      ],
                      "description": "Depressivität"
                    },
                    {
                      "items": 4,
                      "result": {
                        "scale_score": 0.5,
                        "z_score": 0.38,
                        "sum_score": 2
                      },
                      "m_norm": [
                        0.35,
                        0.49
                      ],
                      "id": 7,
                      "sub_left": "Unsicherheit im Sozialkontakt",
                      "short_description": "unsicherheit_im_sozialkontakt",
                      "sub_right": "Unzulänglichkeits- und Minderwertigkeitsgefühle, Selbstabwertungen im sozialen Kontakt, Selbstzweifel, Selbstunsicherheit und negative Erwartungen bzgl. dem eigenen zwischenmenschlichen Verhalten.",
                      "sd_norm": [
                        0.4,
                        0.45
                      ],
                      "description": "Unsicherheit im Sozialkontakt"
                    },
                    {
                      "items": 6,
                      "result": {
                        "scale_score": 0.83,
                        "z_score": 0.72,
                        "sum_score": 5
                      },
                      "m_norm": [
                        0.5,
                        0.54
                      ],
                      "id": 8,
                      "sub_left": "Zwanghaftigkeit",
                      "short_description": "zwanghaftigkeit",
                      "sub_right": "Gedanken, Impulse und Handlungen, die konstant vorhanden und nicht änderbar und ich-fremd oder ungewollt erlebt werden, Kognitive Leistungsstörungen.",
                      "sd_norm": [
                        0.46,
                        0.43
                      ],
                      "description": "Zwanghaftigkeit"
                    },
                    {
                      "items": 7,
                      "result": {
                        "scale_score": 0.14,
                        "z_score": -0.29,
                        "sum_score": 1
                      },
                      "m_norm": [
                        0.23,
                        0.32
                      ],
                      "id": 9,
                      "sub_left": "Somatisierung",
                      "short_description": "somatisierung",
                      "sub_right": "Kopfschmerzen, Herzbeschwerden, Atemprobleme, Magenbeschwerden, Muskelschmerzen, Schwächegefühl, Schweregefühl, Unwohlsein usw.",
                      "sd_norm": [
                        0.31,
                        0.33
                      ],
                      "description": "Somatisierung"
                    },
                    {
                      "items": 4,
                      "result": {
                        "scale_score": 0.5,
                        "z_score": null,
                        "sum_score": 2
                      },
                      "m_norm": [
                        null,
                        null
                      ],
                      "id": 10,
                      "sub_left": "Zusatzitems",
                      "short_description": "zusatzitems",
                      "sub_right": "Zusatzitems",
                      "sd_norm": [
                        null,
                        null
                      ],
                      "description": "Zusatzitems"
                    }
                  ],
                  "zusatzitem": {
                    "mz_date": "2018-07-14 00:00:00",
                    "dropout_reason": null,
                    "mz_typ": "Austritt EAS",
                    "dropout_code": 0,
                    "mz_id": 3,
                    "items": [
                      {
                        "field": 0,
                        "result": "überhaupt nicht",
                        "name": "Schlechter Appetit",
                        "id": 0
                      },
                      {
                        "field": 0,
                        "result": "überhaupt nicht",
                        "name": "Einschlafschwierigkeiten",
                        "id": 1
                      },
                      {
                        "field": 1,
                        "result": "ein wenig",
                        "name": "Gedanken an den Tod und ans Sterben",
                        "id": 2
                      },
                      {
                        "field": 1,
                        "result": "ein wenig",
                        "name": "Schuldgefühle",
                        "id": 3
                      }
                    ],
                    "mz_datum": "14.7.2018",
                    "dropout": false,
                    "mz_text": "Austritt - EAS",
                    "id": 1151
                  },
                  "info": {
                    "hash": "232a57b0-73a0-42e8-a194-0885bc1dc4aa",
                    "response": {
                      "BSCL[sq504V23]": "0",
                      "BSCL[sq504V45]": "1",
                      "BSCL[sq504V18]": "1",
                      "BSCL[sq504V01]": "1",
                      "BSCL[sq504V20]": "1",
                      "q501V04": "2",
                      "datestamp": "2018-07-16 14:56:57",
                      "BSCL[sq504V02]": "0",
                      "BSCL[sq504V39]": "1",
                      "Eintrittsort": "",
                      "BSCL[sq504V46]": "0",
                      "BSCL[sq504V07]": "0",
                      "Austrittsort": "1",
                      "BSCL[sq504V43]": "1",
                      "BSCL[sq504V25]": "0",
                      "BSCL[sq504V33]": "0",
                      "optinomixHASH": "232a57b0-73a0-42e8-a194-0885bc1dc4aa",
                      "BSCL[sq504V08]": "0",
                      "BSCL[sq504V11]": "0",
                      "BSCL[sq504V50]": "1",
                      "submitdate": "2018-07-16 14:56:57",
                      "BSCL[sq504V36]": "1",
                      "BSCL[sq504V49]": "0",
                      "BSCL[sq504V14]": "0",
                      "BSCL[sq504V17]": "1",
                      "BSCL[sq504V53]": "1",
                      "BSCL[sq504V35]": "1",
                      "BSCL[sq504V03]": "0",
                      "q504V00": "2018-07-14 00:00:00",
                      "BSCL[sq504V21]": "0",
                      "BSCL[sq504V38]": "1",
                      "BSCL[sq504V47]": "0",
                      "BSCL[sq504V26]": "0",
                      "BSCL[sq504V40]": "0",
                      "BSCL[sq504V04]": "0",
                      "startdate": "2018-07-16 14:55:29",
                      "BSCL[sq504V32]": "1",
                      "BSCL[sq504V10]": "0",
                      "BSCL[sq504V09]": "1",
                      "BSCL[sq504V31]": "1",
                      "BSCL[sq504V13]": "1",
                      "BSCL[sq504V28]": "0",
                      "startlanguage": "de",
                      "BSCL[sq504V34]": "0",
                      "BSCL[sq504V52]": "1",
                      "BSCL[sq504V16]": "0",
                      "BSCL[sq504V22]": "1",
                      "PID": "13012",
                      "BSCL[sq504V19]": "0",
                      "BSCL[sq504V44]": "1",
                      "id": "1151",
                      "q501V06": "",
                      "BSCL[sq504V41]": "0",
                      "BSCL[sq504V05]": "0",
                      "BSCL[sq504V27]": "1",
                      "BSCL[sq504V42]": "0",
                      "BSCL[sq504V06]": "2",
                      "FID": "130120200",
                      "BSCL[sq504V24]": "0",
                      "BSCL[sq504V29]": "0",
                      "BSCL[sq504V12]": "0",
                      "BSCL[sq504V30]": "0",
                      "q501V05": "0",
                      "BSCL[sq504V51]": "0",
                      "BSCL[sq504V15]": "2",
                      "BSCL[sq504V48]": "0",
                      "lastpage": "2",
                      "BSCL[sq504V37]": "1"
                    },
                    "mz": {
                      "mz_date": "2018-07-14 00:00:00",
                      "dropout_reason": null,
                      "mz_typ": "Austritt EAS",
                      "dropout_code": 0,
                      "mz_id": 3,
                      "mz_datum": "14.7.2018",
                      "dropout": false,
                      "mz_text": "Austritt - EAS"
                    },
                    "event_id": 36118,
                    "filled": "2018-07-16T14:56:57Z",
                    "response_id": 21856
                  },
                  "definitions": {
                    "result_array": [
                      {
                        "items": 53,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.28,
                          0.35
                        ],
                        "id": 0,
                        "sub_left": "GSI (Global Severity Index)",
                        "short_description": "gsi_global_severity_index",
                        "sub_right": "Durchschnittliche Belastung in allen Bereichen",
                        "sd_norm": [
                          0.23,
                          0.23
                        ],
                        "description": "GSI (Global Severity Index)"
                      },
                      {
                        "items": 5,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.19,
                          0.19
                        ],
                        "id": 1,
                        "sub_left": "Psychotizismus",
                        "short_description": "psychotizismus",
                        "sub_right": "Gefühl der Isolation und zwischenmenschlichen Entfremdung. Verzerrter, isolierter Lebensstil bis zu Halluzination und Gedankenzerfall.",
                        "sd_norm": [
                          0.28,
                          0.27
                        ],
                        "description": "Psychotizismus"
                      },
                      {
                        "items": 5,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.33,
                          0.34
                        ],
                        "id": 2,
                        "sub_left": "Paranoides Denken",
                        "short_description": "paranoides_denken",
                        "sub_right": "Misstrauen, Minderwertigkeitsgefühle, paranoides Denken: Gedankenprojektion, Feindseligkeit, Argwohn, Grandiosität, Einengung, Angst vor Autonomieverlust und wahnhafte Täuschung.",
                        "sd_norm": [
                          0.4,
                          0.38
                        ],
                        "description": "Paranoides Denken"
                      },
                      {
                        "items": 5,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.14,
                          0.16
                        ],
                        "id": 3,
                        "sub_left": "Phobische Angst",
                        "short_description": "phobische_angst",
                        "sub_right": "Andauernde und unangemessene Furcht als Reaktion auf eine bestimmte Person, einen Platz, ein Objekt oder eine charakteristische Situation, die zu Vermeidungs- oder Fluchtverhalten führt.",
                        "sd_norm": [
                          0.23,
                          0.25
                        ],
                        "description": "Phobische Angst"
                      },
                      {
                        "items": 5,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.29,
                          0.37
                        ],
                        "id": 4,
                        "sub_left": "Aggressivität / Feindseligkeit",
                        "short_description": "aggressivit__t___feindseligkeit",
                        "sub_right": "Reizbarkeit und Unausgeglichenheit bis hin zu starker Aggressivität. Ärger, Aggression, Irritierbarkeit, Zorn und Verstimmung.",
                        "sd_norm": [
                          0.35,
                          0.33
                        ],
                        "description": "Aggressivität / Feindseligkeit"
                      },
                      {
                        "items": 6,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.29,
                          0.39
                        ],
                        "id": 5,
                        "sub_left": "Ängstlichkeit",
                        "short_description": "__ngstlichkeit",
                        "sub_right": "Angst mit Nervosität, Spannungen und Zittern, Panikattacken und Schreckgefühlen, Gefühle von Besorgnis und Furcht.",
                        "sd_norm": [
                          0.31,
                          0.36
                        ],
                        "description": "Ängstlichkeit"
                      },
                      {
                        "items": 6,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.24,
                          0.33
                        ],
                        "id": 6,
                        "sub_left": "Depressivität",
                        "short_description": "depressivit__t",
                        "sub_right": "Gedrückte Stimmung, Gesunkenes Interesse am Leben, Verringerte Motivation und Energie, Hoffnungslosigkeit, bis hin zu Suizidgedanken.",
                        "sd_norm": [
                          0.32,
                          0.4
                        ],
                        "description": "Depressivität"
                      },
                      {
                        "items": 4,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.35,
                          0.49
                        ],
                        "id": 7,
                        "sub_left": "Unsicherheit im Sozialkontakt",
                        "short_description": "unsicherheit_im_sozialkontakt",
                        "sub_right": "Unzulänglichkeits- und Minderwertigkeitsgefühle, Selbstabwertungen im sozialen Kontakt, Selbstzweifel, Selbstunsicherheit und negative Erwartungen bzgl. dem eigenen zwischenmenschlichen Verhalten.",
                        "sd_norm": [
                          0.4,
                          0.45
                        ],
                        "description": "Unsicherheit im Sozialkontakt"
                      },
                      {
                        "items": 6,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.5,
                          0.54
                        ],
                        "id": 8,
                        "sub_left": "Zwanghaftigkeit",
                        "short_description": "zwanghaftigkeit",
                        "sub_right": "Gedanken, Impulse und Handlungen, die konstant vorhanden und nicht änderbar und ich-fremd oder ungewollt erlebt werden, Kognitive Leistungsstörungen.",
                        "sd_norm": [
                          0.46,
                          0.43
                        ],
                        "description": "Zwanghaftigkeit"
                      },
                      {
                        "items": 7,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.23,
                          0.32
                        ],
                        "id": 9,
                        "sub_left": "Somatisierung",
                        "short_description": "somatisierung",
                        "sub_right": "Kopfschmerzen, Herzbeschwerden, Atemprobleme, Magenbeschwerden, Muskelschmerzen, Schwächegefühl, Schweregefühl, Unwohlsein usw.",
                        "sd_norm": [
                          0.31,
                          0.33
                        ],
                        "description": "Somatisierung"
                      },
                      {
                        "items": 4,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          null,
                          null
                        ],
                        "id": 10,
                        "sub_left": "Zusatzitems",
                        "short_description": "zusatzitems",
                        "sub_right": "Zusatzitems",
                        "sd_norm": [
                          null,
                          null
                        ],
                        "description": "Zusatzitems"
                      }
                    ],
                    "variables": [
                      "sum_score",
                      "scale_score",
                      "z_score"
                    ],
                    "all_results_variables": [
                      "gsi_global_severity_index_sum_score",
                      "gsi_global_severity_index_scale_score",
                      "gsi_global_severity_index_z_score",
                      "psychotizismus_sum_score",
                      "psychotizismus_scale_score",
                      "psychotizismus_z_score",
                      "paranoides_denken_sum_score",
                      "paranoides_denken_scale_score",
                      "paranoides_denken_z_score",
                      "phobische_angst_sum_score",
                      "phobische_angst_scale_score",
                      "phobische_angst_z_score",
                      "aggressivit__t___feindseligkeit_sum_score",
                      "aggressivit__t___feindseligkeit_scale_score",
                      "aggressivit__t___feindseligkeit_z_score",
                      "__ngstlichkeit_sum_score",
                      "__ngstlichkeit_scale_score",
                      "__ngstlichkeit_z_score",
                      "depressivit__t_sum_score",
                      "depressivit__t_scale_score",
                      "depressivit__t_z_score",
                      "unsicherheit_im_sozialkontakt_sum_score",
                      "unsicherheit_im_sozialkontakt_scale_score",
                      "unsicherheit_im_sozialkontakt_z_score",
                      "zwanghaftigkeit_sum_score",
                      "zwanghaftigkeit_scale_score",
                      "zwanghaftigkeit_z_score",
                      "somatisierung_sum_score",
                      "somatisierung_scale_score",
                      "somatisierung_z_score",
                      "zusatzitems_sum_score",
                      "zusatzitems_scale_score",
                      "zusatzitems_z_score"
                    ]
                  }
                },
                {
                  "all_results": {
                    "somatisierung_scale_score": 1.29,
                    "gsi_global_severity_index_scale_score": 0.77,
                    "zusatzitems_z_score": null,
                    "aggressivit__t___feindseligkeit_z_score": 0.31,
                    "phobische_angst_sum_score": 2,
                    "psychotizismus_z_score": 1.46,
                    "paranoides_denken_z_score": 0.18,
                    "zusatzitems_scale_score": 1,
                    "paranoides_denken_scale_score": 0.4,
                    "zwanghaftigkeit_sum_score": 7,
                    "aggressivit__t___feindseligkeit_scale_score": 0.4,
                    "psychotizismus_scale_score": 0.6,
                    "__ngstlichkeit_scale_score": 0.33,
                    "depressivit__t_sum_score": 7,
                    "unsicherheit_im_sozialkontakt_scale_score": 0.75,
                    "zusatzitems_sum_score": 4,
                    "unsicherheit_im_sozialkontakt_z_score": 1,
                    "__ngstlichkeit_z_score": 0.13,
                    "gsi_global_severity_index_sum_score": 41,
                    "somatisierung_sum_score": 9,
                    "depressivit__t_z_score": 2.91,
                    "depressivit__t_scale_score": 1.17,
                    "__ngstlichkeit_sum_score": 2,
                    "unsicherheit_im_sozialkontakt_sum_score": 3,
                    "phobische_angst_z_score": 1.13,
                    "zwanghaftigkeit_scale_score": 1.17,
                    "paranoides_denken_sum_score": 2,
                    "aggressivit__t___feindseligkeit_sum_score": 2,
                    "psychotizismus_sum_score": 3,
                    "somatisierung_z_score": 3.42,
                    "gsi_global_severity_index_z_score": 2.13,
                    "phobische_angst_scale_score": 0.4,
                    "zwanghaftigkeit_z_score": 1.46
                  },
                  "result_array": [
                    {
                      "items": 53,
                      "result": {
                        "scale_score": 0.77,
                        "z_score": 2.13,
                        "sum_score": 41
                      },
                      "m_norm": [
                        0.28,
                        0.35
                      ],
                      "id": 0,
                      "sub_left": "GSI (Global Severity Index)",
                      "short_description": "gsi_global_severity_index",
                      "sub_right": "Durchschnittliche Belastung in allen Bereichen",
                      "sd_norm": [
                        0.23,
                        0.23
                      ],
                      "description": "GSI (Global Severity Index)"
                    },
                    {
                      "items": 5,
                      "result": {
                        "scale_score": 0.6,
                        "z_score": 1.46,
                        "sum_score": 3
                      },
                      "m_norm": [
                        0.19,
                        0.19
                      ],
                      "id": 1,
                      "sub_left": "Psychotizismus",
                      "short_description": "psychotizismus",
                      "sub_right": "Gefühl der Isolation und zwischenmenschlichen Entfremdung. Verzerrter, isolierter Lebensstil bis zu Halluzination und Gedankenzerfall.",
                      "sd_norm": [
                        0.28,
                        0.27
                      ],
                      "description": "Psychotizismus"
                    },
                    {
                      "items": 5,
                      "result": {
                        "scale_score": 0.4,
                        "z_score": 0.18,
                        "sum_score": 2
                      },
                      "m_norm": [
                        0.33,
                        0.34
                      ],
                      "id": 2,
                      "sub_left": "Paranoides Denken",
                      "short_description": "paranoides_denken",
                      "sub_right": "Misstrauen, Minderwertigkeitsgefühle, paranoides Denken: Gedankenprojektion, Feindseligkeit, Argwohn, Grandiosität, Einengung, Angst vor Autonomieverlust und wahnhafte Täuschung.",
                      "sd_norm": [
                        0.4,
                        0.38
                      ],
                      "description": "Paranoides Denken"
                    },
                    {
                      "items": 5,
                      "result": {
                        "scale_score": 0.4,
                        "z_score": 1.13,
                        "sum_score": 2
                      },
                      "m_norm": [
                        0.14,
                        0.16
                      ],
                      "id": 3,
                      "sub_left": "Phobische Angst",
                      "short_description": "phobische_angst",
                      "sub_right": "Andauernde und unangemessene Furcht als Reaktion auf eine bestimmte Person, einen Platz, ein Objekt oder eine charakteristische Situation, die zu Vermeidungs- oder Fluchtverhalten führt.",
                      "sd_norm": [
                        0.23,
                        0.25
                      ],
                      "description": "Phobische Angst"
                    },
                    {
                      "items": 5,
                      "result": {
                        "scale_score": 0.4,
                        "z_score": 0.31,
                        "sum_score": 2
                      },
                      "m_norm": [
                        0.29,
                        0.37
                      ],
                      "id": 4,
                      "sub_left": "Aggressivität / Feindseligkeit",
                      "short_description": "aggressivit__t___feindseligkeit",
                      "sub_right": "Reizbarkeit und Unausgeglichenheit bis hin zu starker Aggressivität. Ärger, Aggression, Irritierbarkeit, Zorn und Verstimmung.",
                      "sd_norm": [
                        0.35,
                        0.33
                      ],
                      "description": "Aggressivität / Feindseligkeit"
                    },
                    {
                      "items": 6,
                      "result": {
                        "scale_score": 0.33,
                        "z_score": 0.13,
                        "sum_score": 2
                      },
                      "m_norm": [
                        0.29,
                        0.39
                      ],
                      "id": 5,
                      "sub_left": "Ängstlichkeit",
                      "short_description": "__ngstlichkeit",
                      "sub_right": "Angst mit Nervosität, Spannungen und Zittern, Panikattacken und Schreckgefühlen, Gefühle von Besorgnis und Furcht.",
                      "sd_norm": [
                        0.31,
                        0.36
                      ],
                      "description": "Ängstlichkeit"
                    },
                    {
                      "items": 6,
                      "result": {
                        "scale_score": 1.17,
                        "z_score": 2.91,
                        "sum_score": 7
                      },
                      "m_norm": [
                        0.24,
                        0.33
                      ],
                      "id": 6,
                      "sub_left": "Depressivität",
                      "short_description": "depressivit__t",
                      "sub_right": "Gedrückte Stimmung, Gesunkenes Interesse am Leben, Verringerte Motivation und Energie, Hoffnungslosigkeit, bis hin zu Suizidgedanken.",
                      "sd_norm": [
                        0.32,
                        0.4
                      ],
                      "description": "Depressivität"
                    },
                    {
                      "items": 4,
                      "result": {
                        "scale_score": 0.75,
                        "z_score": 1,
                        "sum_score": 3
                      },
                      "m_norm": [
                        0.35,
                        0.49
                      ],
                      "id": 7,
                      "sub_left": "Unsicherheit im Sozialkontakt",
                      "short_description": "unsicherheit_im_sozialkontakt",
                      "sub_right": "Unzulänglichkeits- und Minderwertigkeitsgefühle, Selbstabwertungen im sozialen Kontakt, Selbstzweifel, Selbstunsicherheit und negative Erwartungen bzgl. dem eigenen zwischenmenschlichen Verhalten.",
                      "sd_norm": [
                        0.4,
                        0.45
                      ],
                      "description": "Unsicherheit im Sozialkontakt"
                    },
                    {
                      "items": 6,
                      "result": {
                        "scale_score": 1.17,
                        "z_score": 1.46,
                        "sum_score": 7
                      },
                      "m_norm": [
                        0.5,
                        0.54
                      ],
                      "id": 8,
                      "sub_left": "Zwanghaftigkeit",
                      "short_description": "zwanghaftigkeit",
                      "sub_right": "Gedanken, Impulse und Handlungen, die konstant vorhanden und nicht änderbar und ich-fremd oder ungewollt erlebt werden, Kognitive Leistungsstörungen.",
                      "sd_norm": [
                        0.46,
                        0.43
                      ],
                      "description": "Zwanghaftigkeit"
                    },
                    {
                      "items": 7,
                      "result": {
                        "scale_score": 1.29,
                        "z_score": 3.42,
                        "sum_score": 9
                      },
                      "m_norm": [
                        0.23,
                        0.32
                      ],
                      "id": 9,
                      "sub_left": "Somatisierung",
                      "short_description": "somatisierung",
                      "sub_right": "Kopfschmerzen, Herzbeschwerden, Atemprobleme, Magenbeschwerden, Muskelschmerzen, Schwächegefühl, Schweregefühl, Unwohlsein usw.",
                      "sd_norm": [
                        0.31,
                        0.33
                      ],
                      "description": "Somatisierung"
                    },
                    {
                      "items": 4,
                      "result": {
                        "scale_score": 1,
                        "z_score": null,
                        "sum_score": 4
                      },
                      "m_norm": [
                        null,
                        null
                      ],
                      "id": 10,
                      "sub_left": "Zusatzitems",
                      "short_description": "zusatzitems",
                      "sub_right": "Zusatzitems",
                      "sd_norm": [
                        null,
                        null
                      ],
                      "description": "Zusatzitems"
                    }
                  ],
                  "zusatzitem": {
                    "mz_date": "2018-06-12 00:00:00",
                    "dropout_reason": null,
                    "mz_typ": "Eintritt EAS",
                    "dropout_code": 0,
                    "mz_id": 0,
                    "items": [
                      {
                        "field": 3,
                        "result": "stark",
                        "name": "Schlechter Appetit",
                        "id": 0
                      },
                      {
                        "field": 0,
                        "result": "überhaupt nicht",
                        "name": "Einschlafschwierigkeiten",
                        "id": 1
                      },
                      {
                        "field": 0,
                        "result": "überhaupt nicht",
                        "name": "Gedanken an den Tod und ans Sterben",
                        "id": 2
                      },
                      {
                        "field": 1,
                        "result": "ein wenig",
                        "name": "Schuldgefühle",
                        "id": 3
                      }
                    ],
                    "mz_datum": "12.6.2018",
                    "dropout": false,
                    "mz_text": "Eintritt - EAS",
                    "id": 1112
                  },
                  "info": {
                    "hash": "04bab4de-89c7-4036-99cc-21d23befceab",
                    "response": {
                      "BSCL[sq504V23]": "3",
                      "BSCL[sq504V45]": "0",
                      "BSCL[sq504V18]": "2",
                      "BSCL[sq504V01]": "1",
                      "BSCL[sq504V20]": "2",
                      "q501V04": "1",
                      "datestamp": "2018-06-20 12:33:25",
                      "BSCL[sq504V02]": "1",
                      "BSCL[sq504V39]": "0",
                      "Eintrittsort": "1",
                      "BSCL[sq504V46]": "0",
                      "BSCL[sq504V07]": "0",
                      "Austrittsort": "",
                      "BSCL[sq504V43]": "1",
                      "BSCL[sq504V25]": "0",
                      "BSCL[sq504V33]": "1",
                      "optinomixHASH": "04bab4de-89c7-4036-99cc-21d23befceab",
                      "BSCL[sq504V08]": "1",
                      "BSCL[sq504V11]": "3",
                      "BSCL[sq504V50]": "1",
                      "submitdate": "2018-06-12 12:33:25",
                      "BSCL[sq504V36]": "2",
                      "BSCL[sq504V49]": "0",
                      "BSCL[sq504V14]": "1",
                      "BSCL[sq504V17]": "1",
                      "BSCL[sq504V53]": "1",
                      "BSCL[sq504V35]": "2",
                      "BSCL[sq504V03]": "0",
                      "q504V00": "2018-06-12 00:00:00",
                      "BSCL[sq504V21]": "0",
                      "BSCL[sq504V38]": "1",
                      "BSCL[sq504V47]": "0",
                      "BSCL[sq504V26]": "0",
                      "BSCL[sq504V40]": "0",
                      "BSCL[sq504V04]": "0",
                      "startdate": "2018-06-20 12:32:21",
                      "BSCL[sq504V32]": "0",
                      "BSCL[sq504V10]": "0",
                      "BSCL[sq504V09]": "1",
                      "BSCL[sq504V31]": "0",
                      "BSCL[sq504V13]": "1",
                      "BSCL[sq504V28]": "0",
                      "startlanguage": "de",
                      "BSCL[sq504V34]": "0",
                      "BSCL[sq504V52]": "1",
                      "BSCL[sq504V16]": "0",
                      "BSCL[sq504V22]": "1",
                      "PID": "13012",
                      "BSCL[sq504V19]": "0",
                      "BSCL[sq504V44]": "1",
                      "id": "1112",
                      "q501V06": "",
                      "BSCL[sq504V41]": "0",
                      "BSCL[sq504V05]": "2",
                      "BSCL[sq504V27]": "1",
                      "BSCL[sq504V42]": "0",
                      "BSCL[sq504V06]": "1",
                      "FID": "130120200",
                      "BSCL[sq504V24]": "1",
                      "BSCL[sq504V29]": "0",
                      "BSCL[sq504V12]": "0",
                      "BSCL[sq504V30]": "3",
                      "q501V05": "0",
                      "BSCL[sq504V51]": "1",
                      "BSCL[sq504V15]": "2",
                      "BSCL[sq504V48]": "0",
                      "lastpage": "2",
                      "BSCL[sq504V37]": "1"
                    },
                    "mz": {
                      "mz_date": "2018-06-12 00:00:00",
                      "dropout_reason": null,
                      "mz_typ": "Eintritt EAS",
                      "dropout_code": 0,
                      "mz_id": 0,
                      "mz_datum": "12.6.2018",
                      "dropout": false,
                      "mz_text": "Eintritt - EAS"
                    },
                    "event_id": 35693,
                    "filled": "2018-06-20T12:33:25Z",
                    "response_id": 21496
                  },
                  "definitions": {
                    "result_array": [
                      {
                        "items": 53,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.28,
                          0.35
                        ],
                        "id": 0,
                        "sub_left": "GSI (Global Severity Index)",
                        "short_description": "gsi_global_severity_index",
                        "sub_right": "Durchschnittliche Belastung in allen Bereichen",
                        "sd_norm": [
                          0.23,
                          0.23
                        ],
                        "description": "GSI (Global Severity Index)"
                      },
                      {
                        "items": 5,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.19,
                          0.19
                        ],
                        "id": 1,
                        "sub_left": "Psychotizismus",
                        "short_description": "psychotizismus",
                        "sub_right": "Gefühl der Isolation und zwischenmenschlichen Entfremdung. Verzerrter, isolierter Lebensstil bis zu Halluzination und Gedankenzerfall.",
                        "sd_norm": [
                          0.28,
                          0.27
                        ],
                        "description": "Psychotizismus"
                      },
                      {
                        "items": 5,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.33,
                          0.34
                        ],
                        "id": 2,
                        "sub_left": "Paranoides Denken",
                        "short_description": "paranoides_denken",
                        "sub_right": "Misstrauen, Minderwertigkeitsgefühle, paranoides Denken: Gedankenprojektion, Feindseligkeit, Argwohn, Grandiosität, Einengung, Angst vor Autonomieverlust und wahnhafte Täuschung.",
                        "sd_norm": [
                          0.4,
                          0.38
                        ],
                        "description": "Paranoides Denken"
                      },
                      {
                        "items": 5,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.14,
                          0.16
                        ],
                        "id": 3,
                        "sub_left": "Phobische Angst",
                        "short_description": "phobische_angst",
                        "sub_right": "Andauernde und unangemessene Furcht als Reaktion auf eine bestimmte Person, einen Platz, ein Objekt oder eine charakteristische Situation, die zu Vermeidungs- oder Fluchtverhalten führt.",
                        "sd_norm": [
                          0.23,
                          0.25
                        ],
                        "description": "Phobische Angst"
                      },
                      {
                        "items": 5,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.29,
                          0.37
                        ],
                        "id": 4,
                        "sub_left": "Aggressivität / Feindseligkeit",
                        "short_description": "aggressivit__t___feindseligkeit",
                        "sub_right": "Reizbarkeit und Unausgeglichenheit bis hin zu starker Aggressivität. Ärger, Aggression, Irritierbarkeit, Zorn und Verstimmung.",
                        "sd_norm": [
                          0.35,
                          0.33
                        ],
                        "description": "Aggressivität / Feindseligkeit"
                      },
                      {
                        "items": 6,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.29,
                          0.39
                        ],
                        "id": 5,
                        "sub_left": "Ängstlichkeit",
                        "short_description": "__ngstlichkeit",
                        "sub_right": "Angst mit Nervosität, Spannungen und Zittern, Panikattacken und Schreckgefühlen, Gefühle von Besorgnis und Furcht.",
                        "sd_norm": [
                          0.31,
                          0.36
                        ],
                        "description": "Ängstlichkeit"
                      },
                      {
                        "items": 6,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.24,
                          0.33
                        ],
                        "id": 6,
                        "sub_left": "Depressivität",
                        "short_description": "depressivit__t",
                        "sub_right": "Gedrückte Stimmung, Gesunkenes Interesse am Leben, Verringerte Motivation und Energie, Hoffnungslosigkeit, bis hin zu Suizidgedanken.",
                        "sd_norm": [
                          0.32,
                          0.4
                        ],
                        "description": "Depressivität"
                      },
                      {
                        "items": 4,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.35,
                          0.49
                        ],
                        "id": 7,
                        "sub_left": "Unsicherheit im Sozialkontakt",
                        "short_description": "unsicherheit_im_sozialkontakt",
                        "sub_right": "Unzulänglichkeits- und Minderwertigkeitsgefühle, Selbstabwertungen im sozialen Kontakt, Selbstzweifel, Selbstunsicherheit und negative Erwartungen bzgl. dem eigenen zwischenmenschlichen Verhalten.",
                        "sd_norm": [
                          0.4,
                          0.45
                        ],
                        "description": "Unsicherheit im Sozialkontakt"
                      },
                      {
                        "items": 6,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.5,
                          0.54
                        ],
                        "id": 8,
                        "sub_left": "Zwanghaftigkeit",
                        "short_description": "zwanghaftigkeit",
                        "sub_right": "Gedanken, Impulse und Handlungen, die konstant vorhanden und nicht änderbar und ich-fremd oder ungewollt erlebt werden, Kognitive Leistungsstörungen.",
                        "sd_norm": [
                          0.46,
                          0.43
                        ],
                        "description": "Zwanghaftigkeit"
                      },
                      {
                        "items": 7,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          0.23,
                          0.32
                        ],
                        "id": 9,
                        "sub_left": "Somatisierung",
                        "short_description": "somatisierung",
                        "sub_right": "Kopfschmerzen, Herzbeschwerden, Atemprobleme, Magenbeschwerden, Muskelschmerzen, Schwächegefühl, Schweregefühl, Unwohlsein usw.",
                        "sd_norm": [
                          0.31,
                          0.33
                        ],
                        "description": "Somatisierung"
                      },
                      {
                        "items": 4,
                        "result": {
                          "scale_score": null,
                          "z_score": null,
                          "sum_score": null
                        },
                        "m_norm": [
                          null,
                          null
                        ],
                        "id": 10,
                        "sub_left": "Zusatzitems",
                        "short_description": "zusatzitems",
                        "sub_right": "Zusatzitems",
                        "sd_norm": [
                          null,
                          null
                        ],
                        "description": "Zusatzitems"
                      }
                    ],
                    "variables": [
                      "sum_score",
                      "scale_score",
                      "z_score"
                    ],
                    "all_results_variables": [
                      "gsi_global_severity_index_sum_score",
                      "gsi_global_severity_index_scale_score",
                      "gsi_global_severity_index_z_score",
                      "psychotizismus_sum_score",
                      "psychotizismus_scale_score",
                      "psychotizismus_z_score",
                      "paranoides_denken_sum_score",
                      "paranoides_denken_scale_score",
                      "paranoides_denken_z_score",
                      "phobische_angst_sum_score",
                      "phobische_angst_scale_score",
                      "phobische_angst_z_score",
                      "aggressivit__t___feindseligkeit_sum_score",
                      "aggressivit__t___feindseligkeit_scale_score",
                      "aggressivit__t___feindseligkeit_z_score",
                      "__ngstlichkeit_sum_score",
                      "__ngstlichkeit_scale_score",
                      "__ngstlichkeit_z_score",
                      "depressivit__t_sum_score",
                      "depressivit__t_scale_score",
                      "depressivit__t_z_score",
                      "unsicherheit_im_sozialkontakt_sum_score",
                      "unsicherheit_im_sozialkontakt_scale_score",
                      "unsicherheit_im_sozialkontakt_z_score",
                      "zwanghaftigkeit_sum_score",
                      "zwanghaftigkeit_scale_score",
                      "zwanghaftigkeit_z_score",
                      "somatisierung_sum_score",
                      "somatisierung_scale_score",
                      "somatisierung_z_score",
                      "zusatzitems_sum_score",
                      "zusatzitems_scale_score",
                      "zusatzitems_z_score"
                    ]
                  }
                }
              ],
              "name": "scores_calculation"
            }
          ],
          "have_data": true,
          "loaded": true,
          "possible_data": true,
          "request": "stay",
          "pid": 3868,
          "fid": 5992,
          "app_id": "ch.suedhang.apps.bscl_anq.production",
          "params": {
            "name": "bscl",
            "title": "BSCL",
            "subtitle": "Brief Symptom Checklist",
            "identifier": "ch.suedhang.apps.bscl_anq.production"
          },
          "module": {
            "hash": "f60e26bd052fa3ab0e2360692c3d949511e809a0",
            "calculations": [
              "scores_calculation"
            ],
            "readme": {
              "text": "## BSCL (Brief Symptom Checklist)\n\n\n### Zusammenfassung\nDie „Brief Symptom Checklist“ (BSCL) ist die Kurzform der SCL-90. Es handelt sich bei der BSCL um eine deutschsprachige Übersetzung von G.H. Franke, deren Ursprung in dem amerikanischen „Brief Symptom Inventory“ (BSI) von L.R. Derogatis (1975) zu finden ist.\n\nEs handelt sich bei den 53 Items der BSCL um die fünf bis sechs ladungsstärksten Items pro Skala aus der 90 Items umfassenden SCL-90. Die Urheber- und Markenrechte an der BSCL liegen beim Hogrefe Verlag.\n\n#### Auswertung / Interpretation\nAusgabe der Subskalen in z-Werten auf der Normstichprobe von Franke (2000) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Geschlecht, den Messzeitpunkt und die Behandlungsart (EAS / EP).\n\n",
              "parents": [
                {
                  "text": "## BSCL (Brief Symptom Checklist)\n\n\n### Zusammenfassung\nDie „Brief Symptom Checklist“ (BSCL) ist die Kurzform der SCL-90. Es handelt sich bei der BSCL um eine deutschsprachige Übersetzung von G.H. Franke, deren Ursprung in dem amerikanischen „Brief Symptom Inventory“ (BSI) von L.R. Derogatis (1975) zu finden ist.\n\nEs handelt sich bei den 53 Items der BSCL um die fünf bis sechs ladungsstärksten Items pro Skala aus der 90 Items umfassenden SCL-90. Die Urheber- und Markenrechte an der BSCL liegen beim Hogrefe Verlag.\n\n#### Auswertung / Interpretation\nAusgabe der Subskalen in z-Werten auf der Normstichprobe von Franke (2000) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Geschlecht, den Messzeitpunkt und die Behandlungsart (EAS / EP).\n\n\n",
                  "identifier": "ch.suedhang.apps.bscl_anq",
                  "html": "<h2>BSCL (Brief Symptom Checklist)</h2><h3>Zusammenfassung</h3><p>Die „Brief Symptom Checklist“ (BSCL) ist die Kurzform der SCL-90. Es handelt sich bei der BSCL um eine deutschsprachige Übersetzung von G.H. Franke, deren Ursprung in dem amerikanischen „Brief Symptom Inventory“ (BSI) von L.R. Derogatis (1975) zu finden ist.</p><p>Es handelt sich bei den 53 Items der BSCL um die fünf bis sechs ladungsstärksten Items pro Skala aus der 90 Items umfassenden SCL-90. Die Urheber- und Markenrechte an der BSCL liegen beim Hogrefe Verlag.</p><h4>Auswertung / Interpretation</h4><p>Ausgabe der Subskalen in z-Werten auf der Normstichprobe von Franke (2000) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Geschlecht, den Messzeitpunkt und die Behandlungsart (EAS / EP).</p>"
                }
              ],
              "html": "<h2>BSCL (Brief Symptom Checklist)</h2><h3>Zusammenfassung</h3><p>Die „Brief Symptom Checklist“ (BSCL) ist die Kurzform der SCL-90. Es handelt sich bei der BSCL um eine deutschsprachige Übersetzung von G.H. Franke, deren Ursprung in dem amerikanischen „Brief Symptom Inventory“ (BSI) von L.R. Derogatis (1975) zu finden ist.</p><p>Es handelt sich bei den 53 Items der BSCL um die fünf bis sechs ladungsstärksten Items pro Skala aus der 90 Items umfassenden SCL-90. Die Urheber- und Markenrechte an der BSCL liegen beim Hogrefe Verlag.</p><h4>Auswertung / Interpretation</h4><p>Ausgabe der Subskalen in z-Werten auf der Normstichprobe von Franke (2000) beruhend. Als Vergleich dient die bisherige Patientengruppe mit den gleichen Merkmalen in Bezug auf das Geschlecht, den Messzeitpunkt und die Behandlungsart (EAS / EP).</p>"
            },
            "surveys": [
              {
                "identifier": "bscl_anq",
                "name": "BSCL"
              },
              {
                "identifier": "bscl_admin",
                "name": "BSCL - Admin"
              }
            ],
            "templates": [
              {
                "height": 12,
                "width": 6,
                "name": "BSCL"
              }
            ],
            "identifier": "ch.suedhang.apps.bscl_anq.production",
            "pdf_templates": [],
            "data_source_queries": [],
            "original_name": "BSCL (ANQ)",
            "dependencies": [],
            "name": "BSCL (ANQ)",
            "events": [
              {
                "due_after": 259200,
                "survey": "bscl_anq",
                "name": "activation",
                "time_spec": {
                  "type": "on_activation"
                },
                "overdue": {
                  "type": "ignore"
                },
                "description": "BSCL - Eintritt"
              },
              {
                "due_after": 259200,
                "survey": "bscl_anq",
                "name": "exit",
                "time_spec": {
                  "days": 10,
                  "time": "08:00:00",
                  "type": "before_exit"
                },
                "overdue": {
                  "type": "ignore"
                },
                "description": "BSCL - Austritt"
              }
            ],
            "version": "1.0",
            "type": "patient",
            "short_description": "Erfassung subjektiver Beeinträchtigung durch körperliche und psychische Symptome.",
            "database_schema_name": "ch_suedhang_apps_bscl_anq_production",
            "database_user_name": "ch_suedhang_apps_bscl_anq_production",
            "description": "",
            "developer": {
              "email": "nora.schoenenberger@suedhang.ch",
              "phone": "+41 (0)31 828 14 92",
              "first_name": "Nora",
              "website": "http://suedhang.ch/de/",
              "company": "Suedhang",
              "last_name": "Schönenberger",
              "github_user": "schoenenb"
            }
          }
        },
        "ch.suedhang.apps.sci.production": {
          "date": "2020-04-03T12:09:08.880Z",
          "data": [
            {
              "all_found": true,
              "app_id": "ch.suedhang.apps.sci.production",
              "date": "2018-11-21T15:20:35Z",
              "response_id": 24046,
              "response": {
                "ESCIUnsicherheit[ESCIU2]": "",
                "ASCISymptome[ESCIS1]": "",
                "ESCISymptome[ESCIS5]": "4",
                "ASCISymptome[ESCI13]": "",
                "ESCIOverstaining[ESCIO2]": "",
                "ESCICoping[ESCIC14]": "4",
                "ESCIUnsicherheit[ESCIU1]": "",
                "ESCIOverstaining[ESCIO1]": "",
                "datestamp": "2018-11-21 16:29:56",
                "ESCISymptome[ESCIS6]": "4",
                "ASCISymptome[ESCIS2]": "",
                "ASCISymptome[ESCI10]": "",
                "ESCICoping[ESCIC17]": "2",
                "ESCISymptome[ESCI11]": "3",
                "ESCIOverstaining[ESCIO4]": "",
                "ESCISymptome[ESCIS3]": "1",
                "ASCISymptome[ESCIS7]": "",
                "ESCICoping[ESCIC12]": "1",
                "ESCIUnsicherheit[ESCIU4]": "",
                "ASCISymptome[ESCIS8]": "",
                "andererZeitpunkt": "",
                "optinomixHASH": "eab83d1f-2515-419e-b48b-8ac63ff1b490",
                "ASCIBelastung[ESCIB4]": "",
                "ESCICoping[ESCIC4]": "2",
                "ESCISymptome[ESCIS9]": "3",
                "ESCICoping[ESCIC18]": "1",
                "ESCIBelastung[ESCIB5]": "5",
                "submitdate": "2018-11-21 16:29:56",
                "ESCICoping[ESCIC90]": "1",
                "ASCIBelastung[ESCIB1]": "",
                "ESCICoping[ESCIC1]": "3",
                "ESCICoping[ESCIC2]": "1",
                "ASCIBelastung[ESCIB2]": "",
                "ESCICoping[ESCIC20]": "3",
                "ESCIBelastung[ESCIB6]": "4",
                "ASCISymptome[ESCI11]": "",
                "ESCICoping[ESCIC16]": "1",
                "ESCISymptome[ESCIS7]": "4",
                "ASCISymptome[ESCIS3]": "",
                "ESCICoping[ESCIC11]": "4",
                "ESCIUnsicherheit[ESCIU7]": "",
                "ASCISymptome[ESCIS4]": "",
                "ESCISymptome[ESCI12]": "4",
                "ESCICoping[ESCIC8]": "1",
                "ESCIOverstaining[ESCIO7]": "",
                "startdate": "2018-11-21 16:17:39",
                "ASCIBelastung[ESCIB5]": "",
                "ESCIBelastung[ESCIB1]": "3",
                "ASCISymptome[ESCIS9]": "",
                "ESCICoping[ESCIC5]": "1",
                "ESCIBelastung[ESCIB2]": "3",
                "ASCIBelastung[ESCIB6]": "",
                "ESCICoping[ESCIC6]": "2",
                "startlanguage": "de",
                "ASCIBelastung[ESCIB3]": "",
                "ESCIBelastung[ESCIB7]": "3",
                "ESCICoping[ESCIC3]": "2",
                "ESCIUnsicherheit[ESCIU3]": "",
                "PID": "13012",
                "ESCIOverstaining[ESCIO3]": "",
                "id": "1034",
                "ESCISymptome[ESCIS4]": "1",
                "ESCICoping[ESCIC15]": "1",
                "ASCISymptome[ESCI12]": "",
                "ESCIOverstaining[ESCIO6]": "",
                "ASCISymptome[ESCIS5]": "",
                "ESCISymptome[ESCIS1]": "3",
                "ESCISymptome[ESCI13]": "3",
                "ESCICoping[ESCIC10]": "1",
                "ESCIUnsicherheit[ESCIU6]": "",
                "ESCISymptome[ESCIS2]": "1",
                "ASCISymptome[ESCIS6]": "",
                "FID": "130120300",
                "ESCISymptome[ESCI10]": "3",
                "ESCIOverstaining[ESCIO5]": "",
                "ESCICoping[ESCIC13]": "1",
                "ESCIUnsicherheit[ESCIU5]": "",
                "ASCIBelastung[ESCIB7]": "",
                "ESCICoping[ESCIC7]": "2",
                "ESCIBelastung[ESCIB3]": "3",
                "ESCISymptome[ESCIS8]": "4",
                "Erhebungszeitpunkt": "1",
                "ESCICoping[ESCIC19]": "2",
                "ESCIBelastung[ESCIB4]": "1",
                "Datum": "2018-11-21 00:00:00",
                "lastpage": "13"
              },
              "event": {
                "status": "done",
                "due": "2018-11-24T14:01:50Z",
                "url": "http://optinomic.suedhang.ch:8000/limesurvey_v2/index.php/survey/index/sid/933257/newtest/Y/lang/de?&933257X2X6=eab83d1f-2515-419e-b48b-8ac63ff1b490&933257X2X7=13012&933257X2X8=130120300",
                "patient_uses_module_id": 25435,
                "random_hash": "eab83d1f-2515-419e-b48b-8ac63ff1b490",
                "survey_name": "SCI",
                "patient_id": 3868,
                "responsibility": {
                  "type": "patient_via_assessment"
                },
                "module": "ch.suedhang.apps.sci.production",
                "overdue": {
                  "type": "ignore"
                },
                "created_at": "2018-11-21T14:01:50Z",
                "description": "Eintritt: Stress-Coping-Inventar (SCI)",
                "id": 39094,
                "extras": {
                  "created_at": "21.11.2018",
                  "due": "24.11.2018",
                  "status": "Done",
                  "status_de": "Erledigt",
                  "show_do_it_now": false
                }
              },
              "event_found": true,
              "event_id": 39094,
              "patient": {
                "age": 51,
                "birthday": "22.10.1968",
                "birthday_age": "22.10.1968 | 51",
                "name": "Breitenmoser Dominique",
                "birth_year": 1968,
                "secure": "Br. D. (1968)",
                "ansprache": "Herr",
                "anrede": "Herr Breitenmoser",
                "full_name": "Herr Breitenmoser Dominique (22.10.1968 | 51)",
                "full_address": "Aarburgerstrasse 96, 4600 Olten",
                "phone": "",
                "infoline": "Aarburgerstrasse 96, 4600 Olten",
                "color_main": "#3F51B5",
                "color_accent": "#E91E63"
              },
              "patient_found": true,
              "patient_id": 3868,
              "stay": {
                "photo": "",
                "cis_lead_doctor": null,
                "status": "",
                "phase": "complete",
                "frozen": true,
                "first_contact": null,
                "lead_therapist_id": 66,
                "start": "2018-11-20T12:45:00Z",
                "stop_status": null,
                "insurance_number": "",
                "patient_id": 3868,
                "insurance_provider": "PTS",
                "cis_fid": 1301203,
                "stop": "2019-02-12T12:30:00Z",
                "deputy_lead_therapist_id": null,
                "notes": "",
                "service_provider": "",
                "class": "S",
                "lead_therapist_id_overwrite": null,
                "id": 5992,
                "fid": 5992,
                "extras": {
                  "in_stay": false,
                  "duration": 84,
                  "phase_de": "Die Behandlung wurde vor mehr als 14 Tage beendet",
                  "phase_en": "the stay ended more than 14 days ago",
                  "beginn": "20.11.2018",
                  "from_to": "20.11.2018 - 12.2.2019",
                  "ende": "12.2.2019"
                }
              },
              "stay_found": true,
              "stay_id": 5992,
              "patient_uses_module": {
                "settings": {},
                "stay_id": 5992,
                "patient_id": 3868,
                "responsibility": null,
                "deactivated": false,
                "module": "ch.suedhang.apps.sci.production",
                "overdue": null,
                "last_event_generation": "2020-04-03T12:03:56.816276Z",
                "activated_on": "2018-11-21T14:01:50Z",
                "id": 25435
              },
              "patient_uses_module_found": true,
              "patient_uses_module_id": 25435,
              "calculation": {
                "scores": {
                  "hash": "eab83d1f-2515-419e-b48b-8ac63ff1b490",
                  "response": {
                    "data": {
                      "response": {
                        "ESCIUnsicherheit[ESCIU2]": "",
                        "ASCISymptome[ESCIS1]": "",
                        "ESCISymptome[ESCIS5]": "4",
                        "ASCISymptome[ESCI13]": "",
                        "ESCIOverstaining[ESCIO2]": "",
                        "ESCICoping[ESCIC14]": "4",
                        "ESCIUnsicherheit[ESCIU1]": "",
                        "ESCIOverstaining[ESCIO1]": "",
                        "datestamp": "2018-11-21 16:29:56",
                        "ESCISymptome[ESCIS6]": "4",
                        "ASCISymptome[ESCIS2]": "",
                        "ASCISymptome[ESCI10]": "",
                        "ESCICoping[ESCIC17]": "2",
                        "ESCISymptome[ESCI11]": "3",
                        "ESCIOverstaining[ESCIO4]": "",
                        "ESCISymptome[ESCIS3]": "1",
                        "ASCISymptome[ESCIS7]": "",
                        "ESCICoping[ESCIC12]": "1",
                        "ESCIUnsicherheit[ESCIU4]": "",
                        "ASCISymptome[ESCIS8]": "",
                        "andererZeitpunkt": "",
                        "optinomixHASH": "eab83d1f-2515-419e-b48b-8ac63ff1b490",
                        "ASCIBelastung[ESCIB4]": "",
                        "ESCICoping[ESCIC4]": "2",
                        "ESCISymptome[ESCIS9]": "3",
                        "ESCICoping[ESCIC18]": "1",
                        "ESCIBelastung[ESCIB5]": "5",
                        "submitdate": "2018-11-21 16:29:56",
                        "ESCICoping[ESCIC90]": "1",
                        "ASCIBelastung[ESCIB1]": "",
                        "ESCICoping[ESCIC1]": "3",
                        "ESCICoping[ESCIC2]": "1",
                        "ASCIBelastung[ESCIB2]": "",
                        "ESCICoping[ESCIC20]": "3",
                        "ESCIBelastung[ESCIB6]": "4",
                        "ASCISymptome[ESCI11]": "",
                        "ESCICoping[ESCIC16]": "1",
                        "ESCISymptome[ESCIS7]": "4",
                        "ASCISymptome[ESCIS3]": "",
                        "ESCICoping[ESCIC11]": "4",
                        "ESCIUnsicherheit[ESCIU7]": "",
                        "ASCISymptome[ESCIS4]": "",
                        "ESCISymptome[ESCI12]": "4",
                        "ESCICoping[ESCIC8]": "1",
                        "ESCIOverstaining[ESCIO7]": "",
                        "startdate": "2018-11-21 16:17:39",
                        "ASCIBelastung[ESCIB5]": "",
                        "ESCIBelastung[ESCIB1]": "3",
                        "ASCISymptome[ESCIS9]": "",
                        "ESCICoping[ESCIC5]": "1",
                        "ESCIBelastung[ESCIB2]": "3",
                        "ASCIBelastung[ESCIB6]": "",
                        "ESCICoping[ESCIC6]": "2",
                        "startlanguage": "de",
                        "ASCIBelastung[ESCIB3]": "",
                        "ESCIBelastung[ESCIB7]": "3",
                        "ESCICoping[ESCIC3]": "2",
                        "ESCIUnsicherheit[ESCIU3]": "",
                        "PID": "13012",
                        "ESCIOverstaining[ESCIO3]": "",
                        "id": "1034",
                        "ESCISymptome[ESCIS4]": "1",
                        "ESCICoping[ESCIC15]": "1",
                        "ASCISymptome[ESCI12]": "",
                        "ESCIOverstaining[ESCIO6]": "",
                        "ASCISymptome[ESCIS5]": "",
                        "ESCISymptome[ESCIS1]": "3",
                        "ESCISymptome[ESCI13]": "3",
                        "ESCICoping[ESCIC10]": "1",
                        "ESCIUnsicherheit[ESCIU6]": "",
                        "ESCISymptome[ESCIS2]": "1",
                        "ASCISymptome[ESCIS6]": "",
                        "FID": "130120300",
                        "ESCISymptome[ESCI10]": "3",
                        "ESCIOverstaining[ESCIO5]": "",
                        "ESCICoping[ESCIC13]": "1",
                        "ESCIUnsicherheit[ESCIU5]": "",
                        "ASCIBelastung[ESCIB7]": "",
                        "ESCICoping[ESCIC7]": "2",
                        "ESCIBelastung[ESCIB3]": "3",
                        "ESCISymptome[ESCIS8]": "4",
                        "Erhebungszeitpunkt": "1",
                        "ESCICoping[ESCIC19]": "2",
                        "ESCIBelastung[ESCIB4]": "1",
                        "Datum": "2018-11-21 00:00:00",
                        "lastpage": "13"
                      },
                      "event_id": 39094,
                      "filled": "2018-11-21T15:20:35Z"
                    },
                    "id": 24046
                  },
                  "population": {
                    "patient_gender": "male",
                    "current": {
                      "0": {
                        "UG6": 23,
                        "UG7": 33,
                        "UG1": 7,
                        "UG4": 13,
                        "UG5": 17,
                        "UG8": 44,
                        "UG2": 8,
                        "UG9": 46,
                        "UG3": 10
                      },
                      "1": {
                        "UG6": 37,
                        "UG7": 41,
                        "UG1": 13,
                        "UG4": 27,
                        "UG5": 32,
                        "UG8": 46,
                        "UG2": 16,
                        "UG9": 51,
                        "UG3": 20
                      },
                      "2": {
                        "UG6": 9,
                        "UG7": 11,
                        "UG1": 4,
                        "UG4": 6,
                        "UG5": 8,
                        "UG8": 12,
                        "UG2": 4,
                        "UG9": 14,
                        "UG3": 5
                      },
                      "3": {
                        "UG6": 10,
                        "UG7": 11,
                        "UG1": 4,
                        "UG4": 7,
                        "UG5": 8,
                        "UG8": 12,
                        "UG2": 4,
                        "UG9": 14,
                        "UG3": 6
                      },
                      "4": {
                        "UG6": 10,
                        "UG7": 12,
                        "UG1": 4,
                        "UG4": 7,
                        "UG5": 8,
                        "UG8": 14,
                        "UG2": 4,
                        "UG9": 16,
                        "UG3": 5
                      },
                      "5": {
                        "UG6": 7,
                        "UG7": 8,
                        "UG1": 4,
                        "UG4": 5,
                        "UG5": 6,
                        "UG8": 11,
                        "UG2": 4,
                        "UG9": 14,
                        "UG3": 4
                      },
                      "6": {
                        "UG6": 9,
                        "UG7": 10,
                        "UG1": 4,
                        "UG4": 5,
                        "UG5": 7,
                        "UG8": 12,
                        "UG2": 4,
                        "UG9": 14,
                        "UG3": 4
                      }
                    },
                    "name": "Männer, Älter als 50 Jahre",
                    "patient_age": 51
                  },
                  "scores": [
                    {
                      "stanine": 5,
                      "sum_score": 22,
                      "name": "belastung",
                      "sub_left": "Keine oder wenige Stressoren durch negative Ereignisse",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Viele Stressoren durch negative Ereignisse",
                      "question": "Stress durch Verlust"
                    },
                    {
                      "stanine": 6,
                      "sum_score": 38,
                      "name": "stress",
                      "sub_left": "Wenig koerperliche und psychische Stressreaktionen",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Viele koerperliche und psychische Stressreaktionen",
                      "question": "Stresssymptome"
                    },
                    {
                      "stanine": 4,
                      "sum_score": 7,
                      "name": "coping_pos",
                      "sub_left": "Anwendung der Strategie wenig ausgepraegt",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Hilfreiche Nutzung der Strategie",
                      "question": "Positives Denken"
                    },
                    {
                      "stanine": 4,
                      "sum_score": 7,
                      "name": "coping_ab",
                      "sub_left": "Anwendung der Strategie wenig ausgepraegt",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Hilfreiche Nutzung der Strategie",
                      "question": "Aktive Stressbewaeltigung"
                    },
                    {
                      "stanine": 3,
                      "sum_score": 6,
                      "name": "coping_su",
                      "sub_left": "Anwendung der Strategie wenig ausgepraegt",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Gut: Hilfreiche Nutzung der Strategie",
                      "question": "Soziale Unterstuetzung"
                    },
                    {
                      "stanine": 3,
                      "sum_score": 4,
                      "name": "coping_rel",
                      "sub_left": "Anwendung der Strategie wenig ausgepraegt",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Hilfreiche Nutzung der Strategie",
                      "question": "Halt im Glauben"
                    },
                    {
                      "stanine": 9,
                      "sum_score": 16,
                      "name": "coping_alk",
                      "sub_left": "Anwendung der Strategie wenig ausgepraegt",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Haeufige Anwendung der unguenstigen Strategie",
                      "question": "Alkohol- und Zigarettenkonsum"
                    }
                  ]
                }
              },
              "calculation_found": true,
              "calculation_found_method": "variant_response",
              "info": {
                "app_zeitpunkt": "Eintritt",
                "score_0": 5,
                "score_1": 6,
                "score_2": 6,
                "score_3": 6,
                "score_4": 7,
                "score_5": 7,
                "score_6": 9
              }
            },
            {
              "all_found": true,
              "app_id": "ch.suedhang.apps.sci.production",
              "date": "2019-02-04T12:40:22Z",
              "response_id": 25276,
              "response": {
                "ESCIUnsicherheit[ESCIU2]": "",
                "ASCISymptome[ESCIS1]": "2",
                "ESCISymptome[ESCIS5]": "",
                "ASCISymptome[ESCI13]": "4",
                "ESCIOverstaining[ESCIO2]": "",
                "ESCICoping[ESCIC14]": "1",
                "ESCIUnsicherheit[ESCIU1]": "",
                "ESCIOverstaining[ESCIO1]": "",
                "datestamp": "2019-02-04 13:46:05",
                "ESCISymptome[ESCIS6]": "",
                "ASCISymptome[ESCIS2]": "3",
                "ASCISymptome[ESCI10]": "3",
                "ESCICoping[ESCIC17]": "3",
                "ESCISymptome[ESCI11]": "",
                "ESCIOverstaining[ESCIO4]": "",
                "ESCISymptome[ESCIS3]": "",
                "ASCISymptome[ESCIS7]": "3",
                "ESCICoping[ESCIC12]": "3",
                "ESCIUnsicherheit[ESCIU4]": "",
                "ASCISymptome[ESCIS8]": "2",
                "andererZeitpunkt": "",
                "optinomixHASH": "bd08245b-34c1-4942-a5e5-baae603c27590",
                "ASCIBelastung[ESCIB4]": "2",
                "ESCICoping[ESCIC4]": "3",
                "ESCISymptome[ESCIS9]": "",
                "ESCICoping[ESCIC18]": "3",
                "ESCIBelastung[ESCIB5]": "",
                "submitdate": "2019-02-04 13:46:05",
                "ESCICoping[ESCIC90]": "1",
                "ASCIBelastung[ESCIB1]": "3",
                "ESCICoping[ESCIC1]": "2",
                "ESCICoping[ESCIC2]": "2",
                "ASCIBelastung[ESCIB2]": "2",
                "ESCICoping[ESCIC20]": "3",
                "ESCIBelastung[ESCIB6]": "",
                "ASCISymptome[ESCI11]": "4",
                "ESCICoping[ESCIC16]": "2",
                "ESCISymptome[ESCIS7]": "",
                "ASCISymptome[ESCIS3]": "2",
                "ESCICoping[ESCIC11]": "1",
                "ESCIUnsicherheit[ESCIU7]": "",
                "ASCISymptome[ESCIS4]": "2",
                "ESCISymptome[ESCI12]": "",
                "ESCICoping[ESCIC8]": "1",
                "ESCIOverstaining[ESCIO7]": "",
                "startdate": "2019-02-04 13:37:53",
                "ASCIBelastung[ESCIB5]": "2",
                "ESCIBelastung[ESCIB1]": "",
                "ASCISymptome[ESCIS9]": "2",
                "ESCICoping[ESCIC5]": "2",
                "ESCIBelastung[ESCIB2]": "",
                "ASCIBelastung[ESCIB6]": "2",
                "ESCICoping[ESCIC6]": "3",
                "startlanguage": "de",
                "ASCIBelastung[ESCIB3]": "2",
                "ESCIBelastung[ESCIB7]": "",
                "ESCICoping[ESCIC3]": "3",
                "ESCIUnsicherheit[ESCIU3]": "",
                "PID": "13012",
                "ESCIOverstaining[ESCIO3]": "",
                "id": "1124",
                "ESCISymptome[ESCIS4]": "",
                "ESCICoping[ESCIC15]": "3",
                "ASCISymptome[ESCI12]": "3",
                "ESCIOverstaining[ESCIO6]": "",
                "ASCISymptome[ESCIS5]": "2",
                "ESCISymptome[ESCIS1]": "",
                "ESCISymptome[ESCI13]": "",
                "ESCICoping[ESCIC10]": "1",
                "ESCIUnsicherheit[ESCIU6]": "",
                "ESCISymptome[ESCIS2]": "",
                "ASCISymptome[ESCIS6]": "3",
                "FID": "130120300",
                "ESCISymptome[ESCI10]": "",
                "ESCIOverstaining[ESCIO5]": "",
                "ESCICoping[ESCIC13]": "3",
                "ESCIUnsicherheit[ESCIU5]": "",
                "ASCIBelastung[ESCIB7]": "2",
                "ESCICoping[ESCIC7]": "3",
                "ESCIBelastung[ESCIB3]": "",
                "ESCISymptome[ESCIS8]": "",
                "Erhebungszeitpunkt": "2",
                "ESCICoping[ESCIC19]": "3",
                "ESCIBelastung[ESCIB4]": "",
                "Datum": "2019-02-04 00:00:00",
                "lastpage": "13"
              },
              "event": {
                "status": "done",
                "due": "2019-02-05T07:00:00Z",
                "url": "http://optinomic.suedhang.ch:8000/limesurvey_v2/index.php/survey/index/sid/933257/newtest/Y/lang/de?&933257X2X6=bd08245b-34c1-4942-a5e5-baae603c27590&933257X2X7=13012&933257X2X8=130120300",
                "patient_uses_module_id": 25435,
                "random_hash": "bd08245b-34c1-4942-a5e5-baae603c27590",
                "survey_name": "SCI",
                "patient_id": 3868,
                "responsibility": {
                  "type": "patient_via_assessment"
                },
                "module": "ch.suedhang.apps.sci.production",
                "overdue": {
                  "type": "ignore"
                },
                "created_at": "2019-02-02T07:00:00Z",
                "description": "Austritt: Stress-Coping-Inventar (SCI)",
                "id": 40803,
                "extras": {
                  "created_at": "2.2.2019",
                  "due": "5.2.2019",
                  "status": "Done",
                  "status_de": "Erledigt",
                  "show_do_it_now": false
                }
              },
              "event_found": true,
              "event_id": 40803,
              "patient": {
                "age": 51,
                "birthday": "22.10.1968",
                "birthday_age": "22.10.1968 | 51",
                "name": "Breitenmoser Dominique",
                "birth_year": 1968,
                "secure": "Br. D. (1968)",
                "ansprache": "Herr",
                "anrede": "Herr Breitenmoser",
                "full_name": "Herr Breitenmoser Dominique (22.10.1968 | 51)",
                "full_address": "Aarburgerstrasse 96, 4600 Olten",
                "phone": "",
                "infoline": "Aarburgerstrasse 96, 4600 Olten",
                "color_main": "#3F51B5",
                "color_accent": "#E91E63"
              },
              "patient_found": true,
              "patient_id": 3868,
              "stay": {
                "photo": "",
                "cis_lead_doctor": null,
                "status": "",
                "phase": "complete",
                "frozen": true,
                "first_contact": null,
                "lead_therapist_id": 66,
                "start": "2018-11-20T12:45:00Z",
                "stop_status": null,
                "insurance_number": "",
                "patient_id": 3868,
                "insurance_provider": "PTS",
                "cis_fid": 1301203,
                "stop": "2019-02-12T12:30:00Z",
                "deputy_lead_therapist_id": null,
                "notes": "",
                "service_provider": "",
                "class": "S",
                "lead_therapist_id_overwrite": null,
                "id": 5992,
                "fid": 5992,
                "extras": {
                  "in_stay": false,
                  "duration": 84,
                  "phase_de": "Die Behandlung wurde vor mehr als 14 Tage beendet",
                  "phase_en": "the stay ended more than 14 days ago",
                  "beginn": "20.11.2018",
                  "from_to": "20.11.2018 - 12.2.2019",
                  "ende": "12.2.2019"
                }
              },
              "stay_found": true,
              "stay_id": 5992,
              "patient_uses_module": {
                "settings": {},
                "stay_id": 5992,
                "patient_id": 3868,
                "responsibility": null,
                "deactivated": false,
                "module": "ch.suedhang.apps.sci.production",
                "overdue": null,
                "last_event_generation": "2020-04-03T12:03:56.816276Z",
                "activated_on": "2018-11-21T14:01:50Z",
                "id": 25435
              },
              "patient_uses_module_found": true,
              "patient_uses_module_id": 25435,
              "calculation": {
                "scores": {
                  "hash": "bd08245b-34c1-4942-a5e5-baae603c27590",
                  "response": {
                    "data": {
                      "response": {
                        "ESCIUnsicherheit[ESCIU2]": "",
                        "ASCISymptome[ESCIS1]": "2",
                        "ESCISymptome[ESCIS5]": "",
                        "ASCISymptome[ESCI13]": "4",
                        "ESCIOverstaining[ESCIO2]": "",
                        "ESCICoping[ESCIC14]": "1",
                        "ESCIUnsicherheit[ESCIU1]": "",
                        "ESCIOverstaining[ESCIO1]": "",
                        "datestamp": "2019-02-04 13:46:05",
                        "ESCISymptome[ESCIS6]": "",
                        "ASCISymptome[ESCIS2]": "3",
                        "ASCISymptome[ESCI10]": "3",
                        "ESCICoping[ESCIC17]": "3",
                        "ESCISymptome[ESCI11]": "",
                        "ESCIOverstaining[ESCIO4]": "",
                        "ESCISymptome[ESCIS3]": "",
                        "ASCISymptome[ESCIS7]": "3",
                        "ESCICoping[ESCIC12]": "3",
                        "ESCIUnsicherheit[ESCIU4]": "",
                        "ASCISymptome[ESCIS8]": "2",
                        "andererZeitpunkt": "",
                        "optinomixHASH": "bd08245b-34c1-4942-a5e5-baae603c27590",
                        "ASCIBelastung[ESCIB4]": "2",
                        "ESCICoping[ESCIC4]": "3",
                        "ESCISymptome[ESCIS9]": "",
                        "ESCICoping[ESCIC18]": "3",
                        "ESCIBelastung[ESCIB5]": "",
                        "submitdate": "2019-02-04 13:46:05",
                        "ESCICoping[ESCIC90]": "1",
                        "ASCIBelastung[ESCIB1]": "3",
                        "ESCICoping[ESCIC1]": "2",
                        "ESCICoping[ESCIC2]": "2",
                        "ASCIBelastung[ESCIB2]": "2",
                        "ESCICoping[ESCIC20]": "3",
                        "ESCIBelastung[ESCIB6]": "",
                        "ASCISymptome[ESCI11]": "4",
                        "ESCICoping[ESCIC16]": "2",
                        "ESCISymptome[ESCIS7]": "",
                        "ASCISymptome[ESCIS3]": "2",
                        "ESCICoping[ESCIC11]": "1",
                        "ESCIUnsicherheit[ESCIU7]": "",
                        "ASCISymptome[ESCIS4]": "2",
                        "ESCISymptome[ESCI12]": "",
                        "ESCICoping[ESCIC8]": "1",
                        "ESCIOverstaining[ESCIO7]": "",
                        "startdate": "2019-02-04 13:37:53",
                        "ASCIBelastung[ESCIB5]": "2",
                        "ESCIBelastung[ESCIB1]": "",
                        "ASCISymptome[ESCIS9]": "2",
                        "ESCICoping[ESCIC5]": "2",
                        "ESCIBelastung[ESCIB2]": "",
                        "ASCIBelastung[ESCIB6]": "2",
                        "ESCICoping[ESCIC6]": "3",
                        "startlanguage": "de",
                        "ASCIBelastung[ESCIB3]": "2",
                        "ESCIBelastung[ESCIB7]": "",
                        "ESCICoping[ESCIC3]": "3",
                        "ESCIUnsicherheit[ESCIU3]": "",
                        "PID": "13012",
                        "ESCIOverstaining[ESCIO3]": "",
                        "id": "1124",
                        "ESCISymptome[ESCIS4]": "",
                        "ESCICoping[ESCIC15]": "3",
                        "ASCISymptome[ESCI12]": "3",
                        "ESCIOverstaining[ESCIO6]": "",
                        "ASCISymptome[ESCIS5]": "2",
                        "ESCISymptome[ESCIS1]": "",
                        "ESCISymptome[ESCI13]": "",
                        "ESCICoping[ESCIC10]": "1",
                        "ESCIUnsicherheit[ESCIU6]": "",
                        "ESCISymptome[ESCIS2]": "",
                        "ASCISymptome[ESCIS6]": "3",
                        "FID": "130120300",
                        "ESCISymptome[ESCI10]": "",
                        "ESCIOverstaining[ESCIO5]": "",
                        "ESCICoping[ESCIC13]": "3",
                        "ESCIUnsicherheit[ESCIU5]": "",
                        "ASCIBelastung[ESCIB7]": "2",
                        "ESCICoping[ESCIC7]": "3",
                        "ESCIBelastung[ESCIB3]": "",
                        "ESCISymptome[ESCIS8]": "",
                        "Erhebungszeitpunkt": "2",
                        "ESCICoping[ESCIC19]": "3",
                        "ESCIBelastung[ESCIB4]": "",
                        "Datum": "2019-02-04 00:00:00",
                        "lastpage": "13"
                      },
                      "event_id": 40803,
                      "filled": "2019-02-04T12:40:22Z"
                    },
                    "id": 25276
                  },
                  "population": {
                    "patient_gender": "male",
                    "current": {
                      "0": {
                        "UG6": 23,
                        "UG7": 33,
                        "UG1": 7,
                        "UG4": 13,
                        "UG5": 17,
                        "UG8": 44,
                        "UG2": 8,
                        "UG9": 46,
                        "UG3": 10
                      },
                      "1": {
                        "UG6": 37,
                        "UG7": 41,
                        "UG1": 13,
                        "UG4": 27,
                        "UG5": 32,
                        "UG8": 46,
                        "UG2": 16,
                        "UG9": 51,
                        "UG3": 20
                      },
                      "2": {
                        "UG6": 9,
                        "UG7": 11,
                        "UG1": 4,
                        "UG4": 6,
                        "UG5": 8,
                        "UG8": 12,
                        "UG2": 4,
                        "UG9": 14,
                        "UG3": 5
                      },
                      "3": {
                        "UG6": 10,
                        "UG7": 11,
                        "UG1": 4,
                        "UG4": 7,
                        "UG5": 8,
                        "UG8": 12,
                        "UG2": 4,
                        "UG9": 14,
                        "UG3": 6
                      },
                      "4": {
                        "UG6": 10,
                        "UG7": 12,
                        "UG1": 4,
                        "UG4": 7,
                        "UG5": 8,
                        "UG8": 14,
                        "UG2": 4,
                        "UG9": 16,
                        "UG3": 5
                      },
                      "5": {
                        "UG6": 7,
                        "UG7": 8,
                        "UG1": 4,
                        "UG4": 5,
                        "UG5": 6,
                        "UG8": 11,
                        "UG2": 4,
                        "UG9": 14,
                        "UG3": 4
                      },
                      "6": {
                        "UG6": 9,
                        "UG7": 10,
                        "UG1": 4,
                        "UG4": 5,
                        "UG5": 7,
                        "UG8": 12,
                        "UG2": 4,
                        "UG9": 14,
                        "UG3": 4
                      }
                    },
                    "name": "Männer, Älter als 50 Jahre",
                    "patient_age": 51
                  },
                  "scores": [
                    {
                      "stanine": 4,
                      "sum_score": 15,
                      "name": "belastung",
                      "sub_left": "Keine oder wenige Stressoren durch negative Ereignisse",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Viele Stressoren durch negative Ereignisse",
                      "question": "Stress durch Verlust"
                    },
                    {
                      "stanine": 5,
                      "sum_score": 35,
                      "name": "stress",
                      "sub_left": "Wenig koerperliche und psychische Stressreaktionen",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Viele koerperliche und psychische Stressreaktionen",
                      "question": "Stresssymptome"
                    },
                    {
                      "stanine": 6,
                      "sum_score": 9,
                      "name": "coping_pos",
                      "sub_left": "Anwendung der Strategie wenig ausgepraegt",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Hilfreiche Nutzung der Strategie",
                      "question": "Positives Denken"
                    },
                    {
                      "stanine": 8,
                      "sum_score": 12,
                      "name": "coping_ab",
                      "sub_left": "Anwendung der Strategie wenig ausgepraegt",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Hilfreiche Nutzung der Strategie",
                      "question": "Aktive Stressbewaeltigung"
                    },
                    {
                      "stanine": 7,
                      "sum_score": 12,
                      "name": "coping_su",
                      "sub_left": "Anwendung der Strategie wenig ausgepraegt",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Gut: Hilfreiche Nutzung der Strategie",
                      "question": "Soziale Unterstuetzung"
                    },
                    {
                      "stanine": 5,
                      "sum_score": 6,
                      "name": "coping_rel",
                      "sub_left": "Anwendung der Strategie wenig ausgepraegt",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Hilfreiche Nutzung der Strategie",
                      "question": "Halt im Glauben"
                    },
                    {
                      "stanine": 6,
                      "sum_score": 9,
                      "name": "coping_alk",
                      "sub_left": "Anwendung der Strategie wenig ausgepraegt",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Haeufige Anwendung der unguenstigen Strategie",
                      "question": "Alkohol- und Zigarettenkonsum"
                    }
                  ]
                }
              },
              "calculation_found": true,
              "calculation_found_method": "variant_response",
              "info": {
                "app_zeitpunkt": "Austritt",
                "score_0": 4,
                "score_1": 5,
                "score_2": 4,
                "score_3": 2,
                "score_4": 3,
                "score_5": 5,
                "score_6": 6
              }
            }
          ],
          "calculations_all": [
            {
              "result": [
                {
                  "hash": "bd08245b-34c1-4942-a5e5-baae603c27590",
                  "response": {
                    "data": {
                      "response": {
                        "ESCIUnsicherheit[ESCIU2]": "",
                        "ASCISymptome[ESCIS1]": "2",
                        "ESCISymptome[ESCIS5]": "",
                        "ASCISymptome[ESCI13]": "4",
                        "ESCIOverstaining[ESCIO2]": "",
                        "ESCICoping[ESCIC14]": "1",
                        "ESCIUnsicherheit[ESCIU1]": "",
                        "ESCIOverstaining[ESCIO1]": "",
                        "datestamp": "2019-02-04 13:46:05",
                        "ESCISymptome[ESCIS6]": "",
                        "ASCISymptome[ESCIS2]": "3",
                        "ASCISymptome[ESCI10]": "3",
                        "ESCICoping[ESCIC17]": "3",
                        "ESCISymptome[ESCI11]": "",
                        "ESCIOverstaining[ESCIO4]": "",
                        "ESCISymptome[ESCIS3]": "",
                        "ASCISymptome[ESCIS7]": "3",
                        "ESCICoping[ESCIC12]": "3",
                        "ESCIUnsicherheit[ESCIU4]": "",
                        "ASCISymptome[ESCIS8]": "2",
                        "andererZeitpunkt": "",
                        "optinomixHASH": "bd08245b-34c1-4942-a5e5-baae603c27590",
                        "ASCIBelastung[ESCIB4]": "2",
                        "ESCICoping[ESCIC4]": "3",
                        "ESCISymptome[ESCIS9]": "",
                        "ESCICoping[ESCIC18]": "3",
                        "ESCIBelastung[ESCIB5]": "",
                        "submitdate": "2019-02-04 13:46:05",
                        "ESCICoping[ESCIC90]": "1",
                        "ASCIBelastung[ESCIB1]": "3",
                        "ESCICoping[ESCIC1]": "2",
                        "ESCICoping[ESCIC2]": "2",
                        "ASCIBelastung[ESCIB2]": "2",
                        "ESCICoping[ESCIC20]": "3",
                        "ESCIBelastung[ESCIB6]": "",
                        "ASCISymptome[ESCI11]": "4",
                        "ESCICoping[ESCIC16]": "2",
                        "ESCISymptome[ESCIS7]": "",
                        "ASCISymptome[ESCIS3]": "2",
                        "ESCICoping[ESCIC11]": "1",
                        "ESCIUnsicherheit[ESCIU7]": "",
                        "ASCISymptome[ESCIS4]": "2",
                        "ESCISymptome[ESCI12]": "",
                        "ESCICoping[ESCIC8]": "1",
                        "ESCIOverstaining[ESCIO7]": "",
                        "startdate": "2019-02-04 13:37:53",
                        "ASCIBelastung[ESCIB5]": "2",
                        "ESCIBelastung[ESCIB1]": "",
                        "ASCISymptome[ESCIS9]": "2",
                        "ESCICoping[ESCIC5]": "2",
                        "ESCIBelastung[ESCIB2]": "",
                        "ASCIBelastung[ESCIB6]": "2",
                        "ESCICoping[ESCIC6]": "3",
                        "startlanguage": "de",
                        "ASCIBelastung[ESCIB3]": "2",
                        "ESCIBelastung[ESCIB7]": "",
                        "ESCICoping[ESCIC3]": "3",
                        "ESCIUnsicherheit[ESCIU3]": "",
                        "PID": "13012",
                        "ESCIOverstaining[ESCIO3]": "",
                        "id": "1124",
                        "ESCISymptome[ESCIS4]": "",
                        "ESCICoping[ESCIC15]": "3",
                        "ASCISymptome[ESCI12]": "3",
                        "ESCIOverstaining[ESCIO6]": "",
                        "ASCISymptome[ESCIS5]": "2",
                        "ESCISymptome[ESCIS1]": "",
                        "ESCISymptome[ESCI13]": "",
                        "ESCICoping[ESCIC10]": "1",
                        "ESCIUnsicherheit[ESCIU6]": "",
                        "ESCISymptome[ESCIS2]": "",
                        "ASCISymptome[ESCIS6]": "3",
                        "FID": "130120300",
                        "ESCISymptome[ESCI10]": "",
                        "ESCIOverstaining[ESCIO5]": "",
                        "ESCICoping[ESCIC13]": "3",
                        "ESCIUnsicherheit[ESCIU5]": "",
                        "ASCIBelastung[ESCIB7]": "2",
                        "ESCICoping[ESCIC7]": "3",
                        "ESCIBelastung[ESCIB3]": "",
                        "ESCISymptome[ESCIS8]": "",
                        "Erhebungszeitpunkt": "2",
                        "ESCICoping[ESCIC19]": "3",
                        "ESCIBelastung[ESCIB4]": "",
                        "Datum": "2019-02-04 00:00:00",
                        "lastpage": "13"
                      },
                      "event_id": 40803,
                      "filled": "2019-02-04T12:40:22Z"
                    },
                    "id": 25276
                  },
                  "population": {
                    "patient_gender": "male",
                    "current": {
                      "0": {
                        "UG6": 23,
                        "UG7": 33,
                        "UG1": 7,
                        "UG4": 13,
                        "UG5": 17,
                        "UG8": 44,
                        "UG2": 8,
                        "UG9": 46,
                        "UG3": 10
                      },
                      "1": {
                        "UG6": 37,
                        "UG7": 41,
                        "UG1": 13,
                        "UG4": 27,
                        "UG5": 32,
                        "UG8": 46,
                        "UG2": 16,
                        "UG9": 51,
                        "UG3": 20
                      },
                      "2": {
                        "UG6": 9,
                        "UG7": 11,
                        "UG1": 4,
                        "UG4": 6,
                        "UG5": 8,
                        "UG8": 12,
                        "UG2": 4,
                        "UG9": 14,
                        "UG3": 5
                      },
                      "3": {
                        "UG6": 10,
                        "UG7": 11,
                        "UG1": 4,
                        "UG4": 7,
                        "UG5": 8,
                        "UG8": 12,
                        "UG2": 4,
                        "UG9": 14,
                        "UG3": 6
                      },
                      "4": {
                        "UG6": 10,
                        "UG7": 12,
                        "UG1": 4,
                        "UG4": 7,
                        "UG5": 8,
                        "UG8": 14,
                        "UG2": 4,
                        "UG9": 16,
                        "UG3": 5
                      },
                      "5": {
                        "UG6": 7,
                        "UG7": 8,
                        "UG1": 4,
                        "UG4": 5,
                        "UG5": 6,
                        "UG8": 11,
                        "UG2": 4,
                        "UG9": 14,
                        "UG3": 4
                      },
                      "6": {
                        "UG6": 9,
                        "UG7": 10,
                        "UG1": 4,
                        "UG4": 5,
                        "UG5": 7,
                        "UG8": 12,
                        "UG2": 4,
                        "UG9": 14,
                        "UG3": 4
                      }
                    },
                    "name": "Männer, Älter als 50 Jahre",
                    "patient_age": 51
                  },
                  "scores": [
                    {
                      "stanine": 4,
                      "sum_score": 15,
                      "name": "belastung",
                      "sub_left": "Keine oder wenige Stressoren durch negative Ereignisse",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Viele Stressoren durch negative Ereignisse",
                      "question": "Stress durch Verlust"
                    },
                    {
                      "stanine": 5,
                      "sum_score": 35,
                      "name": "stress",
                      "sub_left": "Wenig koerperliche und psychische Stressreaktionen",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Viele koerperliche und psychische Stressreaktionen",
                      "question": "Stresssymptome"
                    },
                    {
                      "stanine": 6,
                      "sum_score": 9,
                      "name": "coping_pos",
                      "sub_left": "Anwendung der Strategie wenig ausgepraegt",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Hilfreiche Nutzung der Strategie",
                      "question": "Positives Denken"
                    },
                    {
                      "stanine": 8,
                      "sum_score": 12,
                      "name": "coping_ab",
                      "sub_left": "Anwendung der Strategie wenig ausgepraegt",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Hilfreiche Nutzung der Strategie",
                      "question": "Aktive Stressbewaeltigung"
                    },
                    {
                      "stanine": 7,
                      "sum_score": 12,
                      "name": "coping_su",
                      "sub_left": "Anwendung der Strategie wenig ausgepraegt",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Gut: Hilfreiche Nutzung der Strategie",
                      "question": "Soziale Unterstuetzung"
                    },
                    {
                      "stanine": 5,
                      "sum_score": 6,
                      "name": "coping_rel",
                      "sub_left": "Anwendung der Strategie wenig ausgepraegt",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Hilfreiche Nutzung der Strategie",
                      "question": "Halt im Glauben"
                    },
                    {
                      "stanine": 6,
                      "sum_score": 9,
                      "name": "coping_alk",
                      "sub_left": "Anwendung der Strategie wenig ausgepraegt",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Haeufige Anwendung der unguenstigen Strategie",
                      "question": "Alkohol- und Zigarettenkonsum"
                    }
                  ]
                },
                {
                  "hash": "eab83d1f-2515-419e-b48b-8ac63ff1b490",
                  "response": {
                    "data": {
                      "response": {
                        "ESCIUnsicherheit[ESCIU2]": "",
                        "ASCISymptome[ESCIS1]": "",
                        "ESCISymptome[ESCIS5]": "4",
                        "ASCISymptome[ESCI13]": "",
                        "ESCIOverstaining[ESCIO2]": "",
                        "ESCICoping[ESCIC14]": "4",
                        "ESCIUnsicherheit[ESCIU1]": "",
                        "ESCIOverstaining[ESCIO1]": "",
                        "datestamp": "2018-11-21 16:29:56",
                        "ESCISymptome[ESCIS6]": "4",
                        "ASCISymptome[ESCIS2]": "",
                        "ASCISymptome[ESCI10]": "",
                        "ESCICoping[ESCIC17]": "2",
                        "ESCISymptome[ESCI11]": "3",
                        "ESCIOverstaining[ESCIO4]": "",
                        "ESCISymptome[ESCIS3]": "1",
                        "ASCISymptome[ESCIS7]": "",
                        "ESCICoping[ESCIC12]": "1",
                        "ESCIUnsicherheit[ESCIU4]": "",
                        "ASCISymptome[ESCIS8]": "",
                        "andererZeitpunkt": "",
                        "optinomixHASH": "eab83d1f-2515-419e-b48b-8ac63ff1b490",
                        "ASCIBelastung[ESCIB4]": "",
                        "ESCICoping[ESCIC4]": "2",
                        "ESCISymptome[ESCIS9]": "3",
                        "ESCICoping[ESCIC18]": "1",
                        "ESCIBelastung[ESCIB5]": "5",
                        "submitdate": "2018-11-21 16:29:56",
                        "ESCICoping[ESCIC90]": "1",
                        "ASCIBelastung[ESCIB1]": "",
                        "ESCICoping[ESCIC1]": "3",
                        "ESCICoping[ESCIC2]": "1",
                        "ASCIBelastung[ESCIB2]": "",
                        "ESCICoping[ESCIC20]": "3",
                        "ESCIBelastung[ESCIB6]": "4",
                        "ASCISymptome[ESCI11]": "",
                        "ESCICoping[ESCIC16]": "1",
                        "ESCISymptome[ESCIS7]": "4",
                        "ASCISymptome[ESCIS3]": "",
                        "ESCICoping[ESCIC11]": "4",
                        "ESCIUnsicherheit[ESCIU7]": "",
                        "ASCISymptome[ESCIS4]": "",
                        "ESCISymptome[ESCI12]": "4",
                        "ESCICoping[ESCIC8]": "1",
                        "ESCIOverstaining[ESCIO7]": "",
                        "startdate": "2018-11-21 16:17:39",
                        "ASCIBelastung[ESCIB5]": "",
                        "ESCIBelastung[ESCIB1]": "3",
                        "ASCISymptome[ESCIS9]": "",
                        "ESCICoping[ESCIC5]": "1",
                        "ESCIBelastung[ESCIB2]": "3",
                        "ASCIBelastung[ESCIB6]": "",
                        "ESCICoping[ESCIC6]": "2",
                        "startlanguage": "de",
                        "ASCIBelastung[ESCIB3]": "",
                        "ESCIBelastung[ESCIB7]": "3",
                        "ESCICoping[ESCIC3]": "2",
                        "ESCIUnsicherheit[ESCIU3]": "",
                        "PID": "13012",
                        "ESCIOverstaining[ESCIO3]": "",
                        "id": "1034",
                        "ESCISymptome[ESCIS4]": "1",
                        "ESCICoping[ESCIC15]": "1",
                        "ASCISymptome[ESCI12]": "",
                        "ESCIOverstaining[ESCIO6]": "",
                        "ASCISymptome[ESCIS5]": "",
                        "ESCISymptome[ESCIS1]": "3",
                        "ESCISymptome[ESCI13]": "3",
                        "ESCICoping[ESCIC10]": "1",
                        "ESCIUnsicherheit[ESCIU6]": "",
                        "ESCISymptome[ESCIS2]": "1",
                        "ASCISymptome[ESCIS6]": "",
                        "FID": "130120300",
                        "ESCISymptome[ESCI10]": "3",
                        "ESCIOverstaining[ESCIO5]": "",
                        "ESCICoping[ESCIC13]": "1",
                        "ESCIUnsicherheit[ESCIU5]": "",
                        "ASCIBelastung[ESCIB7]": "",
                        "ESCICoping[ESCIC7]": "2",
                        "ESCIBelastung[ESCIB3]": "3",
                        "ESCISymptome[ESCIS8]": "4",
                        "Erhebungszeitpunkt": "1",
                        "ESCICoping[ESCIC19]": "2",
                        "ESCIBelastung[ESCIB4]": "1",
                        "Datum": "2018-11-21 00:00:00",
                        "lastpage": "13"
                      },
                      "event_id": 39094,
                      "filled": "2018-11-21T15:20:35Z"
                    },
                    "id": 24046
                  },
                  "population": {
                    "patient_gender": "male",
                    "current": {
                      "0": {
                        "UG6": 23,
                        "UG7": 33,
                        "UG1": 7,
                        "UG4": 13,
                        "UG5": 17,
                        "UG8": 44,
                        "UG2": 8,
                        "UG9": 46,
                        "UG3": 10
                      },
                      "1": {
                        "UG6": 37,
                        "UG7": 41,
                        "UG1": 13,
                        "UG4": 27,
                        "UG5": 32,
                        "UG8": 46,
                        "UG2": 16,
                        "UG9": 51,
                        "UG3": 20
                      },
                      "2": {
                        "UG6": 9,
                        "UG7": 11,
                        "UG1": 4,
                        "UG4": 6,
                        "UG5": 8,
                        "UG8": 12,
                        "UG2": 4,
                        "UG9": 14,
                        "UG3": 5
                      },
                      "3": {
                        "UG6": 10,
                        "UG7": 11,
                        "UG1": 4,
                        "UG4": 7,
                        "UG5": 8,
                        "UG8": 12,
                        "UG2": 4,
                        "UG9": 14,
                        "UG3": 6
                      },
                      "4": {
                        "UG6": 10,
                        "UG7": 12,
                        "UG1": 4,
                        "UG4": 7,
                        "UG5": 8,
                        "UG8": 14,
                        "UG2": 4,
                        "UG9": 16,
                        "UG3": 5
                      },
                      "5": {
                        "UG6": 7,
                        "UG7": 8,
                        "UG1": 4,
                        "UG4": 5,
                        "UG5": 6,
                        "UG8": 11,
                        "UG2": 4,
                        "UG9": 14,
                        "UG3": 4
                      },
                      "6": {
                        "UG6": 9,
                        "UG7": 10,
                        "UG1": 4,
                        "UG4": 5,
                        "UG5": 7,
                        "UG8": 12,
                        "UG2": 4,
                        "UG9": 14,
                        "UG3": 4
                      }
                    },
                    "name": "Männer, Älter als 50 Jahre",
                    "patient_age": 51
                  },
                  "scores": [
                    {
                      "stanine": 5,
                      "sum_score": 22,
                      "name": "belastung",
                      "sub_left": "Keine oder wenige Stressoren durch negative Ereignisse",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Viele Stressoren durch negative Ereignisse",
                      "question": "Stress durch Verlust"
                    },
                    {
                      "stanine": 6,
                      "sum_score": 38,
                      "name": "stress",
                      "sub_left": "Wenig koerperliche und psychische Stressreaktionen",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Viele koerperliche und psychische Stressreaktionen",
                      "question": "Stresssymptome"
                    },
                    {
                      "stanine": 4,
                      "sum_score": 7,
                      "name": "coping_pos",
                      "sub_left": "Anwendung der Strategie wenig ausgepraegt",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Hilfreiche Nutzung der Strategie",
                      "question": "Positives Denken"
                    },
                    {
                      "stanine": 4,
                      "sum_score": 7,
                      "name": "coping_ab",
                      "sub_left": "Anwendung der Strategie wenig ausgepraegt",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Hilfreiche Nutzung der Strategie",
                      "question": "Aktive Stressbewaeltigung"
                    },
                    {
                      "stanine": 3,
                      "sum_score": 6,
                      "name": "coping_su",
                      "sub_left": "Anwendung der Strategie wenig ausgepraegt",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Gut: Hilfreiche Nutzung der Strategie",
                      "question": "Soziale Unterstuetzung"
                    },
                    {
                      "stanine": 3,
                      "sum_score": 4,
                      "name": "coping_rel",
                      "sub_left": "Anwendung der Strategie wenig ausgepraegt",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Hilfreiche Nutzung der Strategie",
                      "question": "Halt im Glauben"
                    },
                    {
                      "stanine": 9,
                      "sum_score": 16,
                      "name": "coping_alk",
                      "sub_left": "Anwendung der Strategie wenig ausgepraegt",
                      "population": {
                        "patient_gender": "male",
                        "current": {
                          "0": {
                            "UG6": 23,
                            "UG7": 33,
                            "UG1": 7,
                            "UG4": 13,
                            "UG5": 17,
                            "UG8": 44,
                            "UG2": 8,
                            "UG9": 46,
                            "UG3": 10
                          },
                          "1": {
                            "UG6": 37,
                            "UG7": 41,
                            "UG1": 13,
                            "UG4": 27,
                            "UG5": 32,
                            "UG8": 46,
                            "UG2": 16,
                            "UG9": 51,
                            "UG3": 20
                          },
                          "2": {
                            "UG6": 9,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 6,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 5
                          },
                          "3": {
                            "UG6": 10,
                            "UG7": 11,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 6
                          },
                          "4": {
                            "UG6": 10,
                            "UG7": 12,
                            "UG1": 4,
                            "UG4": 7,
                            "UG5": 8,
                            "UG8": 14,
                            "UG2": 4,
                            "UG9": 16,
                            "UG3": 5
                          },
                          "5": {
                            "UG6": 7,
                            "UG7": 8,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 6,
                            "UG8": 11,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          },
                          "6": {
                            "UG6": 9,
                            "UG7": 10,
                            "UG1": 4,
                            "UG4": 5,
                            "UG5": 7,
                            "UG8": 12,
                            "UG2": 4,
                            "UG9": 14,
                            "UG3": 4
                          }
                        },
                        "name": "Männer, Älter als 50 Jahre",
                        "patient_age": 51
                      },
                      "sub_right": "Haeufige Anwendung der unguenstigen Strategie",
                      "question": "Alkohol- und Zigarettenkonsum"
                    }
                  ]
                }
              ],
              "name": "scores"
            }
          ],
          "have_data": true,
          "loaded": true,
          "possible_data": true,
          "request": "stay",
          "pid": 3868,
          "fid": 5992,
          "app_id": "ch.suedhang.apps.sci.production",
          "params": {
            "name": "sci",
            "title": "SCI",
            "subtitle": "Stress-Coping-Inventar",
            "identifier": "ch.suedhang.apps.sci.production"
          },
          "module": {
            "hash": "732367e4bde83292072e3a97ca493473d4d7d7ec",
            "calculations": [
              "scores"
            ],
            "readme": {
              "text": "## SCI (Stress-Coping-Inventar)\n\n### Zusammenfassung\nDas SCI ist ein wissenschaftliches Fragebogen-Instrument zur zuverlässigen Messung von Stressbelastung, Stresssymptomen und Stressbewältigungs-Strategien (Coping).\n\n#### Skalen\nAlle Skalen erreichen überzeugende psychometrische Kennwerte. Eine detaillierte Faktorenanalyse konnte zudem die Annahme von fünf unterschiedlichen Coping-Strategien bestätigen. Weitere Untersuchungen lieferten überzeugende Belege für die Aussagekraft der Skalen. So zeigte sich, dass Personen, die unter viel Stress leiden aber trotzdem nur wenige Folgesymptome aufweisen, mehr adaptive Coping-Strategien einsetzen.\n\n#### Weiterführende Links\n- [Stress- und Coping-Inventar (SCI)](http://www.drsatow.de/tests/stress-und-coping-inventar.html)\n\n",
              "parents": [
                {
                  "text": "## SCI (Stress-Coping-Inventar)\n\n### Zusammenfassung\nDas SCI ist ein wissenschaftliches Fragebogen-Instrument zur zuverlässigen Messung von Stressbelastung, Stresssymptomen und Stressbewältigungs-Strategien (Coping).\n\n#### Skalen\nAlle Skalen erreichen überzeugende psychometrische Kennwerte. Eine detaillierte Faktorenanalyse konnte zudem die Annahme von fünf unterschiedlichen Coping-Strategien bestätigen. Weitere Untersuchungen lieferten überzeugende Belege für die Aussagekraft der Skalen. So zeigte sich, dass Personen, die unter viel Stress leiden aber trotzdem nur wenige Folgesymptome aufweisen, mehr adaptive Coping-Strategien einsetzen.\n\n#### Weiterführende Links\n- [Stress- und Coping-Inventar (SCI)](http://www.drsatow.de/tests/stress-und-coping-inventar.html)\n\n",
                  "identifier": "ch.suedhang.apps.sci",
                  "html": "<h2>SCI (Stress-Coping-Inventar)</h2><h3>Zusammenfassung</h3><p>Das SCI ist ein wissenschaftliches Fragebogen-Instrument zur zuverlässigen Messung von Stressbelastung, Stresssymptomen und Stressbewältigungs-Strategien (Coping).</p><h4>Skalen</h4><p>Alle Skalen erreichen überzeugende psychometrische Kennwerte. Eine detaillierte Faktorenanalyse konnte zudem die Annahme von fünf unterschiedlichen Coping-Strategien bestätigen. Weitere Untersuchungen lieferten überzeugende Belege für die Aussagekraft der Skalen. So zeigte sich, dass Personen, die unter viel Stress leiden aber trotzdem nur wenige Folgesymptome aufweisen, mehr adaptive Coping-Strategien einsetzen.</p><h4>Weiterführende Links</h4><ul><li><p><a href=\"http://www.drsatow.de/tests/stress-und-coping-inventar.html\">Stress- und Coping-Inventar (SCI)</a></p></li></ul>"
                }
              ],
              "html": "<h2>SCI (Stress-Coping-Inventar)</h2><h3>Zusammenfassung</h3><p>Das SCI ist ein wissenschaftliches Fragebogen-Instrument zur zuverlässigen Messung von Stressbelastung, Stresssymptomen und Stressbewältigungs-Strategien (Coping).</p><h4>Skalen</h4><p>Alle Skalen erreichen überzeugende psychometrische Kennwerte. Eine detaillierte Faktorenanalyse konnte zudem die Annahme von fünf unterschiedlichen Coping-Strategien bestätigen. Weitere Untersuchungen lieferten überzeugende Belege für die Aussagekraft der Skalen. So zeigte sich, dass Personen, die unter viel Stress leiden aber trotzdem nur wenige Folgesymptome aufweisen, mehr adaptive Coping-Strategien einsetzen.</p><h4>Weiterführende Links</h4><ul><li><p><a href=\"http://www.drsatow.de/tests/stress-und-coping-inventar.html\">Stress- und Coping-Inventar (SCI)</a></p></li></ul>"
            },
            "surveys": [
              {
                "identifier": "SCI",
                "name": "SCI"
              }
            ],
            "templates": [
              {
                "height": 12,
                "width": 6,
                "name": "SCI"
              }
            ],
            "identifier": "ch.suedhang.apps.sci.production",
            "pdf_templates": [],
            "data_source_queries": [],
            "original_name": "Stress-Coping-Inventar (SCI)",
            "dependencies": [],
            "name": "Stress-Coping-Inventar (SCI)",
            "events": [
              {
                "due_after": 259200,
                "survey": "SCI",
                "name": "activation",
                "time_spec": {
                  "type": "on_activation"
                },
                "overdue": {
                  "type": "ignore"
                },
                "description": "Eintritt: Stress-Coping-Inventar (SCI)"
              },
              {
                "due_after": 259200,
                "survey": "SCI",
                "name": "exit",
                "time_spec": {
                  "days": 10,
                  "time": "08:00:00",
                  "type": "before_exit"
                },
                "overdue": {
                  "type": "ignore"
                },
                "description": "Austritt: Stress-Coping-Inventar (SCI)"
              }
            ],
            "version": "1.0",
            "type": "patient",
            "short_description": "Messung von Stressbelastung, Stresssymptomen und Stressbewältigungs-Strategien (Coping)",
            "database_schema_name": "ch_suedhang_apps_sci_production",
            "database_user_name": "ch_suedhang_apps_sci_production",
            "description": "",
            "developer": {
              "email": "nora.schoenenberger@suedhang.ch",
              "phone": "+41 (0)31 828 14 92",
              "first_name": "Nora",
              "website": "http://suedhang.ch/de/Forschung",
              "company": "Suedhang",
              "last_name": "Schönenberger",
              "github_user": "schoenenb"
            }
          }
        }
      }
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
