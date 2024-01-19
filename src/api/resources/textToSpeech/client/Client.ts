/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as ElevenLabs from "../../..";
import * as stream from "stream";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace TextToSpeech {
    interface Options {
        environment?: core.Supplier<environments.ElevenLabsEnvironment | string>;
        xiApiKey?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

/**
 * Convert text into lifelike speech using a voice of your choice.
 */
export class TextToSpeech {
    constructor(protected readonly _options: TextToSpeech.Options = {}) {}

    /**
     * Converts text into speech using a voice of your choice and returns audio.
     */
    public async convert(
        voiceId: string,
        request: ElevenLabs.BodyTextToSpeechV1TextToSpeechVoiceIdPost,
        requestOptions?: TextToSpeech.RequestOptions
    ): Promise<stream.Readable> {
        const { optimize_streaming_latency: optimizeStreamingLatency, output_format: outputFormat, ..._body } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (optimizeStreamingLatency != null) {
            _queryParams["optimize_streaming_latency"] = optimizeStreamingLatency.toString();
        }

        if (outputFormat != null) {
            _queryParams["output_format"] = outputFormat;
        }

        const _response = await core.fetcher<stream.Readable>({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ElevenLabsEnvironment.Production,
                `v1/text-to-speech/${voiceId}`
            ),
            method: "POST",
            headers: {
                "xi-api-key":
                    (await core.Supplier.get(this._options.xiApiKey)) != null
                        ? await core.Supplier.get(this._options.xiApiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.7",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: _body,
            responseType: "streaming",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ElevenLabsError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ElevenLabsError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ElevenLabsTimeoutError();
            case "unknown":
                throw new errors.ElevenLabsError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Converts text into speech using a voice of your choice and returns audio as an audio stream.
     */
    public async convertAsStream(
        voiceId: string,
        request: ElevenLabs.BodyTextToSpeechV1TextToSpeechVoiceIdStreamPost,
        requestOptions?: TextToSpeech.RequestOptions
    ): Promise<stream.Readable> {
        const { optimize_streaming_latency: optimizeStreamingLatency, output_format: outputFormat, ..._body } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (optimizeStreamingLatency != null) {
            _queryParams["optimize_streaming_latency"] = optimizeStreamingLatency.toString();
        }

        if (outputFormat != null) {
            _queryParams["output_format"] = outputFormat;
        }

        const _response = await core.fetcher<stream.Readable>({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ElevenLabsEnvironment.Production,
                `v1/text-to-speech/${voiceId}/stream`
            ),
            method: "POST",
            headers: {
                "xi-api-key":
                    (await core.Supplier.get(this._options.xiApiKey)) != null
                        ? await core.Supplier.get(this._options.xiApiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.7",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: _body,
            responseType: "streaming",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ElevenLabsError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ElevenLabsError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ElevenLabsTimeoutError();
            case "unknown":
                throw new errors.ElevenLabsError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
