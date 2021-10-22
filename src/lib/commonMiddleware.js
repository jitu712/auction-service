import httpJsonBodyParser from '@middy/http-json-body-parser';
import httpErrorHandler from '@middy/http-error-handler';
import httpEventNormalizer from '@middy/http-event-normalizer';
import middy from '@middy/core';

export default handler => middy(handler).use([
    httpJsonBodyParser(),
    httpErrorHandler(),
    httpEventNormalizer()
])