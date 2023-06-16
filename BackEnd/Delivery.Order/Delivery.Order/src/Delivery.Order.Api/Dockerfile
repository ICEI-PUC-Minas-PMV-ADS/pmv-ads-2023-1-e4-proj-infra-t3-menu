#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["src/Delivery.Order.Api/Delivery.Order.Api.csproj", "src/Delivery.Order.Api/"]
COPY ["src/Delivery.Order.Domain/Delivery.Order.Domain.csproj", "src/Delivery.Order.Domain/"]
COPY ["src/Delivery.Order.Services/Delivery.Order.Services.csproj", "src/Delivery.Order.Services/"]
COPY ["src/Delivery.Order.Infrastructure/Delivery.Order.Infrastructure.csproj", "src/Delivery.Order.Infrastructure/"]
RUN dotnet restore "src/Delivery.Order.Api/Delivery.Order.Api.csproj"
COPY . .
WORKDIR "/src/Delivery.Order.Api"
RUN dotnet build "Delivery.Order.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Delivery.Order.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Delivery.Order.Api.dll"]