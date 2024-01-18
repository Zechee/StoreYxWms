FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 5000

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["StoreYxWms/StoreYxWms.csproj", "StoreYxWms/"]
COPY ["Orm/Orm.csproj", "Orm/"]
COPY ["YL.Utils/YL.Utils.csproj", "YL.Utils/"]
COPY ["NetCore/YL.NetCore.csproj", "NetCore/"]
COPY ["IServices/IServices.csproj", "IServices/"]
COPY ["Dto/Dto.csproj", "Dto/"]
COPY ["Entity/Entity.csproj", "Entity/"]
COPY ["Repository/Repository.csproj", "Repository/"]
COPY ["IRepository/IRepository.csproj", "IRepository/"]
COPY ["Services/Services.csproj", "Services/"]
COPY ["NetCoreApp/YL.NetCoreApp.csproj", "NetCoreApp/"]
RUN dotnet restore "StoreYxWms/StoreYxWms.csproj"
COPY . .
WORKDIR "/src/StoreYxWms"
RUN dotnet build "StoreYxWms.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "StoreYxWms.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "StoreYxWms.dll"]