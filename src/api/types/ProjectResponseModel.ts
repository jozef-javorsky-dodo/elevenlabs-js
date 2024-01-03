/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ElevenLabs from "..";

export interface ProjectResponseModel {
    project_id: string;
    name: string;
    create_date_unix: number;
    default_title_voice_id: string;
    default_paragraph_voice_id: string;
    default_model_id: string;
    can_be_downloaded: boolean;
    acx_volume_normalization: boolean;
    state: ElevenLabs.ProjectState;
    last_conversion_date_unix?: number;
    title?: string;
    author?: string;
    isbn_number?: string;
}