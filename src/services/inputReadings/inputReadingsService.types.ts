export type ReadingValues = { value1?: number | null; value2?: number | null };

export type CreateReadingsRequestPayload = {
  [deviceId: number]: ReadingValues;
};

export interface SetReadingPayload extends ReadingValues {
  id: number;
}
