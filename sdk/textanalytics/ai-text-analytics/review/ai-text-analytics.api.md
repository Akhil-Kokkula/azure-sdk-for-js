## API Report File for "@azure/ai-text-analytics"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { AbortSignalLike } from '@azure/abort-controller';
import { AzureKeyCredential } from '@azure/core-auth';
import type { CancelOnProgress } from '@azure/core-lro';
import type { CommonClientOptions } from '@azure/core-client';
import type { KeyCredential } from '@azure/core-auth';
import type { OperationOptions } from '@azure/core-client';
import type { PagedAsyncIterableIterator } from '@azure/core-paging';
import type { PollerLike } from '@azure/core-lro';
import type { PollOperationState } from '@azure/core-lro';
import type { TokenCredential } from '@azure/core-auth';

// @public
export interface AnalysisPollOperationState<TResult> extends PollOperationState<TResult>, OperationMetadata {
}

// @public
export interface AnalyzeActionsOperationMetadata extends OperationMetadata {
    actionsFailedCount: number;
    actionsInProgressCount: number;
    actionsSucceededCount: number;
    displayName?: string;
}

// @public
export interface AnalyzeActionsOperationState extends AnalysisPollOperationState<PagedAnalyzeActionsResult>, AnalyzeActionsOperationMetadata {
}

// @public
export type AnalyzeActionsPollerLike = PollerLike<AnalyzeActionsOperationState, PagedAnalyzeActionsResult>;

// @public
export interface AnalyzeActionsResult {
    analyzeSentimentResults: AnalyzeSentimentActionResult[];
    extractKeyPhrasesResults: ExtractKeyPhrasesActionResult[];
    recognizeEntitiesResults: RecognizeCategorizedEntitiesActionResult[];
    recognizeLinkedEntitiesResults: RecognizeLinkedEntitiesActionResult[];
    recognizePiiEntitiesResults: RecognizePiiEntitiesActionResult[];
}

// @public
export type AnalyzeHealthcareEntitiesErrorResult = TextAnalyticsErrorResult;

// @public
export type AnalyzeHealthcareEntitiesPollerLike = PollerLikeWithCancellation<AnalyzeHealthcareOperationState, PagedAnalyzeHealthcareEntitiesResult>;

// @public
export type AnalyzeHealthcareEntitiesResult = AnalyzeHealthcareEntitiesSuccessResult | AnalyzeHealthcareEntitiesErrorResult;

// @public
export interface AnalyzeHealthcareEntitiesResultArray extends Array<AnalyzeHealthcareEntitiesResult> {
}

// @public
export interface AnalyzeHealthcareEntitiesSuccessResult extends TextAnalyticsSuccessResult {
    entities: HealthcareEntity[];
    entityRelations: HealthcareEntityRelation[];
}

// @public
export interface AnalyzeHealthcareOperationState extends AnalysisPollOperationState<PagedAnalyzeHealthcareEntitiesResult> {
}

// @public
export interface AnalyzeSentimentAction extends TextAnalyticsAction {
    disableServiceLogs?: boolean;
    includeOpinionMining?: boolean;
    stringIndexType?: StringIndexType;
}

// @public
export type AnalyzeSentimentActionErrorResult = TextAnalyticsActionErrorResult;

// @public
export type AnalyzeSentimentActionResult = AnalyzeSentimentActionSuccessResult | AnalyzeSentimentActionErrorResult;

// @public
export interface AnalyzeSentimentActionSuccessResult extends TextAnalyticsActionSuccessState {
    results: AnalyzeSentimentResultArray;
}

// @public
export type AnalyzeSentimentErrorResult = TextAnalyticsErrorResult;

// @public
export interface AnalyzeSentimentOptions extends TextAnalyticsOperationOptions {
    includeOpinionMining?: boolean;
    stringIndexType?: StringIndexType;
}

// @public
export type AnalyzeSentimentResult = AnalyzeSentimentSuccessResult | AnalyzeSentimentErrorResult;

