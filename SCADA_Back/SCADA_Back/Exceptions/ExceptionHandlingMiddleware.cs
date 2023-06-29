namespace SCADA_Back.Exceptions
{
    public class ExceptionHandlingMiddleware
    {
        private readonly RequestDelegate _next;

        public ExceptionHandlingMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                var statusCode = GetStatusCode(ex);
                context.Response.StatusCode = statusCode;

                var errorMessage = GetErrorMessage(ex);
                await context.Response.WriteAsync(errorMessage);
            }
        }

        private int GetStatusCode(Exception ex)
        {
            if (ex is EntityNotFoundException)
            {
                return StatusCodes.Status404NotFound;
            }
            else if (ex is UnauthorizedAccessException)
            {
                return StatusCodes.Status401Unauthorized;
            }
            else
            {
                return StatusCodes.Status500InternalServerError;
            }
        }

        private string GetErrorMessage(Exception ex)
        {
            if (ex is EntityNotFoundException)
            {
                return "The requested resource was not found.";
            }
            else if (ex is UnauthorizedAccessException)
            {
                return "You are not authorized to access this resource.";
            }
            else
            {
                return "An error occurred. Please try again later.";
            }
        }

    }

}
