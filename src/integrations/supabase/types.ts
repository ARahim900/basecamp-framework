export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      "August25: Daily Water Consumption data": {
        Row: {
          "1": number | null
          "10": number | null
          "11": number | null
          "12": number | null
          "13": number | null
          "14": number | null
          "15": number | null
          "16": number | null
          "17": number | null
          "18": number | null
          "19": number | null
          "2": number | null
          "20": number | null
          "21": number | null
          "22": number | null
          "23": number | null
          "24": string | null
          "25": string | null
          "26": string | null
          "27": string | null
          "28": string | null
          "29": string | null
          "3": number | null
          "30": string | null
          "31": string | null
          "4": number | null
          "5": number | null
          "6": number | null
          "7": number | null
          "8": number | null
          "9": number | null
          ACCOUNT_NUMBER: number | null
          ADDRESS: string | null
          CUSTOMER_NAME: string | null
          READING_MNTH: number | null
        }
        Insert: {
          "1"?: number | null
          "10"?: number | null
          "11"?: number | null
          "12"?: number | null
          "13"?: number | null
          "14"?: number | null
          "15"?: number | null
          "16"?: number | null
          "17"?: number | null
          "18"?: number | null
          "19"?: number | null
          "2"?: number | null
          "20"?: number | null
          "21"?: number | null
          "22"?: number | null
          "23"?: number | null
          "24"?: string | null
          "25"?: string | null
          "26"?: string | null
          "27"?: string | null
          "28"?: string | null
          "29"?: string | null
          "3"?: number | null
          "30"?: string | null
          "31"?: string | null
          "4"?: number | null
          "5"?: number | null
          "6"?: number | null
          "7"?: number | null
          "8"?: number | null
          "9"?: number | null
          ACCOUNT_NUMBER?: number | null
          ADDRESS?: string | null
          CUSTOMER_NAME?: string | null
          READING_MNTH?: number | null
        }
        Update: {
          "1"?: number | null
          "10"?: number | null
          "11"?: number | null
          "12"?: number | null
          "13"?: number | null
          "14"?: number | null
          "15"?: number | null
          "16"?: number | null
          "17"?: number | null
          "18"?: number | null
          "19"?: number | null
          "2"?: number | null
          "20"?: number | null
          "21"?: number | null
          "22"?: number | null
          "23"?: number | null
          "24"?: string | null
          "25"?: string | null
          "26"?: string | null
          "27"?: string | null
          "28"?: string | null
          "29"?: string | null
          "3"?: number | null
          "30"?: string | null
          "31"?: string | null
          "4"?: number | null
          "5"?: number | null
          "6"?: number | null
          "7"?: number | null
          "8"?: number | null
          "9"?: number | null
          ACCOUNT_NUMBER?: number | null
          ADDRESS?: string | null
          CUSTOMER_NAME?: string | null
          READING_MNTH?: number | null
        }
        Relationships: []
      }
      consumption_alerts: {
        Row: {
          actual_value: number | null
          alert_date: string | null
          alert_type: string | null
          created_at: string | null
          id: number
          is_acknowledged: boolean | null
          message: string | null
          meter_account_no: string | null
          threshold_value: number | null
        }
        Insert: {
          actual_value?: number | null
          alert_date?: string | null
          alert_type?: string | null
          created_at?: string | null
          id?: number
          is_acknowledged?: boolean | null
          message?: string | null
          meter_account_no?: string | null
          threshold_value?: number | null
        }
        Update: {
          actual_value?: number | null
          alert_date?: string | null
          alert_type?: string | null
          created_at?: string | null
          id?: number
          is_acknowledged?: boolean | null
          message?: string | null
          meter_account_no?: string | null
          threshold_value?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "consumption_alerts_meter_account_no_fkey"
            columns: ["meter_account_no"]
            isOneToOne: false
            referencedRelation: "energy_meters"
            referencedColumns: ["meter_account_no"]
          },
          {
            foreignKeyName: "consumption_alerts_meter_account_no_fkey"
            columns: ["meter_account_no"]
            isOneToOne: false
            referencedRelation: "high_consumption_meters"
            referencedColumns: ["meter_account_no"]
          },
        ]
      }
      contractor_tracker: {
        Row: {
          contract_monthly_amount: number | null
          contract_type: string
          contract_yearly_amount: number | null
          contractor_name: string
          created_at: string | null
          created_by: string | null
          end_date: string | null
          id: number
          last_modified_by: string | null
          notes: string | null
          service_provided: string
          start_date: string | null
          status: string
          updated_at: string | null
        }
        Insert: {
          contract_monthly_amount?: number | null
          contract_type: string
          contract_yearly_amount?: number | null
          contractor_name: string
          created_at?: string | null
          created_by?: string | null
          end_date?: string | null
          id?: number
          last_modified_by?: string | null
          notes?: string | null
          service_provided: string
          start_date?: string | null
          status: string
          updated_at?: string | null
        }
        Update: {
          contract_monthly_amount?: number | null
          contract_type?: string
          contract_yearly_amount?: number | null
          contractor_name?: string
          created_at?: string | null
          created_by?: string | null
          end_date?: string | null
          id?: number
          last_modified_by?: string | null
          notes?: string | null
          service_provided?: string
          start_date?: string | null
          status?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      energy_meters: {
        Row: {
          apr_24: number | null
          apr_25: number | null
          aug_24: number | null
          created_at: string | null
          dec_24: number | null
          feb_25: number | null
          id: number
          jan_25: number | null
          jul_24: number | null
          jul_25: number | null
          jun_24: number | null
          jun_25: number | null
          mar_25: number | null
          may_24: number | null
          may_25: number | null
          meter_account_no: string
          name: string
          nov_24: number | null
          oct_24: number | null
          sep_24: number | null
          type: string
          updated_at: string | null
        }
        Insert: {
          apr_24?: number | null
          apr_25?: number | null
          aug_24?: number | null
          created_at?: string | null
          dec_24?: number | null
          feb_25?: number | null
          id?: number
          jan_25?: number | null
          jul_24?: number | null
          jul_25?: number | null
          jun_24?: number | null
          jun_25?: number | null
          mar_25?: number | null
          may_24?: number | null
          may_25?: number | null
          meter_account_no: string
          name: string
          nov_24?: number | null
          oct_24?: number | null
          sep_24?: number | null
          type: string
          updated_at?: string | null
        }
        Update: {
          apr_24?: number | null
          apr_25?: number | null
          aug_24?: number | null
          created_at?: string | null
          dec_24?: number | null
          feb_25?: number | null
          id?: number
          jan_25?: number | null
          jul_24?: number | null
          jul_25?: number | null
          jun_24?: number | null
          jun_25?: number | null
          mar_25?: number | null
          may_24?: number | null
          may_25?: number | null
          meter_account_no?: string
          name?: string
          nov_24?: number | null
          oct_24?: number | null
          sep_24?: number | null
          type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      equipment: {
        Row: {
          created_at: string | null
          equipment_code: string
          equipment_name: string
          equipment_type_id: number | null
          id: number
          installation_date: string | null
          location_id: number | null
          manufacturer: string | null
          model: string | null
          serial_number: string | null
          status: string | null
          updated_at: string | null
          warranty_expiry: string | null
        }
        Insert: {
          created_at?: string | null
          equipment_code: string
          equipment_name: string
          equipment_type_id?: number | null
          id?: number
          installation_date?: string | null
          location_id?: number | null
          manufacturer?: string | null
          model?: string | null
          serial_number?: string | null
          status?: string | null
          updated_at?: string | null
          warranty_expiry?: string | null
        }
        Update: {
          created_at?: string | null
          equipment_code?: string
          equipment_name?: string
          equipment_type_id?: number | null
          id?: number
          installation_date?: string | null
          location_id?: number | null
          manufacturer?: string | null
          model?: string | null
          serial_number?: string | null
          status?: string | null
          updated_at?: string | null
          warranty_expiry?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "equipment_equipment_type_id_fkey"
            columns: ["equipment_type_id"]
            isOneToOne: false
            referencedRelation: "equipment_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "equipment_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
        ]
      }
      equipment_types: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          id: number
          type_code: string
          type_name: string
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          type_code: string
          type_name: string
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          type_code?: string
          type_name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      findings_spare_parts: {
        Row: {
          created_at: string | null
          finding_id: number | null
          id: number
          quantity_required: number
          spare_part_id: number | null
          total_price: number | null
          unit_price: number | null
        }
        Insert: {
          created_at?: string | null
          finding_id?: number | null
          id?: number
          quantity_required: number
          spare_part_id?: number | null
          total_price?: number | null
          unit_price?: number | null
        }
        Update: {
          created_at?: string | null
          finding_id?: number | null
          id?: number
          quantity_required?: number
          spare_part_id?: number | null
          total_price?: number | null
          unit_price?: number | null
        }
        Relationships: []
      }
      findings_status: {
        Row: {
          approval_date: string | null
          approval_status: string | null
          approved_by: string | null
          created_at: string | null
          finding_id: number | null
          id: number
          quote_amount: number | null
          quote_number: string | null
          resolution_date: string | null
          resolution_notes: string | null
          status: string
          status_date: string
          updated_at: string | null
        }
        Insert: {
          approval_date?: string | null
          approval_status?: string | null
          approved_by?: string | null
          created_at?: string | null
          finding_id?: number | null
          id?: number
          quote_amount?: number | null
          quote_number?: string | null
          resolution_date?: string | null
          resolution_notes?: string | null
          status: string
          status_date: string
          updated_at?: string | null
        }
        Update: {
          approval_date?: string | null
          approval_status?: string | null
          approved_by?: string | null
          created_at?: string | null
          finding_id?: number | null
          id?: number
          quote_amount?: number | null
          quote_number?: string | null
          resolution_date?: string | null
          resolution_notes?: string | null
          status?: string
          status_date?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      hvac_tracker: {
        Row: {
          action_required: string | null
          building: string
          created_at: string | null
          equipment_asset_id: string
          finding_id: string
          finding_issue_description: string
          id: number
          latest_update_notes: string | null
          main_system: string
          ppm_visit_identified: string | null
          priority: string | null
          quantity: string | null
          status: string
          updated_at: string | null
        }
        Insert: {
          action_required?: string | null
          building: string
          created_at?: string | null
          equipment_asset_id: string
          finding_id: string
          finding_issue_description: string
          id?: number
          latest_update_notes?: string | null
          main_system: string
          ppm_visit_identified?: string | null
          priority?: string | null
          quantity?: string | null
          status: string
          updated_at?: string | null
        }
        Update: {
          action_required?: string | null
          building?: string
          created_at?: string | null
          equipment_asset_id?: string
          finding_id?: string
          finding_issue_description?: string
          id?: number
          latest_update_notes?: string | null
          main_system?: string
          ppm_visit_identified?: string | null
          priority?: string | null
          quantity?: string | null
          status?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      "July25: Daily Water Consumption Data": {
        Row: {
          "1": number | null
          "10": number | null
          "11": number | null
          "12": number | null
          "13": number | null
          "14": number | null
          "15": number | null
          "16": number | null
          "17": number | null
          "18": number | null
          "19": number | null
          "2": number | null
          "20": number | null
          "21": number | null
          "22": number | null
          "23": number | null
          "24": number | null
          "25": number | null
          "26": number | null
          "27": number | null
          "28": number | null
          "29": number | null
          "3": number | null
          "30": number | null
          "31": number | null
          "4": number | null
          "5": number | null
          "6": number | null
          "7": number | null
          "8": number | null
          "9": number | null
          ACCOUNT_NUMBER: string | null
          ADDRESS: string | null
          CUSTOMER_NAME: string | null
          READING_MNTH: number | null
        }
        Insert: {
          "1"?: number | null
          "10"?: number | null
          "11"?: number | null
          "12"?: number | null
          "13"?: number | null
          "14"?: number | null
          "15"?: number | null
          "16"?: number | null
          "17"?: number | null
          "18"?: number | null
          "19"?: number | null
          "2"?: number | null
          "20"?: number | null
          "21"?: number | null
          "22"?: number | null
          "23"?: number | null
          "24"?: number | null
          "25"?: number | null
          "26"?: number | null
          "27"?: number | null
          "28"?: number | null
          "29"?: number | null
          "3"?: number | null
          "30"?: number | null
          "31"?: number | null
          "4"?: number | null
          "5"?: number | null
          "6"?: number | null
          "7"?: number | null
          "8"?: number | null
          "9"?: number | null
          ACCOUNT_NUMBER?: string | null
          ADDRESS?: string | null
          CUSTOMER_NAME?: string | null
          READING_MNTH?: number | null
        }
        Update: {
          "1"?: number | null
          "10"?: number | null
          "11"?: number | null
          "12"?: number | null
          "13"?: number | null
          "14"?: number | null
          "15"?: number | null
          "16"?: number | null
          "17"?: number | null
          "18"?: number | null
          "19"?: number | null
          "2"?: number | null
          "20"?: number | null
          "21"?: number | null
          "22"?: number | null
          "23"?: number | null
          "24"?: number | null
          "25"?: number | null
          "26"?: number | null
          "27"?: number | null
          "28"?: number | null
          "29"?: number | null
          "3"?: number | null
          "30"?: number | null
          "31"?: number | null
          "4"?: number | null
          "5"?: number | null
          "6"?: number | null
          "7"?: number | null
          "8"?: number | null
          "9"?: number | null
          ACCOUNT_NUMBER?: string | null
          ADDRESS?: string | null
          CUSTOMER_NAME?: string | null
          READING_MNTH?: number | null
        }
        Relationships: []
      }
      locations: {
        Row: {
          active: boolean | null
          created_at: string | null
          description: string | null
          id: number
          location_code: string
          location_name: string
          location_type: string | null
          updated_at: string | null
          zone: string | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          description?: string | null
          id?: number
          location_code: string
          location_name: string
          location_type?: string | null
          updated_at?: string | null
          zone?: string | null
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          description?: string | null
          id?: number
          location_code?: string
          location_name?: string
          location_type?: string | null
          updated_at?: string | null
          zone?: string | null
        }
        Relationships: []
      }
      meter_types: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          type_code: string
          unit: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          type_code: string
          unit?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          type_code?: string
          unit?: string | null
        }
        Relationships: []
      }
      ppm_findings: {
        Row: {
          created_at: string | null
          estimated_cost: number | null
          finding_description: string
          id: number
          ppm_record_id: number | null
          recommended_action: string | null
          severity: string
          spare_parts_required: string[] | null
          status: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          estimated_cost?: number | null
          finding_description: string
          id?: number
          ppm_record_id?: number | null
          recommended_action?: string | null
          severity: string
          spare_parts_required?: string[] | null
          status: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          estimated_cost?: number | null
          finding_description?: string
          id?: number
          ppm_record_id?: number | null
          recommended_action?: string | null
          severity?: string
          spare_parts_required?: string[] | null
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ppm_findings_ppm_record_id_fkey"
            columns: ["ppm_record_id"]
            isOneToOne: false
            referencedRelation: "ppm_records"
            referencedColumns: ["id"]
          },
        ]
      }
      ppm_locations: {
        Row: {
          active: boolean | null
          created_at: string | null
          description: string | null
          id: number
          location_code: string | null
          location_name: string
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          description?: string | null
          id?: number
          location_code?: string | null
          location_name: string
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          description?: string | null
          id?: number
          location_code?: string | null
          location_name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      ppm_records: {
        Row: {
          created_at: string | null
          id: number
          inspector_name: string
          location_id: number | null
          notes: string | null
          overall_status: string
          ppm_date: string
          ppm_type: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          inspector_name: string
          location_id?: number | null
          notes?: string | null
          overall_status: string
          ppm_date: string
          ppm_type: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          inspector_name?: string
          location_id?: number | null
          notes?: string | null
          overall_status?: string
          ppm_date?: string
          ppm_type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ppm_records_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "location_findings_summary"
            referencedColumns: ["location_id"]
          },
          {
            foreignKeyName: "ppm_records_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "ppm_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      ppm_schedules: {
        Row: {
          active: boolean | null
          created_at: string | null
          description: string | null
          frequency: string
          frequency_value: number | null
          id: number
          schedule_code: string
          schedule_name: string
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          description?: string | null
          frequency: string
          frequency_value?: number | null
          id?: number
          schedule_code: string
          schedule_name: string
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          description?: string | null
          frequency?: string
          frequency_value?: number | null
          id?: number
          schedule_code?: string
          schedule_name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      spare_parts: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          minimum_stock: number | null
          part_name: string
          part_number: string | null
          stock_quantity: number | null
          supplier: string | null
          unit_cost: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          minimum_stock?: number | null
          part_name: string
          part_number?: string | null
          stock_quantity?: number | null
          supplier?: string | null
          unit_cost?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          minimum_stock?: number | null
          part_name?: string
          part_number?: string | null
          stock_quantity?: number | null
          supplier?: string | null
          unit_cost?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      stp_operations: {
        Row: {
          created_at: string | null
          direct_inline_sewage: number | null
          expected_tanker_volume: number | null
          id: number
          income_from_tankers: number | null
          operation_date: string
          saving_from_tse: number | null
          tankers_discharged: number | null
          total_inlet_sewage: number | null
          total_saving_income: number | null
          total_treated_water: number | null
          tse_water_to_irrigation: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          direct_inline_sewage?: number | null
          expected_tanker_volume?: number | null
          id?: number
          income_from_tankers?: number | null
          operation_date: string
          saving_from_tse?: number | null
          tankers_discharged?: number | null
          total_inlet_sewage?: number | null
          total_saving_income?: number | null
          total_treated_water?: number | null
          tse_water_to_irrigation?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          direct_inline_sewage?: number | null
          expected_tanker_volume?: number | null
          id?: number
          income_from_tankers?: number | null
          operation_date?: string
          saving_from_tse?: number | null
          tankers_discharged?: number | null
          total_inlet_sewage?: number | null
          total_saving_income?: number | null
          total_treated_water?: number | null
          tse_water_to_irrigation?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      water_meters: {
        Row: {
          account_number: string
          apr_25: number | null
          created_at: string | null
          feb_25: number | null
          id: number
          jan_25: number | null
          jul_25: number | null
          jun_25: number | null
          label: string
          mar_25: number | null
          may_25: number | null
          meter_label: string
          parent_meter: string | null
          type: string | null
          updated_at: string | null
          zone: string
        }
        Insert: {
          account_number: string
          apr_25?: number | null
          created_at?: string | null
          feb_25?: number | null
          id?: number
          jan_25?: number | null
          jul_25?: number | null
          jun_25?: number | null
          label: string
          mar_25?: number | null
          may_25?: number | null
          meter_label: string
          parent_meter?: string | null
          type?: string | null
          updated_at?: string | null
          zone: string
        }
        Update: {
          account_number?: string
          apr_25?: number | null
          created_at?: string | null
          feb_25?: number | null
          id?: number
          jan_25?: number | null
          jul_25?: number | null
          jun_25?: number | null
          label?: string
          mar_25?: number | null
          may_25?: number | null
          meter_label?: string
          parent_meter?: string | null
          type?: string | null
          updated_at?: string | null
          zone?: string
        }
        Relationships: []
      }
      water_meters_backup_2025_08_26: {
        Row: {
          account_number: string | null
          apr_25: number | null
          backup_created_at: string | null
          created_at: string | null
          feb_25: number | null
          id: number | null
          jan_25: number | null
          jul_25: number | null
          jun_25: number | null
          label: string | null
          mar_25: number | null
          may_25: number | null
          meter_label: string | null
          parent_meter: string | null
          type: string | null
          updated_at: string | null
          zone: string | null
        }
        Insert: {
          account_number?: string | null
          apr_25?: number | null
          backup_created_at?: string | null
          created_at?: string | null
          feb_25?: number | null
          id?: number | null
          jan_25?: number | null
          jul_25?: number | null
          jun_25?: number | null
          label?: string | null
          mar_25?: number | null
          may_25?: number | null
          meter_label?: string | null
          parent_meter?: string | null
          type?: string | null
          updated_at?: string | null
          zone?: string | null
        }
        Update: {
          account_number?: string | null
          apr_25?: number | null
          backup_created_at?: string | null
          created_at?: string | null
          feb_25?: number | null
          id?: number | null
          jan_25?: number | null
          jul_25?: number | null
          jun_25?: number | null
          label?: string | null
          mar_25?: number | null
          may_25?: number | null
          meter_label?: string | null
          parent_meter?: string | null
          type?: string | null
          updated_at?: string | null
          zone?: string | null
        }
        Relationships: []
      }
      water_meters_backup_correction_20250826: {
        Row: {
          account_number: string | null
          apr_25: number | null
          backup_timestamp: string | null
          created_at: string | null
          feb_25: number | null
          id: number | null
          jan_25: number | null
          jul_25: number | null
          jun_25: number | null
          label: string | null
          mar_25: number | null
          may_25: number | null
          meter_label: string | null
          parent_meter: string | null
          type: string | null
          updated_at: string | null
          zone: string | null
        }
        Insert: {
          account_number?: string | null
          apr_25?: number | null
          backup_timestamp?: string | null
          created_at?: string | null
          feb_25?: number | null
          id?: number | null
          jan_25?: number | null
          jul_25?: number | null
          jun_25?: number | null
          label?: string | null
          mar_25?: number | null
          may_25?: number | null
          meter_label?: string | null
          parent_meter?: string | null
          type?: string | null
          updated_at?: string | null
          zone?: string | null
        }
        Update: {
          account_number?: string | null
          apr_25?: number | null
          backup_timestamp?: string | null
          created_at?: string | null
          feb_25?: number | null
          id?: number | null
          jan_25?: number | null
          jul_25?: number | null
          jun_25?: number | null
          label?: string | null
          mar_25?: number | null
          may_25?: number | null
          meter_label?: string | null
          parent_meter?: string | null
          type?: string | null
          updated_at?: string | null
          zone?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      consumption_by_type: {
        Row: {
          apr_total: number | null
          feb_total: number | null
          jan_total: number | null
          jul_total: number | null
          jun_total: number | null
          mar_total: number | null
          may_total: number | null
          meter_count: number | null
          type: string | null
        }
        Relationships: []
      }
      contractor_tracker_summary: {
        Row: {
          avg_monthly: number | null
          avg_yearly: number | null
          contract_type: string | null
          count: number | null
          status: string | null
          total_monthly: number | null
          total_yearly: number | null
        }
        Relationships: []
      }
      contracts_by_service: {
        Row: {
          active_count: number | null
          contract_count: number | null
          service_category: string | null
          total_yearly_value: number | null
        }
        Relationships: []
      }
      contracts_expiring_soon: {
        Row: {
          contract_monthly_amount: number | null
          contract_yearly_amount: number | null
          contractor_name: string | null
          days_until_expiry: number | null
          end_date: string | null
          notes: string | null
          service_provided: string | null
        }
        Insert: {
          contract_monthly_amount?: number | null
          contract_yearly_amount?: number | null
          contractor_name?: string | null
          days_until_expiry?: never
          end_date?: string | null
          notes?: string | null
          service_provided?: string | null
        }
        Update: {
          contract_monthly_amount?: number | null
          contract_yearly_amount?: number | null
          contractor_name?: string | null
          days_until_expiry?: never
          end_date?: string | null
          notes?: string | null
          service_provided?: string | null
        }
        Relationships: []
      }
      critical_findings_by_location: {
        Row: {
          estimated_cost: number | null
          finding_description: string | null
          inspector_name: string | null
          location_name: string | null
          ppm_date: string | null
          recommended_action: string | null
          severity: string | null
          status: string | null
        }
        Relationships: []
      }
      high_consumption_meters: {
        Row: {
          latest_reading: number | null
          meter_account_no: string | null
          name: string | null
          peak_consumption: number | null
          type: string | null
        }
        Insert: {
          latest_reading?: number | null
          meter_account_no?: string | null
          name?: string | null
          peak_consumption?: never
          type?: string | null
        }
        Update: {
          latest_reading?: number | null
          meter_account_no?: string | null
          name?: string | null
          peak_consumption?: never
          type?: string | null
        }
        Relationships: []
      }
      hvac_equipment_issue_count: {
        Row: {
          building: string | null
          critical_count: number | null
          equipment_asset_id: string | null
          high_count: number | null
          issue_count: number | null
          open_issues: number | null
        }
        Relationships: []
      }
      hvac_open_issues: {
        Row: {
          action_required: string | null
          building: string | null
          equipment_asset_id: string | null
          finding_id: string | null
          finding_issue_description: string | null
          priority: string | null
          status: string | null
        }
        Insert: {
          action_required?: string | null
          building?: string | null
          equipment_asset_id?: string | null
          finding_id?: string | null
          finding_issue_description?: string | null
          priority?: string | null
          status?: string | null
        }
        Update: {
          action_required?: string | null
          building?: string | null
          equipment_asset_id?: string | null
          finding_id?: string | null
          finding_issue_description?: string | null
          priority?: string | null
          status?: string | null
        }
        Relationships: []
      }
      hvac_ppm_analysis: {
        Row: {
          critical_findings: number | null
          findings_count: number | null
          high_findings: number | null
          open_findings: number | null
          ppm_visit_identified: string | null
          resolved_findings: number | null
        }
        Relationships: []
      }
      hvac_summary_by_building: {
        Row: {
          building: string | null
          finding_count: number | null
          priority: string | null
          systems_affected: string | null
        }
        Relationships: []
      }
      location_findings_report: {
        Row: {
          estimated_cost: number | null
          finding_description: string | null
          finding_status: string | null
          inspector_name: string | null
          location_code: string | null
          location_name: string | null
          ppm_date: string | null
          ppm_status: string | null
          ppm_type: string | null
          recommended_action: string | null
          severity: string | null
        }
        Relationships: []
      }
      location_findings_summary: {
        Row: {
          critical_findings: number | null
          location_id: number | null
          location_name: string | null
          open_findings: number | null
          total_findings: number | null
          total_ppms: number | null
        }
        Relationships: []
      }
      monthly_totals: {
        Row: {
          month: string | null
          total: number | null
        }
        Relationships: []
      }
      ppm_schedule_performance: {
        Row: {
          completion_rate: number | null
          locations_covered: number | null
          ppm_type: string | null
          total_ppms: number | null
        }
        Relationships: []
      }
      spare_parts_usage_in_findings: {
        Row: {
          part_name: string | null
          part_number: string | null
          stock_quantity: number | null
          supplier: string | null
          unit_cost: number | null
          usage_count: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      add_ppm_finding: {
        Args: {
          p_description: string
          p_ppm_record_id: number
          p_quantity?: number
          p_severity: string
          p_type: string
        }
        Returns: number
      }
      calculate_average_consumption: {
        Args: { p_meter_account: string }
        Returns: number
      }
      create_ppm_record: {
        Args: {
          p_date: string
          p_equipment_id: number
          p_location_id: number
          p_performed_by: string
          p_schedule_id: number
        }
        Returns: number
      }
      get_building_hvac_score: {
        Args: { p_building: string }
        Returns: {
          building: string
          critical_issues: number
          health_score: number
          high_issues: number
          open_issues: number
          total_issues: number
        }[]
      }
      get_meter_consumption: {
        Args: { p_meter_account: string; p_month: string }
        Returns: number
      }
      update_finding_status: {
        Args: {
          p_finding_id: number
          p_notes?: string
          p_quote_amount?: number
          p_quote_number?: string
          p_status: string
        }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
