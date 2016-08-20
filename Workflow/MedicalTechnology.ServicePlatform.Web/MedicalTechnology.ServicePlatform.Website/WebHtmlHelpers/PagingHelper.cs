using MedicalTechnology.ServicePlatform.Website.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using System.Web.Mvc.Html;

namespace MedicalTechnology.ServicePlatform.Website.WebHtmlHelpers
{
    public static class PagingHelpers
    {
        public const int PageSize = 10;
        public const int PagingLength = 10;
        public static MvcHtmlString PageLinks(this HtmlHelper html, PageInfo pagingInfo, Func<int, string> pageUrl,string ImgFirstUrl,string ImgLastUrl)
        {
            StringBuilder result = new StringBuilder();
            TagBuilder divtagfooter = new TagBuilder("div");
            divtagfooter.AddCssClass("divtablefooter");
            TagBuilder ptag=new TagBuilder("p");
            ptag.InnerHtml = "共有" + pagingInfo.TotalItem.ToString() + "条记录";
            ptag.AddCssClass("divtablefooterLeft");
            divtagfooter.InnerHtml = ptag.ToString(TagRenderMode.Normal);
            TagBuilder divtagrightpaging = new TagBuilder("div");
            divtagrightpaging.AddCssClass("divtablefooterRight");
            TagBuilder ultag = new TagBuilder("ul");
            ultag.AddCssClass("list-pagination");
            int begin = 1;
            if (pagingInfo.CurentPage > PagingLength/2) //分割页面数
                begin = pagingInfo.CurentPage - PagingLength / 2;

            int length = pagingInfo.TotalPages;
            if ((pagingInfo.TotalPages - begin) >= PagingLength)//显示页面数长度
                length = PagingLength;
            else
                length = pagingInfo.TotalPages - begin+1;

            for (int i = begin; i < (length + begin); i++)
            {
                if (i == begin)
                {
                    TagBuilder litag = new TagBuilder("li");
                    litag.AddCssClass("arrow");
                    TagBuilder taganchor = new TagBuilder("a");
                    taganchor.MergeAttribute("href", "#");
                    int front=pagingInfo.CurentPage - 1;
                    taganchor.MergeAttribute("urlpara", pageUrl(front > 0 ? front : pagingInfo.CurentPage));
                    taganchor.MergeAttribute("name","pagelink");
                    TagBuilder tagImg = new TagBuilder("img");
                    tagImg.MergeAttribute("src", ImgFirstUrl);
                    taganchor.InnerHtml += tagImg.ToString(TagRenderMode.Normal);
                    litag.InnerHtml += taganchor.ToString(TagRenderMode.Normal);
                    TagBuilder litagname = new TagBuilder("li");
                    litagname.InnerHtml ="上一页";
                    ultag.InnerHtml += litag.ToString(TagRenderMode.Normal);
                    ultag.InnerHtml += litagname.ToString(TagRenderMode.Normal);
                }
                if ((i == pagingInfo.CurentPage) && (length > 1))
                {
                    TagBuilder litag = new TagBuilder("li");
                    litag.AddCssClass("current");
                    TagBuilder tag = new TagBuilder("a");
                    tag.MergeAttribute("href", "#");
                    tag.MergeAttribute("urlpara", pageUrl(i));
                    tag.MergeAttribute("name", "pagelink");
                    tag.InnerHtml = i.ToString();
                    litag.InnerHtml += tag.ToString(TagRenderMode.Normal);
                    ultag.InnerHtml += litag.ToString(TagRenderMode.Normal);
                }
                else
                {
                    TagBuilder litag = new TagBuilder("li");
                    TagBuilder tag = new TagBuilder("a");
                    tag.MergeAttribute("href", "#");
                    tag.MergeAttribute("urlpara", pageUrl(i));
                    tag.MergeAttribute("name", "pagelink");
                    tag.InnerHtml = i.ToString();
                    litag.InnerHtml += tag.ToString(TagRenderMode.Normal);
                    ultag.InnerHtml += litag.ToString(TagRenderMode.Normal);
                }
                if (i == (begin+length-1))
                {
                    TagBuilder litag = new TagBuilder("li");
                    litag.AddCssClass("arrow");
                    TagBuilder taganchor = new TagBuilder("a");
                    taganchor.MergeAttribute("href", "#");
                    int back=pagingInfo.CurentPage + 1;
                    taganchor.MergeAttribute("urlpara", pageUrl( back > pagingInfo.TotalPages?pagingInfo.TotalPages:back));
                    taganchor.MergeAttribute("name", "pagelink");
                    TagBuilder tagImg = new TagBuilder("img");
                    tagImg.MergeAttribute("src", ImgLastUrl);
                    taganchor.InnerHtml += tagImg.ToString(TagRenderMode.Normal);
                    litag.InnerHtml += taganchor.ToString(TagRenderMode.Normal);
                    TagBuilder litagname = new TagBuilder("li");
                    litagname.InnerHtml = "下一页";
                    ultag.InnerHtml += litagname.ToString(TagRenderMode.Normal);
                    ultag.InnerHtml += litag.ToString(TagRenderMode.Normal);
                }
                
            }
            divtagrightpaging.InnerHtml += ultag.ToString(TagRenderMode.Normal);
            divtagfooter.InnerHtml += divtagrightpaging.ToString(TagRenderMode.Normal);
            result.Append(divtagfooter.ToString());
            return MvcHtmlString.Create(result.ToString());
        }
        public static MvcHtmlString DisplayForMultiLabel<TModel,TValue>(this HtmlHelper<TModel> html,Expression<Func<TModel,TValue>> expression)
        {
            object o = expression.Compile().Invoke(html.ViewData.Model);
            if((o != null) && (o.GetType() == typeof(string)))
            {
                string str = o as string;
                str=str.Replace("\r\n", "<br/>");
                TagBuilder tagp = new TagBuilder("p");
                tagp.InnerHtml = str;
                return MvcHtmlString.Create(tagp.ToString());

            }
            return DisplayExtensions.DisplayFor(html, expression);
        }
    }
}
