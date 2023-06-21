#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["src/Delivery.Products.Api/Delivery.Products.Api.csproj", "src/Delivery.Products.Api/"]
COPY ["src/Delivery.Products.Infrastructure/Delivery.Products.Infrastructure.csproj", "src/Delivery.Products.Infrastructure/"]
COPY ["src/Delivery.Products.Domain/Delivery.Products.Domain.csproj", "src/Delivery.Products.Domain/"]
COPY ["src/Delivery.Products.Services/Delivery.Products.Services.csproj", "src/Delivery.Products.Services/"]
RUN dotnet restore "src/Delivery.Products.Api/Delivery.Products.Api.csproj"
COPY . .
WORKDIR "/src/src/Delivery.Products.Api"
RUN dotnet build "Delivery.Products.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Delivery.Products.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Delivery.Products.Api.dll"]