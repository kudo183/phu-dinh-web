using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace phu_dinh_web.Helper
{
    public static class JsonConverter
    {
        public static T Deserialize<T>(string json)
        {
            var settings = new JsonSerializerSettings
            {
                DateFormatHandling = DateFormatHandling.MicrosoftDateFormat,
                DateTimeZoneHandling = DateTimeZoneHandling.Local
            };
            var result = Newtonsoft.Json.JsonConvert.DeserializeObject<T>(json, settings);
            return result;
        }
    }
}