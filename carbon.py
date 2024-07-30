import dash
import dash_core_components as dcc
import dash_html_components as html
import pandas as pd
import plotly.express as px
import plotly.graph_objs as go
from dash.dependencies import Input, Output

# Leer el archivo CSV
df = pd.read_csv("emissions.csv")

# Inicializar la aplicación Dash
app = dash.Dash(__name__)

app.layout = html.Div([
    html.H1("Visualización de Emisiones de Carbono"),
    
    dcc.Dropdown(
        id='project-dropdown',
        options=[{'label': name, 'value': name} for name in df['project_name'].unique()],
        value=df['project_name'].unique()[0]
    ),
    
    html.Div([
        html.H2("Línea de Tiempo de Emisiones"),
        html.P("Este gráfico muestra las emisiones de carbono generadas por el proyecto a lo largo del tiempo."),
        dcc.Graph(id='emissions-timeline')
    ]),

    html.Div([
        html.H2("Emisiones Detalladas"),
        html.P("Este gráfico de barras muestra las emisiones detalladas en cada intervalo de tiempo."),
        dcc.Graph(id='emissions-bar')
    ]),

    html.Div([
        html.H2("Distribución del Consumo de Energía"),
        html.P("Este gráfico de pastel muestra cómo se distribuye el consumo de energía entre CPU, GPU y RAM."),
        dcc.Graph(id='energy-consumption-pie')
    ]),

    html.Div([
        html.H2("Consumo de Potencia"),
        html.P("Este gráfico de líneas muestra el consumo de potencia de la CPU, GPU y RAM a lo largo del tiempo."),
        dcc.Graph(id='power-consumption-line')
    ]),
])

@app.callback(
    [Output('emissions-timeline', 'figure'),
     Output('emissions-bar', 'figure'),
     Output('energy-consumption-pie', 'figure'),
     Output('power-consumption-line', 'figure')],
    [Input('project-dropdown', 'value')]
)
def update_graphs(selected_project):
    filtered_df = df[df['project_name'] == selected_project]

    # Línea de tiempo de emisiones
    fig_timeline = px.line(filtered_df, x='timestamp', y='emissions', title='Línea de Tiempo de Emisiones')

    # Gráfico de barras de emisiones
    fig_bar = px.bar(filtered_df, x='timestamp', y='emissions', title='Emisiones Detalladas')

    # Gráfico de pastel de consumo de energía
    energy_cols = ['cpu_energy', 'gpu_energy', 'ram_energy']
    energy_sum = filtered_df[energy_cols].sum()
    fig_pie = px.pie(names=energy_sum.index, values=energy_sum.values, title='Distribución del Consumo de Energía')

    # Línea de consumo de potencia
    fig_power = go.Figure()
    fig_power.add_trace(go.Scatter(x=filtered_df['timestamp'], y=filtered_df['cpu_power'], mode='lines', name='CPU Power'))
    fig_power.add_trace(go.Scatter(x=filtered_df['timestamp'], y=filtered_df['gpu_power'], mode='lines', name='GPU Power'))
    fig_power.add_trace(go.Scatter(x=filtered_df['timestamp'], y=filtered_df['ram_power'], mode='lines', name='RAM Power'))
    fig_power.update_layout(title='Consumo de Potencia')

    return fig_timeline, fig_bar, fig_pie, fig_power

if __name__ == '__main__':
    app.run_server(debug=True)
