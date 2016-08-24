using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Routing.Template;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.DependencyInjection;

namespace Resume
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddRouting();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app)
        {
            app.Use(async (context, next) =>
            {
                await next?.Invoke();

                // If there's no available file and the request doesn't contain an extension, we're probably trying to access a page.
                // Rewrite request to use app root
                if (context.Response.StatusCode == 404 &&
                    !Path.HasExtension(context.Request.Path.Value))
                {
                    context.Request.Path = "/index.html"; // Put your Angular root page here
                    await next?.Invoke();
                }
            });

            app.UseDefaultFiles();
            app.UseStaticFiles();
        }
    }
}
