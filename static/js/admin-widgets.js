function cp_select_img(b,d){var a;a=wp.media({title:"\u9009\u62e9\u56fe\u7247",button:{text:"\u63d2\u5165"},multiple:!1});a.on("select",function(){var c=a.state().get("selection").first().toJSON();jQuery("#"+b).val(c.url).trigger("change");jQuery("#"+d).attr("src",c.url);jQuery("#"+b).parent(".widget-inside").find("input[name\x3dsavewidget]").attr("disabled",!1).val("\u4fdd\u5b58")});a.open()};