// @public
export interface AnalyzeSentimentResultArray extends Array<AnalyzeSentimentResult> {
    modelVersion: string;
    statistics?: TextDocumentBatchStatistics;
}

// @public
export interface AnalyzeSentimentSuccessResult extends TextAnalyticsSuccessResult {
    confidenceScores: SentimentConfidenceScores;
    sentences: SentenceSentiment[];
    sentiment: DocumentSentimentLabel;
}

// @public
export interface AssessmentSentiment extends SentenceAssessment {
}

export { AzureKeyCredential }

// @public
export interface BeginAnalyzeActionsOptions extends OperationOptions {
    displayName?: string;
    includeStatistics?: boolean;
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface BeginAnalyzeHealthcareEntitiesOptions extends TextAnalyticsOperationOptions {
    resumeFrom?: string;
    stringIndexType?: StringIndexType;
    updateIntervalInMs?: number;
}

// @public
export interface CategorizedEntity extends Entity {
}

// @public
export interface DetectedLanguage {
    confidenceScore: number;
    iso6391Name: string;
    name: string;
}

// @public
export type DetectLanguageErrorResult = TextAnalyticsErrorResult;

// @public
export interface DetectLanguageInput {
    // (undocumented)
    countryHint?: string;
    id: string;
    // (undocumented)
    text: string;
}

// @public
export interface DetectLanguageOptions extends TextAnalyticsOperationOptions {
}

// @public
export type DetectLanguageResult = DetectLanguageSuccessResult | DetectLanguageErrorResult;

// @public
export interface DetectLanguageResultArray extends Array<DetectLanguageResult> {
    modelVersion: string;
    statistics?: TextDocumentBatchStatistics;
}

// @public
export interface DetectLanguageSuccessResult extends TextAnalyticsSuccessResult {
    readonly primaryLanguage: DetectedLanguage;
}

// @public
export type DocumentSentimentLabel = "positive" | "neutral" | "negative" | "mixed";

// @public
export interface Entity {
    category: string;
    confidenceScore: number;
    length: number;
    offset: number;
    subCategory?: string;
    text: string;
}

// @public (undocumented)
export interface EntityAssertion {
    association?: EntityAssociation;
    certainty?: EntityCertainty;
    conditionality?: EntityConditionality;
}

// @public
export type EntityAssociation = "subject" | "other";

// @public
export type EntityCertainty = "positive" | "positivePossible" | "neutralPossible" | "negativePossible" | "negative";

// @public
export type EntityConditionality = "hypothetical" | "conditional";

// @public
export interface EntityDataSource {
    entityId: string;
    name: string;
}

// @public
export type ErrorCode = ErrorCodeValue | InnerErrorCodeValue;

// @public
export type ErrorCodeValue = string;

// @public
export interface ExtractKeyPhrasesAction extends TextAnalyticsAction {
    disableServiceLogs?: boolean;
}

// @public
export type ExtractKeyPhrasesActionErrorResult = TextAnalyticsActionErrorResult;

// @public
export type ExtractKeyPhrasesActionResult = ExtractKeyPhrasesActionSuccessResult | ExtractKeyPhrasesActionErrorResult;

// @public
export interface ExtractKeyPhrasesActionSuccessResult extends TextAnalyticsActionSuccessState {
    results: ExtractKeyPhrasesResultArray;
}

// @public
export type ExtractKeyPhrasesErrorResult = TextAnalyticsErrorResult;

// @public
export interface ExtractKeyPhrasesOptions extends TextAnalyticsOperationOptions {
}

// @public
export type ExtractKeyPhrasesResult = ExtractKeyPhrasesSuccessResult | ExtractKeyPhrasesErrorResult;

// @public
export interface ExtractKeyPhrasesResultArray extends Array<ExtractKeyPhrasesResult> {
    modelVersion: string;
    statistics?: TextDocumentBatchStatistics;
}

// @public
export interface ExtractKeyPhrasesSuccessResult extends TextAnalyticsSuccessResult {
    keyPhrases: string[];
}

// @public
export interface HealthcareEntity extends Entity {
    assertion?: EntityAssertion;
    category: HealthcareEntityCategory;
    dataSources: EntityDataSource[];
    normalizedText?: string;
}

// @public
export type HealthcareEntityCategory = string;

// @public
export interface HealthcareEntityRelation {
    relationType: HealthcareEntityRelationType;
    roles: HealthcareEntityRelationRole[];
}

// @public
export interface HealthcareEntityRelationRole {
    entity: HealthcareEntity;
    name: HealthcareEntityRelationRoleType;
}

// @public
export type HealthcareEntityRelationRoleType = string;

// @public
export type HealthcareEntityRelationType = string;

// @public
export type InnerErrorCodeValue = string;

// @public
export enum KnownHealthcareEntityCategory {
    AdministrativeEvent = "ADMINISTRATIVE_EVENT",
    AGE = "AGE",
    BodyStructure = "BODY_STRUCTURE",
    CareEnvironment = "CARE_ENVIRONMENT",
    ConditionQualifier = "CONDITION_QUALIFIER",
    Date = "DATE",
    Diagnosis = "DIAGNOSIS",
    Direction = "DIRECTION",
    Dosage = "DOSAGE",
    ExaminationName = "EXAMINATION_NAME",
    FamilyRelation = "FAMILY_RELATION",
    Frequency = "FREQUENCY",
    Gender = "GENDER",
    GeneORProtein = "GENE_OR_PROTEIN",
    HealthcareProfession = "HEALTHCARE_PROFESSION",
    MeasurementUnit = "MEASUREMENT_UNIT",
    MeasurementValue = "MEASUREMENT_VALUE",
    MedicationClass = "MEDICATION_CLASS",
    MedicationForm = "MEDICATION_FORM",
    MedicationName = "MEDICATION_NAME",
    MedicationRoute = "MEDICATION_ROUTE",
    RelationalOperator = "RELATIONAL_OPERATOR",
    SymptomORSign = "SYMPTOM_OR_SIGN",
    Time = "TIME",
    TreatmentName = "TREATMENT_NAME",
    Variant = "VARIANT"
}

// @public
export enum KnownInnerErrorCodeValue {
    EmptyRequest = "EmptyRequest",
    InvalidCountryHint = "InvalidCountryHint",
    InvalidDocument = "InvalidDocument",
    InvalidDocumentBatch = "InvalidDocumentBatch",
    InvalidParameterValue = "InvalidParameterValue",
    InvalidRequestBodyFormat = "InvalidRequestBodyFormat",
    MissingInputRecords = "MissingInputRecords",
    ModelVersionIncorrect = "ModelVersionIncorrect",
    UnsupportedLanguageCode = "UnsupportedLanguageCode"
}

// @public
export enum KnownWarningCode {
    DocumentTruncated = "DocumentTruncated",
    LongWordsInDocument = "LongWordsInDocument"
}

// @public
export interface LinkedEntity {
    bingEntitySearchApiId?: string;
    dataSource: string;
    dataSourceEntityId?: string;
    language: string;
    matches: Match[];
    name: string;
    url: string;
}

// @public
export interface Match {
    confidenceScore: number;
    length: number;
    offset: number;
    text: string;
}

// @public
export interface OperationMetadata {
    createdOn: Date;
    expiresOn?: Date;
    lastModifiedOn: Date;
    operationId: string;
    status: TextAnalyticsOperationStatus;
}

// @public
export interface Opinion {
    assessments: AssessmentSentiment[];
    target: TargetSentiment;
}

// @public
export interface PagedAnalyzeActionsResult extends PagedAsyncIterableAnalyzeActionsResult {
}

// @public
export interface PagedAnalyzeHealthcareEntitiesResult extends PagedAsyncIterableAnalyzeHealthcareEntitiesResult {
    modelVersion: string;
    statistics?: TextDocumentBatchStatistics;
}

// @public
export type PagedAsyncIterableAnalyzeActionsResult = PagedAsyncIterableIterator<AnalyzeActionsResult, AnalyzeActionsResult>;

// @public
export type PagedAsyncIterableAnalyzeHealthcareEntitiesResult = PagedAsyncIterableIterator<AnalyzeHealthcareEntitiesResult, AnalyzeHealthcareEntitiesResultArray>;

// @public
export interface PiiEntity extends Entity {
}

// @public
export type PiiEntityCategory = string;

// @public
export enum PiiEntityDomain {
    // (undocumented)
    PROTECTED_HEALTH_INFORMATION = "PHI"
}

// @public
export interface PollerLikeWithCancellation<TState extends PollOperationState<TResult>, TResult> {
    cancelOperation(options?: {
        abortSignal?: AbortSignalLike;
    }): Promise<void>;
    getOperationState(): TState;
    getResult(): TResult | undefined;
    isDone(): boolean;
    isStopped(): boolean;
    onProgress(callback: (state: TState) => void): CancelOnProgress;
    poll(options?: {
        abortSignal?: AbortSignalLike;
    }): Promise<void>;
    pollUntilDone(): Promise<TResult>;
    stopPolling(): void;
    toString(): string;
}

// @public
export interface RecognizeCategorizedEntitiesAction extends TextAnalyticsAction {
    disableServiceLogs?: boolean;
    stringIndexType?: StringIndexType;
}

// @public
export type RecognizeCategorizedEntitiesActionErrorResult = TextAnalyticsActionErrorResult;

// @public
export type RecognizeCategorizedEntitiesActionResult = RecognizeCategorizedEntitiesActionSuccessResult | RecognizeCategorizedEntitiesActionErrorResult;

// @public
export interface RecognizeCategorizedEntitiesActionSuccessResult extends TextAnalyticsActionSuccessState {
    results: RecognizeCategorizedEntitiesResultArray;
}

// @public
export type RecognizeCategorizedEntitiesErrorResult = TextAnalyticsErrorResult;

// @public
export interface RecognizeCategorizedEntitiesOptions extends TextAnalyticsOperationOptions {
    stringIndexType?: StringIndexType;
}

// @public
export type RecognizeCategorizedEntitiesResult = RecognizeCategorizedEntitiesSuccessResult | RecognizeCategorizedEntitiesErrorResult;

// @public
export interface RecognizeCategorizedEntitiesResultArray extends Array<RecognizeCategorizedEntitiesResult> {
    modelVersion: string;
    statistics?: TextDocumentBatchStatistics;
}

// @public
export interface RecognizeCategorizedEntitiesSuccessResult extends TextAnalyticsSuccessResult {
    readonly entities: CategorizedEntity[];
}

// @public
export interface RecognizeLinkedEntitiesAction extends TextAnalyticsAction {
    disableServiceLogs?: boolean;
    stringIndexType?: StringIndexType;
}

// @public
export type RecognizeLinkedEntitiesActionErrorResult = TextAnalyticsActionErrorResult;

// @public
export type RecognizeLinkedEntitiesActionResult = RecognizeLinkedEntitiesActionSuccessResult | RecognizeLinkedEntitiesActionErrorResult;

// @public
export interface RecognizeLinkedEntitiesActionSuccessResult extends TextAnalyticsActionSuccessState {
    results: RecognizeLinkedEntitiesResultArray;
}

// @public
export type RecognizeLinkedEntitiesErrorResult = TextAnalyticsErrorResult;

// @public
export interface RecognizeLinkedEntitiesOptions extends TextAnalyticsOperationOptions {
    stringIndexType?: StringIndexType;
}

// @public
export type RecognizeLinkedEntitiesResult = RecognizeLinkedEntitiesSuccessResult | RecognizeLinkedEntitiesErrorResult;

// @public
export interface RecognizeLinkedEntitiesResultArray extends Array<RecognizeLinkedEntitiesResult> {
    modelVersion: string;
    statistics?: TextDocumentBatchStatistics;
}

// @public
export interface RecognizeLinkedEntitiesSuccessResult extends TextAnalyticsSuccessResult {
    readonly entities: LinkedEntity[];
}

// @public
export interface RecognizePiiEntitiesAction extends TextAnalyticsAction {
    categoriesFilter?: PiiEntityCategory[];
    disableServiceLogs?: boolean;
    domainFilter?: PiiEntityDomain;
    stringIndexType?: StringIndexType;
}

// @public
export type RecognizePiiEntitiesActionErrorResult = TextAnalyticsActionErrorResult;

// @public
export type RecognizePiiEntitiesActionResult = RecognizePiiEntitiesActionSuccessResult | RecognizePiiEntitiesActionErrorResult;

// @public
export interface RecognizePiiEntitiesActionSuccessResult extends TextAnalyticsActionSuccessState {
    results: RecognizePiiEntitiesResultArray;
}

// @public
export type RecognizePiiEntitiesErrorResult = TextAnalyticsErrorResult;

// @public
export interface RecognizePiiEntitiesOptions extends TextAnalyticsOperationOptions {
    categoriesFilter?: PiiEntityCategory[];
    domainFilter?: PiiEntityDomain;
    stringIndexType?: StringIndexType;
}

// @public
export type RecognizePiiEntitiesResult = RecognizePiiEntitiesSuccessResult | RecognizePiiEntitiesErrorResult;

// @public
export interface RecognizePiiEntitiesResultArray extends Array<RecognizePiiEntitiesResult> {
    modelVersion: string;
    statistics?: TextDocumentBatchStatistics;
}

// @public
export interface RecognizePiiEntitiesSuccessResult extends TextAnalyticsSuccessResult {
    readonly entities: PiiEntity[];
    redactedText: string;
}

// @public (undocumented)
export interface SentenceAssessment {
    confidenceScores: TargetConfidenceScoreLabel;
    isNegated: boolean;
    length: number;
    offset: number;
    sentiment: TokenSentimentValue;
    text: string;
}

// @public
export interface SentenceSentiment {
    confidenceScores: SentimentConfidenceScores;
    length: number;
    offset: number;
    opinions: Opinion[];
    sentiment: SentenceSentimentLabel;
    text: string;
}

// @public
export type SentenceSentimentLabel = "positive" | "neutral" | "negative";

// @public
export interface SentimentConfidenceScores {
    // (undocumented)
    negative: number;
    // (undocumented)
    neutral: number;
    // (undocumented)
    positive: number;
}

// @public
export type StringIndexType = "TextElement_v8" | "UnicodeCodePoint" | "Utf16CodeUnit";

// @public
export interface TargetConfidenceScoreLabel {
    // (undocumented)
    negative: number;
    // (undocumented)
    positive: number;
}

// @public
export interface TargetSentiment {
    confidenceScores: TargetConfidenceScoreLabel;
    length: number;
    offset: number;
    sentiment: TokenSentimentValue;
    text: string;
}

// @public
export interface TextAnalyticsAction {
    actionName?: string;
    modelVersion?: string;
}

// @public
export interface TextAnalyticsActionErrorResult {
    readonly error: TextAnalyticsError;
    readonly failedOn: Date;
}

// @public
export interface TextAnalyticsActions {
    analyzeSentimentActions?: AnalyzeSentimentAction[];
    extractKeyPhrasesActions?: ExtractKeyPhrasesAction[];
    recognizeEntitiesActions?: RecognizeCategorizedEntitiesAction[];
    recognizeLinkedEntitiesActions?: RecognizeLinkedEntitiesAction[];
    recognizePiiEntitiesActions?: RecognizePiiEntitiesAction[];
}

// @public
export interface TextAnalyticsActionSuccessState {
    readonly completedOn: Date;
    readonly error?: undefined;
}

// @public
export class TextAnalyticsClient {
    constructor(endpointUrl: string, credential: TokenCredential | KeyCredential, options?: TextAnalyticsClientOptions);
    analyzeSentiment(documents: string[], language?: string, options?: AnalyzeSentimentOptions): Promise<AnalyzeSentimentResultArray>;
    analyzeSentiment(documents: TextDocumentInput[], options?: AnalyzeSentimentOptions): Promise<AnalyzeSentimentResultArray>;
    beginAnalyzeActions(documents: string[], actions: TextAnalyticsActions, language?: string, options?: BeginAnalyzeActionsOptions): Promise<AnalyzeActionsPollerLike>;
    beginAnalyzeActions(documents: TextDocumentInput[], actions: TextAnalyticsActions, options?: BeginAnalyzeActionsOptions): Promise<AnalyzeActionsPollerLike>;
    beginAnalyzeHealthcareEntities(documents: string[], language?: string, options?: BeginAnalyzeHealthcareEntitiesOptions): Promise<AnalyzeHealthcareEntitiesPollerLike>;
    beginAnalyzeHealthcareEntities(documents: TextDocumentInput[], options?: BeginAnalyzeHealthcareEntitiesOptions): Promise<AnalyzeHealthcareEntitiesPollerLike>;
    defaultCountryHint: string;
    defaultLanguage: string;
    detectLanguage(documents: string[], countryHint?: string, options?: DetectLanguageOptions): Promise<DetectLanguageResultArray>;
    detectLanguage(documents: DetectLanguageInput[], options?: DetectLanguageOptions): Promise<DetectLanguageResultArray>;
    readonly endpointUrl: string;
    extractKeyPhrases(documents: string[], language?: string, options?: ExtractKeyPhrasesOptions): Promise<ExtractKeyPhrasesResultArray>;
    extractKeyPhrases(documents: TextDocumentInput[], options?: ExtractKeyPhrasesOptions): Promise<ExtractKeyPhrasesResultArray>;
    recognizeEntities(documents: string[], language?: string, options?: RecognizeCategorizedEntitiesOptions): Promise<RecognizeCategorizedEntitiesResultArray>;
    recognizeEntities(documents: TextDocumentInput[], options?: RecognizeCategorizedEntitiesOptions): Promise<RecognizeCategorizedEntitiesResultArray>;
    recognizeLinkedEntities(documents: string[], language?: string, options?: RecognizeLinkedEntitiesOptions): Promise<RecognizeLinkedEntitiesResultArray>;
    recognizeLinkedEntities(documents: TextDocumentInput[], options?: RecognizeLinkedEntitiesOptions): Promise<RecognizeLinkedEntitiesResultArray>;
    recognizePiiEntities(inputs: string[], language?: string, options?: RecognizePiiEntitiesOptions): Promise<RecognizePiiEntitiesResultArray>;
    recognizePiiEntities(inputs: TextDocumentInput[], options?: RecognizePiiEntitiesOptions): Promise<RecognizePiiEntitiesResultArray>;
}

// @public
export interface TextAnalyticsClientOptions extends CommonClientOptions {
    defaultCountryHint?: string;
    defaultLanguage?: string;
}

// @public
export interface TextAnalyticsError {
    readonly code: ErrorCode;
    readonly message: string;
    readonly target?: string;
}

// @public
export interface TextAnalyticsErrorResult {
    readonly error: TextAnalyticsError;
    readonly id: string;
}

// @public
export interface TextAnalyticsOperationOptions extends OperationOptions {
    disableServiceLogs?: boolean;
    includeStatistics?: boolean;
    modelVersion?: string;
}

// @public
export type TextAnalyticsOperationStatus = "notStarted" | "running" | "succeeded" | "failed" | "rejected" | "cancelled" | "cancelling";

// @public
export interface TextAnalyticsSuccessResult {
    readonly error?: undefined;
    readonly id: string;
    readonly statistics?: TextDocumentStatistics;
    readonly warnings: TextAnalyticsWarning[];
}

// @public
export interface TextAnalyticsWarning {
    code: WarningCode;
    message: string;
}

// @public
export interface TextDocumentBatchStatistics {
    documentCount: number;
    erroneousDocumentCount: number;
    transactionCount: number;
    validDocumentCount: number;
}

// @public
export interface TextDocumentInput {
    id: string;
    language?: string;
    text: string;
}

// @public
export interface TextDocumentStatistics {
    characterCount: number;
    transactionCount: number;
}

// @public
export type TokenSentimentValue = "positive" | "mixed" | "negative";

// @public
export type WarningCode = string;

// (No @packageDocumentation comment for this package)

```
