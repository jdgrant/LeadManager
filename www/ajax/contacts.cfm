

<cfsetting enablecfoutputonly="yes">


<cfset querystring = #replace(replace(cgi.query_string,"%5B",""),"%5D","")#>
<cfset aQuery = ListToArray(querystring,"&")>
<cfloop index="i" from="1" to="#ArrayLen(aQuery)#">
	<cfset aPair = ListToArray(aQuery[i],"=")>
    <cfset "#aPair[1]#" = "#aPair[2]#">
</cfloop>

<cfparam name="queriessearch" default="">
<cfparam name="perPage" default="10">
<cfparam name="page" default="1">
<cfparam name="offset" default="0">

<cfset startrow = page * perPage - perPage+1>
<cfset endrow = startrow + perPage+1>



<cfquery datasource="#request.dsn#" name="get">
	SELECT  *
	from Contacts ct
    inner join Company cp on cp.companyid=ct.companyid
    
    <cfif Len(queriessearch)>
    WHERE firstname like '%#queriessearch#'
     or lastname like '%#queriessearch#'
     or companyName like '%#queriessearch#'
     or city like '%#queriessearch#'
     or state like '%#queriessearch#'
     or zip like '%#queriessearch#'
     or mid like '%#queriessearch#'
    </cfif>
	order by lastname
</cfquery>
<cfdump var="#get#">
<cfabort>

<cfset count = 0>
<cfcontent type="application/json">
<cfoutput>
 {
  "records": [
    <cfloop query="get"  ><cfset count=count+1>
    {
      "name": "#Replace("#get.lname#, #get.fname#","""","'")#",
      "organization": "#Replace(get.company,"""","'")#",
      "location":"#Replace("#get.city# #get.state# #get.zip#","""","'")#",
      "action":"<a href='frm_join.cfm?keyfield=#get.mid#&method=edit'>Edit</a> | <a href='frm_join.cfm?keyfield=#get.mid#&method=delete'>Delete</a>"
    }<cfif count neq get.recordcount>,</cfif>
    </cfloop>
  ],
  "queryRecordCount": #get.recordcount#,
  "totalRecordCount": #get.recordcount#
}
</cfoutput>



